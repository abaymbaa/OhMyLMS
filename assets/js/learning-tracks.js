(function () {
  'use strict';
  var config = window.ohmylmsTracks || {};
  var live;

  // One persistent live region, because the section it reports on is replaced after each change.
  function announce(text) {
    if (!live) {
      live = document.createElement('div');
      live.setAttribute('role', 'status');
      live.setAttribute('aria-live', 'polite');
      live.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
      document.body.appendChild(live);
    }
    live.textContent = '';
    window.setTimeout(function () { live.textContent = text; }, 50);
  }

  function visibleStatus(text) {
    var node = document.querySelector('#ohmylms-tracks .ohmylms-tracks-status');
    if (node) node.textContent = text;
  }

  function request(method, id) {
    var options = {
      method: method,
      credentials: 'same-origin',
      headers: { 'X-WP-Nonce': config.nonce, 'Content-Type': 'application/json' }
    };
    if (method === 'POST') options.body = '{}';
    return fetch(config.root + 'tracks/' + encodeURIComponent(id) + '/follow', options).then(function (response) {
      return response.json().then(function (data) {
        if (!response.ok) throw new Error(data.message || config.error);
        return data;
      });
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-track-follow], [data-track-unfollow]');
    if (!button || button.disabled) return;
    var follow = button.hasAttribute('data-track-follow');
    var id = button.getAttribute(follow ? 'data-track-follow' : 'data-track-unfollow');
    button.disabled = true;
    request(follow ? 'POST' : 'DELETE', id).then(function (data) {
      var current = document.getElementById('ohmylms-tracks');
      var holder = document.createElement('div');
      holder.innerHTML = data.html || '';
      var next = holder.firstElementChild;
      if (current && next) {
        current.replaceWith(next);
        next.focus();
      } else if (current) {
        current.innerHTML = '';
      }
      announce(follow ? config.added : config.removed);
    }).catch(function (error) {
      button.disabled = false;
      var message = (error && error.message) || config.error;
      visibleStatus(message);
      announce(message);
    });
  });
})();
