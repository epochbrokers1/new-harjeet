
function Pagination() {
    var n = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        maxVisible: 5,
        currentPage: 0,
        pagination: null,

        navigate: function(n) {
            var t, i, f, r, u;
            if ((isNaN(n) || n === undefined) && (n = !0), $(".pagination .nav").removeClass("disabled"), n) {
                if (curr = this.currentPage, curr < this.totalPages - 1) {
                    if (curr < this.totalPages - 4) {
                        for ($(".pagination", this.container.parent()).remove(), i = $('<div class="col-md-11 col-xs-12 col-md-offset-1 pagination"><\/div>').append('<a class="nav prev disabled" data-next="false">Prev<\/a>'), t = curr; t < curr + 5; t++) r = "page", t || (r = "page current"), u = '<a class="' + r + '" data-page="' + (t + 1) + '">' + (t + 1) + "<\/a>", i.append(u);
                        i.append('<a class="nav next" data-next="true">Next<\/a>');
                        this.container.after(i)
                    }
                } else curr++;
                this.currentPage++;
                this.currentPage > this.totalPages - 1 && (this.currentPage = this.totalPages - 1);
                this.currentPage == this.totalPages - 1 && $(".pagination .nav.next").addClass("disabled")
            } else if (curr = this.currentPage, curr > 0) {
                if (curr < this.totalPages - 4) {
                    for ($(".pagination", this.container.parent()).remove(), i = $('<div class="col-md-11 col-xs-12 col-md-offset-1 pagination"><\/div>').append('<a class="nav prev disabled" data-next="false">Prev<\/a>'), f = curr - 1, t = f; t < curr + 4; t++) r = "page", t || (r = "page current"), u = '<a class="' + r + '" data-page="' + (t + 1) + '">' + (t + 1) + "<\/a>", i.append(u);
                    i.append('<a class="nav next" data-next="true">Next<\/a>');
                    this.container.after(i)
                } else curr++;
                this.currentPage--;
                this.currentPage < 0 && (this.currentPage = 0);
                this.currentPage == 0 && $(".pagination .nav.prev").addClass("disabled")
            }
            this.showItems()
        },

        showItems: function() {
            this.items.hide();
            var n = this.perPage * this.currentPage;
            this.items.slice(n, n + this.perPage).show();
            this.updateNavigation()
        },
        init: function(n, t, i) {
            this.container = n;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = i;
            this.items = t;
            this.createNavigation();
            this.showItems()
        }
    };

}

// function scrollFunction() {
//     document.getElementById("myBtn").style.display = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? "block" : "none"
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0
// }

// function testOrientation() {
//     $(window).width() < 1279 && (window.orientation == 90 || window.orientation == -90 ? $("#block_land").show() : $("#block_land").hide())
// }

// function ChangeUrl(n, t) {
//     if (typeof history.pushState != "undefined") {
//         var i = {
//             Page: n,
//             Url: t
//         };
//         history.pushState(i, i.Page, i.Url)
//     } else alert("Browser does not support HTML5.")
// }

// function productSamehight() {
//     var n = 0;
//     $(".slick-track .box_detail").each(function() {
//         $(this).height() > n && (n = $(this).height())
//     });
//     $(".slick-track .box_detail").height(n)
// }

// function articlesSamehight() {
//     var n = 0;
//     $(".blog-slider .caption h3").each(function() {
//         $(this).height() > n && (n = $(this).height())
//     });
//     $(".blog-slider .caption h3").height(n)
// }
var jQuery, Vel, getTime, browser, getVideoBlk, checkitem, rawUrl, curr;
if (! function(n, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        "use strict";

        // function ir(n, t) {
        //     t = t || u;
        //     var i = t.createElement("script");
        //     i.text = n;
        //     t.head.appendChild(i).parentNode.removeChild(i)
        // }

        function fi(n) {
            var t = !!n && "length" in n && n.length,
                r = i.type(n);
            return "function" !== r && !i.isWindow(n) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
        }

        function l(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        }

        // function oi(n, t, r) {
        //     return i.isFunction(t) ? i.grep(n, function(n, i) {
        //         return !!t.call(n, i, n) !== r
        //     }) : t.nodeType ? i.grep(n, function(n) {
        //         return n === t !== r
        //     }) : "string" != typeof t ? i.grep(n, function(n) {
        //         return ot.call(t, n) > -1 !== r
        //     }) : er.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
        //         return ot.call(t, n) > -1 !== r && 1 === n.nodeType
        //     }))
        // }

        function ar(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function ne(n) {
            var t = {};
            return i.each(n.match(h) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function nt(n) {
            return n
        }

        function pt(n) {
            throw n;
        }

        // function vr(n, t, r, u) {
        //     var f;
        //     try {
        //         n && i.isFunction(f = n.promise) ? f.call(n).done(t).fail(r) : n && i.isFunction(f = n.then) ? f.call(n, t, r) : t.apply(void 0, [n].slice(u))
        //     } catch (n) {
        //         r.apply(void 0, [n])
        //     }
        // }

        function bt() {
            u.removeEventListener("DOMContentLoaded", bt);
            n.removeEventListener("load", bt);
            i.ready()
        }

        function ht() {
            this.expando = i.expando + ht.uid++
        }

        // function re(n) {
        //     return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : te.test(n) ? JSON.parse(n) : n)
        // }

        // function pr(n, t, i) {
        //     var r;
        //     if (void 0 === i && 1 === n.nodeType)
        //         if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), "string" == typeof i) {
        //             try {
        //                 i = re(i)
        //             } catch (u) {}
        //             e.set(n, t, i)
        //         } else i = void 0;
        //     return i
        // }

        function kr(n, t, r, u) {
            var h, e = 1,
                l = 20,
                c = u ? function() {
                    return u.cur()
                } : function() {
                    return i.css(n, t, "")
                },
                s = c(),
                o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || "px" !== o && +s) && ct.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
            }
            return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
        }

        // function ue(n) {
        //     var r, f = n.ownerDocument,
        //         u = n.nodeName,
        //         t = si[u];
        //     return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), si[u] = t, t)
        // }

        function tt(n, t) {
            for (var e, u, f = [], i = 0, o = n.length; i < o; i++) u = n[i], u.style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && kt(u) && (f[i] = ue(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e)));
            for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
            return n
        }

        // function o(n, t) {
        //     var r;
        //     return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && l(n, t) ? i.merge([n], r) : r
        // }

        // function hi(n, t) {
        //     for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        // }

        // function iu(n, t, r, u, f) {
        //     for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
        //         if (e = n[l], e || 0 === e)
        //             if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
        //             else if (tu.test(e)) {
        //         for (s = s || h.appendChild(t.createElement("div")), p = (gr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
        //         i.merge(y, s.childNodes);
        //         s = h.firstChild;
        //         s.textContent = ""
        //     } else y.push(t.createTextNode(e));
        //     for (h.textContent = "", l = 0; e = y[l++];)
        //         if (u && i.inArray(e, u) > -1) f && f.push(e);
        //         else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && hi(s), r)
        //         for (v = 0; e = s[v++];) nu.test(e.type || "") && r.push(e);
        //     return h
        // }

        function gt() {
            return !0
        }

        function it() {
            return !1
        }

        // function uu() {
        //     try {
        //         return u.activeElement
        //     } catch (n) {}
        // }

        function ci(n, t, r, u, f, e) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof r && (u = u || r, r = void 0);
                for (s in t) ci(n, s, r, u, t[s], e);
                return n
            }
            if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = it;
            else if (!f) return n;
            return 1 === e && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
                i.event.add(this, t, f, u, r)
            })
        }

        // function fu(n, t) {
        //     return l(n, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(">tbody", n)[0] || n : n
        // }

        // function ae(n) {
        //     return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        // }

        // function ve(n) {
        //     var t = ce.exec(n.type);
        //     return t ? n.type = t[1] : n.removeAttribute("type"), n
        // }

        // function eu(n, t) {
        //     var u, c, f, s, h, l, a, o;
        //     if (1 === t.nodeType) {
        //         if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
        //             delete h.handle;
        //             h.events = {};
        //             for (f in o)
        //                 for (u = 0, c = o[f].length; u < c; u++) i.event.add(t, f, o[f][u])
        //         }
        //         e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        //     }
        // }

        // function ye(n, t) {
        //     var i = t.nodeName.toLowerCase();
        //     "input" === i && dr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
        // }

        // function rt(n, t, u, e) {
        //     t = gi.apply([], t);
        //     var l, p, c, a, s, w, h = 0,
        //         v = n.length,
        //         k = v - 1,
        //         y = t[0],
        //         b = i.isFunction(y);
        //     if (b || v > 1 && "string" == typeof y && !f.checkClone && he.test(y)) return n.each(function(i) {
        //         var r = n.eq(i);
        //         b && (t[0] = y.call(this, i, r.html()));
        //         rt(r, t, u, e)
        //     });
        //     if (v && (l = iu(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
        //         for (c = i.map(o(l, "script"), ae), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
        //         if (a)
        //             for (w = c[c.length - 1].ownerDocument, i.map(c, ve), h = 0; h < a; h++) s = c[h], nu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : ir(s.textContent.replace(le, ""), w))
        //     }
        //     return n
        // }

        function ou(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && hi(o(u, "script")), u.parentNode.removeChild(u));
            return n
        }

        function lt(n, t, r) {
            var o, s, h, u, e = n.style;
            return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], "" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && li.test(u) && su.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
        }

        function hu(n, t) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function be(n) {
            if (n in vu) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = au.length; t--;)
                if (n = au[t] + i, n in vu) return n
        }

        function yu(n) {
            var t = i.cssProps[n];
            return t || (t = i.cssProps[n] = be(n) || n), t
        }

        function pu(n, t, i) {
            var r = ct.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
        }

        function wu(n, t, r, u, f) {
            for (var o = 0, e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0; e < 4; e += 2) "margin" === r && (o += i.css(n, r + b[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), "padding" !== r && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
            return o
        }

        function bu(n, t, r) {
            var o, e = ni(n),
                u = lt(n, t, e),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            return li.test(u) ? u : (o = s && (f.boxSizingReliable() || u === n.style[t]), "auto" === u && (u = n["offset" + t[0].toUpperCase() + t.slice(1)]), u = parseFloat(u) || 0, u + wu(n, t, r || (s ? "border" : "content"), o, e) + "px")
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function ai() {
            ti && (u.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ai) : n.setTimeout(ai, i.fx.interval), i.fx.tick())
        }

        function gu() {
            return n.setTimeout(function() {
                ut = void 0
            }), ut = i.now()
        }

        function ii(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function nf(n, t, i) {
            for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function ke(n, t, u) {
            var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                h = n.style,
                a = n.nodeType && kt(n),
                e = r.get(n, "fxshow");
            u.queue || (c = i._queueHooks(n, "fx"), null == c.unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                c.unqueued || b()
            }), c.unqueued++, v.always(function() {
                v.always(function() {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            }));
            for (f in t)
                if (y = t[f], ku.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
                k && 1 === n.nodeType && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, null == o && (o = r.get(n, "display")), l = i.css(n, "display"), "none" === l && (o ? l = o : (tt([n], !0), o = n.style.display || o, l = i.css(n, "display"), tt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (s || (v.done(function() {
                    h.display = o
                }), null == o && (l = h.display, o = "none" === l ? "" : l)), h.display = "inline-block"));
                u.overflow && (h.overflow = "hidden", v.always(function() {
                    h.overflow = u.overflow[0];
                    h.overflowX = u.overflow[1];
                    h.overflowY = u.overflow[2]
                }));
                s = !1;
                for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && tt([n], !0), v.done(function() {
                    a || tt([n]);
                    r.remove(n, "fxshow");
                    for (f in p) i.style(n, f, p[f])
                })), s = nf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
            }
        }

        function de(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function a(n, t, r) {
            var e, o, s = 0,
                l = a.prefilters.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var s = ut || gu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: ut || gu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < r; i++) u.tweens[i].run(1);
                        return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (de(h, u.opts.specialEasing); s < l; s++)
                if (e = a.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
            return i.map(h, nf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        function k(n) {
            var t = n.match(h) || [];
            return t.join(" ")
        }

        function d(n) {
            return n.getAttribute && n.getAttribute("class") || ""
        }

        // function pi(n, t, r, u) {
        //     var f;
        //     if (Array.isArray(t)) i.each(t, function(t, i) {
        //         r || ge.test(n) ? u(n, i) : pi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        //     });
        //     else if (r || "object" !== i.type(t)) u(n, t);
        //     else
        //         for (f in t) pi(n + "[" + f + "]", t[f], r, u)
        // }

        function cf(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        // function lf(n, t, r, u) {
        //     function e(s) {
        //         var h;
        //         return f[s] = !0, i.each(n[s] || [], function(n, i) {
        //             var s = i(t, r, u);
        //             return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
        //         }), h
        //     }
        //     var f = {},
        //         o = n === wi;
        //     return e(t.dataTypes[0]) || !f["*"] && e("*")
        // }

        function ki(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        // function so(n, t, i) {
        //     for (var e, u, f, o, s = n.contents, r = n.dataTypes;
        //         "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        //     if (e)
        //         for (u in s)
        //             if (s[u] && s[u].test(e)) {
        //                 r.unshift(u);
        //                 break
        //             }
        //     if (r[0] in i) f = r[0];
        //     else {
        //         for (u in i) {
        //             if (!r[0] || n.converters[u + " " + r[0]]) {
        //                 f = u;
        //                 break
        //             }
        //             o || (o = u)
        //         }
        //         f = f || o
        //     }
        //     if (f) return f !== r[0] && r.unshift(f), i[f]
        // }

        // function ho(n, t, i, r) {
        //     var h, u, f, s, e, o = {},
        //         c = n.dataTypes.slice();
        //     if (c[1])
        //         for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        //     for (u = c.shift(); u;)
        //         if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
        //             if ("*" === u) u = e;
        //             else if ("*" !== e && e !== u) {
        //         if (f = o[e + " " + u] || o["* " + u], !f)
        //             for (h in o)
        //                 if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
        //                     f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
        //                     break
        //                 }
        //         if (f !== !0)
        //             if (f && n.throws) t = f(t);
        //             else try {
        //                 t = f(t)
        //             } catch (l) {
        //                 return {
        //                     state: "parsererror",
        //                     error: f ? l : "No conversion from " + e + " to " + u
        //                 }
        //             }
        //     }
        //     return {
        //         state: "success",
        //         data: t
        //     }
        // }
        var p = [],
            u = n.document,
            pf = Object.getPrototypeOf,
            w = p.slice,
            gi = p.concat,
            ui = p.push,
            ot = p.indexOf,
            vt = {},
            nr = vt.toString,
            yt = vt.hasOwnProperty,
            tr = yt.toString,
            wf = tr.call(Object),
            f = {},
            rr = "3.2.1",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            kf = /^-ms-/,
            df = /-([a-z])/g,
            gf = function(n, t) {
                return t.toUpperCase()
            },
            y, ei, er, or, sr, hr, cr, lr, h, yr, wt, v, st, si, tu, ut, ti, ku, du, tf, ft, rf, uf, ff, vi, af, et, di, ri, vf, yf;
        i.fn = i.prototype = {
            jquery: rr,
            constructor: i,
            length: 0,
            toArray: function() {
                return w.call(this)
            },
            get: function(n) {
                return null == n ? w.call(this) : n < 0 ? this[n + this.length] : this[n]
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t
            },
            each: function(n) {
                return i.each(this, n)
            },
            // map: function(n) {
            //     return this.pushStack(i.map(this, function(t, i) {
            //         return n.call(t, i, t)
            //     }))
            // },
            slice: function() {
                return this.pushStack(w.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (n < 0 ? i : 0);
                return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ui,
            sort: p.sort,
            splice: p.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
                if (null != (e = arguments[u]))
                    for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (o ? (o = !1, s = r && Array.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (rr + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isWindow: function(n) {
                return null != n && n === n.window
            },
            isNumeric: function(n) {
                var t = i.type(n);
                return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
            },
            isPlainObject: function(n) {
                var t, i;
                return !(!n || "[object Object]" !== nr.call(n)) && (!(t = pf(n)) || (i = yt.call(t, "constructor") && t.constructor, "function" == typeof i && tr.call(i) === wf))
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? vt[nr.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                ir(n)
            },
            camelCase: function(n) {
                return n.replace(kf, "ms-").replace(df, gf)
            },
            each: function(n, t) {
                var r, i = 0;
                if (fi(n)) {
                    for (r = n.length; i < r; i++)
                        if (t.call(n[i], i, n[i]) === !1) break
                } else
                    for (i in n)
                        if (t.call(n[i], i, n[i]) === !1) break; return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(bf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (fi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ui.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return null == t ? -1 : ot.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var e, u, r = 0,
                    f = [];
                if (fi(n))
                    for (e = n.length; r < e; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return gi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                if ("string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n)) return f = w.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(w.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r
            },
            now: Date.now,
            support: f
        });
        "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
            vt["[object " + t + "]"] = t.toLowerCase()
        });
        y = function(n) {
            function u(n, t, r, u) {
                var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                    if (11 !== v && (d = cr.exec(n)))
                        if (s = d[1]) {
                            if (9 === v) {
                                if (!(l = t.getElementById(s))) return r;
                                if (l.id === s) return r.push(l), r
                            } else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                        } else {
                            if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                            if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                        }
                    if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) p = t, g = n;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                            g = y.join(",");
                            p = ni.test(n) && ri(t.parentNode) || t
                        }
                        if (g) try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (nt) {} finally {
                            a === f && t.removeAttribute("id")
                        }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u)
            }

            function ti() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function l(n) {
                return n[f] = !0, n
            }

            function a(n) {
                var t = i.createElement("fieldset");
                try {
                    return !!n(t)
                } catch (r) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            // function ii(n, i) {
            //     for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
            // }

            // function wi(n, t) {
            //     var i = t && n,
            //         r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            //     if (r) return r;
            //     if (i)
            //         while (i = i.nextSibling)
            //             if (i === t) return -1;
            //     return n ? 1 : -1
            // }

            // function ar(n) {
            //     return function(t) {
            //         var i = t.nodeName.toLowerCase();
            //         return "input" === i && t.type === n
            //     }
            // }

            function vr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function bi(n) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t && t.disabled === n
                }
            }

            // function it(n) {
            //     return l(function(t) {
            //         return t = +t, l(function(i, r) {
            //             for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
            //         })
            //     })
            // }

            // function ri(n) {
            //     return n && "undefined" != typeof n.getElementsByTagName && n
            // }

            function ki() {}

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                return i
            }

            function pt(n, t, i) {
                var r = t.dir,
                    u = t.next,
                    e = u || r,
                    o = i && "parentNode" === e,
                    s = di++;
                return t.first ? function(t, i, u) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return n(t, i, u);
                    return !1
                } : function(t, i, h) {
                    var c, l, a, y = [v, s];
                    if (h) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                    if (l[e] = y, y[2] = n(t, i, h)) return !0
                                } return !1
                }
            }

            function ui(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            // function yr(n, t, i) {
            //     for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            //     return i
            // }

            // function wt(n, t, i, r, u) {
            //     for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            //     return o
            // }

            // function fi(n, t, i, r, u, e) {
            //     return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
            //         var l, c, a, p = [],
            //             y = [],
            //             w = e.length,
            //             b = f || yr(t || "*", o.nodeType ? [o] : o, []),
            //             v = !n || !f && t ? b : wt(b, p, n, o, s),
            //             h = i ? u || (f ? n : w || r) ? [] : e : v;
            //         if (i && i(v, h, o, s), r)
            //             for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
            //         if (f) {
            //             if (u || n) {
            //                 if (u) {
            //                     for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
            //                     u(null, h = [], l, s)
            //                 }
            //                 for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
            //             }
            //         } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            //     })
            // }

            function ei(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                        return n === o
                    }, c, !0), a = pt(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), e = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; i < s; i++)
                    if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; r < s; r++)
                                if (t.relative[n[r].type]) break;
                            return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                        }
                        e.push(u)
                    }
                return ui(e)
            }

            function pr(n, r) {
                var f = r.length > 0,
                    e = n.length > 0,
                    o = function(o, s, c, l, a) {
                        var y, nt, d, g = 0,
                            p = "0",
                            tt = o && [],
                            w = [],
                            it = ht,
                            rt = o || e && t.find.TAG("*", a),
                            ut = v += null == it ? 1 : Math.random() || .1,
                            ft = rt.length;
                        for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                            if (e && y) {
                                for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                    if (d(y, s || i, c)) {
                                        l.push(y);
                                        break
                                    }
                                a && (v = ut)
                            }
                            f && ((y = !d && y) && g--, o && tt.push(y))
                        }
                        if (g += p, f && p !== g) {
                            for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                            if (o) {
                                if (g > 0)
                                    while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                                w = wt(w)
                            }
                            k.apply(l, w);
                            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                        }
                        return a && (v = ut, ht = it), tt
                    };
                return f ? l(o) : o
            }
            var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
                c = n.document,
                v = 0,
                di = 0,
                hi = ti(),
                ci = ti(),
                lt = ti(),
                kt = function(n, t) {
                    return n === t && (ut = !0), 0
                },
                gi = {}.hasOwnProperty,
                g = [],
                nr = g.pop,
                tr = g.push,
                k = g.push,
                li = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
                gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
                ir = new RegExp(r + "+", "g"),
                at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                rr = new RegExp("^" + r + "*," + r + "*"),
                ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                er = new RegExp(gt),
                or = new RegExp("^" + tt + "$"),
                vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + ai),
                    PSEUDO: new RegExp("^" + gt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + dt + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                },
                sr = /^(?:input|select|textarea|button)$/i,
                hr = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ni = /[+~]/,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                yi = function(n, t) {
                    return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
                },
                pi = function() {
                    b()
                },
                lr = pt(function(n) {
                    return n.disabled === !0 && ("form" in n || "label" in n)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                k.apply(g = li.call(c.childNodes), c.childNodes);
                g[c.childNodes.length].nodeType
            } catch (wr) {
                k = {
                    apply: g.length ? function(n, t) {
                        tr.apply(n, li.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            e = u.support = {};
            oi = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return !!t && "HTML" !== t.nodeName
            };
            b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                    return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
                }), e.getById ? (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }) : (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i, u, f, r = t.getElementById(n);
                        if (r) {
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                            for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                                if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                        }
                        return []
                    }
                }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    e.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", gt)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, kt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }, i) : i
            };
            u.matches = function(n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (f) {}
                return u(t, i, null, [n]).length > 0
            };
            u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            };
            u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var f = t.attrHandle[r.toLowerCase()],
                    u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
                return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            };
            u.escape = function(n) {
                return (n + "").replace(vi, yi)
            };
            u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            };
            st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                                d = t.parentNode,
                                nt = e && t.nodeName.toLowerCase(),
                                g = !h && !e,
                                l = !1;
                            if (d) {
                                if (s) {
                                    while (k) {
                                        for (c = t; c = c[k];)
                                            if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        b = k = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                    for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            w[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                    while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                        if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                        }) : function(n) {
                            return r(n, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = bt(n.replace(at, "$1"));
                        return i[f] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: l(function(n) {
                        return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: bi(!1),
                    disabled: bi(!0),
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return hr.test(n.nodeName)
                    },
                    input: function(n) {
                        return sr.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[rt] = ar(rt);
            for (rt in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[rt] = vr(rt);
            return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
                var e, f, s, o, r, h, c, l = ci[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (r = n, h = [], c = t.preFilter; r;) {
                    (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                    e = !1;
                    (f = ur.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length));
                    for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                    if (!e) break
                }
                return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
            }, bt = u.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = lt[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                    i = lt(n, pr(e, u));
                    i.selector = n
                }
                return i
            }, si = u.select = function(n, i, r, u) {
                var o, f, e, l, a, c = "function" == typeof n && n,
                    s = !u && ft(n = c.selector || n);
                if (r = r || [], 1 === s.length) {
                    if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                        if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(f.shift().value.length)
                    }
                    for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                        if (e = f[o], t.relative[l = e.type]) break;
                        if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                            if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                            break
                        }
                    }
                }
                return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
            }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
                return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
            }), a(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ii("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), e.attributes && a(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ii("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), a(function(n) {
                return null == n.getAttribute("disabled")
            }) || ii(dt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), u
        }(n);
        i.find = y;
        i.expr = y.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = y.uniqueSort;
        i.text = y.getText;
        i.isXMLDoc = y.isXML;
        i.contains = y.contains;
        i.escapeSelector = y.escape;
        var g = function(n, t, r) {
                for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType;)
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            ur = function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            },
            fr = i.expr.match.needsContext;
        ei = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        er = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, r, u = this.length,
                    f = this;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
                return u > 1 ? i.uniqueSort(r) : r
            },
            filter: function(n) {
                return this.pushStack(oi(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(oi(this, n || [], !0))
            },
            is: function(n) {
                return !!oi(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
            }
        });
        sr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        hr = i.fn.init = function(n, t, r) {
            var f, e;
            if (!n) return this;
            if (r = r || or, "string" == typeof n) {
                if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : sr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), ei.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
            }
            return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
        };
        hr.prototype = i.fn;
        or = i(u);
        cr = /^(?:parents|prev(?:Until|All))/;
        lr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; n < r; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                var r, f = 0,
                    o = this.length,
                    u = [],
                    e = "string" != typeof n && i(n);
                if (!fr.test(n))
                    for (; f < o; f++)
                        for (r = this[f]; r && r !== t; r = r.parentNode)
                            if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                                u.push(r);
                                break
                            }
                return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return g(n, "parentNode")
            },
            parentsUntil: function(n, t, i) {
                return g(n, "parentNode", i)
            },
            next: function(n) {
                return ar(n, "nextSibling")
            },
            prev: function(n) {
                return ar(n, "previousSibling")
            },
            nextAll: function(n) {
                return g(n, "nextSibling")
            },
            prevAll: function(n) {
                return g(n, "previousSibling")
            },
            nextUntil: function(n, t, i) {
                return g(n, "nextSibling", i)
            },
            prevUntil: function(n, t, i) {
                return g(n, "previousSibling", i)
            },
            siblings: function(n) {
                return ur((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return ur(n.firstChild)
            },
            contents: function(n) {
                return l(n, "iframe") ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (lr[n] || i.uniqueSort(f), cr.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        h = /[^\x20\t\r\n\f]+/g;
        i.Callbacks = function(n) {
            n = "string" == typeof n ? ne(n) : i.extend({}, n);
            var e, r, h, u, t = [],
                o = [],
                f = -1,
                c = function() {
                    for (u = u || n.once, h = e = !0; o.length; f = -1)
                        for (r = o.shift(); ++f < t.length;) t[f].apply(r[0], r[1]) === !1 && n.stopOnFalse && (f = t.length, r = !1);
                    n.memory || (r = !1);
                    e = !1;
                    u && (t = r ? [] : "")
                },
                s = {
                    add: function() {
                        return t && (r && !e && (f = t.length - 1, o.push(r)), function u(r) {
                            i.each(r, function(r, f) {
                                i.isFunction(f) ? n.unique && s.has(f) || t.push(f) : f && f.length && "string" !== i.type(f) && u(f)
                            })
                        }(arguments), r && !e && c()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(n, r) {
                            for (var u;
                                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= f && f--
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : t.length > 0
                    },
                    empty: function() {
                        return t && (t = []), this
                    },
                    disable: function() {
                        return u = o = [], t = r = "", this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return u = o = [], r || e || (t = r = ""), this
                    },
                    locked: function() {
                        return !!u
                    },
                    fireWith: function(n, t) {
                        return u || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(t) {
                var u = [
                        ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                        ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                    ],
                    e = "pending",
                    f = {
                        state: function() {
                            return e
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        "catch": function(n) {
                            return f.then(null, n)
                        },
                        pipe: function() {
                            var n = arguments;
                            return i.Deferred(function(t) {
                                i.each(u, function(u, f) {
                                    var e = i.isFunction(n[f[4]]) && n[f[4]];
                                    r[f[1]](function() {
                                        var n = e && e.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        then: function(t, r, f) {
                            function o(t, r, u, f) {
                                return function() {
                                    var s = this,
                                        h = arguments,
                                        l = function() {
                                            var n, c;
                                            if (!(t < e)) {
                                                if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                                i.isFunction(c) ? f ? c.call(n, o(e, r, nt, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, nt, f), o(e, r, pt, f), o(e, r, nt, r.notifyWith))) : (u !== nt && (s = void 0, h = [n]), (f || r.resolveWith)(s, h))
                                            }
                                        },
                                        c = f ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                                t + 1 >= e && (u !== pt && (s = void 0, h = [n]), r.rejectWith(s, h))
                                            }
                                        };
                                    t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var e = 0;
                            return i.Deferred(function(n) {
                                u[0][3].add(o(0, n, i.isFunction(f) ? f : nt, n.notifyWith));
                                u[1][3].add(o(0, n, i.isFunction(t) ? t : nt));
                                u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, f) : f
                        }
                    },
                    r = {};
                return i.each(u, function(n, t) {
                    var i = t[2],
                        o = t[5];
                    f[t[1]] = i.add;
                    o && i.add(function() {
                        e = o
                    }, u[3 - n][2].disable, u[0][2].lock);
                    i.add(t[3].fire);
                    r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    };
                    r[t[0] + "With"] = i.fireWith
                }), f.promise(r), t && t.call(r, r), r
            },
            when: function(n) {
                var f = arguments.length,
                    t = f,
                    e = Array(t),
                    u = w.call(arguments),
                    r = i.Deferred(),
                    o = function(n) {
                        return function(t) {
                            e[n] = this;
                            u[n] = arguments.length > 1 ? w.call(arguments) : t;
                            --f || r.resolveWith(e, u)
                        }
                    };
                if (f <= 1 && (vr(n, r.done(o(t)).resolve, r.reject, !f), "pending" === r.state() || i.isFunction(u[t] && u[t].then))) return r.then();
                while (t--) vr(u[t], o(t), r.reject);
                return r.promise()
            }
        });
        yr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        i.Deferred.exceptionHook = function(t, i) {
            n.console && n.console.warn && t && yr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
        };
        i.readyException = function(t) {
            n.setTimeout(function() {
                throw t;
            })
        };
        wt = i.Deferred();
        i.fn.ready = function(n) {
            return wt.then(n)["catch"](function(n) {
                i.readyException(n)
            }), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || wt.resolveWith(u, [i]))
            }
        });
        i.ready.then = wt.then;
        "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt));
        v = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) v(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        st = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        ht.uid = 1;
        ht.prototype = {
            cache: function(n) {
                var t = n[this.expando];
                return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(n, t, r) {
                var u, f = this.cache(n);
                if ("string" == typeof t) f[i.camelCase(t)] = r;
                else
                    for (u in t) f[i.camelCase(u)] = t[u];
                return f
            },
            get: function(n, t) {
                return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
            },
            access: function(n, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
            },
            remove: function(n, t) {
                var u, r = n[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t)
                        for (Array.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = (t in r) ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                    (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
                }
            },
            hasData: function(n) {
                var t = n[this.expando];
                return void 0 !== t && !i.isEmptyObject(t)
            }
        };
        var r = new ht,
            e = new ht,
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ie = /[A-Z]/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), pr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    e.set(this, n)
                }) : v(this, function(t) {
                    var i;
                    if (u && void 0 === t) {
                        if ((i = e.get(u, n), void 0 !== i) || (i = pr(u, n), void 0 !== i)) return i
                    } else this.each(function() {
                        e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var wr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ct = new RegExp("^(?:([+-])=|)(" + wr + ")([a-z%]*)$", "i"),
            b = ["Top", "Right", "Bottom", "Left"],
            kt = function(n, t) {
                return n = t || n, "none" === n.style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
            },
            br = function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            };
        si = {};
        i.fn.extend({
            show: function() {
                return tt(this, !0)
            },
            hide: function() {
                return tt(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    kt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        var dr = /^(?:checkbox|radio)$/i,
            gr = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            nu = /^$|\/(?:java|ecma)script/i,
            c = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        tu = /<|&#?\w+;/;
        ! function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        var dt = u.documentElement,
            fe = /^key/,
            ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ru = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                        }), t = (t || "").match(h) || [""], b = t.length; b--;) w = ru.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;)
                        if (c = ru.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                            for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                            k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                        } else
                            for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                    i.isEmptyObject(v) && r.remove(n, "handle events")
                }
            },
            dispatch: function(n) {
                var t = i.event.fix(n),
                    u, c, s, e, f, l, h = new Array(arguments.length),
                    a = (r.get(this, "events") || {})[t.type] || [],
                    o = i.event.special[t.type] || {};
                for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
                if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                    for (l = i.event.handlers.call(this, t, a), u = 0;
                        (e = l[u++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return o.postDispatch && o.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(n, t) {
                var f, e, u, o, s, c = [],
                    h = t.delegateCount,
                    r = n.target;
                if (h && r.nodeType && !("click" === n.type && n.button >= 1))
                    for (; r !== this; r = r.parentNode || this)
                        if (1 === r.nodeType && ("click" !== n.type || r.disabled !== !0)) {
                            for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", void 0 === s[u] && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                            o.length && c.push({
                                elem: r,
                                handlers: o
                            })
                        }
                return r = this, h < t.length && c.push({
                    elem: r,
                    handlers: t.slice(h)
                }), c
            },
            addProp: function(n, t) {
                Object.defineProperty(i.Event.prototype, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: i.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[n]
                    },
                    set: function(t) {
                        Object.defineProperty(this, n, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(n) {
                return n[i.expando] ? n : new i.Event(n)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== uu() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === uu() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(n) {
                        return l(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i)
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? gt : it, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: it,
            isPropagationStopped: it,
            isImmediatePropagationStopped: it,
            isSimulated: !1,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = gt;
                n && !this.isSimulated && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = gt;
                n && !this.isSimulated && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = gt;
                n && !this.isSimulated && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(n) {
                var t = n.button;
                return null == n.which && fe.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && ee.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
            }
        }, i.event.addProp);
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.fn.extend({
            on: function(n, t, i, r) {
                return ci(this, n, t, i, r)
            },
            one: function(n, t, i, r) {
                return ci(this, n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            }
        });
        var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            se = /<script|<style|<link/i,
            he = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ce = /^true\/(.*)/,
            le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function(n) {
                return n.replace(oe, "<$1><\/$2>")
            },
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ye(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) eu(s[u], e[u]);
                    else eu(n, h);
                return e = o(h, "script"), e.length > 0 && hi(e, !l && o(n, "script")), h
            },
            cleanData: function(n) {
                for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                    if (st(t)) {
                        if (u = t[r.expando]) {
                            if (u.events)
                                for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                            t[r.expando] = void 0
                        }
                        t[e.expando] && (t[e.expando] = void 0)
                    }
            }
        });
        i.fn.extend({
            detach: function(n) {
                return ou(this, n, !0)
            },
            remove: function(n) {
                return ou(this, n)
            },
            text: function(n) {
                return v(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return rt(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = fu(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return rt(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = fu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return rt(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return rt(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = null != n && n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return v(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !se.test(n) && !c[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; r < u; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return rt(this, arguments, function(t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
                }, n)
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, 
        function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ui.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        var su = /^margin/,
            li = new RegExp("^(" + wr + ")(?!px)[a-z%]+$", "i"),
            ni = function(t) {
                var i = t.ownerDocument.defaultView;
                return i && i.opener || (i = n), i.getComputedStyle(t)
            };
        ! function() {
            function r() {
                if (t) {
                    t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    t.innerHTML = "";
                    dt.appendChild(e);
                    var i = n.getComputedStyle(t);
                    o = "1%" !== i.top;
                    c = "2px" === i.marginLeft;
                    s = "4px" === i.width;
                    t.style.marginRight = "50%";
                    h = "4px" === i.marginRight;
                    dt.removeChild(e);
                    t = null
                }
            }
            var o, s, h, c, e = u.createElement("div"),
                t = u.createElement("div");
            t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
                pixelPosition: function() {
                    return r(), o
                },
                boxSizingReliable: function() {
                    return r(), s
                },
                pixelMarginRight: function() {
                    return r(), h
                },
                reliableMarginLeft: function() {
                    return r(), c
                }
            }))
        }();
        var pe = /^(none|table(?!-c[ea]).+)/,
            cu = /^--/,
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            lu = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            au = ["Webkit", "Moz", "ms"],
            vu = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = lt(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var e, s, o, c = i.camelCase(t),
                        l = cu.test(t),
                        h = n.style;
                    return l || (t = yu(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : h[t] : (s = typeof r, "string" === s && (e = ct.exec(r)) && e[1] && (r = kr(n, t, e), s = "number"), null != r && r === r && ("number" === s && (r += e && e[3] || (i.cssNumber[c] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (h[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? h.setProperty(t, r) : h[t] = r)), void 0)
                }
            },
            css: function(n, t, r, u) {
                var f, o, e, s = i.camelCase(t),
                    h = cu.test(t);
                return h || (t = yu(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = lt(n, t, u)), "normal" === f && t in lu && (f = lu[t]), "" === r || r ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return !pe.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? bu(n, t, u) : br(n, we, function() {
                        return bu(n, t, u)
                    })
                },
                set: function(n, r, u) {
                    var f, e = u && ni(n),
                        o = u && wu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                    return o && (f = ct.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), pu(n, r, o)
                }
            }
        });
        i.cssHooks.marginLeft = hu(f.reliableMarginLeft, function(n, t) {
            if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - br(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            su.test(n) || (i.cssHooks[n + t].set = pu)
        });
        i.fn.extend({
            css: function(n, t) {
                return v(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (Array.isArray(t)) {
                        for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            },
            _default: "swing"
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        ku = /^(?:toggle|show|hide)$/;
        du = /queueHooks$/;
        i.Animation = i.extend(a, {
            tweeners: {
                "*": [function(n, t) {
                    var i = this.createTween(n, t);
                    return kr(i.elem, n, ct.exec(t), i), i
                }]
            },
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
                for (var r, u = 0, f = n.length; u < f; u++) r = n[u], a.tweeners[r] = a.tweeners[r] || [], a.tweeners[r].unshift(t)
            },
            prefilters: [ke],
            prefilter: function(n, t) {
                t ? a.prefilters.unshift(n) : a.prefilters.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return i.fx.off ? u.duration = 0 : "number" != typeof u.duration && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(kt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = a(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && du.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    !s && u || i.dequeue(this, n)
                })
            },
            // finish: function(n) {
            //     return n !== !1 && (n = n || "fx"), this.each(function() {
            //         var t, e = r.get(this),
            //             u = e[n + "queue"],
            //             o = e[n + "queueHooks"],
            //             f = i.timers,
            //             s = u ? u.length : 0;
            //         for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
            //         for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
            //         delete e.finish
            //     })
            // }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ii(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: ii("show"),
            slideUp: ii("hide"),
            slideToggle: ii("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (ut = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            ut = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            i.fx.start()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            ti || (ti = !0, ai())
        };
        i.fx.stop = function() {
            ti = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(t, r) {
                return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function() {
                        n.clearTimeout(u)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
        ft = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return v(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        // i.extend({
        //     attr: function(n, t, r) {
        //         var u, f, e = n.nodeType;
        //         if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? tf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
        //     },
        //     attrHooks: {
        //         type: {
        //             set: function(n, t) {
        //                 if (!f.radioValue && "radio" === t && l(n, "input")) {
        //                     var i = n.value;
        //                     return n.setAttribute("type", t), i && (n.value = i), t
        //                 }
        //             }
        //         }
        //     },
        //     // removeAttr: function(n, t) {
        //     //     var i, u = 0,
        //     //         r = t && t.match(h);
        //     //     if (r && 1 === n.nodeType)
        //     //         while (i = r[u++]) n.removeAttribute(i)
        //     // }
        // });
        tf = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        // i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        //     var r = ft[t] || i.find.attr;
        //     ft[t] = function(n, t, i) {
        //         var f, e, u = t.toLowerCase();
        //         return i || (e = ft[u], ft[u] = f, f = null != r(n, t, i) ? u : null, ft[u] = e), f
        //     }
        // });
        rf = /^(?:input|select|textarea|button)$/i;
        uf = /^(?:a|area)$/i;
        // i.fn.extend({
        //     prop: function(n, t) {
        //         return v(this, i.prop, n, t, arguments.length > 1)
        //     },
        //     removeProp: function(n) {
        //         return this.each(function() {
        //             delete this[i.propFix[n] || n]
        //         })
        //     }
        // });
        i.extend({
            prop: function(n, t, r) {
                var f, u, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : rf.test(n.nodeName) || uf.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        // f.optSelected || (i.propHooks.selected = {
        //     get: function(n) {
        //         var t = n.parentNode;
        //         return t && t.parentNode && t.parentNode.selectedIndex, null
        //     },
        //     set: function(n) {
        //         var t = n.parentNode;
        //         t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        //     }
        // });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, d(this)))
                });
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; t = this[c++];)
                        if (u = d(t), r = 1 === t.nodeType && " " + k(u) + " ") {
                            for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                            e = k(r);
                            u !== e && t.setAttribute("class", e)
                        }
                return this
            },
            removeClass: function(n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, d(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; r = this[c++];)
                        if (u = d(r), t = 1 === r.nodeType && " " + k(u) + " ") {
                            for (s = 0; f = o[s++];)
                                while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                            e = k(t);
                            u !== e && r.setAttribute("class", e)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, d(this), t), t)
                }) : this.each(function() {
                    var t, e, f, o;
                    if ("string" === u)
                        for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else void 0 !== n && "boolean" !== u || (t = d(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
                })
            },
            hasClass: function(n) {
                for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                    if (1 === t.nodeType && (" " + k(d(t)) + " ").indexOf(i) > -1) return !0;
                return !1
            }
        });
        ff = /\r/g;
        // i.fn.extend({
        //     val: function(n) {
        //         var t, r, f, u = this[0];
        //         return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
        //             var u;
        //             1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
        //                 return null == n ? "" : n + ""
        //             })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
        //         })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ff, "") : null == r ? "" : r)) : void 0
        //     }
        // });
        // i.extend({
        //     valHooks: {
        //         option: {
        //             get: function(n) {
        //                 var t = i.find.attr(n, "value");
        //                 return null != t ? t : k(i.text(n))
        //             }
        //         },
        //         select: {
        //             get: function(n) {
        //                 for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
        //                     if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
        //                         if (e = i(t).val(), f) return e;
        //                         s.push(e)
        //                     }
        //                 return s
        //             },
        //             set: function(n, t) {
        //                 for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
        //                 return u || (n.selectedIndex = -1), e
        //             }
        //         }
        //     }
        // });
        // i.each(["radio", "checkbox"], function() {
        //     i.valHooks[this] = {
        //         set: function(n, t) {
        //             if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
        //         }
        //     };
        //     f.checkOn || (i.valHooks[this].get = function(n) {
        //         return null === n.getAttribute("value") ? "on" : n.value
        //     })
        // });
        vi = /^(?:focusinfocus|focusoutblur)$/;
        // i.extend(i.event, {
        //     trigger: function(t, f, e, o) {
        //         var w, s, c, b, a, v, l, p = [e || u],
        //             h = yt.call(t, "type") ? t.type : t,
        //             y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
        //         if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !vi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
        //             if (!o && !l.noBubble && !i.isWindow(e)) {
        //                 for (b = l.delegateType || h, vi.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
        //                 c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
        //             }
        //             for (w = 0;
        //                 (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
        //             return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !st(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
        //         }
        //     },
        //     // simulate: function(n, t, r) {
        //     //     var u = i.extend(new i.Event, r, {
        //     //         type: n,
        //     //         isSimulated: !0
        //     //     });
        //     //     i.event.trigger(u, null, t)
        //     // }
        // });
        // i.fn.extend({
        //     trigger: function(n, t) {
        //         return this.each(function() {
        //             i.event.trigger(n, t, this)
        //         })
        //     },
        //     // triggerHandler: function(n, t) {
        //     //     var r = this[0];
        //     //     if (r) return i.event.trigger(n, t, r, !0)
        //     // }
        // });
        i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        // i.fn.extend({
        //     hover: function(n, t) {
        //         return this.mouseenter(n).mouseleave(t || n)
        //     }
        // });
        f.focusin = "onfocusin" in n;
        f.focusin || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n))
            };
            // i.event.special[t] = {
            //     setup: function() {
            //         var i = this.ownerDocument || this,
            //             f = r.access(i, t);
            //         f || i.addEventListener(n, u, !0);
            //         r.access(i, t, (f || 0) + 1)
            //     },
            //     teardown: function() {
            //         var i = this.ownerDocument || this,
            //             f = r.access(i, t) - 1;
            //         f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            //     }
            // }
        });
        var at = n.location,
            ef = i.now(),
            yi = /\?/;
        // i.parseXML = function(t) {
        //     var r;
        //     if (!t || "string" != typeof t) return null;
        //     try {
        //         r = (new n.DOMParser).parseFromString(t, "text/xml")
        //     } catch (u) {
        //         r = void 0
        //     }
        //     return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
        // };
        var ge = /\[\]$/,
            of = /\r?\n/g,
            no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        // i.param = function(n, t) {
        //     var r, u = [],
        //         f = function(n, t) {
        //             var r = i.isFunction(t) ? t() : t;
        //             u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r)
        //         };
        //     if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
        //         f(this.name, this.value)
        //     });
        //     else
        //         for (r in n) pi(r, n[r], t, f);
        //     return u.join("&")
        // };
        // i.fn.extend({
        //     serialize: function() {
        //         return i.param(this.serializeArray())
        //     },
        //     serializeArray: function() {
        //         return this.map(function() {
        //             var n = i.prop(this, "elements");
        //             return n ? i.makeArray(n) : this
        //         }).filter(function() {
        //             var n = this.type;
        //             return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !dr.test(n))
        //         }).map(function(n, t) {
        //             var r = i(this).val();
        //             return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
        //                 return {
        //                     name: t.name,
        //                     value: n.replace(of, "\r\n")
        //                 }
        //             }) : {
        //                 name: t.name,
        //                 value: r.replace(of, "\r\n")
        //             }
        //         }).get()
        //     }
        // });
        var io = /%20/g,
            ro = /#.*$/,
            uo = /([?&])_=[^&]*/,
            fo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            eo = /^(?:GET|HEAD)$/,
            oo = /^\/\//,
            sf = {},
            wi = {},
            hf = "*/".concat("*"),
            bi = u.createElement("a");
        return bi.href = at.href, i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: at.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": hf,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            // ajaxSetup: function(n, t) {
            //     return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
            // },
            ajaxPrefilter: cf(sf),
            ajaxTransport: cf(wi),
            // ajax: function(t, r) {
            //     function b(t, r, u, h) {
            //         var y, rt, g, p, b, l = r;
            //         s || (s = !0, d && n.clearTimeout(d), a = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || 304 === t, u && (p = so(f, e, u)), p = ho(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, g = p.error, y = !g)) : (g = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", y ? tt.resolveWith(c, [rt, l, e]) : tt.rejectWith(c, [e, l, g]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, l]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            //     }
            //     "object" == typeof t && (r = t, t = void 0);
            //     r = r || {};
            //     var a, o, k, y, d, l, s, v, g, p, f = i.ajaxSetup({}, r),
            //         c = f.context || f,
            //         nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
            //         tt = i.Deferred(),
            //         it = i.Callbacks("once memory"),
            //         w = f.statusCode || {},
            //         rt = {},
            //         ut = {},
            //         ft = "canceled",
            //         e = {
            //             readyState: 0,
            //             getResponseHeader: function(n) {
            //                 var t;
            //                 if (s) {
            //                     if (!y)
            //                         for (y = {}; t = fo.exec(k);) y[t[1].toLowerCase()] = t[2];
            //                     t = y[n.toLowerCase()]
            //                 }
            //                 return null == t ? null : t
            //             },
            //             getAllResponseHeaders: function() {
            //                 return s ? k : null
            //             },
            //             setRequestHeader: function(n, t) {
            //                 return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
            //             },
            //             overrideMimeType: function(n) {
            //                 return null == s && (f.mimeType = n), this
            //             },
            //             statusCode: function(n) {
            //                 var t;
            //                 if (n)
            //                     if (s) e.always(n[e.status]);
            //                     else
            //                         for (t in n) w[t] = [w[t], n[t]];
            //                 return this
            //             },
            //             abort: function(n) {
            //                 var t = n || ft;
            //                 return a && a.abort(t), b(0, t), this
            //             }
            //         };
            //     if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(oo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
            //         l = u.createElement("a");
            //         try {
            //             l.href = f.url;
            //             l.href = l.href;
            //             f.crossDomain = bi.protocol + "//" + bi.host != l.protocol + "//" + l.host
            //         } catch (et) {
            //             f.crossDomain = !0
            //         }
            //     }
            //     if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), lf(sf, f, r, e), s) return e;
            //     v = i.event && f.global;
            //     v && 0 == i.active++ && i.event.trigger("ajaxStart");
            //     f.type = f.type.toUpperCase();
            //     f.hasContent = !eo.test(f.type);
            //     o = f.url.replace(ro, "");
            //     f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(io, "+")) : (p = f.url.slice(o.length), f.data && (o += (yi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(uo, "$1"), p = (yi.test(o) ? "&" : "?") + "_=" + ef++ + p), f.url = o + p);
            //     f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            //     (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            //     e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + hf + "; q=0.01" : "") : f.accepts["*"]);
            //     for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            //     if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            //     if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), a = lf(wi, f, r, e)) {
            //         if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
            //         f.async && f.timeout > 0 && (d = n.setTimeout(function() {
            //             e.abort("timeout")
            //         }, f.timeout));
            //         try {
            //             s = !1;
            //             a.send(rt, b)
            //         } catch (et) {
            //             if (s) throw et;
            //             b(-1, et)
            //         }
            //     } else b(-1, "No Transport");
            //     return e
            // },
            // getJSON: function(n, t, r) {
            //     return i.get(n, t, r, "json")
            // },
            // getScript: function(n, t) {
            //     return i.get(n, void 0, t, "script")
            // }
        }), 
        // i.each(["get", "post"], function(n, t) {
        //     i[t] = function(n, r, u, f) {
        //         return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
        //             url: n,
        //             type: t,
        //             dataType: f,
        //             data: r,
        //             success: u
        //         }, i.isPlainObject(n) && n))
        //     }
        // }), 
        // i._evalUrl = function(n) {
        //     return i.ajax({
        //         url: n,
        //         type: "GET",
        //         dataType: "script",
        //         cache: !0,
        //         async: !1,
        //         global: !1,
        //         throws: !0
        //     })
        // }, 
        i.fn.extend({
            wrapAll: function(n) {
                var t;
                return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this
            },
            // wrapInner: function(n) {
            //     return i.isFunction(n) ? this.each(function(t) {
            //         i(this).wrapInner(n.call(this, t))
            //     }) : this.each(function() {
            //         var t = i(this),
            //             r = t.contents();
            //         r.length ? r.wrapAll(n) : t.append(n)
            //     })
            // },
            // wrap: function(n) {
            //     var t = i.isFunction(n);
            //     return this.each(function(r) {
            //         i(this).wrapAll(t ? n.call(this, r) : n)
            //     })
            // },
            // unwrap: function(n) {
            //     return this.parent(n).not("body").each(function() {
            //         i(this).replaceWith(this.childNodes)
            //     }), this
            // }
        }), 
        i.expr.pseudos.hidden = function(n) {
            return !i.expr.pseudos.visible(n)
        }, i.expr.pseudos.visible = function(n) {
            return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
        }, i.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }, af = {
            0: 200,
            1223: 204
        }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
            var i, r;
            if (f.cors || et && !t.crossDomain) return {
                // send: function(u, f) {
                //     var o, e = t.xhr();
                //     if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                //         for (o in t.xhrFields) e[o] = t.xhrFields[o];
                //     t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                //     t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                //     for (o in u) e.setRequestHeader(o, u[o]);
                //     i = function(n) {
                //         return function() {
                //             i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(af[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                //                 binary: e.response
                //             } : {
                //                 text: e.responseText
                //             }, e.getAllResponseHeaders()))
                //         }
                //     };
                //     e.onload = i();
                //     r = e.onerror = i("error");
                //     // void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                //     //     4 === e.readyState && n.setTimeout(function() {
                //     //         i && r()
                //     //     })
                //     // };
                //     i = i("abort");
                //     try {
                //         e.send(t.hasContent && t.data || null)
                //     } catch (s) {
                //         if (i) throw s;
                //     }
                // },
                // abort: function() {
                //     i && i()
                // }
            }
        }), i.ajaxPrefilter(function(n) {
            n.crossDomain && (n.contents.script = !1)
        }), 
        // i.ajaxSetup({
        //     accepts: {
        //         script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        //     },
        //     contents: {
        //         script: /\b(?:java|ecma)script\b/
        //     },
        //     converters: {
        //         "text script": function(n) {
        //             return i.globalEval(n), n
        //         }
        //     }
        // }), 
        // i.ajaxPrefilter("script", function(n) {
        //     void 0 === n.cache && (n.cache = !1);
        //     n.crossDomain && (n.type = "GET")
        // }), 
        // i.ajaxTransport("script", function(n) {
        //     if (n.crossDomain) {
        //         var r, t;
        //         return {
        //             send: function(f, e) {
        //                 r = i("<script>").prop({
        //                     charset: n.scriptCharset,
        //                     src: n.url
        //                 }).on("load error", t = function(n) {
        //                     r.remove();
        //                     t = null;
        //                     n && e("error" === n.type ? 404 : 200, n.type)
        //                 });
        //                 u.head.appendChild(r[0])
        //             },
        //             abort: function() {
        //                 t && t()
        //             }
        //         }
        //     }
        // }), 
        // di = [], ri = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        //     jsonp: "callback",
        //     jsonpCallback: function() {
        //         var n = di.pop() || i.expando + "_" + ef++;
        //         return this[n] = !0, n
        //     }
        // }), 
        // i.ajaxPrefilter("json jsonp", function(t, r, u) {
        //     var f, e, o, s = t.jsonp !== !1 && (ri.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ri.test(t.data) && "data");
        //     if (s || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ri, "$1" + f) : t.jsonp !== !1 && (t.url += (yi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
        //         return o || i.error(f + " was not called"), o[0]
        //     }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
        //         o = arguments
        //     }, u.always(function() {
        //         void 0 === e ? i(n).removeProp(f) : n[f] = e;
        //         t[f] && (t.jsonpCallback = r.jsonpCallback, di.push(f));
        //         o && i.isFunction(e) && e(o[0]);
        //         o = e = void 0
        //     }), "script"
        // }), f.createHTMLDocument = function() {
        //     var n = u.implementation.createHTMLDocument("").body;
        //     return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length
        // }(), 
        // i.parseHTML = function(n, t, r) {
        //     if ("string" != typeof n) return [];
        //     "boolean" == typeof t && (r = t, t = !1);
        //     var s, e, o;
        //     return t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = ei.exec(n), o = !r && [], e ? [t.createElement(e[1])] : (e = iu([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
        // }, 
        // i.fn.load = function(n, t, r) {
        //     var u, o, s, f = this,
        //         e = n.indexOf(" ");
        //     return e > -1 && (u = k(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
        //         url: n,
        //         type: o || "GET",
        //         dataType: "html",
        //         data: t
        //     }).done(function(n) {
        //         s = arguments;
        //         f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        //     }).always(r && function(n, t) {
        //         f.each(function() {
        //             r.apply(this, s || [n.responseText, t, n])
        //         })
        //     }), this
        // }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        //     i.fn[t] = function(n) {
        //         return this.on(t, n)
        //     }
        // }), i.expr.pseudos.animated = function(n) {
        //     return i.grep(i.timers, function(t) {
        //         return n === t.elem
        //     }).length
        // }, 
        i.offset = {
            // setOffset: function(n, t, r) {
            //     var e, o, s, h, u, c, v, l = i.css(n, "position"),
            //         a = i(n),
            //         f = {};
            //     "static" === l && (n.style.position = "relative");
            //     u = a.offset();
            //     s = i.css(n, "top");
            //     c = i.css(n, "left");
            //     v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            //     v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            //     i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            //     null != t.top && (f.top = t.top - u.top + h);
            //     null != t.left && (f.left = t.left - u.left + o);
            //     "using" in t ? t.using.call(n, f) : a.css(f)
            // }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var r, u, f, e, t = this[0];
                if (t) return t.getClientRects().length ? (f = t.getBoundingClientRect(), r = t.ownerDocument, u = r.documentElement, e = r.defaultView, {
                    top: f.top + e.pageYOffset - u.clientTop,
                    left: f.left + e.pageXOffset - u.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            // position: function() {
            //     if (this[0]) {
            //         var t, r, u = this[0],
            //             n = {
            //                 top: 0,
            //                 left: 0
            //             };
            //         return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
            //             top: n.top + i.css(t[0], "borderTopWidth", !0),
            //             left: n.left + i.css(t[0], "borderLeftWidth", !0)
            //         }), {
            //             top: r.top - n.top - i.css(u, "marginTop", !0),
            //             left: r.left - n.left - i.css(u, "marginLeft", !0)
            //         }
            //     }
            // },
            // offsetParent: function() {
            //     return this.map(function() {
            //         for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
            //         return n || dt
            //     })
            // }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = "pageYOffset" === t;
            i.fn[n] = function(u) {
                return v(this, function(n, u, f) {
                    var e;
                    return i.isWindow(n) ? e = n : 9 === n.nodeType && (e = n.defaultView), void 0 === f ? e ? e[t] : n[u] : void(e ? e.scrollTo(r ? e.pageXOffset : f, r ? f : e.pageYOffset) : n[u] = f)
                }, n, u, arguments.length)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = hu(f.pixelPosition, function(n, r) {
                if (r) return r = lt(n, t), li.test(r) ? i(n).position()[t] + "px" : r
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(f, e) {
                    var o = arguments.length && (r || "boolean" != typeof f),
                        s = r || (f === !0 || e === !0 ? "margin" : "border");
                    return v(this, function(t, r, f) {
                        var e;
                        return i.isWindow(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                    }, t, o ? f : void 0, o)
                }
            })
        }), i.fn.extend({
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        }), i.holdReady = function(n) {
            n ? i.readyWait++ : i.ready(!0)
        }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), vf = n.jQuery, yf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = yf), t && n.jQuery === i && (n.jQuery = vf), i
        }, t || (n.jQuery = n.$ = i), i
    }), 
    function(n) {
        // function rt(t) {
        //     return t && t.allowPageScroll === undefined && (t.swipe !== undefined || t.swipeStatus !== undefined) && (t.allowPageScroll = v), t.click !== undefined && t.tap === undefined && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipe.defaults, t), this.each(function() {
        //         var r = n(this),
        //             i = r.data(h);
        //         i || (i = new ut(this, t), r.data(h, i))
        //     })
        // }

        // function ut(rt, ut) {
        //     function wi(t) {
        //         if (!cu() && !(n(t.target).closest(ut.excludedElements, ft).length > 0)) {
        //             var u = t.originalEvent ? t.originalEvent : t,
        //                 f, e = r ? u.touches[0] : u;
        //             if (et = tt, r ? ot = u.touches.length : t.preventDefault(), ht = 0, ct = null, pt = null, st = 0, wt = 0, bt = 0, at = 1, yt = 0, lt = au(), vi = yu(), yr(), !r || ot === ut.fingers || ut.fingers === c || ii() ? (ir(0, e), yi = dt(), ot == 2 && (ir(1, u.touches[1]), wt = bt = rr(lt[0].start, lt[1].start)), (ut.swipeStatus || ut.pinchStatus) && (f = vt(u, et))) : f = !1, f === !1) return et = i, vt(u, et), f;
        //             hi(!0)
        //         }
        //     }

        //     // function bi(n) {
        //     //     var u = n.originalEvent ? n.originalEvent : n,
        //     //         o, h, f, e, l;
        //     //     et === t || et === i || pr() || (h = r ? u.touches[0] : u, f = wr(h), ei = dt(), r && (ot = u.touches.length), et = s, ot == 2 && (wt == 0 ? (ir(1, u.touches[1]), wt = bt = rr(lt[0].start, lt[1].start)) : (wr(u.touches[1]), bt = rr(lt[0].end, lt[1].end), pt = wu(lt[0].end, lt[1].end)), at = pu(wt, bt), yt = Math.abs(wt - bt)), ot === ut.fingers || ut.fingers === c || !r || ii() ? (ct = du(f.start, f.end), gr(n, ct), ht = bu(f.start, f.end), st = kr(), vu(ct, ht), (ut.swipeStatus || ut.pinchStatus) && (o = vt(u, et)), (!ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) && (e = !0, ut.triggerOnTouchLeave && (l = gu(this), e = nf(f.end, l)), !ut.triggerOnTouchEnd && e ? et = gi(s) : ut.triggerOnTouchLeave && !e && (et = gi(t)), (et == i || et == t) && vt(u, et))) : (et = i, vt(u, et)), o === !1 && (et = i, vt(u, et)))
        //     // }

        //     // function ki(n) {
        //     //     var u = n.originalEvent;
        //     //     if (r && u.touches.length > 0) return hu(), !0;
        //     //     pr() && (ot = pi);
        //     //     n.preventDefault();
        //     //     ei = dt();
        //     //     st = kr();
        //     //     nr() ? (et = i, vt(u, et)) : ut.triggerOnTouchEnd || ut.triggerOnTouchEnd == !1 && et === s ? (et = t, vt(u, et)) : !ut.triggerOnTouchEnd && ar() ? (et = t, ti(u, et, y)) : et === s && (et = i, vt(u, et));
        //     //     hi(!1)
        //     // }

        //     // function ni() {
        //     //     ot = 0;
        //     //     ei = 0;
        //     //     yi = 0;
        //     //     wt = 0;
        //     //     bt = 0;
        //     //     at = 1;
        //     //     yr();
        //     //     hi(!1)
        //     // }

        //     // function di(n) {
        //     //     var i = n.originalEvent;
        //     //     ut.triggerOnTouchLeave && (et = gi(t), vt(i, et))
        //     // }

        //     // function ur() {
        //     //     ft.unbind(ui, wi);
        //     //     ft.unbind(fi, ni);
        //     //     ft.unbind(li, bi);
        //     //     ft.unbind(ai, ki);
        //     //     gt && ft.unbind(gt, di);
        //     //     hi(!1)
        //     // }

        //     // function gi(n) {
        //     //     var r = n,
        //     //         f = er(),
        //     //         u = fr(),
        //     //         e = nr();
        //     //     return !f || e ? r = i : u && n == s && (!ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) ? r = t : !u && n == t && ut.triggerOnTouchLeave && (r = i), r
        //     // }

        //     // function vt(n, u) {
        //     //     var f = undefined;
        //     //     return tu() || hr() ? f = ti(n, u, k) : (nu() || ii()) && f !== !1 && (f = ti(n, u, d)), ou() && f !== !1 ? f = ti(n, u, g) : su() && f !== !1 ? f = ti(n, u, nt) : eu() && f !== !1 && (f = ti(n, u, y)), u === i && ni(n), u === t && (r ? n.touches.length == 0 && ni(n) : ni(n)), f
        //     // }

        //     // function ti(r, s, h) {
        //     //     var c = undefined;
        //     //     if (h == k) {
        //     //         if (ft.trigger("swipeStatus", [s, ct || null, ht || 0, st || 0, ot]), ut.swipeStatus && (c = ut.swipeStatus.call(ft, r, s, ct || null, ht || 0, st || 0, ot), c === !1)) return !1;
        //     //         if (s == t && sr()) {
        //     //             if (ft.trigger("swipe", [ct, ht, st, ot]), ut.swipe && (c = ut.swipe.call(ft, r, ct, ht, st, ot), c === !1)) return !1;
        //     //             switch (ct) {
        //     //                 case u:
        //     //                     ft.trigger("swipeLeft", [ct, ht, st, ot]);
        //     //                     ut.swipeLeft && (c = ut.swipeLeft.call(ft, r, ct, ht, st, ot));
        //     //                     break;
        //     //                 case f:
        //     //                     ft.trigger("swipeRight", [ct, ht, st, ot]);
        //     //                     ut.swipeRight && (c = ut.swipeRight.call(ft, r, ct, ht, st, ot));
        //     //                     break;
        //     //                 case e:
        //     //                     ft.trigger("swipeUp", [ct, ht, st, ot]);
        //     //                     ut.swipeUp && (c = ut.swipeUp.call(ft, r, ct, ht, st, ot));
        //     //                     break;
        //     //                 case o:
        //     //                     ft.trigger("swipeDown", [ct, ht, st, ot]);
        //     //                     ut.swipeDown && (c = ut.swipeDown.call(ft, r, ct, ht, st, ot))
        //     //             }
        //     //         }
        //     //     }
        //     //     if (h == d) {
        //     //         if (ft.trigger("pinchStatus", [s, pt || null, yt || 0, st || 0, ot, at]), ut.pinchStatus && (c = ut.pinchStatus.call(ft, r, s, pt || null, yt || 0, st || 0, ot, at), c === !1)) return !1;
        //     //         if (s == t && or()) switch (pt) {
        //     //             case l:
        //     //                 ft.trigger("pinchIn", [pt || null, yt || 0, st || 0, ot, at]);
        //     //                 ut.pinchIn && (c = ut.pinchIn.call(ft, r, pt || null, yt || 0, st || 0, ot, at));
        //     //                 break;
        //     //             case a:
        //     //                 ft.trigger("pinchOut", [pt || null, yt || 0, st || 0, ot, at]);
        //     //                 ut.pinchOut && (c = ut.pinchOut.call(ft, r, pt || null, yt || 0, st || 0, ot, at))
        //     //         }
        //     //     }
        //     //     return h == y ? (s === i || s === t) && (clearTimeout(si), tr() && !ru() ? (kt = dt(), si = setTimeout(n.proxy(function() {
        //     //         kt = null;
        //     //         ft.trigger("tap", [r.target]);
        //     //         ut.tap && (c = ut.tap.call(ft, r, r.target))
        //     //     }, this), ut.doubleTapThreshold)) : (kt = null, ft.trigger("tap", [r.target]), ut.tap && (c = ut.tap.call(ft, r, r.target)))) : h == g ? (s === i || s === t) && (clearTimeout(si), kt = null, ft.trigger("doubletap", [r.target]), ut.doubleTap && (c = ut.doubleTap.call(ft, r, r.target))) : h == nt && (s === i || s === t) && (clearTimeout(si), kt = null, ft.trigger("longtap", [r.target]), ut.longTap && (c = ut.longTap.call(ft, r, r.target))), c
        //     // }

        //     // function fr() {
        //     //     var n = !0;
        //     //     return ut.threshold !== null && (n = ht >= ut.threshold), n
        //     // }

        //     // function nr() {
        //     //     var n = !1;
        //     //     return ut.cancelThreshold !== null && ct !== null && (n = br(ct) - ht >= ut.cancelThreshold), n
        //     // }

        //     // function dr() {
        //     //     return ut.pinchThreshold !== null ? yt >= ut.pinchThreshold : !0
        //     // }

        //     // function er() {
        //     //     return ut.maxTimeThreshold ? st >= ut.maxTimeThreshold ? !1 : !0 : !0
        //     // }

        //     // function gr(n, t) {
        //     //     if (ut.allowPageScroll === v || ii()) n.preventDefault();
        //     //     else {
        //     //         var i = ut.allowPageScroll === b;
        //     //         switch (t) {
        //     //             case u:
        //     //                 (ut.swipeLeft && i || !i && ut.allowPageScroll != p) && n.preventDefault();
        //     //                 break;
        //     //             case f:
        //     //                 (ut.swipeRight && i || !i && ut.allowPageScroll != p) && n.preventDefault();
        //     //                 break;
        //     //             case e:
        //     //                 (ut.swipeUp && i || !i && ut.allowPageScroll != w) && n.preventDefault();
        //     //                 break;
        //     //             case o:
        //     //                 (ut.swipeDown && i || !i && ut.allowPageScroll != w) && n.preventDefault()
        //     //         }
        //     //     }
        //     // }

        //     // function or() {
        //     //     var n = cr(),
        //     //         t = lr(),
        //     //         i = dr();
        //     //     return n && t && i
        //     // }

        //     // function ii() {
        //     //     return !!(ut.pinchStatus || ut.pinchIn || ut.pinchOut)
        //     // }

        //     // function nu() {
        //     //     return !!(or() && ii())
        //     // }

        //     // function sr() {
        //     //     var n = er(),
        //     //         t = fr(),
        //     //         i = cr(),
        //     //         r = lr(),
        //     //         u = nr();
        //     //     return !u && r && i && t && n
        //     // }

        //     // function hr() {
        //     //     return !!(ut.swipe || ut.swipeStatus || ut.swipeLeft || ut.swipeRight || ut.swipeUp || ut.swipeDown)
        //     // }

        //     // function tu() {
        //     //     return !!(sr() && hr())
        //     // }

        //     // function cr() {
        //     //     return ot === ut.fingers || ut.fingers === c || !r
        //     // }

        //     // function lr() {
        //     //     return lt[0].end.x !== 0
        //     // }

        //     // function ar() {
        //     //     return !!ut.tap
        //     // }

        //     // function tr() {
        //     //     return !!ut.doubleTap
        //     // }

        //     // function iu() {
        //     //     return !!ut.longTap
        //     // }

        //     // function vr() {
        //     //     if (kt == null) return !1;
        //     //     var n = dt();
        //     //     return tr() && n - kt <= ut.doubleTapThreshold
        //     // }

        //     // function ru() {
        //     //     return vr()
        //     // }

        //     // function uu() {
        //     //     return (ot === 1 || !r) && (isNaN(ht) || ht === 0)
        //     // }

        //     // function fu() {
        //     //     return st > ut.longTapThreshold && ht < it
        //     // }

        //     // function eu() {
        //     //     return !!(uu() && ar())
        //     // }

        //     // function ou() {
        //     //     return !!(vr() && tr())
        //     // }

        //     // function su() {
        //     //     return !!(fu() && iu())
        //     // }

        //     // function hu() {
        //     //     oi = dt();
        //     //     pi = event.touches.length + 1
        //     // }

        //     // function yr() {
        //     //     oi = 0;
        //     //     pi = 0
        //     // }

        //     // function pr() {
        //     //     var n = !1,
        //     //         t;
        //     //     return oi && (t = dt() - oi, t <= ut.fingerReleaseThreshold && (n = !0)), n
        //     // }

        //     // function cu() {
        //     //     return !!(ft.data(h + "_intouch") === !0)
        //     // }

        //     // function hi(n) {
        //     //     n === !0 ? (ft.bind(li, bi), ft.bind(ai, ki), gt && ft.bind(gt, di)) : (ft.unbind(li, bi, !1), ft.unbind(ai, ki, !1), gt && ft.unbind(gt, di, !1));
        //     //     ft.data(h + "_intouch", n === !0)
        //     // }

        //     // function ir(n, t) {
        //     //     var i = t.identifier !== undefined ? t.identifier : 0;
        //     //     return lt[n].identifier = i, lt[n].start.x = lt[n].end.x = t.pageX || t.clientX, lt[n].start.y = lt[n].end.y = t.pageY || t.clientY, lt[n]
        //     // }

        //     // function wr(n) {
        //     //     var i = n.identifier !== undefined ? n.identifier : 0,
        //     //         t = lu(i);
        //     //     return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t
        //     // }

        //     // function lu(n) {
        //     //     for (var t = 0; t < lt.length; t++)
        //     //         if (lt[t].identifier == n) return lt[t]
        //     // }

        //     // function au() {
        //     //     for (var n = [], t = 0; t <= 5; t++) n.push({
        //     //         start: {
        //     //             x: 0,
        //     //             y: 0
        //     //         },
        //     //         end: {
        //     //             x: 0,
        //     //             y: 0
        //     //         },
        //     //         identifier: 0
        //     //     });
        //     //     return n
        //     // }

        //     // function vu(n, t) {
        //     //     t = Math.max(t, br(n));
        //     //     vi[n].distance = t
        //     // }

        //     // function br(n) {
        //     //     return vi[n].distance
        //     // }

        //     // function yu() {
        //     //     var n = {};
        //     //     return n[u] = ci(u), n[f] = ci(f), n[e] = ci(e), n[o] = ci(o), n
        //     // }

        //     // function ci(n) {
        //     //     return {
        //     //         direction: n,
        //     //         distance: 0
        //     //     }
        //     // }

        //     // function kr() {
        //     //     return ei - yi
        //     // }

        //     // function rr(n, t) {
        //     //     var i = Math.abs(n.x - t.x),
        //     //         r = Math.abs(n.y - t.y);
        //     //     return Math.round(Math.sqrt(i * i + r * r))
        //     // }

        //     // function pu(n, t) {
        //     //     var i = t / n * 1;
        //     //     return i.toFixed(2)
        //     // }

        //     // function wu() {
        //     //     return at < 1 ? a : l
        //     // }

        //     // function bu(n, t) {
        //     //     return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)))
        //     // }

        //     // function ku(n, t) {
        //     //     var r = n.x - t.x,
        //     //         u = t.y - n.y,
        //     //         f = Math.atan2(u, r),
        //     //         i = Math.round(f * 180 / Math.PI);
        //     //     return i < 0 && (i = 360 - Math.abs(i)), i
        //     // }

        //     // function du(n, t) {
        //     //     var i = ku(n, t);
        //     //     return i <= 45 && i >= 0 ? u : i <= 360 && i >= 315 ? u : i >= 135 && i <= 225 ? f : i > 45 && i < 135 ? o : e
        //     // }

        //     // function dt() {
        //     //     var n = new Date;
        //     //     return n.getTime()
        //     // }

        //     // function gu(t) {
        //     //     t = n(t);
        //     //     var i = t.offset();
        //     //     return {
        //     //         left: i.left,
        //     //         right: i.left + t.outerWidth(),
        //     //         top: i.top,
        //     //         bottom: i.top + t.outerHeight()
        //     //     }
        //     // }

        //     // function nf(n, t) {
        //     //     return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom
        //     // }
        //     var ri = r || !ut.fallbackToMouseEvents,
        //         ui = ri ? "touchstart" : "mousedown",
        //         li = ri ? "touchmove" : "mousemove",
        //         ai = ri ? "touchend" : "mouseup",
        //         gt = ri ? null : "mouseleave",
        //         fi = "touchcancel",
        //         ht = 0,
        //         ct = null,
        //         st = 0,
        //         wt = 0,
        //         bt = 0,
        //         at = 1,
        //         yt = 0,
        //         pt = 0,
        //         vi = null,
        //         ft = n(rt),
        //         et = "start",
        //         ot = 0,
        //         lt = null,
        //         yi = 0,
        //         ei = 0,
        //         oi = 0,
        //         pi = 0,
        //         kt = 0,
        //         si = null;
        //     try {
        //         ft.bind(ui, wi);
        //         ft.bind(fi, ni)
        //     } catch (tf) {
        //         n.error("events not supported " + ui + "," + fi + " on jQuery.swipe")
        //     }
        //     this.enable = function() {
        //         return ft.bind(ui, wi), ft.bind(fi, ni), ft
        //     };
        //     this.disable = function() {
        //         return ur(), ft
        //     };
        //     this.destroy = function() {
        //         return ur(), ft.data(h, null), ft
        //     };
        //     this.option = function(t, i) {
        //         if (ut[t] !== undefined) {
        //             if (i === undefined) return ut[t];
        //             ut[t] = i
        //         } else n.error("Option " + t + " does not exist on jQuery.swipe.options")
        //     }
        // }
        var u = "left",
            f = "right",
            e = "up",
            o = "down",
            l = "in",
            a = "out",
            v = "none",
            b = "auto",
            k = "swipe",
            d = "pinch",
            y = "tap",
            g = "doubletap",
            nt = "longtap",
            p = "horizontal",
            w = "vertical",
            c = "all",
            it = 10,
            tt = "start",
            s = "move",
            t = "end",
            i = "cancel",
            r = "ontouchstart" in window,
            h = "TouchSwipe";
        n.fn.swipe = function(t) {
            var r = n(this),
                i = r.data(h);
            if (i && typeof t == "string") {
                if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
                n.error("Method " + t + " does not exist on jQuery.swipe")
            } else if (!i && (typeof t == "object" || !t)) return rt.apply(this, arguments);
            return r
        };
        n.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "button, input, select, textarea, a, .noSwipe"
        };
        n.fn.swipe.phases = {
            PHASE_START: tt,
            PHASE_MOVE: s,
            PHASE_END: t,
            PHASE_CANCEL: i
        };
        n.fn.swipe.directions = {
            LEFT: u,
            RIGHT: f,
            UP: e,
            DOWN: o,
            IN: l,
            OUT: a
        };
        n.fn.swipe.pageScroll = {
            NONE: v,
            HORIZONTAL: p,
            VERTICAL: w,
            AUTO: b
        };
        n.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: c
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function(n) {
    "use strict";

    // function t() {
    //     var i = document.createElement("bootstrap"),
    //         n = {
    //             WebkitTransition: "webkitTransitionEnd",
    //             MozTransition: "transitionend",
    //             OTransition: "oTransitionEnd otransitionend",
    //             transition: "transitionend"
    //         };
    //     for (var t in n)
    //         if (void 0 !== i.style[t]) return {
    //             end: n[t]
    //         };
    //     return !1
    // }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}
(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        // function e() {
        //     r.detach().trigger("closed.bs.alert").remove()
        // }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    // n.fn.alert.noConflict = function() {
    //     return n.fn.alert = r, this
    // };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}
(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.7";
    // t.DEFAULTS = {
    //     loadingText: "loading..."
    // };
    // t.prototype.setState = function(t) {
    //     var i = "disabled",
    //         r = this.$element,
    //         f = r.is("input") ? "val" : "html",
    //         u = r.data();
    //     t += "Text";
    //     null == u.resetText && r.data("resetText", r[f]());
    //     setTimeout(n.proxy(function() {
    //         r[f](null == u[t] ? this.options[t] : u[t]);
    //         "loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
    //     }, this), 0)
    // };
    // t.prototype.toggle = function() {
    //     var t = !0,
    //         i = this.$element.closest('[data-toggle="buttons"]'),
    //         n;
    //     i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    // };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    // n.fn.button.noConflict = function() {
    //     return n.fn.button = r, this
    // };
    // n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    //     var r = n(t.target).closest(".btn");
    //     i.call(r, "toggle");
    //     n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    // }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    //     n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    // })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    // t.DEFAULTS = {
    //     interval: 5e3,
    //     pause: "hover",
    //     wrap: !0,
    //     keyboard: !0
    // };
    // t.prototype.keydown = function(n) {
    //     if (!/input|textarea/i.test(n.target.tagName)) {
    //         switch (n.which) {
    //             case 37:
    //                 this.prev();
    //                 break;
    //             case 39:
    //                 this.next();
    //                 break;
    //             default:
    //                 return
    //         }
    //         n.preventDefault()
    //     }
    // };
    // t.prototype.cycle = function(t) {
    //     return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    // };
    // t.prototype.getItemIndex = function(n) {
    //     return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    // };
    // t.prototype.getItemForDirection = function(n, t) {
    //     var i = this.getItemIndex(t),
    //         f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
    //         r, u;
    //     return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    // };
    // t.prototype.to = function(n) {
    //     var i = this,
    //         t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    //     if (!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
    //         i.to(n)
    //     }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    // };
    // t.prototype.pause = function(t) {
    //     return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    // };
    // t.prototype.next = function() {
    //     if (!this.sliding) return this.slide("next")
    // };
    // t.prototype.prev = function() {
    //     if (!this.sliding) return this.slide("prev")
    // };
    // t.prototype.slide = function(i, r) {
    //     var e = this.$element.find(".item.active"),
    //         u = r || this.getItemForDirection(i, e),
    //         l = this.interval,
    //         f = "next" == i ? "left" : "right",
    //         a = this,
    //         o, s, h, c;
    //     return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
    //         relatedTarget: o,
    //         direction: f
    //     }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
    //         relatedTarget: o,
    //         direction: f
    //     }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
    //         u.removeClass([i, f].join(" ")).addClass("active");
    //         e.removeClass(["active", f].join(" "));
    //         a.sliding = !1;
    //         setTimeout(function() {
    //             a.$element.trigger(c)
    //         }, 0)
    //     }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    // };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}
(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    // t.DEFAULTS = {
    //     toggle: !0
    // };
    // t.prototype.dimension = function() {
    //     var n = this.$element.hasClass("width");
    //     return n ? "width" : "height"
    // };
    // t.prototype.show = function() {
    //     var f, r, e, u, o, s;
    //     if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
    //         if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
    //                 this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
    //                 this.transitioning = 0;
    //                 this.$element.trigger("shown.bs.collapse")
    //             }, !n.support.transition) return o.call(this);
    //         s = n.camelCase(["scroll", u].join("-"));
    //         this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
    //     }
    // };
    // t.prototype.hide = function() {
    //     var r, i, u;
    //     if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
    //         this.transitioning = 0;
    //         this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
    //     }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    // };
    // t.prototype.toggle = function() {
    //     this[this.$element.hasClass("in") ? "hide" : "show"]()
    // };
    // t.prototype.getParent = function() {
    //     return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
    //         var u = n(i);
    //         this.addAriaAndCollapsedClass(r(u), u)
    //     }, this)).end()
    // };
    // t.prototype.addAriaAndCollapsedClass = function(n, t) {
    //     var i = n.hasClass("in");
    //     n.attr("aria-expanded", i);
    //     t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    // };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    // n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
    //     var u = n(this);
    //     u.attr("data-target") || t.preventDefault();
    //     var f = r(u),
    //         e = f.data("bs.collapse"),
    //         o = e ? "toggle" : u.data();
    //     i.call(f, o)
    // })
}(jQuery); + function(n) {
    "use strict";

    // function r(t) {
    //     var i = t.attr("data-target"),
    //         r;
    //     return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    // }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}
(jQuery); + function(n) {
    "use strict";

    // function i(i, r) {
    //     return this.each(function() {
    //         var f = n(this),
    //             u = f.data("bs.modal"),
    //             e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
    //         u || f.data("bs.modal", u = new t(this, e));
    //         "string" == typeof i ? u[i](r) : e.show && u.show(r)
    //     })
    // }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    // t.DEFAULTS = {
    //     backdrop: !0,
    //     keyboard: !0,
    //     show: !0
    // };
    // t.prototype.toggle = function(n) {
    //     return this.isShown ? this.hide() : this.show(n)
    // };
    // t.prototype.show = function(i) {
    //     var r = this,
    //         u = n.Event("show.bs.modal", {
    //             relatedTarget: i
    //         });
    //     this.$element.trigger(u);
    //     this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
    //         r.$element.one("mouseup.dismiss.bs.modal", function(t) {
    //             n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
    //         })
    //     }), this.backdrop(function() {
    //         var f = n.support.transition && r.$element.hasClass("fade"),
    //             u;
    //         r.$element.parent().length || r.$element.appendTo(r.$body);
    //         r.$element.show().scrollTop(0);
    //         r.adjustDialog();
    //         f && r.$element[0].offsetWidth;
    //         r.$element.addClass("in");
    //         r.enforceFocus();
    //         u = n.Event("shown.bs.modal", {
    //             relatedTarget: i
    //         });
    //         f ? r.$dialog.one("bsTransitionEnd", function() {
    //             r.$element.trigger("focus").trigger(u)
    //         }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
    //     }))
    // };
    // t.prototype.hide = function(i) {
    //     i && i.preventDefault();
    //     i = n.Event("hide.bs.modal");
    //     this.$element.trigger(i);
    //     this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    // };
    // t.prototype.enforceFocus = function() {
    //     n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
    //         document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
    //     }, this))
    // };
    // t.prototype.escape = function() {
    //     this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
    //         27 == n.which && this.hide()
    //     }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    // };
    // t.prototype.resize = function() {
    //     this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    // };
    // t.prototype.hideModal = function() {
    //     var n = this;
    //     this.$element.hide();
    //     this.backdrop(function() {
    //         n.$body.removeClass("modal-open");
    //         n.resetAdjustments();
    //         n.resetScrollbar();
    //         n.$element.trigger("hidden.bs.modal")
    //     })
    // };
    // t.prototype.removeBackdrop = function() {
    //     this.$backdrop && this.$backdrop.remove();
    //     this.$backdrop = null
    // };
    // t.prototype.backdrop = function(i) {
    //     var e = this,
    //         f = this.$element.hasClass("fade") ? "fade" : "",
    //         r, u;
    //     if (this.isShown && this.options.backdrop) {
    //         if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
    //                 return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
    //             }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
    //         r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
    //     } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
    //         e.removeBackdrop();
    //         i && i()
    //     }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    // };
    // t.prototype.handleUpdate = function() {
    //     this.adjustDialog()
    // };
    // t.prototype.adjustDialog = function() {
    //     var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    //     this.$element.css({
    //         paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
    //         paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
    //     })
    // };
    // t.prototype.resetAdjustments = function() {
    //     this.$element.css({
    //         paddingLeft: "",
    //         paddingRight: ""
    //     })
    // };
    // t.prototype.checkScrollbar = function() {
    //     var n = window.innerWidth,
    //         t;
    //     n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
    //     this.bodyIsOverflowing = document.body.clientWidth < n;
    //     this.scrollbarWidth = this.measureScrollbar()
    // };
    // t.prototype.setScrollbar = function() {
    //     var n = parseInt(this.$body.css("padding-right") || 0, 10);
    //     this.originalBodyPad = document.body.style.paddingRight || "";
    //     this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    // };
    // t.prototype.resetScrollbar = function() {
    //     this.$body.css("padding-right", this.originalBodyPad)
    // };
    // t.prototype.measureScrollbar = function() {
    //     var n = document.createElement("div"),
    //         t;
    //     return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    // };
    // r = n.fn.modal;
    // n.fn.modal = i;
    // n.fn.modal.Constructor = t;
    // n.fn.modal.noConflict = function() {
    //     return n.fn.modal = r, this
    // };
    // n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
    //     var r = n(this),
    //         f = r.attr("href"),
    //         u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
    //         e = u.data("bs.modal") ? "toggle" : n.extend({
    //             remote: !/#/.test(f) && f
    //         }, u.data(), r.data());
    //     r.is("a") && t.preventDefault();
    //     u.one("show.bs.modal", function(n) {
    //         n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
    //             r.is(":visible") && r.trigger("focus")
    //         })
    //     });
    //     i.call(u, e, this)
    // })
}
(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    // t.DEFAULTS = {
    //     animation: !0,
    //     placement: "top",
    //     selector: !1,
    //     template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
    //     trigger: "hover focus",
    //     title: "",
    //     delay: 0,
    //     html: !1,
    //     container: !1,
    //     viewport: {
    //         selector: "body",
    //         padding: 0
    //     }
    // };
    // t.prototype.init = function(t, i, r) {
    //     var f, e, u, o, s;
    //     if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
    //             click: !1,
    //             hover: !1,
    //             focus: !1
    //         }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    //     for (f = this.options.trigger.split(" "), e = f.length; e--;)
    //         if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
    //         else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
    //     this.options.selector ? this._options = n.extend({}, this.options, {
    //         trigger: "manual",
    //         selector: ""
    //     }) : this.fixTitle()
    // };
    // t.prototype.getDefaults = function() {
    //     return t.DEFAULTS
    // };
    // t.prototype.getOptions = function(t) {
    //     return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
    //         show: t.delay,
    //         hide: t.delay
    //     }), t
    // };
    // t.prototype.getDelegateOptions = function() {
    //     var t = {},
    //         i = this.getDefaults();
    //     return this._options && n.each(this._options, function(n, r) {
    //         i[n] != r && (t[n] = r)
    //     }), t
    // };
    // t.prototype.enter = function(t) {
    //     var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
    //     return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
    //         "in" == i.hoverState && i.show()
    //     }, i.options.delay.show)) : i.show())
    // };
    // t.prototype.isInStateTrue = function() {
    //     for (var n in this.inState)
    //         if (this.inState[n]) return !0;
    //     return !1
    // };
    // t.prototype.leave = function(t) {
    //     var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
    //     if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
    //         "out" == i.hoverState && i.hide()
    //     }, i.options.delay.hide)) : i.hide()
    // };
    // t.prototype.show = function() {
    //     var c = n.Event("show.bs." + this.type),
    //         l, p, e, w, h;
    //     if (this.hasContent() && this.enabled) {
    //         if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
    //         var u = this,
    //             r = this.tip(),
    //             a = this.getUID(this.type);
    //         this.setContent();
    //         r.attr("id", a);
    //         this.$element.attr("aria-describedby", a);
    //         this.options.animation && r.addClass("fade");
    //         var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
    //             v = /\s?auto?\s?/i,
    //             y = v.test(i);
    //         y && (i = i.replace(v, "") || "top");
    //         r.detach().css({
    //             top: 0,
    //             left: 0,
    //             display: "block"
    //         }).addClass(i).data("bs." + this.type, this);
    //         this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
    //         this.$element.trigger("inserted.bs." + this.type);
    //         var f = this.getPosition(),
    //             o = r[0].offsetWidth,
    //             s = r[0].offsetHeight;
    //         y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
    //         w = this.getCalculatedOffset(i, f, o, s);
    //         this.applyPlacement(w, i);
    //         h = function() {
    //             var n = u.hoverState;
    //             u.$element.trigger("shown.bs." + u.type);
    //             u.hoverState = null;
    //             "out" == n && u.leave(u)
    //         };
    //         n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
    //     }
    // };
    // t.prototype.applyPlacement = function(t, i) {
    //     var r = this.tip(),
    //         l = r[0].offsetWidth,
    //         e = r[0].offsetHeight,
    //         o = parseInt(r.css("margin-top"), 10),
    //         s = parseInt(r.css("margin-left"), 10),
    //         h, f, u;
    //     isNaN(o) && (o = 0);
    //     isNaN(s) && (s = 0);
    //     t.top += o;
    //     t.left += s;
    //     n.offset.setOffset(r[0], n.extend({
    //         using: function(n) {
    //             r.css({
    //                 top: Math.round(n.top),
    //                 left: Math.round(n.left)
    //             })
    //         }
    //     }, t), 0);
    //     r.addClass("in");
    //     h = r[0].offsetWidth;
    //     f = r[0].offsetHeight;
    //     "top" == i && f != e && (t.top = t.top + e - f);
    //     u = this.getViewportAdjustedDelta(i, t, h, f);
    //     u.left ? t.left += u.left : t.top += u.top;
    //     var c = /top|bottom/.test(i),
    //         a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
    //         v = c ? "offsetWidth" : "offsetHeight";
    //     r.offset(t);
    //     this.replaceArrow(a, r[0][v], c)
    // };
    // t.prototype.replaceArrow = function(n, t, i) {
    //     this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    // };
    // t.prototype.setContent = function() {
    //     var n = this.tip(),
    //         t = this.getTitle();
    //     n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
    //     n.removeClass("fade in top bottom left right")
    // };
    // t.prototype.hide = function(i) {
    //     function f() {
    //         "in" != r.hoverState && u.detach();
    //         r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
    //         i && i()
    //     }
    //     var r = this,
    //         u = n(this.$tip),
    //         e = n.Event("hide.bs." + this.type);
    //     if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
    // };
    // t.prototype.fixTitle = function() {
    //     var n = this.$element;
    //     (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    // };
    // t.prototype.hasContent = function() {
    //     return this.getTitle()
    // };
    // t.prototype.getPosition = function(t) {
    //     t = t || this.$element;
    //     var r = t[0],
    //         u = "BODY" == r.tagName,
    //         i = r.getBoundingClientRect();
    //     null == i.width && (i = n.extend({}, i, {
    //         width: i.right - i.left,
    //         height: i.bottom - i.top
    //     }));
    //     var f = window.SVGElement && r instanceof window.SVGElement,
    //         e = u ? {
    //             top: 0,
    //             left: 0
    //         } : f ? null : t.offset(),
    //         o = {
    //             scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
    //         },
    //         s = u ? {
    //             width: n(window).width(),
    //             height: n(window).height()
    //         } : null;
    //     return n.extend({}, i, o, s, e)
    // };
    // t.prototype.getCalculatedOffset = function(n, t, i, r) {
    //     return "bottom" == n ? {
    //         top: t.top + t.height,
    //         left: t.left + t.width / 2 - i / 2
    //     } : "top" == n ? {
    //         top: t.top - r,
    //         left: t.left + t.width / 2 - i / 2
    //     } : "left" == n ? {
    //         top: t.top + t.height / 2 - r / 2,
    //         left: t.left - i
    //     } : {
    //         top: t.top + t.height / 2 - r / 2,
    //         left: t.left + t.width
    //     }
    // };
    // t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
    //     var f = {
    //             top: 0,
    //             left: 0
    //         },
    //         e, u, o, s, h, c;
    //     return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    // };
    // t.prototype.getTitle = function() {
    //     var t = this.$element,
    //         n = this.options;
    //     return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    // };
    // t.prototype.getUID = function(n) {
    //     do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
    //     return n
    // };
    // t.prototype.tip = function() {
    //     if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    //     return this.$tip
    // };
    // t.prototype.arrow = function() {
    //     return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    // };
    // t.prototype.enable = function() {
    //     this.enabled = !0
    // };
    // t.prototype.disable = function() {
    //     this.enabled = !1
    // };
    // t.prototype.toggleEnabled = function() {
    //     this.enabled = !this.enabled
    // };
    // t.prototype.toggle = function(t) {
    //     var i = this;
    //     t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
    //     t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    // };
    // t.prototype.destroy = function() {
    //     var n = this;
    //     clearTimeout(this.timeout);
    //     this.hide(function() {
    //         n.$element.off("." + n.type).removeData("bs." + n.type);
    //         n.$tip && n.$tip.detach();
    //         n.$tip = null;
    //         n.$arrow = null;
    //         n.$viewport = null;
    //         n.$element = null
    //     })
    // };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    // t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    // t.prototype.constructor = t;
    // t.prototype.getDefaults = function() {
    //     return t.DEFAULTS
    // };
    // t.prototype.setContent = function() {
    //     var n = this.tip(),
    //         i = this.getTitle(),
    //         t = this.getContent();
    //     n.find(".popover-title")[this.options.html ? "html" : "text"](i);
    //     n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
    //     n.removeClass("fade top bottom left right in");
    //     n.find(".popover-title").html() || n.find(".popover-title").hide()
    // };
    // t.prototype.hasContent = function() {
    //     return this.getTitle() || this.getContent()
    // };
    // t.prototype.getContent = function() {
    //     var t = this.$element,
    //         n = this.options;
    //     return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    // };
    // t.prototype.arrow = function() {
    //     return this.$arrow = this.$arrow || this.tip().find(".arrow")
    // };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return u < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top,
            h = o ? e : t;
        return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n, t) {
    function u() {
        i.$carouselContainer.find("ol.carousel-indicators").addClass("indicators-fix");
        i.$thumbnailsLi.first().addClass("active-thumbnail");
        r.backgroundControl ? i.$controls.height(i.$carouselContainer.find(".carousel-inner").height()) : i.$carouselContainer.find(".carousel-control").addClass("controls-background-reset");
        r.center && i.$thumbnailsLi.wrapAll("<div class='center clearfix'><\/div>")
    }

    function f(n) {
        i.$thumbnailsLi.removeClass("active-thumbnail");
        i.$thumbnailsLi.eq(t(n).index()).addClass("active-thumbnail")
    }

    function e() {
        i.$carouselContainer.on("slide.bs.carousel", function(n) {
            f(n.relatedTarget)
        });
        i.$thumbnailsLi.click(function() {
            i.$carouselContainer.carousel(t(this).index())
        })
    }
    var r = {
            center: !0,
            backgroundControl: !1
        },
        i = {
            $carouselContainer: t(".thumbnails-carousel").parent(),
            $thumbnailsLi: t(".thumbnails-carousel li"),
            $controls: t(".thumbnails-carousel").parent().find(".carousel-control")
        };
    t.fn.thumbnailsCarousel = function(n) {
        return r = t.extend(r, n), u(), e(), this
    }
}(window, jQuery);
$(".thumbnails-carousel").thumbnailsCarousel();
$("#carousel-example-generic").carousel({
    interval: 4e3
});
void 0 === jQuery && (jQuery = "function" == typeof require ? $ = require("jquery") : $);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function(n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function(n, t, i, r, u) {
        return -r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function(n, t, i, r, u) {
        return -r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(n, t, i, r, u) {
        return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function(n, t, i, r, u) {
        return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function(n, t, i, r, u) {
        return 0 == t ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function(n, t, i, r, u) {
        return t == u ? i + r : r * (1 - Math.pow(2, -10 * t / u)) + i
    },
    easeInOutExpo: function(n, t, i, r, u) {
        return 0 == t ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (2 - Math.pow(2, -10 * --t)) + i
    },
    easeInCirc: function(n, t, i, r, u) {
        return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function(n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return 0 == t ? i : 1 == (t /= u) ? i + r : ((f || (f = .3 * u), e < Math.abs(r)) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i)
    },
    easeOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return 0 == t ? i : 1 == (t /= u) ? i + r : ((f || (f = .3 * u), e < Math.abs(r)) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
    },
    easeInOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return 0 == t ? i : 2 == (t /= u / 2) ? i + r : ((f || (f = u * .3 * 1.5), e < Math.abs(r)) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * -.5 + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i)
    },
    easeInBack: function(n, t, i, r, u, f) {
        return void 0 == f && (f = 1.70158), r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function(n, t, i, r, u, f) {
        return void 0 == f && (f = 1.70158), r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function(n, t, i, r, u, f) {
        return void 0 == f && (f = 1.70158), (t /= u / 2) < 1 ? r / 2 * t * t * ((1 + (f *= 1.525)) * t - f) + i : r / 2 * ((t -= 2) * t * ((1 + (f *= 1.525)) * t + f) + 2) + i
    },
    easeInBounce: function(n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function(n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(n, t, i, r, u) {
        return t < u / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * t, 0, r, u) + i : .5 * jQuery.easing.easeOutBounce(n, 2 * t - u, 0, r, u) + .5 * r + i
    }
});
jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : r / 4 * ((t -= 2) * t * t + 2) + i
    }
});
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(n) {
        function o(n) {
            var i = n.length,
                r = t.type(n);
            return "function" !== r && !t.isWindow(n) && (!(1 !== n.nodeType || !i) || "array" === r || 0 === i || "number" == typeof i && i > 0 && i - 1 in n)
        }
        var t, i;
        if (!n.jQuery) {
            t = function(n, i) {
                return new t.fn.init(n, i)
            };
            t.isWindow = function(n) {
                return null != n && n == n.window
            };
            t.type = function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? r[s.call(n)] || "object" : typeof n
            };
            t.isArray = Array.isArray || function(n) {
                return "array" === t.type(n)
            };
            t.isPlainObject = function(n) {
                var i;
                if (!n || "object" !== t.type(n) || n.nodeType || t.isWindow(n)) return !1;
                try {
                    if (n.constructor && !f.call(n, "constructor") && !f.call(n.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (i in n);
                return void 0 === i || f.call(n, i)
            };
            t.each = function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = o(n);
                if (i) {
                    if (e)
                        for (; f > r && (u = t.apply(n[r], i), !1 !== u); r++);
                    else
                        for (r in n)
                            if (u = t.apply(n[r], i), !1 === u) break
                } else if (e)
                    for (; f > r && (u = t.call(n[r], r, n[r]), !1 !== u); r++);
                else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), !1 === u) break; return n
            };
            t.data = function(n, r, u) {
                var e, f;
                if (void 0 === u) {
                    if (e = (f = n[t.expando]) && i[f], void 0 === r) return e;
                    if (e && r in e) return e[r]
                } else if (void 0 !== r) return f = n[t.expando] || (n[t.expando] = ++t.uuid), i[f] = i[f] || {}, i[f][r] = u, u
            };
            t.removeData = function(n, r) {
                var u = n[t.expando],
                    f = u && i[u];
                f && t.each(r, function(n, t) {
                    delete f[t]
                })
            };
            t.extend = function() {
                var r, e, i, f, o, s, n = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    h = !1;
                for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" != typeof n && "function" !== t.type(n) && (n = {}), u === c && (n = this, u--); c > u; u++)
                    if (null != (o = arguments[u]))
                        for (f in o) r = n[f], i = o[f], n !== i && (h && i && (t.isPlainObject(i) || (e = t.isArray(i))) ? (e ? (e = !1, s = r && t.isArray(r) ? r : []) : s = r && t.isPlainObject(r) ? r : {}, n[f] = t.extend(h, s, i)) : void 0 !== i && (n[f] = i));
                return n
            };
            t.queue = function(n, i, r) {
                var f, u, s, e;
                if (n) return i = (i || "fx") + "queue", f = t.data(n, i), r ? (!f || t.isArray(r) ? f = t.data(n, i, (u = r, e = s || [], null != u && (o(Object(u)) ? function(n, t) {
                    for (var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
                    if (r != r)
                        for (; void 0 !== t[i];) n[u++] = t[i++];
                    n.length = u
                }(e, "string" == typeof u ? [u] : u) : [].push.call(e, u)), e)) : f.push(r), f) : f || []
            };
            t.dequeue = function(n, i) {
                t.each(n.nodeType ? [n] : n, function(n, r) {
                    i = i || "fx";
                    var f = t.queue(r, i),
                        u = f.shift();
                    "inprogress" === u && (u = f.shift());
                    u && ("fx" === i && f.unshift("inprogress"), u.call(r, function() {
                        t.dequeue(r, i)
                    }))
                })
            };
            t.fn = t.prototype = {
                init: function(n) {
                    if (n.nodeType) return this[0] = n, this;
                    throw new Error("Not a DOM node.");
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (n.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (n.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function n() {
                        for (var n = this.offsetParent || document; n && !1 && "static" === n.style.position;) n = n.offsetParent;
                        return n || document
                    }
                    var u = this[0],
                        n = n.apply(u),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(n.nodeName) ? {
                            top: 0,
                            left: 0
                        } : t(n).offset();
                    return i.top -= parseFloat(u.style.marginTop) || 0, i.left -= parseFloat(u.style.marginLeft) || 0, n.style && (r.top += parseFloat(n.style.borderTopWidth) || 0, r.left += parseFloat(n.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            i = {};
            t.expando = "velocity" + (new Date).getTime();
            t.uuid = 0;
            for (var r = {}, f = r.hasOwnProperty, s = r.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < e.length; u++) r["[object " + e[u] + "]"] = e[u].toLowerCase();
            t.fn.init.prototype = t.fn;
            n.Velocity = {
                Utilities: t
            }
        }
    }(window), function(n) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : n()
    }(function() {
        return function(n, t, i, r) {
            function p(n) {
                return s.isWrapped(n) ? n = [].slice.call(n) : s.isNode(n) && (n = [n]), n
            }

            function e(n) {
                var t = o.data(n, "velocity");
                return null === t ? r : t
            }

            function w(n, i, r, u) {
                function l(n, t) {
                    return 1 - 3 * t + 3 * n
                }

                function a(n, t) {
                    return 3 * t - 6 * n
                }

                function v(n) {
                    return 3 * n
                }

                function s(n, t, i) {
                    return ((l(t, i) * n + a(t, i)) * n + v(t)) * n
                }

                function y(n, t, i) {
                    return 3 * l(t, i) * n * n + 2 * a(t, i) * n + v(t)
                }

                function b(t) {
                    for (var f, c, u = 0, i = 1, l = e - 1; i != l && o[i] <= t; ++i) u += h;
                    return f = u + (t - o[--i]) / (o[i + 1] - o[i]) * h, c = y(f, n, r), c >= g ? function(t, i) {
                        for (var f, u = 0; d > u; ++u) {
                            if (f = y(i, n, r), 0 === f) return i;
                            i -= (s(i, n, r) - t) / f
                        }
                        return i
                    }(t, f) : 0 == c ? f : function(t, i, u) {
                        var e, f, o = 0;
                        do f = i + (u - i) / 2, e = s(f, n, r) - t, e > 0 ? u = f : i = f; while (Math.abs(e) > nt && ++o < tt);
                        return f
                    }(t, u, u + h)
                }

                function k() {
                    p = !0;
                    (n != i || r != u) && function() {
                        for (var t = 0; e > t; ++t) o[t] = s(t * h, n, r)
                    }()
                }
                var d = 4,
                    g = .001,
                    nt = 1e-7,
                    tt = 10,
                    e = 11,
                    h = 1 / (e - 1),
                    it = "Float32Array" in t,
                    f, w;
                if (4 !== arguments.length) return !1;
                for (f = 0; 4 > f; ++f)
                    if ("number" != typeof arguments[f] || isNaN(arguments[f]) || !isFinite(arguments[f])) return !1;
                n = Math.min(n, 1);
                r = Math.min(r, 1);
                n = Math.max(n, 0);
                r = Math.max(r, 0);
                var o = it ? new Float32Array(e) : new Array(e),
                    p = !1,
                    c = function(t) {
                        return p || k(), n === i && r === u ? t : 0 === t ? 0 : 1 === t ? 1 : s(b(t), i, u)
                    };
                return c.getControlPoints = function() {
                    return [{
                        x: n,
                        y: i
                    }, {
                        x: r,
                        y: u
                    }]
                }, w = "generateBezier(" + [n, i, r, u] + ")", c.toString = function() {
                    return w
                }, c
            }

            function b(n, t) {
                var i = n;
                return s.isString(n) ? f.Easings[n] || (i = !1) : i = s.isArray(n) && 1 === n.length ? function(n) {
                    return function(t) {
                        return Math.round(t * n) * (1 / n)
                    }
                }.apply(null, n) : s.isArray(n) && 2 === n.length ? tt.apply(null, n.concat([t])) : !(!s.isArray(n) || 4 !== n.length) && w.apply(null, n), !1 === i && (i = f.Easings[f.defaults.easing] ? f.defaults.easing : nt), i
            }

            function a(n) {
                var d, rt, c, nt, h, tt, v, p, i, ht, ft, b, et, it;
                if (n)
                    for (d = (new Date).getTime(), rt = f.State.calls.length, rt > 1e4 && (f.State.calls = function(n) {
                            for (var t, i = -1, u = n ? n.length : 0, r = []; ++i < u;) t = n[i], t && r.push(t);
                            return r
                        }(f.State.calls)), c = 0; rt > c; c++)
                        if (f.State.calls[c]) {
                            var w = f.State.calls[c],
                                ot = w[0],
                                t = w[2],
                                y = w[3],
                                ct = !!y,
                                st = null;
                            y || (y = f.State.calls[c][3] = d - 16);
                            for (var g = Math.min((d - y) / t.duration, 1), ut = 0, lt = ot.length; lt > ut; ut++)
                                if (nt = ot[ut], h = nt.element, e(h)) {
                                    tt = !1;
                                    t.display !== r && null !== t.display && "none" !== t.display && ("flex" === t.display && o.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(n, t) {
                                        u.setPropertyValue(h, "display", t)
                                    }), u.setPropertyValue(h, "display", t.display));
                                    t.visibility !== r && "hidden" !== t.visibility && u.setPropertyValue(h, "visibility", t.visibility);
                                    for (v in nt)
                                        if ("element" !== v) {
                                            if (i = nt[v], ht = s.isString(i.easing) ? f.Easings[i.easing] : i.easing, 1 === g) p = i.endValue;
                                            else if (ft = i.endValue - i.startValue, p = i.startValue + ft * ht(g, t, ft), !ct && p === i.currentValue) continue;
                                            (i.currentValue = p, "tween" === v) ? st = p: (u.Hooks.registered[v] && (b = u.Hooks.getRoot(v), et = e(h).rootPropertyValueCache[b], et && (i.rootPropertyValue = et)), it = u.setPropertyValue(h, v, i.currentValue + (0 === parseFloat(p) ? "" : i.unitType), i.rootPropertyValue, i.scrollData), u.Hooks.registered[v] && (e(h).rootPropertyValueCache[b] = u.Normalizations.registered[b] ? u.Normalizations.registered[b]("extract", null, it[1]) : it[1]), "transform" === it[0] && (tt = !0))
                                        }
                                    t.mobileHA && e(h).transformCache.translate3d === r && (e(h).transformCache.translate3d = "(0px, 0px, 0px)", tt = !0);
                                    tt && u.flushTransformCache(h)
                                }
                            t.display !== r && "none" !== t.display && (f.State.calls[c][2].display = !1);
                            t.visibility !== r && "hidden" !== t.visibility && (f.State.calls[c][2].visibility = !1);
                            t.progress && t.progress.call(w[1], w[1], g, Math.max(0, y + t.duration - d), y, st);
                            1 === g && k(c)
                        }
                f.State.isTicking && l(a)
            }

            function k(n, t) {
                var i, c, l, b;
                if (!f.State.calls[n]) return !1;
                for (var v = f.State.calls[n][0], a = f.State.calls[n][1], s = f.State.calls[n][2], y = f.State.calls[n][4], p = !1, h = 0, w = v.length; w > h; h++) {
                    if (i = v[h].element, (t || s.loop || ("none" === s.display && u.setPropertyValue(i, "display", s.display), "hidden" === s.visibility && u.setPropertyValue(i, "visibility", s.visibility)), !0 !== s.loop && (o.queue(i)[1] === r || !/\.velocityQueueEntryFlag/i.test(o.queue(i)[1])) && e(i)) && (e(i).isAnimating = !1, e(i).rootPropertyValueCache = {}, c = !1, o.each(u.Lists.transforms3D, function(n, t) {
                            var u = /^scale/.test(t) ? 1 : 0,
                                f = e(i).transformCache[t];
                            e(i).transformCache[t] !== r && new RegExp("^\\(" + u + "[^.]").test(f) && (c = !0, delete e(i).transformCache[t])
                        }), s.mobileHA && (c = !0, delete e(i).transformCache.translate3d), c && u.flushTransformCache(i), u.Values.removeClass(i, "velocity-animating")), !t && s.complete && !s.loop && h === w - 1) try {
                        s.complete.call(a, a)
                    } catch (n) {
                        setTimeout(function() {
                            throw n;
                        }, 1)
                    }
                    y && !0 !== s.loop && y(a);
                    e(i) && !0 === s.loop && !t && (o.each(e(i).tweensContainer, function(n, t) {
                        /^rotate/.test(n) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360);
                        /^backgroundPosition/.test(n) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), f(i, "reverse", {
                        loop: !0,
                        delay: s.delay
                    }));
                    !1 !== s.queue && o.dequeue(i, s.queue)
                }
                for (f.State.calls[n] = !1, l = 0, b = f.State.calls.length; b > l; l++)
                    if (!1 !== f.State.calls[l]) {
                        p = !0;
                        break
                    }!1 === p && (f.State.isTicking = !1, delete f.State.calls, f.State.calls = [])
            }
            var o, v, h = function() {
                    var n, t;
                    if (i.documentMode) return i.documentMode;
                    for (n = 7; n > 4; n--)
                        if (t = i.createElement("div"), t.innerHTML = "<!--[if IE " + n + "]><span><\/span><![endif]-->", t.getElementsByTagName("span").length) return t = null, n;
                    return r
                }(),
                d = (v = 0, t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(n) {
                    var t, i = (new Date).getTime();
                    return t = Math.max(0, 16 - (i - v)), v = i + t, setTimeout(function() {
                        n(i + t)
                    }, t)
                }),
                s = {
                    isString: function(n) {
                        return "string" == typeof n
                    },
                    isArray: Array.isArray || function(n) {
                        return "[object Array]" === Object.prototype.toString.call(n)
                    },
                    isFunction: function(n) {
                        return "[object Function]" === Object.prototype.toString.call(n)
                    },
                    isNode: function(n) {
                        return n && n.nodeType
                    },
                    isNodeList: function(n) {
                        return "object" == typeof n && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(n)) && n.length !== r && (0 === n.length || "object" == typeof n[0] && n[0].nodeType > 0)
                    },
                    isWrapped: function(n) {
                        return n && (n.jquery || t.Zepto && t.Zepto.zepto.isZ(n))
                    },
                    isSVG: function(n) {
                        return t.SVGElement && n instanceof t.SVGElement
                    },
                    isEmptyObject: function(n) {
                        for (var t in n) return !1;
                        return !0
                    }
                },
                g = !1,
                tt, u, c, l;
            if (n.fn && n.fn.jquery ? (o = n, g = !0) : o = t.Velocity.Utilities, 8 >= h && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= h)) {
                var y = 400,
                    nt = "swing",
                    f = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: o,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: y,
                            easing: nt,
                            begin: r,
                            complete: r,
                            progress: r,
                            display: r,
                            visibility: r,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(n) {
                            o.data(n, "velocity", {
                                isSVG: s.isSVG(n),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                return t.pageYOffset !== r ? (f.State.scrollAnchor = t, f.State.scrollPropertyLeft = "pageXOffset", f.State.scrollPropertyTop = "pageYOffset") : (f.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, f.State.scrollPropertyLeft = "scrollLeft", f.State.scrollPropertyTop = "scrollTop"), tt = function() {
                    function t(n) {
                        return -n.tension * n.x - n.friction * n.v
                    }

                    function n(n, i, r) {
                        var u = {
                            x: n.x + r.dx * i,
                            v: n.v + r.dv * i,
                            tension: n.tension,
                            friction: n.friction
                        };
                        return {
                            dx: u.v,
                            dv: t(u)
                        }
                    }
                    return function i(r, u, f) {
                        var w, b, s, e, o, h, c, l, a, k, d, v = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            y = [0],
                            p = 0;
                        for (r = parseFloat(r) || 500, u = parseFloat(u) || 20, f = f || null, v.tension = r, v.friction = u, b = (w = null !== f) ? (p = i(r, u)) / f * .016 : .016; o = b, void 0, void 0, void 0, void 0, void 0, void 0, h = {
                                dx: (e = s || v).v,
                                dv: t(e)
                            }, c = n(e, .5 * o, h), l = n(e, .5 * o, c), a = n(e, o, l), k = 1 / 6 * (h.dx + 2 * (c.dx + l.dx) + a.dx), d = 1 / 6 * (h.dv + 2 * (c.dv + l.dv) + a.dv), e.x = e.x + k * o, e.v = e.v + d * o, s = e, y.push(1 + s.x), p += 16, Math.abs(s.x) > .0001 && Math.abs(s.v) > .0001;);
                        return w ? function(n) {
                            return y[n * (y.length - 1) | 0]
                        } : p
                    }
                }(), f.Easings = {
                    linear: function(n) {
                        return n
                    },
                    swing: function(n) {
                        return .5 - Math.cos(n * Math.PI) / 2
                    },
                    spring: function(n) {
                        return 1 - Math.cos(4.5 * n * Math.PI) * Math.exp(6 * -n)
                    }
                }, o.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(n, t) {
                    f.Easings[t[0]] = w.apply(null, t[1])
                }), u = f.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e, i, f, t, r, o, s, n = 0; n < u.Lists.colors.length; n++) e = "color" === u.Lists.colors[n] ? "0 0 0 1" : "255 255 255 1", u.Hooks.templates[u.Lists.colors[n]] = ["Red Green Blue Alpha", e];
                            if (h)
                                for (i in u.Hooks.templates) t = (f = u.Hooks.templates[i])[0].split(" "), r = f[1].match(u.RegEx.valueSplit), "Color" === t[0] && (t.push(t.shift()), r.push(r.shift()), u.Hooks.templates[i] = [t.join(" "), r.join(" ")]);
                            for (i in u.Hooks.templates) {
                                t = (f = u.Hooks.templates[i])[0].split(" ");
                                for (n in t) o = i + t[n], s = n, u.Hooks.registered[o] = [i, s]
                            }
                        },
                        getRoot: function(n) {
                            var t = u.Hooks.registered[n];
                            return t ? t[0] : n
                        },
                        cleanRootPropertyValue: function(n, t) {
                            return u.RegEx.valueUnwrap.test(t) && (t = t.match(u.RegEx.valueUnwrap)[1]), u.Values.isCSSNullValue(t) && (t = u.Hooks.templates[n][1]), t
                        },
                        extractValue: function(n, t) {
                            var i = u.Hooks.registered[n],
                                r, f;
                            return i ? (r = i[0], f = i[1], (t = u.Hooks.cleanRootPropertyValue(r, t)).toString().match(u.RegEx.valueSplit)[f]) : t
                        },
                        injectValue: function(n, t, i) {
                            var r = u.Hooks.registered[n],
                                f, e, o;
                            return r ? (e = r[0], o = r[1], (f = (i = u.Hooks.cleanRootPropertyValue(e, i)).toString().match(u.RegEx.valueSplit))[o] = t, f.join(" ")) : i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(n, t, i) {
                                switch (n) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var r;
                                        return r = u.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (r = i.toString().match(u.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : i, r;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(n, t, i) {
                                var r, u;
                                switch (n) {
                                    case "name":
                                        return f.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        return r = parseFloat(i), r || 0 === r || (u = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i), r = u ? u[1] : 0), r;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(n, t, i) {
                                if (8 >= h) switch (n) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var r = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return r ? r[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (n) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= h || f.State.isGingerbread || (u.Lists.transformsBase = u.Lists.transformsBase.concat(u.Lists.transforms3D));
                            for (var n = 0; n < u.Lists.transformsBase.length; n++) ! function() {
                                var t = u.Lists.transformsBase[n];
                                u.Normalizations.registered[t] = function(n, i, u) {
                                    switch (n) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return e(i) === r || e(i).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : e(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var o = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(u);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    f.State.isAndroid && e(i).transformCache[t] === r && 1 > u && (u = 1);
                                                    o = !/(\d)$/i.test(u);
                                                    break;
                                                case "skew":
                                                    o = !/(deg|\d)$/i.test(u);
                                                    break;
                                                case "rotate":
                                                    o = !/(deg|\d)$/i.test(u)
                                            }
                                            return o || (e(i).transformCache[t] = "(" + u + ")"), e(i).transformCache[t]
                                    }
                                }
                            }();
                            for (n = 0; n < u.Lists.colors.length; n++) ! function() {
                                var t = u.Lists.colors[n];
                                u.Normalizations.registered[t] = function(n, i, f) {
                                    var e, s, o;
                                    switch (n) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            return u.RegEx.wrappedValueAlreadyExtracted.test(f) ? e = f : (o = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            }, /^[A-z]+$/i.test(f) ? s = o[f] !== r ? o[f] : o.black : u.RegEx.isHex.test(f) ? s = "rgb(" + u.Values.hexToRgb(f).join(" ") + ")" : /^rgba?\(/i.test(f) || (s = o.black), e = (s || f).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")), 8 >= h || 3 !== e.split(" ").length || (e += " 1"), e;
                                        case "inject":
                                            return 8 >= h ? 4 === f.split(" ").length && (f = f.split(/\s+/).slice(0, 3).join(" ")) : 3 === f.split(" ").length && (f += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + f.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(n) {
                            return n.replace(/-(\w)/g, function(n, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(n) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (h || f.State.isAndroid && !f.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(n)
                        },
                        prefixCheck: function(n) {
                            var i;
                            if (f.State.prefixMatches[n]) return [f.State.prefixMatches[n], !0];
                            for (var r = ["", "Webkit", "Moz", "ms", "O"], t = 0, u = r.length; u > t; t++)
                                if (i = 0 === t ? n : r[t] + n.replace(/^\w/, function(n) {
                                        return n.toUpperCase()
                                    }), s.isString(f.State.prefixElement.style[i])) return f.State.prefixMatches[n] = i, [i, !0];
                            return [n, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(n) {
                            var t;
                            return n = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, t, i, r) {
                                return t + t + i + i + r + r
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(n) {
                            return 0 == n || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(n)
                        },
                        getUnitType: function(n) {
                            return /^(rotate|skew)/i.test(n) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(n) ? "" : "px"
                        },
                        getDisplayType: function(n) {
                            var t = n && n.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(n, t) {
                            n.classList ? n.classList.add(t) : n.className += (n.className.length ? " " : "") + t
                        },
                        removeClass: function(n, t) {
                            n.classList ? n.classList.remove(t) : n.className = n.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(n, i, s, c) {
                        function y(n, i) {
                            function s() {
                                a && u.setPropertyValue(n, "display", "none")
                            }
                            var f = 0,
                                l, a, p, w, v;
                            if (8 >= h) f = o.css(n, i);
                            else {
                                if (a = !1, /^(width|height)$/.test(i) && 0 === u.getPropertyValue(n, "display") && (a = !0, u.setPropertyValue(n, "display", u.Values.getDisplayType(n))), !c) {
                                    if ("height" === i && "border-box" !== u.getPropertyValue(n, "boxSizing").toString().toLowerCase()) return p = n.offsetHeight - (parseFloat(u.getPropertyValue(n, "borderTopWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderBottomWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingTop")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingBottom")) || 0), s(), p;
                                    if ("width" === i && "border-box" !== u.getPropertyValue(n, "boxSizing").toString().toLowerCase()) return w = n.offsetWidth - (parseFloat(u.getPropertyValue(n, "borderLeftWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderRightWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingRight")) || 0), s(), w
                                }
                                l = e(n) === r ? t.getComputedStyle(n, null) : e(n).computedStyle ? e(n).computedStyle : e(n).computedStyle = t.getComputedStyle(n, null);
                                "borderColor" === i && (i = "borderTopColor");
                                ("" === (f = 9 === h && "filter" === i ? l.getPropertyValue(i) : l[i]) || null === f) && (f = n.style[i]);
                                s()
                            }
                            return "auto" === f && /^(top|right|bottom|left)$/i.test(i) && (v = y(n, "position"), ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (f = o(n).position()[i] + "px")), f
                        }
                        var l, p, a, w, v;
                        if (u.Hooks.registered[i] ? (p = i, a = u.Hooks.getRoot(p), s === r && (s = u.getPropertyValue(n, u.Names.prefixCheck(a)[0])), u.Normalizations.registered[a] && (s = u.Normalizations.registered[a]("extract", n, s)), l = u.Hooks.extractValue(p, s)) : u.Normalizations.registered[i] && ("transform" !== (w = u.Normalizations.registered[i]("name", n)) && (v = y(n, u.Names.prefixCheck(w)[0]), u.Values.isCSSNullValue(v) && u.Hooks.templates[i] && (v = u.Hooks.templates[i][1])), l = u.Normalizations.registered[i]("extract", n, v)), !/^[\d-]/.test(l))
                            if (e(n) && e(n).isSVG && u.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = n.getBBox()[i]
                                } catch (n) {
                                    l = 0
                                } else l = n.getAttribute(i);
                                else l = y(n, u.Names.prefixCheck(i)[0]);
                        return u.Values.isCSSNullValue(l) && (l = 0), f.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(n, i, r, o, s) {
                        var c = i,
                            a, l;
                        if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = r : "Left" === s.direction ? t.scrollTo(r, s.alternateValue) : t.scrollTo(s.alternateValue, r);
                        else if (u.Normalizations.registered[i] && "transform" === u.Normalizations.registered[i]("name", n)) u.Normalizations.registered[i]("inject", n, r), c = "transform", r = e(n).transformCache[i];
                        else {
                            if (u.Hooks.registered[i] && (a = i, l = u.Hooks.getRoot(i), o = o || u.getPropertyValue(n, l), r = u.Hooks.injectValue(a, r, o), i = l), u.Normalizations.registered[i] && (r = u.Normalizations.registered[i]("inject", n, r), i = u.Normalizations.registered[i]("name", n)), c = u.Names.prefixCheck(i)[0], 8 >= h) try {
                                n.style[c] = r
                            } catch (n) {
                                f.debug && console.log("Browser does not support [" + r + "] for [" + c + "]")
                            } else e(n) && e(n).isSVG && u.Names.SVGAttribute(i) ? n.setAttribute(i, r) : n.style[c] = r;
                            f.debug >= 2 && console.log("Set " + i + " (" + c + "): " + r)
                        }
                        return [c, r]
                    },
                    flushTransformCache: function(n) {
                        function t(t) {
                            return parseFloat(u.getPropertyValue(n, t))
                        }
                        var i = "",
                            r, s, c;
                        (h || f.State.isAndroid && !f.State.isChrome) && e(n).isSVG ? (r = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        }, o.each(e(n).transformCache, function(n) {
                            /^translate/i.test(n) ? n = "translate" : /^scale/i.test(n) ? n = "scale" : /^rotate/i.test(n) && (n = "rotate");
                            r[n] && (i += n + "(" + r[n].join(" ") + ") ", delete r[n])
                        })) : (o.each(e(n).transformCache, function(t) {
                            return s = e(n).transformCache[t], "transformPerspective" === t ? (c = s, !0) : (9 === h && "rotateZ" === t && (t = "rotate"), void(i += t + s + " "))
                        }), c && (i = "perspective" + c + " " + i));
                        u.setPropertyValue(n, "transform", i)
                    }
                }, u.Hooks.register(), u.Normalizations.register(), f.hook = function(n, t, i) {
                    var u = r;
                    return n = p(n), o.each(n, function(n, o) {
                        if (e(o) === r && f.init(o), i === r) u === r && (u = f.CSS.getPropertyValue(o, t));
                        else {
                            var s = f.CSS.setPropertyValue(o, t, i);
                            "transform" === s[0] && f.CSS.flushTransformCache(o);
                            u = s
                        }
                    }), u
                }, c = function() {
                    function ft() {
                        return et ? d.promise || null : vt
                    }
                    var et, vt, rt, w, v, h, yt = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || s.isString(arguments[0].properties)),
                        nt, tt, g, it, d, st, pt, ht, ct, lt, n, l, at, ot, ut;
                    if (s.isWrapped(this) ? (et = !1, rt = 0, w = this, vt = this) : (et = !0, rt = 1, w = yt ? arguments[0].elements || arguments[0].e : arguments[0]), w = p(w)) {
                        if (yt ? (v = arguments[0].properties || arguments[0].p, h = arguments[0].options || arguments[0].o) : (v = arguments[rt], h = arguments[rt + 1]), nt = w.length, tt = 0, !/^(stop|finish)$/i.test(v) && !o.isPlainObject(h))
                            for (h = {}, g = rt + 1; g < arguments.length; g++) s.isArray(arguments[g]) || !/^(fast|normal|slow)$/i.test(arguments[g]) && !/^\d/.test(arguments[g]) ? s.isString(arguments[g]) || s.isArray(arguments[g]) ? h.easing = arguments[g] : s.isFunction(arguments[g]) && (h.complete = arguments[g]) : h.duration = arguments[g];
                        d = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (et && f.Promise && (d.promise = new f.Promise(function(n, t) {
                            d.resolver = n;
                            d.rejecter = t
                        })), v) {
                            case "scroll":
                                it = "scroll";
                                break;
                            case "reverse":
                                it = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                return o.each(w, function(n, t) {
                                    e(t) && e(t).delayTimer && (clearTimeout(e(t).delayTimer.setTimeout), e(t).delayTimer.next && e(t).delayTimer.next(), delete e(t).delayTimer)
                                }), st = [], o.each(f.State.calls, function(n, t) {
                                    t && o.each(t[1], function(i, u) {
                                        var f = h === r ? "" : h;
                                        return !0 !== f && t[2].queue !== f && (h !== r || !1 !== t[2].queue) || void o.each(w, function(i, r) {
                                            r === u && ((!0 === h || s.isString(h)) && (o.each(o.queue(r, s.isString(h) ? h : ""), function(n, t) {
                                                s.isFunction(t) && t(null, !0)
                                            }), o.queue(r, s.isString(h) ? h : "", [])), "stop" === v ? (e(r) && e(r).tweensContainer && !1 !== f && o.each(e(r).tweensContainer, function(n, t) {
                                                t.endValue = t.currentValue
                                            }), st.push(n)) : "finish" === v && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === v && (o.each(st, function(n, t) {
                                    k(t, !0)
                                }), d.promise && d.resolver(w)), ft();
                            default:
                                if (!o.isPlainObject(v) || s.isEmptyObject(v)) return s.isString(v) && f.Redirects[v] ? (pt = (n = o.extend({}, h)).duration, ht = n.delay || 0, !0 === n.backwards && (w = o.extend(!0, [], w).reverse()), o.each(w, function(t, i) {
                                    parseFloat(n.stagger) ? n.delay = ht + parseFloat(n.stagger) * t : s.isFunction(n.stagger) && (n.delay = ht + n.stagger.call(i, t, nt));
                                    n.drag && (n.duration = parseFloat(pt) || (/^(callout|transition)/.test(v) ? 1e3 : y), n.duration = Math.max(n.duration * (n.backwards ? 1 - t / nt : (t + 1) / nt), .75 * n.duration, 200));
                                    f.Redirects[v].call(i, i, n || {}, t, nt, w, d.promise ? d : r)
                                }), ft()) : (ct = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.", d.promise ? d.rejecter(new Error(ct)) : console.log(ct), ft());
                                it = "start"
                        }
                        if (l = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            }, at = [], o.each(w, function(n, c) {
                                s.isNode(c) && function() {
                                    function g(y) {
                                        function gt(t, i) {
                                            var f = r,
                                                o = r,
                                                e = r;
                                            return s.isArray(t) ? (f = t[0], !s.isArray(t[1]) && /^[\d-]/.test(t[1]) || s.isFunction(t[1]) || u.RegEx.isHex.test(t[1]) ? e = t[1] : (s.isString(t[1]) && !u.RegEx.isHex.test(t[1]) || s.isArray(t[1])) && (o = i ? t[1] : b(t[1], n.duration), t[2] !== r && (e = t[2]))) : f = t, i || (o = o || n.easing), s.isFunction(f) && (f = f.call(c, tt, nt)), s.isFunction(e) && (e = e.call(c, tt, nt)), [f || 0, o, e]
                                        }

                                        function ni(n, t) {
                                            var i, r;
                                            return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(n) {
                                                return i = n, ""
                                            }), i || (i = u.Values.getUnitType(n)), [r, i]
                                        }

                                        function ri() {
                                            var s = {
                                                    myParent: c.parentNode || i.body,
                                                    position: u.getPropertyValue(c, "position"),
                                                    fontSize: u.getPropertyValue(c, "fontSize")
                                                },
                                                h = s.position === l.lastPosition && s.myParent === l.lastParent,
                                                a = s.fontSize === l.lastFontSize,
                                                r, n;
                                            return l.lastParent = s.myParent, l.lastPosition = s.position, l.lastFontSize = s.fontSize, r = {}, a && h ? (r.emToPx = l.lastEmToPx, r.percentToPxWidth = l.lastPercentToPxWidth, r.percentToPxHeight = l.lastPercentToPxHeight) : (n = e(c).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div"), f.init(n), s.myParent.appendChild(n), o.each(["overflow", "overflowX", "overflowY"], function(t, i) {
                                                f.CSS.setPropertyValue(n, i, "hidden")
                                            }), f.CSS.setPropertyValue(n, "position", s.position), f.CSS.setPropertyValue(n, "fontSize", s.fontSize), f.CSS.setPropertyValue(n, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, i) {
                                                f.CSS.setPropertyValue(n, i, "100%")
                                            }), f.CSS.setPropertyValue(n, "paddingLeft", "100em"), r.percentToPxWidth = l.lastPercentToPxWidth = (parseFloat(u.getPropertyValue(n, "width", null, !0)) || 1) / 100, r.percentToPxHeight = l.lastPercentToPxHeight = (parseFloat(u.getPropertyValue(n, "height", null, !0)) || 1) / 100, r.emToPx = l.lastEmToPx = (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 1) / 100, s.myParent.removeChild(n)), null === l.remToPx && (l.remToPx = parseFloat(u.getPropertyValue(i.body, "fontSize")) || 16), null === l.vwToPx && (l.vwToPx = parseFloat(t.innerWidth) / 100, l.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = l.remToPx, r.vwToPx = l.vwToPx, r.vhToPx = l.vhToPx, f.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), c), r
                                        }
                                        var vt, ti, wt, ht, bt, ft, ot, ii, g, st, ct, yt, et, lt, pt, dt;
                                        if (n.begin && 0 === tt) try {
                                            n.begin.call(w, w)
                                        } catch (y) {
                                            setTimeout(function() {
                                                throw y;
                                            }, 1)
                                        }
                                        if ("scroll" === it) ht = /^x$/i.test(n.axis) ? "Left" : "Top", bt = parseFloat(n.offset) || 0, n.container ? s.isWrapped(n.container) || s.isNode(n.container) ? (n.container = n.container[0] || n.container, wt = (vt = n.container["scroll" + ht]) + o(c).position()[ht.toLowerCase()] + bt) : n.container = null : (vt = f.State.scrollAnchor[f.State["scrollProperty" + ht]], ti = f.State.scrollAnchor[f.State["scrollProperty" + ("Left" === ht ? "Top" : "Left")]], wt = o(c).offset()[ht.toLowerCase()] + bt), p = {
                                            scroll: {
                                                rootPropertyValue: !1,
                                                startValue: vt,
                                                currentValue: vt,
                                                endValue: wt,
                                                unitType: "",
                                                easing: n.easing,
                                                scrollData: {
                                                    container: n.container,
                                                    direction: ht,
                                                    alternateValue: ti
                                                }
                                            },
                                            element: c
                                        }, f.debug && console.log("tweensContainer (scroll): ", p.scroll, c);
                                        else if ("reverse" === it) {
                                            if (!e(c).tweensContainer) return void o.dequeue(c, n.queue);
                                            "none" === e(c).opts.display && (e(c).opts.display = "auto");
                                            "hidden" === e(c).opts.visibility && (e(c).opts.visibility = "visible");
                                            e(c).opts.loop = !1;
                                            e(c).opts.begin = null;
                                            e(c).opts.complete = null;
                                            h.easing || delete n.easing;
                                            h.duration || delete n.duration;
                                            n = o.extend({}, e(c).opts, n);
                                            ft = o.extend(!0, {}, e(c).tweensContainer);
                                            for (ot in ft) "element" !== ot && (ii = ft[ot].startValue, ft[ot].startValue = ft[ot].currentValue = ft[ot].endValue, ft[ot].endValue = ii, s.isEmptyObject(h) || (ft[ot].easing = n.easing), f.debug && console.log("reverse tweensContainer (" + ot + "): " + JSON.stringify(ft[ot]), c));
                                            p = ft
                                        } else if ("start" === it) {
                                            e(c).tweensContainer && !0 === e(c).isAnimating && (ft = e(c).tweensContainer);
                                            o.each(v, function(n, t) {
                                                var f;
                                                if (RegExp("^" + u.Lists.colors.join("$|^") + "$").test(n)) {
                                                    var e = gt(t, !0),
                                                        o = e[0],
                                                        s = e[1],
                                                        h = e[2];
                                                    if (u.RegEx.isHex.test(o)) {
                                                        for (var c = ["Red", "Green", "Blue"], a = u.Values.hexToRgb(o), l = h ? u.Values.hexToRgb(h) : r, i = 0; i < c.length; i++) f = [a[i]], s && f.push(s), l !== r && f.push(l[i]), v[n + c[i]] = f;
                                                        delete v[n]
                                                    }
                                                }
                                            });
                                            for (g in v) {
                                                var kt = gt(v[g]),
                                                    ut = kt[0],
                                                    ui = kt[1],
                                                    rt = kt[2];
                                                if (g = u.Names.camelCase(g), st = u.Hooks.getRoot(g), ct = !1, e(c).isSVG || "tween" === st || !1 !== u.Names.prefixCheck(st)[1] || u.Normalizations.registered[st] !== r) {
                                                    if ((n.display !== r && null !== n.display && "none" !== n.display || n.visibility !== r && "hidden" !== n.visibility) && /opacity|filter/.test(g) && !rt && 0 !== ut && (rt = 0), n._cacheValues && ft && ft[g] ? (rt === r && (rt = ft[g].endValue + ft[g].unitType), ct = e(c).rootPropertyValueCache[st]) : u.Hooks.registered[g] ? rt === r ? (ct = u.getPropertyValue(c, st), rt = u.getPropertyValue(c, g, ct)) : ct = u.Hooks.templates[st][1] : rt === r && (rt = u.getPropertyValue(c, g)), pt = !1, rt = (yt = ni(g, rt))[0], lt = yt[1], ut = (yt = ni(g, ut))[0].replace(/^([+-\/*])=/, function(n, t) {
                                                            return pt = t, ""
                                                        }), et = yt[1], rt = parseFloat(rt) || 0, ut = parseFloat(ut) || 0, "%" === et && (/^(fontSize|lineHeight)$/.test(g) ? (ut /= 100, et = "em") : /^scale/.test(g) ? (ut /= 100, et = "") : /(Red|Green|Blue)$/i.test(g) && (ut = ut / 100 * 255, et = "")), /[\/*]/.test(pt)) et = lt;
                                                    else if (lt !== et && 0 !== rt)
                                                        if (0 === ut) et = lt;
                                                        else {
                                                            k = k || ri();
                                                            dt = /margin|padding|left|right|width|text|word|letter/i.test(g) || /X$/.test(g) || "x" === g ? "x" : "y";
                                                            switch (lt) {
                                                                case "%":
                                                                    rt *= "x" === dt ? k.percentToPxWidth : k.percentToPxHeight;
                                                                    break;
                                                                case "px":
                                                                    break;
                                                                default:
                                                                    rt *= k[lt + "ToPx"]
                                                            }
                                                            switch (et) {
                                                                case "%":
                                                                    rt *= 1 / ("x" === dt ? k.percentToPxWidth : k.percentToPxHeight);
                                                                    break;
                                                                case "px":
                                                                    break;
                                                                default:
                                                                    rt *= 1 / k[et + "ToPx"]
                                                            }
                                                        }
                                                    switch (pt) {
                                                        case "+":
                                                            ut = rt + ut;
                                                            break;
                                                        case "-":
                                                            ut = rt - ut;
                                                            break;
                                                        case "*":
                                                            ut *= rt;
                                                            break;
                                                        case "/":
                                                            ut = rt / ut
                                                    }
                                                    p[g] = {
                                                        rootPropertyValue: ct,
                                                        startValue: rt,
                                                        currentValue: rt,
                                                        endValue: ut,
                                                        unitType: et,
                                                        easing: ui
                                                    };
                                                    f.debug && console.log("tweensContainer (" + g + "): " + JSON.stringify(p[g]), c)
                                                } else f.debug && console.log("Skipping [" + st + "] due to a lack of browser support.")
                                            }
                                            p.element = c
                                        }
                                        p.element && (u.Values.addClass(c, "velocity-animating"), at.push(p), "" === n.queue && (e(c).tweensContainer = p, e(c).opts = n), e(c).isAnimating = !0, tt === nt - 1 ? (f.State.calls.push([at, w, n, null, d.resolver]), !1 === f.State.isTicking && (f.State.isTicking = !0, a())) : tt++)
                                    }
                                    var k, c = this,
                                        n = o.extend({}, f.defaults, h),
                                        p = {};
                                    switch (e(c) === r && f.init(c), parseFloat(n.delay) && !1 !== n.queue && o.queue(c, n.queue, function(t) {
                                        f.velocityQueueEntryFlag = !0;
                                        e(c).delayTimer = {
                                            setTimeout: setTimeout(t, parseFloat(n.delay)),
                                            next: t
                                        }
                                    }), n.duration.toString().toLowerCase()) {
                                        case "fast":
                                            n.duration = 200;
                                            break;
                                        case "normal":
                                            n.duration = y;
                                            break;
                                        case "slow":
                                            n.duration = 600;
                                            break;
                                        default:
                                            n.duration = parseFloat(n.duration) || 1
                                    }!1 !== f.mock && (!0 === f.mock ? n.duration = n.delay = 1 : (n.duration *= parseFloat(f.mock) || 1, n.delay *= parseFloat(f.mock) || 1));
                                    n.easing = b(n.easing, n.duration);
                                    n.begin && !s.isFunction(n.begin) && (n.begin = null);
                                    n.progress && !s.isFunction(n.progress) && (n.progress = null);
                                    n.complete && !s.isFunction(n.complete) && (n.complete = null);
                                    n.display !== r && null !== n.display && (n.display = n.display.toString().toLowerCase(), "auto" === n.display && (n.display = f.CSS.Values.getDisplayType(c)));
                                    n.visibility !== r && null !== n.visibility && (n.visibility = n.visibility.toString().toLowerCase());
                                    n.mobileHA = n.mobileHA && f.State.isMobile && !f.State.isGingerbread;
                                    !1 === n.queue ? n.delay ? setTimeout(g, n.delay) : g() : o.queue(c, n.queue, function(n, t) {
                                        return !0 === t ? (d.promise && d.resolver(w), !0) : (f.velocityQueueEntryFlag = !0, void g())
                                    });
                                    "" !== n.queue && "fx" !== n.queue || "inprogress" === o.queue(c)[0] || o.dequeue(c)
                                }.call(c)
                            }), (n = o.extend({}, f.defaults, h)).loop = parseInt(n.loop), lt = 2 * n.loop - 1, n.loop)
                            for (ot = 0; lt > ot; ot++) ut = {
                                delay: n.delay,
                                progress: n.progress
                            }, ot === lt - 1 && (ut.display = n.display, ut.visibility = n.visibility, ut.complete = n.complete), c(w, "reverse", ut);
                        return ft()
                    }
                }, (f = o.extend(c, f)).animate = c, l = t.requestAnimationFrame || d, f.State.isMobile || i.hidden === r || i.addEventListener("visibilitychange", function() {
                    i.hidden ? (l = function(n) {
                        return setTimeout(function() {
                            n(!0)
                        }, 16)
                    }, a()) : l = t.requestAnimationFrame || d
                }), n.Velocity = f, n !== t && (n.fn.velocity = c, n.fn.velocity.defaults = f.defaults), o.each(["Down", "Up"], function(n, t) {
                    f.Redirects["slide" + t] = function(n, i, u, e, s, h) {
                        var c = o.extend({}, i),
                            v = c.begin,
                            y = c.complete,
                            a = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            l = {};
                        c.display === r && (c.display = "Down" === t ? "inline" === f.CSS.Values.getDisplayType(n) ? "inline-block" : "block" : "none");
                        c.begin = function() {
                            var i, r;
                            v && v.call(s, s);
                            for (i in a) l[i] = n.style[i], r = f.CSS.getPropertyValue(n, i), a[i] = "Down" === t ? [r, 0] : [0, r];
                            l.overflow = n.style.overflow;
                            n.style.overflow = "hidden"
                        };
                        c.complete = function() {
                            for (var t in l) n.style[t] = l[t];
                            y && y.call(s, s);
                            h && h.resolver(s)
                        };
                        f(n, a, c)
                    }
                }),
                o.each(["In", "Out"], function(n, t) {
                    f.Redirects["fade" + t] = function(n, i, u, e, s, h) {
                        var c = o.extend({}, i),
                            a = {
                                opacity: "In" === t ? 1 : 0
                            },
                            l = c.complete;
                        c.complete = u !== e - 1 ? c.begin = null : function() {
                            l && l.call(s, s);
                            h && h.resolver(s)
                        };
                        c.display === r && (c.display = "In" === t ? "auto" : "none");
                        f(this, a, c)
                    }
                }), f
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(n, t, i, r) {
        "use strict";

        // function oi(n, t, i) {
        //     return setTimeout(hi(n, i), t)
        // }

        // function nt(n, t, i) {
        //     return !!Array.isArray(n) && (a(n, i[t], i), !0)
        // }

        // function a(n, t, i) {
        //     var u;
        //     if (n)
        //         if (n.forEach) n.forEach(t, i);
        //         else if (n.length !== r)
        //         for (u = 0; u < n.length;) t.call(i, n[u], u, n), u++;
        //     else
        //         for (u in n) n.hasOwnProperty(u) && t.call(i, n[u], u, n)
        // }

        // function b(n, t, i) {
        //     for (var f = Object.keys(t), u = 0; u < f.length;)(!i || i && n[f[u]] === r) && (n[f[u]] = t[f[u]]), u++;
        //     return n
        // }

        // function si(n, t) {
        //     return b(n, t, !0)
        // }

        // function o(n, t, i) {
        //     var r, u = t.prototype;
        //     (r = n.prototype = Object.create(u)).constructor = n;
        //     r._super = u;
        //     i && b(r, i)
        // }

        // function hi(n, t) {
        //     return function() {
        //         return n.apply(t, arguments)
        //     }
        // }

        // function ci(n, t) {
        //     return typeof n == vr ? n.apply(t && t[0] || r, t) : n
        // }

        // function ir(n, t) {
        //     return n === r ? t : n
        // }

        // function yt(n, t, i) {
        //     a(wt(t), function(t) {
        //         n.addEventListener(t, i, !1)
        //     })
        // }

        // function pt(n, t, i) {
        //     a(wt(t), function(t) {
        //         n.removeEventListener(t, i, !1)
        //     })
        // }

        // function rr(n, t) {
        //     for (; n;) {
        //         if (n == t) return !0;
        //         n = n.parentNode
        //     }
        //     return !1
        // }

        // function k(n, t) {
        //     return n.indexOf(t) > -1
        // }

        // function wt(n) {
        //     return n.trim().split(/\s+/g)
        // }

        // function tt(n, t, i) {
        //     if (n.indexOf && !i) return n.indexOf(t);
        //     for (var r = 0; r < n.length;) {
        //         if (i && n[r][i] == t || !i && n[r] === t) return r;
        //         r++
        //     }
        //     return -1
        // }

        // function bt(n) {
        //     return Array.prototype.slice.call(n, 0)
        // }

        // function ur(n, t, i) {
        //     for (var f, u = [], e = [], r = 0; r < n.length;) f = t ? n[r][t] : n[r], tt(e, f) < 0 && u.push(n[r]), e[r] = f, r++;
        //     return i && (u = t ? u.sort(function(n, i) {
        //         return n[t] > i[t]
        //     }) : u.sort()), u
        // }

        function kt(n, t) {
            for (var u, f, e = t[0].toUpperCase() + t.slice(1), i = 0; i < ar.length;) {
                if ((f = (u = ar[i]) ? u + e : t) in n) return f;
                i++
            }
            return r
        }

        // function fr(n) {
        //     var t = n.ownerDocument;
        //     return t.defaultView || t.parentWindow
        // }

        // function s(n, t) {
        //     var i = this;
        //     this.manager = n;
        //     this.callback = t;
        //     this.element = n.element;
        //     this.target = n.options.inputTarget;
        //     this.domHandler = function(t) {
        //         ci(n.options.enable, [n]) && i.handler(t)
        //     };
        //     this.init()
        // }

        // function uu(n, t, i) {
        //     var o = i.pointers.length,
        //         s = i.changedPointers.length,
        //         h = t & f && 0 == o - s,
        //         c = t & (u | e) && 0 == o - s;
        //     i.isFirst = !!h;
        //     i.isFinal = !!c;
        //     h && (n.session = {});
        //     i.eventType = t,
        //         function(n, t) {
        //             var i = n.session,
        //                 l = t.pointers,
        //                 g = l.length,
        //                 w, b, k, d, s, h, c, a, v, y, p;
        //             i.firstInput || (i.firstInput = er(t));
        //             g > 1 && !i.firstMultiple ? i.firstMultiple = er(t) : 1 === g && (i.firstMultiple = !1);
        //             var nt = i.firstInput,
        //                 o = i.firstMultiple,
        //                 tt = o ? o.center : nt.center,
        //                 it = t.center = or(l);
        //             t.timeStamp = gi();
        //             t.deltaTime = t.timeStamp - nt.timeStamp;
        //             t.angle = li(tt, it);
        //             t.distance = dt(tt, it);
        //             s = i;
        //             h = t;
        //             c = h.center;
        //             a = s.offsetDelta || {};
        //             v = s.prevDelta || {};
        //             y = s.prevInput || {};
        //             (h.eventType === f || y.eventType === u) && (v = s.prevDelta = {
        //                 x: y.deltaX || 0,
        //                 y: y.deltaY || 0
        //             }, a = s.offsetDelta = {
        //                 x: c.x,
        //                 y: c.y
        //             });
        //             h.deltaX = v.x + (c.x - a.x);
        //             h.deltaY = v.y + (c.y - a.y);
        //             t.offsetDirection = sr(t.deltaX, t.deltaY);
        //             t.scale = o ? (k = o.pointers, d = l, dt(d[0], d[1], fi) / dt(k[0], k[1], fi)) : 1;
        //             t.rotation = o ? (w = o.pointers, b = l, li(b[1], b[0], fi) - li(w[1], w[0], fi)) : 0,
        //                 function(n, t) {
        //                     var f, o, s, h, i = n.lastInterval || t,
        //                         c = t.timeStamp - i.timeStamp,
        //                         v;
        //                     if (t.eventType != e && (c > hu || i.velocity === r)) {
        //                         var l = i.deltaX - t.deltaX,
        //                             a = i.deltaY - t.deltaY,
        //                             u = {
        //                                 x: l / (v = c) || 0,
        //                                 y: a / v || 0
        //                             };
        //                         o = u.x;
        //                         s = u.y;
        //                         f = ut(u.x) > ut(u.y) ? u.x : u.y;
        //                         h = sr(l, a);
        //                         n.lastInterval = t
        //                     } else f = i.velocity, o = i.velocityX, s = i.velocityY, h = i.direction;
        //                     t.velocity = f;
        //                     t.velocityX = o;
        //                     t.velocityY = s;
        //                     t.direction = h
        //                 }(i, t);
        //             p = n.element;
        //             rr(t.srcEvent.target, p) && (p = t.srcEvent.target);
        //             t.target = p
        //         }(n, i);
        //     n.emit("hammer.input", i);
        //     n.recognize(i);
        //     n.session.prevInput = i
        // }

        // function er(n) {
        //     for (var i = [], t = 0; t < n.pointers.length;) i[t] = {
        //         clientX: it(n.pointers[t].clientX),
        //         clientY: it(n.pointers[t].clientY)
        //     }, t++;
        //     return {
        //         timeStamp: gi(),
        //         pointers: i,
        //         center: or(i),
        //         deltaX: n.deltaX,
        //         deltaY: n.deltaY
        //     }
        // }

        // function or(n) {
        //     var t = n.length;
        //     if (1 === t) return {
        //         x: it(n[0].clientX),
        //         y: it(n[0].clientY)
        //     };
        //     for (var r = 0, u = 0, i = 0; t > i;) r += n[i].clientX, u += n[i].clientY, i++;
        //     return {
        //         x: it(r / t),
        //         y: it(u / t)
        //     }
        // }

        // function sr(n, t) {
        //     return n === t ? ui : ut(n) >= ut(t) ? n > 0 ? et : ot : t > 0 ? st : ht
        // }

        // function dt(n, t, i) {
        //     i || (i = wr);
        //     var r = t[i[0]] - n[i[0]],
        //         u = t[i[1]] - n[i[1]];
        //     return Math.sqrt(r * r + u * u)
        // }

        // function li(n, t, i) {
        //     i || (i = wr);
        //     var r = t[i[0]] - n[i[0]],
        //         u = t[i[1]] - n[i[1]];
        //     return 180 * Math.atan2(u, r) / Math.PI
        // }

        // function gt() {
        //     this.evEl = lu;
        //     this.evWin = au;
        //     this.allow = !0;
        //     this.pressed = !1;
        //     s.apply(this, arguments)
        // }

        // function ai() {
        //     this.evEl = br;
        //     this.evWin = kr;
        //     s.apply(this, arguments);
        //     this.store = this.manager.session.pointerEvents = []
        // }

        // function hr() {
        //     this.evTarget = wu;
        //     this.evWin = bu;
        //     this.started = !1;
        //     s.apply(this, arguments)
        // }

        // function ni() {
        //     this.evTarget = gr;
        //     this.targetIds = {};
        //     s.apply(this, arguments)
        // }

        // function vi() {
        //     s.apply(this, arguments);
        //     var n = hi(this.handler, this);
        //     this.touch = new ni(this.manager, n);
        //     this.mouse = new gt(this.manager, n)
        // }

        // function yi(n, t) {
        //     this.manager = n;
        //     this.set(t)
        // }

        // function v(n) {
        //     this.id = eu++;
        //     this.manager = null;
        //     this.options = si(n || {}, this.defaults);
        //     this.options.enable = ir(this.options.enable, !0);
        //     this.state = ei;
        //     this.simultaneous = {};
        //     this.requireFail = []
        // }

        // function cr(n) {
        //     return n == ht ? "down" : n == st ? "up" : n == et ? "left" : n == ot ? "right" : ""
        // }

        // function ti(n, t) {
        //     var i = t.manager;
        //     return i ? i.get(n) : n
        // }

        function c() {
            v.apply(this, arguments)
        }

        function ii() {
            c.apply(this, arguments);
            this.pX = null;
            this.pY = null
        }

        function pi() {
            c.apply(this, arguments)
        }

        function wi() {
            v.apply(this, arguments);
            this._timer = null;
            this._input = null
        }

        function bi() {
            c.apply(this, arguments)
        }

        function ki() {
            c.apply(this, arguments)
        }

        function ri() {
            v.apply(this, arguments);
            this.pTime = !1;
            this.pCenter = !1;
            this._timer = null;
            this._input = null;
            this.count = 0
        }

        function p(n, t) {
            return (t = t || {}).recognizers = ir(t.recognizers, p.defaults.preset), new di(n, t)
        }

        // function di(n, t) {
        //     var i;
        //     t = t || {};
        //     this.options = si(t, p.defaults);
        //     this.options.inputTarget = this.options.inputTarget || n;
        //     this.handlers = {};
        //     this.session = {};
        //     this.recognizers = [];
        //     this.element = n;
        //     this.input = new((i = this).options.inputClass || (ou ? ai : su ? ni : yr ? vi : gt))(i, uu);
        //     this.touchAction = new yi(this, this.options.touchAction);
        //     lr(this, !0);
        //     a(t.recognizers, function(n) {
        //         var t = this.add(new n[0](n[1]));
        //         n[2] && t.recognizeWith(n[2]);
        //         n[3] && t.requireFailure(n[3])
        //     }, this)
        // }

        // function lr(n, t) {
        //     var i = n.element;
        //     a(n.options.cssProps, function(n, r) {
        //         i.style[kt(i.style, r)] = t ? n : ""
        //     })
        // }
        var ar = ["", "webkit", "moz", "MS", "ms", "o"],
            fu = t.createElement("div"),
            vr = "function",
            it = Math.round,
            ut = Math.abs,
            gi = Date.now,
            eu = 1,
            yr = "ontouchstart" in n,
            ou = kt(n, "PointerEvent") !== r,
            su = yr && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            ft = "touch",
            nr = "mouse",
            hu = 25,
            f = 1,
            d = 2,
            u = 4,
            e = 8,
            ui = 1,
            et = 2,
            ot = 4,
            st = 8,
            ht = 16,
            l = et | ot,
            g = st | ht,
            pr = l | g,
            wr = ["x", "y"],
            fi = ["clientX", "clientY"],
            dr, gr;
        // s.prototype = {
        //     handler: function() {},
        //     init: function() {
        //         this.evEl && yt(this.element, this.evEl, this.domHandler);
        //         this.evTarget && yt(this.target, this.evTarget, this.domHandler);
        //         this.evWin && yt(fr(this.element), this.evWin, this.domHandler)
        //     },
        //     destroy: function() {
        //         this.evEl && pt(this.element, this.evEl, this.domHandler);
        //         this.evTarget && pt(this.target, this.evTarget, this.domHandler);
        //         this.evWin && pt(fr(this.element), this.evWin, this.domHandler)
        //     }
        // };
        var cu = {
                mousedown: f,
                mousemove: d,
                mouseup: u
            },
            lu = "mousedown",
            au = "mousemove mouseup";
        // o(gt, s, {
        //     handler: function(n) {
        //         var t = cu[n.type];
        //         t & f && 0 === n.button && (this.pressed = !0);
        //         t & d && 1 !== n.which && (t = u);
        //         this.pressed && this.allow && (t & u && (this.pressed = !1), this.callback(this.manager, t, {
        //             pointers: [n],
        //             changedPointers: [n],
        //             pointerType: nr,
        //             srcEvent: n
        //         }))
        //     }
        // });
        var vu = {
                pointerdown: f,
                pointermove: d,
                pointerup: u,
                pointercancel: e,
                pointerout: e
            },
            yu = {
                2: ft,
                3: "pen",
                4: nr,
                5: "kinect"
            },
            br = "pointerdown",
            kr = "pointermove pointerup pointercancel";
        n.MSPointerEvent && (br = "MSPointerDown", kr = "MSPointerMove MSPointerUp MSPointerCancel");
        // o(ai, s, {
        //     handler: function(n) {
        //         var t = this.store,
        //             o = !1,
        //             h = n.type.toLowerCase().replace("ms", ""),
        //             r = vu[h],
        //             s = yu[n.pointerType] || n.pointerType,
        //             c = s == ft,
        //             i = tt(t, n.pointerId, "pointerId");
        //         r & f && (0 === n.button || c) ? 0 > i && (t.push(n), i = t.length - 1) : r & (u | e) && (o = !0);
        //         0 > i || (t[i] = n, this.callback(this.manager, r, {
        //             pointers: t,
        //             changedPointers: [n],
        //             pointerType: s,
        //             srcEvent: n
        //         }), o && t.splice(i, 1))
        //     }
        // });
        var pu = {
                touchstart: f,
                touchmove: d,
                touchend: u,
                touchcancel: e
            },
            wu = "touchstart",
            bu = "touchstart touchmove touchend touchcancel";
        // o(hr, s, {
        //     handler: function(n) {
        //         var i = pu[n.type],
        //             t;
        //         (i === f && (this.started = !0), this.started) && (t = function(n, t) {
        //             var i = bt(n.touches),
        //                 r = bt(n.changedTouches);
        //             return t & (u | e) && (i = ur(i.concat(r), "identifier", !0)), [i, r]
        //         }.call(this, n, i), i & (u | e) && 0 == t[0].length - t[1].length && (this.started = !1), this.callback(this.manager, i, {
        //             pointers: t[0],
        //             changedPointers: t[1],
        //             pointerType: ft,
        //             srcEvent: n
        //         }))
        //     }
        // });
        // dr = {
        //     touchstart: f,
        //     touchmove: d,
        //     touchend: u,
        //     touchcancel: e
        // };
        gr = "touchstart touchmove touchend touchcancel";
        // o(ni, s, {
        //     handler: function(n) {
        //         var i = dr[n.type],
        //             t = function(n, t) {
        //                 var r = bt(n.touches),
        //                     o = this.targetIds;
        //                 if (t & (f | d) && 1 === r.length) return o[r[0].identifier] = !0, [r, r];
        //                 var i, s, h = bt(n.changedTouches),
        //                     c = [],
        //                     l = this.target;
        //                 if (s = r.filter(function(n) {
        //                         return rr(n.target, l)
        //                     }), t === f)
        //                     for (i = 0; i < s.length;) o[s[i].identifier] = !0, i++;
        //                 for (i = 0; i < h.length;) o[h[i].identifier] && c.push(h[i]), t & (u | e) && delete o[h[i].identifier], i++;
        //                 if (c.length) return [ur(s.concat(c), "identifier", !0), c]
        //             }.call(this, n, i);
        //         t && this.callback(this.manager, i, {
        //             pointers: t[0],
        //             changedPointers: t[1],
        //             pointerType: ft,
        //             srcEvent: n
        //         })
        //     }
        // });
        // o(vi, s, {
        //     handler: function(n, t, i) {
        //         var r = i.pointerType == ft,
        //             f = i.pointerType == nr;
        //         if (r) this.mouse.allow = !1;
        //         else if (f && !this.mouse.allow) return;
        //         t & (u | e) && (this.mouse.allow = !0);
        //         this.callback(n, t, i)
        //     },
        //     destroy: function() {
        //         this.touch.destroy();
        //         this.mouse.destroy()
        //     }
        // });
        var nu = kt(fu.style, "touchAction"),
            tu = nu !== r,
            iu = "compute",
            ru = "auto",
            tr = "manipulation",
            ct = "none",
            lt = "pan-x",
            at = "pan-y";
        // yi.prototype = {
        //     set: function(n) {
        //         n == iu && (n = this.compute());
        //         tu && (this.manager.element.style[nu] = n);
        //         this.actions = n.toLowerCase().trim()
        //     },
        //     update: function() {
        //         this.set(this.manager.options.touchAction)
        //     },
        //     compute: function() {
        //         var n = [];
        //         return a(this.manager.recognizers, function(t) {
        //                 ci(t.options.enable, [t]) && (n = n.concat(t.getTouchAction()))
        //             }),
        //             function(n) {
        //                 if (k(n, ct)) return ct;
        //                 var t = k(n, lt),
        //                     i = k(n, at);
        //                 return t && i ? lt + " " + at : t || i ? t ? lt : at : k(n, tr) ? tr : ru
        //             }(n.join(" "))
        //     },
        //     preventDefaults: function(n) {
        //         var t, i;
        //         if (!tu) {
        //             if (t = n.srcEvent, i = n.offsetDirection, this.manager.session.prevented) return void t.preventDefault();
        //             var r = this.actions,
        //                 u = k(r, ct),
        //                 f = k(r, at),
        //                 e = k(r, lt);
        //             return u || f && i & l || e && i & g ? this.preventSrc(t) : void 0
        //         }
        //     },
        //     preventSrc: function(n) {
        //         this.manager.session.prevented = !0;
        //         n.preventDefault()
        //     }
        // };
        var ei = 1,
            h = 2,
            rt = 4,
            w = 8,
            y = w,
            vt = 16;
        // v.prototype = {
        //     defaults: {},
        //     set: function(n) {
        //         return b(this.options, n), this.manager && this.manager.touchAction.update(), this
        //     },
        //     recognizeWith: function(n) {
        //         if (nt(n, "recognizeWith", this)) return this;
        //         var t = this.simultaneous;
        //         return t[(n = ti(n, this)).id] || (t[n.id] = n, n.recognizeWith(this)), this
        //     },
        //     dropRecognizeWith: function(n) {
        //         return nt(n, "dropRecognizeWith", this) ? this : (n = ti(n, this), delete this.simultaneous[n.id], this)
        //     },
        //     requireFailure: function(n) {
        //         if (nt(n, "requireFailure", this)) return this;
        //         var t = this.requireFail;
        //         return -1 === tt(t, n = ti(n, this)) && (t.push(n), n.requireFailure(this)), this
        //     },
        //     dropRequireFailure: function(n) {
        //         if (nt(n, "dropRequireFailure", this)) return this;
        //         n = ti(n, this);
        //         var t = tt(this.requireFail, n);
        //         return t > -1 && this.requireFail.splice(t, 1), this
        //     },
        //     hasRequireFailures: function() {
        //         return this.requireFail.length > 0
        //     },
        //     canRecognizeWith: function(n) {
        //         return !!this.simultaneous[n.id]
        //     },
        //     emit: function(n) {
        //         function t(t) {
        //             var u;
        //             r.manager.emit(r.options.event + (t ? (u = i) & vt ? "cancel" : u & w ? "end" : u & rt ? "move" : u & h ? "start" : "" : ""), n)
        //         }
        //         var r = this,
        //             i = this.state;
        //         w > i && t(!0);
        //         t();
        //         i >= w && t(!0)
        //     },
        //     tryEmit: function(n) {
        //         return this.canEmit() ? this.emit(n) : void(this.state = 32)
        //     },
        //     canEmit: function() {
        //         for (var n = 0; n < this.requireFail.length;) {
        //             if (!(this.requireFail[n].state & (32 | ei))) return !1;
        //             n++
        //         }
        //         return !0
        //     },
        //     recognize: function(n) {
        //         var t = b({}, n);
        //         return ci(this.options.enable, [this, t]) ? (this.state & (y | vt | 32) && (this.state = ei), this.state = this.process(t), void(this.state & (h | rt | w | vt) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
        //     },
        //     process: function() {},
        //     getTouchAction: function() {},
        //     reset: function() {}
        // };
        // o(c, v, {
        //     defaults: {
        //         pointers: 1
        //     },
        //     attrTest: function(n) {
        //         var t = this.options.pointers;
        //         return 0 === t || n.pointers.length === t
        //     },
        //     process: function(n) {
        //         var t = this.state,
        //             i = n.eventType,
        //             r = t & (h | rt),
        //             f = this.attrTest(n);
        //         return r && (i & e || !f) ? t | vt : r || f ? i & u ? t | w : t & h ? t | rt : h : 32
        //     }
        // });
        // o(ii, c, {
        //     defaults: {
        //         event: "pan",
        //         threshold: 10,
        //         pointers: 1,
        //         direction: pr
        //     },
        //     getTouchAction: function() {
        //         var t = this.options.direction,
        //             n = [];
        //         return t & l && n.push(at), t & g && n.push(lt), n
        //     },
        //     directionTest: function(n) {
        //         var i = this.options,
        //             r = !0,
        //             u = n.distance,
        //             t = n.direction,
        //             f = n.deltaX,
        //             e = n.deltaY;
        //         return t & i.direction || (i.direction & l ? (t = 0 === f ? ui : 0 > f ? et : ot, r = f != this.pX, u = Math.abs(n.deltaX)) : (t = 0 === e ? ui : 0 > e ? st : ht, r = e != this.pY, u = Math.abs(n.deltaY))), n.direction = t, r && u > i.threshold && t & i.direction
        //     },
        //     attrTest: function(n) {
        //         return c.prototype.attrTest.call(this, n) && (this.state & h || !(this.state & h) && this.directionTest(n))
        //     },
        //     emit: function(n) {
        //         this.pX = n.deltaX;
        //         this.pY = n.deltaY;
        //         var t = cr(n.direction);
        //         t && this.manager.emit(this.options.event + t, n);
        //         this._super.emit.call(this, n)
        //     }
        // });
        // o(pi, c, {
        //     defaults: {
        //         event: "pinch",
        //         threshold: 0,
        //         pointers: 2
        //     },
        //     getTouchAction: function() {
        //         return [ct]
        //     },
        //     attrTest: function(n) {
        //         return this._super.attrTest.call(this, n) && (Math.abs(n.scale - 1) > this.options.threshold || this.state & h)
        //     },
        //     emit: function(n) {
        //         if (this._super.emit.call(this, n), 1 !== n.scale) {
        //             var t = n.scale < 1 ? "in" : "out";
        //             this.manager.emit(this.options.event + t, n)
        //         }
        //     }
        // });
        // o(wi, v, {
        //     defaults: {
        //         event: "press",
        //         pointers: 1,
        //         time: 500,
        //         threshold: 5
        //     },
        //     getTouchAction: function() {
        //         return [ru]
        //     },
        //     process: function(n) {
        //         var t = this.options,
        //             i = n.pointers.length === t.pointers,
        //             r = n.distance < t.threshold,
        //             o = n.deltaTime > t.time;
        //         if (this._input = n, !r || !i || n.eventType & (u | e) && !o) this.reset();
        //         else if (n.eventType & f) this.reset(), this._timer = oi(function() {
        //             this.state = y;
        //             this.tryEmit()
        //         }, t.time, this);
        //         else if (n.eventType & u) return y;
        //         return 32
        //     },
        //     reset: function() {
        //         clearTimeout(this._timer)
        //     },
        //     emit: function(n) {
        //         this.state === y && (n && n.eventType & u ? this.manager.emit(this.options.event + "up", n) : (this._input.timeStamp = gi(), this.manager.emit(this.options.event, this._input)))
        //     }
        // });
        // o(bi, c, {
        //     defaults: {
        //         event: "rotate",
        //         threshold: 0,
        //         pointers: 2
        //     },
        //     getTouchAction: function() {
        //         return [ct]
        //     },
        //     attrTest: function(n) {
        //         return this._super.attrTest.call(this, n) && (Math.abs(n.rotation) > this.options.threshold || this.state & h)
        //     }
        // });
        // o(ki, c, {
        //     defaults: {
        //         event: "swipe",
        //         threshold: 10,
        //         velocity: .65,
        //         direction: l | g,
        //         pointers: 1
        //     },
        //     getTouchAction: function() {
        //         return ii.prototype.getTouchAction.call(this)
        //     },
        //     attrTest: function(n) {
        //         var t, i = this.options.direction;
        //         return i & (l | g) ? t = n.velocity : i & l ? t = n.velocityX : i & g && (t = n.velocityY), this._super.attrTest.call(this, n) && i & n.direction && n.distance > this.options.threshold && ut(t) > this.options.velocity && n.eventType & u
        //     },
        //     emit: function(n) {
        //         var t = cr(n.direction);
        //         t && this.manager.emit(this.options.event + t, n);
        //         this.manager.emit(this.options.event, n)
        //     }
        // });
        // o(ri, v, {
        //     defaults: {
        //         event: "tap",
        //         pointers: 1,
        //         taps: 1,
        //         interval: 300,
        //         time: 250,
        //         threshold: 2,
        //         posThreshold: 10
        //     },
        //     getTouchAction: function() {
        //         return [tr]
        //     },
        //     process: function(n) {
        //         var t = this.options,
        //             e = n.pointers.length === t.pointers,
        //             o = n.distance < t.threshold,
        //             s = n.deltaTime < t.time,
        //             i, r;
        //         if (this.reset(), n.eventType & f && 0 === this.count) return this.failTimeout();
        //         if (o && s && e) {
        //             if (n.eventType != u) return this.failTimeout();
        //             if (i = !this.pTime || n.timeStamp - this.pTime < t.interval, r = !this.pCenter || dt(this.pCenter, n.center) < t.posThreshold, this.pTime = n.timeStamp, this.pCenter = n.center, r && i ? this.count += 1 : this.count = 1, this._input = n, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = oi(function() {
        //                 this.state = y;
        //                 this.tryEmit()
        //             }, t.interval, this), h) : y
        //         }
        //         return 32
        //     },
        //     failTimeout: function() {
        //         return this._timer = oi(function() {
        //             this.state = 32
        //         }, this.options.interval, this), 32
        //     },
        //     reset: function() {
        //         clearTimeout(this._timer)
        //     },
        //     emit: function() {
        //         this.state == y && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        //     }
        // });
        p.VERSION = "2.0.4";
        p.defaults = {
            domEvents: !1,
            touchAction: iu,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [bi, {
                    enable: !1
                }],
                [pi, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ki, {
                    direction: l
                }],
                [ii, {
                        direction: l
                    },
                    ["swipe"]
                ],
                [ri],
                [ri, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [wi]
            ],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        // di.prototype = {
        //     set: function(n) {
        //         return b(this.options, n), n.touchAction && this.touchAction.update(), n.inputTarget && (this.input.destroy(), this.input.target = n.inputTarget, this.input.init()), this
        //     },
        //     stop: function(n) {
        //         this.session.stopped = n ? 2 : 1
        //     },
        //     recognize: function(n) {
        //         var r = this.session,
        //             i, f, t, u;
        //         if (!r.stopped)
        //             for (this.touchAction.preventDefaults(n), f = this.recognizers, t = r.curRecognizer, (!t || t && t.state & y) && (t = r.curRecognizer = null), u = 0; u < f.length;) i = f[u], 2 === r.stopped || t && i != t && !i.canRecognizeWith(t) ? i.reset() : i.recognize(n), !t && i.state & (h | rt | w) && (t = r.curRecognizer = i), u++
        //     },
        //     get: function(n) {
        //         if (n instanceof v) return n;
        //         for (var i = this.recognizers, t = 0; t < i.length; t++)
        //             if (i[t].options.event == n) return i[t];
        //         return null
        //     },
        //     add: function(n) {
        //         if (nt(n, "add", this)) return this;
        //         var t = this.get(n.options.event);
        //         return t && this.remove(t), this.recognizers.push(n), n.manager = this, this.touchAction.update(), n
        //     },
        //     remove: function(n) {
        //         if (nt(n, "remove", this)) return this;
        //         var t = this.recognizers;
        //         return n = this.get(n), t.splice(tt(t, n), 1), this.touchAction.update(), this
        //     },
        //     on: function(n, t) {
        //         var i = this.handlers;
        //         return a(wt(n), function(n) {
        //             i[n] = i[n] || [];
        //             i[n].push(t)
        //         }), this
        //     },
        //     off: function(n, t) {
        //         var i = this.handlers;
        //         return a(wt(n), function(n) {
        //             t ? i[n].splice(tt(i[n], t), 1) : delete i[n]
        //         }), this
        //     },
        //     emit: function(n, i) {
        //         var o, f, e, r, u;
        //         if (this.options.domEvents && (o = n, f = i, (e = t.createEvent("Event")).initEvent(o, !0, !0), e.gesture = f, f.target.dispatchEvent(e)), r = this.handlers[n] && this.handlers[n].slice(), r && r.length)
        //             for (i.type = n, i.preventDefault = function() {
        //                     i.srcEvent.preventDefault()
        //                 }, u = 0; u < r.length;) r[u](i), u++
        //     },
        //     destroy: function() {
        //         this.element && lr(this, !1);
        //         this.handlers = {};
        //         this.session = {};
        //         this.input.destroy();
        //         this.element = null
        //     }
        // };
        // b(p, {
        //     INPUT_START: f,
        //     INPUT_MOVE: d,
        //     INPUT_END: u,
        //     INPUT_CANCEL: e,
        //     STATE_POSSIBLE: ei,
        //     STATE_BEGAN: h,
        //     STATE_CHANGED: rt,
        //     STATE_ENDED: w,
        //     STATE_RECOGNIZED: y,
        //     STATE_CANCELLED: vt,
        //     STATE_FAILED: 32,
        //     DIRECTION_NONE: ui,
        //     DIRECTION_LEFT: et,
        //     DIRECTION_RIGHT: ot,
        //     DIRECTION_UP: st,
        //     DIRECTION_DOWN: ht,
        //     DIRECTION_HORIZONTAL: l,
        //     DIRECTION_VERTICAL: g,
        //     DIRECTION_ALL: pr,
        //     Manager: di,
        //     Input: s,
        //     TouchAction: yi,
        //     TouchInput: ni,
        //     MouseInput: gt,
        //     PointerEventInput: ai,
        //     TouchMouseInput: vi,
        //     SingleTouchInput: hr,
        //     Recognizer: v,
        //     AttrRecognizer: c,
        //     Tap: ri,
        //     Pan: ii,
        //     Swipe: ki,
        //     Pinch: pi,
        //     Rotate: bi,
        //     Press: wi,
        //     on: yt,
        //     off: pt,
        //     each: a,
        //     merge: si,
        //     extend: b,
        //     inherit: o,
        //     bindFn: hi,
        //     prefixed: kt
        // });
        typeof define == vr && define.amd ? define(function() {
            return p
        }) : "undefined" != typeof module && module.exports ? module.exports = p : n.Hammer = p
    }(window, document),
    // function(n) {
    //     "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], n) : "object" == typeof exports ? n(require("jquery"), require("hammerjs")) : n(jQuery, Hammer)
    // }
    (function(n, t) {
        var i;
        n.fn.hammer = function(i) {
            return this.each(function() {
                var u, r;
                u = i;
                (r = n(this)).data("hammer") || r.data("hammer", new t(r[0], u))
            })
        };
        t.Manager.prototype.emit = (i = t.Manager.prototype.emit, function(t, r) {
            i.call(this, t, r);
            n(this.element).trigger({
                type: t,
                gesture: r
            })
        })
    }),
    function(n) {
        n.Package ? Materialize = {} : n.Materialize = {}
    }
    (window),
    // function(n) {
    //     for (var f = 0, r = ["webkit", "moz"], t = n.requestAnimationFrame, i = n.cancelAnimationFrame, u = r.length; --u >= 0 && !t;) t = n[r[u] + "RequestAnimationFrame"], i = n[r[u] + "CancelRequestAnimationFrame"];
    //     t && i || (t = function(n) {
    //         var t = +Date.now(),
    //             i = Math.max(f + 16, t);
    //         return setTimeout(function() {
    //             n(f = i)
    //         }, i - t)
    //     }, i = clearTimeout);
    //     n.requestAnimationFrame = t;
    //     n.cancelAnimationFrame = i
    // }
    (window);
Materialize.objectSelectorString = function(n) {
    return ((n.prop("tagName") || "") + (n.attr("id") || "") + (n.attr("class") || "")).replace(/\s/g, "")
};
Materialize.guid = function() {
    function n() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
    }
}();
Materialize.escapeHash = function(n) {
    return n.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
};
Materialize.elementOrParentIsFixed = function(n) {
    var t = $(n),
        i = !1;
    return t.add(t.parents()).each(function() {
        if ("fixed" === $(this).css("position")) return i = !0, !1
    }), i
};
getTime = Date.now || function() {
    return (new Date).getTime()
};
Materialize.throttle = function(n, t, i) {
    var r, u, o, f = null,
        e = 0,
        s;
    return i || (i = {}), s = function() {
            e = !1 === i.leading ? 0 : getTime();
            f = null;
            o = n.apply(r, u);
            r = u = null
        },
        function() {
            var h = getTime(),
                c;
            return e || !1 !== i.leading || (e = h), c = t - (h - e), r = this, u = arguments, c <= 0 ? (clearTimeout(f), f = null, e = h, o = n.apply(r, u), r = u = null) : f || !1 === i.trailing || (f = setTimeout(s, c)), o
        }
};
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
    // function(n) {
    //     n.fn.collapsible = function(t, i) {
    //         var r = t;
    //         return t = n.extend({
    //             accordion: void 0,
    //             onOpen: void 0,
    //             onClose: void 0
    //         }, t), this.each(function() {
    //             function o(i, r) {
    //                 var s, o;
    //                 r || i.toggleClass("active");
    //                 t.accordion || "accordion" === e || void 0 === e ? (o = i, u = f.find("> li > .collapsible-header"), o.hasClass("active") ? o.parent().addClass("active") : o.parent().removeClass("active"), o.parent().hasClass("active") ? o.siblings(".collapsible-body").stop(!0, !1).slideDown({
    //                     duration: 350,
    //                     easing: "easeOutQuart",
    //                     queue: !1,
    //                     complete: function() {
    //                         n(this).css("height", "")
    //                     }
    //                 }) : o.siblings(".collapsible-body").stop(!0, !1).slideUp({
    //                     duration: 350,
    //                     easing: "easeOutQuart",
    //                     queue: !1,
    //                     complete: function() {
    //                         n(this).css("height", "")
    //                     }
    //                 }), u.not(o).removeClass("active").parent().removeClass("active"), u.not(o).parent().children(".collapsible-body").stop(!0, !1).each(function() {
    //                     n(this).is(":visible") && n(this).slideUp({
    //                         duration: 350,
    //                         easing: "easeOutQuart",
    //                         queue: !1,
    //                         complete: function() {
    //                             n(this).css("height", "");
    //                             h(n(this).siblings(".collapsible-header"))
    //                         }
    //                     })
    //                 })) : ((s = i).hasClass("active") ? s.parent().addClass("active") : s.parent().removeClass("active"), s.parent().hasClass("active") ? s.siblings(".collapsible-body").stop(!0, !1).slideDown({
    //                     duration: 350,
    //                     easing: "easeOutQuart",
    //                     queue: !1,
    //                     complete: function() {
    //                         n(this).css("height", "")
    //                     }
    //                 }) : s.siblings(".collapsible-body").stop(!0, !1).slideUp({
    //                     duration: 350,
    //                     easing: "easeOutQuart",
    //                     queue: !1,
    //                     complete: function() {
    //                         n(this).css("height", "")
    //                     }
    //                 }));
    //                 h(i)
    //             }

    //             function h(n) {
    //                 n.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, n.parent()) : "function" == typeof t.onClose && t.onClose.call(this, n.parent())
    //             }

    //             function c(n) {
    //                 return n.closest("li > .collapsible-header")
    //             }

    //             function l() {
    //                 f.off("click.collapse", "> li > .collapsible-header")
    //             }
    //             var f = n(this),
    //                 u = n(this).find("> li > .collapsible-header"),
    //                 e = f.data("collapsible"),
    //                 s;
    //             "destroy" !== r ? i >= 0 && i < u.length ? (s = u.eq(i), s.length && ("open" === r || "close" === r && s.hasClass("active")) && o(s)) : (l(), f.on("click.collapse", "> li > .collapsible-header", function(t) {
    //                 var i = n(t.target);
    //                 c(i).length > 0 && (i = c(i));
    //                 o(i)
    //             }), t.accordion || "accordion" === e || void 0 === e ? o(u.filter(".active").first(), !0) : u.filter(".active").each(function() {
    //                 o(n(this), !0)
    //             })) : l()
    //         })
    //     };
    //     n(document).ready(function() {
    //         n(".collapsible").collapsible()
    //     })
    // }
    (jQuery),
    // function(n) {
    //     n.fn.scrollTo = function(t) {
    //         return n(this).scrollTop(n(this).scrollTop() - n(this).offset().top + n(t).offset().top), this
    //     };
    //     n.fn.dropdown = function(t) {
    //         var i = {
    //             inDuration: 300,
    //             outDuration: 225,
    //             constrainWidth: !0,
    //             hover: !1,
    //             gutter: 0,
    //             belowOrigin: !1,
    //             alignment: "left",
    //             stopPropagation: !1
    //         };
    //         return "open" === t ? (this.each(function() {
    //             n(this).trigger("open")
    //         }), !1) : "close" === t ? (this.each(function() {
    //             n(this).trigger("close")
    //         }), !1) : void this.each(function() {
    //             function c() {
    //                 void 0 !== r.data("induration") && (f.inDuration = r.data("induration"));
    //                 void 0 !== r.data("outduration") && (f.outDuration = r.data("outduration"));
    //                 void 0 !== r.data("constrainwidth") && (f.constrainWidth = r.data("constrainwidth"));
    //                 void 0 !== r.data("hover") && (f.hover = r.data("hover"));
    //                 void 0 !== r.data("gutter") && (f.gutter = r.data("gutter"));
    //                 void 0 !== r.data("beloworigin") && (f.belowOrigin = r.data("beloworigin"));
    //                 void 0 !== r.data("alignment") && (f.alignment = r.data("alignment"));
    //                 void 0 !== r.data("stoppropagation") && (f.stopPropagation = r.data("stoppropagation"))
    //             }

    //             function h(t) {
    //                 var d;
    //                 "focus" === t && (s = !0);
    //                 c();
    //                 u.addClass("active");
    //                 r.addClass("active");
    //                 !0 === f.constrainWidth ? u.css("width", r.outerWidth()) : u.css("white-space", "nowrap");
    //                 var p = window.innerHeight,
    //                     l = r.innerHeight(),
    //                     w = r.offset().left,
    //                     a = r.offset().top - n(window).scrollTop(),
    //                     h = f.alignment,
    //                     v = 0,
    //                     y = 0,
    //                     o = 0;
    //                 !0 === f.belowOrigin && (o = l);
    //                 var b = 0,
    //                     k = 0,
    //                     i = r.parent();
    //                 (i.is("body") || (i[0].scrollHeight > i[0].clientHeight && (b = i[0].scrollTop), i[0].scrollWidth > i[0].clientWidth && (k = i[0].scrollLeft)), w + u.innerWidth() > n(window).width() ? h = "right" : w - u.innerWidth() + r.innerWidth() < 0 && (h = "left"), a + u.innerHeight() > p) && (a + l - u.innerHeight() < 0 ? (d = p - a - o, u.css("max-height", d)) : (o || (o += l), o -= u.innerHeight()));
    //                 "left" === h ? (v = f.gutter, y = r.position().left + v) : "right" === h && (y = r.position().left + r.outerWidth() - u.outerWidth() + (v = -f.gutter));
    //                 u.css({
    //                     position: "absolute",
    //                     top: r.position().top + o + b,
    //                     left: y + k
    //                 });
    //                 u.stop(!0, !0).css("opacity", 0).slideDown({
    //                     queue: !1,
    //                     duration: f.inDuration,
    //                     easing: "easeOutCubic",
    //                     complete: function() {
    //                         n(this).css("height", "")
    //                     }
    //                 }).animate({
    //                     opacity: 1
    //                 }, {
    //                     queue: !1,
    //                     duration: f.inDuration,
    //                     easing: "easeOutSine"
    //                 });
    //                 setTimeout(function() {
    //                     n(document).bind("click." + u.attr("id"), function() {
    //                         e();
    //                         n(document).unbind("click." + u.attr("id"))
    //                     })
    //                 }, 0)
    //             }

    //             function e() {
    //                 s = !1;
    //                 u.fadeOut(f.outDuration);
    //                 u.removeClass("active");
    //                 r.removeClass("active");
    //                 n(document).unbind("click." + u.attr("id"));
    //                 setTimeout(function() {
    //                     u.css("max-height", "")
    //                 }, f.outDuration)
    //             }
    //             var r = n(this),
    //                 f = n.extend({}, i, t),
    //                 s = !1,
    //                 u = n("#" + r.attr("data-activates")),
    //                 o;
    //             (c(), r.after(u), f.hover) ? (o = !1, r.unbind("click." + r.attr("id")), r.on("mouseenter", function() {
    //                 !1 === o && (h(), o = !0)
    //             }), r.on("mouseleave", function(t) {
    //                 var i = t.toElement || t.relatedTarget;
    //                 n(i).closest(".dropdown-content").is(u) || (u.stop(!0, !0), e(), o = !1)
    //             }), u.on("mouseleave", function(t) {
    //                 var i = t.toElement || t.relatedTarget;
    //                 n(i).closest(".dropdown-button").is(r) || (u.stop(!0, !0), e(), o = !1)
    //             })) : (r.unbind("click." + r.attr("id")), r.bind("click." + r.attr("id"), function(t) {
    //                 s || (r[0] != t.currentTarget || r.hasClass("active") || 0 !== n(t.target).closest(".dropdown-content").length ? r.hasClass("active") && (e(), n(document).unbind("click." + u.attr("id"))) : (t.preventDefault(), f.stopPropagation && t.stopPropagation(), h("click")))
    //             }));
    //             r.on("open", function(n, t) {
    //                 h(t)
    //             });
    //             r.on("close", e)
    //         })
    //     };
    //     n(document).ready(function() {
    //         n(".dropdown-button").dropdown()
    //     })
    // }
    (jQuery),
    // function(n) {
    //     var i = 0,
    //         r = 0,
    //         t = {
    //             init: function(t) {
    //                 return t = n.extend({
    //                     opacity: .5,
    //                     inDuration: 350,
    //                     outDuration: 250,
    //                     ready: void 0,
    //                     complete: void 0,
    //                     dismissible: !0,
    //                     startingTop: "4%",
    //                     endingTop: "10%"
    //                 }, t), this.each(function() {
    //                     var u = n(this),
    //                         f = n(this).attr("id") || "#" + n(this).data("target"),
    //                         e = function() {
    //                             var f = u.data("overlay-id"),
    //                                 e = n("#" + f),
    //                                 r;
    //                             u.removeClass("open");
    //                             n("body").css({
    //                                 overflow: "",
    //                                 width: ""
    //                             });
    //                             u.find(".modal-close").off("click.close");
    //                             n(document).off("keyup.modal" + f);
    //                             e.velocity({
    //                                 opacity: 0
    //                             }, {
    //                                 duration: t.outDuration,
    //                                 queue: !1,
    //                                 ease: "easeOutQuart"
    //                             });
    //                             r = {
    //                                 duration: t.outDuration,
    //                                 queue: !1,
    //                                 ease: "easeOutCubic",
    //                                 complete: function() {
    //                                     n(this).css({
    //                                         display: "none"
    //                                     });
    //                                     "function" == typeof t.complete && t.complete.call(this, u);
    //                                     e.remove();
    //                                     i--
    //                                 }
    //                             };
    //                             u.hasClass("bottom-sheet") ? u.velocity({
    //                                 bottom: "-100%",
    //                                 opacity: 0
    //                             }, r) : u.velocity({
    //                                 top: t.startingTop,
    //                                 opacity: 0,
    //                                 scaleX: .7
    //                             }, r)
    //                         },
    //                         o = function(f) {
    //                             var h = n("body"),
    //                                 l = h.innerWidth(),
    //                                 s, o, c;
    //                             (h.css("overflow", "hidden"), h.width(l), u.hasClass("open")) || (s = "materialize-modal-overlay-" + ++r, o = n('<div class="modal-overlay"><\/div>'), lStack = ++i, o.attr("id", s).css("z-index", 1e3 + 2 * lStack), u.data("overlay-id", s).css("z-index", 1e3 + 2 * lStack + 1), u.addClass("open"), n("body").append(o), t.dismissible && (o.click(function() {
    //                                 e()
    //                             }), n(document).on("keyup.modal" + s, function(n) {
    //                                 27 === n.keyCode && e()
    //                             })), u.find(".modal-close").on("click.close", function() {
    //                                 e()
    //                             }), o.css({
    //                                 display: "block",
    //                                 opacity: 0
    //                             }), u.css({
    //                                 display: "block",
    //                                 opacity: 0
    //                             }), o.velocity({
    //                                 opacity: t.opacity
    //                             }, {
    //                                 duration: t.inDuration,
    //                                 queue: !1,
    //                                 ease: "easeOutCubic"
    //                             }), u.data("associated-overlay", o[0]), c = {
    //                                 duration: t.inDuration,
    //                                 queue: !1,
    //                                 ease: "easeOutCubic",
    //                                 complete: function() {
    //                                     "function" == typeof t.ready && t.ready.call(this, u, f)
    //                                 }
    //                             }, u.hasClass("bottom-sheet") ? u.velocity({
    //                                 bottom: "0",
    //                                 opacity: 1
    //                             }, c) : (n.Velocity.hook(u, "scaleX", .7), u.css({
    //                                 top: t.startingTop
    //                             }), u.velocity({
    //                                 top: t.endingTop,
    //                                 opacity: 1,
    //                                 scaleX: "1"
    //                             }, c)))
    //                         };
    //                     n(document).off("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]');
    //                     n(this).off("openModal");
    //                     n(this).off("closeModal");
    //                     n(document).on("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]', function(i) {
    //                         t.startingTop = (n(this).offset().top - n(window).scrollTop()) / 1.15;
    //                         o(n(this));
    //                         i.preventDefault()
    //                     });
    //                     n(this).on("openModal", function() {
    //                         n(this).attr("href") || n(this).data("target");
    //                         o()
    //                     });
    //                     n(this).on("closeModal", function() {
    //                         e()
    //                     })
    //                 })
    //             },
    //             open: function() {
    //                 n(this).trigger("openModal")
    //             },
    //             close: function() {
    //                 n(this).trigger("closeModal")
    //             }
    //         };
    //     n.fn.modal = function(i) {
    //         return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void n.error("Method " + i + " does not exist on jQuery.modal") : t.init.apply(this, arguments)
    //     }
    // }
    (jQuery),
    // function(n) {
    //     n.fn.materialbox = function() {
    //         return this.each(function() {
    //             function e() {
    //                 i = !1;
    //                 var u = t.parent(".material-placeholder"),
    //                     e = (window.innerWidth, window.innerHeight, t.data("width")),
    //                     s = t.data("height");
    //                 t.velocity("stop", !0);
    //                 n("#materialbox-overlay").velocity("stop", !0);
    //                 n(".materialbox-caption").velocity("stop", !0);
    //                 n("#materialbox-overlay").velocity({
    //                     opacity: 0
    //                 }, {
    //                     duration: o,
    //                     queue: !1,
    //                     easing: "easeOutQuad",
    //                     complete: function() {
    //                         f = !1;
    //                         n(this).remove()
    //                     }
    //                 });
    //                 t.velocity({
    //                     width: e,
    //                     height: s,
    //                     left: 0,
    //                     top: 0
    //                 }, {
    //                     duration: o,
    //                     queue: !1,
    //                     easing: "easeOutQuad",
    //                     complete: function() {
    //                         u.css({
    //                             height: "",
    //                             width: "",
    //                             position: "",
    //                             top: "",
    //                             left: ""
    //                         });
    //                         t.removeAttr("style");
    //                         t.attr("style", h);
    //                         t.removeClass("active");
    //                         i = !0;
    //                         r && r.css("overflow", "")
    //                     }
    //                 });
    //                 n(".materialbox-caption").velocity({
    //                     opacity: 0
    //                 }, {
    //                     duration: o,
    //                     queue: !1,
    //                     easing: "easeOutQuad",
    //                     complete: function() {
    //                         n(this).remove()
    //                     }
    //                 })
    //             }
    //             if (!n(this).hasClass("initialized")) {
    //                 n(this).addClass("initialized");
    //                 var r, u, f = !1,
    //                     i = !0,
    //                     o = 200,
    //                     t = n(this),
    //                     s = n("<div><\/div>").addClass("material-placeholder"),
    //                     h = t.attr("style");
    //                 t.wrap(s);
    //                 t.on("click", function() {
    //                     var p = t.parent(".material-placeholder"),
    //                         h = window.innerWidth,
    //                         c = window.innerHeight,
    //                         l = t.width(),
    //                         w = t.height(),
    //                         a, v, b, y, o, s;
    //                     if (!1 === i || f && !0 === i) return e(), !1;
    //                     for (i = !1, t.addClass("active"), f = !0, p.css({
    //                             width: p[0].getBoundingClientRect().width,
    //                             height: p[0].getBoundingClientRect().height,
    //                             position: "relative",
    //                             top: 0,
    //                             left: 0
    //                         }), r = void 0, u = p[0].parentNode; null !== u && !n(u).is(document);) a = n(u), "visible" !== a.css("overflow") && (a.css("overflow", "visible"), r = void 0 === r ? a : r.add(a)), u = u.parentNode;
    //                     t.css({
    //                         position: "absolute",
    //                         "z-index": 1e3,
    //                         "will-change": "left, top, width, height"
    //                     }).data("width", l).data("height", w);
    //                     v = n('<div id="materialbox-overlay"><\/div>').css({
    //                         opacity: 0
    //                     }).click(function() {
    //                         !0 === i && e()
    //                     });
    //                     t.before(v);
    //                     b = v[0].getBoundingClientRect();
    //                     (v.css({
    //                         width: h,
    //                         height: c,
    //                         left: -1 * b.left,
    //                         top: -1 * b.top
    //                     }), v.velocity({
    //                         opacity: 1
    //                     }, {
    //                         duration: 275,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     }), "" !== t.data("caption")) && (y = n('<div class="materialbox-caption"><\/div>'), y.text(t.data("caption")), n("body").append(y), y.css({
    //                         display: "inline"
    //                     }), y.velocity({
    //                         opacity: 1
    //                     }, {
    //                         duration: 275,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     }));
    //                     o = 0;
    //                     s = 0;
    //                     l / h > w / c ? (o = .9 * h, s = .9 * h * (w / l)) : (o = .9 * c * (l / w), s = .9 * c);
    //                     t.hasClass("responsive-img") ? t.velocity({
    //                         "max-width": o,
    //                         width: l
    //                     }, {
    //                         duration: 0,
    //                         queue: !1,
    //                         complete: function() {
    //                             t.css({
    //                                 left: 0,
    //                                 top: 0
    //                             }).velocity({
    //                                 height: s,
    //                                 width: o,
    //                                 left: n(document).scrollLeft() + h / 2 - t.parent(".material-placeholder").offset().left - o / 2,
    //                                 top: n(document).scrollTop() + c / 2 - t.parent(".material-placeholder").offset().top - s / 2
    //                             }, {
    //                                 duration: 275,
    //                                 queue: !1,
    //                                 easing: "easeOutQuad",
    //                                 complete: function() {
    //                                     i = !0
    //                                 }
    //                             })
    //                         }
    //                     }) : t.css("left", 0).css("top", 0).velocity({
    //                         height: s,
    //                         width: o,
    //                         left: n(document).scrollLeft() + h / 2 - t.parent(".material-placeholder").offset().left - o / 2,
    //                         top: n(document).scrollTop() + c / 2 - t.parent(".material-placeholder").offset().top - s / 2
    //                     }, {
    //                         duration: 275,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             i = !0
    //                         }
    //                     })
    //                 });
    //                 n(window).scroll(function() {
    //                     f && e()
    //                 });
    //                 n(document).keyup(function(n) {
    //                     27 === n.keyCode && !0 === i && f && e()
    //                 })
    //             }
    //         })
    //     };
    //     n(document).ready(function() {
    //         n(".materialboxed").materialbox()
    //     })
    // }
    (jQuery),
    // function(n) {
    //     n.fn.parallax = function() {
    //         var t = n(window).width();
    //         return this.each(function() {
    //             function r(r) {
    //                 var u = t < 601 ? i.height() > 0 ? i.height() : i.children("img").height() : i.height() > 0 ? i.height() : 500;
    //                 var f = i.children("img").first(),
    //                     h = f.height() - u,
    //                     c = i.offset().top + u,
    //                     s = i.offset().top,
    //                     e = n(window).scrollTop(),
    //                     o = window.innerHeight,
    //                     l = (e + o - s) / (u + o),
    //                     a = Math.round(h * l);
    //                 r && f.css("display", "block");
    //                 c > e && s < e + o && f.css("transform", "translate3D(-50%," + a + "px, 0)")
    //             }
    //             var i = n(this);
    //             i.addClass("parallax");
    //             i.children("img").one("load", function() {
    //                 r(!0)
    //             }).each(function() {
    //                 this.complete && n(this).trigger("load")
    //             });
    //             n(window).scroll(function() {
    //                 t = n(window).width();
    //                 r(!1)
    //             });
    //             n(window).resize(function() {
    //                 t = n(window).width();
    //                 r(!1)
    //             })
    //         })
    //     }
    // }
    (jQuery),
    // function(n) {
    //     var t = {
    //         init: function(t) {
    //             var i;
    //             return t = n.extend({
    //                 onShow: null,
    //                 swipeable: !1,
    //                 responsiveThreshold: 1 / 0
    //             }, t), i = Materialize.objectSelectorString(n(this)), this.each(function(r) {
    //                 var u, h, w, o, b = i + r,
    //                     f = n(this),
    //                     d = n(window).width(),
    //                     s = f.find("li.tab a"),
    //                     c = f.width(),
    //                     l = n(),
    //                     y = Math.max(c, f[0].scrollWidth) / s.length,
    //                     e = prev_index = 0,
    //                     p = !1,
    //                     a = function(n) {
    //                         return Math.ceil(c - n.position().left - n.outerWidth() - f.scrollLeft())
    //                     },
    //                     v = function(n) {
    //                         return Math.floor(n.position().left + f.scrollLeft())
    //                     },
    //                     k = function(n) {
    //                         e - n >= 0 ? (o.velocity({
    //                             right: a(u)
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), o.velocity({
    //                             left: v(u)
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad",
    //                             delay: 90
    //                         })) : (o.velocity({
    //                             left: v(u)
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), o.velocity({
    //                             right: a(u)
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad",
    //                             delay: 90
    //                         }))
    //                     };
    //                 t.swipeable && d > t.responsiveThreshold && (t.swipeable = !1);
    //                 0 === (u = n(s.filter('[href="' + location.hash + '"]'))).length && (u = n(this).find("li.tab a.active").first());
    //                 0 === u.length && (u = n(this).find("li.tab a").first());
    //                 u.addClass("active");
    //                 (e = s.index(u)) < 0 && (e = 0);
    //                 void 0 !== u[0] && (h = n(u[0].hash)).addClass("active");
    //                 f.find(".indicator").length || f.append('<div class="indicator"><\/div>');
    //                 o = f.find(".indicator");
    //                 f.append(o);
    //                 f.is(":visible") && setTimeout(function() {
    //                     o.css({
    //                         right: a(u)
    //                     });
    //                     o.css({
    //                         left: v(u)
    //                     })
    //                 }, 0);
    //                 n(window).off("resize.tabs-" + b).on("resize.tabs-" + b, function() {
    //                     c = f.width();
    //                     y = Math.max(c, f[0].scrollWidth) / s.length;
    //                     e < 0 && (e = 0);
    //                     0 !== y && 0 !== c && (o.css({
    //                         right: a(u)
    //                     }), o.css({
    //                         left: v(u)
    //                     }))
    //                 });
    //                 t.swipeable ? (s.each(function() {
    //                     var t = n(Materialize.escapeHash(this.hash));
    //                     t.addClass("carousel-item");
    //                     l = l.add(t)
    //                 }), w = l.wrapAll('<div class="tabs-content carousel"><\/div>'), l.css("display", ""), n(".tabs-content.carouselM").carouselM({
    //                     fullWidth: !0,
    //                     noWrap: !0,
    //                     onCycleTo: function(n) {
    //                         if (!p) {
    //                             var t = e;
    //                             e = w.index(n);
    //                             u = s.eq(e);
    //                             k(t)
    //                         }
    //                     }
    //                 })) : s.not(u).each(function() {
    //                     n(Materialize.escapeHash(this.hash)).hide()
    //                 });
    //                 f.off("click.tabs").on("click.tabs", "a", function(i) {
    //                     if (n(this).parent().hasClass("disabled")) i.preventDefault();
    //                     else if (!n(this).attr("target")) {
    //                         p = !0;
    //                         c = f.width();
    //                         y = Math.max(c, f[0].scrollWidth) / s.length;
    //                         u.removeClass("active");
    //                         var r = h;
    //                         u = n(this);
    //                         h = n(Materialize.escapeHash(this.hash));
    //                         s = f.find("li.tab a");
    //                         u.position();
    //                         u.addClass("active");
    //                         prev_index = e;
    //                         (e = s.index(n(this))) < 0 && (e = 0);
    //                         t.swipeable ? l.length && l.carouselM("set", e) : (void 0 !== h && (h.show(), h.addClass("active"), "function" == typeof t.onShow && t.onShow.call(this, h)), void 0 === r || r.is(h) || (r.hide(), r.removeClass("active")));
    //                         setTimeout(function() {
    //                             p = !1
    //                         }, 300);
    //                         k(prev_index);
    //                         i.preventDefault()
    //                     }
    //                 })
    //             })
    //         },
    //         select_tab: function(n) {
    //             this.find('a[href="#' + n + '"]').trigger("click")
    //         }
    //     };
    //     n.fn.tabs = function(i) {
    //         return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void n.error("Method " + i + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
    //     };
    //     n(document).ready(function() {
    //         n("ul.tabs").tabs()
    //     })
    // }
    (jQuery),
    // function(n) {
    //     n.fn.tooltip = function(i) {
    //         return "remove" === i ? (this.each(function() {
    //             n("#" + n(this).attr("data-tooltip-id")).remove();
    //             n(this).off("mouseenter.tooltip mouseleave.tooltip")
    //         }), !1) : (i = n.extend({
    //             delay: 350,
    //             tooltip: "",
    //             position: "bottom",
    //             html: !1
    //         }, i), this.each(function() {
    //             var a, s, o, e, f, u, v = Materialize.guid(),
    //                 r = n(this),
    //                 l, c, y, h;
    //             r.attr("data-tooltip-id") && n("#" + r.attr("data-tooltip-id")).remove();
    //             r.attr("data-tooltip-id", v);
    //             l = function() {
    //                 a = r.attr("data-html") ? "true" === r.attr("data-html") : i.html;
    //                 s = void 0 === (s = r.attr("data-delay")) || "" === s ? i.delay : s;
    //                 o = void 0 === (o = r.attr("data-position")) || "" === o ? i.position : o;
    //                 e = void 0 === (e = r.attr("data-tooltip")) || "" === e ? i.tooltip : e
    //             };
    //             l();
    //             c = n('<div class="material-tooltip"><\/div>');
    //             e = a ? n("<span><\/span>").html(e) : n("<span><\/span>").text(e);
    //             c.append(e).appendTo(n("body")).attr("id", v);
    //             (u = n('<div class="backdrop"><\/div>')).appendTo(c);
    //             f = c;
    //             r.off("mouseenter.tooltip mouseleave.tooltip");
    //             h = !1;
    //             r.on({
    //                 "mouseenter.tooltip": function() {
    //                     y = setTimeout(function() {
    //                         l();
    //                         h = !0;
    //                         f.velocity("stop");
    //                         u.velocity("stop");
    //                         f.css({
    //                             visibility: "visible",
    //                             left: "0px",
    //                             top: "0px"
    //                         });
    //                         var b, k, a, e, s, c, v = r.outerWidth(),
    //                             d = r.outerHeight(),
    //                             n = f.outerHeight(),
    //                             i = f.outerWidth(),
    //                             y = "0px",
    //                             p = "0px",
    //                             w = u[0].offsetWidth,
    //                             g = u[0].offsetHeight;
    //                         "top" === o ? (e = r.offset().top - n - 5, s = r.offset().left + v / 2 - i / 2, c = t(s, e, i, n), y = "-10px", u.css({
    //                             bottom: 0,
    //                             left: 0,
    //                             borderRadius: "14px 14px 0 0",
    //                             transformOrigin: "50% 100%",
    //                             marginTop: n,
    //                             marginLeft: i / 2 - w / 2
    //                         })) : "left" === o ? (e = r.offset().top + d / 2 - n / 2, s = r.offset().left - i - 5, c = t(s, e, i, n), p = "-10px", u.css({
    //                             top: "-7px",
    //                             right: 0,
    //                             width: "14px",
    //                             height: "14px",
    //                             borderRadius: "14px 0 0 14px",
    //                             transformOrigin: "95% 50%",
    //                             marginTop: n / 2,
    //                             marginLeft: i
    //                         })) : "right" === o ? (e = r.offset().top + d / 2 - n / 2, s = r.offset().left + v + 5, c = t(s, e, i, n), p = "+10px", u.css({
    //                             top: "-7px",
    //                             left: 0,
    //                             width: "14px",
    //                             height: "14px",
    //                             borderRadius: "0 14px 14px 0",
    //                             transformOrigin: "5% 50%",
    //                             marginTop: n / 2,
    //                             marginLeft: "0px"
    //                         })) : (e = r.offset().top + r.outerHeight() + 5, s = r.offset().left + v / 2 - i / 2, c = t(s, e, i, n), y = "+10px", u.css({
    //                             top: 0,
    //                             left: 0,
    //                             marginLeft: i / 2 - w / 2
    //                         }));
    //                         f.css({
    //                             top: c.y,
    //                             left: c.x
    //                         });
    //                         b = Math.SQRT2 * i / parseInt(w);
    //                         k = Math.SQRT2 * n / parseInt(g);
    //                         a = Math.max(b, k);
    //                         f.velocity({
    //                             translateY: y,
    //                             translateX: p
    //                         }, {
    //                             duration: 350,
    //                             queue: !1
    //                         }).velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 300,
    //                             delay: 50,
    //                             queue: !1
    //                         });
    //                         u.css({
    //                             visibility: "visible"
    //                         }).velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 55,
    //                             delay: 0,
    //                             queue: !1
    //                         }).velocity({
    //                             scaleX: a,
    //                             scaleY: a
    //                         }, {
    //                             duration: 300,
    //                             delay: 0,
    //                             queue: !1,
    //                             easing: "easeInOutQuad"
    //                         })
    //                     }, s)
    //                 },
    //                 "mouseleave.tooltip": function() {
    //                     h = !1;
    //                     clearTimeout(y);
    //                     setTimeout(function() {
    //                         !0 !== h && (f.velocity({
    //                             opacity: 0,
    //                             translateY: 0,
    //                             translateX: 0
    //                         }, {
    //                             duration: 225,
    //                             queue: !1
    //                         }), u.velocity({
    //                             opacity: 0,
    //                             scaleX: 1,
    //                             scaleY: 1
    //                         }, {
    //                             duration: 225,
    //                             queue: !1,
    //                             complete: function() {
    //                                 u.css({
    //                                     visibility: "hidden"
    //                                 });
    //                                 f.css({
    //                                     visibility: "hidden"
    //                                 });
    //                                 h = !1
    //                             }
    //                         }))
    //                     }, 225)
    //                 }
    //             })
    //         }))
    //     };
    //     var t = function(t, i, r, u) {
    //         var f = t,
    //             e = i;
    //         return f < 0 ? f = 4 : f + r > window.innerWidth && (f -= f + r - window.innerWidth), e < 0 ? e = 4 : e + u > window.innerHeight + n(window).scrollTop && (e -= e + u - window.innerHeight), {
    //             x: f,
    //             y: e
    //         }
    //     };
    //     n(document).ready(function() {
    //         n(".tooltipped").tooltip()
    //     })
    // }
    (jQuery),
    // function(n) {
    //     "use strict";

    //     function f(n) {
    //         var i = "";
    //         for (var t in n) n.hasOwnProperty(t) && (i += t + ":" + n[t] + ";");
    //         return i
    //     }

    //     function u(r) {
    //         var u = function(n) {
    //             if (!1 === i.allowEvent(n)) return null;
    //             for (var r = null, t = n.target || n.srcElement; null !== t.parentElement;) {
    //                 if (!(t instanceof SVGElement || -1 === t.className.indexOf("waves-effect"))) {
    //                     r = t;
    //                     break
    //                 }
    //                 if (t.classList.contains("waves-effect")) {
    //                     r = t;
    //                     break
    //                 }
    //                 t = t.parentElement
    //             }
    //             return r
    //         }(r);
    //         null !== u && (t.show(r, u), "ontouchstart" in n && (u.addEventListener("touchend", t.hide, !1), u.addEventListener("touchcancel", t.hide, !1)), u.addEventListener("mouseup", t.hide, !1), u.addEventListener("mouseleave", t.hide, !1))
    //     }
    //     var r = r || {},
    //         e = document.querySelectorAll.bind(document),
    //         t = {
    //             duration: 750,
    //             show: function(n, i) {
    //                 var o, u, r;
    //                 if (2 === n.button) return !1;
    //                 o = i || this;
    //                 u = document.createElement("div");
    //                 u.className = "waves-ripple";
    //                 o.appendChild(u);
    //                 var s, a, v, h, y, c, p, l = (c = {
    //                         top: 0,
    //                         left: 0
    //                     }, p = (s = o) && s.ownerDocument, a = p.documentElement, void 0 !== s.getBoundingClientRect && (c = s.getBoundingClientRect()), v = null !== (y = h = p) && y === y.window ? h : 9 === h.nodeType && h.defaultView, {
    //                         top: c.top + v.pageYOffset - a.clientTop,
    //                         left: c.left + v.pageXOffset - a.clientLeft
    //                     }),
    //                     w = n.pageY - l.top,
    //                     b = n.pageX - l.left,
    //                     e = "scale(" + o.clientWidth / 10 + ")";
    //                 "touches" in n && (w = n.touches[0].pageY - l.top, b = n.touches[0].pageX - l.left);
    //                 u.setAttribute("data-hold", Date.now());
    //                 u.setAttribute("data-scale", e);
    //                 u.setAttribute("data-x", b);
    //                 u.setAttribute("data-y", w);
    //                 r = {
    //                     top: w + "px",
    //                     left: b + "px"
    //                 };
    //                 u.className = u.className + " waves-notransition";
    //                 u.setAttribute("style", f(r));
    //                 u.className = u.className.replace("waves-notransition", "");
    //                 r["-webkit-transform"] = e;
    //                 r["-moz-transform"] = e;
    //                 r["-ms-transform"] = e;
    //                 r["-o-transform"] = e;
    //                 r.transform = e;
    //                 r.opacity = "1";
    //                 r["-webkit-transition-duration"] = t.duration + "ms";
    //                 r["-moz-transition-duration"] = t.duration + "ms";
    //                 r["-o-transition-duration"] = t.duration + "ms";
    //                 r["transition-duration"] = t.duration + "ms";
    //                 r["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    //                 r["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    //                 r["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    //                 r["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    //                 u.setAttribute("style", f(r))
    //             },
    //             hide: function(n) {
    //                 i.touchup(n);
    //                 var e = this,
    //                     r = (e.clientWidth, null),
    //                     o = e.getElementsByClassName("waves-ripple");
    //                 if (!(o.length > 0)) return !1;
    //                 var h = (r = o[o.length - 1]).getAttribute("data-x"),
    //                     c = r.getAttribute("data-y"),
    //                     u = r.getAttribute("data-scale"),
    //                     s = 350 - (Date.now() - Number(r.getAttribute("data-hold")));
    //                 s < 0 && (s = 0);
    //                 setTimeout(function() {
    //                     var n = {
    //                         top: c + "px",
    //                         left: h + "px",
    //                         opacity: "0",
    //                         "-webkit-transition-duration": t.duration + "ms",
    //                         "-moz-transition-duration": t.duration + "ms",
    //                         "-o-transition-duration": t.duration + "ms",
    //                         "transition-duration": t.duration + "ms",
    //                         "-webkit-transform": u,
    //                         "-moz-transform": u,
    //                         "-ms-transform": u,
    //                         "-o-transform": u,
    //                         transform: u
    //                     };
    //                     r.setAttribute("style", f(n));
    //                     setTimeout(function() {
    //                         try {
    //                             e.removeChild(r)
    //                         } catch (n) {
    //                             return !1
    //                         }
    //                     }, t.duration)
    //                 }, s)
    //             },
    //             wrapInput: function(n) {
    //                 for (var t, u, i, f, r = 0; r < n.length; r++)
    //                     if (t = n[r], "input" === t.tagName.toLowerCase()) {
    //                         if (u = t.parentNode, "i" === u.tagName.toLowerCase() && -1 !== u.className.indexOf("waves-effect")) continue;
    //                         i = document.createElement("i");
    //                         i.className = t.className + " waves-input-wrapper";
    //                         f = t.getAttribute("style");
    //                         f || (f = "");
    //                         i.setAttribute("style", f);
    //                         t.className = "waves-button-input";
    //                         t.removeAttribute("style");
    //                         u.replaceChild(i, t);
    //                         i.appendChild(t)
    //                     }
    //             }
    //         },
    //         i = {
    //             touches: 0,
    //             allowEvent: function(n) {
    //                 var t = !0;
    //                 return "touchstart" === n.type ? i.touches += 1 : "touchend" === n.type || "touchcancel" === n.type ? setTimeout(function() {
    //                     i.touches > 0 && (i.touches -= 1)
    //                 }, 500) : "mousedown" === n.type && i.touches > 0 && (t = !1), t
    //             },
    //             touchup: function(n) {
    //                 i.allowEvent(n)
    //             }
    //         };
    //     r.displayEffect = function(i) {
    //         "duration" in (i = i || {}) && (t.duration = i.duration);
    //         t.wrapInput(e(".waves-effect"));
    //         "ontouchstart" in n && document.body.addEventListener("touchstart", u, !1);
    //         document.body.addEventListener("mousedown", u, !1)
    //     };
    //     r.attach = function(i) {
    //         "input" === i.tagName.toLowerCase() && (t.wrapInput([i]), i = i.parentElement);
    //         "ontouchstart" in n && i.addEventListener("touchstart", u, !1);
    //         i.addEventListener("mousedown", u, !1)
    //     };
    //     n.Waves = r;
    //     document.addEventListener("DOMContentLoaded", function() {
    //         r.displayEffect()
    //     }, !1)
    // }
    (window);
Materialize.toast = function(n, t, i, r) {
        var f, u, o, e;
        i = i || "";
        f = document.getElementById("toast-container");
        null === f && ((f = document.createElement("div")).id = "toast-container", document.body.appendChild(f));
        u = function(n) {
            var t = document.createElement("div"),
                f;
            if (t.classList.add("toast"), i)
                for (var e = i.split(" "), u = 0, o = e.length; u < o; u++) t.classList.add(e[u]);
            return ("object" == typeof HTMLElement ? n instanceof HTMLElement : n && "object" == typeof n && null !== n && 1 === n.nodeType && "string" == typeof n.nodeName) ? t.appendChild(n) : n instanceof jQuery ? t.appendChild(n[0]) : t.innerHTML = n, f = new Hammer(t, {
                prevent_default: !1
            }), f.on("pan", function(n) {
                var r = n.deltaX,
                    i;
                t.classList.contains("panning") || t.classList.add("panning");
                i = 1 - Math.abs(r / 80);
                i < 0 && (i = 0);
                Vel(t, {
                    left: r,
                    opacity: i
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), f.on("panend", function(n) {
                var i = n.deltaX;
                Math.abs(i) > 80 ? Vel(t, {
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof r && r();
                        t.parentNode.removeChild(t)
                    }
                }) : (t.classList.remove("panning"), Vel(t, {
                    left: 0,
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutExpo",
                    queue: !1
                }))
            }), t
        }(n);
        n && f.appendChild(u);
        u.style.opacity = 0;
        Vel(u, {
            translateY: "-35px",
            opacity: 1
        }, {
            duration: 300,
            easing: "easeOutCubic",
            queue: !1
        });
        e = t;
        null != e && (o = setInterval(function() {
            null === u.parentNode && window.clearInterval(o);
            u.classList.contains("panning") || (e -= 20);
            e <= 0 && (Vel(u, {
                opacity: 0,
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof r && r();
                    this[0].parentNode.removeChild(this[0])
                }
            }), window.clearInterval(o))
        }, 20))
    },
    // function(n) {
    //     var t = {
    //         init: function(t) {
    //             t = n.extend({
    //                 menuWidth: 300,
    //                 edge: "left",
    //                 closeOnClick: !1,
    //                 draggable: !0
    //             }, t);
    //             n(this).each(function() {
    //                 var o = n(this),
    //                     e = o.attr("data-activates"),
    //                     i = n("#" + e),
    //                     r, f, u;
    //                 300 != t.menuWidth && i.css("width", t.menuWidth);
    //                 r = n('.drag-target[data-sidenav="' + e + '"]');
    //                 t.draggable ? (r.length && r.remove(), r = n('<div class="drag-target"><\/div>').attr("data-sidenav", e), n("body").append(r)) : r = n();
    //                 "left" == t.edge ? (i.css("transform", "translateX(-100%)"), r.css({
    //                     left: 0
    //                 })) : (i.addClass("right-aligned").css("transform", "translateX(100%)"), r.css({
    //                     right: 0
    //                 }));
    //                 i.hasClass("fixed") && window.innerWidth > 992 && i.css("transform", "translateX(0)");
    //                 i.hasClass("fixed") && n(window).resize(function() {
    //                     window.innerWidth > 992 ? 0 !== n("#sidenav-overlay").length && u ? f(!0) : i.css("transform", "translateX(0%)") : !1 === u && ("left" === t.edge ? i.css("transform", "translateX(-100%)") : i.css("transform", "translateX(100%)"))
    //                 });
    //                 !0 === t.closeOnClick && i.on("click.itemclick", "a:not(.collapsible-header)", function() {
    //                     f()
    //                 });
    //                 f = function(f) {
    //                     u = !1;
    //                     n("body").css({
    //                         overflow: "",
    //                         width: ""
    //                     });
    //                     n("#sidenav-overlay").velocity({
    //                         opacity: 0
    //                     }, {
    //                         duration: 200,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             n(this).remove()
    //                         }
    //                     });
    //                     "left" === t.edge ? (r.css({
    //                         width: "",
    //                         right: "",
    //                         left: "0"
    //                     }), i.velocity({
    //                         translateX: "-100%"
    //                     }, {
    //                         duration: 200,
    //                         queue: !1,
    //                         easing: "easeOutCubic",
    //                         complete: function() {
    //                             !0 === f && (i.removeAttr("style"), i.css("width", t.menuWidth))
    //                         }
    //                     })) : (r.css({
    //                         width: "",
    //                         right: "0",
    //                         left: ""
    //                     }), i.velocity({
    //                         translateX: "100%"
    //                     }, {
    //                         duration: 200,
    //                         queue: !1,
    //                         easing: "easeOutCubic",
    //                         complete: function() {
    //                             !0 === f && (i.removeAttr("style"), i.css("width", t.menuWidth))
    //                         }
    //                     }))
    //                 };
    //                 u = !1;
    //                 t.draggable && (r.on("click", function() {
    //                     u && f()
    //                 }), r.hammer({
    //                     prevent_default: !1
    //                 }).bind("pan", function(r) {
    //                     var h;
    //                     if ("touch" == r.gesture.pointerType) {
    //                         r.gesture.direction;
    //                         var s, e = r.gesture.center.x,
    //                             c = (r.gesture.center.y, r.gesture.velocityX, n("body")),
    //                             o = n("#sidenav-overlay"),
    //                             l = c.innerWidth();
    //                         (c.css("overflow", "hidden"), c.width(l), 0 === o.length && ((o = n('<div id="sidenav-overlay"><\/div>')).css("opacity", 0).click(function() {
    //                             f()
    //                         }), n("body").append(o)), "left" === t.edge && (e > t.menuWidth ? e = t.menuWidth : e < 0 && (e = 0)), "left" === t.edge) ? (e < t.menuWidth / 2 ? u = !1 : e >= t.menuWidth / 2 && (u = !0), i.css("transform", "translateX(" + (e - t.menuWidth) + "px)")) : (e < window.innerWidth - t.menuWidth / 2 ? u = !0 : e >= window.innerWidth - t.menuWidth / 2 && (u = !1), h = e - t.menuWidth / 2, h < 0 && (h = 0), i.css("transform", "translateX(" + h + "px)"));
    //                         "left" === t.edge ? (s = e / t.menuWidth, o.velocity({
    //                             opacity: s
    //                         }, {
    //                             duration: 10,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         })) : (s = Math.abs((e - window.innerWidth) / t.menuWidth), o.velocity({
    //                             opacity: s
    //                         }, {
    //                             duration: 10,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }))
    //                     }
    //                 }).bind("panend", function(f) {
    //                     if ("touch" == f.gesture.pointerType) {
    //                         var h = n("#sidenav-overlay"),
    //                             e = f.gesture.velocityX,
    //                             c = f.gesture.center.x,
    //                             o = c - t.menuWidth,
    //                             s = c - t.menuWidth / 2;
    //                         o > 0 && (o = 0);
    //                         s < 0 && (s = 0);
    //                         !1;
    //                         "left" === t.edge ? u && e <= .3 || e < -.5 ? (0 !== o && i.velocity({
    //                             translateX: [0, o]
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), h.velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 50,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), r.css({
    //                             width: "50%",
    //                             right: 0,
    //                             left: ""
    //                         }), u = !0) : (!u || e > .3) && (n("body").css({
    //                             overflow: "",
    //                             width: ""
    //                         }), i.velocity({
    //                             translateX: [-1 * t.menuWidth - 10, o]
    //                         }, {
    //                             duration: 200,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), h.velocity({
    //                             opacity: 0
    //                         }, {
    //                             duration: 200,
    //                             queue: !1,
    //                             easing: "easeOutQuad",
    //                             complete: function() {
    //                                 n(this).remove()
    //                             }
    //                         }), r.css({
    //                             width: "10px",
    //                             right: "",
    //                             left: 0
    //                         })) : u && e >= -.3 || e > .5 ? (0 !== s && i.velocity({
    //                             translateX: [0, s]
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), h.velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 50,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), r.css({
    //                             width: "50%",
    //                             right: "",
    //                             left: 0
    //                         }), u = !0) : (!u || e < -.3) && (n("body").css({
    //                             overflow: "",
    //                             width: ""
    //                         }), i.velocity({
    //                             translateX: [t.menuWidth + 10, s]
    //                         }, {
    //                             duration: 200,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }), h.velocity({
    //                             opacity: 0
    //                         }, {
    //                             duration: 200,
    //                             queue: !1,
    //                             easing: "easeOutQuad",
    //                             complete: function() {
    //                                 n(this).remove()
    //                             }
    //                         }), r.css({
    //                             width: "10px",
    //                             right: 0,
    //                             left: ""
    //                         }))
    //                     }
    //                 }));
    //                 o.off("click.sidenav").on("click.sidenav", function() {
    //                     if (!0 === u) u = !1, !1, f();
    //                     else {
    //                         var o = n("body"),
    //                             e = n('<div id="sidenav-overlay"><\/div>'),
    //                             s = o.innerWidth();
    //                         o.css("overflow", "hidden");
    //                         o.width(s);
    //                         n("body").append(r);
    //                         "left" === t.edge ? (r.css({
    //                             width: "50%",
    //                             right: 0,
    //                             left: ""
    //                         }), i.velocity({
    //                             translateX: [0, -1 * t.menuWidth]
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         })) : (r.css({
    //                             width: "50%",
    //                             right: "",
    //                             left: 0
    //                         }), i.velocity({
    //                             translateX: [0, t.menuWidth]
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }));
    //                         e.css("opacity", 0).click(function() {
    //                             u = !1;
    //                             !1;
    //                             f();
    //                             e.velocity({
    //                                 opacity: 0
    //                             }, {
    //                                 duration: 300,
    //                                 queue: !1,
    //                                 easing: "easeOutQuad",
    //                                 complete: function() {
    //                                     n(this).remove()
    //                                 }
    //                             })
    //                         });
    //                         n("body").append(e);
    //                         e.velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad",
    //                             complete: function() {
    //                                 u = !0;
    //                                 !1
    //                             }
    //                         })
    //                     }
    //                     return !1
    //                 })
    //             })
    //         },
    //         destroy: function() {
    //             var t = n("#sidenav-overlay"),
    //                 i = n('.drag-target[data-sidenav="' + n(this).attr("data-activates") + '"]');
    //             t.trigger("click");
    //             i.remove();
    //             n(this).off("click");
    //             t.remove()
    //         },
    //         show: function() {
    //             this.trigger("click")
    //         },
    //         hide: function() {
    //             n("#sidenav-overlay").trigger("click")
    //         }
    //     };
    //     n.fn.sideNav = function(i) {
    //         return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void n.error("Method " + i + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
    //     }
    // }
    (jQuery),
    // function(n) {
    //     function o(e) {
    //         ++r;
    //         var s, h, c, l, o, a = t.scrollTop(),
    //             v = t.scrollLeft(),
    //             p = v + t.width(),
    //             w = a + t.height(),
    //             y = (s = a + i.top + e || 200, h = p + i.right, c = w + i.bottom, l = v + i.left, o = n(), n.each(u, function(n, t) {
    //                 if (t.height() > 0) {
    //                     var i = t.offset().top,
    //                         r = t.offset().left,
    //                         u = r + t.width(),
    //                         f = i + t.height();
    //                     r > h || u < l || i > c || f < s || o.push(t)
    //                 }
    //             }), o);
    //         n.each(y, function(n, t) {
    //             "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter");
    //             t.data("scrollSpy:ticks", r)
    //         });
    //         n.each(f, function(n, t) {
    //             var i = t.data("scrollSpy:ticks");
    //             "number" == typeof i && i !== r && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
    //         });
    //         f = y
    //     }

    //     function s() {
    //         t.trigger("scrollSpy:winSize")
    //     }
    //     var t = n(window),
    //         u = [],
    //         f = [],
    //         e = !1,
    //         r = 0,
    //         i = {
    //             top: 0,
    //             right: 0,
    //             bottom: 0,
    //             left: 0
    //         };
    //     n.scrollSpy = function(r, f) {
    //         var s, c, h;
    //         return f = n.extend({
    //             throttle: 100,
    //             scrollOffset: 200
    //         }, f), s = [], (r = n(r)).each(function(t, i) {
    //             u.push(n(i));
    //             n(i).data("scrollSpy:id", t);
    //             n('a[href="#' + n(i).attr("id") + '"]').click(function(t) {
    //                 t.preventDefault();
    //                 var i = n(Materialize.escapeHash(this.hash)).offset().top + 1;
    //                 n("html, body").animate({
    //                     scrollTop: i - f.scrollOffset
    //                 }, {
    //                     duration: 400,
    //                     queue: !1,
    //                     easing: "easeOutCubic"
    //                 })
    //             })
    //         }), i.top = f.offsetTop || 0, i.right = f.offsetRight || 0, i.bottom = f.offsetBottom || 0, i.left = f.offsetLeft || 0, c = Materialize.throttle(function() {
    //             o(f.scrollOffset)
    //         }, f.throttle || 100), h = function() {
    //             n(document).ready(c)
    //         }, e || (t.on("scroll", h), t.on("resize", h), e = !0), setTimeout(h, 0), r.on("scrollSpy:enter", function() {
    //             s = n.grep(s, function(n) {
    //                 return 0 != n.height()
    //             });
    //             var t = n(this);
    //             s[0] ? (n('a[href="#' + s[0].attr("id") + '"]').removeClass("active"), t.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(n(this)) : s.push(n(this))) : s.push(n(this));
    //             n('a[href="#' + s[0].attr("id") + '"]').addClass("active")
    //         }), r.on("scrollSpy:exit", function() {
    //             if ((s = n.grep(s, function(n) {
    //                     return 0 != n.height()
    //                 }))[0]) {
    //                 n('a[href="#' + s[0].attr("id") + '"]').removeClass("active");
    //                 var t = n(this);
    //                 (s = n.grep(s, function(n) {
    //                     return n.attr("id") != t.attr("id")
    //                 }))[0] && n('a[href="#' + s[0].attr("id") + '"]').addClass("active")
    //             }
    //         }), r
    //     };
    //     n.winSizeSpy = function(i) {
    //         return n.winSizeSpy = function() {
    //             return t
    //         }, i = i || {
    //             throttle: 100
    //         }, t.on("resize", Materialize.throttle(s, i.throttle || 100))
    //     };
    //     n.fn.scrollSpy = function(t) {
    //         return n.scrollSpy(n(this), t)
    //     }
    // }
    (jQuery),
    // function(n) {
    //     n(document).ready(function() {
    //         var i, t, f, r, u;
    //         Materialize.updateTextFields = function() {
    //             n("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(t, i) {
    //                 var r = n(this);
    //                 n(i).val().length > 0 || i.autofocus || void 0 !== r.attr("placeholder") ? r.siblings("label").addClass("active") : n(i)[0].validity ? r.siblings("label").toggleClass("active", !0 === n(i)[0].validity.badInput) : r.siblings("label").removeClass("active")
    //             })
    //         };
    //         i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
    //         n(document).on("change", i, function() {
    //             0 === n(this).val().length && void 0 === n(this).attr("placeholder") || n(this).siblings("label").addClass("active");
    //             validate_field(n(this))
    //         });
    //         n(document).ready(function() {
    //             Materialize.updateTextFields()
    //         });
    //         n(document).on("reset", function(t) {
    //             var r = n(t.target);
    //             r.is("form") && (r.find(i).removeClass("valid").removeClass("invalid"), r.find(i).each(function() {
    //                 "" === n(this).attr("value") && n(this).siblings("label").removeClass("active")
    //             }), r.find("select.initialized").each(function() {
    //                 var n = r.find("option[selected]").text();
    //                 r.siblings("input.select-dropdown").val(n)
    //             }))
    //         });
    //         n(document).on("focus", i, function() {
    //             n(this).siblings("label, .prefix").addClass("active")
    //         });
    //         n(document).on("blur", i, function() {
    //             var t = n(this),
    //                 i = ".prefix";
    //             0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (i += ", label");
    //             t.siblings(i).removeClass("active");
    //             validate_field(t)
    //         });
    //         window.validate_field = function(n) {
    //             var t = void 0 !== n.attr("data-length"),
    //                 i = parseInt(n.attr("data-length")),
    //                 r = n.val().length;
    //             0 === n.val().length && !1 === n[0].validity.badInput ? n.hasClass("validate") && (n.removeClass("valid"), n.removeClass("invalid")) : n.hasClass("validate") && (n.is(":valid") && t && r <= i || n.is(":valid") && !t ? (n.removeClass("invalid"), n.addClass("valid")) : (n.removeClass("valid"), n.addClass("invalid")))
    //         };
    //         n(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function(t) {
    //             if (9 === t.which) return n(this).addClass("tabbed"), void n(this).one("blur", function() {
    //                 n(this).removeClass("tabbed")
    //             })
    //         });
    //         t = n(".hiddendiv").first();
    //         t.length || (t = n('<div class="hiddendiv common"><\/div>'), n("body").append(t));
    //         f = ".materialize-textarea";
    //         n(f).each(function() {
    //             var t = n(this);
    //             t.data("original-height", t.height());
    //             t.data("previous-length", t.val().length)
    //         });
    //         n("body").on("keyup keydown autoresize", f, function() {
    //             ! function(i) {
    //                 var r = i.css("font-family"),
    //                     u = i.css("font-size"),
    //                     f = i.css("line-height"),
    //                     e;
    //                 u && t.css("font-size", u);
    //                 r && t.css("font-family", r);
    //                 f && t.css("line-height", f);
    //                 "off" === i.attr("wrap") && t.css("overflow-wrap", "normal").css("white-space", "pre");
    //                 t.text(i.val() + "\n");
    //                 e = t.html().replace(/\n/g, "<br>");
    //                 t.html(e);
    //                 i.is(":visible") ? t.css("width", i.width()) : t.css("width", n(window).width() / 2);
    //                 i.data("original-height") <= t.height() ? i.css("height", t.height()) : i.val().length < i.data("previous-length") && i.css("height", i.data("original-height"));
    //                 i.data("previous-length", i.val().length)
    //             }(n(this))
    //         });
    //         n(document).on("change", '.file-field input[type="file"]', function() {
    //             for (var i = n(this).closest(".file-field").find("input.file-path"), r = n(this)[0].files, u = [], t = 0; t < r.length; t++) u.push(r[t].name);
    //             i.val(u.join(", "));
    //             i.trigger("change")
    //         });
    //         r = "input[type=range]";
    //         u = !1;
    //         n(r).each(function() {
    //             var t = n('<span class="thumb"><span class="value"><\/span><\/span>');
    //             n(this).after(t)
    //         });
    //         var e = function(n) {
    //                 var t = -7 + parseInt(n.parent().css("padding-left")) + "px";
    //                 n.velocity({
    //                     height: "30px",
    //                     width: "30px",
    //                     top: "-30px",
    //                     marginLeft: t
    //                 }, {
    //                     duration: 300,
    //                     easing: "easeOutExpo"
    //                 })
    //             },
    //             o = function(n) {
    //                 var i = n.width() - 15,
    //                     r = parseFloat(n.attr("max")),
    //                     t = parseFloat(n.attr("min"));
    //                 return (parseFloat(n.val()) - t) / (r - t) * i
    //             },
    //             s = ".range-field";
    //         n(document).on("change", r, function() {
    //             var t = n(this).siblings(".thumb"),
    //                 i;
    //             t.find(".value").html(n(this).val());
    //             t.hasClass("active") || e(t);
    //             i = o(n(this));
    //             t.addClass("active").css("left", i)
    //         });
    //         n(document).on("mousedown touchstart", r, function(t) {
    //             var i = n(this).siblings(".thumb"),
    //                 r;
    //             (i.length <= 0 && (i = n('<span class="thumb"><span class="value"><\/span><\/span>'), n(this).after(i)), i.find(".value").html(n(this).val()), u = !0, n(this).addClass("active"), i.hasClass("active") || e(i), "input" !== t.type) && (r = o(n(this)), i.addClass("active").css("left", r))
    //         });
    //         n(document).on("mouseup touchend", s, function() {
    //             u = !1;
    //             n(this).removeClass("active")
    //         });
    //         n(document).on("input mousemove touchmove", s, function() {
    //             var t = n(this).children(".thumb"),
    //                 f = n(this).find(r),
    //                 i;
    //             u && (t.hasClass("active") || e(t), i = o(f), t.addClass("active").css("left", i), t.find(".value").html(t.siblings(r).val()))
    //         });
    //         n(document).on("mouseout touchleave", s, function() {
    //             if (!u) {
    //                 var t = n(this).children(".thumb"),
    //                     i = 7 + parseInt(n(this).css("padding-left")) + "px";
    //                 t.hasClass("active") && t.velocity({
    //                     height: "0",
    //                     width: "0",
    //                     top: "10px",
    //                     marginLeft: i
    //                 }, {
    //                     duration: 100
    //                 });
    //                 t.removeClass("active")
    //             }
    //         });
    //         n.fn.autocomplete = function(t) {
    //             return t = n.extend({
    //                 data: {},
    //                 limit: 1 / 0,
    //                 onAutocomplete: null,
    //                 minLength: 1
    //             }, t), this.each(function() {
    //                 var s, r = n(this),
    //                     f = t.data,
    //                     h = 0,
    //                     u = -1,
    //                     c = r.closest(".input-field"),
    //                     e, i, o;
    //                 n.isEmptyObject(f) || (i = n('<ul class="autocomplete-content dropdown-content"><\/ul>'), c.length ? (e = c.children(".autocomplete-content.dropdown-content").first()).length || c.append(i) : (e = r.next(".autocomplete-content.dropdown-content")).length || r.after(i), e.length && (i = e), o = function() {
    //                     i.empty();
    //                     u = -1;
    //                     i.find(".active").removeClass("active");
    //                     s = void 0
    //                 }, r.off("blur.autocomplete").on("blur.autocomplete", function() {
    //                     o()
    //                 }), r.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(u) {
    //                     var c, e, a, y, l, p, v, w, b, k, d;
    //                     if (h = 0, c = r.val().toLowerCase(), 13 !== u.which && 38 !== u.which && 40 !== u.which) {
    //                         if (s !== c && (o(), c.length >= t.minLength))
    //                             for (e in f)
    //                                 if (f.hasOwnProperty(e) && -1 !== e.toLowerCase().indexOf(c) && e.toLowerCase() !== c) {
    //                                     if (h >= t.limit) break;
    //                                     a = n("<li><\/li>");
    //                                     f[e] ? a.append('<img src="' + f[e] + '" class="right circle"><span>' + e + "<\/span>") : a.append("<span>" + e + "<\/span>");
    //                                     i.append(a);
    //                                     y = c;
    //                                     void 0;
    //                                     void 0;
    //                                     void 0;
    //                                     void 0;
    //                                     void 0;
    //                                     void 0;
    //                                     p = (l = a).find("img");
    //                                     v = l.text().toLowerCase().indexOf("" + y.toLowerCase());
    //                                     w = v + y.length - 1;
    //                                     b = l.text().slice(0, v);
    //                                     k = l.text().slice(v, w + 1);
    //                                     d = l.text().slice(w + 1);
    //                                     l.html("<span>" + b + "<span class='highlight'>" + k + "<\/span>" + d + "<\/span>");
    //                                     p.length && l.prepend(p);
    //                                     h++
    //                                 }
    //                         s = c
    //                     }
    //                 }), r.off("keydown.autocomplete").on("keydown.autocomplete", function(n) {
    //                     var r, t = n.which,
    //                         f = i.children("li").length,
    //                         e = i.children(".active").first();
    //                     13 === t && u >= 0 ? (r = i.children("li").eq(u)).length && (r.trigger("mousedown.autocomplete"), n.preventDefault()) : 38 !== t && 40 !== t || (n.preventDefault(), 38 === t && u > 0 && u--, 40 === t && u < f - 1 && u++, e.removeClass("active"), u >= 0 && i.children("li").eq(u).addClass("active"))
    //                 }), i.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
    //                     var i = n(this).text().trim();
    //                     r.val(i);
    //                     r.trigger("change");
    //                     o();
    //                     "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, i)
    //                 }))
    //             })
    //         }
    //     });
    //     n.fn.material_select = function(t) {
    //         function i(n, t, i) {
    //             var u = n.indexOf(t),
    //                 r = -1 === u;
    //             return r ? n.push(t) : n.splice(u, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", r),
    //                 function(n, t) {
    //                     for (var u, i = "", r = 0, f = n.length; r < f; r++) u = t.find("option").eq(n[r]).text(), i += 0 === r ? u : ", " + u;
    //                     "" === i && (i = t.find("option:disabled").eq(0).text());
    //                     t.siblings("input.select-dropdown").val(i)
    //                 }(n, i), r
    //         }
    //         n(this).each(function() {
    //             var u = n(this),
    //                 e, c, s, l, y, b, f, o, h;
    //             if (!u.hasClass("browser-default"))
    //                 if (e = !!u.attr("multiple"), c = u.data("select-id"), c && (u.parent().find("span.caret").remove(), u.parent().find("input").remove(), u.unwrap(), n("ul#select-options-" + c).remove()), "destroy" !== t) {
    //                     s = Materialize.guid();
    //                     u.data("select-id", s);
    //                     l = n('<div class="select-wrapper"><\/div>');
    //                     l.addClass(u.attr("class"));
    //                     var r = n('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (e ? "multiple-select-dropdown" : "") + '"><\/ul>'),
    //                         p = u.children("option, optgroup"),
    //                         w = [],
    //                         a = !1,
    //                         k = u.find("option:selected").html() || u.find("option:first").html() || "",
    //                         v = function(t, i, u) {
    //                             var f = i.is(":disabled") ? "disabled " : "",
    //                                 s = "optgroup-option" === u ? "optgroup-option " : "",
    //                                 h = e ? '<input type="checkbox"' + f + "/><label><\/label>" : "",
    //                                 c = i.data("icon"),
    //                                 l = i.attr("class"),
    //                                 o;
    //                             if (c) return o = "", l && (o = ' class="' + l + '"'), r.append(n('<li class="' + f + s + '"><img alt="" src="' + c + '"' + o + "><span>" + h + i.html() + "<\/span><\/li>")), !0;
    //                             r.append(n('<li class="' + f + s + '"><span>' + h + i.html() + "<\/span><\/li>"))
    //                         };
    //                     p.length && p.each(function() {
    //                         if (n(this).is("option")) e ? v(0, n(this), "multiple") : v(0, n(this));
    //                         else if (n(this).is("optgroup")) {
    //                             var t = n(this).children("option");
    //                             r.append(n('<li class="optgroup"><span>' + n(this).attr("label") + "<\/span><\/li>"));
    //                             t.each(function() {
    //                                 v(0, n(this), "optgroup-option")
    //                             })
    //                         }
    //                     });
    //                     r.find("li:not(.optgroup)").each(function(s) {
    //                         n(this).click(function(h) {
    //                             if (!n(this).hasClass("disabled") && !n(this).hasClass("optgroup")) {
    //                                 var c = !0;
    //                                 e ? (n('input[type="checkbox"]', this).prop("checked", function(n, t) {
    //                                     return !t
    //                                 }), c = i(w, s, u), f.trigger("focus")) : (r.find("li").removeClass("active"), n(this).toggleClass("active"), f.val(n(this).text()));
    //                                 o(r, n(this));
    //                                 u.find("option").eq(s).prop("selected", c);
    //                                 u.trigger("change");
    //                                 void 0 !== t && t()
    //                             }
    //                             h.stopPropagation()
    //                         })
    //                     });
    //                     u.wrap(l);
    //                     y = n('<span class="caret">&#9660;<\/span>');
    //                     u.is(":disabled") && y.addClass("disabled");
    //                     b = k.replace(/"/g, "&quot;");
    //                     f = n('<input type="text" class="select-dropdown" readonly="true" ' + (u.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + b + '"/>');
    //                     u.before(f);
    //                     f.before(y);
    //                     f.after(r);
    //                     u.is(":disabled") || f.dropdown({
    //                         hover: !1
    //                     });
    //                     u.attr("tabindex") && n(f[0]).attr("tabindex", u.attr("tabindex"));
    //                     u.addClass("initialized");
    //                     f.on({
    //                         focus: function() {
    //                             var t, i;
    //                             (n("ul.select-dropdown").not(r[0]).is(":visible") && n("input.select-dropdown").trigger("close"), r.is(":visible")) || (n(this).trigger("open", ["focus"]), t = n(this).val(), e && t.indexOf(",") >= 0 && (t = t.split(",")[0]), i = r.find("li").filter(function() {
    //                                 return n(this).text().toLowerCase() === t.toLowerCase()
    //                             })[0], o(r, i, !0))
    //                         },
    //                         click: function(n) {
    //                             n.stopPropagation()
    //                         }
    //                     });
    //                     f.on("blur", function() {
    //                         e || n(this).trigger("close");
    //                         r.find("li.selected").removeClass("selected")
    //                     });
    //                     r.hover(function() {
    //                         a = !0
    //                     }, function() {
    //                         a = !1
    //                     });
    //                     n(window).on({
    //                         click: function() {
    //                             e && (a || f.trigger("close"))
    //                         }
    //                     });
    //                     e && u.find("option:selected:not(:disabled)").each(function() {
    //                         var t = n(this).index();
    //                         i(w, t, u);
    //                         r.find("li").eq(t).find(":checkbox").prop("checked", !0)
    //                     });
    //                     o = function(t, i, u) {
    //                         if (i) {
    //                             t.find("li.selected").removeClass("selected");
    //                             var f = n(i);
    //                             f.addClass("selected");
    //                             e && !u || r.scrollTo(f)
    //                         }
    //                     };
    //                     h = [];
    //                     f.on("keydown", function(t) {
    //                         var u, c, i, s;
    //                         9 != t.which ? 40 != t.which || r.is(":visible") ? (13 != t.which || r.is(":visible")) && (t.preventDefault(), u = String.fromCharCode(t.which).toLowerCase(), u && -1 === [9, 13, 27, 38, 40].indexOf(t.which) && (h.push(u), c = h.join(""), i = r.find("li").filter(function() {
    //                             return 0 === n(this).text().toLowerCase().indexOf(c)
    //                         })[0], i && o(r, i)), 13 == t.which && (s = r.find("li.selected:not(.disabled)")[0], s && (n(s).trigger("click"), e || f.trigger("close"))), 40 == t.which && (i = r.find("li.selected").length ? r.find("li.selected").next("li:not(.disabled)")[0] : r.find("li:not(.disabled)")[0], o(r, i)), 27 == t.which && f.trigger("close"), 38 == t.which && (i = r.find("li.selected").prev("li:not(.disabled)")[0]) && o(r, i), setTimeout(function() {
    //                             h = []
    //                         }, 1e3)) : f.trigger("open") : f.trigger("close")
    //                     })
    //                 } else u.data("select-id", null).removeClass("initialized")
    //         })
    //     }
    // }
    (jQuery),
    // function(n) {
    //     var t = {
    //         init: function(t) {
    //             return t = n.extend({
    //                 indicators: !0,
    //                 height: 400,
    //                 transition: 500,
    //                 interval: 6e3
    //             }, t), this.each(function() {
    //                 function a(n, t) {
    //                     n.hasClass("center-align") ? n.velocity({
    //                         opacity: 0,
    //                         translateY: -100
    //                     }, {
    //                         duration: t,
    //                         queue: !1
    //                     }) : n.hasClass("right-align") ? n.velocity({
    //                         opacity: 0,
    //                         translateX: 100
    //                     }, {
    //                         duration: t,
    //                         queue: !1
    //                     }) : n.hasClass("left-align") && n.velocity({
    //                         opacity: 0,
    //                         translateX: -100
    //                     }, {
    //                         duration: t,
    //                         queue: !1
    //                     })
    //                 }

    //                 function s(n) {
    //                     n >= r.length ? n = 0 : n < 0 && (n = r.length - 1);
    //                     (i = f.find(".active").index()) != n && (e = r.eq(i), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({
    //                         opacity: 0
    //                     }, {
    //                         duration: t.transition,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             r.not(".active").velocity({
    //                                 opacity: 0,
    //                                 translateX: 0,
    //                                 translateY: 0
    //                             }, {
    //                                 duration: 0,
    //                                 queue: !1
    //                             })
    //                         }
    //                     }), a($caption, t.transition), t.indicators && h.eq(i).removeClass("active"), r.eq(n).velocity({
    //                         opacity: 1
    //                     }, {
    //                         duration: t.transition,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     }), r.eq(n).find(".caption").velocity({
    //                         opacity: 1,
    //                         translateX: 0,
    //                         translateY: 0
    //                     }, {
    //                         duration: t.transition,
    //                         delay: t.transition,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     }), r.eq(n).addClass("active"), t.indicators && h.eq(n).addClass("active"))
    //                 }
    //                 var e, h, o, u = n(this),
    //                     f = u.find("ul.slides").first(),
    //                     r = f.find("> li"),
    //                     i = f.find(".active").index(),
    //                     c, l; - 1 != i && (e = r.eq(i));
    //                 u.hasClass("fullscreen") || (t.indicators ? u.height(t.height + 40) : u.height(t.height), f.height(t.height));
    //                 r.find(".caption").each(function() {
    //                     a(n(this), 0)
    //                 });
    //                 r.find("img").each(function() {
    //                     var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    //                     n(this).attr("src") !== t && (n(this).css("background-image", "url(" + n(this).attr("src") + ")"), n(this).attr("src", t))
    //                 });
    //                 t.indicators && (h = n('<ul class="indicators"><\/ul>'), r.each(function() {
    //                     var u = n('<li class="indicator-item"><\/li>');
    //                     u.click(function() {
    //                         s(f.parent().find(n(this)).index());
    //                         clearInterval(o);
    //                         o = setInterval(function() {
    //                             i = f.find(".active").index();
    //                             r.length == i + 1 ? i = 0 : i += 1;
    //                             s(i)
    //                         }, t.transition + t.interval)
    //                     });
    //                     h.append(u)
    //                 }), u.append(h), h = u.find("ul.indicators").find("li.indicator-item"));
    //                 e ? e.show() : (r.first().addClass("active").velocity({
    //                     opacity: 1
    //                 }, {
    //                     duration: t.transition,
    //                     queue: !1,
    //                     easing: "easeOutQuad"
    //                 }), i = 0, e = r.eq(i), t.indicators && h.eq(i).addClass("active"));
    //                 e.find("img").each(function() {
    //                     e.find(".caption").velocity({
    //                         opacity: 1,
    //                         translateX: 0,
    //                         translateY: 0
    //                     }, {
    //                         duration: t.transition,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     })
    //                 });
    //                 o = setInterval(function() {
    //                     s((i = f.find(".active").index()) + 1)
    //                 }, t.transition + t.interval);
    //                 c = !1;
    //                 l = !1;
    //                 u.hammer({
    //                     prevent_default: !1
    //                 }).bind("pan", function(n) {
    //                     if ("touch" === n.gesture.pointerType) {
    //                         clearInterval(o);
    //                         var t, s = n.gesture.direction,
    //                             i = n.gesture.deltaX,
    //                             e = n.gesture.velocityX,
    //                             h = n.gesture.velocityY;
    //                         $curr_slide = f.find(".active");
    //                         Math.abs(e) > Math.abs(h) && $curr_slide.velocity({
    //                             translateX: i
    //                         }, {
    //                             duration: 50,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         });
    //                         4 === s && (i > u.innerWidth() / 2 || e < -.65) ? l = !0 : 2 === s && (i < u.innerWidth() / -2 || e > .65) && (c = !0);
    //                         c && (0 === (t = $curr_slide.next()).length && (t = r.first()), t.velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }));
    //                         l && (0 === (t = $curr_slide.prev()).length && (t = r.last()), t.velocity({
    //                             opacity: 1
    //                         }, {
    //                             duration: 300,
    //                             queue: !1,
    //                             easing: "easeOutQuad"
    //                         }))
    //                     }
    //                 }).bind("panend", function(n) {
    //                     "touch" === n.gesture.pointerType && ($curr_slide = f.find(".active"), !1, curr_index = f.find(".active").index(), !l && !c || r.length <= 1 ? $curr_slide.velocity({
    //                         translateX: 0
    //                     }, {
    //                         duration: 300,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     }) : c ? (s(curr_index + 1), $curr_slide.velocity({
    //                         translateX: -1 * u.innerWidth()
    //                     }, {
    //                         duration: 300,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             $curr_slide.velocity({
    //                                 opacity: 0,
    //                                 translateX: 0
    //                             }, {
    //                                 duration: 0,
    //                                 queue: !1
    //                             })
    //                         }
    //                     })) : l && (s(curr_index - 1), $curr_slide.velocity({
    //                         translateX: u.innerWidth()
    //                     }, {
    //                         duration: 300,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             $curr_slide.velocity({
    //                                 opacity: 0,
    //                                 translateX: 0
    //                             }, {
    //                                 duration: 0,
    //                                 queue: !1
    //                             })
    //                         }
    //                     })), c = !1, l = !1, clearInterval(o), o = setInterval(function() {
    //                         i = f.find(".active").index();
    //                         r.length == i + 1 ? i = 0 : i += 1;
    //                         s(i)
    //                     }, t.transition + t.interval))
    //                 });
    //                 u.on("sliderPause", function() {
    //                     clearInterval(o)
    //                 });
    //                 u.on("sliderStart", function() {
    //                     clearInterval(o);
    //                     o = setInterval(function() {
    //                         i = f.find(".active").index();
    //                         r.length == i + 1 ? i = 0 : i += 1;
    //                         s(i)
    //                     }, t.transition + t.interval)
    //                 });
    //                 u.on("sliderNext", function() {
    //                     s((i = f.find(".active").index()) + 1)
    //                 });
    //                 u.on("sliderPrev", function() {
    //                     s((i = f.find(".active").index()) - 1)
    //                 })
    //             })
    //         },
    //         pause: function() {
    //             n(this).trigger("sliderPause")
    //         },
    //         start: function() {
    //             n(this).trigger("sliderStart")
    //         },
    //         next: function() {
    //             n(this).trigger("sliderNext")
    //         },
    //         prev: function() {
    //             n(this).trigger("sliderPrev")
    //         }
    //     };
    //     n.fn.slider = function(i) {
    //         return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void n.error("Method " + i + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
    //     }
    // }
    (jQuery),
    // function(n) {
    //     n(document).ready(function() {
    //         n(document).on("click.card", ".card", function(t) {
    //             n(this).find("> .card-reveal").length && (n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? n(this).find(".card-reveal").velocity({
    //                 translateY: 0
    //             }, {
    //                 duration: 225,
    //                 queue: !1,
    //                 easing: "easeInOutQuad",
    //                 complete: function() {
    //                     n(this).css({
    //                         display: "none"
    //                     })
    //                 }
    //             }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (n(t.target).closest(".card").css("overflow", "hidden"), n(this).find(".card-reveal").css({
    //                 display: "block"
    //             }).velocity("stop", !1).velocity({
    //                 translateY: "-100%"
    //             }, {
    //                 duration: 300,
    //                 queue: !1,
    //                 easing: "easeInOutQuad"
    //             })))
    //         })
    //     })
    // }
    (jQuery),
    function(n) {
        var t = {
            data: [],
            placeholder: "",
            secondaryPlaceholder: "",
            autocompleteOptions: {}
        };
        // n(document).ready(function() {
        //     n(document).on("click", ".chip .close", function() {
        //         n(this).closest(".chips").attr("data-initialized") || n(this).closest(".chip").remove()
        //     })
        // });
        // n.fn.material_chip = function(i) {
        //     var r = this,
        //         u;
        //     if (this.$el = n(this), this.$document = n(document), this.SELS = {
        //             CHIPS: ".chips",
        //             CHIP: ".chip",
        //             INPUT: "input",
        //             DELETE: ".material-icons",
        //             SELECTED_CHIP: ".selected"
        //         }, "data" === i) return this.$el.data("chips");
        //     u = n.extend({}, t, i);
        //     r.hasAutocomplete = !n.isEmptyObject(u.autocompleteOptions.data);
        //     // this.init = function() {
        //     //     var t = 0;
        //     //     r.$el.each(function() {
        //     //         var i = n(this),
        //     //             f = Materialize.guid();
        //     //         r.chipId = f;
        //     //         u.data && u.data instanceof Array || (u.data = []);
        //     //         i.data("chips", u.data);
        //     //         i.attr("data-index", t);
        //     //         i.attr("data-initialized", !0);
        //     //         i.hasClass(r.SELS.CHIPS) || i.addClass("chips");
        //     //         r.chips(i, f);
        //     //         t++
        //     //     })
        //     // };
        //     this.handleEvents = function() {
        //         var t = r.SELS;
        //         // r.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, function(i) {
        //         //     n(i.target).find(t.INPUT).focus()
        //         // });
        //         // r.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, function(i) {
        //         //     var u = n(i.target),
        //         //         f, e;
        //         //     u.length && (f = u.hasClass("selected"), e = u.closest(t.CHIPS), n(t.CHIP).removeClass("selected"), f || r.selectChip(u.index(), e))
        //         // });
        //         // r.$document.off("keydown.chips").on("keydown.chips", function(i) {
        //         //     var f;
        //         //     if (!n(i.target).is("input, textarea")) {
        //         //         var u, e = r.$document.find(t.CHIP + t.SELECTED_CHIP),
        //         //             o = e.closest(t.CHIPS),
        //         //             s = e.siblings(t.CHIP).length;
        //         //         if (e.length)
        //         //             if (8 === i.which || 46 === i.which) i.preventDefault(), u = e.index(), r.deleteChip(u, o), f = null, u + 1 < s ? f = u : u !== s && u + 1 !== s || (f = s - 1), f < 0 && (f = null), null !== f && r.selectChip(f, o), s || o.find("input").focus();
        //         //             else if (37 === i.which) {
        //         //             if ((u = e.index() - 1) < 0) return;
        //         //             n(t.CHIP).removeClass("selected");
        //         //             r.selectChip(u, o)
        //         //         } else if (39 === i.which) {
        //         //             if (u = e.index() + 1, n(t.CHIP).removeClass("selected"), u > s) return void o.find("input").focus();
        //         //             r.selectChip(u, o)
        //         //         }
        //         //     }
        //         // });
        //         // r.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, function(i) {
        //         //     var r = n(i.target).closest(t.CHIPS);
        //         //     r.addClass("focus");
        //         //     r.siblings("label, .prefix").addClass("active");
        //         //     n(t.CHIP).removeClass("selected")
        //         // });
        //         // r.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, function(i) {
        //         //     var r = n(i.target).closest(t.CHIPS);
        //         //     r.removeClass("focus");
        //         //     r.data("chips").length || r.siblings("label").removeClass("active");
        //         //     r.siblings(".prefix").removeClass("active")
        //         // });
        //         // r.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function(i) {
        //         //     var u = n(i.target),
        //         //         f = u.closest(t.CHIPS),
        //         //         e = f.children(t.CHIP).length;
        //         //     return 13 === i.which ? r.hasAutocomplete && f.find(".autocomplete-content.dropdown-content").length && f.find(".autocomplete-content.dropdown-content").children().length ? void 0 : (i.preventDefault(), r.addChip({
        //         //         tag: u.val()
        //         //     }, f), void u.val("")) : (8 === i.keyCode || 37 === i.keyCode) && "" === u.val() && e ? (i.preventDefault(), r.selectChip(e - 1, f), void u.blur()) : void 0
        //         // });
        //         // r.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, function(i) {
        //         //     var u = n(i.target),
        //         //         f = u.closest(t.CHIPS),
        //         //         e = u.closest(t.CHIP);
        //         //     i.stopPropagation();
        //         //     r.deleteChip(e.index(), f);
        //         //     f.find("input").focus()
        //         // })
        //     };
        //     // this.chips = function(t, i) {
        //     //     var f, e;
        //     //     t.empty();
        //     //     t.data("chips").forEach(function(n) {
        //     //         t.append(r.renderChip(n))
        //     //     });
        //     //     t.append(n('<input id="' + i + '" class="input" placeholder="">'));
        //     //     r.setPlaceholder(t);
        //     //     f = t.next("label");
        //     //     f.length && (f.attr("for", i), t.data("chips").length && f.addClass("active"));
        //     //     e = n("#" + i);
        //     //     r.hasAutocomplete && (u.autocompleteOptions.onAutocomplete = function(n) {
        //     //         r.addChip({
        //     //             tag: n
        //     //         }, t);
        //     //         e.val("");
        //     //         e.focus()
        //     //     }, e.autocomplete(u.autocompleteOptions))
        //     // };
        //     // this.renderChip = function(t) {
        //     //     if (t.tag) {
        //     //         var i = n('<div class="chip"><\/div>');
        //     //         return i.text(t.tag), i.append(n('<i class="material-icons close">close<\/i>')), i
        //     //     }
        //     // };
        //     // this.setPlaceholder = function(n) {
        //     //     n.data("chips").length && u.placeholder ? n.find("input").prop("placeholder", u.placeholder) : !n.data("chips").length && u.secondaryPlaceholder && n.find("input").prop("placeholder", u.secondaryPlaceholder)
        //     // };
        //     // this.isValid = function(n, t) {
        //     //     for (var r = n.data("chips"), u = !1, i = 0; i < r.length; i++)
        //     //         if (r[i].tag === t.tag) return void(u = !0);
        //     //     return "" !== t.tag && !u
        //     // };
        //     // this.addChip = function(n, t) {
        //     //     if (r.isValid(t, n)) {
        //     //         for (var e = r.renderChip(n), i = [], f = t.data("chips"), u = 0; u < f.length; u++) i.push(f[u]);
        //     //         i.push(n);
        //     //         t.data("chips", i);
        //     //         e.insertBefore(t.find("input"));
        //     //         t.trigger("chip.add", n);
        //     //         r.setPlaceholder(t)
        //     //     }
        //     // };
        //     // this.deleteChip = function(n, t) {
        //     //     var e = t.data("chips")[n];
        //     //     t.find(".chip").eq(n).remove();
        //     //     for (var u = [], f = t.data("chips"), i = 0; i < f.length; i++) i !== n && u.push(f[i]);
        //     //     t.data("chips", u);
        //     //     t.trigger("chip.delete", e);
        //     //     r.setPlaceholder(t)
        //     // };
        //     // this.selectChip = function(n, t) {
        //     //     var i = t.find(".chip").eq(n);
        //     //     i && !1 === i.hasClass("selected") && (i.addClass("selected"), t.trigger("chip.select", t.data("chips")[n]))
        //     // };
        //     // this.getChipsElement = function(n, t) {
        //     //     return t.eq(n)
        //     // };
        //     this.init();
        //     this.handleEvents()
        // }
    }(jQuery),
    function(n) {
        // n.fn.pushpin = function(t) {
        //     return "remove" === t ? (this.each(function() {
        //         (id = n(this).data("pushpin-id")) && (n(window).off("scroll." + id), n(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
        //     }), !1) : (t = n.extend({
        //         top: 0,
        //         bottom: 1 / 0,
        //         offset: 0
        //     }, t), $index = 0, this.each(function() {
        //         // function i(n) {
        //         //     n.removeClass("pin-top");
        //         //     n.removeClass("pinned");
        //         //     n.removeClass("pin-bottom")
        //         // }

        //         // function f(r, u) {
        //         //     r.each(function() {
        //         //         t.top <= u && t.bottom >= u && !n(this).hasClass("pinned") && (i(n(this)), n(this).css("top", t.offset), n(this).addClass("pinned"));
        //         //         u < t.top && !n(this).hasClass("pin-top") && (i(n(this)), n(this).css("top", 0), n(this).addClass("pin-top"));
        //         //         u > t.bottom && !n(this).hasClass("pin-bottom") && (i(n(this)), n(this).addClass("pin-bottom"), n(this).css("top", t.bottom - e))
        //         //     })
        //         // }
        //         var r = Materialize.guid(),
        //             u = n(this),
        //             e = n(this).offset().top;
        //         n(this).data("pushpin-id", r);
        //         f(u, n(window).scrollTop());
        //         n(window).on("scroll." + r, function() {
        //             var i = n(window).scrollTop() + t.offset;
        //             f(u, i)
        //         })
        //     }))
        // }
    }(jQuery),
    function(n) {
        // n(document).ready(function() {
        //     n.fn.reverse = [].reverse;
        //     n(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function() {
        //         var i = n(this);
        //         t(i)
        //     });
        //     n(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function() {
        //         var t = n(this);
        //         i(t)
        //     });
        //     n(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function() {
        //         var r = n(this).parent();
        //         r.hasClass("active") ? i(r) : t(r)
        //     });
        //     n(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function() {
        //         var t = n(this).parent();
        //         u(t)
        //     })
        // });
        // n.fn.extend({
        //     openFAB: function() {
        //         t(n(this))
        //     },
        //     closeFAB: function() {
        //         i(n(this))
        //     },
        //     openToolbar: function() {
        //         u(n(this))
        //     },
        //     closeToolbar: function() {
        //         r(n(this))
        //     }
        // });
        // var t = function(t) {
        //         var i = t,
        //             u, f, r;
        //         !1 === i.hasClass("active") && (!0 === i.hasClass("horizontal") ? f = 40 : u = 40, i.addClass("active"), i.find("ul .btn-floating").velocity({
        //             scaleY: ".4",
        //             scaleX: ".4",
        //             translateY: u + "px",
        //             translateX: f + "px"
        //         }, {
        //             duration: 0
        //         }), r = 0, i.find("ul .btn-floating").reverse().each(function() {
        //             n(this).velocity({
        //                 opacity: "1",
        //                 scaleX: "1",
        //                 scaleY: "1",
        //                 translateY: "0",
        //                 translateX: "0"
        //             }, {
        //                 duration: 80,
        //                 delay: r
        //             });
        //             r += 40
        //         }))
        //     },
            // i = function(n) {
            //     var i, r, t = n;
            //     !0 === t.hasClass("horizontal") ? r = 40 : i = 40;
            //     t.removeClass("active");
            //     t.find("ul .btn-floating").velocity("stop", !0);
            //     t.find("ul .btn-floating").velocity({
            //         opacity: "0",
            //         scaleX: ".4",
            //         scaleY: ".4",
            //         translateY: i + "px",
            //         translateX: r + "px"
            //     }, {
            //         duration: 80
            //     })
            // },
            // u = function(t) {
            //     if ("true" !== t.attr("data-open")) {
            //         var e, o, s, h = window.innerWidth,
            //             a = window.innerHeight,
            //             i = t[0].getBoundingClientRect(),
            //             u = t.find("> a").first(),
            //             c = t.find("> ul").first(),
            //             f = n('<div class="fab-backdrop"><\/div>'),
            //             l = u.css("background-color");
            //         u.append(f);
            //         e = i.left - h / 2 + i.width / 2;
            //         o = a - i.bottom;
            //         s = h / f.width();
            //         t.attr("data-origin-bottom", i.bottom);
            //         t.attr("data-origin-left", i.left);
            //         t.attr("data-origin-width", i.width);
            //         t.addClass("active");
            //         t.attr("data-open", !0);
            //         t.css({
            //             "text-align": "center",
            //             width: "100%",
            //             bottom: 0,
            //             left: 0,
            //             transform: "translateX(" + e + "px)",
            //             transition: "none"
            //         });
            //         u.css({
            //             transform: "translateY(" + -o + "px)",
            //             transition: "none"
            //         });
            //         f.css({
            //             "background-color": l
            //         });
            //         setTimeout(function() {
            //             t.css({
            //                 transform: "",
            //                 transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
            //             });
            //             u.css({
            //                 overflow: "visible",
            //                 transform: "",
            //                 transition: "transform .2s"
            //             });
            //             setTimeout(function() {
            //                 t.css({
            //                     overflow: "hidden",
            //                     "background-color": l
            //                 });
            //                 f.css({
            //                     transform: "scale(" + s + ")",
            //                     transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
            //                 });
            //                 c.find("> li > a").css({
            //                     opacity: 1
            //                 });
            //                 n(window).on("scroll.fabToolbarClose", function() {
            //                     r(t);
            //                     n(window).off("scroll.fabToolbarClose");
            //                     n(document).off("click.fabToolbarClose")
            //                 });
            //                 n(document).on("click.fabToolbarClose", function(i) {
            //                     n(i.target).closest(c).length || (r(t), n(window).off("scroll.fabToolbarClose"), n(document).off("click.fabToolbarClose"))
            //                 })
            //             }, 100)
            //         }, 0)
            //     }
            // },
            // r = function(n) {
            //     if ("true" === n.attr("data-open")) {
            //         var r, u, f = window.innerWidth,
            //             e = window.innerHeight,
            //             o = n.attr("data-origin-width"),
            //             s = n.attr("data-origin-bottom"),
            //             h = n.attr("data-origin-left"),
            //             t = n.find("> .btn-floating").first(),
            //             c = n.find("> ul").first(),
            //             i = n.find(".fab-backdrop"),
            //             l = t.css("background-color");
            //         r = h - f / 2 + o / 2;
            //         u = e - s;
            //         f / i.width();
            //         n.removeClass("active");
            //         n.attr("data-open", !1);
            //         n.css({
            //             "background-color": "transparent",
            //             transition: "none"
            //         });
            //         t.css({
            //             transition: "none"
            //         });
            //         i.css({
            //             transform: "scale(0)",
            //             "background-color": l
            //         });
            //         c.find("> li > a").css({
            //             opacity: ""
            //         });
            //         setTimeout(function() {
            //             i.remove();
            //             n.css({
            //                 "text-align": "",
            //                 width: "",
            //                 bottom: "",
            //                 left: "",
            //                 overflow: "",
            //                 "background-color": "",
            //                 transform: "translate3d(" + -r + "px,0,0)"
            //             });
            //             t.css({
            //                 overflow: "",
            //                 transform: "translate3d(0," + u + "px,0)"
            //             });
            //             setTimeout(function() {
            //                 n.css({
            //                     transform: "translate3d(0,0,0)",
            //                     transition: "transform .2s"
            //                 });
            //                 t.css({
            //                     transform: "translate3d(0,0,0)",
            //                     transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
            //                 })
            //             }, 20)
            //         }, 200)
            //     }
            // }
    }(jQuery),
    // function(n) {
    //     Materialize.fadeInImage = function(t) {
    //         var i;
    //         if ("string" == typeof t) i = n(t);
    //         else {
    //             if ("object" != typeof t) return;
    //             i = t
    //         }
    //         i.css({
    //             opacity: 0
    //         });
    //         n(i).velocity({
    //             opacity: 1
    //         }, {
    //             duration: 650,
    //             queue: !1,
    //             easing: "easeOutSine"
    //         });
    //         n(i).velocity({
    //             opacity: 1
    //         }, {
    //             duration: 1300,
    //             queue: !1,
    //             easing: "swing",
    //             step: function(t, i) {
    //                 i.start = 100;
    //                 var u = t / 100,
    //                     r = 150 - (100 - t) / 1.75;
    //                 r < 100 && (r = 100);
    //                 t >= 0 && n(this).css({
    //                     "-webkit-filter": "grayscale(" + u + ")brightness(" + r + "%)",
    //                     filter: "grayscale(" + u + ")brightness(" + r + "%)"
    //                 })
    //             }
    //         })
    //     };
    //     Materialize.showStaggeredList = function(t) {
    //         var i, r;
    //         if ("string" == typeof t) i = n(t);
    //         else {
    //             if ("object" != typeof t) return;
    //             i = t
    //         }
    //         r = 0;
    //         i.find("li").velocity({
    //             translateX: "-100px"
    //         }, {
    //             duration: 0
    //         });
    //         i.find("li").each(function() {
    //             n(this).velocity({
    //                 opacity: "1",
    //                 translateX: "0"
    //             }, {
    //                 duration: 800,
    //                 delay: r,
    //                 easing: [60, 10]
    //             });
    //             r += 120
    //         })
    //     };
    //     n(document).ready(function() {
    //         var t = !1,
    //             i = !1;
    //         n(".dismissable").each(function() {
    //             n(this).hammer({
    //                 prevent_default: !1
    //             }).bind("pan", function(r) {
    //                 if ("touch" === r.gesture.pointerType) {
    //                     var u = n(this),
    //                         e = r.gesture.direction,
    //                         f = r.gesture.deltaX,
    //                         o = r.gesture.velocityX;
    //                     u.velocity({
    //                         translateX: f
    //                     }, {
    //                         duration: 50,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     });
    //                     4 === e && (f > u.innerWidth() / 2 || o < -.75) && (t = !0);
    //                     2 === e && (f < u.innerWidth() / -2 || o > .75) && (i = !0)
    //                 }
    //             }).bind("panend", function(r) {
    //                 if (Math.abs(r.gesture.deltaX) < n(this).innerWidth() / 2 && (i = !1, t = !1), "touch" === r.gesture.pointerType) {
    //                     var f, u = n(this);
    //                     t || i ? (f = t ? u.innerWidth() : -1 * u.innerWidth(), u.velocity({
    //                         translateX: f
    //                     }, {
    //                         duration: 100,
    //                         queue: !1,
    //                         easing: "easeOutQuad",
    //                         complete: function() {
    //                             u.css("border", "none");
    //                             u.velocity({
    //                                 height: 0,
    //                                 padding: 0
    //                             }, {
    //                                 duration: 200,
    //                                 queue: !1,
    //                                 easing: "easeOutQuad",
    //                                 complete: function() {
    //                                     u.remove()
    //                                 }
    //                             })
    //                         }
    //                     })) : u.velocity({
    //                         translateX: 0
    //                     }, {
    //                         duration: 100,
    //                         queue: !1,
    //                         easing: "easeOutQuad"
    //                     });
    //                     t = !1;
    //                     i = !1
    //                 }
    //             })
    //         })
    //     })
    // }(jQuery),
    // function() {
    //     var n = !1;
    //     Materialize.scrollFire = function(t) {
    //         var i = Materialize.throttle(function() {
    //             ! function() {
    //                 for (var f = window.pageYOffset + window.innerHeight, i = 0; i < t.length; i++) {
    //                     var n = t[i],
    //                         e = n.selector,
    //                         o = n.offset,
    //                         r = n.callback,
    //                         u = document.querySelector(e);
    //                     null !== u && f > u.getBoundingClientRect().top + window.pageYOffset + o && !0 !== n.done && ("function" == typeof r ? r.call(this, u) : "string" == typeof r && new Function(r)(u), n.done = !0)
    //                 }
    //             }()
    //         }, t.throttle || 100);
    //         n || (window.addEventListener("scroll", i), window.addEventListener("resize", i), n = !0);
    //         setTimeout(i, 0)
    //     }
    // }(),
    function(n) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : this.Picker = n(jQuery)
    }(function(n) {
        function t(e, s, h, c) {
            function k() {
                return t._.node("div", t._.node("div", t._.node("div", t._.node("div", l.component.nodes(a.open), y.box), y.wrap), y.frame), y.holder)
            }

            // function d(n) {
            //     var t = n.keyCode,
            //         i = /^(8|46)$/.test(t);
            //     if (27 == t) return l.close(), !1;
            //     (32 == t || i || !a.open && l.component.key[t]) && (n.preventDefault(), n.stopPropagation(), i ? l.clear().close() : l.open())
            // }

            // function g(n) {
            //     n.stopPropagation();
            //     "focus" == n.type && l.$root.addClass(y.focused);
            //     l.open()
            // }
            if (!e) return t;
            var w = !1,
                a = {
                    id: e.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                v = h ? n.extend(!0, {}, h.defaults, c) : c || {},
                y = n.extend({}, t.klasses(), v.klass),
                p = n(e),
                b = function() {
                    return this.start()
                },
                l = b.prototype = {
                    constructor: b,
                    $node: p,
                    // start: function() {
                    //     return a && a.start ? l : (a.methods = {}, a.start = !0, a.open = !1, a.type = e.type, e.autofocus = e == o(), e.readOnly = !v.editable, e.id = e.id || a.id, "text" != e.type && (e.type = "text"), l.component = new h(l, v), l.$root = n(t._.node("div", k(), y.picker, 'id="' + e.id + '_root" tabindex="0"')), l.$root.on({
                    //         keydown: d,
                    //         focusin: function(n) {
                    //             l.$root.removeClass(y.focused);
                    //             n.stopPropagation()
                    //         },
                    //         "mousedown click": function(t) {
                    //             var i = t.target;
                    //             i != l.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || n(i).is("input, select, textarea, button, option") || (t.preventDefault(), l.$root.eq(0).focus()))
                    //         }
                    //     }).on({
                    //         focus: function() {
                    //             p.addClass(y.target)
                    //         },
                    //         blur: function() {
                    //             p.removeClass(y.target)
                    //         }
                    //     }).on("focus.toOpen", g).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    //         var r = n(this),
                    //             t = r.data(),
                    //             u = r.hasClass(y.navDisabled) || r.hasClass(y.disabled),
                    //             i = o();
                    //         i = i && (i.type || i.href);
                    //         (u || i && !n.contains(l.$root[0], i)) && l.$root.eq(0).focus();
                    //         !u && t.nav ? l.set("highlight", l.component.item.highlight, {
                    //             nav: t.nav
                    //         }) : !u && "pick" in t ? l.set("select", t.pick) : t.clear ? l.clear().close(!0) : t.close && l.close(!0)
                    //     }), i(l.$root[0], "hidden", !0), v.formatSubmit && function() {
                    //         var t;
                    //         !0 === v.hiddenName ? (t = e.name, e.name = "") : t = (t = ["string" == typeof v.hiddenPrefix ? v.hiddenPrefix : "", "string" == typeof v.hiddenSuffix ? v.hiddenSuffix : "_submit"])[0] + e.name + t[1];
                    //         l._hidden = n('<input type=hidden name="' + t + '"' + (p.data("value") || e.value ? ' value="' + l.get("select", v.formatSubmit) + '"' : "") + ">")[0];
                    //         p.on("change." + a.id, function() {
                    //             l._hidden.value = e.value ? l.get("select", v.formatSubmit) : ""
                    //         });
                    //         v.container ? n(v.container).append(l._hidden) : p.after(l._hidden)
                    //     }(), function() {
                    //         p.data(s, l).addClass(y.input).attr("tabindex", -1).val(p.data("value") ? l.get("select", v.format) : e.value);
                    //         v.editable || p.on("focus." + a.id + " click." + a.id, function(n) {
                    //             n.preventDefault();
                    //             l.$root.eq(0).focus()
                    //         }).on("keydown." + a.id, d);
                    //         i(e, {
                    //             haspopup: !0,
                    //             expanded: !1,
                    //             readonly: !1,
                    //             owns: e.id + "_root"
                    //         })
                    //     }(), v.container ? n(v.container).append(l.$root) : p.after(l.$root), l.on({
                    //         start: l.component.onStart,
                    //         render: l.component.onRender,
                    //         stop: l.component.onStop,
                    //         open: l.component.onOpen,
                    //         close: l.component.onClose,
                    //         set: l.component.onSet
                    //     }).on({
                    //         start: v.onStart,
                    //         render: v.onRender,
                    //         stop: v.onStop,
                    //         open: v.onOpen,
                    //         close: v.onClose,
                    //         set: v.onSet
                    //     }), w = function(n) {
                    //         var t, i = "position";
                    //         return n.currentStyle ? t = n.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(n)[i]), "fixed" == t
                    //     }(l.$root.children()[0]), e.autofocus && l.open(), l.trigger("start").trigger("render"))
                    // },
                    // render: function(n) {
                    //     return n ? l.$root.html(k()) : l.$root.find("." + y.box).html(l.component.nodes(a.open)), l.trigger("render")
                    // },
                    // stop: function() {
                    //     return a.start ? (l.close(), l._hidden && l._hidden.parentNode.removeChild(l._hidden), l.$root.remove(), p.removeClass(y.input).removeData(s), setTimeout(function() {
                    //         p.off("." + a.id)
                    //     }, 0), e.type = a.type, e.readOnly = !1, l.trigger("stop"), a.methods = {}, a.start = !1, l) : l
                    // },
                    // open: function(o) {
                    //     return a.open ? l : (p.addClass(y.active), i(e, "expanded", !0), setTimeout(function() {
                    //         l.$root.addClass(y.opened);
                    //         i(l.$root[0], "hidden", !1)
                    //     }, 0), !1 !== o && (a.open = !0, w && r.css("overflow", "hidden").css("padding-right", "+=" + f()), l.$root.eq(0).focus(), u.on("click." + a.id + " focusin." + a.id, function(n) {
                    //         var t = n.target;
                    //         t != e && t != document && 3 != n.which && l.close(t === l.$root.children()[0])
                    //     }).on("keydown." + a.id, function(i) {
                    //         var r = i.keyCode,
                    //             u = l.component.key[r],
                    //             f = i.target;
                    //         27 == r ? l.close(!0) : f != l.$root[0] || !u && 13 != r ? n.contains(l.$root[0], f) && 13 == r && (i.preventDefault(), f.click()) : (i.preventDefault(), u ? t._.trigger(l.component.key.go, l, [t._.trigger(u)]) : l.$root.find("." + y.highlighted).hasClass(y.disabled) || l.set("select", l.component.item.highlight).close())
                    //     })), l.trigger("open"))
                    // },
                    // close: function(n) {
                    //     return n && (l.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() {
                    //         l.$root.on("focus.toOpen", g)
                    //     }, 0)), p.removeClass(y.active), i(e, "expanded", !1), setTimeout(function() {
                    //         l.$root.removeClass(y.opened + " " + y.focused);
                    //         i(l.$root[0], "hidden", !0)
                    //     }, 0), a.open ? (a.open = !1, w && r.css("overflow", "").css("padding-right", "-=" + f()), u.off("." + a.id), l.trigger("close")) : l
                    // },
                    // clear: function(n) {
                    //     return l.set("clear", null, n)
                    // },
                    // set: function(t, i, r) {
                    //     var u, f, o = n.isPlainObject(t),
                    //         e = o ? t : {};
                    //     if (r = o && n.isPlainObject(i) ? i : r || {}, t) {
                    //         o || (e[t] = i);
                    //         for (u in e) f = e[u], u in l.component.item && (void 0 === f && (f = null), l.component.set(u, f, r)), "select" != u && "clear" != u || p.val("clear" == u ? "" : l.get(u, v.format)).trigger("change");
                    //         l.render()
                    //     }
                    //     return r.muted ? l : l.trigger("set", e)
                    // },
                    // get: function(n, i) {
                    //     if (null != a[n = n || "value"]) return a[n];
                    //     if ("valueSubmit" == n) {
                    //         if (l._hidden) return l._hidden.value;
                    //         n = "value"
                    //     }
                    //     if ("value" == n) return e.value;
                    //     if (n in l.component.item) {
                    //         if ("string" == typeof i) {
                    //             var r = l.component.get(n);
                    //             return r ? t._.trigger(l.component.formats.toString, l.component, [i, r]) : ""
                    //         }
                    //         return l.component.get(n)
                    //     }
                    // },
                    // on: function(t, i, r) {
                    //     var u, e, o = n.isPlainObject(t),
                    //         f = o ? t : {};
                    //     if (t) {
                    //         o || (f[t] = i);
                    //         for (u in f) e = f[u], r && (u = "_" + u), a.methods[u] = a.methods[u] || [], a.methods[u].push(e)
                    //     }
                    //     return l
                    // },
                    // off: function() {
                    //     var n, t, i = arguments;
                    //     for (n = 0, namesCount = i.length; n < namesCount; n += 1)(t = i[n]) in a.methods && delete a.methods[t];
                    //     return l
                    // },
                    // trigger: function(n, i) {
                    //     var r = function(n) {
                    //         var r = a.methods[n];
                    //         r && r.map(function(n) {
                    //             t._.trigger(n, l, [i])
                    //         })
                    //     };
                    //     return r("_" + n), r(n), l
                    // }
                };
            return new b
        }

        // function f() {
        //     var t, i, u;
        //     return r.height() <= s.height() ? 0 : (t = n('<div style="visibility:hidden;width:100px" />').appendTo("body"), i = t[0].offsetWidth, t.css("overflow", "scroll"), u = n('<div style="width:100%" />').appendTo(t)[0].offsetWidth, t.remove(), i - u)
        // }

        // function i(t, i, r) {
        //     if (n.isPlainObject(i))
        //         for (var u in i) e(t, u, i[u]);
        //     else e(t, i, r)
        // }

        // function e(n, t, i) {
        //     n.setAttribute(("role" == t ? "" : "aria-") + t, i)
        // }

        // function o() {
        //     try {
        //         return document.activeElement
        //     } catch (n) {}
        // }
        var s = n(window),
            u = n(document),
            r = n(document.documentElement);
        return t.klasses = function(n) {
            return {
                picker: n = n || "picker",
                opened: n + "--opened",
                focused: n + "--focused",
                input: n + "__input",
                active: n + "__input--active",
                target: n + "__input--target",
                holder: n + "__holder",
                frame: n + "__frame",
                wrap: n + "__wrap",
                box: n + "__box"
            }
        }, t._ = {
            group: function(n) {
                for (var i, u = "", r = t._.trigger(n.min, n); r <= t._.trigger(n.max, n, [r]); r += n.i) i = t._.trigger(n.item, n, [r]), u += t._.node(n.node, i[0], i[1], i[2]);
                return u
            },
            node: function(t, i, r, u) {
                return i ? (i = n.isArray(i) ? i.join("") : i, "<" + t + (r = r ? ' class="' + r + '"' : "") + (u = u ? " " + u : "") + ">" + i + "<\/" + t + ">") : ""
            },
            lead: function(n) {
                return (n < 10 ? "0" : "") + n
            },
            trigger: function(n, t, i) {
                return "function" == typeof n ? n.apply(t, i || []) : n
            },
            digits: function(n) {
                return /\d/.test(n[1]) ? 2 : 1
            },
            isDate: function(n) {
                return {}.toString.call(n).indexOf("Date") > -1 && this.isInteger(n.getDate())
            },
            isInteger: function(n) {
                return {}.toString.call(n).indexOf("Number") > -1 && n % 1 == 0
            },
            ariaAttr: function(t, i) {
                var r, u, f;
                n.isPlainObject(t) || (t = {
                    attribute: i
                });
                i = "";
                for (r in t) u = ("role" == r ? "" : "aria-") + r, f = t[r], i += null == f ? "" : u + '="' + t[r] + '"';
                return i
            }
        }, t.extend = function(i, r) {
            n.fn[i] = function(u, f) {
                var e = this.data(i);
                return "picker" == u ? e : e && "string" == typeof u ? t._.trigger(e[u], e, [f]) : this.each(function() {
                    n(this).data(i) || new t(this, i, r, u)
                })
            };
            n.fn[i].defaults = r.defaults
        }, t
    }),
    function(n) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], n) : "object" == typeof exports ? module.exports = n(require("./picker.js"), require("jquery")) : n(Picker, jQuery)
    }(function(n, t) {
        function u(n, t) {
            var u, i = this,
                r = n.$node[0],
                s = r.value,
                f = n.$node.data("value"),
                e = f || s,
                h = f ? t.formatSubmit : t.format,
                o = function() {
                    return r.currentStyle ? "rtl" == r.currentStyle.direction : "rtl" == getComputedStyle(n.$root[0]).direction
                };
            i.settings = t;
            i.$node = n.$node;
            i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            };
            i.item = {};
            i.item.clear = null;
            i.item.disable = (t.disable || []).slice(0);
            i.item.enable = -(!0 === (u = i.item.disable)[0] ? u.shift() : -1);
            i.set("min", t.min).set("max", t.max).set("now");
            e ? i.set("select", e, {
                format: h
            }) : i.set("select", null).set("highlight", i.item.now);
            i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return o() ? -1 : 1
                },
                37: function() {
                    return o() ? 1 : -1
                },
                // go: function(n) {
                //     var t = i.item.highlight,
                //         r = new Date(t.year, t.month, t.date + n);
                //     i.set("highlight", r, {
                //         interval: n
                //     });
                //     this.render()
                // }
            };
        //     n.on("render", function() {
        //         n.$root.find("." + t.klass.selectMonth).on("change", function() {
        //             var i = this.value;
        //             i && (n.set("highlight", [n.get("view").year, i, n.get("highlight").date]), n.$root.find("." + t.klass.selectMonth).trigger("focus"))
        //         });
        //         n.$root.find("." + t.klass.selectYear).on("change", function() {
        //             var i = this.value;
        //             i && (n.set("highlight", [i, n.get("view").month, n.get("highlight").date]), n.$root.find("." + t.klass.selectYear).trigger("focus"))
        //         })
        //     }, 1).on("open", function() {
        //         var r = "";
        //         i.disabled(i.get("now")) && (r = ":not(." + t.klass.buttonToday + ")");
        //         n.$root.find("button" + r + ", select").attr("disabled", !1)
        //     }, 1).on("close", function() {
        //         n.$root.find("button, select").attr("disabled", !0)
        //     }, 1)
        }
        var r, i = n._;
        // u.prototype.set = function(n, t, i) {
        //     var r = this,
        //         u = r.item;
        //     return null === t ? ("clear" == n && (n = "select"), u[n] = t, r) : (u["enable" == n ? "disable" : "flip" == n ? "enable" : n] = r.queue[n].split(" ").map(function(u) {
        //         return t = r[u](n, t, i)
        //     }).pop(), "select" == n ? r.set("highlight", u.select, i) : "highlight" == n ? r.set("view", u.highlight, i) : n.match(/^(flip|min|max|disable|enable)$/) && (u.select && r.disabled(u.select) && r.set("select", u.select, i), u.highlight && r.disabled(u.highlight) && r.set("highlight", u.highlight, i)), r)
        // };
        // u.prototype.get = function(n) {
        //     return this.item[n]
        // };
        // u.prototype.create = function(n, r, u) {
        //     var f;
        //     return (r = void 0 === r ? n : r) == -1 / 0 || r == 1 / 0 ? f = r : t.isPlainObject(r) && i.isInteger(r.pick) ? r = r.obj : t.isArray(r) ? (r = new Date(r[0], r[1], r[2]), r = i.isDate(r) ? r : this.create().obj) : r = i.isInteger(r) || i.isDate(r) ? this.normalize(new Date(r), u) : this.now(n, r, u), {
        //         year: f || r.getFullYear(),
        //         month: f || r.getMonth(),
        //         date: f || r.getDate(),
        //         day: f || r.getDay(),
        //         obj: f || r,
        //         pick: f || r.getTime()
        //     }
        // };
        // u.prototype.createRange = function(n, r) {
        //     var f = this,
        //         u = function(n) {
        //             return !0 === n || t.isArray(n) || i.isDate(n) ? f.create(n) : n
        //         };
        //     return i.isInteger(n) || (n = u(n)), i.isInteger(r) || (r = u(r)), i.isInteger(n) && t.isPlainObject(r) ? n = [r.year, r.month, r.date + n] : i.isInteger(r) && t.isPlainObject(n) && (r = [n.year, n.month, n.date + r]), {
        //         from: u(n),
        //         to: u(r)
        //     }
        // };
        // u.prototype.withinRange = function(n, t) {
        //     return n = this.createRange(n.from, n.to), t.pick >= n.from.pick && t.pick <= n.to.pick
        // };
        // u.prototype.overlapRanges = function(n, t) {
        //     var i = this;
        //     return n = i.createRange(n.from, n.to), t = i.createRange(t.from, t.to), i.withinRange(n, t.from) || i.withinRange(n, t.to) || i.withinRange(t, n.from) || i.withinRange(t, n.to)
        // };
        // u.prototype.now = function(n, t, i) {
        //     return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        // };
        // u.prototype.navigate = function(n, i, r) {
        //     var s, f, u, e, c = t.isArray(i),
        //         h = t.isPlainObject(i),
        //         o = this.item.view;
        //     if (c || h) {
        //         for (h ? (f = i.year, u = i.month, e = i.date) : (f = +i[0], u = +i[1], e = +i[2]), r && r.nav && o && o.month !== u && (f = o.year, u = o.month), f = (s = new Date(f, u + (r && r.nav ? r.nav : 0), 1)).getFullYear(), u = s.getMonth(); new Date(f, u, e).getMonth() !== u;) e -= 1;
        //         i = [f, u, e]
        //     }
        //     return i
        // };
        // u.prototype.normalize = function(n) {
        //     return n.setHours(0, 0, 0, 0), n
        // };
        // u.prototype.measure = function(n, t) {
        //     return t ? "string" == typeof t ? t = this.parse(n, t) : i.isInteger(t) && (t = this.now(n, t, {
        //         rel: t
        //     })) : t = "min" == n ? -1 / 0 : 1 / 0, t
        // };
        // u.prototype.viewset = function(n, t) {
        //     return this.create([t.year, t.month, 1])
        // };
        // u.prototype.validate = function(n, r, u) {
        //     var c, l, v, y, f = this,
        //         a = r,
        //         e = u && u.interval ? u.interval : 1,
        //         h = -1 === f.item.enable,
        //         o = f.item.min,
        //         s = f.item.max,
        //         p = h && f.item.disable.filter(function(n) {
        //             if (t.isArray(n)) {
        //                 var u = f.create(n).pick;
        //                 u < r.pick ? c = !0 : u > r.pick && (l = !0)
        //             }
        //             return i.isInteger(n)
        //         }).length;
        //     if ((!u || !u.nav) && (!h && f.disabled(r) || h && f.disabled(r) && (p || c || l) || !h && (r.pick <= o.pick || r.pick >= s.pick)))
        //         for (h && !p && (!l && e > 0 || !c && e < 0) && (e *= -1); f.disabled(r) && (Math.abs(e) > 1 && (r.month < a.month || r.month > a.month) && (r = a, e = e > 0 ? 1 : -1), r.pick <= o.pick ? (v = !0, e = 1, r = f.create([o.year, o.month, o.date + (r.pick === o.pick ? 0 : -1)])) : r.pick >= s.pick && (y = !0, e = -1, r = f.create([s.year, s.month, s.date + (r.pick === s.pick ? 0 : 1)])), !v || !y);) r = f.create([r.year, r.month, r.date + e]);
        //     return r
        // };
        // u.prototype.disabled = function(n) {
        //     var r = this,
        //         u = r.item.disable.filter(function(u) {
        //             return i.isInteger(u) ? n.day === (r.settings.firstDay ? u : u - 1) % 7 : t.isArray(u) || i.isDate(u) ? n.pick === r.create(u).pick : t.isPlainObject(u) ? r.withinRange(u, n) : void 0
        //         });
        //     return u = u.length && !u.filter(function(n) {
        //         return t.isArray(n) && "inverted" == n[3] || t.isPlainObject(n) && n.inverted
        //     }).length, -1 === r.item.enable ? !u : u || n.pick < r.item.min.pick || n.pick > r.item.max.pick
        // };
        // u.prototype.parse = function(n, t, r) {
        //     var f = this,
        //         u = {};
        //     return t && "string" == typeof t ? (r && r.format || ((r = r || {}).format = f.settings.format), f.formats.toArray(r.format).map(function(n) {
        //         var r = f.formats[n],
        //             e = r ? i.trigger(r, f, [t, u]) : n.replace(/^!/, "").length;
        //         r && (u[n] = t.substr(0, e));
        //         t = t.substr(e)
        //     }), [u.yyyy || u.yy, +(u.mm || u.m) - 1, u.dd || u.d]) : t
        // };
        // u.prototype.formats = function() {
        //     function n(n, t, i) {
        //         var r = n.match(/\w+/)[0];
        //         return i.mm || i.m || (i.m = t.indexOf(r) + 1), r.length
        //     }

        //     // function t(n) {
        //     //     return n.match(/\w+/)[0].length
        //     // }
        //     return {
        //         // d: function(n, t) {
        //         //     return n ? i.digits(n) : t.date
        //         // },
        //         // dd: function(n, t) {
        //         //     return n ? 2 : i.lead(t.date)
        //         // },
        //         // ddd: function(n, i) {
        //         //     return n ? t(n) : this.settings.weekdaysShort[i.day]
        //         // },
        //         // dddd: function(n, i) {
        //         //     return n ? t(n) : this.settings.weekdaysFull[i.day]
        //         // },
        //         // m: function(n, t) {
        //         //     return n ? i.digits(n) : t.month + 1
        //         // },
        //         // mm: function(n, t) {
        //         //     return n ? 2 : i.lead(t.month + 1)
        //         // },
        //         // mmm: function(t, i) {
        //         //     var r = this.settings.monthsShort;
        //         //     return t ? n(t, r, i) : r[i.month]
        //         // },
        //         // mmmm: function(t, i) {
        //         //     var r = this.settings.monthsFull;
        //         //     return t ? n(t, r, i) : r[i.month]
        //         // },
        //         // yy: function(n, t) {
        //         //     return n ? 2 : ("" + t.year).slice(2)
        //         // },
        //         // yyyy: function(n, t) {
        //         //     return n ? 4 : t.year
        //         // },
        //         // toArray: function(n) {
        //         //     return n.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
        //         // },
        //         // toString: function(n, t) {
        //         //     var r = this;
        //         //     return r.formats.toArray(n).map(function(n) {
        //         //         return i.trigger(r.formats[n], r, [0, t]) || n.replace(/^!/, "")
        //         //     }).join("")
        //         // }
        //     }
        // }();
        // u.prototype.isDateExact = function(n, r) {
        //     return i.isInteger(n) && i.isInteger(r) || "boolean" == typeof n && "boolean" == typeof r ? n === r : (i.isDate(n) || t.isArray(n)) && (i.isDate(r) || t.isArray(r)) ? this.create(n).pick === this.create(r).pick : !(!t.isPlainObject(n) || !t.isPlainObject(r)) && this.isDateExact(n.from, r.from) && this.isDateExact(n.to, r.to)
        // };
        // u.prototype.isDateOverlap = function(n, r) {
        //     var u = this.settings.firstDay ? 1 : 0;
        //     return i.isInteger(n) && (i.isDate(r) || t.isArray(r)) ? (n = n % 7 + u) === this.create(r).day + 1 : i.isInteger(r) && (i.isDate(n) || t.isArray(n)) ? (r = r % 7 + u) === this.create(n).day + 1 : !(!t.isPlainObject(n) || !t.isPlainObject(r)) && this.overlapRanges(n, r)
        // };
        // u.prototype.flipEnable = function(n) {
        //     var t = this.item;
        //     t.enable = n || (-1 == t.enable ? 1 : -1)
        // };
        // u.prototype.deactivate = function(n, r) {
        //     var f = this,
        //         u = f.item.disable.slice(0);
        //     return "flip" == r ? f.flipEnable() : !1 === r ? (f.flipEnable(1), u = []) : !0 === r ? (f.flipEnable(-1), u = []) : r.map(function(n) {
        //         for (var e, r = 0; r < u.length; r += 1)
        //             if (f.isDateExact(n, u[r])) {
        //                 e = !0;
        //                 break
        //             }
        //         e || (i.isInteger(n) || i.isDate(n) || t.isArray(n) || t.isPlainObject(n) && n.from && n.to) && u.push(n)
        //     }), u
        // };
        // u.prototype.activate = function(n, r) {
        //     var f = this,
        //         u = f.item.disable,
        //         e = u.length;
        //     return "flip" == r ? f.flipEnable() : !0 === r ? (f.flipEnable(1), u = []) : !1 === r ? (f.flipEnable(-1), u = []) : r.map(function(n) {
        //         for (var o, s, h, r = 0; r < e; r += 1) {
        //             if (s = u[r], f.isDateExact(s, n)) {
        //                 o = u[r] = null;
        //                 h = !0;
        //                 break
        //             }
        //             if (f.isDateOverlap(s, n)) {
        //                 t.isPlainObject(n) ? (n.inverted = !0, o = n) : t.isArray(n) ? (o = n)[3] || o.push("inverted") : i.isDate(n) && (o = [n.getFullYear(), n.getMonth(), n.getDate(), "inverted"]);
        //                 break
        //             }
        //         }
        //         if (o)
        //             for (r = 0; r < e; r += 1)
        //                 if (f.isDateExact(u[r], n)) {
        //                     u[r] = null;
        //                     break
        //                 }
        //         if (h)
        //             for (r = 0; r < e; r += 1)
        //                 if (f.isDateOverlap(u[r], n)) {
        //                     u[r] = null;
        //                     break
        //                 }
        //         o && u.push(o)
        //     }), u.filter(function(n) {
        //         return null != n
        //     })
        // };
        // u.prototype.nodes = function(n) {
        //     var c, l, r = this,
        //         t = r.settings,
        //         e = r.item,
        //         h = e.now,
        //         f = e.select,
        //         a = e.highlight,
        //         u = e.view,
        //         w = e.disable,
        //         o = e.min,
        //         s = e.max,
        //         b = (c = (t.showWeekdaysFull ? t.weekdaysFull : t.weekdaysLetter).slice(0), l = t.weekdaysFull.slice(0), t.firstDay && (c.push(c.shift()), l.push(l.shift())), i.node("thead", i.node("tr", i.group({
        //             min: 0,
        //             max: 6,
        //             i: 1,
        //             node: "th",
        //             // item: function(n) {
        //             //     return [c[n], t.klass.weekdays, 'scope=col title="' + l[n] + '"']
        //             // }
        //         })))),
        //         // v = function(n) {
        //         //     return i.node("div", " ", t.klass["nav" + (n ? "Next" : "Prev")] + (n && u.year >= s.year && u.month >= s.month || !n && u.year <= o.year && u.month <= o.month ? " " + t.klass.navDisabled : ""), "data-nav=" + (n || -1) + " " + i.ariaAttr({
        //         //         role: "button",
        //         //         controls: r.$node[0].id + "_table"
        //         //     }) + ' title="' + (n ? t.labelMonthNext : t.labelMonthPrev) + '"')
        //         // },
        //         // y = function(e) {
        //         //     var h = t.showMonthsShort ? t.monthsShort : t.monthsFull;
        //         //     return "short_months" == e && (h = t.monthsShort), t.selectMonths && void 0 == e ? i.node("select", i.group({
        //         //         min: 0,
        //         //         max: 11,
        //         //         i: 1,
        //         //         node: "option",
        //         //         item: function(n) {
        //         //             return [h[n], 0, "value=" + n + (u.month == n ? " selected" : "") + (u.year == o.year && n < o.month || u.year == s.year && n > s.month ? " disabled" : "")]
        //         //         }
        //         //     }), t.klass.selectMonth + " browser-default", (n ? "" : "disabled") + " " + i.ariaAttr({
        //         //         controls: r.$node[0].id + "_table"
        //         //     }) + ' title="' + t.labelMonthSelect + '"') : "short_months" == e ? null != f ? i.node("div", h[f.month]) : i.node("div", h[u.month]) : i.node("div", h[u.month], t.klass.month)
        //         // },
        //         p = function(f) {
        //             var h = u.year,
        //                 a = !0 === t.selectYears ? 5 : ~~(t.selectYears / 2),
        //                 y, p;
        //             if (a) {
        //                 var l = o.year,
        //                     v = s.year,
        //                     e = h - a,
        //                     c = h + a;
        //                 if ((l > e && (c += l - e, e = l), v < c) && (y = e - l, p = c - v, e -= y > p ? p : y, c = v), t.selectYears && void 0 == f) return i.node("select", i.group({
        //                     min: e,
        //                     max: c,
        //                     i: 1,
        //                     node: "option",
        //                     item: function(n) {
        //                         return [n, 0, "value=" + n + (h == n ? " selected" : "")]
        //                     }
        //                 }), t.klass.selectYear + " browser-default", (n ? "" : "disabled") + " " + i.ariaAttr({
        //                     controls: r.$node[0].id + "_table"
        //                 }) + ' title="' + t.labelYearSelect + '"')
        //             }
        //             return "raw" == f ? i.node("div", h) : i.node("div", h, t.klass.year)
        //         };
        //     return createDayLabel = function() {
        //         return null != f ? i.node("div", f.date) : i.node("div", h.date)
        //     }, createWeekdayLabel = function() {
        //         var n;
        //         return n = null != f ? f.day : h.day, t.weekdaysFull[n]
        //     }, i.node("div", i.node("div", createWeekdayLabel(), "picker__weekday-display") + i.node("div", y("short_months"), t.klass.month_display) + i.node("div", createDayLabel(), t.klass.day_display) + i.node("div", p("raw"), t.klass.year_display), t.klass.date_display) + i.node("div", i.node("div", (t.selectYears, y() + p() + v() + v(1)), t.klass.header) + i.node("table", b + i.node("tbody", i.group({
        //         min: 0,
        //         max: 5,
        //         i: 1,
        //         node: "tr",
        //         // item: function(n) {
        //         //     var e = t.firstDay && 0 === r.create([u.year, u.month, 1]).day ? -7 : 0;
        //         //     return [i.group({
        //         //         min: 7 * n - u.day + e + 1,
        //         //         max: function() {
        //         //             return this.min + 7 - 1
        //         //         },
        //         //         i: 1,
        //         //         node: "td",
        //         //         item: function(n) {
        //         //             n = r.create([u.year, u.month, n + (t.firstDay ? 1 : 0)]);
        //         //             var e, c = f && f.pick == n.pick,
        //         //                 l = a && a.pick == n.pick,
        //         //                 v = w && r.disabled(n) || n.pick < o.pick || n.pick > s.pick,
        //         //                 y = i.trigger(r.formats.toString, r, [t.format, n]);
        //         //             return [i.node("div", n.date, (e = [t.klass.day], e.push(u.month == n.month ? t.klass.infocus : t.klass.outfocus), h.pick == n.pick && e.push(t.klass.now), c && e.push(t.klass.selected), l && e.push(t.klass.highlighted), v && e.push(t.klass.disabled), e.join(" ")), "data-pick=" + n.pick + " " + i.ariaAttr({
        //         //                 role: "gridcell",
        //         //                 label: y,
        //         //                 selected: !(!c || r.$node.val() !== y) || null,
        //         //                 activedescendant: !!l || null,
        //         //                 disabled: !!v || null
        //         //             })), "", i.ariaAttr({
        //         //                 role: "presentation"
        //         //             })]
        //         //         }
        //         //     })]
        //         // }
        //     })), t.klass.table, 'id="' + r.$node[0].id + '_table" ' + i.ariaAttr({
        //         role: "grid",
        //         controls: r.$node[0].id,
        //         readonly: !0
        //     })), t.klass.calendar_container) + i.node("div", i.node("button", t.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (n && !r.disabled(h) ? "" : " disabled") + " " + i.ariaAttr({
        //         controls: r.$node[0].id
        //     })) + i.node("button", t.clear, "btn-flat picker__clear", "type=button data-clear=1" + (n ? "" : " disabled") + " " + i.ariaAttr({
        //         controls: r.$node[0].id
        //     })) + i.node("button", t.close, "btn-flat picker__close", "type=button data-close=true " + (n ? "" : " disabled") + " " + i.ariaAttr({
        //         controls: r.$node[0].id
        //     })), t.klass.footer)
        // };
        // u.defaults = {
        //     labelMonthNext: "Next month",
        //     labelMonthPrev: "Previous month",
        //     labelMonthSelect: "Select a month",
        //     labelYearSelect: "Select a year",
        //     monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        //     monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        //     weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        //     weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        //     weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
        //     today: "Today",
        //     clear: "Clear",
        //     close: "Close",
        //     format: "d mmmm, yyyy",
        //     klass: {
        //         table: (r = n.klasses().picker + "__") + "table",
        //         header: r + "header",
        //         date_display: r + "date-display",
        //         day_display: r + "day-display",
        //         month_display: r + "month-display",
        //         year_display: r + "year-display",
        //         calendar_container: r + "calendar-container",
        //         navPrev: r + "nav--prev",
        //         navNext: r + "nav--next",
        //         navDisabled: r + "nav--disabled",
        //         month: r + "month",
        //         year: r + "year",
        //         selectMonth: r + "select--month",
        //         selectYear: r + "select--year",
        //         weekdays: r + "weekday",
        //         day: r + "day",
        //         disabled: r + "day--disabled",
        //         selected: r + "day--selected",
        //         highlighted: r + "day--highlighted",
        //         now: r + "day--today",
        //         infocus: r + "day--infocus",
        //         outfocus: r + "day--outfocus",
        //         footer: r + "footer",
        //         buttonClear: r + "button--clear",
        //         buttonToday: r + "button--today",
        //         buttonClose: r + "button--close"
        //     }
        // };
        n.extend("pickadate", u)
    }),
    function(n) {
        // function t() {
        //     var i, t, r, u = +n(this).attr("data-length"),
        //         f = +n(this).val().length,
        //         e = f <= u;
        //     n(this).parent().find('span[class="character-counter"]').html(f + "/" + u);
        //     i = e;
        //     t = n(this);
        //     r = t.hasClass("invalid");
        //     i && r ? t.removeClass("invalid") : i || r || (t.removeClass("valid"), t.addClass("invalid"))
        // }

        // function i() {
        //     n(this).parent().find('span[class="character-counter"]').html("")
        // }
        // n.fn.characterCounter = function() {
        //     return this.each(function() {
        //         var r = n(this);
        //         r.parent().find('span[class="character-counter"]').length || void 0 !== r.attr("data-length") && (r.on("input", t), r.on("focus", t), r.on("blur", i), function(t) {
        //             var i = t.parent().find('span[class="character-counter"]');
        //             i.length || (i = n("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), t.parent().append(i))
        //         }(r))
        //     })
        // };
        // n(document).ready(function() {
        //     n("input, textarea").characterCounter()
        // })
    }(jQuery),
    function(n) {
        var t = {
            // init: function(t) {
            //     t = n.extend({
            //         duration: 200,
            //         dist: -100,
            //         shift: 0,
            //         padding: 0,
            //         fullWidth: !1,
            //         indicators: !1,
            //         noWrap: !1,
            //         onCycleTo: null
            //     }, t);
            //     var i = Materialize.objectSelectorString(n(this));
            //     return this.each(function(r) {
            //         // function vt(n) {
            //         //     return n.targetTouches && n.targetTouches.length >= 1 ? n.targetTouches[0].clientX : n.clientX
            //         // }

            //         // function yt(n) {
            //         //     return n.targetTouches && n.targetTouches.length >= 1 ? n.targetTouches[0].clientY : n.clientY
            //         // }

            //         // function k(n) {
            //         //     return n >= h ? n % h : n < 0 ? k(h + n % h) : n
            //         // }

            //         // function g(i) {
            //         //     var o, d, a, y, l, r, w, ut, g, it, ft;
            //         //     for (u.hasClass("scrolling") || u.addClass("scrolling"), null != st && window.clearTimeout(st), st = window.setTimeout(function() {
            //         //             u.removeClass("scrolling")
            //         //         }, t.duration), ut = e, (f = "number" == typeof i ? i : f, e = Math.floor((f + s / 2) / s), l = -(y = (a = f - e * s) < 0 ? 1 : -1) * a * 2 / s, d = h >> 1, t.fullWidth ? w = "translateX(0)" : (w = "translateX(" + (u[0].clientWidth - p) / 2 + "px) ", w += "translateY(" + (u[0].clientHeight - rt) / 2 + "px)"), tt) && (g = e % h, it = nt.find(".indicator-item.active"), it.index() !== g && (it.removeClass("active"), nt.find(".indicator-item").eq(g).addClass("active"))), (!t.noWrap || e >= 0 && e < h) && (r = c[k(e)], n(r).hasClass("active") || (u.find(".carouselM-item").removeClass("active"), n(r).addClass("active")), r.style[b] = w + " translateX(" + -a / 2 + "px) translateX(" + y * t.shift * l * o + "px) translateZ(" + t.dist * l + "px)", r.style.zIndex = 0, tweenedOpacity = t.fullWidth ? 1 : 1 - .2 * l, r.style.opacity = tweenedOpacity, r.style.display = "block"), o = 1; o <= d; ++o) t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = o === d && a < 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * o + l * y), tweenedOpacity = 1 - .2 * (2 * o + l * y)), (!t.noWrap || e + o < h) && ((r = c[k(e + o)]).style[b] = w + " translateX(" + (t.shift + (s * o - a) / 2) + "px) translateZ(" + zTranslation + "px)", r.style.zIndex = -o, r.style.opacity = tweenedOpacity, r.style.display = "block"), t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = o === d && a > 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * o - l * y), tweenedOpacity = 1 - .2 * (2 * o - l * y)), (!t.noWrap || e - o >= 0) && ((r = c[k(e - o)]).style[b] = w + " translateX(" + (-t.shift + (-s * o - a) / 2) + "px) translateZ(" + zTranslation + "px)", r.style.zIndex = -o, r.style.opacity = tweenedOpacity, r.style.display = "block");
            //         //     ((!t.noWrap || e >= 0 && e < h) && ((r = c[k(e)]).style[b] = w + " translateX(" + -a / 2 + "px) translateX(" + y * t.shift * l + "px) translateZ(" + t.dist * l + "px)", r.style.zIndex = 0, tweenedOpacity = t.fullWidth ? 1 : 1 - .2 * l, r.style.opacity = tweenedOpacity, r.style.display = "block"), ut !== e && "function" == typeof t.onCycleTo) && (ft = u.find(".carouselM-item").eq(k(e)), t.onCycleTo.call(this, ft, v))
            //         // }

            //         // function bt() {
            //         //     var n, t, i;
            //         //     t = (n = Date.now()) - a;
            //         //     a = n;
            //         //     i = f - ft;
            //         //     ft = f;
            //         //     w = .8 * (1e3 * i / (1 + t)) + .2 * w
            //         // }

            //         // function it() {
            //         //     var i, n;
            //         //     l && (i = Date.now() - a, (n = l * Math.exp(-i / t.duration)) > 2 || n < -2 ? (g(o - n), requestAnimationFrame(it)) : g(o))
            //         // }

            //         // function kt(i) {
            //         //     if (v) return i.preventDefault(), i.stopPropagation(), !1;
            //         //     if (!t.fullWidth) {
            //         //         var r = n(i.target).closest(".carouselM-item").index();
            //         //         0 != e % h - r && (i.preventDefault(), i.stopPropagation());
            //         //         ht(r)
            //         //     }
            //         // }

            //         // function ht(n) {
            //         //     var i = e % h - n;
            //         //     t.noWrap || (i < 0 ? Math.abs(i + h) < Math.abs(i) && (i += h) : i > 0 && Math.abs(i - h) < i && (i -= h));
            //         //     i < 0 ? u.trigger("carouselNext", [Math.abs(i)]) : i > 0 && u.trigger("carouselPrev", [i])
            //         // }

            //         // function pt(n) {
            //         //     n.preventDefault();
            //         //     d = !0;
            //         //     v = !1;
            //         //     ot = !1;
            //         //     ut = vt(n);
            //         //     lt = yt(n);
            //         //     w = l = 0;
            //         //     ft = f;
            //         //     a = Date.now();
            //         //     clearInterval(et);
            //         //     et = setInterval(bt, 100)
            //         // }

            //         // function wt(n) {
            //         //     var i, t;
            //         //     if (d)
            //         //         if (i = vt(n), y = yt(n), t = ut - i, Math.abs(lt - y) < 30 && !ot)(t > 2 || t < -2) && (v = !0, ut = i, g(f + t));
            //         //         else {
            //         //             if (v) return n.preventDefault(), n.stopPropagation(), !1;
            //         //             ot = !0
            //         //         }
            //         //     if (v) return n.preventDefault(), n.stopPropagation(), !1
            //         // }

            //         // function ct(n) {
            //         //     if (d) return d = !1, clearInterval(et), o = f, (w > 10 || w < -10) && (o = f + (l = .9 * w)), o = Math.round(o / s) * s, t.noWrap && (o >= s * (h - 1) ? o = s * (h - 1) : o < 0 && (o = 0)), l = o - f, a = Date.now(), requestAnimationFrame(it), v && (n.preventDefault(), n.stopPropagation()), !1
            //         // }
            //         var c, p, rt, f, e, d, s, h, ut, lt, l, o, w, b, ft, a, et, v, ot, at = i + r,
            //             nt = n('<ul class="indicators"><\/ul>'),
            //             st = null,
            //             u = n(this),
            //             tt = u.attr("data-indicators") || t.indicators;
            //         if (t.fullWidth && (t.dist = 0, function() {
            //                 var t = u.find(".carouselM-item img").first(),
            //                     i;
            //                 t.length ? t.prop("complete") ? u.css("height", t.height()) : t.on("load", function() {
            //                     u.css("height", n(this).height())
            //                 }) : (i = u.find(".carouselM-item").first().height(), u.css("height", i))
            //             }(), tt && u.find(".carouselM-fixed-item").addClass("with-indicators")), u.hasClass("initialized")) return n(window).trigger("resize"), n(this).trigger("carouselNext", [1e-6]), !0;
            //         u.addClass("initialized");
            //         d = !1;
            //         f = o = 0;
            //         c = [];
            //         p = u.find(".carouselM-item").first().innerWidth();
            //         rt = u.find(".carouselM-item").first().innerHeight();
            //         s = 2 * p + t.padding;
            //         u.find(".carouselM-item").each(function(t) {
            //             if (c.push(n(this)[0]), tt) {
            //                 var i = n('<li class="indicator-item"><\/li>');
            //                 0 === t && i.addClass("active");
            //                 i.click(function(t) {
            //                     t.stopPropagation();
            //                     ht(n(this).index())
            //                 });
            //                 nt.append(i)
            //             }
            //         });
            //         tt && u.append(nt);
            //         h = c.length;
            //         b = "transform";
            //         ["webkit", "Moz", "O", "ms"].every(function(n) {
            //             var t = n + "Transform";
            //             return void 0 === document.body.style[t] || (b = t, !1)
            //         });
            //         // n(window).off("resize.carouselM-" + at).on("resize.carouselM-" + at, function() {
            //         //     t.fullWidth ? (p = u.find(".carouselM-item").first().innerWidth(), rt = u.find(".carouselM-item").first().innerHeight(), s = 2 * p + t.padding, o = f = 2 * e * p) : g()
            //         // });
            //         void 0 !== window.ontouchstart && (u[0].addEventListener("touchstart", pt), u[0].addEventListener("touchmove", wt), u[0].addEventListener("touchend", ct));
            //         u[0].addEventListener("mousedown", pt);
            //         u[0].addEventListener("mousemove", wt);
            //         u[0].addEventListener("mouseup", ct);
            //         u[0].addEventListener("mouseleave", ct);
            //         u[0].addEventListener("click", kt);
            //         g(f);
            //         // n(this).on("carouselNext", function(n, t) {
            //         //     void 0 === t && (t = 1);
            //         //     o = s * Math.round(f / s) + s * t;
            //         //     f !== o && (l = o - f, a = Date.now(), requestAnimationFrame(it))
            //         // });
            //         // n(this).on("carouselPrev", function(n, t) {
            //         //     void 0 === t && (t = 1);
            //         //     o = s * Math.round(f / s) - s * t;
            //         //     f !== o && (l = o - f, a = Date.now(), requestAnimationFrame(it))
            //         // });
            //         // n(this).on("carouselSet", function(n, t) {
            //         //     void 0 === t && (t = 0);
            //         //     ht(t)
            //         // })
            //     })
            // },
            // next: function(t) {
            //     n(this).trigger("carouselNext", [t])
            // },
            // prev: function(t) {
            //     n(this).trigger("carouselPrev", [t])
            // },
            // set: function(t) {
            //     n(this).trigger("carouselSet", [t])
            // }
        };
        // n.fn.carouselM = function(i) {
        //     return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void n.error("Method " + i + " does not exist on jQuery.carouselM") : t.init.apply(this, arguments)
        // }
    }(jQuery),
    function(n) {
        var t = {
            // init: function(t) {
            //     return this.each(function() {
            //         var r = n("#" + n(this).attr("data-activates")),
            //             f = (n("body"), n(this)),
            //             i = f.parent(".tap-target-wrapper"),
            //             e = i.find(".tap-target-wave"),
            //             u = i.find(".tap-target-origin"),
            //             o = f.find(".tap-target-content"),
            //             s, h;
            //         i.length || (i = f.wrap(n('<div class="tap-target-wrapper"><\/div>')).parent());
            //         o.length || (o = n('<div class="tap-target-content"><\/div>'), f.append(o));
            //         e.length || (e = n('<div class="tap-target-wave"><\/div>'), u.length || ((u = r.clone(!0, !0)).addClass("tap-target-origin"), u.removeAttr("id"), u.removeAttr("style"), e.append(u)), i.append(e));
            //         // s = function() {
            //         //     i.is(".open") && (i.removeClass("open"), u.off("click.tapTarget"), n(document).off("click.tapTarget"), n(window).off("resize.tapTarget"))
            //         // };
            //         // h = function() {
            //         //     var s = "fixed" === r.css("position"),
            //         //         y, a;
            //         //     if (!s)
            //         //         for (y = r.parents(), a = 0; a < y.length && !(s = "fixed" == n(y[a]).css("position")); a++);
            //         //     var h = r.outerWidth(),
            //         //         et = r.outerHeight(),
            //         //         p = s ? r.offset().top - n(document).scrollTop() : r.offset().top,
            //         //         c = s ? r.offset().left - n(document).scrollLeft() : r.offset().left,
            //         //         v = n(window).width(),
            //         //         b = n(window).height(),
            //         //         k = v / 2,
            //         //         d = b / 2,
            //         //         g = c <= k,
            //         //         ot = c > k,
            //         //         nt = p <= d,
            //         //         tt = p > d,
            //         //         it = c >= .25 * v && c <= .75 * v,
            //         //         t = f.outerWidth(),
            //         //         l = f.outerHeight(),
            //         //         rt = p + et / 2 - l / 2,
            //         //         ut = c + h / 2 - t / 2,
            //         //         st = s ? "fixed" : "absolute",
            //         //         ht = it ? t : t / 2 + h,
            //         //         ct = l / 2,
            //         //         lt = nt ? l / 2 : 0,
            //         //         at = g && !it ? t / 2 - h : 0,
            //         //         vt = h,
            //         //         yt = tt ? "bottom" : "top",
            //         //         w = 2 * h,
            //         //         ft = w,
            //         //         pt = l / 2 - ft / 2,
            //         //         wt = t / 2 - w / 2,
            //         //         u = {};
            //         //     u.top = nt ? rt : "";
            //         //     u.right = ot ? v - ut - t : "";
            //         //     u.bottom = tt ? b - rt - l : "";
            //         //     u.left = g ? ut : "";
            //         //     u.position = st;
            //         //     i.css(u);
            //         //     o.css({
            //         //         width: ht,
            //         //         height: ct,
            //         //         top: lt,
            //         //         right: 0,
            //         //         bottom: 0,
            //         //         left: at,
            //         //         padding: vt,
            //         //         verticalAlign: yt
            //         //     });
            //         //     e.css({
            //         //         top: pt,
            //         //         left: wt,
            //         //         width: w,
            //         //         height: ft
            //         //     })
            //         // };
            //         // "open" == t && (h(), i.is(".open") || (i.addClass("open"), setTimeout(function() {
            //         //     u.off("click.tapTarget").on("click.tapTarget", function() {
            //         //         s();
            //         //         u.off("click.tapTarget")
            //         //     });
            //         //     n(document).off("click.tapTarget").on("click.tapTarget", function() {
            //         //         s();
            //         //         n(document).off("click.tapTarget")
            //         //     });
            //         //     var t = Materialize.throttle(function() {
            //         //         h()
            //         //     }, 200);
            //         //     n(window).off("resize.tapTarget").on("resize.tapTarget", t)
            //         // }, 0)));
            //         "close" == t && s()
            //     })
            // },
            open: function() {},
            close: function() {}
        };
        // n.fn.tapTarget = function(i) {
        //     if (t[i] || "object" == typeof i) return t.init.apply(this, arguments);
        //     n.error("Method " + i + " does not exist on jQuery.tap-target")
        // }
    }(jQuery);
! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n : n(jQuery)
}(function(n) {
    // function u(r) {
    //     var u = r || window.event,
    //         w = c.call(arguments, 1),
    //         l = 0,
    //         s = 0,
    //         e = 0,
    //         a = 0,
    //         b = 0,
    //         k = 0,
    //         v, y, p;
    //     if (r = n.event.fix(u), r.type = "mousewheel", "detail" in u && (e = -1 * u.detail), "wheelDelta" in u && (e = u.wheelDelta), "wheelDeltaY" in u && (e = u.wheelDeltaY), "wheelDeltaX" in u && (s = -1 * u.wheelDeltaX), "axis" in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e, e = 0), l = 0 === e ? s : e, "deltaY" in u && (e = -1 * u.deltaY, l = e), "deltaX" in u && (s = u.deltaX, 0 === e && (l = -1 * s)), 0 !== e || 0 !== s) return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, s *= y), (a = Math.max(Math.abs(e), Math.abs(s)), (!t || t > a) && (t = a, o(u, a) && (t /= 40)), o(u, a) && (l /= 40, s /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), s = Math[s >= 1 ? "floor" : "ceil"](s / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = s, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, s, e), f && clearTimeout(f), f = setTimeout(h, 200), (n.event.dispatch || n.event.handle).apply(this, w)
    // }

    // function h() {
    //     t = null
    // }

    // function o(n, t) {
    //     return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
    // }
    var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        c = Array.prototype.slice,
        e, i;
    if (n.event.fixHooks)
        for (e = s.length; e;) n.event.fixHooks[s[--e]] = n.event.mouseHooks;
    i = n.event.special.mousewheel = {
        version: "3.1.12",
        // setup: function() {
        //     if (this.addEventListener)
        //         for (var t = r.length; t;) this.addEventListener(r[--t], u, !1);
        //     else this.onmousewheel = u;
        //     n.data(this, "mousewheel-line-height", i.getLineHeight(this));
        //     n.data(this, "mousewheel-page-height", i.getPageHeight(this))
        // },
        // teardown: function() {
        //     if (this.removeEventListener)
        //         for (var t = r.length; t;) this.removeEventListener(r[--t], u, !1);
        //     else this.onmousewheel = null;
        //     n.removeData(this, "mousewheel-line-height");
        //     n.removeData(this, "mousewheel-page-height")
        // },
        // getLineHeight: function(t) {
        //     var r = n(t),
        //         i = r["offsetParent" in n.fn ? "offsetParent" : "parent"]();
        //     return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
        // },
        // getPageHeight: function(t) {
        //     return n(t).height()
        // },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    // n.fn.extend({
    //     mousewheel: function(n) {
    //         return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
    //     },
    //     unmousewheel: function(n) {
    //         return this.unbind("mousewheel", n)
    //     }
    // })
});
// ! function(n) {
//     "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n : n(jQuery)
// }(function(n) {
//     // function u(r) {
//     //     var u = r || window.event,
//     //         w = c.call(arguments, 1),
//     //         l = 0,
//     //         s = 0,
//     //         e = 0,
//     //         a = 0,
//     //         b = 0,
//     //         k = 0,
//     //         v, y, p;
//     //     if (r = n.event.fix(u), r.type = "mousewheel", "detail" in u && (e = -1 * u.detail), "wheelDelta" in u && (e = u.wheelDelta), "wheelDeltaY" in u && (e = u.wheelDeltaY), "wheelDeltaX" in u && (s = -1 * u.wheelDeltaX), "axis" in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e, e = 0), l = 0 === e ? s : e, "deltaY" in u && (e = -1 * u.deltaY, l = e), "deltaX" in u && (s = u.deltaX, 0 === e && (l = -1 * s)), 0 !== e || 0 !== s) return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, s *= y), (a = Math.max(Math.abs(e), Math.abs(s)), (!t || t > a) && (t = a, o(u, a) && (t /= 40)), o(u, a) && (l /= 40, s /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), s = Math[s >= 1 ? "floor" : "ceil"](s / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = s, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, s, e), f && clearTimeout(f), f = setTimeout(h, 200), (n.event.dispatch || n.event.handle).apply(this, w)
//     // }

//     // function h() {
//     //     t = null
//     // }

//     // function o(n, t) {
//     //     return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
//     // }
//     var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
//         r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
//         c = Array.prototype.slice,
//         e, i;
//     if (n.event.fixHooks)
//         for (e = s.length; e;) n.event.fixHooks[s[--e]] = n.event.mouseHooks;
//     i = n.event.special.mousewheel = {
//         version: "3.1.12",
//         // setup: function() {
//         //     if (this.addEventListener)
//         //         for (var t = r.length; t;) this.addEventListener(r[--t], u, !1);
//         //     else this.onmousewheel = u;
//         //     n.data(this, "mousewheel-line-height", i.getLineHeight(this));
//         //     n.data(this, "mousewheel-page-height", i.getPageHeight(this))
//         // },
//         // teardown: function() {
//         //     if (this.removeEventListener)
//         //         for (var t = r.length; t;) this.removeEventListener(r[--t], u, !1);
//         //     else this.onmousewheel = null;
//         //     n.removeData(this, "mousewheel-line-height");
//         //     n.removeData(this, "mousewheel-page-height")
//         // },
//         // getLineHeight: function(t) {
//         //     var r = n(t),
//         //         i = r["offsetParent" in n.fn ? "offsetParent" : "parent"]();
//         //     return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
//         // },
//         // getPageHeight: function(t) {
//         //     return n(t).height()
//         // },
//         // settings: {
//         //     adjustOldDeltas: !0,
//         //     normalizeOffset: !0
//         // }
//     };
//     // n.fn.extend({
//     //     mousewheel: function(n) {
//     //         return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
//     //     },
//     //     unmousewheel: function(n) {
//     //         return this.unbind("mousewheel", n)
//     //     }
//     // })
// });
// ! function(n) {
//     "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n : n(jQuery, window, document)
// }
// (function(n) {
//     ! function(t) {
//         var i = "function" == typeof define && define.amd,
//             r = "undefined" != typeof module && module.exports,
//             u = "https:" == document.location.protocol ? "https:" : "http:";
//         i || (r ? require("jquery-mousewheel")(n) : n.event.special.mousewheel || n("head").append(decodeURI("%3Cscript src=" + u + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
//         t()
//     }
//     // (function() {
//     //     var h, c = "mCustomScrollbar",
//     //         t = "mCS",
//     //         it = ".mCustomScrollbar",
//     //         ot = {
//     //             setTop: 0,
//     //             setLeft: 0,
//     //             axis: "y",
//     //             scrollbarPosition: "inside",
//     //             scrollInertia: 950,
//     //             autoDraggerLength: !0,
//     //             alwaysShowScrollbar: 0,
//     //             snapOffset: 0,
//     //             mouseWheel: {
//     //                 enable: !0,
//     //                 scrollAmount: "auto",
//     //                 axis: "y",
//     //                 deltaFactor: "auto",
//     //                 disableOver: ["select", "option", "keygen", "datalist", "textarea"]
//     //             },
//     //             scrollButtons: {
//     //                 scrollType: "stepless",
//     //                 scrollAmount: "auto"
//     //             },
//     //             keyboard: {
//     //                 enable: !0,
//     //                 scrollType: "stepless",
//     //                 scrollAmount: "auto"
//     //             },
//     //             contentTouchScroll: 25,
//     //             documentTouchScroll: !0,
//     //             advanced: {
//     //                 autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
//     //                 updateOnContentResize: !0,
//     //                 updateOnImageLoad: "auto",
//     //                 autoUpdateTimeout: 60
//     //             },
//     //             theme: "light",
//     //             callbacks: {
//     //                 onTotalScrollOffset: 0,
//     //                 onTotalScrollBackOffset: 0,
//     //                 alwaysTriggerOffsets: !0
//     //             }
//     //         },
//     //         pt = 0,
//     //         b = {},
//     //         p = window.attachEvent && !window.addEventListener ? 1 : 0,
//     //         e = !1,
//     //         i = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
//     //         s = {
//     //             // init: function(r) {
//     //             //     var r = n.extend(!0, {}, ot, r),
//     //             //         e = v.call(this),
//     //             //         u, f;
//     //             //     if (r.live) {
//     //             //         if (u = r.liveSelector || this.selector || it, f = n(u), "off" === r.live) return void k(u);
//     //             //         b[u] = setTimeout(function() {
//     //             //             f.mCustomScrollbar(r);
//     //             //             "once" === r.live && f.length && k(u)
//     //             //         }, 500)
//     //             //     } else k(u);
//     //             //     return r.setWidth = r.set_width ? r.set_width : r.setWidth, r.setHeight = r.set_height ? r.set_height : r.setHeight, r.axis = r.horizontalScroll ? "x" : wt(r.axis), r.scrollInertia = r.scrollInertia > 0 && r.scrollInertia < 17 ? 17 : r.scrollInertia, "object" != typeof r.mouseWheel && 1 == r.mouseWheel && (r.mouseWheel = {
//     //             //         enable: !0,
//     //             //         scrollAmount: "auto",
//     //             //         axis: "y",
//     //             //         preventDefault: !1,
//     //             //         deltaFactor: "auto",
//     //             //         normalizeDelta: !1,
//     //             //         invert: !1
//     //             //     }), r.mouseWheel.scrollAmount = r.mouseWheelPixels ? r.mouseWheelPixels : r.mouseWheel.scrollAmount, r.mouseWheel.normalizeDelta = r.advanced.normalizeMouseWheelDelta ? r.advanced.normalizeMouseWheelDelta : r.mouseWheel.normalizeDelta, r.scrollButtons.scrollType = bt(r.scrollButtons.scrollType), st(r), n(e).each(function() {
//     //             //         var u = n(this);
//     //             //         if (!u.data(t)) {
//     //             //             u.data(t, {
//     //             //                 idx: ++pt,
//     //             //                 opt: r,
//     //             //                 scrollRatio: {
//     //             //                     y: null,
//     //             //                     x: null
//     //             //                 },
//     //             //                 overflowed: null,
//     //             //                 contentReset: {
//     //             //                     y: null,
//     //             //                     x: null
//     //             //                 },
//     //             //                 bindEvents: !1,
//     //             //                 tweenRunning: !1,
//     //             //                 sequential: {},
//     //             //                 langDir: u.css("direction"),
//     //             //                 cbOffsets: null,
//     //             //                 trigger: null,
//     //             //                 poll: {
//     //             //                     size: {
//     //             //                         o: 0,
//     //             //                         n: 0
//     //             //                     },
//     //             //                     img: {
//     //             //                         o: 0,
//     //             //                         n: 0
//     //             //                     },
//     //             //                     change: {
//     //             //                         o: 0,
//     //             //                         n: 0
//     //             //                     }
//     //             //                 }
//     //             //             });
//     //             //             var e = u.data(t),
//     //             //                 f = e.opt,
//     //             //                 o = u.data("mcs-axis"),
//     //             //                 h = u.data("mcs-scrollbar-position"),
//     //             //                 c = u.data("mcs-theme");
//     //             //             o && (f.axis = o);
//     //             //             h && (f.scrollbarPosition = h);
//     //             //             c && (f.theme = c, st(f));
//     //             //             kt.call(this);
//     //             //             e && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this);
//     //             //             n("#mCSB_" + e.idx + "_container img:not(." + i[2] + ")").addClass(i[2]);
//     //             //             s.update.call(null, u)
//     //             //         }
//     //             //     })
//     //             // },
//     //             // update: function(r, f) {
//     //             //     var e = r || v.call(this);
//     //             //     return n(e).each(function() {
//     //             //         var s = n(this),
//     //             //             c;
//     //             //         if (s.data(t)) {
//     //             //             var e = s.data(t),
//     //             //                 r = e.opt,
//     //             //                 h = n("#mCSB_" + e.idx + "_container"),
//     //             //                 a = n("#mCSB_" + e.idx),
//     //             //                 l = [n("#mCSB_" + e.idx + "_dragger_vertical"), n("#mCSB_" + e.idx + "_dragger_horizontal")];
//     //             //             if (!h.length) return;
//     //             //             e.tweenRunning && o(s);
//     //             //             f && e && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this);
//     //             //             s.hasClass(i[3]) && s.removeClass(i[3]);
//     //             //             s.hasClass(i[4]) && s.removeClass(i[4]);
//     //             //             a.css("max-height", "none");
//     //             //             a.height() !== s.height() && a.css("max-height", s.height());
//     //             //             dt.call(this);
//     //             //             "y" === r.axis || r.advanced.autoExpandHorizontalScroll || h.css("width", ht(h));
//     //             //             e.overflowed = ii.call(this);
//     //             //             ct.call(this);
//     //             //             r.autoDraggerLength && ni.call(this);
//     //             //             ti.call(this);
//     //             //             ri.call(this);
//     //             //             c = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)];
//     //             //             "x" !== r.axis && (e.overflowed[0] ? l[0].height() > l[0].parent().height() ? y.call(this) : (u(s, c[0].toString(), {
//     //             //                 dir: "y",
//     //             //                 dur: 0,
//     //             //                 overwrite: "none"
//     //             //             }), e.contentReset.y = null) : (y.call(this), "y" === r.axis ? g.call(this) : "yx" === r.axis && e.overflowed[1] && u(s, c[1].toString(), {
//     //             //                 dir: "x",
//     //             //                 dur: 0,
//     //             //                 overwrite: "none"
//     //             //             })));
//     //             //             "y" !== r.axis && (e.overflowed[1] ? l[1].width() > l[1].parent().width() ? y.call(this) : (u(s, c[1].toString(), {
//     //             //                 dir: "x",
//     //             //                 dur: 0,
//     //             //                 overwrite: "none"
//     //             //             }), e.contentReset.x = null) : (y.call(this), "x" === r.axis ? g.call(this) : "yx" === r.axis && e.overflowed[0] && u(s, c[0].toString(), {
//     //             //                 dir: "y",
//     //             //                 dur: 0,
//     //             //                 overwrite: "none"
//     //             //             })));
//     //             //             f && e && (2 === f && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === f && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this));
//     //             //             et.call(this)
//     //             //         }
//     //             //     })
//     //             // },
//     //             // scrollTo: function(i, r) {
//     //             //     if ("undefined" != typeof i && null != i) {
//     //             //         var f = v.call(this);
//     //             //         return n(f).each(function() {
//     //             //             var s = n(this);
//     //             //             if (s.data(t)) {
//     //             //                 var o = s.data(t),
//     //             //                     h = o.opt,
//     //             //                     c = {
//     //             //                         trigger: "external",
//     //             //                         scrollInertia: h.scrollInertia,
//     //             //                         scrollEasing: "mcsEaseInOut",
//     //             //                         moveDragger: !1,
//     //             //                         timeout: 60,
//     //             //                         callbacks: !0,
//     //             //                         onStart: !0,
//     //             //                         onUpdate: !0,
//     //             //                         onComplete: !0
//     //             //                     },
//     //             //                     f = n.extend(!0, {}, c, r),
//     //             //                     e = ft.call(this, i),
//     //             //                     l = f.scrollInertia > 0 && f.scrollInertia < 17 ? 17 : f.scrollInertia;
//     //             //                 e[0] = at.call(this, e[0], "y");
//     //             //                 e[1] = at.call(this, e[1], "x");
//     //             //                 f.moveDragger && (e[0] *= o.scrollRatio.y, e[1] *= o.scrollRatio.x);
//     //             //                 f.dur = wi() ? 0 : l;
//     //             //                 setTimeout(function() {
//     //             //                     null !== e[0] && "undefined" != typeof e[0] && "x" !== h.axis && o.overflowed[0] && (f.dir = "y", f.overwrite = "all", u(s, e[0].toString(), f));
//     //             //                     null !== e[1] && "undefined" != typeof e[1] && "y" !== h.axis && o.overflowed[1] && (f.dir = "x", f.overwrite = "none", u(s, e[1].toString(), f))
//     //             //                 }, f.timeout)
//     //             //             }
//     //             //         })
//     //             //     }
//     //             // },
//     //             // stop: function() {
//     //             //     var i = v.call(this);
//     //             //     return n(i).each(function() {
//     //             //         var i = n(this);
//     //             //         i.data(t) && o(i)
//     //             //     })
//     //             // },
//     //             // disable: function(r) {
//     //             //     var u = v.call(this);
//     //             //     return n(u).each(function() {
//     //             //         var u = n(this);
//     //             //         u.data(t) && (u.data(t), et.call(this, "remove"), g.call(this), r && y.call(this), ct.call(this, !0), u.addClass(i[3]))
//     //             //     })
//     //             // },
//     //             // destroy: function() {
//     //             //     var r = v.call(this);
//     //             //     return n(r).each(function() {
//     //             //         var f = n(this);
//     //             //         if (f.data(t)) {
//     //             //             var u = f.data(t),
//     //             //                 e = u.opt,
//     //             //                 s = n("#mCSB_" + u.idx),
//     //             //                 o = n("#mCSB_" + u.idx + "_container"),
//     //             //                 h = n(".mCSB_" + u.idx + "_scrollbar");
//     //             //             e.live && k(e.liveSelector || n(r).selector);
//     //             //             et.call(this, "remove");
//     //             //             g.call(this);
//     //             //             y.call(this);
//     //             //             f.removeData(t);
//     //             //             a(this, "mcs");
//     //             //             h.remove();
//     //             //             o.find("img." + i[2]).removeClass(i[2]);
//     //             //             s.replaceWith(o.contents());
//     //             //             f.removeClass(c + " _" + t + "_" + u.idx + " " + i[6] + " " + i[7] + " " + i[5] + " " + i[3]).addClass(i[4])
//     //             //         }
//     //             //     })
//     //             // }
//     //         },
//     //         // v = function() {
//     //         //     return "object" != typeof n(this) || n(this).length < 1 ? it : this
//     //         // },
//     //         // st = function(t) {
//     //         //     t.autoDraggerLength = n.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1 ? !1 : t.autoDraggerLength;
//     //         //     t.autoExpandScrollbar = n.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1 ? !1 : t.autoExpandScrollbar;
//     //         //     t.scrollButtons.enable = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? !1 : t.scrollButtons.enable;
//     //         //     t.autoHideScrollbar = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? !0 : t.autoHideScrollbar;
//     //         //     t.scrollbarPosition = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : t.scrollbarPosition
//     //         // },
//     //         // k = function(n) {
//     //         //     b[n] && (clearTimeout(b[n]), a(b, n))
//     //         // },
//     //         // wt = function(n) {
//     //         //     return "yx" === n || "xy" === n || "auto" === n ? "yx" : "x" === n || "horizontal" === n ? "x" : "y"
//     //         // },
//     //         // bt = function(n) {
//     //         //     return "stepped" === n || "pixels" === n || "step" === n || "click" === n ? "stepped" : "stepless"
//     //         // },
//     //         // kt = function() {
//     //         //     var f = n(this),
//     //         //         u = f.data(t),
//     //         //         r = u.opt,
//     //         //         l = r.autoExpandScrollbar ? " " + i[1] + "_expand" : "",
//     //         //         o = ["<div id='mCSB_" + u.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + l + "'><div class='" + i[12] + "'><div id='mCSB_" + u.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>", "<div id='mCSB_" + u.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + l + "'><div class='" + i[12] + "'><div id='mCSB_" + u.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>"],
//     //         //         v = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
//     //         //         a = "yx" === r.axis ? o[0] + o[1] : "x" === r.axis ? o[1] : o[0],
//     //         //         y = "yx" === r.axis ? "<div id='mCSB_" + u.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
//     //         //         p = r.autoHideScrollbar ? " " + i[6] : "",
//     //         //         w = "x" !== r.axis && "rtl" === u.langDir ? " " + i[7] : "",
//     //         //         h, s, e;
//     //         //     r.setWidth && f.css("width", r.setWidth);
//     //         //     r.setHeight && f.css("height", r.setHeight);
//     //         //     r.setLeft = "y" !== r.axis && "rtl" === u.langDir ? "989999px" : r.setLeft;
//     //         //     f.addClass(c + " _" + t + "_" + u.idx + p + w).wrapInner("<div id='mCSB_" + u.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + v + "'><div id='mCSB_" + u.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + u.langDir + "' /><\/div>");
//     //         //     h = n("#mCSB_" + u.idx);
//     //         //     s = n("#mCSB_" + u.idx + "_container");
//     //         //     "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", ht(s));
//     //         //     "outside" === r.scrollbarPosition ? ("static" === f.css("position") && f.css("position", "relative"), f.css("overflow", "visible"), h.addClass("mCSB_outside").after(a)) : (h.addClass("mCSB_inside").append(a), s.wrap(y));
//     //         //     gt.call(this);
//     //         //     e = [n("#mCSB_" + u.idx + "_dragger_vertical"), n("#mCSB_" + u.idx + "_dragger_horizontal")];
//     //         //     e[0].css("min-height", e[0].height());
//     //         //     e[1].css("min-width", e[1].width())
//     //         // },
//     //         // ht = function(t) {
//     //         //     var i = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
//     //         //             return n(this).outerWidth(!0)
//     //         //         }).get())],
//     //         //         r = t.parent().width();
//     //         //     return i[0] > r ? i[0] : i[1] > r ? i[1] : "100%"
//     //         // },
//     //         // dt = function() {
//     //         //     var e = n(this),
//     //         //         f = e.data(t),
//     //         //         r = f.opt,
//     //         //         i = n("#mCSB_" + f.idx + "_container"),
//     //         //         u;
//     //         //     r.advanced.autoExpandHorizontalScroll && "y" !== r.axis && (i.css({
//     //         //         width: "auto",
//     //         //         "min-width": 0,
//     //         //         "overflow-x": "scroll"
//     //         //     }), u = Math.ceil(i[0].scrollWidth), 3 === r.advanced.autoExpandHorizontalScroll || 2 !== r.advanced.autoExpandHorizontalScroll && u > i.parent().width() ? i.css({
//     //         //         width: u,
//     //         //         "min-width": "100%",
//     //         //         "overflow-x": "inherit"
//     //         //     }) : i.css({
//     //         //         "overflow-x": "inherit",
//     //         //         position: "absolute"
//     //         //     }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
//     //         //         width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
//     //         //         "min-width": "100%",
//     //         //         position: "relative"
//     //         //     }).unwrap())
//     //         // },
//     //         // gt = function() {
//     //         //     var s = n(this),
//     //         //         o = s.data(t),
//     //         //         u = o.opt,
//     //         //         h = n(".mCSB_" + o.idx + "_scrollbar:first"),
//     //         //         f = tt(u.scrollButtons.tabindex) ? "tabindex='" + u.scrollButtons.tabindex + "'" : "",
//     //         //         r = ["<a href='#' class='" + i[13] + "' " + f + " />", "<a href='#' class='" + i[14] + "' " + f + " />", "<a href='#' class='" + i[15] + "' " + f + " />", "<a href='#' class='" + i[16] + "' " + f + " />"],
//     //         //         e = ["x" === u.axis ? r[2] : r[0], "x" === u.axis ? r[3] : r[1], r[2], r[3]];
//     //         //     u.scrollButtons.enable && h.prepend(e[0]).append(e[1]).next(".mCSB_scrollTools").prepend(e[2]).append(e[3])
//     //         // },
//     //         // ni = function() {
//     //         //     var s = n(this),
//     //         //         u = s.data(t),
//     //         //         f = n("#mCSB_" + u.idx),
//     //         //         e = n("#mCSB_" + u.idx + "_container"),
//     //         //         r = [n("#mCSB_" + u.idx + "_dragger_vertical"), n("#mCSB_" + u.idx + "_dragger_horizontal")],
//     //         //         o = [f.height() / e.outerHeight(!1), f.width() / e.outerWidth(!1)],
//     //         //         i = [parseInt(r[0].css("min-height")), Math.round(o[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(o[1] * r[1].parent().width())],
//     //         //         h = p && i[1] < i[0] ? i[0] : i[1],
//     //         //         c = p && i[3] < i[2] ? i[2] : i[3];
//     //         //     r[0].css({
//     //         //         height: h,
//     //         //         "max-height": r[0].parent().height() - 10
//     //         //     }).find(".mCSB_dragger_bar").css({
//     //         //         "line-height": i[0] + "px"
//     //         //     });
//     //         //     r[1].css({
//     //         //         width: c,
//     //         //         "max-width": r[1].parent().width() - 10
//     //         //     })
//     //         // },
//     //         // ti = function() {
//     //         //     var s = n(this),
//     //         //         i = s.data(t),
//     //         //         u = n("#mCSB_" + i.idx),
//     //         //         f = n("#mCSB_" + i.idx + "_container"),
//     //         //         r = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")],
//     //         //         e = [f.outerHeight(!1) - u.height(), f.outerWidth(!1) - u.width()],
//     //         //         o = [e[0] / (r[0].parent().height() - r[0].height()), e[1] / (r[1].parent().width() - r[1].width())];
//     //         //     i.scrollRatio = {
//     //         //         y: o[0],
//     //         //         x: o[1]
//     //         //     }
//     //         // },
//     //         // d = function(n, t, r) {
//     //         //     var f = r ? i[0] + "_expanded" : "",
//     //         //         u = n.closest(".mCSB_scrollTools");
//     //         //     "active" === t ? (n.toggleClass(i[0] + " " + f), u.toggleClass(i[1]), n[0]._draggable = n[0]._draggable ? 0 : 1) : n[0]._draggable || ("hide" === t ? (n.removeClass(i[0]), u.removeClass(i[1])) : (n.addClass(i[0]), u.addClass(i[1])))
//     //         // },
//     //         // ii = function() {
//     //         //     var h = n(this),
//     //         //         r = h.data(t),
//     //         //         e = n("#mCSB_" + r.idx),
//     //         //         i = n("#mCSB_" + r.idx + "_container"),
//     //         //         u = null == r.overflowed ? i.height() : i.outerHeight(!1),
//     //         //         f = null == r.overflowed ? i.width() : i.outerWidth(!1),
//     //         //         o = i[0].scrollHeight,
//     //         //         s = i[0].scrollWidth;
//     //         //     return o > u && (u = o), s > f && (f = s), [u > e.height(), f > e.width()]
//     //         // },
//     //         // y = function() {
//     //         //     var r = n(this),
//     //         //         i = r.data(t),
//     //         //         f = i.opt,
//     //         //         c = n("#mCSB_" + i.idx),
//     //         //         s = n("#mCSB_" + i.idx + "_container"),
//     //         //         h = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")],
//     //         //         e;
//     //         //     (o(r), ("x" !== f.axis && !i.overflowed[0] || "y" === f.axis && i.overflowed[0]) && (h[0].add(s).css("top", 0), u(r, "_resetY")), "y" !== f.axis && !i.overflowed[1] || "x" === f.axis && i.overflowed[1]) && (e = dx = 0, "rtl" === i.langDir && (e = c.width() - s.outerWidth(!1), dx = Math.abs(e / i.scrollRatio.x)), s.css("left", e), h[1].css("left", dx), u(r, "_resetX"))
//     //         // },
//     //         // ri = function() {
//     //         //     function u() {
//     //         //         e = setTimeout(function() {
//     //         //             n.event.special.mousewheel ? (clearTimeout(e), oi.call(f[0])) : u()
//     //         //         }, 100)
//     //         //     }
//     //         //     var f = n(this),
//     //         //         r = f.data(t),
//     //         //         i = r.opt,
//     //         //         e;
//     //         //     r.bindEvents || ((ui.call(this), i.contentTouchScroll && fi.call(this), ei.call(this), i.mouseWheel.enable) && u(), hi.call(this), li.call(this), i.advanced.autoScrollOnFocus && ci.call(this), i.scrollButtons.enable && ai.call(this), i.keyboard.enable && vi.call(this), r.bindEvents = !0)
//     //         // },
//     //         // g = function() {
//     //         //     var f = n(this),
//     //         //         r = f.data(t),
//     //         //         u = r.opt,
//     //         //         o = t + "_" + r.idx,
//     //         //         s = ".mCSB_" + r.idx + "_scrollbar",
//     //         //         e = n("#mCSB_" + r.idx + ",#mCSB_" + r.idx + "_container,#mCSB_" + r.idx + "_container_wrapper," + s + " ." + i[12] + ",#mCSB_" + r.idx + "_dragger_vertical,#mCSB_" + r.idx + "_dragger_horizontal," + s + ">a"),
//     //         //         h = n("#mCSB_" + r.idx + "_container");
//     //         //     u.advanced.releaseDraggableSelectors && e.add(n(u.advanced.releaseDraggableSelectors));
//     //         //     u.advanced.extraDraggableSelectors && e.add(n(u.advanced.extraDraggableSelectors));
//     //         //     r.bindEvents && (n(document).add(n(!l() || top.document)).unbind("." + o), e.each(function() {
//     //         //         n(this).unbind("." + o)
//     //         //     }), clearTimeout(f[0]._focusTimeout), a(f[0], "_focusTimeout"), clearTimeout(r.sequential.step), a(r.sequential, "step"), clearTimeout(h[0].onCompleteTimeout), a(h[0], "onCompleteTimeout"), r.bindEvents = !1)
//     //         // },
//     //         // ct = function(r) {
//     //         //     var h = n(this),
//     //         //         u = h.data(t),
//     //         //         o = u.opt,
//     //         //         c = n("#mCSB_" + u.idx + "_container_wrapper"),
//     //         //         f = c.length ? c : n("#mCSB_" + u.idx + "_container"),
//     //         //         e = [n("#mCSB_" + u.idx + "_scrollbar_vertical"), n("#mCSB_" + u.idx + "_scrollbar_horizontal")],
//     //         //         s = [e[0].find(".mCSB_dragger"), e[1].find(".mCSB_dragger")];
//     //         //     "x" !== o.axis && (u.overflowed[0] && !r ? (e[0].add(s[0]).add(e[0].children("a")).css("display", "block"), f.removeClass(i[8] + " " + i[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && s[0].css("display", "none"), f.removeClass(i[10])) : (e[0].css("display", "none"), f.addClass(i[10])), f.addClass(i[8])));
//     //         //     "y" !== o.axis && (u.overflowed[1] && !r ? (e[1].add(s[1]).add(e[1].children("a")).css("display", "block"), f.removeClass(i[9] + " " + i[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && s[1].css("display", "none"), f.removeClass(i[11])) : (e[1].css("display", "none"), f.addClass(i[11])), f.addClass(i[9])));
//     //         //     u.overflowed[0] || u.overflowed[1] ? h.removeClass(i[5]) : h.addClass(i[5])
//     //         // },
//     //         // r = function(t) {
//     //         //     var e = t.type,
//     //         //         i = t.target.ownerDocument !== document && null !== frameElement ? [n(frameElement).offset().top, n(frameElement).offset().left] : null,
//     //         //         u = l() && t.target.ownerDocument !== top.document && null !== frameElement ? [n(t.view.frameElement).offset().top, n(t.view.frameElement).offset().left] : [0, 0],
//     //         //         r, f;
//     //         //     switch (e) {
//     //         //         case "pointerdown":
//     //         //         case "MSPointerDown":
//     //         //         case "pointermove":
//     //         //         case "MSPointerMove":
//     //         //         case "pointerup":
//     //         //         case "MSPointerUp":
//     //         //             return i ? [t.originalEvent.pageY - i[0] + u[0], t.originalEvent.pageX - i[1] + u[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
//     //         //         case "touchstart":
//     //         //         case "touchmove":
//     //         //         case "touchend":
//     //         //             return r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], f = t.originalEvent.touches.length || t.originalEvent.changedTouches.length, t.target.ownerDocument !== document ? [r.screenY, r.screenX, f > 1] : [r.pageY, r.pageX, f > 1];
//     //         //         default:
//     //         //             return i ? [t.pageY - i[0] + u[0], t.pageX - i[1] + u[1], !1] : [t.pageY, t.pageX, !1]
//     //         //     }
//     //         // },
//     //         ui = function() {
//     //             // function k(n, t, r, f) {
//     //             //     var e, o;
//     //             //     (w[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, i.attr("id") === y[1]) ? (e = "x", o = (i[0].offsetLeft - t + f) * s.scrollRatio.x) : (e = "y", o = (i[0].offsetTop - n + r) * s.scrollRatio.y);
//     //             //     u(v, o.toString(), {
//     //             //         dir: e,
//     //             //         drag: !0
//     //             //     })
//     //             // }
//     //             var i, c, a, v = n(this),
//     //                 s = v.data(t),
//     //                 h = s.opt,
//     //                 f = t + "_" + s.idx,
//     //                 y = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"],
//     //                 w = n("#mCSB_" + s.idx + "_container"),
//     //                 b = n("#" + y[0] + ",#" + y[1]),
//     //                 g = h.advanced.releaseDraggableSelectors ? b.add(n(h.advanced.releaseDraggableSelectors)) : b,
//     //                 nt = h.advanced.extraDraggableSelectors ? n(!l() || top.document).add(n(h.advanced.extraDraggableSelectors)) : n(!l() || top.document);
//     //             // b.bind("contextmenu." + f, function(n) {
//     //             //     n.preventDefault()
//     //             // }).bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(t) {
//     //             //     if (t.stopImmediatePropagation(), t.preventDefault(), yt(t)) {
//     //             //         e = !0;
//     //             //         p && (document.onselectstart = function() {
//     //             //             return !1
//     //             //         });
//     //             //         lt.call(w, !1);
//     //             //         o(v);
//     //             //         i = n(this);
//     //             //         var u = i.offset(),
//     //             //             f = r(t)[0] - u.top,
//     //             //             s = r(t)[1] - u.left,
//     //             //             l = i.height() + u.top,
//     //             //             y = i.width() + u.left;
//     //             //         l > f && f > 0 && y > s && s > 0 && (c = f, a = s);
//     //             //         d(i, "active", h.autoExpandScrollbar)
//     //             //     }
//     //             // }).bind("touchmove." + f, function(n) {
//     //             //     n.stopImmediatePropagation();
//     //             //     n.preventDefault();
//     //             //     var t = i.offset(),
//     //             //         u = r(n)[0] - t.top,
//     //             //         f = r(n)[1] - t.left;
//     //             //     k(c, a, u, f)
//     //             // });
//     //             // n(document).add(nt).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(n) {
//     //             //     if (i) {
//     //             //         var t = i.offset(),
//     //             //             u = r(n)[0] - t.top,
//     //             //             f = r(n)[1] - t.left;
//     //             //         if (c === u && a === f) return;
//     //             //         k(c, a, u, f)
//     //             //     }
//     //             // }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function() {
//     //             //     i && (d(i, "active", h.autoExpandScrollbar), i = null);
//     //             //     e = !1;
//     //             //     p && (document.onselectstart = null);
//     //             //     lt.call(w, !0)
//     //             // })
//     //         },
//     //         // fi = function() {
//     //         //     function at(n) {
//     //         //         if (!nt(n) || e || r(n)[2]) return void(h = 0);
//     //         //         h = 1;
//     //         //         it = 0;
//     //         //         rt = 0;
//     //         //         st = 1;
//     //         //         g.removeClass("mCS_touch_action");
//     //         //         var t = b.offset();
//     //         //         k = r(n)[0] - t.top;
//     //         //         d = r(n)[1] - t.left;
//     //         //         v = [r(n)[0], r(n)[1]]
//     //         //     }

//     //         //     // function vt(n) {
//     //         //     //     var c, l, a, y;
//     //         //     //     if (nt(n) && !e && !r(n)[2] && (f.documentTouchScroll || n.preventDefault(), n.stopImmediatePropagation(), (!rt || it) && st)) {
//     //         //     //         gt = w();
//     //         //     //         var o = ut.offset(),
//     //         //     //             t = r(n)[0] - o.top,
//     //         //     //             u = r(n)[1] - o.left,
//     //         //     //             h = "mcsLinearOut";
//     //         //     //         (et.push(t), ot.push(u), v[2] = Math.abs(r(n)[0] - v[0]), v[3] = Math.abs(r(n)[1] - v[1]), i.overflowed[0]) && (c = ft[0].parent().height() - ft[0].height(), l = k - t > 0 && t - k > -(c * i.scrollRatio.y) && (2 * v[3] < v[2] || "yx" === f.axis));
//     //         //     //         i.overflowed[1] && (a = ft[1].parent().width() - ft[1].width(), y = d - u > 0 && u - d > -(a * i.scrollRatio.x) && (2 * v[2] < v[3] || "yx" === f.axis));
//     //         //     //         l || y ? (ii || n.preventDefault(), it = 1) : (rt = 1, g.addClass("mCS_touch_action"));
//     //         //     //         ii && n.preventDefault();
//     //         //     //         s = "yx" === f.axis ? [k - t, d - u] : "x" === f.axis ? [null, d - u] : [k - t, null];
//     //         //     //         b[0].idleTimer = 250;
//     //         //     //         i.overflowed[0] && tt(s[0], ni, h, "y", "all", !0);
//     //         //     //         i.overflowed[1] && tt(s[1], ni, h, "x", lt, !0)
//     //         //     //     }
//     //         //     // }

//     //         //     // function yt(n) {
//     //         //     //     if (!nt(n) || e || r(n)[2]) return void(h = 0);
//     //         //     //     h = 1;
//     //         //     //     n.stopImmediatePropagation();
//     //         //     //     o(g);
//     //         //     //     dt = w();
//     //         //     //     var t = ut.offset();
//     //         //     //     bt = r(n)[0] - t.top;
//     //         //     //     kt = r(n)[1] - t.left;
//     //         //     //     et = [];
//     //         //     //     ot = []
//     //         //     // }

//     //         //     // function pt(n) {
//     //         //     //     var t, u, h;
//     //         //     //     if (nt(n) && !e && !r(n)[2]) {
//     //         //     //         st = 0;
//     //         //     //         n.stopImmediatePropagation();
//     //         //     //         it = 0;
//     //         //     //         rt = 0;
//     //         //     //         ht = w();
//     //         //     //         var l = ut.offset(),
//     //         //     //             a = r(n)[0] - l.top,
//     //         //     //             v = r(n)[1] - l.left;
//     //         //     //         if (!(ht - gt > 30)) {
//     //         //     //             c = 1e3 / (ht - dt);
//     //         //     //             var p = "mcsEaseOut",
//     //         //     //                 o = 2.5 > c,
//     //         //     //                 k = o ? [et[et.length - 2], ot[ot.length - 2]] : [0, 0];
//     //         //     //             y = o ? [a - k[0], v - k[1]] : [a - bt, v - kt];
//     //         //     //             t = [Math.abs(y[0]), Math.abs(y[1])];
//     //         //     //             c = o ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [c, c];
//     //         //     //             u = [Math.abs(b[0].offsetTop) - y[0] * wt(t[0] / c[0], c[0]), Math.abs(b[0].offsetLeft) - y[1] * wt(t[1] / c[1], c[1])];
//     //         //     //             s = "yx" === f.axis ? [u[0], u[1]] : "x" === f.axis ? [null, u[1]] : [u[0], null];
//     //         //     //             ct = [4 * t[0] + f.scrollInertia, 4 * t[1] + f.scrollInertia];
//     //         //     //             h = parseInt(f.contentTouchScroll) || 0;
//     //         //     //             s[0] = t[0] > h ? s[0] : 0;
//     //         //     //             s[1] = t[1] > h ? s[1] : 0;
//     //         //     //             i.overflowed[0] && tt(s[0], ct[0], p, "y", lt, !1);
//     //         //     //             i.overflowed[1] && tt(s[1], ct[1], p, "x", lt, !1)
//     //         //     //         }
//     //         //     //     }
//     //         //     // }

//     //         //     // function wt(n, t) {
//     //         //     //     var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
//     //         //     //     return n > 90 ? t > 4 ? i[0] : i[3] : n > 60 ? t > 3 ? i[3] : i[2] : n > 30 ? t > 8 ? i[1] : t > 6 ? i[0] : t > 4 ? t : i[2] : t > 8 ? t : i[3]
//     //         //     // }

//     //         //     // function tt(n, t, i, r, f, e) {
//     //         //     //     n && u(g, n.toString(), {
//     //         //     //         dur: t,
//     //         //     //         scrollEasing: i,
//     //         //     //         dir: r,
//     //         //     //         overwrite: f,
//     //         //     //         drag: e
//     //         //     //     })
//     //         //     // }
//     //         //     var st, k, d, bt, kt, dt, gt, ht, y, c, s, ct, it, rt, g = n(this),
//     //         //         i = g.data(t),
//     //         //         f = i.opt,
//     //         //         a = t + "_" + i.idx,
//     //         //         ut = n("#mCSB_" + i.idx),
//     //         //         b = n("#mCSB_" + i.idx + "_container"),
//     //         //         ft = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")],
//     //         //         et = [],
//     //         //         ot = [],
//     //         //         ni = 0,
//     //         //         lt = "yx" === f.axis ? "none" : "all",
//     //         //         v = [],
//     //         //         ti = b.find("iframe"),
//     //         //         p = ["touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, "touchmove." + a + " pointermove." + a + " MSPointerMove." + a, "touchend." + a + " pointerup." + a + " MSPointerUp." + a],
//     //         //         ii = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
//     //         //     // b.bind(p[0], function(n) {
//     //         //     //     at(n)
//     //         //     // }).bind(p[1], function(n) {
//     //         //     //     vt(n)
//     //         //     // });
//     //         //     // ut.bind(p[0], function(n) {
//     //         //     //     yt(n)
//     //         //     // }).bind(p[2], function(n) {
//     //         //     //     pt(n)
//     //         //     // });
//     //         //     // ti.length && ti.each(function() {
//     //         //     //     n(this).bind("load", function() {
//     //         //     //         l(this) && n(this.contentDocument || this.contentWindow.document).bind(p[0], function(n) {
//     //         //     //             at(n);
//     //         //     //             yt(n)
//     //         //     //         }).bind(p[1], function(n) {
//     //         //     //             vt(n)
//     //         //     //         }).bind(p[2], function(n) {
//     //         //     //             pt(n)
//     //         //     //         })
//     //         //     //     })
//     //         //     // })
//     //         // },
//     //         // ei = function() {
//     //         //     function y() {
//     //         //         return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
//     //         //     }

//     //         //     function i(n, t, i) {
//     //         //         l.type = i && u ? "stepped" : "stepless";
//     //         //         l.scrollAmount = 10;
//     //         //         ut(a, n, t, "mcsLinearOut", i ? 60 : null)
//     //         //     }
//     //         //     var u, a = n(this),
//     //         //         f = a.data(t),
//     //         //         v = f.opt,
//     //         //         l = f.sequential,
//     //         //         s = t + "_" + f.idx,
//     //         //         o = n("#mCSB_" + f.idx + "_container"),
//     //         //         c = o.parent();
//     //         //     o.bind("mousedown." + s, function() {
//     //         //         h || u || (u = 1, e = !0)
//     //         //     }).add(document).bind("mousemove." + s, function(n) {
//     //         //         if (!h && u && y()) {
//     //         //             var s = o.offset(),
//     //         //                 t = r(n)[0] - s.top + o[0].offsetTop,
//     //         //                 e = r(n)[1] - s.left + o[0].offsetLeft;
//     //         //             t > 0 && t < c.height() && e > 0 && e < c.width() ? l.step && i("off", null, "stepped") : ("x" !== v.axis && f.overflowed[0] && (0 > t ? i("on", 38) : t > c.height() && i("on", 40)), "y" !== v.axis && f.overflowed[1] && (0 > e ? i("on", 37) : e > c.width() && i("on", 39)))
//     //         //         }
//     //         //     }).bind("mouseup." + s + " dragend." + s, function() {
//     //         //         h || (u && (u = 0, i("off", null)), e = !1)
//     //         //     })
//     //         // },
//     //         // oi = function() {
//     //         //     function h(t, h) {
//     //         //         var a, v;
//     //         //         if (o(s), !si(s, t.target)) {
//     //         //             if (a = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : p && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100, v = i.scrollInertia, "x" === i.axis || "x" === i.mouseWheel.axis) var y = "x",
//     //         //                 l = [Math.round(a * r.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
//     //         //                 w = "auto" !== i.mouseWheel.scrollAmount ? l[1] : l[0] >= e.width() ? .9 * e.width() : l[0],
//     //         //                 k = Math.abs(n("#mCSB_" + r.idx + "_container")[0].offsetLeft),
//     //         //                 b = f[1][0].offsetLeft,
//     //         //                 d = f[1].parent().width() - f[1].width(),
//     //         //                 c = "y" === i.mouseWheel.axis ? t.deltaY || h : t.deltaX;
//     //         //             else var y = "y",
//     //         //                 l = [Math.round(a * r.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
//     //         //                 w = "auto" !== i.mouseWheel.scrollAmount ? l[1] : l[0] >= e.height() ? .9 * e.height() : l[0],
//     //         //                 k = Math.abs(n("#mCSB_" + r.idx + "_container")[0].offsetTop),
//     //         //                 b = f[0][0].offsetTop,
//     //         //                 d = f[0].parent().height() - f[0].height(),
//     //         //                 c = t.deltaY || h;
//     //         //             ("y" !== y || r.overflowed[0]) && ("x" !== y || r.overflowed[1]) && ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (c = -c), i.mouseWheel.normalizeDelta && (c = 0 > c ? -1 : 1), (c > 0 && 0 !== b || 0 > c && b !== d || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (w = t.deltaFactor, v = 17), u(s, (k - c * w).toString(), {
//     //         //                 dir: y,
//     //         //                 dur: v
//     //         //             }))
//     //         //         }
//     //         //     }
//     //         //     if (n(this).data(t)) {
//     //         //         var s = n(this),
//     //         //             r = s.data(t),
//     //         //             i = r.opt,
//     //         //             c = t + "_" + r.idx,
//     //         //             e = n("#mCSB_" + r.idx),
//     //         //             f = [n("#mCSB_" + r.idx + "_dragger_vertical"), n("#mCSB_" + r.idx + "_dragger_horizontal")],
//     //         //             a = n("#mCSB_" + r.idx + "_container").find("iframe");
//     //         //         a.length && a.each(function() {
//     //         //             n(this).bind("load", function() {
//     //         //                 l(this) && n(this.contentDocument || this.contentWindow.document).bind("mousewheel." + c, function(n, t) {
//     //         //                     h(n, t)
//     //         //                 })
//     //         //             })
//     //         //         });
//     //         //         e.bind("mousewheel." + c, function(n, t) {
//     //         //             h(n, t)
//     //         //         })
//     //         //     }
//     //         // },
//     //         rt = {},
//     //         // l = function(t) {
//     //         //     var r = !1,
//     //         //         i = !1,
//     //         //         u = null,
//     //         //         f;
//     //         //     if (void 0 === t ? i = "#empty" : void 0 !== n(t).attr("id") && (i = n(t).attr("id")), i !== !1 && void 0 !== rt[i]) return rt[i];
//     //         //     if (t) {
//     //         //         try {
//     //         //             f = t.contentDocument || t.contentWindow.document;
//     //         //             u = f.body.innerHTML
//     //         //         } catch (e) {}
//     //         //         r = null !== u
//     //         //     } else {
//     //         //         try {
//     //         //             f = top.document;
//     //         //             u = f.body.innerHTML
//     //         //         } catch (e) {}
//     //         //         r = null !== u
//     //         //     }
//     //         //     return i !== !1 && (rt[i] = r), r
//     //         // },
//     //         // lt = function(n) {
//     //         //     var t = this.find("iframe"),
//     //         //         i;
//     //         //     t.length && (i = n ? "auto" : "none", t.css("pointer-events", i))
//     //         // },
//     //         // si = function(i, r) {
//     //         //     var u = r.nodeName.toLowerCase(),
//     //         //         f = i.data(t).opt.mouseWheel.disableOver;
//     //         //     return n.inArray(u, f) > -1 && !(n.inArray(u, ["select", "textarea"]) > -1 && !n(r).is(":focus"))
//     //         // },
//     //         // hi = function() {
//     //         //     var s, h = n(this),
//     //         //         f = h.data(t),
//     //         //         r = t + "_" + f.idx,
//     //         //         c = n("#mCSB_" + f.idx + "_container"),
//     //         //         l = c.parent(),
//     //         //         a = n(".mCSB_" + f.idx + "_scrollbar ." + i[12]);
//     //         //     a.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(t) {
//     //         //         e = !0;
//     //         //         n(t.target).hasClass("mCSB_dragger") || (s = 1)
//     //         //     }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function() {
//     //         //         e = !1
//     //         //     }).bind("click." + r, function(t) {
//     //         //         var r, e;
//     //         //         if (s && (s = 0, n(t.target).hasClass(i[12]) || n(t.target).hasClass("mCSB_draggerRail"))) {
//     //         //             if (o(h), r = n(this), e = r.find(".mCSB_dragger"), r.parent(".mCSB_scrollTools_horizontal").length > 0) {
//     //         //                 if (!f.overflowed[1]) return;
//     //         //                 var v = "x",
//     //         //                     a = t.pageX > e.offset().left ? -1 : 1,
//     //         //                     y = Math.abs(c[0].offsetLeft) - a * .9 * l.width()
//     //         //             } else {
//     //         //                 if (!f.overflowed[0]) return;
//     //         //                 var v = "y",
//     //         //                     a = t.pageY > e.offset().top ? -1 : 1,
//     //         //                     y = Math.abs(c[0].offsetTop) - a * .9 * l.height()
//     //         //             }
//     //         //             u(h, y.toString(), {
//     //         //                 dir: v,
//     //         //                 scrollEasing: "mcsEaseInOut"
//     //         //             })
//     //         //         }
//     //         //     })
//     //         // },
//     //         // ci = function() {
//     //         //     var i = n(this),
//     //         //         s = i.data(t),
//     //         //         e = s.opt,
//     //         //         c = t + "_" + s.idx,
//     //         //         r = n("#mCSB_" + s.idx + "_container"),
//     //         //         h = r.parent();
//     //         //     r.bind("focusin." + c, function() {
//     //         //         var t = n(document.activeElement),
//     //         //             c = r.find(".mCustomScrollBox").length,
//     //         //             s = 0;
//     //         //         t.is(e.advanced.autoScrollOnFocus) && (o(i), clearTimeout(i[0]._focusTimeout), i[0]._focusTimer = c ? (s + 17) * c : 0, i[0]._focusTimeout = setTimeout(function() {
//     //         //             var n = [f(t)[0], f(t)[1]],
//     //         //                 o = [r[0].offsetTop, r[0].offsetLeft],
//     //         //                 c = [o[0] + n[0] >= 0 && o[0] + n[0] < h.height() - t.outerHeight(!1), o[1] + n[1] >= 0 && o[0] + n[1] < h.width() - t.outerWidth(!1)],
//     //         //                 l = "yx" !== e.axis || c[0] || c[1] ? "all" : "none";
//     //         //             "x" === e.axis || c[0] || u(i, n[0].toString(), {
//     //         //                 dir: "y",
//     //         //                 scrollEasing: "mcsEaseInOut",
//     //         //                 overwrite: l,
//     //         //                 dur: s
//     //         //             });
//     //         //             "y" === e.axis || c[1] || u(i, n[1].toString(), {
//     //         //                 dir: "x",
//     //         //                 scrollEasing: "mcsEaseInOut",
//     //         //                 overwrite: l,
//     //         //                 dur: s
//     //         //             })
//     //         //         }, i[0]._focusTimer))
//     //         //     })
//     //         // },
//     //         // li = function() {
//     //         //     var u = n(this),
//     //         //         i = u.data(t),
//     //         //         f = t + "_" + i.idx,
//     //         //         r = n("#mCSB_" + i.idx + "_container").parent();
//     //         //     r.bind("scroll." + f, function() {
//     //         //         0 === r.scrollTop() && 0 === r.scrollLeft() || n(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
//     //         //     })
//     //         // },
//     //         // ai = function() {
//     //         //     var f = n(this),
//     //         //         r = f.data(t),
//     //         //         o = r.opt,
//     //         //         u = r.sequential,
//     //         //         i = t + "_" + r.idx,
//     //         //         s = ".mCSB_" + r.idx + "_scrollbar",
//     //         //         h = n(s + ">a");
//     //         //     h.bind("contextmenu." + i, function(n) {
//     //         //         n.preventDefault()
//     //         //     }).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i + " mouseup." + i + " touchend." + i + " pointerup." + i + " MSPointerUp." + i + " mouseout." + i + " pointerout." + i + " MSPointerOut." + i + " click." + i, function(t) {
//     //         //         function i(n, t) {
//     //         //             u.scrollAmount = o.scrollButtons.scrollAmount;
//     //         //             ut(f, n, t)
//     //         //         }
//     //         //         if (t.preventDefault(), yt(t)) {
//     //         //             var s = n(this).attr("class");
//     //         //             switch (u.type = o.scrollButtons.scrollType, t.type) {
//     //         //                 case "mousedown":
//     //         //                 case "touchstart":
//     //         //                 case "pointerdown":
//     //         //                 case "MSPointerDown":
//     //         //                     if ("stepped" === u.type) return;
//     //         //                     e = !0;
//     //         //                     r.tweenRunning = !1;
//     //         //                     i("on", s);
//     //         //                     break;
//     //         //                 case "mouseup":
//     //         //                 case "touchend":
//     //         //                 case "pointerup":
//     //         //                 case "MSPointerUp":
//     //         //                 case "mouseout":
//     //         //                 case "pointerout":
//     //         //                 case "MSPointerOut":
//     //         //                     if ("stepped" === u.type) return;
//     //         //                     e = !1;
//     //         //                     u.dir && i("off", s);
//     //         //                     break;
//     //         //                 case "click":
//     //         //                     if ("stepped" !== u.type || r.tweenRunning) return;
//     //         //                     i("on", s)
//     //         //             }
//     //         //         }
//     //         //     })
//     //         // },
//     //         // vi = function() {
//     //         //     function a(t) {
//     //         //         function w(n, t) {
//     //         //             s.type = r.keyboard.scrollType;
//     //         //             s.scrollAmount = r.keyboard.scrollAmount;
//     //         //             "stepped" === s.type && i.tweenRunning || ut(e, n, t)
//     //         //         }
//     //         //         var c, y, p, l, a;
//     //         //         switch (t.type) {
//     //         //             case "blur":
//     //         //                 i.tweenRunning && s.dir && w("off", null);
//     //         //                 break;
//     //         //             case "keydown":
//     //         //             case "keyup":
//     //         //                 if (c = t.keyCode ? t.keyCode : t.which, y = "on", "x" !== r.axis && (38 === c || 40 === c) || "y" !== r.axis && (37 === c || 39 === c)) {
//     //         //                     if ((38 === c || 40 === c) && !i.overflowed[0] || (37 === c || 39 === c) && !i.overflowed[1]) return;
//     //         //                     "keyup" === t.type && (y = "off");
//     //         //                     n(document.activeElement).is(v) || (t.preventDefault(), t.stopImmediatePropagation(), w(y, c))
//     //         //                 } else 33 === c || 34 === c ? ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) && (o(e), p = 34 === c ? -1 : 1, "x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0] ? (l = "x", a = Math.abs(f[0].offsetLeft) - p * .9 * h.width()) : (l = "y", a = Math.abs(f[0].offsetTop) - p * .9 * h.height()), u(e, a.toString(), {
//     //         //                     dir: l,
//     //         //                     scrollEasing: "mcsEaseInOut"
//     //         //                 })) : 35 !== c && 36 !== c || n(document.activeElement).is(v) || ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" !== t.type) || ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0] ? (l = "x", a = 35 === c ? Math.abs(h.width() - f.outerWidth(!1)) : 0) : (l = "y", a = 35 === c ? Math.abs(h.height() - f.outerHeight(!1)) : 0), u(e, a.toString(), {
//     //         //                     dir: l,
//     //         //                     scrollEasing: "mcsEaseInOut"
//     //         //                 }))
//     //         //         }
//     //         //     }
//     //         //     var e = n(this),
//     //         //         i = e.data(t),
//     //         //         r = i.opt,
//     //         //         s = i.sequential,
//     //         //         c = t + "_" + i.idx,
//     //         //         w = n("#mCSB_" + i.idx),
//     //         //         f = n("#mCSB_" + i.idx + "_container"),
//     //         //         h = f.parent(),
//     //         //         v = "input,textarea,select,datalist,keygen,[contenteditable='true']",
//     //         //         y = f.find("iframe"),
//     //         //         p = ["blur." + c + " keydown." + c + " keyup." + c];
//     //         //     y.length && y.each(function() {
//     //         //         n(this).bind("load", function() {
//     //         //             l(this) && n(this.contentDocument || this.contentWindow.document).bind(p[0], function(n) {
//     //         //                 a(n)
//     //         //             })
//     //         //         })
//     //         //     });
//     //         //     // w.attr("tabindex", "0").bind(p[0], function(n) {
//     //         //     //     a(n)
//     //         //     // })
//     //         // },
//     //         // ut = function(r, f, e, s, h) {
//     //         //     function y(n) {
//     //         //         l.snapAmount && (c.scrollAmount = l.snapAmount instanceof Array ? "x" === c.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
//     //         //         var i = "stepped" !== c.type,
//     //         //             f = h ? h : n ? i ? k / 1.5 : d : 1e3 / 60,
//     //         //             e = n ? i ? 7.5 : 40 : 2.5,
//     //         //             t = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
//     //         //             o = [v.scrollRatio.y > 10 ? 10 : v.scrollRatio.y, v.scrollRatio.x > 10 ? 10 : v.scrollRatio.x],
//     //         //             w = "x" === c.dir[0] ? t[1] + c.dir[1] * o[1] * e : t[0] + c.dir[1] * o[0] * e,
//     //         //             b = "x" === c.dir[0] ? t[1] + c.dir[1] * parseInt(c.scrollAmount) : t[0] + c.dir[1] * parseInt(c.scrollAmount),
//     //         //             a = "auto" !== c.scrollAmount ? b : w,
//     //         //             g = s ? s : n ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
//     //         //             nt = !!n;
//     //         //         return n && 17 > f && (a = "x" === c.dir[0] ? t[1] : t[0]), u(r, a.toString(), {
//     //         //             dir: c.dir[0],
//     //         //             scrollEasing: g,
//     //         //             dur: f,
//     //         //             onComplete: nt
//     //         //         }), n ? void(c.dir = !1) : (clearTimeout(c.step), void(c.step = setTimeout(function() {
//     //         //             y()
//     //         //         }, f)))
//     //         //     }

//     //         //     function b() {
//     //         //         clearTimeout(c.step);
//     //         //         a(c, "step");
//     //         //         o(r)
//     //         //     }
//     //         //     var v = r.data(t),
//     //         //         l = v.opt,
//     //         //         c = v.sequential,
//     //         //         p = n("#mCSB_" + v.idx + "_container"),
//     //         //         w = "stepped" === c.type,
//     //         //         k = l.scrollInertia < 26 ? 26 : l.scrollInertia,
//     //         //         d = l.scrollInertia < 1 ? 17 : l.scrollInertia;
//     //         //     switch (f) {
//     //         //         case "on":
//     //         //             if (c.dir = [e === i[16] || e === i[15] || 39 === e || 37 === e ? "x" : "y", e === i[13] || e === i[15] || 38 === e || 37 === e ? -1 : 1], o(r), tt(e) && "stepped" === c.type) return;
//     //         //             y(w);
//     //         //             break;
//     //         //         case "off":
//     //         //             b();
//     //         //             (w || v.tweenRunning && c.dir) && y(!0)
//     //         //     }
//     //         // },
//     //         // ft = function(i) {
//     //         //     var u = n(this).data(t).opt,
//     //         //         r = [];
//     //         //     return "function" == typeof i && (i = i()), i instanceof Array ? r = i.length > 1 ? [i[0], i[1]] : "x" === u.axis ? [null, i[0]] : [i[0], null] : (r[0] = i.y ? i.y : i.x || "x" === u.axis ? null : i, r[1] = i.x ? i.x : i.y || "y" === u.axis ? null : i), "function" == typeof r[0] && (r[0] = r[0]()), "function" == typeof r[1] && (r[1] = r[1]()), r
//     //         // },
//     //         // at = function(i, r) {
//     //         //     var h, e;
//     //         //     if (null != i && "undefined" != typeof i) {
//     //         //         var c = n(this),
//     //         //             l = c.data(t),
//     //         //             v = l.opt,
//     //         //             u = n("#mCSB_" + l.idx + "_container"),
//     //         //             o = u.parent(),
//     //         //             y = typeof i;
//     //         //         r || (r = "x" === v.axis ? "x" : "y");
//     //         //         var p = "x" === r ? u.outerWidth(!1) - o.width() : u.outerHeight(!1) - o.height(),
//     //         //             a = "x" === r ? u[0].offsetLeft : u[0].offsetTop,
//     //         //             w = "x" === r ? "left" : "top";
//     //         //         switch (y) {
//     //         //             case "function":
//     //         //                 return i();
//     //         //             case "object":
//     //         //                 return (e = i.jquery ? i : n(i), !e.length) ? void 0 : "x" === r ? f(e)[1] : f(e)[0];
//     //         //             case "string":
//     //         //             case "number":
//     //         //                 return tt(i) ? Math.abs(i) : -1 !== i.indexOf("%") ? Math.abs(p * parseInt(i) / 100) : -1 !== i.indexOf("-=") ? Math.abs(a - parseInt(i.split("-=")[1])) : -1 !== i.indexOf("+=") ? (h = a + parseInt(i.split("+=")[1]), h >= 0 ? 0 : Math.abs(h)) : -1 !== i.indexOf("px") && tt(i.split("px")[0]) ? Math.abs(i.split("px")[0]) : "top" === i || "left" === i ? 0 : "bottom" === i ? Math.abs(o.height() - u.outerHeight(!1)) : "right" === i ? Math.abs(o.width() - u.outerWidth(!1)) : "first" === i || "last" === i ? (e = u.find(":" + i), "x" === r ? f(e)[1] : f(e)[0]) : n(i).length ? "x" === r ? f(n(i))[1] : f(n(i))[0] : (u.css(w, i), void s.update.call(null, c[0]))
//     //         //         }
//     //         //     }
//     //         // },
//     //         // et = function(r) {
//     //         //     // function c() {
//     //         //     //     return clearTimeout(e[0].autoUpdate), 0 === o.parents("html").length ? void(o = null) : void(e[0].autoUpdate = setTimeout(function() {
//     //         //     //         return f.advanced.updateOnSelectorChange && (u.poll.change.n = v(), u.poll.change.n !== u.poll.change.o) ? (u.poll.change.o = u.poll.change.n, void h(3)) : f.advanced.updateOnContentResize && (u.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + e[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth, u.poll.size.n !== u.poll.size.o) ? (u.poll.size.o = u.poll.size.n, void h(1)) : !f.advanced.updateOnImageLoad || "auto" === f.advanced.updateOnImageLoad && "y" === f.axis || (u.poll.img.n = e.find("img").length, u.poll.img.n === u.poll.img.o) ? void((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && c()) : (u.poll.img.o = u.poll.img.n, void e.find("img").each(function() {
//     //         //     //             l(this)
//     //         //     //         }))
//     //         //     //     }, f.advanced.autoUpdateTimeout))
//     //         //     // }

//     //         //     function l(t) {
//     //         //         function u(n, t) {
//     //         //             return function() {
//     //         //                 return t.apply(n, arguments)
//     //         //             }
//     //         //         }

//     //         //         // function f() {
//     //         //         //     this.onload = null;
//     //         //         //     n(t).addClass(i[2]);
//     //         //         //     h(2)
//     //         //         // }
//     //         //         if (n(t).hasClass(i[2])) return void h();
//     //         //         var r = new Image;
//     //         //         r.onload = u(r, f);
//     //         //         r.src = t.src
//     //         //     }

//     //         //     // function v() {
//     //         //     //     f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
//     //         //     //     var n = 0,
//     //         //     //         t = e.find(f.advanced.updateOnSelectorChange);
//     //         //     //     return f.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
//     //         //     //         n += this.offsetHeight + this.offsetWidth
//     //         //     //     }), n
//     //         //     // }

//     //         //     // function h(n) {
//     //         //     //     clearTimeout(e[0].autoUpdate);
//     //         //     //     s.update.call(null, o[0], n)
//     //         //     // }
//     //         //     var o = n(this),
//     //         //         u = o.data(t),
//     //         //         f = u.opt,
//     //         //         e = n("#mCSB_" + u.idx + "_container");
//     //         //     return r ? (clearTimeout(e[0].autoUpdate), void a(e[0], "autoUpdate")) : void c()
//     //         // },
//     //         // yi = function(n, t, i) {
//     //         //     return Math.round(n / t) * t - i
//     //         // },
//     //         // o = function(i) {
//     //         //     var r = i.data(t),
//     //         //         u = n("#mCSB_" + r.idx + "_container,#mCSB_" + r.idx + "_container_wrapper,#mCSB_" + r.idx + "_dragger_vertical,#mCSB_" + r.idx + "_dragger_horizontal");
//     //         //     u.each(function() {
//     //         //         pi.call(this)
//     //         //     })
//     //         // },
//     //         // u = function(i, r, u) {
//     //         //     // function h(n) {
//     //         //     //     return f && e.callbacks[n] && "function" == typeof e.callbacks[n]
//     //         //     // }

//     //         //     // function rt() {
//     //         //     //     return [e.callbacks.alwaysTriggerOffsets || w >= l[0] + v, e.callbacks.alwaysTriggerOffsets || -y >= w]
//     //         //     // }

//     //         //     // function a() {
//     //         //     //     var n = [o[0].offsetTop, o[0].offsetLeft],
//     //         //     //         t = [c[0].offsetTop, c[0].offsetLeft],
//     //         //     //         r = [o.outerHeight(!1), o.outerWidth(!1)],
//     //         //     //         f = [p.height(), p.width()];
//     //         //     //     i[0].mcs = {
//     //         //     //         content: o,
//     //         //     //         top: n[0],
//     //         //     //         left: n[1],
//     //         //     //         draggerTop: t[0],
//     //         //     //         draggerLeft: t[1],
//     //         //     //         topPct: Math.round(100 * Math.abs(n[0]) / (Math.abs(r[0]) - f[0])),
//     //         //     //         leftPct: Math.round(100 * Math.abs(n[1]) / (Math.abs(r[1]) - f[1])),
//     //         //     //         direction: u.dir
//     //         //     //     }
//     //         //     // }
//     //         //     var f = i.data(t),
//     //         //         e = f.opt,
//     //         //         // ut = {
//     //         //         //     trigger: "internal",
//     //         //         //     dir: "y",
//     //         //         //     scrollEasing: "mcsEaseOut",
//     //         //         //     drag: !1,
//     //         //         //     dur: e.scrollInertia,
//     //         //         //     overwrite: "all",
//     //         //         //     callbacks: !0,
//     //         //         //     onStart: !0,
//     //         //         //     onUpdate: !0,
//     //         //         //     onComplete: !0
//     //         //         // },
//     //         //         u = n.extend(ut, u),
//     //         //         k = [u.dur, u.drag ? 0 : u.dur],
//     //         //         p = n("#mCSB_" + f.idx),
//     //         //         o = n("#mCSB_" + f.idx + "_container"),
//     //         //         b = o.parent(),
//     //         //         g = e.callbacks.onTotalScrollOffset ? ft.call(i, e.callbacks.onTotalScrollOffset) : [0, 0],
//     //         //         nt = e.callbacks.onTotalScrollBackOffset ? ft.call(i, e.callbacks.onTotalScrollBackOffset) : [0, 0],
//     //         //         tt;
//     //         //     // if (f.trigger = u.trigger, 0 === b.scrollTop() && 0 === b.scrollLeft() || (n(".mCSB_" + f.idx + "_scrollbar").css("visibility", "visible"), b.scrollTop(0).scrollLeft(0)), "_resetY" !== r || f.contentReset.y || (h("onOverflowYNone") && e.callbacks.onOverflowYNone.call(i[0]), f.contentReset.y = 1), "_resetX" !== r || f.contentReset.x || (h("onOverflowXNone") && e.callbacks.onOverflowXNone.call(i[0]), f.contentReset.x = 1), "_resetY" !== r && "_resetX" !== r) {
//     //         //     //     (!f.contentReset.y && i[0].mcs || !f.overflowed[0] || (h("onOverflowY") && e.callbacks.onOverflowY.call(i[0]), f.contentReset.x = null), !f.contentReset.x && i[0].mcs || !f.overflowed[1] || (h("onOverflowX") && e.callbacks.onOverflowX.call(i[0]), f.contentReset.x = null), e.snapAmount) && (tt = e.snapAmount instanceof Array ? "x" === u.dir ? e.snapAmount[1] : e.snapAmount[0] : e.snapAmount, r = yi(r, tt, e.snapOffset));
//     //         //     //     switch (u.dir) {
//     //         //     //         case "x":
//     //         //     //             var c = n("#mCSB_" + f.idx + "_dragger_horizontal"),
//     //         //     //                 it = "left",
//     //         //     //                 w = o[0].offsetLeft,
//     //         //     //                 l = [p.width() - o.outerWidth(!1), c.parent().width() - c.width()],
//     //         //     //                 s = [r, 0 === r ? 0 : r / f.scrollRatio.x],
//     //         //     //                 v = g[1],
//     //         //     //                 y = nt[1],
//     //         //     //                 et = v > 0 ? v / f.scrollRatio.x : 0,
//     //         //     //                 ot = y > 0 ? y / f.scrollRatio.x : 0;
//     //         //     //             break;
//     //         //     //         case "y":
//     //         //     //             var c = n("#mCSB_" + f.idx + "_dragger_vertical"),
//     //         //     //                 it = "top",
//     //         //     //                 w = o[0].offsetTop,
//     //         //     //                 l = [p.height() - o.outerHeight(!1), c.parent().height() - c.height()],
//     //         //     //                 s = [r, 0 === r ? 0 : r / f.scrollRatio.y],
//     //         //     //                 v = g[0],
//     //         //     //                 y = nt[0],
//     //         //     //                 et = v > 0 ? v / f.scrollRatio.y : 0,
//     //         //     //                 ot = y > 0 ? y / f.scrollRatio.y : 0
//     //         //     //     }
//     //         //     //     s[1] < 0 || 0 === s[0] && 0 === s[1] ? s = [0, 0] : s[1] >= l[1] ? s = [l[0], l[1]] : s[0] = -s[0];
//     //         //     //     i[0].mcs || (a(), h("onInit") && e.callbacks.onInit.call(i[0]));
//     //         //     //     clearTimeout(o[0].onCompleteTimeout);
//     //         //     //     vt(c[0], it, Math.round(s[1]), k[1], u.scrollEasing);
//     //         //     //     !f.tweenRunning && (0 === w && s[0] >= 0 || w === l[0] && s[0] <= l[0]) || vt(o[0], it, Math.round(s[0]), k[0], u.scrollEasing, u.overwrite, {
//     //         //     //         onStart: function() {
//     //         //     //             u.callbacks && u.onStart && !f.tweenRunning && (h("onScrollStart") && (a(), e.callbacks.onScrollStart.call(i[0])), f.tweenRunning = !0, d(c), f.cbOffsets = rt())
//     //         //     //         },
//     //         //     //         onUpdate: function() {
//     //         //     //             u.callbacks && u.onUpdate && h("whileScrolling") && (a(), e.callbacks.whileScrolling.call(i[0]))
//     //         //     //         },
//     //         //     //         onComplete: function() {
//     //         //     //             if (u.callbacks && u.onComplete) {
//     //         //     //                 "yx" === e.axis && clearTimeout(o[0].onCompleteTimeout);
//     //         //     //                 var n = o[0].idleTimer || 0;
//     //         //     //                 o[0].onCompleteTimeout = setTimeout(function() {
//     //         //     //                     h("onScroll") && (a(), e.callbacks.onScroll.call(i[0]));
//     //         //     //                     h("onTotalScroll") && s[1] >= l[1] - et && f.cbOffsets[0] && (a(), e.callbacks.onTotalScroll.call(i[0]));
//     //         //     //                     h("onTotalScrollBack") && s[1] <= ot && f.cbOffsets[1] && (a(), e.callbacks.onTotalScrollBack.call(i[0]));
//     //         //     //                     f.tweenRunning = !1;
//     //         //     //                     o[0].idleTimer = 0;
//     //         //     //                     d(c, "hide")
//     //         //     //                 }, n)
//     //         //     //             }
//     //         //     //         }
//     //         //     //     })
//     //         //     // }
//     //         // },
//     //         // vt = function(n, t, i, r, u, f, e) {
//     //         //     function a() {
//     //         //         o.stop || (s || g.call(), s = w() - it, v(), s >= o.time && (o.time = s > o.time ? s + h - (s - o.time) : s + h - 1, o.time < s + 1 && (o.time = s + 1)), o.time < r ? o.id = c(a) : tt.call())
//     //         //     }

//     //         //     // function v() {
//     //         //     //     r > 0 ? (o.currVal = d(o.time, l, p, r, u), y[t] = Math.round(o.currVal) + "px") : y[t] = i + "px";
//     //         //     //     nt.call()
//     //         //     // }

//     //         //     // function b() {
//     //         //     //     h = 1e3 / 60;
//     //         //     //     o.time = s + h;
//     //         //     //     c = window.requestAnimationFrame ? window.requestAnimationFrame : function(n) {
//     //         //     //         return v(), setTimeout(n, .01)
//     //         //     //     };
//     //         //     //     o.id = c(a)
//     //         //     // }

//     //         //     // function k() {
//     //         //     //     null != o.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(o.id) : clearTimeout(o.id), o.id = null)
//     //         //     // }

//     //         //     // function d(n, t, i, r, u) {
//     //         //     //     switch (u) {
//     //         //     //         case "linear":
//     //         //     //         case "mcsLinear":
//     //         //     //             return i * n / r + t;
//     //         //     //         case "mcsLinearOut":
//     //         //     //             return n /= r, n--, i * Math.sqrt(1 - n * n) + t;
//     //         //     //         case "easeInOutSmooth":
//     //         //     //             return n /= r / 2, 1 > n ? i / 2 * n * n + t : (n--, -i / 2 * (n * (n - 2) - 1) + t);
//     //         //     //         case "easeInOutStrong":
//     //         //     //             return n /= r / 2, 1 > n ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : (n--, i / 2 * (-Math.pow(2, -10 * n) + 2) + t);
//     //         //     //         case "easeInOut":
//     //         //     //         case "mcsEaseInOut":
//     //         //     //             return n /= r / 2, 1 > n ? i / 2 * n * n * n + t : (n -= 2, i / 2 * (n * n * n + 2) + t);
//     //         //     //         case "easeOutSmooth":
//     //         //     //             return n /= r, n--, -i * (n * n * n * n - 1) + t;
//     //         //     //         case "easeOutStrong":
//     //         //     //             return i * (-Math.pow(2, -10 * n / r) + 1) + t;
//     //         //     //         case "easeOut":
//     //         //     //         case "mcsEaseOut":
//     //         //     //         default:
//     //         //     //             var f = (n /= r) * n,
//     //         //     //                 e = f * n;
//     //         //     //             return t + i * (.499999999999997 * e * f + -2.5 * f * f + 5.5 * e + -6.5 * f + 4 * n)
//     //         //     //     }
//     //         //     // }
//     //         //     // var p;
//     //         //     // n._mTween || (n._mTween = {
//     //         //     //     top: {},
//     //         //     //     left: {}
//     //         //     // });
//     //         //     var h, c, e = e || {},
//     //         //         g = e.onStart || function() {},
//     //         //         nt = e.onUpdate || function() {},
//     //         //         tt = e.onComplete || function() {},
//     //         //         it = w(),
//     //         //         s = 0,
//     //         //         l = n.offsetTop,
//     //         //         y = n.style,
//     //         //         o = n._mTween[t];
//     //         //     "left" === t && (l = n.offsetLeft);
//     //         //     p = i - l;
//     //         //     o.stop = 0;
//     //         //     "none" !== f && k();
//     //         //     b()
//     //         // },
//     //         // w = function() {
//     //         //     return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
//     //         // },
//     //         // pi = function() {
//     //         //     var n = this,
//     //         //         r, i, t;
//     //         //     for (n._mTween || (n._mTween = {
//     //         //             top: {},
//     //         //             left: {}
//     //         //         }), r = ["top", "left"], i = 0; i < r.length; i++) t = r[i], n._mTween[t].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(n._mTween[t].id) : clearTimeout(n._mTween[t].id), n._mTween[t].id = null, n._mTween[t].stop = 1)
//     //         // },
//     //         // a = function(n, t) {
//     //         //     try {
//     //         //         delete n[t]
//     //         //     } catch (i) {
//     //         //         n[t] = null
//     //         //     }
//     //         // },
//     //         // yt = function(n) {
//     //         //     return !(n.which && 1 !== n.which)
//     //         // },
//     //         // nt = function(n) {
//     //         //     var t = n.originalEvent.pointerType;
//     //         //     return !(t && "touch" !== t && 2 !== t)
//     //         // },
//     //         // tt = function(n) {
//     //         //     return !isNaN(parseFloat(n)) && isFinite(n)
//     //         // },
//     //         // f = function(n) {
//     //         //     var t = n.parents(".mCSB_container");
//     //         //     return [n.offset().top - t.offset().top, n.offset().left - t.offset().left]
//     //         // },
//     //         wi = function() {
//     //             function t() {
//     //                 var t = ["webkit", "moz", "ms", "o"],
//     //                     n;
//     //                 if ("hidden" in document) return "hidden";
//     //                 for (n = 0; n < t.length; n++)
//     //                     if (t[n] + "Hidden" in document) return t[n] + "Hidden";
//     //                 return null
//     //             }
//     //             var n = t();
//     //             return n ? document[n] : !1
//     //         };
//     //     // n.fn[c] = function(t) {
//     //     //     return s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist") : s.init.apply(this, arguments)
//     //     // };
//     //     n[c] = function(t) {
//     //         return s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist") : s.init.apply(this, arguments)
//     //     };
//     //     n[c].defaults = ot;
//     //     window[c] = !0;
//     //     n(window).bind("load", function() {
//     //         n(it)[c]();
//     //         n.extend(n.expr[":"], {
//     //             // mcsInView: n.expr[":"].mcsInView || function(t) {
//     //             //     var e, r, i = n(t),
//     //             //         u = i.parents(".mCSB_container");
//     //             //     if (u.length) return e = u.parent(), r = [u[0].offsetTop, u[0].offsetLeft], r[0] + f(i)[0] >= 0 && r[0] + f(i)[0] < e.height() - i.outerHeight(!1) && r[1] + f(i)[1] >= 0 && r[1] + f(i)[1] < e.width() - i.outerWidth(!1)
//     //             // },
//     //             // mcsInSight: n.expr[":"].mcsInSight || function(t, i, r) {
//     //             //     var e, u, o, s, h = n(t),
//     //             //         c = h.parents(".mCSB_container"),
//     //             //         l = "exact" === r[3] ? [
//     //             //             [1, 0],
//     //             //             [1, 0]
//     //             //         ] : [
//     //             //             [.9, .1],
//     //             //             [.6, .4]
//     //             //         ];
//     //             //     if (c.length) return e = [h.outerHeight(!1), h.outerWidth(!1)], o = [c[0].offsetTop + f(h)[0], c[0].offsetLeft + f(h)[1]], u = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], s = [e[0] < u[0] ? l[0] : l[1], e[1] < u[1] ? l[0] : l[1]], o[0] - u[0] * s[0][0] < 0 && o[0] + e[0] - u[0] * s[0][1] >= 0 && o[1] - u[1] * s[1][0] < 0 && o[1] + e[1] - u[1] * s[1][1] >= 0
//     //             // },
//     //             // mcsOverflow: n.expr[":"].mcsOverflow || function(i) {
//     //             //     var r = n(i).data(t);
//     //             //     if (r) return r.overflowed[0] || r.overflowed[1]
//     //             // }
//     //         })
//     //     })
//     // })
// });
// $(document).ready(function() {
//     var n = "",
//         t = $(".menu-slider-w-index .item").length;
//     $("body").on("click", '.right:not(".disabled")', function() {
//         var i, r, u, f;
//         i = $(".menu-slider-w-index .item.active").index();
//         r = $(".menu-slider-w-index .item").outerWidth();
//         $(".menu-slider-w-index .item").removeClass("active");
//         u = t - (i + 1);
//         u > 13 ? (n = r * (i + 6), $(".menu-slider-w-index .item:nth-child(" + (i + 7) + ")").addClass("active")) : (f = u - 5, n = r * (i + f), $(".menu-slider-w-index .item:nth-child(" + (i + 1 + f) + ")").addClass("active"));
//         $(".main").animate({
//             left: -n
//         });
//         n >= r * 8 ? ($(this).addClass("disabled"), $(".left").removeClass("disabled")) : $(this).removeClass("disabled");
//         $(".left").removeClass("disabled")
//     });
//     $("body").on("click", '.left:not(".disabled")', function() {
//         var n = $(".menu-slider-w-index .item.active").index(),
//             e = $(".main").css("left"),
//             r = $(".menu-slider-w-index .item").outerWidth(),
//             u = parseInt(e),
//             f, i, o;
//         $(".menu-slider-w-index .item").removeClass("active");
//         f = t - (n + 1);
//         n > 10 ? (i = u + r * 6, $(".menu-slider-w-index .item:nth-child(" + (n - 5) + ")").addClass("active")) : (o = f - 5, i = u + r * n);
//         $(".main").animate({
//             left: i
//         });
//         i >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled")) : $(".right").removeClass("disabled")
//     })
// });
// $(document).on("click", function(n) {
//     $(n.target).closest(".pol-holder-list").length === 0 && $(".self-dropdown").hide()
// });
// $(document).ready(function() {
//     var i, n, t;
//     if ($(".footer_heads").click(function() {
//             $(this).toggleClass("fooacc_ans_active");
//             var n = $(this).hasClass("fooacc_ans_active");
//             n == !0 && ($(".footer_heads").removeClass("fooacc_ans_active"), $(this).addClass("fooacc_ans_active"))
//         }), $(".dd-link").click(function() {
//             var n = $(this).parent().find(".self-dropdown").css("display");
//             n == "none" ? ($(".self-dropdown").hide(), $(this).parent().find(".self-dropdown").show()) : $(this).parent().find(".self-dropdown").hide()
//         }), $(".dropdown-list li").click(function() {
//             var t = $(this).text(),
//                 n = $(this).attr("id");
//             $(".selectTravellers").css("pointer-events", "inherit").show();
//             $(this).parents(".self-dropdown").hide();
//             $(this).parents(".self-dropdown").prev().text(t);
//             n == 1 && ($(".dd-link.d-fam").text("Select Parents"), $(".indi-drop").addClass("dis-none"));
//             n == 2 ? ($(".indi-drop").removeClass("dis-none").show(), $(".selectTravellers").addClass("dis-none").hide(), $(".pol-holder").addClass("pol-holder-70"), $(".pol-holder-list").addClass("parentList")) : ($(".pol-holder").removeClass("pol-holder-70"), $(".pol-holder-list").removeClass("parentList"), $(".forFamily").hide(), $(".indi-drop").hide())
//         }), $(".chkBox").change(function() {
//             $(this).prop("checked") == !0 && $(this).parent().next().find(".custom-form").focus()
//         }), i = $(window).width(), i >= 768) {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right-new:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 f, u;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (i + 1);
//             f > 12 ? (n = r * (i + 6), $(".in-home-menu-slider .items:nth-child(" + (i + 7) + ")").addClass("active")) : (u = t - 6, n = r * (i + u), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + u) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n >= r * 2 ? ($(this).addClass("disabled"), $(".left-new").removeClass("disabled")) : $(this).removeClass("disabled");
//             $(".right-new").addClass("disabled")
//         });
//         $("body").on("click", '.left-new:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 u = $(".in-home-menu-slider .items").outerWidth(),
//                 f = parseInt(e),
//                 r, n, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             r = t - (i + 1);
//             r > 5 ? (n = f + u * 6, $(".in-home-menu-slider .items:nth-child(" + (i - 5) + ")").addClass("active")) : (o = r - 6, n = f + u * i, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: n
//             });
//             n >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled"), $(".right-new").removeClass("disabled")) : $(".right-new").removeClass("disabled")
//         })
//     } else if (i < 768 && i > 480) {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right-new:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 f, u;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (i + 1);
//             f > 4 ? (n = r * (i + 3), $(".in-home-menu-slider .items:nth-child(" + (i + 4) + ")").addClass("active")) : (u = t - 6, n = r * (i + u), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + u) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n > r * 4 ? ($(this).addClass("disabled"), $(".left-new").removeClass("disabled")) : ($(this).removeClass("disabled"), $(".left-new").removeClass("disabled"))
//         });
//         $("body").on("click", '.left-new:not(".disabled")', function() {
//             var n = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u = parseInt(e),
//                 f, i, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (n + 1);
//             n > 4 ? (i = u + r * 3, $(".in-home-menu-slider .items:nth-child(" + (n - 2) + ")").addClass("active")) : (o = f - 6, i = u + r * n, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: i
//             });
//             i >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled")) : $(".right-new").removeClass("disabled")
//         })
//     } else {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right-new:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u, f;
//             $(".in-home-menu-slider .items").removeClass("active");
//             u = t - (i + 1);
//             u > 5 ? (n = r * (i + 2), $(".in-home-menu-slider .items:nth-child(" + (i + 3) + ")").addClass("active")) : u > 3 ? (n = r * (i + 2), $(".in-home-menu-slider .items:nth-child(" + (i + 3) + ")").addClass("active")) : (f = t - 6, n = r * (i + f), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + f) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n > r * 5 ? ($(this).addClass("disabled"), $(".left-new").removeClass("disabled")) : ($(this).removeClass("disabled"), $(".left-new").removeClass("disabled"))
//         });
//         $("body").on("click", '.left-new:not(".disabled")', function() {
//             var n = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u = parseInt(e),
//                 f, i, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (n + 1);
//             n > 5 ? (i = u + r * 2, $(".in-home-menu-slider .items:nth-child(" + (n - 1) + ")").addClass("active")) : n > 3 ? (i = u + r * 2, $(".in-home-menu-slider .items:nth-child(" + (n - 1) + ")").addClass("active")) : (o = f - 6, i = u + r * n, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: i
//             });
//             i >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled")) : $(".right-new").removeClass("disabled")
//         })
//     }
//     if (i = $(window).width(), i >= 768) {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 f, u;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (i + 1);
//             f > 12 ? (n = r * (i + 6), $(".in-home-menu-slider .items:nth-child(" + (i + 7) + ")").addClass("active")) : (u = t - 6, n = r * (i + u), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + u) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n >= r * 2 ? ($(this).addClass("disabled"), $(".left").removeClass("disabled")) : $(this).removeClass("disabled");
//             $(".right").addClass("disabled")
//         });
//         $("body").on("click", '.left:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 u = $(".in-home-menu-slider .items").outerWidth(),
//                 f = parseInt(e),
//                 r, n, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             r = t - (i + 1);
//             r > 5 ? (n = f + u * 6, $(".in-home-menu-slider .items:nth-child(" + (i - 5) + ")").addClass("active")) : (o = r - 6, n = f + u * i, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: n
//             });
//             n >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled"), $(".right").removeClass("disabled")) : $(".right").removeClass("disabled")
//         })
//     } else if (i < 1024 && i > 480) {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 f, u;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (i + 1);
//             f > 4 ? (n = r * (i + 3), $(".in-home-menu-slider .items:nth-child(" + (i + 4) + ")").addClass("active")) : (u = t - 6, n = r * (i + u), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + u) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n > r * 4 ? ($(this).addClass("disabled"), $(".left").removeClass("disabled")) : ($(this).removeClass("disabled"), $(".left").removeClass("disabled"))
//         });
//         $("body").on("click", '.left:not(".disabled")', function() {
//             var n = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u = parseInt(e),
//                 f, i, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (n + 1);
//             n > 4 ? (i = u + r * 3, $(".in-home-menu-slider .items:nth-child(" + (n - 2) + ")").addClass("active")) : (o = f - 6, i = u + r * n, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: i
//             });
//             i >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled")) : $(".right").removeClass("disabled")
//         })
//     } else {
//         n = "";
//         t = $(".in-home-menu-slider .items").length;
//         $("body").on("click", '.right:not(".disabled")', function() {
//             var i = $(".in-home-menu-slider .items.active").index(),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u, f;
//             $(".in-home-menu-slider .items").removeClass("active");
//             u = t - (i + 1);
//             u > 5 ? (n = r * (i + 2), $(".in-home-menu-slider .items:nth-child(" + (i + 3) + ")").addClass("active")) : u > 3 ? (n = r * (i + 2), $(".in-home-menu-slider .items:nth-child(" + (i + 3) + ")").addClass("active")) : (f = t - 6, n = r * (i + f), $(".in-home-menu-slider .items:nth-child(" + (i + 1 + f) + ")").addClass("active"));
//             $(".main").animate({
//                 left: -n
//             });
//             n > r * 5 ? ($(this).addClass("disabled"), $(".left").removeClass("disabled")) : ($(this).removeClass("disabled"), $(".left").removeClass("disabled"))
//         });
//         $("body").on("click", '.left:not(".disabled")', function() {
//             var n = $(".in-home-menu-slider .items.active").index(),
//                 e = $(".main").css("left"),
//                 r = $(".in-home-menu-slider .items").outerWidth(),
//                 u = parseInt(e),
//                 f, i, o;
//             $(".in-home-menu-slider .items").removeClass("active");
//             f = t - (n + 1);
//             n > 5 ? (i = u + r * 2, $(".in-home-menu-slider .items:nth-child(" + (n - 1) + ")").addClass("active")) : n > 3 ? (i = u + r * 2, $(".in-home-menu-slider .items:nth-child(" + (n - 1) + ")").addClass("active")) : (o = f - 6, i = u + r * n, $(".in-home-menu-slider .items:first-child()").addClass("active"));
//             $(".main").animate({
//                 left: i
//             });
//             i >= 0 ? ($(".main").removeAttr("style"), $(this).addClass("disabled")) : $(".right").removeClass("disabled")
//         })
//     }
//     $(".parent-p-title a").click(function() {
//         $(this).parents(".panel-default").hasClass("active") == !1 && $(".panel-default").removeClass("active");
//         $(this).parents(".panel-default").toggleClass("active")
//     });
//     $(".more-products").click(function() {
//         $(".step.active").removeClass("active");
//         $(this).parents(".step").next().addClass("active");
//         $(".btn-radio.active").removeClass("active");
//         $(this).parents(".on-mob-only").find(".radio-btn-menu").children(".btn-radio:last").addClass("active")
//     });
//     $("#next-N").click(function() {
//         var n = $(this).attr("data-rel");
//         $(".step").removeClass("active");
//         $(n).addClass("active");
//         $(".btn-radio.active").removeClass("active");
//         $(this).addClass("active")
//     })
// });
// $(document).ready(function() {
//     $(".mjPosition").hide();
//     $(".youTscreen .icon-play").on("click touchstart", function() {
//         var n = $("#video-carousel .item.active img").attr("data-url");
//         $(".youtubePopup").prepend('<iframe frameborder="0" height="100%" width="100%" src="' + n + '" allowfullscreen><\/iframe>');
//         setTimeout(function() {
//             $(".youtubePopup").show()
//         }, 300)
//     });
//     $(".youtubeclose").click(function() {
//         $(".youtubePopup").hide();
//         $(".youtubePopup iframe").remove()
//     });
//     $(".select-wrapper .caret").text("");
//     $("select").material_select();
//     $(".navbar-nav .icon-menu").click(function(n) {
//         n.preventDefault();
//         $("#left-menu .menu-overlay").fadeIn();
//         $(".left-new-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#left-menu .icon-close-menu, #left-menu .menu-overlay").click(function() {
//         $("#left-menu .menu-overlay").fadeOut();
//         $(".left-new-menu-content").removeClass("visible");
//         $("body").removeAttr("style")
//     });
//     $(".navbar-nav .icon-help").click(function(n) {
//         n.preventDefault();
//         $("#right-menu .menu-overlay").fadeIn();
//         $(".right-new-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#right-menu .icon-arrow-down, #right-menu .menu-overlay").click(function() {
//         $("#right-menu .menu-overlay").fadeOut();
//         $(".right-new-menu-content").removeClass("visible");
//         $("body").removeAttr("style")
//     })
// });
$.fn.wangfullpage = function(n) {
    function t() {
        $(".mjfullpage").each(function() {
            var t = $(this),
                i = t.find(n.boxItems),
                r = t.offset().top - 60,
                u = $(window).scrollTop(),
                e = $(window).height(),
                o, s, f;
            t.css({
                height: $(window).height() * i.length
            });
            0 == t.find(n.position).length && (t.append('<div class="mjPosition"><\/div>'), i.each(function() {
                t.find(n.position).append('<a class="mjPosition-items" href="javascript:;"><span><\/span><\/a>');
                $("#why-policyt").addClass("gud")
            }), $PosHieght = t.find(n.position).height(), t.find(n.position).css({
                "margin-top": -($PosHieght + 20) / 2
            }));
            o = u >= r && u <= r + t.height() - e ? "fixed" : "absolute";
            (i.each(function(n) {
                $(this).css({
                    height: e,
                    position: o,
                    width: "100%",
                    top: 0,
                    left: 0,
                    "z-index": Math.abs(n - i.length)
                })
            }), "absolute" == o) ? (t.find(n.position).hide(), u > r && i.last().css({
                top: "auto",
                bottom: 0,
                opacity: 1
            })) : (t.find(n.position).show(), s = parseInt((u - r) / (e / 1.5)), f = u >= r ? s : 0, s >= i.length && (f = i.length - 1), i.removeClass("cur").eq(f).addClass("cur"), t.find(".mjPosition a").removeClass("cur").eq(f).addClass("cur"))
        })
    }
    var n = $.extend({
        box: ".mjfullpage",
        boxItems: ".mjfullpage-items",
        position: ".mjPosition"
    }, n);
    $(document).on("click", ".mjfullpage .mjPosition a", function() {
        if ($(this).hasClass("cur")) return !1;
        var n = $(this).index(),
            t = $(this).parents(".mjfullpage").offset().top;
        $("body,html").animate({
            scrollTop: t + n * $(window).height() / 1.5
        })
    });
    $(window).resize(t);
    $(window).scroll(t)
};
$(".mjfullpage").wangfullpage();
// $(document).ready(function() {});
// browser = {
//     isIe: function() {
//         return navigator.appVersion.indexOf("MSIE") != -1
//     },
//     navigator: navigator.appVersion,
//     getVersion: function() {
//         var n = 999;
//         return navigator.appVersion.indexOf("MSIE") != -1 && (n = parseFloat(navigator.appVersion.split("MSIE")[1])), n
//     }
// };
// browser.isIe() && browser.getVersion() <= 9 && $(".input-field input").click(function() {
//     $(this).select()
// });
// $(document).ready(function() {
//     $(".navbar-nav .icon-menu").click(function(n) {
//         n.preventDefault();
//         $("#left-menu .menu-overlay").fadeIn();
//         $(".left-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#left-menu .icon-close-menu, #left-menu .menu-overlay").click(function() {
//         $("#left-menu .menu-overlay").fadeOut();
//         $(".left-menu-content").removeClass("visible");
//         $("body").css("overflow", "auto")
//     });
//     $(".navbar-nav .icon-help").click(function(n) {
//         n.preventDefault();
//         $("#right-menu .menu-overlay").fadeIn();
//         $(".right-new-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#right-menu .icon-arrow-down, #right-menu .menu-overlay").click(function() {
//         $("#right-menu .menu-overlay").fadeOut();
//         $(".right-new-menu-content").removeClass("visible");
//         $("body").css("overflow", "auto")
//     });
//     $(".tooltipped").tooltip({
//         delay: 50
//     });
//     $("body").on("click", "a.go-back-btn", function() {
//         var n = $(this).parents(".wt-right-blk").parent().attr("class"),
//             t = n.split("-"),
//             i = parseInt(t[2]) - 1;
//         $('[class*="wt-qstep-"]').hide();
//         $(".wt-qstep-" + i).show()
//     });
//     $("input.re-form").on("keypress blur", function() {
//         var n = $(this).val();
//         n != "" ? $(this).next().addClass("focsin") : $(this).next().removeClass("focsin")
//     })
// });
// $(window).scroll(function() {
//     var r = $(window).width(),
//         u = $(window).scrollTop(),
//         n, t, i;
//     n = r > 1279 ? 20 : 54;
//     u > $("#myNavbar").height() ? ($("#top-nav-2").addClass("navbar-fixed-top"), t = $(".prod-carousel").hasClass("faq-menu"), i = t == !0 ? 0 : $("#myNavbar").height() + n, $(".prod-carousel,.fm-dtls").css({
//         top: 0,
//         "margin-top": i
//     })) : ($("#top-nav-2").removeClass("navbar-fixed-top"), $(".prod-carousel,.fm-dtls").css({
//         top: 0,
//         "margin-top": "0"
//     }))
// });
// $(document).ready(function() {
//     $(".addMenu").click(function() {
//         var n = $(".submenu-content").css("display");
//         n == "none" ? ($(this).addClass("active"), $(".submenu-content").slideDown(), $(".left-new-menu-link").css("padding-bottom", 0), $(".down-app").css("position", "relative")) : ($(".submenu-content").slideUp(function() {
//             $(".addMenu").removeClass("active")
//         }), $(".down-app").css("position", "fixed"), $(".left-new-menu-link").removeAttr("style"))
//     });
//     $(".ad-blk em").click(function() {
//         $(this).toggleClass("active")
//     })
// });
// $(window).scroll(function() {
//     var t = $(window).width(),
//         n;
//     t > 1279 && (n = $(window).scrollTop(), n > 0)
// });
// $(document).ready(function() {
//     $(".menu-txt .icon-close").click(function() {
//         $("#left-menu, #left-menu .menu-overlay").fadeOut()
//     });
//     var n = $(window).width();
//     n < 1280 && $(".menu-txt .icon-close").click(function() {
//         $("body").css({
//             overflow: "auto"
//         })
//     });
//     $("#jump_step1").click(function() {
//         $("#step-2").hide()
//     });
//     $("#jump_step1").click(function() {
//         $("#step-1").show()
//     });
//     $("#jump_step2").click(function() {
//         $("#step-1").hide()
//     });
//     $("#jump_step2").click(function() {
//         $("#step-2").show()
//     })
// });
// $(window).scroll(function() {
//     var n = $(window).scrollTop(),
//         t = $(window).width();
//     t > 1279 ? n > $("#myNavbar").height() ? ($("#top-nav-2").addClass("navbar-fixed-top"), $(".navbar-brand img").css({
//         top: 0,
//         "-webkit-transition": "all .1s ease-in-out",
//         transition: "all .1s ease-in-out"
//     })) : ($("#top-nav-2").removeClass("navbar-fixed-top"), $(".navbar-brand img").css({
//         top: 26,
//         "-webkit-transition": "all .1s ease-in-out",
//         transition: "all .1s ease-in-out"
//     })) : n > $("#myNavbar").height() ? ($("#top-nav-2").addClass("navbar-fixed-top"), $(".prod-menu-blk").css({
//         top: 0,
//         "padding-top": 54
//     })) : ($("#top-nav-2").removeClass("navbar-fixed-top"), $(".prod-menu-blk").css({
//         top: 0,
//         "margin-top": 0
//     }));
//     t > 1279 && (n > 40 ? ($(".static-content").addClass("fixedlink"), $("#claim-cont").css({
//         top: 200
//     })) : ($(".static-content").removeClass("fixedlink"), $("#carousel-rg").css("height", "auto"), $("#claim-cont").removeAttr("style")))
// });
// $(document).ready(function() {
//     mobviewNav()
// });
// $(window).resize(function() {
//     mobviewNav()
// });
// $(document).ready(function() {
//         $("a.claim-details").click(function() {
//             var n = $(this).attr("data-rel");
//             $(".claims-details-show").hide();
//             $(n).toggle()
//         });
//         $("a.claim-details").click(function() {
//             $("a.claim-details.current").removeClass("current");
//             $(this).addClass("current")
//         });
//         $("#claim-process-int").click(function() {
//             var n = $("#claimProcess").offset(),
//                 i = $(".static-content").hasClass("fixedlink"),
//                 r = $(window).width(),
//                 t = "";
//             varoffset = i == !0 ? n.top - 150 : n.top - 204;
//             t = r > 1279 ? varoffset : n.top - 50;
//             $("html,body").stop().animate({
//                 scrollTop: t
//             }, 500);
//             $(".claim-show-nav li").removeClass("active");
//             $(this).parent().addClass("active")
//         })
//     }),
    // function(n, t) {
    //     function u() {
    //         i.$carouselContainer.find("ol.carousel-indicators").addClass("indicators-fix");
    //         i.$thumbnailsLi.first().addClass("active-thumbnail");
    //         r.backgroundControl ? i.$controls.height(i.$carouselContainer.find(".carousel-inner").height()) : i.$carouselContainer.find(".carousel-control").addClass("controls-background-reset");
    //         r.center && i.$thumbnailsLi.wrapAll("<div class='center clearfix'><\/div>")
    //     }

    //     function f(n) {
    //         i.$thumbnailsLi.removeClass("active-thumbnail");
    //         i.$thumbnailsLi.eq(t(n).index()).addClass("active-thumbnail")
    //     }

    //     function e() {
    //         i.$carouselContainer.on("slide.bs.carousel", function(n) {
    //             f(n.relatedTarget)
    //         });
    //         i.$thumbnailsLi.click(function() {
    //             i.$carouselContainer.carousel(t(this).index())
    //         })
    //     }
    //     var r = {
    //             center: !0,
    //             backgroundControl: !1
    //         },
    //         i = {
    //             $carouselContainer: t(".thumbnails-carousel").parent(),
    //             $thumbnailsLi: t(".thumbnails-carousel li"),
    //             $controls: t(".thumbnails-carousel").parent().find(".carousel-control")
    //         };
    //     t.fn.thumbnailsCarousel = function(n) {
    //         return r = t.extend(r, n), u(), e(), this
    //     }
    // }(window, jQuery);
// $(".thumbnails-carousel").thumbnailsCarousel();
// $("#carousel-example-generic").carousel({
//     interval: 4e5
// });
// $(document).ready(function() {
//     var n = $("div").hasClass("product-Block");
//     n == !0 && $(".center1001").slick({
//         dots: !0,
//         infinite: !1,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 dots: !0
//             }
//         }, {
//             breakpoint: 990,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         }, {
//             breakpoint: 481,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: !0
//             }
//         }]
//     })
// });
// $(document).ready(function() {
//     var n = $("#productBlock .main_box").outerWidth,
//         t = $("#productBlock .main_box").length,
//         i = n * t;
//     $(".slick-track").css({
//         margin: "auto",
//         width: i
//     })
// });
// getVideoBlk = $("div#youtube-list").attr("id");
// getVideoBlk == "youtube-list" && $("#video-carousel.carousel").swipe({
//     swipe: function(n, t) {
//         t == "left" && $(this).carousel("next");
//         t == "right" && $(this).carousel("prev")
//     },
//     allowPageScroll: "vertical"
// });
// $(document).ready(function() {
//     $(".claim-details-btn").click(function() {
//         $(this).fadeOut(function() {
//             $(".viewdetail-content").slideDown()
//         })
//     });
//     $(".view-less-btn").click(function() {
//         $(".viewdetail-content").slideUp(function() {
//             $(".claim-details-btn").fadeIn()
//         })
//     })
// });
// $(".panel-group").on("hidden.bs.collapse", toggleIcon);
// $(".panel-group").on("shown.bs.collapse", toggleIcon);
// $(document).ready(function() {
//     var n = $(window).width();
//     n < 1279 && $("select").is("#tabIndex1") && $("select#tabIndex1").material_select();
//     $(".navbar-nav .icon-menu").click(function(n) {
//         n.preventDefault();
//         $("#left-menu .menu-overlay").fadeIn();
//         $(".left-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#left-menu .disable-text, #left-menu .menu-overlay").click(function() {
//         $("#left-menu .menu-overlay").fadeOut();
//         $(".left-menu-content").removeClass("visible");
//         $("body").removeAttr("style")
//     });
//     $(".navbar-nav .icon-help").click(function(n) {
//         n.preventDefault();
//         $("#right-menu .menu-overlay").fadeIn();
//         $(".right-menu-content").addClass("visible");
//         $("body").css("overflow", "hidden")
//     });
//     $("#right-menu .icon-arrow-down, #right-menu .menu-overlay").click(function() {
//         $("#right-menu .menu-overlay").fadeOut();
//         $(".right-menu-content").removeClass("visible");
//         $("body").removeAttr("style")
//     })
// });
// $(window).scroll(function() {
//     navItemDispNew()
// });
// $(window).resize(function() {
//     $(".drop-menu").width($(this).width())
// }).resize();
// $(window).scroll(function() {
//     var n = $(window).width(),
//         t = $(window).scrollTop();
//     n < 1279 && (t > 0 ? $("#top-nav-2").addClass("navbar-fixed-top") : $(".cfFluid").css({
//         "margin-top": 54,
//         position: "relative"
//     }))
// });
$(document).ready(function() {
    // function r() {
    //     /^[0-9]{6}$/.test($("#zipCode").val()) ? $(".err-frm").hide() : $(".err-frm").show()
    // }
    // var t = $("#fullname"),
    //     i = $("#fullemail"),
    //     u = $("#fullemail").val(),
    //     n = $("#fullmob");
    // filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // $("#fullname").on("blur", function() {
    //     if (t.val() == "") {
    //         var n = t.parent().find("div").hasClass("form-error");
    //         n == !1 && t.parent().append('<div class="form-error">Please enter name<\/div>')
    //     } else t.parent().find(".form-error").remove(".form-error")
    // });
    // $("#fullemail").on("blur", function() {
    //     var n = $("#fullemail").val(),
    //         t;
    //     n != "" && filter.test(n) ? i.parent().find(".form-error").remove(".form-error") : (t = i.parent().find("div").hasClass("form-error"), t == !1 && i.parent().append('<div class="form-error">Please enter valid email address<\/div>'))
    // });
    // $("#fullmob").on("blur", function() {
    //     if (n.val() == "" || isNaN(n.val()) || n.val().length < 10) {
    //         var t = n.parent().find("div").hasClass("form-error");
    //         t == !1 && n.parent().append('<div class="form-error">Please enter valid mobile number<\/div>')
    //     } else n.parent().find(".form-error").remove(".form-error")
    // });
    // $("#pinVerify").click(function() {
    //     r()
    // });
    // $(".resp_close").click(function() {
    //     $("#claim-ins").hide()
    // });
    // $(".state-dropdown .dropdown-menu a").click(function() {
    //     var n = $(this).text();
    //     $(this).parents(".state-dropdown").children(".dropdown-toggle").html(n + '<span class="caret caret-new"><\/span>')
    // });
    // $(".brand-dropdown .dropdown-menu a").click(function() {
    //     var n = $(this).text();
    //     $(this).parents(".brand-dropdown").children(".dropdown-toggle").html(n + '<span class="caret caret-new"><\/span>')
    // });
    // $(".scroll-page li a").click(function() {
    //     getDataId = $(this).attr("href");
    //     $("html,body").animate({
    //         scrollTop: $(getDataId).offset().top - 50
    //     }, "slow")
    // });
    // $(".drop-list li").click(function() {
    //     getText = $(this).text();
    //     $(this).parents(".drop-list").prev().val(getText);
    //     $(this).parents(".drop-list").hide();
    //     getDataUrl = $(this).attr("rel");
    //     $("html,body").animate({
    //         scrollTop: $(getDataUrl).offset().top - 50
    //     }, "slow")
    // });
    // $("body").on("click", function() {
    //     $(".drop-list").hide()
    // });
    // $(".drop-input").click(function() {
    //     event.stopPropagation();
    //     $(this).next().show()
    // });
    // $(".mjfullpage-items .mouseDown a").click(function(n) {
    //     n.preventDefault();
    //     $("html, body").animate({
    //         scrollTop: $(".Skip-section").offset().top + 1
    //     }, 1e3)
    // });
    // $(".drop-lists").on("focus", function(n) {
    //     n.stopPropagation();
    //     n.preventDefault();
    //     $(this).parents(".input-field").find(".city-name").show()
    // });
    // $(".city-name li").click(function() {
    //     var n = $(this).text();
    //     $(this).parents(".input-field").find(".drop-lists").val(n);
    //     $(this).parent().hide();
    //     $(this).parent().prev().addClass("active")
    // });
    // $(".drop-value").click(function(n) {
    //     n.stopPropagation();
    //     n.preventDefault();
    //     $(this).next().show()
    // });
    // $(".drop-lists li").click(function() {
    //     var n = $(this).text();
    //     $(this).parent().hide();
    //     $(this).parent().prev().text(n)
    // })
});
// checkitem = function() {
//     var n, t;
//     n = $("#myCarousel");
//     t = $("#myCarousel .carousel-inner .item").length;
//     t == 1 && n.children(".carousel-control").hide()
// };
// $("#myCarousel").on("slid.bs.carousel", "", checkitem());
// $(".mob-view-cross").click(function() {
//     $("#modalOtp").hide()
// });
// $(window).resize(function() {
//     $(window).width() < 1280 && $(".dwnld-tab .nav-tabs li a").click(function() {
//         var n = $(this).text();
//         $(this).parents(".nav.nav-tabs").prev(".drop-value").text(n);
//         $(this).parents(".nav.nav-tabs").hide()
//     })
// });
// $(document).ready(function() {
//     $("[id^=zipCode]").keypress(validateNumber)
// });
// $(document).ready(function() {
//     var t = $("#ulHead").hasClass("ul-head-claim");
//     if (t == !0) {
//         var n = $(".ul-head-claim").offset().top,
//             r = $("#testimonials").offset().top,
//             i = $(".for-mob-only").height() - 100;
//         $(window).scroll(function() {
//             var t = $(window).scrollTop();
//             t + 50 >= n && t < n + i ? $(".ul-head-claim").addClass("fixed") : $(".ul-head-claim").removeClass("fixed")
//         })
//     }
//     $("input.input-effect").on("keypress blur", function() {
//         var n = $(this).val();
//         n != "" ? $(this).next().addClass("focsinn") : $(this).next().removeClass("focsinn")
//     })
// });
// $(document).ready(function() {
//     $(".typeahead").on("focus", function() {
//         var n = $(this).attr("id");
//         $('label[for="' + n + '"]').addClass("focusinn")
//     });
//     $(".typeahead").on("blur", function() {
//         var n = $(this).attr("id");
//         $(this).val() == "" && $('label[for="' + n + '"]').removeClass("focusinn")
//     });
//     $(" .need-help-contact a").hover(function() {
//         $(this).children(".responsive-align-center").find("h3").css("color", "#e42125")
//     }, function() {
//         $(this).children(".responsive-align-center").find("h3").css("color", "#000")
//     })
// });
// // $("#btnFormSubmit").click(function() {
// //     $(".form-error").hide();
// //     var n;
// //     return RequiredField("#txtName", " Enter Name", "#divErrName", "") ? $("#txtName").val().length < 3 && ($("#divErrName").html("Please enter valid name"), $("#divErrName").show(), n = !1) : n = !1, RequiredField("#txtEmail", " Enter email id", "#divErrEmail", "") ? CheckIfValidEmail("#txtEmail", " Enter correct email id", "#divErrEmail", "") || (n = !1) : n = !1, RequiredField("#txtMobile", " Enter mobile no", "#divErrMobile", "") ? MobileNoNew("#txtMobile", " Enter correct mobile no", "#divErrMobile", "") || (n = !1) : n = !1, n
// // });
// rawUrl = window.location.pathname;
// curr = 0;
// $(document).ready(function() {
//     $("select#tabIndex1").material_select()
// });
// window.onscroll = function() {
//     scrollFunction()
// };
// $("#readmore-content").click(function() {
//     $("#read-content").toggle()
// });
// $(document).ready(function() {
//     $(window).width() < 1280 && $(".dwnld-tab .nav-tabs li a").click(function() {
//         var n = $(this).text();
//         $(this).parents(".nav.nav-tabs").prev(".drop-value").text(n);
//         $(this).parents(".nav.nav-tabs").hide()
//     })
// });
$(document).ready(function() {
    $(".icon-close").click(function() {
        $(".modal-backdrop.in").hide()
    });
    testOrientation();
    articlesSamehight();
    productSamehight();
    $(".cust-btn-red").click(function() {
        $("html,body").animate({
            scrollTop: $(".refund-list").offset().top - 50
        })
    });
    var n = $(".table-responsive .thead").outerHeight(!0),
        t = $(".table-responsive").offset().top - n,
        i = $(".table-responsive").outerHeight(!0),
        r = t + i;
    window.onscroll = function() {
        var t = $(window).scrollTop(),
            i = $(".table-responsive .thead").outerHeight(!0);
        t > tableOffsetTop && t < tableOffsetBottom - n ? $(".thead").addClass("tableSticky") : $(".thead").removeClass("tableSticky")
    };
    $(".contact-us-form .city-name").click(function() {
        $(".resp_close").show()
    });
    $(".claim-show").hide();
    $(".claim-tabs").click(function() {
        $(".claim-show").toggle()
    });
    $(".banner-container .mouseDown a").click(function(n) {
        n.preventDefault();
        $("html, body").animate({
            scrollTop: $(".product-Block").offset().top + 1
        }, 1e3)
    })
});
// $(window).resize(function() {
//     testOrientation();
//     var n = $(".table-responsive .thead").outerHeight(!0),
//         t = $(".table-responsive").offset().top - n,
//         i = $(".table-responsive").outerHeight(!0),
//         r = t + i;
//     window.onscroll = function() {
//         var t = $(window).scrollTop(),
//             i = $(".table-responsive .thead").outerHeight(!0);
//         t > tableOffsetTop && t < tableOffBottom - n ? $(".thead").addClass("tableSticky") : $(".thead").removeClass("tableSticky")
//     }
// });
// $(window).bind("resizeEnd", function() {
//     winW != $(window).width();
//     productSamehight();
//     articlesSamehight();
//     winW = $(window).width()
// });
// $(window).on("load", function() {});
// $(window).on("unload", function() {
//     $(window).scrollTop(0)
// });
// $(window).scroll(function() {
//     $(this).width() < 640 && $(".front-banner-fix").css("margin-top", "50px")
// })

$(window).on("load", function (e) {

    $('.mjfullpage-items').css({'position':'absolute', 'z-index':'0'});
    //$('.mjPosition').css({'z-index':'-1'});
   
})