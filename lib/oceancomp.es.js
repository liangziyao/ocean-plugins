import {
  defineComponent as pe,
  computed as Ee,
  openBlock as R,
  createElementBlock as U,
  normalizeStyle as Lt,
  createElementVNode as q,
  h as G,
  ref as $,
  onUpdated as He,
  provide as Ve,
  watch as Bt,
  nextTick as zt,
  onMounted as ce,
  onBeforeUnmount as We,
  onBeforeUpdate as At,
  resolveComponent as _e,
  createVNode as $t,
  withCtx as xe,
  Fragment as Pe,
  renderList as Oe,
  createBlock as qe,
  renderSlot as Xe,
  normalizeClass as Nt,
  toDisplayString as Dt
} from 'vue';
var ve = pe({
  name: 'oc-videopopup',
  emits: ['closeVideoPopup'],
  props: {
    videoId: { type: String, default: 'VWKZuUuKPp0' },
    zIndex: { type: [Number, String], default: 1e3 },
    closeOnCliseBg: { type: Boolean, default: !0 }
  },
  setup(t, { emit: e }) {
    const a = Ee(
        () =>
          `https://www.youtube.com/embed/${t.videoId}?rel=0&playsinline=1&showinfo=0&disablekb=1&autoplay=1&modestbranding=1&loop=1`
      ),
      r = Ee(() => ({ zIndex: t.zIndex }));
    return {
      videoSrc: a,
      style: r,
      closeVideoPopup: () => {
        e('closeVideoPopup');
      }
    };
  }
});
const kt = { class: 'oc-videopopup-content' },
  Gt = ['src'];
