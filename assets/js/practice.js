/**
 * Skill practice runner. Questions arrive learner-safe (option tokens, no answer key);
 * each answer is graded by the server, which returns feedback and the next question.
 * Guests practise with the same pseudonymous credential as inline checks.
 */
(function () {
  'use strict';
  var config = window.ohmylmsPractice || {};
  var i18n = Object.assign({}, config.i18n || {}, config.practiceI18n || {});
  var root = document.querySelector('.ohmylms-practice');
  if (!root) return;
  var stage = root.querySelector('.ohmylms-practice-stage');
  var session = null;
  var token = null;

  function request(path, body) {
    var headers = { 'Content-Type': 'application/json' };
    if (config.nonce) headers['X-WP-Nonce'] = config.nonce;
    if (token) headers['X-OhMyLMS-Guest'] = token;
    return fetch(config.root + path, { method: 'POST', credentials: 'same-origin', headers: headers, body: JSON.stringify(body || {}) }).then(function (response) {
      return response.json().then(function (data) {
        if (!response.ok) throw new Error((data && data.message) || i18n.error);
        return data;
      });
    });
  }
  function el(tag, attributes, children) {
    var node = document.createElement(tag);
    Object.keys(attributes || {}).forEach(function (key) {
      if (key === 'text') node.textContent = attributes[key];
      else if (key === 'html') node.innerHTML = attributes[key];
      else node.setAttribute(key, attributes[key]);
    });
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }
  function format(template) {
    var args = Array.prototype.slice.call(arguments, 1);
    var index = 0;
    return String(template || '').replace(/%(\d\$)?[ds]/g, function (match, position) {
      return String(position ? args[parseInt(position, 10) - 1] : args[index++]);
    });
  }

  /** Build answer inputs for a learner-safe question view; returns a collector. */
  function renderInputs(container, view) {
    var type = view.settings && view.settings.type;
    var name = 'q' + view.item_id;
    if (type === 'fill-in-the-blank' && view.inline_blanks) {
      var blanks = [];
      view.inline_blanks.forEach(function (part) {
        if (Object.prototype.hasOwnProperty.call(part, 'text')) {
          container.appendChild(el('span', { html: part.text }));
        } else {
          var input = el('input', { type: 'text', class: 'ohmylms-text-input', size: part.length, 'aria-label': 'Blank ' + (blanks.length + 1) });
          input.style.cssText = 'display:inline-block;min-width:0;max-width:100%;box-sizing:border-box;font:inherit;letter-spacing:inherit;padding:0.2em 0.5em;width:calc(' + part.length + 'ch + 1.2em)';
          blanks.push(input);
          container.appendChild(input);
        }
      });
      return function () { return blanks.map(function (input) { return input.value; }); };
    }
    if (type === 'single-choice' || type === 'true-false' || type === 'multiple-choice') {
      var kind = type === 'multiple-choice' ? 'checkbox' : 'radio';
      view.questions.forEach(function (option) {
        var input = el('input', { type: kind, name: name, value: option.id });
        container.appendChild(el('label', { class: 'ohmylms-practice-option' }, [input, document.createTextNode(' ' + option.answer)]));
      });
      return function () {
        return Array.prototype.map.call(container.querySelectorAll('input:checked'), function (input) {
          return input.value;
        });
      };
    }
    if (type === 'reorder') {
      var list = el('ol', { class: 'ohmylms-practice-reorder' });
      view.questions.forEach(function (option) {
        var up = el('button', { type: 'button', 'aria-label': '↑', text: '↑' });
        var down = el('button', { type: 'button', 'aria-label': '↓', text: '↓' });
        var item = el('li', { 'data-token': option.id }, [document.createTextNode(option.answer + ' '), up, down]);
        up.addEventListener('click', function () {
          if (item.previousElementSibling) list.insertBefore(item, item.previousElementSibling);
        });
        down.addEventListener('click', function () {
          if (item.nextElementSibling) list.insertBefore(item.nextElementSibling, item);
        });
        list.appendChild(item);
      });
      container.appendChild(list);
      return function () {
        return Array.prototype.map.call(list.children, function (item) {
          return item.getAttribute('data-token');
        });
      };
    }
    if (type === 'matching') {
      var selects = [];
      (view.definitions || []).forEach(function (definition) {
        var select = el('select', { 'data-definition': definition.id }, [el('option', { value: '', text: '—' })]);
        view.questions.forEach(function (option) {
          select.appendChild(el('option', { value: option.id, text: option.answer }));
        });
        selects.push(select);
        container.appendChild(el('label', { class: 'ohmylms-practice-match' }, [document.createTextNode((definition.matching_data && definition.matching_data.label) || '' ), select]));
      });
      return function () {
        var answer = {};
        selects.forEach(function (select) {
          if (select.value) answer[select.getAttribute('data-definition')] = select.value;
        });
        return answer;
      };
    }
    if (type === 'structured') {
      var fields = {};
      ((view.settings && view.settings.parts) || []).forEach(function (part) {
        var field = el('input', { type: 'text', class: 'ohmylms-text-input', inputmode: part.kind === 'numerical' ? 'decimal' : 'text', 'aria-label': part.label });
        fields[part.id] = field;
        container.appendChild(
          el('div', { class: 'ohmylms-structured-part' }, [
            el('p', { html: '<strong>' + (part.label || '') + '</strong> ' + (part.prompt || '') }),
            field,
            part.unit ? el('span', { class: 'ohmylms-numerical-unit', text: ' ' + part.unit }) : null,
          ]),
        );
      });
      return function () {
        var answer = {};
        Object.keys(fields).forEach(function (id) {
          answer[id] = fields[id].value;
        });
        return answer;
      };
    }
    var count = type === 'fill-in-the-blank' || type === 'statement' ? Math.max(1, view.questions.length) : 1;
    var inputs = [];
    for (var i = 0; i < count; i++) {
      var input = el('input', { type: 'text', class: 'ohmylms-text-input', inputmode: type === 'numerical' ? 'decimal' : 'text', 'aria-label': view.name });
      inputs.push(input);
      container.appendChild(input);
    }
    if (view.settings && view.settings.unit) container.appendChild(el('span', { class: 'ohmylms-numerical-unit', text: ' ' + view.settings.unit }));
    return function () {
      return inputs.map(function (input) {
        return input.value;
      });
    };
  }

  function renderQuestion(state) {
    stage.innerHTML = '';
    var view = state.current;
    var progress = el('p', { class: 'ohmylms-practice-progress', text: format(i18n.progress, state.answered + 1, state.item_limit) });
    var form = el('form', { class: 'ohmylms-practice-question' });
    if (!view.inline_blanks) form.appendChild(el('p', { class: 'the-question', html: view.name }));
    if (view.description) form.appendChild(el('div', { html: view.description }));
    if (view.image_src) form.appendChild(el('img', { src: view.image_src, alt: '' }));
    var inputs = el('div', { class: 'ohmylms-practice-inputs' });
    form.appendChild(inputs);
    var collect = renderInputs(inputs, view);
    var feedback = el('div', { class: 'ohmylms-practice-feedback', 'aria-live': 'polite' });
    var check = el('button', { type: 'submit', class: 'ohmylms-button', text: i18n.check });
    form.appendChild(check);
    if (view.has_hint) {
      var hint = el('button', { type: 'button', class: 'ohmylms-button outline', text: i18n.hint });
      hint.addEventListener('click', function () {
        hint.disabled = true;
        request('practice/sessions/' + state.uuid + '/hint', { item_id: view.item_id }).then(function (result) {
          var box = el('div', { class: 'ohmylms-practice-hint', html: result.hint || '' });
          (result.lessons || []).forEach(function (lesson) {
            box.appendChild(el('a', { href: lesson.url, text: ' ' + lesson.title }));
          });
          feedback.appendChild(box);
        });
      });
      form.appendChild(hint);
    }
    form.appendChild(feedback);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      check.disabled = true;
      request('practice/sessions/' + state.uuid + '/answer', { item_id: view.item_id, response: collect() })
        .then(function (result) {
          if (window.ohmylmsRememberPractice) window.ohmylmsRememberPractice(result);
          feedback.appendChild(el('p', { class: result.correct ? 'ohmylms-inline-correct' : 'ohmylms-inline-incorrect', text: result.correct ? i18n.correct : i18n.incorrect }));
          (result.feedback.correct_options || []).forEach(function (correct) {
            var input = form.querySelector('input[value="' + correct + '"]');
            if (input && input.parentNode) input.parentNode.classList.add('ohmylms-inline-answer');
          });
          if (!result.correct && result.feedback.expected && result.feedback.expected.length) {
            feedback.appendChild(el('p', { text: i18n.answer + ' ' + result.feedback.expected.join(', ') }));
          }
          if (result.feedback.explanation) feedback.appendChild(el('div', { html: result.feedback.explanation }));
          if (window.ohmylmsTypeset) window.ohmylmsTypeset(feedback);
          var next = el('button', { type: 'button', class: 'ohmylms-button', text: i18n.next });
          next.addEventListener('click', function () {
            show(result.session);
          });
          feedback.appendChild(next);
          next.focus();
        })
        .catch(function (error) {
          feedback.textContent = error.message;
          check.disabled = false;
        });
    });
    stage.appendChild(progress);
    stage.appendChild(form);
    if (window.ohmylmsTypeset) window.ohmylmsTypeset(stage);
  }

  function renderSummary(state) {
    stage.innerHTML = '';
    stage.appendChild(el('p', { class: 'ohmylms-practice-summary', text: format(i18n.done, state.correct, state.answered) }));
    if (state.notice) stage.appendChild(el('p', { class: 'ohmylms-practice-notice', text: state.notice }));
    (state.recommendations || []).forEach(function (item) {
      if (!item.skill) return;
      var line = el('p', {}, [el('strong', { text: item.skill.name }), document.createTextNode(' — ' + item.message + ' ')]);
      (item.lessons || []).forEach(function (lesson) {
        line.appendChild(el('a', { href: lesson.url, text: lesson.title + ' ' }));
      });
      stage.appendChild(line);
    });
    if (!config.loggedIn) {
      stage.appendChild(el('p', {}, [document.createTextNode(i18n.save + ' '), el('a', { href: config.loginUrl, text: i18n.login })]));
    }
    var again = el('button', { type: 'button', class: 'ohmylms-button', text: i18n.again });
    again.addEventListener('click', start);
    stage.appendChild(again);
  }

  function show(state) {
    session = state;
    if (state.status === 'active' && state.current) renderQuestion(state);
    else renderSummary(state);
  }

  function start() {
    stage.textContent = '…';
    var ready = window.ohmylmsGuestToken ? window.ohmylmsGuestToken() : Promise.resolve(null);
    ready
      .then(function (guest) {
        token = guest;
        return request('practice/sessions', { term_id: Number(root.dataset.skill), item_limit: Number(root.dataset.items) || 10 });
      })
      .then(show)
      .catch(function (error) {
        stage.textContent = error.message || i18n.empty;
      });
  }

  var button = el('button', { type: 'button', class: 'ohmylms-button', text: i18n.start });
  button.addEventListener('click', start);
  stage.appendChild(button);
})();
