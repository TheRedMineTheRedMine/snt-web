!function (n, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.DisableDevtool = e() : n.DisableDevtool = e()
}(this, (
    function () {
        return function (n) {
            var e = {};

            function t(o) {
                if (e[o]) return e[o].exports;
                var i = e[o] = { i: o, l: !1, exports: {} };
                return n[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }

            return t.m = n,
                t.c = e,
                t.d = function (n, e, o) {
                    t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o })
                },
                t.r = function (n) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 })
                },
                t.t = function (n, e) {
                    if (1 & e && (n = t(n)), 8 & e) return n;
                    if (4 & e && "object" == typeof n && n && n.__esModule) return n;
                    var o = Object.create(null);
                    if (t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n)
                        for (var i in n)
                            t.d(o, i,
                                function (e) {
                                    return n[e]
                                }.bind(null, i)
                            );
                    return o
                },
                t.n = function (n) {
                    var e = n && n.__esModule
                        ? function () {
                            return n.default
                        }
                        : function () {
                            return n
                        };
                    return t.d(e, "a", e), e
                },
                t.o = function (n, e) {
                    return Object.prototype.hasOwnProperty.call(n, e)
                },
                t.p = "",
                t(t.s = 0)
        }([
            function (n, e, t) {
                "use strict";
                function o(n) {
                    return -1 !== navigator.userAgent.toLocaleLowerCase().indexOf(n)
                } t.r(e);

                var i =
                    function () {
                        try {
                            return window.self !== window.top
                        } catch (n) {
                            return !0
                        }
                    }(),
                    r = o("qqbrowser"),
                    u = o("firefox"),
                    c = o("macintosh"),
                    a = o("edge"),
                    l = a && !o("chrome") || o("trident") || o("msie"),
                    f = o("crios"),
                    d = o("edgios"),
                    v = {
                        UNKONW: -1,
                        REG_TO_STRING: 0,
                        DEFINE_ID: 1,
                        SIZE: 2,
                        DATE_TO_STRING: 3,
                        FUNC_TO_STRING: 4,
                        DEBUGGER: 5
                    };

                var s = !1;
                var w, p = {};

                for (var y in v) p[v[y]] = !1;

                function m(n) {
                    p[n] = !0
                }

                function b(n) {
                    p[n] = !1
                }

                function h() {
                    for (var n in p) if (p[n]) return s = !0, !0;
                    return s = !1, !1
                }

                function g() {
                    var n =
                        function () {
                            if (T(window.devicePixelRatio)) return window.devicePixelRatio;

                            var n = window.screen;

                            if (T(n)) return !1;
                            if (n.deviceXDPI && n.logicalXDPI) return n.deviceXDPI / n.logicalXDPI;

                            return !1
                        }();

                    if (!1 === n) return !0;
                    var e = v.SIZE, t = window.outerWidth - window.innerWidth * n > 200, o = window.outerHeight - window.innerHeight * n > 300;

                    return t || o ? (G(e), !1) : (b(e), !0)
                }

                function T(n) {
                    return null != n
                }

                function E(n) {
                    throw new Error('"' + n + '" is read-only')
                }

                function D(n, e, t) {
                    return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n
                }

                var I, _ = (D(w = {}, v.REG_TO_STRING, r || u), D(w, v.DEFINE_ID, !0), D(w, v.SIZE, !i && !a), D(w, v.DATE_TO_STRING, !f && !d), D(w, v.FUNC_TO_STRING, !f && !d), D(w, v.DEBUGGER, f || d), w);

                function O(n, e, t) {
                    return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n
                }

                var S = (O(I = {}, v.REG_TO_STRING, (
                    function () {
                        var n = v.REG_TO_STRING, e = 0, t = /./;
                        z(t), t.toString =
                            function () {
                                if (r) {
                                    var t = (new Date).getTime();
                                    e && t - e < 100 ? G(n) : e = t
                                } else u && G(n);
                                return ""
                            }, A(n, (
                                function () {
                                    z(t)
                                }))
                    })), O(I, v.DEFINE_ID, (
                        function () {
                            var n = v.DEFINE_ID, e = document.createElement("div");
                            e.__defineGetter__("id", (
                                function () {
                                    G(n)
                                })), Object.defineProperty(e, "id", {
                                    get:
                                        function () {
                                            G(n)
                                        }
                                }), A(n, (
                                    function () {
                                        z(e)
                                    }))
                        })), O(I, v.SIZE, (
                            function () {
                                g(), window.addEventListener("resize", (
                                    function () {
                                        setTimeout(g, 100)
                                    }), !0)
                            })), O(I, v.DATE_TO_STRING, (
                                function () {
                                    var n = v.DATE_TO_STRING, e = 0, t = new Date;
                                    t.toString =
                                        function () {
                                            return e++, ""
                                        }, A(n, (
                                            function () {
                                                e = 0, z(t), X(), e >= 2 && G(n)
                                            }))
                                })), O(I, v.FUNC_TO_STRING, (
                                    function (n) {
                                        if (!n) {
                                            var e = v.FUNC_TO_STRING, t = 0, o =
                                                function () {
                                                };
                                            o.toString =
                                                function () {
                                                    return t++, ""
                                                };
                                            A(e, (
                                                function () {
                                                    t = 0, z(o), X(), t >= 2 && G(e)
                                                }))
                                        }
                                    })), O(I, v.DEBUGGER, (
                                        function (n) {
                                            if (n) {
                                                var e = v.DEBUGGER;
                                                A(e, (
                                                    function () {
                                                        var n = Date.now();
                                                        Date.now() - n > 100 && G(e)
                                                    }))
                                            }
                                        })), I);
                function N() {
                    ("all" === F.detectors ? Object.keys(S) : F.detectors).forEach((
                        function (n) {
                            !
                                function (n, e) {
                                    if ("function" == typeof e) {
                                        var t = _[n];
                                        void 0 === t ? (E("value"), t = !0) : "function" == typeof t && (E("value"), t = t()), !0 === t && e()
                                    }
                                }(n, S[n])
                        }))
                }

                function G() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.UNKONW;
                    console.warn("You ar not allow to use DEVTOOL! [type = ".concat(n, "]")), F.clearIntervalWhenDevOpenTrigger && L(), U(), F.ondevtoolopen(n, K), m(n)
                }

                function R() {
                    if ("function" == typeof F.ondevtoolclose) {
                        var n = s;
                        !h() && n && F.ondevtoolclose()
                    }
                }

                var x = null,
                    j = null,
                    C = [],
                    P = 0;

                function k() {
                    var n, e, t, o, i, r, u = !1, c =
                        function () {
                            u = !0
                        }, a =
                            function () {
                                u = !1
                            };
                    n = c, e = a, t = window.alert, o = window.confirm, i = window.prompt, r =
                        function (t) {
                            return function () {
                                n && n(), t.apply(void 0, arguments), e && e()
                            }
                        }, window.alert = r(t), window.confirm = r(o), window.prompt = r(i),
                        function (n, e) {
                            var t, o, i;
                            void 0 !== document.hidden ? (t = "hidden", i = "visibilitychange", o = "visibilityState") : void 0 !== document.mozHidden ? (t = "mozHidden", i = "mozvisibilitychange", o = "mozVisibilityState") : void 0 !== document.msHidden ? (t = "msHidden", i = "msvisibilitychange", o = "msVisibilityState") : void 0 !== document.webkitHidden && (t = "webkitHidden", i = "webkitvisibilitychange", o = "webkitVisibilityState");
                            var r =
                                function () {
                                    document[o] === t ? e() : n()
                                };
                            document.removeEventListener(i, r, !1), document.addEventListener(i, r, !1)
                        }(a, c), x = window.setInterval((
                            function () {
                                u || (C.forEach((
                                    function (n) {
                                        var e = n.type, t = n.handle;
                                        b(e), t(P++)
                                    })), X(), R())
                            }), F.interval), j = setTimeout((
                                function () {
                                    /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase()) && L()
                                }), F.stopIntervalTime)
                }

                function A(n, e) {
                    C.push({ type: n, handle: e })
                }

                function L() {
                    window.clearInterval(x)
                }

                function U() {
                    window.clearTimeout(j)
                }

                function K() {
                    if (L(), F.url) window.location.href = F.url;
                    else {
                        try { window.opener = null, window.open("", "_self"), window.close(), window.history.back() } catch (n) {
                            console.log(n)
                        } setTimeout((
                            function () {
                                window.location.href = "../401/index.html"
                            }), 500)
                    }
                }

                function W(n) {
                    return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (n) {
                            return typeof n
                        } :
                        function (n) {
                            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                        })(n)
                }

                var F = { md5: "", ondevtoolopen: K, ondevtoolclose: null, url: "", tkName: "ddtk", interval: 200, disableMenu: !0, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: !1, detectors: "all", clearLog: !0, disableSelect: !1, disableCopy: !1, disableCut: !1 }, H = ["detectors", "ondevtoolclose"];

                function V() {
                    "function" == typeof F.ondevtoolclose && !0 === F.clearIntervalWhenDevOpenTrigger && (F.clearIntervalWhenDevOpenTrigger = !1, console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))
                }

                var M = window.console || {
                    log:
                        function () {
                        }
                }, z = l ?
                    function () {
                        return M.log.apply(M, arguments)
                    } : M.log, B = l ?
                        function () {
                            return M.clear()
                        } : M.clear;
                function X() {
                    F.clearLog && B()
                }

                function Z() {
                    var n = 73, e = 85, t = 83, o = 123, i = c ?
                        function (e, t) {
                            return e.metaKey && e.altKey && t === n
                        } :
                        function (e, t) {
                            return e.ctrlKey && e.shiftKey && t === n
                        }, r = c ?
                            function (n, o) {
                                return n.metaKey && n.altKey && o === e || n.metaKey && o === t
                            } :
                            function (n, o) {
                                return n.ctrlKey && (o === t || o === e)
                            };
                    window.addEventListener("keydown", (
                        function (n) {
                            var e = (n = n || window.event).keyCode || n.which;
                            if (e === o || i(n, e) || r(n, e)) return n.returnValue = !1, n.preventDefault(), !1
                        }), !0), F.disableMenu && q(window, "contextmenu"), F.disableSelect && q(window, "selectstart"), F.disableCopy && q(window, "copy"), F.disableCut && q(window, "cut")
                }

                function q(n, e) {
                    n.addEventListener(e, (
                        function (n) {
                            return (n = n || window.event).returnValue = !1, n.preventDefault(), !1
                        }))
                }

                function Y(n, e, t, o, i, r) {
                    return en((u = en(en(e, n), en(o, r))) << (c = i) | u >>> 32 - c, t);
                    var u, c
                }

                function $(n, e, t, o, i, r, u) {
                    return Y(e & t | ~e & o, n, e, i, r, u)
                }

                function J(n, e, t, o, i, r, u) {
                    return Y(e & o | t & ~o, n, e, i, r, u)
                }

                function Q(n, e, t, o, i, r, u) {
                    return Y(e ^ t ^ o, n, e, i, r, u)
                }

                function nn(n, e, t, o, i, r, u) {
                    return Y(t ^ (e | ~o), n, e, i, r, u)
                }

                function en(n, e) {
                    var t = (65535 & n) + (65535 & e);
                    return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t
                }

                var tn =
                    function (n) {
                        return function (n) {
                            for (var e = "0123456789abcdef", t = "", o = 0;
                                o < 4 * n.length;
                                o++)t += e.charAt(n[o >> 2] >> o % 4 * 8 + 4 & 15) + e.charAt(n[o >> 2] >> o % 4 * 8 & 15);
                            return t
                        }(
                            function (n, e) {
                                n[e >> 5] |= 128 << e % 32, n[14 + (e + 64 >>> 9 << 4)] = e;
                                for (var t = 1732584193, o = -271733879, i = -1732584194, r = 271733878, u = 0;
                                    u < n.length;
                                    u += 16) {
                                    var c = t, a = o, l = i, f = r;

                                    t = $(t, o, i, r, n[u + 0], 7, -680876936),
                                        r = $(r, t, o, i, n[u + 1], 12, -389564586),
                                        i = $(i, r, t, o, n[u + 2], 17, 606105819),
                                        o = $(o, i, r, t, n[u + 3], 22, -1044525330),
                                        t = $(t, o, i, r, n[u + 4], 7, -176418897),
                                        r = $(r, t, o, i, n[u + 5], 12, 1200080426),
                                        i = $(i, r, t, o, n[u + 6], 17, -1473231341),
                                        o = $(o, i, r, t, n[u + 7], 22, -45705983),
                                        t = $(t, o, i, r, n[u + 8], 7, 1770035416),
                                        r = $(r, t, o, i, n[u + 9], 12, -1958414417),
                                        i = $(i, r, t, o, n[u + 10], 17, -42063),
                                        o = $(o, i, r, t, n[u + 11], 22, -1990404162),
                                        t = $(t, o, i, r, n[u + 12], 7, 1804603682),
                                        r = $(r, t, o, i, n[u + 13], 12, -40341101),
                                        i = $(i, r, t, o, n[u + 14], 17, -1502002290),
                                        o = $(o, i, r, t, n[u + 15], 22, 1236535329),
                                        t = J(t, o, i, r, n[u + 1], 5, -165796510),
                                        r = J(r, t, o, i, n[u + 6], 9, -1069501632),
                                        i = J(i, r, t, o, n[u + 11], 14, 643717713),
                                        o = J(o, i, r, t, n[u + 0], 20, -373897302),
                                        t = J(t, o, i, r, n[u + 5], 5, -701558691),
                                        r = J(r, t, o, i, n[u + 10], 9, 38016083),
                                        i = J(i, r, t, o, n[u + 15], 14, -660478335),
                                        o = J(o, i, r, t, n[u + 4], 20, -405537848),
                                        t = J(t, o, i, r, n[u + 9], 5, 568446438),
                                        r = J(r, t, o, i, n[u + 14], 9, -1019803690),
                                        i = J(i, r, t, o, n[u + 3], 14, -187363961),
                                        o = J(o, i, r, t, n[u + 8], 20, 1163531501),
                                        t = J(t, o, i, r, n[u + 13], 5, -1444681467),
                                        r = J(r, t, o, i, n[u + 2], 9, -51403784),
                                        i = J(i, r, t, o, n[u + 7], 14, 1735328473),
                                        o = J(o, i, r, t, n[u + 12], 20, -1926607734)
                                    t = Q(t, o, i, r, n[u + 5], 4, -378558)
                                    r = Q(r, t, o, i, n[u + 8], 11, -2022574463),
                                        i = Q(i, r, t, o, n[u + 11], 16, 1839030562),
                                        o = Q(o, i, r, t, n[u + 14], 23, -35309556),
                                        t = Q(t, o, i, r, n[u + 1], 4, -1530992060),
                                        r = Q(r, t, o, i, n[u + 4], 11, 1272893353),
                                        i = Q(i, r, t, o, n[u + 7], 16, -155497632),
                                        o = Q(o, i, r, t, n[u + 10], 23, -1094730640),
                                        t = Q(t, o, i, r, n[u + 13], 4, 681279174),
                                        r = Q(r, t, o, i, n[u + 0], 11, -358537222),
                                        i = Q(i, r, t, o, n[u + 3], 16, -722521979),
                                        o = Q(o, i, r, t, n[u + 6], 23, 76029189),
                                        t = Q(t, o, i, r, n[u + 9], 4, -640364487),
                                        r = Q(r, t, o, i, n[u + 12], 11, -421815835),
                                        i = Q(i, r, t, o, n[u + 15], 16, 530742520),
                                        o = Q(o, i, r, t, n[u + 2], 23, -995338651),
                                        t = nn(t, o, i, r, n[u + 0], 6, -198630844),
                                        r = nn(r, t, o, i, n[u + 7], 10, 1126891415),
                                        i = nn(i, r, t, o, n[u + 14], 15, -1416354905),
                                        o = nn(o, i, r, t, n[u + 5], 21, -57434055),
                                        t = nn(t, o, i, r, n[u + 12], 6, 1700485571),
                                        r = nn(r, t, o, i, n[u + 3], 10, -1894986606),
                                        i = nn(i, r, t, o, n[u + 10], 15, -1051523),
                                        o = nn(o, i, r, t, n[u + 1], 21, -2054922799),
                                        t = nn(t, o, i, r, n[u + 8], 6, 1873313359),
                                        r = nn(r, t, o, i, n[u + 15], 10, -30611744),
                                        i = nn(i, r, t, o, n[u + 6], 15, -1560198380),
                                        o = nn(o, i, r, t, n[u + 13], 21, 1309151649),
                                        t = nn(t, o, i, r, n[u + 4], 6, -145523070),
                                        r = nn(r, t, o, i, n[u + 11], 10, -1120210379),
                                        i = nn(i, r, t, o, n[u + 2], 15, 718787259),
                                        o = nn(o, i, r, t, n[u + 9], 21, -343485551),
                                        t = en(t, c),
                                        o = en(o, a),
                                        i = en(i, l),
                                        r = en(r, f)
                                } return Array(t, o, i, r)
                            }(
                                function (n) {
                                    for (var e = Array(), t = 0;
                                        t < 8 * n.length;
                                        t += 8)e[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
                                    return e
                                }(n), 8 * n.length
                            )
                        )
                    };
                function on(n) {
                    !function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                        for (var e in F)
                            void 0 === n[e] || W(F[e]) !== W(n[e]) && -1 === H.indexOf(e) || (F[e] = n[e]);

                        V()
                    }(n),
                        function () {
                            if (F.md5) {
                                var n =
                                    function (n) {
                                        var e = window.location.search, t = window.location.hash;

                                        if ("" === e && "" !== t && (e = "?".concat(t.split("?")[1])), "" !== e && void 0 !== e) {
                                            var o = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
                                                i = e.substr(1).match(o);

                                            if (null != i) return unescape(i[2])
                                        }

                                        return ""
                                    }(F.tkName);

                                if (tn(n) === F.md5) return !0
                            }

                            return !1
                        }() || (k(), Z(), N())
                }

                on.md5 = tn,
                    on.version = "0.2.5",
                    on.DETECTOR_TYPE = v,
                    on.isDevToolOpened = h,
                    function () {
                        if ("undefined" != typeof document) {
                            var n = document.querySelector("[disable-devtool-auto]");
                            if (n) {
                                var e = {};
                                ["md5", "url", "tk-name", "interval", "disable-menu", "detectors"].forEach((
                                    function (t) {
                                        var o = n.getAttribute(t);
                                        null !== o && ("interval" === t ? o = parseInt(o) : "disable-menu" === t ? o = "false" !== o : "detector" === t && "all" !== o && (o = o.split(" ")), e[
                                            function (n) {
                                                if (-1 === n.indexOf("-")) return n;

                                                var e = !1;

                                                return n.split("").map((
                                                    function (n) {
                                                        return "-" === n ? (e = !0, "") : e ? (e = !1, n.toUpperCase()) : n
                                                    })).join("")
                                            }(t)] = o)
                                    })), on(e)
                            }
                        }
                    }();
                e.default = on
            }]).default
    }));