function Rt(t, e, a, r, i, n) {
  return (
    R(),
    U(
      'div',
      { class: 'oc-videopopup', style: Lt(t.style) },
      [
        q('div', {
          class: 'oc-videopopup-bg',
          onClick: e[0] || (e[0] = (...l) => t.closeVideoPopup && t.closeVideoPopup(...l))
        }),
        q('div', kt, [
          q(
            'iframe',
            {
              class: 'oc-videopopup-iframe',
              src: t.videoSrc,
              frameborder: '0',
              allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen: ''
            },
            null,
            8,
            Gt
          )
        ])
      ],
      4
    )
  );
}
(ve.render = Rt), (ve.__file = 'videopopup/Index.vue');
var Ye = {
  install(t) {
    t.component(ve.name, ve);
  }
};
function Ue(t, e) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      a.push.apply(a, r);
  }
  return a;
}
function Me(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ue(Object(a), !0).forEach(function (r) {
          j(t, r, a[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
      : Ue(Object(a)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r));
        });
  }
  return t;
}
function F(t) {
  return (
    (F =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    F(t)
  );
}
function Ze(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Je(t, e) {
  for (var a = 0; a < e.length; a++) {
    var r = e[a];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function Qe(t, e, a) {
  return e && Je(t.prototype, e), a && Je(t, a), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function j(t, e, a) {
  return (
    e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t
  );
}
function Ft(t, e) {
  if (typeof e != 'function' && e !== null) throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && oe(t, e);
}
function le(t) {
  return (
    (le = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    le(t)
  );
}
function oe(t, e) {
  return (
    (oe =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    oe(t, e)
  );
}
function Ke() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}
function he(t, e, a) {
  return (
    Ke()
      ? (he = Reflect.construct)
      : (he = function (i, n, l) {
          var s = [null];
          s.push.apply(s, n);
          var o = Function.bind.apply(i, s),
            u = new o();
          return l && oe(u, l.prototype), u;
        }),
    he.apply(null, arguments)
  );
}
function jt(t) {
  return Function.toString.call(t).indexOf('[native code]') !== -1;
}
function Ie(t) {
  var e = typeof Map == 'function' ? new Map() : void 0;
  return (
    (Ie = function (r) {
      if (r === null || !jt(r)) return r;
      if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function');
      if (typeof e != 'undefined') {
        if (e.has(r)) return e.get(r);
        e.set(r, i);
      }
      function i() {
        return he(r, arguments, le(this).constructor);
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 }
        })),
        oe(i, r)
      );
    }),
    Ie(t)
  );
}
function et(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tt(t, e) {
  if (e && (typeof e == 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return et(t);
}
function Ht(t) {
  var e = Ke();
  return function () {
    var r = le(t),
      i;
    if (e) {
      var n = le(this).constructor;
      i = Reflect.construct(r, arguments, n);
    } else i = r.apply(this, arguments);
    return tt(this, i);
  };
}
function H(t) {
  return Vt(t) || Wt(t) || _t(t) || qt();
}
function Vt(t) {
  if (Array.isArray(t)) return Le(t);
}
function Wt(t) {
  if ((typeof Symbol != 'undefined' && t[Symbol.iterator] != null) || t['@@iterator'] != null) return Array.from(t);
}
function _t(t, e) {
  if (!!t) {
    if (typeof t == 'string') return Le(t, e);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    if ((a === 'Object' && t.constructor && (a = t.constructor.name), a === 'Map' || a === 'Set')) return Array.from(t);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Le(t, e);
  }
}
function Le(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
  return r;
}
function qt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t) {
  return t !== null && F(t) === 'object' && 'constructor' in t && t.constructor === Object;
}
function Be() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Object.keys(e).forEach(function (a) {
    typeof t[a] == 'undefined' ? (t[a] = e[a]) : at(e[a]) && at(t[a]) && Object.keys(e[a]).length > 0 && Be(t[a], e[a]);
  });
}
var rt = {
  body: {},
  addEventListener: function () {},
  removeEventListener: function () {},
  activeElement: { blur: function () {}, nodeName: '' },
  querySelector: function () {
    return null;
  },
  querySelectorAll: function () {
    return [];
  },
  getElementById: function () {
    return null;
  },
  createEvent: function () {
    return { initEvent: function () {} };
  },
  createElement: function () {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function () {},
      getElementsByTagName: function () {
        return [];
      }
    };
  },
  createElementNS: function () {
    return {};
  },
  importNode: function () {
    return null;
  },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' }
};
function N() {
  var t = typeof document != 'undefined' ? document : {};
  return Be(t, rt), t;
}
var Xt = {
  document: rt,
  navigator: { userAgent: '' },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener: function () {},
  removeEventListener: function () {},
  getComputedStyle: function () {
    return {
      getPropertyValue: function () {
        return '';
      }
    };
  },
  Image: function () {},
  Date: function () {},
  screen: {},
  setTimeout: function () {},
  clearTimeout: function () {},
  matchMedia: function () {
    return {};
  },
  requestAnimationFrame: function (e) {
    return typeof setTimeout == 'undefined' ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame: function (e) {
    typeof setTimeout != 'undefined' && clearTimeout(e);
  }
};
function z() {
  var t = typeof window != 'undefined' ? window : {};
  return Be(t, Xt), t;
}
function Yt(t) {
  var e = t.__proto__;
  Object.defineProperty(t, '__proto__', {
    get: function () {
      return e;
    },
    set: function (r) {
      e.__proto__ = r;
    }
  });
}
var Z = (function (t) {
  Ft(a, t);
  var e = Ht(a);
  function a(r) {
    var i;
    return (
      Ze(this, a),
      typeof r == 'number' ? (i = e.call(this, r)) : ((i = e.call.apply(e, [this].concat(H(r || [])))), Yt(et(i))),
      tt(i)
    );
  }
  return Qe(a);
})(Ie(Array));
function de() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    e = [];
  return (
    t.forEach(function (a) {
      Array.isArray(a) ? e.push.apply(e, H(de(a))) : e.push(a);
    }),
    e
  );
}
function it(t, e) {
  return Array.prototype.filter.call(t, e);
}
function Ut(t) {
  for (var e = [], a = 0; a < t.length; a += 1) e.indexOf(t[a]) === -1 && e.push(t[a]);
  return e;
}
function Zt(t, e) {
  if (typeof t != 'string') return [t];
  for (var a = [], r = e.querySelectorAll(t), i = 0; i < r.length; i += 1) a.push(r[i]);
  return a;
}
function C(t, e) {
  var a = z(),
    r = N(),
    i = [];
  if (!e && t instanceof Z) return t;
  if (!t) return new Z(i);
  if (typeof t == 'string') {
    var n = t.trim();
    if (n.indexOf('<') >= 0 && n.indexOf('>') >= 0) {
      var l = 'div';
      n.indexOf('<li') === 0 && (l = 'ul'),
        n.indexOf('<tr') === 0 && (l = 'tbody'),
        (n.indexOf('<td') === 0 || n.indexOf('<th') === 0) && (l = 'tr'),
        n.indexOf('<tbody') === 0 && (l = 'table'),
        n.indexOf('<option') === 0 && (l = 'select');
      var s = r.createElement(l);
      s.innerHTML = n;
      for (var o = 0; o < s.childNodes.length; o += 1) i.push(s.childNodes[o]);
    } else i = Zt(t.trim(), e || r);
  } else if (t.nodeType || t === a || t === r) i.push(t);
  else if (Array.isArray(t)) {
    if (t instanceof Z) return t;
    i = t;
  }
  return new Z(Ut(i));
}
C.fn = Z.prototype;
function Jt() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = de(
    e.map(function (i) {
      return i.split(' ');
    })
  );
  return (
    this.forEach(function (i) {
      var n;
      (n = i.classList).add.apply(n, H(r));
    }),
    this
  );
}
function Qt() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = de(
    e.map(function (i) {
      return i.split(' ');
    })
  );
  return (
    this.forEach(function (i) {
      var n;
      (n = i.classList).remove.apply(n, H(r));
    }),
    this
  );
}
function Kt() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = de(
    e.map(function (i) {
      return i.split(' ');
    })
  );
  this.forEach(function (i) {
    r.forEach(function (n) {
      i.classList.toggle(n);
    });
  });
}
function ea() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = de(
    e.map(function (i) {
      return i.split(' ');
    })
  );
  return (
    it(this, function (i) {
      return (
        r.filter(function (n) {
          return i.classList.contains(n);
        }).length > 0
      );
    }).length > 0
  );
}
function ta(t, e) {
  if (arguments.length === 1 && typeof t == 'string') return this[0] ? this[0].getAttribute(t) : void 0;
  for (var a = 0; a < this.length; a += 1)
    if (arguments.length === 2) this[a].setAttribute(t, e);
    else for (var r in t) (this[a][r] = t[r]), this[a].setAttribute(r, t[r]);
  return this;
}
function aa(t) {
  for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
  return this;
}
function ra(t) {
  for (var e = 0; e < this.length; e += 1) this[e].style.transform = t;
  return this;
}
function ia(t) {
  for (var e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof t != 'string' ? ''.concat(t, 'ms') : t;
  return this;
}
function na() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = e[0],
    i = e[1],
    n = e[2],
    l = e[3];
  typeof e[1] == 'function' && ((r = e[0]), (n = e[1]), (l = e[2]), (i = void 0)), l || (l = !1);
  function s(v) {
    var m = v.target;
    if (!!m) {
      var g = v.target.dom7EventData || [];
      if ((g.indexOf(v) < 0 && g.unshift(v), C(m).is(i))) n.apply(m, g);
      else for (var y = C(m).parents(), w = 0; w < y.length; w += 1) C(y[w]).is(i) && n.apply(y[w], g);
    }
  }
  function o(v) {
    var m = v && v.target ? v.target.dom7EventData || [] : [];
    m.indexOf(v) < 0 && m.unshift(v), n.apply(this, m);
  }
  for (var u = r.split(' '), f, p = 0; p < this.length; p += 1) {
    var d = this[p];
    if (i)
      for (f = 0; f < u.length; f += 1) {
        var c = u[f];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}),
          d.dom7LiveListeners[c] || (d.dom7LiveListeners[c] = []),
          d.dom7LiveListeners[c].push({ listener: n, proxyListener: s }),
          d.addEventListener(c, s, l);
      }
    else
      for (f = 0; f < u.length; f += 1) {
        var h = u[f];
        d.dom7Listeners || (d.dom7Listeners = {}),
          d.dom7Listeners[h] || (d.dom7Listeners[h] = []),
          d.dom7Listeners[h].push({ listener: n, proxyListener: o }),
          d.addEventListener(h, o, l);
      }
  }
  return this;
}
function sa() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  var r = e[0],
    i = e[1],
    n = e[2],
    l = e[3];
  typeof e[1] == 'function' && ((r = e[0]), (n = e[1]), (l = e[2]), (i = void 0)), l || (l = !1);
  for (var s = r.split(' '), o = 0; o < s.length; o += 1)
    for (var u = s[o], f = 0; f < this.length; f += 1) {
      var p = this[f],
        d = void 0;
      if (
        (!i && p.dom7Listeners ? (d = p.dom7Listeners[u]) : i && p.dom7LiveListeners && (d = p.dom7LiveListeners[u]),
        d && d.length)
      )
        for (var h = d.length - 1; h >= 0; h -= 1) {
          var c = d[h];
          (n && c.listener === n) || (n && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === n)
            ? (p.removeEventListener(u, c.proxyListener, l), d.splice(h, 1))
            : n || (p.removeEventListener(u, c.proxyListener, l), d.splice(h, 1));
        }
    }
  return this;
}
function la() {
  for (var t = z(), e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
  for (var i = a[0].split(' '), n = a[1], l = 0; l < i.length; l += 1)
    for (var s = i[l], o = 0; o < this.length; o += 1) {
      var u = this[o];
      if (t.CustomEvent) {
        var f = new t.CustomEvent(s, { detail: n, bubbles: !0, cancelable: !0 });
        (u.dom7EventData = a.filter(function (p, d) {
          return d > 0;
        })),
          u.dispatchEvent(f),
          (u.dom7EventData = []),
          delete u.dom7EventData;
      }
    }
  return this;
}
function oa(t) {
  var e = this;
  function a(r) {
    r.target === this && (t.call(this, r), e.off('transitionend', a));
  }
  return t && e.on('transitionend', a), this;
}
function da(t) {
  if (this.length > 0) {
    if (t) {
      var e = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(e.getPropertyValue('margin-right')) +
        parseFloat(e.getPropertyValue('margin-left'))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function ua(t) {
  if (this.length > 0) {
    if (t) {
      var e = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(e.getPropertyValue('margin-top')) +
        parseFloat(e.getPropertyValue('margin-bottom'))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function fa() {
  if (this.length > 0) {
    var t = z(),
      e = N(),
      a = this[0],
      r = a.getBoundingClientRect(),
      i = e.body,
      n = a.clientTop || i.clientTop || 0,
      l = a.clientLeft || i.clientLeft || 0,
      s = a === t ? t.scrollY : a.scrollTop,
      o = a === t ? t.scrollX : a.scrollLeft;
    return { top: r.top + s - n, left: r.left + o - l };
  }
  return null;
}
function pa() {
  var t = z();
  return this[0] ? t.getComputedStyle(this[0], null) : {};
}
function ca(t, e) {
  var a = z(),
    r;
  if (arguments.length === 1)
    if (typeof t == 'string') {
      if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(t);
    } else {
      for (r = 0; r < this.length; r += 1) for (var i in t) this[r].style[i] = t[i];
      return this;
    }
  if (arguments.length === 2 && typeof t == 'string') {
    for (r = 0; r < this.length; r += 1) this[r].style[t] = e;
    return this;
  }
  return this;
}
function va(t) {
  return t
    ? (this.forEach(function (e, a) {
        t.apply(e, [e, a]);
      }),
      this)
    : this;
}
function ha(t) {
  var e = it(this, t);
  return C(e);
}
function ma(t) {
  if (typeof t == 'undefined') return this[0] ? this[0].innerHTML : null;
  for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
  return this;
}
function ga(t) {
  if (typeof t == 'undefined') return this[0] ? this[0].textContent.trim() : null;
  for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
  return this;
}
function wa(t) {
  var e = z(),
    a = N(),
    r = this[0],
    i,
    n;
  if (!r || typeof t == 'undefined') return !1;
  if (typeof t == 'string') {
    if (r.matches) return r.matches(t);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
    if (r.msMatchesSelector) return r.msMatchesSelector(t);
    for (i = C(t), n = 0; n < i.length; n += 1) if (i[n] === r) return !0;
    return !1;
  }
  if (t === a) return r === a;
  if (t === e) return r === e;
  if (t.nodeType || t instanceof Z) {
    for (i = t.nodeType ? [t] : t, n = 0; n < i.length; n += 1) if (i[n] === r) return !0;
    return !1;
  }
  return !1;
}
function ya() {
  var t = this[0],
    e;
  if (t) {
    for (e = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (e += 1);
    return e;
  }
}
function ba(t) {
  if (typeof t == 'undefined') return this;
  var e = this.length;
  if (t > e - 1) return C([]);
  if (t < 0) {
    var a = e + t;
    return a < 0 ? C([]) : C([this[a]]);
  }
  return C([this[t]]);
}
function Sa() {
  for (var t, e = N(), a = 0; a < arguments.length; a += 1) {
    t = a < 0 || arguments.length <= a ? void 0 : arguments[a];
    for (var r = 0; r < this.length; r += 1)
      if (typeof t == 'string') {
        var i = e.createElement('div');
        for (i.innerHTML = t; i.firstChild; ) this[r].appendChild(i.firstChild);
      } else if (t instanceof Z) for (var n = 0; n < t.length; n += 1) this[r].appendChild(t[n]);
      else this[r].appendChild(t);
  }
  return this;
}
function Ca(t) {
  var e = N(),
    a,
    r;
  for (a = 0; a < this.length; a += 1)
    if (typeof t == 'string') {
      var i = e.createElement('div');
      for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r -= 1)
        this[a].insertBefore(i.childNodes[r], this[a].childNodes[0]);
    } else if (t instanceof Z) for (r = 0; r < t.length; r += 1) this[a].insertBefore(t[r], this[a].childNodes[0]);
    else this[a].insertBefore(t, this[a].childNodes[0]);
  return this;
}
function Ta(t) {
  return this.length > 0
    ? t
      ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(t)
        ? C([this[0].nextElementSibling])
        : C([])
      : this[0].nextElementSibling
      ? C([this[0].nextElementSibling])
      : C([])
    : C([]);
}
function Ea(t) {
  var e = [],
    a = this[0];
  if (!a) return C([]);
  for (; a.nextElementSibling; ) {
    var r = a.nextElementSibling;
    t ? C(r).is(t) && e.push(r) : e.push(r), (a = r);
  }
  return C(e);
}
function xa(t) {
  if (this.length > 0) {
    var e = this[0];
    return t
      ? e.previousElementSibling && C(e.previousElementSibling).is(t)
        ? C([e.previousElementSibling])
        : C([])
      : e.previousElementSibling
      ? C([e.previousElementSibling])
      : C([]);
  }
  return C([]);
}
function Pa(t) {
  var e = [],
    a = this[0];
  if (!a) return C([]);
  for (; a.previousElementSibling; ) {
    var r = a.previousElementSibling;
    t ? C(r).is(t) && e.push(r) : e.push(r), (a = r);
  }
  return C(e);
}
function Oa(t) {
  for (var e = [], a = 0; a < this.length; a += 1)
    this[a].parentNode !== null &&
      (t ? C(this[a].parentNode).is(t) && e.push(this[a].parentNode) : e.push(this[a].parentNode));
  return C(e);
}
function Ma(t) {
  for (var e = [], a = 0; a < this.length; a += 1)
    for (var r = this[a].parentNode; r; ) t ? C(r).is(t) && e.push(r) : e.push(r), (r = r.parentNode);
  return C(e);
}
function Ia(t) {
  var e = this;
  return typeof t == 'undefined' ? C([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
}
function La(t) {
  for (var e = [], a = 0; a < this.length; a += 1)
    for (var r = this[a].querySelectorAll(t), i = 0; i < r.length; i += 1) e.push(r[i]);
  return C(e);
}
function Ba(t) {
  for (var e = [], a = 0; a < this.length; a += 1)
    for (var r = this[a].children, i = 0; i < r.length; i += 1) (!t || C(r[i]).is(t)) && e.push(r[i]);
  return C(e);
}
function za() {
  for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
  return this;
}
var nt = {
  addClass: Jt,
  removeClass: Qt,
  hasClass: ea,
  toggleClass: Kt,
  attr: ta,
  removeAttr: aa,
  transform: ra,
  transition: ia,
  on: na,
  off: sa,
  trigger: la,
  transitionEnd: oa,
  outerWidth: da,
  outerHeight: ua,
  styles: pa,
  offset: fa,
  css: ca,
  each: va,
  html: ma,
  text: ga,
  is: wa,
  index: ya,
  eq: ba,
  append: Sa,
  prepend: Ca,
  next: Ta,
  nextAll: Ea,
  prev: xa,
  prevAll: Pa,
  parent: Oa,
  parents: Ma,
  closest: Ia,
  find: La,
  children: Ba,
  filter: ha,
  remove: za
};
Object.keys(nt).forEach(function (t) {
  Object.defineProperty(C.fn, t, { value: nt[t], writable: !0 });
});
function Aa(t) {
  var e = t;
  Object.keys(e).forEach(function (a) {
    try {
      e[a] = null;
    } catch (r) {}
    try {
      delete e[a];
    } catch (r) {}
  });
}
function ie(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function V() {
  return Date.now();
}
function $a(t) {
  var e = z(),
    a;
  return (
    e.getComputedStyle && (a = e.getComputedStyle(t, null)),
    !a && t.currentStyle && (a = t.currentStyle),
    a || (a = t.style),
    a
  );
}
function Na(t, e) {
  e === void 0 && (e = 'x');
  var a = z(),
    r,
    i,
    n,
    l = $a(t);
  return (
    a.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(',').length > 6 &&
          (i = i
            .split(', ')
            .map(function (s) {
              return s.replace(',', '.');
            })
            .join(', ')),
        (n = new a.WebKitCSSMatrix(i === 'none' ? '' : i)))
      : ((n =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = n.toString().split(','))),
    e === 'x' && (a.WebKitCSSMatrix ? (i = n.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
    e === 'y' && (a.WebKitCSSMatrix ? (i = n.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
    i || 0
  );
}
function me(t) {
  return (
    F(t) === 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  );
}
function Da(t) {
  return typeof window != 'undefined' && typeof window.HTMLElement != 'undefined'
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function D() {
  for (
    var t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ['__proto__', 'constructor', 'prototype'], a = 1;
    a < arguments.length;
    a += 1
  ) {
    var r = a < 0 || arguments.length <= a ? void 0 : arguments[a];
    if (r != null && !Da(r))
      for (
        var i = Object.keys(Object(r)).filter(function (u) {
            return e.indexOf(u) < 0;
          }),
          n = 0,
          l = i.length;
        n < l;
        n += 1
      ) {
        var s = i[n],
          o = Object.getOwnPropertyDescriptor(r, s);
        o !== void 0 &&
          o.enumerable &&
          (me(t[s]) && me(r[s])
            ? r[s].__swiper__
              ? (t[s] = r[s])
              : D(t[s], r[s])
            : !me(t[s]) && me(r[s])
            ? ((t[s] = {}), r[s].__swiper__ ? (t[s] = r[s]) : D(t[s], r[s]))
            : (t[s] = r[s]));
      }
  }
  return t;
}
function ge(t, e, a) {
  t.style.setProperty(e, a);
}
function st(t) {
  var e = t.swiper,
    a = t.targetPosition,
    r = t.side,
    i = z(),
    n = -e.translate,
    l = null,
    s,
    o = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(e.cssModeFrameID);
  var u = a > n ? 'next' : 'prev',
    f = function (h, c) {
      return (u === 'next' && h >= c) || (u === 'prev' && h <= c);
    },
    p = function d() {
      (s = new Date().getTime()), l === null && (l = s);
      var h = Math.max(Math.min((s - l) / o, 1), 0),
        c = 0.5 - Math.cos(h * Math.PI) / 2,
        v = n + c * (a - n);
      if ((f(v, a) && (v = a), e.wrapperEl.scrollTo(j({}, r, v)), f(v, a))) {
        (e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(function () {
            (e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo(j({}, r, v));
          }),
          i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(d);
    };
  p();
}
var ze;
function ka() {
  var t = z(),
    e = N();
  return {
    smoothScroll: e.documentElement && 'scrollBehavior' in e.documentElement.style,
    touch: !!('ontouchstart' in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
    passiveListener: (function () {
      var r = !1;
      try {
        var i = Object.defineProperty({}, 'passive', {
          get: function () {
            r = !0;
          }
        });
        t.addEventListener('testPassiveListener', null, i);
      } catch (n) {}
      return r;
    })(),
    gestures: (function () {
      return 'ongesturestart' in t;
    })()
  };
}
function lt() {
  return ze || (ze = ka()), ze;
}
var Ae;
function Ga(t) {
  var e = t === void 0 ? {} : t,
    a = e.userAgent,
    r = lt(),
    i = z(),
    n = i.navigator.platform,
    l = a || i.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = i.screen.width,
    u = i.screen.height,
    f = l.match(/(Android);?[\s\/]+([\d.]+)?/),
    p = l.match(/(iPad).*OS\s([\d_]+)/),
    d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    c = n === 'Win32',
    v = n === 'MacIntel',
    m = [
      '1024x1366',
      '1366x1024',
      '834x1194',
      '1194x834',
      '834x1112',
      '1112x834',
      '768x1024',
      '1024x768',
      '820x1180',
      '1180x820',
      '810x1080',
      '1080x810'
    ];
  return (
    !p &&
      v &&
      r.touch &&
      m.indexOf(''.concat(o, 'x').concat(u)) >= 0 &&
      ((p = l.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, '13_0_0']), (v = !1)),
    f && !c && ((s.os = 'android'), (s.android = !0)),
    (p || h || d) && ((s.os = 'ios'), (s.ios = !0)),
    s
  );
}
function Ra(t) {
  return t === void 0 && (t = {}), Ae || (Ae = Ga(t)), Ae;
}
var $e;
function Fa() {
  var t = z();
  function e() {
    var a = t.navigator.userAgent.toLowerCase();
    return a.indexOf('safari') >= 0 && a.indexOf('chrome') < 0 && a.indexOf('android') < 0;
  }
  return { isSafari: e(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) };
}
function ja() {
  return $e || ($e = Fa()), $e;
}
function Ha(t) {
  var e = t.swiper,
    a = t.on,
    r = t.emit,
    i = z(),
    n = null,
    l = null,
    s = function () {
      !e || e.destroyed || !e.initialized || (r('beforeResize'), r('resize'));
    },
    o = function () {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver(function (d) {
          l = i.requestAnimationFrame(function () {
            var h = e.width,
              c = e.height,
              v = h,
              m = c;
            d.forEach(function (g) {
              var y = g.contentBoxSize,
                w = g.contentRect,
                b = g.target;
              (b && b !== e.el) ||
                ((v = w ? w.width : (y[0] || y).inlineSize), (m = w ? w.height : (y[0] || y).blockSize));
            }),
              (v !== h || m !== c) && s();
          });
        })),
        n.observe(e.el));
    },
    u = function () {
      l && i.cancelAnimationFrame(l), n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
    },
    f = function () {
      !e || e.destroyed || !e.initialized || r('orientationchange');
    };
  a('init', function () {
    if (e.params.resizeObserver && typeof i.ResizeObserver != 'undefined') {
      o();
      return;
    }
    i.addEventListener('resize', s), i.addEventListener('orientationchange', f);
  }),
    a('destroy', function () {
      u(), i.removeEventListener('resize', s), i.removeEventListener('orientationchange', f);
    });
}
function Va(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit,
    n = [],
    l = z(),
    s = function (p, d) {
      d === void 0 && (d = {});
      var h = l.MutationObserver || l.WebkitMutationObserver,
        c = new h(function (v) {
          if (v.length === 1) {
            i('observerUpdate', v[0]);
            return;
          }
          var m = function () {
            i('observerUpdate', v[0]);
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(m) : l.setTimeout(m, 0);
        });
      c.observe(p, {
        attributes: typeof d.attributes == 'undefined' ? !0 : d.attributes,
        childList: typeof d.childList == 'undefined' ? !0 : d.childList,
        characterData: typeof d.characterData == 'undefined' ? !0 : d.characterData
      }),
        n.push(c);
    },
    o = function () {
      if (!!e.params.observer) {
        if (e.params.observeParents) for (var p = e.$el.parents(), d = 0; d < p.length; d += 1) s(p[d]);
        s(e.$el[0], { childList: e.params.observeSlideChildren }), s(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    u = function () {
      n.forEach(function (p) {
        p.disconnect();
      }),
        n.splice(0, n.length);
    };
  a({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r('init', o), r('destroy', u);
}
var Wa = {
  on: function (e, a, r) {
    var i = this;
    if (typeof a != 'function') return i;
    var n = r ? 'unshift' : 'push';
    return (
      e.split(' ').forEach(function (l) {
        i.eventsListeners[l] || (i.eventsListeners[l] = []), i.eventsListeners[l][n](a);
      }),
      i
    );
  },
  once: function (e, a, r) {
    var i = this;
    if (typeof a != 'function') return i;
    function n() {
      i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), o = 0; o < l; o++) s[o] = arguments[o];
      a.apply(i, s);
    }
    return (n.__emitterProxy = a), i.on(e, n, r);
  },
  onAny: function (e, a) {
    var r = this;
    if (typeof e != 'function') return r;
    var i = a ? 'unshift' : 'push';
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r;
  },
  offAny: function (e) {
    var a = this;
    if (!a.eventsAnyListeners) return a;
    var r = a.eventsAnyListeners.indexOf(e);
    return r >= 0 && a.eventsAnyListeners.splice(r, 1), a;
  },
  off: function (e, a) {
    var r = this;
    return (
      r.eventsListeners &&
        e.split(' ').forEach(function (i) {
          typeof a == 'undefined'
            ? (r.eventsListeners[i] = [])
            : r.eventsListeners[i] &&
              r.eventsListeners[i].forEach(function (n, l) {
                (n === a || (n.__emitterProxy && n.__emitterProxy === a)) && r.eventsListeners[i].splice(l, 1);
              });
        }),
      r
    );
  },
  emit: function () {
    var e = this;
    if (!e.eventsListeners) return e;
    for (var a, r, i, n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
    typeof l[0] == 'string' || Array.isArray(l[0])
      ? ((a = l[0]), (r = l.slice(1, l.length)), (i = e))
      : ((a = l[0].events), (r = l[0].data), (i = l[0].context || e)),
      r.unshift(i);
    var o = Array.isArray(a) ? a : a.split(' ');
    return (
      o.forEach(function (u) {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach(function (f) {
            f.apply(i, [u].concat(H(r)));
          }),
          e.eventsListeners &&
            e.eventsListeners[u] &&
            e.eventsListeners[u].forEach(function (f) {
              f.apply(i, r);
            });
      }),
      e
    );
  }
};
function _a() {
  var t = this,
    e,
    a,
    r = t.$el;
  typeof t.params.width != 'undefined' && t.params.width !== null ? (e = t.params.width) : (e = r[0].clientWidth),
    typeof t.params.height != 'undefined' && t.params.height !== null ? (a = t.params.height) : (a = r[0].clientHeight),
    !((e === 0 && t.isHorizontal()) || (a === 0 && t.isVertical())) &&
      ((e = e - parseInt(r.css('padding-left') || 0, 10) - parseInt(r.css('padding-right') || 0, 10)),
      (a = a - parseInt(r.css('padding-top') || 0, 10) - parseInt(r.css('padding-bottom') || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(a) && (a = 0),
      Object.assign(t, { width: e, height: a, size: t.isHorizontal() ? e : a }));
}
function qa() {
  var t = this;
  function e(L) {
    return t.isHorizontal()
      ? L
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom'
        }[L];
  }
  function a(L, ae) {
    return parseFloat(L.getPropertyValue(e(ae)) || 0);
  }
  var r = t.params,
    i = t.$wrapperEl,
    n = t.size,
    l = t.rtlTranslate,
    s = t.wrongRTL,
    o = t.virtual && r.virtual.enabled,
    u = o ? t.virtual.slides.length : t.slides.length,
    f = i.children('.'.concat(t.params.slideClass)),
    p = o ? t.virtual.slides.length : f.length,
    d = [],
    h = [],
    c = [],
    v = r.slidesOffsetBefore;
  typeof v == 'function' && (v = r.slidesOffsetBefore.call(t));
  var m = r.slidesOffsetAfter;
  typeof m == 'function' && (m = r.slidesOffsetAfter.call(t));
  var g = t.snapGrid.length,
    y = t.slidesGrid.length,
    w = r.spaceBetween,
    b = -v,
    E = 0,
    M = 0;
  if (typeof n != 'undefined') {
    typeof w == 'string' && w.indexOf('%') >= 0 && (w = (parseFloat(w.replace('%', '')) / 100) * n),
      (t.virtualSize = -w),
      l
        ? f.css({ marginLeft: '', marginBottom: '', marginTop: '' })
        : f.css({ marginRight: '', marginBottom: '', marginTop: '' }),
      r.centeredSlides &&
        r.cssMode &&
        (ge(t.wrapperEl, '--swiper-centered-offset-before', ''), ge(t.wrapperEl, '--swiper-centered-offset-after', ''));
    var P = r.grid && r.grid.rows > 1 && t.grid;
    P && t.grid.initSlides(p);
    for (
      var S,
        I =
          r.slidesPerView === 'auto' &&
          r.breakpoints &&
          Object.keys(r.breakpoints).filter(function (L) {
            return typeof r.breakpoints[L].slidesPerView != 'undefined';
          }).length > 0,
        T = 0;
      T < p;
      T += 1
    ) {
      S = 0;
      var x = f.eq(T);
      if ((P && t.grid.updateSlide(T, x, p, e), x.css('display') !== 'none')) {
        if (r.slidesPerView === 'auto') {
          I && (f[T].style[e('width')] = '');
          var O = getComputedStyle(x[0]),
            B = x[0].style.transform,
            A = x[0].style.webkitTransform;
          if ((B && (x[0].style.transform = 'none'), A && (x[0].style.webkitTransform = 'none'), r.roundLengths))
            S = t.isHorizontal() ? x.outerWidth(!0) : x.outerHeight(!0);
          else {
            var Q = a(O, 'width'),
              k = a(O, 'padding-left'),
              K = a(O, 'padding-right'),
              ee = a(O, 'margin-left'),
              W = a(O, 'margin-right'),
              X = O.getPropertyValue('box-sizing');
            if (X && X === 'border-box') S = Q + ee + W;
            else {
              var Y = x[0],
                _ = Y.clientWidth,
                te = Y.offsetWidth;
              S = Q + k + K + ee + W + (te - _);
            }
          }
          B && (x[0].style.transform = B), A && (x[0].style.webkitTransform = A), r.roundLengths && (S = Math.floor(S));
        } else
          (S = (n - (r.slidesPerView - 1) * w) / r.slidesPerView),
            r.roundLengths && (S = Math.floor(S)),
            f[T] && (f[T].style[e('width')] = ''.concat(S, 'px'));
        f[T] && (f[T].swiperSlideSize = S),
          c.push(S),
          r.centeredSlides
            ? ((b = b + S / 2 + E / 2 + w),
              E === 0 && T !== 0 && (b = b - n / 2 - w),
              T === 0 && (b = b - n / 2 - w),
              Math.abs(b) < 1 / 1e3 && (b = 0),
              r.roundLengths && (b = Math.floor(b)),
              M % r.slidesPerGroup === 0 && d.push(b),
              h.push(b))
            : (r.roundLengths && (b = Math.floor(b)),
              (M - Math.min(t.params.slidesPerGroupSkip, M)) % t.params.slidesPerGroup === 0 && d.push(b),
              h.push(b),
              (b = b + S + w)),
          (t.virtualSize += S + w),
          (E = S),
          (M += 1);
      }
    }
    if (
      ((t.virtualSize = Math.max(t.virtualSize, n) + m),
      l &&
        s &&
        (r.effect === 'slide' || r.effect === 'coverflow') &&
        i.css({ width: ''.concat(t.virtualSize + r.spaceBetween, 'px') }),
      r.setWrapperSize && i.css(j({}, e('width'), ''.concat(t.virtualSize + r.spaceBetween, 'px'))),
      P && t.grid.updateWrapperSize(S, d, e),
      !r.centeredSlides)
    ) {
      for (var Ge = [], ue = 0; ue < d.length; ue += 1) {
        var Se = d[ue];
        r.roundLengths && (Se = Math.floor(Se)), d[ue] <= t.virtualSize - n && Ge.push(Se);
      }
      (d = Ge), Math.floor(t.virtualSize - n) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - n);
    }
    if ((d.length === 0 && (d = [0]), r.spaceBetween !== 0)) {
      var Ot = t.isHorizontal() && l ? 'marginLeft' : e('marginRight');
      f.filter(function (L, ae) {
        return r.cssMode ? ae !== f.length - 1 : !0;
      }).css(j({}, Ot, ''.concat(w, 'px')));
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      var Ce = 0;
      c.forEach(function (L) {
        Ce += L + (r.spaceBetween ? r.spaceBetween : 0);
      }),
        (Ce -= r.spaceBetween);
      var Re = Ce - n;
      d = d.map(function (L) {
        return L < 0 ? -v : L > Re ? Re + m : L;
      });
    }
    if (r.centerInsufficientSlides) {
      var fe = 0;
      if (
        (c.forEach(function (L) {
          fe += L + (r.spaceBetween ? r.spaceBetween : 0);
        }),
        (fe -= r.spaceBetween),
        fe < n)
      ) {
        var Fe = (n - fe) / 2;
        d.forEach(function (L, ae) {
          d[ae] = L - Fe;
        }),
          h.forEach(function (L, ae) {
            h[ae] = L + Fe;
          });
      }
    }
    if (
      (Object.assign(t, { slides: f, snapGrid: d, slidesGrid: h, slidesSizesGrid: c }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      ge(t.wrapperEl, '--swiper-centered-offset-before', ''.concat(-d[0], 'px')),
        ge(t.wrapperEl, '--swiper-centered-offset-after', ''.concat(t.size / 2 - c[c.length - 1] / 2, 'px'));
      var Mt = -t.snapGrid[0],
        It = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map(function (L) {
        return L + Mt;
      })),
        (t.slidesGrid = t.slidesGrid.map(function (L) {
          return L + It;
        }));
    }
    if (
      (p !== u && t.emit('slidesLengthChange'),
      d.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
      h.length !== y && t.emit('slidesGridLengthChange'),
      r.watchSlidesProgress && t.updateSlidesOffset(),
      !o && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))
    ) {
      var Te = ''.concat(r.containerModifierClass, 'backface-hidden'),
        je = t.$el.hasClass(Te);
      p <= r.maxBackfaceHiddenSlides ? je || t.$el.addClass(Te) : je && t.$el.removeClass(Te);
    }
  }
}
function Xa(t) {
  var e = this,
    a = [],
    r = e.virtual && e.params.virtual.enabled,
    i = 0,
    n;
  typeof t == 'number' ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  var l = function (f) {
    return r
      ? e.slides.filter(function (p) {
          return parseInt(p.getAttribute('data-swiper-slide-index'), 10) === f;
        })[0]
      : e.slides.eq(f)[0];
  };
  if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      e.visibleSlides.each(function (u) {
        a.push(u);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        var s = e.activeIndex + n;
        if (s > e.slides.length && !r) break;
        a.push(l(s));
      }
  else a.push(l(e.activeIndex));
  for (n = 0; n < a.length; n += 1)
    if (typeof a[n] != 'undefined') {
      var o = a[n].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && e.$wrapperEl.css('height', ''.concat(i, 'px'));
}
function Ya() {
  for (var t = this, e = t.slides, a = 0; a < e.length; a += 1)
    e[a].swiperSlideOffset = t.isHorizontal() ? e[a].offsetLeft : e[a].offsetTop;
}
function Ua(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  var e = this,
    a = e.params,
    r = e.slides,
    i = e.rtlTranslate,
    n = e.snapGrid;
  if (r.length !== 0) {
    typeof r[0].swiperSlideOffset == 'undefined' && e.updateSlidesOffset();
    var l = -t;
    i && (l = t), r.removeClass(a.slideVisibleClass), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    for (var s = 0; s < r.length; s += 1) {
      var o = r[s],
        u = o.swiperSlideOffset;
      a.cssMode && a.centeredSlides && (u -= r[0].swiperSlideOffset);
      var f = (l + (a.centeredSlides ? e.minTranslate() : 0) - u) / (o.swiperSlideSize + a.spaceBetween),
        p = (l - n[0] + (a.centeredSlides ? e.minTranslate() : 0) - u) / (o.swiperSlideSize + a.spaceBetween),
        d = -(l - u),
        h = d + e.slidesSizesGrid[s],
        c = (d >= 0 && d < e.size - 1) || (h > 1 && h <= e.size) || (d <= 0 && h >= e.size);
      c && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(s), r.eq(s).addClass(a.slideVisibleClass)),
        (o.progress = i ? -f : f),
        (o.originalProgress = i ? -p : p);
    }
    e.visibleSlides = C(e.visibleSlides);
  }
}
function Za(t) {
  var e = this;
  if (typeof t == 'undefined') {
    var a = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * a) || 0;
  }
  var r = e.params,
    i = e.maxTranslate() - e.minTranslate(),
    n = e.progress,
    l = e.isBeginning,
    s = e.isEnd,
    o = l,
    u = s;
  i === 0 ? ((n = 0), (l = !0), (s = !0)) : ((n = (t - e.minTranslate()) / i), (l = n <= 0), (s = n >= 1)),
    Object.assign(e, { progress: n, isBeginning: l, isEnd: s }),
    (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) && e.updateSlidesProgress(t),
    l && !o && e.emit('reachBeginning toEdge'),
    s && !u && e.emit('reachEnd toEdge'),
    ((o && !l) || (u && !s)) && e.emit('fromEdge'),
    e.emit('progress', n);
}
function Ja() {
  var t = this,
    e = t.slides,
    a = t.params,
    r = t.$wrapperEl,
    i = t.activeIndex,
    n = t.realIndex,
    l = t.virtual && a.virtual.enabled;
  e.removeClass(
    ''
      .concat(a.slideActiveClass, ' ')
      .concat(a.slideNextClass, ' ')
      .concat(a.slidePrevClass, ' ')
      .concat(a.slideDuplicateActiveClass, ' ')
      .concat(a.slideDuplicateNextClass, ' ')
      .concat(a.slideDuplicatePrevClass)
  );
  var s;
  l ? (s = t.$wrapperEl.find('.'.concat(a.slideClass, '[data-swiper-slide-index="').concat(i, '"]'))) : (s = e.eq(i)),
    s.addClass(a.slideActiveClass),
    a.loop &&
      (s.hasClass(a.slideDuplicateClass)
        ? r
            .children(
              '.'
                .concat(a.slideClass, ':not(.')
                .concat(a.slideDuplicateClass, ')[data-swiper-slide-index="')
                .concat(n, '"]')
            )
            .addClass(a.slideDuplicateActiveClass)
        : r
            .children(
              '.'.concat(a.slideClass, '.').concat(a.slideDuplicateClass, '[data-swiper-slide-index="').concat(n, '"]')
            )
            .addClass(a.slideDuplicateActiveClass));
  var o = s.nextAll('.'.concat(a.slideClass)).eq(0).addClass(a.slideNextClass);
  a.loop && o.length === 0 && ((o = e.eq(0)), o.addClass(a.slideNextClass));
  var u = s.prevAll('.'.concat(a.slideClass)).eq(0).addClass(a.slidePrevClass);
  a.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(a.slidePrevClass)),
    a.loop &&
      (o.hasClass(a.slideDuplicateClass)
        ? r
            .children(
              '.'
                .concat(a.slideClass, ':not(.')
                .concat(a.slideDuplicateClass, ')[data-swiper-slide-index="')
                .concat(o.attr('data-swiper-slide-index'), '"]')
            )
            .addClass(a.slideDuplicateNextClass)
        : r
            .children(
              '.'
                .concat(a.slideClass, '.')
                .concat(a.slideDuplicateClass, '[data-swiper-slide-index="')
                .concat(o.attr('data-swiper-slide-index'), '"]')
            )
            .addClass(a.slideDuplicateNextClass),
      u.hasClass(a.slideDuplicateClass)
        ? r
            .children(
              '.'
                .concat(a.slideClass, ':not(.')
                .concat(a.slideDuplicateClass, ')[data-swiper-slide-index="')
                .concat(u.attr('data-swiper-slide-index'), '"]')
            )
            .addClass(a.slideDuplicatePrevClass)
        : r
            .children(
              '.'
                .concat(a.slideClass, '.')
                .concat(a.slideDuplicateClass, '[data-swiper-slide-index="')
                .concat(u.attr('data-swiper-slide-index'), '"]')
            )
            .addClass(a.slideDuplicatePrevClass)),
    t.emitSlidesClasses();
}
function Qa(t) {
  var e = this,
    a = e.rtlTranslate ? e.translate : -e.translate,
    r = e.slidesGrid,
    i = e.snapGrid,
    n = e.params,
    l = e.activeIndex,
    s = e.realIndex,
    o = e.snapIndex,
    u = t,
    f;
  if (typeof u == 'undefined') {
    for (var p = 0; p < r.length; p += 1)
      typeof r[p + 1] != 'undefined'
        ? a >= r[p] && a < r[p + 1] - (r[p + 1] - r[p]) / 2
          ? (u = p)
          : a >= r[p] && a < r[p + 1] && (u = p + 1)
        : a >= r[p] && (u = p);
    n.normalizeSlideIndex && (u < 0 || typeof u == 'undefined') && (u = 0);
  }
  if (i.indexOf(a) >= 0) f = i.indexOf(a);
  else {
    var d = Math.min(n.slidesPerGroupSkip, u);
    f = d + Math.floor((u - d) / n.slidesPerGroup);
  }
  if ((f >= i.length && (f = i.length - 1), u === l)) {
    f !== o && ((e.snapIndex = f), e.emit('snapIndexChange'));
    return;
  }
  var h = parseInt(e.slides.eq(u).attr('data-swiper-slide-index') || u, 10);
  Object.assign(e, { snapIndex: f, realIndex: h, previousIndex: l, activeIndex: u }),
    e.emit('activeIndexChange'),
    e.emit('snapIndexChange'),
    s !== h && e.emit('realIndexChange'),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange');
}
function Ka(t) {
  var e = this,
    a = e.params,
    r = C(t).closest('.'.concat(a.slideClass))[0],
    i = !1,
    n;
  if (r) {
    for (var l = 0; l < e.slides.length; l += 1)
      if (e.slides[l] === r) {
        (i = !0), (n = l);
        break;
      }
  }
  if (r && i)
    (e.clickedSlide = r),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(C(r).attr('data-swiper-slide-index'), 10))
        : (e.clickedIndex = n);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  a.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide();
}
var er = {
  updateSize: _a,
  updateSlides: qa,
  updateAutoHeight: Xa,
  updateSlidesOffset: Ya,
  updateSlidesProgress: Ua,
  updateProgress: Za,
  updateSlidesClasses: Ja,
  updateActiveIndex: Qa,
  updateClickedSlide: Ka
};
function tr(t) {
  t === void 0 && (t = this.isHorizontal() ? 'x' : 'y');
  var e = this,
    a = e.params,
    r = e.rtlTranslate,
    i = e.translate,
    n = e.$wrapperEl;
  if (a.virtualTranslate) return r ? -i : i;
  if (a.cssMode) return i;
  var l = Na(n[0], t);
  return r && (l = -l), l || 0;
}
function ar(t, e) {
  var a = this,
    r = a.rtlTranslate,
    i = a.params,
    n = a.$wrapperEl,
    l = a.wrapperEl,
    s = a.progress,
    o = 0,
    u = 0,
    f = 0;
  a.isHorizontal() ? (o = r ? -t : t) : (u = t),
    i.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
    i.cssMode
      ? (l[a.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = a.isHorizontal() ? -o : -u)
      : i.virtualTranslate || n.transform('translate3d('.concat(o, 'px, ').concat(u, 'px, ').concat(f, 'px)')),
    (a.previousTranslate = a.translate),
    (a.translate = a.isHorizontal() ? o : u);
  var p,
    d = a.maxTranslate() - a.minTranslate();
  d === 0 ? (p = 0) : (p = (t - a.minTranslate()) / d),
    p !== s && a.updateProgress(t),
    a.emit('setTranslate', a.translate, e);
}
function rr() {
  return -this.snapGrid[0];
}
function ir() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function nr(t, e, a, r, i) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), a === void 0 && (a = !0), r === void 0 && (r = !0);
  var n = this,
    l = n.params,
    s = n.wrapperEl;
  if (n.animating && l.preventInteractionOnTransition) return !1;
  var o = n.minTranslate(),
    u = n.maxTranslate(),
    f;
  if ((r && t > o ? (f = o) : r && t < u ? (f = u) : (f = t), n.updateProgress(f), l.cssMode)) {
    var p = n.isHorizontal();
    if (e === 0) s[p ? 'scrollLeft' : 'scrollTop'] = -f;
    else {
      var d;
      if (!n.support.smoothScroll) return st({ swiper: n, targetPosition: -f, side: p ? 'left' : 'top' }), !0;
      s.scrollTo(((d = {}), j(d, p ? 'left' : 'top', -f), j(d, 'behavior', 'smooth'), d));
    }
    return !0;
  }
  return (
    e === 0
      ? (n.setTransition(0), n.setTranslate(f), a && (n.emit('beforeTransitionStart', e, i), n.emit('transitionEnd')))
      : (n.setTransition(e),
        n.setTranslate(f),
        a && (n.emit('beforeTransitionStart', e, i), n.emit('transitionStart')),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (c) {
              !n ||
                n.destroyed ||
                (c.target === this &&
                  (n.$wrapperEl[0].removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                  n.$wrapperEl[0].removeEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  a && n.emit('transitionEnd')));
            }),
          n.$wrapperEl[0].addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
          n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var sr = { getTranslate: tr, setTranslate: ar, minTranslate: rr, maxTranslate: ir, translateTo: nr };
function lr(t, e) {
  var a = this;
  a.params.cssMode || a.$wrapperEl.transition(t), a.emit('setTransition', t, e);
}
function ot(t) {
  var e = t.swiper,
    a = t.runCallbacks,
    r = t.direction,
    i = t.step,
    n = e.activeIndex,
    l = e.previousIndex,
    s = r;
  if (
    (s || (n > l ? (s = 'next') : n < l ? (s = 'prev') : (s = 'reset')), e.emit('transition'.concat(i)), a && n !== l)
  ) {
    if (s === 'reset') {
      e.emit('slideResetTransition'.concat(i));
      return;
    }
    e.emit('slideChangeTransition'.concat(i)),
      s === 'next' ? e.emit('slideNextTransition'.concat(i)) : e.emit('slidePrevTransition'.concat(i));
  }
}
function or(t, e) {
  t === void 0 && (t = !0);
  var a = this,
    r = a.params;
  r.cssMode || (r.autoHeight && a.updateAutoHeight(), ot({ swiper: a, runCallbacks: t, direction: e, step: 'Start' }));
}
function dr(t, e) {
  t === void 0 && (t = !0);
  var a = this,
    r = a.params;
  (a.animating = !1), !r.cssMode && (a.setTransition(0), ot({ swiper: a, runCallbacks: t, direction: e, step: 'End' }));
}
var ur = { setTransition: lr, transitionStart: or, transitionEnd: dr };
function fr(t, e, a, r, i) {
  if (
    (t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    a === void 0 && (a = !0),
    typeof t != 'number' && typeof t != 'string')
  )
    throw new Error(
      "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(F(t), '] given.')
    );
  if (typeof t == 'string') {
    var n = parseInt(t, 10),
      l = isFinite(n);
    if (!l)
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(t, '] given.'));
    t = n;
  }
  var s = this,
    o = t;
  o < 0 && (o = 0);
  var u = s.params,
    f = s.snapGrid,
    p = s.slidesGrid,
    d = s.previousIndex,
    h = s.activeIndex,
    c = s.rtlTranslate,
    v = s.wrapperEl,
    m = s.enabled;
  if ((s.animating && u.preventInteractionOnTransition) || (!m && !r && !i)) return !1;
  var g = Math.min(s.params.slidesPerGroupSkip, o),
    y = g + Math.floor((o - g) / s.params.slidesPerGroup);
  y >= f.length && (y = f.length - 1), (h || u.initialSlide || 0) === (d || 0) && a && s.emit('beforeSlideChangeStart');
  var w = -f[y];
  if ((s.updateProgress(w), u.normalizeSlideIndex))
    for (var b = 0; b < p.length; b += 1) {
      var E = -Math.floor(w * 100),
        M = Math.floor(p[b] * 100),
        P = Math.floor(p[b + 1] * 100);
      typeof p[b + 1] != 'undefined'
        ? E >= M && E < P - (P - M) / 2
          ? (o = b)
          : E >= M && E < P && (o = b + 1)
        : E >= M && (o = b);
    }
  if (
    s.initialized &&
    o !== h &&
    ((!s.allowSlideNext && w < s.translate && w < s.minTranslate()) ||
      (!s.allowSlidePrev && w > s.translate && w > s.maxTranslate() && (h || 0) !== o))
  )
    return !1;
  var S;
  if (
    (o > h ? (S = 'next') : o < h ? (S = 'prev') : (S = 'reset'),
    (c && -w === s.translate) || (!c && w === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      u.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      u.effect !== 'slide' && s.setTranslate(w),
      S !== 'reset' && (s.transitionStart(a, S), s.transitionEnd(a, S)),
      !1
    );
  if (u.cssMode) {
    var I = s.isHorizontal(),
      T = c ? w : -w;
    if (e === 0) {
      var x = s.virtual && s.params.virtual.enabled;
      x && ((s.wrapperEl.style.scrollSnapType = 'none'), (s._immediateVirtual = !0)),
        (v[I ? 'scrollLeft' : 'scrollTop'] = T),
        x &&
          requestAnimationFrame(function () {
            (s.wrapperEl.style.scrollSnapType = ''), (s._swiperImmediateVirtual = !1);
          });
    } else {
      var O;
      if (!s.support.smoothScroll) return st({ swiper: s, targetPosition: T, side: I ? 'left' : 'top' }), !0;
      v.scrollTo(((O = {}), j(O, I ? 'left' : 'top', T), j(O, 'behavior', 'smooth'), O));
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(w),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit('beforeTransitionStart', e, r),
    s.transitionStart(a, S),
    e === 0
      ? s.transitionEnd(a, S)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (A) {
            !s ||
              s.destroyed ||
              (A.target === this &&
                (s.$wrapperEl[0].removeEventListener('transitionend', s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].removeEventListener('webkitTransitionEnd', s.onSlideToWrapperTransitionEnd),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(a, S)));
          }),
        s.$wrapperEl[0].addEventListener('transitionend', s.onSlideToWrapperTransitionEnd),
        s.$wrapperEl[0].addEventListener('webkitTransitionEnd', s.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function pr(t, e, a, r) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), a === void 0 && (a = !0);
  var i = this,
    n = t;
  return i.params.loop && (n += i.loopedSlides), i.slideTo(n, e, a, r);
}
function cr(t, e, a) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  var r = this,
    i = r.animating,
    n = r.enabled,
    l = r.params;
  if (!n) return r;
  var s = l.slidesPerGroup;
  l.slidesPerView === 'auto' &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (s = Math.max(r.slidesPerViewDynamic('current', !0), 1));
  var o = r.activeIndex < l.slidesPerGroupSkip ? 1 : s;
  if (l.loop) {
    if (i && l.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return l.rewind && r.isEnd ? r.slideTo(0, t, e, a) : r.slideTo(r.activeIndex + o, t, e, a);
}
function vr(t, e, a) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  var r = this,
    i = r.params,
    n = r.animating,
    l = r.snapGrid,
    s = r.slidesGrid,
    o = r.rtlTranslate,
    u = r.enabled;
  if (!u) return r;
  if (i.loop) {
    if (n && i.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  var f = o ? r.translate : -r.translate;
  function p(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  var d = p(f),
    h = l.map(function (y) {
      return p(y);
    }),
    c = l[h.indexOf(d) - 1];
  if (typeof c == 'undefined' && i.cssMode) {
    var v;
    l.forEach(function (y, w) {
      d >= y && (v = w);
    }),
      typeof v != 'undefined' && (c = l[v > 0 ? v - 1 : v]);
  }
  var m = 0;
  if (
    (typeof c != 'undefined' &&
      ((m = s.indexOf(c)),
      m < 0 && (m = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((m = m - r.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
    i.rewind && r.isBeginning)
  ) {
    var g =
      r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(g, t, e, a);
  }
  return r.slideTo(m, t, e, a);
}
function hr(t, e, a) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  var r = this;
  return r.slideTo(r.activeIndex, t, e, a);
}
function mr(t, e, a, r) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), r === void 0 && (r = 0.5);
  var i = this,
    n = i.activeIndex,
    l = Math.min(i.params.slidesPerGroupSkip, n),
    s = l + Math.floor((n - l) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[s]) {
    var u = i.snapGrid[s],
      f = i.snapGrid[s + 1];
    o - u > (f - u) * r && (n += i.params.slidesPerGroup);
  } else {
    var p = i.snapGrid[s - 1],
      d = i.snapGrid[s];
    o - p <= (d - p) * r && (n -= i.params.slidesPerGroup);
  }
  return (n = Math.max(n, 0)), (n = Math.min(n, i.slidesGrid.length - 1)), i.slideTo(n, t, e, a);
}
function gr() {
  var t = this,
    e = t.params,
    a = t.$wrapperEl,
    r = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView,
    i = t.clickedIndex,
    n;
  if (e.loop) {
    if (t.animating) return;
    (n = parseInt(C(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
      e.centeredSlides
        ? i < t.loopedSlides - r / 2 || i > t.slides.length - t.loopedSlides + r / 2
          ? (t.loopFix(),
            (i = a
              .children(
                '.'
                  .concat(e.slideClass, '[data-swiper-slide-index="')
                  .concat(n, '"]:not(.')
                  .concat(e.slideDuplicateClass, ')')
              )
              .eq(0)
              .index()),
            ie(function () {
              t.slideTo(i);
            }))
          : t.slideTo(i)
        : i > t.slides.length - r
        ? (t.loopFix(),
          (i = a
            .children(
              '.'
                .concat(e.slideClass, '[data-swiper-slide-index="')
                .concat(n, '"]:not(.')
                .concat(e.slideDuplicateClass, ')')
            )
            .eq(0)
            .index()),
          ie(function () {
            t.slideTo(i);
          }))
        : t.slideTo(i);
  } else t.slideTo(i);
}
var wr = {
  slideTo: fr,
  slideToLoop: pr,
  slideNext: cr,
  slidePrev: vr,
  slideReset: hr,
  slideToClosest: mr,
  slideToClickedSlide: gr
};
function yr() {
  var t = this,
    e = N(),
    a = t.params,
    r = t.$wrapperEl,
    i = r.children().length > 0 ? C(r.children()[0].parentNode) : r;
  i.children('.'.concat(a.slideClass, '.').concat(a.slideDuplicateClass)).remove();
  var n = i.children('.'.concat(a.slideClass));
  if (a.loopFillGroupWithBlank) {
    var l = a.slidesPerGroup - (n.length % a.slidesPerGroup);
    if (l !== a.slidesPerGroup) {
      for (var s = 0; s < l; s += 1) {
        var o = C(e.createElement('div')).addClass(''.concat(a.slideClass, ' ').concat(a.slideBlankClass));
        i.append(o);
      }
      n = i.children('.'.concat(a.slideClass));
    }
  }
  a.slidesPerView === 'auto' && !a.loopedSlides && (a.loopedSlides = n.length),
    (t.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10))),
    (t.loopedSlides += a.loopAdditionalSlides),
    t.loopedSlides > n.length && (t.loopedSlides = n.length);
  var u = [],
    f = [];
  n.each(function (h, c) {
    var v = C(h);
    c < t.loopedSlides && f.push(h),
      c < n.length && c >= n.length - t.loopedSlides && u.push(h),
      v.attr('data-swiper-slide-index', c);
  });
  for (var p = 0; p < f.length; p += 1) i.append(C(f[p].cloneNode(!0)).addClass(a.slideDuplicateClass));
  for (var d = u.length - 1; d >= 0; d -= 1) i.prepend(C(u[d].cloneNode(!0)).addClass(a.slideDuplicateClass));
}
function br() {
  var t = this;
  t.emit('beforeLoopFix');
  var e = t.activeIndex,
    a = t.slides,
    r = t.loopedSlides,
    i = t.allowSlidePrev,
    n = t.allowSlideNext,
    l = t.snapGrid,
    s = t.rtlTranslate,
    o;
  (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
  var u = -l[e],
    f = u - t.getTranslate();
  if (e < r) {
    (o = a.length - r * 3 + e), (o += r);
    var p = t.slideTo(o, 0, !1, !0);
    p && f !== 0 && t.setTranslate((s ? -t.translate : t.translate) - f);
  } else if (e >= a.length - r) {
    (o = -a.length + e + r), (o += r);
    var d = t.slideTo(o, 0, !1, !0);
    d && f !== 0 && t.setTranslate((s ? -t.translate : t.translate) - f);
  }
  (t.allowSlidePrev = i), (t.allowSlideNext = n), t.emit('loopFix');
}
function Sr() {
  var t = this,
    e = t.$wrapperEl,
    a = t.params,
    r = t.slides;
  e
    .children(
      '.'
        .concat(a.slideClass, '.')
        .concat(a.slideDuplicateClass, ',.')
        .concat(a.slideClass, '.')
        .concat(a.slideBlankClass)
    )
    .remove(),
    r.removeAttr('data-swiper-slide-index');
}
var Cr = { loopCreate: yr, loopFix: br, loopDestroy: Sr };
function Tr(t) {
  var e = this;
  if (!(e.support.touch || !e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode)) {
    var a = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl;
    (a.style.cursor = 'move'),
      (a.style.cursor = t ? '-webkit-grabbing' : '-webkit-grab'),
      (a.style.cursor = t ? '-moz-grabbin' : '-moz-grab'),
      (a.style.cursor = t ? 'grabbing' : 'grab');
  }
}
function Er() {
  var t = this;
  t.support.touch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t[t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '');
}
var xr = { setGrabCursor: Tr, unsetGrabCursor: Er };
function Pr(t, e) {
  e === void 0 && (e = this);
  function a(r) {
    if (!r || r === N() || r === z()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    var i = r.closest(t);
    return i || a(r.getRootNode().host);
  }
  return a(e);
}
function Or(t) {
  var e = this,
    a = N(),
    r = z(),
    i = e.touchEventsData,
    n = e.params,
    l = e.touches,
    s = e.enabled;
  if (!!s && !(e.animating && n.preventInteractionOnTransition)) {
    !e.animating && n.cssMode && n.loop && e.loopFix();
    var o = t;
    o.originalEvent && (o = o.originalEvent);
    var u = C(o.target);
    if (
      !(n.touchEventsTarget === 'wrapper' && !u.closest(e.wrapperEl).length) &&
      ((i.isTouchEvent = o.type === 'touchstart'),
      !(!i.isTouchEvent && 'which' in o && o.which === 3) &&
        !(!i.isTouchEvent && 'button' in o && o.button > 0) &&
        !(i.isTouched && i.isMoved))
    ) {
      var f = !!n.noSwipingClass && n.noSwipingClass !== '';
      f && o.target && o.target.shadowRoot && t.path && t.path[0] && (u = C(t.path[0]));
      var p = n.noSwipingSelector ? n.noSwipingSelector : '.'.concat(n.noSwipingClass),
        d = !!(o.target && o.target.shadowRoot);
      if (n.noSwiping && (d ? Pr(p, o.target) : u.closest(p)[0])) {
        e.allowClick = !0;
        return;
      }
      if (!(n.swipeHandler && !u.closest(n.swipeHandler)[0])) {
        (l.currentX = o.type === 'touchstart' ? o.targetTouches[0].pageX : o.pageX),
          (l.currentY = o.type === 'touchstart' ? o.targetTouches[0].pageY : o.pageY);
        var h = l.currentX,
          c = l.currentY,
          v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
          m = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (v && (h <= m || h >= r.innerWidth - m))
          if (v === 'prevent') t.preventDefault();
          else return;
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }),
          (l.startX = h),
          (l.startY = c),
          (i.touchStartTime = V()),
          (e.allowClick = !0),
          e.updateSize(),
          (e.swipeDirection = void 0),
          n.threshold > 0 && (i.allowThresholdMove = !1),
          o.type !== 'touchstart')
        ) {
          var g = !0;
          u.is(i.focusableElements) && ((g = !1), u[0].nodeName === 'SELECT' && (i.isTouched = !1)),
            a.activeElement &&
              C(a.activeElement).is(i.focusableElements) &&
              a.activeElement !== u[0] &&
              a.activeElement.blur();
          var y = g && e.allowTouchMove && n.touchStartPreventDefault;
          (n.touchStartForcePreventDefault || y) && !u[0].isContentEditable && o.preventDefault();
        }
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          e.freeMode &&
          e.animating &&
          !n.cssMode &&
          e.freeMode.onTouchStart(),
          e.emit('touchStart', o);
      }
    }
  }
}
function Mr(t) {
  var e = N(),
    a = this,
    r = a.touchEventsData,
    i = a.params,
    n = a.touches,
    l = a.rtlTranslate,
    s = a.enabled;
  if (!!s) {
    var o = t;
    if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && a.emit('touchMoveOpposite', o);
      return;
    }
    if (!(r.isTouchEvent && o.type !== 'touchmove')) {
      var u = o.type === 'touchmove' && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
        f = o.type === 'touchmove' ? u.pageX : o.pageX,
        p = o.type === 'touchmove' ? u.pageY : o.pageY;
      if (o.preventedByNestedSwiper) {
        (n.startX = f), (n.startY = p);
        return;
      }
      if (!a.allowTouchMove) {
        C(o.target).is(r.focusableElements) || (a.allowClick = !1),
          r.isTouched &&
            (Object.assign(n, { startX: f, startY: p, currentX: f, currentY: p }), (r.touchStartTime = V()));
        return;
      }
      if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
        if (a.isVertical()) {
          if ((p < n.startY && a.translate <= a.maxTranslate()) || (p > n.startY && a.translate >= a.minTranslate())) {
            (r.isTouched = !1), (r.isMoved = !1);
            return;
          }
        } else if (
          (f < n.startX && a.translate <= a.maxTranslate()) ||
          (f > n.startX && a.translate >= a.minTranslate())
        )
          return;
      }
      if (r.isTouchEvent && e.activeElement && o.target === e.activeElement && C(o.target).is(r.focusableElements)) {
        (r.isMoved = !0), (a.allowClick = !1);
        return;
      }
      if ((r.allowTouchCallbacks && a.emit('touchMove', o), !(o.targetTouches && o.targetTouches.length > 1))) {
        (n.currentX = f), (n.currentY = p);
        var d = n.currentX - n.startX,
          h = n.currentY - n.startY;
        if (!(a.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)) < a.params.threshold)) {
          if (typeof r.isScrolling == 'undefined') {
            var c;
            (a.isHorizontal() && n.currentY === n.startY) || (a.isVertical() && n.currentX === n.startX)
              ? (r.isScrolling = !1)
              : d * d + h * h >= 25 &&
                ((c = (Math.atan2(Math.abs(h), Math.abs(d)) * 180) / Math.PI),
                (r.isScrolling = a.isHorizontal() ? c > i.touchAngle : 90 - c > i.touchAngle));
          }
          if (
            (r.isScrolling && a.emit('touchMoveOpposite', o),
            typeof r.startMoving == 'undefined' &&
              (n.currentX !== n.startX || n.currentY !== n.startY) &&
              (r.startMoving = !0),
            r.isScrolling)
          ) {
            r.isTouched = !1;
            return;
          }
          if (!!r.startMoving) {
            (a.allowClick = !1),
              !i.cssMode && o.cancelable && o.preventDefault(),
              i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
              r.isMoved ||
                (i.loop && !i.cssMode && a.loopFix(),
                (r.startTranslate = a.getTranslate()),
                a.setTransition(0),
                a.animating && a.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                (r.allowMomentumBounce = !1),
                i.grabCursor && (a.allowSlideNext === !0 || a.allowSlidePrev === !0) && a.setGrabCursor(!0),
                a.emit('sliderFirstMove', o)),
              a.emit('sliderMove', o),
              (r.isMoved = !0);
            var v = a.isHorizontal() ? d : h;
            (n.diff = v),
              (v *= i.touchRatio),
              l && (v = -v),
              (a.swipeDirection = v > 0 ? 'prev' : 'next'),
              (r.currentTranslate = v + r.startTranslate);
            var m = !0,
              g = i.resistanceRatio;
            if (
              (i.touchReleaseOnEdges && (g = 0),
              v > 0 && r.currentTranslate > a.minTranslate()
                ? ((m = !1),
                  i.resistance &&
                    (r.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + r.startTranslate + v, g)))
                : v < 0 &&
                  r.currentTranslate < a.maxTranslate() &&
                  ((m = !1),
                  i.resistance &&
                    (r.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - r.startTranslate - v, g))),
              m && (o.preventedByNestedSwiper = !0),
              !a.allowSlideNext &&
                a.swipeDirection === 'next' &&
                r.currentTranslate < r.startTranslate &&
                (r.currentTranslate = r.startTranslate),
              !a.allowSlidePrev &&
                a.swipeDirection === 'prev' &&
                r.currentTranslate > r.startTranslate &&
                (r.currentTranslate = r.startTranslate),
              !a.allowSlidePrev && !a.allowSlideNext && (r.currentTranslate = r.startTranslate),
              i.threshold > 0)
            )
              if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
                if (!r.allowThresholdMove) {
                  (r.allowThresholdMove = !0),
                    (n.startX = n.currentX),
                    (n.startY = n.currentY),
                    (r.currentTranslate = r.startTranslate),
                    (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                  return;
                }
              } else {
                r.currentTranslate = r.startTranslate;
                return;
              }
            !i.followFinger ||
              i.cssMode ||
              (((i.freeMode && i.freeMode.enabled && a.freeMode) || i.watchSlidesProgress) &&
                (a.updateActiveIndex(), a.updateSlidesClasses()),
              a.params.freeMode && i.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(),
              a.updateProgress(r.currentTranslate),
              a.setTranslate(r.currentTranslate));
          }
        }
      }
    }
  }
}
function Ir(t) {
  var e = this,
    a = e.touchEventsData,
    r = e.params,
    i = e.touches,
    n = e.rtlTranslate,
    l = e.slidesGrid,
    s = e.enabled;
  if (!!s) {
    var o = t;
    if (
      (o.originalEvent && (o = o.originalEvent),
      a.allowTouchCallbacks && e.emit('touchEnd', o),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    ) {
      a.isMoved && r.grabCursor && e.setGrabCursor(!1), (a.isMoved = !1), (a.startMoving = !1);
      return;
    }
    r.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    var u = V(),
      f = u - a.touchStartTime;
    if (e.allowClick) {
      var p = o.path || (o.composedPath && o.composedPath());
      e.updateClickedSlide((p && p[0]) || o.target),
        e.emit('tap click', o),
        f < 300 && u - a.lastClickTime < 300 && e.emit('doubleTap doubleClick', o);
    }
    if (
      ((a.lastClickTime = V()),
      ie(function () {
        e.destroyed || (e.allowClick = !0);
      }),
      !a.isTouched || !a.isMoved || !e.swipeDirection || i.diff === 0 || a.currentTranslate === a.startTranslate)
    ) {
      (a.isTouched = !1), (a.isMoved = !1), (a.startMoving = !1);
      return;
    }
    (a.isTouched = !1), (a.isMoved = !1), (a.startMoving = !1);
    var d;
    if ((r.followFinger ? (d = n ? e.translate : -e.translate) : (d = -a.currentTranslate), !r.cssMode)) {
      if (e.params.freeMode && r.freeMode.enabled) {
        e.freeMode.onTouchEnd({ currentPos: d });
        return;
      }
      for (
        var h = 0, c = e.slidesSizesGrid[0], v = 0;
        v < l.length;
        v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        var m = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        typeof l[v + m] != 'undefined'
          ? d >= l[v] && d < l[v + m] && ((h = v), (c = l[v + m] - l[v]))
          : d >= l[v] && ((h = v), (c = l[l.length - 1] - l[l.length - 2]));
      }
      var g = null,
        y = null;
      r.rewind &&
        (e.isBeginning
          ? (y =
              e.params.virtual && e.params.virtual.enabled && e.virtual
                ? e.virtual.slides.length - 1
                : e.slides.length - 1)
          : e.isEnd && (g = 0));
      var w = (d - l[h]) / c,
        b = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (f > r.longSwipesMs) {
        if (!r.longSwipes) {
          e.slideTo(e.activeIndex);
          return;
        }
        e.swipeDirection === 'next' &&
          (w >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? g : h + b) : e.slideTo(h)),
          e.swipeDirection === 'prev' &&
            (w > 1 - r.longSwipesRatio
              ? e.slideTo(h + b)
              : y !== null && w < 0 && Math.abs(w) > r.longSwipesRatio
              ? e.slideTo(y)
              : e.slideTo(h));
      } else {
        if (!r.shortSwipes) {
          e.slideTo(e.activeIndex);
          return;
        }
        var E = e.navigation && (o.target === e.navigation.nextEl || o.target === e.navigation.prevEl);
        E
          ? o.target === e.navigation.nextEl
            ? e.slideTo(h + b)
            : e.slideTo(h)
          : (e.swipeDirection === 'next' && e.slideTo(g !== null ? g : h + b),
            e.swipeDirection === 'prev' && e.slideTo(y !== null ? y : h));
      }
    }
  }
}
function dt() {
  var t = this,
    e = t.params,
    a = t.el;
  if (!(a && a.offsetWidth === 0)) {
    e.breakpoints && t.setBreakpoint();
    var r = t.allowSlideNext,
      i = t.allowSlidePrev,
      n = t.snapGrid;
    (t.allowSlideNext = !0),
      (t.allowSlidePrev = !0),
      t.updateSize(),
      t.updateSlides(),
      t.updateSlidesClasses(),
      (e.slidesPerView === 'auto' || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides
        ? t.slideTo(t.slides.length - 1, 0, !1, !0)
        : t.slideTo(t.activeIndex, 0, !1, !0),
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
      (t.allowSlidePrev = i),
      (t.allowSlideNext = r),
      t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow();
  }
}
function Lr(t) {
  var e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && t.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation()));
}
function Br() {
  var t = this,
    e = t.wrapperEl,
    a = t.rtlTranslate,
    r = t.enabled;
  if (!!r) {
    (t.previousTranslate = t.translate),
      t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
      t.translate === -0 && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    var i,
      n = t.maxTranslate() - t.minTranslate();
    n === 0 ? (i = 0) : (i = (t.translate - t.minTranslate()) / n),
      i !== t.progress && t.updateProgress(a ? -t.translate : t.translate),
      t.emit('setTranslate', t.translate, !1);
  }
}
var ut = !1;
function zr() {}
var ft = function (e, a) {
  var r = N(),
    i = e.params,
    n = e.touchEvents,
    l = e.el,
    s = e.wrapperEl,
    o = e.device,
    u = e.support,
    f = !!i.nested,
    p = a === 'on' ? 'addEventListener' : 'removeEventListener',
    d = a;
  if (!u.touch) l[p](n.start, e.onTouchStart, !1), r[p](n.move, e.onTouchMove, f), r[p](n.end, e.onTouchEnd, !1);
  else {
    var h = n.start === 'touchstart' && u.passiveListener && i.passiveListeners ? { passive: !0, capture: !1 } : !1;
    l[p](n.start, e.onTouchStart, h),
      l[p](n.move, e.onTouchMove, u.passiveListener ? { passive: !1, capture: f } : f),
      l[p](n.end, e.onTouchEnd, h),
      n.cancel && l[p](n.cancel, e.onTouchEnd, h);
  }
  (i.preventClicks || i.preventClicksPropagation) && l[p]('click', e.onClick, !0),
    i.cssMode && s[p]('scroll', e.onScroll),
    i.updateOnWindowResize
      ? e[d](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', dt, !0)
      : e[d]('observerUpdate', dt, !0);
};
function Ar() {
  var t = this,
    e = N(),
    a = t.params,
    r = t.support;
  (t.onTouchStart = Or.bind(t)),
    (t.onTouchMove = Mr.bind(t)),
    (t.onTouchEnd = Ir.bind(t)),
    a.cssMode && (t.onScroll = Br.bind(t)),
    (t.onClick = Lr.bind(t)),
    r.touch && !ut && (e.addEventListener('touchstart', zr), (ut = !0)),
    ft(t, 'on');
}
function $r() {
  var t = this;
  ft(t, 'off');
}
var Nr = { attachEvents: Ar, detachEvents: $r },
  pt = function (e, a) {
    return e.grid && a.grid && a.grid.rows > 1;
  };
function Dr() {
  var t = this,
    e = t.activeIndex,
    a = t.initialized,
    r = t.loopedSlides,
    i = r === void 0 ? 0 : r,
    n = t.params,
    l = t.$el,
    s = n.breakpoints;
  if (!(!s || (s && Object.keys(s).length === 0))) {
    var o = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
    if (!(!o || t.currentBreakpoint === o)) {
      var u = o in s ? s[o] : void 0,
        f = u || t.originalParams,
        p = pt(t, n),
        d = pt(t, f),
        h = n.enabled;
      p && !d
        ? (l.removeClass(''.concat(n.containerModifierClass, 'grid ').concat(n.containerModifierClass, 'grid-column')),
          t.emitContainerClasses())
        : !p &&
          d &&
          (l.addClass(''.concat(n.containerModifierClass, 'grid')),
          ((f.grid.fill && f.grid.fill === 'column') || (!f.grid.fill && n.grid.fill === 'column')) &&
            l.addClass(''.concat(n.containerModifierClass, 'grid-column')),
          t.emitContainerClasses());
      var c = f.direction && f.direction !== n.direction,
        v = n.loop && (f.slidesPerView !== n.slidesPerView || c);
      c && a && t.changeDirection(), D(t.params, f);
      var m = t.params.enabled;
      Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
      }),
        h && !m ? t.disable() : !h && m && t.enable(),
        (t.currentBreakpoint = o),
        t.emit('_beforeBreakpoint', f),
        v && a && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - i + t.loopedSlides, 0, !1)),
        t.emit('breakpoint', f);
    }
  }
}
function kr(t, e, a) {
  if ((e === void 0 && (e = 'window'), !(!t || (e === 'container' && !a)))) {
    var r = !1,
      i = z(),
      n = e === 'window' ? i.innerHeight : a.clientHeight,
      l = Object.keys(t).map(function (p) {
        if (typeof p == 'string' && p.indexOf('@') === 0) {
          var d = parseFloat(p.substr(1)),
            h = n * d;
          return { value: h, point: p };
        }
        return { value: p, point: p };
      });
    l.sort(function (p, d) {
      return parseInt(p.value, 10) - parseInt(d.value, 10);
    });
    for (var s = 0; s < l.length; s += 1) {
      var o = l[s],
        u = o.point,
        f = o.value;
      e === 'window' ? i.matchMedia('(min-width: '.concat(f, 'px)')).matches && (r = u) : f <= a.clientWidth && (r = u);
    }
    return r || 'max';
  }
}
var Gr = { setBreakpoint: Dr, getBreakpoint: kr };
function Rr(t, e) {
  var a = [];
  return (
    t.forEach(function (r) {
      F(r) === 'object'
        ? Object.keys(r).forEach(function (i) {
            r[i] && a.push(e + i);
          })
        : typeof r == 'string' && a.push(e + r);
    }),
    a
  );
}
function Fr() {
  var t = this,
    e = t.classNames,
    a = t.params,
    r = t.rtl,
    i = t.$el,
    n = t.device,
    l = t.support,
    s = Rr(
      [
        'initialized',
        a.direction,
        { 'pointer-events': !l.touch },
        { 'free-mode': t.params.freeMode && a.freeMode.enabled },
        { autoheight: a.autoHeight },
        { rtl: r },
        { grid: a.grid && a.grid.rows > 1 },
        { 'grid-column': a.grid && a.grid.rows > 1 && a.grid.fill === 'column' },
        { android: n.android },
        { ios: n.ios },
        { 'css-mode': a.cssMode },
        { centered: a.cssMode && a.centeredSlides }
      ],
      a.containerModifierClass
    );
  e.push.apply(e, H(s)), i.addClass(H(e).join(' ')), t.emitContainerClasses();
}
function jr() {
  var t = this,
    e = t.$el,
    a = t.classNames;
  e.removeClass(a.join(' ')), t.emitContainerClasses();
}
var Hr = { addClasses: Fr, removeClasses: jr };
function Vr(t, e, a, r, i, n) {
  var l = z(),
    s;
  function o() {
    n && n();
  }
  var u = C(t).parent('picture')[0];
  !u && (!t.complete || !i) && e
    ? ((s = new l.Image()), (s.onload = o), (s.onerror = o), r && (s.sizes = r), a && (s.srcset = a), e && (s.src = e))
    : o();
}
function Wr() {
  var t = this;
  t.imagesToLoad = t.$el.find('img');
  function e() {
    typeof t == 'undefined' ||
      t === null ||
      !t ||
      t.destroyed ||
      (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1),
      t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')));
  }
  for (var a = 0; a < t.imagesToLoad.length; a += 1) {
    var r = t.imagesToLoad[a];
    t.loadImage(
      r,
      r.currentSrc || r.getAttribute('src'),
      r.srcset || r.getAttribute('srcset'),
      r.sizes || r.getAttribute('sizes'),
      !0,
      e
    );
  }
}
var _r = { loadImage: Vr, preloadImages: Wr };
function qr() {
  var t = this,
    e = t.isLocked,
    a = t.params,
    r = a.slidesOffsetBefore;
  if (r) {
    var i = t.slides.length - 1,
      n = t.slidesGrid[i] + t.slidesSizesGrid[i] + r * 2;
    t.isLocked = t.size > n;
  } else t.isLocked = t.snapGrid.length === 1;
  a.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    a.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock');
}
var Xr = { checkOverflow: qr },
  ct = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
function Yr(t, e) {
  return function (r) {
    r === void 0 && (r = {});
    var i = Object.keys(r)[0],
      n = r[i];
    if (F(n) !== 'object' || n === null) {
      D(e, r);
      return;
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 && t[i] === !0 && (t[i] = { auto: !0 }),
      !(i in t && 'enabled' in n))
    ) {
      D(e, r);
      return;
    }
    t[i] === !0 && (t[i] = { enabled: !0 }),
      F(t[i]) === 'object' && !('enabled' in t[i]) && (t[i].enabled = !0),
      t[i] || (t[i] = { enabled: !1 }),
      D(e, r);
  };
}
var Ne = {
    eventsEmitter: Wa,
    update: er,
    translate: sr,
    transition: ur,
    slide: wr,
    loop: Cr,
    grabCursor: xr,
    events: Nr,
    breakpoints: Gr,
    checkOverflow: Xr,
    classes: Hr,
    images: _r
  },
  De = {},
  ne = (function () {
    function t() {
      Ze(this, t);
      for (var e, a, r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
      if (
        (i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
          ? (a = i[0])
          : ((e = i[0]), (a = i[1])),
        a || (a = {}),
        (a = D({}, a)),
        e && !a.el && (a.el = e),
        a.el && C(a.el).length > 1)
      ) {
        var l = [];
        return (
          C(a.el).each(function (p) {
            var d = D({}, a, { el: p });
            l.push(new t(d));
          }),
          l
        );
      }
      var s = this;
      if (
        ((s.__swiper__ = !0),
        (s.support = lt()),
        (s.device = Ra({ userAgent: a.userAgent })),
        (s.browser = ja()),
        (s.eventsListeners = {}),
        (s.eventsAnyListeners = []),
        (s.modules = H(s.__modules__)),
        a.modules && Array.isArray(a.modules))
      ) {
        var o;
        (o = s.modules).push.apply(o, H(a.modules));
      }
      var u = {};
      s.modules.forEach(function (p) {
        p({
          swiper: s,
          extendParams: Yr(a, u),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s)
        });
      });
      var f = D({}, ct, u);
      return (
        (s.params = D({}, f, De, a)),
        (s.originalParams = D({}, s.params)),
        (s.passedParams = D({}, a)),
        s.params &&
          s.params.on &&
          Object.keys(s.params.on).forEach(function (p) {
            s.on(p, s.params.on[p]);
          }),
        s.params && s.params.onAny && s.onAny(s.params.onAny),
        (s.$ = C),
        Object.assign(s, {
          enabled: s.params.enabled,
          el: e,
          classNames: [],
          slides: C(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function () {
            return s.params.direction === 'horizontal';
          },
          isVertical: function () {
            return s.params.direction === 'vertical';
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: s.params.allowSlideNext,
          allowSlidePrev: s.params.allowSlidePrev,
          touchEvents: (function () {
            var d = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
              h = ['pointerdown', 'pointermove', 'pointerup'];
            return (
              (s.touchEventsTouch = { start: d[0], move: d[1], end: d[2], cancel: d[3] }),
              (s.touchEventsDesktop = { start: h[0], move: h[1], end: h[2] }),
              s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: s.params.focusableElements,
            lastClickTime: V(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: s.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0
        }),
        s.emit('_swiper'),
        s.params.init && s.init(),
        s
      );
    }
    return (
      Qe(
        t,
        [
          {
            key: 'enable',
            value: function () {
              var a = this;
              a.enabled || ((a.enabled = !0), a.params.grabCursor && a.setGrabCursor(), a.emit('enable'));
            }
          },
          {
            key: 'disable',
            value: function () {
              var a = this;
              !a.enabled || ((a.enabled = !1), a.params.grabCursor && a.unsetGrabCursor(), a.emit('disable'));
            }
          },
          {
            key: 'setProgress',
            value: function (a, r) {
              var i = this;
              a = Math.min(Math.max(a, 0), 1);
              var n = i.minTranslate(),
                l = i.maxTranslate(),
                s = (l - n) * a + n;
              i.translateTo(s, typeof r == 'undefined' ? 0 : r), i.updateActiveIndex(), i.updateSlidesClasses();
            }
          },
          {
            key: 'emitContainerClasses',
            value: function () {
              var a = this;
              if (!(!a.params._emitClasses || !a.el)) {
                var r = a.el.className.split(' ').filter(function (i) {
                  return i.indexOf('swiper') === 0 || i.indexOf(a.params.containerModifierClass) === 0;
                });
                a.emit('_containerClasses', r.join(' '));
              }
            }
          },
          {
            key: 'getSlideClasses',
            value: function (a) {
              var r = this;
              return a.className
                .split(' ')
                .filter(function (i) {
                  return i.indexOf('swiper-slide') === 0 || i.indexOf(r.params.slideClass) === 0;
                })
                .join(' ');
            }
          },
          {
            key: 'emitSlidesClasses',
            value: function () {
              var a = this;
              if (!(!a.params._emitClasses || !a.el)) {
                var r = [];
                a.slides.each(function (i) {
                  var n = a.getSlideClasses(i);
                  r.push({ slideEl: i, classNames: n }), a.emit('_slideClass', i, n);
                }),
                  a.emit('_slideClasses', r);
              }
            }
          },
          {
            key: 'slidesPerViewDynamic',
            value: function (a, r) {
              a === void 0 && (a = 'current'), r === void 0 && (r = !1);
              var i = this,
                n = i.params,
                l = i.slides,
                s = i.slidesGrid,
                o = i.slidesSizesGrid,
                u = i.size,
                f = i.activeIndex,
                p = 1;
              if (n.centeredSlides) {
                for (var d = l[f].swiperSlideSize, h, c = f + 1; c < l.length; c += 1)
                  l[c] && !h && ((d += l[c].swiperSlideSize), (p += 1), d > u && (h = !0));
                for (var v = f - 1; v >= 0; v -= 1)
                  l[v] && !h && ((d += l[v].swiperSlideSize), (p += 1), d > u && (h = !0));
              } else if (a === 'current')
                for (var m = f + 1; m < l.length; m += 1) {
                  var g = r ? s[m] + o[m] - s[f] < u : s[m] - s[f] < u;
                  g && (p += 1);
                }
              else
                for (var y = f - 1; y >= 0; y -= 1) {
                  var w = s[f] - s[y] < u;
                  w && (p += 1);
                }
              return p;
            }
          },
          {
            key: 'update',
            value: function () {
              var a = this;
              if (!a || a.destroyed) return;
              var r = a.snapGrid,
                i = a.params;
              i.breakpoints && a.setBreakpoint(),
                a.updateSize(),
                a.updateSlides(),
                a.updateProgress(),
                a.updateSlidesClasses();
              function n() {
                var s = a.rtlTranslate ? a.translate * -1 : a.translate,
                  o = Math.min(Math.max(s, a.maxTranslate()), a.minTranslate());
                a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses();
              }
              var l;
              a.params.freeMode && a.params.freeMode.enabled
                ? (n(), a.params.autoHeight && a.updateAutoHeight())
                : ((a.params.slidesPerView === 'auto' || a.params.slidesPerView > 1) &&
                  a.isEnd &&
                  !a.params.centeredSlides
                    ? (l = a.slideTo(a.slides.length - 1, 0, !1, !0))
                    : (l = a.slideTo(a.activeIndex, 0, !1, !0)),
                  l || n()),
                i.watchOverflow && r !== a.snapGrid && a.checkOverflow(),
                a.emit('update');
            }
          },
          {
            key: 'changeDirection',
            value: function (a, r) {
              r === void 0 && (r = !0);
              var i = this,
                n = i.params.direction;
              return (
                a || (a = n === 'horizontal' ? 'vertical' : 'horizontal'),
                a === n ||
                  (a !== 'horizontal' && a !== 'vertical') ||
                  (i.$el
                    .removeClass(''.concat(i.params.containerModifierClass).concat(n))
                    .addClass(''.concat(i.params.containerModifierClass).concat(a)),
                  i.emitContainerClasses(),
                  (i.params.direction = a),
                  i.slides.each(function (l) {
                    a === 'vertical' ? (l.style.width = '') : (l.style.height = '');
                  }),
                  i.emit('changeDirection'),
                  r && i.update()),
                i
              );
            }
          },
          {
            key: 'mount',
            value: function (a) {
              var r = this;
              if (r.mounted) return !0;
              var i = C(a || r.params.el);
              if (((a = i[0]), !a)) return !1;
              a.swiper = r;
              var n = function () {
                  return '.'.concat((r.params.wrapperClass || '').trim().split(' ').join('.'));
                },
                l = function () {
                  if (a && a.shadowRoot && a.shadowRoot.querySelector) {
                    var p = C(a.shadowRoot.querySelector(n()));
                    return (
                      (p.children = function (d) {
                        return i.children(d);
                      }),
                      p
                    );
                  }
                  return i.children(n());
                },
                s = l();
              if (s.length === 0 && r.params.createElements) {
                var o = N(),
                  u = o.createElement('div');
                (s = C(u)),
                  (u.className = r.params.wrapperClass),
                  i.append(u),
                  i.children('.'.concat(r.params.slideClass)).each(function (f) {
                    s.append(f);
                  });
              }
              return (
                Object.assign(r, {
                  $el: i,
                  el: a,
                  $wrapperEl: s,
                  wrapperEl: s[0],
                  mounted: !0,
                  rtl: a.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl',
                  rtlTranslate:
                    r.params.direction === 'horizontal' &&
                    (a.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl'),
                  wrongRTL: s.css('display') === '-webkit-box'
                }),
                !0
              );
            }
          },
          {
            key: 'init',
            value: function (a) {
              var r = this;
              if (r.initialized) return r;
              var i = r.mount(a);
              return (
                i === !1 ||
                  (r.emit('beforeInit'),
                  r.params.breakpoints && r.setBreakpoint(),
                  r.addClasses(),
                  r.params.loop && r.loopCreate(),
                  r.updateSize(),
                  r.updateSlides(),
                  r.params.watchOverflow && r.checkOverflow(),
                  r.params.grabCursor && r.enabled && r.setGrabCursor(),
                  r.params.preloadImages && r.preloadImages(),
                  r.params.loop
                    ? r.slideTo(r.params.initialSlide + r.loopedSlides, 0, r.params.runCallbacksOnInit, !1, !0)
                    : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0),
                  r.attachEvents(),
                  (r.initialized = !0),
                  r.emit('init'),
                  r.emit('afterInit')),
                r
              );
            }
          },
          {
            key: 'destroy',
            value: function (a, r) {
              a === void 0 && (a = !0), r === void 0 && (r = !0);
              var i = this,
                n = i.params,
                l = i.$el,
                s = i.$wrapperEl,
                o = i.slides;
              return (
                typeof i.params == 'undefined' ||
                  i.destroyed ||
                  (i.emit('beforeDestroy'),
                  (i.initialized = !1),
                  i.detachEvents(),
                  n.loop && i.loopDestroy(),
                  r &&
                    (i.removeClasses(),
                    l.removeAttr('style'),
                    s.removeAttr('style'),
                    o &&
                      o.length &&
                      o
                        .removeClass(
                          [n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(' ')
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  i.emit('destroy'),
                  Object.keys(i.eventsListeners).forEach(function (u) {
                    i.off(u);
                  }),
                  a !== !1 && ((i.$el[0].swiper = null), Aa(i)),
                  (i.destroyed = !0)),
                null
              );
            }
          }
        ],
        [
          {
            key: 'extendDefaults',
            value: function (a) {
              D(De, a);
            }
          },
          {
            key: 'extendedDefaults',
            get: function () {
              return De;
            }
          },
          {
            key: 'defaults',
            get: function () {
              return ct;
            }
          },
          {
            key: 'installModule',
            value: function (a) {
              t.prototype.__modules__ || (t.prototype.__modules__ = []);
              var r = t.prototype.__modules__;
              typeof a == 'function' && r.indexOf(a) < 0 && r.push(a);
            }
          },
          {
            key: 'use',
            value: function (a) {
              return Array.isArray(a)
                ? (a.forEach(function (r) {
                    return t.installModule(r);
                  }),
                  t)
                : (t.installModule(a), t);
            }
          }
        ]
      ),
      t
    );
  })();
Object.keys(Ne).forEach(function (t) {
  Object.keys(Ne[t]).forEach(function (e) {
    ne.prototype[e] = Ne[t][e];
  });
}),
  ne.use([Ha, Va]);
function Ur(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit,
    n = z();
  a({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  }),
    (e.mousewheel = { enabled: !1 });
  var l,
    s = V(),
    o,
    u = [];
  function f(w) {
    var b = 10,
      E = 40,
      M = 800,
      P = 0,
      S = 0,
      I = 0,
      T = 0;
    return (
      'detail' in w && (S = w.detail),
      'wheelDelta' in w && (S = -w.wheelDelta / 120),
      'wheelDeltaY' in w && (S = -w.wheelDeltaY / 120),
      'wheelDeltaX' in w && (P = -w.wheelDeltaX / 120),
      'axis' in w && w.axis === w.HORIZONTAL_AXIS && ((P = S), (S = 0)),
      (I = P * b),
      (T = S * b),
      'deltaY' in w && (T = w.deltaY),
      'deltaX' in w && (I = w.deltaX),
      w.shiftKey && !I && ((I = T), (T = 0)),
      (I || T) && w.deltaMode && (w.deltaMode === 1 ? ((I *= E), (T *= E)) : ((I *= M), (T *= M))),
      I && !P && (P = I < 1 ? -1 : 1),
      T && !S && (S = T < 1 ? -1 : 1),
      { spinX: P, spinY: S, pixelX: I, pixelY: T }
    );
  }
  function p() {
    !e.enabled || (e.mouseEntered = !0);
  }
  function d() {
    !e.enabled || (e.mouseEntered = !1);
  }
  function h(w) {
    return (e.params.mousewheel.thresholdDelta && w.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime && V() - s < e.params.mousewheel.thresholdTime)
      ? !1
      : w.delta >= 6 && V() - s < 60
      ? !0
      : (w.direction < 0
          ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), i('scroll', w.raw))
          : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), i('scroll', w.raw)),
        (s = new n.Date().getTime()),
        !1);
  }
  function c(w) {
    var b = e.params.mousewheel;
    if (w.direction < 0) {
      if (e.isEnd && !e.params.loop && b.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges) return !0;
    return !1;
  }
  function v(w) {
    var b = w,
      E = !0;
    if (!!e.enabled) {
      var M = e.params.mousewheel;
      e.params.cssMode && b.preventDefault();
      var P = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== 'container' && (P = C(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !P[0].contains(b.target) && !M.releaseOnEdges)
      )
        return !0;
      b.originalEvent && (b = b.originalEvent);
      var S = 0,
        I = e.rtlTranslate ? -1 : 1,
        T = f(b);
      if (M.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(T.pixelX) > Math.abs(T.pixelY)) S = -T.pixelX * I;
          else return !0;
        else if (Math.abs(T.pixelY) > Math.abs(T.pixelX)) S = -T.pixelY;
        else return !0;
      else S = Math.abs(T.pixelX) > Math.abs(T.pixelY) ? -T.pixelX * I : -T.pixelY;
      if (S === 0) return !0;
      M.invert && (S = -S);
      var x = e.getTranslate() + S * M.sensitivity;
      if (
        (x >= e.minTranslate() && (x = e.minTranslate()),
        x <= e.maxTranslate() && (x = e.maxTranslate()),
        (E = e.params.loop ? !0 : !(x === e.minTranslate() || x === e.maxTranslate())),
        E && e.params.nested && b.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        var O = { time: V(), delta: Math.abs(S), direction: Math.sign(S), raw: w };
        u.length >= 2 && u.shift();
        var B = u.length ? u[u.length - 1] : void 0;
        if (
          (u.push(O),
          B ? (O.direction !== B.direction || O.delta > B.delta || O.time > B.time + 150) && h(O) : h(O),
          c(O))
        )
          return !0;
      } else {
        var A = { time: V(), delta: Math.abs(S), direction: Math.sign(S) },
          Q = o && A.time < o.time + 500 && A.delta <= o.delta && A.direction === o.direction;
        if (!Q) {
          (o = void 0), e.params.loop && e.loopFix();
          var k = e.getTranslate() + S * M.sensitivity,
            K = e.isBeginning,
            ee = e.isEnd;
          if (
            (k >= e.minTranslate() && (k = e.minTranslate()),
            k <= e.maxTranslate() && (k = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(k),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!K && e.isBeginning) || (!ee && e.isEnd)) && e.updateSlidesClasses(),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(l), (l = void 0), u.length >= 15 && u.shift();
            var W = u.length ? u[u.length - 1] : void 0,
              X = u[0];
            if ((u.push(A), W && (A.delta > W.delta || A.direction !== W.direction))) u.splice(0);
            else if (u.length >= 15 && A.time - X.time < 500 && X.delta - A.delta >= 1 && A.delta <= 6) {
              var Y = S > 0 ? 0.8 : 0.2;
              (o = A),
                u.splice(0),
                (l = ie(function () {
                  e.slideToClosest(e.params.speed, !0, void 0, Y);
                }, 0));
            }
            l ||
              (l = ie(function () {
                var _ = 0.5;
                (o = A), u.splice(0), e.slideToClosest(e.params.speed, !0, void 0, _);
              }, 500));
          }
          if (
            (Q || i('scroll', b),
            e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
            k === e.minTranslate() || k === e.maxTranslate())
          )
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
    }
  }
  function m(w) {
    var b = e.$el;
    e.params.mousewheel.eventsTarget !== 'container' && (b = C(e.params.mousewheel.eventsTarget)),
      b[w]('mouseenter', p),
      b[w]('mouseleave', d),
      b[w]('wheel', v);
  }
  function g() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener('wheel', v), !0)
      : e.mousewheel.enabled
      ? !1
      : (m('on'), (e.mousewheel.enabled = !0), !0);
  }
  function y() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, v), !0)
      : e.mousewheel.enabled
      ? (m('off'), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  r('init', function () {
    !e.params.mousewheel.enabled && e.params.cssMode && y(), e.params.mousewheel.enabled && g();
  }),
    r('destroy', function () {
      e.params.cssMode && g(), e.mousewheel.enabled && y();
    }),
    Object.assign(e.mousewheel, { enable: g, disable: y });
}
function vt(t, e, a, r) {
  var i = N();
  return (
    t.params.createElements &&
      Object.keys(r).forEach(function (n) {
        if (!a[n] && a.auto === !0) {
          var l = t.$el.children('.'.concat(r[n]))[0];
          l || ((l = i.createElement('div')), (l.className = r[n]), t.$el.append(l)), (a[n] = l), (e[n] = l);
        }
      }),
    a
  );
}
function Zr(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit;
  a({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  }),
    (e.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null });
  function n(d) {
    var h;
    return (
      d &&
        ((h = C(d)),
        e.params.uniqueNavElements &&
          typeof d == 'string' &&
          h.length > 1 &&
          e.$el.find(d).length === 1 &&
          (h = e.$el.find(d))),
      h
    );
  }
  function l(d, h) {
    var c = e.params.navigation;
    d &&
      d.length > 0 &&
      (d[h ? 'addClass' : 'removeClass'](c.disabledClass),
      d[0] && d[0].tagName === 'BUTTON' && (d[0].disabled = h),
      e.params.watchOverflow && e.enabled && d[e.isLocked ? 'addClass' : 'removeClass'](c.lockClass));
  }
  function s() {
    if (!e.params.loop) {
      var d = e.navigation,
        h = d.$nextEl,
        c = d.$prevEl;
      l(c, e.isBeginning && !e.params.rewind), l(h, e.isEnd && !e.params.rewind);
    }
  }
  function o(d) {
    d.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && e.slidePrev();
  }
  function u(d) {
    d.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && e.slideNext();
  }
  function f() {
    var d = e.params.navigation;
    if (
      ((e.params.navigation = vt(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      })),
      !!(d.nextEl || d.prevEl))
    ) {
      var h = n(d.nextEl),
        c = n(d.prevEl);
      h && h.length > 0 && h.on('click', u),
        c && c.length > 0 && c.on('click', o),
        Object.assign(e.navigation, { $nextEl: h, nextEl: h && h[0], $prevEl: c, prevEl: c && c[0] }),
        e.enabled || (h && h.addClass(d.lockClass), c && c.addClass(d.lockClass));
    }
  }
  function p() {
    var d = e.navigation,
      h = d.$nextEl,
      c = d.$prevEl;
    h && h.length && (h.off('click', u), h.removeClass(e.params.navigation.disabledClass)),
      c && c.length && (c.off('click', o), c.removeClass(e.params.navigation.disabledClass));
  }
  r('init', function () {
    f(), s();
  }),
    r('toEdge fromEdge lock unlock', function () {
      s();
    }),
    r('destroy', function () {
      p();
    }),
    r('enable disable', function () {
      var d = e.navigation,
        h = d.$nextEl,
        c = d.$prevEl;
      h && h[e.enabled ? 'removeClass' : 'addClass'](e.params.navigation.lockClass),
        c && c[e.enabled ? 'removeClass' : 'addClass'](e.params.navigation.lockClass);
    }),
    r('click', function (d, h) {
      var c = e.navigation,
        v = c.$nextEl,
        m = c.$prevEl,
        g = h.target;
      if (e.params.navigation.hideOnClick && !C(g).is(m) && !C(g).is(v)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === g || e.pagination.el.contains(g))
        )
          return;
        var y;
        v ? (y = v.hasClass(e.params.navigation.hiddenClass)) : m && (y = m.hasClass(e.params.navigation.hiddenClass)),
          i(y === !0 ? 'navigationShow' : 'navigationHide'),
          v && v.toggleClass(e.params.navigation.hiddenClass),
          m && m.toggleClass(e.params.navigation.hiddenClass);
      }
    }),
    Object.assign(e.navigation, { update: s, init: f, destroy: p });
}
function se(t) {
  return (
    t === void 0 && (t = ''),
    '.'.concat(
      t
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')
    )
  );
}
function Jr(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit,
    n = 'swiper-pagination';
  a({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: function (v) {
        return v;
      },
      formatFractionTotal: function (v) {
        return v;
      },
      bulletClass: ''.concat(n, '-bullet'),
      bulletActiveClass: ''.concat(n, '-bullet-active'),
      modifierClass: ''.concat(n, '-'),
      currentClass: ''.concat(n, '-current'),
      totalClass: ''.concat(n, '-total'),
      hiddenClass: ''.concat(n, '-hidden'),
      progressbarFillClass: ''.concat(n, '-progressbar-fill'),
      progressbarOppositeClass: ''.concat(n, '-progressbar-opposite'),
      clickableClass: ''.concat(n, '-clickable'),
      lockClass: ''.concat(n, '-lock'),
      horizontalClass: ''.concat(n, '-horizontal'),
      verticalClass: ''.concat(n, '-vertical')
    }
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  var l,
    s = 0;
  function o() {
    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0;
  }
  function u(c, v) {
    var m = e.params.pagination.bulletActiveClass;
    c[v]().addClass(''.concat(m, '-').concat(v))[v]().addClass(''.concat(m, '-').concat(v, '-').concat(v));
  }
  function f() {
    var c = e.rtl,
      v = e.params.pagination;
    if (!o()) {
      var m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        g = e.pagination.$el,
        y,
        w = e.params.loop ? Math.ceil((m - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((y = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
            y > m - 1 - e.loopedSlides * 2 && (y -= m - e.loopedSlides * 2),
            y > w - 1 && (y -= w),
            y < 0 && e.params.paginationType !== 'bullets' && (y = w + y))
          : typeof e.snapIndex != 'undefined'
          ? (y = e.snapIndex)
          : (y = e.activeIndex || 0),
        v.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
      ) {
        var b = e.pagination.bullets,
          E,
          M,
          P;
        if (
          (v.dynamicBullets &&
            ((l = b.eq(0)[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
            g.css(e.isHorizontal() ? 'width' : 'height', ''.concat(l * (v.dynamicMainBullets + 4), 'px')),
            v.dynamicMainBullets > 1 &&
              e.previousIndex !== void 0 &&
              ((s += y - (e.previousIndex - e.loopedSlides || 0)),
              s > v.dynamicMainBullets - 1 ? (s = v.dynamicMainBullets - 1) : s < 0 && (s = 0)),
            (E = Math.max(y - s, 0)),
            (M = E + (Math.min(b.length, v.dynamicMainBullets) - 1)),
            (P = (M + E) / 2)),
          b.removeClass(
            ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
              .map(function (Y) {
                return ''.concat(v.bulletActiveClass).concat(Y);
              })
              .join(' ')
          ),
          g.length > 1)
        )
          b.each(function (Y) {
            var _ = C(Y),
              te = _.index();
            te === y && _.addClass(v.bulletActiveClass),
              v.dynamicBullets &&
                (te >= E && te <= M && _.addClass(''.concat(v.bulletActiveClass, '-main')),
                te === E && u(_, 'prev'),
                te === M && u(_, 'next'));
          });
        else {
          var S = b.eq(y),
            I = S.index();
          if ((S.addClass(v.bulletActiveClass), v.dynamicBullets)) {
            for (var T = b.eq(E), x = b.eq(M), O = E; O <= M; O += 1)
              b.eq(O).addClass(''.concat(v.bulletActiveClass, '-main'));
            if (e.params.loop)
              if (I >= b.length) {
                for (var B = v.dynamicMainBullets; B >= 0; B -= 1)
                  b.eq(b.length - B).addClass(''.concat(v.bulletActiveClass, '-main'));
                b.eq(b.length - v.dynamicMainBullets - 1).addClass(''.concat(v.bulletActiveClass, '-prev'));
              } else u(T, 'prev'), u(x, 'next');
            else u(T, 'prev'), u(x, 'next');
          }
        }
        if (v.dynamicBullets) {
          var A = Math.min(b.length, v.dynamicMainBullets + 4),
            Q = (l * A - l) / 2 - P * l,
            k = c ? 'right' : 'left';
          b.css(e.isHorizontal() ? k : 'top', ''.concat(Q, 'px'));
        }
      }
      if (
        (v.type === 'fraction' &&
          (g.find(se(v.currentClass)).text(v.formatFractionCurrent(y + 1)),
          g.find(se(v.totalClass)).text(v.formatFractionTotal(w))),
        v.type === 'progressbar')
      ) {
        var K;
        v.progressbarOpposite
          ? (K = e.isHorizontal() ? 'vertical' : 'horizontal')
          : (K = e.isHorizontal() ? 'horizontal' : 'vertical');
        var ee = (y + 1) / w,
          W = 1,
          X = 1;
        K === 'horizontal' ? (W = ee) : (X = ee),
          g
            .find(se(v.progressbarFillClass))
            .transform('translate3d(0,0,0) scaleX('.concat(W, ') scaleY(').concat(X, ')'))
            .transition(e.params.speed);
      }
      v.type === 'custom' && v.renderCustom
        ? (g.html(v.renderCustom(e, y + 1, w)), i('paginationRender', g[0]))
        : i('paginationUpdate', g[0]),
        e.params.watchOverflow && e.enabled && g[e.isLocked ? 'addClass' : 'removeClass'](v.lockClass);
    }
  }
  function p() {
    var c = e.params.pagination;
    if (!o()) {
      var v = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        m = e.pagination.$el,
        g = '';
      if (c.type === 'bullets') {
        var y = e.params.loop ? Math.ceil((v - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && y > v && (y = v);
        for (var w = 0; w < y; w += 1)
          c.renderBullet
            ? (g += c.renderBullet.call(e, w, c.bulletClass))
            : (g += '<'.concat(c.bulletElement, ' class="').concat(c.bulletClass, '"></').concat(c.bulletElement, '>'));
        m.html(g), (e.pagination.bullets = m.find(se(c.bulletClass)));
      }
      c.type === 'fraction' &&
        (c.renderFraction
          ? (g = c.renderFraction.call(e, c.currentClass, c.totalClass))
          : (g =
              '<span class="'.concat(c.currentClass, '"></span>') +
              ' / ' +
              '<span class="'.concat(c.totalClass, '"></span>')),
        m.html(g)),
        c.type === 'progressbar' &&
          (c.renderProgressbar
            ? (g = c.renderProgressbar.call(e, c.progressbarFillClass))
            : (g = '<span class="'.concat(c.progressbarFillClass, '"></span>')),
          m.html(g)),
        c.type !== 'custom' && i('paginationRender', e.pagination.$el[0]);
    }
  }
  function d() {
    e.params.pagination = vt(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' });
    var c = e.params.pagination;
    if (!!c.el) {
      var v = C(c.el);
      v.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof c.el == 'string' &&
          v.length > 1 &&
          ((v = e.$el.find(c.el)),
          v.length > 1 &&
            (v = v.filter(function (m) {
              return C(m).parents('.swiper')[0] === e.el;
            }))),
        c.type === 'bullets' && c.clickable && v.addClass(c.clickableClass),
        v.addClass(c.modifierClass + c.type),
        v.addClass(e.isHorizontal() ? c.horizontalClass : c.verticalClass),
        c.type === 'bullets' &&
          c.dynamicBullets &&
          (v.addClass(''.concat(c.modifierClass).concat(c.type, '-dynamic')),
          (s = 0),
          c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
        c.type === 'progressbar' && c.progressbarOpposite && v.addClass(c.progressbarOppositeClass),
        c.clickable &&
          v.on('click', se(c.bulletClass), function (g) {
            g.preventDefault();
            var y = C(this).index() * e.params.slidesPerGroup;
            e.params.loop && (y += e.loopedSlides), e.slideTo(y);
          }),
        Object.assign(e.pagination, { $el: v, el: v[0] }),
        e.enabled || v.addClass(c.lockClass));
    }
  }
  function h() {
    var c = e.params.pagination;
    if (!o()) {
      var v = e.pagination.$el;
      v.removeClass(c.hiddenClass),
        v.removeClass(c.modifierClass + c.type),
        v.removeClass(e.isHorizontal() ? c.horizontalClass : c.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(c.bulletActiveClass),
        c.clickable && v.off('click', se(c.bulletClass));
    }
  }
  r('init', function () {
    d(), p(), f();
  }),
    r('activeIndexChange', function () {
      (e.params.loop || typeof e.snapIndex == 'undefined') && f();
    }),
    r('snapIndexChange', function () {
      e.params.loop || f();
    }),
    r('slidesLengthChange', function () {
      e.params.loop && (p(), f());
    }),
    r('snapGridLengthChange', function () {
      e.params.loop || (p(), f());
    }),
    r('destroy', function () {
      h();
    }),
    r('enable disable', function () {
      var c = e.pagination.$el;
      c && c[e.enabled ? 'removeClass' : 'addClass'](e.params.pagination.lockClass);
    }),
    r('lock unlock', function () {
      f();
    }),
    r('click', function (c, v) {
      var m = v.target,
        g = e.pagination.$el;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        g.length > 0 &&
        !C(m).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && m === e.navigation.nextEl) || (e.navigation.prevEl && m === e.navigation.prevEl))
        )
          return;
        var y = g.hasClass(e.params.pagination.hiddenClass);
        i(y === !0 ? 'paginationShow' : 'paginationHide'), g.toggleClass(e.params.pagination.hiddenClass);
      }
    }),
    Object.assign(e.pagination, { render: p, update: f, init: d, destroy: h });
}
function Qr(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit;
  a({
    lazy: {
      checkInView: !1,
      enabled: !1,
      loadPrevNext: !1,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: !1,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  }),
    (e.lazy = {});
  var n = !1,
    l = !1;
  function s(f, p) {
    p === void 0 && (p = !0);
    var d = e.params.lazy;
    if (typeof f != 'undefined' && e.slides.length !== 0) {
      var h = e.virtual && e.params.virtual.enabled,
        c = h
          ? e.$wrapperEl.children('.'.concat(e.params.slideClass, '[data-swiper-slide-index="').concat(f, '"]'))
          : e.slides.eq(f),
        v = c.find('.'.concat(d.elementClass, ':not(.').concat(d.loadedClass, '):not(.').concat(d.loadingClass, ')'));
      c.hasClass(d.elementClass) && !c.hasClass(d.loadedClass) && !c.hasClass(d.loadingClass) && v.push(c[0]),
        v.length !== 0 &&
          v.each(function (m) {
            var g = C(m);
            g.addClass(d.loadingClass);
            var y = g.attr('data-background'),
              w = g.attr('data-src'),
              b = g.attr('data-srcset'),
              E = g.attr('data-sizes'),
              M = g.parent('picture');
            e.loadImage(g[0], w || y, b, E, !1, function () {
              if (!(typeof e == 'undefined' || e === null || !e || (e && !e.params) || e.destroyed)) {
                if (
                  (y
                    ? (g.css('background-image', 'url("'.concat(y, '")')), g.removeAttr('data-background'))
                    : (b && (g.attr('srcset', b), g.removeAttr('data-srcset')),
                      E && (g.attr('sizes', E), g.removeAttr('data-sizes')),
                      M.length &&
                        M.children('source').each(function (T) {
                          var x = C(T);
                          x.attr('data-srcset') &&
                            (x.attr('srcset', x.attr('data-srcset')), x.removeAttr('data-srcset'));
                        }),
                      w && (g.attr('src', w), g.removeAttr('data-src'))),
                  g.addClass(d.loadedClass).removeClass(d.loadingClass),
                  c.find('.'.concat(d.preloaderClass)).remove(),
                  e.params.loop && p)
                ) {
                  var P = c.attr('data-swiper-slide-index');
                  if (c.hasClass(e.params.slideDuplicateClass)) {
                    var S = e.$wrapperEl.children(
                      '[data-swiper-slide-index="'.concat(P, '"]:not(.').concat(e.params.slideDuplicateClass, ')')
                    );
                    s(S.index(), !1);
                  } else {
                    var I = e.$wrapperEl.children(
                      '.'.concat(e.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(P, '"]')
                    );
                    s(I.index(), !1);
                  }
                }
                i('lazyImageReady', c[0], g[0]), e.params.autoHeight && e.updateAutoHeight();
              }
            }),
              i('lazyImageLoad', c[0], g[0]);
          });
    }
  }
  function o() {
    var f = e.$wrapperEl,
      p = e.params,
      d = e.slides,
      h = e.activeIndex,
      c = e.virtual && p.virtual.enabled,
      v = p.lazy,
      m = p.slidesPerView;
    m === 'auto' && (m = 0);
    function g(O) {
      if (c) {
        if (f.children('.'.concat(p.slideClass, '[data-swiper-slide-index="').concat(O, '"]')).length) return !0;
      } else if (d[O]) return !0;
      return !1;
    }
    function y(O) {
      return c ? C(O).attr('data-swiper-slide-index') : C(O).index();
    }
    if ((l || (l = !0), e.params.watchSlidesProgress))
      f.children('.'.concat(p.slideVisibleClass)).each(function (O) {
        var B = c ? C(O).attr('data-swiper-slide-index') : C(O).index();
        s(B);
      });
    else if (m > 1) for (var w = h; w < h + m; w += 1) g(w) && s(w);
    else s(h);
    if (v.loadPrevNext)
      if (m > 1 || (v.loadPrevNextAmount && v.loadPrevNextAmount > 1)) {
        for (
          var b = v.loadPrevNextAmount,
            E = m,
            M = Math.min(h + E + Math.max(b, E), d.length),
            P = Math.max(h - Math.max(E, b), 0),
            S = h + m;
          S < M;
          S += 1
        )
          g(S) && s(S);
        for (var I = P; I < h; I += 1) g(I) && s(I);
      } else {
        var T = f.children('.'.concat(p.slideNextClass));
        T.length > 0 && s(y(T));
        var x = f.children('.'.concat(p.slidePrevClass));
        x.length > 0 && s(y(x));
      }
  }
  function u() {
    var f = z();
    if (!(!e || e.destroyed)) {
      var p = e.params.lazy.scrollingElement ? C(e.params.lazy.scrollingElement) : C(f),
        d = p[0] === f,
        h = d ? f.innerWidth : p[0].offsetWidth,
        c = d ? f.innerHeight : p[0].offsetHeight,
        v = e.$el.offset(),
        m = e.rtlTranslate,
        g = !1;
      m && (v.left -= e.$el[0].scrollLeft);
      for (
        var y = [
            [v.left, v.top],
            [v.left + e.width, v.top],
            [v.left, v.top + e.height],
            [v.left + e.width, v.top + e.height]
          ],
          w = 0;
        w < y.length;
        w += 1
      ) {
        var b = y[w];
        if (b[0] >= 0 && b[0] <= h && b[1] >= 0 && b[1] <= c) {
          if (b[0] === 0 && b[1] === 0) continue;
          g = !0;
        }
      }
      var E =
        e.touchEvents.start === 'touchstart' && e.support.passiveListener && e.params.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      g ? (o(), p.off('scroll', u, E)) : n || ((n = !0), p.on('scroll', u, E));
    }
  }
  r('beforeInit', function () {
    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
  }),
    r('init', function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : o());
    }),
    r('scroll', function () {
      e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o();
    }),
    r('scrollbarDragMove resize _freeModeNoMomentumRelease', function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : o());
    }),
    r('transitionStart', function () {
      e.params.lazy.enabled &&
        (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !l)) &&
        (e.params.lazy.checkInView ? u() : o());
    }),
    r('transitionEnd', function () {
      e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? u() : o());
    }),
    r('slideChange', function () {
      var f = e.params,
        p = f.lazy,
        d = f.cssMode,
        h = f.watchSlidesProgress,
        c = f.touchReleaseOnEdges,
        v = f.resistanceRatio;
      p.enabled && (d || (h && (c || v === 0))) && o();
    }),
    Object.assign(e.lazy, { load: o, loadInSlide: s });
}
function Kr(t) {
  var e = t.swiper,
    a = t.extendParams,
    r = t.on,
    i = t.emit,
    n;
  (e.autoplay = { running: !1, paused: !1 }),
    a({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
  function l() {
    var m = e.slides.eq(e.activeIndex),
      g = e.params.autoplay.delay;
    m.attr('data-swiper-autoplay') && (g = m.attr('data-swiper-autoplay') || e.params.autoplay.delay),
      clearTimeout(n),
      (n = ie(function () {
        var y;
        e.params.autoplay.reverseDirection
          ? e.params.loop
            ? (e.loopFix(), (y = e.slidePrev(e.params.speed, !0, !0)), i('autoplay'))
            : e.isBeginning
            ? e.params.autoplay.stopOnLastSlide
              ? o()
              : ((y = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), i('autoplay'))
            : ((y = e.slidePrev(e.params.speed, !0, !0)), i('autoplay'))
          : e.params.loop
          ? (e.loopFix(), (y = e.slideNext(e.params.speed, !0, !0)), i('autoplay'))
          : e.isEnd
          ? e.params.autoplay.stopOnLastSlide
            ? o()
            : ((y = e.slideTo(0, e.params.speed, !0, !0)), i('autoplay'))
          : ((y = e.slideNext(e.params.speed, !0, !0)), i('autoplay')),
          ((e.params.cssMode && e.autoplay.running) || y === !1) && l();
      }, g));
  }
  function s() {
    return typeof n != 'undefined' || e.autoplay.running
      ? !1
      : ((e.autoplay.running = !0), i('autoplayStart'), l(), !0);
  }
  function o() {
    return !e.autoplay.running || typeof n == 'undefined'
      ? !1
      : (n && (clearTimeout(n), (n = void 0)), (e.autoplay.running = !1), i('autoplayStop'), !0);
  }
  function u(m) {
    !e.autoplay.running ||
      e.autoplay.paused ||
      (n && clearTimeout(n),
      (e.autoplay.paused = !0),
      m === 0 || !e.params.autoplay.waitForTransition
        ? ((e.autoplay.paused = !1), l())
        : ['transitionend', 'webkitTransitionEnd'].forEach(function (g) {
            e.$wrapperEl[0].addEventListener(g, p);
          }));
  }
  function f() {
    var m = N();
    m.visibilityState === 'hidden' && e.autoplay.running && u(),
      m.visibilityState === 'visible' && e.autoplay.paused && (l(), (e.autoplay.paused = !1));
  }
  function p(m) {
    !e ||
      e.destroyed ||
      !e.$wrapperEl ||
      (m.target === e.$wrapperEl[0] &&
        (['transitionend', 'webkitTransitionEnd'].forEach(function (g) {
          e.$wrapperEl[0].removeEventListener(g, p);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? l() : o()));
  }
  function d() {
    e.params.autoplay.disableOnInteraction ? o() : (i('autoplayPause'), u()),
      ['transitionend', 'webkitTransitionEnd'].forEach(function (m) {
        e.$wrapperEl[0].removeEventListener(m, p);
      });
  }
  function h() {
    e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), i('autoplayResume'), l());
  }
  function c() {
    e.params.autoplay.pauseOnMouseEnter && (e.$el.on('mouseenter', d), e.$el.on('mouseleave', h));
  }
  function v() {
    e.$el.off('mouseenter', d), e.$el.off('mouseleave', h);
  }
  r('init', function () {
    if (e.params.autoplay.enabled) {
      s();
      var m = N();
      m.addEventListener('visibilitychange', f), c();
    }
  }),
    r('beforeTransitionStart', function (m, g, y) {
      e.autoplay.running && (y || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(g) : o());
    }),
    r('sliderFirstMove', function () {
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : u());
    }),
    r('touchEnd', function () {
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && l();
    }),
    r('destroy', function () {
      v(), e.autoplay.running && o();
      var m = N();
      m.removeEventListener('visibilitychange', f);
    }),
    Object.assign(e.autoplay, { pause: u, run: l, start: s, stop: o });
}
function re(t) {
  return (
    F(t) === 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  );
}
function J(t, e) {
  var a = ['__proto__', 'constructor', 'prototype'];
  Object.keys(e)
    .filter(function (r) {
      return a.indexOf(r) < 0;
    })
    .forEach(function (r) {
      typeof t[r] == 'undefined'
        ? (t[r] = e[r])
        : re(e[r]) && re(t[r]) && Object.keys(e[r]).length > 0
        ? e[r].__swiper__
          ? (t[r] = e[r])
          : J(t[r], e[r])
        : (t[r] = e[r]);
    });
}
function ht(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation && typeof t.navigation.nextEl == 'undefined' && typeof t.navigation.prevEl == 'undefined'
  );
}
function mt(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el == 'undefined';
}
function gt(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el == 'undefined';
}
function wt(t) {
  t === void 0 && (t = '');
  var e = t
      .split(' ')
      .map(function (r) {
        return r.trim();
      })
      .filter(function (r) {
        return !!r;
      }),
    a = [];
  return (
    e.forEach(function (r) {
      a.indexOf(r) < 0 && a.push(r);
    }),
    a.join(' ')
  );
}
var yt = [
  'modules',
  'init',
  '_direction',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_preloadImages',
  'updateOnImagesReady',
  '_loop',
  '_loopAdditionalSlides',
  '_loopedSlides',
  '_loopFillGroupWithBlank',
  'loopPreventsSlide',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideBlankClass',
  'slideActiveClass',
  'slideDuplicateActiveClass',
  'slideVisibleClass',
  'slideDuplicateClass',
  'slideNextClass',
  'slideDuplicateNextClass',
  'slidePrevClass',
  'slideDuplicatePrevClass',
  'wrapperClass',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'lazy',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom'
];
function bt(t) {
  t === void 0 && (t = {});
  var e = { on: {} },
    a = {};
  J(e, ne.defaults), J(e, ne.extendedDefaults), (e._emitClasses = !0), (e.init = !1);
  var r = {},
    i = yt.map(function (l) {
      return l.replace(/_/, '');
    }),
    n = Object.assign({}, t);
  return (
    Object.keys(n).forEach(function (l) {
      typeof t[l] != 'undefined' &&
        (i.indexOf(l) >= 0
          ? re(t[l])
            ? ((e[l] = {}), (a[l] = {}), J(e[l], t[l]), J(a[l], t[l]))
            : ((e[l] = t[l]), (a[l] = t[l]))
          : l.search(/on[A-Z]/) === 0 && typeof t[l] == 'function'
          ? (e.on[''.concat(l[2].toLowerCase()).concat(l.substr(3))] = t[l])
          : (r[l] = t[l]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach(function (l) {
      e[l] === !0 && (e[l] = {}), e[l] === !1 && delete e[l];
    }),
    { params: e, passedParams: a, rest: r }
  );
}
function ei(t) {
  return new ne(t);
}
function ti(t, e) {
  var a = t.el,
    r = t.nextEl,
    i = t.prevEl,
    n = t.paginationEl,
    l = t.scrollbarEl,
    s = t.swiper;
  ht(e) &&
    r &&
    i &&
    ((s.params.navigation.nextEl = r),
    (s.originalParams.navigation.nextEl = r),
    (s.params.navigation.prevEl = i),
    (s.originalParams.navigation.prevEl = i)),
    mt(e) && n && ((s.params.pagination.el = n), (s.originalParams.pagination.el = n)),
    gt(e) && l && ((s.params.scrollbar.el = l), (s.originalParams.scrollbar.el = l)),
    s.init(a);
}
function St(t, e) {
  var a = e.slidesPerView;
  if (e.breakpoints) {
    var r = ne.prototype.getBreakpoint(e.breakpoints),
      i = r in e.breakpoints ? e.breakpoints[r] : void 0;
    i && i.slidesPerView && (a = i.slidesPerView);
  }
  var n = Math.ceil(parseFloat(e.loopedSlides || a, 10));
  return (n += e.loopAdditionalSlides), n > t.length && (n = t.length), n;
}
function ai(t, e, a) {
  var r = e.map(function (p, d) {
    return p.props || (p.props = {}), (p.props.swiperRef = t), (p.props['data-swiper-slide-index'] = d), p;
  });
  function i(p, d, h) {
    return (
      p.props || (p.props = {}),
      G(
        p.type,
        Me(
          Me({}, p.props),
          {},
          {
            key: ''.concat(p.key, '-duplicate-').concat(d, '-').concat(h),
            class: ''
              .concat(p.props.className || '', ' ')
              .concat(a.slideDuplicateClass, ' ')
              .concat(p.props.class || '')
          }
        ),
        p.children
      )
    );
  }
  if (a.loopFillGroupWithBlank) {
    var n = a.slidesPerGroup - (r.length % a.slidesPerGroup);
    if (n !== a.slidesPerGroup)
      for (var l = 0; l < n; l += 1) {
        var s = G('div', { class: ''.concat(a.slideClass, ' ').concat(a.slideBlankClass) });
        r.push(s);
      }
  }
  a.slidesPerView === 'auto' && !a.loopedSlides && (a.loopedSlides = r.length);
  var o = St(r, a),
    u = [],
    f = [];
  return (
    r.forEach(function (p, d) {
      d < o && f.push(i(p, d, 'prepend')), d < r.length && d >= r.length - o && u.push(i(p, d, 'append'));
    }),
    t.value && (t.value.loopedSlides = o),
    [].concat(u, H(r), f)
  );
}
function ri(t, e, a, r) {
  var i = [];
  if (!e) return i;
  var n = function (f) {
      i.indexOf(f) < 0 && i.push(f);
    },
    l = r.map(function (u) {
      return u.props && u.props.key;
    }),
    s = a.map(function (u) {
      return u.props && u.props.key;
    });
  l.join('') !== s.join('') && i.push('children'), r.length !== a.length && i.push('children');
  var o = yt
    .filter(function (u) {
      return u[0] === '_';
    })
    .map(function (u) {
      return u.replace(/_/, '');
    });
  return (
    o.forEach(function (u) {
      if (u in t && u in e)
        if (re(t[u]) && re(e[u])) {
          var f = Object.keys(t[u]),
            p = Object.keys(e[u]);
          f.length !== p.length
            ? n(u)
            : (f.forEach(function (d) {
                t[u][d] !== e[u][d] && n(u);
              }),
              p.forEach(function (d) {
                t[u][d] !== e[u][d] && n(u);
              }));
        } else t[u] !== e[u] && n(u);
    }),
    i
  );
}
function ke(t, e, a) {
  t === void 0 && (t = {});
  var r = [],
    i = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] },
    n = function l(s, o) {
      !Array.isArray(s) ||
        s.forEach(function (u) {
          var f = F(u.type) === 'symbol';
          o === 'default' && (o = 'container-end'),
            f && u.children
              ? l(u.children, 'default')
              : u.type && (u.type.name === 'SwiperSlide' || u.type.name === 'AsyncComponentWrapper')
              ? r.push(u)
              : i[o] && i[o].push(u);
        });
    };
  return (
    Object.keys(t).forEach(function (l) {
      if (typeof t[l] == 'function') {
        var s = t[l]();
        n(s, l);
      }
    }),
    (a.value = e.value),
    (e.value = r),
    { slides: r, slots: i }
  );
}
function ii(t) {
  var e = t.swiper,
    a = t.slides,
    r = t.passedParams,
    i = t.changedParams,
    n = t.nextEl,
    l = t.prevEl,
    s = t.paginationEl,
    o = t.scrollbarEl,
    u = i.filter(function (P) {
      return P !== 'children' && P !== 'direction';
    }),
    f = e.params,
    p = e.pagination,
    d = e.navigation,
    h = e.scrollbar,
    c = e.virtual,
    v = e.thumbs,
    m,
    g,
    y,
    w,
    b;
  i.includes('thumbs') && r.thumbs && r.thumbs.swiper && f.thumbs && !f.thumbs.swiper && (m = !0),
    i.includes('controller') &&
      r.controller &&
      r.controller.control &&
      f.controller &&
      !f.controller.control &&
      (g = !0),
    i.includes('pagination') &&
      r.pagination &&
      (r.pagination.el || s) &&
      (f.pagination || f.pagination === !1) &&
      p &&
      !p.el &&
      (y = !0),
    i.includes('scrollbar') &&
      r.scrollbar &&
      (r.scrollbar.el || o) &&
      (f.scrollbar || f.scrollbar === !1) &&
      h &&
      !h.el &&
      (w = !0),
    i.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || l) &&
      (r.navigation.nextEl || n) &&
      (f.navigation || f.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (b = !0);
  var E = function (S) {
    !e[S] ||
      (e[S].destroy(),
      S === 'navigation'
        ? ((f[S].prevEl = void 0), (f[S].nextEl = void 0), (e[S].prevEl = void 0), (e[S].nextEl = void 0))
        : ((f[S].el = void 0), (e[S].el = void 0)));
  };
  if (
    (u.forEach(function (P) {
      if (re(f[P]) && re(r[P])) J(f[P], r[P]);
      else {
        var S = r[P];
        (S === !0 || S === !1) && (P === 'navigation' || P === 'pagination' || P === 'scrollbar')
          ? S === !1 && E(P)
          : (f[P] = r[P]);
      }
    }),
    i.includes('children') && c && f.virtual.enabled
      ? ((c.slides = a), c.update(!0))
      : i.includes('children') && e.lazy && e.params.lazy.enabled && e.lazy.load(),
    m)
  ) {
    var M = v.init();
    M && v.update(!0);
  }
  g && (e.controller.control = f.controller.control),
    y && (s && (f.pagination.el = s), p.init(), p.render(), p.update()),
    w && (o && (f.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()),
    b && (n && (f.navigation.nextEl = n), l && (f.navigation.prevEl = l), d.init(), d.update()),
    i.includes('allowSlideNext') && (e.allowSlideNext = r.allowSlideNext),
    i.includes('allowSlidePrev') && (e.allowSlidePrev = r.allowSlidePrev),
    i.includes('direction') && e.changeDirection(r.direction, !1),
    e.update();
}
function ni(t) {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.lazy && t.params.lazy.enabled && t.lazy.load(),
    t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate());
}
function si(t, e, a) {
  if (!a) return null;
  var r = t.value.isHorizontal()
    ? j({}, t.value.rtlTranslate ? 'right' : 'left', ''.concat(a.offset, 'px'))
    : { top: ''.concat(a.offset, 'px') };
  return e
    .filter(function (i, n) {
      return n >= a.from && n <= a.to;
    })
    .map(function (i) {
      return (
        i.props || (i.props = {}),
        i.props.style || (i.props.style = {}),
        (i.props.swiperRef = t),
        (i.props.style = r),
        G(i.type, Me({}, i.props), i.children)
      );
    });
}
var li = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 }
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'imagesReady',
      'init',
      'keyPress',
      'lazyImageLoad',
      'lazyImageReady',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'zoomChange'
    ],
    setup: function (e, a) {
      var r = a.slots,
        i = a.emit,
        n = e.tag,
        l = e.wrapperTag,
        s = $('swiper'),
        o = $(null),
        u = $(!1),
        f = $(!1),
        p = $(null),
        d = $(null),
        h = $(null),
        c = { value: [] },
        v = { value: [] },
        m = $(null),
        g = $(null),
        y = $(null),
        w = $(null),
        b = bt(e),
        E = b.params,
        M = b.passedParams;
      ke(r, c, v), (h.value = M), (v.value = c.value);
      var P = function () {
        ke(r, c, v), (u.value = !0);
      };
      if (
        ((E.onAny = function (T) {
          for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), B = 1; B < x; B++) O[B - 1] = arguments[B];
          i.apply(void 0, [T].concat(O));
        }),
        Object.assign(E.on, {
          _beforeBreakpoint: P,
          _containerClasses: function (x, O) {
            s.value = O;
          }
        }),
        (d.value = ei(E)),
        (d.value.loopCreate = function () {}),
        (d.value.loopDestroy = function () {}),
        E.loop && (d.value.loopedSlides = St(c.value, E)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = c.value;
        var S = {
          cache: !1,
          slides: c.value,
          renderExternal: function (x) {
            o.value = x;
          },
          renderExternalUpdate: !1
        };
        J(d.value.params.virtual, S), J(d.value.originalParams.virtual, S);
      }
      He(function () {
        !f.value && d.value && (d.value.emitSlidesClasses(), (f.value = !0));
        var T = bt(e),
          x = T.passedParams,
          O = ri(x, h.value, c.value, v.value);
        (h.value = x),
          (O.length || u.value) &&
            d.value &&
            !d.value.destroyed &&
            ii({
              swiper: d.value,
              slides: c.value,
              passedParams: x,
              changedParams: O,
              nextEl: m.value,
              prevEl: g.value,
              scrollbarEl: w.value,
              paginationEl: y.value
            }),
          (u.value = !1);
      }),
        Ve('swiper', d),
        Bt(o, function () {
          zt(function () {
            ni(d.value);
          });
        }),
        ce(function () {
          !p.value ||
            (ti(
              {
                el: p.value,
                nextEl: m.value,
                prevEl: g.value,
                paginationEl: y.value,
                scrollbarEl: w.value,
                swiper: d.value
              },
              E
            ),
            i('swiper', d.value));
        }),
        We(function () {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1);
        });
      function I(T) {
        return E.virtual
          ? si(d, T, o.value)
          : !E.loop || (d.value && d.value.destroyed)
          ? (T.forEach(function (x) {
              x.props || (x.props = {}), (x.props.swiperRef = d);
            }),
            T)
          : ai(d, T, E);
      }
      return function () {
        var T = ke(r, c, v),
          x = T.slides,
          O = T.slots;
        return G(n, { ref: p, class: wt(s.value) }, [
          O['container-start'],
          ht(e) && [
            G('div', { ref: g, class: 'swiper-button-prev' }),
            G('div', { ref: m, class: 'swiper-button-next' })
          ],
          gt(e) && G('div', { ref: w, class: 'swiper-scrollbar' }),
          mt(e) && G('div', { ref: y, class: 'swiper-pagination' }),
          G(l, { class: 'swiper-wrapper' }, [O['wrapper-start'], I(x), O['wrapper-end']]),
          O['container-end']
        ]);
      };
    }
  },
  oi = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 }
    },
    setup: function (e, a) {
      var r = a.slots,
        i = !1,
        n = e.swiperRef,
        l = $(null),
        s = $('swiper-slide');
      function o(f, p, d) {
        p === l.value && (s.value = d);
      }
      ce(function () {
        !n.value || (n.value.on('_slideClass', o), (i = !0));
      }),
        At(function () {
          i || !n || !n.value || (n.value.on('_slideClass', o), (i = !0));
        }),
        He(function () {
          !l.value || !n || !n.value || (n.value.destroyed && s.value !== 'swiper-slide' && (s.value = 'swiper-slide'));
        }),
        We(function () {
          !n || !n.value || n.value.off('_slideClass', o);
        });
      var u = Ee(function () {
        return {
          isActive:
            s.value.indexOf('swiper-slide-active') >= 0 || s.value.indexOf('swiper-slide-duplicate-active') >= 0,
          isVisible: s.value.indexOf('swiper-slide-visible') >= 0,
          isDuplicate: s.value.indexOf('swiper-slide-duplicate') >= 0,
          isPrev: s.value.indexOf('swiper-slide-prev') >= 0 || s.value.indexOf('swiper-slide-duplicate-prev') >= 0,
          isNext: s.value.indexOf('swiper-slide-next') >= 0 || s.value.indexOf('swiper-slide-duplicate-next') >= 0
        };
      });
      return (
        Ve('swiperSlide', u),
        function () {
          return G(
            e.tag,
            { class: wt(''.concat(s.value)), ref: l, 'data-swiper-slide-index': e.virtualIndex },
            e.zoom
              ? G(
                  'div',
                  { class: 'swiper-zoom-container', 'data-swiper-zoom': typeof e.zoom == 'number' ? e.zoom : void 0 },
                  r.default && r.default(u.value)
                )
              : r.default && r.default(u.value)
          );
        }
      );
    }
  },
  we = pe({
    name: 'oc-swiper',
    emits: ['getSwiperInstance', 'onSlideChange'],
    components: { Swiper: li, SwiperSlide: oi },
    props: {
      imgArr: { type: Array, default: [] },
      direction: { type: String, default: 'horizontal' },
      navigation: { type: [Object, Boolean], default: !0 },
      pagination: { type: [Object, Boolean], default: !0 },
      mousewheel: { type: [Object, Boolean], default: !0 },
      loop: { type: Boolean, default: !0 },
      autoplay: { type: [Object, Boolean], default: !0 },
      lazy: { type: [Object, Boolean], default: !1 }
    },
    setup(t, e) {
      return {
        onSwiper: (i) => {
          e.emit('getSwiperInstance', i);
        },
        onSlideChange: ({ activeIndex: i }) => {
          e.emit('onSlideChange', i);
        },
        modules: [Zr, Jr, Kr, Ur, Qr]
      };
    }
  });
const di = { class: 'oc-swiper' },
  ui = ['data-src'],
  fi = q('div', { class: 'swiper-lazy-preloader swiper-lazy-preloader-white' }, null, -1),
  pi = ['src'];
function ci(t, e, a, r, i, n) {
  const l = _e('swiper-slide'),
    s = _e('swiper');
  return (
    R(),
    U('div', di, [
      $t(
        s,
        {
          navigation: t.navigation,
          pagination: t.pagination,
          direction: t.direction,
          autoplay: t.autoplay,
          mousewheel: t.mousewheel,
          loop: t.loop,
          lazy: t.lazy,
          modules: t.modules,
          onSwiper: t.onSwiper,
          onSlideChange: t.onSlideChange,
          class: 'mySwiper'
        },
        {
          default: xe(() => [
            t.lazy
              ? (R(!0),
                U(
                  Pe,
                  { key: 0 },
                  Oe(
                    t.imgArr,
                    (o, u) => (
                      R(),
                      qe(
                        l,
                        { key: u + 'lazy' },
                        {
                          default: xe(() => [
                            q('img', { class: 'swiper-img swiper-lazy', 'data-src': o }, null, 8, ui),
                            fi
                          ]),
                          _: 2
                        },
                        1024
                      )
                    )
                  ),
                  128
                ))
              : (R(!0),
                U(
                  Pe,
                  { key: 1 },
                  Oe(
                    t.imgArr,
                    (o, u) => (
                      R(),
                      qe(
                        l,
                        { key: u },
                        { default: xe(() => [q('img', { class: 'swiper-img', src: o }, null, 8, pi)]), _: 2 },
                        1024
                      )
                    )
                  ),
                  128
                ))
          ]),
          _: 1
        },
        8,
        [
          'navigation',
          'pagination',
          'direction',
          'autoplay',
          'mousewheel',
          'loop',
          'lazy',
          'modules',
          'onSwiper',
          'onSlideChange'
        ]
      )
    ])
  );
}
(we.render = ci), (we.__file = 'swiper/Index.vue');
var Ct = {
    install(t) {
      t.component(we.name, we);
    }
  },
  ye = pe({
    name: 'oc-fbfans',
    props: {
      fanSrc: { type: String, default: 'https://www.facebook.com/facebook' },
      appId: { type: String, default: '4938830502830980' }
    },
    setup(t) {
      const e = $(''),
        a = $(0),
        r = $(0),
        i = $(null),
        n = () => {
          const s = i.value;
          if (!s) return;
          const { width: o, height: u } = s.getBoundingClientRect();
          !o ||
            !u ||
            (a.value === o && r.value === u) ||
            ((a.value = o),
            (r.value = u),
            (e.value = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
              t.fanSrc
            )}&tabs=timeline&width=${o}&height=${u}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${
              t.appId
            }`));
        },
        l = () => {
          let s = null;
          window.addEventListener('resize', () => {
            clearTimeout(s), (s = setTimeout(n, 600));
          });
        };
      return (
        ce(() => {
          n(), l();
        }),
        { src: e, fbWidth: a, fbHeight: r, fbFansContainer: i }
      );
    }
  });
const vi = { class: 'oc-fbfans', ref: 'fbFansContainer' },
  hi = ['src', 'width', 'height'];
function mi(t, e, a, r, i, n) {
  return (
    R(),
    U(
      'div',
      vi,
      [
        q(
          'iframe',
          {
            src: t.src,
            width: t.fbWidth,
            height: t.fbHeight,
            style: { border: 'none', overflow: 'hidden' },
            scrolling: 'no',
            frameborder: '0',
            allowfullscreen: 'true',
            allow: 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          },
          null,
          8,
          hi
        )
      ],
      512
    )
  );
}
(ye.render = mi), (ye.__file = 'fbfans/Index.vue');
var Tt = {
  install(t) {
    t.component(ye.name, ye);
  }
};
const Et = (t) => {
    let e = Number(t);
    return e === e;
  },
  gi = (t, e = 300) => {
    let a = null,
      r = !1;
    return () => {
      r ||
        ((r = !0),
        clearTimeout(a),
        (a = setTimeout(() => {
          t && typeof t == 'function' && t(), (r = !1);
        }, e)));
    };
  };
var be = pe({
  name: 'oc-navside',
  emits: ['navHandle'],
  props: {
    navItemNum: { type: Number, default: 0 },
    navItemTextArr: { type: Array, default: [] },
    commonClassName: { type: String, default: 'oc-nav-item' },
    defaultClassName: { type: String, default: 'oc-nav-default' },
    activeClassName: { type: String, default: 'oc-nav-active' },
    targetSectionArr: { type: Array, default: [] },
    disabledMovePage: { type: Boolean, default: !1 },
    centerSlotLocIndex: { type: Number, default: -1 }
  },
  setup(t, e) {
    let a = 0,
      r = !1;
    const i = $([]),
      n = $(0),
      l = () => {
        let m = [];
        if (t.navItemTextArr.length > 0) (m = t.navItemTextArr), (a = m.length);
        else {
          for (let g = 0, y = t.navItemNum; g < y; g++) m.push('');
          a = t.navItemNum;
        }
        return m;
      },
      s = (m) => {
        const g = [];
        for (let y = 0, w = m.length; y < w; y++) {
          const b = document.querySelector(m[y]);
          g.push(b || null);
        }
        return g;
      },
      o = (m) => {
        if (!m || !m.getBoundingClientRect) return { eleTop: 0, eleBottom: 0 };
        const { top: g, height: y } = m.getBoundingClientRect(),
          w = window.pageYOffset || document.documentElement.scrollTop;
        return { eleTop: g + w, eleBottom: g + w + y };
      },
      u = (m) => {
        (r = !0),
          f(m)
            .catch(() => {
              window.scrollTo(0, m);
            })
            .catch(() => {
              document.documentElement.scrollTop
                ? (document.documentElement.scrollTop = m)
                : (document.body.scrollTop = m);
            })
            .finally(() => {
              setTimeout(() => {
                r = !1;
              }, 1600);
            });
      },
      f = (m) =>
        Et(m)
          ? new Promise((g, y) => {
              try {
                window.scrollTo({ top: m, behavior: 'smooth' }), g(!0);
              } catch (w) {
                y();
              }
            })
          : Promise.resolve(),
      p = (m) => {
        const y = window.innerHeight,
          w = window.pageYOffset || document.documentElement.scrollTop,
          { eleTop: b, eleBottom: E } = o(m),
          M = y / 6,
          P = w + M,
          S = w + y - M,
          I = b + (E - b) / 2;
        return I < S && I > P;
      },
      d = () => {
        for (let m = 0, g = i.value.length; m < g; m++)
          if (p(i.value[m])) {
            (n.value = m), console.log(n.value);
            break;
          }
      },
      h = ({ target: m }) => {
        const g = Number(m.dataset.index);
        if (!Et(g) || g < 0 || g > a) return;
        const w = i.value[g];
        if (!w) return;
        const b = o(w).eleTop;
        (n.value = g), e.emit('navHandle', g), !t.disabledMovePage && u(b);
      },
      c = () => {
        (i.value = s(t.targetSectionArr)),
          window.addEventListener(
            'scroll',
            gi(() => {
              r || d();
            })
          );
      },
      v = l();
    return ce(c), { activeIndex: n, navItemList: v, changeNav: h, realNavNum: a };
  }
});
const wi = { class: 'oc-navside' },
  yi = ['data-index'];
function bi(t, e, a, r, i, n) {
  return (
    R(),
    U('div', wi, [
      Xe(t.$slots, 'top'),
      q('ul', { class: 'oc-navside-list', onClick: e[0] || (e[0] = (...l) => t.changeNav && t.changeNav(...l)) }, [
        (R(!0),
        U(
          Pe,
          null,
          Oe(
            t.navItemList,
            (l, s) => (
              R(),
              U('li', { key: s, class: 'oc-navside-list-item' }, [
                q(
                  'a',
                  {
                    href: 'javascript:void(0);',
                    'data-index': s,
                    class: Nt([
                      t.commonClassName,
                      t.defaultClassName,
                      { [t.activeClassName]: t.activeIndex === s },
                      t.defaultClassName + '-' + s,
                      { [t.activeClassName + '-' + s]: t.activeIndex === s }
                    ])
                  },
                  Dt(l),
                  11,
                  yi
                )
              ])
            )
          ),
          128
        ))
      ]),
      Xe(t.$slots, 'bottom')
    ])
  );
}
(be.render = bi), (be.__file = 'navside/Index.vue');
var xt = {
  install(t) {
    t.component(be.name, be);
  }
};
const Si = [Ye, Ct, Tt, xt];
function Pt(t) {
  Si.forEach((e) => {
    t.use(e);
  });
}
var Ci = { install: Pt };
export { Tt as FbFans, xt as NavSide, Ct as Swiper, Ye as VideoPopup, Ci as default, Pt as install };
//# sourceMappingURL=oceancomp.es.js.map
