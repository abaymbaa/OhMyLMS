// Reconstructed Webpack factory 80851; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    _K: () => h,
    ns: () => f,
    ze: () => _,
    Ay: () => g
  });
  var r = n(98587),
    a = n(77387),
    i = n(41594),
    o = n.n(i),
    s = n(75206),
    l = n.n(s);
  var c = n(17241),
    u = n(92403),
    d = "unmounted",
    p = "exited",
    f = "entering",
    h = "entered",
    _ = "exiting",
    m = function (e) {
      function t(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var a,
          i = n && !n.isMounting ? t.enter : t.appear;
        return r.appearStatus = null, t.in ? i ? (a = p, r.appearStatus = f) : a = h : a = t.unmountOnExit || t.mountOnEnter ? d : p, r.state = {
          status: a
        }, r.nextCallback = null, r;
      }
      (0, a.A)(t, e), t.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === d ? {
          status: p
        } : null;
      };
      var n = t.prototype;
      return n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }, n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in ? n !== f && n !== h && (t = f) : n !== f && n !== h || (t = _);
        }
        this.updateStatus(!1, t);
      }, n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }, n.getTimeouts = function () {
        var e,
          t,
          n,
          r = this.props.timeout;
        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
          exit: e,
          enter: t,
          appear: n
        };
      }, n.updateStatus = function (e, t) {
        if (void 0 === e && (e = !1), null !== t) {
          if (this.cancelNextCallback(), t === f) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef ? this.props.nodeRef.current : l().findDOMNode(this);
              n && (0, u.F)(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else this.props.unmountOnExit && this.state.status === p && this.setState({
          status: d
        });
      }, n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          a = this.props.nodeRef ? [r] : [l().findDOMNode(this), r],
          i = a[0],
          o = a[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        e || n ? (this.props.onEnter(i, o), this.safeSetState({
          status: f
        }, function () {
          t.props.onEntering(i, o), t.onTransitionEnd(c, function () {
            t.safeSetState({
              status: h
            }, function () {
              t.props.onEntered(i, o);
            });
          });
        })) : this.safeSetState({
          status: h
        }, function () {
          t.props.onEntered(i);
        });
      }, n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : l().findDOMNode(this);
        t ? (this.props.onExit(r), this.safeSetState({
          status: _
        }, function () {
          e.props.onExiting(r), e.onTransitionEnd(n.exit, function () {
            e.safeSetState({
              status: p
            }, function () {
              e.props.onExited(r);
            });
          });
        })) : this.safeSetState({
          status: p
        }, function () {
          e.props.onExited(r);
        });
      }, n.cancelNextCallback = function () {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
      }, n.safeSetState = function (e, t) {
        t = this.setNextCallback(t), this.setState(e, t);
      }, n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return this.nextCallback = function (r) {
          n && (n = !1, t.nextCallback = null, e(r));
        }, this.nextCallback.cancel = function () {
          n = !1;
        }, this.nextCallback;
      }, n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef ? this.props.nodeRef.current : l().findDOMNode(this),
          r = null == e && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
              i = a[0],
              o = a[1];
            this.props.addEndListener(i, o);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }, n.render = function () {
        var e = this.state.status;
        if (e === d) return null;
        var t = this.props,
          n = t.children,
          a = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, r.A)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
        return o().createElement(c.A.Provider, {
          value: null
        }, "function" == typeof n ? n(e, a) : o().cloneElement(o().Children.only(n), a));
      }, t;
    }(o().Component);
  function A() {}
  m.contextType = c.A, m.propTypes = {}, m.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: A,
    onEntering: A,
    onEntered: A,
    onExit: A,
    onExiting: A,
    onExited: A
  }, m.UNMOUNTED = d, m.EXITED = p, m.ENTERING = f, m.ENTERED = h, m.EXITING = _;
  const g = m;
});
