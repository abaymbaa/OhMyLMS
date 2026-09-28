/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMembershipDetails(readRuntime) {
  return function MembershipDetails(props) {
    const {
      Ge,
      I: Controls,
      J7: MembershipPricing,
      Nm,
      Pf,
      React,
      T: StoreModule,
      b: I18n,
      b8,
      d8,
      f8,
      g: ReactHooks,
      h8,
      i8: MembershipSaleSchedule,
      m8,
      p8,
      v8,
      y: WordPressData,
      y8,
    } = readRuntime();
    var t,
      n,
      errors = props.errors,
      a = (props.setErrors, props.validate),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectMembershipPlanData();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMemberships();
      }, []),
      updateMembershipPlan = (0, WordPressData.useDispatch)(
        StoreModule.default,
      ).updateMembershipPlan,
      c =
        0 < (null == i ? void 0 : i.length)
          ? null === (t = i[0]) || void 0 === t
            ? void 0
            : t.currency
          : null === (n = window) ||
              void 0 === n ||
              null === (n = n.creator_lms_params) ||
              void 0 === n
            ? void 0
            : n.currency,
      u = function (e, t) {
        (updateMembershipPlan(e, t), a(h8(h8({}, o), {}, y8({}, e, t))));
      },
      s = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        for (var r in t) {
          var a = n ? ''.concat(n, '.').concat(r) : r;
          'object' === v8(t[r]) && null !== t[r]
            ? e[r] && 'object' === v8(e[r])
              ? s(e[r], t[r], a)
              : updateMembershipPlan(a, t[r])
            : (e.hasOwnProperty(r) && e[r]) || updateMembershipPlan(a, t[r]);
        }
      },
      d = d8;
    return (
      'month' === (null == o ? void 0 : o.subscription_period)
        ? (d = m8)
        : 'week' === (null == o ? void 0 : o.subscription_period)
          ? (d = p8)
          : 'day' === (null == o ? void 0 : o.subscription_period) && (d = f8),
      (0, ReactHooks.useEffect)(function () {
        (s(o, b8), a(o));
      }, []),
      (
        <React.Fragment>
          <Pf
            title={(0, I18n.__)('Title', 'ohmylms')}
            description={(0, I18n.__)('What would you like to call this plan?', 'ohmylms')}
            tooltip={(0, I18n.__)('This is the title of the plan.', 'ohmylms')}
            value={Ge(null == o ? void 0 : o.name)}
            onChange={function (e) {
              return u('name', e);
            }}
            error={null == errors ? void 0 : errors.name}
            className={'omlms-membership-plan-name-input'}
          />
          <Controls.DividerWP marginStart={'2'} marginEnd={'2'} />
          <Pf
            title={(0, I18n.__)('Description', 'ohmylms')}
            description={(0, I18n.__)('Describe what the membership plan offers.', 'ohmylms')}
            value={Ge(null == o ? void 0 : o.description)}
            onChange={function (e) {
              return u('description', e);
            }}
            inputType={'textarea'}
            className={'omlms-membership-plan-description-input'}
          />
          <Controls.DividerWP marginStart={'2'} marginEnd={'2'} />
          <MembershipPricing errors={errors} validate={a} />
          <Controls.DividerWP marginStart={'2'} marginEnd={'2'} />
          {'one_time' !== (null == o ? void 0 : o.subscription_period) && (
            <React.Fragment>
              <Nm
                title={(0, I18n.__)('Stop renewing after', 'ohmylms')}
                description={(0, I18n.__)(
                  'Automatically stop renewing the subscription after this length of time',
                  'ohmylms',
                )}
                tooltip={(0, I18n.__)('This is the title of the plan.', 'ohmylms')}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={d}
                notFoundMessage={(0, I18n.__)('Nothing Found', 'ohmylms')}
                isMultiple={!1}
                onChange={function (e) {
                  (u('subscription_period_interval', '1'), u('subscription_length', e));
                }}
                value={null == o ? void 0 : o.subscription_length}
                staticSearch={!0}
                className={'omlms-stop-renewing-after-select'}
              />
              <Controls.DividerWP marginStart={'2'} marginEnd={'2'} />
            </React.Fragment>
          )}
          <Pf
            title={(0, I18n.__)('Sign-up fee ('.concat(c, ')'), 'ohmylms')}
            description={(0, I18n.__)(
              'Optionally include an amount to be charged at the outset of the subscription',
              'ohmylms',
            )}
            tooltip={(0, I18n.__)('This is the title of the plan.', 'ohmylms')}
            value={null == o ? void 0 : o.sign_up_fee}
            placeholder={(0, I18n.__)('e.g. 5.90', 'ohmylms')}
            inputType={'number'}
            onChange={function (e) {
              var t = e;
              /^\d*\.?\d*$/.test(t) && u('sign_up_fee', t);
            }}
            onKeyDown={function (e) {
              ('-' !== e.key && '+' !== e.key && 'e' !== e.key) || e.preventDefault();
            }}
            onBlur={function () {
              (null == o ? void 0 : o.sign_up_fee) < 0 && u('sign_up_fee', '0');
            }}
            min={0}
            max={99999999}
            className={'omlms-sign-up-fee-input'}
          />
          <Controls.DividerWP marginStart={'2'} marginEnd={'2'} />
          <MembershipSaleSchedule errors={errors} validate={a} />
        </React.Fragment>
      )
    );
  };
}
