/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createTaxonomyModal(readRuntime) {
  return function TaxonomyModal(props) {
    const { EY, I: Controls, Pf, RY, React, SY, _Y, b: I18n, g: ReactHooks, wY } = readRuntime();
    var t = props.isOpen,
      n = props.onClose,
      r = props.onSubmit,
      a = props.title,
      o = props.type,
      i = void 0 === o ? 'category' : o,
      l = props.initialData,
      c = void 0 === l ? null : l,
      u = props.categories,
      s = void 0 === u ? [] : u,
      d = props.isSubmitting,
      m = void 0 !== d && d,
      p = EY(
        (0, ReactHooks.useState)({
          name: '',
          parent: 0,
        }),
        2,
      ),
      f = p[0],
      v = p[1],
      h = EY((0, ReactHooks.useState)({}), 2),
      y = h[0],
      _ = h[1];
    (0, ReactHooks.useEffect)(
      function () {
        (v(
          c
            ? {
                name: c.name || '',
                parent: c.parent || 0,
              }
            : {
                name: '',
                parent: 0,
              },
        ),
          _({}));
      },
      [c, t],
    );
    var w = function (e, t) {
        (v(function (n) {
          return _Y(_Y({}, n), {}, wY({}, e, t));
        }),
          y[e] &&
            _(function (t) {
              return _Y(_Y({}, t), {}, wY({}, e, ''));
            }));
      },
      E = function () {
        m || n();
      },
      S = [
        {
          label: (0, I18n.__)('None', 'ohmylms'),
          value: 0,
        },
      ].concat(
        (function (e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return RY(e);
            })(e) ||
            (function (e) {
              if (
                ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e);
            })(e) ||
            SY(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        })(
          s
            .filter(function (e) {
              return !c || e.term_id !== c.term_id;
            })
            .map(function (e) {
              return {
                label: e.name,
                value: e.term_id,
              };
            }),
        ),
      );
    if (!t) return null;
    var R = !f.name.trim();
    return (
      <Controls.ModalWP
        title={a}
        onRequestClose={E}
        shouldCloseOnEsc={!m}
        shouldCloseOnClickOutside={!m}
        size={'medium'}
      >
        <Controls.CardWP isBorderless={!0} variant={'secondary'}>
          <Controls.SpacerWP padding={3}>
            <Pf
              title={(0, I18n.__)('Name', 'ohmylms')}
              description={
                'category' === i
                  ? (0, I18n.__)('Give this category a meaningful name.', 'ohmylms')
                  : (0, I18n.__)('Give this tag a meaningful name.', 'ohmylms')
              }
              inputType={'text'}
              value={f.name}
              onChange={function (e) {
                return w('name', e);
              }}
              placeholder={
                'category' === i
                  ? (0, I18n.__)('Enter category name', 'ohmylms')
                  : (0, I18n.__)('Enter tag name', 'ohmylms')
              }
              required={!0}
              error={y.name}
            />
            {'category' === i && (
              <Controls.SpacerWP padding={4} marginBottom={2}>
                <Controls.FlexWP gap={8} align={'flex-start'} justify={'space-between'}>
                  <Controls.FlexItemWP isBlock={!0}>
                    <Controls.HeadingWP level={'4'}>
                      {(0, I18n.__)('Parent Category', 'ohmylms')}
                    </Controls.HeadingWP>
                    <Controls.SpacerWP marginBottom={1} />
                    <Controls.TextWP>
                      {(0, I18n.__)(
                        'Categories can have a parent for hierarchical organization.',
                        'ohmylms',
                      )}
                    </Controls.TextWP>
                  </Controls.FlexItemWP>
                  <Controls.FlexItemWP isBlock={!0}>
                    <Controls.SelectWP
                      value={f.parent}
                      onChange={function (e) {
                        return w('parent', parseInt(e));
                      }}
                      options={S}
                    />
                    {y.parent && (
                      <Controls.TextWP
                        as={'p'}
                        size={'13px'}
                        color={'#FF4955'}
                        align={'right'}
                        style={{
                          marginTop: '4px',
                        }}
                      >
                        {y.parent}
                      </Controls.TextWP>
                    )}
                  </Controls.FlexItemWP>
                </Controls.FlexWP>
              </Controls.SpacerWP>
            )}
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.SpacerWP paddingTop={4}>
          <Controls.FlexWP justify={'flex-end'} gap={2}>
            <Controls.ButtonWP variant={'secondary'} onClick={E} disabled={m}>
              {(0, I18n.__)('Cancel', 'ohmylms')}
            </Controls.ButtonWP>
            <Controls.ButtonWP
              variant={'primary'}
              disabled={R}
              onClick={function () {
                var e;
                m ||
                  ((e = {}),
                  f.name.trim() || (e.name = (0, I18n.__)('Name is required', 'ohmylms')),
                  'category' === i &&
                    c &&
                    f.parent === c.term_id &&
                    (e.parent = (0, I18n.__)('A category cannot be its own parent', 'ohmylms')),
                  _(e),
                  0 === Object.keys(e).length && r(f));
              }}
              isBusy={m}
            >
              {c ? (0, I18n.__)('Update', 'ohmylms') : (0, I18n.__)('Create', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
        </Controls.SpacerWP>
      </Controls.ModalWP>
    );
  };
}
