(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ni = {
  id: "nah_dah_dah_nah_nah_opus_1984",
  display_type: "canvas",
  // {svg{canvas}}
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-1",
  controls_class: "tw:p-1",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-8 tw:sm:p-0"
};
function Qt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ei(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ro(t) {
  let n, e, o;
  t.length !== 2 ? (n = Qt, e = (s, u) => Qt(t(s), u), o = (s, u) => t(s) - u) : (n = t === Qt || t === ei ? t : oi, e = t, o = t);
  function r(s, u, b = 0, l = s.length) {
    if (b < l) {
      if (n(u, u) !== 0) return l;
      do {
        const f = b + l >>> 1;
        e(s[f], u) < 0 ? b = f + 1 : l = f;
      } while (b < l);
    }
    return b;
  }
  function i(s, u, b = 0, l = s.length) {
    if (b < l) {
      if (n(u, u) !== 0) return l;
      do {
        const f = b + l >>> 1;
        e(s[f], u) <= 0 ? b = f + 1 : l = f;
      } while (b < l);
    }
    return b;
  }
  function a(s, u, b = 0, l = s.length) {
    const f = r(s, u, b, l - 1);
    return f > b && o(s[f - 1], u) > -o(s[f], u) ? f - 1 : f;
  }
  return { left: r, center: a, right: i };
}
function oi() {
  return 0;
}
function ri(t) {
  return t === null ? NaN : +t;
}
const ii = Ro(Qt), ai = ii.right;
Ro(ri).center;
const si = Math.sqrt(50), ui = Math.sqrt(10), bi = Math.sqrt(2);
function an(t, n, e) {
  const o = (n - t) / Math.max(0, e), r = Math.floor(Math.log10(o)), i = o / Math.pow(10, r), a = i >= si ? 10 : i >= ui ? 5 : i >= bi ? 2 : 1;
  let s, u, b;
  return r < 0 ? (b = Math.pow(10, -r) / a, s = Math.round(t * b), u = Math.round(n * b), s / b < t && ++s, u / b > n && --u, b = -b) : (b = Math.pow(10, r) * a, s = Math.round(t / b), u = Math.round(n / b), s * b < t && ++s, u * b > n && --u), u < s && 0.5 <= e && e < 2 ? an(t, n, e * 2) : [s, u, b];
}
function li(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const o = n < t, [r, i, a] = o ? an(n, t, e) : an(t, n, e);
  if (!(i >= r)) return [];
  const s = i - r + 1, u = new Array(s);
  if (o)
    if (a < 0) for (let b = 0; b < s; ++b) u[b] = (i - b) / -a;
    else for (let b = 0; b < s; ++b) u[b] = (i - b) * a;
  else if (a < 0) for (let b = 0; b < s; ++b) u[b] = (r + b) / -a;
  else for (let b = 0; b < s; ++b) u[b] = (r + b) * a;
  return u;
}
function Un(t, n, e) {
  return n = +n, t = +t, e = +e, an(t, n, e)[2];
}
function fi(t, n, e) {
  n = +n, t = +t, e = +e;
  const o = n < t, r = o ? Un(n, t, e) : Un(t, n, e);
  return (o ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Gt(t, n) {
  let e;
  for (const o of t)
    o != null && (e < o || e === void 0 && o >= o) && (e = o);
  return e;
}
function De(t, n) {
  let e;
  if (n === void 0)
    for (const o of t)
      o != null && (e > o || e === void 0 && o >= o) && (e = o);
  else {
    let o = -1;
    for (let r of t)
      (r = n(r, ++o, t)) != null && (e > r || e === void 0 && r >= r) && (e = r);
  }
  return e;
}
function Fo(t, n, e) {
  t = +t, n = +n, e = (r = arguments.length) < 2 ? (n = t, t = 0, 1) : r < 3 ? 1 : +e;
  for (var o = -1, r = Math.max(0, Math.ceil((n - t) / e)) | 0, i = new Array(r); ++o < r; )
    i[o] = t + o * e;
  return i;
}
var ci = { value: () => {
} };
function _e() {
  for (var t = 0, n = arguments.length, e = {}, o; t < n; ++t) {
    if (!(o = arguments[t] + "") || o in e || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    e[o] = [];
  }
  return new jt(e);
}
function jt(t) {
  this._ = t;
}
function hi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var o = "", r = e.indexOf(".");
    if (r >= 0 && (o = e.slice(r + 1), e = e.slice(0, r)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: o };
  });
}
jt.prototype = _e.prototype = {
  constructor: jt,
  on: function(t, n) {
    var e = this._, o = hi(t + "", e), r, i = -1, a = o.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((r = (t = o[i]).type) && (r = di(e[r], t.name))) return r;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++i < a; )
      if (r = (t = o[i]).type) e[r] = He(e[r], t.name, n);
      else if (n == null) for (r in e) e[r] = He(e[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new jt(t);
  },
  call: function(t, n) {
    if ((r = arguments.length - 2) > 0) for (var e = new Array(r), o = 0, r, i; o < r; ++o) e[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (i = this._[t], o = 0, r = i.length; o < r; ++o) i[o].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  }
};
function di(t, n) {
  for (var e = 0, o = t.length, r; e < o; ++e)
    if ((r = t[e]).name === n)
      return r.value;
}
function He(t, n, e) {
  for (var o = 0, r = t.length; o < r; ++o)
    if (t[o].name === n) {
      t[o] = ci, t = t.slice(0, o).concat(t.slice(o + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Yn = "http://www.w3.org/1999/xhtml";
const qe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Yn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _n(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), qe.hasOwnProperty(n) ? { space: qe[n], local: t } : t;
}
function pi(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Yn && n.documentElement.namespaceURI === Yn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function gi(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Lo(t) {
  var n = _n(t);
  return (n.local ? gi : pi)(n);
}
function yi() {
}
function me(t) {
  return t == null ? yi : function() {
    return this.querySelector(t);
  };
}
function _i(t) {
  typeof t != "function" && (t = me(t));
  for (var n = this._groups, e = n.length, o = new Array(e), r = 0; r < e; ++r)
    for (var i = n[r], a = i.length, s = o[r] = new Array(a), u, b, l = 0; l < a; ++l)
      (u = i[l]) && (b = t.call(u, u.__data__, l, i)) && ("__data__" in u && (b.__data__ = u.__data__), s[l] = b);
  return new C(o, this._parents);
}
function mi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function $i() {
  return [];
}
function Do(t) {
  return t == null ? $i : function() {
    return this.querySelectorAll(t);
  };
}
function vi(t) {
  return function() {
    return mi(t.apply(this, arguments));
  };
}
function wi(t) {
  typeof t == "function" ? t = vi(t) : t = Do(t);
  for (var n = this._groups, e = n.length, o = [], r = [], i = 0; i < e; ++i)
    for (var a = n[i], s = a.length, u, b = 0; b < s; ++b)
      (u = a[b]) && (o.push(t.call(u, u.__data__, b, a)), r.push(u));
  return new C(o, r);
}
function Ho(t) {
  return function() {
    return this.matches(t);
  };
}
function qo(t) {
  return function(n) {
    return n.matches(t);
  };
}
var xi = Array.prototype.find;
function Mi(t) {
  return function() {
    return xi.call(this.children, t);
  };
}
function Ai() {
  return this.firstElementChild;
}
function Ti(t) {
  return this.select(t == null ? Ai : Mi(typeof t == "function" ? t : qo(t)));
}
var Si = Array.prototype.filter;
function Ei() {
  return Array.from(this.children);
}
function Pi(t) {
  return function() {
    return Si.call(this.children, t);
  };
}
function Ni(t) {
  return this.selectAll(t == null ? Ei : Pi(typeof t == "function" ? t : qo(t)));
}
function zi(t) {
  typeof t != "function" && (t = Ho(t));
  for (var n = this._groups, e = n.length, o = new Array(e), r = 0; r < e; ++r)
    for (var i = n[r], a = i.length, s = o[r] = [], u, b = 0; b < a; ++b)
      (u = i[b]) && t.call(u, u.__data__, b, i) && s.push(u);
  return new C(o, this._parents);
}
function Bo(t) {
  return new Array(t.length);
}
function Oi() {
  return new C(this._enter || this._groups.map(Bo), this._parents);
}
function sn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
sn.prototype = {
  constructor: sn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ci(t) {
  return function() {
    return t;
  };
}
function Ii(t, n, e, o, r, i) {
  for (var a = 0, s, u = n.length, b = i.length; a < b; ++a)
    (s = n[a]) ? (s.__data__ = i[a], o[a] = s) : e[a] = new sn(t, i[a]);
  for (; a < u; ++a)
    (s = n[a]) && (r[a] = s);
}
function ki(t, n, e, o, r, i, a) {
  var s, u, b = /* @__PURE__ */ new Map(), l = n.length, f = i.length, c = new Array(l), p;
  for (s = 0; s < l; ++s)
    (u = n[s]) && (c[s] = p = a.call(u, u.__data__, s, n) + "", b.has(p) ? r[s] = u : b.set(p, u));
  for (s = 0; s < f; ++s)
    p = a.call(t, i[s], s, i) + "", (u = b.get(p)) ? (o[s] = u, u.__data__ = i[s], b.delete(p)) : e[s] = new sn(t, i[s]);
  for (s = 0; s < l; ++s)
    (u = n[s]) && b.get(c[s]) === u && (r[s] = u);
}
function Ri(t) {
  return t.__data__;
}
function Fi(t, n) {
  if (!arguments.length) return Array.from(this, Ri);
  var e = n ? ki : Ii, o = this._parents, r = this._groups;
  typeof t != "function" && (t = Ci(t));
  for (var i = r.length, a = new Array(i), s = new Array(i), u = new Array(i), b = 0; b < i; ++b) {
    var l = o[b], f = r[b], c = f.length, p = Li(t.call(l, l && l.__data__, b, o)), h = p.length, d = s[b] = new Array(h), v = a[b] = new Array(h), y = u[b] = new Array(c);
    e(l, f, d, v, y, p, n);
    for (var w = 0, M = 0, g, m; w < h; ++w)
      if (g = d[w]) {
        for (w >= M && (M = w + 1); !(m = v[M]) && ++M < h; ) ;
        g._next = m || null;
      }
  }
  return a = new C(a, o), a._enter = s, a._exit = u, a;
}
function Li(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Di() {
  return new C(this._exit || this._groups.map(Bo), this._parents);
}
function Hi(t, n, e) {
  var o = this.enter(), r = this, i = this.exit();
  return typeof t == "function" ? (o = t(o), o && (o = o.selection())) : o = o.append(t + ""), n != null && (r = n(r), r && (r = r.selection())), e == null ? i.remove() : e(i), o && r ? o.merge(r).order() : r;
}
function qi(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, o = n._groups, r = e.length, i = o.length, a = Math.min(r, i), s = new Array(r), u = 0; u < a; ++u)
    for (var b = e[u], l = o[u], f = b.length, c = s[u] = new Array(f), p, h = 0; h < f; ++h)
      (p = b[h] || l[h]) && (c[h] = p);
  for (; u < r; ++u)
    s[u] = e[u];
  return new C(s, this._parents);
}
function Bi() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var o = t[n], r = o.length - 1, i = o[r], a; --r >= 0; )
      (a = o[r]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Xi(t) {
  t || (t = Gi);
  function n(f, c) {
    return f && c ? t(f.__data__, c.__data__) : !f - !c;
  }
  for (var e = this._groups, o = e.length, r = new Array(o), i = 0; i < o; ++i) {
    for (var a = e[i], s = a.length, u = r[i] = new Array(s), b, l = 0; l < s; ++l)
      (b = a[l]) && (u[l] = b);
    u.sort(n);
  }
  return new C(r, this._parents).order();
}
function Gi(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ui() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Yi() {
  return Array.from(this);
}
function Ki() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var o = t[n], r = 0, i = o.length; r < i; ++r) {
      var a = o[r];
      if (a) return a;
    }
  return null;
}
function Vi() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Zi() {
  return !this.node();
}
function Wi(t) {
  for (var n = this._groups, e = 0, o = n.length; e < o; ++e)
    for (var r = n[e], i = 0, a = r.length, s; i < a; ++i)
      (s = r[i]) && t.call(s, s.__data__, i, r);
  return this;
}
function Ji(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qi(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ji(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ta(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ea(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function oa(t, n) {
  var e = _n(t);
  if (arguments.length < 2) {
    var o = this.node();
    return e.local ? o.getAttributeNS(e.space, e.local) : o.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Qi : Ji : typeof n == "function" ? e.local ? ea : na : e.local ? ta : ji)(e, n));
}
function Xo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ra(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ia(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function aa(t, n, e) {
  return function() {
    var o = n.apply(this, arguments);
    o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, e);
  };
}
function sa(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ra : typeof n == "function" ? aa : ia)(t, n, e ?? "")) : $t(this.node(), t);
}
function $t(t, n) {
  return t.style.getPropertyValue(n) || Xo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ua(t) {
  return function() {
    delete this[t];
  };
}
function ba(t, n) {
  return function() {
    this[t] = n;
  };
}
function la(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function fa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ua : typeof n == "function" ? la : ba)(t, n)) : this.node()[t];
}
function Go(t) {
  return t.trim().split(/^|\s+/);
}
function $e(t) {
  return t.classList || new Uo(t);
}
function Uo(t) {
  this._node = t, this._names = Go(t.getAttribute("class") || "");
}
Uo.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Yo(t, n) {
  for (var e = $e(t), o = -1, r = n.length; ++o < r; ) e.add(n[o]);
}
function Ko(t, n) {
  for (var e = $e(t), o = -1, r = n.length; ++o < r; ) e.remove(n[o]);
}
function ca(t) {
  return function() {
    Yo(this, t);
  };
}
function ha(t) {
  return function() {
    Ko(this, t);
  };
}
function da(t, n) {
  return function() {
    (n.apply(this, arguments) ? Yo : Ko)(this, t);
  };
}
function pa(t, n) {
  var e = Go(t + "");
  if (arguments.length < 2) {
    for (var o = $e(this.node()), r = -1, i = e.length; ++r < i; ) if (!o.contains(e[r])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? da : n ? ca : ha)(e, n));
}
function ga() {
  this.textContent = "";
}
function ya(t) {
  return function() {
    this.textContent = t;
  };
}
function _a(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ma(t) {
  return arguments.length ? this.each(t == null ? ga : (typeof t == "function" ? _a : ya)(t)) : this.node().textContent;
}
function $a() {
  this.innerHTML = "";
}
function va(t) {
  return function() {
    this.innerHTML = t;
  };
}
function wa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function xa(t) {
  return arguments.length ? this.each(t == null ? $a : (typeof t == "function" ? wa : va)(t)) : this.node().innerHTML;
}
function Ma() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Aa() {
  return this.each(Ma);
}
function Ta() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Sa() {
  return this.each(Ta);
}
function Ea(t) {
  var n = typeof t == "function" ? t : Lo(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Pa() {
  return null;
}
function Na(t, n) {
  var e = typeof t == "function" ? t : Lo(t), o = n == null ? Pa : typeof n == "function" ? n : me(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function za() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Oa() {
  return this.each(za);
}
function Ca() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ia() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ka(t) {
  return this.select(t ? Ia : Ca);
}
function Ra(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function La(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", o = n.indexOf(".");
    return o >= 0 && (e = n.slice(o + 1), n = n.slice(0, o)), { type: n, name: e };
  });
}
function Da(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, o = -1, r = n.length, i; e < r; ++e)
        i = n[e], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : n[++o] = i;
      ++o ? n.length = o : delete this.__on;
    }
  };
}
function Ha(t, n, e) {
  return function() {
    var o = this.__on, r, i = Fa(n);
    if (o) {
      for (var a = 0, s = o.length; a < s; ++a)
        if ((r = o[a]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = e), r.value = n;
          return;
        }
    }
    this.addEventListener(t.type, i, e), r = { type: t.type, name: t.name, value: n, listener: i, options: e }, o ? o.push(r) : this.__on = [r];
  };
}
function qa(t, n, e) {
  var o = La(t + ""), r, i = o.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, b = s.length, l; u < b; ++u)
        for (r = 0, l = s[u]; r < i; ++r)
          if ((a = o[r]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = n ? Ha : Da, r = 0; r < i; ++r) this.each(s(o[r], n, e));
  return this;
}
function Vo(t, n, e) {
  var o = Xo(t), r = o.CustomEvent;
  typeof r == "function" ? r = new r(n, e) : (r = o.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r);
}
function Ba(t, n) {
  return function() {
    return Vo(this, t, n);
  };
}
function Xa(t, n) {
  return function() {
    return Vo(this, t, n.apply(this, arguments));
  };
}
function Ga(t, n) {
  return this.each((typeof n == "function" ? Xa : Ba)(t, n));
}
function* Ua() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var o = t[n], r = 0, i = o.length, a; r < i; ++r)
      (a = o[r]) && (yield a);
}
var Zo = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function Dt() {
  return new C([[document.documentElement]], Zo);
}
function Ya() {
  return this;
}
C.prototype = Dt.prototype = {
  constructor: C,
  select: _i,
  selectAll: wi,
  selectChild: Ti,
  selectChildren: Ni,
  filter: zi,
  data: Fi,
  enter: Oi,
  exit: Di,
  join: Hi,
  merge: qi,
  selection: Ya,
  order: Bi,
  sort: Xi,
  call: Ui,
  nodes: Yi,
  node: Ki,
  size: Vi,
  empty: Zi,
  each: Wi,
  attr: oa,
  style: sa,
  property: fa,
  classed: pa,
  text: ma,
  html: xa,
  raise: Aa,
  lower: Sa,
  append: Ea,
  insert: Na,
  remove: Oa,
  clone: ka,
  datum: Ra,
  on: qa,
  dispatch: Ga,
  [Symbol.iterator]: Ua
};
function E(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], Zo);
}
function Ka(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Kn(t, n) {
  if (t = Ka(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var o = e.createSVGPoint();
      return o.x = t.clientX, o.y = t.clientY, o = o.matrixTransform(n.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (n.getBoundingClientRect) {
      var r = n.getBoundingClientRect();
      return [t.clientX - r.left - n.clientLeft, t.clientY - r.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Va = { passive: !1 }, zt = { capture: !0, passive: !1 };
function Rn(t) {
  t.stopImmediatePropagation();
}
function _t(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Za(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", _t, zt);
  "onselectstart" in n ? e.on("selectstart.drag", _t, zt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Wa(t, n) {
  var e = t.document.documentElement, o = E(t).on("dragstart.drag", null);
  n && (o.on("click.drag", _t, zt), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in e ? o.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Ut = (t) => () => t;
function Vn(t, {
  sourceEvent: n,
  subject: e,
  target: o,
  identifier: r,
  active: i,
  x: a,
  y: s,
  dx: u,
  dy: b,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: r, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: b, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Vn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ja(t) {
  return !t.ctrlKey && !t.button;
}
function Qa() {
  return this.parentNode;
}
function ja(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function ts() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ns() {
  var t = Ja, n = Qa, e = ja, o = ts, r = {}, i = _e("start", "drag", "end"), a = 0, s, u, b, l, f = 0;
  function c(g) {
    g.on("mousedown.drag", p).filter(o).on("touchstart.drag", v).on("touchmove.drag", y, Va).on("touchend.drag touchcancel.drag", w).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, m) {
    if (!(l || !t.call(this, g, m))) {
      var T = M(this, n.call(this, g, m), g, m, "mouse");
      T && (E(g.view).on("mousemove.drag", h, zt).on("mouseup.drag", d, zt), Za(g.view), Rn(g), b = !1, s = g.clientX, u = g.clientY, T("start", g));
    }
  }
  function h(g) {
    if (_t(g), !b) {
      var m = g.clientX - s, T = g.clientY - u;
      b = m * m + T * T > f;
    }
    r.mouse("drag", g);
  }
  function d(g) {
    E(g.view).on("mousemove.drag mouseup.drag", null), Wa(g.view, b), _t(g), r.mouse("end", g);
  }
  function v(g, m) {
    if (t.call(this, g, m)) {
      var T = g.changedTouches, P = n.call(this, g, m), N = T.length, B, Z;
      for (B = 0; B < N; ++B)
        (Z = M(this, P, g, m, T[B].identifier, T[B])) && (Rn(g), Z("start", g, T[B]));
    }
  }
  function y(g) {
    var m = g.changedTouches, T = m.length, P, N;
    for (P = 0; P < T; ++P)
      (N = r[m[P].identifier]) && (_t(g), N("drag", g, m[P]));
  }
  function w(g) {
    var m = g.changedTouches, T = m.length, P, N;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), P = 0; P < T; ++P)
      (N = r[m[P].identifier]) && (Rn(g), N("end", g, m[P]));
  }
  function M(g, m, T, P, N, B) {
    var Z = i.copy(), $ = Kn(B || T, m), X, z, R;
    if ((R = e.call(g, new Vn("beforestart", {
      sourceEvent: T,
      target: c,
      identifier: N,
      active: a,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), P)) != null)
      return X = R.x - $[0] || 0, z = R.y - $[1] || 0, function Xt(rt, at, gt) {
        var I = $, kn;
        switch (rt) {
          case "start":
            r[N] = Xt, kn = a++;
            break;
          case "end":
            delete r[N], --a;
          // falls through
          case "drag":
            $ = Kn(gt || at, m), kn = a;
            break;
        }
        Z.call(
          rt,
          g,
          new Vn(rt, {
            sourceEvent: at,
            subject: R,
            target: c,
            identifier: N,
            active: kn,
            x: $[0] + X,
            y: $[1] + z,
            dx: $[0] - I[0],
            dy: $[1] - I[1],
            dispatch: Z
          }),
          P
        );
      };
  }
  return c.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Ut(!!g), c) : t;
  }, c.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Ut(g), c) : n;
  }, c.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Ut(g), c) : e;
  }, c.touchable = function(g) {
    return arguments.length ? (o = typeof g == "function" ? g : Ut(!!g), c) : o;
  }, c.on = function() {
    var g = i.on.apply(i, arguments);
    return g === i ? c : g;
  }, c.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, c) : Math.sqrt(f);
  }, c;
}
function ve(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Wo(t, n) {
  var e = Object.create(t.prototype);
  for (var o in n) e[o] = n[o];
  return e;
}
function Ht() {
}
var Ot = 0.7, un = 1 / Ot, mt = "\\s*([+-]?\\d+)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", es = /^#([0-9a-f]{3,8})$/, os = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), rs = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), is = new RegExp(`^rgba\\(${mt},${mt},${mt},${Ct}\\)$`), as = new RegExp(`^rgba\\(${U},${U},${U},${Ct}\\)$`), ss = new RegExp(`^hsl\\(${Ct},${U},${U}\\)$`), us = new RegExp(`^hsla\\(${Ct},${U},${U},${Ct}\\)$`), Be = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ve(Ht, lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xe,
  // Deprecated! Use color.formatHex.
  formatHex: Xe,
  formatHex8: bs,
  formatHsl: ls,
  formatRgb: Ge,
  toString: Ge
});
function Xe() {
  return this.rgb().formatHex();
}
function bs() {
  return this.rgb().formatHex8();
}
function ls() {
  return Jo(this).formatHsl();
}
function Ge() {
  return this.rgb().formatRgb();
}
function lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = es.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ue(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Yt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Yt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = os.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = rs.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = is.exec(t)) ? Yt(n[1], n[2], n[3], n[4]) : (n = as.exec(t)) ? Yt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ss.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, 1) : (n = us.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, n[4]) : Be.hasOwnProperty(t) ? Ue(Be[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Ue(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yt(t, n, e, o) {
  return o <= 0 && (t = n = e = NaN), new O(t, n, e, o);
}
function fs(t) {
  return t instanceof Ht || (t = lt(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function Zn(t, n, e, o) {
  return arguments.length === 1 ? fs(t) : new O(t, n, e, o ?? 1);
}
function O(t, n, e, o) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +o;
}
ve(O, Zn, Wo(Ht, {
  brighter(t) {
    return t = t == null ? un : Math.pow(un, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ot : Math.pow(Ot, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(bt(this.r), bt(this.g), bt(this.b), bn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ye,
  // Deprecated! Use color.formatHex.
  formatHex: Ye,
  formatHex8: cs,
  formatRgb: Ke,
  toString: Ke
}));
function Ye() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function cs() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ke() {
  const t = bn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${bt(this.r)}, ${bt(this.g)}, ${bt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function bn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function bt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ut(t) {
  return t = bt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ve(t, n, e, o) {
  return o <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new L(t, n, e, o);
}
function Jo(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ht || (t = lt(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, o = t.b / 255, r = Math.min(n, e, o), i = Math.max(n, e, o), a = NaN, s = i - r, u = (i + r) / 2;
  return s ? (n === i ? a = (e - o) / s + (e < o) * 6 : e === i ? a = (o - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? i + r : 2 - i - r, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new L(a, s, u, t.opacity);
}
function hs(t, n, e, o) {
  return arguments.length === 1 ? Jo(t) : new L(t, n, e, o ?? 1);
}
function L(t, n, e, o) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +o;
}
ve(L, hs, Wo(Ht, {
  brighter(t) {
    return t = t == null ? un : Math.pow(un, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ot : Math.pow(Ot, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, o = e + (e < 0.5 ? e : 1 - e) * n, r = 2 * e - o;
    return new O(
      Fn(t >= 240 ? t - 240 : t + 120, r, o),
      Fn(t, r, o),
      Fn(t < 120 ? t + 240 : t - 120, r, o),
      this.opacity
    );
  },
  clamp() {
    return new L(Ze(this.h), Kt(this.s), Kt(this.l), bn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = bn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ze(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Fn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const we = (t) => () => t;
function ds(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ps(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(o) {
    return Math.pow(t + o * n, e);
  };
}
function gs(t) {
  return (t = +t) == 1 ? Qo : function(n, e) {
    return e - n ? ps(n, e, t) : we(isNaN(n) ? e : n);
  };
}
function Qo(t, n) {
  var e = n - t;
  return e ? ds(t, e) : we(isNaN(t) ? n : t);
}
const ln = function t(n) {
  var e = gs(n);
  function o(r, i) {
    var a = e((r = Zn(r)).r, (i = Zn(i)).r), s = e(r.g, i.g), u = e(r.b, i.b), b = Qo(r.opacity, i.opacity);
    return function(l) {
      return r.r = a(l), r.g = s(l), r.b = u(l), r.opacity = b(l), r + "";
    };
  }
  return o.gamma = t, o;
}(1);
function ys(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, o = n.slice(), r;
  return function(i) {
    for (r = 0; r < e; ++r) o[r] = t[r] * (1 - i) + n[r] * i;
    return o;
  };
}
function _s(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ms(t, n) {
  var e = n ? n.length : 0, o = t ? Math.min(e, t.length) : 0, r = new Array(o), i = new Array(e), a;
  for (a = 0; a < o; ++a) r[a] = xe(t[a], n[a]);
  for (; a < e; ++a) i[a] = n[a];
  return function(s) {
    for (a = 0; a < o; ++a) i[a] = r[a](s);
    return i;
  };
}
function $s(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(o) {
    return e.setTime(t * (1 - o) + n * o), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function vs(t, n) {
  var e = {}, o = {}, r;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (r in n)
    r in t ? e[r] = xe(t[r], n[r]) : o[r] = n[r];
  return function(i) {
    for (r in e) o[r] = e[r](i);
    return o;
  };
}
var Wn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ln = new RegExp(Wn.source, "g");
function ws(t) {
  return function() {
    return t;
  };
}
function xs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function jo(t, n) {
  var e = Wn.lastIndex = Ln.lastIndex = 0, o, r, i, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (o = Wn.exec(t)) && (r = Ln.exec(n)); )
    (i = r.index) > e && (i = n.slice(e, i), s[a] ? s[a] += i : s[++a] = i), (o = o[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, u.push({ i: a, x: F(o, r) })), e = Ln.lastIndex;
  return e < n.length && (i = n.slice(e), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? xs(u[0].x) : ws(n) : (n = u.length, function(b) {
    for (var l = 0, f; l < n; ++l) s[(f = u[l]).i] = f.x(b);
    return s.join("");
  });
}
function xe(t, n) {
  var e = typeof n, o;
  return n == null || e === "boolean" ? we(n) : (e === "number" ? F : e === "string" ? (o = lt(n)) ? (n = o, ln) : jo : n instanceof lt ? ln : n instanceof Date ? $s : _s(n) ? ys : Array.isArray(n) ? ms : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? vs : F)(t, n);
}
function Ms(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var We = 180 / Math.PI, Jn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tr(t, n, e, o, r, i) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * o) && (e -= t * u, o -= n * u), (s = Math.sqrt(e * e + o * o)) && (e /= s, o /= s, u /= s), t * o < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: r,
    translateY: i,
    rotate: Math.atan2(n, t) * We,
    skewX: Math.atan(u) * We,
    scaleX: a,
    scaleY: s
  };
}
var Vt;
function As(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Jn : tr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ts(t) {
  return t == null || (Vt || (Vt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vt.setAttribute("transform", t), !(t = Vt.transform.baseVal.consolidate())) ? Jn : (t = t.matrix, tr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function nr(t, n, e, o) {
  function r(b) {
    return b.length ? b.pop() + " " : "";
  }
  function i(b, l, f, c, p, h) {
    if (b !== f || l !== c) {
      var d = p.push("translate(", null, n, null, e);
      h.push({ i: d - 4, x: F(b, f) }, { i: d - 2, x: F(l, c) });
    } else (f || c) && p.push("translate(" + f + n + c + e);
  }
  function a(b, l, f, c) {
    b !== l ? (b - l > 180 ? l += 360 : l - b > 180 && (b += 360), c.push({ i: f.push(r(f) + "rotate(", null, o) - 2, x: F(b, l) })) : l && f.push(r(f) + "rotate(" + l + o);
  }
  function s(b, l, f, c) {
    b !== l ? c.push({ i: f.push(r(f) + "skewX(", null, o) - 2, x: F(b, l) }) : l && f.push(r(f) + "skewX(" + l + o);
  }
  function u(b, l, f, c, p, h) {
    if (b !== f || l !== c) {
      var d = p.push(r(p) + "scale(", null, ",", null, ")");
      h.push({ i: d - 4, x: F(b, f) }, { i: d - 2, x: F(l, c) });
    } else (f !== 1 || c !== 1) && p.push(r(p) + "scale(" + f + "," + c + ")");
  }
  return function(b, l) {
    var f = [], c = [];
    return b = t(b), l = t(l), i(b.translateX, b.translateY, l.translateX, l.translateY, f, c), a(b.rotate, l.rotate, f, c), s(b.skewX, l.skewX, f, c), u(b.scaleX, b.scaleY, l.scaleX, l.scaleY, f, c), b = l = null, function(p) {
      for (var h = -1, d = c.length, v; ++h < d; ) f[(v = c[h]).i] = v.x(p);
      return f.join("");
    };
  };
}
var Ss = nr(As, "px, ", "px)", "deg)"), Es = nr(Ts, ", ", ")", ")"), vt = 0, St = 0, At = 0, er = 1e3, fn, Et, cn = 0, ft = 0, mn = 0, It = typeof performance == "object" && performance.now ? performance : Date, or = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function $n() {
  return ft || (or(Ps), ft = It.now() + mn);
}
function Ps() {
  ft = 0;
}
function kt() {
  this._call = this._time = this._next = null;
}
kt.prototype = rr.prototype = {
  constructor: kt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? $n() : +e) + (n == null ? 0 : +n), !this._next && Et !== this && (Et ? Et._next = this : fn = this, Et = this), this._call = t, this._time = e, Qn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qn());
  }
};
function rr(t, n, e) {
  var o = new kt();
  return o.restart(t, n, e), o;
}
function Ns() {
  $n(), ++vt;
  for (var t = fn, n; t; )
    (n = ft - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --vt;
}
function Je() {
  ft = (cn = It.now()) + mn, vt = St = 0;
  try {
    Ns();
  } finally {
    vt = 0, Os(), ft = 0;
  }
}
function zs() {
  var t = It.now(), n = t - cn;
  n > er && (mn -= n, cn = t);
}
function Os() {
  for (var t, n = fn, e, o = 1 / 0; n; )
    n._call ? (o > n._time && (o = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : fn = e);
  Et = t, Qn(o);
}
function Qn(t) {
  if (!vt) {
    St && (St = clearTimeout(St));
    var n = t - ft;
    n > 24 ? (t < 1 / 0 && (St = setTimeout(Je, t - It.now() - mn)), At && (At = clearInterval(At))) : (At || (cn = It.now(), At = setInterval(zs, er)), vt = 1, or(Je));
  }
}
function Qe(t, n, e) {
  var o = new kt();
  return n = n == null ? 0 : +n, o.restart((r) => {
    o.stop(), t(r + n);
  }, n, e), o;
}
function Cs(t, n, e) {
  var o = new kt(), r = n;
  return n == null ? (o.restart(t, n, e), o) : (o._restart = o.restart, o.restart = function(i, a, s) {
    a = +a, s = s == null ? $n() : +s, o._restart(function u(b) {
      b += r, o._restart(u, r += a, s), i(b);
    }, a, s);
  }, o.restart(t, n, e), o);
}
var Is = _e("start", "end", "cancel", "interrupt"), ks = [], ir = 0, je = 1, jn = 2, tn = 3, to = 4, te = 5, nn = 6;
function vn(t, n, e, o, r, i) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Rs(t, e, {
    name: n,
    index: o,
    // For context during callback.
    group: r,
    // For context during callback.
    on: Is,
    tween: ks,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ir
  });
}
function Me(t, n) {
  var e = H(t, n);
  if (e.state > ir) throw new Error("too late; already scheduled");
  return e;
}
function V(t, n) {
  var e = H(t, n);
  if (e.state > tn) throw new Error("too late; already running");
  return e;
}
function H(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Rs(t, n, e) {
  var o = t.__transition, r;
  o[n] = e, e.timer = rr(i, 0, e.time);
  function i(b) {
    e.state = je, e.timer.restart(a, e.delay, e.time), e.delay <= b && a(b - e.delay);
  }
  function a(b) {
    var l, f, c, p;
    if (e.state !== je) return u();
    for (l in o)
      if (p = o[l], p.name === e.name) {
        if (p.state === tn) return Qe(a);
        p.state === to ? (p.state = nn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete o[l]) : +l < n && (p.state = nn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete o[l]);
      }
    if (Qe(function() {
      e.state === tn && (e.state = to, e.timer.restart(s, e.delay, e.time), s(b));
    }), e.state = jn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === jn) {
      for (e.state = tn, r = new Array(c = e.tween.length), l = 0, f = -1; l < c; ++l)
        (p = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++f] = p);
      r.length = f + 1;
    }
  }
  function s(b) {
    for (var l = b < e.duration ? e.ease.call(null, b / e.duration) : (e.timer.restart(u), e.state = te, 1), f = -1, c = r.length; ++f < c; )
      r[f].call(t, l);
    e.state === te && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = nn, e.timer.stop(), delete o[n];
    for (var b in o) return;
    delete t.__transition;
  }
}
function Fs(t, n) {
  var e = t.__transition, o, r, i = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((o = e[a]).name !== n) {
        i = !1;
        continue;
      }
      r = o.state > jn && o.state < te, o.state = nn, o.timer.stop(), o.on.call(r ? "interrupt" : "cancel", t, t.__data__, o.index, o.group), delete e[a];
    }
    i && delete t.__transition;
  }
}
function Ls(t) {
  return this.each(function() {
    Fs(this, t);
  });
}
function Ds(t, n) {
  var e, o;
  return function() {
    var r = V(this, t), i = r.tween;
    if (i !== e) {
      o = e = i;
      for (var a = 0, s = o.length; a < s; ++a)
        if (o[a].name === n) {
          o = o.slice(), o.splice(a, 1);
          break;
        }
    }
    r.tween = o;
  };
}
function Hs(t, n, e) {
  var o, r;
  if (typeof e != "function") throw new Error();
  return function() {
    var i = V(this, t), a = i.tween;
    if (a !== o) {
      r = (o = a).slice();
      for (var s = { name: n, value: e }, u = 0, b = r.length; u < b; ++u)
        if (r[u].name === n) {
          r[u] = s;
          break;
        }
      u === b && r.push(s);
    }
    i.tween = r;
  };
}
function qs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var o = H(this.node(), e).tween, r = 0, i = o.length, a; r < i; ++r)
      if ((a = o[r]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Ds : Hs)(e, t, n));
}
function Ae(t, n, e) {
  var o = t._id;
  return t.each(function() {
    var r = V(this, o);
    (r.value || (r.value = {}))[n] = e.apply(this, arguments);
  }), function(r) {
    return H(r, o).value[n];
  };
}
function ar(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof lt ? ln : (e = lt(n)) ? (n = e, ln) : jo)(t, n);
}
function Bs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Gs(t, n, e) {
  var o, r = e + "", i;
  return function() {
    var a = this.getAttribute(t);
    return a === r ? null : a === o ? i : i = n(o = a, e);
  };
}
function Us(t, n, e) {
  var o, r = e + "", i;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === r ? null : a === o ? i : i = n(o = a, e);
  };
}
function Ys(t, n, e) {
  var o, r, i;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === o && u === r ? i : (r = u, i = n(o = a, s)));
  };
}
function Ks(t, n, e) {
  var o, r, i;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === o && u === r ? i : (r = u, i = n(o = a, s)));
  };
}
function Vs(t, n) {
  var e = _n(t), o = e === "transform" ? Es : ar;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ks : Ys)(e, o, Ae(this, "attr." + t, n)) : n == null ? (e.local ? Xs : Bs)(e) : (e.local ? Us : Gs)(e, o, n));
}
function Zs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Ws(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Js(t, n) {
  var e, o;
  function r() {
    var i = n.apply(this, arguments);
    return i !== o && (e = (o = i) && Ws(t, i)), e;
  }
  return r._value = n, r;
}
function Qs(t, n) {
  var e, o;
  function r() {
    var i = n.apply(this, arguments);
    return i !== o && (e = (o = i) && Zs(t, i)), e;
  }
  return r._value = n, r;
}
function js(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var o = _n(t);
  return this.tween(e, (o.local ? Js : Qs)(o, n));
}
function tu(t, n) {
  return function() {
    Me(this, t).delay = +n.apply(this, arguments);
  };
}
function nu(t, n) {
  return n = +n, function() {
    Me(this, t).delay = n;
  };
}
function eu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tu : nu)(n, t)) : H(this.node(), n).delay;
}
function ou(t, n) {
  return function() {
    V(this, t).duration = +n.apply(this, arguments);
  };
}
function ru(t, n) {
  return n = +n, function() {
    V(this, t).duration = n;
  };
}
function iu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ou : ru)(n, t)) : H(this.node(), n).duration;
}
function au(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    V(this, t).ease = n;
  };
}
function su(t) {
  var n = this._id;
  return arguments.length ? this.each(au(n, t)) : H(this.node(), n).ease;
}
function uu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    V(this, t).ease = e;
  };
}
function bu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(uu(this._id, t));
}
function lu(t) {
  typeof t != "function" && (t = Ho(t));
  for (var n = this._groups, e = n.length, o = new Array(e), r = 0; r < e; ++r)
    for (var i = n[r], a = i.length, s = o[r] = [], u, b = 0; b < a; ++b)
      (u = i[b]) && t.call(u, u.__data__, b, i) && s.push(u);
  return new j(o, this._parents, this._name, this._id);
}
function fu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, o = n.length, r = e.length, i = Math.min(o, r), a = new Array(o), s = 0; s < i; ++s)
    for (var u = n[s], b = e[s], l = u.length, f = a[s] = new Array(l), c, p = 0; p < l; ++p)
      (c = u[p] || b[p]) && (f[p] = c);
  for (; s < o; ++s)
    a[s] = n[s];
  return new j(a, this._parents, this._name, this._id);
}
function cu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function hu(t, n, e) {
  var o, r, i = cu(n) ? Me : V;
  return function() {
    var a = i(this, t), s = a.on;
    s !== o && (r = (o = s).copy()).on(n, e), a.on = r;
  };
}
function du(t, n) {
  var e = this._id;
  return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(hu(e, t, n));
}
function pu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function gu() {
  return this.on("end.remove", pu(this._id));
}
function yu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = me(t));
  for (var o = this._groups, r = o.length, i = new Array(r), a = 0; a < r; ++a)
    for (var s = o[a], u = s.length, b = i[a] = new Array(u), l, f, c = 0; c < u; ++c)
      (l = s[c]) && (f = t.call(l, l.__data__, c, s)) && ("__data__" in l && (f.__data__ = l.__data__), b[c] = f, vn(b[c], n, e, c, b, H(l, e)));
  return new j(i, this._parents, n, e);
}
function _u(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Do(t));
  for (var o = this._groups, r = o.length, i = [], a = [], s = 0; s < r; ++s)
    for (var u = o[s], b = u.length, l, f = 0; f < b; ++f)
      if (l = u[f]) {
        for (var c = t.call(l, l.__data__, f, u), p, h = H(l, e), d = 0, v = c.length; d < v; ++d)
          (p = c[d]) && vn(p, n, e, d, c, h);
        i.push(c), a.push(l);
      }
  return new j(i, a, n, e);
}
var mu = Dt.prototype.constructor;
function $u() {
  return new mu(this._groups, this._parents);
}
function vu(t, n) {
  var e, o, r;
  return function() {
    var i = $t(this, t), a = (this.style.removeProperty(t), $t(this, t));
    return i === a ? null : i === e && a === o ? r : r = n(e = i, o = a);
  };
}
function sr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wu(t, n, e) {
  var o, r = e + "", i;
  return function() {
    var a = $t(this, t);
    return a === r ? null : a === o ? i : i = n(o = a, e);
  };
}
function xu(t, n, e) {
  var o, r, i;
  return function() {
    var a = $t(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), $t(this, t))), a === u ? null : a === o && u === r ? i : (r = u, i = n(o = a, s));
  };
}
function Mu(t, n) {
  var e, o, r, i = "style." + n, a = "end." + i, s;
  return function() {
    var u = V(this, t), b = u.on, l = u.value[i] == null ? s || (s = sr(n)) : void 0;
    (b !== e || r !== l) && (o = (e = b).copy()).on(a, r = l), u.on = o;
  };
}
function Au(t, n, e) {
  var o = (t += "") == "transform" ? Ss : ar;
  return n == null ? this.styleTween(t, vu(t, o)).on("end.style." + t, sr(t)) : typeof n == "function" ? this.styleTween(t, xu(t, o, Ae(this, "style." + t, n))).each(Mu(this._id, t)) : this.styleTween(t, wu(t, o, n), e).on("end.style." + t, null);
}
function Tu(t, n, e) {
  return function(o) {
    this.style.setProperty(t, n.call(this, o), e);
  };
}
function Su(t, n, e) {
  var o, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (o = (r = a) && Tu(t, a, e)), o;
  }
  return i._value = n, i;
}
function Eu(t, n, e) {
  var o = "style." + (t += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (n == null) return this.tween(o, null);
  if (typeof n != "function") throw new Error();
  return this.tween(o, Su(t, n, e ?? ""));
}
function Pu(t) {
  return function() {
    this.textContent = t;
  };
}
function Nu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function zu(t) {
  return this.tween("text", typeof t == "function" ? Nu(Ae(this, "text", t)) : Pu(t == null ? "" : t + ""));
}
function Ou(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Cu(t) {
  var n, e;
  function o() {
    var r = t.apply(this, arguments);
    return r !== e && (n = (e = r) && Ou(r)), n;
  }
  return o._value = t, o;
}
function Iu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Cu(t));
}
function ku() {
  for (var t = this._name, n = this._id, e = ur(), o = this._groups, r = o.length, i = 0; i < r; ++i)
    for (var a = o[i], s = a.length, u, b = 0; b < s; ++b)
      if (u = a[b]) {
        var l = H(u, n);
        vn(u, t, e, b, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new j(o, this._parents, t, e);
}
function Ru() {
  var t, n, e = this, o = e._id, r = e.size();
  return new Promise(function(i, a) {
    var s = { value: a }, u = { value: function() {
      --r === 0 && i();
    } };
    e.each(function() {
      var b = V(this, o), l = b.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), b.on = n;
    }), r === 0 && i();
  });
}
var Fu = 0;
function j(t, n, e, o) {
  this._groups = t, this._parents = n, this._name = e, this._id = o;
}
function ur() {
  return ++Fu;
}
var W = Dt.prototype;
j.prototype = {
  constructor: j,
  select: yu,
  selectAll: _u,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: lu,
  merge: fu,
  selection: $u,
  transition: ku,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: du,
  attr: Vs,
  attrTween: js,
  style: Au,
  styleTween: Eu,
  text: zu,
  textTween: Iu,
  remove: gu,
  tween: qs,
  delay: eu,
  duration: iu,
  ease: su,
  easeVarying: bu,
  end: Ru,
  [Symbol.iterator]: W[Symbol.iterator]
};
function Lu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Du = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lu
};
function Hu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function qu(t) {
  var n, e;
  t instanceof j ? (n = t._id, t = t._name) : (n = ur(), (e = Du).time = $n(), t = t == null ? null : t + "");
  for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
    for (var a = o[i], s = a.length, u, b = 0; b < s; ++b)
      (u = a[b]) && vn(u, t, n, b, a, e || Hu(u, n));
  return new j(o, this._parents, t, n);
}
Dt.prototype.interrupt = Ls;
Dt.prototype.transition = qu;
const ne = Math.PI, ee = 2 * ne, st = 1e-6, Bu = ee - st;
function br(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Xu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return br;
  const e = 10 ** n;
  return function(o) {
    this._ += o[0];
    for (let r = 1, i = o.length; r < i; ++r)
      this._ += Math.round(arguments[r] * e) / e + o[r];
  };
}
class lr {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? br : Xu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, o, r) {
    this._append`Q${+n},${+e},${this._x1 = +o},${this._y1 = +r}`;
  }
  bezierCurveTo(n, e, o, r, i, a) {
    this._append`C${+n},${+e},${+o},${+r},${this._x1 = +i},${this._y1 = +a}`;
  }
  arcTo(n, e, o, r, i) {
    if (n = +n, e = +e, o = +o, r = +r, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let a = this._x1, s = this._y1, u = o - n, b = r - e, l = a - n, f = s - e, c = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > st) if (!(Math.abs(f * u - b * l) > st) || !i)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = o - a, h = r - s, d = u * u + b * b, v = p * p + h * h, y = Math.sqrt(d), w = Math.sqrt(c), M = i * Math.tan((ne - Math.acos((d + c - v) / (2 * y * w))) / 2), g = M / w, m = M / y;
      Math.abs(g - 1) > st && this._append`L${n + g * l},${e + g * f}`, this._append`A${i},${i},0,0,${+(f * p > l * h)},${this._x1 = n + m * u},${this._y1 = e + m * b}`;
    }
  }
  arc(n, e, o, r, i, a) {
    if (n = +n, e = +e, o = +o, a = !!a, o < 0) throw new Error(`negative radius: ${o}`);
    let s = o * Math.cos(r), u = o * Math.sin(r), b = n + s, l = e + u, f = 1 ^ a, c = a ? r - i : i - r;
    this._x1 === null ? this._append`M${b},${l}` : (Math.abs(this._x1 - b) > st || Math.abs(this._y1 - l) > st) && this._append`L${b},${l}`, o && (c < 0 && (c = c % ee + ee), c > Bu ? this._append`A${o},${o},0,1,${f},${n - s},${e - u}A${o},${o},0,1,${f},${this._x1 = b},${this._y1 = l}` : c > st && this._append`A${o},${o},0,${+(c >= ne)},${f},${this._x1 = n + o * Math.cos(i)},${this._y1 = e + o * Math.sin(i)}`);
  }
  rect(n, e, o, r) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${o = +o}v${+r}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new lr();
}
q.prototype = lr.prototype;
function Gu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function hn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, o = t.slice(0, e);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +t.slice(e + 1)
  ];
}
function wt(t) {
  return t = hn(Math.abs(t)), t ? t[1] : NaN;
}
function Uu(t, n) {
  return function(e, o) {
    for (var r = e.length, i = [], a = 0, s = t[0], u = 0; r > 0 && s > 0 && (u + s + 1 > o && (s = Math.max(1, o - u)), i.push(e.substring(r -= s, r + s)), !((u += s + 1) > o)); )
      s = t[a = (a + 1) % t.length];
    return i.reverse().join(n);
  };
}
function Yu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Ku = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dn(t) {
  if (!(n = Ku.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Te({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
dn.prototype = Te.prototype;
function Te(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Te.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(t) {
  t: for (var n = t.length, e = 1, o = -1, r; e < n; ++e)
    switch (t[e]) {
      case ".":
        o = r = e;
        break;
      case "0":
        o === 0 && (o = e), r = e;
        break;
      default:
        if (!+t[e]) break t;
        o > 0 && (o = 0);
        break;
    }
  return o > 0 ? t.slice(0, o) + t.slice(r + 1) : t;
}
var fr;
function Zu(t, n) {
  var e = hn(t, n);
  if (!e) return t + "";
  var o = e[0], r = e[1], i = r - (fr = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, a = o.length;
  return i === a ? o : i > a ? o + new Array(i - a + 1).join("0") : i > 0 ? o.slice(0, i) + "." + o.slice(i) : "0." + new Array(1 - i).join("0") + hn(t, Math.max(0, n + i - 1))[0];
}
function no(t, n) {
  var e = hn(t, n);
  if (!e) return t + "";
  var o = e[0], r = e[1];
  return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
}
const eo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Gu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => no(t * 100, n),
  r: no,
  s: Zu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function oo(t) {
  return t;
}
var ro = Array.prototype.map, io = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Wu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? oo : Uu(ro.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", o = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", i = t.numerals === void 0 ? oo : Yu(ro.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function b(f) {
    f = dn(f);
    var c = f.fill, p = f.align, h = f.sign, d = f.symbol, v = f.zero, y = f.width, w = f.comma, M = f.precision, g = f.trim, m = f.type;
    m === "n" ? (w = !0, m = "g") : eo[m] || (M === void 0 && (M = 12), g = !0, m = "g"), (v || c === "0" && p === "=") && (v = !0, c = "0", p = "=");
    var T = d === "$" ? e : d === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = d === "$" ? o : /[%p]/.test(m) ? a : "", N = eo[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Z($) {
      var X = T, z = P, R, Xt, rt;
      if (m === "c")
        z = N($) + z, $ = "";
      else {
        $ = +$;
        var at = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? u : N(Math.abs($), M), g && ($ = Vu($)), at && +$ == 0 && h !== "+" && (at = !1), X = (at ? h === "(" ? h : s : h === "-" || h === "(" ? "" : h) + X, z = (m === "s" ? io[8 + fr / 3] : "") + z + (at && h === "(" ? ")" : ""), B) {
          for (R = -1, Xt = $.length; ++R < Xt; )
            if (rt = $.charCodeAt(R), 48 > rt || rt > 57) {
              z = (rt === 46 ? r + $.slice(R + 1) : $.slice(R)) + z, $ = $.slice(0, R);
              break;
            }
        }
      }
      w && !v && ($ = n($, 1 / 0));
      var gt = X.length + $.length + z.length, I = gt < y ? new Array(y - gt + 1).join(c) : "";
      switch (w && v && ($ = n(I + $, I.length ? y - z.length : 1 / 0), I = ""), p) {
        case "<":
          $ = X + $ + z + I;
          break;
        case "=":
          $ = X + I + $ + z;
          break;
        case "^":
          $ = I.slice(0, gt = I.length >> 1) + X + $ + z + I.slice(gt);
          break;
        default:
          $ = I + X + $ + z;
          break;
      }
      return i($);
    }
    return Z.toString = function() {
      return f + "";
    }, Z;
  }
  function l(f, c) {
    var p = b((f = dn(f), f.type = "f", f)), h = Math.max(-8, Math.min(8, Math.floor(wt(c) / 3))) * 3, d = Math.pow(10, -h), v = io[8 + h / 3];
    return function(y) {
      return p(d * y) + v;
    };
  }
  return {
    format: b,
    formatPrefix: l
  };
}
var Zt, wn, cr;
Ju({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ju(t) {
  return Zt = Wu(t), wn = Zt.format, cr = Zt.formatPrefix, Zt;
}
function Qu(t) {
  return Math.max(0, -wt(Math.abs(t)));
}
function ju(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(wt(n) / 3))) * 3 - wt(Math.abs(t)));
}
function tb(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, wt(n) - wt(t)) + 1;
}
function nb(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function eb(t) {
  return function() {
    return t;
  };
}
function ob(t) {
  return +t;
}
var ao = [0, 1];
function yt(t) {
  return t;
}
function oe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : eb(isNaN(n) ? NaN : 0.5);
}
function rb(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(o) {
    return Math.max(t, Math.min(n, o));
  };
}
function ib(t, n, e) {
  var o = t[0], r = t[1], i = n[0], a = n[1];
  return r < o ? (o = oe(r, o), i = e(a, i)) : (o = oe(o, r), i = e(i, a)), function(s) {
    return i(o(s));
  };
}
function ab(t, n, e) {
  var o = Math.min(t.length, n.length) - 1, r = new Array(o), i = new Array(o), a = -1;
  for (t[o] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < o; )
    r[a] = oe(t[a], t[a + 1]), i[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = ai(t, s, 1, o) - 1;
    return i[u](r[u](s));
  };
}
function sb(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ub() {
  var t = ao, n = ao, e = xe, o, r, i, a = yt, s, u, b;
  function l() {
    var c = Math.min(t.length, n.length);
    return a !== yt && (a = rb(t[0], t[c - 1])), s = c > 2 ? ab : ib, u = b = null, f;
  }
  function f(c) {
    return c == null || isNaN(c = +c) ? i : (u || (u = s(t.map(o), n, e)))(o(a(c)));
  }
  return f.invert = function(c) {
    return a(r((b || (b = s(n, t.map(o), F)))(c)));
  }, f.domain = function(c) {
    return arguments.length ? (t = Array.from(c, ob), l()) : t.slice();
  }, f.range = function(c) {
    return arguments.length ? (n = Array.from(c), l()) : n.slice();
  }, f.rangeRound = function(c) {
    return n = Array.from(c), e = Ms, l();
  }, f.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : yt, l()) : a !== yt;
  }, f.interpolate = function(c) {
    return arguments.length ? (e = c, l()) : e;
  }, f.unknown = function(c) {
    return arguments.length ? (i = c, f) : i;
  }, function(c, p) {
    return o = c, r = p, l();
  };
}
function bb() {
  return ub()(yt, yt);
}
function lb(t, n, e, o) {
  var r = fi(t, n, e), i;
  switch (o = dn(o ?? ",f"), o.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return o.precision == null && !isNaN(i = ju(r, a)) && (o.precision = i), cr(o, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(i = tb(r, Math.max(Math.abs(t), Math.abs(n)))) && (o.precision = i - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(i = Qu(r)) && (o.precision = i - (o.type === "%") * 2);
      break;
    }
  }
  return wn(o);
}
function fb(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var o = n();
    return li(o[0], o[o.length - 1], e ?? 10);
  }, t.tickFormat = function(e, o) {
    var r = n();
    return lb(r[0], r[r.length - 1], e ?? 10, o);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var o = n(), r = 0, i = o.length - 1, a = o[r], s = o[i], u, b, l = 10;
    for (s < a && (b = a, a = s, s = b, b = r, r = i, i = b); l-- > 0; ) {
      if (b = Un(a, s, e), b === u)
        return o[r] = a, o[i] = s, n(o);
      if (b > 0)
        a = Math.floor(a / b) * b, s = Math.ceil(s / b) * b;
      else if (b < 0)
        a = Math.ceil(a * b) / b, s = Math.floor(s * b) / b;
      else
        break;
      u = b;
    }
    return t;
  }, t;
}
function Y() {
  var t = bb();
  return t.copy = function() {
    return sb(t, Y());
  }, nb.apply(t, arguments), fb(t);
}
function Pt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Pt.prototype = {
  constructor: Pt,
  scale: function(t) {
    return t === 1 ? this : new Pt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Pt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Pt.prototype;
var hr = typeof global == "object" && global && global.Object === Object && global, cb = typeof self == "object" && self && self.Object === Object && self, nt = hr || cb || Function("return this")(), K = nt.Symbol, dr = Object.prototype, hb = dr.hasOwnProperty, db = dr.toString, Tt = K ? K.toStringTag : void 0;
function pb(t) {
  var n = hb.call(t, Tt), e = t[Tt];
  try {
    t[Tt] = void 0;
    var o = !0;
  } catch {
  }
  var r = db.call(t);
  return o && (n ? t[Tt] = e : delete t[Tt]), r;
}
var gb = Object.prototype, yb = gb.toString;
function _b(t) {
  return yb.call(t);
}
var mb = "[object Null]", $b = "[object Undefined]", so = K ? K.toStringTag : void 0;
function xt(t) {
  return t == null ? t === void 0 ? $b : mb : so && so in Object(t) ? pb(t) : _b(t);
}
function ct(t) {
  return t != null && typeof t == "object";
}
var vb = "[object Symbol]";
function xn(t) {
  return typeof t == "symbol" || ct(t) && xt(t) == vb;
}
function qt(t, n) {
  for (var e = -1, o = t == null ? 0 : t.length, r = Array(o); ++e < o; )
    r[e] = n(t[e], e, t);
  return r;
}
var k = Array.isArray, uo = K ? K.prototype : void 0, bo = uo ? uo.toString : void 0;
function pr(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return qt(t, pr) + "";
  if (xn(t))
    return bo ? bo.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var wb = /\s/;
function xb(t) {
  for (var n = t.length; n-- && wb.test(t.charAt(n)); )
    ;
  return n;
}
var Mb = /^\s+/;
function Ab(t) {
  return t && t.slice(0, xb(t) + 1).replace(Mb, "");
}
function tt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var lo = NaN, Tb = /^[-+]0x[0-9a-f]+$/i, Sb = /^0b[01]+$/i, Eb = /^0o[0-7]+$/i, Pb = parseInt;
function Nb(t) {
  if (typeof t == "number")
    return t;
  if (xn(t))
    return lo;
  if (tt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ab(t);
  var e = Sb.test(t);
  return e || Eb.test(t) ? Pb(t.slice(2), e ? 2 : 8) : Tb.test(t) ? lo : +t;
}
var zb = 1 / 0, Ob = 17976931348623157e292;
function Dn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Nb(t), t === zb || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Ob;
  }
  return t === t ? t : 0;
}
function Mn(t) {
  return t;
}
var Cb = "[object AsyncFunction]", Ib = "[object Function]", kb = "[object GeneratorFunction]", Rb = "[object Proxy]";
function gr(t) {
  if (!tt(t))
    return !1;
  var n = xt(t);
  return n == Ib || n == kb || n == Cb || n == Rb;
}
var Hn = nt["__core-js_shared__"], fo = function() {
  var t = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Fb(t) {
  return !!fo && fo in t;
}
var Lb = Function.prototype, Db = Lb.toString;
function dt(t) {
  if (t != null) {
    try {
      return Db.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Hb = /[\\^$.*+?()[\]{}|]/g, qb = /^\[object .+?Constructor\]$/, Bb = Function.prototype, Xb = Object.prototype, Gb = Bb.toString, Ub = Xb.hasOwnProperty, Yb = RegExp(
  "^" + Gb.call(Ub).replace(Hb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kb(t) {
  if (!tt(t) || Fb(t))
    return !1;
  var n = gr(t) ? Yb : qb;
  return n.test(dt(t));
}
function Vb(t, n) {
  return t == null ? void 0 : t[n];
}
function pt(t, n) {
  var e = Vb(t, n);
  return Kb(e) ? e : void 0;
}
var re = pt(nt, "WeakMap");
function Zb(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Wb = 800, Jb = 16, Qb = Date.now;
function jb(t) {
  var n = 0, e = 0;
  return function() {
    var o = Qb(), r = Jb - (o - e);
    if (e = o, r > 0) {
      if (++n >= Wb)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function tl(t) {
  return function() {
    return t;
  };
}
var pn = function() {
  try {
    var t = pt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), nl = pn ? function(t, n) {
  return pn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tl(n),
    writable: !0
  });
} : Mn, el = jb(nl);
function ol(t, n) {
  for (var e = -1, o = t == null ? 0 : t.length; ++e < o && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var rl = 9007199254740991, il = /^(?:0|[1-9]\d*)$/;
function An(t, n) {
  var e = typeof t;
  return n = n ?? rl, !!n && (e == "number" || e != "symbol" && il.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function al(t, n, e) {
  n == "__proto__" && pn ? pn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Tn(t, n) {
  return t === n || t !== t && n !== n;
}
var sl = Object.prototype, ul = sl.hasOwnProperty;
function bl(t, n, e) {
  var o = t[n];
  (!(ul.call(t, n) && Tn(o, e)) || e === void 0 && !(n in t)) && al(t, n, e);
}
var co = Math.max;
function ll(t, n, e) {
  return n = co(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var o = arguments, r = -1, i = co(o.length - n, 0), a = Array(i); ++r < i; )
      a[r] = o[n + r];
    r = -1;
    for (var s = Array(n + 1); ++r < n; )
      s[r] = o[r];
    return s[n] = e(a), Zb(t, this, s);
  };
}
function fl(t, n) {
  return el(ll(t, n, Mn), t + "");
}
var cl = 9007199254740991;
function Se(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= cl;
}
function Mt(t) {
  return t != null && Se(t.length) && !gr(t);
}
function hl(t, n, e) {
  if (!tt(e))
    return !1;
  var o = typeof n;
  return (o == "number" ? Mt(e) && An(n, e.length) : o == "string" && n in e) ? Tn(e[n], t) : !1;
}
var dl = Object.prototype;
function yr(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || dl;
  return t === e;
}
function _r(t, n) {
  for (var e = -1, o = Array(t); ++e < t; )
    o[e] = n(e);
  return o;
}
var pl = "[object Arguments]";
function ho(t) {
  return ct(t) && xt(t) == pl;
}
var mr = Object.prototype, gl = mr.hasOwnProperty, yl = mr.propertyIsEnumerable, Ee = ho(/* @__PURE__ */ function() {
  return arguments;
}()) ? ho : function(t) {
  return ct(t) && gl.call(t, "callee") && !yl.call(t, "callee");
};
function _l() {
  return !1;
}
var $r = typeof exports == "object" && exports && !exports.nodeType && exports, po = $r && typeof module == "object" && module && !module.nodeType && module, ml = po && po.exports === $r, go = ml ? nt.Buffer : void 0, $l = go ? go.isBuffer : void 0, ie = $l || _l, vl = "[object Arguments]", wl = "[object Array]", xl = "[object Boolean]", Ml = "[object Date]", Al = "[object Error]", Tl = "[object Function]", Sl = "[object Map]", El = "[object Number]", Pl = "[object Object]", Nl = "[object RegExp]", zl = "[object Set]", Ol = "[object String]", Cl = "[object WeakMap]", Il = "[object ArrayBuffer]", kl = "[object DataView]", Rl = "[object Float32Array]", Fl = "[object Float64Array]", Ll = "[object Int8Array]", Dl = "[object Int16Array]", Hl = "[object Int32Array]", ql = "[object Uint8Array]", Bl = "[object Uint8ClampedArray]", Xl = "[object Uint16Array]", Gl = "[object Uint32Array]", x = {};
x[Rl] = x[Fl] = x[Ll] = x[Dl] = x[Hl] = x[ql] = x[Bl] = x[Xl] = x[Gl] = !0;
x[vl] = x[wl] = x[Il] = x[xl] = x[kl] = x[Ml] = x[Al] = x[Tl] = x[Sl] = x[El] = x[Pl] = x[Nl] = x[zl] = x[Ol] = x[Cl] = !1;
function Ul(t) {
  return ct(t) && Se(t.length) && !!x[xt(t)];
}
function Yl(t) {
  return function(n) {
    return t(n);
  };
}
var vr = typeof exports == "object" && exports && !exports.nodeType && exports, Nt = vr && typeof module == "object" && module && !module.nodeType && module, Kl = Nt && Nt.exports === vr, qn = Kl && hr.process, yo = function() {
  try {
    var t = Nt && Nt.require && Nt.require("util").types;
    return t || qn && qn.binding && qn.binding("util");
  } catch {
  }
}(), _o = yo && yo.isTypedArray, wr = _o ? Yl(_o) : Ul, Vl = Object.prototype, Zl = Vl.hasOwnProperty;
function xr(t, n) {
  var e = k(t), o = !e && Ee(t), r = !e && !o && ie(t), i = !e && !o && !r && wr(t), a = e || o || r || i, s = a ? _r(t.length, String) : [], u = s.length;
  for (var b in t)
    (n || Zl.call(t, b)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
    An(b, u))) && s.push(b);
  return s;
}
function Mr(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Wl = Mr(Object.keys, Object), Jl = Object.prototype, Ql = Jl.hasOwnProperty;
function jl(t) {
  if (!yr(t))
    return Wl(t);
  var n = [];
  for (var e in Object(t))
    Ql.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Sn(t) {
  return Mt(t) ? xr(t) : jl(t);
}
function tf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var nf = Object.prototype, ef = nf.hasOwnProperty;
function of(t) {
  if (!tt(t))
    return tf(t);
  var n = yr(t), e = [];
  for (var o in t)
    o == "constructor" && (n || !ef.call(t, o)) || e.push(o);
  return e;
}
function rf(t) {
  return Mt(t) ? xr(t, !0) : of(t);
}
var af = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sf = /^\w*$/;
function Pe(t, n) {
  if (k(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || xn(t) ? !0 : sf.test(t) || !af.test(t) || n != null && t in Object(n);
}
var Rt = pt(Object, "create");
function uf() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function bf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var lf = "__lodash_hash_undefined__", ff = Object.prototype, cf = ff.hasOwnProperty;
function hf(t) {
  var n = this.__data__;
  if (Rt) {
    var e = n[t];
    return e === lf ? void 0 : e;
  }
  return cf.call(n, t) ? n[t] : void 0;
}
var df = Object.prototype, pf = df.hasOwnProperty;
function gf(t) {
  var n = this.__data__;
  return Rt ? n[t] !== void 0 : pf.call(n, t);
}
var yf = "__lodash_hash_undefined__";
function _f(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rt && n === void 0 ? yf : n, this;
}
function ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var o = t[n];
    this.set(o[0], o[1]);
  }
}
ht.prototype.clear = uf;
ht.prototype.delete = bf;
ht.prototype.get = hf;
ht.prototype.has = gf;
ht.prototype.set = _f;
function mf() {
  this.__data__ = [], this.size = 0;
}
function En(t, n) {
  for (var e = t.length; e--; )
    if (Tn(t[e][0], n))
      return e;
  return -1;
}
var $f = Array.prototype, vf = $f.splice;
function wf(t) {
  var n = this.__data__, e = En(n, t);
  if (e < 0)
    return !1;
  var o = n.length - 1;
  return e == o ? n.pop() : vf.call(n, e, 1), --this.size, !0;
}
function xf(t) {
  var n = this.__data__, e = En(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Mf(t) {
  return En(this.__data__, t) > -1;
}
function Af(t, n) {
  var e = this.__data__, o = En(e, t);
  return o < 0 ? (++this.size, e.push([t, n])) : e[o][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var o = t[n];
    this.set(o[0], o[1]);
  }
}
et.prototype.clear = mf;
et.prototype.delete = wf;
et.prototype.get = xf;
et.prototype.has = Mf;
et.prototype.set = Af;
var Ft = pt(nt, "Map");
function Tf() {
  this.size = 0, this.__data__ = {
    hash: new ht(),
    map: new (Ft || et)(),
    string: new ht()
  };
}
function Sf(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Pn(t, n) {
  var e = t.__data__;
  return Sf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Ef(t) {
  var n = Pn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Pf(t) {
  return Pn(this, t).get(t);
}
function Nf(t) {
  return Pn(this, t).has(t);
}
function zf(t, n) {
  var e = Pn(this, t), o = e.size;
  return e.set(t, n), this.size += e.size == o ? 0 : 1, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var o = t[n];
    this.set(o[0], o[1]);
  }
}
ot.prototype.clear = Tf;
ot.prototype.delete = Ef;
ot.prototype.get = Pf;
ot.prototype.has = Nf;
ot.prototype.set = zf;
var Of = "Expected a function";
function Ne(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Of);
  var e = function() {
    var o = arguments, r = n ? n.apply(this, o) : o[0], i = e.cache;
    if (i.has(r))
      return i.get(r);
    var a = t.apply(this, o);
    return e.cache = i.set(r, a) || i, a;
  };
  return e.cache = new (Ne.Cache || ot)(), e;
}
Ne.Cache = ot;
var Cf = 500;
function If(t) {
  var n = Ne(t, function(o) {
    return e.size === Cf && e.clear(), o;
  }), e = n.cache;
  return n;
}
var kf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rf = /\\(\\)?/g, Ff = If(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(kf, function(e, o, r, i) {
    n.push(r ? i.replace(Rf, "$1") : o || e);
  }), n;
});
function Nn(t) {
  return t == null ? "" : pr(t);
}
function zn(t, n) {
  return k(t) ? t : Pe(t, n) ? [t] : Ff(Nn(t));
}
function Bt(t) {
  if (typeof t == "string" || xn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function ze(t, n) {
  n = zn(n, t);
  for (var e = 0, o = n.length; t != null && e < o; )
    t = t[Bt(n[e++])];
  return e && e == o ? t : void 0;
}
function Lf(t, n, e) {
  var o = t == null ? void 0 : ze(t, n);
  return o === void 0 ? e : o;
}
function Oe(t, n) {
  for (var e = -1, o = n.length, r = t.length; ++e < o; )
    t[r + e] = n[e];
  return t;
}
var mo = K ? K.isConcatSpreadable : void 0;
function Df(t) {
  return k(t) || Ee(t) || !!(mo && t && t[mo]);
}
function Hf(t, n, e, o, r) {
  var i = -1, a = t.length;
  for (e || (e = Df), r || (r = []); ++i < a; ) {
    var s = t[i];
    e(s) ? Oe(r, s) : r[r.length] = s;
  }
  return r;
}
function qf(t) {
  var n = t == null ? 0 : t.length;
  return n ? Hf(t) : [];
}
var Bf = Mr(Object.getPrototypeOf, Object);
function Xf(t, n, e) {
  var o = -1, r = t.length;
  n < 0 && (n = -n > r ? 0 : r + n), e = e > r ? r : e, e < 0 && (e += r), r = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var i = Array(r); ++o < r; )
    i[o] = t[o + n];
  return i;
}
function Gf(t, n, e) {
  var o = t.length;
  return e = e === void 0 ? o : e, Xf(t, n, e);
}
var Uf = "\\ud800-\\udfff", Yf = "\\u0300-\\u036f", Kf = "\\ufe20-\\ufe2f", Vf = "\\u20d0-\\u20ff", Zf = Yf + Kf + Vf, Wf = "\\ufe0e\\ufe0f", Jf = "\\u200d", Qf = RegExp("[" + Jf + Uf + Zf + Wf + "]");
function Ar(t) {
  return Qf.test(t);
}
function jf(t) {
  return t.split("");
}
var Tr = "\\ud800-\\udfff", tc = "\\u0300-\\u036f", nc = "\\ufe20-\\ufe2f", ec = "\\u20d0-\\u20ff", oc = tc + nc + ec, rc = "\\ufe0e\\ufe0f", ic = "[" + Tr + "]", ae = "[" + oc + "]", se = "\\ud83c[\\udffb-\\udfff]", ac = "(?:" + ae + "|" + se + ")", Sr = "[^" + Tr + "]", Er = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pr = "[\\ud800-\\udbff][\\udc00-\\udfff]", sc = "\\u200d", Nr = ac + "?", zr = "[" + rc + "]?", uc = "(?:" + sc + "(?:" + [Sr, Er, Pr].join("|") + ")" + zr + Nr + ")*", bc = zr + Nr + uc, lc = "(?:" + [Sr + ae + "?", ae, Er, Pr, ic].join("|") + ")", fc = RegExp(se + "(?=" + se + ")|" + lc + bc, "g");
function cc(t) {
  return t.match(fc) || [];
}
function hc(t) {
  return Ar(t) ? cc(t) : jf(t);
}
function dc(t) {
  return function(n) {
    n = Nn(n);
    var e = Ar(n) ? hc(n) : void 0, o = e ? e[0] : n.charAt(0), r = e ? Gf(e, 1).join("") : n.slice(1);
    return o[t]() + r;
  };
}
var pc = dc("toUpperCase");
function gc(t) {
  return pc(Nn(t).toLowerCase());
}
function yc() {
  this.__data__ = new et(), this.size = 0;
}
function _c(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function mc(t) {
  return this.__data__.get(t);
}
function $c(t) {
  return this.__data__.has(t);
}
var vc = 200;
function wc(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var o = e.__data__;
    if (!Ft || o.length < vc - 1)
      return o.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ot(o);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Q(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
Q.prototype.clear = yc;
Q.prototype.delete = _c;
Q.prototype.get = mc;
Q.prototype.has = $c;
Q.prototype.set = wc;
function Or(t, n) {
  for (var e = -1, o = t == null ? 0 : t.length, r = 0, i = []; ++e < o; ) {
    var a = t[e];
    n(a, e, t) && (i[r++] = a);
  }
  return i;
}
function Cr() {
  return [];
}
var xc = Object.prototype, Mc = xc.propertyIsEnumerable, $o = Object.getOwnPropertySymbols, Ir = $o ? function(t) {
  return t == null ? [] : (t = Object(t), Or($o(t), function(n) {
    return Mc.call(t, n);
  }));
} : Cr, Ac = Object.getOwnPropertySymbols, Tc = Ac ? function(t) {
  for (var n = []; t; )
    Oe(n, Ir(t)), t = Bf(t);
  return n;
} : Cr;
function kr(t, n, e) {
  var o = n(t);
  return k(t) ? o : Oe(o, e(t));
}
function vo(t) {
  return kr(t, Sn, Ir);
}
function Sc(t) {
  return kr(t, rf, Tc);
}
var ue = pt(nt, "DataView"), be = pt(nt, "Promise"), le = pt(nt, "Set"), wo = "[object Map]", Ec = "[object Object]", xo = "[object Promise]", Mo = "[object Set]", Ao = "[object WeakMap]", To = "[object DataView]", Pc = dt(ue), Nc = dt(Ft), zc = dt(be), Oc = dt(le), Cc = dt(re), J = xt;
(ue && J(new ue(new ArrayBuffer(1))) != To || Ft && J(new Ft()) != wo || be && J(be.resolve()) != xo || le && J(new le()) != Mo || re && J(new re()) != Ao) && (J = function(t) {
  var n = xt(t), e = n == Ec ? t.constructor : void 0, o = e ? dt(e) : "";
  if (o)
    switch (o) {
      case Pc:
        return To;
      case Nc:
        return wo;
      case zc:
        return xo;
      case Oc:
        return Mo;
      case Cc:
        return Ao;
    }
  return n;
});
var So = nt.Uint8Array, Ic = "__lodash_hash_undefined__";
function kc(t) {
  return this.__data__.set(t, Ic), this;
}
function Rc(t) {
  return this.__data__.has(t);
}
function gn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++n < e; )
    this.add(t[n]);
}
gn.prototype.add = gn.prototype.push = kc;
gn.prototype.has = Rc;
function Fc(t, n) {
  for (var e = -1, o = t == null ? 0 : t.length; ++e < o; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Lc(t, n) {
  return t.has(n);
}
var Dc = 1, Hc = 2;
function Rr(t, n, e, o, r, i) {
  var a = e & Dc, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var b = i.get(t), l = i.get(n);
  if (b && l)
    return b == n && l == t;
  var f = -1, c = !0, p = e & Hc ? new gn() : void 0;
  for (i.set(t, n), i.set(n, t); ++f < s; ) {
    var h = t[f], d = n[f];
    if (o)
      var v = a ? o(d, h, f, n, t, i) : o(h, d, f, t, n, i);
    if (v !== void 0) {
      if (v)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!Fc(n, function(y, w) {
        if (!Lc(p, w) && (h === y || r(h, y, e, o, i)))
          return p.push(w);
      })) {
        c = !1;
        break;
      }
    } else if (!(h === d || r(h, d, e, o, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(t), i.delete(n), c;
}
function Fr(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(o, r) {
    e[++n] = [r, o];
  }), e;
}
function qc(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(o) {
    e[++n] = o;
  }), e;
}
var Bc = 1, Xc = 2, Gc = "[object Boolean]", Uc = "[object Date]", Yc = "[object Error]", Kc = "[object Map]", Vc = "[object Number]", Zc = "[object RegExp]", Wc = "[object Set]", Jc = "[object String]", Qc = "[object Symbol]", jc = "[object ArrayBuffer]", th = "[object DataView]", Eo = K ? K.prototype : void 0, Bn = Eo ? Eo.valueOf : void 0;
function nh(t, n, e, o, r, i, a) {
  switch (e) {
    case th:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case jc:
      return !(t.byteLength != n.byteLength || !i(new So(t), new So(n)));
    case Gc:
    case Uc:
    case Vc:
      return Tn(+t, +n);
    case Yc:
      return t.name == n.name && t.message == n.message;
    case Zc:
    case Jc:
      return t == n + "";
    case Kc:
      var s = Fr;
    case Wc:
      var u = o & Bc;
      if (s || (s = qc), t.size != n.size && !u)
        return !1;
      var b = a.get(t);
      if (b)
        return b == n;
      o |= Xc, a.set(t, n);
      var l = Rr(s(t), s(n), o, r, i, a);
      return a.delete(t), l;
    case Qc:
      if (Bn)
        return Bn.call(t) == Bn.call(n);
  }
  return !1;
}
var eh = 1, oh = Object.prototype, rh = oh.hasOwnProperty;
function ih(t, n, e, o, r, i) {
  var a = e & eh, s = vo(t), u = s.length, b = vo(n), l = b.length;
  if (u != l && !a)
    return !1;
  for (var f = u; f--; ) {
    var c = s[f];
    if (!(a ? c in n : rh.call(n, c)))
      return !1;
  }
  var p = i.get(t), h = i.get(n);
  if (p && h)
    return p == n && h == t;
  var d = !0;
  i.set(t, n), i.set(n, t);
  for (var v = a; ++f < u; ) {
    c = s[f];
    var y = t[c], w = n[c];
    if (o)
      var M = a ? o(w, y, c, n, t, i) : o(y, w, c, t, n, i);
    if (!(M === void 0 ? y === w || r(y, w, e, o, i) : M)) {
      d = !1;
      break;
    }
    v || (v = c == "constructor");
  }
  if (d && !v) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (d = !1);
  }
  return i.delete(t), i.delete(n), d;
}
var ah = 1, Po = "[object Arguments]", No = "[object Array]", Wt = "[object Object]", sh = Object.prototype, zo = sh.hasOwnProperty;
function uh(t, n, e, o, r, i) {
  var a = k(t), s = k(n), u = a ? No : J(t), b = s ? No : J(n);
  u = u == Po ? Wt : u, b = b == Po ? Wt : b;
  var l = u == Wt, f = b == Wt, c = u == b;
  if (c && ie(t)) {
    if (!ie(n))
      return !1;
    a = !0, l = !1;
  }
  if (c && !l)
    return i || (i = new Q()), a || wr(t) ? Rr(t, n, e, o, r, i) : nh(t, n, u, e, o, r, i);
  if (!(e & ah)) {
    var p = l && zo.call(t, "__wrapped__"), h = f && zo.call(n, "__wrapped__");
    if (p || h) {
      var d = p ? t.value() : t, v = h ? n.value() : n;
      return i || (i = new Q()), r(d, v, e, o, i);
    }
  }
  return c ? (i || (i = new Q()), ih(t, n, e, o, r, i)) : !1;
}
function Ce(t, n, e, o, r) {
  return t === n ? !0 : t == null || n == null || !ct(t) && !ct(n) ? t !== t && n !== n : uh(t, n, e, o, Ce, r);
}
var bh = 1, lh = 2;
function fh(t, n, e, o) {
  var r = e.length, i = r;
  if (t == null)
    return !i;
  for (t = Object(t); r--; ) {
    var a = e[r];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++r < i; ) {
    a = e[r];
    var s = a[0], u = t[s], b = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var l = new Q(), f;
      if (!(f === void 0 ? Ce(b, u, bh | lh, o, l) : f))
        return !1;
    }
  }
  return !0;
}
function Lr(t) {
  return t === t && !tt(t);
}
function ch(t) {
  for (var n = Sn(t), e = n.length; e--; ) {
    var o = n[e], r = t[o];
    n[e] = [o, r, Lr(r)];
  }
  return n;
}
function Dr(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function hh(t) {
  var n = ch(t);
  return n.length == 1 && n[0][2] ? Dr(n[0][0], n[0][1]) : function(e) {
    return e === t || fh(e, t, n);
  };
}
function dh(t, n) {
  return t != null && n in Object(t);
}
function Hr(t, n, e) {
  n = zn(n, t);
  for (var o = -1, r = n.length, i = !1; ++o < r; ) {
    var a = Bt(n[o]);
    if (!(i = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return i || ++o != r ? i : (r = t == null ? 0 : t.length, !!r && Se(r) && An(a, r) && (k(t) || Ee(t)));
}
function ph(t, n) {
  return t != null && Hr(t, n, dh);
}
var gh = 1, yh = 2;
function _h(t, n) {
  return Pe(t) && Lr(n) ? Dr(Bt(t), n) : function(e) {
    var o = Lf(e, t);
    return o === void 0 && o === n ? ph(e, t) : Ce(n, o, gh | yh);
  };
}
function qr(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function mh(t) {
  return function(n) {
    return ze(n, t);
  };
}
function $h(t) {
  return Pe(t) ? qr(Bt(t)) : mh(t);
}
function Ie(t) {
  return typeof t == "function" ? t : t == null ? Mn : typeof t == "object" ? k(t) ? _h(t[0], t[1]) : hh(t) : $h(t);
}
function vh(t) {
  return function(n, e, o) {
    for (var r = -1, i = Object(n), a = o(n), s = a.length; s--; ) {
      var u = a[++r];
      if (e(i[u], u, i) === !1)
        break;
    }
    return n;
  };
}
var wh = vh();
function xh(t, n) {
  return t && wh(t, n, Sn);
}
function Mh(t, n) {
  return function(e, o) {
    if (e == null)
      return e;
    if (!Mt(e))
      return t(e, o);
    for (var r = e.length, i = -1, a = Object(e); ++i < r && o(a[i], i, a) !== !1; )
      ;
    return e;
  };
}
var Br = Mh(xh);
function Ah(t) {
  return ct(t) && Mt(t);
}
function Th(t) {
  return typeof t == "function" ? t : Mn;
}
function fe(t, n) {
  var e = k(t) ? ol : Br;
  return e(t, Th(n));
}
function Sh(t, n) {
  return qt(n, function(e) {
    return [e, t[e]];
  });
}
function Eh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(o) {
    e[++n] = [o, o];
  }), e;
}
var Ph = "[object Map]", Nh = "[object Set]";
function zh(t) {
  return function(n) {
    var e = J(n);
    return e == Ph ? Fr(n) : e == Nh ? Eh(n) : Sh(n, t(n));
  };
}
var Oh = zh(Sn);
function Ch(t, n) {
  var e = -1, o = Mt(t) ? Array(t.length) : [];
  return Br(t, function(r, i, a) {
    o[++e] = n(r, i, a);
  }), o;
}
function Lt(t, n) {
  var e = k(t) ? qt : Ch;
  return e(t, Ie(n));
}
var Ih = Object.prototype, kh = Ih.hasOwnProperty;
function Rh(t, n) {
  return t != null && kh.call(t, n);
}
function Xr(t, n) {
  return t != null && Hr(t, n, Rh);
}
function Fh(t, n) {
  for (var e, o = -1, r = t.length; ++o < r; ) {
    var i = n(t[o]);
    i !== void 0 && (e = e === void 0 ? i : e + i);
  }
  return e;
}
function Lh(t, n, e, o) {
  if (!tt(t))
    return t;
  n = zn(n, t);
  for (var r = -1, i = n.length, a = i - 1, s = t; s != null && ++r < i; ) {
    var u = Bt(n[r]), b = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (r != a) {
      var l = s[u];
      b = void 0, b === void 0 && (b = tt(l) ? l : An(n[r + 1]) ? [] : {});
    }
    bl(s, u, b), s = s[u];
  }
  return t;
}
function Dh(t, n, e) {
  for (var o = -1, r = n.length, i = {}; ++o < r; ) {
    var a = n[o], s = ze(t, a);
    e(s, a) && Lh(i, zn(a, t), s);
  }
  return i;
}
function Gr(t, n) {
  if (t == null)
    return {};
  var e = qt(Sc(t), function(o) {
    return [o];
  });
  return n = Ie(n), Dh(t, e, function(o, r) {
    return n(o, r[0]);
  });
}
var Hh = Math.ceil, qh = Math.max;
function Bh(t, n, e, o) {
  for (var r = -1, i = qh(Hh((n - t) / (e || 1)), 0), a = Array(i); i--; )
    a[++r] = t, t += e;
  return a;
}
function Xh(t) {
  return function(n, e, o) {
    return o && typeof o != "number" && hl(n, e, o) && (e = o = void 0), n = Dn(n), e === void 0 ? (e = n, n = 0) : e = Dn(e), o = o === void 0 ? n < e ? 1 : -1 : Dn(o), Bh(n, e, o);
  };
}
var Ur = Xh();
function Gh() {
  var t = arguments, n = Nn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Uh(t, n) {
  return t && t.length ? Fh(t, Ie(n)) : 0;
}
var Yh = Math.max;
function Kh(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Or(t, function(e) {
    if (Ah(e))
      return n = Yh(e.length, n), !0;
  }), _r(n, function(e) {
    return qt(t, qr(e));
  });
}
var yn = fl(Kh);
const Vh = (t, n, e = 12, o = 12) => {
  const r = Y().domain([0, e]).range([0, t]), i = Y().domain([0, o]).range([0, n]);
  return {
    points: function() {
      return Ur((e + 1) * (o + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: r(u % (e + 1)), y: i(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, b) {
      typeof u == "number" && (u = [u]), typeof b == "number" && (b = [b]);
      const l = qf(Lt(b, function(f) {
        return Lt(
          u,
          function(c) {
            return { x: r(c), y: i(f) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Zh = "_widget_18g36_1", Wh = "_label_18g36_19", Jh = "_lit_18g36_24", Qh = "_button_18g36_29", jh = "_symbol_18g36_29", t2 = "_radio_18g36_29", n2 = "_radiobutton_18g36_29", e2 = "_selected_18g36_35", o2 = "_toggle_18g36_35", r2 = "_slider_18g36_44", i2 = "_track_18g36_44", a2 = "_track_overlay_18g36_48", s2 = "_handle_18g36_55", _ = {
  widget: Zh,
  label: Wh,
  lit: Jh,
  button: Qh,
  symbol: jh,
  radio: t2,
  radiobutton: n2,
  selected: e2,
  toggle: o2,
  slider: r2,
  track: i2,
  track_overlay: a2,
  handle: s2
}, ke = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let o = "";
  for (let r = 0; r < 10; ++r)
    o += n[Math.floor(Math.random() * e)];
  return o;
}, Re = (t, n, e) => {
  var o, r, i, a;
  switch (e) {
    case "top":
      o = 0, r = -n / 2 - 5, i = "middle", a = "bottom";
      break;
    case "bottom":
      o = 0, r = n / 2 + 5, i = "middle", a = "hanging";
      break;
    case "left":
      o = -t / 2 - 5, r = 0, i = "end", a = "middle";
      break;
    case "right":
      o = t / 2 + 5, r = 0, i = "start", a = "middle";
      break;
    default:
      o = 0, r = n / 2 + 5, i = "middle", a = "hanging";
  }
  return { x: o, y: r, anchor: i, valign: a };
}, u2 = (t = 1) => {
  const n = q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, b2 = (t = 1) => {
  const n = q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, l2 = (t = 1) => {
  const n = q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, f2 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var o = q();
  return o.moveTo(t * e, t * e), o.lineTo(t * e, t * -0.9), o.lineTo(t * (e * n), t * -0.9), o.lineTo(t * (e * n), t * e), o.closePath(), o.moveTo(-t * e, t * e), o.lineTo(-t * e, t * -0.9), o.lineTo(-t * (e * n), t * -0.9), o.lineTo(-t * (e * n), t * e), o.closePath(), o.toString();
}, c2 = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, o = e / 2, r = 2 * Math.PI - e / 2, i = 0.5, a = 0.6, s = 0.6, u = [t * (1 - i / 2) * Math.cos(r), t * (1 - i / 2) * Math.sin(r)], b = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, o, !0), n.lineTo(t * (1 - i) * Math.cos(o), t * (1 - i) * Math.sin(o)), n.arc(0, 0, t * (1 - i), o, r, !1), n.lineTo(t * (1 - a - i / 2) * Math.cos(r), t * (1 - a - i / 2) * Math.sin(r)), n.lineTo(u[0] + b[0], u[1] + b[1]), n.lineTo(t * (1 + a - i / 2) * Math.cos(r), t * (1 + a - i / 2) * Math.sin(r)), n.closePath(), n.toString();
}, h2 = (t = 1) => {
  const n = q(), e = Math.PI / 10, o = t / 2, r = Math.PI - e, i = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, o, s, a), n.lineTo(t, o * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, o * Math.sin(s)), n.closePath(), n.arc(0, 0, o, i, r), n.lineTo(-t, o * Math.sin(r)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, o * Math.sin(r)), n.closePath(), n.toString();
}, d2 = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, o = e / 2 + Math.PI, r = 2 * Math.PI - e / 2 + Math.PI, i = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(o), t * Math.sin(o)), n.arc(0, 0, t, o, r, !1), n.lineTo(t * (1 - i) * Math.cos(r), t * (1 - i) * Math.sin(r)), n.arc(0, 0, t * (1 - i), r, o, !0), n.lineTo(t * (1 - a - i / 2) * Math.cos(o), t * (1 - a - i / 2) * Math.sin(o));
  var u = [t * (1 - i / 2) * Math.cos(o), t * (1 - i / 2) * Math.sin(o)], b = [t * s * Math.cos(o + Math.PI / 2), t * s * Math.sin(o + Math.PI / 2)];
  return n.lineTo(u[0] + b[0], u[1] + b[1]), n.lineTo(t * (1 + a - i / 2) * Math.cos(o), t * (1 + a - i / 2) * Math.sin(o)), n.closePath(), n.toString();
}, p2 = (t = 1) => {
  var n = q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, g2 = (t = 1) => {
  const n = q(), e = 0, o = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, o, !0), n.closePath(), n.toString();
}, ce = (t) => {
  switch (t) {
    case "play":
      return u2;
    case "forward":
      return b2;
    case "back":
      return l2;
    case "pause":
      return f2;
    case "reload":
      return c2;
    case "capture":
      return h2;
    case "rewind":
      return d2;
    case "stop":
      return p2;
    case "push":
      return g2;
  }
}, Fe = () => {
  const t = "button";
  var n = ke(), e = 50, o = 0.3, r = "round", i = { x: 0, y: 0 }, a = null, s = "bottom", u = null, b = function(h) {
  }, l = ["play"], f = 0;
  return {
    type: t,
    id: function(h) {
      return typeof h > "u" ? n : (n = h, this);
    },
    size: function(h) {
      return typeof h > "u" ? e : (e = h, this);
    },
    symbolsize: function(h) {
      return typeof h > "u" ? o : (o = h, this);
    },
    shape: function(h) {
      return typeof h > "u" ? r : (r = h, this);
    },
    position: function(h) {
      return typeof h > "u" ? i : (i = h, this);
    },
    x: function(h) {
      return typeof h > "u" ? i.x : (i.x = h, this);
    },
    y: function(h) {
      return typeof h > "u" ? i.y : (i.y = h, this);
    },
    label: function(h) {
      return typeof h > "u" ? a : (a = h, this);
    },
    labelposition: function(h) {
      return typeof h > "u" ? s : (s = h, this);
    },
    fontsize: function(h) {
      return typeof h > "u" ? u : (u = h, this);
    },
    update: function(h) {
      if (typeof h == "function")
        return b = h, this;
      b(h);
    },
    actions: function(h) {
      return typeof h > "u" ? l : (l = h, this);
    },
    value: function(h) {
      return typeof h > "u" ? f : (f = h, this);
    },
    click: function() {
      f = (f + 1) % l.length, b(), E(this.parentNode).select("." + _.symbol).attr("d", ce(l[f])(o * e));
    },
    press: function(h) {
      f = (f + 1) % l.length, b(), h.select("#button_" + n).select("." + _.symbol).attr("d", ce(l[f])(o * e));
    }
  };
}, y2 = () => {
  const t = "slider", n = wn(".3f");
  var e = ke(), o = 100, r = 8, i = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", b = null, l = function(y) {
  }, f = function(y) {
  }, c = [0, 1], p = 0, h = null, d = Y().domain(c).range([0, o]).clamp(!0);
  const v = function(y, w, M = c) {
    const g = y.select("#slider_" + e);
    d.domain(M), p = w, g.selectAll("." + _.handle).transition().attr("cx", d(w)), a && g.select("." + _.label).text(h + " = " + n(p)), l(), f();
  };
  return {
    type: t,
    scale: d,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? h : (h = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? b : (b = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return l = y, this;
      l(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    range: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    reset: v,
    click: v
  };
}, _2 = () => {
  const t = "radio";
  var n = ke(), e = 100, o = 20, r = 0.3, i = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", b = null, l = function(d) {
  }, f = [], c = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? b : (b = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    choices: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    click: function(d, v) {
      c = v, E(this.parentNode).selectAll("." + _.symbol).classed(_.selected, (y) => y == c), l();
    },
    reset: function(d, v) {
      c = v, d.select("#radio_" + n).selectAll("." + _.symbol).classed(_.selected, (y) => y == c), l();
    }
  };
}, m2 = (t, n) => {
  const e = "button_" + t.id(), o = t.label(), r = t.labelposition(), i = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = E(i).attr("class", _.widget + " " + _.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", _.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(_.lit, !0), E(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(_.lit, !1), E(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), a.append("path").attr("d", ce(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", _.symbol), o) {
    const u = Re(t.size(), t.size(), r);
    a.append("text").text(o).attr("class", _.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return i;
}, Yr = (t, n) => {
  const e = q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, $2 = (t, n) => {
  const e = wn(".3f"), o = "slider_" + t.id();
  t.labelposition();
  const r = t.range, i = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(u).attr("class", _.widget + " " + _.slider).attr("id", o).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(r()).range([0, i]).clamp(!0);
  const b = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Yr(t.size(), t.girth())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * b).attr("height", 2 * b).attr("transform", "translate(" + -b + "," + -b + ")").attr("class", _.track_overlay).on("click", function(h) {
    const d = Kn(h, this)[0];
    t.value(a.invert(d)), t.update(), t.update_end(), s.selectAll("." + _.handle).attr("cx", a(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ns().on("drag", function(h) {
      t.value(a.invert(h.x)), t.update(), s.selectAll("." + _.handle).attr("cx", a(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(h) {
      t.update_end();
    })
  );
  var l, f, c, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Gt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Gt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Gt([t.girth() / 2, t.knob()]) + 7 : -Gt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", _.label).style("text-anchor", c).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + f + ")"), u;
}, v2 = (t, n) => {
  const e = "toggle_" + t.id(), o = t.size(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(a).attr("class", _.widget + " " + _.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - o) + "," + t.y() + ")").classed(_.selected, t.value() == 1);
  if (s.append("path").attr("d", Yr(2 * t.size(), 2 * t.size())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", o).attr("cx", t.value() ? 2 * o : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", _.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), r) {
    const u = Re(4 * t.size(), 2 * t.size(), i);
    s.append("text").text(r).attr("class", _.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + o) + "," + u.y + ")");
  }
  return a;
}, w2 = (t, n) => {
  const e = "radio_" + t.id(), o = t.labelposition(), r = t.buttonsize(), i = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Fo(a), u = Y().domain([0, a - 1]).range([0, t.size()]), b = Y().domain([0, a - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = E(l).attr("class", _.widget + " " + _.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + _.radiobutton).data(s).enter().append("g").attr("class", _.radiobutton).attr("id", (v) => "b" + v).attr("transform", (v) => t.orientation() == "vertical" ? "translate(0," + b(v) + ")" : "translate(" + u(v) + ",0)");
  var p, h;
  t.shape() == "rect" ? (p = c.append("rect").attr("width", r).attr("height", r).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -r / 2 + "," + -r / 2 + ")"), h = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")")) : (p = c.append("circle").attr("r", r / 2), h = c.append("circle").attr("r", i / 2)), p.attr("class", _.background).on("mouseover", function() {
    E(this).classed(_.lit, !0), E(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(_.lit, !1), E(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), h.attr("class", _.symbol), h.filter((v) => v == t.value()).classed(_.selected, !0), c.on("click", t.click);
  const d = Re(t.buttonsize(), t.buttonsize(), o);
  return c.append("text").attr("class", _.label).text(function(v, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), l;
}, Xn = (t, n) => {
  switch (t.type) {
    case "button":
      return m2(t);
    case "slider":
      return $2(t);
    case "radio":
      return w2(t);
    case "toggle":
      return v2(t);
  }
}, x2 = (t, n) => {
  const e = Vh(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), o = E("#" + t).classed(n.id + " " + n.container_class, !0), r = o.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), i = o.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && i.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && r.style("border", n.display_border), n.debug && i.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: r, controls: i, grid: e };
}, S = {
  widgets: {
    slider_girth: 14,
    slider_knob: 16,
    slider_size: 160,
    slider_anchor: { x: 1, y: 8 },
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 7, y: 1 },
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_size: 400,
    radio_buttonsize: 30,
    radio_shape: "round"
  }
}, A = {
  L: 270,
  density: {
    range: [0, 1],
    default: 0.1
  },
  systems: {
    choices: ["random", "tiny glider", "tiny glider swarm", "larger gliders", "glider gun", "larger gun", "double barrel gun", "pulsar"],
    default: 0
  }
}, Kr = (t) => Lt(Oh(t), (n) => (n[1].id = n[0], n[1].label = Gh(gc(n[0]), /_/g, " "), n[1])), Vr = (t, n) => fe(t, (e, o) => e.widget = n[o]), Zr = (t) => Gr(t, (n) => Xr(n, "range")), Wr = (t) => Gr(t, (n) => Xr(n, "choices"));
Y().domain([0, 360]).range([0, 2 * Math.PI]);
Y().range([0, 360]).domain([0, 2 * Math.PI]);
const Oo = (t) => {
  let n = t;
  n = n.replace(RegExp("ob", "g"), "o1b"), n = n.replace(RegExp("o\\$", "g"), "o1$"), n = n.replace(RegExp("bo", "g"), "b1o"), n = n.replace(RegExp("b\\$", "g"), "b1$"), n = n.replace(RegExp("\\$o", "g"), "$1o"), n = n.replace(RegExp("\\$b", "g"), "$1b"), n[0] == "b" && (n = n.replace("b", "1b")), n[0] == "a" && (n = n.replace("a", "1a")), n[0] == "$" && (n = n.replace("$", "1$"));
  let e = n.split(RegExp("([bo\\$])"));
  e.pop();
  let o = [];
  var r = 0, i = 0, a;
  for (a = 0; a < e.length; a += 2) {
    var s = 0, u = 0;
    e[a + 1] == "$" ? (r = 0, i = i + parseInt(e[a], 10)) : (s = parseInt(e[a], 10), u = e[a + 1] == "o" ? 1 : 0, o.push({ n: s, state: u, x: r, y: i }), r = r + s);
  }
  let b = De(o, function(f) {
    return f.x;
  }), l = De(o, function(f) {
    return f.y;
  });
  return o.forEach(function(f) {
    f.x -= b, f.y -= l;
  }), o;
};
function Jt(t, n, e) {
  return n * e + t;
}
const Jr = Kr(Zr(A)), Qr = Kr(Wr(A)), he = Lt(
  Jr,
  (t) => y2().id(t.id).label(t.label).range(t.range).value(t.default).size(S.widgets.slider_size).girth(S.widgets.slider_girth).knob(S.widgets.slider_knob)
), de = Lt(
  Qr,
  (t) => _2().choices(t.choices).id(t.id).value(t.default).orientation(S.widgets.radio_orientation).labelposition(S.widgets.radio_label_position).buttonsize(S.widgets.radio_buttonsize)
);
Vr(Jr, he);
Vr(Qr, de);
const D = Fe().actions(["play", "pause"]), On = Fe().actions(["back"]), Cn = Fe().actions(["rewind"]), M2 = [D, On, Cn], A2 = (t, n) => {
  const e = n.position(S.widgets.slider_anchor.x, S.widgets.slider_anchor.y), o = n.position(S.widgets.radio_anchor.x, S.widgets.radio_anchor.y);
  he[0].position(e), de[0].position(o).size(S.widgets.radio_size).shape(S.widgets.radio_shape), D.position(n.position(S.widgets.playbutton_anchor.x, S.widgets.playbutton_anchor.y)).size(S.widgets.playbutton_size), Cn.position(n.position(S.widgets.backbutton_anchor.x, S.widgets.backbutton_anchor.y)), On.position(n.position(S.widgets.resetbutton_anchor.x, S.widgets.resetbutton_anchor.y)), t.selectAll(null).data(he).enter().append(Xn), t.selectAll(null).data(M2).enter().append(Xn), t.selectAll(null).data(de).enter().append(Xn);
}, T2 = (t) => {
  fe(Zr(A), (n) => n.widget.reset(t, n.default)), fe(Wr(A), (n) => n.widget.reset(t, n.default));
}, In = [
  {
    name: "random",
    str: "",
    N: 250,
    boundary: "periodic",
    offset: { x: 0, y: 0, r: 0 },
    delay: 0,
    init: "random"
  },
  {
    name: "tiny glider",
    str: "1$3b2o$2b2o$4bo",
    N: 50,
    boundary: "periodic",
    offset: [{ x: 10, y: 15, r: 0 }],
    delay: 50,
    init: "special"
  },
  {
    name: "tiny glider swarm",
    str: "1$3b2o$2b2o$4bo",
    N: 200,
    boundary: "periodic",
    offset: Fo(40).map(function(t) {
      return { x: 10 + Math.floor(180 * Math.random()), y: 10 + Math.floor(180 * Math.random()), r: Math.floor(4 * Math.random()) };
    }),
    delay: 0,
    init: "special"
  },
  {
    name: "larger gliders",
    str: ["7b3ob3o$6bo2bobo2bo$5bo3bobo3bo$5bo9bo$7bo5bo$4bobo7bobo$3b2obob2ob2obob2o$2bobobo2bobo2bobobo$b2obo4bobo4bob2o$o3bob2obobob2obo3bo$4bo4bobo4bo$2o3bo2bo3bo2bo3b2o", "8bo17bo$7b3o15b3o$6b2o4b3o5b3o4b2o$4b2obo2b3o2bo3bo2b3o2bob2o$5bobo2bobo3bobo3bobo2bobo$2b2obobobobo4bobo4bobobobob2o$2b2o3bobo4bo5bo4bobo3b2o$2b3obo3bo4bobobo4bo3bob3o$b2o9b2obobobob2o9b2o$13bo7bo$10b2obo7bob2o$11bo11bo$8b2obo11bob2o$8b2o15b2o$8bobobob3ob3obobobo$7b2o3bo3bobo3bo3b2o$7bo2bo3bobobobo3bo2bo$10b2o4bobo4b2o$6b2o4bo3bobo3bo4b2o$10bob2obo3bob2obo$11bobobobobobobo$13bobo3bobo$13bobo3bobo$15b2ob2o$11bo11bo$10bo13bo$11bobo7bobo", "4$6bo$6b2o2$7b3o$7b3o$24bo$23bo$8b3o14bo$9b2o8b3o3bo$4bob3o2bo5bo6bo$4bo3bob2o9b2o$4b2ob2ob2o7bo$9b3o5bo3bo$10b2o6bo2bo$11bo6b3o$10b2o$8bobo$6bo$5bo2bo$4bo2bo$7bo7b7o$4bo9b2ob4ob2o$4b3o11bo3b2o2b2o$12bobo4b3obo2b2o$10b2o7bobo4b2obo$8bo4bo7bo7b2o$8bo3bo6bo$8b2obo7b3o"],
    N: 200,
    boundary: "periodic",
    offset: [{ x: 70, y: 70, r: 0 }, { x: 120, y: 120, r: 3 }, { x: 160, y: 80, r: 0 }],
    delay: 0,
    init: "special"
  },
  {
    name: "glider gun",
    str: "5$26bo$26bobo$26b2o15$3b2o$3b2o10$3b2o$3bobo$4b2o9$6b2o$5bobo$5b2o10$5b2o$5b2o14$27b2o$26b2o$28bo",
    N: 100,
    boundary: "dirichlet",
    offset: [{ x: 10, y: 25, r: 0 }],
    delay: 0,
    init: "special"
  },
  {
    name: "larger gun",
    str: "18$130b3o$130bobo$130b3o6bo$130b3o5b3o$130b3o$130b3o$130bobo5b3o$130b3o$138bobo$138bobo2$138b3o$116b2o6b2o$115bo2bo4bo2bo$115bo2bo4bo2bo11b3o$115bo2bo4bo2bo12bo$116b2o6b2o2$142bo2b2o4b2o2bo$141bo3b3o2b3o3bo$142bo2b2o4b2o2bo7$144bo$144b3o4bobo2bobo$143bob4obo2bo2bo2bob2o$125bobo23bobo2bobo$125b2o$126bo$144b3o$144b3o$49b3o93bo$50bo94bo$50bo94bo$49b3o92bobo2$49b3o$49b3o92bobo$145bo$49b3o93bo$50bo94bo$50bo93b3o$49b3o92b3o2$56b2o6b2o$54bo4bo2bo4bo$54bo4bo2bo4bo$54bo4bo2bo4bo4bo$56b2o6b2o5b3o8bo$70bobobo6b3o$70bobobo5bobobo$71b3o6bobobo$72bo8b3o$82bo2$72bo$71b3o8bo$22bo47bobobo6b3o$21b3o46bobobo5bobobo$20bobobo46b3o6bobobo$20bobobo47bo8b3o$21b3o12bo45bo$22bo11b2o$35b2o2$22bo79b3o$21b3o80bo$20bobobo59bo18bo$20bobobo59bobo$21b3o49bo10b2o$22bo49b2o$72bobo$83b3o$7bo2bo4bo2bo64bo$5b3o2b6o2b3o63bo$7bo2bo4bo2bo2$86b2o$87b2o$86bo2$53bo$51b2o$52b2o$63bobo2bobo$59b2obo2bo2bo2bob2o$63bobo2bobo2$27b3o52b3o2$26bo3bo50bo3bo$26bo3bo50bo3bo2$27b3o52b3o$93b3o$93b3o$27b3o52b3o9bo$94bo$26bo3bo50bo3bo8bo$26bo3bo17bobo30bo3bo7bobo$49b2o$27b3o19bo32b3o$93bobo$94bo$13bo2bob2obo2bo69bo$13b4ob2ob4o69bo$13bo2bob2obo2bo68b3o$42b2o6b2o41b3o$40bo4bo2bo4bo$40bo4bo2bo4bo$40bo4bo2bo4bo$42b2o6b2o2$56b3o66b2o$57bo66b2o$57bo68bo$56b3o2$56b3o$43bobo10b3o$44b2o$44bo11b3o$57bo$57bo$56b3o26$164bo$164b3o4bobo2bobo$163bob4obo2bo2bo2bob2o$171bobo2bobo3$164b3o$164b3o$165bo$165bo$86bo78bo$84bobo77bobo$85b2o2$164bobo$165bo$165bo$165bo$164b3o$164b3o23$122b3o$124bo$123bo$105b2o6b2o$104bo2bo4bo2bo$104bo2bo4bo2bo$104bo2bo4bo2bo$105b2o6b2o$119b3o2$118bo3bo$118bo3bo2$119b3o3$119b3o2$118bo3bo$118bo3bo2$119b3o",
    N: 300,
    boundary: "dirichlet",
    offset: [{ x: 10, y: 25, r: 0 }],
    delay: 0,
    init: "special"
  },
  {
    name: "double barrel gun",
    str: "$3b2o23b2o$3b2o23bo$26bobo$8bo3b2o12b2o$2b2o2b2obob3o$2b2o2bo4b3o$6bo3bo$7b3o$46b2o$7b3o36b2o$6bo3bo$2b2o2bo4b3o25b2o$2b2o2b2obob3o25bobo5b2o$8bo3b2o25bob2o4b2o$23b2o15b2o$3b2o35bo$3b2o20bo$25bobo12bo$22bo17b2o$22bo5bo10bob2o4b2o$22bo5bo10bobo5b2o$24bo3bo10b2o$24bo$24bo2bo18b2o$24b3o19b2o4$34bo$30b2o2bo$29bo5bo13b2o$28b2o2bobo14b2o$29b2o3bo$30b3o$43b2o3b2o$30b3o9bo2bobo2bo$29b2o3bo6bo9bo$28b2o2bobo5b2o9b2o$29bo5bo5bo9bo$18b2o10b2o2bo7bo2bobo2bo$17bobo14bo8b2o3b2o$17bo$16b2o2$30bo5bo$28bobo3bobo$29b2o4b2o",
    N: 200,
    boundary: "dirichlet",
    offset: [{ x: 10, y: 25, r: 0 }],
    delay: 0,
    init: "special"
  },
  {
    name: "pulsar",
    str: "9$92b2o68b2o$92b2o16b2o32b2o16b2o$110b2o32b2o4$91b3o8b2o48b2o8b3o$91b3o8b2o48b2o8b3o$90bo3bo66bo3bo$110b3o30b3o$29b2o58b2o3b2o6bo6bo3bo28bo3bo6bo6b2o3b2o58b2o$31bo69bobo48bobo69bo$18b2o12bo67bo3bo3bo5bo26bo5bo3bo3bo67bo12b2o$18b2o4bo7bo8b2o57b5o3b2o3b2o26b2o3b2o3b5o57b2o8bo7bo4b2o$15b2o5b2o8bo8b2o56b2o3b2o44b2o3b2o56b2o8bo8b2o5b2o$7b2o5b3o5bo2b2o4bo57b3o8b5o46b5o8b3o57bo4b2o2bo5b3o5b2o$7b2o6b2o6b5ob2o62b2o6b3o7bo32bo7b3o6b2o62b2ob5o6b2o6b2o$18b2o4bo68b2o7bo7bob2o28b2obo7bo7b2o68bo4b2o$18b2o74b2o14bo34bo14b2o74b2o$92bobo15bo3bo26bo3bo15bobo$92b2o8bo8bo2bo26bo2bo8bo8b2o$20b2o79bobo7b5o24b5o7bobo79b2o$18bo3bo78bo9b5o24b5o9bo78bo3bo$12b2o3bo5bo63b2o3b2o16b2o3b2o22b2o3b2o16b2o3b2o63bo5bo3b2o$12b2o2b2obo3bo2bobo58b2o3b2o17b5o24b5o17b2o3b2o58bobo2bo3bob2o2b2o$17bo5bo3bo71b2o4bo6b3o26b3o6bo4b2o71bo3bo5bo$18bo3bo8b2o56b3o7b2o12bo28bo12b2o7b3o56b2o8bo3bo$20b2o9b2o56b3o72b3o56b2o9b2o$90bo74bo3$15bo8b2o204b2o8bo$13bobo6bo2bo204bo2bo6bobo$6b2o4bobo7bo3bo2b2o194b2o2bo3bo7bobo4b2o$6b2o3bo2bo7bo2b2o2b3o57b2o74b2o57b3o2b2o2bo7bo2bo3b2o$12bobo16b2obo12bo41b2o21b2o28b2o21b2o41bo12bob2o16bobo$13bobo4b3o8bo2bo5b2o6bo63b2o28b2o63bo6b2o5bo2bo8b3o4bobo$15bo15b2obo5b2o4b3o158b3o4b2o5bob2o15bo$29b3o192b3o$29b2o194b2o$89bobo72bobo$89b2o74b2o$90bo74bo18$67b2o118b2o$66b3o118b3o$66b2obo116bob2o$67b3o116b3o$68bo118bo13$25b2o202b2o$25b3o200b3o$11bo15b2obo5b2o4b3o166b3o4b2o5bob2o15bo$9bobo4b3o8bo2bo5b2o6bo166bo6b2o5bo2bo8b3o4bobo$8bobo16b2obo12bo168bo12bob2o16bobo$2b2o3bo2bo7bo2b2o2b3o200b3o2b2o2bo7bo2bo3b2o$2b2o4bobo7bo3bo2b2o202b2o2bo3bo7bobo4b2o$9bobo6bo2bo212bo2bo6bobo$11bo8b2o212b2o8bo4$16b2o9b2o198b2o9b2o$14bo3bo8b2o198b2o8bo3bo$13bo5bo3bo208bo3bo5bo$8b2o2b2obo3bo2bobo206bobo2bo3bob2o2b2o$8b2o3bo5bo216bo5bo3b2o$14bo3bo218bo3bo$16b2o220b2o3$14b2o224b2o$14b2o4bo214bo4b2o$3b2o6b2o6b5ob2o202b2ob5o6b2o6b2o$3b2o5b3o5bo2b2o4bo200bo4b2o2bo5b3o5b2o$11b2o5b2o8bo8b2o178b2o8bo8b2o5b2o$14b2o4bo7bo8b2o178b2o8bo7bo4b2o$14b2o12bo198bo12b2o$27bo40b2o116b2o40bo$25b2o41b3o114b3o41b2o$67bob2o114b2obo$67b3o116b3o$68bo118bo2$68bo118bo$67b3o116b3o$67bob2o114b2obo$25b2o41b3o114b3o41b2o$27bo40b2o116b2o40bo$14b2o12bo198bo12b2o$14b2o4bo7bo8b2o178b2o8bo7bo4b2o$11b2o5b2o8bo8b2o178b2o8bo8b2o5b2o$3b2o5b3o5bo2b2o4bo200bo4b2o2bo5b3o5b2o$3b2o6b2o6b5ob2o202b2ob5o6b2o6b2o$14b2o4bo214bo4b2o$14b2o224b2o3$16b2o220b2o$14bo3bo218bo3bo$8b2o3bo5bo216bo5bo3b2o$8b2o2b2obo3bo2bobo206bobo2bo3bob2o2b2o$13bo5bo3bo208bo3bo5bo$14bo3bo8b2o198b2o8bo3bo$16b2o9b2o198b2o9b2o4$11bo8b2o212b2o8bo$9bobo6bo2bo212bo2bo6bobo$2b2o4bobo7bo3bo2b2o202b2o2bo3bo7bobo4b2o$2b2o3bo2bo7bo2b2o2b3o200b3o2b2o2bo7bo2bo3b2o$8bobo16b2obo12bo168bo12bob2o16bobo$9bobo4b3o8bo2bo5b2o6bo166bo6b2o5bo2bo8b3o4bobo$11bo15b2obo5b2o4b3o166b3o4b2o5bob2o15bo$25b3o200b3o$25b2o202b2o13$68bo118bo$67b3o116b3o$66b2obo116bob2o$66b3o118b3o$67b2o118b2o18$90bo74bo$89b2o74b2o$89bobo72bobo$29b2o194b2o$29b3o192b3o$15bo15b2obo5b2o4b3o158b3o4b2o5bob2o15bo$13bobo4b3o8bo2bo5b2o6bo63b2o28b2o63bo6b2o5bo2bo8b3o4bobo$12bobo16b2obo12bo41b2o21b2o28b2o21b2o41bo12bob2o16bobo$6b2o3bo2bo7bo2b2o2b3o57b2o74b2o57b3o2b2o2bo7bo2bo3b2o$6b2o4bobo7bo3bo2b2o194b2o2bo3bo7bobo4b2o$13bobo6bo2bo204bo2bo6bobo$15bo8b2o204b2o8bo3$90bo74bo$20b2o9b2o56b3o72b3o56b2o9b2o$18bo3bo8b2o56b3o7b2o12bo28bo12b2o7b3o56b2o8bo3bo$17bo5bo3bo71b2o4bo6b3o26b3o6bo4b2o71bo3bo5bo$12b2o2b2obo3bo2bobo58b2o3b2o17b5o24b5o17b2o3b2o58bobo2bo3bob2o2b2o$12b2o3bo5bo63b2o3b2o16b2o3b2o22b2o3b2o16b2o3b2o63bo5bo3b2o$18bo3bo78bo9b5o24b5o9bo78bo3bo$20b2o79bobo7b5o24b5o7bobo79b2o$92b2o8bo8bo2bo26bo2bo8bo8b2o$92bobo15bo3bo26bo3bo15bobo$18b2o74b2o14bo34bo14b2o74b2o$18b2o4bo68b2o7bo7bob2o28b2obo7bo7b2o68bo4b2o$7b2o6b2o6b5ob2o62b2o6b3o7bo32bo7b3o6b2o62b2ob5o6b2o6b2o$7b2o5b3o5bo2b2o4bo57b3o8b5o46b5o8b3o57bo4b2o2bo5b3o5b2o$15b2o5b2o8bo8b2o56b2o3b2o44b2o3b2o56b2o8bo8b2o5b2o$18b2o4bo7bo8b2o57b5o3b2o3b2o26b2o3b2o3b5o57b2o8bo7bo4b2o$18b2o12bo67bo3bo3bo5bo26bo5bo3bo3bo67bo12b2o$31bo69bobo48bobo69bo$29b2o58b2o3b2o6bo6bo3bo28bo3bo6bo6b2o3b2o58b2o$110b3o30b3o$90bo3bo66bo3bo$91b3o8b2o48b2o8b3o$91b3o8b2o48b2o8b3o4$110b2o32b2o$92b2o16b2o32b2o16b2o$92b2o68b2o",
    N: 280,
    boundary: "dirichlet",
    offset: [{ x: 10, y: 30, r: 0 }],
    delay: 0,
    init: "special"
  }
], jr = (t, n) => {
  t.forEach(function(e) {
    e.state = 0, e.newness = 0;
  }), n.offset.forEach(function(e, o) {
    let r = e.x, i = e.y, a = e.r;
    var s;
    typeof n.str != "string" ? s = Oo(n.str[o]) : s = Oo(n.str), s.forEach(function(u) {
      var b = u.x, l = u.y;
      for (let c = 0; c < u.n; c++) {
        var f;
        switch (a) {
          case 0:
            f = Jt(r + b + c, i + l, n.N);
            break;
          case 1:
            f = Jt(r + l, i + b + c, n.N);
            break;
          case 2:
            f = Jt(r - b - c, i - l, n.N);
            break;
          case 3:
            f = Jt(r + l, i - b - c, n.N);
            break;
        }
        t[f].state = u.state;
      }
    });
  });
};
function ti(t, n) {
  return [t % n, Math.floor(t / n)];
}
yn([-1, 1, 0, 0], [0, 0, -1, 1]), yn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const S2 = {
  n4: yn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: yn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Gn(t, n, e = "periodic", o = "n8") {
  const r = [];
  return S2[o].forEach((i) => {
    var a = i[1], s = i[0];
    const u = ti(t, n), b = u[0], l = u[1], f = b + s, c = l + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && f < n && c < n && f >= 0 && c >= 0 : !(a == 0 && s == 0)) && r.push(n * ((c + n) % n) + (f + n) % n);
  }), r;
}
const E2 = function(t) {
  var n = "periodic", e = t, o = "n8";
  const r = Ur(t * t).map(function(u) {
    const b = ti(u, t);
    return {
      x: b[0],
      y: b[1]
    };
  });
  return r.forEach(function(u, b) {
    u.neighbors = Gn(b, t, n, o).map((l) => r[l]), u.cell = () => [
      { x: u.x, y: u.y },
      { x: u.x + 1, y: u.y },
      { x: u.x + 1, y: u.y + 1 },
      { x: u.x, y: u.y + 1 },
      { x: u.x, y: u.y }
    ];
  }), {
    type: "square",
    L: e,
    N: t,
    size: t,
    hood: function(u) {
      return typeof u < "u" ? (r.forEach(function(b, l) {
        b.neighbors = Gn(l, t, n, u).map((f) => r[f]);
      }), o = u, this) : o;
    },
    nodes: r,
    scale: function(u) {
      return t;
    },
    boundary: function(u) {
      return typeof u < "u" ? (r.forEach(function(b, l) {
        b.neighbors = Gn(l, t, u, o).map((f) => r[f]);
      }), n = u, this) : n;
    }
  };
};
A.L;
A.dt;
let it = [], Co = {}, G = {};
const P2 = () => {
  A.timer = {}, A.tick = 0, G = In[A.systems.widget.value()], Co = E2(G.N).boundary(G.boundary), it = Co.nodes, G.name != "random" ? jr(it, G) : it.forEach(function(t) {
    t.state = Math.random() < A.density.widget.value() ? 1 : 0;
  });
}, N2 = () => {
  A.tick++, it.forEach(function(t) {
    let n = Uh(t.neighbors, function(e) {
      return e.state;
    });
    t.state ? t.nextstate = n == 2 || n == 3 ? 1 : 0 : t.nextstate = n == 3 ? 1 : 0;
  }), it.forEach(function(t) {
    t.state = t.nextstate;
  });
}, z2 = () => {
  G = In[A.systems.widget.value()], G.name != "random" ? jr(it, G) : it.forEach(function(t) {
    t.state = Math.random() < A.density.widget.value() ? 1 : 0;
  });
}, en = Y(), on = Y();
var rn, pe, ge;
function Le(t, n) {
  rn.clearRect(0, 0, pe, ge), it.filter(function(e) {
    return e.state == 1;
  }).forEach((e) => {
    const o = e.cell();
    rn.fillStyle = "black", rn.fillRect(en(o[0].x), on(o[0].y), en(o[2].x) - en(o[0].x), on(o[2].y) - on(o[0].y));
  });
}
const O2 = (t, n) => {
  Le();
}, C2 = (t, n) => {
  pe = n.display_size.width, ge = n.display_size.height, en.range([0, pe]).domain([0, G.N]), on.range([0, ge]).domain([0, G.N]), rn = t.node().getContext("2d"), Le();
}, I2 = (t, n) => {
  Le();
};
function k2(t, n) {
  N2(), I2();
}
function ye(t, n) {
  P2(), C2(t, n);
}
function R2(t, n) {
  z2(), O2();
}
var Io = {};
const F2 = (t, n) => {
  const e = In[A.systems.widget.value()].delay;
  D.value() == 1 ? Io = Cs(() => k2(), e) : Io.stop();
};
function ko(t) {
  D.value() == !0 || In[A.systems.widget.value()].name != "random" ? (t.select("#slider_" + A.density.widget.id()).transition().style("opacity", 0), t.select("#slider_" + A.density.widget.id()).selectAll("*").style("pointer-events", "none")) : (t.select("#slider_" + A.density.widget.id()).transition().style("opacity", 1), t.select("#slider_" + A.density.widget.id()).selectAll("*").style("pointer-events", null));
}
const L2 = (t, n, e) => {
  Cn.update(() => T2(n)), D.update(() => {
    ko(n), F2();
  }), On.update(() => ye(t, e)), A.density.widget.update_end(() => R2()), A.systems.widget.update(() => {
    ko(n), D.value() && D.press(n), ye(t, e);
  });
}, D2 = {
  name: "@explorables/nah_dah_dah_nah_nah_opus_1984",
  title: "Nah Dah Dah Nah Nah (Opus 1984)",
  subtitle: "Conway's Game of Life",
  description: "This explorable is an implementation of Conway's Game of Life, one of the most famous cellular automata models for the emergence of structure, replication and complex behavior generated by simple rules.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function H2(t, n = ni) {
  const e = x2(t, n), o = e.display, r = e.controls, i = e.grid;
  return A2(r, i), L2(o, r, n), ye(o, n), {
    halt() {
      D.value() === 1 && D.press(r);
    },
    reset() {
      D.value() === 1 && D.press(r), Cn.press(r), On.press(r);
    },
    config: n,
    meta: D2
  };
}
export {
  ni as config,
  H2 as default,
  H2 as load,
  D2 as meta
};
