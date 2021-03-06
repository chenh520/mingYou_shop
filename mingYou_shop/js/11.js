! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
	"use strict";

	function e(t) {
		var e = {},
			n = {},
			i = t.match(/Firefox\/([\d.]+)/),
			r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
			a = t.match(/Edge\/([\d.]+)/),
			o = /micromessenger/i.test(t);
		return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
			browser: n,
			os: e,
			node: !1,
			canvasSupported: !!document.createElement("canvas").getContext,
			svgSupported: "undefined" != typeof SVGRect,
			touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
			pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
		}
	}

	function n(t, e) {
		"createCanvas" === t && (Sf = null), wf[t] = e
	}

	function i(t) {
		if(null == t || "object" != typeof t) return t;
		var e = t,
			n = pf.call(t);
		if("[object Array]" === n) {
			if(!N(t)) {
				e = [];
				for(var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
			}
		} else if(ff[n]) {
			if(!N(t)) {
				var o = t.constructor;
				if(t.constructor.from) e = o.from(t);
				else {
					e = new o(t.length);
					for(var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
				}
			}
		} else if(!df[n] && !N(t) && !T(t)) {
			e = {};
			for(var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
		}
		return e
	}

	function r(t, e, n) {
		if(!S(e) || !S(t)) return n ? i(e) : t;
		for(var a in e)
			if(e.hasOwnProperty(a)) {
				var o = t[a],
					s = e[a];
				!S(s) || !S(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || N(s) || N(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
			}
		return t
	}

	function a(t, e) {
		for(var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
		return n
	}

	function o(t, e) {
		for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}

	function s(t, e, n) {
		for(var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
		return t
	}

	function l() {
		return Sf || (Sf = bf().getContext("2d")), Sf
	}

	function h(t, e) {
		if(t) {
			if(t.indexOf) return t.indexOf(e);
			for(var n = 0, i = t.length; i > n; n++)
				if(t[n] === e) return n
		}
		return -1
	}

	function u(t, e) {
		function n() {}
		var i = t.prototype;
		n.prototype = e.prototype, t.prototype = new n;
		for(var r in i) t.prototype[r] = i[r];
		t.prototype.constructor = t, t.superClass = e
	}

	function c(t, e, n) {
		t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
	}

	function d(t) {
		return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
	}

	function f(t, e, n) {
		if(t && e)
			if(t.forEach && t.forEach === vf) t.forEach(e, n);
			else if(t.length === +t.length)
			for(var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
		else
			for(var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
	}

	function p(t, e, n) {
		if(t && e) {
			if(t.map && t.map === xf) return t.map(e, n);
			for(var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
			return i
		}
	}

	function g(t, e, n, i) {
		if(t && e) {
			if(t.reduce && t.reduce === _f) return t.reduce(e, n, i);
			for(var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
			return n
		}
	}

	function v(t, e, n) {
		if(t && e) {
			if(t.filter && t.filter === mf) return t.filter(e, n);
			for(var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
			return i
		}
	}

	function m(t, e, n) {
		if(t && e)
			for(var i = 0, r = t.length; r > i; i++)
				if(e.call(n, t[i], i, t)) return t[i]
	}

	function y(t, e) {
		var n = yf.call(arguments, 2);
		return function() {
			return t.apply(e, n.concat(yf.call(arguments)))
		}
	}

	function x(t) {
		var e = yf.call(arguments, 1);
		return function() {
			return t.apply(this, e.concat(yf.call(arguments)))
		}
	}

	function _(t) {
		return "[object Array]" === pf.call(t)
	}

	function w(t) {
		return "function" == typeof t
	}

	function b(t) {
		return "[object String]" === pf.call(t)
	}

	function S(t) {
		var e = typeof t;
		return "function" === e || !!t && "object" == e
	}

	function M(t) {
		return !!df[pf.call(t)]
	}

	function I(t) {
		return !!ff[pf.call(t)]
	}

	function T(t) {
		return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
	}

	function C(t) {
		return t !== t
	}

	function D() {
		for(var t = 0, e = arguments.length; e > t; t++)
			if(null != arguments[t]) return arguments[t]
	}

	function A(t, e) {
		return null != t ? t : e
	}

	function k(t, e, n) {
		return null != t ? t : null != e ? e : n
	}

	function P() {
		return Function.call.apply(yf, arguments)
	}

	function L(t) {
		if("number" == typeof t) return [t, t, t, t];
		var e = t.length;
		return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
	}

	function O(t, e) {
		if(!t) throw new Error(e)
	}

	function B(t) {
		return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}

	function E(t) {
		t[Mf] = !0
	}

	function N(t) {
		return t[Mf]
	}

	function R(t) {
		function e(t, e) {
			n ? i.set(t, e) : i.set(e, t)
		}
		var n = _(t),
			i = this;
		t instanceof R ? t.each(e) : t && f(t, e)
	}

	function z(t) {
		return new R(t)
	}

	function F(t, e) {
		for(var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
		var r = t.length;
		for(i = 0; i < e.length; i++) n[i + r] = e[i];
		return n
	}

	function V() {}

	function H(t, e) {
		var n = new Tf(2);
		return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
	}

	function G(t, e) {
		return t[0] = e[0], t[1] = e[1], t
	}

	function W(t) {
		var e = new Tf(2);
		return e[0] = t[0], e[1] = t[1], e
	}

	function X(t, e, n) {
		return t[0] = e, t[1] = n, t
	}

	function Y(t, e, n) {
		return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
	}

	function j(t, e, n, i) {
		return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
	}

	function U(t, e, n) {
		return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
	}

	function q(t) {
		return Math.sqrt(Z(t))
	}

	function Z(t) {
		return t[0] * t[0] + t[1] * t[1]
	}

	function K(t, e, n) {
		return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
	}

	function $(t, e, n) {
		return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
	}

	function Q(t, e) {
		return t[0] * e[0] + t[1] * e[1]
	}

	function J(t, e, n) {
		return t[0] = e[0] * n, t[1] = e[1] * n, t
	}

	function te(t, e) {
		var n = q(e);
		return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
	}

	function ee(t, e) {
		return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
	}

	function ne(t, e) {
		return(t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
	}

	function ie(t, e) {
		return t[0] = -e[0], t[1] = -e[1], t
	}

	function re(t, e, n, i) {
		return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
	}

	function ae(t, e, n) {
		var i = e[0],
			r = e[1];
		return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
	}

	function oe(t, e, n) {
		return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
	}

	function se(t, e, n) {
		return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
	}

	function le() {
		this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
	}

	function he(t, e) {
		return {
			target: t,
			topTarget: e && e.topTarget
		}
	}

	function ue(t, e, n) {
		return {
			type: t,
			event: n,
			target: e.target,
			topTarget: e.topTarget,
			cancelBubble: !1,
			offsetX: n.zrX,
			offsetY: n.zrY,
			gestureEvent: n.gestureEvent,
			pinchX: n.pinchX,
			pinchY: n.pinchY,
			pinchScale: n.pinchScale,
			wheelDelta: n.zrDelta,
			zrByTouch: n.zrByTouch,
			which: n.which
		}
	}

	function ce() {}

	function de(t, e, n) {
		if(t[t.rectHover ? "rectContain" : "contain"](e, n)) {
			for(var i, r = t; r;) {
				if(r.clipPath && !r.clipPath.contain(e, n)) return !1;
				r.silent && (i = !0), r = r.parent
			}
			return i ? Bf : !0
		}
		return !1
	}

	function fe() {
		var t = new Rf(6);
		return pe(t), t
	}

	function pe(t) {
		return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
	}

	function ge(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
	}

	function ve(t, e, n) {
		var i = e[0] * n[0] + e[2] * n[1],
			r = e[1] * n[0] + e[3] * n[1],
			a = e[0] * n[2] + e[2] * n[3],
			o = e[1] * n[2] + e[3] * n[3],
			s = e[0] * n[4] + e[2] * n[5] + e[4],
			l = e[1] * n[4] + e[3] * n[5] + e[5];
		return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
	}

	function me(t, e, n) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
	}

	function ye(t, e, n) {
		var i = e[0],
			r = e[2],
			a = e[4],
			o = e[1],
			s = e[3],
			l = e[5],
			h = Math.sin(n),
			u = Math.cos(n);
		return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
	}

	function xe(t, e, n) {
		var i = n[0],
			r = n[1];
		return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
	}

	function _e(t, e) {
		var n = e[0],
			i = e[2],
			r = e[4],
			a = e[1],
			o = e[3],
			s = e[5],
			l = n * o - a * i;
		return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
	}

	function we(t) {
		var e = fe();
		return ge(e, t), e
	}

	function be(t) {
		return t > Vf || -Vf > t
	}

	function Se(t) {
		this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
	}

	function Me(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
	}

	function Ie(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
	}

	function Te(t) {
		return 0 > t ? 0 : t > 1 ? 1 : t
	}

	function Ce(t) {
		return Me(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
	}

	function De(t) {
		return Te(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
	}

	function Ae(t, e, n) {
		return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
	}

	function ke(t, e, n) {
		return t + (e - t) * n
	}

	function Pe(t, e, n, i, r) {
		return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
	}

	function Le(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
	}

	function Oe(t, e) {
		Qf && Le(Qf, e), Qf = $f.put(t, Qf || e.slice())
	}

	function Be(t, e) {
		if(t) {
			e = e || [];
			var n = $f.get(t);
			if(n) return Le(e, n);
			t += "";
			var i = t.replace(/ /g, "").toLowerCase();
			if(i in Kf) return Le(e, Kf[i]), Oe(t, e), e;
			if("#" !== i.charAt(0)) {
				var r = i.indexOf("("),
					a = i.indexOf(")");
				if(-1 !== r && a + 1 === i.length) {
					var o = i.substr(0, r),
						s = i.substr(r + 1, a - (r + 1)).split(","),
						l = 1;
					switch(o) {
						case "rgba":
							if(4 !== s.length) return void Pe(e, 0, 0, 0, 1);
							l = De(s.pop());
						case "rgb":
							return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Pe(e, Ce(s[0]), Ce(s[1]), Ce(s[2]), l), Oe(t, e), e);
						case "hsla":
							return 4 !== s.length ? void Pe(e, 0, 0, 0, 1) : (s[3] = De(s[3]), Ee(s, e), Oe(t, e), e);
						case "hsl":
							return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Ee(s, e), Oe(t, e), e);
						default:
							return
					}
				}
				Pe(e, 0, 0, 0, 1)
			} else {
				if(4 === i.length) {
					var h = parseInt(i.substr(1), 16);
					return h >= 0 && 4095 >= h ? (Pe(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), Oe(t, e), e) : void Pe(e, 0, 0, 0, 1)
				}
				if(7 === i.length) {
					var h = parseInt(i.substr(1), 16);
					return h >= 0 && 16777215 >= h ? (Pe(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), Oe(t, e), e) : void Pe(e, 0, 0, 0, 1)
				}
			}
		}
	}

	function Ee(t, e) {
		var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
			i = De(t[1]),
			r = De(t[2]),
			a = .5 >= r ? r * (i + 1) : r + i - r * i,
			o = 2 * r - a;
		return e = e || [], Pe(e, Me(255 * Ae(o, a, n + 1 / 3)), Me(255 * Ae(o, a, n)), Me(255 * Ae(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
	}

	function Ne(t) {
		if(t) {
			var e, n, i = t[0] / 255,
				r = t[1] / 255,
				a = t[2] / 255,
				o = Math.min(i, r, a),
				s = Math.max(i, r, a),
				l = s - o,
				h = (s + o) / 2;
			if(0 === l) e = 0, n = 0;
			else {
				n = .5 > h ? l / (s + o) : l / (2 - s - o);
				var u = ((s - i) / 6 + l / 2) / l,
					c = ((s - r) / 6 + l / 2) / l,
					d = ((s - a) / 6 + l / 2) / l;
				i === s ? e = d - c : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1)
			}
			var f = [360 * e, n, h];
			return null != t[3] && f.push(t[3]), f
		}
	}

	function Re(t, e) {
		var n = Be(t);
		if(n) {
			for(var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
			return We(n, 4 === n.length ? "rgba" : "rgb")
		}
	}

	function ze(t) {
		var e = Be(t);
		return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
	}

	function Fe(t, e, n) {
		if(e && e.length && t >= 0 && 1 >= t) {
			n = n || [];
			var i = t * (e.length - 1),
				r = Math.floor(i),
				a = Math.ceil(i),
				o = e[r],
				s = e[a],
				l = i - r;
			return n[0] = Me(ke(o[0], s[0], l)), n[1] = Me(ke(o[1], s[1], l)), n[2] = Me(ke(o[2], s[2], l)), n[3] = Te(ke(o[3], s[3], l)), n
		}
	}

	function Ve(t, e, n) {
		if(e && e.length && t >= 0 && 1 >= t) {
			var i = t * (e.length - 1),
				r = Math.floor(i),
				a = Math.ceil(i),
				o = Be(e[r]),
				s = Be(e[a]),
				l = i - r,
				h = We([Me(ke(o[0], s[0], l)), Me(ke(o[1], s[1], l)), Me(ke(o[2], s[2], l)), Te(ke(o[3], s[3], l))], "rgba");
			return n ? {
				color: h,
				leftIndex: r,
				rightIndex: a,
				value: i
			} : h
		}
	}

	function He(t, e, n, i) {
		return t = Be(t), t ? (t = Ne(t), null != e && (t[0] = Ie(e)), null != n && (t[1] = De(n)), null != i && (t[2] = De(i)), We(Ee(t), "rgba")) : void 0
	}

	function Ge(t, e) {
		return t = Be(t), t && null != e ? (t[3] = Te(e), We(t, "rgba")) : void 0
	}

	function We(t, e) {
		if(t && t.length) {
			var n = t[0] + "," + t[1] + "," + t[2];
			return("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
		}
	}

	function Xe(t, e) {
		return t[e]
	}

	function Ye(t, e, n) {
		t[e] = n
	}

	function je(t, e, n) {
		return(e - t) * n + t
	}

	function Ue(t, e, n) {
		return n > .5 ? e : t
	}

	function qe(t, e, n, i, r) {
		var a = t.length;
		if(1 == r)
			for(var o = 0; a > o; o++) i[o] = je(t[o], e[o], n);
		else
			for(var s = a && t[0].length, o = 0; a > o; o++)
				for(var l = 0; s > l; l++) i[o][l] = je(t[o][l], e[o][l], n)
	}

	function Ze(t, e, n) {
		var i = t.length,
			r = e.length;
		if(i !== r) {
			var a = i > r;
			if(a) t.length = r;
			else
				for(var o = i; r > o; o++) t.push(1 === n ? e[o] : np.call(e[o]))
		}
		for(var s = t[0] && t[0].length, o = 0; o < t.length; o++)
			if(1 === n) isNaN(t[o]) && (t[o] = e[o]);
			else
				for(var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
	}

	function Ke(t, e, n) {
		if(t === e) return !0;
		var i = t.length;
		if(i !== e.length) return !1;
		if(1 === n) {
			for(var r = 0; i > r; r++)
				if(t[r] !== e[r]) return !1
		} else
			for(var a = t[0].length, r = 0; i > r; r++)
				for(var o = 0; a > o; o++)
					if(t[r][o] !== e[r][o]) return !1;
		return !0
	}

	function $e(t, e, n, i, r, a, o, s, l) {
		var h = t.length;
		if(1 == l)
			for(var u = 0; h > u; u++) s[u] = Qe(t[u], e[u], n[u], i[u], r, a, o);
		else
			for(var c = t[0].length, u = 0; h > u; u++)
				for(var d = 0; c > d; d++) s[u][d] = Qe(t[u][d], e[u][d], n[u][d], i[u][d], r, a, o)
	}

	function Qe(t, e, n, i, r, a, o) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return(2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
	}

	function Je(t) {
		if(d(t)) {
			var e = t.length;
			if(d(t[0])) {
				for(var n = [], i = 0; e > i; i++) n.push(np.call(t[i]));
				return n
			}
			return np.call(t)
		}
		return t
	}

	function tn(t) {
		return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
	}

	function en(t) {
		var e = t[t.length - 1].value;
		return d(e && e[0]) ? 2 : 1
	}

	function nn(t, e, n, i, r, a) {
		var o = t._getter,
			s = t._setter,
			l = "spline" === e,
			h = i.length;
		if(h) {
			var u, c = i[0].value,
				f = d(c),
				p = !1,
				g = !1,
				v = f ? en(i) : 0;
			i.sort(function(t, e) {
				return t.time - e.time
			}), u = i[h - 1].time;
			for(var m = [], y = [], x = i[0].value, _ = !0, w = 0; h > w; w++) {
				m.push(i[w].time / u);
				var b = i[w].value;
				if(f && Ke(b, x, v) || !f && b === x || (_ = !1), x = b, "string" == typeof b) {
					var S = Be(b);
					S ? (b = S, p = !0) : g = !0
				}
				y.push(b)
			}
			if(a || !_) {
				for(var M = y[h - 1], w = 0; h - 1 > w; w++) f ? Ze(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
				f && Ze(o(t._target, r), M, v);
				var I, T, C, D, A, k, P = 0,
					L = 0;
				if(p) var O = [0, 0, 0, 0];
				var B = function(t, e) {
						var n;
						if(0 > e) n = 0;
						else if(L > e) {
							for(I = Math.min(P + 1, h - 1), n = I; n >= 0 && !(m[n] <= e); n--);
							n = Math.min(n, h - 2)
						} else {
							for(n = P; h > n && !(m[n] > e); n++);
							n = Math.min(n - 1, h - 2)
						}
						P = n, L = e;
						var i = m[n + 1] - m[n];
						if(0 !== i)
							if(T = (e - m[n]) / i, l)
								if(D = y[n], C = y[0 === n ? n : n - 1], A = y[n > h - 2 ? h - 1 : n + 1], k = y[n > h - 3 ? h - 1 : n + 2], f) $e(C, D, A, k, T, T * T, T * T * T, o(t, r), v);
								else {
									var a;
									if(p) a = $e(C, D, A, k, T, T * T, T * T * T, O, 1), a = tn(O);
									else {
										if(g) return Ue(D, A, T);
										a = Qe(C, D, A, k, T, T * T, T * T * T)
									}
									s(t, r, a)
								}
						else if(f) qe(y[n], y[n + 1], T, o(t, r), v);
						else {
							var a;
							if(p) qe(y[n], y[n + 1], T, O, 1), a = tn(O);
							else {
								if(g) return Ue(y[n], y[n + 1], T);
								a = je(y[n], y[n + 1], T)
							}
							s(t, r, a)
						}
					},
					E = new Se({
						target: t._target,
						life: u,
						loop: t._loop,
						delay: t._delay,
						onframe: B,
						ondestroy: n
					});
				return e && "spline" !== e && (E.easing = e), E
			}
		}
	}

	function rn(t, e, n, i) {
		0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
	}

	function an(t) {
		for(var e = 0; t >= gp;) e |= 1 & t, t >>= 1;
		return t + e
	}

	function on(t, e, n, i) {
		var r = e + 1;
		if(r === n) return 1;
		if(i(t[r++], t[e]) < 0) {
			for(; n > r && i(t[r], t[r - 1]) < 0;) r++;
			sn(t, e, r)
		} else
			for(; n > r && i(t[r], t[r - 1]) >= 0;) r++;
		return r - e
	}

	function sn(t, e, n) {
		for(n--; n > e;) {
			var i = t[e];
			t[e++] = t[n], t[n--] = i
		}
	}

	function ln(t, e, n, i, r) {
		for(i === e && i++; n > i; i++) {
			for(var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
			var h = i - s;
			switch(h) {
				case 3:
					t[s + 3] = t[s + 2];
				case 2:
					t[s + 2] = t[s + 1];
				case 1:
					t[s + 1] = t[s];
					break;
				default:
					for(; h > 0;) t[s + h] = t[s + h - 1], h--
			}
			t[s] = o
		}
	}

	function hn(t, e, n, i, r, a) {
		var o = 0,
			s = 0,
			l = 1;
		if(a(t, e[n + r]) > 0) {
			for(s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), o += r, l += r
		} else {
			for(s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var h = o;
			o = r - l, l = r - h
		}
		for(o++; l > o;) {
			var u = o + (l - o >>> 1);
			a(t, e[n + u]) > 0 ? o = u + 1 : l = u
		}
		return l
	}

	function un(t, e, n, i, r, a) {
		var o = 0,
			s = 0,
			l = 1;
		if(a(t, e[n + r]) < 0) {
			for(s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var h = o;
			o = r - l, l = r - h
		} else {
			for(s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), o += r, l += r
		}
		for(o++; l > o;) {
			var u = o + (l - o >>> 1);
			a(t, e[n + u]) < 0 ? l = u : o = u + 1
		}
		return l
	}

	function cn(t, e) {
		function n(t, e) {
			l[c] = t, h[c] = e, c += 1
		}

		function i() {
			for(; c > 1;) {
				var t = c - 2;
				if(t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;
				else if(h[t] > h[t + 1]) break;
				a(t)
			}
		}

		function r() {
			for(; c > 1;) {
				var t = c - 2;
				t > 0 && h[t - 1] < h[t + 1] && t--, a(t)
			}
		}

		function a(n) {
			var i = l[n],
				r = h[n],
				a = l[n + 1],
				u = h[n + 1];
			h[n] = r + u, n === c - 3 && (l[n + 1] = l[n + 2], h[n + 1] = h[n + 2]), c--;
			var d = un(t[a], t, i, r, 0, e);
			i += d, r -= d, 0 !== r && (u = hn(t[i + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(i, r, a, u) : s(i, r, a, u)))
		}

		function o(n, i, r, a) {
			var o = 0;
			for(o = 0; i > o; o++) d[o] = t[n + o];
			var s = 0,
				l = r,
				h = n;
			if(t[h++] = t[l++], 0 !== --a) {
				if(1 === i) {
					for(o = 0; a > o; o++) t[h + o] = t[l + o];
					return void(t[h + a] = d[s])
				}
				for(var c, f, p, g = u;;) {
					c = 0, f = 0, p = !1;
					do
						if(e(t[l], d[s]) < 0) {
							if(t[h++] = t[l++], f++, c = 0, 0 === --a) {
								p = !0;
								break
							}
						} else if(t[h++] = d[s++], c++, f = 0, 1 === --i) {
						p = !0;
						break
					} while (g > (c | f));
					if(p) break;
					do {
						if(c = un(t[l], d, s, i, 0, e), 0 !== c) {
							for(o = 0; c > o; o++) t[h + o] = d[s + o];
							if(h += c, s += c, i -= c, 1 >= i) {
								p = !0;
								break
							}
						}
						if(t[h++] = t[l++], 0 === --a) {
							p = !0;
							break
						}
						if(f = hn(d[s], t, l, a, 0, e), 0 !== f) {
							for(o = 0; f > o; o++) t[h + o] = t[l + o];
							if(h += f, l += f, a -= f, 0 === a) {
								p = !0;
								break
							}
						}
						if(t[h++] = d[s++], 1 === --i) {
							p = !0;
							break
						}
						g--
					} while (c >= vp || f >= vp);
					if(p) break;
					0 > g && (g = 0), g += 2
				}
				if(u = g, 1 > u && (u = 1), 1 === i) {
					for(o = 0; a > o; o++) t[h + o] = t[l + o];
					t[h + a] = d[s]
				} else {
					if(0 === i) throw new Error;
					for(o = 0; i > o; o++) t[h + o] = d[s + o]
				}
			} else
				for(o = 0; i > o; o++) t[h + o] = d[s + o]
		}

		function s(n, i, r, a) {
			var o = 0;
			for(o = 0; a > o; o++) d[o] = t[r + o];
			var s = n + i - 1,
				l = a - 1,
				h = r + a - 1,
				c = 0,
				f = 0;
			if(t[h--] = t[s--], 0 !== --i) {
				if(1 === a) {
					for(h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
					return void(t[h] = d[l])
				}
				for(var p = u;;) {
					var g = 0,
						v = 0,
						m = !1;
					do
						if(e(d[l], t[s]) < 0) {
							if(t[h--] = t[s--], g++, v = 0, 0 === --i) {
								m = !0;
								break
							}
						} else if(t[h--] = d[l--], v++, g = 0, 1 === --a) {
						m = !0;
						break
					} while (p > (g | v));
					if(m) break;
					do {
						if(g = i - un(d[l], t, n, i, i - 1, e), 0 !== g) {
							for(h -= g, s -= g, i -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
							if(0 === i) {
								m = !0;
								break
							}
						}
						if(t[h--] = d[l--], 1 === --a) {
							m = !0;
							break
						}
						if(v = a - hn(t[s], d, 0, a, a - 1, e), 0 !== v) {
							for(h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
							if(1 >= a) {
								m = !0;
								break
							}
						}
						if(t[h--] = t[s--], 0 === --i) {
							m = !0;
							break
						}
						p--
					} while (g >= vp || v >= vp);
					if(m) break;
					0 > p && (p = 0), p += 2
				}
				if(u = p, 1 > u && (u = 1), 1 === a) {
					for(h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
					t[h] = d[l]
				} else {
					if(0 === a) throw new Error;
					for(c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
				}
			} else
				for(c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
		}
		var l, h, u = vp,
			c = 0,
			d = [];
		l = [], h = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
	}

	function dn(t, e, n, i) {
		n || (n = 0), i || (i = t.length);
		var r = i - n;
		if(!(2 > r)) {
			var a = 0;
			if(gp > r) return a = on(t, n, i, e), void ln(t, n, i, n + a, e);
			var o = new cn(t, e),
				s = an(r);
			do {
				if(a = on(t, n, i, e), s > a) {
					var l = r;
					l > s && (l = s), ln(t, n, n + l, n + a, e), a = l
				}
				o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
			} while (0 !== r);
			o.forceMergeRuns()
		}
	}

	function fn(t, e) {
		return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
	}

	function pn(t, e, n) {
		var i = null == e.x ? 0 : e.x,
			r = null == e.x2 ? 1 : e.x2,
			a = null == e.y ? 0 : e.y,
			o = null == e.y2 ? 0 : e.y2;
		e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
		var s = t.createLinearGradient(i, a, r, o);
		return s
	}

	function gn(t, e, n) {
		var i = n.width,
			r = n.height,
			a = Math.min(i, r),
			o = null == e.x ? .5 : e.x,
			s = null == e.y ? .5 : e.y,
			l = null == e.r ? .5 : e.r;
		e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
		var h = t.createRadialGradient(o, s, 0, o, s, l);
		return h
	}

	function vn() {
		return !1
	}

	function mn(t, e, n) {
		var i = bf(),
			r = e.getWidth(),
			a = e.getHeight(),
			o = i.style;
		return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
	}

	function yn(t) {
		if("string" == typeof t) {
			var e = Dp.get(t);
			return e && e.image
		}
		return t
	}

	function xn(t, e, n, i, r) {
		if(t) {
			if("string" == typeof t) {
				if(e && e.__zrImageSrc === t || !n) return e;
				var a = Dp.get(t),
					o = {
						hostEl: n,
						cb: i,
						cbPayload: r
					};
				return a ? (e = a.image, !wn(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = _n, Dp.put(t, e.__cachedImgObj = {
					image: e,
					pending: [o]
				}), e.src = e.__zrImageSrc = t), e
			}
			return t
		}
		return e
	}

	function _n() {
		var t = this.__cachedImgObj;
		this.onload = this.__cachedImgObj = null;
		for(var e = 0; e < t.pending.length; e++) {
			var n = t.pending[e],
				i = n.cb;
			i && i(this, n.cbPayload), n.hostEl.dirty()
		}
		t.pending.length = 0
	}

	function wn(t) {
		return t && t.width && t.height
	}

	function bn(t, e) {
		e = e || Op;
		var n = t + ":" + e;
		if(Ap[n]) return Ap[n];
		for(var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Bn(i[a], e).width, r);
		return kp > Pp && (kp = 0, Ap = {}), kp++, Ap[n] = r, r
	}

	function Sn(t, e, n, i, r, a, o) {
		return a ? In(t, e, n, i, r, a, o) : Mn(t, e, n, i, r, o)
	}

	function Mn(t, e, n, i, r, a) {
		var o = En(t, e, r, a),
			s = bn(t, e);
		r && (s += r[1] + r[3]);
		var l = o.outerHeight,
			h = Tn(0, s, n),
			u = Cn(0, l, i),
			c = new rn(h, u, s, l);
		return c.lineHeight = o.lineHeight, c
	}

	function In(t, e, n, i, r, a, o) {
		var s = Nn(t, {
				rich: a,
				truncate: o,
				font: e,
				textAlign: n,
				textPadding: r
			}),
			l = s.outerWidth,
			h = s.outerHeight,
			u = Tn(0, l, n),
			c = Cn(0, h, i);
		return new rn(u, c, l, h)
	}

	function Tn(t, e, n) {
		return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
	}

	function Cn(t, e, n) {
		return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
	}

	function Dn(t, e, n) {
		var i = e.x,
			r = e.y,
			a = e.height,
			o = e.width,
			s = a / 2,
			l = "left",
			h = "top";
		switch(t) {
			case "left":
				i -= n, r += s, l = "right", h = "middle";
				break;
			case "right":
				i += n + o, r += s, h = "middle";
				break;
			case "top":
				i += o / 2, r -= n, l = "center", h = "bottom";
				break;
			case "bottom":
				i += o / 2, r += a + n, l = "center";
				break;
			case "inside":
				i += o / 2, r += s, l = "center", h = "middle";
				break;
			case "insideLeft":
				i += n, r += s, h = "middle";
				break;
			case "insideRight":
				i += o - n, r += s, l = "right", h = "middle";
				break;
			case "insideTop":
				i += o / 2, r += n, l = "center";
				break;
			case "insideBottom":
				i += o / 2, r += a - n, l = "center", h = "bottom";
				break;
			case "insideTopLeft":
				i += n, r += n;
				break;
			case "insideTopRight":
				i += o - n, r += n, l = "right";
				break;
			case "insideBottomLeft":
				i += n, r += a - n, h = "bottom";
				break;
			case "insideBottomRight":
				i += o - n, r += a - n, l = "right", h = "bottom"
		}
		return {
			x: i,
			y: r,
			textAlign: l,
			textVerticalAlign: h
		}
	}

	function An(t, e, n, i, r) {
		if(!e) return "";
		var a = (t + "").split("\n");
		r = kn(e, n, i, r);
		for(var o = 0, s = a.length; s > o; o++) a[o] = Pn(a[o], r);
		return a.join("\n")
	}

	function kn(t, e, n, i) {
		i = o({}, i), i.font = e;
		var n = A(n, "...");
		i.maxIterations = A(i.maxIterations, 2);
		var r = i.minChar = A(i.minChar, 0);
		i.cnCharWidth = bn("国", e);
		var a = i.ascCharWidth = bn("a", e);
		i.placeholder = A(i.placeholder, "");
		for(var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
		var h = bn(n);
		return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
	}

	function Pn(t, e) {
		var n = e.containerWidth,
			i = e.font,
			r = e.contentWidth;
		if(!n) return "";
		var a = bn(t, i);
		if(n >= a) return t;
		for(var o = 0;; o++) {
			if(r >= a || o >= e.maxIterations) {
				t += e.ellipsis;
				break
			}
			var s = 0 === o ? Ln(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
			t = t.substr(0, s), a = bn(t, i)
		}
		return "" === t && (t = e.placeholder), t
	}

	function Ln(t, e, n, i) {
		for(var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
			var s = t.charCodeAt(a);
			r += s >= 0 && 127 >= s ? n : i
		}
		return a
	}

	function On(t) {
		return bn("国", t)
	}

	function Bn(t, e) {
		return Bp.measureText(t, e)
	}

	function En(t, e, n, i) {
		null != t && (t += "");
		var r = On(e),
			a = t ? t.split("\n") : [],
			o = a.length * r,
			s = o;
		if(n && (s += n[0] + n[2]), t && i) {
			var l = i.outerHeight,
				h = i.outerWidth;
			if(null != l && s > l) t = "", a = [];
			else if(null != h)
				for(var u = kn(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
						minChar: i.minChar,
						placeholder: i.placeholder
					}), c = 0, d = a.length; d > c; c++) a[c] = Pn(a[c], u)
		}
		return {
			lines: a,
			height: o,
			outerHeight: s,
			lineHeight: r
		}
	}

	function Nn(t, e) {
		var n = {
			lines: [],
			width: 0,
			height: 0
		};
		if(null != t && (t += ""), !t) return n;
		for(var i, r = Lp.lastIndex = 0; null != (i = Lp.exec(t));) {
			var a = i.index;
			a > r && Rn(n, t.substring(r, a)), Rn(n, i[2], i[1]), r = Lp.lastIndex
		}
		r < t.length && Rn(n, t.substring(r, t.length));
		var o = n.lines,
			s = 0,
			l = 0,
			h = [],
			u = e.textPadding,
			c = e.truncate,
			d = c && c.outerWidth,
			f = c && c.outerHeight;
		u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
		for(var p = 0; p < o.length; p++) {
			for(var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
				var x = g.tokens[y],
					_ = x.styleName && e.rich[x.styleName] || {},
					w = x.textPadding = _.textPadding,
					b = x.font = _.font || e.font,
					S = x.textHeight = A(_.textHeight, On(b));
				if(w && (S += w[0] + w[2]), x.height = S, x.lineHeight = k(_.textLineHeight, e.textLineHeight, S), x.textAlign = _ && _.textAlign || e.textAlign, x.textVerticalAlign = _ && _.textVerticalAlign || "middle", null != f && s + x.lineHeight > f) return {
					lines: [],
					width: 0,
					height: 0
				};
				x.textWidth = bn(x.text, b);
				var M = _.textWidth,
					I = null == M || "auto" === M;
				if("string" == typeof M && "%" === M.charAt(M.length - 1)) x.percentWidth = M, h.push(x), M = 0;
				else {
					if(I) {
						M = x.textWidth;
						var T = _.textBackgroundColor,
							C = T && T.image;
						C && (C = yn(C), wn(C) && (M = Math.max(M, C.width * S / C.height)))
					}
					var D = w ? w[1] + w[3] : 0;
					M += D;
					var P = null != d ? d - m : null;
					null != P && M > P && (!I || D > P ? (x.text = "", x.textWidth = M = 0) : (x.text = An(x.text, P - D, b, c.ellipsis, {
						minChar: c.minChar
					}), x.textWidth = bn(x.text, b), M = x.textWidth + D))
				}
				m += x.width = M, _ && (v = Math.max(v, x.lineHeight))
			}
			g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
		}
		n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);
		for(var p = 0; p < h.length; p++) {
			var x = h[p],
				L = x.percentWidth;
			x.width = parseInt(L, 10) / 100 * l
		}
		return n
	}

	function Rn(t, e, n) {
		for(var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
			var s = r[o],
				l = {
					styleName: n,
					text: s,
					isLineHolder: !s && !i
				};
			if(o) a.push({
				tokens: [l]
			});
			else {
				var h = (a[a.length - 1] || (a[0] = {
						tokens: []
					})).tokens,
					u = h.length;
				1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
			}
		}
	}

	function zn(t) {
		var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
		return e && B(e) || t.textFont || t.font
	}

	function Fn(t, e) {
		var n, i, r, a, o = e.x,
			s = e.y,
			l = e.width,
			h = e.height,
			u = e.r;
		0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;
		var c;
		n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
	}

	function Vn(t) {
		return Hn(t), f(t.rich, Hn), t
	}

	function Hn(t) {
		if(t) {
			t.font = zn(t);
			var e = t.textAlign;
			"middle" === e && (e = "center"), t.textAlign = null == e || Ep[e] ? e : "left";
			var n = t.textVerticalAlign || t.textBaseline;
			"center" === n && (n = "middle"), t.textVerticalAlign = null == n || Np[n] ? n : "top";
			var i = t.textPadding;
			i && (t.textPadding = L(t.textPadding))
		}
	}

	function Gn(t, e, n, i, r) {
		i.rich ? Xn(t, e, n, i, r) : Wn(t, e, n, i, r)
	}

	function Wn(t, e, n, i, r) {
		var a = Qn(e, "font", i.font || Op),
			o = i.textPadding,
			s = t.__textCotentBlock;
		(!s || t.__dirty) && (s = t.__textCotentBlock = En(n, a, o, i.truncate));
		var l = s.outerHeight,
			h = s.lines,
			u = s.lineHeight,
			c = $n(l, i, r),
			d = c.baseX,
			f = c.baseY,
			p = c.textAlign,
			g = c.textVerticalAlign;
		jn(e, i, r, d, f);
		var v = Cn(f, l, g),
			m = d,
			y = v,
			x = qn(i);
		if(x || o) {
			var _ = bn(n, a),
				w = _;
			o && (w += o[1] + o[3]);
			var b = Tn(d, w, p);
			x && Zn(t, e, i, b, v, w, l), o && (m = ni(d, p, o), y += o[0])
		}
		Qn(e, "textAlign", p || "left"), Qn(e, "textBaseline", "middle"), Qn(e, "shadowBlur", i.textShadowBlur || 0), Qn(e, "shadowColor", i.textShadowColor || "transparent"), Qn(e, "shadowOffsetX", i.textShadowOffsetX || 0), Qn(e, "shadowOffsetY", i.textShadowOffsetY || 0), y += u / 2;
		var S = i.textStrokeWidth,
			M = Jn(i.textStroke, S),
			I = ti(i.textFill);
		M && (Qn(e, "lineWidth", S), Qn(e, "strokeStyle", M)), I && Qn(e, "fillStyle", I);
		for(var T = 0; T < h.length; T++) M && e.strokeText(h[T], m, y), I && e.fillText(h[T], m, y), y += u
	}

	function Xn(t, e, n, i, r) {
		var a = t.__textCotentBlock;
		(!a || t.__dirty) && (a = t.__textCotentBlock = Nn(n, i)), Yn(t, e, a, i, r)
	}

	function Yn(t, e, n, i, r) {
		var a = n.width,
			o = n.outerWidth,
			s = n.outerHeight,
			l = i.textPadding,
			h = $n(s, i, r),
			u = h.baseX,
			c = h.baseY,
			d = h.textAlign,
			f = h.textVerticalAlign;
		jn(e, i, r, u, c);
		var p = Tn(u, o, d),
			g = Cn(c, s, f),
			v = p,
			m = g;
		l && (v += l[3], m += l[0]);
		var y = v + a;
		qn(i) && Zn(t, e, i, p, g, o, s);
		for(var x = 0; x < n.lines.length; x++) {
			for(var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, D = y, A = S - 1; S > T && (_ = b[T], !_.textAlign || "left" === _.textAlign);) Un(t, e, _, i, M, m, C, "left"), I -= _.width, C += _.width, T++;
			for(; A >= 0 && (_ = b[A], "right" === _.textAlign);) Un(t, e, _, i, M, m, D, "right"), I -= _.width, D -= _.width, A--;
			for(C += (a - (C - v) - (y - D) - I) / 2; A >= T;) _ = b[T], Un(t, e, _, i, M, m, C + _.width / 2, "center"), C += _.width, T++;
			m += M
		}
	}

	function jn(t, e, n, i, r) {
		if(n && e.textRotation) {
			var a = e.textOrigin;
			"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
		}
	}

	function Un(t, e, n, i, r, a, o, s) {
		var l = i.rich[n.styleName] || {},
			h = n.textVerticalAlign,
			u = a + r / 2;
		"top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && qn(l) && Zn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
		var c = n.textPadding;
		c && (o = ni(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), Qn(e, "shadowBlur", k(l.textShadowBlur, i.textShadowBlur, 0)), Qn(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Qn(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Qn(e, "shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Qn(e, "textAlign", s), Qn(e, "textBaseline", "middle"), Qn(e, "font", n.font || Op);
		var d = Jn(l.textStroke || i.textStroke, p),
			f = ti(l.textFill || i.textFill),
			p = A(l.textStrokeWidth, i.textStrokeWidth);
		d && (Qn(e, "lineWidth", p), Qn(e, "strokeStyle", d), e.strokeText(n.text, o, u)), f && (Qn(e, "fillStyle", f), e.fillText(n.text, o, u))
	}

	function qn(t) {
		return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
	}

	function Zn(t, e, n, i, r, a, o) {
		var s = n.textBackgroundColor,
			l = n.textBorderWidth,
			h = n.textBorderColor,
			u = b(s);
		if(Qn(e, "shadowBlur", n.textBoxShadowBlur || 0), Qn(e, "shadowColor", n.textBoxShadowColor || "transparent"), Qn(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Qn(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
			e.beginPath();
			var c = n.textBorderRadius;
			c ? Fn(e, {
				x: i,
				y: r,
				width: a,
				height: o,
				r: c
			}) : e.rect(i, r, a, o), e.closePath()
		}
		if(u) Qn(e, "fillStyle", s), e.fill();
		else if(S(s)) {
			var d = s.image;
			d = xn(d, null, t, Kn, s), d && wn(d) && e.drawImage(d, i, r, a, o)
		}
		l && h && (Qn(e, "lineWidth", l), Qn(e, "strokeStyle", h), e.stroke())
	}

	function Kn(t, e) {
		e.image = t
	}

	function $n(t, e, n) {
		var i = e.x || 0,
			r = e.y || 0,
			a = e.textAlign,
			o = e.textVerticalAlign;
		if(n) {
			var s = e.textPosition;
			if(s instanceof Array) i = n.x + ei(s[0], n.width), r = n.y + ei(s[1], n.height);
			else {
				var l = Dn(s, n, e.textDistance);
				i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
			}
			var h = e.textOffset;
			h && (i += h[0], r += h[1])
		}
		return {
			baseX: i,
			baseY: r,
			textAlign: a,
			textVerticalAlign: o
		}
	}

	function Qn(t, e, n) {
		return t[e] = xp(t, e, n), t[e]
	}

	function Jn(t, e) {
		return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
	}

	function ti(t) {
		return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
	}

	function ei(t, e) {
		return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
	}

	function ni(t, e, n) {
		return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
	}

	function ii(t, e) {
		return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
	}

	function ri(t) {
		t = t || {}, up.call(this, t);
		for(var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
		this.style = new wp(t.style, this), this._rect = null, this.__clipPaths = []
	}

	function ai(t) {
		ri.call(this, t)
	}

	function oi(t) {
		return parseInt(t, 10)
	}

	function si(t) {
		return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
	}

	function li(t, e, n) {
		return Wp.copy(t.getBoundingRect()), t.transform && Wp.applyTransform(t.transform), Xp.width = e, Xp.height = n, !Wp.intersect(Xp)
	}

	function hi(t, e) {
		if(t == e) return !1;
		if(!t || !e || t.length !== e.length) return !0;
		for(var n = 0; n < t.length; n++)
			if(t[n] !== e[n]) return !0
	}

	function ui(t, e) {
		for(var n = 0; n < t.length; n++) {
			var i = t[n];
			i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
		}
	}

	function ci(t, e) {
		var n = document.createElement("div");
		return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
	}

	function di(t) {
		return t.getBoundingClientRect ? t.getBoundingClientRect() : {
			left: 0,
			top: 0
		}
	}

	function fi(t, e, n, i) {
		return n = n || {}, i || !cf.canvasSupported ? pi(t, e, n) : cf.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : pi(t, e, n), n
	}

	function pi(t, e, n) {
		var i = di(t);
		n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
	}

	function gi(t, e, n) {
		if(e = e || window.event, null != e.zrX) return e;
		var i = e.type,
			r = i && i.indexOf("touch") >= 0;
		if(r) {
			var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
			a && fi(t, a, e, n)
		} else fi(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		var o = e.button;
		return null == e.which && void 0 !== o && Up.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
	}

	function vi(t, e, n) {
		jp ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
	}

	function mi(t, e, n) {
		jp ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
	}

	function yi(t) {
		var e = t[1][0] - t[0][0],
			n = t[1][1] - t[0][1];
		return Math.sqrt(e * e + n * n)
	}

	function xi(t) {
		return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
	}

	function _i(t) {
		return "mousewheel" === t && cf.browser.firefox ? "DOMMouseScroll" : t
	}

	function wi(t, e, n) {
		var i = t._gestureMgr;
		"start" === n && i.clear();
		var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
		if("end" === n && i.clear(), r) {
			var a = r.type;
			e.gestureEvent = a, t.handler.dispatchToElement({
				target: r.target
			}, a, r.event)
		}
	}

	function bi(t) {
		t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
			t._touching = !1
		}, 700)
	}

	function Si(t) {
		var e = t.pointerType;
		return "pen" === e || "touch" === e
	}

	function Mi(t) {
		function e(t, e) {
			return function() {
				return e._touching ? void 0 : t.apply(e, arguments)
			}
		}
		f(tg, function(e) {
			t._handlers[e] = y(ig[e], t)
		}), f(ng, function(e) {
			t._handlers[e] = y(ig[e], t)
		}), f(Jp, function(n) {
			t._handlers[n] = e(ig[n], t)
		})
	}

	function Ii(t) {
		function e(e, n) {
			f(e, function(e) {
				vi(t, _i(e), n._handlers[e])
			}, n)
		}
		Of.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Kp, this._handlers = {}, Mi(this), cf.pointerEventsSupported ? e(ng, this) : (cf.touchEventsSupported && e(tg, this), e(Jp, this))
	}

	function Ti(t, e) {
		var n = new hg(hf(), t, e);
		return sg[n.id] = n, n
	}

	function Ci(t) {
		if(t) t.dispose();
		else {
			for(var e in sg) sg.hasOwnProperty(e) && sg[e].dispose();
			sg = {}
		}
		return this
	}

	function Di(t) {
		return sg[t]
	}

	function Ai(t, e) {
		og[t] = e
	}

	function ki(t) {
		delete sg[t]
	}

	function Pi(t) {
		return t instanceof Array ? t : null == t ? [] : [t]
	}

	function Li(t, e, n) {
		if(t) {
			t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
			for(var i = 0, r = n.length; r > i; i++) {
				var a = n[i];
				!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
			}
		}
	}

	function Oi(t) {
		return !dg(t) || fg(t) || t instanceof Date ? t : t.value
	}

	function Bi(t) {
		return dg(t) && !(t instanceof Array)
	}

	function Ei(t, e) {
		e = (e || []).slice();
		var n = p(t || [], function(t) {
			return {
				exist: t
			}
		});
		return cg(e, function(t, i) {
			if(dg(t)) {
				for(var r = 0; r < n.length; r++)
					if(!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
				for(var r = 0; r < n.length; r++) {
					var a = n[r].exist;
					if(!(n[r].option || null != a.id && null != t.id || null == t.name || zi(t) || zi(a) || a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
				}
			}
		}), cg(e, function(t) {
			if(dg(t)) {
				for(var e = 0; e < n.length; e++) {
					var i = n[e].exist;
					if(!n[e].option && !zi(i) && null == t.id) {
						n[e].option = t;
						break
					}
				}
				e >= n.length && n.push({
					option: t
				})
			}
		}), n
	}

	function Ni(t) {
		var e = z();
		cg(t, function(t) {
			var n = t.exist;
			n && e.set(n.id, t)
		}), cg(t, function(t) {
			var n = t.option;
			O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
		}), cg(t, function(t, n) {
			var i = t.exist,
				r = t.option,
				a = t.keyInfo;
			if(dg(r)) {
				if(a.name = null != r.name ? r.name + "" : i ? i.name : pg + n, i) a.id = i.id;
				else if(null != r.id) a.id = r.id + "";
				else {
					var o = 0;
					do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
				}
				e.set(a.id, t)
			}
		})
	}

	function Ri(t) {
		var e = t.name;
		return !(!e || !e.indexOf(pg))
	}

	function zi(t) {
		return dg(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
	}

	function Fi(t, e) {
		return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function(e) {
			return t.indexOfRawIndex(e)
		}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function(e) {
			return t.indexOfName(e)
		}) : t.indexOfName(e.name) : void 0
	}

	function Vi() {
		var t = "__\x00ec_inner_" + vg++ + "_" + Math.random().toFixed(5);
		return function(e) {
			return e[t] || (e[t] = {})
		}
	}

	function Hi(t, e, n) {
		if(b(e)) {
			var i = {};
			i[e + "Index"] = 0, e = i
		}
		var r = n && n.defaultMainType;
		!r || Gi(e, r + "Index") || Gi(e, r + "Id") || Gi(e, r + "Name") || (e[r + "Index"] = 0);
		var a = {};
		return cg(e, function(i, r) {
			var i = e[r];
			if("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
			var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
				s = o[1],
				l = (o[2] || "").toLowerCase();
			if(!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && h(n.includeMainTypes, s) < 0)) {
				var u = {
					mainType: s
				};
				("index" !== l || "all" !== i) && (u[l] = i);
				var c = t.queryComponents(u);
				a[s + "Models"] = c, a[s + "Model"] = c[0]
			}
		}), a
	}

	function Gi(t, e) {
		return t && t.hasOwnProperty(e)
	}

	function Wi(t, e, n) {
		t.setAttribute ? t.setAttribute(e, n) : t[e] = n
	}

	function Xi(t, e) {
		return t.getAttribute ? t.getAttribute(e) : t[e]
	}

	function Yi(t) {
		var e = {
			main: "",
			sub: ""
		};
		return t && (t = t.split(mg), e.main = t[0] || "", e.sub = t[1] || ""), e
	}

	function ji(t) {
		O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
	}

	function Ui(t) {
		t.$constructor = t, t.extend = function(t) {
			var e = this,
				n = function() {
					t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
				};
			return o(n.prototype, t), n.extend = this.extend, n.superCall = Zi, n.superApply = Ki, u(n, this), n.superClass = e, n
		}
	}

	function qi(t) {
		var e = ["__\x00is_clz", xg++, Math.random().toFixed(3)].join("_");
		t.prototype[e] = !0, t.isInstance = function(t) {
			return !(!t || !t[e])
		}
	}

	function Zi(t, e) {
		var n = P(arguments, 2);
		return this.superClass.prototype[e].apply(t, n)
	}

	function Ki(t, e, n) {
		return this.superClass.prototype[e].apply(t, n)
	}

	function $i(t, e) {
		function n(t) {
			var e = i[t.main];
			return e && e[yg] || (e = i[t.main] = {}, e[yg] = !0), e
		}
		e = e || {};
		var i = {};
		if(t.registerClass = function(t, e) {
				if(e)
					if(ji(e), e = Yi(e), e.sub) {
						if(e.sub !== yg) {
							var r = n(e);
							r[e.sub] = t
						}
					} else i[e.main] = t;
				return t
			}, t.getClass = function(t, e, n) {
				var r = i[t];
				if(r && r[yg] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
				return r
			}, t.getClassesByMainType = function(t) {
				t = Yi(t);
				var e = [],
					n = i[t.main];
				return n && n[yg] ? f(n, function(t, n) {
					n !== yg && e.push(t)
				}) : e.push(n), e
			}, t.hasClass = function(t) {
				return t = Yi(t), !!i[t.main]
			}, t.getAllClassMainTypes = function() {
				var t = [];
				return f(i, function(e, n) {
					t.push(n)
				}), t
			}, t.hasSubTypes = function(t) {
				t = Yi(t);
				var e = i[t.main];
				return e && e[yg]
			}, t.parseClassType = Yi, e.registerWhenExtend) {
			var r = t.extend;
			r && (t.extend = function(e) {
				var n = r.call(this, e);
				return t.registerClass(n, e.type)
			})
		}
		return t
	}

	function Qi(t) {
		return t > -Cg && Cg > t
	}

	function Ji(t) {
		return t > Cg || -Cg > t
	}

	function tr(t, e, n, i, r) {
		var a = 1 - r;
		return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
	}

	function er(t, e, n, i, r) {
		var a = 1 - r;
		return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
	}

	function nr(t, e, n, i, r, a) {
		var o = i + 3 * (e - n) - t,
			s = 3 * (n - 2 * e + t),
			l = 3 * (e - t),
			h = t - r,
			u = s * s - 3 * o * l,
			c = s * l - 9 * o * h,
			d = l * l - 3 * s * h,
			f = 0;
		if(Qi(u) && Qi(c))
			if(Qi(s)) a[0] = 0;
			else {
				var p = -l / s;
				p >= 0 && 1 >= p && (a[f++] = p)
			}
		else {
			var g = c * c - 4 * u * d;
			if(Qi(g)) {
				var v = c / u,
					p = -s / o + v,
					m = -v / 2;
				p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
			} else if(g > 0) {
				var y = Tg(g),
					x = u * s + 1.5 * o * (-c + y),
					_ = u * s + 1.5 * o * (-c - y);
				x = 0 > x ? -Ig(-x, kg) : Ig(x, kg), _ = 0 > _ ? -Ig(-_, kg) : Ig(_, kg);
				var p = (-s - (x + _)) / (3 * o);
				p >= 0 && 1 >= p && (a[f++] = p)
			} else {
				var w = (2 * u * s - 3 * o * c) / (2 * Tg(u * u * u)),
					b = Math.acos(w) / 3,
					S = Tg(u),
					M = Math.cos(b),
					p = (-s - 2 * S * M) / (3 * o),
					m = (-s + S * (M + Ag * Math.sin(b))) / (3 * o),
					I = (-s + S * (M - Ag * Math.sin(b))) / (3 * o);
				p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I)
			}
		}
		return f
	}

	function ir(t, e, n, i, r) {
		var a = 6 * n - 12 * e + 6 * t,
			o = 9 * e + 3 * i - 3 * t - 9 * n,
			s = 3 * e - 3 * t,
			l = 0;
		if(Qi(o)) {
			if(Ji(a)) {
				var h = -s / a;
				h >= 0 && 1 >= h && (r[l++] = h)
			}
		} else {
			var u = a * a - 4 * o * s;
			if(Qi(u)) r[0] = -a / (2 * o);
			else if(u > 0) {
				var c = Tg(u),
					h = (-a + c) / (2 * o),
					d = (-a - c) / (2 * o);
				h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
			}
		}
		return l
	}

	function rr(t, e, n, i, r, a) {
		var o = (e - t) * r + t,
			s = (n - e) * r + e,
			l = (i - n) * r + n,
			h = (s - o) * r + o,
			u = (l - s) * r + s,
			c = (u - h) * r + h;
		a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i
	}

	function ar(t, e, n, i, r, a, o, s, l, h, u) {
		var c, d, f, p, g, v = .005,
			m = 1 / 0;
		Pg[0] = l, Pg[1] = h;
		for(var y = 0; 1 > y; y += .05) Lg[0] = tr(t, n, r, o, y), Lg[1] = tr(e, i, a, s, y), p = kf(Pg, Lg), m > p && (c = y, m = p);
		m = 1 / 0;
		for(var x = 0; 32 > x && !(Dg > v); x++) d = c - v, f = c + v, Lg[0] = tr(t, n, r, o, d), Lg[1] = tr(e, i, a, s, d), p = kf(Lg, Pg), d >= 0 && m > p ? (c = d, m = p) : (Og[0] = tr(t, n, r, o, f), Og[1] = tr(e, i, a, s, f), g = kf(Og, Pg), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
		return u && (u[0] = tr(t, n, r, o, c), u[1] = tr(e, i, a, s, c)), Tg(m)
	}

	function or(t, e, n, i) {
		var r = 1 - i;
		return r * (r * t + 2 * i * e) + i * i * n
	}

	function sr(t, e, n, i) {
		return 2 * ((1 - i) * (e - t) + i * (n - e))
	}

	function lr(t, e, n, i, r) {
		var a = t - 2 * e + n,
			o = 2 * (e - t),
			s = t - i,
			l = 0;
		if(Qi(a)) {
			if(Ji(o)) {
				var h = -s / o;
				h >= 0 && 1 >= h && (r[l++] = h)
			}
		} else {
			var u = o * o - 4 * a * s;
			if(Qi(u)) {
				var h = -o / (2 * a);
				h >= 0 && 1 >= h && (r[l++] = h)
			} else if(u > 0) {
				var c = Tg(u),
					h = (-o + c) / (2 * a),
					d = (-o - c) / (2 * a);
				h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
			}
		}
		return l
	}

	function hr(t, e, n) {
		var i = t + n - 2 * e;
		return 0 === i ? .5 : (t - e) / i
	}

	function ur(t, e, n, i, r) {
		var a = (e - t) * i + t,
			o = (n - e) * i + e,
			s = (o - a) * i + a;
		r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
	}

	function cr(t, e, n, i, r, a, o, s, l) {
		var h, u = .005,
			c = 1 / 0;
		Pg[0] = o, Pg[1] = s;
		for(var d = 0; 1 > d; d += .05) {
			Lg[0] = or(t, n, r, d), Lg[1] = or(e, i, a, d);
			var f = kf(Pg, Lg);
			c > f && (h = d, c = f)
		}
		c = 1 / 0;
		for(var p = 0; 32 > p && !(Dg > u); p++) {
			var g = h - u,
				v = h + u;
			Lg[0] = or(t, n, r, g), Lg[1] = or(e, i, a, g);
			var f = kf(Lg, Pg);
			if(g >= 0 && c > f) h = g, c = f;
			else {
				Og[0] = or(t, n, r, v), Og[1] = or(e, i, a, v);
				var m = kf(Og, Pg);
				1 >= v && c > m ? (h = v, c = m) : u *= .5
			}
		}
		return l && (l[0] = or(t, n, r, h), l[1] = or(e, i, a, h)), Tg(c)
	}

	function dr(t, e, n) {
		if(0 !== t.length) {
			var i, r = t[0],
				a = r[0],
				o = r[0],
				s = r[1],
				l = r[1];
			for(i = 1; i < t.length; i++) r = t[i], a = Bg(a, r[0]), o = Eg(o, r[0]), s = Bg(s, r[1]), l = Eg(l, r[1]);
			e[0] = a, e[1] = s, n[0] = o, n[1] = l
		}
	}

	function fr(t, e, n, i, r, a) {
		r[0] = Bg(t, n), r[1] = Bg(e, i), a[0] = Eg(t, n), a[1] = Eg(e, i)
	}

	function pr(t, e, n, i, r, a, o, s, l, h) {
		var u, c = ir,
			d = tr,
			f = c(t, n, r, o, Gg);
		for(l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
			var p = d(t, n, r, o, Gg[u]);
			l[0] = Bg(p, l[0]), h[0] = Eg(p, h[0])
		}
		for(f = c(e, i, a, s, Wg), u = 0; f > u; u++) {
			var g = d(e, i, a, s, Wg[u]);
			l[1] = Bg(g, l[1]), h[1] = Eg(g, h[1])
		}
		l[0] = Bg(t, l[0]), h[0] = Eg(t, h[0]), l[0] = Bg(o, l[0]), h[0] = Eg(o, h[0]), l[1] = Bg(e, l[1]), h[1] = Eg(e, h[1]), l[1] = Bg(s, l[1]), h[1] = Eg(s, h[1])
	}

	function gr(t, e, n, i, r, a, o, s) {
		var l = hr,
			h = or,
			u = Eg(Bg(l(t, n, r), 1), 0),
			c = Eg(Bg(l(e, i, a), 1), 0),
			d = h(t, n, r, u),
			f = h(e, i, a, c);
		o[0] = Bg(t, r, d), o[1] = Bg(e, a, f), s[0] = Eg(t, r, d), s[1] = Eg(e, a, f)
	}

	function vr(t, e, n, i, r, a, o, s, l) {
		var h = oe,
			u = se,
			c = Math.abs(r - a);
		if(1e-4 > c % zg && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
		if(Fg[0] = Rg(r) * n + t, Fg[1] = Ng(r) * i + e, Vg[0] = Rg(a) * n + t, Vg[1] = Ng(a) * i + e, h(s, Fg, Vg), u(l, Fg, Vg), r %= zg, 0 > r && (r += zg), a %= zg, 0 > a && (a += zg), r > a && !o ? a += zg : a > r && o && (r += zg), o) {
			var d = a;
			a = r, r = d
		}
		for(var f = 0; a > f; f += Math.PI / 2) f > r && (Hg[0] = Rg(f) * n + t, Hg[1] = Ng(f) * i + e, h(s, Hg, s), u(l, Hg, l))
	}

	function mr(t, e, n, i, r, a, o) {
		if(0 === r) return !1;
		var s = r,
			l = 0,
			h = t;
		if(o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
		if(t === n) return Math.abs(a - t) <= s / 2;
		l = (e - i) / (t - n), h = (t * i - n * e) / (t - n);
		var u = l * a - o + h,
			c = u * u / (l * l + 1);
		return s / 2 * s / 2 >= c
	}

	function yr(t, e, n, i, r, a, o, s, l, h, u) {
		if(0 === l) return !1;
		var c = l;
		if(u > e + c && u > i + c && u > a + c && u > s + c || e - c > u && i - c > u && a - c > u && s - c > u || h > t + c && h > n + c && h > r + c && h > o + c || t - c > h && n - c > h && r - c > h && o - c > h) return !1;
		var d = ar(t, e, n, i, r, a, o, s, h, u, null);
		return c / 2 >= d
	}

	function xr(t, e, n, i, r, a, o, s, l) {
		if(0 === o) return !1;
		var h = o;
		if(l > e + h && l > i + h && l > a + h || e - h > l && i - h > l && a - h > l || s > t + h && s > n + h && s > r + h || t - h > s && n - h > s && r - h > s) return !1;
		var u = cr(t, e, n, i, r, a, s, l, null);
		return h / 2 >= u
	}

	function _r(t) {
		return t %= iv, 0 > t && (t += iv), t
	}

	function wr(t, e, n, i, r, a, o, s, l) {
		if(0 === o) return !1;
		var h = o;
		s -= t, l -= e;
		var u = Math.sqrt(s * s + l * l);
		if(u - h > n || n > u + h) return !1;
		if(Math.abs(i - r) % rv < 1e-4) return !0;
		if(a) {
			var c = i;
			i = _r(r), r = _r(c)
		} else i = _r(i), r = _r(r);
		i > r && (r += rv);
		var d = Math.atan2(l, s);
		return 0 > d && (d += rv), d >= i && r >= d || d + rv >= i && r >= d + rv
	}

	function br(t, e, n, i, r, a) {
		if(a > e && a > i || e > a && i > a) return 0;
		if(i === e) return 0;
		var o = e > i ? 1 : -1,
			s = (a - e) / (i - e);
		(1 === s || 0 === s) && (o = e > i ? .5 : -.5);
		var l = s * (n - t) + t;
		return l === r ? 1 / 0 : l > r ? o : 0
	}

	function Sr(t, e) {
		return Math.abs(t - e) < sv
	}

	function Mr() {
		var t = hv[0];
		hv[0] = hv[1], hv[1] = t
	}

	function Ir(t, e, n, i, r, a, o, s, l, h) {
		if(h > e && h > i && h > a && h > s || e > h && i > h && a > h && s > h) return 0;
		var u = nr(e, i, a, s, h, lv);
		if(0 === u) return 0;
		for(var c, d, f = 0, p = -1, g = 0; u > g; g++) {
			var v = lv[g],
				m = 0 === v || 1 === v ? .5 : 1,
				y = tr(t, n, r, o, v);
			l > y || (0 > p && (p = ir(e, i, a, s, hv), hv[1] < hv[0] && p > 1 && Mr(), c = tr(e, i, a, s, hv[0]), p > 1 && (d = tr(e, i, a, s, hv[1]))), f += 2 == p ? v < hv[0] ? e > c ? m : -m : v < hv[1] ? c > d ? m : -m : d > s ? m : -m : v < hv[0] ? e > c ? m : -m : c > s ? m : -m)
		}
		return f
	}

	function Tr(t, e, n, i, r, a, o, s) {
		if(s > e && s > i && s > a || e > s && i > s && a > s) return 0;
		var l = lr(e, i, a, s, lv);
		if(0 === l) return 0;
		var h = hr(e, i, a);
		if(h >= 0 && 1 >= h) {
			for(var u = 0, c = or(e, i, a, h), d = 0; l > d; d++) {
				var f = 0 === lv[d] || 1 === lv[d] ? .5 : 1,
					p = or(t, n, r, lv[d]);
				o > p || (u += lv[d] < h ? e > c ? f : -f : c > a ? f : -f)
			}
			return u
		}
		var f = 0 === lv[0] || 1 === lv[0] ? .5 : 1,
			p = or(t, n, r, lv[0]);
		return o > p ? 0 : e > a ? f : -f
	}

	function Cr(t, e, n, i, r, a, o, s) {
		if(s -= e, s > n || -n > s) return 0;
		var l = Math.sqrt(n * n - s * s);
		lv[0] = -l, lv[1] = l;
		var h = Math.abs(i - r);
		if(1e-4 > h) return 0;
		if(1e-4 > h % ov) {
			i = 0, r = ov;
			var u = a ? 1 : -1;
			return o >= lv[0] + t && o <= lv[1] + t ? u : 0
		}
		if(a) {
			var l = i;
			i = _r(r), r = _r(l)
		} else i = _r(i), r = _r(r);
		i > r && (r += ov);
		for(var c = 0, d = 0; 2 > d; d++) {
			var f = lv[d];
			if(f + t > o) {
				var p = Math.atan2(s, f),
					u = a ? 1 : -1;
				0 > p && (p = ov + p), (p >= i && r >= p || p + ov >= i && r >= p + ov) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u)
			}
		}
		return c
	}

	function Dr(t, e, n, i, r) {
		for(var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
			var c = t[u++];
			switch(c === av.M && u > 1 && (n || (a += br(o, s, l, h, i, r))), 1 == u && (o = t[u], s = t[u + 1], l = o, h = s), c) {
				case av.M:
					l = t[u++], h = t[u++], o = l, s = h;
					break;
				case av.L:
					if(n) {
						if(mr(o, s, t[u], t[u + 1], e, i, r)) return !0
					} else a += br(o, s, t[u], t[u + 1], i, r) || 0;
					o = t[u++], s = t[u++];
					break;
				case av.C:
					if(n) {
						if(yr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
					} else a += Ir(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
					o = t[u++], s = t[u++];
					break;
				case av.Q:
					if(n) {
						if(xr(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
					} else a += Tr(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
					o = t[u++], s = t[u++];
					break;
				case av.A:
					var d = t[u++],
						f = t[u++],
						p = t[u++],
						g = t[u++],
						v = t[u++],
						m = t[u++],
						y = (t[u++], 1 - t[u++]),
						x = Math.cos(v) * p + d,
						_ = Math.sin(v) * g + f;
					u > 1 ? a += br(o, s, x, _, i, r) : (l = x, h = _);
					var w = (i - d) * g / p + d;
					if(n) {
						if(wr(d, f, g, v, v + m, y, e, w, r)) return !0
					} else a += Cr(d, f, g, v, v + m, y, w, r);
					o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
					break;
				case av.R:
					l = o = t[u++], h = s = t[u++];
					var b = t[u++],
						S = t[u++],
						x = l + b,
						_ = h + S;
					if(n) {
						if(mr(l, h, x, h, e, i, r) || mr(x, h, x, _, e, i, r) || mr(x, _, l, _, e, i, r) || mr(l, _, l, h, e, i, r)) return !0
					} else a += br(x, h, x, _, i, r), a += br(l, _, l, h, i, r);
					break;
				case av.Z:
					if(n) {
						if(mr(o, s, l, h, e, i, r)) return !0
					} else a += br(o, s, l, h, i, r);
					o = l, s = h
			}
		}
		return n || Sr(s, h) || (a += br(o, s, l, h, i, r) || 0), 0 !== a
	}

	function Ar(t, e, n) {
		return Dr(t, 0, !1, e, n)
	}

	function kr(t, e, n, i) {
		return Dr(t, e, !0, n, i)
	}

	function Pr(t) {
		ri.call(this, t), this.path = null
	}

	function Lr(t, e, n, i, r, a, o, s, l, h, u) {
		var c = l * (bv / 180),
			d = wv(c) * (t - n) / 2 + _v(c) * (e - i) / 2,
			f = -1 * _v(c) * (t - n) / 2 + wv(c) * (e - i) / 2,
			p = d * d / (o * o) + f * f / (s * s);
		p > 1 && (o *= xv(p), s *= xv(p));
		var g = (r === a ? -1 : 1) * xv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
			v = g * o * f / s,
			m = g * -s * d / o,
			y = (t + n) / 2 + wv(c) * v - _v(c) * m,
			x = (e + i) / 2 + _v(c) * v + wv(c) * m,
			_ = Iv([1, 0], [(d - v) / o, (f - m) / s]),
			w = [(d - v) / o, (f - m) / s],
			b = [(-1 * d - v) / o, (-1 * f - m) / s],
			S = Iv(w, b);
		Mv(w, b) <= -1 && (S = bv), Mv(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * bv), 1 === a && 0 > S && (S += 2 * bv), u.addData(h, y, x, o, s, _, S, c, a)
	}

	function Or(t) {
		if(!t) return [];
		var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
		for(e = 0; e < yv.length; e++) n = n.replace(new RegExp(yv[e], "g"), "|" + yv[e]);
		var i, r = n.split("|"),
			a = 0,
			o = 0,
			s = new nv,
			l = nv.CMD;
		for(e = 1; e < r.length; e++) {
			var h, u = r[e],
				c = u.charAt(0),
				d = 0,
				f = u.slice(1).replace(/e,-/g, "e-").split(",");
			f.length > 0 && "" === f[0] && f.shift();
			for(var p = 0; p < f.length; p++) f[p] = parseFloat(f[p]);
			for(; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
				var g, v, m, y, x, _, w, b = a,
					S = o;
				switch(c) {
					case "l":
						a += f[d++], o += f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "L":
						a = f[d++], o = f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "m":
						a += f[d++], o += f[d++], h = l.M, s.addData(h, a, o), c = "l";
						break;
					case "M":
						a = f[d++], o = f[d++], h = l.M, s.addData(h, a, o), c = "L";
						break;
					case "h":
						a += f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "H":
						a = f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "v":
						o += f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "V":
						o = f[d++], h = l.L, s.addData(h, a, o);
						break;
					case "C":
						h = l.C, s.addData(h, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]), a = f[d - 2], o = f[d - 1];
						break;
					case "c":
						h = l.C, s.addData(h, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o), a += f[d - 2], o += f[d - 1];
						break;
					case "S":
						g = a, v = o;
						var M = s.len(),
							I = s.data;
						i === l.C && (g += a - I[M - 4], v += o - I[M - 3]), h = l.C, b = f[d++], S = f[d++], a = f[d++], o = f[d++], s.addData(h, g, v, b, S, a, o);
						break;
					case "s":
						g = a, v = o;
						var M = s.len(),
							I = s.data;
						i === l.C && (g += a - I[M - 4], v += o - I[M - 3]), h = l.C, b = a + f[d++], S = o + f[d++], a += f[d++], o += f[d++], s.addData(h, g, v, b, S, a, o);
						break;
					case "Q":
						b = f[d++], S = f[d++], a = f[d++], o = f[d++], h = l.Q, s.addData(h, b, S, a, o);
						break;
					case "q":
						b = f[d++] + a, S = f[d++] + o, a += f[d++], o += f[d++], h = l.Q, s.addData(h, b, S, a, o);
						break;
					case "T":
						g = a, v = o;
						var M = s.len(),
							I = s.data;
						i === l.Q && (g += a - I[M - 4], v += o - I[M - 3]), a = f[d++], o = f[d++], h = l.Q, s.addData(h, g, v, a, o);
						break;
					case "t":
						g = a, v = o;
						var M = s.len(),
							I = s.data;
						i === l.Q && (g += a - I[M - 4], v += o - I[M - 3]), a += f[d++], o += f[d++], h = l.Q, s.addData(h, g, v, a, o);
						break;
					case "A":
						m = f[d++], y = f[d++], x = f[d++], _ = f[d++], w = f[d++], b = a, S = o, a = f[d++], o = f[d++], h = l.A, Lr(b, S, a, o, _, w, m, y, x, h, s);
						break;
					case "a":
						m = f[d++], y = f[d++], x = f[d++], _ = f[d++], w = f[d++], b = a, S = o, a += f[d++], o += f[d++], h = l.A, Lr(b, S, a, o, _, w, m, y, x, h, s)
				}
			}("z" === c || "Z" === c) && (h = l.Z, s.addData(h)), i = h
		}
		return s.toStatic(), s
	}

	function Br(t, e) {
		var n = Or(t);
		return e = e || {}, e.buildPath = function(t) {
			if(t.setData) {
				t.setData(n.data);
				var e = t.getContext();
				e && t.rebuildPath(e)
			} else {
				var e = t;
				n.rebuildPath(e)
			}
		}, e.applyTransform = function(t) {
			mv(n, t), this.dirty(!0)
		}, e
	}

	function Er(t, e) {
		return new Pr(Br(t, e))
	}

	function Nr(t, e) {
		return Pr.extend(Br(t, e))
	}

	function Rr(t, e) {
		for(var n = [], i = t.length, r = 0; i > r; r++) {
			var a = t[r];
			a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
		}
		var o = new Pr(e);
		return o.createPathProxy(), o.buildPath = function(t) {
			t.appendPath(n);
			var e = t.getContext();
			e && t.rebuildPath(e)
		}, o
	}

	function zr(t, e, n, i, r, a, o) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return(2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
	}

	function Fr(t, e, n) {
		var i = e.points,
			r = e.smooth;
		if(i && i.length >= 2) {
			if(r && "spline" !== r) {
				var a = Ov(i, r, n, e.smoothConstraint);
				t.moveTo(i[0][0], i[0][1]);
				for(var o = i.length, s = 0;
					(n ? o : o - 1) > s; s++) {
					var l = a[2 * s],
						h = a[2 * s + 1],
						u = i[(s + 1) % o];
					t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
				}
			} else {
				"spline" === r && (i = Lv(i, n)), t.moveTo(i[0][0], i[0][1]);
				for(var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
			}
			n && t.closePath()
		}
	}

	function Vr(t, e, n) {
		var i = t.cpx2,
			r = t.cpy2;
		return null === i || null === r ? [(n ? er : tr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? er : tr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? sr : or)(t.x1, t.cpx1, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.y2, e)]
	}

	function Hr(t) {
		ri.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
	}

	function Gr(t) {
		return Pr.extend(t)
	}

	function Wr(t, e) {
		return Nr(t, e)
	}

	function Xr(t, e, n, i) {
		var r = Er(t, e),
			a = r.getBoundingRect();
		return n && ("center" === i && (n = jr(n, a)), Ur(r, n)), r
	}

	function Yr(t, e, n) {
		var i = new ai({
			style: {
				image: t,
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			},
			onload: function(t) {
				if("center" === n) {
					var r = {
						width: t.width,
						height: t.height
					};
					i.setStyle(jr(e, r))
				}
			}
		});
		return i
	}

	function jr(t, e) {
		var n, i = e.width / e.height,
			r = t.height * i;
		r <= t.width ? n = t.height : (r = t.width, n = r / i);
		var a = t.x + t.width / 2,
			o = t.y + t.height / 2;
		return {
			x: a - r / 2,
			y: o - n / 2,
			width: r,
			height: n
		}
	}

	function Ur(t, e) {
		if(t.applyTransform) {
			var n = t.getBoundingRect(),
				i = n.calculateTransform(e);
			t.applyTransform(i)
		}
	}

	function qr(t) {
		var e = t.shape,
			n = t.style.lineWidth;
		return jv(2 * e.x1) === jv(2 * e.x2) && (e.x1 = e.x2 = Kr(e.x1, n, !0)), jv(2 * e.y1) === jv(2 * e.y2) && (e.y1 = e.y2 = Kr(e.y1, n, !0)), t
	}

	function Zr(t) {
		var e = t.shape,
			n = t.style.lineWidth,
			i = e.x,
			r = e.y,
			a = e.width,
			o = e.height;
		return e.x = Kr(e.x, n, !0), e.y = Kr(e.y, n, !0), e.width = Math.max(Kr(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(Kr(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
	}

	function Kr(t, e, n) {
		var i = jv(2 * t);
		return(i + jv(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
	}

	function $r(t) {
		return null != t && "none" != t
	}

	function Qr(t) {
		return "string" == typeof t ? Re(t, -.1) : t
	}

	function Jr(t) {
		if(t.__hoverStlDirty) {
			var e = t.style.stroke,
				n = t.style.fill,
				i = t.__hoverStl;
			i.fill = i.fill || ($r(n) ? Qr(n) : null), i.stroke = i.stroke || ($r(e) ? Qr(e) : null);
			var r = {};
			for(var a in i) null != i[a] && (r[a] = t.style[a]);
			t.__normalStl = r, t.__hoverStlDirty = !1
		}
	}

	function ta(t) {
		if(!t.__isHover) {
			if(Jr(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);
			else {
				var e = t.style,
					n = e.insideRollbackOpt;
				n && ya(e), e.extendFrom(t.__hoverStl), n && (ma(e, e.insideOriginalTextPosition, n), null == e.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1
			}
			t.__isHover = !0
		}
	}

	function ea(t) {
		if(t.__isHover) {
			var e = t.__normalStl;
			t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
		}
	}

	function na(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && ta(t)
		}) : ta(t)
	}

	function ia(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && ea(t)
		}) : ea(t)
	}

	function ra(t, e) {
		t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Jr(t)
	}

	function aa(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && na(this)
	}

	function oa(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && ia(this)
	}

	function sa() {
		this.__isEmphasis = !0, na(this)
	}

	function la() {
		this.__isEmphasis = !1, ia(this)
	}

	function ha(t, e, n) {
		t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && ra(t, e)
		}) : ra(t, e), t.on("mouseover", aa).on("mouseout", oa), t.on("emphasis", sa).on("normal", la)
	}

	function ua(t, e, n, i, r, a, o) {
		r = r || Zv;
		var s, l = r.labelFetcher,
			h = r.labelDataIndex,
			u = r.labelDimIndex,
			c = n.getShallow("show"),
			d = i.getShallow("show");
		(c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = w(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
		var f = c ? s : null,
			p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
		(null != f || null != p) && (ca(t, n, a, r), ca(e, i, o, r, !0)), t.text = f, e.text = p
	}

	function ca(t, e, n, i, r) {
		return fa(t, e, i, r), n && o(t, n), t.host && t.host.dirty && t.host.dirty(!1), t
	}

	function da(t, e, n) {
		var i, r = {
			isRectText: !0
		};
		n === !1 ? i = !0 : r.autoColor = n, fa(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1)
	}

	function fa(t, e, n, i) {
		if(n = n || Zv, n.isRectText) {
			var r = e.getShallow("position") || (i ? null : "inside");
			"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
			var a = e.getShallow("rotate");
			null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), i ? null : 5)
		}
		var o, s = e.ecModel,
			l = s && s.option.textStyle,
			h = pa(e);
		if(h) {
			o = {};
			for(var u in h)
				if(h.hasOwnProperty(u)) {
					var c = e.getModel(["rich", u]);
					ga(o[u] = {}, c, l, n, i)
				}
		}
		return t.rich = o, ga(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
	}

	function pa(t) {
		for(var e; t && t !== t.ecModel;) {
			var n = (t.option || Zv).rich;
			if(n) {
				e = e || {};
				for(var i in n) n.hasOwnProperty(i) && (e[i] = 1)
			}
			t = t.parentModel
		}
		return e
	}

	function ga(t, e, n, i, r, a) {
		if(n = !r && n || Zv, t.textFill = va(e.getShallow("color"), i) || n.color, t.textStroke = va(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
			if(a) {
				var o = t.textPosition;
				t.insideRollback = ma(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i
			}
			null == t.textFill && (t.textFill = i.autoColor)
		}
		t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = va(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = va(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
	}

	function va(t, e) {
		return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
	}

	function ma(t, e, n) {
		var i, r = n.useInsideStyle;
		return null == t.textFill && r !== !1 && (r === !0 || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
			textFill: null,
			textStroke: t.textStroke,
			textStrokeWidth: t.textStrokeWidth
		}, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), i
	}

	function ya(t) {
		var e = t.insideRollback;
		e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
	}

	function xa(t, e) {
		var n = e || e.getModel("textStyle");
		return B([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
	}

	function _a(t, e, n, i, r, a) {
		"function" == typeof r && (a = r, r = null);
		var o = i && i.isAnimationEnabled();
		if(o) {
			var s = t ? "Update" : "",
				l = i.getShallow("animationDuration" + s),
				h = i.getShallow("animationEasing" + s),
				u = i.getShallow("animationDelay" + s);
			"function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
		} else e.stopAnimation(), e.attr(n), a && a()
	}

	function wa(t, e, n, i, r) {
		_a(!0, t, e, n, i, r)
	}

	function ba(t, e, n, i, r) {
		_a(!1, t, e, n, i, r)
	}

	function Sa(t, e) {
		for(var n = pe([]); t && t !== e;) ve(n, t.getLocalTransform(), n), t = t.parent;
		return n
	}

	function Ma(t, e, n) {
		return e && !d(e) && (e = Hf.getLocalTransform(e)), n && (e = _e([], e)), ae([], t, e)
	}

	function Ia(t, e, n) {
		var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
			r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
			a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
		return a = Ma(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
	}

	function Ta(t, e, n) {
		function i(t) {
			var e = {};
			return t.traverse(function(t) {
				!t.isGroup && t.anid && (e[t.anid] = t)
			}), e
		}

		function r(t) {
			var e = {
				position: W(t.position),
				rotation: t.rotation
			};
			return t.shape && (e.shape = o({}, t.shape)), e
		}
		if(t && e) {
			var a = i(t);
			e.traverse(function(t) {
				if(!t.isGroup && t.anid) {
					var e = a[t.anid];
					if(e) {
						var i = r(t);
						t.attr(r(e)), wa(t, i, n, t.dataIndex)
					}
				}
			})
		}
	}

	function Ca(t, e) {
		return p(t, function(t) {
			var n = t[0];
			n = Uv(n, e.x), n = qv(n, e.x + e.width);
			var i = t[1];
			return i = Uv(i, e.y), i = qv(i, e.y + e.height), [n, i]
		})
	}

	function Da(t, e) {
		var n = Uv(t.x, e.x),
			i = qv(t.x + t.width, e.x + e.width),
			r = Uv(t.y, e.y),
			a = qv(t.y + t.height, e.y + e.height);
		return i >= n && a >= r ? {
			x: n,
			y: r,
			width: i - n,
			height: a - r
		} : void 0
	}

	function Aa(t, e, n) {
		e = o({
			rectHover: !0
		}, e);
		var i = e.style = {
			strokeNoScale: !0
		};
		return n = n || {
			x: -1,
			y: -1,
			width: 2,
			height: 2
		}, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new ai(e)) : Xr(t.replace("path://", ""), e, n, "center") : void 0
	}

	function ka(t, e, n) {
		this.parentModel = e, this.ecModel = n, this.option = t
	}

	function Pa(t, e, n) {
		for(var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
		return null == t && n && (t = n.get(e)), t
	}

	function La(t, e) {
		var n = im(t).getParent;
		return n ? n.call(t, e) : t.parentModel
	}

	function Oa(t) {
		return [t || "", rm++, Math.random().toFixed(5)].join("_")
	}

	function Ba(t) {
		var e = {};
		return t.registerSubTypeDefaulter = function(t, n) {
			t = Yi(t), e[t.main] = n
		}, t.determineSubType = function(n, i) {
			var r = i.type;
			if(!r) {
				var a = Yi(n).main;
				t.hasSubTypes(n) && e[a] && (r = e[a](i))
			}
			return r
		}, t
	}

	function Ea(t, e) {
		function n(t) {
			var n = {},
				a = [];
			return f(t, function(o) {
				var s = i(n, o),
					l = s.originalDeps = e(o),
					u = r(l, t);
				s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function(t) {
					h(s.predecessor, t) < 0 && s.predecessor.push(t);
					var e = i(n, t);
					h(e.successor, t) < 0 && e.successor.push(o)
				})
			}), {
				graph: n,
				noEntryList: a
			}
		}

		function i(t, e) {
			return t[e] || (t[e] = {
				predecessor: [],
				successor: []
			}), t[e]
		}

		function r(t, e) {
			var n = [];
			return f(t, function(t) {
				h(e, t) >= 0 && n.push(t)
			}), n
		}
		t.topologicalTravel = function(t, e, i, r) {
			function a(t) {
				l[t].entryCount--, 0 === l[t].entryCount && h.push(t)
			}

			function o(t) {
				u[t] = !0, a(t)
			}
			if(t.length) {
				var s = n(e),
					l = s.graph,
					h = s.noEntryList,
					u = {};
				for(f(t, function(t) {
						u[t] = !0
					}); h.length;) {
					var c = h.pop(),
						d = l[c],
						p = !!u[c];
					p && (i.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a)
				}
				f(u, function() {
					throw new Error("Circle dependency may exists")
				})
			}
		}
	}

	function Na(t) {
		return t.replace(/^\s+/, "").replace(/\s+$/, "")
	}

	function Ra(t, e, n, i) {
		var r = e[1] - e[0],
			a = n[1] - n[0];
		if(0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
		if(i)
			if(r > 0) {
				if(t <= e[0]) return n[0];
				if(t >= e[1]) return n[1]
			} else {
				if(t >= e[0]) return n[0];
				if(t <= e[1]) return n[1]
			}
		else {
			if(t === e[0]) return n[0];
			if(t === e[1]) return n[1]
		}
		return(t - e[0]) / r * a + n[0]
	}

	function za(t, e) {
		switch(t) {
			case "center":
			case "middle":
				t = "50%";
				break;
			case "left":
			case "top":
				t = "0%";
				break;
			case "right":
			case "bottom":
				t = "100%"
		}
		return "string" == typeof t ? Na(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
	}

	function Fa(t, e, n) {
		return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
	}

	function Va(t) {
		return t.sort(function(t, e) {
			return t - e
		}), t
	}

	function Ha(t) {
		if(t = +t, isNaN(t)) return 0;
		for(var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
		return n
	}

	function Ga(t) {
		var e = t.toString(),
			n = e.indexOf("e");
		if(n > 0) {
			var i = +e.slice(n + 1);
			return 0 > i ? -i : 0
		}
		var r = e.indexOf(".");
		return 0 > r ? 0 : e.length - 1 - r
	}

	function Wa(t, e) {
		var n = Math.log,
			i = Math.LN10,
			r = Math.floor(n(t[1] - t[0]) / i),
			a = Math.round(n(Math.abs(e[1] - e[0])) / i),
			o = Math.min(Math.max(-r + a, 0), 20);
		return isFinite(o) ? o : 20
	}

	function Xa(t, e, n) {
		if(!t[e]) return 0;
		var i = g(t, function(t, e) {
			return t + (isNaN(e) ? 0 : e)
		}, 0);
		if(0 === i) return 0;
		for(var r = Math.pow(10, n), a = p(t, function(t) {
				return(isNaN(t) ? 0 : t) / i * r * 100
			}), o = 100 * r, s = p(a, function(t) {
				return Math.floor(t)
			}), l = g(s, function(t, e) {
				return t + e
			}, 0), h = p(a, function(t, e) {
				return t - s[e]
			}); o > l;) {
			for(var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) h[d] > u && (u = h[d], c = d);
			++s[c], h[c] = 0, ++l
		}
		return s[e] / r
	}

	function Ya(t) {
		var e = 2 * Math.PI;
		return(t % e + e) % e
	}

	function ja(t) {
		return t > -am && am > t
	}

	function Ua(t) {
		if(t instanceof Date) return t;
		if("string" == typeof t) {
			var e = sm.exec(t);
			if(!e) return new Date(0 / 0);
			if(e[8]) {
				var n = +e[4] || 0;
				return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
			}
			return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
		}
		return new Date(null == t ? 0 / 0 : Math.round(t))
	}

	function qa(t) {
		return Math.pow(10, Za(t))
	}

	function Za(t) {
		return Math.floor(Math.log(t) / Math.LN10)
	}

	function Ka(t, e) {
		var n, i = Za(t),
			r = Math.pow(10, i),
			a = t / r;
		return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
	}

	function $a(t) {
		function e(t, n, i) {
			return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
		}
		t.sort(function(t, n) {
			return e(t, n, 0) ? -1 : 1
		});
		for(var n = -1 / 0, i = 1, r = 0; r < t.length;) {
			for(var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
			a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
		}
		return t
	}

	function Qa(t) {
		return t - parseFloat(t) >= 0
	}

	function Ja(t) {
		return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
	}

	function to(t, e) {
		return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
			return e.toUpperCase()
		}), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
	}

	function eo(t) {
		return null == t ? "" : (t + "").replace(um, function(t, e) {
			return cm[e]
		})
	}

	function no(t, e, n) {
		_(e) || (e = [e]);
		var i = e.length;
		if(!i) return "";
		for(var r = e[0].$vars || [], a = 0; a < r.length; a++) {
			var o = dm[a];
			t = t.replace(fm(o), fm(o, 0))
		}
		for(var s = 0; i > s; s++)
			for(var l = 0; l < r.length; l++) {
				var h = e[s][r[l]];
				t = t.replace(fm(dm[l], s), n ? eo(h) : h)
			}
		return t
	}

	function io(t, e, n) {
		return f(e, function(e, i) {
			t = t.replace("{" + i + "}", n ? eo(e) : e)
		}), t
	}

	function ro(t, e) {
		t = b(t) ? {
			color: t,
			extraCssText: e
		} : t || {};
		var n = t.color,
			i = t.type,
			e = t.extraCssText;
		return n ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + eo(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + eo(n) + ";" + (e || "") + '"></span>' : ""
	}

	function ao(t, e) {
		return t += "", "0000".substr(0, e - t.length) + t
	}

	function oo(t, e, n) {
		("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
		var i = Ua(e),
			r = n ? "UTC" : "",
			a = i["get" + r + "FullYear"](),
			o = i["get" + r + "Month"]() + 1,
			s = i["get" + r + "Date"](),
			l = i["get" + r + "Hours"](),
			h = i["get" + r + "Minutes"](),
			u = i["get" + r + "Seconds"](),
			c = i["get" + r + "Milliseconds"]();
		return t = t.replace("MM", ao(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", ao(s, 2)).replace("d", s).replace("hh", ao(l, 2)).replace("h", l).replace("mm", ao(h, 2)).replace("m", h).replace("ss", ao(u, 2)).replace("s", u).replace("SSS", ao(c, 3))
	}

	function so(t) {
		return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
	}

	function lo(t, e, n, i, r) {
		var a = 0,
			o = 0;
		null == i && (i = 1 / 0), null == r && (r = 1 / 0);
		var s = 0;
		e.eachChild(function(l, h) {
			var u, c, d = l.position,
				f = l.getBoundingRect(),
				p = e.childAt(h + 1),
				g = p && p.getBoundingRect();
			if("horizontal" === t) {
				var v = f.width + (g ? -g.x + f.x : 0);
				u = a + v, u > i || l.newline ? (a = 0, u = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
			} else {
				var m = f.height + (g ? -g.y + f.y : 0);
				c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
			}
			l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + n : o = c + n)
		})
	}

	function ho(t, e, n) {
		n = hm(n || 0);
		var i = e.width,
			r = e.height,
			a = za(t.left, i),
			o = za(t.top, r),
			s = za(t.right, i),
			l = za(t.bottom, r),
			h = za(t.width, i),
			u = za(t.height, r),
			c = n[2] + n[0],
			d = n[1] + n[3],
			f = t.aspect;
		switch(isNaN(h) && (h = i - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = i - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
			case "center":
				a = i / 2 - h / 2 - n[3];
				break;
			case "right":
				a = i - h - d
		}
		switch(t.top || t.bottom) {
			case "middle":
			case "center":
				o = r / 2 - u / 2 - n[0];
				break;
			case "bottom":
				o = r - u - c
		}
		a = a || 0, o = o || 0, isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
		var p = new rn(a + n[3], o + n[0], h, u);
		return p.margin = n, p
	}

	function uo(t, e, n) {
		function i(n, i) {
			var o = {},
				l = 0,
				h = {},
				u = 0,
				c = 2;
			if(mm(n, function(e) {
					h[e] = t[e]
				}), mm(n, function(t) {
					r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
				}), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;
			if(u !== c && l) {
				if(l >= c) return o;
				for(var d = 0; d < n.length; d++) {
					var f = n[d];
					if(!r(o, f) && r(t, f)) {
						o[f] = t[f];
						break
					}
				}
				return o
			}
			return h
		}

		function r(t, e) {
			return t.hasOwnProperty(e)
		}

		function a(t, e) {
			return null != t[e] && "auto" !== t[e]
		}

		function o(t, e, n) {
			mm(t, function(t) {
				e[t] = n[t]
			})
		}!S(n) && (n = {});
		var s = n.ignoreSize;
		!_(s) && (s = [s, s]);
		var l = i(xm[0], 0),
			h = i(xm[1], 1);
		o(xm[0], t, l), o(xm[1], t, h)
	}

	function co(t) {
		return fo({}, t)
	}

	function fo(t, e) {
		return e && t && mm(ym, function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t
	}

	function po(t) {
		var e = [];
		return f(Sm.getClassesByMainType(t), function(t) {
			e = e.concat(t.prototype.dependencies || [])
		}), e = p(e, function(t) {
			return Yi(t).main
		}), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e
	}

	function go(t, e) {
		for(var n = t.length, i = 0; n > i; i++)
			if(t[i].length > e) return t[i];
		return t[n - 1]
	}

	function vo(t) {
		var e = t.get("coordinateSystem"),
			n = {
				coordSysName: e,
				coordSysDims: [],
				axisMap: z(),
				categoryAxisMap: z()
			},
			i = Dm[e];
		return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
	}

	function mo(t) {
		return "category" === t.get("type")
	}

	function yo(t) {
		this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Lm ? {} : []), this.sourceFormat = t.sourceFormat || Om, this.seriesLayoutBy = t.seriesLayoutBy || Em, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && z(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
	}

	function xo(t) {
		var e = t.option.source,
			n = Om;
		if(I(e)) n = Bm;
		else if(_(e))
			for(var i = 0, r = e.length; r > i; i++) {
				var a = e[i];
				if(null != a) {
					if(_(a)) {
						n = km;
						break
					}
					if(S(a)) {
						n = Pm;
						break
					}
				}
			} else if(S(e)) {
				for(var o in e)
					if(e.hasOwnProperty(o) && d(e[o])) {
						n = Lm;
						break
					}
			} else if(null != e) throw new Error("Invalid data");
		Rm(t).sourceFormat = n
	}

	function _o(t) {
		return Rm(t).source
	}

	function wo(t) {
		Rm(t).datasetMap = z()
	}

	function bo(t) {
		var e = t.option,
			n = e.data,
			i = I(n) ? Bm : Am,
			r = !1,
			a = e.seriesLayoutBy,
			o = e.sourceHeader,
			s = e.dimensions,
			l = Do(t);
		if(l) {
			var h = l.option;
			n = h.source, i = Rm(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions
		}
		var u = So(n, i, a, o, s),
			c = e.encode;
		!c && l && (c = Co(t, l, n, i, a, u)), Rm(t).source = new yo({
			data: n,
			fromDataset: r,
			seriesLayoutBy: a,
			sourceFormat: i,
			dimensionsDefine: u.dimensionsDefine,
			startIndex: u.startIndex,
			dimensionsDetectCount: u.dimensionsDetectCount,
			encodeDefine: c
		})
	}

	function So(t, e, n, i, r) {
		if(!t) return {
			dimensionsDefine: Mo(r)
		};
		var a, o, s;
		if(e === km) "auto" === i || null == i ? Io(function(t) {
			null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
		}, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Io(function(t, e) {
			r[e] = null != t ? t : ""
		}, n, t)), a = r ? r.length : n === Nm ? t.length : t[0] ? t[0].length : null;
		else if(e === Pm) r || (r = To(t), s = !0);
		else if(e === Lm) r || (r = [], s = !0, f(t, function(t, e) {
			r.push(e)
		}));
		else if(e === Am) {
			var l = Oi(t[0]);
			a = _(l) && l.length || 1
		}
		var h;
		return s && f(r, function(t, e) {
			"name" === (S(t) ? t.name : t) && (h = e)
		}), {
			startIndex: o,
			dimensionsDefine: Mo(r),
			dimensionsDetectCount: a,
			potentialNameDimIndex: h
		}
	}

	function Mo(t) {
		if(t) {
			var e = z();
			return p(t, function(t) {
				if(t = o({}, S(t) ? t : {
						name: t
					}), null == t.name) return t;
				t.name += "", null == t.displayName && (t.displayName = t.name);
				var n = e.get(t.name);
				return n ? t.name += "-" + n.count++ : e.set(t.name, {
					count: 1
				}), t
			})
		}
	}

	function Io(t, e, n, i) {
		if(null == i && (i = 1 / 0), e === Nm)
			for(var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
		else
			for(var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
	}

	function To(t) {
		for(var e, n = 0; n < t.length && !(e = t[n++]););
		if(e) {
			var i = [];
			return f(e, function(t, e) {
				i.push(e)
			}), i
		}
	}

	function Co(t, e, n, i, r, a) {
		var o = vo(t),
			s = {},
			l = [],
			h = [],
			u = t.subType,
			c = z(["pie", "map", "funnel"]),
			d = z(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
		if(o && null != d.get(u)) {
			var p = t.ecModel,
				g = Rm(p).datasetMap,
				v = e.uid + "_" + r,
				m = g.get(v) || g.set(v, {
					categoryWayDim: 1,
					valueWayDim: 0
				});
			f(o.coordSysDims, function(t) {
				if(null == o.firstCategoryDimIndex) {
					var e = m.valueWayDim++;
					s[t] = e, h.push(e)
				} else if(o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
				else {
					var e = m.categoryWayDim++;
					s[t] = e, h.push(e)
				}
			})
		} else if(null != c.get(u)) {
			for(var y, x = 0; 5 > x && null == y; x++) ko(n, i, r, a.dimensionsDefine, a.startIndex, x) || (y = x);
			if(null != y) {
				s.value = y;
				var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);
				h.push(_), l.push(_)
			}
		}
		return l.length && (s.itemName = l), h.length && (s.seriesName = h), s
	}

	function Do(t) {
		var e = t.option,
			n = e.data;
		return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
	}

	function Ao(t, e) {
		return ko(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
	}

	function ko(t, e, n, i, r, a) {
		function o(t) {
			return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
		}
		var s, l = 5;
		if(I(t)) return !1;
		var h;
		if(i && (h = i[a], h = S(h) ? h.name : h), e === km)
			if(n === Nm) {
				for(var u = t[a], c = 0; c < (u || []).length && l > c; c++)
					if(null != (s = o(u[r + c]))) return s
			} else
				for(var c = 0; c < t.length && l > c; c++) {
					var d = t[r + c];
					if(d && null != (s = o(d[a]))) return s
				} else if(e === Pm) {
					if(!h) return;
					for(var c = 0; c < t.length && l > c; c++) {
						var f = t[c];
						if(f && null != (s = o(f[h]))) return s
					}
				} else if(e === Lm) {
			if(!h) return;
			var u = t[h];
			if(!u || I(u)) return !1;
			for(var c = 0; c < u.length && l > c; c++)
				if(null != (s = o(u[c]))) return s
		} else if(e === Am)
			for(var c = 0; c < t.length && l > c; c++) {
				var f = t[c],
					p = Oi(f);
				if(!_(p)) return !1;
				if(null != (s = o(p[a]))) return s
			}
		return !1
	}

	function Po(t, e) {
		if(e) {
			var n = e.seiresIndex,
				i = e.seriesId,
				r = e.seriesName;
			return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
		}
	}

	function Lo(t, e) {
		var n = t.color && !t.colorLayer;
		f(e, function(e, a) {
			"colorLayer" === a && n || Sm.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
		})
	}

	function Oo(t) {
		t = t, this.option = {}, this.option[zm] = 1, this._componentsMap = z({
			series: []
		}), this._seriesIndices, this._seriesIndicesMap, Lo(t, this._theme.option), r(t, Im, !1), this.mergeOption(t)
	}

	function Bo(t, e) {
		_(e) || (e = e ? [e] : []);
		var n = {};
		return f(e, function(e) {
			n[e] = (t.get(e) || []).slice()
		}), n
	}

	function Eo(t, e, n) {
		var i = e.type ? e.type : n ? n.subType : Sm.determineSubType(t, e);
		return i
	}

	function No(t, e) {
		t._seriesIndicesMap = z(t._seriesIndices = p(e, function(t) {
			return t.componentIndex
		}) || [])
	}

	function Ro(t, e) {
		return e.hasOwnProperty("subType") ? v(t, function(t) {
			return t.subType === e.subType
		}) : t
	}

	function zo(t) {
		f(Vm, function(e) {
			this[e] = y(t[e], t)
		}, this)
	}

	function Fo() {
		this._coordinateSystems = []
	}

	function Vo(t) {
		this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
	}

	function Ho(t, e, n) {
		var i, r, a = [],
			o = [],
			s = t.timeline;
		if(t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
			r = r || {};
			var l = t.media;
			Gm(l, function(t) {
				t && t.option && (t.query ? o.push(t) : i || (i = t))
			})
		}
		return r || (r = t), r.timeline || (r.timeline = s), Gm([r].concat(a).concat(p(o, function(t) {
			return t.option
		})), function(t) {
			Gm(e, function(e) {
				e(t, n)
			})
		}), {
			baseOption: r,
			timelineOptions: a,
			mediaDefault: i,
			mediaList: o
		}
	}

	function Go(t, e, n) {
		var i = {
				width: e,
				height: n,
				aspectratio: e / n
			},
			r = !0;
		return f(t, function(t, e) {
			var n = e.match(jm);
			if(n && n[1] && n[2]) {
				var a = n[1],
					o = n[2].toLowerCase();
				Wo(i[o], t, a) || (r = !1)
			}
		}), r
	}

	function Wo(t, e, n) {
		return "min" === n ? t >= e : "max" === n ? e >= t : t === e
	}

	function Xo(t, e) {
		return t.join(",") === e.join(",")
	}

	function Yo(t, e) {
		e = e || {}, Gm(e, function(e, n) {
			if(null != e) {
				var i = t[n];
				if(Sm.hasClass(n)) {
					e = Pi(e), i = Pi(i);
					var r = Ei(i, e);
					t[n] = Xm(r, function(t) {
						return t.option && t.exist ? Ym(t.exist, t.option, !0) : t.exist || t.option
					})
				} else t[n] = Ym(i, e, !0)
			}
		})
	}

	function jo(t) {
		var e = t && t.itemStyle;
		if(e)
			for(var n = 0, i = Zm.length; i > n; n++) {
				var a = Zm[n],
					o = e.normal,
					s = e.emphasis;
				o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
			}
	}

	function Uo(t, e, n) {
		if(t && t[e] && (t[e].normal || t[e].emphasis)) {
			var i = t[e].normal,
				r = t[e].emphasis;
			i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
		}
	}

	function qo(t) {
		Uo(t, "itemStyle"), Uo(t, "lineStyle"), Uo(t, "areaStyle"), Uo(t, "label"), Uo(t, "labelLine"), Uo(t, "upperLabel"), Uo(t, "edgeLabel")
	}

	function Zo(t, e) {
		var n = qm(t) && t[e],
			i = qm(n) && n.textStyle;
		if(i)
			for(var r = 0, a = gg.length; a > r; r++) {
				var e = gg[r];
				i.hasOwnProperty(e) && (n[e] = i[e])
			}
	}

	function Ko(t) {
		t && (qo(t), Zo(t, "label"), t.emphasis && Zo(t.emphasis, "label"))
	}

	function $o(t) {
		if(qm(t)) {
			jo(t), qo(t), Zo(t, "label"), Zo(t, "upperLabel"), Zo(t, "edgeLabel"), t.emphasis && (Zo(t.emphasis, "label"), Zo(t.emphasis, "upperLabel"), Zo(t.emphasis, "edgeLabel"));
			var e = t.markPoint;
			e && (jo(e), Ko(e));
			var n = t.markLine;
			n && (jo(n), Ko(n));
			var i = t.markArea;
			i && Ko(i);
			var r = t.data;
			if("graph" === t.type) {
				r = r || t.nodes;
				var a = t.links || t.edges;
				if(a && !I(a))
					for(var o = 0; o < a.length; o++) Ko(a[o]);
				f(t.categories, function(t) {
					qo(t)
				})
			}
			if(r && !I(r))
				for(var o = 0; o < r.length; o++) Ko(r[o]);
			var e = t.markPoint;
			if(e && e.data)
				for(var s = e.data, o = 0; o < s.length; o++) Ko(s[o]);
			var n = t.markLine;
			if(n && n.data)
				for(var l = n.data, o = 0; o < l.length; o++) _(l[o]) ? (Ko(l[o][0]), Ko(l[o][1])) : Ko(l[o]);
			"gauge" === t.type ? (Zo(t, "axisLabel"), Zo(t, "title"), Zo(t, "detail")) : "treemap" === t.type ? (Uo(t.breadcrumb, "itemStyle"), f(t.levels, function(t) {
				qo(t)
			})) : "tree" === t.type && qo(t.leaves)
		}
	}

	function Qo(t) {
		return _(t) ? t : t ? [t] : []
	}

	function Jo(t) {
		return(_(t) ? t[0] : t) || {}
	}

	function ts(t, e) {
		e = e.split(",");
		for(var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
		return n
	}

	function es(t, e, n, i) {
		e = e.split(",");
		for(var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
		(i || null == a[e[o]]) && (a[e[o]] = n)
	}

	function ns(t) {
		f($m, function(e) {
			e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
		})
	}

	function is(t) {
		f(t, function(e, n) {
			var i = [],
				r = [0 / 0, 0 / 0],
				a = [e.stackResultDimension, e.stackedOverDimension],
				o = e.data,
				s = e.isStackedByIndex,
				l = o.map(a, function(a, l, h) {
					var u = o.get(e.stackedDimension, h);
					if(isNaN(u)) return r;
					var c, d;
					s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
					for(var f = 0 / 0, p = n - 1; p >= 0; p--) {
						var g = t[p];
						if(s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
							var v = g.data.getByRawIndex(g.stackResultDimension, d);
							if(u >= 0 && v > 0 || 0 >= u && 0 > v) {
								u += v, f = v;
								break
							}
						}
					}
					return i[0] = u, i[1] = f, i
				});
			o.hostModel.setData(l), e.data = l
		})
	}

	function rs(t, e) {
		yo.isInstance(t) || (t = yo.seriesDataToSource(t)), this._source = t;
		var n = this._data = t.data,
			i = t.sourceFormat;
		i === Bm && (this._offset = 0, this._dimSize = e, this._data = n);
		var r = ny[i === km ? i + "_" + t.seriesLayoutBy : i];
		o(this, r)
	}

	function as() {
		return this._data.length
	}

	function os(t) {
		return this._data[t]
	}

	function ss(t) {
		for(var e = 0; e < t.length; e++) this._data.push(t[e])
	}

	function ls(t, e, n) {
		return null != n ? t[n] : t
	}

	function hs(t, e, n, i) {
		return us(t[i], this._dimensionInfos[e])
	}

	function us(t, e) {
		var n = e && e.type;
		if("ordinal" === n) {
			var i = e && e.ordinalMeta;
			return i ? i.parseAndCollect(t) : t
		}
		return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Ua(t)), null == t || "" === t ? 0 / 0 : +t
	}

	function cs(t, e, n) {
		if(t) {
			var i = t.getRawDataItem(e);
			if(null != i) {
				var r, a, o = t.getProvider().getSource().sourceFormat,
					s = t.getDimensionInfo(n);
				return s && (r = s.name, a = s.index), iy[o](i, e, a, r)
			}
		}
	}

	function ds(t, e, n) {
		if(t) {
			var i = t.getProvider().getSource().sourceFormat;
			if(i === Am || i === Pm) {
				var r = t.getRawDataItem(e);
				return i !== Am || S(r) || (r = null), r ? r[n] : void 0
			}
		}
	}

	function fs(t) {
		return new ps(t)
	}

	function ps(t) {
		t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
	}

	function gs(t, e, n, i, r, a) {
		ly.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
			start: n,
			end: i,
			count: i - n,
			next: ly.next
		}, t.context)
	}

	function vs(t, e) {
		t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
		var n, i;
		!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
		var r = t._downstream;
		return r && r.dirty(), i
	}

	function ms(t) {
		var e = t.name;
		Ri(t) || (t.name = ys(t) || e)
	}

	function ys(t) {
		var e = t.getRawData(),
			n = e.mapDimension("seriesName", !0),
			i = [];
		return f(n, function(t) {
			var n = e.getDimensionInfo(t);
			n.displayName && i.push(n.displayName)
		}), i.join(" ")
	}

	function xs(t) {
		return t.model.getRawData().count()
	}

	function _s(t) {
		var e = t.model;
		return e.setData(e.getRawData().cloneShallow()), ws
	}

	function ws(t, e) {
		t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
	}

	function bs(t, e) {
		f(t.CHANGABLE_METHODS, function(n) {
			t.wrapMethod(n, x(Ss, e))
		})
	}

	function Ss(t) {
		var e = Ms(t);
		e && e.setOutputEnd(this.count())
	}

	function Ms(t) {
		var e = (t.ecModel || {}).scheduler,
			n = e && e.getPipeline(t.uid);
		if(n) {
			var i = n.currentTask;
			if(i) {
				var r = i.agentStubMap;
				r && (i = r.get(t.uid))
			}
			return i
		}
	}

	function Is() {
		this.group = new pp, this.uid = Oa("viewChart"), this.renderTask = fs({
			plan: Ds,
			reset: As
		}), this.renderTask.context = {
			view: this
		}
	}

	function Ts(t, e) {
		if(t && (t.trigger(e), "group" === t.type))
			for(var n = 0; n < t.childCount(); n++) Ts(t.childAt(n), e)
	}

	function Cs(t, e, n) {
		var i = Fi(t, e);
		null != i ? f(Pi(i), function(e) {
			Ts(t.getItemGraphicEl(e), n)
		}) : t.eachItemGraphicEl(function(t) {
			Ts(t, n)
		})
	}

	function Ds(t) {
		return gy(t.model)
	}

	function As(t) {
		var e = t.model,
			n = t.ecModel,
			i = t.api,
			r = t.payload,
			a = e.pipelineContext.progressiveRender,
			o = t.view,
			s = r && py(r).updateMethod,
			l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
		return "render" !== l && o[l](e, n, i, r), my[l]
	}

	function ks(t, e, n) {
		function i() {
			u = (new Date).getTime(), c = null, t.apply(o, s || [])
		}
		var r, a, o, s, l, h = 0,
			u = 0,
			c = null;
		e = e || 0;
		var d = function() {
			r = (new Date).getTime(), o = this, s = arguments;
			var t = l || e,
				d = l || n;
			l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r
		};
		return d.clear = function() {
			c && (clearTimeout(c), c = null)
		}, d.debounceNextCall = function(t) {
			l = t
		}, d
	}

	function Ps(t, e, n, i) {
		var r = t[e];
		if(r) {
			var a = r[yy] || r,
				o = r[_y],
				s = r[xy];
			if(s !== n || o !== i) {
				if(null == n || !i) return t[e] = a;
				r = t[e] = ks(a, n, "debounce" === i), r[yy] = a, r[_y] = i, r[xy] = n
			}
			return r
		}
	}

	function Ls(t, e, n, i) {
		this.ecInstance = t, this.api = e, this.unfinished;
		var n = this._dataProcessorHandlers = n.slice(),
			i = this._visualHandlers = i.slice();
		this._allHandlers = n.concat(i), this._stageTaskMap = z()
	}

	function Os(t, e, n, i, r) {
		function a(t, e) {
			return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
		}
		r = r || {};
		var o;
		f(e, function(e) {
			if(!r.visualType || r.visualType === e.visualType) {
				var s = t._stageTaskMap.get(e.uid),
					l = s.seriesTaskMap,
					h = s.overallTask;
				if(h) {
					var u, c = h.agentStubMap;
					c.each(function(t) {
						a(r, t) && (t.dirty(), u = !0)
					}), u && h.dirty(), Cy(h, i);
					var d = t.getPerformArgs(h, r.block);
					c.each(function(t) {
						t.perform(d)
					}), o |= h.perform(d)
				} else l && l.each(function(s) {
					a(r, s) && s.dirty();
					var l = t.getPerformArgs(s, r.block);
					l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), Cy(s, i), o |= s.perform(l)
				})
			}
		}), t.unfinished |= o
	}

	function Bs(t, e, n, i, r) {
		function a(n) {
			var a = n.uid,
				s = o.get(a) || o.set(a, fs({
					plan: Vs,
					reset: Hs,
					count: Ws
				}));
			s.context = {
				model: n,
				ecModel: i,
				api: r,
				useClearVisual: e.isVisual && !e.isLayout,
				plan: e.plan,
				reset: e.reset,
				scheduler: t
			}, Xs(t, n, s)
		}
		var o = n.seriesTaskMap || (n.seriesTaskMap = z()),
			s = e.seriesType,
			l = e.getTargetSeries;
		e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
		var h = t._pipelineMap;
		o.each(function(t, e) {
			h.get(e) || (t.dispose(), o.removeKey(e))
		})
	}

	function Es(t, e, n, i, r) {
		function a(e) {
			var n = e.uid,
				i = s.get(n);
			i || (i = s.set(n, fs({
				reset: Rs,
				onDirty: Fs
			})), o.dirty()), i.context = {
				model: e,
				overallProgress: u,
				modifyOutputEnd: c
			}, i.agent = o, i.__block = u, Xs(t, e, i)
		}
		var o = n.overallTask = n.overallTask || fs({
			reset: Ns
		});
		o.context = {
			ecModel: i,
			api: r,
			overallReset: e.overallReset,
			scheduler: t
		};
		var s = o.agentStubMap = o.agentStubMap || z(),
			l = e.seriesType,
			h = e.getTargetSeries,
			u = !0,
			c = e.modifyOutputEnd;
		l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));
		var d = t._pipelineMap;
		s.each(function(t, e) {
			d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
		})
	}

	function Ns(t) {
		t.overallReset(t.ecModel, t.api, t.payload)
	}

	function Rs(t) {
		return t.overallProgress && zs
	}

	function zs() {
		this.agent.dirty(), this.getDownstream().dirty()
	}

	function Fs() {
		this.agent && this.agent.dirty()
	}

	function Vs(t) {
		return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
	}

	function Hs(t) {
		t.useClearVisual && t.data.clearAllVisual();
		var e = t.resetDefines = Pi(t.reset(t.model, t.ecModel, t.api, t.payload));
		return e.length > 1 ? p(e, function(t, e) {
			return Gs(e)
		}) : Dy
	}

	function Gs(t) {
		return function(e, n) {
			var i = n.data,
				r = n.resetDefines[t];
			if(r && r.dataEach)
				for(var a = e.start; a < e.end; a++) r.dataEach(i, a);
			else r && r.progress && r.progress(e, i)
		}
	}

	function Ws(t) {
		return t.data.count()
	}

	function Xs(t, e, n) {
		var i = e.uid,
			r = t._pipelineMap.get(i);
		!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
	}

	function Ys(t) {
		Ay = null;
		try {
			t(ky, Py)
		} catch(e) {}
		return Ay
	}

	function js(t, e) {
		for(var n in e.prototype) t[n] = V
	}

	function Us(t) {
		return function(e, n, i) {
			e = e && e.toLowerCase(), Of.prototype[t].call(this, e, n, i)
		}
	}

	function qs() {
		Of.call(this)
	}

	function Zs(t, e, n) {
		function r(t, e) {
			return t.__prio - e.__prio
		}
		n = n || {}, "string" == typeof e && (e = dx[e]), this.id, this.group, this._dom = t;
		var a = "canvas",
			o = this._zr = Ti(t, {
				renderer: n.renderer || a,
				devicePixelRatio: n.devicePixelRatio,
				width: n.width,
				height: n.height
			});
		this._throttledZrFlush = ks(y(o.flush, o), 17);
		var e = i(e);
		e && Jm(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Fo;
		var s = this._api = fl(this);
		dn(cx, r), dn(lx, r), this._scheduler = new Ls(this, s, lx, cx), Of.call(this), this._messageCenter = new qs, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), il(o, this), E(this)
	}

	function Ks(t, e, n) {
		var i, r = this._model,
			a = this._coordSysMgr.getCoordinateSystems();
		e = Hi(r, e);
		for(var o = 0; o < a.length; o++) {
			var s = a[o];
			if(s[t] && null != (i = s[t](r, e, n))) return i
		}
	}

	function $s(t) {
		var e = t._model,
			n = t._scheduler;
		n.restorePipelines(e), n.prepareStageTasks(), rl(t, "component", e, n), rl(t, "chart", e, n), n.plan()
	}

	function Qs(t, e, n, i, r) {
		function a(i) {
			i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
		}
		var o = t._model;
		if(!i) return void Fy(t._componentsViews.concat(t._chartsViews), a);
		var s = {};
		s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
		var l = {
			mainType: i,
			query: s
		};
		r && (l.subType = r);
		var h = n.excludeSeriesId;
		null != h && (h = z(Pi(h))), o && o.eachComponent(l, function(e) {
			h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
		}, t)
	}

	function Js(t, e) {
		var n = t._chartsMap,
			i = t._scheduler;
		e.eachSeries(function(t) {
			i.updateStreamModes(t, n[t.__viewId])
		})
	}

	function tl(t, e) {
		var n = t.type,
			i = t.escapeConnect,
			r = ox[n],
			a = r.actionInfo,
			l = (a.update || "update").split(":"),
			h = l.pop();
		l = null != l[0] && Gy(l[0]), this[tx] = !0;
		var u = [t],
			c = !1;
		t.batch && (c = !0, u = p(t.batch, function(e) {
			return e = s(o({}, e), t), e.batch = null, e
		}));
		var d, f = [],
			g = "highlight" === n || "downplay" === n;
		Fy(u, function(t) {
			d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Qs(this, h, t, "series") : l && Qs(this, h, t, l.main, l.sub)
		}, this), "none" === h || g || l || (this[ex] ? ($s(this), rx.update.call(this, t), this[ex] = !1) : rx[h].call(this, t)), d = c ? {
			type: a.event || n,
			escapeConnect: i,
			batch: f
		} : f[0], this[tx] = !1, !e && this._messageCenter.trigger(d.type, d)
	}

	function el(t) {
		for(var e = this._pendingActions; e.length;) {
			var n = e.shift();
			tl.call(this, n, t)
		}
	}

	function nl(t) {
		!t && this.trigger("updated")
	}

	function il(t, e) {
		t.on("rendered", function() {
			e.trigger("rendered"), !t.animation.isFinished() || e[ex] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
		})
	}

	function rl(t, e, n, i) {
		function r(t) {
			var e = "_ec_" + t.id + "_" + t.type,
				r = s[e];
			if(!r) {
				var u = Gy(t.type),
					c = a ? cy.getClass(u.main, u.sub) : Is.getClass(u.sub);
				r = new c, r.init(n, h), s[e] = r, o.push(r), l.add(r.group)
			}
			t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
				mainType: t.mainType,
				index: t.componentIndex
			}, !a && i.prepareView(r, t, n, h)
		}
		for(var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
		a ? n.eachComponent(function(t, e) {
			"series" !== t && r(e)
		}) : n.eachSeries(r);
		for(var u = 0; u < o.length;) {
			var c = o[u];
			c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
		}
	}

	function al(t) {
		t.clearColorPalette(), t.eachSeries(function(t) {
			t.clearColorPalette()
		})
	}

	function ol(t, e, n, i) {
		sl(t, e, n, i), Fy(t._chartsViews, function(t) {
			t.__alive = !1
		}), ll(t, e, n, i), Fy(t._chartsViews, function(t) {
			t.__alive || t.remove(e, n)
		})
	}

	function sl(t, e, n, i, r) {
		Fy(r || t._componentsViews, function(t) {
			var r = t.__model;
			t.render(r, e, n, i), dl(r, t)
		})
	}

	function ll(t, e, n, i, r) {
		var a, o = t._scheduler;
		e.eachSeries(function(e) {
			var n = t._chartsMap[e.__viewId];
			n.__alive = !0;
			var s = n.renderTask;
			o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), dl(e, n), cl(e, n)
		}), o.unfinished |= a, ul(t._zr, e), Sy(t._zr.dom, e)
	}

	function hl(t, e) {
		Fy(ux, function(n) {
			n(t, e)
		})
	}

	function ul(t, e) {
		var n = t.storage,
			i = 0;
		n.traverse(function(t) {
			t.isGroup || i++
		}), i > e.get("hoverLayerThreshold") && !cf.node && n.traverse(function(t) {
			t.isGroup || (t.useHoverLayer = !0)
		})
	}

	function cl(t, e) {
		var n = t.get("blendMode") || null;
		e.group.traverse(function(t) {
			t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
				t.setStyle("blend", n)
			})
		})
	}

	function dl(t, e) {
		var n = t.get("z"),
			i = t.get("zlevel");
		e.group.traverse(function(t) {
			"group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
		})
	}

	function fl(t) {
		var e = t._coordSysMgr;
		return o(new zo(t), {
			getCoordinateSystems: y(e.getCoordinateSystems, e),
			getComponentByElement: function(e) {
				for(; e;) {
					var n = e.__ecComponentInfo;
					if(null != n) return t._model.getComponent(n.mainType, n.index);
					e = e.parent
				}
			}
		})
	}

	function pl(t) {
		function e(t, e) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n];
				i[a] = e
			}
		}
		var n = 0,
			i = 1,
			r = 2,
			a = "__connectUpdateStatus";
		Fy(sx, function(o, s) {
			t._messageCenter.on(s, function(o) {
				if(gx[t.group] && t[a] !== n) {
					if(o && o.escapeConnect) return;
					var s = t.makeActionFromEvent(o),
						l = [];
					Fy(px, function(e) {
						e !== t && e.group === t.group && l.push(e)
					}), e(l, n), Fy(l, function(t) {
						t[a] !== i && t.dispatchAction(s)
					}), e(l, r)
				}
			})
		})
	}

	function gl(t, e, n) {
		var i = xl(t);
		if(i) return i;
		var r = new Zs(t, e, n);
		return r.id = "ec_" + vx++, px[r.id] = r, Wi(t, yx, r.id), pl(r), r
	}

	function vl(t) {
		if(_(t)) {
			var e = t;
			t = null, Fy(e, function(e) {
				null != e.group && (t = e.group)
			}), t = t || "g_" + mx++, Fy(e, function(e) {
				e.group = t
			})
		}
		return gx[t] = !0, t
	}

	function ml(t) {
		gx[t] = !1
	}

	function yl(t) {
		"string" == typeof t ? t = px[t] : t instanceof Zs || (t = xl(t)), t instanceof Zs && !t.isDisposed() && t.dispose()
	}

	function xl(t) {
		return px[Xi(t, yx)]
	}

	function _l(t) {
		return px[t]
	}

	function wl(t, e) {
		dx[t] = e
	}

	function bl(t) {
		hx.push(t)
	}

	function Sl(t, e) {
		kl(lx, t, e, jy)
	}

	function Ml(t) {
		ux.push(t)
	}

	function Il(t, e, n) {
		"function" == typeof e && (n = e, e = "");
		var i = Hy(t) ? t.type : [t, t = {
			event: e
		}][0];
		t.event = (t.event || i).toLowerCase(), e = t.event, zy(nx.test(i) && nx.test(e)), ox[i] || (ox[i] = {
			action: n,
			actionInfo: t
		}), sx[e] = i
	}

	function Tl(t, e) {
		Fo.register(t, e)
	}

	function Cl(t) {
		var e = Fo.get(t);
		return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
	}

	function Dl(t, e) {
		kl(cx, t, e, qy, "layout")
	}

	function Al(t, e) {
		kl(cx, t, e, Ky, "visual")
	}

	function kl(t, e, n, i, r) {
		(Vy(e) || Hy(e)) && (n = e, e = i);
		var a = Ls.wrapStageHandler(n, r);
		return a.__prio = e, a.__raw = n, t.push(a), a
	}

	function Pl(t, e) {
		fx[t] = e
	}

	function Ll(t) {
		return Sm.extend(t)
	}

	function Ol(t) {
		return cy.extend(t)
	}

	function Bl(t) {
		return uy.extend(t)
	}

	function El(t) {
		return Is.extend(t)
	}

	function Nl(t) {
		n("createCanvas", t)
	}

	function Rl(t, e, n) {
		e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), xx[t] = {
			geoJson: e,
			specialAreas: n
		}
	}

	function zl(t) {
		return xx[t]
	}

	function Fl(t) {
		return t
	}

	function Vl(t, e, n, i, r) {
		this._old = t, this._new = e, this._oldKeyGetter = n || Fl, this._newKeyGetter = i || Fl, this.context = r
	}

	function Hl(t, e, n, i, r) {
		for(var a = 0; a < t.length; a++) {
			var o = "_ec_" + r[i](t[a], a),
				s = e[o];
			null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
		}
	}

	function Gl(t) {
		var e = {},
			n = e.encode = {},
			i = z(),
			r = [],
			a = [];
		f(t.dimensions, function(e) {
			var o = t.getDimensionInfo(e),
				s = o.coordDim;
			if(s) {
				var l = n[s];
				n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), Xl(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
			}
			Sx.each(function(t, e) {
				var i = n[e];
				n.hasOwnProperty(e) || (i = n[e] = []);
				var r = o.otherDims[e];
				null != r && r !== !1 && (i[r] = o.name)
			})
		});
		var o = [],
			s = {};
		i.each(function(t, e) {
			var i = n[e];
			s[e] = i[0], o = o.concat(i)
		}), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
		var l = n.label;
		l && l.length && (r = l.slice());
		var h = n.tooltip;
		return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
	}

	function Wl(t) {
		return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
	}

	function Xl(t) {
		return !("ordinal" === t || "time" === t)
	}

	function Yl(t) {
		return t._rawCount > 65535 ? Dx : Ax
	}

	function jl(t) {
		var e = t.constructor;
		return e === Array ? t.slice() : new e(t)
	}

	function Ul(t, e) {
		f(kx.concat(e.__wrappedMethods || []), function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t.__wrappedMethods = e.__wrappedMethods, f(Px, function(n) {
			t[n] = i(e[n])
		}), t._calculationInfo = o(e._calculationInfo)
	}

	function ql(t) {
		var e = t._invertedIndicesMap;
		f(e, function(n, i) {
			var r = t._dimensionInfos[i],
				a = r.ordinalMeta;
			if(a) {
				n = e[i] = new Dx(a.categories.length);
				for(var o = 0; o < n.length; o++) n[o] = 0 / 0;
				for(var o = 0; o < t._count; o++) n[t.get(i, o)] = o
			}
		})
	}

	function Zl(t, e, n) {
		var i;
		if(null != e) {
			var r = t._chunkSize,
				a = Math.floor(n / r),
				o = n % r,
				s = t.dimensions[e],
				l = t._storage[s][a];
			if(l) {
				i = l[o];
				var h = t._dimensionInfos[s].ordinalMeta;
				h && h.categories.length && (i = h.categories[i])
			}
		}
		return i
	}

	function Kl(t) {
		return t
	}

	function $l(t) {
		return t < this._count && t >= 0 ? this._indices[t] : -1
	}

	function Ql(t, e) {
		var n = t._idList[e];
		return null == n && (n = Zl(t, t._idDimIdx, e)), null == n && (n = Tx + e), n
	}

	function Jl(t) {
		return _(t) || (t = [t]), t
	}

	function th(t, e) {
		var n = t.dimensions,
			i = new Lx(p(n, t.getDimensionInfo, t), t.hostModel);
		Ul(i, t);
		for(var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
			var s = n[o];
			a[s] && (h(e, s) >= 0 ? (r[s] = eh(a[s]), i._rawExtent[s] = nh(), i._extent[s] = null) : r[s] = a[s])
		}
		return i
	}

	function eh(t) {
		for(var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = jl(t[n]);
		return e
	}

	function nh() {
		return [1 / 0, -1 / 0]
	}

	function ih(t, e, n) {
		function r(t, e, n) {
			null != Sx.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0))
		}
		yo.isInstance(e) || (e = yo.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
		for(var a = (n.dimsDef || []).slice(), l = z(n.encodeDef), h = z(), u = z(), c = [], d = rh(e, t, a, n.dimCount), p = 0; d > p; p++) {
			var g = a[p] = o({}, S(a[p]) ? a[p] : {
					name: a[p]
				}),
				v = g.name,
				m = c[p] = {
					otherDims: {}
				};
			null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
		}
		l.each(function(t, e) {
			t = Pi(t).slice();
			var n = l.set(e, []);
			f(t, function(t, i) {
				b(t) && (t = h.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i))
			})
		});
		var y = 0;
		f(t, function(t) {
			var e, t, n, a;
			if(b(t)) e = t, t = {};
			else {
				e = t.name;
				var o = t.ordinalMeta;
				t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
			}
			var h = Pi(l.get(e));
			if(!h.length)
				for(var u = 0; u < (n && n.length || 1); u++) {
					for(; y < c.length && null != c[y].coordDim;) y++;
					y < c.length && h.push(y++)
				}
			f(h, function(i, o) {
				var l = c[i];
				if(r(s(l, t), e, o), null == l.name && n) {
					var h = n[o];
					!S(h) && (h = {
						name: h
					}), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip
				}
				a && s(l.otherDims, a)
			})
		});
		var x = n.generateCoord,
			_ = n.generateCoordCount,
			w = null != _;
		_ = x ? _ || 1 : 0;
		for(var M = x || "value", I = 0; d > I; I++) {
			var m = c[I] = c[I] || {},
				T = m.coordDim;
			null == T && (m.coordDim = ah(M, u, w), m.coordDimIndex = 0, (!x || 0 >= _) && (m.isExtraCoord = !0), _--), null == m.name && (m.name = ah(m.coordDim, h)), null == m.type && Ao(e, I, m.name) && (m.type = "ordinal")
		}
		return c
	}

	function rh(t, e, n, i) {
		var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
		return f(e, function(t) {
			var e = t.dimsDef;
			e && (r = Math.max(r, e.length))
		}), r
	}

	function ah(t, e, n) {
		if(n || null != e.get(t)) {
			for(var i = 0; null != e.get(t + i);) i++;
			t += i
		}
		return e.set(t, !0), t
	}

	function oh(t, e, n) {
		n = n || {};
		var i, r, a, o, s = n.byIndex,
			l = n.stackedCoordDimension,
			h = !(!t || !t.get("stack"));
		if(f(e, function(t, n) {
				b(t) && (e[n] = t = {
					name: t
				}), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
			}), !r || s || i || (s = !0), r) {
			a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
			var u = r.coordDim,
				c = r.type,
				d = 0;
			f(e, function(t) {
				t.coordDim === u && d++
			}), e.push({
				name: a,
				coordDim: u,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			}), d++, e.push({
				name: o,
				coordDim: o,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			})
		}
		return {
			stackedDimension: r && r.name,
			stackedByDimension: i && i.name,
			isStackedByIndex: s,
			stackedOverDimension: o,
			stackResultDimension: a
		}
	}

	function sh(t, e) {
		return !!e && e === t.getCalculationInfo("stackedDimension")
	}

	function lh(t, e) {
		return sh(t, e) ? t.getCalculationInfo("stackResultDimension") : e
	}

	function hh(t, e, n) {
		n = n || {}, yo.isInstance(t) || (t = yo.seriesDataToSource(t));
		var i, r = e.get("coordinateSystem"),
			a = Fo.get(r),
			o = vo(e);
		o && (i = p(o.coordSysDims, function(t) {
			var e = {
					name: t
				},
				n = o.axisMap.get(t);
			if(n) {
				var i = n.get("type");
				e.type = Wl(i)
			}
			return e
		})), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
		var s, l, h = Ex(t, {
			coordDimensions: i,
			generateCoord: n.generateCoord
		});
		o && f(h, function(t, e) {
			var n = t.coordDim,
				i = o.categoryAxisMap.get(n);
			i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
		}), l || null == s || (h[s].otherDims.itemName = 0);
		var u = oh(e, h),
			c = new Lx(h, e);
		c.setCalculationInfo(u);
		var d = null != s && uh(t) ? function(t, e, n, i) {
			return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
		} : null;
		return c.hasItemOption = !1, c.initData(t, null, d), c
	}

	function uh(t) {
		if(t.sourceFormat === Am) {
			var e = ch(t.data || []);
			return null != e && !_(Oi(e))
		}
	}

	function ch(t) {
		for(var e = 0; e < t.length && null == t[e];) e++;
		return t[e]
	}

	function dh(t) {
		this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
	}

	function fh(t) {
		this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
	}

	function ph(t) {
		return t._map || (t._map = z(t.categories))
	}

	function gh(t) {
		return S(t) && null != t.value ? t.value : t + ""
	}

	function vh(t, e, n, i) {
		var r = {},
			a = t[1] - t[0],
			o = r.interval = Ka(a / e, !0);
		null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
		var s = r.intervalPrecision = mh(o),
			l = r.niceTickExtent = [Fx(Math.ceil(t[0] / o) * o, s), Fx(Math.floor(t[1] / o) * o, s)];
		return xh(l, t), r
	}

	function mh(t) {
		return Ga(t) + 2
	}

	function yh(t, e, n) {
		t[e] = Math.max(Math.min(t[e], n[1]), n[0])
	}

	function xh(t, e) {
		!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), yh(t, 0, e), yh(t, 1, e), t[0] > t[1] && (t[0] = t[1])
	}

	function _h(t, e, n, i) {
		var r = [];
		if(!t) return r;
		var a = 1e4;
		e[0] < n[0] && r.push(e[0]);
		for(var o = n[0]; o <= n[1] && (r.push(o), o = Fx(o + t, i), o !== r[r.length - 1]);)
			if(r.length > a) return [];
		return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
	}

	function wh(t) {
		return t.get("stack") || Gx + t.seriesIndex
	}

	function bh(t) {
		return t.dim + t.index
	}

	function Sh(t, e) {
		var n = [];
		return e.eachSeriesByType(t, function(t) {
			Dh(t) && !Ah(t) && n.push(t)
		}), n
	}

	function Mh(t) {
		var e = [];
		return f(t, function(t) {
			var n = t.getData(),
				i = t.coordinateSystem,
				r = i.getBaseAxis(),
				a = r.getExtent(),
				o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
				s = za(t.get("barWidth"), o),
				l = za(t.get("barMaxWidth"), o),
				h = t.get("barGap"),
				u = t.get("barCategoryGap");
			e.push({
				bandWidth: o,
				barWidth: s,
				barMaxWidth: l,
				barGap: h,
				barCategoryGap: u,
				axisKey: bh(r),
				stackId: wh(t)
			})
		}), Ih(e)
	}

	function Ih(t) {
		var e = {};
		f(t, function(t) {
			var n = t.axisKey,
				i = t.bandWidth,
				r = e[n] || {
					bandWidth: i,
					remainedWidth: i,
					autoWidthCount: 0,
					categoryGap: "20%",
					gap: "30%",
					stacks: {}
				},
				a = r.stacks;
			e[n] = r;
			var o = t.stackId;
			a[o] || r.autoWidthCount++, a[o] = a[o] || {
				width: 0,
				maxWidth: 0
			};
			var s = t.barWidth;
			s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
			var l = t.barMaxWidth;
			l && (a[o].maxWidth = l);
			var h = t.barGap;
			null != h && (r.gap = h);
			var u = t.barCategoryGap;
			null != u && (r.categoryGap = u)
		});
		var n = {};
		return f(e, function(t, e) {
			n[e] = {};
			var i = t.stacks,
				r = t.bandWidth,
				a = za(t.categoryGap, r),
				o = za(t.gap, 1),
				s = t.remainedWidth,
				l = t.autoWidthCount,
				h = (s - a) / (l + (l - 1) * o);
			h = Math.max(h, 0), f(i, function(t) {
				var e = t.maxWidth;
				e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
			}), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
			var u, c = 0;
			f(i, function(t) {
				t.width || (t.width = h), u = t, c += t.width * (1 + o)
			}), u && (c -= u.width * o);
			var d = -c / 2;
			f(i, function(t, i) {
				n[e][i] = n[e][i] || {
					offset: d,
					width: t.width
				}, d += t.width * (1 + o)
			})
		}), n
	}

	function Th(t, e, n) {
		if(t && e) {
			var i = t[bh(e)];
			return null != i && null != n && (i = i[wh(n)]), i
		}
	}

	function Ch(t, e) {
		var n = Sh(t, e),
			i = Mh(n),
			r = {};
		f(n, function(t) {
			var e = t.getData(),
				n = t.coordinateSystem,
				a = n.getBaseAxis(),
				o = wh(t),
				s = i[bh(a)][o],
				l = s.offset,
				h = s.width,
				u = n.getOtherAxis(a),
				c = t.get("barMinHeight") || 0;
			r[o] = r[o] || [], e.setLayout({
				offset: l,
				size: h
			});
			for(var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = sh(e, d), g = u.isHorizontal(), v = kh(a, u, p), m = 0, y = e.count(); y > m; m++) {
				var x = e.get(d, m),
					_ = e.get(f, m);
				if(!isNaN(x)) {
					var w = x >= 0 ? "p" : "n",
						b = v;
					p && (r[o][_] || (r[o][_] = {
						p: v,
						n: v
					}), b = r[o][_][w]);
					var S, M, I, T;
					if(g) {
						var C = n.dataToPoint([x, _]);
						S = b, M = C[1] + l, I = C[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][_][w] += I)
					} else {
						var C = n.dataToPoint([_, x]);
						S = C[0] + l, M = b, I = h, T = C[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (r[o][_][w] += T)
					}
					e.setItemLayout(m, {
						x: S,
						y: M,
						width: I,
						height: T
					})
				}
			}
		}, this)
	}

	function Dh(t) {
		return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
	}

	function Ah(t) {
		return t.pipelineContext && t.pipelineContext.large
	}

	function kh(t, e, n) {
		return h(t.getAxesOnZeroOf(), e) >= 0 || n ? e.toGlobalCoord(e.dataToCoord(0)) : e.getGlobalExtent()[0]
	}

	function Ph(t, e) {
		return a_(t, r_(e))
	}

	function Lh(t, e) {
		var n, i, r, a = t.type,
			o = e.getMin(),
			s = e.getMax(),
			l = null != o,
			h = null != s,
			u = t.getExtent();
		"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = za(i[0], 1), i[1] = za(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
			min: u[0],
			max: u[1]
		})), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
			min: u[0],
			max: u[1]
		})), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
		var c = e.ecModel;
		if(c && "time" === a) {
			var d, p = Sh("bar", c);
			if(f(p, function(t) {
					d |= t.getBaseAxis() === e.axis
				}), d) {
				var g = Mh(p),
					v = Oh(o, s, e, g);
				o = v.min, s = v.max
			}
		}
		return [o, s]
	}

	function Oh(t, e, n, i) {
		var r = n.axis.getExtent(),
			a = r[1] - r[0],
			o = Th(i, n.axis);
		if(void 0 === o) return {
			min: t,
			max: e
		};
		var s = 1 / 0;
		f(o, function(t) {
			s = Math.min(t.offset, s)
		});
		var l = -1 / 0;
		f(o, function(t) {
			l = Math.max(t.offset + t.width, l)
		}), s = Math.abs(s), l = Math.abs(l);
		var h = s + l,
			u = e - t,
			c = 1 - (s + l) / a,
			d = u / c - u;
		return e += d * (l / h), t -= d * (s / h), {
			min: t,
			max: e
		}
	}

	function Bh(t, e) {
		var n = Lh(t, e),
			i = null != e.getMin(),
			r = null != e.getMax(),
			a = e.get("splitNumber");
		"log" === t.type && (t.base = e.get("logBase"));
		var o = t.type;
		t.setExtent(n[0], n[1]), t.niceExtent({
			splitNumber: a,
			fixMin: i,
			fixMax: r,
			minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
			maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
		});
		var s = e.get("interval");
		null != s && t.setInterval && t.setInterval(s)
	}

	function Eh(t, e) {
		if(e = e || t.get("type")) switch(e) {
			case "category":
				return new zx(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
			case "value":
				return new Hx;
			default:
				return(dh.getClass(e) || Hx).create(t)
		}
	}

	function Nh(t) {
		var e = t.scale.getExtent(),
			n = e[0],
			i = e[1];
		return !(n > 0 && i > 0 || 0 > n && 0 > i)
	}

	function Rh(t) {
		var e = t.getLabelModel().get("formatter"),
			n = "category" === t.type ? t.scale.getExtent()[0] : null;
		return "string" == typeof e ? e = function(t) {
			return function(e) {
				return t.replace("{value}", null != e ? e : "")
			}
		}(e) : "function" == typeof e ? function(i, r) {
			return null != n && (r = i - n), e(zh(t, i), r)
		} : function(e) {
			return t.scale.getLabel(e)
		}
	}

	function zh(t, e) {
		return "category" === t.type ? t.scale.getLabel(e) : e
	}

	function Fh(t) {
		var e = t.model,
			n = t.scale;
		if(e.get("axisLabel.show") && !n.isBlank()) {
			var i, r, a = "category" === t.type,
				o = n.getExtent();
			a ? r = n.count() : (i = n.getTicks(), r = i.length);
			var s, l = t.getLabelModel(),
				h = Rh(t),
				u = 1;
			r > 40 && (u = Math.ceil(r / 40));
			for(var c = 0; r > c; c += u) {
				var d = i ? i[c] : o[0] + c,
					f = h(d),
					p = l.getTextRect(f),
					g = Vh(p, l.get("rotate") || 0);
				s ? s.union(g) : s = g
			}
			return s
		}
	}

	function Vh(t, e) {
		var n = e * Math.PI / 180,
			i = t.plain(),
			r = i.width,
			a = i.height,
			o = r * Math.cos(n) + a * Math.sin(n),
			s = r * Math.sin(n) + a * Math.cos(n),
			l = new rn(i.x, i.y, o, s);
		return l
	}

	function Hh(t, e) {
		if("image" !== this.type) {
			var n = this.style,
				i = this.shape;
			i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
		}
	}

	function Gh(t, e, n, i, r, a, o) {
		var s = 0 === t.indexOf("empty");
		s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
		var l;
		return l = 0 === t.indexOf("image://") ? Yr(t.slice(8), new rn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Xr(t.slice(7), {}, new rn(e, n, i, r), o ? "center" : "cover") : new x_({
			shape: {
				symbolType: t,
				x: e,
				y: n,
				width: i,
				height: r
			}
		}), l.__isEmptyBrush = s, l.setColor = Hh, l.setColor(a), l
	}

	function Wh(t) {
		return hh(t.getSource(), t)
	}

	function Xh(t, e) {
		var n = e;
		ka.isInstance(e) || (n = new ka(e), c(n, c_));
		var i = Eh(n);
		return i.setExtent(t[0], t[1]), Bh(i, n), i
	}

	function Yh(t) {
		c(t, c_)
	}

	function jh(t, e) {
		return Math.abs(t - e) < b_
	}

	function Uh(t, e, n) {
		var i = 0,
			r = t[0];
		if(!r) return !1;
		for(var a = 1; a < t.length; a++) {
			var o = t[a];
			i += br(r[0], r[1], o[0], o[1], e, n), r = o
		}
		var s = t[0];
		return jh(r[0], s[0]) && jh(r[1], s[1]) || (i += br(r[0], r[1], s[0], s[1], e, n)), 0 !== i
	}

	function qh(t, e, n) {
		if(this.name = t, this.geometries = e, n) n = [n[0], n[1]];
		else {
			var i = this.getBoundingRect();
			n = [i.x + i.width / 2, i.y + i.height / 2]
		}
		this.center = n
	}

	function Zh(t) {
		if(!t.UTF8Encoding) return t;
		var e = t.UTF8Scale;
		null == e && (e = 1024);
		for(var n = t.features, i = 0; i < n.length; i++)
			for(var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
				var h = o[l];
				if("Polygon" === a.type) o[l] = Kh(h, s[l], e);
				else if("MultiPolygon" === a.type)
					for(var u = 0; u < h.length; u++) {
						var c = h[u];
						h[u] = Kh(c, s[l][u], e)
					}
			}
		return t.UTF8Encoding = !1, t
	}

	function Kh(t, e, n) {
		for(var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
			var s = t.charCodeAt(o) - 64,
				l = t.charCodeAt(o + 1) - 64;
			s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
		}
		return i
	}

	function $h(t) {
		return "category" === t.type ? Jh(t) : nu(t)
	}

	function Qh(t, e) {
		return "category" === t.type ? eu(t, e) : {
			ticks: t.scale.getTicks()
		}
	}

	function Jh(t) {
		var e = t.getLabelModel(),
			n = tu(t, e);
		return !e.get("show") || t.scale.isBlank() ? {
			labels: [],
			labelCategoryInterval: n.labelCategoryInterval
		} : n
	}

	function tu(t, e) {
		var n = iu(t, "labels"),
			i = cu(e),
			r = ru(n, i);
		if(r) return r;
		var a, o;
		return w(i) ? a = uu(t, i) : (o = "auto" === i ? ou(t) : i, a = hu(t, o)), au(n, i, {
			labels: a,
			labelCategoryInterval: o
		})
	}

	function eu(t, e) {
		var n = iu(t, "ticks"),
			i = cu(e),
			r = ru(n, i);
		if(r) return r;
		var a, o;
		if((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = uu(t, i, !0);
		else if("auto" === i) {
			var s = tu(t, t.getLabelModel());
			o = s.labelCategoryInterval, a = p(s.labels, function(t) {
				return t.tickValue
			})
		} else o = i, a = hu(t, o, !0);
		return au(n, i, {
			ticks: a,
			tickCategoryInterval: o
		})
	}

	function nu(t) {
		var e = t.scale.getTicks(),
			n = Rh(t);
		return {
			labels: p(e, function(e, i) {
				return {
					formattedLabel: n(e, i),
					rawLabel: t.scale.getLabel(e),
					tickValue: e
				}
			})
		}
	}

	function iu(t, e) {
		return M_(t)[e] || (M_(t)[e] = [])
	}

	function ru(t, e) {
		for(var n = 0; n < t.length; n++)
			if(t[n].key === e) return t[n].value
	}

	function au(t, e, n) {
		return t.push({
			key: e,
			value: n
		}), n
	}

	function ou(t) {
		var e = M_(t).autoInterval;
		return null != e ? e : M_(t).autoInterval = t.calculateCategoryInterval()
	}

	function su(t) {
		var e = lu(t),
			n = Rh(t),
			i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
			r = t.scale,
			a = r.getExtent(),
			o = r.count();
		if(a[1] - a[0] < 1) return 0;
		var s = 1;
		o > 40 && (s = Math.max(1, Math.floor(o / 40)));
		for(var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
			var p = 0,
				g = 0,
				v = Sn(n(l), e.font, "center", "top");
			p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
		}
		var m = d / u,
			y = f / c;
		isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
		var x = Math.max(0, Math.floor(Math.min(m, y))),
			_ = M_(t.model),
			w = _.lastAutoInterval,
			b = _.lastTickCount;
		return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - o) <= 1 && w > x ? x = w : (_.lastTickCount = o, _.lastAutoInterval = x), x
	}

	function lu(t) {
		var e = t.getLabelModel();
		return {
			axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
			labelRotate: e.get("rotate") || 0,
			font: e.getFont()
		}
	}

	function hu(t, e, n) {
		function i(t) {
			l.push(n ? t : {
				formattedLabel: r(t),
				rawLabel: a.getLabel(t),
				tickValue: t
			})
		}
		var r = Rh(t),
			a = t.scale,
			o = a.getExtent(),
			s = t.getLabelModel(),
			l = [],
			h = Math.max((e || 0) + 1, 1),
			u = o[0],
			c = a.count();
		0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
		var d = {
			min: s.get("showMinLabel"),
			max: s.get("showMaxLabel")
		};
		d.min && u !== o[0] && i(o[0]);
		for(var f = u; f <= o[1]; f += h) i(f);
		return d.max && f !== o[1] && i(o[1]), l
	}

	function uu(t, e, n) {
		var i = t.scale,
			r = Rh(t),
			a = [];
		return f(i.getTicks(), function(t) {
			var o = i.getLabel(t);
			e(t, o) && a.push(n ? t : {
				formattedLabel: r(t),
				rawLabel: o,
				tickValue: t
			})
		}), a
	}

	function cu(t) {
		var e = t.get("interval");
		return null == e ? "auto" : e
	}

	function du(t, e) {
		var n = t[1] - t[0],
			i = e,
			r = n / i / 2;
		t[0] += r, t[1] -= r
	}

	function fu(t, e, n, i, r) {
		function a(t, e) {
			return u ? t > e : e > t
		}
		var o = e.length;
		if(t.onBand && !i && o) {
			var s, l = t.getExtent();
			if(1 === o) e[0].coord = l[0], s = e[1] = {
				coord: l[0]
			};
			else {
				var h = e[1].coord - e[0].coord;
				f(e, function(t) {
					t.coord -= h / 2;
					var e = e || 0;
					e % 2 > 0 && (t.coord -= h / (2 * (e + 1)))
				}), s = {
					coord: e[o - 1].coord + h
				}, e.push(s)
			}
			var u = l[0] > l[1];
			a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
				coord: l[0]
			}), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
				coord: l[1]
			})
		}
	}

	function pu(t) {
		return this._axes[t]
	}

	function gu(t) {
		A_.call(this, t)
	}

	function vu(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function mu(t, e) {
		return t.getCoordSysModel() === e
	}

	function yu(t, e, n) {
		this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
	}

	function xu(t, e, n) {
		n.getAxesOnZeroOf = function() {
			return i ? [i] : []
		};
		var i, r = t[e],
			a = n.model,
			o = a.get("axisLine.onZero"),
			s = a.get("axisLine.onZeroAxisIndex");
		if(o) {
			if(null != s) return void(_u(r[s]) && (i = r[s]));
			for(var l in r)
				if(r.hasOwnProperty(l) && _u(r[l])) {
					i = r[l];
					break
				}
		}
	}

	function _u(t) {
		return t && "category" !== t.type && "time" !== t.type && Nh(t)
	}

	function wu(t, e) {
		var n = t.getExtent(),
			i = n[0] + n[1];
		t.toGlobalCoord = "x" === t.dim ? function(t) {
			return t + e
		} : function(t) {
			return i - t + e
		}, t.toLocalCoord = "x" === t.dim ? function(t) {
			return t - e
		} : function(t) {
			return i - t + e
		}
	}

	function bu(t) {
		return p(z_, function(e) {
			var n = t.getReferringComponents(e)[0];
			return n
		})
	}

	function Su(t) {
		return "cartesian2d" === t.get("coordinateSystem")
	}

	function Mu(t, e) {
		var n = t.mapDimension("defaultedLabel", !0),
			i = n.length;
		if(1 === i) return cs(t, e, n[0]);
		if(i) {
			for(var r = [], a = 0; a < n.length; a++) {
				var o = cs(t, e, n[a]);
				r.push(o)
			}
			return r.join(" ")
		}
	}

	function Iu(t, e, n, i, r, a) {
		var o = n.getModel("label"),
			s = n.getModel("emphasis.label");
		ua(t, e, o, s, {
			labelFetcher: r,
			labelDataIndex: a,
			defaultText: Mu(r.getData(), a),
			isRectText: !0,
			autoColor: i
		}), Tu(t), Tu(e)
	}

	function Tu(t, e) {
		"outside" === t.textPosition && (t.textPosition = e)
	}

	function Cu(t, e, n) {
		n.style.text = null, wa(n, {
			shape: {
				width: 0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function Du(t, e, n) {
		n.style.text = null, wa(n, {
			shape: {
				r: n.shape.r0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function Au(t, e, n, i, r, a, o, l) {
		var h = e.getItemVisual(n, "color"),
			u = e.getItemVisual(n, "opacity"),
			c = i.getModel("itemStyle"),
			d = i.getModel("emphasis.itemStyle").getBarItemStyle();
		l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
			fill: h,
			opacity: u
		}, c.getBarItemStyle()));
		var f = i.getShallow("cursor");
		f && t.attr("cursor", f);
		var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
		l || Iu(t.style, d, i, h, a, n, p), ha(t, d)
	}

	function ku(t, e) {
		var n = t.get(G_) || 0;
		return Math.min(n, Math.abs(e.width), Math.abs(e.height))
	}

	function Pu(t, e, n) {
		var i = t.getData(),
			r = [],
			a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
		r[1 - a] = i.getLayout("valueAxisStart");
		var o = new Y_({
			shape: {
				points: i.getLayout("largePoints")
			},
			incremental: !!n,
			__startPoint: r,
			__valueIdx: a
		});
		e.add(o), Lu(o, t, i)
	}

	function Lu(t, e, n) {
		var i = n.getVisual("borderColor") || n.getVisual("color"),
			r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
		t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
	}

	function Ou(t) {
		var e = {
			componentType: t.mainType
		};
		return e[t.mainType + "Index"] = t.componentIndex, e
	}

	function Bu(t, e, n, i) {
		var r, a, o = Ya(n - t.rotation),
			s = i[0] > i[1],
			l = "start" === e && !s || "start" !== e && s;
		return ja(o - j_ / 2) ? (a = l ? "bottom" : "top", r = "center") : ja(o - 1.5 * j_) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * j_ > o && o > j_ / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
			rotation: o,
			textAlign: r,
			textVerticalAlign: a
		}
	}

	function Eu(t) {
		var e = t.get("tooltip");
		return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
	}

	function Nu(t, e, n) {
		var i = t.get("axisLabel.showMinLabel"),
			r = t.get("axisLabel.showMaxLabel");
		e = e || [], n = n || [];
		var a = e[0],
			o = e[1],
			s = e[e.length - 1],
			l = e[e.length - 2],
			h = n[0],
			u = n[1],
			c = n[n.length - 1],
			d = n[n.length - 2];
		i === !1 ? (Ru(a), Ru(h)) : zu(a, o) && (i ? (Ru(o), Ru(u)) : (Ru(a), Ru(h))), r === !1 ? (Ru(s), Ru(c)) : zu(l, s) && (r ? (Ru(l), Ru(d)) : (Ru(s), Ru(c)))
	}

	function Ru(t) {
		t && (t.ignore = !0)
	}

	function zu(t, e) {
		var n = t && t.getBoundingRect().clone(),
			i = e && e.getBoundingRect().clone();
		if(n && i) {
			var r = pe([]);
			return ye(r, r, -t.rotation), n.applyTransform(ve([], r, t.getLocalTransform())), i.applyTransform(ve([], r, e.getLocalTransform())), n.intersect(i)
		}
	}

	function Fu(t) {
		return "middle" === t || "center" === t
	}

	function Vu(t, e, n) {
		var i = e.axis;
		if(e.get("axisTick.show") && !i.scale.isBlank()) {
			for(var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
				var p = l[f].coord;
				h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * o, c && (ae(h, h, c), ae(u, u, c));
				var g = new Rv(qr({
					anid: "tick_" + l[f].tickValue,
					shape: {
						x1: h[0],
						y1: h[1],
						x2: u[0],
						y2: u[1]
					},
					style: s(a.getLineStyle(), {
						stroke: e.get("axisLine.lineStyle.color")
					}),
					z2: 2,
					silent: !0
				}));
				t.group.add(g), d.push(g)
			}
			return d
		}
	}

	function Hu(t, e, n) {
		var i = e.axis,
			r = D(n.axisLabelShow, e.get("axisLabel.show"));
		if(r && !i.scale.isBlank()) {
			var a = e.getModel("axisLabel"),
				o = a.get("margin"),
				s = i.getViewLabels(),
				l = (D(n.labelRotate, a.get("rotate")) || 0) * j_ / 180,
				h = Z_(n.rotation, l, n.labelDirection),
				u = e.getCategories(!0),
				c = [],
				d = Eu(e),
				p = e.get("triggerEvent");
			return f(s, function(r, s) {
				var l = r.tickValue,
					f = r.formattedLabel,
					g = r.rawLabel,
					v = a;
				u && u[l] && u[l].textStyle && (v = new ka(u[l].textStyle, a, e.ecModel));
				var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
					y = i.dataToCoord(l),
					x = [y, n.labelOffset + n.labelDirection * o],
					_ = new Tv({
						anid: "label_" + l,
						position: x,
						rotation: h.rotation,
						silent: d,
						z2: 10
					});
				ca(_.style, v, {
					text: f,
					textAlign: v.getShallow("align", !0) || h.textAlign,
					textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
					textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
				}), p && (_.eventData = Ou(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), c.push(_), t.group.add(_), _.decomposeTransform()
			}), c
		}
	}

	function Gu(t, e) {
		var n = {
			axesInfo: {},
			seriesInvolved: !1,
			coordSysAxesInfo: {},
			coordSysMap: {}
		};
		return Wu(n, t, e), n.seriesInvolved && Yu(n, t), n
	}

	function Wu(t, e, n) {
		var i = e.getComponent("tooltip"),
			r = e.getComponent("axisPointer"),
			a = r.get("link", !0) || [],
			o = [];
		K_(n.getCoordinateSystems(), function(n) {
			function s(i, s, l) {
				var u = l.model.getModel("axisPointer", r),
					d = u.get("show");
				if(d && ("auto" !== d || i || $u(u))) {
					null == s && (s = u.get("triggerTooltip")), u = i ? Xu(l, c, r, e, i, s) : u;
					var f = u.get("snap"),
						p = Qu(l.model),
						g = s || f || "category" === l.type,
						v = t.axesInfo[p] = {
							key: p,
							axis: l,
							coordSys: n,
							axisPointerModel: u,
							triggerTooltip: s,
							involveSeries: g,
							snap: f,
							useHandle: $u(u),
							seriesModels: []
						};
					h[p] = v, t.seriesInvolved |= g;
					var m = ju(a, l);
					if(null != m) {
						var y = o[m] || (o[m] = {
							axesInfo: {}
						});
						y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
					}
				}
			}
			if(n.axisPointerEnabled) {
				var l = Qu(n.model),
					h = t.coordSysAxesInfo[l] = {};
				t.coordSysMap[l] = n;
				var u = n.model,
					c = u.getModel("tooltip", i);
				if(K_(n.getAxes(), $_(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
					var d = "axis" === c.get("trigger"),
						f = "cross" === c.get("axisPointer.type"),
						p = n.getTooltipAxes(c.get("axisPointer.axis"));
					(d || f) && K_(p.baseAxes, $_(s, f ? "cross" : !0, d)), f && K_(p.otherAxes, $_(s, "cross", !1))
				}
			}
		})
	}

	function Xu(t, e, n, r, a, o) {
		var l = e.getModel("axisPointer"),
			h = {};
		K_(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function(t) {
			h[t] = i(l.get(t))
		}), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
		var u = h.label || (h.label = {});
		if(null == u.show && (u.show = !1), "cross" === a) {
			var c = l.get("label.show");
			if(u.show = null != c ? c : !0, !o) {
				var d = h.lineStyle = l.get("crossStyle");
				d && s(u, d.textStyle)
			}
		}
		return t.model.getModel("axisPointer", new ka(h, n, r))
	}

	function Yu(t, e) {
		e.eachSeries(function(e) {
			var n = e.coordinateSystem,
				i = e.get("tooltip.trigger", !0),
				r = e.get("tooltip.show", !0);
			n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && K_(t.coordSysAxesInfo[Qu(n.model)], function(t) {
				var i = t.axis;
				n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
			})
		}, this)
	}

	function ju(t, e) {
		for(var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
			var a = t[r] || {};
			if(Uu(a[i + "AxisId"], n.id) || Uu(a[i + "AxisIndex"], n.componentIndex) || Uu(a[i + "AxisName"], n.name)) return r
		}
	}

	function Uu(t, e) {
		return "all" === t || _(t) && h(t, e) >= 0 || t === e
	}

	function qu(t) {
		var e = Zu(t);
		if(e) {
			var n = e.axisPointerModel,
				i = e.axis.scale,
				r = n.option,
				a = n.get("status"),
				o = n.get("value");
			null != o && (o = i.parse(o));
			var s = $u(n);
			null == a && (r.status = s ? "show" : "hide");
			var l = i.getExtent().slice();
			l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
		}
	}

	function Zu(t) {
		var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
		return e && e.axesInfo[Qu(t)]
	}

	function Ku(t) {
		var e = Zu(t);
		return e && e.axisPointerModel
	}

	function $u(t) {
		return !!t.get("handle.show")
	}

	function Qu(t) {
		return t.type + "||" + t.id
	}

	function Ju(t, e, n, i, r, a) {
		var o = Q_.getAxisPointerClass(t.axisPointerClass);
		if(o) {
			var s = Ku(e);
			s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : tc(t, i)
		}
	}

	function tc(t, e, n) {
		var i = t._axisPointer;
		i && i.dispose(e, n), t._axisPointer = null
	}

	function ec(t, e, n) {
		n = n || {};
		var i = t.coordinateSystem,
			r = e.axis,
			a = {},
			o = r.getAxesOnZeroOf()[0],
			s = r.position,
			l = o ? "onZero" : s,
			h = r.dim,
			u = i.getRect(),
			c = [u.x, u.x + u.width, u.y, u.y + u.height],
			d = {
				left: 0,
				right: 1,
				top: 0,
				bottom: 1,
				onZero: 2
			},
			f = e.get("offset") || 0,
			p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
		if(o) {
			var g = o.toGlobalCoord(o.dataToCoord(0));
			p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
		}
		a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
		var v = {
			top: -1,
			bottom: 1,
			left: -1,
			right: 1
		};
		a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
		var m = e.get("axisLabel.rotate");
		return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
	}

	function nc(t, e, n) {
		pp.call(this), this.updateData(t, e, n)
	}

	function ic(t) {
		return [t[0] / 2, t[1] / 2]
	}

	function rc(t, e) {
		this.parent.drift(t, e)
	}

	function ac(t) {
		this.group = new pp, this._symbolCtor = t || nc
	}

	function oc(t, e, n, i) {
		return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
	}

	function sc(t) {
		return null == t || S(t) || (t = {
			isIgnore: t
		}), t || {}
	}

	function lc(t) {
		var e = t.hostModel;
		return {
			itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
			hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
			symbolRotate: e.get("symbolRotate"),
			symbolOffset: e.get("symbolOffset"),
			hoverAnimation: e.get("hoverAnimation"),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label"),
			cursorStyle: e.get("cursor")
		}
	}

	function hc(t, e, n) {
		var i, r = t.getBaseAxis(),
			a = t.getOtherAxis(r),
			o = uc(a, n),
			s = r.dim,
			l = a.dim,
			h = e.mapDimension(l),
			u = e.mapDimension(s),
			c = "x" === l || "radius" === l ? 1 : 0,
			d = p(t.dimensions, function(t) {
				return e.mapDimension(t)
			}),
			f = e.getCalculationInfo("stackResultDimension");
		return(i |= sh(e, d[0])) && (d[0] = f), (i |= sh(e, d[1])) && (d[1] = f), {
			dataDimsForPoint: d,
			valueStart: o,
			valueAxisDim: l,
			baseAxisDim: s,
			stacked: !!i,
			valueDim: h,
			baseDim: u,
			baseDataOffset: c,
			stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
		}
	}

	function uc(t, e) {
		var n = 0,
			i = t.scale.getExtent();
		return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
	}

	function cc(t, e, n, i) {
		var r = 0 / 0;
		t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
		var a = t.baseDataOffset,
			o = [];
		return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o)
	}

	function dc(t, e) {
		var n = [];
		return e.diff(t).add(function(t) {
			n.push({
				cmd: "+",
				idx: t
			})
		}).update(function(t, e) {
			n.push({
				cmd: "=",
				idx: e,
				idx1: t
			})
		}).remove(function(t) {
			n.push({
				cmd: "-",
				idx: t
			})
		}).execute(), n
	}

	function fc(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}

	function pc(t, e, n, i, r, a, o, s, l, h) {
		return "none" !== h && h ? gc.apply(this, arguments) : vc.apply(this, arguments)
	}

	function gc(t, e, n, i, r, a, o, s, l, h, u) {
		for(var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if(d >= r || 0 > d) break;
			if(fc(p)) {
				if(u) {
					d += a;
					continue
				}
				break
			}
			if(d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
			else if(l > 0) {
				var g = e[c],
					v = "y" === h ? 1 : 0,
					m = (p[v] - g[v]) * l;
				pw(vw, g), vw[v] = g[v] + m, pw(mw, p), mw[v] = p[v] - m, t.bezierCurveTo(vw[0], vw[1], mw[0], mw[1], p[0], p[1])
			} else t.lineTo(p[0], p[1]);
			c = d, d += a
		}
		return f
	}

	function vc(t, e, n, i, r, a, o, s, l, h, u) {
		for(var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if(d >= r || 0 > d) break;
			if(fc(p)) {
				if(u) {
					d += a;
					continue
				}
				break
			}
			if(d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), pw(vw, p);
			else if(l > 0) {
				var g = d + a,
					v = e[g];
				if(u)
					for(; v && fc(e[g]);) g += a, v = e[g];
				var m = .5,
					y = e[c],
					v = e[g];
				if(!v || fc(v)) pw(mw, p);
				else {
					fc(v) && !u && (v = p), U(gw, v, y);
					var x, _;
					if("x" === h || "y" === h) {
						var w = "x" === h ? 0 : 1;
						x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - v[w])
					} else x = Af(p, y), _ = Af(p, v);
					m = _ / (_ + x), fw(mw, p, gw, -l * (1 - m))
				}
				cw(vw, vw, s), dw(vw, vw, o), cw(mw, mw, s), dw(mw, mw, o), t.bezierCurveTo(vw[0], vw[1], mw[0], mw[1], p[0], p[1]), fw(vw, p, gw, l * m)
			} else t.lineTo(p[0], p[1]);
			c = d, d += a
		}
		return f
	}

	function mc(t, e) {
		var n = [1 / 0, 1 / 0],
			i = [-1 / 0, -1 / 0];
		if(e)
			for(var r = 0; r < t.length; r++) {
				var a = t[r];
				a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1])
			}
		return {
			min: e ? n : i,
			max: e ? i : n
		}
	}

	function yc(t, e) {
		if(t.length === e.length) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n],
					r = e[n];
				if(i[0] !== r[0] || i[1] !== r[1]) return
			}
			return !0
		}
	}

	function xc(t) {
		return "number" == typeof t ? t : t ? .5 : 0
	}

	function _c(t) {
		var e = t.getGlobalExtent();
		if(t.onBand) {
			var n = t.getBandWidth() / 2 - 1,
				i = e[1] > e[0] ? 1 : -1;
			e[0] += i * n, e[1] -= i * n
		}
		return e
	}

	function wc(t, e, n) {
		if(!n.valueDim) return [];
		for(var i = [], r = 0, a = e.count(); a > r; r++) i.push(cc(n, t, e, r));
		return i
	}

	function bc(t, e, n, i) {
		var r = _c(t.getAxis("x")),
			a = _c(t.getAxis("y")),
			o = t.getBaseAxis().isHorizontal(),
			s = Math.min(r[0], r[1]),
			l = Math.min(a[0], a[1]),
			h = Math.max(r[0], r[1]) - s,
			u = Math.max(a[0], a[1]) - l;
		if(n) s -= .5, h += .5, l -= .5, u += .5;
		else {
			var c = i.get("lineStyle.width") || 2,
				d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
			o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d)
		}
		var f = new Nv({
			shape: {
				x: s,
				y: l,
				width: h,
				height: u
			}
		});
		return e && (f.shape[o ? "width" : "height"] = 0, ba(f, {
			shape: {
				width: h,
				height: u
			}
		}, i)), f
	}

	function Sc(t, e, n, i) {
		var r = t.getAngleAxis(),
			a = t.getRadiusAxis(),
			o = a.getExtent().slice();
		o[0] > o[1] && o.reverse();
		var s = r.getExtent(),
			l = Math.PI / 180;
		n && (o[0] -= .5, o[1] += .5);
		var h = new kv({
			shape: {
				cx: Fa(t.cx, 1),
				cy: Fa(t.cy, 1),
				r0: Fa(o[0], 1),
				r: Fa(o[1], 1),
				startAngle: -s[0] * l,
				endAngle: -s[1] * l,
				clockwise: r.inverse
			}
		});
		return e && (h.shape.endAngle = -s[0] * l, ba(h, {
			shape: {
				endAngle: -s[1] * l
			}
		}, i)), h
	}

	function Mc(t, e, n, i) {
		return "polar" === t.type ? Sc(t, e, n, i) : bc(t, e, n, i)
	}

	function Ic(t, e, n) {
		for(var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
			var s = t[o + 1],
				l = t[o];
			a.push(l);
			var h = [];
			switch(n) {
				case "end":
					h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
					break;
				case "middle":
					var u = (l[r] + s[r]) / 2,
						c = [];
					h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
					break;
				default:
					h[r] = l[r], h[1 - r] = s[1 - r], a.push(h)
			}
		}
		return t[o] && a.push(t[o]), a
	}

	function Tc(t, e) {
		var n = t.getVisual("visualMeta");
		if(n && n.length && t.count() && "cartesian2d" === e.type) {
			for(var i, r, a = n.length - 1; a >= 0; a--) {
				var o = n[a].dimension,
					s = t.dimensions[o],
					l = t.getDimensionInfo(s);
				if(i = l && l.coordDim, "x" === i || "y" === i) {
					r = n[a];
					break
				}
			}
			if(r) {
				var h = e.getAxis(i),
					u = p(r.stops, function(t) {
						return {
							coord: h.toGlobalCoord(h.dataToCoord(t.value)),
							color: t.color
						}
					}),
					c = u.length,
					d = r.outerColors.slice();
				c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
				var g = 10,
					v = u[0].coord - g,
					m = u[c - 1].coord + g,
					y = m - v;
				if(.001 > y) return "transparent";
				f(u, function(t) {
					t.offset = (t.coord - v) / y
				}), u.push({
					offset: c ? u[c - 1].offset : .5,
					color: d[1] || "transparent"
				}), u.unshift({
					offset: c ? u[0].offset : .5,
					color: d[0] || "transparent"
				});
				var x = new Wv(0, 0, 0, 0, u, !0);
				return x[i] = v, x[i + "2"] = m, x
			}
		}
	}

	function Cc(t, e, n) {
		var i = t.get("showAllSymbol"),
			r = "auto" === i;
		if(!i || r) {
			var a = n.getAxesByScale("ordinal")[0];
			if(a && (!r || !Dc(a, e))) {
				var o = e.mapDimension(a.dim),
					s = {};
				return f(a.getViewLabels(), function(t) {
						s[t.tickValue] = 1
					}),
					function(t) {
						return !s.hasOwnProperty(e.get(o, t))
					}
			}
		}
	}

	function Dc(t, e) {
		var n = t.getExtent(),
			i = Math.abs(n[1] - n[0]) / t.scale.count();
		isNaN(i) && (i = 0);
		for(var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a)
			if(1.5 * nc.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
		return !0
	}

	function Ac(t, e, n, i) {
		var r = e.getData(),
			a = this.dataIndex,
			o = r.getName(a),
			s = e.get("selectedOffset");
		i.dispatchAction({
			type: "pieToggleSelect",
			from: t,
			name: o,
			seriesId: e.id
		}), r.each(function(t) {
			kc(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
		})
	}

	function kc(t, e, n, i, r) {
		var a = (e.startAngle + e.endAngle) / 2,
			o = Math.cos(a),
			s = Math.sin(a),
			l = n ? i : 0,
			h = [o * l, s * l];
		r ? t.animate().when(200, {
			position: h
		}).start("bounceOut") : t.attr("position", h)
	}

	function Pc(t, e) {
		function n() {
			a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
		}

		function i() {
			a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
		}
		pp.call(this);
		var r = new kv({
				z2: 2
			}),
			a = new Ev,
			o = new Tv;
		this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
	}

	function Lc(t, e, n, i, r, a, o) {
		function s(e, n, i) {
			for(var r = e; n > r; r++)
				if(t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
			l(n - 1, i / 2)
		}

		function l(e, n) {
			for(var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
		}

		function h(t, e, n, i, r, a) {
			for(var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++)
				if("center" !== t[s].position) {
					var h = Math.abs(t[s].y - i),
						u = t[s].len,
						c = t[s].len2,
						d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
					e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d
				}
		}
		t.sort(function(t, e) {
			return t.y - e.y
		});
		for(var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) u = t[g].y - c, 0 > u && s(g, d, -u, r), c = t[g].y + t[g].height;
		0 > o - c && l(d - 1, c - o);
		for(var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
		h(f, !1, e, n, i, r), h(p, !0, e, n, i, r)
	}

	function Oc(t, e, n, i, r, a) {
		for(var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
		Lc(s, e, n, i, 1, r, a), Lc(o, e, n, i, -1, r, a);
		for(var l = 0; l < t.length; l++) {
			var h = t[l].linePoints;
			if(h) {
				var u = h[1][0] - h[2][0];
				h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u
			}
		}
	}

	function Bc(t) {
		var e = t.mainData,
			n = t.datas;
		n || (n = {
			main: e
		}, t.datasAttr = {
			main: "data"
		}), t.datas = t.mainData = null, Vc(e, n, t), Nw(n, function(n) {
			Nw(e.TRANSFERABLE_METHODS, function(e) {
				n.wrapMethod(e, x(Ec, t))
			})
		}), e.wrapMethod("cloneShallow", x(Rc, t)), Nw(e.CHANGABLE_METHODS, function(n) {
			e.wrapMethod(n, x(Nc, t))
		}), O(n[e.dataType] === e)
	}

	function Ec(t, e) {
		if(Fc(this)) {
			var n = o({}, this[Rw]);
			n[this.dataType] = e, Vc(e, n, t)
		} else Hc(e, this.dataType, this[zw], t);
		return e
	}

	function Nc(t, e) {
		return t.struct && t.struct.update(this), e
	}

	function Rc(t, e) {
		return Nw(e[Rw], function(n, i) {
			n !== e && Hc(n.cloneShallow(), i, e, t)
		}), e
	}

	function zc(t) {
		var e = this[zw];
		return null == t || null == e ? e : e[Rw][t]
	}

	function Fc(t) {
		return t[zw] === t
	}

	function Vc(t, e, n) {
		t[Rw] = {}, Nw(e, function(e, i) {
			Hc(e, i, t, n)
		})
	}

	function Hc(t, e, n, i) {
		n[Rw][e] = t, t[zw] = n, t.dataType = e, i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] = t), t.getLinkedData = zc
	}

	function Gc(t, e, n) {
		this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = p(e || [], function(e) {
			return new ka(e, t, t.ecModel)
		}), this.leavesModel = new ka(n || {}, t, t.ecModel)
	}

	function Wc(t, e) {
		var n = e.children;
		t.parentNode !== e && (n.push(t), t.parentNode = e)
	}

	function Xc(t) {
		t.hierNode = {
			defaultAncestor: null,
			ancestor: t,
			prelim: 0,
			modifier: 0,
			change: 0,
			shift: 0,
			i: 0,
			thread: null
		};
		for(var e, n, i = [t]; e = i.pop();)
			if(n = e.children, e.isExpand && n.length)
				for(var r = n.length, a = r - 1; a >= 0; a--) {
					var o = n[a];
					o.hierNode = {
						defaultAncestor: null,
						ancestor: o,
						prelim: 0,
						modifier: 0,
						change: 0,
						shift: 0,
						i: a,
						thread: null
					}, i.push(o)
				}
	}

	function Yc(t, e) {
		var n = t.isExpand ? t.children : [],
			i = t.parentNode.children,
			r = t.hierNode.i ? i[t.hierNode.i - 1] : null;
		if(n.length) {
			Kc(t);
			var a = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2;
			r ? (t.hierNode.prelim = r.hierNode.prelim + e(t, r), t.hierNode.modifier = t.hierNode.prelim - a) : t.hierNode.prelim = a
		} else r && (t.hierNode.prelim = r.hierNode.prelim + e(t, r));
		t.parentNode.hierNode.defaultAncestor = $c(t, r, t.parentNode.hierNode.defaultAncestor || i[0], e)
	}

	function jc(t) {
		var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;
		t.setLayout({
			x: e
		}, !0), t.hierNode.modifier += t.parentNode.hierNode.modifier
	}

	function Uc(t) {
		return arguments.length ? t : nd
	}

	function qc(t, e) {
		var n = {};
		return t -= Math.PI / 2, n.x = e * Math.cos(t), n.y = e * Math.sin(t), n
	}

	function Zc(t, e) {
		return ho(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}

	function Kc(t) {
		for(var e = t.children, n = e.length, i = 0, r = 0; --n >= 0;) {
			var a = e[n];
			a.hierNode.prelim += i, a.hierNode.modifier += i, r += a.hierNode.change, i += a.hierNode.shift + r
		}
	}

	function $c(t, e, n, i) {
		if(e) {
			for(var r = t, a = t, o = a.parentNode.children[0], s = e, l = r.hierNode.modifier, h = a.hierNode.modifier, u = o.hierNode.modifier, c = s.hierNode.modifier; s = Qc(s), a = Jc(a), s && a;) {
				r = Qc(r), o = Jc(o), r.hierNode.ancestor = t;
				var d = s.hierNode.prelim + c - a.hierNode.prelim - h + i(s, a);
				d > 0 && (ed(td(s, t, n), t, d), h += d, l += d), c += s.hierNode.modifier, h += a.hierNode.modifier, l += r.hierNode.modifier, u += o.hierNode.modifier
			}
			s && !Qc(r) && (r.hierNode.thread = s, r.hierNode.modifier += c - l), a && !Jc(o) && (o.hierNode.thread = a, o.hierNode.modifier += h - u, n = t)
		}
		return n
	}

	function Qc(t) {
		var e = t.children;
		return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread
	}

	function Jc(t) {
		var e = t.children;
		return e.length && t.isExpand ? e[0] : t.hierNode.thread
	}

	function td(t, e, n) {
		return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor : n
	}

	function ed(t, e, n) {
		var i = n / (e.hierNode.i - t.hierNode.i);
		e.hierNode.change -= i, e.hierNode.shift += n, e.hierNode.modifier += n, e.hierNode.prelim += n, t.hierNode.change += i
	}

	function nd(t, e) {
		return t.parentNode === e.parentNode ? 1 : 2
	}

	function id(t, e) {
		var n = t.getItemLayout(e);
		return n && !isNaN(n.x) && !isNaN(n.y) && "none" !== t.getItemVisual(e, "symbol")
	}

	function rd(t, e, n) {
		return n.itemModel = e, n.itemStyle = e.getModel("itemStyle").getItemStyle(), n.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(), n.lineStyle = e.getModel("lineStyle").getLineStyle(), n.labelModel = e.getModel("label"), n.hoverLabelModel = e.getModel("emphasis.label"), n.symbolInnerColor = t.isExpand === !1 && 0 !== t.children.length ? n.itemStyle.fill : "#fff", n
	}

	function ad(t, e, n, i, r, a) {
		var o = !n,
			l = t.tree.getNodeByDataIndex(e),
			h = l.getModel(),
			a = rd(l, h, a),
			u = t.tree.root,
			c = l.parentNode === u ? l : l.parentNode || l,
			d = t.getItemGraphicEl(c.dataIndex),
			f = c.getLayout(),
			p = d ? {
				x: d.position[0],
				y: d.position[1],
				rawX: d.__radialOldRawX,
				rawY: d.__radialOldRawY
			} : f,
			g = l.getLayout();
		o ? (n = new nc(t, e, a), n.attr("position", [p.x, p.y])) : n.updateData(t, e, a), n.__radialOldRawX = n.__radialRawX, n.__radialOldRawY = n.__radialRawY, n.__radialRawX = g.rawX, n.__radialRawY = g.rawY, i.add(n), t.setItemGraphicEl(e, n), wa(n, {
			position: [g.x, g.y]
		}, r);
		var v = n.getSymbolPath();
		if("radial" === a.layout) {
			var m, y, x = u.children[0],
				_ = x.getLayout(),
				w = x.children.length;
			if(g.x === _.x && l.isExpand === !0) {
				var b = {};
				b.x = (x.children[0].getLayout().x + x.children[w - 1].getLayout().x) / 2, b.y = (x.children[0].getLayout().y + x.children[w - 1].getLayout().y) / 2, m = Math.atan2(b.y - _.y, b.x - _.x), 0 > m && (m = 2 * Math.PI + m), y = b.x < _.x, y && (m -= Math.PI)
			} else m = Math.atan2(g.y - _.y, g.x - _.x), 0 > m && (m = 2 * Math.PI + m), 0 === l.children.length || 0 !== l.children.length && l.isExpand === !1 ? (y = g.x < _.x, y && (m -= Math.PI)) : (y = g.x > _.x, y || (m -= Math.PI));
			var S = y ? "left" : "right";
			v.setStyle({
				textPosition: S,
				textRotation: -m,
				textOrigin: "center",
				verticalAlign: "middle"
			})
		}
		if(l.parentNode && l.parentNode !== u) {
			var M = n.__edge;
			M || (M = n.__edge = new Fv({
				shape: sd(a, p, p),
				style: s({
					opacity: 0
				}, a.lineStyle)
			})), wa(M, {
				shape: sd(a, f, g),
				style: {
					opacity: 1
				}
			}, r), i.add(M)
		}
	}

	function od(t, e, n, i, r, a) {
		for(var o, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, h = s.getModel(), a = rd(s, h, a), u = s.parentNode === l ? s : s.parentNode || s; o = u.getLayout(), null == o;) u = u.parentNode === l ? u : u.parentNode || u;
		wa(n, {
			position: [o.x + 1, o.y + 1]
		}, r, function() {
			i.remove(n), t.setItemGraphicEl(e, null)
		}), n.fadeOut(null, {
			keepLabel: !0
		});
		var c = n.__edge;
		c && wa(c, {
			shape: sd(a, o, o),
			style: {
				opacity: 0
			}
		}, r, function() {
			i.remove(c)
		})
	}

	function sd(t, e, n) {
		var i, r, a, o, s = t.orient;
		if("radial" === t.layout) {
			var l = e.rawX,
				h = e.rawY,
				u = n.rawX,
				c = n.rawY,
				d = qc(l, h),
				f = qc(l, h + (c - h) * t.curvature),
				p = qc(u, c + (h - c) * t.curvature),
				g = qc(u, c);
			return {
				x1: d.x,
				y1: d.y,
				x2: g.x,
				y2: g.y,
				cpx1: f.x,
				cpy1: f.y,
				cpx2: p.x,
				cpy2: p.y
			}
		}
		var l = e.x,
			h = e.y,
			u = n.x,
			c = n.y;
		return("LR" === s || "RL" === s) && (i = l + (u - l) * t.curvature, r = h, a = u + (l - u) * t.curvature, o = c), ("TB" === s || "BT" === s) && (i = l, r = h + (c - h) * t.curvature, a = u, o = c + (h - c) * t.curvature), {
			x1: l,
			y1: h,
			x2: u,
			y2: c,
			cpx1: i,
			cpy1: r,
			cpx2: a,
			cpy2: o
		}
	}

	function ld(t, e, n) {
		for(var i, r = [t], a = []; i = r.pop();)
			if(a.push(i), i.isExpand) {
				var o = i.children;
				if(o.length)
					for(var s = 0; s < o.length; s++) r.push(o[s])
			}
		for(; i = a.pop();) e(i, n)
	}

	function hd(t, e) {
		for(var n, i = [t]; n = i.pop();)
			if(e(n), n.isExpand) {
				var r = n.children;
				if(r.length)
					for(var a = r.length - 1; a >= 0; a--) i.push(r[a])
			}
	}

	function ud(t, e) {
		var n = Zc(t, e);
		t.layoutInfo = n;
		var i = t.get("layout"),
			r = 0,
			a = 0,
			o = null;
		"radial" === i ? (r = 2 * Math.PI, a = Math.min(n.height, n.width) / 2, o = Uc(function(t, e) {
			return(t.parentNode === e.parentNode ? 1 : 2) / t.depth
		})) : (r = n.width, a = n.height, o = Uc());
		var s = t.getData().tree.root,
			l = s.children[0];
		if(l) {
			Xc(s), ld(l, Yc, o), s.hierNode.modifier = -l.hierNode.prelim, hd(l, jc);
			var h = l,
				u = l,
				c = l;
			hd(l, function(t) {
				var e = t.getLayout().x;
				e < h.getLayout().x && (h = t), e > u.getLayout().x && (u = t), t.depth > c.depth && (c = t)
			});
			var d = h === u ? 1 : o(h, u) / 2,
				f = d - h.getLayout().x,
				p = 0,
				g = 0,
				v = 0,
				m = 0;
			if("radial" === i) p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), hd(l, function(t) {
				v = (t.getLayout().x + f) * p, m = (t.depth - 1) * g;
				var e = qc(v, m);
				t.setLayout({
					x: e.x,
					y: e.y,
					rawX: v,
					rawY: m
				}, !0)
			});
			else {
				var y = t.getOrient();
				"RL" === y || "LR" === y ? (g = a / (u.getLayout().x + d + f), p = r / (c.depth - 1 || 1), hd(l, function(t) {
					m = (t.getLayout().x + f) * g, v = "LR" === y ? (t.depth - 1) * p : r - (t.depth - 1) * p, t.setLayout({
						x: v,
						y: m
					}, !0)
				})) : ("TB" === y || "BT" === y) && (p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), hd(l, function(t) {
					v = (t.getLayout().x + f) * p, m = "TB" === y ? (t.depth - 1) * g : a - (t.depth - 1) * g, t.setLayout({
						x: v,
						y: m
					}, !0)
				}))
			}
		}
	}

	function cd(t, e, n) {
		var i, r = {},
			a = "toggleSelected" === t;
		return n.eachComponent("legend", function(n) {
			a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
			var o = n.getData();
			f(o, function(t) {
				var e = t.get("name");
				if("\n" !== e && "" !== e) {
					var i = n.isSelected(e);
					r[e] = r.hasOwnProperty(e) ? r[e] && i : i
				}
			})
		}), {
			name: e.name,
			selected: r
		}
	}

	function dd(t, e) {
		var n = hm(e.get("padding")),
			i = e.getItemStyle(["color", "opacity"]);
		i.fill = e.get("backgroundColor");
		var t = new Nv({
			shape: {
				x: t.x - n[3],
				y: t.y - n[0],
				width: t.width + n[1] + n[3],
				height: t.height + n[0] + n[2],
				r: e.get("borderRadius")
			},
			style: i,
			silent: !0,
			z2: -1
		});
		return t
	}

	function fd(t, e) {
		e.dispatchAction({
			type: "legendToggleSelect",
			name: t
		})
	}

	function pd(t, e, n, i) {
		var r = n.getZr().storage.getDisplayList()[0];
		r && r.useHoverLayer || n.dispatchAction({
			type: "highlight",
			seriesName: t.name,
			name: e,
			excludeSeriesId: i
		})
	}

	function gd(t, e, n, i) {
		var r = n.getZr().storage.getDisplayList()[0];
		r && r.useHoverLayer || n.dispatchAction({
			type: "downplay",
			seriesName: t.name,
			name: e,
			excludeSeriesId: i
		})
	}

	function vd(t, e, n) {
		var i = t.getOrient(),
			r = [1, 1];
		r[i.index] = 0, uo(e, n, {
			type: "box",
			ignoreSize: r
		})
	}

	function md(t, e, n, i, r) {
		var a = t.axis;
		if(!a.scale.isBlank() && a.containData(e)) {
			if(!t.involveSeries) return void n.showPointer(t, e);
			var s = yd(e, t),
				l = s.payloadBatch,
				h = s.snapToValue;
			l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), n.showPointer(t, e, l, r), n.showTooltip(t, s, h)
		}
	}

	function yd(t, e) {
		var n = e.axis,
			i = n.dim,
			r = t,
			a = [],
			o = Number.MAX_VALUE,
			s = -1;
		return Jw(e.seriesModels, function(e) {
			var l, h, u = e.getData().mapDimension(i, !0);
			if(e.getAxisTooltipData) {
				var c = e.getAxisTooltipData(u, t, n);
				h = c.dataIndices, l = c.nestestValue
			} else {
				if(h = e.getData().indicesOfNearest(u[0], t, "category" === n.type ? .5 : null), !h.length) return;
				l = e.getData().get(u[0], h[0])
			}
			if(null != l && isFinite(l)) {
				var d = t - l,
					f = Math.abs(d);
				o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), Jw(h, function(t) {
					a.push({
						seriesIndex: e.seriesIndex,
						dataIndexInside: t,
						dataIndex: e.getData().getRawIndex(t)
					})
				}))
			}
		}), {
			payloadBatch: a,
			snapToValue: r
		}
	}

	function xd(t, e, n, i) {
		t[e.key] = {
			value: n,
			payloadBatch: i
		}
	}

	function _d(t, e, n, i) {
		var r = n.payloadBatch,
			a = e.axis,
			o = a.model,
			s = e.axisPointerModel;
		if(e.triggerTooltip && r.length) {
			var l = e.coordSys.model,
				h = Qu(l),
				u = t.map[h];
			u || (u = t.map[h] = {
				coordSysId: l.id,
				coordSysIndex: l.componentIndex,
				coordSysType: l.type,
				coordSysMainType: l.mainType,
				dataByAxis: []
			}, t.list.push(u)), u.dataByAxis.push({
				axisDim: a.dim,
				axisIndex: o.componentIndex,
				axisType: o.type,
				axisId: o.id,
				value: i,
				valueLabelOpt: {
					precision: s.get("label.precision"),
					formatter: s.get("label.formatter")
				},
				seriesDataIndices: r.slice()
			})
		}
	}

	function wd(t, e, n) {
		var i = n.axesInfo = [];
		Jw(e, function(e, n) {
			var r = e.axisPointerModel.option,
				a = t[n];
			a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
				axisDim: e.axis.dim,
				axisIndex: e.axis.model.componentIndex,
				value: r.value
			})
		})
	}

	function bd(t, e, n, i) {
		if(Td(e) || !t.list.length) return void i({
			type: "hideTip"
		});
		var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
		i({
			type: "showTip",
			escapeConnect: !0,
			x: e[0],
			y: e[1],
			tooltipOption: n.tooltipOption,
			position: n.position,
			dataIndexInside: r.dataIndexInside,
			dataIndex: r.dataIndex,
			seriesIndex: r.seriesIndex,
			dataByCoordSys: t.list
		})
	}

	function Sd(t, e, n) {
		var i = n.getZr(),
			r = "axisPointerLastHighlights",
			a = eb(i)[r] || {},
			o = eb(i)[r] = {};
		Jw(t, function(t) {
			var e = t.axisPointerModel.option;
			"show" === e.status && Jw(e.seriesDataIndices, function(t) {
				var e = t.seriesIndex + " | " + t.dataIndex;
				o[e] = t
			})
		});
		var s = [],
			l = [];
		f(a, function(t, e) {
			!o[e] && l.push(t)
		}), f(o, function(t, e) {
			!a[e] && s.push(t)
		}), l.length && n.dispatchAction({
			type: "downplay",
			escapeConnect: !0,
			batch: l
		}), s.length && n.dispatchAction({
			type: "highlight",
			escapeConnect: !0,
			batch: s
		})
	}

	function Md(t, e) {
		for(var n = 0; n < (t || []).length; n++) {
			var i = t[n];
			if(e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
		}
	}

	function Id(t) {
		var e = t.axis.model,
			n = {},
			i = n.axisDim = t.axis.dim;
		return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
	}

	function Td(t) {
		return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
	}

	function Cd(t, e, n) {
		if(!cf.node) {
			var i = e.getZr();
			ib(i).records || (ib(i).records = {}), Dd(i, e);
			var r = ib(i).records[t] || (ib(i).records[t] = {});
			r.handler = n
		}
	}

	function Dd(t, e) {
		function n(n, i) {
			t.on(n, function(n) {
				var r = Ld(e);
				rb(ib(t).records, function(t) {
					t && i(t, n, r.dispatchAction)
				}), Ad(r.pendings, e)
			})
		}
		ib(t).initialized || (ib(t).initialized = !0, n("click", x(Pd, "click")), n("mousemove", x(Pd, "mousemove")), n("globalout", kd))
	}

	function Ad(t, e) {
		var n, i = t.showTip.length,
			r = t.hideTip.length;
		i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
	}

	function kd(t, e, n) {
		t.handler("leave", null, n)
	}

	function Pd(t, e, n, i) {
		e.handler(t, n, i)
	}

	function Ld(t) {
		var e = {
				showTip: [],
				hideTip: []
			},
			n = function(i) {
				var r = e[i.type];
				r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
			};
		return {
			dispatchAction: n,
			pendings: e
		}
	}

	function Od(t, e) {
		if(!cf.node) {
			var n = e.getZr(),
				i = (ib(n).records || {})[t];
			i && (ib(n).records[t] = null)
		}
	}

	function Bd() {}

	function Ed(t, e, n, i) {
		Nd(ob(n).lastProp, i) || (ob(n).lastProp = i, e ? wa(n, i, t) : (n.stopAnimation(), n.attr(i)))
	}

	function Nd(t, e) {
		if(S(t) && S(e)) {
			var n = !0;
			return f(e, function(e, i) {
				n = n && Nd(t[i], e)
			}), !!n
		}
		return t === e
	}

	function Rd(t, e) {
		t[e.get("label.show") ? "show" : "hide"]()
	}

	function zd(t) {
		return {
			position: t.position.slice(),
			rotation: t.rotation || 0
		}
	}

	function Fd(t, e, n) {
		var i = e.get("z"),
			r = e.get("zlevel");
		t && t.traverse(function(t) {
			"group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
		})
	}

	function Vd(t) {
		var e, n = t.get("type"),
			i = t.getModel(n + "Style");
		return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
	}

	function Hd(t, e, n, i, r) {
		var a = n.get("value"),
			o = Wd(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
				precision: n.get("label.precision"),
				formatter: n.get("label.formatter")
			}),
			s = n.getModel("label"),
			l = hm(s.get("padding") || 0),
			h = s.getFont(),
			u = Sn(o, h),
			c = r.position,
			d = u.width + l[1] + l[3],
			f = u.height + l[0] + l[2],
			p = r.align;
		"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
		var g = r.verticalAlign;
		"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Gd(c, d, f, i);
		var v = s.get("backgroundColor");
		v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
			shape: {
				x: 0,
				y: 0,
				width: d,
				height: f,
				r: s.get("borderRadius")
			},
			position: c.slice(),
			style: {
				text: o,
				textFont: h,
				textFill: s.getTextColor(),
				textPosition: "inside",
				fill: v,
				stroke: s.get("borderColor") || "transparent",
				lineWidth: s.get("borderWidth") || 0,
				shadowBlur: s.get("shadowBlur"),
				shadowColor: s.get("shadowColor"),
				shadowOffsetX: s.get("shadowOffsetX"),
				shadowOffsetY: s.get("shadowOffsetY")
			},
			z2: 10
		}
	}

	function Gd(t, e, n, i) {
		var r = i.getWidth(),
			a = i.getHeight();
		t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
	}

	function Wd(t, e, n, i, r) {
		t = e.scale.parse(t);
		var a = e.scale.getLabel(t, {
				precision: r.precision
			}),
			o = r.formatter;
		if(o) {
			var s = {
				value: zh(e, t),
				seriesData: []
			};
			f(i, function(t) {
				var e = n.getSeriesByIndex(t.seriesIndex),
					i = t.dataIndexInside,
					r = e && e.getDataParams(i);
				r && s.seriesData.push(r)
			}), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
		}
		return a
	}

	function Xd(t, e, n) {
		var i = fe();
		return ye(i, i, n.rotation), me(i, i, n.position), Ma([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
	}

	function Yd(t, e, n, i, r, a) {
		var o = U_.innerTextLayout(n.rotation, 0, n.labelDirection);
		n.labelMargin = r.get("label.margin"), Hd(e, i, r, a, {
			position: Xd(i.axis, t, n),
			align: o.textAlign,
			verticalAlign: o.textVerticalAlign
		})
	}

	function jd(t, e, n) {
		return n = n || 0, {
			x1: t[n],
			y1: t[1 - n],
			x2: e[n],
			y2: e[1 - n]
		}
	}

	function Ud(t, e, n) {
		return n = n || 0, {
			x: t[n],
			y: t[1 - n],
			width: e[n],
			height: e[1 - n]
		}
	}

	function qd(t, e) {
		var n = {};
		return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
	}

	function Zd(t) {
		return "x" === t.dim ? 0 : 1
	}

	function Kd(t) {
		var e = "cubic-bezier(0.23, 1, 0.32, 1)",
			n = "left " + t + "s " + e + ",top " + t + "s " + e;
		return p(fb, function(t) {
			return t + "transition:" + n
		}).join(";")
	}

	function $d(t) {
		var e = [],
			n = t.get("fontSize"),
			i = t.getTextColor();
		return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), cb(["decoration", "align"], function(n) {
			var i = t.get(n);
			i && e.push("text-" + n + ":" + i)
		}), e.join(";")
	}

	function Qd(t) {
		var e = [],
			n = t.get("transitionDuration"),
			i = t.get("backgroundColor"),
			r = t.getModel("textStyle"),
			a = t.get("padding");
		return n && e.push(Kd(n)), i && (cf.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + ze(i)), e.push("filter:alpha(opacity=70)"))), cb(["width", "color", "radius"], function(n) {
			var i = "border-" + n,
				r = db(i),
				a = t.get(r);
			null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
		}), e.push($d(r)), null != a && e.push("padding:" + hm(a).join("px ") + "px"), e.join(";") + ";"
	}

	function Jd(t, e) {
		if(cf.wxa) return null;
		var n = document.createElement("div"),
			i = this._zr = e.getZr();
		this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
		var r = this;
		n.onmouseenter = function() {
			r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
		}, n.onmousemove = function(e) {
			if(e = e || window.event, !r._enterable) {
				var n = i.handler;
				gi(t, e, !0), n.dispatch("mousemove", e)
			}
		}, n.onmouseleave = function() {
			r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
		}
	}

	function tf(t) {
		for(var e = t.pop(); t.length;) {
			var n = t.pop();
			n && (ka.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
				formatter: n
			}), e = new ka(n, e, e.ecModel))
		}
		return e
	}

	function ef(t, e) {
		return t.dispatchAction || y(e.dispatchAction, e)
	}

	function nf(t, e, n, i, r, a, o) {
		var s = af(n),
			l = s.width,
			h = s.height;
		return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e]
	}

	function rf(t, e, n, i, r) {
		var a = af(n),
			o = a.width,
			s = a.height;
		return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
	}

	function af(t) {
		var e = t.clientWidth,
			n = t.clientHeight;
		if(document.defaultView && document.defaultView.getComputedStyle) {
			var i = document.defaultView.getComputedStyle(t);
			i && (e += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), n += parseInt(i.paddingTop, 10) + parseInt(i.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
		}
		return {
			width: e,
			height: n
		}
	}

	function of (t, e, n) {
		var i = n[0],
			r = n[1],
			a = 5,
			o = 0,
			s = 0,
			l = e.width,
			h = e.height;
		switch(t) {
			case "inside":
				o = e.x + l / 2 - i / 2, s = e.y + h / 2 - r / 2;
				break;
			case "top":
				o = e.x + l / 2 - i / 2, s = e.y - r - a;
				break;
			case "bottom":
				o = e.x + l / 2 - i / 2, s = e.y + h + a;
				break;
			case "left":
				o = e.x - i - a, s = e.y + h / 2 - r / 2;
				break;
			case "right":
				o = e.x + l + a, s = e.y + h / 2 - r / 2
		}
		return [o, s]
	}

	function sf(t) {
		return "center" === t || "middle" === t
	}
	var lf = 2311,
		hf = function() {
			return lf++
		},
		uf = {};
	uf = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
		browser: {},
		os: {},
		node: !1,
		wxa: !0,
		canvasSupported: !0,
		svgSupported: !1,
		touchEventsSupported: !0
	} : "undefined" == typeof document && "undefined" != typeof self ? {
		browser: {},
		os: {},
		node: !1,
		worker: !0,
		canvasSupported: !0
	} : "undefined" == typeof navigator ? {
		browser: {},
		os: {},
		node: !0,
		worker: !1,
		canvasSupported: !0,
		svgSupported: !0
	} : e(navigator.userAgent);
	var cf = uf,
		df = {
			"[object Function]": 1,
			"[object RegExp]": 1,
			"[object Date]": 1,
			"[object Error]": 1,
			"[object CanvasGradient]": 1,
			"[object CanvasPattern]": 1,
			"[object Image]": 1,
			"[object Canvas]": 1
		},
		ff = {
			"[object Int8Array]": 1,
			"[object Uint8Array]": 1,
			"[object Uint8ClampedArray]": 1,
			"[object Int16Array]": 1,
			"[object Uint16Array]": 1,
			"[object Int32Array]": 1,
			"[object Uint32Array]": 1,
			"[object Float32Array]": 1,
			"[object Float64Array]": 1
		},
		pf = Object.prototype.toString,
		gf = Array.prototype,
		vf = gf.forEach,
		mf = gf.filter,
		yf = gf.slice,
		xf = gf.map,
		_f = gf.reduce,
		wf = {},
		bf = function() {
			return wf.createCanvas()
		};
	wf.createCanvas = function() {
		return document.createElement("canvas")
	};
	var Sf, Mf = "__ec_primitive__";
	R.prototype = {
		constructor: R,
		get: function(t) {
			return this.hasOwnProperty(t) ? this[t] : null
		},
		set: function(t, e) {
			return this[t] = e
		},
		each: function(t, e) {
			void 0 !== e && (t = y(t, e));
			for(var n in this) this.hasOwnProperty(n) && t(this[n], n)
		},
		removeKey: function(t) {
			delete this[t]
		}
	};
	var If = (Object.freeze || Object)({
			$override: n,
			clone: i,
			merge: r,
			mergeAll: a,
			extend: o,
			defaults: s,
			createCanvas: bf,
			getContext: l,
			indexOf: h,
			inherits: u,
			mixin: c,
			isArrayLike: d,
			each: f,
			map: p,
			reduce: g,
			filter: v,
			find: m,
			bind: y,
			curry: x,
			isArray: _,
			isFunction: w,
			isString: b,
			isObject: S,
			isBuiltInObject: M,
			isTypedArray: I,
			isDom: T,
			eqNaN: C,
			retrieve: D,
			retrieve2: A,
			retrieve3: k,
			slice: P,
			normalizeCssArray: L,
			assert: O,
			trim: B,
			setAsPrimitive: E,
			isPrimitive: N,
			createHashMap: z,
			concatArray: F,
			noop: V
		}),
		Tf = "undefined" == typeof Float32Array ? Array : Float32Array,
		Cf = q,
		Df = Z,
		Af = ee,
		kf = ne,
		Pf = (Object.freeze || Object)({
			create: H,
			copy: G,
			clone: W,
			set: X,
			add: Y,
			scaleAndAdd: j,
			sub: U,
			len: q,
			length: Cf,
			lenSquare: Z,
			lengthSquare: Df,
			mul: K,
			div: $,
			dot: Q,
			scale: J,
			normalize: te,
			distance: ee,
			dist: Af,
			distanceSquare: ne,
			distSquare: kf,
			negate: ie,
			lerp: re,
			applyTransform: ae,
			min: oe,
			max: se
		});
	le.prototype = {
		constructor: le,
		_dragStart: function(t) {
			var e = t.target;
			e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(he(e, t), "dragstart", t.event))
		},
		_drag: function(t) {
			var e = this._draggingTarget;
			if(e) {
				var n = t.offsetX,
					i = t.offsetY,
					r = n - this._x,
					a = i - this._y;
				this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(he(e, t), "drag", t.event);
				var o = this.findHover(n, i, e).target,
					s = this._dropTarget;
				this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(he(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(he(o, t), "dragenter", t.event))
			}
		},
		_dragEnd: function(t) {
			var e = this._draggingTarget;
			e && (e.dragging = !1), this.dispatchToElement(he(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(he(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
		}
	};
	var Lf = Array.prototype.slice,
		Of = function() {
			this._$handlers = {}
		};
	Of.prototype = {
		constructor: Of,
		one: function(t, e, n) {
			var i = this._$handlers;
			if(!e || !t) return this;
			i[t] || (i[t] = []);
			for(var r = 0; r < i[t].length; r++)
				if(i[t][r].h === e) return this;
			return i[t].push({
				h: e,
				one: !0,
				ctx: n || this
			}), this
		},
		on: function(t, e, n) {
			var i = this._$handlers;
			if(!e || !t) return this;
			i[t] || (i[t] = []);
			for(var r = 0; r < i[t].length; r++)
				if(i[t][r].h === e) return this;
			return i[t].push({
				h: e,
				one: !1,
				ctx: n || this
			}), this
		},
		isSilent: function(t) {
			var e = this._$handlers;
			return e[t] && e[t].length
		},
		off: function(t, e) {
			var n = this._$handlers;
			if(!t) return this._$handlers = {}, this;
			if(e) {
				if(n[t]) {
					for(var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h != e && i.push(n[t][r]);
					n[t] = i
				}
				n[t] && 0 === n[t].length && delete n[t]
			} else delete n[t];
			return this
		},
		trigger: function(t) {
			if(this._$handlers[t]) {
				var e = arguments,
					n = e.length;
				n > 3 && (e = Lf.call(e, 1));
				for(var i = this._$handlers[t], r = i.length, a = 0; r > a;) {
					switch(n) {
						case 1:
							i[a].h.call(i[a].ctx);
							break;
						case 2:
							i[a].h.call(i[a].ctx, e[1]);
							break;
						case 3:
							i[a].h.call(i[a].ctx, e[1], e[2]);
							break;
						default:
							i[a].h.apply(i[a].ctx, e)
					}
					i[a].one ? (i.splice(a, 1), r--) : a++
				}
			}
			return this
		},
		triggerWithContext: function(t) {
			if(this._$handlers[t]) {
				var e = arguments,
					n = e.length;
				n > 4 && (e = Lf.call(e, 1, e.length - 1));
				for(var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; a > o;) {
					switch(n) {
						case 1:
							r[o].h.call(i);
							break;
						case 2:
							r[o].h.call(i, e[1]);
							break;
						case 3:
							r[o].h.call(i, e[1], e[2]);
							break;
						default:
							r[o].h.apply(i, e)
					}
					r[o].one ? (r.splice(o, 1), a--) : o++
				}
			}
			return this
		}
	};
	var Bf = "silent";
	ce.prototype.dispose = function() {};
	var Ef = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		Nf = function(t, e, n, i) {
			Of.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ce, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n)
		};
	Nf.prototype = {
		constructor: Nf,
		setHandlerProxy: function(t) {
			this.proxy && this.proxy.dispose(), t && (f(Ef, function(e) {
				t.on && t.on(e, this[e], this)
			}, this), t.handler = this), this.proxy = t
		},
		mousemove: function(t) {
			var e = t.zrX,
				n = t.zrY,
				i = this._hovered,
				r = i.target;
			r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
			var a = this._hovered = this.findHover(e, n),
				o = a.target,
				s = this.proxy;
			s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
		},
		mouseout: function(t) {
			this.dispatchToElement(this._hovered, "mouseout", t);
			var e, n = t.toElement || t.relatedTarget;
			do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
			!e && this.trigger("globalout", {
				event: t
			})
		},
		resize: function() {
			this._hovered = {}
		},
		dispatch: function(t, e) {
			var n = this[t];
			n && n.call(this, e)
		},
		dispose: function() {
			this.proxy.dispose(), this.storage = this.proxy = this.painter = null
		},
		setCursorStyle: function(t) {
			var e = this.proxy;
			e.setCursor && e.setCursor(t)
		},
		dispatchToElement: function(t, e, n) {
			t = t || {};
			var i = t.target;
			if(!i || !i.silent) {
				for(var r = "on" + e, a = ue(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
				a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
					"function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
				}))
			}
		},
		findHover: function(t, e, n) {
			for(var i = this.storage.getDisplayList(), r = {
					x: t,
					y: e
				}, a = i.length - 1; a >= 0; a--) {
				var o;
				if(i[a] !== n && !i[a].ignore && (o = de(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== Bf)) {
					r.target = i[a];
					break
				}
			}
			return r
		}
	}, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		Nf.prototype[t] = function(e) {
			var n = this.findHover(e.zrX, e.zrY),
				i = n.target;
			if("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
			else if("mouseup" === t) this._upEl = i;
			else if("click" === t) {
				if(this._downEl !== this._upEl || !this._downPoint || Af(this._downPoint, [e.zrX, e.zrY]) > 4) return;
				this._downPoint = null
			}
			this.dispatchToElement(n, t, e)
		}
	}), c(Nf, Of), c(Nf, le);
	var Rf = "undefined" == typeof Float32Array ? Array : Float32Array,
		zf = (Object.freeze || Object)({
			create: fe,
			identity: pe,
			copy: ge,
			mul: ve,
			translate: me,
			rotate: ye,
			scale: xe,
			invert: _e,
			clone: we
		}),
		Ff = pe,
		Vf = 5e-5,
		Hf = function(t) {
			t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
		},
		Gf = Hf.prototype;
	Gf.transform = null, Gf.needLocalTransform = function() {
		return be(this.rotation) || be(this.position[0]) || be(this.position[1]) || be(this.scale[0] - 1) || be(this.scale[1] - 1)
	}, Gf.updateTransform = function() {
		var t = this.parent,
			e = t && t.transform,
			n = this.needLocalTransform(),
			i = this.transform;
		return n || e ? (i = i || fe(), n ? this.getLocalTransform(i) : Ff(i), e && (n ? ve(i, t.transform, i) : ge(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || fe(), void _e(this.invTransform, i)) : void(i && Ff(i))
	}, Gf.getLocalTransform = function(t) {
		return Hf.getLocalTransform(this, t)
	}, Gf.setTransform = function(t) {
		var e = this.transform,
			n = t.dpr || 1;
		e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
	}, Gf.restoreTransform = function(t) {
		var e = t.dpr || 1;
		t.setTransform(e, 0, 0, e, 0, 0)
	};
	var Wf = [];
	Gf.decomposeTransform = function() {
		if(this.transform) {
			var t = this.parent,
				e = this.transform;
			t && t.transform && (ve(Wf, t.invTransform, e), e = Wf);
			var n = e[0] * e[0] + e[1] * e[1],
				i = e[2] * e[2] + e[3] * e[3],
				r = this.position,
				a = this.scale;
			be(n - 1) && (n = Math.sqrt(n)), be(i - 1) && (i = Math.sqrt(i)), e[0] < 0 && (n = -n), e[3] < 0 && (i = -i), r[0] = e[4], r[1] = e[5], a[0] = n, a[1] = i, this.rotation = Math.atan2(-e[1] / i, e[0] / n)
		}
	}, Gf.getGlobalScale = function() {
		var t = this.transform;
		if(!t) return [1, 1];
		var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
			n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
		return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n]
	}, Gf.transformCoordToLocal = function(t, e) {
		var n = [t, e],
			i = this.invTransform;
		return i && ae(n, n, i), n
	}, Gf.transformCoordToGlobal = function(t, e) {
		var n = [t, e],
			i = this.transform;
		return i && ae(n, n, i), n
	}, Hf.getLocalTransform = function(t, e) {
		e = e || [], Ff(e);
		var n = t.origin,
			i = t.scale || [1, 1],
			r = t.rotation || 0,
			a = t.position || [0, 0];
		return n && (e[4] -= n[0], e[5] -= n[1]), xe(e, e, i), r && ye(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
	};
	var Xf = {
		linear: function(t) {
			return t
		},
		quadraticIn: function(t) {
			return t * t
		},
		quadraticOut: function(t) {
			return t * (2 - t)
		},
		quadraticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
		},
		cubicIn: function(t) {
			return t * t * t
		},
		cubicOut: function(t) {
			return --t * t * t + 1
		},
		cubicInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
		},
		quarticIn: function(t) {
			return t * t * t * t
		},
		quarticOut: function(t) {
			return 1 - --t * t * t * t
		},
		quarticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
		},
		quinticIn: function(t) {
			return t * t * t * t * t
		},
		quinticOut: function(t) {
			return --t * t * t * t * t + 1
		},
		quinticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
		},
		sinusoidalIn: function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		},
		sinusoidalOut: function(t) {
			return Math.sin(t * Math.PI / 2)
		},
		sinusoidalInOut: function(t) {
			return .5 * (1 - Math.cos(Math.PI * t))
		},
		exponentialIn: function(t) {
			return 0 === t ? 0 : Math.pow(1024, t - 1)
		},
		exponentialOut: function(t) {
			return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
		},
		exponentialInOut: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
		},
		circularIn: function(t) {
			return 1 - Math.sqrt(1 - t * t)
		},
		circularOut: function(t) {
			return Math.sqrt(1 - --t * t)
		},
		circularInOut: function(t) {
			return(t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		elasticIn: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
		},
		elasticOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
		},
		elasticInOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
		},
		backIn: function(t) {
			var e = 1.70158;
			return t * t * ((e + 1) * t - e)
		},
		backOut: function(t) {
			var e = 1.70158;
			return --t * t * ((e + 1) * t + e) + 1
		},
		backInOut: function(t) {
			var e = 2.5949095;
			return(t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
		},
		bounceIn: function(t) {
			return 1 - Xf.bounceOut(1 - t)
		},
		bounceOut: function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		},
		bounceInOut: function(t) {
			return .5 > t ? .5 * Xf.bounceIn(2 * t) : .5 * Xf.bounceOut(2 * t - 1) + .5
		}
	};
	Se.prototype = {
		constructor: Se,
		step: function(t, e) {
			if(this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
			var n = (t - this._startTime - this._pausedTime) / this._life;
			if(!(0 > n)) {
				n = Math.min(n, 1);
				var i = this.easing,
					r = "string" == typeof i ? Xf[i] : i,
					a = "function" == typeof r ? r(n) : n;
				return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
			}
		},
		restart: function(t) {
			var e = (t - this._startTime - this._pausedTime) % this._life;
			this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
		},
		fire: function(t, e) {
			t = "on" + t, this[t] && this[t](this._target, e)
		},
		pause: function() {
			this._paused = !0
		},
		resume: function() {
			this._paused = !1
		}
	};
	var Yf = function() {
			this.head = null, this.tail = null, this._len = 0
		},
		jf = Yf.prototype;
	jf.insert = function(t) {
		var e = new Uf(t);
		return this.insertEntry(e), e
	}, jf.insertEntry = function(t) {
		this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
	}, jf.remove = function(t) {
		var e = t.prev,
			n = t.next;
		e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
	}, jf.len = function() {
		return this._len
	}, jf.clear = function() {
		this.head = this.tail = null, this._len = 0
	};
	var Uf = function(t) {
			this.value = t, this.next, this.prev
		},
		qf = function(t) {
			this._list = new Yf, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
		},
		Zf = qf.prototype;
	Zf.put = function(t, e) {
		var n = this._list,
			i = this._map,
			r = null;
		if(null == i[t]) {
			var a = n.len(),
				o = this._lastRemovedEntry;
			if(a >= this._maxSize && a > 0) {
				var s = n.head;
				n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
			}
			o ? o.value = e : o = new Uf(e), o.key = t, n.insertEntry(o), i[t] = o
		}
		return r
	}, Zf.get = function(t) {
		var e = this._map[t],
			n = this._list;
		return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
	}, Zf.clear = function() {
		this._list.clear(), this._map = {}
	};
	var Kf = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		},
		$f = new qf(20),
		Qf = null,
		Jf = Fe,
		tp = Ve,
		ep = (Object.freeze || Object)({
			parse: Be,
			lift: Re,
			toHex: ze,
			fastLerp: Fe,
			fastMapToColor: Jf,
			lerp: Ve,
			mapToColor: tp,
			modifyHSL: He,
			modifyAlpha: Ge,
			stringify: We
		}),
		np = Array.prototype.slice,
		ip = function(t, e, n, i) {
			this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Xe, this._setter = i || Ye, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
		};
	ip.prototype = {
		when: function(t, e) {
			var n = this._tracks;
			for(var i in e)
				if(e.hasOwnProperty(i)) {
					if(!n[i]) {
						n[i] = [];
						var r = this._getter(this._target, i);
						if(null == r) continue;
						0 !== t && n[i].push({
							time: 0,
							value: Je(r)
						})
					}
					n[i].push({
						time: t,
						value: e[i]
					})
				}
			return this
		},
		during: function(t) {
			return this._onframeList.push(t), this
		},
		pause: function() {
			for(var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
			this._paused = !0
		},
		resume: function() {
			for(var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
			this._paused = !1
		},
		isPaused: function() {
			return !!this._paused
		},
		_doneCallback: function() {
			this._tracks = {}, this._clipList.length = 0;
			for(var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
		},
		start: function(t, e) {
			var n, i = this,
				r = 0,
				a = function() {
					r--, r || i._doneCallback()
				};
			for(var o in this._tracks)
				if(this._tracks.hasOwnProperty(o)) {
					var s = nn(this, t, a, this._tracks[o], o, e);
					s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
				}
			if(n) {
				var l = n.onframe;
				n.onframe = function(t, e) {
					l(t, e);
					for(var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
				}
			}
			return r || this._doneCallback(), this
		},
		stop: function(t) {
			for(var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
				var r = e[i];
				t && r.onframe(this._target, 1), n && n.removeClip(r)
			}
			e.length = 0
		},
		delay: function(t) {
			return this._delay = t, this
		},
		done: function(t) {
			return t && this._doneList.push(t), this
		},
		getClips: function() {
			return this._clipList
		}
	};
	var rp = 1;
	"undefined" != typeof window && (rp = Math.max(window.devicePixelRatio || 1, 1));
	var ap = 0,
		op = rp,
		sp = function() {};
	1 === ap ? sp = function() {
		for(var t in arguments) throw new Error(arguments[t])
	} : ap > 1 && (sp = function() {
		for(var t in arguments) console.log(arguments[t])
	});
	var lp = sp,
		hp = function() {
			this.animators = []
		};
	hp.prototype = {
		constructor: hp,
		animate: function(t, e) {
			var n, i = !1,
				r = this,
				a = this.__zr;
			if(t) {
				var o = t.split("."),
					s = r;
				i = "shape" === o[0];
				for(var l = 0, u = o.length; u > l; l++) s && (s = s[o[l]]);
				s && (n = s)
			} else n = r;
			if(!n) return void lp('Property "' + t + '" is not existed in element ' + r.id);
			var c = r.animators,
				d = new ip(n, e);
			return d.during(function() {
				r.dirty(i)
			}).done(function() {
				c.splice(h(c, d), 1)
			}), c.push(d), a && a.animation.addAnimator(d), d
		},
		stopAnimation: function(t) {
			for(var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
			return e.length = 0, this
		},
		animateTo: function(t, e, n, i, r, a) {
			function o() {
				l--, l || r && r()
			}
			b(n) ? (r = i, i = n, n = 0) : w(i) ? (r = i, i = "linear", n = 0) : w(n) ? (r = n, n = 0) : w(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);
			var s = this.animators.slice(),
				l = s.length;
			l || r && r();
			for(var h = 0; h < s.length; h++) s[h].done(o).start(i, a)
		},
		_animateToShallow: function(t, e, n, i, r) {
			var a = {},
				o = 0;
			for(var s in n)
				if(n.hasOwnProperty(s))
					if(null != e[s]) S(n[s]) && !d(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++);
					else if(null != n[s])
				if(t) {
					var l = {};
					l[t] = {}, l[t][s] = n[s], this.attr(l)
				} else this.attr(s, n[s]);
			return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this
		}
	};
	var up = function(t) {
		Hf.call(this, t), Of.call(this, t), hp.call(this, t), this.id = t.id || hf()
	};
	up.prototype = {
		type: "element",
		name: "",
		__zr: null,
		ignore: !1,
		clipPath: null,
		isGroup: !1,
		drift: function(t, e) {
			switch(this.draggable) {
				case "horizontal":
					e = 0;
					break;
				case "vertical":
					t = 0
			}
			var n = this.transform;
			n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
		},
		beforeUpdate: function() {},
		afterUpdate: function() {},
		update: function() {
			this.updateTransform()
		},
		traverse: function() {},
		attrKV: function(t, e) {
			if("position" === t || "scale" === t || "origin" === t) {
				if(e) {
					var n = this[t];
					n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
				}
			} else this[t] = e
		},
		hide: function() {
			this.ignore = !0, this.__zr && this.__zr.refresh()
		},
		show: function() {
			this.ignore = !1, this.__zr && this.__zr.refresh()
		},
		attr: function(t, e) {
			if("string" == typeof t) this.attrKV(t, e);
			else if(S(t))
				for(var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
			return this.dirty(!1), this
		},
		setClipPath: function(t) {
			var e = this.__zr;
			e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
		},
		removeClipPath: function() {
			var t = this.clipPath;
			t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
		},
		addSelfToZr: function(t) {
			this.__zr = t;
			var e = this.animators;
			if(e)
				for(var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
			this.clipPath && this.clipPath.addSelfToZr(t)
		},
		removeSelfFromZr: function(t) {
			this.__zr = null;
			var e = this.animators;
			if(e)
				for(var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
			this.clipPath && this.clipPath.removeSelfFromZr(t)
		}
	}, c(up, hp), c(up, Hf), c(up, Of);
	var cp = ae,
		dp = Math.min,
		fp = Math.max;
	rn.prototype = {
		constructor: rn,
		union: function(t) {
			var e = dp(t.x, this.x),
				n = dp(t.y, this.y);
			this.width = fp(t.x + t.width, this.x + this.width) - e, this.height = fp(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
		},
		applyTransform: function() {
			var t = [],
				e = [],
				n = [],
				i = [];
			return function(r) {
				if(r) {
					t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, cp(t, t, r), cp(e, e, r), cp(n, n, r), cp(i, i, r), this.x = dp(t[0], e[0], n[0], i[0]), this.y = dp(t[1], e[1], n[1], i[1]);
					var a = fp(t[0], e[0], n[0], i[0]),
						o = fp(t[1], e[1], n[1], i[1]);
					this.width = a - this.x, this.height = o - this.y
				}
			}
		}(),
		calculateTransform: function(t) {
			var e = this,
				n = t.width / e.width,
				i = t.height / e.height,
				r = fe();
			return me(r, r, [-e.x, -e.y]), xe(r, r, [n, i]), me(r, r, [t.x, t.y]), r
		},
		intersect: function(t) {
			if(!t) return !1;
			t instanceof rn || (t = rn.create(t));
			var e = this,
				n = e.x,
				i = e.x + e.width,
				r = e.y,
				a = e.y + e.height,
				o = t.x,
				s = t.x + t.width,
				l = t.y,
				h = t.y + t.height;
			return !(o > i || n > s || l > a || r > h)
		},
		contain: function(t, e) {
			var n = this;
			return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
		},
		clone: function() {
			return new rn(this.x, this.y, this.width, this.height)
		},
		copy: function(t) {
			this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
		},
		plain: function() {
			return {
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			}
		}
	}, rn.create = function(t) {
		return new rn(t.x, t.y, t.width, t.height)
	};
	var pp = function(t) {
		t = t || {}, up.call(this, t);
		for(var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		this._children = [], this.__storage = null, this.__dirty = !0
	};
	pp.prototype = {
		constructor: pp,
		isGroup: !0,
		type: "group",
		silent: !1,
		children: function() {
			return this._children.slice()
		},
		childAt: function(t) {
			return this._children[t]
		},
		childOfName: function(t) {
			for(var e = this._children, n = 0; n < e.length; n++)
				if(e[n].name === t) return e[n]
		},
		childCount: function() {
			return this._children.length
		},
		add: function(t) {
			return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
		},
		addBefore: function(t, e) {
			if(t && t !== this && t.parent !== this && e && e.parent === this) {
				var n = this._children,
					i = n.indexOf(e);
				i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
			}
			return this
		},
		_doAdd: function(t) {
			t.parent && t.parent.remove(t), t.parent = this;
			var e = this.__storage,
				n = this.__zr;
			e && e !== t.__storage && (e.addToStorage(t), t instanceof pp && t.addChildrenToStorage(e)), n && n.refresh()
		},
		remove: function(t) {
			var e = this.__zr,
				n = this.__storage,
				i = this._children,
				r = h(i, t);
			return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof pp && t.delChildrenFromStorage(n)), e && e.refresh(), this)
		},
		removeAll: function() {
			var t, e, n = this._children,
				i = this.__storage;
			for(e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof pp && t.delChildrenFromStorage(i)), t.parent = null;
			return n.length = 0, this
		},
		eachChild: function(t, e) {
			for(var n = this._children, i = 0; i < n.length; i++) {
				var r = n[i];
				t.call(e, r, i)
			}
			return this
		},
		traverse: function(t, e) {
			for(var n = 0; n < this._children.length; n++) {
				var i = this._children[n];
				t.call(e, i), "group" === i.type && i.traverse(t, e)
			}
			return this
		},
		addChildrenToStorage: function(t) {
			for(var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.addToStorage(n), n instanceof pp && n.addChildrenToStorage(t)
			}
		},
		delChildrenFromStorage: function(t) {
			for(var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.delFromStorage(n), n instanceof pp && n.delChildrenFromStorage(t)
			}
		},
		dirty: function() {
			return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
		},
		getBoundingRect: function(t) {
			for(var e = null, n = new rn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
				var o = i[a];
				if(!o.ignore && !o.invisible) {
					var s = o.getBoundingRect(),
						l = o.getLocalTransform(r);
					l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
				}
			}
			return e || n
		}
	}, u(pp, up);
	var gp = 32,
		vp = 7,
		mp = function() {
			this._roots = [], this._displayList = [], this._displayListLen = 0
		};
	mp.prototype = {
		constructor: mp,
		traverse: function(t, e) {
			for(var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
		},
		getDisplayList: function(t, e) {
			return e = e || !1, t && this.updateDisplayList(e), this._displayList
		},
		updateDisplayList: function(t) {
			this._displayListLen = 0;
			for(var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
			n.length = this._displayListLen, cf.canvasSupported && dn(n, fn)
		},
		_updateAndAddDisplayable: function(t, e, n) {
			if(!t.ignore || n) {
				t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
				var i = t.clipPath;
				if(i) {
					e = e ? e.slice() : [];
					for(var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
				}
				if(t.isGroup) {
					for(var o = t._children, s = 0; s < o.length; s++) {
						var l = o[s];
						t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
					}
					t.__dirty = !1
				} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
			}
		},
		addRoot: function(t) {
			t.__storage !== this && (t instanceof pp && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
		},
		delRoot: function(t) {
			if(null == t) {
				for(var e = 0; e < this._roots.length; e++) {
					var n = this._roots[e];
					n instanceof pp && n.delChildrenFromStorage(this)
				}
				return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
			}
			if(t instanceof Array)
				for(var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
			else {
				var r = h(this._roots, t);
				r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof pp && t.delChildrenFromStorage(this))
			}
		},
		addToStorage: function(t) {
			return t && (t.__storage = this, t.dirty(!1)), this
		},
		delFromStorage: function(t) {
			return t && (t.__storage = null), this
		},
		dispose: function() {
			this._renderList = this._roots = null
		},
		displayableSortFunc: fn
	};
	var yp = {
			shadowBlur: 1,
			shadowOffsetX: 1,
			shadowOffsetY: 1,
			textShadowBlur: 1,
			textShadowOffsetX: 1,
			textShadowOffsetY: 1,
			textBoxShadowBlur: 1,
			textBoxShadowOffsetX: 1,
			textBoxShadowOffsetY: 1
		},
		xp = function(t, e, n) {
			return yp.hasOwnProperty(e) ? n *= t.dpr : n
		},
		_p = [
			["shadowBlur", 0],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0],
			["shadowColor", "#000"],
			["lineCap", "butt"],
			["lineJoin", "miter"],
			["miterLimit", 10]
		],
		wp = function(t, e) {
			this.extendFrom(t, !1), this.host = e
		};
	wp.prototype = {
		constructor: wp,
		host: null,
		fill: "#000",
		stroke: null,
		opacity: 1,
		lineDash: null,
		lineDashOffset: 0,
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		lineWidth: 1,
		strokeNoScale: !1,
		text: null,
		font: null,
		textFont: null,
		fontStyle: null,
		fontWeight: null,
		fontSize: null,
		fontFamily: null,
		textTag: null,
		textFill: "#000",
		textStroke: null,
		textWidth: null,
		textHeight: null,
		textStrokeWidth: 0,
		textLineHeight: null,
		textPosition: "inside",
		textRect: null,
		textOffset: null,
		textAlign: null,
		textVerticalAlign: null,
		textDistance: 5,
		textShadowColor: "transparent",
		textShadowBlur: 0,
		textShadowOffsetX: 0,
		textShadowOffsetY: 0,
		textBoxShadowColor: "transparent",
		textBoxShadowBlur: 0,
		textBoxShadowOffsetX: 0,
		textBoxShadowOffsetY: 0,
		transformText: !1,
		textRotation: 0,
		textOrigin: null,
		textBackgroundColor: null,
		textBorderColor: null,
		textBorderWidth: 0,
		textBorderRadius: 0,
		textPadding: null,
		rich: null,
		truncate: null,
		blend: null,
		bind: function(t, e, n) {
			for(var i = this, r = n && n.style, a = !r, o = 0; o < _p.length; o++) {
				var s = _p[o],
					l = s[0];
				(a || i[l] !== r[l]) && (t[l] = xp(t, l, i[l] || s[1]))
			}
			if((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
				var h = i.lineWidth;
				t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
			}
		},
		hasFill: function() {
			var t = this.fill;
			return null != t && "none" !== t
		},
		hasStroke: function() {
			var t = this.stroke;
			return null != t && "none" !== t && this.lineWidth > 0
		},
		extendFrom: function(t, e) {
			if(t)
				for(var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
		},
		set: function(t, e) {
			"string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
		},
		clone: function() {
			var t = new this.constructor;
			return t.extendFrom(this, !0), t
		},
		getGradient: function(t, e, n) {
			for(var i = "radial" === e.type ? gn : pn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
			return r
		}
	};
	for(var bp = wp.prototype, Sp = 0; Sp < _p.length; Sp++) {
		var Mp = _p[Sp];
		Mp[0] in bp || (bp[Mp[0]] = Mp[1])
	}
	wp.getGradient = bp.getGradient;
	var Ip = function(t, e) {
		this.image = t, this.repeat = e, this.type = "pattern"
	};
	Ip.prototype.getCanvasPattern = function(t) {
		return t.createPattern(this.image, this.repeat || "repeat")
	};
	var Tp = function(t, e, n) {
		var i;
		n = n || op, "string" == typeof t ? i = mn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;
		var r = i.style;
		r && (i.onselectstart = vn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
	};
	Tp.prototype = {
		constructor: Tp,
		__dirty: !0,
		__used: !1,
		__drawIndex: 0,
		__startIndex: 0,
		__endIndex: 0,
		incremental: !1,
		getElementCount: function() {
			return this.__endIndex - this.__startIndex
		},
		initContext: function() {
			this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
		},
		createBackBuffer: function() {
			var t = this.dpr;
			this.domBack = mn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
		},
		resize: function(t, e) {
			var n = this.dpr,
				i = this.dom,
				r = i.style,
				a = this.domBack;
			r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
		},
		clear: function(t, e) {
			var n = this.dom,
				i = this.ctx,
				r = n.width,
				a = n.height,
				e = e || this.clearColor,
				o = this.motionBlur && !t,
				s = this.lastFrameAlpha,
				l = this.dpr;
			if(o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
				var h;
				e.colorStops ? (h = e.__canvasGradient || wp.getGradient(i, e, {
					x: 0,
					y: 0,
					width: r,
					height: a
				}), e.__canvasGradient = h) : e.image && (h = Ip.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore()
			}
			if(o) {
				var u = this.domBack;
				i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore()
			}
		}
	};
	var Cp = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
			setTimeout(t, 16)
		},
		Dp = new qf(50),
		Ap = {},
		kp = 0,
		Pp = 5e3,
		Lp = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
		Op = "12px sans-serif",
		Bp = {};
	Bp.measureText = function(t, e) {
		var n = l();
		return n.font = e || Op, n.measureText(t)
	};
	var Ep = {
			left: 1,
			right: 1,
			center: 1
		},
		Np = {
			top: 1,
			bottom: 1,
			middle: 1
		},
		Rp = new rn,
		zp = function() {};
	zp.prototype = {
		constructor: zp,
		drawRectText: function(t, e) {
			var n = this.style;
			e = n.textRect || e, this.__dirty && Vn(n, !0);
			var i = n.text;
			if(null != i && (i += ""), ii(i, n)) {
				t.save();
				var r = this.transform;
				n.transformText ? this.setTransform(t) : r && (Rp.copy(e), Rp.applyTransform(r), e = Rp), Gn(this, t, i, n, e), t.restore()
			}
		}
	}, ri.prototype = {
		constructor: ri,
		type: "displayable",
		__dirty: !0,
		invisible: !1,
		z: 0,
		z2: 0,
		zlevel: 0,
		draggable: !1,
		dragging: !1,
		silent: !1,
		culling: !1,
		cursor: "pointer",
		rectHover: !1,
		progressive: !1,
		incremental: !1,
		inplace: !1,
		beforeBrush: function() {},
		afterBrush: function() {},
		brush: function() {},
		getBoundingRect: function() {},
		contain: function(t, e) {
			return this.rectContain(t, e)
		},
		traverse: function(t, e) {
			t.call(e, this)
		},
		rectContain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect();
			return i.contain(n[0], n[1])
		},
		dirty: function() {
			this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
		},
		animateStyle: function(t) {
			return this.animate("style", t)
		},
		attrKV: function(t, e) {
			"style" !== t ? up.prototype.attrKV.call(this, t, e) : this.style.set(e)
		},
		setStyle: function(t, e) {
			return this.style.set(t, e), this.dirty(!1), this
		},
		useStyle: function(t) {
			return this.style = new wp(t, this), this.dirty(!1), this
		}
	}, u(ri, up), c(ri, zp), ai.prototype = {
		constructor: ai,
		type: "image",
		brush: function(t, e) {
			var n = this.style,
				i = n.image;
			n.bind(t, this, e);
			var r = this._image = xn(i, this._image, this, this.onload);
			if(r && wn(r)) {
				var a = n.x || 0,
					o = n.y || 0,
					s = n.width,
					l = n.height,
					h = r.width / r.height;
				if(null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
					var u = n.sx || 0,
						c = n.sy || 0;
					t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l)
				} else if(n.sx && n.sy) {
					var u = n.sx,
						c = n.sy,
						d = s - u,
						f = l - c;
					t.drawImage(r, u, c, d, f, a, o, s, l)
				} else t.drawImage(r, a, o, s, l);
				null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
			}
		},
		getBoundingRect: function() {
			var t = this.style;
			return this._rect || (this._rect = new rn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
		}
	}, u(ai, ri);
	var Fp = 1e5,
		Vp = 314159,
		Hp = .01,
		Gp = .001,
		Wp = new rn(0, 0, 0, 0),
		Xp = new rn(0, 0, 0, 0),
		Yp = function(t, e, n) {
			this.type = "canvas";
			var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
			this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || op, this._singleCanvas = i, this.root = t;
			var r = t.style;
			r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
			var a = this._zlevelList = [],
				s = this._layers = {};
			if(this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
				var l = t.width,
					h = t.height;
				null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
				var u = new Tp(t, this, this.dpr);
				u.__builtin__ = !0, u.initContext(), s[Vp] = u, u.zlevel = Vp, a.push(Vp), this._domRoot = t
			} else {
				this._width = this._getSize(0), this._height = this._getSize(1);
				var c = this._domRoot = ci(this._width, this._height);
				t.appendChild(c)
			}
			this._hoverlayer = null, this._hoverElements = []
		};
	Yp.prototype = {
		constructor: Yp,
		getType: function() {
			return "canvas"
		},
		isSingleCanvas: function() {
			return this._singleCanvas
		},
		getViewportRoot: function() {
			return this._domRoot
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			return t ? {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			} : void 0
		},
		refresh: function(t) {
			var e = this.storage.getDisplayList(!0),
				n = this._zlevelList;
			this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
			for(var i = 0; i < n.length; i++) {
				var r = n[i],
					a = this._layers[r];
				if(!a.__builtin__ && a.refresh) {
					var o = 0 === i ? this._backgroundColor : null;
					a.refresh(o)
				}
			}
			return this.refreshHover(), this
		},
		addHover: function(t, e) {
			if(!t.__hoverMir) {
				var n = new t.constructor({
					style: t.style,
					shape: t.shape
				});
				n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n)
			}
		},
		removeHover: function(t) {
			var e = t.__hoverMir,
				n = this._hoverElements,
				i = h(n, e);
			i >= 0 && n.splice(i, 1), t.__hoverMir = null
		},
		clearHover: function() {
			for(var t = this._hoverElements, e = 0; e < t.length; e++) {
				var n = t[e].__from;
				n && (n.__hoverMir = null)
			}
			t.length = 0
		},
		refreshHover: function() {
			var t = this._hoverElements,
				e = t.length,
				n = this._hoverlayer;
			if(n && n.clear(), e) {
				dn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Fp));
				var i = {};
				n.ctx.save();
				for(var r = 0; e > r;) {
					var a = t[r],
						o = a.__from;
					o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
				}
				n.ctx.restore()
			}
		},
		getHoverLayer: function() {
			return this.getLayer(Fp)
		},
		_paintList: function(t, e, n) {
			if(this._redrawId === n) {
				e = e || !1, this._updateLayerStatus(t);
				var i = this._doPaintList(t, e);
				if(this._needsManuallyCompositing && this._compositeManually(), !i) {
					var r = this;
					Cp(function() {
						r._paintList(t, e, n)
					})
				}
			}
		},
		_compositeManually: function() {
			var t = this.getLayer(Vp).ctx,
				e = this._domRoot.width,
				n = this._domRoot.height;
			t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
				i.virtual && t.drawImage(i.dom, 0, 0, e, n)
			})
		},
		_doPaintList: function(t, e) {
			for(var n = [], i = 0; i < this._zlevelList.length; i++) {
				var r = this._zlevelList[i],
					a = this._layers[r];
				a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
			}
			for(var o = !0, s = 0; s < n.length; s++) {
				var a = n[s],
					l = a.ctx,
					h = {};
				l.save();
				var u = e ? a.__startIndex : a.__drawIndex,
					c = !e && a.incremental && Date.now,
					d = c && Date.now(),
					p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
				if(a.__startIndex === a.__endIndex) a.clear(!1, p);
				else if(u === a.__startIndex) {
					var g = t[u];
					g.incremental && g.notClear && !e || a.clear(!1, p)
				} - 1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);
				for(var v = u; v < a.__endIndex; v++) {
					var m = t[v];
					if(this._doPaintEl(m, a, e, h), m.__dirty = !1, c) {
						var y = Date.now() - d;
						if(y > 15) break
					}
				}
				a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore()
			}
			return cf.wxa && f(this._layers, function(t) {
				t && t.ctx && t.ctx.draw && t.ctx.draw()
			}), o
		},
		_doPaintEl: function(t, e, n, i) {
			var r = e.ctx,
				a = t.transform;
			if(!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && li(t, this._width, this._height))) {
				var o = t.__clipPaths;
				(!i.prevElClipPaths || hi(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), ui(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
			}
		},
		getLayer: function(t, e) {
			this._singleCanvas && !this._needsManuallyCompositing && (t = Vp);
			var n = this._layers[t];
			return n || (n = new Tp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
		},
		insertLayer: function(t, e) {
			var n = this._layers,
				i = this._zlevelList,
				r = i.length,
				a = null,
				o = -1,
				s = this._domRoot;
			if(n[t]) return void lp("ZLevel " + t + " has been used already");
			if(!si(e)) return void lp("Layer of zlevel " + t + " is not valid");
			if(r > 0 && t > i[0]) {
				for(o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
				a = n[i[o]]
			}
			if(i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
				if(a) {
					var l = a.dom;
					l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
				} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
		},
		eachLayer: function(t, e) {
			var n, i, r = this._zlevelList;
			for(i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
		},
		eachBuiltinLayer: function(t, e) {
			var n, i, r, a = this._zlevelList;
			for(r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
		},
		eachOtherLayer: function(t, e) {
			var n, i, r, a = this._zlevelList;
			for(r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
		},
		getLayers: function() {
			return this._layers
		},
		_updateLayerStatus: function(t) {
			function e(t) {
				r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
			}
			if(this.eachBuiltinLayer(function(t) {
					t.__dirty = t.__used = !1
				}), this._singleCanvas)
				for(var n = 1; n < t.length; n++) {
					var i = t[n];
					if(i.zlevel !== t[n - 1].zlevel || i.incremental) {
						this._needsManuallyCompositing = !0;
						break
					}
				}
			for(var r = null, a = 0, n = 0; n < t.length; n++) {
				var o, i = t[n],
					s = i.zlevel;
				i.incremental ? (o = this.getLayer(s + Gp, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Hp : 0), this._needsManuallyCompositing), o.__builtin__ || lp("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
			}
			e(n), this.eachBuiltinLayer(function(t) {
				!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
			})
		},
		clear: function() {
			return this.eachBuiltinLayer(this._clearLayer), this
		},
		_clearLayer: function(t) {
			t.clear()
		},
		setBackgroundColor: function(t) {
			this._backgroundColor = t
		},
		configLayer: function(t, e) {
			if(e) {
				var n = this._layerConfig;
				n[t] ? r(n[t], e, !0) : n[t] = e;
				for(var i = 0; i < this._zlevelList.length; i++) {
					var a = this._zlevelList[i];
					if(a === t || a === t + Hp) {
						var o = this._layers[a];
						r(o, n[t], !0)
					}
				}
			}
		},
		delLayer: function(t) {
			var e = this._layers,
				n = this._zlevelList,
				i = e[t];
			i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1))
		},
		resize: function(t, e) {
			if(this._domRoot.style) {
				var n = this._domRoot;
				n.style.display = "none";
				var i = this._opts;
				if(null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
					n.style.width = t + "px", n.style.height = e + "px";
					for(var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
					f(this._progressiveLayers, function(n) {
						n.resize(t, e)
					}), this.refresh(!0)
				}
				this._width = t, this._height = e
			} else {
				if(null == t || null == e) return;
				this._width = t, this._height = e, this.getLayer(Vp).resize(t, e)
			}
			return this
		},
		clearLayer: function(t) {
			var e = this._layers[t];
			e && e.clear()
		},
		dispose: function() {
			this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
		},
		getRenderedCanvas: function(t) {
			if(t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Vp].dom;
			var e = new Tp("image", this, t.pixelRatio || this.dpr);
			if(e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
				this.refresh();
				var n = e.dom.width,
					i = e.dom.height,
					r = e.ctx;
				this.eachLayer(function(t) {
					t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
				})
			} else
				for(var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
					var l = o[s];
					this._doPaintEl(l, e, !0, a)
				}
			return e.dom
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		_getSize: function(t) {
			var e = this._opts,
				n = ["width", "height"][t],
				i = ["clientWidth", "clientHeight"][t],
				r = ["paddingLeft", "paddingTop"][t],
				a = ["paddingRight", "paddingBottom"][t];
			if(null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
			var o = this.root,
				s = document.defaultView.getComputedStyle(o);
			return(o[i] || oi(s[n]) || oi(o.style[n])) - (oi(s[r]) || 0) - (oi(s[a]) || 0) | 0
		},
		pathToImage: function(t, e) {
			e = e || this.dpr;
			var n = document.createElement("canvas"),
				i = n.getContext("2d"),
				r = t.getBoundingRect(),
				a = t.style,
				o = a.shadowBlur * e,
				s = a.shadowOffsetX * e,
				l = a.shadowOffsetY * e,
				h = a.hasStroke() ? a.lineWidth : 0,
				u = Math.max(h / 2, -s + o),
				c = Math.max(h / 2, s + o),
				d = Math.max(h / 2, -l + o),
				f = Math.max(h / 2, l + o),
				p = r.width + u + c,
				g = r.height + d + f;
			n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
			var v = {
				position: t.position,
				rotation: t.rotation,
				scale: t.scale
			};
			t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
			var m = ai,
				y = new m({
					style: {
						x: 0,
						y: 0,
						image: n
					}
				});
			return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
		}
	};
	var jp = "undefined" != typeof window && !!window.addEventListener,
		Up = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		qp = jp ? function(t) {
			t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
		} : function(t) {
			t.returnValue = !1, t.cancelBubble = !0
		},
		Zp = function(t) {
			t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, Of.call(this)
		};
	Zp.prototype = {
		constructor: Zp,
		addClip: function(t) {
			this._clips.push(t)
		},
		addAnimator: function(t) {
			t.animation = this;
			for(var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
		},
		removeClip: function(t) {
			var e = h(this._clips, t);
			e >= 0 && this._clips.splice(e, 1)
		},
		removeAnimator: function(t) {
			for(var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
			t.animation = null
		},
		_update: function() {
			for(var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
				var s = n[o],
					l = s.step(t, e);
				l && (r.push(l), a.push(s))
			}
			for(var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
			i = r.length;
			for(var o = 0; i > o; o++) a[o].fire(r[o]);
			this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
		},
		_startLoop: function() {
			function t() {
				e._running && (Cp(t), !e._paused && e._update())
			}
			var e = this;
			this._running = !0, Cp(t)
		},
		start: function() {
			this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
		},
		stop: function() {
			this._running = !1
		},
		pause: function() {
			this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
		},
		resume: function() {
			this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
		},
		clear: function() {
			this._clips = []
		},
		isFinished: function() {
			return !this._clips.length
		},
		animate: function(t, e) {
			e = e || {};
			var n = new ip(t, e.loop, e.getter, e.setter);
			return this.addAnimator(n), n
		}
	}, c(Zp, Of);
	var Kp = function() {
		this._track = []
	};
	Kp.prototype = {
		constructor: Kp,
		recognize: function(t, e, n) {
			return this._doTrack(t, e, n), this._recognize(t)
		},
		clear: function() {
			return this._track.length = 0, this
		},
		_doTrack: function(t, e, n) {
			var i = t.touches;
			if(i) {
				for(var r = {
						points: [],
						touches: [],
						target: e,
						event: t
					}, a = 0, o = i.length; o > a; a++) {
					var s = i[a],
						l = fi(n, s, {});
					r.points.push([l.zrX, l.zrY]), r.touches.push(s)
				}
				this._track.push(r)
			}
		},
		_recognize: function(t) {
			for(var e in $p)
				if($p.hasOwnProperty(e)) {
					var n = $p[e](this._track, t);
					if(n) return n
				}
		}
	};
	var $p = {
			pinch: function(t, e) {
				var n = t.length;
				if(n) {
					var i = (t[n - 1] || {}).points,
						r = (t[n - 2] || {}).points || i;
					if(r && r.length > 1 && i && i.length > 1) {
						var a = yi(i) / yi(r);
						!isFinite(a) && (a = 1), e.pinchScale = a;
						var o = xi(i);
						return e.pinchX = o[0], e.pinchY = o[1], {
							type: "pinch",
							target: t[0].target,
							event: e
						}
					}
				}
			}
		},
		Qp = 300,
		Jp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		tg = ["touchstart", "touchend", "touchmove"],
		eg = {
			pointerdown: 1,
			pointerup: 1,
			pointermove: 1,
			pointerout: 1
		},
		ng = p(Jp, function(t) {
			var e = t.replace("mouse", "pointer");
			return eg[e] ? e : t
		}),
		ig = {
			mousemove: function(t) {
				t = gi(this.dom, t), this.trigger("mousemove", t)
			},
			mouseout: function(t) {
				t = gi(this.dom, t);
				var e = t.toElement || t.relatedTarget;
				if(e != this.dom)
					for(; e && 9 != e.nodeType;) {
						if(e === this.dom) return;
						e = e.parentNode
					}
				this.trigger("mouseout", t)
			},
			touchstart: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, wi(this, t, "start"), ig.mousemove.call(this, t), ig.mousedown.call(this, t), bi(this)
			},
			touchmove: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, wi(this, t, "change"), ig.mousemove.call(this, t), bi(this)
			},
			touchend: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, wi(this, t, "end"), ig.mouseup.call(this, t), +new Date - this._lastTouchMoment < Qp && ig.click.call(this, t), bi(this)
			},
			pointerdown: function(t) {
				ig.mousedown.call(this, t)
			},
			pointermove: function(t) {
				Si(t) || ig.mousemove.call(this, t)
			},
			pointerup: function(t) {
				ig.mouseup.call(this, t)
			},
			pointerout: function(t) {
				Si(t) || ig.mouseout.call(this, t)
			}
		};
	f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		ig[t] = function(e) {
			e = gi(this.dom, e), this.trigger(t, e)
		}
	});
	var rg = Ii.prototype;
	rg.dispose = function() {
		for(var t = Jp.concat(tg), e = 0; e < t.length; e++) {
			var n = t[e];
			mi(this.dom, _i(n), this._handlers[n])
		}
	}, rg.setCursor = function(t) {
		this.dom.style && (this.dom.style.cursor = t || "default")
	}, c(Ii, Of);
	var ag = !cf.canvasSupported,
		og = {
			canvas: Yp
		},
		sg = {},
		lg = "4.0.4",
		hg = function(t, e, n) {
			n = n || {}, this.dom = e, this.id = t;
			var i = this,
				r = new mp,
				a = n.renderer;
			if(ag) {
				if(!og.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
				a = "vml"
			} else a && og[a] || (a = "canvas");
			var o = new og[a](e, r, n, t);
			this.storage = r, this.painter = o;
			var s = cf.node || cf.worker ? null : new Ii(o.getViewportRoot());
			this.handler = new Nf(r, o, s, o.root), this.animation = new Zp({
				stage: {
					update: y(this.flush, this)
				}
			}), this.animation.start(), this._needsRefresh;
			var l = r.delFromStorage,
				h = r.addToStorage;
			r.delFromStorage = function(t) {
				l.call(r, t), t && t.removeSelfFromZr(i)
			}, r.addToStorage = function(t) {
				h.call(r, t), t.addSelfToZr(i)
			}
		};
	hg.prototype = {
		constructor: hg,
		getId: function() {
			return this.id
		},
		add: function(t) {
			this.storage.addRoot(t), this._needsRefresh = !0
		},
		remove: function(t) {
			this.storage.delRoot(t), this._needsRefresh = !0
		},
		configLayer: function(t, e) {
			this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
		},
		setBackgroundColor: function(t) {
			this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
		},
		refreshImmediately: function() {
			this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
		},
		refresh: function() {
			this._needsRefresh = !0
		},
		flush: function() {
			var t;
			this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
		},
		addHover: function(t, e) {
			this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
		},
		removeHover: function(t) {
			this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
		},
		clearHover: function() {
			this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
		},
		refreshHover: function() {
			this._needsRefreshHover = !0
		},
		refreshHoverImmediately: function() {
			this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
		},
		resize: function(t) {
			t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
		},
		clearAnimation: function() {
			this.animation.clear()
		},
		getWidth: function() {
			return this.painter.getWidth()
		},
		getHeight: function() {
			return this.painter.getHeight()
		},
		pathToImage: function(t, e) {
			return this.painter.pathToImage(t, e)
		},
		setCursorStyle: function(t) {
			this.handler.setCursorStyle(t)
		},
		findHover: function(t, e) {
			return this.handler.findHover(t, e)
		},
		on: function(t, e, n) {
			this.handler.on(t, e, n)
		},
		off: function(t, e) {
			this.handler.off(t, e)
		},
		trigger: function(t, e) {
			this.handler.trigger(t, e)
		},
		clear: function() {
			this.storage.delRoot(), this.painter.clear()
		},
		dispose: function() {
			this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, ki(this.id)
		}
	};
	var ug = (Object.freeze || Object)({
			version: lg,
			init: Ti,
			dispose: Ci,
			getInstance: Di,
			registerPainter: Ai
		}),
		cg = f,
		dg = S,
		fg = _,
		pg = "series\x00",
		gg = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
		vg = 0,
		mg = ".",
		yg = "___EC__COMPONENT__CONTAINER___",
		xg = 0,
		_g = function(t) {
			for(var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
			return function(e, n, i) {
				for(var r = {}, a = 0; a < t.length; a++) {
					var o = t[a][1];
					if(!(n && h(n, o) >= 0 || i && h(i, o) < 0)) {
						var s = e.getShallow(o);
						null != s && (r[t[a][0]] = s)
					}
				}
				return r
			}
		},
		wg = _g([
			["lineWidth", "width"],
			["stroke", "color"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		bg = {
			getLineStyle: function(t) {
				var e = wg(this, t),
					n = this.getLineDash(e.lineWidth);
				return n && (e.lineDash = n), e
			},
			getLineDash: function(t) {
				null == t && (t = 1);
				var e = this.get("type"),
					n = Math.max(t, 2),
					i = 4 * t;
				return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
			}
		},
		Sg = _g([
			["fill", "color"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["opacity"],
			["shadowColor"]
		]),
		Mg = {
			getAreaStyle: function(t, e) {
				return Sg(this, t, e)
			}
		},
		Ig = Math.pow,
		Tg = Math.sqrt,
		Cg = 1e-8,
		Dg = 1e-4,
		Ag = Tg(3),
		kg = 1 / 3,
		Pg = H(),
		Lg = H(),
		Og = H(),
		Bg = Math.min,
		Eg = Math.max,
		Ng = Math.sin,
		Rg = Math.cos,
		zg = 2 * Math.PI,
		Fg = H(),
		Vg = H(),
		Hg = H(),
		Gg = [],
		Wg = [],
		Xg = {
			M: 1,
			L: 2,
			C: 3,
			Q: 4,
			A: 5,
			Z: 6,
			R: 7
		},
		Yg = [],
		jg = [],
		Ug = [],
		qg = [],
		Zg = Math.min,
		Kg = Math.max,
		$g = Math.cos,
		Qg = Math.sin,
		Jg = Math.sqrt,
		tv = Math.abs,
		ev = "undefined" != typeof Float32Array,
		nv = function(t) {
			this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
		};
	nv.prototype = {
		constructor: nv,
		_xi: 0,
		_yi: 0,
		_x0: 0,
		_y0: 0,
		_ux: 0,
		_uy: 0,
		_len: 0,
		_lineDash: null,
		_dashOffset: 0,
		_dashIdx: 0,
		_dashSum: 0,
		setScale: function(t, e) {
			this._ux = tv(1 / op / t) || 0, this._uy = tv(1 / op / e) || 0
		},
		getContext: function() {
			return this._ctx
		},
		beginPath: function(t) {
			return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
		},
		moveTo: function(t, e) {
			return this.addData(Xg.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
		},
		lineTo: function(t, e) {
			var n = tv(t - this._xi) > this._ux || tv(e - this._yi) > this._uy || this._len < 5;
			return this.addData(Xg.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
		},
		bezierCurveTo: function(t, e, n, i, r, a) {
			return this.addData(Xg.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
		},
		quadraticCurveTo: function(t, e, n, i) {
			return this.addData(Xg.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
		},
		arc: function(t, e, n, i, r, a) {
			return this.addData(Xg.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = $g(r) * n + t, this._yi = Qg(r) * n + t, this
		},
		arcTo: function(t, e, n, i, r) {
			return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
		},
		rect: function(t, e, n, i) {
			return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Xg.R, t, e, n, i), this
		},
		closePath: function() {
			this.addData(Xg.Z);
			var t = this._ctx,
				e = this._x0,
				n = this._y0;
			return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
		},
		fill: function(t) {
			t && t.fill(), this.toStatic()
		},
		stroke: function(t) {
			t && t.stroke(), this.toStatic()
		},
		setLineDash: function(t) {
			if(t instanceof Array) {
				this._lineDash = t, this._dashIdx = 0;
				for(var e = 0, n = 0; n < t.length; n++) e += t[n];
				this._dashSum = e
			}
			return this
		},
		setLineDashOffset: function(t) {
			return this._dashOffset = t, this
		},
		len: function() {
			return this._len
		},
		setData: function(t) {
			var e = t.length;
			this.data && this.data.length == e || !ev || (this.data = new Float32Array(e));
			for(var n = 0; e > n; n++) this.data[n] = t[n];
			this._len = e
		},
		appendPath: function(t) {
			t instanceof Array || (t = [t]);
			for(var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
			ev && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
			for(var r = 0; e > r; r++)
				for(var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
			this._len = i
		},
		addData: function(t) {
			if(this._saveData) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for(var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
				this._prevCmd = t
			}
		},
		_expandData: function() {
			if(!(this.data instanceof Array)) {
				for(var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
				this.data = t
			}
		},
		_needsDash: function() {
			return this._lineDash
		},
		_dashedLineTo: function(t, e) {
			var n, i, r = this._dashSum,
				a = this._dashOffset,
				o = this._lineDash,
				s = this._ctx,
				l = this._xi,
				h = this._yi,
				u = t - l,
				c = e - h,
				d = Jg(u * u + c * c),
				f = l,
				p = h,
				g = o.length;
			for(u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], f += u * n, p += c * n, this._dashIdx = (i + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? Zg(f, t) : Kg(f, t), c >= 0 ? Zg(p, e) : Kg(p, e));
			u = f - t, c = p - e, this._dashOffset = -Jg(u * u + c * c)
		},
		_dashedBezierTo: function(t, e, n, i, r, a) {
			var o, s, l, h, u, c = this._dashSum,
				d = this._dashOffset,
				f = this._lineDash,
				p = this._ctx,
				g = this._xi,
				v = this._yi,
				m = tr,
				y = 0,
				x = this._dashIdx,
				_ = f.length,
				w = 0;
			for(0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Jg(s * s + l * l);
			for(; _ > x && (w += f[x], !(w > d)); x++);
			for(o = (w - d) / y; 1 >= o;) h = m(g, t, n, r, o), u = m(v, e, i, a, o), x % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[x] / y, x = (x + 1) % _;
			x % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Jg(s * s + l * l)
		},
		_dashedQuadraticTo: function(t, e, n, i) {
			var r = n,
				a = i;
			n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
		},
		toStatic: function() {
			var t = this.data;
			t instanceof Array && (t.length = this._len, ev && (this.data = new Float32Array(t)))
		},
		getBoundingRect: function() {
			Yg[0] = Yg[1] = Ug[0] = Ug[1] = Number.MAX_VALUE, jg[0] = jg[1] = qg[0] = qg[1] = -Number.MAX_VALUE;
			for(var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
				var o = t[a++];
				switch(1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
					case Xg.M:
						i = t[a++], r = t[a++], e = i, n = r, Ug[0] = i, Ug[1] = r, qg[0] = i, qg[1] = r;
						break;
					case Xg.L:
						fr(e, n, t[a], t[a + 1], Ug, qg), e = t[a++], n = t[a++];
						break;
					case Xg.C:
						pr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Ug, qg), e = t[a++], n = t[a++];
						break;
					case Xg.Q:
						gr(e, n, t[a++], t[a++], t[a], t[a + 1], Ug, qg), e = t[a++], n = t[a++];
						break;
					case Xg.A:
						var s = t[a++],
							l = t[a++],
							h = t[a++],
							u = t[a++],
							c = t[a++],
							d = t[a++] + c,
							f = (t[a++], 1 - t[a++]);
						1 == a && (i = $g(c) * h + s, r = Qg(c) * u + l), vr(s, l, h, u, c, d, f, Ug, qg), e = $g(d) * h + s, n = Qg(d) * u + l;
						break;
					case Xg.R:
						i = e = t[a++], r = n = t[a++];
						var p = t[a++],
							g = t[a++];
						fr(i, r, i + p, r + g, Ug, qg);
						break;
					case Xg.Z:
						e = i, n = r
				}
				oe(Yg, Yg, Ug), se(jg, jg, qg)
			}
			return 0 === a && (Yg[0] = Yg[1] = jg[0] = jg[1] = 0), new rn(Yg[0], Yg[1], jg[0] - Yg[0], jg[1] - Yg[1])
		},
		rebuildPath: function(t) {
			for(var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
				var d = s[c++];
				switch(1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
					case Xg.M:
						e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
						break;
					case Xg.L:
						a = s[c++], o = s[c++], (tv(a - i) > l || tv(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);
						break;
					case Xg.C:
						t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
						break;
					case Xg.Q:
						t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
						break;
					case Xg.A:
						var f = s[c++],
							p = s[c++],
							g = s[c++],
							v = s[c++],
							m = s[c++],
							y = s[c++],
							x = s[c++],
							_ = s[c++],
							w = g > v ? g : v,
							b = g > v ? 1 : g / v,
							S = g > v ? v / g : 1,
							M = Math.abs(g - v) > .001,
							I = m + y;
						M ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - _), 1 == c && (e = $g(m) * g + f, n = Qg(m) * v + p), i = $g(I) * g + f, r = Qg(I) * v + p;
						break;
					case Xg.R:
						e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
						break;
					case Xg.Z:
						t.closePath(), i = e, r = n
				}
			}
		}
	}, nv.CMD = Xg;
	var iv = 2 * Math.PI,
		rv = 2 * Math.PI,
		av = nv.CMD,
		ov = 2 * Math.PI,
		sv = 1e-4,
		lv = [-1, -1, -1],
		hv = [-1, -1],
		uv = Ip.prototype.getCanvasPattern,
		cv = Math.abs,
		dv = new nv(!0);
	Pr.prototype = {
		constructor: Pr,
		type: "path",
		__dirtyPath: !0,
		strokeContainThreshold: 5,
		brush: function(t, e) {
			var n = this.style,
				i = this.path || dv,
				r = n.hasStroke(),
				a = n.hasFill(),
				o = n.fill,
				s = n.stroke,
				l = a && !!o.colorStops,
				h = r && !!s.colorStops,
				u = a && !!o.image,
				c = r && !!s.image;
			if(n.bind(t, this, e), this.setTransform(t), this.__dirty) {
				var d;
				l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
			}
			l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = uv.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = uv.call(s, t));
			var f = n.lineDash,
				p = n.lineDashOffset,
				g = !!t.setLineDash,
				v = this.getGlobalScale();
			i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), f && g && (t.setLineDash(f), t.lineDashOffset = p), r && i.stroke(t), f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
		},
		buildPath: function() {},
		createPathProxy: function() {
			this.path = new nv
		},
		getBoundingRect: function() {
			var t = this._rect,
				e = this.style,
				n = !t;
			if(n) {
				var i = this.path;
				i || (i = this.path = new nv), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
			}
			if(this._rect = t, e.hasStroke()) {
				var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
				if(this.__dirty || n) {
					r.copy(t);
					var a = e.lineWidth,
						o = e.strokeNoScale ? this.getLineScale() : 1;
					e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
				}
				return r
			}
			return t
		},
		contain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect(),
				r = this.style;
			if(t = n[0], e = n[1], i.contain(t, e)) {
				var a = this.path.data;
				if(r.hasStroke()) {
					var o = r.lineWidth,
						s = r.strokeNoScale ? this.getLineScale() : 1;
					if(s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), kr(a, o / s, t, e))) return !0
				}
				if(r.hasFill()) return Ar(a, t, e)
			}
			return !1
		},
		dirty: function(t) {
			null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
		},
		animateShape: function(t) {
			return this.animate("shape", t)
		},
		attrKV: function(t, e) {
			"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ri.prototype.attrKV.call(this, t, e)
		},
		setShape: function(t, e) {
			var n = this.shape;
			if(n) {
				if(S(t))
					for(var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
				else n[t] = e;
				this.dirty(!0)
			}
			return this
		},
		getLineScale: function() {
			var t = this.transform;
			return t && cv(t[0] - 1) > 1e-10 && cv(t[3] - 1) > 1e-10 ? Math.sqrt(cv(t[0] * t[3] - t[2] * t[1])) : 1
		}
	}, Pr.extend = function(t) {
		var e = function(e) {
			Pr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
			var n = t.shape;
			if(n) {
				this.shape = this.shape || {};
				var i = this.shape;
				for(var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
			}
			t.init && t.init.call(this, e)
		};
		u(e, Pr);
		for(var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
		return e
	}, u(Pr, ri);
	var fv = nv.CMD,
		pv = [
			[],
			[],
			[]
		],
		gv = Math.sqrt,
		vv = Math.atan2,
		mv = function(t, e) {
			var n, i, r, a, o, s, l = t.data,
				h = fv.M,
				u = fv.C,
				c = fv.L,
				d = fv.R,
				f = fv.A,
				p = fv.Q;
			for(r = 0, a = 0; r < l.length;) {
				switch(n = l[r++], a = r, i = 0, n) {
					case h:
						i = 1;
						break;
					case c:
						i = 1;
						break;
					case u:
						i = 3;
						break;
					case p:
						i = 2;
						break;
					case f:
						var g = e[4],
							v = e[5],
							m = gv(e[0] * e[0] + e[1] * e[1]),
							y = gv(e[2] * e[2] + e[3] * e[3]),
							x = vv(-e[1] / y, e[0] / m);
						l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += x, l[r++] += x, r += 2, a = r;
						break;
					case d:
						s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
				}
				for(o = 0; i > o; o++) {
					var s = pv[o];
					s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
				}
			}
		},
		yv = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
		xv = Math.sqrt,
		_v = Math.sin,
		wv = Math.cos,
		bv = Math.PI,
		Sv = function(t) {
			return Math.sqrt(t[0] * t[0] + t[1] * t[1])
		},
		Mv = function(t, e) {
			return(t[0] * e[0] + t[1] * e[1]) / (Sv(t) * Sv(e))
		},
		Iv = function(t, e) {
			return(t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Mv(t, e))
		},
		Tv = function(t) {
			ri.call(this, t)
		};
	Tv.prototype = {
		constructor: Tv,
		type: "text",
		brush: function(t, e) {
			var n = this.style;
			this.__dirty && Vn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
			var i = n.text;
			null != i && (i += ""), n.bind(t, this, e), ii(i, n) && (this.setTransform(t), Gn(this, t, i, n), this.restoreTransform(t))
		},
		getBoundingRect: function() {
			var t = this.style;
			if(this.__dirty && Vn(t, !0), !this._rect) {
				var e = t.text;
				null != e ? e += "" : e = "";
				var n = Sn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
				if(n.x += t.x || 0, n.y += t.y || 0, Jn(t.textStroke, t.textStrokeWidth)) {
					var i = t.textStrokeWidth;
					n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
				}
				this._rect = n
			}
			return this._rect
		}
	}, u(Tv, ri);
	var Cv = Pr.extend({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e, n) {
				n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		}),
		Dv = [
			["shadowBlur", 0],
			["shadowColor", "#000"],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0]
		],
		Av = function(t) {
			return cf.browser.ie && cf.browser.version >= 11 ? function() {
				var e, n = this.__clipPaths,
					i = this.style;
				if(n)
					for(var r = 0; r < n.length; r++) {
						var a = n[r],
							o = a && a.shape,
							s = a && a.type;
						if(o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
							for(var l = 0; l < Dv.length; l++) Dv[l][2] = i[Dv[l][0]], i[Dv[l][0]] = Dv[l][1];
							e = !0;
							break
						}
					}
				if(t.apply(this, arguments), e)
					for(var l = 0; l < Dv.length; l++) i[Dv[l][0]] = Dv[l][2]
			} : t
		},
		kv = Pr.extend({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			brush: Av(Pr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = Math.max(e.r0 || 0, 0),
					a = Math.max(e.r, 0),
					o = e.startAngle,
					s = e.endAngle,
					l = e.clockwise,
					h = Math.cos(o),
					u = Math.sin(o);
				t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
			}
		}),
		Pv = Pr.extend({
			type: "ring",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				r0: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = 2 * Math.PI;
				t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
			}
		}),
		Lv = function(t, e) {
			for(var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
			var o = r / 2;
			o = n > o ? n : o;
			for(var a = 0; o > a; a++) {
				var s, l, h, u = a / (o - 1) * (e ? n : n - 1),
					c = Math.floor(u),
					d = u - c,
					f = t[c % n];
				e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);
				var p = d * d,
					g = d * p;
				i.push([zr(s[0], f[0], l[0], h[0], d, p, g), zr(s[1], f[1], l[1], h[1], d, p, g)])
			}
			return i
		},
		Ov = function(t, e, n, i) {
			var r, a, o, s, l = [],
				h = [],
				u = [],
				c = [];
			if(i) {
				o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
				for(var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
				oe(o, o, i[0]), se(s, s, i[1])
			}
			for(var d = 0, f = t.length; f > d; d++) {
				var p = t[d];
				if(n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];
				else {
					if(0 === d || d === f - 1) {
						l.push(W(t[d]));
						continue
					}
					r = t[d - 1], a = t[d + 1]
				}
				U(h, a, r), J(h, h, e);
				var g = ee(p, r),
					v = ee(p, a),
					m = g + v;
				0 !== m && (g /= m, v /= m), J(u, h, -g), J(c, h, v);
				var y = Y([], p, u),
					x = Y([], p, c);
				i && (se(y, y, o), oe(y, y, s), se(x, x, o), oe(x, x, s)), l.push(y), l.push(x)
			}
			return n && l.push(l.shift()), l
		},
		Bv = Pr.extend({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, e) {
				Fr(t, e, !0)
			}
		}),
		Ev = Pr.extend({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				Fr(t, e, !1)
			}
		}),
		Nv = Pr.extend({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.x,
					i = e.y,
					r = e.width,
					a = e.height;
				e.r ? Fn(t, e) : t.rect(n, i, r, a), t.closePath()
			}
		}),
		Rv = Pr.extend({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.x1,
					i = e.y1,
					r = e.x2,
					a = e.y2,
					o = e.percent;
				0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		}),
		zv = [],
		Fv = Pr.extend({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.x1,
					i = e.y1,
					r = e.x2,
					a = e.y2,
					o = e.cpx1,
					s = e.cpy1,
					l = e.cpx2,
					h = e.cpy2,
					u = e.percent;
				0 !== u && (t.moveTo(n, i), null == l || null == h ? (1 > u && (ur(n, o, r, u, zv), o = zv[1], r = zv[2], ur(i, s, a, u, zv), s = zv[1], a = zv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (rr(n, o, l, r, u, zv), o = zv[1], l = zv[2], r = zv[3], rr(i, s, h, a, u, zv), s = zv[1], h = zv[2], a = zv[3]), t.bezierCurveTo(o, s, l, h, r, a)))
			},
			pointAt: function(t) {
				return Vr(this.shape, t, !1)
			},
			tangentAt: function(t) {
				var e = Vr(this.shape, t, !0);
				return te(e, e)
			}
		}),
		Vv = Pr.extend({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = Math.max(e.r, 0),
					a = e.startAngle,
					o = e.endAngle,
					s = e.clockwise,
					l = Math.cos(a),
					h = Math.sin(a);
				t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s)
			}
		}),
		Hv = Pr.extend({
			type: "compound",
			shape: {
				paths: null
			},
			_updatePathDirty: function() {
				for(var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
				this.__dirtyPath = t, this.__dirty = this.__dirty || t
			},
			beforeBrush: function() {
				this._updatePathDirty();
				for(var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
			},
			buildPath: function(t, e) {
				for(var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
			},
			afterBrush: function() {
				for(var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
			},
			getBoundingRect: function() {
				return this._updatePathDirty(), Pr.prototype.getBoundingRect.call(this)
			}
		}),
		Gv = function(t) {
			this.colorStops = t || []
		};
	Gv.prototype = {
		constructor: Gv,
		addColorStop: function(t, e) {
			this.colorStops.push({
				offset: t,
				color: e
			})
		}
	};
	var Wv = function(t, e, n, i, r, a) {
		this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Gv.call(this, r)
	};
	Wv.prototype = {
		constructor: Wv
	}, u(Wv, Gv);
	var Xv = function(t, e, n, i, r) {
		this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Gv.call(this, i)
	};
	Xv.prototype = {
		constructor: Xv
	}, u(Xv, Gv), Hr.prototype.incremental = !0, Hr.prototype.clearDisplaybles = function() {
		this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
	}, Hr.prototype.addDisplayable = function(t, e) {
		e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
	}, Hr.prototype.addDisplayables = function(t, e) {
		e = e || !1;
		for(var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
	}, Hr.prototype.eachPendingDisplayable = function(t) {
		for(var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
		for(var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
	}, Hr.prototype.update = function() {
		this.updateTransform();
		for(var t = this._cursor; t < this._displayables.length; t++) {
			var e = this._displayables[t];
			e.parent = this, e.update(), e.parent = null
		}
		for(var t = 0; t < this._temporaryDisplayables.length; t++) {
			var e = this._temporaryDisplayables[t];
			e.parent = this, e.update(), e.parent = null
		}
	}, Hr.prototype.brush = function(t) {
		for(var e = this._cursor; e < this._displayables.length; e++) {
			var n = this._displayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
		}
		this._cursor = e;
		for(var e = 0; e < this._temporaryDisplayables.length; e++) {
			var n = this._temporaryDisplayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
		}
		this._temporaryDisplayables = [], this.notClear = !0
	};
	var Yv = [];
	Hr.prototype.getBoundingRect = function() {
		if(!this._rect) {
			for(var t = new rn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
				var n = this._displayables[e],
					i = n.getBoundingRect().clone();
				n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Yv)), t.union(i)
			}
			this._rect = t
		}
		return this._rect
	}, Hr.prototype.contain = function(t, e) {
		var n = this.transformCoordToLocal(t, e),
			i = this.getBoundingRect();
		if(i.contain(n[0], n[1]))
			for(var r = 0; r < this._displayables.length; r++) {
				var a = this._displayables[r];
				if(a.contain(t, e)) return !0
			}
		return !1
	}, u(Hr, ri);
	var jv = Math.round,
		Uv = Math.max,
		qv = Math.min,
		Zv = {},
		Kv = Rr,
		$v = (Object.freeze || Object)({
			extendShape: Gr,
			extendPath: Wr,
			makePath: Xr,
			makeImage: Yr,
			mergePath: Kv,
			resizePath: Ur,
			subPixelOptimizeLine: qr,
			subPixelOptimizeRect: Zr,
			subPixelOptimize: Kr,
			setHoverStyle: ha,
			setLabelStyle: ua,
			setTextStyle: ca,
			setText: da,
			getFont: xa,
			updateProps: wa,
			initProps: ba,
			getTransform: Sa,
			applyTransform: Ma,
			transformDirection: Ia,
			groupTransition: Ta,
			clipPointsByRect: Ca,
			clipRectByRect: Da,
			createIcon: Aa,
			Group: pp,
			Image: ai,
			Text: Tv,
			Circle: Cv,
			Sector: kv,
			Ring: Pv,
			Polygon: Bv,
			Polyline: Ev,
			Rect: Nv,
			Line: Rv,
			BezierCurve: Fv,
			Arc: Vv,
			IncrementalDisplayable: Hr,
			CompoundPath: Hv,
			LinearGradient: Wv,
			RadialGradient: Xv,
			BoundingRect: rn
		}),
		Qv = ["textStyle", "color"],
		Jv = {
			getTextColor: function(t) {
				var e = this.ecModel;
				return this.getShallow("color") || (!t && e ? e.get(Qv) : null)
			},
			getFont: function() {
				return xa({
					fontStyle: this.getShallow("fontStyle"),
					fontWeight: this.getShallow("fontWeight"),
					fontSize: this.getShallow("fontSize"),
					fontFamily: this.getShallow("fontFamily")
				}, this.ecModel)
			},
			getTextRect: function(t) {
				return Sn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
			}
		},
		tm = _g([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"],
			["textPosition"],
			["textAlign"]
		]),
		em = {
			getItemStyle: function(t, e) {
				var n = tm(this, t, e),
					i = this.getBorderLineDash();
				return i && (n.lineDash = i), n
			},
			getBorderLineDash: function() {
				var t = this.get("borderType");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		},
		nm = c,
		im = Vi();
	ka.prototype = {
		constructor: ka,
		init: null,
		mergeOption: function(t) {
			r(this.option, t, !0)
		},
		get: function(t, e) {
			return null == t ? this.option : Pa(this.option, this.parsePath(t), !e && La(this, t))
		},
		getShallow: function(t, e) {
			var n = this.option,
				i = null == n ? n : n[t],
				r = !e && La(this, t);
			return null == i && r && (i = r.getShallow(t)), i
		},
		getModel: function(t, e) {
			var n, i = null == t ? this.option : Pa(this.option, t = this.parsePath(t));
			return e = e || (n = La(this, t)) && n.getModel(t), new ka(i, e, this.ecModel)
		},
		isEmpty: function() {
			return null == this.option
		},
		restoreData: function() {},
		clone: function() {
			var t = this.constructor;
			return new t(i(this.option))
		},
		setReadOnly: function() {},
		parsePath: function(t) {
			return "string" == typeof t && (t = t.split(".")), t
		},
		customizeGetParent: function(t) {
			im(this).getParent = t
		},
		isAnimationEnabled: function() {
			if(!cf.node) {
				if(null != this.option.animation) return !!this.option.animation;
				if(this.parentModel) return this.parentModel.isAnimationEnabled()
			}
		}
	}, Ui(ka), qi(ka), nm(ka, bg), nm(ka, Mg), nm(ka, Jv), nm(ka, em);
	var rm = 0,
		am = 1e-4,
		om = 9007199254740991,
		sm = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
		lm = (Object.freeze || Object)({
			linearMap: Ra,
			parsePercent: za,
			round: Fa,
			asc: Va,
			getPrecision: Ha,
			getPrecisionSafe: Ga,
			getPixelPrecision: Wa,
			getPercentWithPrecision: Xa,
			MAX_SAFE_INTEGER: om,
			remRadian: Ya,
			isRadianAroundZero: ja,
			parseDate: Ua,
			quantity: qa,
			nice: Ka,
			reformIntervals: $a,
			isNumeric: Qa
		}),
		hm = L,
		um = /([&<>"'])/g,
		cm = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		},
		dm = ["a", "b", "c", "d", "e", "f", "g"],
		fm = function(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		},
		pm = An,
		gm = Sn,
		vm = (Object.freeze || Object)({
			addCommas: Ja,
			toCamelCase: to,
			normalizeCssArray: hm,
			encodeHTML: eo,
			formatTpl: no,
			formatTplSimple: io,
			getTooltipMarker: ro,
			formatTime: oo,
			capitalFirst: so,
			truncateText: pm,
			getTextRect: gm
		}),
		mm = f,
		ym = ["left", "right", "top", "bottom", "width", "height"],
		xm = [
			["width", "left", "right"],
			["height", "top", "bottom"]
		],
		_m = lo,
		wm = (x(lo, "vertical"), x(lo, "horizontal"), {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get("bottom"),
					width: this.get("width"),
					height: this.get("height")
				}
			}
		}),
		bm = Vi(),
		Sm = ka.extend({
			type: "component",
			id: "",
			name: "",
			mainType: "",
			subType: "",
			componentIndex: 0,
			defaultOption: null,
			ecModel: null,
			dependentModels: [],
			uid: null,
			layoutMode: null,
			$constructor: function(t, e, n, i) {
				ka.call(this, t, e, n, i), this.uid = Oa("ec_cpt_model")
			},
			init: function(t, e, n) {
				this.mergeDefaultAndTheme(t, n)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? co(t) : {},
					a = e.getTheme();
				r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && uo(t, i, n)
			},
			mergeOption: function(t) {
				r(this.option, t, !0);
				var e = this.layoutMode;
				e && uo(this.option, t, e)
			},
			optionUpdated: function() {},
			getDefaultOption: function() {
				var t = bm(this);
				if(!t.defaultOption) {
					for(var e = [], n = this.constructor; n;) {
						var i = n.prototype.defaultOption;
						i && e.push(i), n = n.superClass
					}
					for(var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
					t.defaultOption = a
				}
				return t.defaultOption
			},
			getReferringComponents: function(t) {
				return this.ecModel.queryComponents({
					mainType: t,
					index: this.get(t + "Index", !0),
					id: this.get(t + "Id", !0)
				})
			}
		});
	$i(Sm, {
		registerWhenExtend: !0
	}), Ba(Sm), Ea(Sm, po), c(Sm, wm);
	var Mm = "";
	"undefined" != typeof navigator && (Mm = navigator.platform || "");
	var Im = {
			color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
			gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
			textStyle: {
				fontFamily: Mm.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			blendMode: null,
			animation: "auto",
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut",
			animationThreshold: 2e3,
			progressiveThreshold: 3e3,
			progressive: 400,
			hoverLayerThreshold: 3e3,
			useUTC: !1
		},
		Tm = Vi(),
		Cm = {
			clearColorPalette: function() {
				Tm(this).colorIdx = 0, Tm(this).colorNameMap = {}
			},
			getColorFromPalette: function(t, e, n) {
				e = e || this;
				var i = Tm(e),
					r = i.colorIdx || 0,
					a = i.colorNameMap = i.colorNameMap || {};
				if(a.hasOwnProperty(t)) return a[t];
				var o = Pi(this.get("color", !0)),
					s = this.get("colorLayer", !0),
					l = null != n && s ? go(s, n) : o;
				if(l = l || o, l && l.length) {
					var h = l[r];
					return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h
				}
			}
		},
		Dm = {
			cartesian2d: function(t, e, n, i) {
				var r = t.getReferringComponents("xAxis")[0],
					a = t.getReferringComponents("yAxis")[0];
				e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), mo(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), mo(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
			},
			singleAxis: function(t, e, n, i) {
				var r = t.getReferringComponents("singleAxis")[0];
				e.coordSysDims = ["single"], n.set("single", r), mo(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
			},
			polar: function(t, e, n, i) {
				var r = t.getReferringComponents("polar")[0],
					a = r.findAxisModel("radiusAxis"),
					o = r.findAxisModel("angleAxis");
				e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), mo(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), mo(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
			},
			geo: function(t, e) {
				e.coordSysDims = ["lng", "lat"]
			},
			parallel: function(t, e, n, i) {
				var r = t.ecModel,
					a = r.getComponent("parallel", t.get("parallelIndex")),
					o = e.coordSysDims = a.dimensions.slice();
				f(a.parallelAxisIndex, function(t, a) {
					var s = r.getComponent("parallelAxis", t),
						l = o[a];
					n.set(l, s), mo(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
				})
			}
		},
		Am = "original",
		km = "arrayRows",
		Pm = "objectRows",
		Lm = "keyedColumns",
		Om = "unknown",
		Bm = "typedArray",
		Em = "column",
		Nm = "row";
	yo.seriesDataToSource = function(t) {
		return new yo({
			data: t,
			sourceFormat: I(t) ? Bm : Am,
			fromDataset: !1
		})
	}, qi(yo);
	var Rm = Vi(),
		zm = "\x00_ec_inner",
		Fm = ka.extend({
			init: function(t, e, n, i) {
				n = n || {}, this.option = null, this._theme = new ka(n), this._optionManager = i
			},
			setOption: function(t, e) {
				O(!(zm in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
			},
			resetOption: function(t) {
				var e = !1,
					n = this._optionManager;
				if(!t || "recreate" === t) {
					var i = n.mountOption("recreate" === t);
					this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Oo.call(this, i), e = !0
				}
				if(("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
					var r = n.getTimelineOption(this);
					r && (this.mergeOption(r), e = !0)
				}
				if(!t || "recreate" === t || "media" === t) {
					var a = n.getMediaOption(this, this._api);
					a.length && f(a, function(t) {
						this.mergeOption(t, e = !0)
					}, this)
				}
				return e
			},
			mergeOption: function(t) {
				function e(e, i) {
					var r = Pi(t[e]),
						s = Ei(a.get(e), r);
					Ni(s), f(s, function(t) {
						var n = t.option;
						S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Eo(e, n, t.exist))
					});
					var l = Bo(a, i);
					n[e] = [], a.set(e, []), f(s, function(t, i) {
						var r = t.exist,
							s = t.option;
						if(O(S(s) || r, "Empty component definition"), s) {
							var h = Sm.getClass(e, t.keyInfo.subType, !0);
							if(r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);
							else {
								var u = o({
									dependentModels: l,
									componentIndex: i
								}, t.keyInfo);
								r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0)
							}
						} else r.mergeOption({}, this), r.optionUpdated({}, !1);
						a.get(e)[i] = r, n[e][i] = r.option
					}, this), "series" === e && No(this, a.get("series"))
				}
				var n = this.option,
					a = this._componentsMap,
					s = [];
				wo(this), f(t, function(t, e) {
					null != t && (Sm.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
				}), Sm.topologicalTravel(s, Sm.getAllClassMainTypes(), e, this), this._seriesIndicesMap = z(this._seriesIndices = this._seriesIndices || [])
			},
			getOption: function() {
				var t = i(this.option);
				return f(t, function(e, n) {
					if(Sm.hasClass(n)) {
						for(var e = Pi(e), i = e.length - 1; i >= 0; i--) zi(e[i]) && e.splice(i, 1);
						t[n] = e
					}
				}), delete t[zm], t
			},
			getTheme: function() {
				return this._theme
			},
			getComponent: function(t, e) {
				var n = this._componentsMap.get(t);
				return n ? n[e || 0] : void 0
			},
			queryComponents: function(t) {
				var e = t.mainType;
				if(!e) return [];
				var n = t.index,
					i = t.id,
					r = t.name,
					a = this._componentsMap.get(e);
				if(!a || !a.length) return [];
				var o;
				if(null != n) _(n) || (n = [n]), o = v(p(n, function(t) {
					return a[t]
				}), function(t) {
					return !!t
				});
				else if(null != i) {
					var s = _(i);
					o = v(a, function(t) {
						return s && h(i, t.id) >= 0 || !s && t.id === i
					})
				} else if(null != r) {
					var l = _(r);
					o = v(a, function(t) {
						return l && h(r, t.name) >= 0 || !l && t.name === r
					})
				} else o = a.slice();
				return Ro(o, t)
			},
			findComponents: function(t) {
				function e(t) {
					var e = r + "Index",
						n = r + "Id",
						i = r + "Name";
					return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
						mainType: r,
						index: t[e],
						id: t[n],
						name: t[i]
					}
				}

				function n(e) {
					return t.filter ? v(e, t.filter) : e
				}
				var i = t.query,
					r = t.mainType,
					a = e(i),
					o = a ? this.queryComponents(a) : this._componentsMap.get(r);
				return n(Ro(o, t))
			},
			eachComponent: function(t, e, n) {
				var i = this._componentsMap;
				if("function" == typeof t) n = e, e = t, i.each(function(t, i) {
					f(t, function(t, r) {
						e.call(n, i, t, r)
					})
				});
				else if(b(t)) f(i.get(t), e, n);
				else if(S(t)) {
					var r = this.findComponents(t);
					f(r, e, n)
				}
			},
			getSeriesByName: function(t) {
				var e = this._componentsMap.get("series");
				return v(e, function(e) {
					return e.name === t
				})
			},
			getSeriesByIndex: function(t) {
				return this._componentsMap.get("series")[t]
			},
			getSeriesByType: function(t) {
				var e = this._componentsMap.get("series");
				return v(e, function(e) {
					return e.subType === t
				})
			},
			getSeries: function() {
				return this._componentsMap.get("series").slice()
			},
			getSeriesCount: function() {
				return this._componentsMap.get("series").length
			},
			eachSeries: function(t, e) {
				f(this._seriesIndices, function(n) {
					var i = this._componentsMap.get("series")[n];
					t.call(e, i, n)
				}, this)
			},
			eachRawSeries: function(t, e) {
				f(this._componentsMap.get("series"), t, e)
			},
			eachSeriesByType: function(t, e, n) {
				f(this._seriesIndices, function(i) {
					var r = this._componentsMap.get("series")[i];
					r.subType === t && e.call(n, r, i)
				}, this)
			},
			eachRawSeriesByType: function(t, e, n) {
				return f(this.getSeriesByType(t), e, n)
			},
			isSeriesFiltered: function(t) {
				return null == this._seriesIndicesMap.get(t.componentIndex)
			},
			getCurrentSeriesIndices: function() {
				return(this._seriesIndices || []).slice()
			},
			filterSeries: function(t, e) {
				var n = v(this._componentsMap.get("series"), t, e);
				No(this, n)
			},
			restoreData: function(t) {
				var e = this._componentsMap;
				No(this, e.get("series"));
				var n = [];
				e.each(function(t, e) {
					n.push(e)
				}), Sm.topologicalTravel(n, Sm.getAllClassMainTypes(), function(n) {
					f(e.get(n), function(e) {
						("series" !== n || !Po(e, t)) && e.restoreData()
					})
				})
			}
		});
	c(Fm, Cm);
	var Vm = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
		Hm = {};
	Fo.prototype = {
		constructor: Fo,
		create: function(t, e) {
			var n = [];
			f(Hm, function(i) {
				var r = i.create(t, e);
				n = n.concat(r || [])
			}), this._coordinateSystems = n
		},
		update: function(t, e) {
			f(this._coordinateSystems, function(n) {
				n.update && n.update(t, e)
			})
		},
		getCoordinateSystems: function() {
			return this._coordinateSystems.slice()
		}
	}, Fo.register = function(t, e) {
		Hm[t] = e
	}, Fo.get = function(t) {
		return Hm[t]
	};
	var Gm = f,
		Wm = i,
		Xm = p,
		Ym = r,
		jm = /^(min|max)?(.+)$/;
	Vo.prototype = {
		constructor: Vo,
		setOption: function(t, e) {
			t && f(Pi(t.series), function(t) {
				t && t.data && I(t.data) && E(t.data)
			}), t = Wm(t, !0);
			var n = this._optionBackup,
				i = Ho.call(this, t, e, !n);
			this._newBaseOption = i.baseOption, n ? (Yo(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
		},
		mountOption: function(t) {
			var e = this._optionBackup;
			return this._timelineOptions = Xm(e.timelineOptions, Wm), this._mediaList = Xm(e.mediaList, Wm), this._mediaDefault = Wm(e.mediaDefault), this._currentMediaIndices = [], Wm(t ? e.baseOption : this._newBaseOption)
		},
		getTimelineOption: function(t) {
			var e, n = this._timelineOptions;
			if(n.length) {
				var i = t.getComponent("timeline");
				i && (e = Wm(n[i.getCurrentIndex()], !0))
			}
			return e
		},
		getMediaOption: function() {
			var t = this._api.getWidth(),
				e = this._api.getHeight(),
				n = this._mediaList,
				i = this._mediaDefault,
				r = [],
				a = [];
			if(!n.length && !i) return a;
			for(var o = 0, s = n.length; s > o; o++) Go(n[o].query, t, e) && r.push(o);
			return !r.length && i && (r = [-1]), r.length && !Xo(r, this._currentMediaIndices) && (a = Xm(r, function(t) {
				return Wm(-1 === t ? i.option : n[t].option)
			})), this._currentMediaIndices = r, a
		}
	};
	var Um = f,
		qm = S,
		Zm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
		Km = function(t, e) {
			Um(Qo(t.series), function(t) {
				qm(t) && $o(t)
			});
			var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
			e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Um(n, function(e) {
				Um(Qo(t[e]), function(t) {
					t && (Zo(t, "axisLabel"), Zo(t.axisPointer, "label"))
				})
			}), Um(Qo(t.parallel), function(t) {
				var e = t && t.parallelAxisDefault;
				Zo(e, "axisLabel"), Zo(e && e.axisPointer, "label")
			}), Um(Qo(t.calendar), function(t) {
				Uo(t, "itemStyle"), Zo(t, "dayLabel"), Zo(t, "monthLabel"), Zo(t, "yearLabel")
			}), Um(Qo(t.radar), function(t) {
				Zo(t, "name")
			}), Um(Qo(t.geo), function(t) {
				qm(t) && (Ko(t), Um(Qo(t.regions), function(t) {
					Ko(t)
				}))
			}), Um(Qo(t.timeline), function(t) {
				Ko(t), Uo(t, "label"), Uo(t, "itemStyle"), Uo(t, "controlStyle", !0);
				var e = t.data;
				_(e) && f(e, function(t) {
					S(t) && (Uo(t, "label"), Uo(t, "itemStyle"))
				})
			}), Um(Qo(t.toolbox), function(t) {
				Uo(t, "iconStyle"), Um(t.feature, function(t) {
					Uo(t, "iconStyle")
				})
			}), Zo(Jo(t.axisPointer), "label"), Zo(Jo(t.tooltip).axisPointer, "label")
		},
		$m = [
			["x", "left"],
			["y", "top"],
			["x2", "right"],
			["y2", "bottom"]
		],
		Qm = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
		Jm = function(t, e) {
			Km(t, e), t.series = Pi(t.series), f(t.series, function(t) {
				if(S(t)) {
					var e = t.type;
					if(("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
						var n = ts(t, "pointer.color");
						null != n && es(t, "itemStyle.normal.color", n)
					}
					ns(t)
				}
			}), t.dataRange && (t.visualMap = t.dataRange), f(Qm, function(e) {
				var n = t[e];
				n && (_(n) || (n = [n]), f(n, function(t) {
					ns(t)
				}))
			})
		},
		ty = function(t) {
			var e = z();
			t.eachSeries(function(t) {
				var n = t.get("stack");
				if(n) {
					var i = e.get(n) || e.set(n, []),
						r = t.getData(),
						a = {
							stackResultDimension: r.getCalculationInfo("stackResultDimension"),
							stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
							stackedDimension: r.getCalculationInfo("stackedDimension"),
							stackedByDimension: r.getCalculationInfo("stackedByDimension"),
							isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
							data: r,
							seriesModel: t
						};
					if(!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
					i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
				}
			}), e.each(is)
		},
		ey = rs.prototype;
	ey.pure = !1, ey.persistent = !0, ey.getSource = function() {
		return this._source
	};
	var ny = {
			arrayRows_column: {
				pure: !0,
				count: function() {
					return Math.max(0, this._data.length - this._source.startIndex)
				},
				getItem: function(t) {
					return this._data[t + this._source.startIndex]
				},
				appendData: ss
			},
			arrayRows_row: {
				pure: !0,
				count: function() {
					var t = this._data[0];
					return t ? Math.max(0, t.length - this._source.startIndex) : 0
				},
				getItem: function(t) {
					t += this._source.startIndex;
					for(var e = [], n = this._data, i = 0; i < n.length; i++) {
						var r = n[i];
						e.push(r ? r[t] : null)
					}
					return e
				},
				appendData: function() {
					throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
				}
			},
			objectRows: {
				pure: !0,
				count: as,
				getItem: os,
				appendData: ss
			},
			keyedColumns: {
				pure: !0,
				count: function() {
					var t = this._source.dimensionsDefine[0].name,
						e = this._data[t];
					return e ? e.length : 0
				},
				getItem: function(t) {
					for(var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
						var r = this._data[n[i].name];
						e.push(r ? r[t] : null)
					}
					return e
				},
				appendData: function(t) {
					var e = this._data;
					f(t, function(t, n) {
						for(var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
					})
				}
			},
			original: {
				count: as,
				getItem: os,
				appendData: ss
			},
			typedArray: {
				persistent: !1,
				pure: !0,
				count: function() {
					return this._data ? this._data.length / this._dimSize : 0
				},
				getItem: function(t, e) {
					t -= this._offset, e = e || [];
					for(var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
					return e
				},
				appendData: function(t) {
					this._data = t
				},
				clean: function() {
					this._offset += this.count(), this._data = null
				}
			}
		},
		iy = {
			arrayRows: ls,
			objectRows: function(t, e, n, i) {
				return null != n ? t[i] : t
			},
			keyedColumns: ls,
			original: function(t, e, n) {
				var i = Oi(t);
				return null != n && i instanceof Array ? i[n] : i
			},
			typedArray: ls
		},
		ry = {
			arrayRows: hs,
			objectRows: function(t, e) {
				return us(t[e], this._dimensionInfos[e])
			},
			keyedColumns: hs,
			original: function(t, e, n, i) {
				var r = t && (null == t.value ? t : t.value);
				return !this._rawData.pure && Bi(t) && (this.hasItemOption = !0), us(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
			},
			typedArray: function(t, e, n, i) {
				return t[i]
			}
		},
		ay = /\{@(.+?)\}/g,
		oy = {
			getDataParams: function(t, e) {
				var n = this.getData(e),
					i = this.getRawValue(t, e),
					r = n.getRawIndex(t),
					a = n.getName(t),
					o = n.getRawDataItem(t),
					s = n.getItemVisual(t, "color");
				return {
					componentType: this.mainType,
					componentSubType: this.subType,
					seriesType: "series" === this.mainType ? this.subType : null,
					seriesIndex: this.seriesIndex,
					seriesId: this.id,
					seriesName: this.name,
					name: a,
					dataIndex: r,
					data: o,
					dataType: e,
					value: i,
					color: s,
					marker: ro(s),
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, e, n, i, r) {
				e = e || "normal";
				var a = this.getData(n),
					o = a.getItemModel(t),
					s = this.getDataParams(t, n);
				null != i && s.value instanceof Array && (s.value = s.value[i]);
				var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
				if("function" == typeof l) return s.status = e, l(s);
				if("string" == typeof l) {
					var h = no(l, s);
					return h.replace(ay, function(e, n) {
						var i = n.length;
						return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), cs(a, t, n)
					})
				}
			},
			getRawValue: function(t, e) {
				return cs(this.getData(e), t)
			},
			formatTooltip: function() {}
		},
		sy = ps.prototype;
	sy.perform = function(t) {
		function e(t) {
			return !(t >= 1) && (t = 1), t
		}
		var n = this._upstream,
			i = t && t.skip;
		if(this._dirty && n) {
			var r = this.context;
			r.data = r.outputData = n.context.outputData
		}
		this.__pipeline && (this.__pipeline.currentTask = this);
		var a;
		this._plan && !i && (a = this._plan(this.context));
		var o = e(this._modBy),
			s = this._modDataCount || 0,
			l = e(t && t.modBy),
			h = t && t.modDataCount || 0;
		(o !== l || s !== h) && (a = "reset");
		var u;
		(this._dirty || "reset" === a) && (this._dirty = !1, u = vs(this, i)), this._modBy = l, this._modDataCount = h;
		var c = t && t.step;
		if(this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
			var d = this._dueIndex,
				f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
			if(!i && (u || f > d)) {
				var p = this._progress;
				if(_(p))
					for(var g = 0; g < p.length; g++) gs(this, p[g], d, f, l, h);
				else gs(this, p, d, f, l, h)
			}
			this._dueIndex = f;
			var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
			this._outputDueEnd = v
		} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
		return this.unfinished()
	};
	var ly = function() {
		function t() {
			return n > i ? i++ : null
		}

		function e() {
			var t = i % o * r + Math.ceil(i / o),
				e = i >= n ? null : a > t ? t : i;
			return i++, e
		}
		var n, i, r, a, o, s = {
			reset: function(l, h, u, c) {
				i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
			}
		};
		return s
	}();
	sy.dirty = function() {
		this._dirty = !0, this._onDirty && this._onDirty(this.context)
	}, sy.unfinished = function() {
		return this._progress && this._dueIndex < this._dueEnd
	}, sy.pipe = function(t) {
		(this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
	}, sy.dispose = function() {
		this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
	}, sy.getUpstream = function() {
		return this._upstream
	}, sy.getDownstream = function() {
		return this._downstream
	}, sy.setOutputEnd = function(t) {
		this._outputDueEnd = this._settedOutputEnd = t
	};
	var hy = Vi(),
		uy = Sm.extend({
			type: "series.__base__",
			seriesIndex: 0,
			coordinateSystem: null,
			defaultOption: null,
			legendDataProvider: null,
			visualColorAccessPath: "itemStyle.color",
			layoutMode: null,
			init: function(t, e, n) {
				this.seriesIndex = this.componentIndex, this.dataTask = fs({
					count: xs,
					reset: _s
				}), this.dataTask.context = {
					model: this
				}, this.mergeDefaultAndTheme(t, n), bo(this);
				var i = this.getInitialData(t, n);
				bs(i, this), this.dataTask.context.data = i, hy(this).dataBeforeProcessed = i, ms(this)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? co(t) : {},
					a = this.subType;
				Sm.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Li(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && uo(t, i, n)
			},
			mergeOption: function(t, e) {
				t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
				var n = this.layoutMode;
				n && uo(this.option, t, n), bo(this);
				var i = this.getInitialData(t, e);
				bs(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, hy(this).dataBeforeProcessed = i, ms(this)
			},
			fillDataTextStyle: function(t) {
				if(t && !I(t))
					for(var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Li(t[n], "label", e)
			},
			getInitialData: function() {},
			appendData: function(t) {
				var e = this.getRawData();
				e.appendData(t.data)
			},
			getData: function(t) {
				var e = Ms(this);
				if(e) {
					var n = e.context.data;
					return null == t ? n : n.getLinkedData(t)
				}
				return hy(this).data
			},
			setData: function(t) {
				var e = Ms(this);
				if(e) {
					var n = e.context;
					n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
				}
				hy(this).data = t
			},
			getSource: function() {
				return _o(this)
			},
			getRawData: function() {
				return hy(this).dataBeforeProcessed
			},
			getBaseAxis: function() {
				var t = this.coordinateSystem;
				return t && t.getBaseAxis && t.getBaseAxis()
			},
			formatTooltip: function(t, e) {
				function n(n) {
					function i(t, n) {
						var i = r.getDimensionInfo(n);
						if(i && i.otherDims.tooltip !== !1) {
							var a = i.type,
								l = ro({
									color: h,
									type: "subItem"
								}),
								u = (o ? l + eo(i.displayName || "-") + ": " : "") + eo("ordinal" === a ? t + "" : "time" === a ? e ? "" : oo("yyyy/MM/dd hh:mm:ss", t) : Ja(t));
							u && s.push(u)
						}
					}
					var o = g(n, function(t, e, n) {
							var i = r.getDimensionInfo(n);
							return t |= i && i.tooltip !== !1 && null != i.displayName
						}, 0),
						s = [];
					return a.length ? f(a, function(e) {
						i(cs(r, t, e), e)
					}) : f(n, i), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ")
				}

				function i(t) {
					return eo(Ja(t))
				}
				var r = this.getData(),
					a = r.mapDimension("defaultedTooltip", !0),
					o = a.length,
					s = this.getRawValue(t),
					l = _(s),
					h = r.getItemVisual(t, "color");
				S(h) && h.colorStops && (h = (h.colorStops[0] || {}).color), h = h || "transparent";
				var u = o > 1 || l && !o ? n(s) : i(o ? cs(r, t, a[0]) : l ? s[0] : s),
					c = ro(h),
					d = r.getName(t),
					p = this.name;
				return Ri(this) || (p = ""), p = p ? eo(p) + (e ? ": " : "<br/>") : "", e ? c + p + u : p + c + (d ? eo(d) + ": " + u : u)
			},
			isAnimationEnabled: function() {
				if(cf.node) return !1;
				var t = this.getShallow("animation");
				return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
			},
			restoreData: function() {
				this.dataTask.dirty()
			},
			getColorFromPalette: function(t, e, n) {
				var i = this.ecModel,
					r = Cm.getColorFromPalette.call(this, t, e, n);
				return r || (r = i.getColorFromPalette(t, e, n)), r
			},
			coordDimToDataDim: function(t) {
				return this.getRawData().mapDimension(t, !0)
			},
			getProgressive: function() {
				return this.get("progressive")
			},
			getProgressiveThreshold: function() {
				return this.get("progressiveThreshold")
			},
			getAxisTooltipData: null,
			getTooltipPosition: null,
			pipeTask: null,
			preventIncremental: null,
			pipelineContext: null
		});
	c(uy, oy), c(uy, Cm);
	var cy = function() {
		this.group = new pp, this.uid = Oa("viewComponent")
	};
	cy.prototype = {
		constructor: cy,
		init: function() {},
		render: function() {},
		dispose: function() {}
	};
	var dy = cy.prototype;
	dy.updateView = dy.updateLayout = dy.updateVisual = function() {}, Ui(cy), $i(cy, {
		registerWhenExtend: !0
	});
	var fy = function() {
			var t = Vi();
			return function(e) {
				var n = t(e),
					i = e.pipelineContext,
					r = n.large,
					a = n.progressiveRender,
					o = n.large = i.large,
					s = n.progressiveRender = i.progressiveRender;
				return !!(r ^ o || a ^ s) && "reset"
			}
		},
		py = Vi(),
		gy = fy();
	Is.prototype = {
		type: "chart",
		init: function() {},
		render: function() {},
		highlight: function(t, e, n, i) {
			Cs(t.getData(), i, "emphasis")
		},
		downplay: function(t, e, n, i) {
			Cs(t.getData(), i, "normal")
		},
		remove: function() {
			this.group.removeAll()
		},
		dispose: function() {},
		incrementalPrepareRender: null,
		incrementalRender: null,
		updateTransform: null
	};
	var vy = Is.prototype;
	vy.updateView = vy.updateLayout = vy.updateVisual = function(t, e, n, i) {
		this.render(t, e, n, i)
	}, Ui(Is, ["dispose"]), $i(Is, {
		registerWhenExtend: !0
	}), Is.markUpdateMethod = function(t, e) {
		py(t).updateMethod = e
	};
	var my = {
			incrementalPrepareRender: {
				progress: function(t, e) {
					e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
				}
			},
			render: {
				forceFirstProgress: !0,
				progress: function(t, e) {
					e.view.render(e.model, e.ecModel, e.api, e.payload)
				}
			}
		},
		yy = "\x00__throttleOriginMethod",
		xy = "\x00__throttleRate",
		_y = "\x00__throttleType",
		wy = {
			createOnAllSeries: !0,
			performRawSeries: !0,
			reset: function(t, e) {
				var n = t.getData(),
					i = (t.visualColorAccessPath || "itemStyle.color").split("."),
					r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
				if(n.setVisual("color", r), !e.isSeriesFiltered(t)) {
					"function" != typeof r || r instanceof Gv || n.each(function(e) {
						n.setItemVisual(e, "color", r(t.getDataParams(e)))
					});
					var a = function(t, e) {
						var n = t.getItemModel(e),
							r = n.get(i, !0);
						null != r && t.setItemVisual(e, "color", r)
					};
					return {
						dataEach: n.hasItemOption ? a : null
					}
				}
			}
		},
		by = {
			toolbox: {
				brush: {
					title: {
						rect: "矩形选择",
						polygon: "圈选",
						lineX: "横向选择",
						lineY: "纵向选择",
						keep: "保持选择",
						clear: "清除选择"
					}
				},
				dataView: {
					title: "数据视图",
					lang: ["数据视图", "关闭", "刷新"]
				},
				dataZoom: {
					title: {
						zoom: "区域缩放",
						back: "区域缩放还原"
					}
				},
				magicType: {
					title: {
						line: "切换为折线图",
						bar: "切换为柱状图",
						stack: "切换为堆叠",
						tiled: "切换为平铺"
					}
				},
				restore: {
					title: "还原"
				},
				saveAsImage: {
					title: "保存为图片",
					lang: ["右键另存为图片"]
				}
			},
			series: {
				typeNames: {
					pie: "饼图",
					bar: "柱状图",
					line: "折线图",
					scatter: "散点图",
					effectScatter: "涟漪散点图",
					radar: "雷达图",
					tree: "树图",
					treemap: "矩形树图",
					boxplot: "箱型图",
					candlestick: "K线图",
					k: "K线图",
					heatmap: "热力图",
					map: "地图",
					parallel: "平行坐标图",
					lines: "线图",
					graph: "关系图",
					sankey: "桑基图",
					funnel: "漏斗图",
					gauge: "仪表盘图",
					pictorialBar: "象形柱图",
					themeRiver: "主题河流图",
					sunburst: "旭日图"
				}
			},
			aria: {
				general: {
					withTitle: "这是一个关于“{title}”的图表。",
					withoutTitle: "这是一个图表，"
				},
				series: {
					single: {
						prefix: "",
						withName: "图表类型是{seriesType}，表示{seriesName}。",
						withoutName: "图表类型是{seriesType}。"
					},
					multiple: {
						prefix: "它由{seriesCount}个图表系列组成。",
						withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
						withoutName: "第{seriesId}个系列是一个{seriesType}，",
						separator: {
							middle: "；",
							end: "。"
						}
					}
				},
				data: {
					allData: "其数据是——",
					partialData: "其中，前{displayCnt}项是——",
					withName: "{name}的数据是{value}",
					withoutName: "{value}",
					separator: {
						middle: "，",
						end: ""
					}
				}
			}
		},
		Sy = function(t, e) {
			function n(t, e) {
				if("string" != typeof t) return t;
				var n = t;
				return f(e, function(t, e) {
					n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
				}), n
			}

			function i(t) {
				var e = o.get(t);
				if(null == e) {
					for(var n = t.split("."), i = by.aria, r = 0; r < n.length; ++r) i = i[n[r]];
					return i
				}
				return e
			}

			function r() {
				var t = e.getModel("title").option;
				return t && t.length && (t = t[0]), t && t.text
			}

			function a(t) {
				return by.series.typeNames[t] || "自定义图"
			}
			var o = e.getModel("aria");
			if(o.get("show")) {
				if(o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
				var s = 0;
				e.eachSeries(function() {
					++s
				}, this);
				var l, h = o.get("data.maxCount") || 10,
					u = o.get("series.maxCount") || 10,
					c = Math.min(s, u);
				if(!(1 > s)) {
					var d = r();
					l = d ? n(i("general.withTitle"), {
						title: d
					}) : i("general.withoutTitle");
					var p = [],
						g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
					l += n(i(g), {
						seriesCount: s
					}), e.eachSeries(function(t, e) {
						if(c > e) {
							var r, o = t.get("name"),
								l = "series." + (s > 1 ? "multiple" : "single") + ".";
							r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
								seriesId: t.seriesIndex,
								seriesName: t.get("name"),
								seriesType: a(t.subType)
							});
							var u = t.getData();
							window.data = u, r += u.count() > h ? n(i("data.partialData"), {
								displayCnt: h
							}) : i("data.allData");
							for(var d = [], f = 0; f < u.count(); f++)
								if(h > f) {
									var g = u.getName(f),
										v = cs(u, f);
									d.push(n(i(g ? "data.withName" : "data.withoutName"), {
										name: g,
										value: v
									}))
								}
							r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r)
						}
					}), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
				}
			}
		},
		My = Math.PI,
		Iy = function(t, e) {
			e = e || {}, s(e, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var n = new Nv({
					style: {
						fill: e.maskColor
					},
					zlevel: e.zlevel,
					z: 1e4
				}),
				i = new Vv({
					shape: {
						startAngle: -My / 2,
						endAngle: -My / 2 + .1,
						r: 10
					},
					style: {
						stroke: e.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: e.zlevel,
					z: 10001
				}),
				r = new Nv({
					style: {
						fill: "none",
						text: e.text,
						textPosition: "right",
						textDistance: 10,
						textFill: e.textColor
					},
					zlevel: e.zlevel,
					z: 10001
				});
			i.animateShape(!0).when(1e3, {
				endAngle: 3 * My / 2
			}).start("circularInOut"), i.animateShape(!0).when(1e3, {
				startAngle: 3 * My / 2
			}).delay(300).start("circularInOut");
			var a = new pp;
			return a.add(i), a.add(r), a.add(n), a.resize = function() {
				var e = t.getWidth() / 2,
					a = t.getHeight() / 2;
				i.setShape({
					cx: e,
					cy: a
				});
				var o = i.shape.r;
				r.setShape({
					x: e - o,
					y: a - o,
					width: 2 * o,
					height: 2 * o
				}), n.setShape({
					x: 0,
					y: 0,
					width: t.getWidth(),
					height: t.getHeight()
				})
			}, a.resize(), a
		},
		Ty = Ls.prototype;
	Ty.restoreData = function(t, e) {
		t.restoreData(e), this._stageTaskMap.each(function(t) {
			var e = t.overallTask;
			e && e.dirty()
		})
	}, Ty.getPerformArgs = function(t, e) {
		if(t.__pipeline) {
			var n = this._pipelineMap.get(t.__pipeline.id),
				i = n.context,
				r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
				a = r ? n.step : null,
				o = i && i.modDataCount,
				s = null != o ? Math.ceil(o / a) : null;
			return {
				step: a,
				modBy: s,
				modDataCount: o
			}
		}
	}, Ty.getPipeline = function(t) {
		return this._pipelineMap.get(t)
	}, Ty.updateStreamModes = function(t, e) {
		var n = this._pipelineMap.get(t.uid),
			i = t.getData(),
			r = i.count(),
			a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
			o = t.get("large") && r >= t.get("largeThreshold"),
			s = "mod" === t.get("progressiveChunkMode") ? r : null;
		t.pipelineContext = n.context = {
			progressiveRender: a,
			modDataCount: s,
			large: o
		}
	}, Ty.restorePipelines = function(t) {
		var e = this,
			n = e._pipelineMap = z();
		t.eachSeries(function(t) {
			var i = t.getProgressive(),
				r = t.uid;
			n.set(r, {
				id: r,
				head: null,
				tail: null,
				threshold: t.getProgressiveThreshold(),
				progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
				blockIndex: -1,
				step: Math.round(i || 700),
				count: 0
			}), Xs(e, t, t.dataTask)
		})
	}, Ty.prepareStageTasks = function() {
		var t = this._stageTaskMap,
			e = this.ecInstance.getModel(),
			n = this.api;
		f(this._allHandlers, function(i) {
			var r = t.get(i.uid) || t.set(i.uid, []);
			i.reset && Bs(this, i, r, e, n), i.overallReset && Es(this, i, r, e, n)
		}, this)
	}, Ty.prepareView = function(t, e, n, i) {
		var r = t.renderTask,
			a = r.context;
		a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Xs(this, e, r)
	}, Ty.performDataProcessorTasks = function(t, e) {
		Os(this, this._dataProcessorHandlers, t, e, {
			block: !0
		})
	}, Ty.performVisualTasks = function(t, e, n) {
		Os(this, this._visualHandlers, t, e, n)
	}, Ty.performSeriesTasks = function(t) {
		var e;
		t.eachSeries(function(t) {
			e |= t.dataTask.perform()
		}), this.unfinished |= e
	}, Ty.plan = function() {
		this._pipelineMap.each(function(t) {
			var e = t.tail;
			do {
				if(e.__block) {
					t.blockIndex = e.__idxInPipeline;
					break
				}
				e = e.getUpstream()
			} while (e)
		})
	};
	var Cy = Ty.updatePayload = function(t, e) {
			"remain" !== e && (t.context.payload = e)
		},
		Dy = Gs(0);
	Ls.wrapStageHandler = function(t, e) {
		return w(t) && (t = {
			overallReset: t,
			seriesType: Ys(t)
		}), t.uid = Oa("stageHandler"), e && (t.visualType = e), t
	};
	var Ay, ky = {},
		Py = {};
	js(ky, Fm), js(Py, zo), ky.eachSeriesByType = ky.eachRawSeriesByType = function(t) {
		Ay = t
	}, ky.eachComponent = function(t) {
		"series" === t.mainType && t.subType && (Ay = t.subType)
	};
	var Ly = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
		Oy = {
			color: Ly,
			colorLayer: [
				["#37A2DA", "#ffd85c", "#fd7b5f"],
				["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
				["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Ly
			]
		},
		By = "#eee",
		Ey = function() {
			return {
				axisLine: {
					lineStyle: {
						color: By
					}
				},
				axisTick: {
					lineStyle: {
						color: By
					}
				},
				axisLabel: {
					textStyle: {
						color: By
					}
				},
				splitLine: {
					lineStyle: {
						type: "dashed",
						color: "#aaa"
					}
				},
				splitArea: {
					areaStyle: {
						color: By
					}
				}
			}
		},
		Ny = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
		Ry = {
			color: Ny,
			backgroundColor: "#333",
			tooltip: {
				axisPointer: {
					lineStyle: {
						color: By
					},
					crossStyle: {
						color: By
					}
				}
			},
			legend: {
				textStyle: {
					color: By
				}
			},
			textStyle: {
				color: By
			},
			title: {
				textStyle: {
					color: By
				}
			},
			toolbox: {
				iconStyle: {
					normal: {
						borderColor: By
					}
				}
			},
			dataZoom: {
				textStyle: {
					color: By
				}
			},
			visualMap: {
				textStyle: {
					color: By
				}
			},
			timeline: {
				lineStyle: {
					color: By
				},
				itemStyle: {
					normal: {
						color: Ny[1]
					}
				},
				label: {
					normal: {
						textStyle: {
							color: By
						}
					}
				},
				controlStyle: {
					normal: {
						color: By,
						borderColor: By
					}
				}
			},
			timeAxis: Ey(),
			logAxis: Ey(),
			valueAxis: Ey(),
			categoryAxis: Ey(),
			line: {
				symbol: "circle"
			},
			graph: {
				color: Ny
			},
			gauge: {
				title: {
					textStyle: {
						color: By
					}
				}
			},
			candlestick: {
				itemStyle: {
					normal: {
						color: "#FD1050",
						color0: "#0CF49B",
						borderColor: "#FD1050",
						borderColor0: "#0CF49B"
					}
				}
			}
		};
	Ry.categoryAxis.splitLine.show = !1, Sm.extend({
		type: "dataset",
		defaultOption: {
			seriesLayoutBy: Em,
			sourceHeader: null,
			dimensions: null,
			source: null
		},
		optionUpdated: function() {
			xo(this)
		}
	}), cy.extend({
		type: "dataset"
	});
	var zy = O,
		Fy = f,
		Vy = w,
		Hy = S,
		Gy = Sm.parseClassType,
		Wy = "4.1.0",
		Xy = {
			zrender: "4.0.4"
		},
		Yy = 1,
		jy = 1e3,
		Uy = 5e3,
		qy = 1e3,
		Zy = 2e3,
		Ky = 3e3,
		$y = 4e3,
		Qy = 5e3,
		Jy = {
			PROCESSOR: {
				FILTER: jy,
				STATISTIC: Uy
			},
			VISUAL: {
				LAYOUT: qy,
				GLOBAL: Zy,
				CHART: Ky,
				COMPONENT: $y,
				BRUSH: Qy
			}
		},
		tx = "__flagInMainProcess",
		ex = "__optionUpdated",
		nx = /^[a-zA-Z0-9_]+$/;
	qs.prototype.on = Us("on"), qs.prototype.off = Us("off"), qs.prototype.one = Us("one"), c(qs, Of);
	var ix = Zs.prototype;
	ix._onframe = function() {
		if(!this._disposed) {
			var t = this._scheduler;
			if(this[ex]) {
				var e = this[ex].silent;
				this[tx] = !0, $s(this), rx.update.call(this), this[tx] = !1, this[ex] = !1, el.call(this, e), nl.call(this, e)
			} else if(t.unfinished) {
				var n = Yy,
					i = this._model,
					r = this._api;
				t.unfinished = !1;
				do {
					var a = +new Date;
					t.performSeriesTasks(i), t.performDataProcessorTasks(i), Js(this, i), t.performVisualTasks(i), ll(this, this._model, r, "remain"), n -= +new Date - a
				} while (n > 0 && t.unfinished);
				t.unfinished || this._zr.flush()
			}
		}
	}, ix.getDom = function() {
		return this._dom
	}, ix.getZr = function() {
		return this._zr
	}, ix.setOption = function(t, e, n) {
		var i;
		if(Hy(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[tx] = !0, !this._model || e) {
			var r = new Vo(this._api),
				a = this._theme,
				o = this._model = new Fm(null, null, a, r);
			o.scheduler = this._scheduler, o.init(null, null, a, r)
		}
		this._model.setOption(t, hx), n ? (this[ex] = {
			silent: i
		}, this[tx] = !1) : ($s(this), rx.update.call(this), this._zr.flush(), this[ex] = !1, this[tx] = !1, el.call(this, i), nl.call(this, i))
	}, ix.setTheme = function() {
		console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
	}, ix.getModel = function() {
		return this._model
	}, ix.getOption = function() {
		return this._model && this._model.getOption()
	}, ix.getWidth = function() {
		return this._zr.getWidth()
	}, ix.getHeight = function() {
		return this._zr.getHeight()
	}, ix.getDevicePixelRatio = function() {
		return this._zr.painter.dpr || window.devicePixelRatio || 1
	}, ix.getRenderedCanvas = function(t) {
		if(cf.canvasSupported) {
			t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
			var e = this._zr;
			return e.painter.getRenderedCanvas(t)
		}
	}, ix.getSvgDataUrl = function() {
		if(cf.svgSupported) {
			var t = this._zr,
				e = t.storage.getDisplayList();
			return f(e, function(t) {
				t.stopAnimation(!0)
			}), t.painter.pathToDataUrl()
		}
	}, ix.getDataURL = function(t) {
		t = t || {};
		var e = t.excludeComponents,
			n = this._model,
			i = [],
			r = this;
		Fy(e, function(t) {
			n.eachComponent({
				mainType: t
			}, function(t) {
				var e = r._componentsMap[t.__viewId];
				e.group.ignore || (i.push(e), e.group.ignore = !0)
			})
		});
		var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
		return Fy(i, function(t) {
			t.group.ignore = !1
		}), a
	}, ix.getConnectedDataURL = function(t) {
		if(cf.canvasSupported) {
			var e = this.group,
				n = Math.min,
				r = Math.max,
				a = 1 / 0;
			if(gx[e]) {
				var o = a,
					s = a,
					l = -a,
					h = -a,
					u = [],
					c = t && t.pixelRatio || 1;
				f(px, function(a) {
					if(a.group === e) {
						var c = a.getRenderedCanvas(i(t)),
							d = a.getDom().getBoundingClientRect();
						o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
							dom: c,
							left: d.left,
							top: d.top
						})
					}
				}), o *= c, s *= c, l *= c, h *= c;
				var d = l - o,
					p = h - s,
					g = bf();
				g.width = d, g.height = p;
				var v = Ti(g);
				return Fy(u, function(t) {
					var e = new ai({
						style: {
							x: t.left * c - o,
							y: t.top * c - s,
							image: t.dom
						}
					});
					v.add(e)
				}), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
			}
			return this.getDataURL(t)
		}
	}, ix.convertToPixel = x(Ks, "convertToPixel"), ix.convertFromPixel = x(Ks, "convertFromPixel"), ix.containPixel = function(t, e) {
		var n, i = this._model;
		return t = Hi(i, t), f(t, function(t, i) {
			i.indexOf("Models") >= 0 && f(t, function(t) {
				var r = t.coordinateSystem;
				if(r && r.containPoint) n |= !!r.containPoint(e);
				else if("seriesModels" === i) {
					var a = this._chartsMap[t.__viewId];
					a && a.containPoint && (n |= a.containPoint(e, t))
				}
			}, this)
		}, this), !!n
	}, ix.getVisual = function(t, e) {
		var n = this._model;
		t = Hi(n, t, {
			defaultMainType: "series"
		});
		var i = t.seriesModel,
			r = i.getData(),
			a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
		return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
	}, ix.getViewOfComponentModel = function(t) {
		return this._componentsMap[t.__viewId]
	}, ix.getViewOfSeriesModel = function(t) {
		return this._chartsMap[t.__viewId]
	};
	var rx = {
		prepareAndUpdate: function(t) {
			$s(this), rx.update.call(this, t)
		},
		update: function(t) {
			var e = this._model,
				n = this._api,
				i = this._zr,
				r = this._coordSysMgr,
				a = this._scheduler;
			if(e) {
				a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Js(this, e), r.update(e, n), al(e), a.performVisualTasks(e, t), ol(this, e, n, t);
				var o = e.get("backgroundColor") || "transparent";
				if(cf.canvasSupported) i.setBackgroundColor(o);
				else {
					var s = Be(o);
					o = We(s, "rgb"), 0 === s[3] && (o = "transparent")
				}
				hl(e, n)
			}
		},
		updateTransform: function(t) {
			var e = this._model,
				n = this,
				i = this._api;
			if(e) {
				var r = [];
				e.eachComponent(function(a, o) {
					var s = n.getViewOfComponentModel(o);
					if(s && s.__alive)
						if(s.updateTransform) {
							var l = s.updateTransform(o, e, i, t);
							l && l.update && r.push(s)
						} else r.push(s)
				});
				var a = z();
				e.eachSeries(function(r) {
					var o = n._chartsMap[r.__viewId];
					if(o.updateTransform) {
						var s = o.updateTransform(r, e, i, t);
						s && s.update && a.set(r.uid, 1)
					} else a.set(r.uid, 1)
				}), al(e), this._scheduler.performVisualTasks(e, t, {
					setDirty: !0,
					dirtyMap: a
				}), ll(n, e, i, t, a), hl(e, this._api)
			}
		},
		updateView: function(t) {
			var e = this._model;
			e && (Is.markUpdateMethod(t, "updateView"), al(e), this._scheduler.performVisualTasks(e, t, {
				setDirty: !0
			}), ol(this, this._model, this._api, t), hl(e, this._api))
		},
		updateVisual: function(t) {
			rx.update.call(this, t)
		},
		updateLayout: function(t) {
			rx.update.call(this, t)
		}
	};
	ix.resize = function(t) {
		this._zr.resize(t);
		var e = this._model;
		if(this._loadingFX && this._loadingFX.resize(), e) {
			var n = e.resetOption("media"),
				i = t && t.silent;
			this[tx] = !0, n && $s(this), rx.update.call(this), this[tx] = !1, el.call(this, i), nl.call(this, i)
		}
	}, ix.showLoading = function(t, e) {
		if(Hy(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), fx[t]) {
			var n = fx[t](this._api, e),
				i = this._zr;
			this._loadingFX = n, i.add(n)
		}
	}, ix.hideLoading = function() {
		this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
	}, ix.makeActionFromEvent = function(t) {
		var e = o({}, t);
		return e.type = sx[t.type], e
	}, ix.dispatchAction = function(t, e) {
		if(Hy(e) || (e = {
				silent: !!e
			}), ox[t.type] && this._model) {
			if(this[tx]) return void this._pendingActions.push(t);
			tl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && cf.browser.weChat && this._throttledZrFlush(), el.call(this, e.silent), nl.call(this, e.silent)
		}
	}, ix.appendData = function(t) {
		var e = t.seriesIndex,
			n = this.getModel(),
			i = n.getSeriesByIndex(e);
		i.appendData(t), this._scheduler.unfinished = !0
	}, ix.on = Us("on"), ix.off = Us("off"), ix.one = Us("one");
	var ax = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
	ix._initEvents = function() {
		Fy(ax, function(t) {
			this._zr.on(t, function(e) {
				var n, i = this.getModel(),
					r = e.target;
				if("globalout" === t) n = {};
				else if(r && null != r.dataIndex) {
					var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
					n = a && a.getDataParams(r.dataIndex, r.dataType) || {}
				} else r && r.eventData && (n = o({}, r.eventData));
				n && (n.event = e, n.type = t, this.trigger(t, n))
			}, this)
		}, this), Fy(sx, function(t, e) {
			this._messageCenter.on(e, function(t) {
				this.trigger(e, t)
			}, this)
		}, this)
	}, ix.isDisposed = function() {
		return this._disposed
	}, ix.clear = function() {
		this.setOption({
			series: []
		}, !0)
	}, ix.dispose = function() {
		if(!this._disposed) {
			this._disposed = !0, Wi(this.getDom(), yx, "");
			var t = this._api,
				e = this._model;
			Fy(this._componentsViews, function(n) {
				n.dispose(e, t)
			}), Fy(this._chartsViews, function(n) {
				n.dispose(e, t)
			}), this._zr.dispose(), delete px[this.id]
		}
	}, c(Zs, Of);
	var ox = {},
		sx = {},
		lx = [],
		hx = [],
		ux = [],
		cx = [],
		dx = {},
		fx = {},
		px = {},
		gx = {},
		vx = new Date - 0,
		mx = new Date - 0,
		yx = "_echarts_instance_",
		xx = {},
		_x = ml;
	Al(Zy, wy), bl(Jm), Sl(Uy, ty), Pl("default", Iy), Il({
		type: "highlight",
		event: "highlight",
		update: "highlight"
	}, V), Il({
		type: "downplay",
		event: "downplay",
		update: "downplay"
	}, V), wl("light", Oy), wl("dark", Ry);
	var bx = {};
	Vl.prototype = {
		constructor: Vl,
		add: function(t) {
			return this._add = t, this
		},
		update: function(t) {
			return this._update = t, this
		},
		remove: function(t) {
			return this._remove = t, this
		},
		execute: function() {
			var t, e = this._old,
				n = this._new,
				i = {},
				r = {},
				a = [],
				o = [];
			for(Hl(e, i, a, "_oldKeyGetter", this), Hl(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
				var s = a[t],
					l = r[s];
				if(null != l) {
					var h = l.length;
					h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
				} else this._remove && this._remove(t)
			}
			for(var t = 0; t < o.length; t++) {
				var s = o[t];
				if(r.hasOwnProperty(s)) {
					var l = r[s];
					if(null == l) continue;
					if(l.length)
						for(var u = 0, h = l.length; h > u; u++) this._add && this._add(l[u]);
					else this._add && this._add(l)
				}
			}
		}
	};
	var Sx = z(["tooltip", "label", "itemName", "itemId", "seriesName"]),
		Mx = S,
		Ix = "undefined",
		Tx = "e\x00\x00",
		Cx = {
			"float": typeof Float64Array === Ix ? Array : Float64Array,
			"int": typeof Int32Array === Ix ? Array : Int32Array,
			ordinal: Array,
			number: Array,
			time: Array
		},
		Dx = typeof Uint32Array === Ix ? Array : Uint32Array,
		Ax = typeof Uint16Array === Ix ? Array : Uint16Array,
		kx = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
		Px = ["_extent", "_approximateExtent", "_rawExtent"],
		Lx = function(t, e) {
			t = t || ["x", "y"];
			for(var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
				var o = t[a];
				b(o) && (o = {
					name: o
				});
				var s = o.name;
				o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
			}
			this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Gl(this), this._invertedIndicesMap = r, this._calculationInfo = {}
		},
		Ox = Lx.prototype;
	Ox.type = "list", Ox.hasItemOption = !0, Ox.getDimension = function(t) {
		return isNaN(t) || (t = this.dimensions[t] || t), t
	}, Ox.getDimensionInfo = function(t) {
		return this._dimensionInfos[this.getDimension(t)]
	}, Ox.getDimensionsOnCoord = function() {
		return this._dimensionsSummary.dataDimsOnCoord.slice()
	}, Ox.mapDimension = function(t, e) {
		var n = this._dimensionsSummary;
		if(null == e) return n.encodeFirstDimNotExtra[t];
		var i = n.encode[t];
		return e === !0 ? (i || []).slice() : i && i[e]
	}, Ox.initData = function(t, e, n) {
		var i = yo.isInstance(t) || d(t);
		i && (t = new rs(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = ry[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
	}, Ox.getProvider = function() {
		return this._rawData
	}, Ox.appendData = function(t) {
		var e = this._rawData,
			n = this.count();
		e.appendData(t);
		var i = e.count();
		e.persistent || (i += n), this._initDataFromProvider(n, i)
	}, Ox._initDataFromProvider = function(t, e) {
		if(!(t >= e)) {
			for(var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
				var v = o[g];
				c[v] || (c[v] = nh());
				var m = l[v];
				0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
				var y = Cx[m.type];
				a[v] || (a[v] = []);
				var x = a[v][p];
				if(x && x.length < i) {
					for(var _ = new y(Math.min(e - p * i, i)), w = 0; w < x.length; w++) _[w] = x[w];
					a[v][p] = _
				}
				for(var b = f * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));
				this._chunkCount = a[v].length
			}
			for(var S = new Array(s), M = t; e > M; M++) {
				S = r.getItem(M, S);
				for(var I = Math.floor(M / i), T = M % i, b = 0; s > b; b++) {
					var v = o[b],
						C = a[v][I],
						D = this._dimValueGetter(S, v, M, b);
					C[T] = D;
					var A = c[v];
					D < A[0] && (A[0] = D), D > A[1] && (A[1] = D)
				}
				if(!r.pure) {
					var k = h[M];
					if(S && null == k)
						if(null != S.name) h[M] = k = S.name;
						else if(null != n) {
						var P = o[n],
							L = a[P][I];
						if(L) {
							k = L[T];
							var O = l[P].ordinalMeta;
							O && O.categories.length && (k = O.categories[k])
						}
					}
					var B = null == S ? null : S.id;
					null == B && null != k && (d[k] = d[k] || 0, B = k, d[k] > 0 && (B += "__ec__" + d[k]), d[k]++), null != B && (u[M] = B)
				}
			}!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, ql(this)
		}
	}, Ox.count = function() {
		return this._count
	}, Ox.getIndices = function() {
		var t, e = this._indices;
		if(e) {
			var n = e.constructor,
				i = this._count;
			if(n === Array) {
				t = new n(i);
				for(var r = 0; i > r; r++) t[r] = e[r]
			} else t = new n(e.buffer, 0, i)
		} else
			for(var n = Yl(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
		return t
	}, Ox.get = function(t, e) {
		if(!(e >= 0 && e < this._count)) return 0 / 0;
		var n = this._storage;
		if(!n[t]) return 0 / 0;
		e = this.getRawIndex(e);
		var i = Math.floor(e / this._chunkSize),
			r = e % this._chunkSize,
			a = n[t][i],
			o = a[r];
		return o
	}, Ox.getByRawIndex = function(t, e) {
		if(!(e >= 0 && e < this._rawCount)) return 0 / 0;
		var n = this._storage[t];
		if(!n) return 0 / 0;
		var i = Math.floor(e / this._chunkSize),
			r = e % this._chunkSize,
			a = n[i];
		return a[r]
	}, Ox._getFast = function(t, e) {
		var n = Math.floor(e / this._chunkSize),
			i = e % this._chunkSize,
			r = this._storage[t][n];
		return r[i]
	}, Ox.getValues = function(t, e) {
		var n = [];
		_(t) || (e = t, t = this.dimensions);
		for(var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
		return n
	}, Ox.hasValue = function(t) {
		for(var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++)
			if("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
		return !0
	}, Ox.getDataExtent = function(t) {
		t = this.getDimension(t);
		var e = this._storage[t],
			n = nh();
		if(!e) return n;
		var i, r = this.count(),
			a = !this._indices;
		if(a) return this._rawExtent[t].slice();
		if(i = this._extent[t]) return i.slice();
		i = n;
		for(var o = i[0], s = i[1], l = 0; r > l; l++) {
			var h = this._getFast(t, this.getRawIndex(l));
			o > h && (o = h), h > s && (s = h)
		}
		return i = [o, s], this._extent[t] = i, i
	}, Ox.getApproximateExtent = function(t) {
		return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
	}, Ox.setApproximateExtent = function(t, e) {
		e = this.getDimension(e), this._approximateExtent[e] = t.slice()
	}, Ox.getCalculationInfo = function(t) {
		return this._calculationInfo[t]
	}, Ox.setCalculationInfo = function(t, e) {
		Mx(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
	}, Ox.getSum = function(t) {
		var e = this._storage[t],
			n = 0;
		if(e)
			for(var i = 0, r = this.count(); r > i; i++) {
				var a = this.get(t, i);
				isNaN(a) || (n += a)
			}
		return n
	}, Ox.getMedian = function(t) {
		var e = [];
		this.each(t, function(t) {
			isNaN(t) || e.push(t)
		});
		var n = [].concat(e).sort(function(t, e) {
				return t - e
			}),
			i = this.count();
		return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
	}, Ox.rawIndexOf = function(t, e) {
		var n = t && this._invertedIndicesMap[t],
			i = n[e];
		return null == i || isNaN(i) ? -1 : i
	}, Ox.indexOfName = function(t) {
		for(var e = 0, n = this.count(); n > e; e++)
			if(this.getName(e) === t) return e;
		return -1
	}, Ox.indexOfRawIndex = function(t) {
		if(!this._indices) return t;
		if(t >= this._rawCount || 0 > t) return -1;
		var e = this._indices,
			n = e[t];
		if(null != n && n < this._count && n === t) return t;
		for(var i = 0, r = this._count - 1; r >= i;) {
			var a = (i + r) / 2 | 0;
			if(e[a] < t) i = a + 1;
			else {
				if(!(e[a] > t)) return a;
				r = a - 1
			}
		}
		return -1
	}, Ox.indicesOfNearest = function(t, e, n) {
		var i = this._storage,
			r = i[t],
			a = [];
		if(!r) return a;
		null == n && (n = 1 / 0);
		for(var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
			var u = e - this.get(t, l),
				c = Math.abs(u);
			n >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l))
		}
		return a
	}, Ox.getRawIndex = Kl, Ox.getRawDataItem = function(t) {
		if(this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
		for(var e = [], n = 0; n < this.dimensions.length; n++) {
			var i = this.dimensions[n];
			e.push(this.get(i, t))
		}
		return e
	}, Ox.getName = function(t) {
		var e = this.getRawIndex(t);
		return this._nameList[e] || Zl(this, this._nameDimIdx, e) || ""
	}, Ox.getId = function(t) {
		return Ql(this, this.getRawIndex(t))
	}, Ox.each = function(t, e, n, i) {
		if(this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Jl(t), this.getDimension, this);
			for(var r = t.length, a = 0; a < this.count(); a++) switch(r) {
				case 0:
					e.call(n, a);
					break;
				case 1:
					e.call(n, this.get(t[0], a), a);
					break;
				case 2:
					e.call(n, this.get(t[0], a), this.get(t[1], a), a);
					break;
				default:
					for(var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
					s[o] = a, e.apply(n, s)
			}
		}
	}, Ox.filterSelf = function(t, e, n, i) {
		if(this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Jl(t), this.getDimension, this);
			for(var r = this.count(), a = Yl(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
				var d, f = this.getRawIndex(c);
				if(0 === l) d = e.call(n, c);
				else if(1 === l) {
					var g = this._getFast(u, f);
					d = e.call(n, g, c)
				} else {
					for(var v = 0; l > v; v++) s[v] = this._getFast(u, f);
					s[v] = c, d = e.apply(n, s)
				}
				d && (o[h++] = f)
			}
			return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? $l : Kl, this
		}
	}, Ox.selectRange = function(t) {
		if(this._count) {
			var e = [];
			for(var n in t) t.hasOwnProperty(n) && e.push(n);
			var i = e.length;
			if(i) {
				var r = this.count(),
					a = Yl(this),
					o = new a(r),
					s = 0,
					l = e[0],
					h = t[l][0],
					u = t[l][1],
					c = !1;
				if(!this._indices) {
					var d = 0;
					if(1 === i) {
						for(var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
							for(var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
								var y = g[m];
								(y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++
							}
						c = !0
					} else if(2 === i) {
						for(var f = this._storage[l], x = this._storage[e[1]], _ = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
							for(var g = f[p], b = x[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
								var y = g[m],
									S = b[m];
								(y >= h && u >= y || isNaN(y)) && (S >= _ && w >= S || isNaN(S)) && (o[s++] = d), d++
							}
						c = !0
					}
				}
				if(!c)
					if(1 === i)
						for(var m = 0; r > m; m++) {
							var M = this.getRawIndex(m),
								y = this._getFast(l, M);
							(y >= h && u >= y || isNaN(y)) && (o[s++] = M)
						} else
							for(var m = 0; r > m; m++) {
								for(var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
									var T = e[p],
										y = this._getFast(n, M);
									(y < t[T][0] || y > t[T][1]) && (I = !1)
								}
								I && (o[s++] = this.getRawIndex(m))
							}
				return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? $l : Kl, this
			}
		}
	}, Ox.mapArray = function(t, e, n, i) {
		"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
		var r = [];
		return this.each(t, function() {
			r.push(e && e.apply(this, arguments))
		}, n), r
	}, Ox.map = function(t, e, n, i) {
		n = n || i || this, t = p(Jl(t), this.getDimension, this);
		var r = th(this, t);
		r._indices = this._indices, r.getRawIndex = r._indices ? $l : Kl;
		for(var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
			for(var f = 0; l > f; f++) u[f] = this.get(t[f], d);
			u[l] = d;
			var g = e && e.apply(n, u);
			if(null != g) {
				"object" != typeof g && (o[0] = g, g = o);
				for(var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, x = 0; x < g.length; x++) {
					var _ = t[x],
						w = g[x],
						b = c[_],
						S = a[_];
					S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
				}
			}
		}
		return r
	}, Ox.downSample = function(t, e, n, i) {
		for(var r = th(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new(Yl(this))(h), f = 0, p = 0; h > p; p += s) {
			s > h - p && (s = h - p, o.length = s);
			for(var g = 0; s > g; g++) {
				var v = this.getRawIndex(p + g),
					m = Math.floor(v / u),
					y = v % u;
				o[g] = l[m][y]
			}
			var x = n(o),
				_ = this.getRawIndex(Math.min(p + i(o, x) || 0, h - 1)),
				w = Math.floor(_ / u),
				b = _ % u;
			l[w][b] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
		}
		return r._count = f, r._indices = d, r.getRawIndex = $l, r
	}, Ox.getItemModel = function(t) {
		var e = this.hostModel;
		return new ka(this.getRawDataItem(t), e, e && e.ecModel)
	}, Ox.diff = function(t) {
		var e = this;
		return new Vl(t ? t.getIndices() : [], this.getIndices(), function(e) {
			return Ql(t, e)
		}, function(t) {
			return Ql(e, t)
		})
	}, Ox.getVisual = function(t) {
		var e = this._visual;
		return e && e[t]
	}, Ox.setVisual = function(t, e) {
		if(Mx(t))
			for(var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
		else this._visual = this._visual || {}, this._visual[t] = e
	}, Ox.setLayout = function(t, e) {
		if(Mx(t))
			for(var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
		else this._layout[t] = e
	}, Ox.getLayout = function(t) {
		return this._layout[t]
	}, Ox.getItemLayout = function(t) {
		return this._itemLayouts[t]
	}, Ox.setItemLayout = function(t, e, n) {
		this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
	}, Ox.clearItemLayouts = function() {
		this._itemLayouts.length = 0
	}, Ox.getItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t],
			r = i && i[e];
		return null != r || n ? r : this.getVisual(e)
	}, Ox.setItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t] || {},
			r = this.hasItemVisual;
		if(this._itemVisuals[t] = i, Mx(e))
			for(var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
		else i[e] = n, r[e] = !0
	}, Ox.clearAllVisual = function() {
		this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
	};
	var Bx = function(t) {
		t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
	};
	Ox.setItemGraphicEl = function(t, e) {
		var n = this.hostModel;
		e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(Bx, e)), this._graphicEls[t] = e
	}, Ox.getItemGraphicEl = function(t) {
		return this._graphicEls[t]
	}, Ox.eachItemGraphicEl = function(t, e) {
		f(this._graphicEls, function(n, i) {
			n && t && t.call(e, n, i)
		})
	}, Ox.cloneShallow = function(t) {
		if(!t) {
			var e = p(this.dimensions, this.getDimensionInfo, this);
			t = new Lx(e, this.hostModel)
		}
		if(t._storage = this._storage, Ul(t, this), this._indices) {
			var n = this._indices.constructor;
			t._indices = new n(this._indices)
		} else t._indices = null;
		return t.getRawIndex = t._indices ? $l : Kl, t
	}, Ox.wrapMethod = function(t, e) {
		var n = this[t];
		"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
			var t = n.apply(this, arguments);
			return e.apply(this, [t].concat(P(arguments)))
		})
	}, Ox.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Ox.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
	var Ex = function(t, e) {
		return e = e || {}, ih(e.coordDimensions || [], t, {
			dimsDef: e.dimensionsDefine || t.dimensionsDefine,
			encodeDef: e.encodeDefine || t.encodeDefine,
			dimCount: e.dimensionsCount,
			generateCoord: e.generateCoord,
			generateCoordCount: e.generateCoordCount
		})
	};
	dh.prototype.parse = function(t) {
		return t
	}, dh.prototype.getSetting = function(t) {
		return this._setting[t]
	}, dh.prototype.contain = function(t) {
		var e = this._extent;
		return t >= e[0] && t <= e[1]
	}, dh.prototype.normalize = function(t) {
		var e = this._extent;
		return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
	}, dh.prototype.scale = function(t) {
		var e = this._extent;
		return t * (e[1] - e[0]) + e[0]
	}, dh.prototype.unionExtent = function(t) {
		var e = this._extent;
		t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
	}, dh.prototype.unionExtentFromData = function(t, e) {
		this.unionExtent(t.getApproximateExtent(e))
	}, dh.prototype.getExtent = function() {
		return this._extent.slice()
	}, dh.prototype.setExtent = function(t, e) {
		var n = this._extent;
		isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
	}, dh.prototype.isBlank = function() {
		return this._isBlank
	}, dh.prototype.setBlank = function(t) {
		this._isBlank = t
	}, dh.prototype.getLabel = null, Ui(dh), $i(dh, {
		registerWhenExtend: !0
	}), fh.createByAxisModel = function(t) {
		var e = t.option,
			n = e.data,
			i = n && p(n, gh);
		return new fh({
			categories: i,
			needCollect: !i,
			deduplication: e.dedplication !== !1
		})
	};
	var Nx = fh.prototype;
	Nx.getOrdinal = function(t) {
		return ph(this).get(t)
	}, Nx.parseAndCollect = function(t) {
		var e, n = this._needCollect;
		if("string" != typeof t && !n) return t;
		if(n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
		var i = ph(this);
		return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
	};
	var Rx = dh.prototype,
		zx = dh.extend({
			type: "ordinal",
			init: function(t, e) {
				(!t || _(t)) && (t = new fh({
					categories: t
				})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
			},
			parse: function(t) {
				return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
			},
			contain: function(t) {
				return t = this.parse(t), Rx.contain.call(this, t) && null != this._ordinalMeta.categories[t]
			},
			normalize: function(t) {
				return Rx.normalize.call(this, this.parse(t))
			},
			scale: function(t) {
				return Math.round(Rx.scale.call(this, t))
			},
			getTicks: function() {
				for(var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
				return t
			},
			getLabel: function(t) {
				return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
			},
			count: function() {
				return this._extent[1] - this._extent[0] + 1
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			getOrdinalMeta: function() {
				return this._ordinalMeta
			},
			niceTicks: V,
			niceExtent: V
		});
	zx.create = function() {
		return new zx
	};
	var Fx = Fa,
		Vx = Fa,
		Hx = dh.extend({
			type: "interval",
			_interval: 0,
			_intervalPrecision: 2,
			setExtent: function(t, e) {
				var n = this._extent;
				isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
			},
			unionExtent: function(t) {
				var e = this._extent;
				t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Hx.prototype.setExtent.call(this, e[0], e[1])
			},
			getInterval: function() {
				return this._interval
			},
			setInterval: function(t) {
				this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = mh(t)
			},
			getTicks: function() {
				return _h(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
			},
			getLabel: function(t, e) {
				if(null == t) return "";
				var n = e && e.precision;
				return null == n ? n = Ga(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Vx(t, n, !0), Ja(t)
			},
			niceTicks: function(t, e, n) {
				t = t || 5;
				var i = this._extent,
					r = i[1] - i[0];
				if(isFinite(r)) {
					0 > r && (r = -r, i.reverse());
					var a = vh(i, t, e, n);
					this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
				}
			},
			niceExtent: function(t) {
				var e = this._extent;
				if(e[0] === e[1])
					if(0 !== e[0]) {
						var n = e[0];
						t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
					} else e[1] = 1;
				var i = e[1] - e[0];
				isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
				var r = this._interval;
				t.fixMin || (e[0] = Vx(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Vx(Math.ceil(e[1] / r) * r))
			}
		});
	Hx.create = function() {
		return new Hx
	};
	var Gx = "__ec_stack_",
		Wx = .5,
		Xx = "undefined" != typeof Float32Array ? Float32Array : Array,
		Yx = {
			seriesType: "bar",
			plan: fy(),
			reset: function(t) {
				function e(t, e) {
					for(var n, c = new Xx(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[h] = e.get(o, n), f[1 - h] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
					e.setLayout({
						largePoints: c,
						barWidth: u,
						valueAxisStart: kh(r, a, !1),
						valueAxisHorizontal: l
					})
				}
				if(Dh(t) && Ah(t)) {
					var n = t.getData(),
						i = t.coordinateSystem,
						r = i.getBaseAxis(),
						a = i.getOtherAxis(r),
						o = n.mapDimension(a.dim),
						s = n.mapDimension(r.dim),
						l = a.isHorizontal(),
						h = l ? 0 : 1,
						u = Th(Mh([t]), r, t).width;
					return u > Wx || (u = Wx), {
						progress: e
					}
				}
			}
		},
		jx = Hx.prototype,
		Ux = Math.ceil,
		qx = Math.floor,
		Zx = 1e3,
		Kx = 60 * Zx,
		$x = 60 * Kx,
		Qx = 24 * $x,
		Jx = function(t, e, n, i) {
			for(; i > n;) {
				var r = n + i >>> 1;
				t[r][1] < e ? n = r + 1 : i = r
			}
			return n
		},
		t_ = Hx.extend({
			type: "time",
			getLabel: function(t) {
				var e = this._stepLvl,
					n = new Date(t);
				return oo(e[0], n, this.getSetting("useUTC"))
			},
			niceExtent: function(t) {
				var e = this._extent;
				if(e[0] === e[1] && (e[0] -= Qx, e[1] += Qx), e[1] === -1 / 0 && 1 / 0 === e[0]) {
					var n = new Date;
					e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Qx
				}
				this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
				var i = this._interval;
				t.fixMin || (e[0] = Fa(qx(e[0] / i) * i)), t.fixMax || (e[1] = Fa(Ux(e[1] / i) * i))
			},
			niceTicks: function(t, e, n) {
				t = t || 10;
				var i = this._extent,
					r = i[1] - i[0],
					a = r / t;
				null != e && e > a && (a = e), null != n && a > n && (a = n);
				var o = e_.length,
					s = Jx(e_, a, 0, o),
					l = e_[Math.min(s, o - 1)],
					h = l[1];
				if("year" === l[0]) {
					var u = r / h,
						c = Ka(u / t, !0);
					h *= c
				}
				var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
					f = [Math.round(Ux((i[0] - d) / h) * h + d), Math.round(qx((i[1] - d) / h) * h + d)];
				xh(f, i), this._stepLvl = l, this._interval = h, this._niceExtent = f
			},
			parse: function(t) {
				return +Ua(t)
			}
		});
	f(["contain", "normalize"], function(t) {
		t_.prototype[t] = function(e) {
			return jx[t].call(this, this.parse(e))
		}
	});
	var e_ = [
		["hh:mm:ss", Zx],
		["hh:mm:ss", 5 * Zx],
		["hh:mm:ss", 10 * Zx],
		["hh:mm:ss", 15 * Zx],
		["hh:mm:ss", 30 * Zx],
		["hh:mm\nMM-dd", Kx],
		["hh:mm\nMM-dd", 5 * Kx],
		["hh:mm\nMM-dd", 10 * Kx],
		["hh:mm\nMM-dd", 15 * Kx],
		["hh:mm\nMM-dd", 30 * Kx],
		["hh:mm\nMM-dd", $x],
		["hh:mm\nMM-dd", 2 * $x],
		["hh:mm\nMM-dd", 6 * $x],
		["hh:mm\nMM-dd", 12 * $x],
		["MM-dd\nyyyy", Qx],
		["MM-dd\nyyyy", 2 * Qx],
		["MM-dd\nyyyy", 3 * Qx],
		["MM-dd\nyyyy", 4 * Qx],
		["MM-dd\nyyyy", 5 * Qx],
		["MM-dd\nyyyy", 6 * Qx],
		["week", 7 * Qx],
		["MM-dd\nyyyy", 10 * Qx],
		["week", 14 * Qx],
		["week", 21 * Qx],
		["month", 31 * Qx],
		["week", 42 * Qx],
		["month", 62 * Qx],
		["week", 42 * Qx],
		["quarter", 380 * Qx / 4],
		["month", 31 * Qx * 4],
		["month", 31 * Qx * 5],
		["half-year", 380 * Qx / 2],
		["month", 31 * Qx * 8],
		["month", 31 * Qx * 10],
		["year", 380 * Qx]
	];
	t_.create = function(t) {
		return new t_({
			useUTC: t.ecModel.get("useUTC")
		})
	};
	var n_ = dh.prototype,
		i_ = Hx.prototype,
		r_ = Ga,
		a_ = Fa,
		o_ = Math.floor,
		s_ = Math.ceil,
		l_ = Math.pow,
		h_ = Math.log,
		u_ = dh.extend({
			type: "log",
			base: 10,
			$constructor: function() {
				dh.apply(this, arguments), this._originalScale = new Hx
			},
			getTicks: function() {
				var t = this._originalScale,
					e = this._extent,
					n = t.getExtent();
				return p(i_.getTicks.call(this), function(i) {
					var r = Fa(l_(this.base, i));
					return r = i === e[0] && t.__fixMin ? Ph(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Ph(r, n[1]) : r
				}, this)
			},
			getLabel: i_.getLabel,
			scale: function(t) {
				return t = n_.scale.call(this, t), l_(this.base, t)
			},
			setExtent: function(t, e) {
				var n = this.base;
				t = h_(t) / h_(n), e = h_(e) / h_(n), i_.setExtent.call(this, t, e)
			},
			getExtent: function() {
				var t = this.base,
					e = n_.getExtent.call(this);
				e[0] = l_(t, e[0]), e[1] = l_(t, e[1]);
				var n = this._originalScale,
					i = n.getExtent();
				return n.__fixMin && (e[0] = Ph(e[0], i[0])), n.__fixMax && (e[1] = Ph(e[1], i[1])), e
			},
			unionExtent: function(t) {
				this._originalScale.unionExtent(t);
				var e = this.base;
				t[0] = h_(t[0]) / h_(e), t[1] = h_(t[1]) / h_(e), n_.unionExtent.call(this, t)
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			niceTicks: function(t) {
				t = t || 10;
				var e = this._extent,
					n = e[1] - e[0];
				if(!(1 / 0 === n || 0 >= n)) {
					var i = qa(n),
						r = t / n * i;
					for(.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
					var a = [Fa(s_(e[0] / i) * i), Fa(o_(e[1] / i) * i)];
					this._interval = i, this._niceExtent = a
				}
			},
			niceExtent: function(t) {
				i_.niceExtent.call(this, t);
				var e = this._originalScale;
				e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
			}
		});
	f(["contain", "normalize"], function(t) {
		u_.prototype[t] = function(e) {
			return e = h_(e) / h_(this.base), n_[t].call(this, e)
		}
	}), u_.create = function() {
		return new u_
	};
	var c_ = {
			getMin: function(t) {
				var e = this.option,
					n = t || null == e.rangeStart ? e.min : e.rangeStart;
				return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
			},
			getMax: function(t) {
				var e = this.option,
					n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
				return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
			},
			getNeedCrossZero: function() {
				var t = this.option;
				return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
			},
			getCoordSysModel: V,
			setRange: function(t, e) {
				this.option.rangeStart = t, this.option.rangeEnd = e
			},
			resetRange: function() {
				this.option.rangeStart = this.option.rangeEnd = null
			}
		},
		d_ = Gr({
			type: "triangle",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = e.width / 2,
					a = e.height / 2;
				t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
			}
		}),
		f_ = Gr({
			type: "diamond",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = e.width / 2,
					a = e.height / 2;
				t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
			}
		}),
		p_ = Gr({
			type: "pin",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.x,
					i = e.y,
					r = e.width / 5 * 3,
					a = Math.max(r, e.height),
					o = r / 2,
					s = o * o / (a - o),
					l = i - a + o + s,
					h = Math.asin(s / o),
					u = Math.cos(h) * o,
					c = Math.sin(h),
					d = Math.cos(h),
					f = .6 * o,
					p = .7 * o;
				t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath()
			}
		}),
		g_ = Gr({
			type: "arrow",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.height,
					i = e.width,
					r = e.x,
					a = e.y,
					o = i / 3 * 2;
				t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
			}
		}),
		v_ = {
			line: Rv,
			rect: Nv,
			roundRect: Nv,
			square: Nv,
			circle: Cv,
			diamond: f_,
			pin: p_,
			arrow: g_,
			triangle: d_
		},
		m_ = {
			line: function(t, e, n, i, r) {
				r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
			},
			rect: function(t, e, n, i, r) {
				r.x = t, r.y = e, r.width = n, r.height = i
			},
			roundRect: function(t, e, n, i, r) {
				r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
			},
			square: function(t, e, n, i, r) {
				var a = Math.min(n, i);
				r.x = t, r.y = e, r.width = a, r.height = a
			},
			circle: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
			},
			diamond: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
			},
			pin: function(t, e, n, i, r) {
				r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
			},
			arrow: function(t, e, n, i, r) {
				r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
			},
			triangle: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
			}
		},
		y_ = {};
	f(v_, function(t, e) {
		y_[e] = new t
	});
	var x_ = Gr({
			type: "symbol",
			shape: {
				symbolType: "",
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			beforeBrush: function() {
				var t = this.style,
					e = this.shape;
				"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
			},
			buildPath: function(t, e, n) {
				var i = e.symbolType,
					r = y_[i];
				"none" !== e.symbolType && (r || (i = "rect", r = y_[i]), m_[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
			}
		}),
		__ = {
			isDimensionStacked: sh,
			enableDataStack: oh,
			getStackedDimension: lh
		},
		w_ = (Object.freeze || Object)({
			createList: Wh,
			getLayoutRect: ho,
			dataStack: __,
			createScale: Xh,
			mixinAxisModelCommonMethods: Yh,
			completeDimensions: ih,
			createDimensions: Ex,
			createSymbol: Gh
		}),
		b_ = 1e-8;
	qh.prototype = {
		constructor: qh,
		properties: null,
		getBoundingRect: function() {
			var t = this._rect;
			if(t) return t;
			for(var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++)
				if("polygon" === o[s].type) {
					var l = o[s].exterior;
					dr(l, r, a), oe(n, n, r), se(i, i, a)
				}
			return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new rn(n[0], n[1], i[0] - n[0], i[1] - n[1])
		},
		contain: function(t) {
			var e = this.getBoundingRect(),
				n = this.geometries;
			if(!e.contain(t[0], t[1])) return !1;
			t: for(var i = 0, r = n.length; r > i; i++)
				if("polygon" === n[i].type) {
					var a = n[i].exterior,
						o = n[i].interiors;
					if(Uh(a, t[0], t[1])) {
						for(var s = 0; s < (o ? o.length : 0); s++)
							if(Uh(o[s])) continue t;
						return !0
					}
				}
			return !1
		},
		transformTo: function(t, e, n, i) {
			var r = this.getBoundingRect(),
				a = r.width / r.height;
			n ? i || (i = n / a) : n = a * i;
			for(var o = new rn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, h = 0; h < l.length; h++)
				if("polygon" === l[h].type) {
					for(var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) ae(u[d], u[d], s);
					for(var f = 0; f < (c ? c.length : 0); f++)
						for(var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
				}
			r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
		}
	};
	var S_ = function(t) {
			return Zh(t), p(v(t.features, function(t) {
				return t.geometry && t.properties && t.geometry.coordinates.length > 0
			}), function(t) {
				var e = t.properties,
					n = t.geometry,
					i = n.coordinates,
					r = [];
				"Polygon" === n.type && r.push({
					type: "polygon",
					exterior: i[0],
					interiors: i.slice(1)
				}), "MultiPolygon" === n.type && f(i, function(t) {
					t[0] && r.push({
						type: "polygon",
						exterior: t[0],
						interiors: t.slice(1)
					})
				});
				var a = new qh(e.name, r, e.cp);
				return a.properties = e, a
			})
		},
		M_ = Vi(),
		I_ = [0, 1],
		T_ = function(t, e, n) {
			this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
		};
	T_.prototype = {
		constructor: T_,
		contain: function(t) {
			var e = this._extent,
				n = Math.min(e[0], e[1]),
				i = Math.max(e[0], e[1]);
			return t >= n && i >= t
		},
		containData: function(t) {
			return this.contain(this.dataToCoord(t))
		},
		getExtent: function() {
			return this._extent.slice()
		},
		getPixelPrecision: function(t) {
			return Wa(t || this.scale.getExtent(), this._extent)
		},
		setExtent: function(t, e) {
			var n = this._extent;
			n[0] = t, n[1] = e
		},
		dataToCoord: function(t, e) {
			var n = this._extent,
				i = this.scale;
			return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), du(n, i.count())), Ra(t, I_, n, e)
		},
		coordToData: function(t, e) {
			var n = this._extent,
				i = this.scale;
			this.onBand && "ordinal" === i.type && (n = n.slice(), du(n, i.count()));
			var r = Ra(t, n, I_, e);
			return this.scale.scale(r)
		},
		pointToData: function() {},
		getTicksCoords: function(t) {
			t = t || {};
			var e = t.tickModel || this.getTickModel(),
				n = Qh(this, e),
				i = n.ticks,
				r = p(i, function(t) {
					return {
						coord: this.dataToCoord(t),
						tickValue: t
					}
				}, this),
				a = e.get("alignWithLabel");
			return fu(this, r, n.tickCategoryInterval, a, t.clamp), r
		},
		getViewLabels: function() {
			return $h(this).labels
		},
		getLabelModel: function() {
			return this.model.getModel("axisLabel")
		},
		getTickModel: function() {
			return this.model.getModel("axisTick")
		},
		getBandWidth: function() {
			var t = this._extent,
				e = this.scale.getExtent(),
				n = e[1] - e[0] + (this.onBand ? 1 : 0);
			0 === n && (n = 1);
			var i = Math.abs(t[1] - t[0]);
			return Math.abs(i) / n
		},
		isHorizontal: null,
		getRotate: null,
		calculateCategoryInterval: function() {
			return su(this)
		}
	};
	var C_ = S_,
		D_ = {};
	f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function(t) {
		D_[t] = If[t]
	});
	var A_ = function(t) {
		this._axes = {}, this._dimList = [], this.name = t || ""
	};
	A_.prototype = {
		constructor: A_,
		type: "cartesian",
		getAxis: function(t) {
			return this._axes[t]
		},
		getAxes: function() {
			return p(this._dimList, pu, this)
		},
		getAxesByScale: function(t) {
			return t = t.toLowerCase(), v(this.getAxes(), function(e) {
				return e.scale.type === t
			})
		},
		addAxis: function(t) {
			var e = t.dim;
			this._axes[e] = t, this._dimList.push(e)
		},
		dataToCoord: function(t) {
			return this._dataCoordConvert(t, "dataToCoord")
		},
		coordToData: function(t) {
			return this._dataCoordConvert(t, "coordToData")
		},
		_dataCoordConvert: function(t, e) {
			for(var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
				var a = n[r],
					o = this._axes[a];
				i[a] = o[e](t[a])
			}
			return i
		}
	}, gu.prototype = {
		constructor: gu,
		type: "cartesian2d",
		dimensions: ["x", "y"],
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
		},
		containPoint: function(t) {
			var e = this.getAxis("x"),
				n = this.getAxis("y");
			return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
		},
		containData: function(t) {
			return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
		},
		dataToPoint: function(t, e, n) {
			var i = this.getAxis("x"),
				r = this.getAxis("y");
			return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
		},
		clampData: function(t, e) {
			var n = this.getAxis("x").scale,
				i = this.getAxis("y").scale,
				r = n.getExtent(),
				a = i.getExtent(),
				o = n.parse(t[0]),
				s = i.parse(t[1]);
			return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
		},
		pointToData: function(t, e) {
			var n = this.getAxis("x"),
				i = this.getAxis("y");
			return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
		},
		getOtherAxis: function(t) {
			return this.getAxis("x" === t.dim ? "y" : "x")
		}
	}, u(gu, A_);
	var k_ = function(t, e, n, i, r) {
		T_.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
	};
	k_.prototype = {
		constructor: k_,
		index: 0,
		getAxesOnZeroOf: null,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		getGlobalExtent: function(t) {
			var e = this.getExtent();
			return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
		},
		getOtherAxis: function() {
			this.grid.getOtherAxis()
		},
		pointToData: function(t, e) {
			return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
		},
		toLocalCoord: null,
		toGlobalCoord: null
	}, u(k_, T_);
	var P_ = {
			show: !0,
			zlevel: 0,
			z: 0,
			inverse: !1,
			name: "",
			nameLocation: "end",
			nameRotate: null,
			nameTruncate: {
				maxWidth: null,
				ellipsis: "...",
				placeholder: "."
			},
			nameTextStyle: {},
			nameGap: 15,
			silent: !1,
			triggerEvent: !1,
			tooltip: {
				show: !1
			},
			axisPointer: {},
			axisLine: {
				show: !0,
				onZero: !0,
				onZeroAxisIndex: null,
				lineStyle: {
					color: "#333",
					width: 1,
					type: "solid"
				},
				symbol: ["none", "none"],
				symbolSize: [10, 15]
			},
			axisTick: {
				show: !0,
				inside: !1,
				length: 5,
				lineStyle: {
					width: 1
				}
			},
			axisLabel: {
				show: !0,
				inside: !1,
				rotate: 0,
				showMinLabel: null,
				showMaxLabel: null,
				margin: 8,
				fontSize: 12
			},
			splitLine: {
				show: !0,
				lineStyle: {
					color: ["#ccc"],
					width: 1,
					type: "solid"
				}
			},
			splitArea: {
				show: !1,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			}
		},
		L_ = {};
	L_.categoryAxis = r({
		boundaryGap: !0,
		deduplication: null,
		splitLine: {
			show: !1
		},
		axisTick: {
			alignWithLabel: !1,
			interval: "auto"
		},
		axisLabel: {
			interval: "auto"
		}
	}, P_), L_.valueAxis = r({
		boundaryGap: [0, 0],
		splitNumber: 5
	}, P_), L_.timeAxis = s({
		scale: !0,
		min: "dataMin",
		max: "dataMax"
	}, L_.valueAxis), L_.logAxis = s({
		scale: !0,
		logBase: 10
	}, L_.valueAxis);
	var O_ = ["value", "category", "time", "log"],
		B_ = function(t, e, n, i) {
			f(O_, function(o) {
				e.extend({
					type: t + "Axis." + o,
					mergeDefaultAndTheme: function(e, i) {
						var a = this.layoutMode,
							s = a ? co(e) : {},
							l = i.getTheme();
						r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && uo(e, s, a)
					},
					optionUpdated: function() {
						var t = this.option;
						"category" === t.type && (this.__ordinalMeta = fh.createByAxisModel(this))
					},
					getCategories: function(t) {
						var e = this.option;
						return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
					},
					getOrdinalMeta: function() {
						return this.__ordinalMeta
					},
					defaultOption: a([{}, L_[o + "Axis"], i], !0)
				})
			}), Sm.registerSubTypeDefaulter(t + "Axis", x(n, t))
		},
		E_ = Sm.extend({
			type: "cartesian2dAxis",
			axis: null,
			init: function() {
				E_.superApply(this, "init", arguments), this.resetRange()
			},
			mergeOption: function() {
				E_.superApply(this, "mergeOption", arguments), this.resetRange()
			},
			restoreData: function() {
				E_.superApply(this, "restoreData", arguments), this.resetRange()
			},
			getCoordSysModel: function() {
				return this.ecModel.queryComponents({
					mainType: "grid",
					index: this.option.gridIndex,
					id: this.option.gridId
				})[0]
			}
		});
	r(E_.prototype, c_);
	var N_ = {
		offset: 0
	};
	B_("x", E_, vu, N_), B_("y", E_, vu, N_), Sm.extend({
		type: "grid",
		dependencies: ["xAxis", "yAxis"],
		layoutMode: "box",
		coordinateSystem: null,
		defaultOption: {
			show: !1,
			zlevel: 0,
			z: 0,
			left: "10%",
			top: 60,
			right: "10%",
			bottom: 60,
			containLabel: !1,
			backgroundColor: "rgba(0,0,0,0)",
			borderWidth: 1,
			borderColor: "#ccc"
		}
	});
	var R_ = yu.prototype;
	R_.type = "grid", R_.axisPointerEnabled = !0, R_.getRect = function() {
		return this._rect
	}, R_.update = function(t, e) {
		var n = this._axesMap;
		this._updateScale(t, this.model), f(n.x, function(t) {
			Bh(t.scale, t.model)
		}), f(n.y, function(t) {
			Bh(t.scale, t.model)
		}), f(n.x, function(t) {
			xu(n, "y", t)
		}), f(n.y, function(t) {
			xu(n, "x", t)
		}), this.resize(this.model, e)
	}, R_.resize = function(t, e, n) {
		function i() {
			f(a, function(t) {
				var e = t.isHorizontal(),
					n = e ? [0, r.width] : [0, r.height],
					i = t.inverse ? 1 : 0;
				t.setExtent(n[i], n[1 - i]), wu(t, e ? r.x : r.y)
			})
		}
		var r = ho(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		});
		this._rect = r;
		var a = this._axesList;
		i(), !n && t.get("containLabel") && (f(a, function(t) {
			if(!t.model.get("axisLabel.inside")) {
				var e = Fh(t);
				if(e) {
					var n = t.isHorizontal() ? "height" : "width",
						i = t.model.get("axisLabel.margin");
					r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
				}
			}
		}), i())
	}, R_.getAxis = function(t, e) {
		var n = this._axesMap[t];
		if(null != n) {
			if(null == e)
				for(var i in n)
					if(n.hasOwnProperty(i)) return n[i];
			return n[e]
		}
	}, R_.getAxes = function() {
		return this._axesList.slice()
	}, R_.getCartesian = function(t, e) {
		if(null != t && null != e) {
			var n = "x" + t + "y" + e;
			return this._coordsMap[n]
		}
		S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
		for(var i = 0, r = this._coordsList; i < r.length; i++)
			if(r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
	}, R_.getCartesians = function() {
		return this._coordsList.slice()
	}, R_.convertToPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
	}, R_.convertFromPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
	}, R_._findConvertTarget = function(t, e) {
		var n, i, r = e.seriesModel,
			a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
			o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
			s = e.gridModel,
			l = this._coordsList;
		if(r) n = r.coordinateSystem, h(l, n) < 0 && (n = null);
		else if(a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
		else if(a) i = this.getAxis("x", a.componentIndex);
		else if(o) i = this.getAxis("y", o.componentIndex);
		else if(s) {
			var u = s.coordinateSystem;
			u === this && (n = this._coordsList[0])
		}
		return {
			cartesian: n,
			axis: i
		}
	}, R_.containPoint = function(t) {
		var e = this._coordsList[0];
		return e ? e.containPoint(t) : void 0
	}, R_._initCartesian = function(t, e) {
		function n(n) {
			return function(o, s) {
				if(mu(o, t, e)) {
					var l = o.get("position");
					"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
					var h = new k_(n, Eh(o), [0, 0], o.get("type"), l),
						u = "category" === h.type;
					h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[n][s] = h, a[n]++
				}
			}
		}
		var i = {
				left: !1,
				right: !1,
				top: !1,
				bottom: !1
			},
			r = {
				x: {},
				y: {}
			},
			a = {
				x: 0,
				y: 0
			};
		return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function(e, n) {
			f(r.y, function(i, r) {
				var a = "x" + n + "y" + r,
					o = new gu(a);
				o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i)
			}, this)
		}, this)) : (this._axesMap = {}, void(this._axesList = []))
	}, R_._updateScale = function(t, e) {
		function n(t, e) {
			f(t.mapDimension(e.dim, !0), function(n) {
				e.scale.unionExtentFromData(t, lh(t, n))
			})
		}
		f(this._axesList, function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}), t.eachSeries(function(i) {
			if(Su(i)) {
				var r = bu(i, t),
					a = r[0],
					o = r[1];
				if(!mu(a, e, t) || !mu(o, e, t)) return;
				var s = this.getCartesian(a.componentIndex, o.componentIndex),
					l = i.getData(),
					h = s.getAxis("x"),
					u = s.getAxis("y");
				"list" === l.type && (n(l, h, i), n(l, u, i))
			}
		}, this)
	}, R_.getTooltipAxes = function(t) {
		var e = [],
			n = [];
		return f(this.getCartesians(), function(i) {
			var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
				a = i.getOtherAxis(r);
			h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a)
		}), {
			baseAxes: e,
			otherAxes: n
		}
	};
	var z_ = ["xAxis", "yAxis"];
	yu.create = function(t, e) {
		var n = [];
		return t.eachComponent("grid", function(i, r) {
			var a = new yu(i, t, e);
			a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
		}), t.eachSeries(function(e) {
			if(Su(e)) {
				var n = bu(e, t),
					i = n[0],
					r = n[1],
					a = i.getCoordSysModel(),
					o = a.coordinateSystem;
				e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
			}
		}), n
	}, yu.dimensions = yu.prototype.dimensions = gu.prototype.dimensions, Fo.register("cartesian2d", yu);
	var F_ = uy.extend({
		type: "series.__base_bar__",
		getInitialData: function() {
			return hh(this.getSource(), this)
		},
		getMarkerPosition: function(t) {
			var e = this.coordinateSystem;
			if(e) {
				var n = e.dataToPoint(e.clampData(t)),
					i = this.getData(),
					r = i.getLayout("offset"),
					a = i.getLayout("size"),
					o = e.getBaseAxis().isHorizontal() ? 0 : 1;
				return n[o] += r + a / 2, n
			}
			return [0 / 0, 0 / 0]
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			barMinHeight: 0,
			barMinAngle: 0,
			large: !1,
			largeThreshold: 400,
			progressive: 3e3,
			progressiveChunkMode: "mod",
			itemStyle: {},
			emphasis: {}
		}
	});
	F_.extend({
		type: "series.bar",
		dependencies: ["grid", "polar"],
		brushSelector: "rect",
		getProgressive: function() {
			return this.get("large") ? this.get("progressive") : !1
		},
		getProgressiveThreshold: function() {
			var t = this.get("progressiveThreshold"),
				e = this.get("largeThreshold");
			return e > t && (t = e), t
		}
	});
	var V_ = _g([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["stroke", "barBorderColor"],
			["lineWidth", "barBorderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		H_ = {
			getBarItemStyle: function(t) {
				var e = V_(this, t);
				if(this.getBorderLineDash) {
					var n = this.getBorderLineDash();
					n && (e.lineDash = n)
				}
				return e
			}
		},
		G_ = ["itemStyle", "barBorderWidth"];
	o(ka.prototype, H_), El({
		type: "bar",
		render: function(t, e, n) {
			this._updateDrawMode(t);
			var i = t.get("coordinateSystem");
			return("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
		},
		incrementalPrepareRender: function(t) {
			this._clear(), this._updateDrawMode(t)
		},
		incrementalRender: function(t, e) {
			this._incrementalRenderLarge(t, e)
		},
		_updateDrawMode: function(t) {
			var e = t.pipelineContext.large;
			(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
		},
		_renderNormal: function(t) {
			var e, n = this.group,
				i = t.getData(),
				r = this._data,
				a = t.coordinateSystem,
				o = a.getBaseAxis();
			"cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
			var s = t.isAnimationEnabled() ? t : null;
			i.diff(r).add(function(r) {
				if(i.hasValue(r)) {
					var o = i.getItemModel(r),
						l = X_[a.type](i, r, o),
						h = W_[a.type](i, r, o, l, e, s);
					i.setItemGraphicEl(r, h), n.add(h), Au(h, i, r, o, l, t, e, "polar" === a.type)
				}
			}).update(function(o, l) {
				var h = r.getItemGraphicEl(l);
				if(!i.hasValue(o)) return void n.remove(h);
				var u = i.getItemModel(o),
					c = X_[a.type](i, o, u);
				h ? wa(h, {
					shape: c
				}, s, o) : h = W_[a.type](i, o, u, c, e, s, !0), i.setItemGraphicEl(o, h), n.add(h), Au(h, i, o, u, c, t, e, "polar" === a.type)
			}).remove(function(t) {
				var e = r.getItemGraphicEl(t);
				"cartesian2d" === a.type ? e && Cu(t, s, e) : e && Du(t, s, e)
			}).execute(), this._data = i
		},
		_renderLarge: function(t) {
			this._clear(), Pu(t, this.group)
		},
		_incrementalRenderLarge: function(t, e) {
			Pu(e, this.group, !0)
		},
		dispose: V,
		remove: function(t) {
			this._clear(t)
		},
		_clear: function(t) {
			var e = this.group,
				n = this._data;
			t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
				"sector" === e.type ? Du(e.dataIndex, t, e) : Cu(e.dataIndex, t, e)
			}) : e.removeAll(), this._data = null
		}
	});
	var W_ = {
			cartesian2d: function(t, e, n, i, r, a, s) {
				var l = new Nv({
					shape: o({}, i)
				});
				if(a) {
					var h = l.shape,
						u = r ? "height" : "width",
						c = {};
					h[u] = 0, c[u] = i[u], $v[s ? "updateProps" : "initProps"](l, {
						shape: c
					}, a, e)
				}
				return l
			},
			polar: function(t, e, n, i, r, a, o) {
				var l = i.startAngle < i.endAngle,
					h = new kv({
						shape: s({
							clockwise: l
						}, i)
					});
				if(a) {
					var u = h.shape,
						c = r ? "r" : "endAngle",
						d = {};
					u[c] = r ? 0 : i.startAngle, d[c] = i[c], $v[o ? "updateProps" : "initProps"](h, {
						shape: d
					}, a, e)
				}
				return h
			}
		},
		X_ = {
			cartesian2d: function(t, e, n) {
				var i = t.getItemLayout(e),
					r = ku(n, i),
					a = i.width > 0 ? 1 : -1,
					o = i.height > 0 ? 1 : -1;
				return {
					x: i.x + a * r / 2,
					y: i.y + o * r / 2,
					width: i.width - a * r,
					height: i.height - o * r
				}
			},
			polar: function(t, e) {
				var n = t.getItemLayout(e);
				return {
					cx: n.cx,
					cy: n.cy,
					r0: n.r0,
					r: n.r,
					startAngle: n.startAngle,
					endAngle: n.endAngle
				}
			}
		},
		Y_ = Pr.extend({
			type: "largeBar",
			shape: {
				points: []
			},
			buildPath: function(t, e) {
				for(var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1])
			}
		}),
		j_ = Math.PI,
		U_ = function(t, e) {
			this.opt = e, this.axisModel = t, s(e, {
				labelOffset: 0,
				nameDirection: 1,
				tickDirection: 1,
				labelDirection: 1,
				silent: !0
			}), this.group = new pp;
			var n = new pp({
				position: e.position.slice(),
				rotation: e.rotation
			});
			n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
		};
	U_.prototype = {
		constructor: U_,
		hasBuilder: function(t) {
			return !!q_[t]
		},
		add: function(t) {
			q_[t].call(this)
		},
		getGroup: function() {
			return this.group
		}
	};
	var q_ = {
			axisLine: function() {
				var t = this.opt,
					e = this.axisModel;
				if(e.get("axisLine.show")) {
					var n = this.axisModel.axis.getExtent(),
						i = this._transform,
						r = [n[0], 0],
						a = [n[1], 0];
					i && (ae(r, r, i), ae(a, a, i));
					var s = o({
						lineCap: "round"
					}, e.getModel("axisLine.lineStyle").getLineStyle());
					this.group.add(new Rv(qr({
						anid: "line",
						shape: {
							x1: r[0],
							y1: r[1],
							x2: a[0],
							y2: a[1]
						},
						style: s,
						strokeContainThreshold: t.strokeContainThreshold || 5,
						silent: !0,
						z2: 1
					})));
					var l = e.get("axisLine.symbol"),
						h = e.get("axisLine.symbolSize"),
						u = e.get("axisLine.symbolOffset") || 0;
					if("number" == typeof u && (u = [u, u]), null != l) {
						"string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
						var c = h[0],
							d = h[1];
						f([{
							rotate: t.rotation + Math.PI / 2,
							offset: u[0],
							r: 0
						}, {
							rotate: t.rotation - Math.PI / 2,
							offset: u[1],
							r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
						}], function(e, n) {
							if("none" !== l[n] && null != l[n]) {
								var i = Gh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
									a = e.r + e.offset,
									o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
								i.attr({
									rotation: e.rotate,
									position: o,
									silent: !0
								}), this.group.add(i)
							}
						}, this)
					}
				}
			},
			axisTickLabel: function() {
				var t = this.axisModel,
					e = this.opt,
					n = Vu(this, t, e),
					i = Hu(this, t, e);
				Nu(t, i, n)
			},
			axisName: function() {
				var t = this.opt,
					e = this.axisModel,
					n = D(t.axisName, e.get("name"));
				if(n) {
					var i, r = e.get("nameLocation"),
						a = t.nameDirection,
						s = e.getModel("nameTextStyle"),
						l = e.get("nameGap") || 0,
						h = this.axisModel.axis.getExtent(),
						u = h[0] > h[1] ? -1 : 1,
						c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Fu(r) ? t.labelOffset + a * l : 0],
						d = e.get("nameRotate");
					null != d && (d = d * j_ / 180);
					var f;
					Fu(r) ? i = Z_(t.rotation, null != d ? d : t.rotation, a) : (i = Bu(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
					var p = s.getFont(),
						g = e.get("nameTruncate", !0) || {},
						v = g.ellipsis,
						m = D(t.nameTruncateMaxWidth, g.maxWidth, f),
						y = null != v && null != m ? pm(n, m, p, v, {
							minChar: 2,
							placeholder: g.placeholder
						}) : n,
						x = e.get("tooltip", !0),
						_ = e.mainType,
						w = {
							componentType: _,
							name: n,
							$vars: ["name"]
						};
					w[_ + "Index"] = e.componentIndex;
					var b = new Tv({
						anid: "name",
						__fullText: n,
						__truncatedText: y,
						position: c,
						rotation: i.rotation,
						silent: Eu(e),
						z2: 1,
						tooltip: x && x.show ? o({
							content: n,
							formatter: function() {
								return n
							},
							formatterParams: w
						}, x) : null
					});
					ca(b.style, s, {
						text: y,
						textFont: p,
						textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
						textAlign: i.textAlign,
						textVerticalAlign: i.textVerticalAlign
					}), e.get("triggerEvent") && (b.eventData = Ou(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
				}
			}
		},
		Z_ = U_.innerTextLayout = function(t, e, n) {
			var i, r, a = Ya(e - t);
			return ja(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : ja(a - j_) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && j_ > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
				rotation: a,
				textAlign: i,
				textVerticalAlign: r
			}
		},
		K_ = f,
		$_ = x,
		Q_ = Ol({
			type: "axis",
			_axisPointer: null,
			axisPointerClass: null,
			render: function(t, e, n, i) {
				this.axisPointerClass && qu(t), Q_.superApply(this, "render", arguments), Ju(this, t, e, n, i, !0)
			},
			updateAxisPointer: function(t, e, n, i) {
				Ju(this, t, e, n, i, !1)
			},
			remove: function(t, e) {
				var n = this._axisPointer;
				n && n.remove(e), Q_.superApply(this, "remove", arguments)
			},
			dispose: function(t, e) {
				tc(this, e), Q_.superApply(this, "dispose", arguments)
			}
		}),
		J_ = [];
	Q_.registerAxisPointerClass = function(t, e) {
		J_[t] = e
	}, Q_.getAxisPointerClass = function(t) {
		return t && J_[t]
	};
	var tw = ["axisLine", "axisTickLabel", "axisName"],
		ew = ["splitArea", "splitLine"],
		nw = Q_.extend({
			type: "cartesianAxis",
			axisPointerClass: "CartesianAxisPointer",
			render: function(t, e, n, i) {
				this.group.removeAll();
				var r = this._axisGroup;
				if(this._axisGroup = new pp, this.group.add(this._axisGroup), t.get("show")) {
					var a = t.getCoordSysModel(),
						o = ec(a, t),
						s = new U_(t, o);
					f(tw, s.add, s), this._axisGroup.add(s.getGroup()), f(ew, function(e) {
						t.get(e + ".show") && this["_" + e](t, a)
					}, this), Ta(r, this._axisGroup, t), nw.superCall(this, "render", t, e, n, i)
				}
			},
			remove: function() {
				this._splitAreaColors = null
			},
			_splitLine: function(t, e) {
				var n = t.axis;
				if(!n.scale.isBlank()) {
					var i = t.getModel("splitLine"),
						r = i.getModel("lineStyle"),
						a = r.get("color");
					a = _(a) ? a : [a];
					for(var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({
							tickModel: i
						}), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
						var g = n.toGlobalCoord(u[p].coord);
						l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
						var v = h++ % a.length,
							m = u[p].tickValue;
						this._axisGroup.add(new Rv(qr({
							anid: null != m ? "line_" + u[p].tickValue : null,
							shape: {
								x1: c[0],
								y1: c[1],
								x2: d[0],
								y2: d[1]
							},
							style: s({
								stroke: a[v]
							}, f),
							silent: !0
						})))
					}
				}
			},
			_splitArea: function(t, e) {
				var n = t.axis;
				if(!n.scale.isBlank()) {
					var i = t.getModel("splitArea"),
						r = i.getModel("areaStyle"),
						a = r.get("color"),
						o = e.coordinateSystem.getRect(),
						l = n.getTicksCoords({
							tickModel: i,
							clamp: !0
						});
					if(l.length) {
						var h = a.length,
							u = this._splitAreaColors,
							c = z(),
							d = 0;
						if(u)
							for(var f = 0; f < l.length; f++) {
								var p = u.get(l[f].tickValue);
								if(null != p) {
									d = (p + (h - 1) * f) % h;
									break
								}
							}
						var g = n.toGlobalCoord(l[0].coord),
							v = r.getAreaStyle();
						a = _(a) ? a : [a];
						for(var f = 1; f < l.length; f++) {
							var m, y, x, w, b = n.toGlobalCoord(l[f].coord);
							n.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);
							var S = l[f - 1].tickValue;
							null != S && c.set(S, d), this._axisGroup.add(new Nv({
								anid: null != S ? "area_" + S : null,
								shape: {
									x: m,
									y: y,
									width: x,
									height: w
								},
								style: s({
									fill: a[d]
								}, v),
								silent: !0
							})), d = (d + 1) % h
						}
						this._splitAreaColors = c
					}
				}
			}
		});
	nw.extend({
		type: "xAxis"
	}), nw.extend({
		type: "yAxis"
	}), Ol({
		type: "grid",
		render: function(t) {
			this.group.removeAll(), t.get("show") && this.group.add(new Nv({
				shape: t.coordinateSystem.getRect(),
				style: s({
					fill: t.get("backgroundColor")
				}, t.getItemStyle()),
				silent: !0,
				z2: -1
			}))
		}
	}), bl(function(t) {
		t.xAxis && t.yAxis && !t.grid && (t.grid = {})
	}), Dl(x(Ch, "bar")), Dl(Yx), Al({
		seriesType: "bar",
		reset: function(t) {
			t.getData().setVisual("legendSymbol", "roundRect")
		}
	}), uy.extend({
		type: "series.line",
		dependencies: ["grid", "polar"],
		getInitialData: function() {
			return hh(this.getSource(), this)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			clipOverflow: !0,
			label: {
				position: "top"
			},
			lineStyle: {
				width: 2,
				type: "solid"
			},
			step: !1,
			smooth: !1,
			smoothMonotone: null,
			symbol: "emptyCircle",
			symbolSize: 4,
			symbolRotate: null,
			showSymbol: !0,
			showAllSymbol: "auto",
			connectNulls: !1,
			sampling: "none",
			animationEasing: "linear",
			progressive: 0,
			hoverLayerThreshold: 1 / 0
		}
	});
	var iw = nc.prototype,
		rw = nc.getSymbolSize = function(t, e) {
			var n = t.getItemVisual(e, "symbolSize");
			return n instanceof Array ? n.slice() : [+n, +n]
		};
	iw._createSymbol = function(t, e, n, i, r) {
		this.removeAll();
		var a = e.getItemVisual(n, "color"),
			o = Gh(t, -1, -1, 2, 2, a, r);
		o.attr({
			z2: 100,
			culling: !0,
			scale: ic(i)
		}), o.drift = rc, this._symbolType = t, this.add(o)
	}, iw.stopSymbolAnimation = function(t) {
		this.childAt(0).stopAnimation(t)
	}, iw.getSymbolPath = function() {
		return this.childAt(0)
	}, iw.getScale = function() {
		return this.childAt(0).scale
	}, iw.highlight = function() {
		this.childAt(0).trigger("emphasis")
	}, iw.downplay = function() {
		this.childAt(0).trigger("normal")
	}, iw.setZ = function(t, e) {
		var n = this.childAt(0);
		n.zlevel = t, n.z = e
	}, iw.setDraggable = function(t) {
		var e = this.childAt(0);
		e.draggable = t, e.cursor = t ? "move" : "pointer"
	}, iw.updateData = function(t, e, n) {
		this.silent = !1;
		var i = t.getItemVisual(e, "symbol") || "circle",
			r = t.hostModel,
			a = rw(t, e),
			o = i !== this._symbolType;
		if(o) {
			var s = t.getItemVisual(e, "symbolKeepAspect");
			this._createSymbol(i, t, e, a, s)
		} else {
			var l = this.childAt(0);
			l.silent = !1, wa(l, {
				scale: ic(a)
			}, r, e)
		}
		if(this._updateCommon(t, e, a, n), o) {
			var l = this.childAt(0),
				h = n && n.fadeIn,
				u = {
					scale: l.scale.slice()
				};
			h && (u.style = {
				opacity: l.style.opacity
			}), l.scale = [0, 0], h && (l.style.opacity = 0), ba(l, u, r, e)
		}
		this._seriesModel = r
	};
	var aw = ["itemStyle"],
		ow = ["emphasis", "itemStyle"],
		sw = ["label"],
		lw = ["emphasis", "label"];
	iw._updateCommon = function(t, e, n, i) {
		function r(e) {
			return b ? t.getName(e) : Mu(t, e)
		}
		var a = this.childAt(0),
			s = t.hostModel,
			l = t.getItemVisual(e, "color");
		"image" !== a.type && a.useStyle({
			strokeNoScale: !0
		});
		var h = i && i.itemStyle,
			u = i && i.hoverItemStyle,
			c = i && i.symbolRotate,
			d = i && i.symbolOffset,
			f = i && i.labelModel,
			p = i && i.hoverLabelModel,
			g = i && i.hoverAnimation,
			v = i && i.cursorStyle;
		if(!i || t.hasItemOption) {
			var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
			h = m.getModel(aw).getItemStyle(["color"]), u = m.getModel(ow).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(sw), p = m.getModel(lw), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor")
		} else u = o({}, u);
		var y = a.style;
		a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [za(d[0], n[0]), za(d[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(h);
		var x = t.getItemVisual(e, "opacity");
		null != x && (y.opacity = x);
		var _ = t.getItemVisual(e, "liftZ"),
			w = a.__z2Origin;
		null != _ ? null == w && (a.__z2Origin = a.z2, a.z2 += _) : null != w && (a.z2 = w, a.__z2Origin = null);
		var b = i && i.useNameLabel;
		ua(y, u, f, p, {
			labelFetcher: s,
			labelDataIndex: e,
			defaultText: r,
			isRectText: !0,
			autoColor: l
		}), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = u, ha(a);
		var S = ic(n);
		if(g && s.isAnimationEnabled()) {
			var M = function() {
					if(!this.incremental) {
						var t = S[1] / S[0];
						this.animateTo({
							scale: [Math.max(1.1 * S[0], S[0] + 3), Math.max(1.1 * S[1], S[1] + 3 * t)]
						}, 400, "elasticOut")
					}
				},
				I = function() {
					this.incremental || this.animateTo({
						scale: S
					}, 400, "elasticOut")
				};
			a.on("mouseover", M).on("mouseout", I).on("emphasis", M).on("normal", I)
		}
	}, iw.fadeOut = function(t, e) {
		var n = this.childAt(0);
		this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), wa(n, {
			style: {
				opacity: 0
			},
			scale: [0, 0]
		}, this._seriesModel, this.dataIndex, t)
	}, u(nc, pp);
	var hw = ac.prototype;
	hw.updateData = function(t, e) {
		e = sc(e);
		var n = this.group,
			i = t.hostModel,
			r = this._data,
			a = this._symbolCtor,
			o = lc(t);
		r || n.removeAll(), t.diff(r).add(function(i) {
			var r = t.getItemLayout(i);
			if(oc(t, r, i, e)) {
				var s = new a(t, i, o);
				s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
			}
		}).update(function(s, l) {
			var h = r.getItemGraphicEl(l),
				u = t.getItemLayout(s);
			return oc(t, u, s, e) ? (h ? (h.updateData(t, s, o), wa(h, {
				position: u
			}, i)) : (h = new a(t, s), h.attr("position", u)), n.add(h), void t.setItemGraphicEl(s, h)) : void n.remove(h)
		}).remove(function(t) {
			var e = r.getItemGraphicEl(t);
			e && e.fadeOut(function() {
				n.remove(e)
			})
		}).execute(), this._data = t
	}, hw.isPersistent = function() {
		return !0
	}, hw.updateLayout = function() {
		var t = this._data;
		t && t.eachItemGraphicEl(function(e, n) {
			var i = t.getItemLayout(n);
			e.attr("position", i)
		})
	}, hw.incrementalPrepareUpdate = function(t) {
		this._seriesScope = lc(t), this._data = null, this.group.removeAll()
	}, hw.incrementalUpdate = function(t, e, n) {
		function i(t) {
			t.isGroup || (t.incremental = t.useHoverLayer = !0)
		}
		n = sc(n);
		for(var r = t.start; r < t.end; r++) {
			var a = e.getItemLayout(r);
			if(oc(e, a, r, n)) {
				var o = new this._symbolCtor(e, r, this._seriesScope);
				o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
			}
		}
	}, hw.remove = function(t) {
		var e = this.group,
			n = this._data;
		n && t ? n.eachItemGraphicEl(function(t) {
			t.fadeOut(function() {
				e.remove(t)
			})
		}) : e.removeAll()
	};
	var uw = function(t, e, n, i, r, a, o, s) {
			for(var l = dc(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = hc(r, e, o), m = hc(a, t, s), y = 0; y < l.length; y++) {
				var x = l[y],
					_ = !0;
				switch(x.cmd) {
					case "=":
						var w = t.getItemLayout(x.idx),
							b = e.getItemLayout(x.idx1);
						(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
						break;
					case "+":
						var S = x.idx;
						h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(cc(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
						break;
					case "-":
						var S = x.idx,
							M = t.getRawIndex(S);
						M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(cc(m, a, t, S)), g.push(M)) : _ = !1
				}
				_ && (f.push(x), p.push(p.length))
			}
			p.sort(function(t, e) {
				return g[t] - g[e]
			});
			for(var I = [], T = [], C = [], D = [], A = [], y = 0; y < p.length; y++) {
				var S = p[y];
				I[y] = h[S], T[y] = u[S], C[y] = c[S], D[y] = d[S], A[y] = f[S]
			}
			return {
				current: I,
				next: T,
				stackedOnCurrent: C,
				stackedOnNext: D,
				status: A
			}
		},
		cw = oe,
		dw = se,
		fw = j,
		pw = G,
		gw = [],
		vw = [],
		mw = [],
		yw = Pr.extend({
			type: "ec-polyline",
			shape: {
				points: [],
				smooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			style: {
				fill: null,
				stroke: "#000"
			},
			brush: Av(Pr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = 0,
					r = n.length,
					a = mc(n, e.smoothConstraint);
				if(e.connectNulls) {
					for(; r > 0 && fc(n[r - 1]); r--);
					for(; r > i && fc(n[i]); i++);
				}
				for(; r > i;) i += pc(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
			}
		}),
		xw = Pr.extend({
			type: "ec-polygon",
			shape: {
				points: [],
				stackedOnPoints: [],
				smooth: 0,
				stackedOnSmooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			brush: Av(Pr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = e.stackedOnPoints,
					r = 0,
					a = n.length,
					o = e.smoothMonotone,
					s = mc(n, e.smoothConstraint),
					l = mc(i, e.smoothConstraint);
				if(e.connectNulls) {
					for(; a > 0 && fc(n[a - 1]); a--);
					for(; a > r && fc(n[r]); r++);
				}
				for(; a > r;) {
					var h = pc(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
					pc(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath()
				}
			}
		});
	Is.extend({
		type: "line",
		init: function() {
			var t = new pp,
				e = new ac;
			this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
		},
		render: function(t, e, n) {
			var i = t.coordinateSystem,
				r = this.group,
				a = t.getData(),
				o = t.getModel("lineStyle"),
				l = t.getModel("areaStyle"),
				h = a.mapArray(a.getItemLayout),
				u = "polar" === i.type,
				c = this._coordSys,
				d = this._symbolDraw,
				f = this._polyline,
				p = this._polygon,
				g = this._lineGroup,
				v = t.get("animation"),
				m = !l.isEmpty(),
				y = l.get("origin"),
				x = hc(i, a, y),
				_ = wc(i, a, x),
				w = t.get("showSymbol"),
				b = w && !u && Cc(t, a, i),
				S = this._data;
			S && S.eachItemGraphicEl(function(t, e) {
				t.__temp && (r.remove(t), S.setItemGraphicEl(e, null))
			}), w || d.remove(), r.add(g);
			var M = !u && t.get("step");
			f && c.type === i.type && M === this._step ? (m && !p ? p = this._newPolygon(h, _, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(Mc(i, !1, !1, t)), w && d.updateData(a, {
				isIgnore: b,
				clipShape: Mc(i, !1, !0, t)
			}), a.eachItemGraphicEl(function(t) {
				t.stopAnimation(!0)
			}), yc(this._stackedOnPoints, _) && yc(this._points, h) || (v ? this._updateAnimation(a, _, i, n, M, y) : (M && (h = Ic(h, i, M), _ = Ic(_, i, M)), f.setShape({
				points: h
			}), p && p.setShape({
				points: h,
				stackedOnPoints: _
			})))) : (w && d.updateData(a, {
				isIgnore: b,
				clipShape: Mc(i, !1, !0, t)
			}), M && (h = Ic(h, i, M), _ = Ic(_, i, M)), f = this._newPolyline(h, i, v), m && (p = this._newPolygon(h, _, i, v)), g.setClipPath(Mc(i, !0, !1, t)));
			var I = Tc(a, i) || a.getVisual("color");
			f.useStyle(s(o.getLineStyle(), {
				fill: "none",
				stroke: I,
				lineJoin: "bevel"
			}));
			var T = t.get("smooth");
			if(T = xc(t.get("smooth")), f.setShape({
					smooth: T,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				}), p) {
				var C = a.getCalculationInfo("stackedOnSeries"),
					D = 0;
				p.useStyle(s(l.getAreaStyle(), {
					fill: I,
					opacity: .7,
					lineJoin: "bevel"
				})), C && (D = xc(C.get("smooth"))), p.setShape({
					smooth: T,
					stackedOnSmooth: D,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				})
			}
			this._data = a, this._coordSys = i, this._stackedOnPoints = _, this._points = h, this._step = M, this._valueOrigin = y
		},
		dispose: function() {},
		highlight: function(t, e, n, i) {
			var r = t.getData(),
				a = Fi(r, i);
			if(!(a instanceof Array) && null != a && a >= 0) {
				var o = r.getItemGraphicEl(a);
				if(!o) {
					var s = r.getItemLayout(a);
					if(!s) return;
					o = new nc(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
				}
				o.highlight()
			} else Is.prototype.highlight.call(this, t, e, n, i)
		},
		downplay: function(t, e, n, i) {
			var r = t.getData(),
				a = Fi(r, i);
			if(null != a && a >= 0) {
				var o = r.getItemGraphicEl(a);
				o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
			} else Is.prototype.downplay.call(this, t, e, n, i)
		},
		_newPolyline: function(t) {
			var e = this._polyline;
			return e && this._lineGroup.remove(e), e = new yw({
				shape: {
					points: t
				},
				silent: !0,
				z2: 10
			}), this._lineGroup.add(e), this._polyline = e, e
		},
		_newPolygon: function(t, e) {
			var n = this._polygon;
			return n && this._lineGroup.remove(n), n = new xw({
				shape: {
					points: t,
					stackedOnPoints: e
				},
				silent: !0
			}), this._lineGroup.add(n), this._polygon = n, n
		},
		_updateAnimation: function(t, e, n, i, r, a) {
			var o = this._polyline,
				s = this._polygon,
				l = t.hostModel,
				h = uw(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
				u = h.current,
				c = h.stackedOnCurrent,
				d = h.next,
				f = h.stackedOnNext;
			r && (u = Ic(h.current, n, r), c = Ic(h.stackedOnCurrent, n, r), d = Ic(h.next, n, r), f = Ic(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, wa(o, {
				shape: {
					points: d
				}
			}, l), s && (s.setShape({
				points: u,
				stackedOnPoints: c
			}), wa(s, {
				shape: {
					points: d,
					stackedOnPoints: f
				}
			}, l));
			for(var p = [], g = h.status, v = 0; v < g.length; v++) {
				var m = g[v].cmd;
				if("=" === m) {
					var y = t.getItemGraphicEl(g[v].idx1);
					y && p.push({
						el: y,
						ptIdx: v
					})
				}
			}
			o.animators && o.animators.length && o.animators[0].during(function() {
				for(var t = 0; t < p.length; t++) {
					var e = p[t].el;
					e.attr("position", o.shape.__points[p[t].ptIdx])
				}
			})
		},
		remove: function() {
			var t = this.group,
				e = this._data;
			this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(n, i) {
				n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
			}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
		}
	});
	var _w = function(t, e, n) {
			return {
				seriesType: t,
				performRawSeries: !0,
				reset: function(t, i) {
					function r(e, n) {
						if("function" == typeof s) {
							var i = t.getRawValue(n),
								r = t.getDataParams(n);
							e.setItemVisual(n, "symbolSize", s(i, r))
						}
						if(e.hasItemOption) {
							var a = e.getItemModel(n),
								o = a.getShallow("symbol", !0),
								l = a.getShallow("symbolSize", !0),
								h = a.getShallow("symbolKeepAspect", !0);
							null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != h && e.setItemVisual(n, "symbolKeepAspect", h)
						}
					}
					var a = t.getData(),
						o = t.get("symbol") || e,
						s = t.get("symbolSize"),
						l = t.get("symbolKeepAspect");
					if(a.setVisual({
							legendSymbol: n || o,
							symbol: o,
							symbolSize: s,
							symbolKeepAspect: l
						}), !i.isSeriesFiltered(t)) {
						var h = "function" == typeof s;
						return {
							dataEach: a.hasItemOption || h ? r : null
						}
					}
				}
			}
		},
		ww = function(t) {
			return {
				seriesType: t,
				plan: fy(),
				reset: function(t) {
					function e(t, e) {
						for(var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
							var d;
							if(1 === s) {
								var f = e.get(o[0], l);
								d = !isNaN(f) && i.dataToPoint(f, null, c)
							} else {
								var f = u[0] = e.get(o[0], l),
									p = u[1] = e.get(o[1], l);
								d = !isNaN(f) && !isNaN(p) && i.dataToPoint(u, null, c)
							}
							a ? (r[h++] = d ? d[0] : 0 / 0, r[h++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
						}
						a && e.setLayout("symbolPoints", r)
					}
					var n = t.getData(),
						i = t.coordinateSystem,
						r = t.pipelineContext,
						a = r.large;
					if(i) {
						var o = p(i.dimensions, function(t) {
								return n.mapDimension(t)
							}).slice(0, 2),
							s = o.length,
							l = n.getCalculationInfo("stackResultDimension");
						return sh(n, o[0]) && (o[0] = l), sh(n, o[1]) && (o[1] = l), s && {
							progress: e
						}
					}
				}
			}
		},
		bw = {
			average: function(t) {
				for(var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
				return 0 === n ? 0 / 0 : e / n
			},
			sum: function(t) {
				for(var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
				return e
			},
			max: function(t) {
				for(var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			min: function(t) {
				for(var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			nearest: function(t) {
				return t[0]
			}
		},
		Sw = function(t) {
			return Math.round(t.length / 2)
		},
		Mw = function(t) {
			return {
				seriesType: t,
				modifyOutputEnd: !0,
				reset: function(t) {
					var e = t.getData(),
						n = t.get("sampling"),
						i = t.coordinateSystem;
					if("cartesian2d" === i.type && n) {
						var r = i.getBaseAxis(),
							a = i.getOtherAxis(r),
							o = r.getExtent(),
							s = o[1] - o[0],
							l = Math.round(e.count() / s);
						if(l > 1) {
							var h;
							"string" == typeof n ? h = bw[n] : "function" == typeof n && (h = n), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, Sw))
						}
					}
				}
			}
		};
	Al(_w("line", "circle", "line")), Dl(ww("line")), Sl(Jy.PROCESSOR.STATISTIC, Mw("line"));
	var Iw = function(t, e, n) {
			e = _(e) && {
				coordDimensions: e
			} || o({}, e);
			var i = t.getSource(),
				r = Ex(i, e),
				a = new Lx(r, t);
			return a.initData(i, n), a
		},
		Tw = {
			updateSelectedMap: function(t) {
				this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function(t, e) {
					return t.set(e.name, e), t
				}, z())
			},
			select: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
					i = this.get("selectedMode");
				"single" === i && this._selectTargetMap.each(function(t) {
					t.selected = !1
				}), n && (n.selected = !0)
			},
			unSelect: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				n && (n.selected = !1)
			},
			toggleSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0
			},
			isSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return n && n.selected
			}
		},
		Cw = Bl({
			type: "series.pie",
			init: function(t) {
				Cw.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this.getRawData()
				}, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
			},
			mergeOption: function(t) {
				Cw.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
			},
			getInitialData: function() {
				return Iw(this, ["value"])
			},
			_createSelectableList: function() {
				for(var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
					name: t.getName(i),
					value: t.get(e, i),
					selected: ds(t, i, "selected")
				});
				return n
			},
			getDataParams: function(t) {
				var e = this.getData(),
					n = Cw.superCall(this, "getDataParams", t),
					i = [];
				return e.each(e.mapDimension("value"), function(t) {
					i.push(t)
				}), n.percent = Xa(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
			},
			_defaultLabelLine: function(t) {
				Li(t, "labelLine", ["show"]);
				var e = t.labelLine,
					n = t.emphasis.labelLine;
				e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				center: ["50%", "50%"],
				radius: [0, "75%"],
				clockwise: !0,
				startAngle: 90,
				minAngle: 0,
				selectedOffset: 10,
				hoverOffset: 10,
				avoidLabelOverlap: !0,
				percentPrecision: 2,
				stillShowZeroSum: !0,
				label: {
					rotate: !1,
					show: !0,
					position: "outer"
				},
				labelLine: {
					show: !0,
					length: 15,
					length2: 15,
					smooth: !1,
					lineStyle: {
						width: 1,
						type: "solid"
					}
				},
				itemStyle: {
					borderWidth: 1
				},
				animationType: "expansion",
				animationEasing: "cubicOut"
			}
		});
	c(Cw, Tw);
	var Dw = Pc.prototype;
	Dw.updateData = function(t, e, n) {
		function i() {
			a.stopAnimation(!0), a.animateTo({
				shape: {
					r: u.r + l.get("hoverOffset")
				}
			}, 300, "elasticOut")
		}

		function r() {
			a.stopAnimation(!0), a.animateTo({
				shape: {
					r: u.r
				}
			}, 300, "elasticOut")
		}
		var a = this.childAt(0),
			l = t.hostModel,
			h = t.getItemModel(e),
			u = t.getItemLayout(e),
			c = o({}, u);
		if(c.label = null, n) {
			a.setShape(c);
			var d = l.getShallow("animationType");
			"scale" === d ? (a.shape.r = u.r0, ba(a, {
				shape: {
					r: u.r
				}
			}, l, e)) : (a.shape.endAngle = u.startAngle, wa(a, {
				shape: {
					endAngle: u.endAngle
				}
			}, l, e))
		} else wa(a, {
			shape: c
		}, l, e);
		var f = t.getItemVisual(e, "color");
		a.useStyle(s({
			lineJoin: "bevel",
			fill: f
		}, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
		var p = h.getShallow("cursor");
		p && a.attr("cursor", p), kc(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), ha(this)
	}, Dw._updateLabel = function(t, e) {
		var n = this.childAt(1),
			i = this.childAt(2),
			r = t.hostModel,
			a = t.getItemModel(e),
			o = t.getItemLayout(e),
			s = o.label,
			l = t.getItemVisual(e, "color");
		wa(n, {
			shape: {
				points: s.linePoints || [
					[s.x, s.y],
					[s.x, s.y],
					[s.x, s.y]
				]
			}
		}, r, e), wa(i, {
			style: {
				x: s.x,
				y: s.y
			}
		}, r, e), i.attr({
			rotation: s.rotation,
			origin: [s.x, s.y],
			z2: 10
		});
		var h = a.getModel("label"),
			u = a.getModel("emphasis.label"),
			c = a.getModel("labelLine"),
			d = a.getModel("emphasis.labelLine"),
			l = t.getItemVisual(e, "color");
		ua(i.style, i.hoverStyle = {}, h, u, {
			labelFetcher: t.hostModel,
			labelDataIndex: e,
			defaultText: t.getName(e),
			autoColor: l,
			useInsideStyle: !!s.inside
		}, {
			textAlign: s.textAlign,
			textVerticalAlign: s.verticalAlign,
			opacity: t.getItemVisual(e, "opacity")
		}), i.ignore = i.normalIgnore = !h.get("show"), i.hoverIgnore = !u.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
			stroke: l,
			opacity: t.getItemVisual(e, "opacity")
		}), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
		var f = c.get("smooth");
		f && f === !0 && (f = .4), n.setShape({
			smooth: f
		})
	}, u(Pc, pp);
	var Aw = (Is.extend({
			type: "pie",
			init: function() {
				var t = new pp;
				this._sectorGroup = t
			},
			render: function(t, e, n, i) {
				if(!i || i.from !== this.uid) {
					var r = t.getData(),
						a = this._data,
						o = this.group,
						s = e.get("animation"),
						l = !a,
						h = t.get("animationType"),
						u = x(Ac, this.uid, t, s, n),
						c = t.get("selectedMode");
					if(r.diff(a).add(function(t) {
							var e = new Pc(r, t);
							l && "scale" !== h && e.eachChild(function(t) {
								t.stopAnimation(!0)
							}), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e)
						}).update(function(t, e) {
							var n = a.getItemGraphicEl(e);
							n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n)
						}).remove(function(t) {
							var e = a.getItemGraphicEl(t);
							o.remove(e)
						}).execute(), s && l && r.count() > 0 && "scale" !== h) {
						var d = r.getItemLayout(0),
							f = Math.max(n.getWidth(), n.getHeight()) / 2,
							p = y(o.removeClipPath, o);
						o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
					}
					this._data = r
				}
			},
			dispose: function() {},
			_createClipPath: function(t, e, n, i, r, a, o) {
				var s = new kv({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: n,
						startAngle: i,
						endAngle: i,
						clockwise: r
					}
				});
				return ba(s, {
					shape: {
						endAngle: i + (r ? 1 : -1) * Math.PI * 2
					}
				}, o, a), s
			},
			containPoint: function(t, e) {
				var n = e.getData(),
					i = n.getItemLayout(0);
				if(i) {
					var r = t[0] - i.cx,
						a = t[1] - i.cy,
						o = Math.sqrt(r * r + a * a);
					return o <= i.r && o >= i.r0
				}
			}
		}), function(t, e) {
			f(e, function(e) {
				e.update = "updateView", Il(e, function(n, i) {
					var r = {};
					return i.eachComponent({
						mainType: "series",
						subType: t,
						query: n
					}, function(t) {
						t[e.method] && t[e.method](n.name, n.dataIndex);
						var i = t.getData();
						i.each(function(e) {
							var n = i.getName(e);
							r[n] = t.isSelected(n) || !1
						})
					}), {
						name: n.name,
						selected: r
					}
				})
			})
		}),
		kw = function(t) {
			return {
				getTargetSeries: function(e) {
					var n = {},
						i = z();
					return e.eachSeriesByType(t, function(t) {
						t.__paletteScope = n, i.set(t.uid, t)
					}), i
				},
				reset: function(t) {
					var e = t.getRawData(),
						n = {},
						i = t.getData();
					i.each(function(t) {
						var e = i.getRawIndex(t);
						n[e] = t
					}), e.each(function(r) {
						var a = n[r],
							o = null != a && i.getItemVisual(a, "color", !0);
						if(o) e.setItemVisual(r, "color", o);
						else {
							var s = e.getItemModel(r),
								l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
							e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l)
						}
					})
				}
			}
		},
		Pw = function(t, e, n, i) {
			var r, a, o = t.getData(),
				s = [],
				l = !1;
			o.each(function(n) {
				var i, h, u, c, d = o.getItemLayout(n),
					f = o.getItemModel(n),
					p = f.getModel("label"),
					g = p.get("position") || f.get("emphasis.label.position"),
					v = f.getModel("labelLine"),
					m = v.get("length"),
					y = v.get("length2"),
					x = (d.startAngle + d.endAngle) / 2,
					_ = Math.cos(x),
					w = Math.sin(x);
				r = d.cx, a = d.cy;
				var b = "inside" === g || "inner" === g;
				if("center" === g) i = d.cx, h = d.cy, c = "center";
				else {
					var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r,
						M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
					if(i = S + 3 * _, h = M + 3 * w, !b) {
						var I = S + _ * (m + e - d.r),
							T = M + w * (m + e - d.r),
							C = I + (0 > _ ? -1 : 1) * y,
							D = T;
						i = C + (0 > _ ? -5 : 5), h = D, u = [
							[S, M],
							[I, T],
							[C, D]
						]
					}
					c = b ? "center" : _ > 0 ? "left" : "right"
				}
				var A = p.getFont(),
					k = p.get("rotate") ? 0 > _ ? -x + Math.PI : -x : 0,
					P = t.getFormattedLabel(n, "normal") || o.getName(n),
					L = Sn(P, A, c, "top");
				l = !!k, d.label = {
					x: i,
					y: h,
					position: g,
					height: L.height,
					len: m,
					len2: y,
					linePoints: u,
					textAlign: c,
					verticalAlign: "middle",
					rotation: k,
					inside: b
				}, b || s.push(d.label)
			}), !l && t.get("avoidLabelOverlap") && Oc(s, r, a, e, n, i)
		},
		Lw = 2 * Math.PI,
		Ow = Math.PI / 180,
		Bw = function(t, e, n) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = e.mapDimension("value"),
					r = t.get("center"),
					a = t.get("radius");
				_(a) || (a = [0, a]), _(r) || (r = [r, r]);
				var o = n.getWidth(),
					s = n.getHeight(),
					l = Math.min(o, s),
					h = za(r[0], o),
					u = za(r[1], s),
					c = za(a[0], l / 2),
					d = za(a[1], l / 2),
					f = -t.get("startAngle") * Ow,
					p = t.get("minAngle") * Ow,
					g = 0;
				e.each(i, function(t) {
					!isNaN(t) && g++
				});
				var v = e.getSum(i),
					m = Math.PI / (v || g) * 2,
					y = t.get("clockwise"),
					x = t.get("roseType"),
					w = t.get("stillShowZeroSum"),
					b = e.getDataExtent(i);
				b[0] = 0;
				var S = Lw,
					M = 0,
					I = f,
					T = y ? 1 : -1;
				if(e.each(i, function(t, n) {
						var i;
						if(isNaN(t)) return void e.setItemLayout(n, {
							angle: 0 / 0,
							startAngle: 0 / 0,
							endAngle: 0 / 0,
							clockwise: y,
							cx: h,
							cy: u,
							r0: c,
							r: x ? 0 / 0 : d
						});
						i = "area" !== x ? 0 === v && w ? m : t * m : Lw / g, p > i ? (i = p, S -= p) : M += t;
						var r = I + T * i;
						e.setItemLayout(n, {
							angle: i,
							startAngle: I,
							endAngle: r,
							clockwise: y,
							cx: h,
							cy: u,
							r0: c,
							r: x ? Ra(t, b, [c, d]) : d
						}), I = r
					}), Lw > S && g)
					if(.001 >= S) {
						var C = Lw / g;
						e.each(i, function(t, n) {
							if(!isNaN(t)) {
								var i = e.getItemLayout(n);
								i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n + 1) * C
							}
						})
					} else m = S / M, I = f, e.each(i, function(t, n) {
						if(!isNaN(t)) {
							var i = e.getItemLayout(n),
								r = i.angle === p ? p : t * m;
							i.startAngle = I, i.endAngle = I + T * r, I += T * r
						}
					});
				Pw(t, d, o, s)
			})
		},
		Ew = function(t) {
			return {
				seriesType: t,
				reset: function(t, e) {
					var n = e.findComponents({
						mainType: "legend"
					});
					if(n && n.length) {
						var i = t.getData();
						i.filterSelf(function(t) {
							for(var e = i.getName(t), r = 0; r < n.length; r++)
								if(!n[r].isSelected(e)) return !1;
							return !0
						})
					}
				}
			}
		};
	Aw("pie", [{
		type: "pieToggleSelect",
		event: "pieselectchanged",
		method: "toggleSelected"
	}, {
		type: "pieSelect",
		event: "pieselected",
		method: "select"
	}, {
		type: "pieUnSelect",
		event: "pieunselected",
		method: "unSelect"
	}]), Al(kw("pie")), Dl(x(Bw, "pie")), Sl(Ew("pie"));
	var Nw = f,
		Rw = "\x00__link_datas",
		zw = "\x00__link_mainData",
		Fw = function(t, e) {
			this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e
		};
	Fw.prototype = {
		constructor: Fw,
		isRemoved: function() {
			return this.dataIndex < 0
		},
		eachNode: function(t, e, n) {
			"function" == typeof t && (n = e, e = t, t = null), t = t || {}, b(t) && (t = {
				order: t
			});
			var i, r = t.order || "preorder",
				a = this[t.attr || "children"];
			"preorder" === r && (i = e.call(n, this));
			for(var o = 0; !i && o < a.length; o++) a[o].eachNode(t, e, n);
			"postorder" === r && e.call(n, this)
		},
		updateDepthAndHeight: function(t) {
			var e = 0;
			this.depth = t;
			for(var n = 0; n < this.children.length; n++) {
				var i = this.children[n];
				i.updateDepthAndHeight(t + 1), i.height > e && (e = i.height)
			}
			this.height = e + 1
		},
		getNodeById: function(t) {
			if(this.getId() === t) return this;
			for(var e = 0, n = this.children, i = n.length; i > e; e++) {
				var r = n[e].getNodeById(t);
				if(r) return r
			}
		},
		contains: function(t) {
			if(t === this) return !0;
			for(var e = 0, n = this.children, i = n.length; i > e; e++) {
				var r = n[e].contains(t);
				if(r) return r
			}
		},
		getAncestors: function(t) {
			for(var e = [], n = t ? this : this.parentNode; n;) e.push(n), n = n.parentNode;
			return e.reverse(), e
		},
		getValue: function(t) {
			var e = this.hostTree.data;
			return e.get(e.getDimension(t || "value"), this.dataIndex)
		},
		setLayout: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
		},
		getLayout: function() {
			return this.hostTree.data.getItemLayout(this.dataIndex)
		},
		getModel: function(t) {
			if(!(this.dataIndex < 0)) {
				var e, n = this.hostTree,
					i = n.data.getItemModel(this.dataIndex),
					r = this.getLevelModel();
				return r || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !1) || (e = this.getLeavesModel()), i.getModel(t, (r || e || n.hostModel).getModel(t))
			}
		},
		getLevelModel: function() {
			return(this.hostTree.levelModels || [])[this.depth]
		},
		getLeavesModel: function() {
			return this.hostTree.leavesModel
		},
		setVisual: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
		},
		getVisual: function(t, e) {
			return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
		},
		getRawIndex: function() {
			return this.hostTree.data.getRawIndex(this.dataIndex)
		},
		getId: function() {
			return this.hostTree.data.getId(this.dataIndex)
		},
		isAncestorOf: function(t) {
			for(var e = t.parentNode; e;) {
				if(e === this) return !0;
				e = e.parentNode
			}
			return !1
		},
		isDescendantOf: function(t) {
			return t !== this && t.isAncestorOf(this)
		}
	}, Gc.prototype = {
		constructor: Gc,
		type: "tree",
		eachNode: function(t, e, n) {
			this.root.eachNode(t, e, n)
		},
		getNodeByDataIndex: function(t) {
			var e = this.data.getRawIndex(t);
			return this._nodes[e]
		},
		getNodeByName: function(t) {
			return this.root.getNodeByName(t)
		},
		update: function() {
			for(var t = this.data, e = this._nodes, n = 0, i = e.length; i > n; n++) e[n].dataIndex = -1;
			for(var n = 0, i = t.count(); i > n; n++) e[t.getRawIndex(n)].dataIndex = n
		},
		clearLayouts: function() {
			this.data.clearItemLayouts()
		}
	}, Gc.createTree = function(t, e, n) {
		function i(t, e) {
			var n = t.value;
			o = Math.max(o, _(n) ? n.length : 1), a.push(t);
			var s = new Fw(t.name, r);
			e ? Wc(s, e) : r.root = s, r._nodes.push(s);
			var l = t.children;
			if(l)
				for(var h = 0; h < l.length; h++) i(l[h], s)
		}
		var r = new Gc(e, n.levels, n.leaves),
			a = [],
			o = 1;
		i(t), r.root.updateDepthAndHeight(0);
		var s = Ex(a, {
				coordDimensions: ["value"],
				dimensionsCount: o
			}),
			l = new Lx(s, e);
		return l.initData(a), Bc({
			mainData: l,
			struct: r,
			structAttr: "tree"
		}), r.update(), r
	}, uy.extend({
		type: "series.tree",
		layoutInfo: null,
		layoutMode: "box",
		getInitialData: function(t) {
			var e = {
					name: t.name,
					children: t.data
				},
				n = t.leaves || {},
				i = {};
			i.leaves = n;
			var r = Gc.createTree(e, this, i),
				a = 0;
			r.eachNode("preorder", function(t) {
				t.depth > a && (a = t.depth)
			});
			var o = t.expandAndCollapse,
				s = o && t.initialTreeDepth >= 0 ? t.initialTreeDepth : a;
			return r.root.eachNode("preorder", function(t) {
				var e = t.hostTree.data.getRawDataItem(t.dataIndex);
				t.isExpand = e && null != e.collapsed ? !e.collapsed : t.depth <= s
			}), r.data
		},
		getOrient: function() {
			var t = this.get("orient");
			return "horizontal" === t ? t = "LR" : "vertical" === t && (t = "TB"), t
		},
		formatTooltip: function(t) {
			for(var e = this.getData().tree, n = e.root.children[0], i = e.getNodeByDataIndex(t), r = i.getValue(), a = i.name; i && i !== n;) a = i.parentNode.name + "." + a, i = i.parentNode;
			return eo(a + (isNaN(r) || null == r ? "" : " : " + r))
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			left: "12%",
			top: "12%",
			right: "12%",
			bottom: "12%",
			layout: "orthogonal",
			orient: "LR",
			symbol: "emptyCircle",
			symbolSize: 7,
			expandAndCollapse: !0,
			initialTreeDepth: 2,
			lineStyle: {
				color: "#ccc",
				width: 1.5,
				curveness: .5
			},
			itemStyle: {
				color: "lightsteelblue",
				borderColor: "#c23531",
				borderWidth: 1.5
			},
			label: {
				show: !0,
				color: "#555"
			},
			leaves: {
				label: {
					show: !0
				}
			},
			animationEasing: "linear",
			animationDuration: 700,
			animationDurationUpdate: 1e3
		}
	}), El({
		type: "tree",
		init: function() {
			this._oldTree, this._mainGroup = new pp, this.group.add(this._mainGroup)
		},
		render: function(t, e, n) {
			var i = t.getData(),
				r = t.layoutInfo,
				a = this._mainGroup,
				o = t.get("layout");
			"radial" === o ? a.attr("position", [r.x + r.width / 2, r.y + r.height / 2]) : a.attr("position", [r.x, r.y]);
			var s = this._data,
				l = {
					expandAndCollapse: t.get("expandAndCollapse"),
					layout: o,
					orient: t.getOrient(),
					curvature: t.get("lineStyle.curveness"),
					symbolRotate: t.get("symbolRotate"),
					symbolOffset: t.get("symbolOffset"),
					hoverAnimation: t.get("hoverAnimation"),
					useNameLabel: !0,
					fadeIn: !0
				};
			i.diff(s).add(function(e) {
				id(i, e) && ad(i, e, null, a, t, l)
			}).update(function(e, n) {
				var r = s.getItemGraphicEl(n);
				return id(i, e) ? void ad(i, e, r, a, t, l) : void(r && od(s, n, r, a, t, l))
			}).remove(function(e) {
				var n = s.getItemGraphicEl(e);
				n && od(s, e, n, a, t, l)
			}).execute(), l.expandAndCollapse === !0 && i.eachItemGraphicEl(function(e, i) {
				e.off("click").on("click", function() {
					n.dispatchAction({
						type: "treeExpandAndCollapse",
						seriesId: t.id,
						dataIndex: i
					})
				})
			}), this._data = i
		},
		dispose: function() {},
		remove: function() {
			this._mainGroup.removeAll(), this._data = null
		}
	}), Il({
		type: "treeExpandAndCollapse",
		event: "treeExpandAndCollapse",
		update: "update"
	}, function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "tree",
			query: t
		}, function(e) {
			var n = t.dataIndex,
				i = e.getData().tree,
				r = i.getNodeByDataIndex(n);
			r.isExpand = !r.isExpand
		})
	});
	var Vw = function(t, e) {
		t.eachSeriesByType("tree", function(t) {
			ud(t, e)
		})
	};
	Al(_w("tree", "circle")), Dl(Vw), Ll({
		type: "title",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		defaultOption: {
			zlevel: 0,
			z: 6,
			show: !0,
			text: "",
			target: "blank",
			subtext: "",
			subtarget: "blank",
			left: 0,
			top: 0,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			textStyle: {
				fontSize: 18,
				fontWeight: "bolder",
				color: "#333"
			},
			subtextStyle: {
				color: "#aaa"
			}
		}
	}), Ol({
		type: "title",
		render: function(t, e, n) {
			if(this.group.removeAll(), t.get("show")) {
				var i = this.group,
					r = t.getModel("textStyle"),
					a = t.getModel("subtextStyle"),
					o = t.get("textAlign"),
					s = t.get("textBaseline"),
					l = new Tv({
						style: ca({}, r, {
							text: t.get("text"),
							textFill: r.getTextColor()
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					h = l.getBoundingRect(),
					u = t.get("subtext"),
					c = new Tv({
						style: ca({}, a, {
							text: u,
							textFill: a.getTextColor(),
							y: h.height + t.get("itemGap"),
							textVerticalAlign: "top"
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					d = t.get("link"),
					f = t.get("sublink");
				l.silent = !d, c.silent = !f, d && l.on("click", function() {
					window.open(d, "_" + t.get("target"))
				}), f && c.on("click", function() {
					window.open(f, "_" + t.get("subtarget"))
				}), i.add(l), u && i.add(c);
				var p = i.getBoundingRect(),
					g = t.getBoxLayoutParams();
				g.width = p.width, g.height = p.height;
				var v = ho(g, {
					width: n.getWidth(),
					height: n.getHeight()
				}, t.get("padding"));
				o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? v.x += v.width : "center" === o && (v.x += v.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.attr("position", [v.x, v.y]);
				var m = {
					textAlign: o,
					textVerticalAlign: s
				};
				l.setStyle(m), c.setStyle(m), p = i.getBoundingRect();
				var y = v.margin,
					x = t.getItemStyle(["color", "opacity"]);
				x.fill = t.get("backgroundColor");
				var _ = new Nv({
					shape: {
						x: p.x - y[3],
						y: p.y - y[0],
						width: p.width + y[1] + y[3],
						height: p.height + y[0] + y[2],
						r: t.get("borderRadius")
					},
					style: x,
					silent: !0
				});
				Zr(_), i.add(_)
			}
		}
	});
	var Hw = Ll({
		type: "legend.plain",
		dependencies: ["series"],
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		init: function(t, e, n) {
			this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
		},
		mergeOption: function(t) {
			Hw.superCall(this, "mergeOption", t)
		},
		optionUpdated: function() {
			this._updateData(this.ecModel);
			var t = this._data;
			if(t[0] && "single" === this.get("selectedMode")) {
				for(var e = !1, n = 0; n < t.length; n++) {
					var i = t[n].get("name");
					if(this.isSelected(i)) {
						this.select(i), e = !0;
						break
					}
				}!e && this.select(t[0].get("name"))
			}
		},
		_updateData: function(t) {
			var e = [],
				n = [];
			t.eachRawSeries(function(i) {
				var r = i.name;
				n.push(r);
				var a;
				if(i.legendDataProvider) {
					var o = i.legendDataProvider(),
						s = o.mapArray(o.getName);
					t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0
				} else a = !0;
				a && Ri(i) && e.push(i.name)
			}), this._availableNames = n;
			var i = this.get("data") || e,
				r = p(i, function(t) {
					return("string" == typeof t || "number" == typeof t) && (t = {
						name: t
					}), new ka(t, this, this.ecModel)
				}, this);
			this._data = r
		},
		getData: function() {
			return this._data
		},
		select: function(t) {
			var e = this.option.selected,
				n = this.get("selectedMode");
			if("single" === n) {
				var i = this._data;
				f(i, function(t) {
					e[t.get("name")] = !1
				})
			}
			e[t] = !0
		},
		unSelect: function(t) {
			"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
		},
		toggleSelected: function(t) {
			var e = this.option.selected;
			e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
		},
		isSelected: function(t) {
			var e = this.option.selected;
			return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0
		},
		defaultOption: {
			zlevel: 0,
			z: 4,
			show: !0,
			orient: "horizontal",
			left: "center",
			top: 0,
			align: "auto",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 25,
			itemHeight: 14,
			inactiveColor: "#ccc",
			textStyle: {
				color: "#333"
			},
			selectedMode: !0,
			tooltip: {
				show: !1
			}
		}
	});
	Il("legendToggleSelect", "legendselectchanged", x(cd, "toggleSelected")), Il("legendSelect", "legendselected", x(cd, "select")), Il("legendUnSelect", "legendunselected", x(cd, "unSelect"));
	var Gw = x,
		Ww = f,
		Xw = pp,
		Yw = Ol({
			type: "legend.plain",
			newlineDisabled: !1,
			init: function() {
				this.group.add(this._contentGroup = new Xw), this._backgroundEl
			},
			getContentGroup: function() {
				return this._contentGroup
			},
			render: function(t, e, n) {
				if(this.resetInner(), t.get("show", !0)) {
					var i = t.get("align");
					i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
					var r = t.getBoxLayoutParams(),
						a = {
							width: n.getWidth(),
							height: n.getHeight()
						},
						o = t.get("padding"),
						l = ho(r, a, o),
						h = this.layoutInner(t, i, l),
						u = ho(s({
							width: h.width,
							height: h.height
						}, r), a, o);
					this.group.attr("position", [u.x - h.x, u.y - h.y]), this.group.add(this._backgroundEl = dd(h, t))
				}
			},
			resetInner: function() {
				this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
			},
			renderInner: function(t, e, n, i) {
				var r = this.getContentGroup(),
					a = z(),
					o = e.get("selectedMode"),
					s = [];
				n.eachRawSeries(function(t) {
					!t.get("legendHoverLink") && s.push(t.id)
				}), Ww(e.getData(), function(l, h) {
					var u = l.get("name");
					if(!this.newlineDisabled && ("" === u || "\n" === u)) return void r.add(new Xw({
						newline: !0
					}));
					var c = n.getSeriesByName(u)[0];
					if(!a.get(u))
						if(c) {
							var d = c.getData(),
								f = d.getVisual("color");
							"function" == typeof f && (f = f(c.getDataParams(0)));
							var p = d.getVisual("legendSymbol") || "roundRect",
								g = d.getVisual("symbol"),
								v = this._createItem(u, h, l, e, p, g, t, f, o);
							v.on("click", Gw(fd, u, i)).on("mouseover", Gw(pd, c, null, i, s)).on("mouseout", Gw(gd, c, null, i, s)), a.set(u, !0)
						} else n.eachRawSeries(function(n) {
							if(!a.get(u) && n.legendDataProvider) {
								var r = n.legendDataProvider(),
									c = r.indexOfName(u);
								if(0 > c) return;
								var d = r.getItemVisual(c, "color"),
									f = "roundRect",
									p = this._createItem(u, h, l, e, f, null, t, d, o);
								p.on("click", Gw(fd, u, i)).on("mouseover", Gw(pd, n, u, i, s)).on("mouseout", Gw(gd, n, u, i, s)), a.set(u, !0)
							}
						}, this)
				}, this)
			},
			_createItem: function(t, e, n, i, r, a, s, l, h) {
				var u = i.get("itemWidth"),
					c = i.get("itemHeight"),
					d = i.get("inactiveColor"),
					f = i.get("symbolKeepAspect"),
					p = i.isSelected(t),
					g = new Xw,
					v = n.getModel("textStyle"),
					m = n.get("icon"),
					y = n.getModel("tooltip"),
					x = y.parentModel;
				if(r = m || r, g.add(Gh(r, 0, 0, u, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" == a)) {
					var _ = .8 * c;
					"none" === a && (a = "circle"), g.add(Gh(a, (u - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f ? !0 : f))
				}
				var w = "left" === s ? u + 5 : -5,
					b = s,
					S = i.get("formatter"),
					M = t;
				"string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new Tv({
					style: ca({}, v, {
						text: M,
						x: w,
						y: c / 2,
						textFill: p ? v.getTextColor() : d,
						textAlign: b,
						textVerticalAlign: "middle"
					})
				}));
				var I = new Nv({
					shape: g.getBoundingRect(),
					invisible: !0,
					tooltip: y.get("show") ? o({
						content: t,
						formatter: x.get("formatter", !0) || function() {
							return t
						},
						formatterParams: {
							componentType: "legend",
							legendIndex: i.componentIndex,
							name: t,
							$vars: ["name"]
						}
					}, y.option) : null
				});
				return g.add(I), g.eachChild(function(t) {
					t.silent = !0
				}), I.silent = !h, this.getContentGroup().add(g), ha(g), g.__legendDataIndex = e, g
			},
			layoutInner: function(t, e, n) {
				var i = this.getContentGroup();
				_m(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
				var r = i.getBoundingRect();
				return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
			}
		}),
		jw = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.filterSeries(function(t) {
				for(var n = 0; n < e.length; n++)
					if(!e[n].isSelected(t.name)) return !1;
				return !0
			})
		};
	Sl(jw), Sm.registerSubTypeDefaulter("legend", function() {
		return "plain"
	});
	var Uw = Hw.extend({
			type: "legend.scroll",
			setScrollDataIndex: function(t) {
				this.option.scrollDataIndex = t
			},
			defaultOption: {
				scrollDataIndex: 0,
				pageButtonItemGap: 5,
				pageButtonGap: null,
				pageButtonPosition: "end",
				pageFormatter: "{current}/{total}",
				pageIcons: {
					horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
					vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
				},
				pageIconColor: "#2f4554",
				pageIconInactiveColor: "#aaa",
				pageIconSize: 15,
				pageTextStyle: {
					color: "#333"
				},
				animationDurationUpdate: 800
			},
			init: function(t, e, n, i) {
				var r = co(t);
				Uw.superCall(this, "init", t, e, n, i), vd(this, t, r)
			},
			mergeOption: function(t, e) {
				Uw.superCall(this, "mergeOption", t, e), vd(this, this.option, t)
			},
			getOrient: function() {
				return "vertical" === this.get("orient") ? {
					index: 1,
					name: "vertical"
				} : {
					index: 0,
					name: "horizontal"
				}
			}
		}),
		qw = pp,
		Zw = ["width", "height"],
		Kw = ["x", "y"],
		$w = Yw.extend({
			type: "legend.scroll",
			newlineDisabled: !0,
			init: function() {
				$w.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new qw), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new qw), this._showController
			},
			resetInner: function() {
				$w.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
			},
			renderInner: function(t, e, n, i) {
				function r(t, n) {
					var r = t + "DataIndex",
						l = Aa(e.get("pageIcons", !0)[e.getOrient().name][n], {
							onclick: y(a._pageGo, a, r, e, i)
						}, {
							x: -s[0] / 2,
							y: -s[1] / 2,
							width: s[0],
							height: s[1]
						});
					l.name = t, o.add(l)
				}
				var a = this;
				$w.superCall(this, "renderInner", t, e, n, i);
				var o = this._controllerGroup,
					s = e.get("pageIconSize", !0);
				_(s) || (s = [s, s]), r("pagePrev", 0);
				var l = e.getModel("pageTextStyle");
				o.add(new Tv({
					name: "pageText",
					style: {
						textFill: l.getTextColor(),
						font: l.getFont(),
						textVerticalAlign: "middle",
						textAlign: "center"
					},
					silent: !0
				})), r("pageNext", 1)
			},
			layoutInner: function(t, e, n) {
				var i = this.getContentGroup(),
					r = this._containerGroup,
					a = this._controllerGroup,
					o = t.getOrient().index,
					s = Zw[o],
					l = Zw[1 - o],
					h = Kw[1 - o];
				_m(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), _m("horizontal", a, t.get("pageButtonItemGap", !0));
				var u = i.getBoundingRect(),
					c = a.getBoundingRect(),
					d = this._showController = u[s] > n[s],
					f = [-u.x, -u.y];
				f[o] = i.position[o];
				var p = [0, 0],
					g = [-c.x, -c.y],
					v = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
				if(d) {
					var m = t.get("pageButtonPosition", !0);
					"end" === m ? g[o] += n[s] - c[s] : p[o] += c[s] + v
				}
				g[1 - o] += u[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr("position", g);
				var y = this.group.getBoundingRect(),
					y = {
						x: 0,
						y: 0
					};
				if(y[s] = d ? n[s] : u[s], y[l] = Math.max(u[l], c[l]), y[h] = Math.min(0, c[h] + g[1 - o]), r.__rectSize = n[s], d) {
					var x = {
						x: 0,
						y: 0
					};
					x[s] = Math.max(n[s] - c[s] - v, 0), x[l] = y[l], r.setClipPath(new Nv({
						shape: x
					})), r.__rectSize = x[s]
				} else a.eachChild(function(t) {
					t.attr({
						invisible: !0,
						silent: !0
					})
				});
				var _ = this._getPageInfo(t);
				return null != _.pageIndex && wa(i, {
					position: _.contentPosition
				}, d ? t : !1), this._updatePageInfoView(t, _), y
			},
			_pageGo: function(t, e, n) {
				var i = this._getPageInfo(e)[t];
				null != i && n.dispatchAction({
					type: "legendScroll",
					scrollDataIndex: i,
					legendId: e.id
				})
			},
			_updatePageInfoView: function(t, e) {
				var n = this._controllerGroup;
				f(["pagePrev", "pageNext"], function(i) {
					var r = null != e[i + "DataIndex"],
						a = n.childOfName(i);
					a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
				});
				var i = n.childOfName("pageText"),
					r = t.get("pageFormatter"),
					a = e.pageIndex,
					o = null != a ? a + 1 : 0,
					s = e.pageCount;
				i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
					current: o,
					total: s
				}))
			},
			_getPageInfo: function(t) {
				function e(t) {
					var e = t.getBoundingRect().clone();
					return e[f] += t.position[u], e
				}
				var n, i, r, a, o = t.get("scrollDataIndex", !0),
					s = this.getContentGroup(),
					l = s.getBoundingRect(),
					h = this._containerGroup.__rectSize,
					u = t.getOrient().index,
					c = Zw[u],
					d = Zw[1 - u],
					f = Kw[u],
					p = s.position.slice();
				this._showController ? s.eachChild(function(t) {
					t.__legendDataIndex === o && (a = t)
				}) : a = s.childAt(0);
				var g = h ? Math.ceil(l[c] / h) : 0;
				if(a) {
					var v = a.getBoundingRect(),
						m = a.position[u] + v[f];
					p[u] = -m - l[f], n = Math.floor(g * (m + v[f] + h / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
					var y = {
						x: 0,
						y: 0
					};
					y[c] = h, y[d] = l[d], y[f] = -p[u] - l[f];
					var x, _ = s.children();
					if(s.eachChild(function(t, n) {
							var i = e(t);
							i.intersect(y) && (null == x && (x = n), r = t.__legendDataIndex), n === _.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
						}), null != x) {
						var w = _[x],
							b = e(w);
						if(y[f] = b[f] + b[c] - y[c], 0 >= x && b[f] >= y[f]) i = null;
						else {
							for(; x > 0 && e(_[x - 1]).intersect(y);) x--;
							i = _[x].__legendDataIndex
						}
					}
				}
				return {
					contentPosition: p,
					pageIndex: n,
					pageCount: g,
					pagePrevDataIndex: i,
					pageNextDataIndex: r
				}
			}
		});
	Il("legendScroll", "legendscroll", function(t, e) {
		var n = t.scrollDataIndex;
		null != n && e.eachComponent({
			mainType: "legend",
			subType: "scroll",
			query: t
		}, function(t) {
			t.setScrollDataIndex(n)
		})
	});
	var Qw = function(t, e) {
			var n, i = [],
				r = t.seriesIndex;
			if(null == r || !(n = e.getSeriesByIndex(r))) return {
				point: []
			};
			var a = n.getData(),
				o = Fi(a, t);
			if(null == o || 0 > o || _(o)) return {
				point: []
			};
			var s = a.getItemGraphicEl(o),
				l = n.coordinateSystem;
			if(n.getTooltipPosition) i = n.getTooltipPosition(o) || [];
			else if(l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function(t) {
				return a.mapDimension(t)
			}), o, !0)) || [];
			else if(s) {
				var h = s.getBoundingRect().clone();
				h.applyTransform(s.transform), i = [h.x + h.width / 2, h.y + h.height / 2]
			}
			return {
				point: i,
				el: s
			}
		},
		Jw = f,
		tb = x,
		eb = Vi(),
		nb = function(t, e, n) {
			var i = t.currTrigger,
				r = [t.x, t.y],
				a = t,
				o = t.dispatchAction || y(n.dispatchAction, n),
				s = e.getComponent("axisPointer").coordSysAxesInfo;
			if(s) {
				Td(r) && (r = Qw({
					seriesIndex: a.seriesIndex,
					dataIndex: a.dataIndex
				}, e).point);
				var l = Td(r),
					h = a.axesInfo,
					u = s.axesInfo,
					c = "leave" === i || Td(r),
					d = {},
					f = {},
					p = {
						list: [],
						map: {}
					},
					g = {
						showPointer: tb(xd, f),
						showTooltip: tb(_d, p)
					};
				Jw(s.coordSysMap, function(t, e) {
					var n = l || t.containPoint(r);
					Jw(s.coordSysAxesInfo[e], function(t) {
						var e = t.axis,
							i = Md(h, t);
						if(!c && n && (!h || i)) {
							var a = i && i.value;
							null != a || l || (a = e.pointToData(r)), null != a && md(t, a, g, !1, d)
						}
					})
				});
				var v = {};
				return Jw(u, function(t, e) {
					var n = t.linkGroup;
					n && !f[e] && Jw(n.axesInfo, function(e, i) {
						var r = f[i];
						if(e !== t && r) {
							var a = r.value;
							n.mapper && (a = t.axis.scale.parse(n.mapper(a, Id(e), Id(t)))), v[t.key] = a
						}
					})
				}), Jw(v, function(t, e) {
					md(u[e], t, g, !0, d)
				}), wd(f, u, d), bd(p, r, t, o), Sd(u, o, n), d
			}
		},
		ib = (Ll({
			type: "axisPointer",
			coordSysAxesInfo: null,
			defaultOption: {
				show: "auto",
				triggerOn: null,
				zlevel: 0,
				z: 50,
				type: "line",
				snap: !1,
				triggerTooltip: !0,
				value: null,
				status: null,
				link: [],
				animation: null,
				animationDurationUpdate: 200,
				lineStyle: {
					color: "#aaa",
					width: 1,
					type: "solid"
				},
				shadowStyle: {
					color: "rgba(150,150,150,0.3)"
				},
				label: {
					show: !0,
					formatter: null,
					precision: "auto",
					margin: 3,
					color: "#fff",
					padding: [5, 7, 5, 7],
					backgroundColor: "auto",
					borderColor: null,
					borderWidth: 0,
					shadowBlur: 3,
					shadowColor: "#aaa"
				},
				handle: {
					show: !1,
					icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
					size: 45,
					margin: 50,
					color: "#333",
					shadowBlur: 3,
					shadowColor: "#aaa",
					shadowOffsetX: 0,
					shadowOffsetY: 2,
					throttle: 40
				}
			}
		}), Vi()),
		rb = f,
		ab = Ol({
			type: "axisPointer",
			render: function(t, e, n) {
				var i = e.getComponent("tooltip"),
					r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
				Cd("axisPointer", n, function(t, e, n) {
					"none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
						type: "updateAxisPointer",
						currTrigger: t,
						x: e && e.offsetX,
						y: e && e.offsetY
					})
				})
			},
			remove: function(t, e) {
				Od(e.getZr(), "axisPointer"), ab.superApply(this._model, "remove", arguments)
			},
			dispose: function(t, e) {
				Od("axisPointer", e), ab.superApply(this._model, "dispose", arguments)
			}
		}),
		ob = Vi(),
		sb = i,
		lb = y;
	Bd.prototype = {
		_group: null,
		_lastGraphicKey: null,
		_handle: null,
		_dragging: !1,
		_lastValue: null,
		_lastStatus: null,
		_payloadInfo: null,
		animationThreshold: 15,
		render: function(t, e, n, i) {
			var r = e.get("value"),
				a = e.get("status");
			if(this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
				this._lastValue = r, this._lastStatus = a;
				var o = this._group,
					s = this._handle;
				if(!a || "hide" === a) return o && o.hide(), void(s && s.hide());
				o && o.show(), s && s.show();
				var l = {};
				this.makeElOption(l, r, t, e, n);
				var h = l.graphicKey;
				h !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = h;
				var u = this._moveAnimation = this.determineAnimation(t, e);
				if(o) {
					var c = x(Ed, e, u);
					this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
				} else o = this._group = new pp, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);
				Fd(o, e, !0), this._renderHandle(r)
			}
		},
		remove: function(t) {
			this.clear(t)
		},
		dispose: function(t) {
			this.clear(t)
		},
		determineAnimation: function(t, e) {
			var n = e.get("animation"),
				i = t.axis,
				r = "category" === i.type,
				a = e.get("snap");
			if(!a && !r) return !1;
			if("auto" === n || null == n) {
				var o = this.animationThreshold;
				if(r && i.getBandWidth() > o) return !0;
				if(a) {
					var s = Zu(t).seriesDataCount,
						l = i.getExtent();
					return Math.abs(l[0] - l[1]) / s > o
				}
				return !1
			}
			return n === !0
		},
		makeElOption: function() {},
		createPointerEl: function(t, e) {
			var n = e.pointer;
			if(n) {
				var i = ob(t).pointerEl = new $v[n.type](sb(e.pointer));
				t.add(i)
			}
		},
		createLabelEl: function(t, e, n, i) {
			if(e.label) {
				var r = ob(t).labelEl = new Nv(sb(e.label));
				t.add(r), Rd(r, i)
			}
		},
		updatePointerEl: function(t, e, n) {
			var i = ob(t).pointerEl;
			i && (i.setStyle(e.pointer.style), n(i, {
				shape: e.pointer.shape
			}))
		},
		updateLabelEl: function(t, e, n, i) {
			var r = ob(t).labelEl;
			r && (r.setStyle(e.label.style), n(r, {
				shape: e.label.shape,
				position: e.label.position
			}), Rd(r, i))
		},
		_renderHandle: function(t) {
			if(!this._dragging && this.updateHandleTransform) {
				var e = this._axisPointerModel,
					n = this._api.getZr(),
					i = this._handle,
					r = e.getModel("handle"),
					a = e.get("status");
				if(!r.get("show") || !a || "hide" === a) return i && n.remove(i), void(this._handle = null);
				var o;
				this._handle || (o = !0, i = this._handle = Aa(r.get("icon"), {
					cursor: "move",
					draggable: !0,
					onmousemove: function(t) {
						qp(t.event)
					},
					onmousedown: lb(this._onHandleDragMove, this, 0, 0),
					drift: lb(this._onHandleDragMove, this),
					ondragend: lb(this._onHandleDragEnd, this)
				}), n.add(i)), Fd(i, e, !1);
				var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
				i.setStyle(r.getItemStyle(null, s));
				var l = r.get("size");
				_(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Ps(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
			}
		},
		_moveHandleToValue: function(t, e) {
			Ed(this._axisPointerModel, !e && this._moveAnimation, this._handle, zd(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
		},
		_onHandleDragMove: function(t, e) {
			var n = this._handle;
			if(n) {
				this._dragging = !0;
				var i = this.updateHandleTransform(zd(n), [t, e], this._axisModel, this._axisPointerModel);
				this._payloadInfo = i, n.stopAnimation(), n.attr(zd(i)), ob(n).lastProp = null, this._doDispatchAxisPointer()
			}
		},
		_doDispatchAxisPointer: function() {
			var t = this._handle;
			if(t) {
				var e = this._payloadInfo,
					n = this._axisModel;
				this._api.dispatchAction({
					type: "updateAxisPointer",
					x: e.cursorPoint[0],
					y: e.cursorPoint[1],
					tooltipOption: e.tooltipOption,
					axesInfo: [{
						axisDim: n.axis.dim,
						axisIndex: n.componentIndex
					}]
				})
			}
		},
		_onHandleDragEnd: function() {
			this._dragging = !1;
			var t = this._handle;
			if(t) {
				var e = this._axisPointerModel.get("value");
				this._moveHandleToValue(e), this._api.dispatchAction({
					type: "hideTip"
				})
			}
		},
		getHandleTransform: null,
		updateHandleTransform: null,
		clear: function(t) {
			this._lastValue = null, this._lastStatus = null;
			var e = t.getZr(),
				n = this._group,
				i = this._handle;
			e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
		},
		doClear: function() {},
		buildLabel: function(t, e, n) {
			return n = n || 0, {
				x: t[n],
				y: t[1 - n],
				width: e[n],
				height: e[1 - n]
			}
		}
	}, Bd.prototype.constructor = Bd, Ui(Bd);
	var hb = Bd.extend({
			makeElOption: function(t, e, n, i, r) {
				var a = n.axis,
					o = a.grid,
					s = i.get("type"),
					l = qd(o, a).getOtherAxis(a).getGlobalExtent(),
					h = a.toGlobalCoord(a.dataToCoord(e, !0));
				if(s && "none" !== s) {
					var u = Vd(i),
						c = ub[s](a, h, l, u);
					c.style = u, t.graphicKey = c.type, t.pointer = c
				}
				var d = ec(o.model, n);
				Yd(e, t, d, n, i, r)
			},
			getHandleTransform: function(t, e, n) {
				var i = ec(e.axis.grid.model, e, {
					labelInside: !1
				});
				return i.labelMargin = n.get("handle.margin"), {
					position: Xd(e.axis, t, i),
					rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
				}
			},
			updateHandleTransform: function(t, e, n) {
				var i = n.axis,
					r = i.grid,
					a = i.getGlobalExtent(!0),
					o = qd(r, i).getOtherAxis(i).getGlobalExtent(),
					s = "x" === i.dim ? 0 : 1,
					l = t.position;
				l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
				var h = (o[1] + o[0]) / 2,
					u = [h, h];
				u[s] = l[s];
				var c = [{
					verticalAlign: "middle"
				}, {
					align: "center"
				}];
				return {
					position: l,
					rotation: t.rotation,
					cursorPoint: u,
					tooltipOption: c[s]
				}
			}
		}),
		ub = {
			line: function(t, e, n, i) {
				var r = jd([e, n[0]], [e, n[1]], Zd(t));
				return qr({
					shape: r,
					style: i
				}), {
					type: "Line",
					shape: r
				}
			},
			shadow: function(t, e, n) {
				var i = Math.max(1, t.getBandWidth()),
					r = n[1] - n[0];
				return {
					type: "Rect",
					shape: Ud([e - i / 2, n[0]], [i, r], Zd(t))
				}
			}
		};
	Q_.registerAxisPointerClass("CartesianAxisPointer", hb), bl(function(t) {
		if(t) {
			(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
			var e = t.axisPointer.link;
			e && !_(e) && (t.axisPointer.link = [e])
		}
	}), Sl(Jy.PROCESSOR.STATISTIC, function(t, e) {
		t.getComponent("axisPointer").coordSysAxesInfo = Gu(t, e)
	}), Il({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	}, nb), Ll({
		type: "tooltip",
		dependencies: ["axisPointer"],
		defaultOption: {
			zlevel: 0,
			z: 8,
			show: !0,
			showContent: !0,
			trigger: "item",
			triggerOn: "mousemove|click",
			alwaysShowContent: !1,
			displayMode: "single",
			confine: !1,
			showDelay: 0,
			hideDelay: 100,
			transitionDuration: .4,
			enterable: !1,
			backgroundColor: "rgba(50,50,50,0.7)",
			borderColor: "#333",
			borderRadius: 4,
			borderWidth: 0,
			padding: 5,
			extraCssText: "",
			axisPointer: {
				type: "line",
				axis: "auto",
				animation: "auto",
				animationDurationUpdate: 200,
				animationEasingUpdate: "exponentialOut",
				crossStyle: {
					color: "#999",
					width: 1,
					type: "dashed",
					textStyle: {}
				}
			},
			textStyle: {
				color: "#fff",
				fontSize: 14
			}
		}
	});
	var cb = f,
		db = to,
		fb = ["", "-webkit-", "-moz-", "-o-"],
		pb = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
	Jd.prototype = {
		constructor: Jd,
		_enterable: !0,
		update: function() {
			var t = this._container,
				e = t.currentStyle || document.defaultView.getComputedStyle(t),
				n = t.style;
			"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
		},
		show: function(t) {
			clearTimeout(this._hideTimeout);
			var e = this.el;
			e.style.cssText = pb + Qd(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
		},
		setContent: function(t) {
			this.el.innerHTML = null == t ? "" : t
		},
		setEnterable: function(t) {
			this._enterable = t
		},
		getSize: function() {
			var t = this.el;
			return [t.clientWidth, t.clientHeight]
		},
		moveTo: function(t, e) {
			var n, i = this._zr;
			i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
			var r = this.el.style;
			r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
		},
		hide: function() {
			this.el.style.display = "none", this._show = !1
		},
		hideLater: function(t) {
			!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
		},
		isShow: function() {
			return this._show
		}
	};
	var gb = y,
		vb = f,
		mb = za,
		yb = new Nv({
			shape: {
				x: -1,
				y: -1,
				width: 2,
				height: 2
			}
		});
	Ol({
		type: "tooltip",
		init: function(t, e) {
			if(!cf.node) {
				var n = new Jd(e.getDom(), e);
				this._tooltipContent = n
			}
		},
		render: function(t, e, n) {
			if(!cf.node && !cf.wxa) {
				this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
				var i = this._tooltipContent;
				i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
			}
		},
		_initGlobalListener: function() {
			var t = this._tooltipModel,
				e = t.get("triggerOn");
			Cd("itemTooltip", this._api, gb(function(t, n, i) {
				"none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
			}, this))
		},
		_keepShow: function() {
			var t = this._tooltipModel,
				e = this._ecModel,
				n = this._api;
			if(null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
				var i = this;
				clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
					i.manuallyShowTip(t, e, n, {
						x: i._lastX,
						y: i._lastY
					})
				})
			}
		},
		manuallyShowTip: function(t, e, n, i) {
			if(i.from !== this.uid && !cf.node) {
				var r = ef(i, n);
				this._ticket = "";
				var a = i.dataByCoordSys;
				if(i.tooltip && null != i.x && null != i.y) {
					var o = yb;
					o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
						offsetX: i.x,
						offsetY: i.y,
						target: o
					}, r)
				} else if(a) this._tryShow({
					offsetX: i.x,
					offsetY: i.y,
					position: i.position,
					event: {},
					dataByCoordSys: i.dataByCoordSys,
					tooltipOption: i.tooltipOption
				}, r);
				else if(null != i.seriesIndex) {
					if(this._manuallyAxisShowTip(t, e, n, i)) return;
					var s = Qw(i, e),
						l = s.point[0],
						h = s.point[1];
					null != l && null != h && this._tryShow({
						offsetX: l,
						offsetY: h,
						position: i.position,
						target: s.el,
						event: {}
					}, r)
				} else null != i.x && null != i.y && (n.dispatchAction({
					type: "updateAxisPointer",
					x: i.x,
					y: i.y
				}), this._tryShow({
					offsetX: i.x,
					offsetY: i.y,
					position: i.position,
					target: n.getZr().findHover(i.x, i.y).target,
					event: {}
				}, r))
			}
		},
		manuallyHideTip: function(t, e, n, i) {
			var r = this._tooltipContent;
			!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(ef(i, n))
		},
		_manuallyAxisShowTip: function(t, e, n, i) {
			var r = i.seriesIndex,
				a = i.dataIndex,
				o = e.getComponent("axisPointer").coordSysAxesInfo;
			if(null != r && null != a && null != o) {
				var s = e.getSeriesByIndex(r);
				if(s) {
					var l = s.getData(),
						t = tf([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
					if("axis" === t.get("trigger")) return n.dispatchAction({
						type: "updateAxisPointer",
						seriesIndex: r,
						dataIndex: a,
						position: i.position
					}), !0
				}
			}
		},
		_tryShow: function(t, e) {
			var n = t.target,
				i = this._tooltipModel;
			if(i) {
				this._lastX = t.offsetX, this._lastY = t.offsetY;
				var r = t.dataByCoordSys;
				r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
			}
		},
		_showOrMove: function(t, e) {
			var n = t.get("showDelay");
			e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
		},
		_showAxisTooltip: function(t, e) {
			var n = this._ecModel,
				i = this._tooltipModel,
				r = [e.offsetX, e.offsetY],
				a = [],
				o = [],
				s = tf([e.tooltipOption, i]);
			vb(t, function(t) {
				vb(t.dataByAxis, function(t) {
					var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
						i = t.value,
						r = [];
					if(e && null != i) {
						var s = Wd(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
						f(t.seriesDataIndices, function(a) {
							var l = n.getSeriesByIndex(a.seriesIndex),
								h = a.dataIndexInside,
								u = l && l.getDataParams(h);
							u.axisDim = t.axisDim, u.axisIndex = t.axisIndex, u.axisType = t.axisType, u.axisId = t.axisId, u.axisValue = zh(e.axis, i), u.axisValueLabel = s, u && (o.push(u), r.push(l.formatTooltip(h, !0)))
						});
						var l = s;
						a.push((l ? eo(l) + "<br />" : "") + r.join("<br />"))
					}
				})
			}, this), a.reverse(), a = a.join("<br /><br />");
			var l = e.position;
			this._showOrMove(s, function() {
				this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, r[0], r[1], this._tooltipContent, o) : this._showTooltipContent(s, a, o, Math.random(), r[0], r[1], l)
			})
		},
		_showSeriesItemTooltip: function(t, e, n) {
			var i = this._ecModel,
				r = e.seriesIndex,
				a = i.getSeriesByIndex(r),
				o = e.dataModel || a,
				s = e.dataIndex,
				l = e.dataType,
				h = o.getData(),
				u = tf([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
				c = u.get("trigger");
			if(null == c || "item" === c) {
				var d = o.getDataParams(s, l),
					f = o.formatTooltip(s, !1, l),
					p = "item_" + o.name + "_" + s;
				this._showOrMove(u, function() {
					this._showTooltipContent(u, f, d, p, t.offsetX, t.offsetY, t.position, t.target)
				}), n({
					type: "showTip",
					dataIndexInside: s,
					dataIndex: h.getRawIndex(s),
					seriesIndex: r,
					from: this.uid
				})
			}
		},
		_showComponentItemTooltip: function(t, e, n) {
			var i = e.tooltip;
			if("string" == typeof i) {
				var r = i;
				i = {
					content: r,
					formatter: r
				}
			}
			var a = new ka(i, this._tooltipModel, this._ecModel),
				o = a.get("content"),
				s = Math.random();
			this._showOrMove(a, function() {
				this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
			}), n({
				type: "showTip",
				from: this.uid
			})
		},
		_showTooltipContent: function(t, e, n, i, r, a, o, s) {
			if(this._ticket = "", t.get("showContent") && t.get("show")) {
				var l = this._tooltipContent,
					h = t.get("formatter");
				o = o || t.get("position");
				var u = e;
				if(h && "string" == typeof h) u = no(h, n, !0);
				else if("function" == typeof h) {
					var c = gb(function(e, i) {
						e === this._ticket && (l.setContent(i), this._updatePosition(t, o, r, a, l, n, s))
					}, this);
					this._ticket = i, u = h(n, i, c)
				}
				l.setContent(u), l.show(t), this._updatePosition(t, o, r, a, l, n, s)
			}
		},
		_updatePosition: function(t, e, n, i, r, a, o) {
			var s = this._api.getWidth(),
				l = this._api.getHeight();
			e = e || t.get("position");
			var h = r.getSize(),
				u = t.get("align"),
				c = t.get("verticalAlign"),
				d = o && o.getBoundingRect().clone();
			if(o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, {
					viewSize: [s, l],
					contentSize: h.slice()
				})), _(e)) n = mb(e[0], s), i = mb(e[1], l);
			else if(S(e)) {
				e.width = h[0], e.height = h[1];
				var f = ho(e, {
					width: s,
					height: l
				});
				n = f.x, i = f.y, u = null, c = null
			} else if("string" == typeof e && o) {
				var p = of (e, d, h);
				n = p[0], i = p[1]
			} else {
				var p = nf(n, i, r.el, s, l, u ? null : 20, c ? null : 20);
				n = p[0], i = p[1]
			}
			if(u && (n -= sf(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= sf(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
				var p = rf(n, i, r.el, s, l);
				n = p[0], i = p[1]
			}
			r.moveTo(n, i)
		},
		_updateContentNotChangedOnAxis: function(t) {
			var e = this._lastDataByCoordSys,
				n = !!e && e.length === t.length;
			return n && vb(e, function(e, i) {
				var r = e.dataByAxis || {},
					a = t[i] || {},
					o = a.dataByAxis || [];
				n &= r.length === o.length, n && vb(r, function(t, e) {
					var i = o[e] || {},
						r = t.seriesDataIndices || [],
						a = i.seriesDataIndices || [];
					n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && vb(r, function(t, e) {
						var i = a[e];
						n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
					})
				})
			}), this._lastDataByCoordSys = t, !!n
		},
		_hide: function(t) {
			this._lastDataByCoordSys = null, t({
				type: "hideTip",
				from: this.uid
			})
		},
		dispose: function(t, e) {
			cf.node || cf.wxa || (this._tooltipContent.hide(), Od("itemTooltip", e))
		}
	}), Il({
		type: "showTip",
		event: "showTip",
		update: "tooltip:manuallyShowTip"
	}, function() {}), Il({
		type: "hideTip",
		event: "hideTip",
		update: "tooltip:manuallyHideTip"
	}, function() {}), t.version = Wy, t.dependencies = Xy, t.PRIORITY = Jy, t.init = gl, t.connect = vl, t.disConnect = ml, t.disconnect = _x, t.dispose = yl, t.getInstanceByDom = xl, t.getInstanceById = _l, t.registerTheme = wl, t.registerPreprocessor = bl, t.registerProcessor = Sl, t.registerPostUpdate = Ml, t.registerAction = Il, t.registerCoordinateSystem = Tl, t.getCoordinateSystemDimensions = Cl, t.registerLayout = Dl, t.registerVisual = Al, t.registerLoading = Pl, t.extendComponentModel = Ll, t.extendComponentView = Ol, t.extendSeriesModel = Bl, t.extendChartView = El, t.setCanvasCreator = Nl, t.registerMap = Rl, t.getMap = zl, t.dataTool = bx, t.zrender = ug, t.graphic = $v, t.number = lm, t.format = vm, t.throttle = ks, t.helper = w_, t.matrix = zf, t.vector = Pf, t.color = ep, t.parseGeoJSON = S_, t.parseGeoJson = C_, t.util = D_, t.List = Lx, t.Model = ka, t.Axis = T_, t.env = cf
});