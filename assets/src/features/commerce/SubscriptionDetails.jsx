/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSubscriptionDetails(readRuntime) {
  return function SubscriptionDetails() {
    const {
      I: Controls,
      KQ,
      Nr: BackButton,
      OQ,
      React,
      T: StoreModule,
      aZ,
      b: I18n,
      eZ,
      f: Router,
      g: ReactHooks,
      kQ,
      rZ,
      tZ,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var e,
      t,
      n,
      r = (0, Router.Zp)(),
      a = (0, Router.g)().id,
      o = (0, WordPressData.useDispatch)(StoreModule.default),
      i = (0, Notifications.A)(),
      l = i.openNotificationWithIcon,
      c = i.contextHolder,
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      d = (0, WordPressData.useSelect)(
        function (e) {
          return e(StoreModule.default).selectSingleSubscription();
        },
        [a],
      ),
      m = aZ((0, ReactHooks.useState)(!0), 2),
      p = m[0],
      v = m[1],
      _ = aZ((0, ReactHooks.useState)(!1), 2);
    return (
      _[0],
      _[1],
      (0, ReactHooks.useEffect)(
        function () {
          !p && u && l(s, u);
        },
        [u],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          let active = true;
          if (!a) {
            v(false);
            return;
          }
          v(true);
          Promise.resolve()
            .then(() => o.fetchSubscription(a))
            .catch((error) => {
              if (active)
                l('error', error?.message || I18n.__('Could not load subscription.', 'ohmylms'));
            })
            .finally(() => {
              if (active) v(false);
            });
          return () => {
            active = false;
          };
        },
        [o, a],
      ),
      p ? (
        <Controls.SkeletonWP active={!0} />
      ) : (
        <Controls.ContainerWP isFullWidth={!0}>
          <Controls.SpacerWP paddingTop={5} />
          {c}
          <Controls.FlexWP gap={2} align={'center'} justify={'flex-start'}>
            <BackButton
              onClick={function () {
                r('/subscriptions');
              }}
            />
            <Controls.HeadingWP level={3} size={18} weight={600} color={'#000D25'}>
              {(0, I18n.__)('Subscription Details', 'ohmylms')}
            </Controls.HeadingWP>
          </Controls.FlexWP>
          <Controls.SpacerWP marginBottom={3} />
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP padding={6} marginBottom={0}>
              <Controls.FlexWP
                className={'ohmylms-subscription-details'}
                justify={'start'}
                align={'start'}
                gap={3}
              >
                <Controls.FlexItemWP
                  className={'ohmylms-subscription-details-left'}
                  style={{
                    width: 'calc(70% - 12px)',
                  }}
                >
                  <Controls.CardWP>
                    <Controls.SpacerWP padding={4} marginBottom={0}>
                      <Controls.HeadingWP level={1} size={24} weight={600}>
                        {(0, I18n.__)('Subscription', 'ohmylms')}
                        {' #'}
                        {a}
                      </Controls.HeadingWP>
                      <Controls.SpacerWP />
                      <Controls.BadgeWP isBorderLess={!0} variant={'secondary'}>
                        <Controls.TextWP>
                          {(0, I18n.__)('Linked to Order ', 'ohmylms')}
                          <Controls.ButtonWP
                            href={'/wp-admin/admin.php?page=ohmylms#/order-edit/'.concat(
                              null == d ? void 0 : d.original_order_id,
                            )}
                            variant={'link'}
                            style={{
                              textDecoration: 'none',
                            }}
                          >
                            {'#'}
                            {null == d ? void 0 : d.original_order_id}
                          </Controls.ButtonWP>
                        </Controls.TextWP>
                      </Controls.BadgeWP>
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.CardWP>
                    <Controls.SpacerWP padding={5} marginBottom={0}>
                      <Controls.HeadingWP
                        level={2}
                        size={18}
                        weight={600}
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        {(0, I18n.__)('Subscription Overview', 'ohmylms')}
                      </Controls.HeadingWP>
                      <Controls.FlexWP direction={'column'} gap={3}>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Student', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {null == d ? void 0 : d.student_name}
                            {' ('}
                            {null == d ? void 0 : d.student_email}
                            {')'}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Membership Plan', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>{null == d ? void 0 : d.plan_name}</Controls.TextWP>
                        </Controls.FlexWP>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Billing Type', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {(null == d ? void 0 : d.billing_period) &&
                              (null == d ? void 0 : d.billing_period.charAt(0).toUpperCase()) +
                                (null == d ? void 0 : d.billing_period.slice(1).toLowerCase())}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Payment Gateway', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {null == d || null === (e = d.payment_gateway) || void 0 === e
                              ? void 0
                              : e.title}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                      </Controls.FlexWP>
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.CardWP>
                    <Controls.SpacerWP padding={5} marginBottom={0}>
                      <Controls.HeadingWP
                        level={2}
                        size={18}
                        weight={600}
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        {(0, I18n.__)('Course Access', 'ohmylms')}
                      </Controls.HeadingWP>
                      {null != d &&
                      d.line_items &&
                      (null == d ? void 0 : d.line_items.length) > 0 &&
                      null != d &&
                      d.line_items.some(function (e) {
                        return e.courses && e.courses.length > 0;
                      }) ? (
                        <Controls.FlexWP direction={'column'} gap={4}>
                          {null == d
                            ? void 0
                            : d.line_items.map(function (e) {
                                return e.courses && e.courses.length > 0
                                  ? e.courses.map(function (e) {
                                      return (
                                        <Controls.CardWP
                                          key={e.id}
                                          isBorderless={!0}
                                          variant={'secondary'}
                                          style={{
                                            padding: '12px',
                                            borderRadius: '4px',
                                          }}
                                        >
                                          <Controls.TextWP weight={500} size={14}>
                                            {e.name}
                                          </Controls.TextWP>
                                        </Controls.CardWP>
                                      );
                                    })
                                  : null;
                              })}
                        </Controls.FlexWP>
                      ) : (
                        <Controls.TextWP>
                          {(0, I18n.__)('No courses associated with this subscription.', 'ohmylms')}
                        </Controls.TextWP>
                      )}
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  {Array.isArray(null == d ? void 0 : d.related_orders) &&
                    (null == d ? void 0 : d.related_orders.length) > 0 && (
                      <Controls.CardWP isBorderless={!0} variant={'secondary'}>
                        <Controls.SpacerWP paddingY={6} paddingX={4} marginBottom={0}>
                          {React.createElement(kQ, {
                            relatedOrders: null == d ? void 0 : d.related_orders,
                          })}
                        </Controls.SpacerWP>
                      </Controls.CardWP>
                    )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  className={'ohmylms-subscription-details-right'}
                  style={{
                    width: '30%',
                  }}
                >
                  <Controls.CardWP isBorderless={!0} variant={'secondary'}>
                    <Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}>
                      <KQ
                        subscription={d}
                        status={null == d ? void 0 : d.status.toLowerCase()}
                        onStatusChange={function () {}}
                        onUpdate={function () {
                          return Promise.resolve();
                        }}
                      />
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.CardWP>
                    <Controls.SpacerWP padding={5} marginBottom={0}>
                      <Controls.HeadingWP
                        level={2}
                        size={18}
                        weight={600}
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        {(0, I18n.__)('Billing & Schedule', 'ohmylms')}
                      </Controls.HeadingWP>
                      <Controls.FlexWP direction={'column'} gap={3}>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Start Date', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {null == d ? void 0 : d.schedule_start_date}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                        {(null == d ? void 0 : d.schedule_end_date) && (
                          <Controls.FlexWP justify={'space-between'}>
                            <Controls.TextWP weight={500} color={'#3c434a'}>
                              {(0, I18n.__)('End Date', 'ohmylms')}
                            </Controls.TextWP>
                            <Controls.TextWP>
                              {'0' === (null == d ? void 0 : d.schedule_end_date)
                                ? '-'
                                : null == d
                                  ? void 0
                                  : d.schedule_end_date}
                            </Controls.TextWP>
                          </Controls.FlexWP>
                        )}
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Next Payment Date', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {'0' === (null == d ? void 0 : d.schedule_next_payment_date)
                              ? '-'
                              : null == d
                                ? void 0
                                : d.schedule_next_payment_date}
                          </Controls.TextWP>
                          {'                                        '}
                        </Controls.FlexWP>
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Recurring Amount', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP
                            dangerouslySetInnerHTML={{
                              __html: OQ(null == d ? void 0 : d.recurring_amount),
                            }}
                          />
                        </Controls.FlexWP>
                        {(null == d ? void 0 : d.coupon) && (
                          <Controls.FlexWP justify={'space-between'}>
                            <Controls.TextWP weight={500} color={'#3c434a'}>
                              {(0, I18n.__)('Coupon Used', 'ohmylms')}
                            </Controls.TextWP>
                            <Controls.TextWP>
                              {null == d || null === (t = d.coupon_lines) || void 0 === t
                                ? void 0
                                : t.code}
                              {' – '}
                              {null == d || null === (n = d.coupon_lines) || void 0 === n
                                ? void 0
                                : n.discount}
                            </Controls.TextWP>
                          </Controls.FlexWP>
                        )}
                        <Controls.FlexWP justify={'space-between'}>
                          <Controls.TextWP weight={500} color={'#3c434a'}>
                            {(0, I18n.__)('Last Payment Date', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.TextWP>
                            {null == d ? void 0 : d.last_payment_date}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                      </Controls.FlexWP>
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.CardWP>
                    <Controls.SpacerWP padding={5} marginBottom={0}>
                      <Controls.HeadingWP
                        level={2}
                        size={18}
                        weight={600}
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        {(0, I18n.__)('Order & Renewal History', 'ohmylms')}
                      </Controls.HeadingWP>
                      {null != d && d.history && (null == d ? void 0 : d.history.length) > 0 ? (
                        <Controls.FlexWP direction={'column'} gap={3}>
                          {null == d
                            ? void 0
                            : d.history.map(function (e, t) {
                                return (
                                  <Controls.FlexWP key={t} gap={3} align={'flex-start'}>
                                    <Controls.TextWP
                                      weight={500}
                                      color={'#3c434a'}
                                      style={{
                                        minWidth: '120px',
                                      }}
                                    >
                                      {e.date}
                                    </Controls.TextWP>
                                    <Controls.TextWP>{e.event}</Controls.TextWP>
                                  </Controls.FlexWP>
                                );
                              })}
                        </Controls.FlexWP>
                      ) : (
                        <Controls.TextWP>
                          {(0, I18n.__)('No order or renewal history found.', 'ohmylms')}
                        </Controls.TextWP>
                      )}
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.CardWP isBorderless={!0} variant={'secondary'}>
                    <Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}>
                      {React.createElement(eZ, {
                        notes: null == d ? void 0 : d.subscription_notes,
                        subscription: d,
                      })}
                    </Controls.SpacerWP>
                    <Controls.SpacerWP marginY={4} />
                  </Controls.CardWP>
                </Controls.FlexItemWP>
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
        </Controls.ContainerWP>
      )
    );
  };
}
