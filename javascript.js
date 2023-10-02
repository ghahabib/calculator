	
	jQuery("document").ready(function ($) {
		(function () {
			if (typeof $.fn.slick === "undefined") {
				return false;
			}

			jQuery('input[type="range"]').rangeslider();
		})();
	});

var requirejs, require, define;
!(function (t) {
  function e(t, e) {
    return m.call(t, e);
  }
  function n(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      u,
      l,
      c,
      h,
      f,
      d = e && e.split("/"),
      p = g.map,
      v = (p && p["*"]) || {};
    if (t && "." === t.charAt(0))
      if (e) {
        for (
          d = d.slice(0, d.length - 1),
            t = t.split("/"),
            a = t.length - 1,
            g.nodeIdCompat && b.test(t[a]) && (t[a] = t[a].replace(b, "")),
            t = d.concat(t),
            c = 0;
          c < t.length;
          c += 1
        )
          if (((f = t[c]), "." === f)) t.splice(c, 1), (c -= 1);
          else if (".." === f) {
            if (1 === c && (".." === t[2] || ".." === t[0])) break;
            c > 0 && (t.splice(c - 1, 2), (c -= 2));
          }
        t = t.join("/");
      } else 0 === t.indexOf("./") && (t = t.substring(2));
    if ((d || v) && p) {
      for (n = t.split("/"), c = n.length; c > 0; c -= 1) {
        if (((i = n.slice(0, c).join("/")), d))
          for (h = d.length; h > 0; h -= 1)
            if (((r = p[d.slice(0, h).join("/")]), r && (r = r[i]))) {
              (o = r), (s = c);
              break;
            }
        if (o) break;
        !u && v && v[i] && ((u = v[i]), (l = c));
      }
      !o && u && ((o = u), (s = l)),
        o && (n.splice(0, s, o), (t = n.join("/")));
    }
    return t;
  }
  function i(e, n) {
    return function () {
      return c.apply(t, y.call(arguments, 0).concat([e, n]));
    };
  }
  function r(t) {
    return function (e) {
      return n(e, t);
    };
  }
  function o(t) {
    return function (e) {
      d[t] = e;
    };
  }
  function a(n) {
    if (e(p, n)) {
      var i = p[n];
      delete p[n], (v[n] = !0), l.apply(t, i);
    }
    if (!e(d, n) && !e(v, n)) throw new Error("No " + n);
    return d[n];
  }
  function s(t) {
    var e,
      n = t ? t.indexOf("!") : -1;
    return (
      n > -1 && ((e = t.substring(0, n)), (t = t.substring(n + 1, t.length))),
      [e, t]
    );
  }
  function u(t) {
    return function () {
      return (g && g.config && g.config[t]) || {};
    };
  }
  var l,
    c,
    h,
    f,
    d = {},
    p = {},
    g = {},
    v = {},
    m = Object.prototype.hasOwnProperty,
    y = [].slice,
    b = /\.js$/;
  (h = function (t, e) {
    var i,
      o = s(t),
      u = o[0];
    return (
      (t = o[1]),
      u && ((u = n(u, e)), (i = a(u))),
      u
        ? (t = i && i.normalize ? i.normalize(t, r(e)) : n(t, e))
        : ((t = n(t, e)), (o = s(t)), (u = o[0]), (t = o[1]), u && (i = a(u))),
      {
        f: u ? u + "!" + t : t,
        n: t,
        pr: u,
        p: i,
      }
    );
  }),
    (f = {
      require: function (t) {
        return i(t);
      },
      exports: function (t) {
        var e = d[t];
        return "undefined" != typeof e ? e : (d[t] = {});
      },
      module: function (t) {
        return {
          id: t,
          uri: "",
          exports: d[t],
          config: u(t),
        };
      },
    }),
    (l = function (n, r, s, u) {
      var l,
        c,
        g,
        m,
        y,
        b,
        x = [],
        w = typeof s;
      if (((u = u || n), "undefined" === w || "function" === w)) {
        for (
          r = !r.length && s.length ? ["require", "exports", "module"] : r,
            y = 0;
          y < r.length;
          y += 1
        )
          if (((m = h(r[y], u)), (c = m.f), "require" === c))
            x[y] = f.require(n);
          else if ("exports" === c) (x[y] = f.exports(n)), (b = !0);
          else if ("module" === c) l = x[y] = f.module(n);
          else if (e(d, c) || e(p, c) || e(v, c)) x[y] = a(c);
          else {
            if (!m.p) throw new Error(n + " missing " + c);
            m.p.load(m.n, i(u, !0), o(c), {}), (x[y] = d[c]);
          }
        (g = s ? s.apply(d[n], x) : void 0),
          n &&
            (l && l.exports !== t && l.exports !== d[n]
              ? (d[n] = l.exports)
              : (g === t && b) || (d[n] = g));
      } else n && (d[n] = s);
    }),
    (requirejs =
      require =
      c =
        function (e, n, i, r, o) {
          if ("string" == typeof e) return f[e] ? f[e](n) : a(h(e, n).f);
          if (!e.splice) {
            if (((g = e), g.deps && c(g.deps, g.callback), !n)) return;
            n.splice ? ((e = n), (n = i), (i = null)) : (e = t);
          }
          return (
            (n = n || function () {}),
            "function" == typeof i && ((i = r), (r = o)),
            r
              ? l(t, e, n, i)
              : setTimeout(function () {
                  l(t, e, n, i);
                }, 4),
            c
          );
        }),
    (c.config = function (t) {
      return c(t);
    }),
    (requirejs._defined = d),
    (define = function (t, n, i) {
      n.splice || ((i = n), (n = [])), e(d, t) || e(p, t) || (p[t] = [t, n, i]);
    }),
    (define.amd = {
      jQuery: !0,
    });
})(),
  define("almond", function () {}),
  define("jquery/index", [], function () {
    return window.jQuery;
  }),
  define("jquery", ["jquery/index"], function (t) {
    return t;
  }),
  (function (t, e, n) {
    "use strict";
    var i = t.Sizzle || jQuery.find,
      r = {},
      o = null,
      a = function () {
        e.styleSheets[0] &&
          (o = e.styleSheets[0].cssRules !== n ? "cssRules" : "rules");
      },
      s = function (t, e, o, a, s) {
        if (((t = h(t)), "" != t)) {
          var u;
          a ||
            s ||
            ((u = /^([0-9]*.?[0-9]+)(px|em)$/.exec(o)),
            null != u && ((a = Number(u[1])), a + "" != "NaN" && (s = u[2]))),
            s &&
              (i.compile && i.compile(t),
              r[t] === n && (r[t] = {}),
              r[t][e] === n && (r[t][e] = {}),
              (r[t][e][o] = [a, s]));
        }
      },
      u = function (t, e) {
        var n, i, r;
        for (n in t)
          for (i in t[n])
            if ("string" == typeof t[n][i]) s(n, i, t[n][i]);
            else if ("object" == typeof t[n][i])
              for (r = 0; r < t[n][i].length; r++) s(n, i, t[n][i][r]);
        1 == e && v();
      },
      l = function (t) {
        if (t) {
          var e,
            i,
            r,
            o,
            a,
            u,
            l,
            c,
            h =
              /(\[(min\-width|max\-width|min\-height|max\-height)\~\=('|")([0-9]*.?[0-9]+)(px|em)('|")\])(\[(min\-width|max\-width|min\-height|max\-height)\~\=('|")([0-9]*.?[0-9]+)(px|em)('|")\])?/gi,
            f = t.split(",");
          for (e = 0; e < f.length; e++)
            for (i = null, a = 0, u = 0; 0 == u || null != r; )
              (r = h.exec(f[e])),
                null != r &&
                  ((o = Number(r[4])),
                  o + "" != "NaN" &&
                    (null == i &&
                      ((i = f[e].substring(a, r.index)),
                      (l = f[e].substring(r.index + r[1].length)),
                      l.length > 0 &&
                        ((c = l.indexOf(" ")),
                        0 != c &&
                          (c > 0 && (l = l.substring(0, c)),
                          (l = l.replace(
                            /(\[(min\-width|max\-width|min\-height|max\-height)\~\=('|")([0-9]*.?[0-9]+)(px|em)('|")\])/gi,
                            ""
                          )),
                          (i += l)))),
                    s(i, r[2], r[4] + r[5], o, r[5])),
                  r[7] === n || "" == r[7]
                    ? ((a = r.index + r[1].length), (i = null))
                    : (h.lastIndex = r.index + r[1].length)),
                u++;
        }
      },
      c = function (t, e) {
        if ((null == o && a(), t[o] && t[o].length > 0)) {
          var n = t.ownerNode || t.owningElement;
          if (
            e ||
            (null === n.getAttribute("data-elementquery-bypass") &&
              null === n.getAttribute("data-elementquery-processed"))
          ) {
            var i, r, s;
            for (i = 0; i < t[o].length; i++)
              if (((s = t[o][i]), s[o] && s[o].length > 0))
                for (r = 0; r < s[o].length; r++) l(s[o][r].selectorText);
              else l(s.selectorText);
            n.setAttribute("data-elementquery-processed", "");
          }
        }
      },
      h = function (t) {
        if (null == t) return "";
        var e = "".trim;
        return e && !e.call("\ufeff ")
          ? e.call(t)
          : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      f = function (t, e) {
        var n = t.getAttribute(e);
        return n ? (" " + n + " ").replace(/[\t\r\n]/g, " ") : " ";
      },
      d = function (t, e, n) {
        if (1 === t.nodeType) {
          var i = h(n);
          if ("" != i) {
            var r = f(t, e);
            r.indexOf(" " + i + " ") < 0 && t.setAttribute(e, h(r + i));
          }
        }
      },
      p = function (t, e, n) {
        if (1 === t.nodeType) {
          var i = h(n);
          if ("" != i) {
            for (var r = f(t, e), o = !1; r.indexOf(" " + i + " ") >= 0; )
              (r = r.replace(" " + i + " ", " ")), (o = !0);
            o && t.setAttribute(e, h(r));
          }
        }
      },
      g = function () {
        var t;
        for (t = 0; t < e.styleSheets.length; t++);
        v();
      },
      v = function () {
        var n, o, a, s, u, l, c;
        for (n in r)
          if (((u = i(n)), u.length > 0))
            for (o = 0; o < u.length; o++) {
              l = u[o];
              for (a in r[n])
                for (s in r[n][a])
                  (c = r[n][a][s][0]),
                    "em" == r[n][a][s][1] &&
                      (c *= t.getEmPixels ? getEmPixels(l) : 16),
                    ("min-width" == a && l.offsetWidth >= c) ||
                    ("max-width" == a && l.offsetWidth <= c) ||
                    ("min-height" == a && l.offsetHeight >= c) ||
                    ("max-height" == a && l.offsetHeight <= c)
                      ? d(l, a, s)
                      : p(l, a, s);
            }
        if (!t.addEventListener && t.attachEvent) {
          var h = e.documentElement.className;
          (e.documentElement.className = " " + h),
            (e.documentElement.className = h);
        }
      };
    (t.elementQuery = function (t, e) {
      t && "object" == typeof t
        ? t.cssRules || t.rules
          ? (c(t, !0), 1 == e && v())
          : u(t, e)
        : t || e || v();
    }),
      (t.elementQuery.selectors = function () {
        var t,
          e,
          i,
          o = {};
        for (t in r)
          for (e in r[t])
            for (i in r[t][e])
              o[t] === n && (o[t] = {}),
                o[t][e] === n && (o[t][e] = []),
                (o[t][e][o[t][e].length] = i);
        return o;
      }),
      t.addEventListener
        ? (t.addEventListener("resize", v, !1),
          t.addEventListener("DOMContentLoaded", g, !1),
          t.addEventListener("load", g, !1))
        : t.attachEvent &&
          (t.attachEvent("onresize", v), t.attachEvent("onload", g));
  })(this, document, void 0),
  (function (t, e) {
    "use strict";
    var n = "!important;",
      i =
        "position:absolute" +
        n +
        "visibility:hidden" +
        n +
        "width:1em" +
        n +
        "font-size:1em" +
        n +
        "padding:0" +
        n;
    window.getEmPixels = function (r) {
      var o;
      r ||
        ((r = o = t.createElement("body")),
        (o.style.cssText = "font-size:1em" + n),
        e.insertBefore(o, t.body));
      var a = t.createElement("i");
      (a.style.cssText = i), r.appendChild(a);
      var s = a.clientWidth;
      return o ? e.removeChild(o) : r.removeChild(a), s;
    };
  })(document, document.documentElement),
  define("elementQuery", ["elementQuery/elementQuery"], function (t) {
    return t;
  }),
  define("elementQuery/elementQuery", function () {}),
  (function (t, e, n) {
    var i = window.matchMedia;
    "undefined" != typeof module && module.exports
      ? (module.exports = n(i))
      : "function" == typeof define && define.amd
      ? define("enquire/enquire", [], function () {
          return (e[t] = n(i));
        })
      : (e[t] = n(i));
  })("enquire", this, function (t) {
    "use strict";
    function e(t, e) {
      var n,
        i = 0,
        r = t.length;
      for (i; r > i && ((n = e(t[i], i)), n !== !1); i++);
    }
    function n(t) {
      return "[object Array]" === Object.prototype.toString.apply(t);
    }
    function i(t) {
      return "function" == typeof t;
    }
    function r(t) {
      (this.options = t), !t.deferSetup && this.setup();
    }
    function o(e, n) {
      (this.query = e),
        (this.isUnconditional = n),
        (this.handlers = []),
        (this.mql = t(e));
      var i = this;
      (this.listener = function (t) {
        (i.mql = t), i.assess();
      }),
        this.mql.addListener(this.listener);
    }
    function a() {
      if (!t)
        throw new Error(
          "matchMedia not present, legacy browsers require a polyfill"
        );
      (this.queries = {}), (this.browserIsIncapable = !t("only all").matches);
    }
    return (
      (r.prototype = {
        setup: function () {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function () {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function () {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function () {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function (t) {
          return this.options === t || this.options.match === t;
        },
      }),
      (o.prototype = {
        addHandler: function (t) {
          var e = new r(t);
          this.handlers.push(e), this.matches() && e.on();
        },
        removeHandler: function (t) {
          var n = this.handlers;
          e(n, function (e, i) {
            return e.equals(t) ? (e.destroy(), !n.splice(i, 1)) : void 0;
          });
        },
        matches: function () {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function () {
          e(this.handlers, function (t) {
            t.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function () {
          var t = this.matches() ? "on" : "off";
          e(this.handlers, function (e) {
            e[t]();
          });
        },
      }),
      (a.prototype = {
        register: function (t, r, a) {
          var s = this.queries,
            u = a && this.browserIsIncapable;
          return (
            s[t] || (s[t] = new o(t, u)),
            i(r) &&
              (r = {
                match: r,
              }),
            n(r) || (r = [r]),
            e(r, function (e) {
              i(e) &&
                (e = {
                  match: e,
                }),
                s[t].addHandler(e);
            }),
            this
          );
        },
        unregister: function (t, e) {
          var n = this.queries[t];
          return (
            n && (e ? n.removeHandler(e) : (n.clear(), delete this.queries[t])),
            this
          );
        },
      }),
      new a()
    );
  }),
  define("enquire", ["enquire/enquire"], function (t) {
    return t;
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define("jquery-ui-widget/widget", ["jquery"], t)
      : t(jQuery);
  })(function (t) {
    var e = 0,
      n = Array.prototype.slice;
    return (
      (t.cleanData = (function (e) {
        return function (n) {
          var i, r, o;
          for (o = 0; null != (r = n[o]); o++)
            try {
              (i = t._data(r, "events")),
                i && i.remove && t(r).triggerHandler("remove");
            } catch (a) {}
          e(n);
        };
      })(t.cleanData)),
      (t.widget = function (e, n, i) {
        var r,
          o,
          a,
          s,
          u = {},
          l = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (r = l + "-" + e),
          i || ((i = n), (n = t.Widget)),
          (t.expr[":"][r.toLowerCase()] = function (e) {
            return !!t.data(e, r);
          }),
          (t[l] = t[l] || {}),
          (o = t[l][e]),
          (a = t[l][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new a(t, e);
            }),
          t.extend(a, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: [],
          }),
          (s = new n()),
          (s.options = t.widget.extend({}, s.options)),
          t.each(i, function (e, i) {
            return t.isFunction(i)
              ? void (u[e] = (function () {
                  var t = function () {
                      return n.prototype[e].apply(this, arguments);
                    },
                    r = function (t) {
                      return n.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      n = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = r),
                      (e = i.apply(this, arguments)),
                      (this._super = n),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (u[e] = i);
          }),
          (a.prototype = t.widget.extend(
            s,
            {
              widgetEventPrefix: o ? s.widgetEventPrefix || e : e,
            },
            u,
            {
              constructor: a,
              namespace: l,
              widgetName: e,
              widgetFullName: r,
            }
          )),
          o
            ? (t.each(o._childConstructors, function (e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, a, n._proto);
              }),
              delete o._childConstructors)
            : n._childConstructors.push(a),
          t.widget.bridge(e, a),
          a
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, r, o = n.call(arguments, 1), a = 0, s = o.length;
          s > a;
          a++
        )
          for (i in o[a])
            (r = o[a][i]),
              o[a].hasOwnProperty(i) &&
                void 0 !== r &&
                (t.isPlainObject(r)
                  ? (e[i] = t.isPlainObject(e[i])
                      ? t.widget.extend({}, e[i], r)
                      : t.widget.extend({}, r))
                  : (e[i] = r));
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var r = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
          var a = "string" == typeof o,
            s = n.call(arguments, 1),
            u = this;
          return (
            a
              ? this.each(function () {
                  var n,
                    i = t.data(this, r);
                  return "instance" === o
                    ? ((u = i), !1)
                    : i
                    ? t.isFunction(i[o]) && "_" !== o.charAt(0)
                      ? ((n = i[o].apply(i, s)),
                        n !== i && void 0 !== n
                          ? ((u = n && n.jquery ? u.pushStack(n.get()) : n), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (s.length && (o = t.widget.extend.apply(null, [o].concat(s))),
                this.each(function () {
                  var e = t.data(this, r);
                  e
                    ? (e.option(o || {}), e._init && e._init())
                    : t.data(this, r, new i(o, this));
                })),
            u
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          disabled: !1,
          create: null,
        },
        _createWidget: function (n, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = e++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              n
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, n) {
          var i,
            r,
            o,
            a = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((a = {}), (i = e.split(".")), (e = i.shift()), i.length)) {
              for (
                r = a[e] = t.widget.extend({}, this.options[e]), o = 0;
                o < i.length - 1;
                o++
              )
                (r[i[o]] = r[i[o]] || {}), (r = r[i[o]]);
              if (((e = i.pop()), 1 === arguments.length))
                return void 0 === r[e] ? null : r[e];
              r[e] = n;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              a[e] = n;
            }
          return this._setOptions(a), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!e
              ),
              e &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function () {
          return this._setOptions({
            disabled: !1,
          });
        },
        disable: function () {
          return this._setOptions({
            disabled: !0,
          });
        },
        _on: function (e, n, i) {
          var r,
            o = this;
          "boolean" != typeof e && ((i = n), (n = e), (e = !1)),
            i
              ? ((n = r = t(n)), (this.bindings = this.bindings.add(n)))
              : ((i = n), (n = this.element), (r = this.widget())),
            t.each(i, function (i, a) {
              function s() {
                return e ||
                  (o.options.disabled !== !0 &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof a &&
                (s.guid = a.guid = a.guid || s.guid || t.guid++);
              var u = i.match(/^([\w:-]*)\s*(.*)$/),
                l = u[1] + o.eventNamespace,
                c = u[2];
              c ? r.delegate(c, l, s) : n.bind(l, s);
            });
        },
        _off: function (e, n) {
          (n =
            (n || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(n).undelegate(n),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          function n() {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }
          var i = this;
          return setTimeout(n, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, n, i) {
          var r,
            o,
            a = this.options[e];
          if (
            ((i = i || {}),
            (n = t.Event(n)),
            (n.type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (n.target = this.element[0]),
            (o = n.originalEvent))
          )
            for (r in o) r in n || (n[r] = o[r]);
          return (
            this.element.trigger(n, i),
            !(
              (t.isFunction(a) &&
                a.apply(this.element[0], [n].concat(i)) === !1) ||
              n.isDefaultPrevented()
            )
          );
        },
      }),
      t.each(
        {
          show: "fadeIn",
          hide: "fadeOut",
        },
        function (e, n) {
          t.Widget.prototype["_" + e] = function (i, r, o) {
            "string" == typeof r &&
              (r = {
                effect: r,
              });
            var a,
              s = r
                ? r === !0 || "number" == typeof r
                  ? n
                  : r.effect || n
                : e;
            (r = r || {}),
              "number" == typeof r &&
                (r = {
                  duration: r,
                }),
              (a = !t.isEmptyObject(r)),
              (r.complete = o),
              r.delay && i.delay(r.delay),
              a && t.effects && t.effects.effect[s]
                ? i[e](r)
                : s !== e && i[s]
                ? i[s](r.duration, r.easing, o)
                : i.queue(function (n) {
                    t(this)[e](), o && o.call(i[0]), n();
                  });
          };
        }
      ),
      t.widget
    );
  }),
  define("jquery-ui-widget", ["jquery-ui-widget/widget"], function (t) {
    return t;
  }),
  Object.keys ||
    (Object.keys = (function () {
      "use strict";
      return function (t) {
        var e,
          n = [];
        if (t !== Object(t)) throw new TypeError("Invalid object");
        for (e in t) t.hasOwnProperty(e) && (n[n.length] = e);
        return n;
      };
    })()),
  define("object.keys", ["object.keys/object.keys"], function (t) {
    return t;
  }),
  define("object.keys/object.keys", function () {}),
  define(
    "js/lib/blockVerticalAlign",
    ["jquery-ui-widget", "object.keys"],
    function (t) {
      !(function (t) {
        var e = t(window),
          n = (t(document), {}),
          i = 0,
          r = "blockVerticalAlign";
        t.widget("twentyeight." + r, t.Widget, {
          options: {},
          _create: function () {
            this._super("_create");
            var o = this.widget();
            this.options;
            0 == Object.keys(n).length &&
              e.on({
                "resize.blockVerticalAlign": function () {
                  t.each(n, function () {
                    var t = this;
                    t[r]("render");
                  });
                },
              }),
              o.data(r + "_id", "_" + ++i),
              (n[o.data(r + "_id")] = o),
              e.trigger("resize." + r);
          },
          render: function () {
            var t = this.widget(),
              e = (this.options, t.outerHeight());
            t.is(":visible") &&
              t.css({
                "margin-top": -(e / 2) + "px",
              });
          },
          _destroy: function () {
            var t = this.widget();
            this.options;
            t.css({
              marginTop: "",
            }),
              delete n[t.data(r + "_id")],
              0 == Object.keys(n).length && e.off("resize." + r),
              this._super("_destroy");
          },
        });
      })(jQuery);
    }
  ),
  define("js/lib/justify", ["jquery-ui-widget", "object.keys"], function (t) {
    !(function (t) {
      var e = t(window),
        n = (t(document), {}),
        i = 0,
        r = "justify";
      t.widget("twentyeight." + r, t.Widget, {
        options: {},
        _create: function () {
          this._super("_create");
          var o = this.widget();
          this.options;
          0 == Object.keys(n).length &&
            e.on({
              "resize.justify": function () {
                t.each(n, function () {
                  var t = this;
                  t[r]("render");
                });
              },
            }),
            o.data(r + "_id", "_" + ++i),
            (n[o.data(r + "_id")] = o),
            o[r]("render");
        },
        render: function () {
          var e = this.widget(),
            n = (this.options, e.width()),
            i = 0,
            r = e.children();
          r.find("> a, > label").css({
            marginLeft: "",
            marginRight: "",
          }),
            r.filter(":visible").each(function () {
              i += t(this).width();
            });
          var o = n - i;
          o -= 1;
          var a = o / (r.length - 1) / 2;
          r.find("> a, > label").each(function (e) {
            var n = t(this);
            0 == e
              ? n.css({
                  marginRight: a,
                })
              : e == r.length - 1
              ? n.css({
                  marginLeft: a,
                })
              : n.css({
                  marginLeft: a,
                  marginRight: a,
                });
          });
        },
        _destroy: function () {
          var t = this.widget(),
            i = (this.options, t.children());
          i.find("> a, > label").css({
            marginLeft: "",
            marginRight: "",
          }),
            delete n[t.data(r + "_id")],
            0 == Object.keys(n).length && e.off("resize." + r),
            this._super("_destroy");
        },
      });
    })(jQuery);
  }),
	  
	  
	  
	  
	  

  define("js/bridge", function () {}),
  define("js/lib/vimeo", ["jquery-ui-widget"], function (t) {
    !(function (t, e) {
      var n = "vimeo";
      t.widget("twentyeight." + n, t.Widget, {
        options: {},
        _create: function () {
          this._super("_create");
          var n = this.widget();
          this.options;
          if (
            ((this.$video = n.find("iframe")),
            (this.$videoholder = n),
            this.$video.length > 0)
          ) {
            (this.video = e(this.$video[0])),
              (this.ready = t.Deferred()),
              this.ready.promise();
            var i = this;
            this.video.addEvent("ready", function (e) {
              i.video.addEvent("finish", t.proxy(i, "_complete")),
                i.video.addEvent("play", t.proxy(i, "_play")),
                i.ready.resolve();
            });
          }
        },
        play: function () {
          var e = this;
          t.when(this.ready).done(function () {
            e.video.api("play");
          }),
            this._play();
        },
        _play: function () {
          this._trigger("play");
        },
        stop: function () {
          var e = this;
          t.when(this.ready).done(function () {
            e.video.api("seekTo", 0), e.video.api("pause");
          }),
            this._trigger("stop");
        },
        _complete: function () {
          this._trigger("complete");
        },
      });
    })(jQuery);
  }),
	  
	  
  define("jquery-radiogroup/main", ["jquery-ui-widget"], function () {
    !(function (t) {
      var e = t(":root"),
        n = e.is(".ie8"),
        i = "radiogroup",
        r = function (e) {
          var i = t("[data-rel-next='" + e.name + "']"),
            r = t("[data-rel-prev='" + e.name + "']");
          (this.name = e.name), (this.previous = t(""));
          var o = this.getButtons();
          (this.$controller = o.eq(0)),
            (e.step = i.length > 0 || r.length > 0),
            (e.reset = o.filter("[data-reset]").length > 0),
            (this.checked = this.getChecked());
          var a = this;
          o.on({
            "change.radiogroup": function () {
              (a.previous = a.checked), (a.checked = a.getChecked());
            },
          }),
            o.on({
              "click.radiogroup": function (i) {
                var r = t(i.currentTarget);
                n && r.attr("checked", "checked"),
                  e.cycle && void 0 !== i.originalEvent && a.pauseCycle(5e3),
                  e.reset &&
                    (a.previous.removeData("radiogroup-checked"),
                    r.data("radiogroup-checked")
                      ? (r.removeData("radiogroup-checked"),
                        (a.previous = t("")),
                        (a.checked = a.previous),
                        i.preventDefault(),
                        r.removeAttr("checked"),
                        void 0 !== i.originalEvent &&
                          setTimeout(function () {
                            r.removeAttr("checked");
                          }))
                      : r.data("radiogroup-checked", !0));
              },
            }),
            e.cycle &&
              ((this.cycle = e.cycle),
              isNaN(this.cycle) ||
                (this.cycle = {
                  interval: this.cycle,
                  pause: 5e3,
                  loop: "return",
                }),
              this.startCycle()),
            e.step && this.addStep(r, i);
        },
        o = r.prototype;
      (o.addStep = function (e, n) {
        var i = "disabled",
          r = !0;
        t.each(arguments, function (t) {
          return this.attr("for") == i ? ((r = !1), !1) : void 0;
        });
        var o = this.getButtons(),
          a = this;
        o.on({
          "change.step": function () {
            var o = t(this);
            o.is(":checked") &&
              (e.attr("for", a.getPrevious(r).attr("id") || i),
              n.attr("for", a.getNext(r).attr("id") || i));
          },
        });
      }),
        (o.startCycle = function () {
          this.getButtons();
          if (null != this.cycle) {
            var t = this.cycle.interval;
            this._cycle(function () {
              return t;
            });
          }
        }),
        (o.pauseCycle = function (t) {
          var e = this,
            n = this.$controller,
            i = "radiogroup-cycle";
          n.queue(i).length > 0 &&
            (n.stop(!0, !1).queue(i, []),
            null != t &&
              n
                .delay(t, i)
                .queue(i, function (t) {
                  t(), e.startCycle();
                })
                .dequeue(i));
        }),
        (o._cycle = function (t) {
          var e = this,
            n = "radiogroup-cycle",
            i = this.$controller;
          i.stop(!0, !1)
            .queue(n, [])
            .delay(t(), n)
            .queue(n, function (n) {
              var i = e.getNext(!0);
              if ("rotate" == e.cycle.loop && i.is(":last-of-type")) {
                var r = e.getButtons().last(),
                  o = e.getButtons().first();
                o.add(o.nextUntil("input"))
                  .detach()
                  .insertAfter(r.add(r.next()).last());
              }
              setTimeout(function () {
                n(), e._cycle(t), i.trigger("click");
              }, 0);
            })
            .dequeue(n);
        }),
        (o.getButtons = function () {
          return t(":radio[name='" + this.name + "']");
        }),
        (o.getChecked = function () {
          return this.getButtons().filter(":checked");
        }),
        (o.getUnchecked = function () {
          return this.previous;
        }),
        (o.getNext = function (e) {
          var n = t(""),
            i = this,
            r = this.getButtons();
          return (
            r.each(function (o) {
              var a = t(this);
              if (a.is(":checked")) {
                if ((o++, o >= r.length)) {
                  if (!e) return -1;
                  o = 0;
                }
                return (n = i.getButtons().eq(o)), -1;
              }
            }),
            n
          );
        }),
        (o.getPrevious = function (e) {
          var n = t(""),
            i = this,
            r = this.getButtons();
          return (
            r.each(function (o) {
              var a = t(this);
              if (a.is(":checked")) {
                if ((o--, 0 > o)) {
                  if (!e) return -1;
                  o = r.length - 1;
                }
                return (n = i.getButtons().eq(o)), -1;
              }
            }),
            n
          );
        });
      var a = {
        options: {},
        _create: function () {
          this._super("_create");
          var e = this.widget(),
            n = (this.options, e.attr("name"));
          (this.$first = t(":radio[name='" + n + "']").eq(0)), this.getGroup();
        },
        getGroup: function () {
          var t = this.$first.data("radio-group");
          if (null == t) {
            var e = this.$first.attr("name");
            (t = new r({
              name: e,
              cycle: this.$first.data("cycle"),
            })),
              this.$first.data("radio-group", t);
          }
          return t;
        },
      };
      t.each(o, function (t) {
        a[t] = function () {
          var e = this.getGroup();
          return e[t].apply(e, arguments);
        };
      }),
        t.widget("twentyeight." + i, t.Widget, a);
    })(jQuery);
  }),
  define("jquery-radiogroup", ["jquery-radiogroup/main"], function (t) {
    return t;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define("pepjs/pep", e)
      : (t.PointerEventsPolyfill = e());
  })(this, function () {
    "use strict";
    function t() {
      if (c) {
        var t = new Map();
        return (t.pointers = h), t;
      }
      (this.keys = []), (this.values = []);
    }
    function e(t, e, n, i) {
      (this.addCallback = t.bind(i)),
        (this.removeCallback = e.bind(i)),
        (this.changedCallback = n.bind(i)),
        E && (this.observer = new E(this.mutationWatcher.bind(this)));
    }
    function n(t, e) {
      e = e || Object.create(null);
      var n = document.createEvent("Event");
      n.initEvent(t, e.bubbles || !1, e.cancelable || !1);
      for (var i, r = 2; r < T.length; r++) (i = T[r]), (n[i] = e[i] || j[r]);
      n.buttons = e.buttons || 0;
      var o = 0;
      return (
        (o = e.pressure ? e.pressure : n.buttons ? 0.5 : 0),
        (n.x = n.clientX),
        (n.y = n.clientY),
        (n.pointerId = e.pointerId || 0),
        (n.width = e.width || 0),
        (n.height = e.height || 0),
        (n.pressure = o),
        (n.tiltX = e.tiltX || 0),
        (n.tiltY = e.tiltY || 0),
        (n.pointerType = e.pointerType || ""),
        (n.hwTimestamp = e.hwTimestamp || 0),
        (n.isPrimary = e.isPrimary || !1),
        n
      );
    }
    function i(t) {
      return "body /shadow-deep/ " + r(t);
    }
    function r(t) {
      return '[touch-action="' + t + '"]';
    }
    function o(t) {
      return (
        "{ -ms-touch-action: " +
        t +
        "; touch-action: " +
        t +
        "; touch-action-delay: none; }"
      );
    }
    function a() {
      if (O) {
        $.forEach(function (t) {
          String(t) === t
            ? ((A += r(t) + o(t) + "\n"), q && (A += i(t) + o(t) + "\n"))
            : ((A += t.selectors.map(r) + o(t.rule) + "\n"),
              q && (A += t.selectors.map(i) + o(t.rule) + "\n"));
        });
        var t = document.createElement("style");
        (t.textContent = A), document.head.appendChild(t);
      }
    }
    function s() {
      if (!window.PointerEvent) {
        if (((window.PointerEvent = P), window.navigator.msPointerEnabled)) {
          var t = window.navigator.msMaxTouchPoints;
          Object.defineProperty(window.navigator, "maxTouchPoints", {
            value: t,
            enumerable: !0,
          }),
            m.registerSource("ms", it);
        } else
          m.registerSource("mouse", L),
            void 0 !== window.ontouchstart && m.registerSource("touch", J);
        m.register(document);
      }
    }
    function u(t) {
      if (!m.pointermap.has(t)) throw new Error("InvalidPointerId");
    }
    function l() {
      window.Element &&
        !Element.prototype.setPointerCapture &&
        Object.defineProperties(Element.prototype, {
          setPointerCapture: {
            value: K,
          },
          releasePointerCapture: {
            value: Z,
          },
        });
    }
    var c = window.Map && window.Map.prototype.forEach,
      h = function () {
        return this.size;
      };
    t.prototype = {
      set: function (t, e) {
        var n = this.keys.indexOf(t);
        n > -1
          ? (this.values[n] = e)
          : (this.keys.push(t), this.values.push(e));
      },
      has: function (t) {
        return this.keys.indexOf(t) > -1;
      },
      delete: function (t) {
        var e = this.keys.indexOf(t);
        e > -1 && (this.keys.splice(e, 1), this.values.splice(e, 1));
      },
      get: function (t) {
        var e = this.keys.indexOf(t);
        return this.values[e];
      },
      clear: function () {
        (this.keys.length = 0), (this.values.length = 0);
      },
      forEach: function (t, e) {
        this.values.forEach(function (n, i) {
          t.call(e, n, this.keys[i], this);
        }, this);
      },
      pointers: function () {
        return this.keys.length;
      },
    };
    var f = t,
      d = [
        "bubbles",
        "cancelable",
        "view",
        "detail",
        "screenX",
        "screenY",
        "clientX",
        "clientY",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "button",
        "relatedTarget",
        "buttons",
        "pointerId",
        "width",
        "height",
        "pressure",
        "tiltX",
        "tiltY",
        "pointerType",
        "hwTimestamp",
        "isPrimary",
        "type",
        "target",
        "currentTarget",
        "which",
        "pageX",
        "pageY",
        "timeStamp",
      ],
      p = [
        !1,
        !1,
        null,
        null,
        0,
        0,
        0,
        0,
        !1,
        !1,
        !1,
        !1,
        0,
        null,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "",
        0,
        !1,
        "",
        null,
        null,
        0,
        0,
        0,
        0,
      ],
      g = "undefined" != typeof SVGElementInstance,
      v = {
        pointermap: new f(),
        eventMap: Object.create(null),
        captureInfo: Object.create(null),
        eventSources: Object.create(null),
        eventSourceList: [],
        registerSource: function (t, e) {
          var n = e,
            i = n.events;
          i &&
            (i.forEach(function (t) {
              n[t] && (this.eventMap[t] = n[t].bind(n));
            }, this),
            (this.eventSources[t] = n),
            this.eventSourceList.push(n));
        },
        register: function (t) {
          for (
            var e, n = this.eventSourceList.length, i = 0;
            n > i && (e = this.eventSourceList[i]);
            i++
          )
            e.register.call(e, t);
        },
        unregister: function (t) {
          for (
            var e, n = this.eventSourceList.length, i = 0;
            n > i && (e = this.eventSourceList[i]);
            i++
          )
            e.unregister.call(e, t);
        },
        contains: function (t, e) {
          return t.contains(e);
        },
        down: function (t) {
          (t.bubbles = !0), this.fireEvent("pointerdown", t);
        },
        move: function (t) {
          (t.bubbles = !0), this.fireEvent("pointermove", t);
        },
        up: function (t) {
          (t.bubbles = !0), this.fireEvent("pointerup", t);
        },
        enter: function (t) {
          (t.bubbles = !1), this.fireEvent("pointerenter", t);
        },
        leave: function (t) {
          (t.bubbles = !1), this.fireEvent("pointerleave", t);
        },
        over: function (t) {
          (t.bubbles = !0), this.fireEvent("pointerover", t);
        },
        out: function (t) {
          (t.bubbles = !0), this.fireEvent("pointerout", t);
        },
        cancel: function (t) {
          (t.bubbles = !0), this.fireEvent("pointercancel", t);
        },
        leaveOut: function (t) {
          this.out(t),
            this.contains(t.target, t.relatedTarget) || this.leave(t);
        },
        enterOver: function (t) {
          this.over(t),
            this.contains(t.target, t.relatedTarget) || this.enter(t);
        },
        eventHandler: function (t) {
          if (!t._handledByPE) {
            var e = t.type,
              n = this.eventMap && this.eventMap[e];
            n && n(t), (t._handledByPE = !0);
          }
        },
        listen: function (t, e) {
          e.forEach(function (e) {
            this.addEvent(t, e);
          }, this);
        },
        unlisten: function (t, e) {
          e.forEach(function (e) {
            this.removeEvent(t, e);
          }, this);
        },
        addEvent: function (t, e) {
          t.addEventListener(e, this.boundHandler);
        },
        removeEvent: function (t, e) {
          t.removeEventListener(e, this.boundHandler);
        },
        makeEvent: function (t, e) {
          this.captureInfo[e.pointerId] && (e.relatedTarget = null);
          var n = new PointerEvent(t, e);
          return (
            e.preventDefault && (n.preventDefault = e.preventDefault),
            (n._target = n._target || e.target),
            n
          );
        },
        fireEvent: function (t, e) {
          var n = this.makeEvent(t, e);
          return this.dispatchEvent(n);
        },
        cloneEvent: function (t) {
          for (var e, n = Object.create(null), i = 0; i < d.length; i++)
            (e = d[i]),
              (n[e] = t[e] || p[i]),
              !g ||
                ("target" !== e && "relatedTarget" !== e) ||
                (n[e] instanceof SVGElementInstance &&
                  (n[e] = n[e].correspondingUseElement));
          return (
            t.preventDefault &&
              (n.preventDefault = function () {
                t.preventDefault();
              }),
            n
          );
        },
        getTarget: function (t) {
          return this.captureInfo[t.pointerId] || t._target;
        },
        setCapture: function (t, e) {
          this.captureInfo[t] && this.releaseCapture(t),
            (this.captureInfo[t] = e);
          var n = document.createEvent("Event");
          n.initEvent("gotpointercapture", !0, !1),
            (n.pointerId = t),
            (this.implicitRelease = this.releaseCapture.bind(this, t)),
            document.addEventListener("pointerup", this.implicitRelease),
            document.addEventListener("pointercancel", this.implicitRelease),
            (n._target = e),
            this.asyncDispatchEvent(n);
        },
        releaseCapture: function (t) {
          var e = this.captureInfo[t];
          if (e) {
            var n = document.createEvent("Event");
            n.initEvent("lostpointercapture", !0, !1),
              (n.pointerId = t),
              (this.captureInfo[t] = void 0),
              document.removeEventListener("pointerup", this.implicitRelease),
              document.removeEventListener(
                "pointercancel",
                this.implicitRelease
              ),
              (n._target = e),
              this.asyncDispatchEvent(n);
          }
        },
        dispatchEvent: function (t) {
          var e = this.getTarget(t);
          return e ? e.dispatchEvent(t) : void 0;
        },
        asyncDispatchEvent: function (t) {
          requestAnimationFrame(this.dispatchEvent.bind(this, t));
        },
      };
    v.boundHandler = v.eventHandler.bind(v);
    var m = v,
      y = {
        shadow: function (t) {
          return t ? t.shadowRoot || t.webkitShadowRoot : void 0;
        },
        canTarget: function (t) {
          return t && Boolean(t.elementFromPoint);
        },
        targetingShadow: function (t) {
          var e = this.shadow(t);
          return this.canTarget(e) ? e : void 0;
        },
        olderShadow: function (t) {
          var e = t.olderShadowRoot;
          if (!e) {
            var n = t.querySelector("shadow");
            n && (e = n.olderShadowRoot);
          }
          return e;
        },
        allShadows: function (t) {
          for (var e = [], n = this.shadow(t); n; )
            e.push(n), (n = this.olderShadow(n));
          return e;
        },
        searchRoot: function (t, e, n) {
          if (t) {
            var i,
              r,
              o = t.elementFromPoint(e, n);
            for (r = this.targetingShadow(o); r; ) {
              if ((i = r.elementFromPoint(e, n))) {
                var a = this.targetingShadow(i);
                return this.searchRoot(a, e, n) || i;
              }
              r = this.olderShadow(r);
            }
            return o;
          }
        },
        owner: function (t) {
          for (var e = t; e.parentNode; ) e = e.parentNode;
          return (
            e.nodeType != Node.DOCUMENT_NODE &&
              e.nodeType != Node.DOCUMENT_FRAGMENT_NODE &&
              (e = document),
            e
          );
        },
        findTarget: function (t) {
          var e = t.clientX,
            n = t.clientY,
            i = this.owner(t.target);
          return (
            i.elementFromPoint(e, n) || (i = document), this.searchRoot(i, e, n)
          );
        },
      },
      b = Array.prototype.forEach.call.bind(Array.prototype.forEach),
      x = Array.prototype.map.call.bind(Array.prototype.map),
      w = Array.prototype.slice.call.bind(Array.prototype.slice),
      C = Array.prototype.filter.call.bind(Array.prototype.filter),
      E = window.MutationObserver || window.WebKitMutationObserver,
      k = "[touch-action]",
      _ = {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
        attributeFilter: ["touch-action"],
      };
    (e.prototype = {
      watchSubtree: function (t) {
        y.canTarget(t) && this.observer.observe(t, _);
      },
      enableOnSubtree: function (t) {
        this.watchSubtree(t),
          t === document && "complete" !== document.readyState
            ? this.installOnLoad()
            : this.installNewSubtree(t);
      },
      installNewSubtree: function (t) {
        b(this.findElements(t), this.addElement, this);
      },
      findElements: function (t) {
        return t.querySelectorAll ? t.querySelectorAll(k) : [];
      },
      removeElement: function (t) {
        this.removeCallback(t);
      },
      addElement: function (t) {
        this.addCallback(t);
      },
      elementChanged: function (t, e) {
        this.changedCallback(t, e);
      },
      concatLists: function (t, e) {
        return t.concat(w(e));
      },
      installOnLoad: function () {
        document.addEventListener(
          "readystatechange",
          function () {
            "complete" === document.readyState &&
              this.installNewSubtree(document);
          }.bind(this)
        );
      },
      isElement: function (t) {
        return t.nodeType === Node.ELEMENT_NODE;
      },
      flattenMutationTree: function (t) {
        var e = x(t, this.findElements, this);
        return e.push(C(t, this.isElement)), e.reduce(this.concatLists, []);
      },
      mutationWatcher: function (t) {
        t.forEach(this.mutationHandler, this);
      },
      mutationHandler: function (t) {
        if ("childList" === t.type) {
          var e = this.flattenMutationTree(t.addedNodes);
          e.forEach(this.addElement, this);
          var n = this.flattenMutationTree(t.removedNodes);
          n.forEach(this.removeElement, this);
        } else
          "attributes" === t.type && this.elementChanged(t.target, t.oldValue);
      },
    }),
      E ||
        (e.prototype.watchSubtree = function () {
          console.warn(
            "PointerEventsPolyfill: MutationObservers not found, touch-action will not be dynamically detected"
          );
        });
    var S = e,
      T = [
        "bubbles",
        "cancelable",
        "view",
        "detail",
        "screenX",
        "screenY",
        "clientX",
        "clientY",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "button",
        "relatedTarget",
        "pageX",
        "pageY",
      ],
      j = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
      P = n,
      $ = [
        "none",
        "auto",
        "pan-x",
        "pan-y",
        {
          rule: "pan-x pan-y",
          selectors: ["pan-x pan-y", "pan-y pan-x"],
        },
      ],
      A = "",
      O = (document.head, window.PointerEvent || window.MSPointerEvent),
      q = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
      M = m.pointermap,
      N = 25,
      F = [0, 1, 4, 2],
      B = !1;
    try {
      B =
        1 ===
        new MouseEvent("test", {
          buttons: 1,
        }).buttons;
    } catch (I) {}
    var D,
      R = {
        POINTER_ID: 1,
        POINTER_TYPE: "mouse",
        events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
        register: function (t) {
          m.listen(t, this.events);
        },
        unregister: function (t) {
          m.unlisten(t, this.events);
        },
        lastTouches: [],
        isEventSimulatedFromTouch: function (t) {
          for (
            var e,
              n = this.lastTouches,
              i = t.clientX,
              r = t.clientY,
              o = 0,
              a = n.length;
            a > o && (e = n[o]);
            o++
          ) {
            var s = Math.abs(i - e.x),
              u = Math.abs(r - e.y);
            if (N >= s && N >= u) return !0;
          }
        },
        prepareEvent: function (t) {
          var e = m.cloneEvent(t),
            n = e.preventDefault;
          return (
            (e.preventDefault = function () {
              t.preventDefault(), n();
            }),
            (e.pointerId = this.POINTER_ID),
            (e.isPrimary = !0),
            (e.pointerType = this.POINTER_TYPE),
            B || (e.buttons = F[e.which] || 0),
            e
          );
        },
        mousedown: function (t) {
          if (!this.isEventSimulatedFromTouch(t)) {
            var e = M.has(this.POINTER_ID);
            e && this.cancel(t);
            var n = this.prepareEvent(t);
            M.set(this.POINTER_ID, t), m.down(n);
          }
        },
        mousemove: function (t) {
          if (!this.isEventSimulatedFromTouch(t)) {
            var e = this.prepareEvent(t);
            m.move(e);
          }
        },
        mouseup: function (t) {
          if (!this.isEventSimulatedFromTouch(t)) {
            var e = M.get(this.POINTER_ID);
            if (e && e.button === t.button) {
              var n = this.prepareEvent(t);
              m.up(n), this.cleanupMouse();
            }
          }
        },
        mouseover: function (t) {
          if (!this.isEventSimulatedFromTouch(t)) {
            var e = this.prepareEvent(t);
            m.enterOver(e);
          }
        },
        mouseout: function (t) {
          if (!this.isEventSimulatedFromTouch(t)) {
            var e = this.prepareEvent(t);
            m.leaveOut(e);
          }
        },
        cancel: function (t) {
          var e = this.prepareEvent(t);
          m.cancel(e), this.cleanupMouse();
        },
        cleanupMouse: function () {
          M["delete"](this.POINTER_ID);
        },
      },
      L = R,
      X = m.captureInfo,
      Y = y.findTarget.bind(y),
      V = y.allShadows.bind(y),
      z = m.pointermap,
      G = (Array.prototype.map.call.bind(Array.prototype.map), 2500),
      W = 200,
      U = "touch-action",
      H = !1,
      Q = {
        events: ["touchstart", "touchmove", "touchend", "touchcancel"],
        register: function (t) {
          H ? m.listen(t, this.events) : D.enableOnSubtree(t);
        },
        unregister: function (t) {
          H && m.unlisten(t, this.events);
        },
        elementAdded: function (t) {
          var e = t.getAttribute(U),
            n = this.touchActionToScrollType(e);
          n &&
            ((t._scrollType = n),
            m.listen(t, this.events),
            V(t).forEach(function (t) {
              (t._scrollType = n), m.listen(t, this.events);
            }, this));
        },
        elementRemoved: function (t) {
          (t._scrollType = void 0),
            m.unlisten(t, this.events),
            V(t).forEach(function (t) {
              (t._scrollType = void 0), m.unlisten(t, this.events);
            }, this);
        },
        elementChanged: function (t, e) {
          var n = t.getAttribute(U),
            i = this.touchActionToScrollType(n),
            r = this.touchActionToScrollType(e);
          i && r
            ? ((t._scrollType = i),
              V(t).forEach(function (t) {
                t._scrollType = i;
              }, this))
            : r
            ? this.elementRemoved(t)
            : i && this.elementAdded(t);
        },
        scrollTypes: {
          EMITTER: "none",
          XSCROLLER: "pan-x",
          YSCROLLER: "pan-y",
          SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/,
        },
        touchActionToScrollType: function (t) {
          var e = t,
            n = this.scrollTypes;
          return "none" === e
            ? "none"
            : e === n.XSCROLLER
            ? "X"
            : e === n.YSCROLLER
            ? "Y"
            : n.SCROLLER.exec(e)
            ? "XY"
            : void 0;
        },
        POINTER_TYPE: "touch",
        firstTouch: null,
        isPrimaryTouch: function (t) {
          return this.firstTouch === t.identifier;
        },
        setPrimaryTouch: function (t) {
          (0 === z.pointers() || (1 === z.pointers() && z.has(1))) &&
            ((this.firstTouch = t.identifier),
            (this.firstXY = {
              X: t.clientX,
              Y: t.clientY,
            }),
            (this.scrolling = !1),
            this.cancelResetClickCount());
        },
        removePrimaryPointer: function (t) {
          t.isPrimary &&
            ((this.firstTouch = null),
            (this.firstXY = null),
            this.resetClickCount());
        },
        clickCount: 0,
        resetId: null,
        resetClickCount: function () {
          var t = function () {
            (this.clickCount = 0), (this.resetId = null);
          }.bind(this);
          this.resetId = setTimeout(t, W);
        },
        cancelResetClickCount: function () {
          this.resetId && clearTimeout(this.resetId);
        },
        typeToButtons: function (t) {
          var e = 0;
          return ("touchstart" === t || "touchmove" === t) && (e = 1), e;
        },
        touchToPointer: function (t) {
          var e = this.currentTouchEvent,
            n = m.cloneEvent(t),
            i = (n.pointerId = t.identifier + 2);
          (n.target = X[i] || Y(n)),
            (n.bubbles = !0),
            (n.cancelable = !0),
            (n.detail = this.clickCount),
            (n.button = 0),
            (n.buttons = this.typeToButtons(e.type)),
            (n.width = t.webkitRadiusX || t.radiusX || 0),
            (n.height = t.webkitRadiusY || t.radiusY || 0),
            (n.pressure = t.webkitForce || t.force || 0.5),
            (n.isPrimary = this.isPrimaryTouch(t)),
            (n.pointerType = this.POINTER_TYPE);
          var r = this;
          return (
            (n.preventDefault = function () {
              (r.scrolling = !1), (r.firstXY = null), e.preventDefault();
            }),
            n
          );
        },
        processTouches: function (t, e) {
          var n = t.changedTouches;
          this.currentTouchEvent = t;
          for (var i, r = 0; r < n.length; r++)
            (i = n[r]), e.call(this, this.touchToPointer(i));
        },
        shouldScroll: function (t) {
          if (this.firstXY) {
            var e,
              n = t.currentTarget._scrollType;
            if ("none" === n) e = !1;
            else if ("XY" === n) e = !0;
            else {
              var i = t.changedTouches[0],
                r = n,
                o = "Y" === n ? "X" : "Y",
                a = Math.abs(i["client" + r] - this.firstXY[r]),
                s = Math.abs(i["client" + o] - this.firstXY[o]);
              e = a >= s;
            }
            return (this.firstXY = null), e;
          }
        },
        findTouch: function (t, e) {
          for (var n, i = 0, r = t.length; r > i && (n = t[i]); i++)
            if (n.identifier === e) return !0;
        },
        vacuumTouches: function (t) {
          var e = t.touches;
          if (z.pointers() >= e.length) {
            var n = [];
            z.forEach(function (t, i) {
              if (1 !== i && !this.findTouch(e, i - 2)) {
                var r = t.out;
                n.push(r);
              }
            }, this),
              n.forEach(this.cancelOut, this);
          }
        },
        touchstart: function (t) {
          this.vacuumTouches(t),
            this.setPrimaryTouch(t.changedTouches[0]),
            this.dedupSynthMouse(t),
            this.scrolling ||
              (this.clickCount++, this.processTouches(t, this.overDown));
        },
        overDown: function (t) {
          z.set(t.pointerId, {
            target: t.target,
            out: t,
            outTarget: t.target,
          });
          m.over(t), m.enter(t), m.down(t);
        },
        touchmove: function (t) {
          this.scrolling ||
            (this.shouldScroll(t)
              ? ((this.scrolling = !0), this.touchcancel(t))
              : (t.preventDefault(), this.processTouches(t, this.moveOverOut)));
        },
        moveOverOut: function (t) {
          var e = t,
            n = z.get(e.pointerId);
          if (n) {
            var i = n.out,
              r = n.outTarget;
            m.move(e),
              i &&
                r !== e.target &&
                ((i.relatedTarget = e.target),
                (e.relatedTarget = r),
                (i.target = r),
                e.target
                  ? (m.leaveOut(i), m.enterOver(e))
                  : ((e.target = r),
                    (e.relatedTarget = null),
                    this.cancelOut(e))),
              (n.out = e),
              (n.outTarget = e.target);
          }
        },
        touchend: function (t) {
          this.dedupSynthMouse(t), this.processTouches(t, this.upOut);
        },
        upOut: function (t) {
          this.scrolling || (m.up(t), m.out(t), m.leave(t)),
            this.cleanUpPointer(t);
        },
        touchcancel: function (t) {
          this.processTouches(t, this.cancelOut);
        },
        cancelOut: function (t) {
          m.cancel(t), m.out(t), m.leave(t), this.cleanUpPointer(t);
        },
        cleanUpPointer: function (t) {
          z["delete"](t.pointerId), this.removePrimaryPointer(t);
        },
        dedupSynthMouse: function (t) {
          var e = L.lastTouches,
            n = t.changedTouches[0];
          if (this.isPrimaryTouch(n)) {
            var i = {
              x: n.clientX,
              y: n.clientY,
            };
            e.push(i);
            var r = function (t, e) {
              var n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            }.bind(null, e, i);
            setTimeout(r, G);
          }
        },
      };
    H || (D = new S(Q.elementAdded, Q.elementRemoved, Q.elementChanged, Q));
    var K,
      Z,
      J = Q,
      tt = m.pointermap,
      et =
        window.MSPointerEvent &&
        "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
      nt = {
        events: [
          "MSPointerDown",
          "MSPointerMove",
          "MSPointerUp",
          "MSPointerOut",
          "MSPointerOver",
          "MSPointerCancel",
          "MSGotPointerCapture",
          "MSLostPointerCapture",
        ],
        register: function (t) {
          m.listen(t, this.events);
        },
        unregister: function (t) {
          m.unlisten(t, this.events);
        },
        POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
        prepareEvent: function (t) {
          var e = t;
          return (
            et &&
              ((e = m.cloneEvent(t)),
              (e.pointerType = this.POINTER_TYPES[t.pointerType])),
            e
          );
        },
        cleanup: function (t) {
          tt["delete"](t);
        },
        MSPointerDown: function (t) {
          tt.set(t.pointerId, t);
          var e = this.prepareEvent(t);
          m.down(e);
        },
        MSPointerMove: function (t) {
          var e = this.prepareEvent(t);
          m.move(e);
        },
        MSPointerUp: function (t) {
          var e = this.prepareEvent(t);
          m.up(e), this.cleanup(t.pointerId);
        },
        MSPointerOut: function (t) {
          var e = this.prepareEvent(t);
          m.leaveOut(e);
        },
        MSPointerOver: function (t) {
          var e = this.prepareEvent(t);
          m.enterOver(e);
        },
        MSPointerCancel: function (t) {
          var e = this.prepareEvent(t);
          m.cancel(e), this.cleanup(t.pointerId);
        },
        MSLostPointerCapture: function (t) {
          var e = m.makeEvent("lostpointercapture", t);
          m.dispatchEvent(e);
        },
        MSGotPointerCapture: function (t) {
          var e = m.makeEvent("gotpointercapture", t);
          m.dispatchEvent(e);
        },
      },
      it = nt,
      rt = window.navigator;
    rt.msPointerEnabled
      ? ((K = function (t) {
          u(t), this.msSetPointerCapture(t);
        }),
        (Z = function (t) {
          u(t), this.msReleasePointerCapture(t);
        }))
      : ((K = function (t) {
          u(t), m.setCapture(t, this);
        }),
        (Z = function (t) {
          u(t), m.releaseCapture(t, this);
        })),
      a(),
      s(),
      l();
    var ot = {
      dispatcher: m,
      Installer: S,
      PointerEvent: P,
      PointerMap: f,
      targetFinding: y,
    };
    return ot;
  }),
  define("pepjs", ["pepjs/pep"], function (t) {
    return t;
  }),
  define("jquery-swipe-events/index", ["jquery", "pepjs"], function () {
    var t = require("jquery");
    return (
      (t.event.special.swipe = {
        setup: function (e, n, i) {
          var r,
            o,
            a,
            s = t(this),
            u = 1e3,
            l = 75,
            c = !1;
          s.on({
            "pointerdown.swipe": function (e) {
              var n = e.originalEvent.pointerType;
              c ||
                s.find("a").each(function () {
                  var e = t(this);
                  e.on({
                    click: function (t) {
                      t.preventDefault();
                    },
                  });
                }),
                "touch" != n && e.preventDefault(),
                (r = e.clientX),
                (o = e.clientY),
                (a = new Date().getTime());
            },
            "pointerup.swipe": function (e) {
              var n = e.clientX,
                i = e.clientY,
                h = new Date().getTime(),
                f = h - a;
              if (((c = !1), u > f)) {
                var d = Math.abs(r - n),
                  p = Math.abs(o - i);
                d > p &&
                  d > l &&
                  ((c = !0),
                  n > r
                    ? s.trigger("swipe", ["right"])
                    : s.trigger("swipe", ["left"]));
              }
              c ||
                s.find("a").each(function () {
                  var e = t(this);
                  e.off("click");
                });
            },
          });
        },
        teardown: function (e) {
          var n = t(this);
          n.off("pointerup.swipe pointerdown.swipe");
        },
        add: function (t) {},
        remove: function (t) {},
        default: function (t) {},
      }),
      ["left", "right"].forEach(function (e, n, i) {
        t.event.special["swipe" + e] = {
          setup: function (n, i, r) {
            var o = t(this);
            o.on("swipe.swipe" + e, function (t, n) {
              n == e && o.trigger("swipe" + e);
            });
          },
          teardown: function (n) {
            var i = t(this);
            i.off("swipe.swipe" + e);
          },
        };
      }),
      {}
    );
  }),
  define("jquery-swipe-events", ["jquery-swipe-events/index"], function (t) {
    return t;
  }),
  define(
    "js/lib/hero",
    ["jquery-ui-widget", "jquery-radiogroup", "jquery-swipe-events"],
    function (t) {
      !(function (t, e) {
        var n = "hero";
        t.widget("twentyeight." + n, t.Widget, {
          options: {},
          _create: function () {
            this._super("_create");
            var e = this.widget(),
              n =
                (this.options,
                (this.$slides = e.find(":radio:first").data("cycle", "15000")));
            e
              .find(":radio")
              .radiogroup()
              .radiogroup("getButtons")
              .filter(":not(:checked)")
              .find("+ *")
              .css({
                opacity: 0,
              }),
              e
                .find(".video")
                .vimeo()
                .on("vimeoplay", function () {
                  n.radiogroup("pauseCycle");
                }),
              e.on("swipeleft", function () {
                e.find("label[data-rel-prev]").trigger("click");
              }),
              e.on("swiperight", function () {
                e.find("label[data-rel-next]").trigger("click");
              }),
              e.find(":radio").on({
                change: function (e) {
                  var i = t(this),
                    r = i.parent().find(":checkbox:checked"),
                    o = r.parent().find(".video");
                  o.vimeo("stop"),
                    o.parent().find("img").length > 0 && r.trigger("click"),
                    n.radiogroup("startCycle"),
                    n.radiogroup("getChecked").find("+ *").stop(!0).animate({
                      opacity: 1,
                    }),
                    n.radiogroup("getUnchecked").find("+ *").stop(!0).animate({
                      opacity: 0,
                    });
                },
              }),
              e.find(":checkbox").on({
                change: function (e) {
                  var i = t(this);
                  i.is(":checked") &&
                    (i.parent().find(".video").vimeo("play"),
                    n.radiogroup("pauseCycle"));
                },
              });
          },
        });
      })(jQuery);
    }
  ),
  !(function (t) {
    var e,
      n,
      i = "0.4.2",
      r = "hasOwnProperty",
      o = /[\.\/]/,
      a = /\s*,\s*/,
      s = "*",
      u = function (t, e) {
        return t - e;
      },
      l = {
        n: {},
      },
      c = function () {
        for (var t = 0, e = this.length; e > t; t++)
          if ("undefined" != typeof this[t]) return this[t];
      },
      h = function () {
        for (var t = this.length; --t; )
          if ("undefined" != typeof this[t]) return this[t];
      },
      f = function (t, i) {
        t = String(t);
        var r,
          o = n,
          a = Array.prototype.slice.call(arguments, 2),
          s = f.listeners(t),
          l = 0,
          d = [],
          p = {},
          g = [],
          v = e;
        (g.firstDefined = c), (g.lastDefined = h), (e = t), (n = 0);
        for (var m = 0, y = s.length; y > m; m++)
          "zIndex" in s[m] &&
            (d.push(s[m].zIndex), s[m].zIndex < 0 && (p[s[m].zIndex] = s[m]));
        for (d.sort(u); d[l] < 0; )
          if (((r = p[d[l++]]), g.push(r.apply(i, a)), n)) return (n = o), g;
        for (m = 0; y > m; m++)
          if (((r = s[m]), "zIndex" in r))
            if (r.zIndex == d[l]) {
              if ((g.push(r.apply(i, a)), n)) break;
              do if ((l++, (r = p[d[l]]), r && g.push(r.apply(i, a)), n)) break;
              while (r);
            } else p[r.zIndex] = r;
          else if ((g.push(r.apply(i, a)), n)) break;
        return (n = o), (e = v), g;
      };
    (f._events = l),
      (f.listeners = function (t) {
        var e,
          n,
          i,
          r,
          a,
          u,
          c,
          h,
          f = t.split(o),
          d = l,
          p = [d],
          g = [];
        for (r = 0, a = f.length; a > r; r++) {
          for (h = [], u = 0, c = p.length; c > u; u++)
            for (d = p[u].n, n = [d[f[r]], d[s]], i = 2; i--; )
              (e = n[i]), e && (h.push(e), (g = g.concat(e.f || [])));
          p = h;
        }
        return g;
      }),
      (f.on = function (t, e) {
        if (((t = String(t)), "function" != typeof e)) return function () {};
        for (var n = t.split(a), i = 0, r = n.length; r > i; i++)
          !(function (t) {
            for (var n, i = t.split(o), r = l, a = 0, s = i.length; s > a; a++)
              (r = r.n),
                (r =
                  (r.hasOwnProperty(i[a]) && r[i[a]]) ||
                  (r[i[a]] = {
                    n: {},
                  }));
            for (r.f = r.f || [], a = 0, s = r.f.length; s > a; a++)
              if (r.f[a] == e) {
                n = !0;
                break;
              }
            !n && r.f.push(e);
          })(n[i]);
        return function (t) {
          +t == +t && (e.zIndex = +t);
        };
      }),
      (f.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
          f.apply(
            null,
            [t, null].concat(e).concat([].slice.call(arguments, 0))
          );
        };
      }),
      (f.stop = function () {
        n = 1;
      }),
      (f.nt = function (t) {
        return t
          ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e)
          : e;
      }),
      (f.nts = function () {
        return e.split(o);
      }),
      (f.off = f.unbind =
        function (t, e) {
          if (!t)
            return void (f._events = l =
              {
                n: {},
              });
          var n = t.split(a);
          if (n.length > 1)
            for (var i = 0, u = n.length; u > i; i++) f.off(n[i], e);
          else {
            n = t.split(o);
            var c,
              h,
              d,
              i,
              u,
              p,
              g,
              v = [l];
            for (i = 0, u = n.length; u > i; i++)
              for (p = 0; p < v.length; p += d.length - 2) {
                if (((d = [p, 1]), (c = v[p].n), n[i] != s))
                  c[n[i]] && d.push(c[n[i]]);
                else for (h in c) c[r](h) && d.push(c[h]);
                v.splice.apply(v, d);
              }
            for (i = 0, u = v.length; u > i; i++)
              for (c = v[i]; c.n; ) {
                if (e) {
                  if (c.f) {
                    for (p = 0, g = c.f.length; g > p; p++)
                      if (c.f[p] == e) {
                        c.f.splice(p, 1);
                        break;
                      }
                    !c.f.length && delete c.f;
                  }
                  for (h in c.n)
                    if (c.n[r](h) && c.n[h].f) {
                      var m = c.n[h].f;
                      for (p = 0, g = m.length; g > p; p++)
                        if (m[p] == e) {
                          m.splice(p, 1);
                          break;
                        }
                      !m.length && delete c.n[h].f;
                    }
                } else {
                  delete c.f;
                  for (h in c.n) c.n[r](h) && c.n[h].f && delete c.n[h].f;
                }
                c = c.n;
              }
          }
        }),
      (f.once = function (t, e) {
        var n = function () {
          return f.unbind(t, n), e.apply(this, arguments);
        };
        return f.on(t, n);
      }),
      (f.version = i),
      (f.toString = function () {
        return "You are running Eve " + i;
      }),
      "undefined" != typeof module && module.exports
        ? (module.exports = f)
        : "function" == typeof define && define.amd
        ? define("eve", [], function () {
            return f;
          })
        : (t.eve = f);
  })(this),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("Snap.svg/snap.svg-min", ["eve"], function (n) {
          return e(t, n);
        })
      : e(t, t.eve);
  })(this, function (t, e) {
    var n = (function (e) {
        var n = {},
          i =
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            t.msRequestAnimationFrame ||
            function (t) {
              setTimeout(t, 16);
            },
          r =
            Array.isArray ||
            function (t) {
              return (
                t instanceof Array ||
                "[object Array]" == Object.prototype.toString.call(t)
              );
            },
          o = 0,
          a = "M" + (+new Date()).toString(36),
          s = function () {
            return a + (o++).toString(36);
          },
          u =
            Date.now ||
            function () {
              return +new Date();
            },
          l = function (t) {
            var e = this;
            if (null == t) return e.s;
            var n = e.s - t;
            (e.b += e.dur * n), (e.B += e.dur * n), (e.s = t);
          },
          c = function (t) {
            var e = this;
            return null == t ? e.spd : void (e.spd = t);
          },
          h = function (t) {
            var e = this;
            return null == t
              ? e.dur
              : ((e.s = (e.s * t) / e.dur), void (e.dur = t));
          },
          f = function () {
            var t = this;
            delete n[t.id], t.update(), e("mina.stop." + t.id, t);
          },
          d = function () {
            var t = this;
            t.pdif || (delete n[t.id], t.update(), (t.pdif = t.get() - t.b));
          },
          p = function () {
            var t = this;
            t.pdif && ((t.b = t.get() - t.pdif), delete t.pdif, (n[t.id] = t));
          },
          g = function () {
            var t,
              e = this;
            if (r(e.start)) {
              t = [];
              for (var n = 0, i = e.start.length; i > n; n++)
                t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s);
            } else t = +e.start + (e.end - e.start) * e.easing(e.s);
            e.set(t);
          },
          v = function () {
            var t = 0;
            for (var r in n)
              if (n.hasOwnProperty(r)) {
                var o = n[r],
                  a = o.get();
                t++,
                  (o.s = (a - o.b) / (o.dur / o.spd)),
                  o.s >= 1 &&
                    (delete n[r],
                    (o.s = 1),
                    t--,
                    (function (t) {
                      setTimeout(function () {
                        e("mina.finish." + t.id, t);
                      });
                    })(o)),
                  o.update();
              }
            t && i(v);
          },
          m = function (t, e, r, o, a, u, y) {
            var b = {
              id: s(),
              start: t,
              end: e,
              b: r,
              s: 0,
              dur: o - r,
              spd: 1,
              get: a,
              set: u,
              easing: y || m.linear,
              status: l,
              speed: c,
              duration: h,
              stop: f,
              pause: d,
              resume: p,
              update: g,
            };
            n[b.id] = b;
            var x,
              w = 0;
            for (x in n) if (n.hasOwnProperty(x) && (w++, 2 == w)) break;
            return 1 == w && i(v), b;
          };
        return (
          (m.time = u),
          (m.getById = function (t) {
            return n[t] || null;
          }),
          (m.linear = function (t) {
            return t;
          }),
          (m.easeout = function (t) {
            return Math.pow(t, 1.7);
          }),
          (m.easein = function (t) {
            return Math.pow(t, 0.48);
          }),
          (m.easeinout = function (t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = 0.48 - t / 1.04,
              n = Math.sqrt(0.1734 + e * e),
              i = n - e,
              r = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1),
              o = -n - e,
              a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
              s = r + a + 0.5;
            return 3 * (1 - s) * s * s + s * s * s;
          }),
          (m.backin = function (t) {
            if (1 == t) return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          }),
          (m.backout = function (t) {
            if (0 == t) return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1;
          }),
          (m.elastic = function (t) {
            return t == !!t
              ? t
              : Math.pow(2, -10 * t) *
                  Math.sin((2 * (t - 0.075) * Math.PI) / 0.3) +
                  1;
          }),
          (m.bounce = function (t) {
            var e,
              n = 7.5625,
              i = 2.75;
            return (
              1 / i > t
                ? (e = n * t * t)
                : 2 / i > t
                ? ((t -= 1.5 / i), (e = n * t * t + 0.75))
                : 2.5 / i > t
                ? ((t -= 2.25 / i), (e = n * t * t + 0.9375))
                : ((t -= 2.625 / i), (e = n * t * t + 0.984375)),
              e
            );
          }),
          (t.mina = m),
          m
        );
      })("undefined" == typeof e ? function () {} : e),
      i = (function () {
        function i(t, e) {
          if (t) {
            if (t.tagName) return k(t);
            if (o(t, "array") && i.set) return i.set.apply(i, t);
            if (t instanceof x) return t;
            if (null == e) return (t = _.doc.querySelector(t)), k(t);
          }
          return (
            (t = null == t ? "100%" : t),
            (e = null == e ? "100%" : e),
            new E(t, e)
          );
        }
        function r(t, e) {
          if (e) {
            if (
              ("#text" == t && (t = _.doc.createTextNode(e.text || "")),
              "string" == typeof t && (t = r(t)),
              "string" == typeof e)
            )
              return "xlink:" == e.substring(0, 6)
                ? t.getAttributeNS(U, e.substring(6))
                : "xml:" == e.substring(0, 4)
                ? t.getAttributeNS(H, e.substring(4))
                : t.getAttribute(e);
            for (var n in e)
              if (e[S](n)) {
                var i = T(e[n]);
                i
                  ? "xlink:" == n.substring(0, 6)
                    ? t.setAttributeNS(U, n.substring(6), i)
                    : "xml:" == n.substring(0, 4)
                    ? t.setAttributeNS(H, n.substring(4), i)
                    : t.setAttribute(n, i)
                  : t.removeAttribute(n);
              }
          } else t = _.doc.createElementNS(H, t);
          return t;
        }
        function o(t, e) {
          return (
            (e = T.prototype.toLowerCase.call(e)),
            "finite" == e
              ? isFinite(t)
              : "array" == e &&
                (t instanceof Array || (Array.isArray && Array.isArray(t)))
              ? !0
              : ("null" == e && null === t) ||
                (e == typeof t && null !== t) ||
                ("object" == e && t === Object(t)) ||
                B.call(t).slice(8, -1).toLowerCase() == e
          );
        }
        function a(t) {
          if ("function" == typeof t || Object(t) !== t) return t;
          var e = new t.constructor();
          for (var n in t) t[S](n) && (e[n] = a(t[n]));
          return e;
        }
        function s(t, e) {
          for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e) return t.push(t.splice(n, 1)[0]);
        }
        function u(t, e, n) {
          function i() {
            var r = Array.prototype.slice.call(arguments, 0),
              o = r.join("␀"),
              a = (i.cache = i.cache || {}),
              u = (i.count = i.count || []);
            return a[S](o)
              ? (s(u, o), n ? n(a[o]) : a[o])
              : (u.length >= 1e3 && delete a[u.shift()],
                u.push(o),
                (a[o] = t.apply(e, r)),
                n ? n(a[o]) : a[o]);
          }
          return i;
        }
        function l(t, e, n, i, r, o) {
          if (null == r) {
            var a = t - n,
              s = e - i;
            return a || s ? (180 + (180 * $.atan2(-s, -a)) / M + 360) % 360 : 0;
          }
          return l(t, e, r, o) - l(n, i, r, o);
        }
        function c(t) {
          return ((t % 360) * M) / 180;
        }
        function h(t) {
          return ((180 * t) / M) % 360;
        }
        function f(t) {
          var e = [];
          return (
            (t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, n, i) {
              return (
                (i = i.split(/\s*,\s*|\s+/)),
                "rotate" == n && 1 == i.length && i.push(0, 0),
                "scale" == n &&
                  (i.length > 2
                    ? (i = i.slice(0, 2))
                    : 2 == i.length && i.push(0, 0),
                  1 == i.length && i.push(i[0], 0, 0)),
                e.push(
                  "skewX" == n
                    ? ["m", 1, 0, $.tan(c(i[0])), 1, 0, 0]
                    : "skewY" == n
                    ? ["m", 1, $.tan(c(i[0])), 0, 1, 0, 0]
                    : [n.charAt(0)].concat(i)
                ),
                t
              );
            })),
            e
          );
        }
        function d(t, e) {
          var n = rt(t),
            r = new i.Matrix();
          if (n)
            for (var o = 0, a = n.length; a > o; o++) {
              var s,
                u,
                l,
                c,
                h,
                f = n[o],
                d = f.length,
                p = T(f[0]).toLowerCase(),
                g = f[0] != p,
                v = g ? r.invert() : 0;
              "t" == p && 2 == d
                ? r.translate(f[1], 0)
                : "t" == p && 3 == d
                ? g
                  ? ((s = v.x(0, 0)),
                    (u = v.y(0, 0)),
                    (l = v.x(f[1], f[2])),
                    (c = v.y(f[1], f[2])),
                    r.translate(l - s, c - u))
                  : r.translate(f[1], f[2])
                : "r" == p
                ? 2 == d
                  ? ((h = h || e),
                    r.rotate(f[1], h.x + h.width / 2, h.y + h.height / 2))
                  : 4 == d &&
                    (g
                      ? ((l = v.x(f[2], f[3])),
                        (c = v.y(f[2], f[3])),
                        r.rotate(f[1], l, c))
                      : r.rotate(f[1], f[2], f[3]))
                : "s" == p
                ? 2 == d || 3 == d
                  ? ((h = h || e),
                    r.scale(
                      f[1],
                      f[d - 1],
                      h.x + h.width / 2,
                      h.y + h.height / 2
                    ))
                  : 4 == d
                  ? g
                    ? ((l = v.x(f[2], f[3])),
                      (c = v.y(f[2], f[3])),
                      r.scale(f[1], f[1], l, c))
                    : r.scale(f[1], f[1], f[2], f[3])
                  : 5 == d &&
                    (g
                      ? ((l = v.x(f[3], f[4])),
                        (c = v.y(f[3], f[4])),
                        r.scale(f[1], f[2], l, c))
                      : r.scale(f[1], f[2], f[3], f[4]))
                : "m" == p &&
                  7 == d &&
                  r.add(f[1], f[2], f[3], f[4], f[5], f[6]);
            }
          return r;
        }
        function p(t, e) {
          if (null == e) {
            var n = !0;
            if (
              ((e = t.node.getAttribute(
                "linearGradient" == t.type || "radialGradient" == t.type
                  ? "gradientTransform"
                  : "pattern" == t.type
                  ? "patternTransform"
                  : "transform"
              )),
              !e)
            )
              return new i.Matrix();
            e = f(e);
          } else
            (e = i._.rgTransform.test(e)
              ? T(e).replace(/\.{3}|\u2026/g, t._.transform || N)
              : f(e)),
              o(e, "array") && (e = i.path ? i.path.toString.call(e) : T(e)),
              (t._.transform = e);
          var r = d(e, t.getBBox(1));
          return n ? r : void (t.matrix = r);
        }
        function v(t) {
          var e =
              (t.node.ownerSVGElement && k(t.node.ownerSVGElement)) ||
              (t.node.parentNode && k(t.node.parentNode)) ||
              i.select("svg") ||
              i(0, 0),
            n = e.select("defs"),
            r = null == n ? !1 : n.node;
          return r || (r = C("defs", e.node).node), r;
        }
        function m(t) {
          return (
            (t.node.ownerSVGElement && k(t.node.ownerSVGElement)) ||
            i.select("svg")
          );
        }
        function y(t, e, n) {
          function i(t) {
            if (null == t) return N;
            if (t == +t) return t;
            r(l, {
              width: t,
            });
            try {
              return l.getBBox().width;
            } catch (e) {
              return 0;
            }
          }
          function o(t) {
            if (null == t) return N;
            if (t == +t) return t;
            r(l, {
              height: t,
            });
            try {
              return l.getBBox().height;
            } catch (e) {
              return 0;
            }
          }
          function a(i, r) {
            null == e
              ? (u[i] = r(t.attr(i) || 0))
              : i == e && (u = r(null == n ? t.attr(i) || 0 : n));
          }
          var s = m(t).node,
            u = {},
            l = s.querySelector(".svg---mgr");
          switch (
            (l ||
              ((l = r("rect")),
              r(l, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: "svg---mgr",
                fill: "none",
              }),
              s.appendChild(l)),
            t.type)
          ) {
            case "rect":
              a("rx", i), a("ry", o);
            case "image":
              a("width", i), a("height", o);
            case "text":
              a("x", i), a("y", o);
              break;
            case "circle":
              a("cx", i), a("cy", o), a("r", i);
              break;
            case "ellipse":
              a("cx", i), a("cy", o), a("rx", i), a("ry", o);
              break;
            case "line":
              a("x1", i), a("x2", i), a("y1", o), a("y2", o);
              break;
            case "marker":
              a("refX", i),
                a("markerWidth", i),
                a("refY", o),
                a("markerHeight", o);
              break;
            case "radialGradient":
              a("fx", i), a("fy", o);
              break;
            case "tspan":
              a("dx", i), a("dy", o);
              break;
            default:
              a(e, i);
          }
          return s.removeChild(l), u;
        }
        function b(t) {
          o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
          for (var e = 0, n = 0, i = this.node; this[e]; ) delete this[e++];
          for (e = 0; e < t.length; e++)
            "set" == t[e].type
              ? t[e].forEach(function (t) {
                  i.appendChild(t.node);
                })
              : i.appendChild(t[e].node);
          var r = i.childNodes;
          for (e = 0; e < r.length; e++) this[n++] = k(r[e]);
          return this;
        }
        function x(t) {
          if (t.snap in Q) return Q[t.snap];
          var e,
            n = (this.id = W());
          try {
            e = t.ownerSVGElement;
          } catch (i) {}
          if (
            ((this.node = t),
            e && (this.paper = new E(e)),
            (this.type = t.tagName),
            (this.anims = {}),
            (this._ = {
              transform: [],
            }),
            (t.snap = n),
            (Q[n] = this),
            "g" == this.type && (this.add = b),
            this.type in
              {
                g: 1,
                mask: 1,
                pattern: 1,
              })
          )
            for (var r in E.prototype)
              E.prototype[S](r) && (this[r] = E.prototype[r]);
        }
        function w(t) {
          this.node = t;
        }
        function C(t, e) {
          var n = r(t);
          e.appendChild(n);
          var i = k(n);
          return i;
        }
        function E(t, e) {
          var n,
            i,
            o,
            a = E.prototype;
          if (t && "svg" == t.tagName) {
            if (t.snap in Q) return Q[t.snap];
            var s = t.ownerDocument;
            (n = new x(t)),
              (i = t.getElementsByTagName("desc")[0]),
              (o = t.getElementsByTagName("defs")[0]),
              i ||
                ((i = r("desc")),
                i.appendChild(s.createTextNode("Created with Snap")),
                n.node.appendChild(i)),
              o || ((o = r("defs")), n.node.appendChild(o)),
              (n.defs = o);
            for (var u in a) a[S](u) && (n[u] = a[u]);
            n.paper = n.root = n;
          } else
            (n = C("svg", _.doc.body)),
              r(n.node, {
                height: e,
                version: 1.1,
                width: t,
                xmlns: H,
              });
          return n;
        }
        function k(t) {
          return t
            ? t instanceof x || t instanceof w
              ? t
              : t.tagName && "svg" == t.tagName.toLowerCase()
              ? new E(t)
              : t.tagName &&
                "object" == t.tagName.toLowerCase() &&
                "image/svg+xml" == t.type
              ? new E(t.contentDocument.getElementsByTagName("svg")[0])
              : new x(t)
            : t;
        }
        (i.version = "0.3.0"),
          (i.toString = function () {
            return "Snap v" + this.version;
          }),
          (i._ = {});
        var _ = {
          win: t,
          doc: t.document,
        };
        i._.glob = _;
        var S = "hasOwnProperty",
          T = String,
          j = parseFloat,
          P = parseInt,
          $ = Math,
          A = $.max,
          O = $.min,
          q = $.abs,
          M = ($.pow, $.PI),
          N = ($.round, ""),
          F = " ",
          B = Object.prototype.toString,
          I =
            /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
          D = " \n\x0B\f\r   ᠎             　\u2028\u2029",
          R =
            ((i._.separator = new RegExp("[," + D + "]+")),
            new RegExp("[" + D + "]", "g"),
            new RegExp("[" + D + "]*,[" + D + "]*")),
          L = {
            hs: 1,
            rg: 1,
          },
          X = new RegExp(
            "([a-z])[" +
              D +
              ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" +
              D +
              "]*,?[" +
              D +
              "]*)+)",
            "ig"
          ),
          Y = new RegExp(
            "([rstm])[" +
              D +
              ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" +
              D +
              "]*,?[" +
              D +
              "]*)+)",
            "ig"
          ),
          V = new RegExp(
            "(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + D + "]*,?[" + D + "]*",
            "ig"
          ),
          z = 0,
          G = "S" + (+new Date()).toString(36),
          W = function () {
            return G + (z++).toString(36);
          },
          U = "http://www.w3.org/1999/xlink",
          H = "http://www.w3.org/2000/svg",
          Q = {},
          K = (i.url = function (t) {
            return "url('#" + t + "')";
          });
        (i._.$ = r),
          (i._.id = W),
          (i.format = (function () {
            var t = /\{([^\}]+)\}/g,
              e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
              n = function (t, n, i) {
                var r = i;
                return (
                  n.replace(e, function (t, e, n, i, o) {
                    (e = e || i),
                      r &&
                        (e in r && (r = r[e]),
                        "function" == typeof r && o && (r = r()));
                  }),
                  (r = (null == r || r == i ? t : r) + "")
                );
              };
            return function (e, i) {
              return T(e).replace(t, function (t, e) {
                return n(t, e, i);
              });
            };
          })()),
          (i._.clone = a),
          (i._.cacher = u),
          (i.rad = c),
          (i.deg = h),
          (i.angle = l),
          (i.is = o),
          (i.snapTo = function (t, e, n) {
            if (((n = o(n, "finite") ? n : 10), o(t, "array"))) {
              for (var i = t.length; i--; ) if (q(t[i] - e) <= n) return t[i];
            } else {
              t = +t;
              var r = e % t;
              if (n > r) return e - r;
              if (r > t - n) return e - r + t;
            }
            return e;
          }),
          (i.getRGB = u(function (t) {
            if (!t || (t = T(t)).indexOf("-") + 1)
              return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: et,
              };
            if ("none" == t)
              return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: et,
              };
            if (
              (!(L[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) &&
                (t = Z(t)),
              !t)
            )
              return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: et,
              };
            var e,
              n,
              r,
              a,
              s,
              u,
              l = t.match(I);
            return l
              ? (l[2] &&
                  ((r = P(l[2].substring(5), 16)),
                  (n = P(l[2].substring(3, 5), 16)),
                  (e = P(l[2].substring(1, 3), 16))),
                l[3] &&
                  ((r = P((s = l[3].charAt(3)) + s, 16)),
                  (n = P((s = l[3].charAt(2)) + s, 16)),
                  (e = P((s = l[3].charAt(1)) + s, 16))),
                l[4] &&
                  ((u = l[4].split(R)),
                  (e = j(u[0])),
                  "%" == u[0].slice(-1) && (e *= 2.55),
                  (n = j(u[1])),
                  "%" == u[1].slice(-1) && (n *= 2.55),
                  (r = j(u[2])),
                  "%" == u[2].slice(-1) && (r *= 2.55),
                  "rgba" == l[1].toLowerCase().slice(0, 4) && (a = j(u[3])),
                  u[3] && "%" == u[3].slice(-1) && (a /= 100)),
                l[5]
                  ? ((u = l[5].split(R)),
                    (e = j(u[0])),
                    "%" == u[0].slice(-1) && (e /= 100),
                    (n = j(u[1])),
                    "%" == u[1].slice(-1) && (n /= 100),
                    (r = j(u[2])),
                    "%" == u[2].slice(-1) && (r /= 100),
                    ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) &&
                      (e /= 360),
                    "hsba" == l[1].toLowerCase().slice(0, 4) && (a = j(u[3])),
                    u[3] && "%" == u[3].slice(-1) && (a /= 100),
                    i.hsb2rgb(e, n, r, a))
                  : l[6]
                  ? ((u = l[6].split(R)),
                    (e = j(u[0])),
                    "%" == u[0].slice(-1) && (e /= 100),
                    (n = j(u[1])),
                    "%" == u[1].slice(-1) && (n /= 100),
                    (r = j(u[2])),
                    "%" == u[2].slice(-1) && (r /= 100),
                    ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) &&
                      (e /= 360),
                    "hsla" == l[1].toLowerCase().slice(0, 4) && (a = j(u[3])),
                    u[3] && "%" == u[3].slice(-1) && (a /= 100),
                    i.hsl2rgb(e, n, r, a))
                  : ((e = O($.round(e), 255)),
                    (n = O($.round(n), 255)),
                    (r = O($.round(r), 255)),
                    (a = O(A(a, 0), 1)),
                    (l = {
                      r: e,
                      g: n,
                      b: r,
                      toString: et,
                    }),
                    (l.hex =
                      "#" +
                      (16777216 | r | (n << 8) | (e << 16))
                        .toString(16)
                        .slice(1)),
                    (l.opacity = o(a, "finite") ? a : 1),
                    l))
              : {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: "none",
                  error: 1,
                  toString: et,
                };
          }, i)),
          (i.hsb = u(function (t, e, n) {
            return i.hsb2rgb(t, e, n).hex;
          })),
          (i.hsl = u(function (t, e, n) {
            return i.hsl2rgb(t, e, n).hex;
          })),
          (i.rgb = u(function (t, e, n, i) {
            if (o(i, "finite")) {
              var r = $.round;
              return "rgba(" + [r(t), r(e), r(n), +i.toFixed(2)] + ")";
            }
            return (
              "#" + (16777216 | n | (e << 8) | (t << 16)).toString(16).slice(1)
            );
          }));
        var Z = function (t) {
            var e =
                _.doc.getElementsByTagName("head")[0] ||
                _.doc.getElementsByTagName("svg")[0],
              n = "rgb(255, 0, 0)";
            return (Z = u(function (t) {
              if ("red" == t.toLowerCase()) return n;
              (e.style.color = n), (e.style.color = t);
              var i = _.doc.defaultView
                .getComputedStyle(e, N)
                .getPropertyValue("color");
              return i == n ? null : i;
            }))(t);
          },
          J = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")";
          },
          tt = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")";
          },
          et = function () {
            return 1 == this.opacity || null == this.opacity
              ? this.hex
              : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
          },
          nt = function (t, e, n) {
            if (
              (null == e &&
                o(t, "object") &&
                "r" in t &&
                "g" in t &&
                "b" in t &&
                ((n = t.b), (e = t.g), (t = t.r)),
              null == e && o(t, string))
            ) {
              var r = i.getRGB(t);
              (t = r.r), (e = r.g), (n = r.b);
            }
            return (
              (t > 1 || e > 1 || n > 1) && ((t /= 255), (e /= 255), (n /= 255)),
              [t, e, n]
            );
          },
          it = function (t, e, n, r) {
            (t = $.round(255 * t)),
              (e = $.round(255 * e)),
              (n = $.round(255 * n));
            var a = {
              r: t,
              g: e,
              b: n,
              opacity: o(r, "finite") ? r : 1,
              hex: i.rgb(t, e, n),
              toString: et,
            };
            return o(r, "finite") && (a.opacity = r), a;
          };
        (i.color = function (t) {
          var e;
          return (
            o(t, "object") && "h" in t && "s" in t && "b" in t
              ? ((e = i.hsb2rgb(t)),
                (t.r = e.r),
                (t.g = e.g),
                (t.b = e.b),
                (t.opacity = 1),
                (t.hex = e.hex))
              : o(t, "object") && "h" in t && "s" in t && "l" in t
              ? ((e = i.hsl2rgb(t)),
                (t.r = e.r),
                (t.g = e.g),
                (t.b = e.b),
                (t.opacity = 1),
                (t.hex = e.hex))
              : (o(t, "string") && (t = i.getRGB(t)),
                o(t, "object") &&
                "r" in t &&
                "g" in t &&
                "b" in t &&
                !("error" in t)
                  ? ((e = i.rgb2hsl(t)),
                    (t.h = e.h),
                    (t.s = e.s),
                    (t.l = e.l),
                    (e = i.rgb2hsb(t)),
                    (t.v = e.b))
                  : ((t = {
                      hex: "none",
                    }),
                    (t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1),
                    (t.error = 1))),
            (t.toString = et),
            t
          );
        }),
          (i.hsb2rgb = function (t, e, n, i) {
            o(t, "object") &&
              "h" in t &&
              "s" in t &&
              "b" in t &&
              ((n = t.b), (e = t.s), (t = t.h), (i = t.o)),
              (t *= 360);
            var r, a, s, u, l;
            return (
              (t = (t % 360) / 60),
              (l = n * e),
              (u = l * (1 - q((t % 2) - 1))),
              (r = a = s = n - l),
              (t = ~~t),
              (r += [l, u, 0, 0, u, l][t]),
              (a += [u, l, l, u, 0, 0][t]),
              (s += [0, 0, u, l, l, u][t]),
              it(r, a, s, i)
            );
          }),
          (i.hsl2rgb = function (t, e, n, i) {
            o(t, "object") &&
              "h" in t &&
              "s" in t &&
              "l" in t &&
              ((n = t.l), (e = t.s), (t = t.h)),
              (t > 1 || e > 1 || n > 1) && ((t /= 360), (e /= 100), (n /= 100)),
              (t *= 360);
            var r, a, s, u, l;
            return (
              (t = (t % 360) / 60),
              (l = 2 * e * (0.5 > n ? n : 1 - n)),
              (u = l * (1 - q((t % 2) - 1))),
              (r = a = s = n - l / 2),
              (t = ~~t),
              (r += [l, u, 0, 0, u, l][t]),
              (a += [u, l, l, u, 0, 0][t]),
              (s += [0, 0, u, l, l, u][t]),
              it(r, a, s, i)
            );
          }),
          (i.rgb2hsb = function (t, e, n) {
            (n = nt(t, e, n)), (t = n[0]), (e = n[1]), (n = n[2]);
            var i, r, o, a;
            return (
              (o = A(t, e, n)),
              (a = o - O(t, e, n)),
              (i =
                0 == a
                  ? null
                  : o == t
                  ? (e - n) / a
                  : o == e
                  ? (n - t) / a + 2
                  : (t - e) / a + 4),
              (i = (((i + 360) % 6) * 60) / 360),
              (r = 0 == a ? 0 : a / o),
              {
                h: i,
                s: r,
                b: o,
                toString: J,
              }
            );
          }),
          (i.rgb2hsl = function (t, e, n) {
            (n = nt(t, e, n)), (t = n[0]), (e = n[1]), (n = n[2]);
            var i, r, o, a, s, u;
            return (
              (a = A(t, e, n)),
              (s = O(t, e, n)),
              (u = a - s),
              (i =
                0 == u
                  ? null
                  : a == t
                  ? (e - n) / u
                  : a == e
                  ? (n - t) / u + 2
                  : (t - e) / u + 4),
              (i = (((i + 360) % 6) * 60) / 360),
              (o = (a + s) / 2),
              (r = 0 == u ? 0 : 0.5 > o ? u / (2 * o) : u / (2 - 2 * o)),
              {
                h: i,
                s: r,
                l: o,
                toString: tt,
              }
            );
          }),
          (i.parsePathString = function (t) {
            if (!t) return null;
            var e = i.path(t);
            if (e.arr) return i.path.clone(e.arr);
            var n = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0,
              },
              r = [];
            return (
              o(t, "array") && o(t[0], "array") && (r = i.path.clone(t)),
              r.length ||
                T(t).replace(X, function (t, e, i) {
                  var o = [],
                    a = e.toLowerCase();
                  if (
                    (i.replace(V, function (t, e) {
                      e && o.push(+e);
                    }),
                    "m" == a &&
                      o.length > 2 &&
                      (r.push([e].concat(o.splice(0, 2))),
                      (a = "l"),
                      (e = "m" == e ? "l" : "L")),
                    "o" == a && 1 == o.length && r.push([e, o[0]]),
                    "r" == a)
                  )
                    r.push([e].concat(o));
                  else
                    for (
                      ;
                      o.length >= n[a] &&
                      (r.push([e].concat(o.splice(0, n[a]))), n[a]);

                    );
                }),
              (r.toString = i.path.toString),
              (e.arr = i.path.clone(r)),
              r
            );
          });
        var rt = (i.parseTransformString = function (t) {
          if (!t) return null;
          var e = [];
          return (
            o(t, "array") && o(t[0], "array") && (e = i.path.clone(t)),
            e.length ||
              T(t).replace(Y, function (t, n, i) {
                var r = [];
                n.toLowerCase(),
                  i.replace(V, function (t, e) {
                    e && r.push(+e);
                  }),
                  e.push([n].concat(r));
              }),
            (e.toString = i.path.toString),
            e
          );
        });
        (i._.svgTransform2string = f),
          (i._.rgTransform = new RegExp("^[a-z][" + D + "]*-?\\.?\\d", "i")),
          (i._.transform2matrix = d),
          (i._unit2px = y),
          _.doc.contains || _.doc.compareDocumentPosition
            ? function (t, e) {
                var n = 9 == t.nodeType ? t.documentElement : t,
                  i = e && e.parentNode;
                return (
                  t == i ||
                  !(
                    !i ||
                    1 != i.nodeType ||
                    !(n.contains
                      ? n.contains(i)
                      : t.compareDocumentPosition &&
                        16 & t.compareDocumentPosition(i))
                  )
                );
              }
            : function (t, e) {
                if (e) for (; e; ) if (((e = e.parentNode), e == t)) return !0;
                return !1;
              },
          (i._.getSomeDefs = v),
          (i._.getSomeSVG = m),
          (i.select = function (t) {
            return k(_.doc.querySelector(t));
          }),
          (i.selectAll = function (t) {
            for (
              var e = _.doc.querySelectorAll(t), n = (i.set || Array)(), r = 0;
              r < e.length;
              r++
            )
              n.push(k(e[r]));
            return n;
          }),
          setInterval(function () {
            for (var t in Q)
              if (Q[S](t)) {
                var e = Q[t],
                  n = e.node;
                (("svg" != e.type && !n.ownerSVGElement) ||
                  ("svg" == e.type &&
                    (!n.parentNode ||
                      ("ownerSVGElement" in n.parentNode &&
                        !n.ownerSVGElement)))) &&
                  delete Q[t];
              }
          }, 1e4),
          (function (t) {
            function a(t) {
              function e(t, e) {
                var n = r(t.node, e);
                (n = n && n.match(a)),
                  (n = n && n[2]),
                  n &&
                    "#" == n.charAt() &&
                    ((n = n.substring(1)),
                    n &&
                      (u[n] = (u[n] || []).concat(function (n) {
                        var i = {};
                        (i[e] = K(n)), r(t.node, i);
                      })));
              }
              function n(t) {
                var e = r(t.node, "xlink:href");
                e &&
                  "#" == e.charAt() &&
                  ((e = e.substring(1)),
                  e &&
                    (u[e] = (u[e] || []).concat(function (e) {
                      t.attr("xlink:href", "#" + e);
                    })));
              }
              for (
                var i,
                  o = t.selectAll("*"),
                  a = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                  s = [],
                  u = {},
                  l = 0,
                  c = o.length;
                c > l;
                l++
              ) {
                (i = o[l]),
                  e(i, "fill"),
                  e(i, "stroke"),
                  e(i, "filter"),
                  e(i, "mask"),
                  e(i, "clip-path"),
                  n(i);
                var h = r(i.node, "id");
                h &&
                  (r(i.node, {
                    id: i.id,
                  }),
                  s.push({
                    old: h,
                    id: i.id,
                  }));
              }
              for (l = 0, c = s.length; c > l; l++) {
                var f = u[s[l].old];
                if (f) for (var d = 0, p = f.length; p > d; d++) f[d](s[l].id);
              }
            }
            function s(t, e, n) {
              return function (i) {
                var r = i.slice(t, e);
                return 1 == r.length && (r = r[0]), n ? n(r) : r;
              };
            }
            function u(t) {
              return function () {
                var e = t ? "<" + this.type : "",
                  n = this.node.attributes,
                  i = this.node.childNodes;
                if (t)
                  for (var r = 0, o = n.length; o > r; r++)
                    e +=
                      " " +
                      n[r].name +
                      '="' +
                      n[r].value.replace(/"/g, '"') +
                      '"';
                if (i.length) {
                  for (t && (e += ">"), r = 0, o = i.length; o > r; r++)
                    3 == i[r].nodeType
                      ? (e += i[r].nodeValue)
                      : 1 == i[r].nodeType && (e += k(i[r]).toString());
                  t && (e += "</" + this.type + ">");
                } else t && (e += "/>");
                return e;
              };
            }
            (t.attr = function (t, n) {
              var i = this;
              if ((i.node, !t)) return i;
              if (o(t, "string")) {
                if (!(arguments.length > 1))
                  return e("snap.util.getattr." + t, i).firstDefined();
                var r = {};
                (r[t] = n), (t = r);
              }
              for (var a in t) t[S](a) && e("snap.util.attr." + a, i, t[a]);
              return i;
            }),
              (t.getBBox = function (t) {
                if (!i.Matrix || !i.path) return this.node.getBBox();
                var e = this,
                  n = new i.Matrix();
                if (e.removed) return i._.box();
                for (; "use" == e.type; )
                  if (
                    (t ||
                      (n = n.add(
                        e
                          .transform()
                          .localMatrix.translate(
                            e.attr("x") || 0,
                            e.attr("y") || 0
                          )
                      )),
                    e.original)
                  )
                    e = e.original;
                  else {
                    var r = e.attr("xlink:href");
                    e = e.original = e.node.ownerDocument.getElementById(
                      r.substring(r.indexOf("#") + 1)
                    );
                  }
                var o = e._,
                  a = i.path.get[e.type] || i.path.get.deflt;
                try {
                  return t
                    ? ((o.bboxwt = a
                        ? i.path.getBBox((e.realPath = a(e)))
                        : i._.box(e.node.getBBox())),
                      i._.box(o.bboxwt))
                    : ((e.realPath = a(e)),
                      (e.matrix = e.transform().localMatrix),
                      (o.bbox = i.path.getBBox(
                        i.path.map(e.realPath, n.add(e.matrix))
                      )),
                      i._.box(o.bbox));
                } catch (s) {
                  return i._.box();
                }
              });
            var l = function () {
              return this.string;
            };
            (t.transform = function (t) {
              var e = this._;
              if (null == t) {
                for (
                  var n,
                    o = this,
                    a = new i.Matrix(this.node.getCTM()),
                    s = p(this),
                    u = [s],
                    c = new i.Matrix(),
                    h = s.toTransformString(),
                    f = T(s) == T(this.matrix) ? T(e.transform) : h;
                  "svg" != o.type && (o = o.parent());

                )
                  u.push(p(o));
                for (n = u.length; n--; ) c.add(u[n]);
                return {
                  string: f,
                  globalMatrix: a,
                  totalMatrix: c,
                  localMatrix: s,
                  diffMatrix: a.clone().add(s.invert()),
                  global: a.toTransformString(),
                  total: c.toTransformString(),
                  local: h,
                  toString: l,
                };
              }
              return (
                t instanceof i.Matrix ? (this.matrix = t) : p(this, t),
                this.node &&
                  ("linearGradient" == this.type ||
                  "radialGradient" == this.type
                    ? r(this.node, {
                        gradientTransform: this.matrix,
                      })
                    : "pattern" == this.type
                    ? r(this.node, {
                        patternTransform: this.matrix,
                      })
                    : r(this.node, {
                        transform: this.matrix,
                      })),
                this
              );
            }),
              (t.parent = function () {
                return k(this.node.parentNode);
              }),
              (t.append = t.add =
                function (t) {
                  if (t) {
                    if ("set" == t.type) {
                      var e = this;
                      return (
                        t.forEach(function (t) {
                          e.add(t);
                        }),
                        this
                      );
                    }
                    (t = k(t)),
                      this.node.appendChild(t.node),
                      (t.paper = this.paper);
                  }
                  return this;
                }),
              (t.appendTo = function (t) {
                return t && ((t = k(t)), t.append(this)), this;
              }),
              (t.prepend = function (t) {
                if (t) {
                  if ("set" == t.type) {
                    var e,
                      n = this;
                    return (
                      t.forEach(function (t) {
                        e ? e.after(t) : n.prepend(t), (e = t);
                      }),
                      this
                    );
                  }
                  t = k(t);
                  var i = t.parent();
                  this.node.insertBefore(t.node, this.node.firstChild),
                    this.add && this.add(),
                    (t.paper = this.paper),
                    this.parent() && this.parent().add(),
                    i && i.add();
                }
                return this;
              }),
              (t.prependTo = function (t) {
                return (t = k(t)), t.prepend(this), this;
              }),
              (t.before = function (t) {
                if ("set" == t.type) {
                  var e = this;
                  return (
                    t.forEach(function (t) {
                      var n = t.parent();
                      e.node.parentNode.insertBefore(t.node, e.node),
                        n && n.add();
                    }),
                    this.parent().add(),
                    this
                  );
                }
                t = k(t);
                var n = t.parent();
                return (
                  this.node.parentNode.insertBefore(t.node, this.node),
                  this.parent() && this.parent().add(),
                  n && n.add(),
                  (t.paper = this.paper),
                  this
                );
              }),
              (t.after = function (t) {
                t = k(t);
                var e = t.parent();
                return (
                  this.node.nextSibling
                    ? this.node.parentNode.insertBefore(
                        t.node,
                        this.node.nextSibling
                      )
                    : this.node.parentNode.appendChild(t.node),
                  this.parent() && this.parent().add(),
                  e && e.add(),
                  (t.paper = this.paper),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                t = k(t);
                var e = this.parent();
                return (
                  t.node.parentNode.insertBefore(this.node, t.node),
                  (this.paper = t.paper),
                  e && e.add(),
                  t.parent() && t.parent().add(),
                  this
                );
              }),
              (t.insertAfter = function (t) {
                t = k(t);
                var e = this.parent();
                return (
                  t.node.parentNode.insertBefore(this.node, t.node.nextSibling),
                  (this.paper = t.paper),
                  e && e.add(),
                  t.parent() && t.parent().add(),
                  this
                );
              }),
              (t.remove = function () {
                var t = this.parent();
                return (
                  this.node.parentNode &&
                    this.node.parentNode.removeChild(this.node),
                  delete this.paper,
                  (this.removed = !0),
                  t && t.add(),
                  this
                );
              }),
              (t.select = function (t) {
                return k(this.node.querySelector(t));
              }),
              (t.selectAll = function (t) {
                for (
                  var e = this.node.querySelectorAll(t),
                    n = (i.set || Array)(),
                    r = 0;
                  r < e.length;
                  r++
                )
                  n.push(k(e[r]));
                return n;
              }),
              (t.asPX = function (t, e) {
                return null == e && (e = this.attr(t)), +y(this, t, e);
              }),
              (t.use = function () {
                var t,
                  e = this.node.id;
                return (
                  e ||
                    ((e = this.id),
                    r(this.node, {
                      id: e,
                    })),
                  (t =
                    "linearGradient" == this.type ||
                    "radialGradient" == this.type ||
                    "pattern" == this.type
                      ? C(this.type, this.node.parentNode)
                      : C("use", this.node.parentNode)),
                  r(t.node, {
                    "xlink:href": "#" + e,
                  }),
                  (t.original = this),
                  t
                );
              });
            var c = /\S+/g;
            (t.addClass = function (t) {
              var e,
                n,
                i,
                r,
                o = (t || "").match(c) || [],
                a = this.node,
                s = a.className.baseVal,
                u = s.match(c) || [];
              if (o.length) {
                for (e = 0; (i = o[e++]); ) (n = u.indexOf(i)), ~n || u.push(i);
                (r = u.join(" ")), s != r && (a.className.baseVal = r);
              }
              return this;
            }),
              (t.removeClass = function (t) {
                var e,
                  n,
                  i,
                  r,
                  o = (t || "").match(c) || [],
                  a = this.node,
                  s = a.className.baseVal,
                  u = s.match(c) || [];
                if (u.length) {
                  for (e = 0; (i = o[e++]); )
                    (n = u.indexOf(i)), ~n && u.splice(n, 1);
                  (r = u.join(" ")), s != r && (a.className.baseVal = r);
                }
                return this;
              }),
              (t.hasClass = function (t) {
                var e = this.node,
                  n = e.className.baseVal,
                  i = n.match(c) || [];
                return !!~i.indexOf(t);
              }),
              (t.toggleClass = function (t, e) {
                if (null != e)
                  return e ? this.addClass(t) : this.removeClass(t);
                var n,
                  i,
                  r,
                  o,
                  a = (t || "").match(c) || [],
                  s = this.node,
                  u = s.className.baseVal,
                  l = u.match(c) || [];
                for (n = 0; (r = a[n++]); )
                  (i = l.indexOf(r)), ~i ? l.splice(i, 1) : l.push(r);
                return (
                  (o = l.join(" ")), u != o && (s.className.baseVal = o), this
                );
              }),
              (t.clone = function () {
                var t = k(this.node.cloneNode(!0));
                return (
                  r(t.node, "id") &&
                    r(t.node, {
                      id: t.id,
                    }),
                  a(t),
                  t.insertAfter(this),
                  t
                );
              }),
              (t.toDefs = function () {
                var t = v(this);
                return t.appendChild(this.node), this;
              }),
              (t.pattern = t.toPattern =
                function (t, e, n, i) {
                  var a = C("pattern", v(this));
                  return (
                    null == t && (t = this.getBBox()),
                    o(t, "object") &&
                      "x" in t &&
                      ((e = t.y), (n = t.width), (i = t.height), (t = t.x)),
                    r(a.node, {
                      x: t,
                      y: e,
                      width: n,
                      height: i,
                      patternUnits: "userSpaceOnUse",
                      id: a.id,
                      viewBox: [t, e, n, i].join(" "),
                    }),
                    a.node.appendChild(this.node),
                    a
                  );
                }),
              (t.marker = function (t, e, n, i, a, s) {
                var u = C("marker", v(this));
                return (
                  null == t && (t = this.getBBox()),
                  o(t, "object") &&
                    "x" in t &&
                    ((e = t.y),
                    (n = t.width),
                    (i = t.height),
                    (a = t.refX || t.cx),
                    (s = t.refY || t.cy),
                    (t = t.x)),
                  r(u.node, {
                    viewBox: [t, e, n, i].join(F),
                    markerWidth: n,
                    markerHeight: i,
                    orient: "auto",
                    refX: a || 0,
                    refY: s || 0,
                    id: u.id,
                  }),
                  u.node.appendChild(this.node),
                  u
                );
              });
            var h = function (t, e, i, r) {
              "function" != typeof i || i.length || ((r = i), (i = n.linear)),
                (this.attr = t),
                (this.dur = e),
                i && (this.easing = i),
                r && (this.callback = r);
            };
            (i._.Animation = h),
              (i.animation = function (t, e, n, i) {
                return new h(t, e, n, i);
              }),
              (t.inAnim = function () {
                var t = this,
                  e = [];
                for (var n in t.anims)
                  t.anims[S](n) &&
                    !(function (t) {
                      e.push({
                        anim: new h(t._attrs, t.dur, t.easing, t._callback),
                        mina: t,
                        curStatus: t.status(),
                        status: function (e) {
                          return t.status(e);
                        },
                        stop: function () {
                          t.stop();
                        },
                      });
                    })(t.anims[n]);
                return e;
              }),
              (i.animate = function (t, i, r, o, a, s) {
                "function" != typeof a || a.length || ((s = a), (a = n.linear));
                var u = n.time(),
                  l = n(t, i, u, u + o, n.time, r, a);
                return s && e.once("mina.finish." + l.id, s), l;
              }),
              (t.stop = function () {
                for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++)
                  t[e].stop();
                return this;
              }),
              (t.animate = function (t, i, r, a) {
                "function" != typeof r || r.length || ((a = r), (r = n.linear)),
                  t instanceof h &&
                    ((a = t.callback),
                    (r = t.easing),
                    (i = r.dur),
                    (t = t.attr));
                var u,
                  l,
                  c,
                  f,
                  d = [],
                  p = [],
                  g = {},
                  v = this;
                for (var m in t)
                  if (t[S](m)) {
                    v.equal
                      ? ((f = v.equal(m, T(t[m]))),
                        (u = f.from),
                        (l = f.to),
                        (c = f.f))
                      : ((u = +v.attr(m)), (l = +t[m]));
                    var y = o(u, "array") ? u.length : 1;
                    (g[m] = s(d.length, d.length + y, c)),
                      (d = d.concat(u)),
                      (p = p.concat(l));
                  }
                var b = n.time(),
                  x = n(
                    d,
                    p,
                    b,
                    b + i,
                    n.time,
                    function (t) {
                      var e = {};
                      for (var n in g) g[S](n) && (e[n] = g[n](t));
                      v.attr(e);
                    },
                    r
                  );
                return (
                  (v.anims[x.id] = x),
                  (x._attrs = t),
                  (x._callback = a),
                  e("snap.animcreated." + v.id, x),
                  e.once("mina.finish." + x.id, function () {
                    delete v.anims[x.id], a && a.call(v);
                  }),
                  e.once("mina.stop." + x.id, function () {
                    delete v.anims[x.id];
                  }),
                  v
                );
              });
            var f = {};
            (t.data = function (t, n) {
              var r = (f[this.id] = f[this.id] || {});
              if (0 == arguments.length)
                return e("snap.data.get." + this.id, this, r, null), r;
              if (1 == arguments.length) {
                if (i.is(t, "object")) {
                  for (var o in t) t[S](o) && this.data(o, t[o]);
                  return this;
                }
                return e("snap.data.get." + this.id, this, r[t], t), r[t];
              }
              return (
                (r[t] = n), e("snap.data.set." + this.id, this, n, t), this
              );
            }),
              (t.removeData = function (t) {
                return (
                  null == t
                    ? (f[this.id] = {})
                    : f[this.id] && delete f[this.id][t],
                  this
                );
              }),
              (t.outerSVG = t.toString = u(1)),
              (t.innerSVG = u());
          })(x.prototype),
          (i.parse = function (t) {
            var e = _.doc.createDocumentFragment(),
              n = !0,
              i = _.doc.createElement("div");
            if (
              ((t = T(t)),
              t.match(/^\s*<\s*svg(?:\s|>)/) ||
                ((t = "<svg>" + t + "</svg>"), (n = !1)),
              (i.innerHTML = t),
              (t = i.getElementsByTagName("svg")[0]))
            )
              if (n) e = t;
              else for (; t.firstChild; ) e.appendChild(t.firstChild);
            return (i.innerHTML = N), new w(e);
          }),
          (w.prototype.select = x.prototype.select),
          (w.prototype.selectAll = x.prototype.selectAll),
          (i.fragment = function () {
            for (
              var t = Array.prototype.slice.call(arguments, 0),
                e = _.doc.createDocumentFragment(),
                n = 0,
                r = t.length;
              r > n;
              n++
            ) {
              var o = t[n];
              o.node && o.node.nodeType && e.appendChild(o.node),
                o.nodeType && e.appendChild(o),
                "string" == typeof o && e.appendChild(i.parse(o).node);
            }
            return new w(e);
          }),
          (i._.make = C),
          (i._.wrap = k),
          (E.prototype.el = function (t, e) {
            var n = C(t, this.node);
            return e && n.attr(e), n;
          }),
          e.on("snap.util.getattr", function () {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var n = t.replace(/[A-Z]/g, function (t) {
              return "-" + t.toLowerCase();
            });
            return ot[S](n)
              ? this.node.ownerDocument.defaultView
                  .getComputedStyle(this.node, null)
                  .getPropertyValue(n)
              : r(this.node, t);
          });
        var ot = {
          "alignment-baseline": 0,
          "baseline-shift": 0,
          clip: 0,
          "clip-path": 0,
          "clip-rule": 0,
          color: 0,
          "color-interpolation": 0,
          "color-interpolation-filters": 0,
          "color-profile": 0,
          "color-rendering": 0,
          cursor: 0,
          direction: 0,
          display: 0,
          "dominant-baseline": 0,
          "enable-background": 0,
          fill: 0,
          "fill-opacity": 0,
          "fill-rule": 0,
          filter: 0,
          "flood-color": 0,
          "flood-opacity": 0,
          font: 0,
          "font-family": 0,
          "font-size": 0,
          "font-size-adjust": 0,
          "font-stretch": 0,
          "font-style": 0,
          "font-variant": 0,
          "font-weight": 0,
          "glyph-orientation-horizontal": 0,
          "glyph-orientation-vertical": 0,
          "image-rendering": 0,
          kerning: 0,
          "letter-spacing": 0,
          "lighting-color": 0,
          marker: 0,
          "marker-end": 0,
          "marker-mid": 0,
          "marker-start": 0,
          mask: 0,
          opacity: 0,
          overflow: 0,
          "pointer-events": 0,
          "shape-rendering": 0,
          "stop-color": 0,
          "stop-opacity": 0,
          stroke: 0,
          "stroke-dasharray": 0,
          "stroke-dashoffset": 0,
          "stroke-linecap": 0,
          "stroke-linejoin": 0,
          "stroke-miterlimit": 0,
          "stroke-opacity": 0,
          "stroke-width": 0,
          "text-anchor": 0,
          "text-decoration": 0,
          "text-rendering": 0,
          "unicode-bidi": 0,
          visibility: 0,
          "word-spacing": 0,
          "writing-mode": 0,
        };
        e.on("snap.util.attr", function (t) {
          var n = e.nt(),
            i = {};
          (n = n.substring(n.lastIndexOf(".") + 1)), (i[n] = t);
          var o = n.replace(/-(\w)/gi, function (t, e) {
              return e.toUpperCase();
            }),
            a = n.replace(/[A-Z]/g, function (t) {
              return "-" + t.toLowerCase();
            });
          ot[S](a) ? (this.node.style[o] = null == t ? N : t) : r(this.node, i);
        }),
          (function () {})(E.prototype),
          (i.ajax = function (t, n, i, r) {
            var a = new XMLHttpRequest(),
              s = W();
            if (a) {
              if (o(n, "function")) (r = i), (i = n), (n = null);
              else if (o(n, "object")) {
                var u = [];
                for (var l in n)
                  n.hasOwnProperty(l) &&
                    u.push(
                      encodeURIComponent(l) + "=" + encodeURIComponent(n[l])
                    );
                n = u.join("&");
              }
              return (
                a.open(n ? "POST" : "GET", t, !0),
                n &&
                  (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                  a.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  )),
                i &&
                  (e.once("snap.ajax." + s + ".0", i),
                  e.once("snap.ajax." + s + ".200", i),
                  e.once("snap.ajax." + s + ".304", i)),
                (a.onreadystatechange = function () {
                  4 == a.readyState &&
                    e("snap.ajax." + s + "." + a.status, r, a);
                }),
                4 == a.readyState ? a : (a.send(n), a)
              );
            }
          }),
          (i.load = function (t, e, n) {
            i.ajax(t, function (t) {
              var r = i.parse(t.responseText);
              n ? e.call(n, r) : e(r);
            });
          });
        var at = function (t) {
          var e = t.getBoundingClientRect(),
            n = t.ownerDocument,
            i = n.body,
            r = n.documentElement,
            o = r.clientTop || i.clientTop || 0,
            a = r.clientLeft || i.clientLeft || 0,
            s = e.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - o,
            u =
              e.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - a;
          return {
            y: s,
            x: u,
          };
        };
        return (
          (i.getElementByPoint = function (t, e) {
            var n = this,
              i = (n.canvas, _.doc.elementFromPoint(t, e));
            if (_.win.opera && "svg" == i.tagName) {
              var r = at(i),
                o = i.createSVGRect();
              (o.x = t - r.x), (o.y = e - r.y), (o.width = o.height = 1);
              var a = i.getIntersectionList(o, null);
              a.length && (i = a[a.length - 1]);
            }
            return i ? k(i) : null;
          }),
          (i.plugin = function (t) {
            t(i, x, E, _, w);
          }),
          (_.win.Snap = i),
          i
        );
      })();
    return (
      i.plugin(function (t) {
        function e(t, e, i, r, o, a) {
          return null == e && "[object SVGMatrix]" == n.call(t)
            ? ((this.a = t.a),
              (this.b = t.b),
              (this.c = t.c),
              (this.d = t.d),
              (this.e = t.e),
              void (this.f = t.f))
            : void (null != t
                ? ((this.a = +t),
                  (this.b = +e),
                  (this.c = +i),
                  (this.d = +r),
                  (this.e = +o),
                  (this.f = +a))
                : ((this.a = 1),
                  (this.b = 0),
                  (this.c = 0),
                  (this.d = 1),
                  (this.e = 0),
                  (this.f = 0)));
        }
        var n = Object.prototype.toString,
          i = String,
          r = Math,
          o = "";
        !(function (n) {
          function a(t) {
            return t[0] * t[0] + t[1] * t[1];
          }
          function s(t) {
            var e = r.sqrt(a(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
          }
          (n.add = function (t, n, i, r, o, a) {
            var s,
              u,
              l,
              c,
              h = [[], [], []],
              f = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1],
              ],
              d = [
                [t, i, o],
                [n, r, a],
                [0, 0, 1],
              ];
            for (
              t &&
                t instanceof e &&
                (d = [
                  [t.a, t.c, t.e],
                  [t.b, t.d, t.f],
                  [0, 0, 1],
                ]),
                s = 0;
              3 > s;
              s++
            )
              for (u = 0; 3 > u; u++) {
                for (c = 0, l = 0; 3 > l; l++) c += f[s][l] * d[l][u];
                h[s][u] = c;
              }
            return (
              (this.a = h[0][0]),
              (this.b = h[1][0]),
              (this.c = h[0][1]),
              (this.d = h[1][1]),
              (this.e = h[0][2]),
              (this.f = h[1][2]),
              this
            );
          }),
            (n.invert = function () {
              var t = this,
                n = t.a * t.d - t.b * t.c;
              return new e(
                t.d / n,
                -t.b / n,
                -t.c / n,
                t.a / n,
                (t.c * t.f - t.d * t.e) / n,
                (t.b * t.e - t.a * t.f) / n
              );
            }),
            (n.clone = function () {
              return new e(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (n.translate = function (t, e) {
              return this.add(1, 0, 0, 1, t, e);
            }),
            (n.scale = function (t, e, n, i) {
              return (
                null == e && (e = t),
                (n || i) && this.add(1, 0, 0, 1, n, i),
                this.add(t, 0, 0, e, 0, 0),
                (n || i) && this.add(1, 0, 0, 1, -n, -i),
                this
              );
            }),
            (n.rotate = function (e, n, i) {
              (e = t.rad(e)), (n = n || 0), (i = i || 0);
              var o = +r.cos(e).toFixed(9),
                a = +r.sin(e).toFixed(9);
              return this.add(o, a, -a, o, n, i), this.add(1, 0, 0, 1, -n, -i);
            }),
            (n.x = function (t, e) {
              return t * this.a + e * this.c + this.e;
            }),
            (n.y = function (t, e) {
              return t * this.b + e * this.d + this.f;
            }),
            (n.get = function (t) {
              return +this[i.fromCharCode(97 + t)].toFixed(4);
            }),
            (n.toString = function () {
              return (
                "matrix(" +
                [
                  this.get(0),
                  this.get(1),
                  this.get(2),
                  this.get(3),
                  this.get(4),
                  this.get(5),
                ].join() +
                ")"
              );
            }),
            (n.offset = function () {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (n.determinant = function () {
              return this.a * this.d - this.b * this.c;
            }),
            (n.split = function () {
              var e = {};
              (e.dx = this.e), (e.dy = this.f);
              var n = [
                [this.a, this.c],
                [this.b, this.d],
              ];
              (e.scalex = r.sqrt(a(n[0]))),
                s(n[0]),
                (e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1]),
                (n[1] = [
                  n[1][0] - n[0][0] * e.shear,
                  n[1][1] - n[0][1] * e.shear,
                ]),
                (e.scaley = r.sqrt(a(n[1]))),
                s(n[1]),
                (e.shear /= e.scaley),
                this.determinant() < 0 && (e.scalex = -e.scalex);
              var i = -n[0][1],
                o = n[1][1];
              return (
                0 > o
                  ? ((e.rotate = t.deg(r.acos(o))),
                    0 > i && (e.rotate = 360 - e.rotate))
                  : (e.rotate = t.deg(r.asin(i))),
                (e.isSimple = !(
                  +e.shear.toFixed(9) ||
                  (e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate)
                )),
                (e.isSuperSimple =
                  !+e.shear.toFixed(9) &&
                  e.scalex.toFixed(9) == e.scaley.toFixed(9) &&
                  !e.rotate),
                (e.noRotation = !+e.shear.toFixed(9) && !e.rotate),
                e
              );
            }),
            (n.toTransformString = function (t) {
              var e = t || this.split();
              return +e.shear.toFixed(9)
                ? "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ]
                : ((e.scalex = +e.scalex.toFixed(4)),
                  (e.scaley = +e.scaley.toFixed(4)),
                  (e.rotate = +e.rotate.toFixed(4)),
                  (e.dx || e.dy
                    ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)]
                    : o) +
                    (1 != e.scalex || 1 != e.scaley
                      ? "s" + [e.scalex, e.scaley, 0, 0]
                      : o) +
                    (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : o));
            });
        })(e.prototype),
          (t.Matrix = e),
          (t.matrix = function (t, n, i, r, o, a) {
            return new e(t, n, i, r, o, a);
          });
      }),
      i.plugin(function (t, n, i, r, o) {
        function a(i) {
          return function (r) {
            if (
              (e.stop(),
              r instanceof o &&
                1 == r.node.childNodes.length &&
                ("radialGradient" == r.node.firstChild.tagName ||
                  "linearGradient" == r.node.firstChild.tagName ||
                  "pattern" == r.node.firstChild.tagName) &&
                ((r = r.node.firstChild), d(this).appendChild(r), (r = h(r))),
              r instanceof n)
            )
              if (
                "radialGradient" == r.type ||
                "linearGradient" == r.type ||
                "pattern" == r.type
              ) {
                r.node.id ||
                  g(r.node, {
                    id: r.id,
                  });
                var a = v(r.node.id);
              } else a = r.attr(i);
            else if (((a = t.color(r)), a.error)) {
              var s = t(d(this).ownerSVGElement).gradient(r);
              s
                ? (s.node.id ||
                    g(s.node, {
                      id: s.id,
                    }),
                  (a = v(s.node.id)))
                : (a = r);
            } else a = m(a);
            var u = {};
            (u[i] = a), g(this.node, u), (this.node.style[i] = b);
          };
        }
        function s(t) {
          e.stop(), t == +t && (t += "px"), (this.node.style.fontSize = t);
        }
        function u(t) {
          for (var e = [], n = t.childNodes, i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            3 == o.nodeType && e.push(o.nodeValue),
              "tspan" == o.tagName &&
                e.push(
                  1 == o.childNodes.length && 3 == o.firstChild.nodeType
                    ? o.firstChild.nodeValue
                    : u(o)
                );
          }
          return e;
        }
        function l() {
          return e.stop(), this.node.style.fontSize;
        }
        var c = t._.make,
          h = t._.wrap,
          f = t.is,
          d = t._.getSomeDefs,
          p = /^url\(#?([^)]+)\)$/,
          g = t._.$,
          v = t.url,
          m = String,
          y = t._.separator,
          b = "";
        e.on("snap.util.attr.mask", function (t) {
          if (t instanceof n || t instanceof o) {
            if (
              (e.stop(),
              t instanceof o &&
                1 == t.node.childNodes.length &&
                ((t = t.node.firstChild), d(this).appendChild(t), (t = h(t))),
              "mask" == t.type)
            )
              var i = t;
            else (i = c("mask", d(this))), i.node.appendChild(t.node);
            !i.node.id &&
              g(i.node, {
                id: i.id,
              }),
              g(this.node, {
                mask: v(i.id),
              });
          }
        }),
          (function (t) {
            e.on("snap.util.attr.clip", t),
              e.on("snap.util.attr.clip-path", t),
              e.on("snap.util.attr.clipPath", t);
          })(function (t) {
            if (t instanceof n || t instanceof o) {
              if ((e.stop(), "clipPath" == t.type)) var i = t;
              else
                (i = c("clipPath", d(this))),
                  i.node.appendChild(t.node),
                  !i.node.id &&
                    g(i.node, {
                      id: i.id,
                    });
              g(this.node, {
                "clip-path": v(i.id),
              });
            }
          }),
          e.on("snap.util.attr.fill", a("fill")),
          e.on("snap.util.attr.stroke", a("stroke"));
        var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
          t = m(t);
          var e = t.match(x);
          if (!e) return null;
          var n = e[1],
            i = e[2],
            r = e[3];
          return (
            (i = i.split(/\s*,\s*/).map(function (t) {
              return +t == t ? +t : t;
            })),
            1 == i.length && 0 == i[0] && (i = []),
            (r = r.split("-")),
            (r = r.map(function (t) {
              t = t.split(":");
              var e = {
                color: t[0],
              };
              return t[1] && (e.offset = parseFloat(t[1])), e;
            })),
            {
              type: n,
              params: i,
              stops: r,
            }
          );
        }),
          e.on("snap.util.attr.d", function (n) {
            e.stop(),
              f(n, "array") &&
                f(n[0], "array") &&
                (n = t.path.toString.call(n)),
              (n = m(n)),
              n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)),
              g(this.node, {
                d: n,
              });
          })(-1),
          e.on("snap.util.attr.#text", function (t) {
            e.stop(), (t = m(t));
            for (var n = r.doc.createTextNode(t); this.node.firstChild; )
              this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n);
          })(-1),
          e.on("snap.util.attr.path", function (t) {
            e.stop(),
              this.attr({
                d: t,
              });
          })(-1),
          e.on("snap.util.attr.class", function (t) {
            e.stop(), (this.node.className.baseVal = t);
          })(-1),
          e.on("snap.util.attr.viewBox", function (t) {
            var n;
            (n =
              f(t, "object") && "x" in t
                ? [t.x, t.y, t.width, t.height].join(" ")
                : f(t, "array")
                ? t.join(" ")
                : t),
              g(this.node, {
                viewBox: n,
              }),
              e.stop();
          })(-1),
          e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop();
          })(-1),
          e.on("snap.util.attr.r", function (t) {
            "rect" == this.type &&
              (e.stop(),
              g(this.node, {
                rx: t,
                ry: t,
              }));
          })(-1),
          e.on("snap.util.attr.textpath", function (t) {
            if ((e.stop(), "text" == this.type)) {
              var i, r, o;
              if (!t && this.textPath) {
                for (r = this.textPath; r.node.firstChild; )
                  this.node.appendChild(r.node.firstChild);
                return r.remove(), void delete this.textPath;
              }
              if (f(t, "string")) {
                var a = d(this),
                  s = h(a.parentNode).path(t);
                a.appendChild(s.node),
                  (i = s.id),
                  s.attr({
                    id: i,
                  });
              } else
                (t = h(t)),
                  t instanceof n &&
                    ((i = t.attr("id")),
                    i ||
                      ((i = t.id),
                      t.attr({
                        id: i,
                      })));
              if (i)
                if (((r = this.textPath), (o = this.node), r))
                  r.attr({
                    "xlink:href": "#" + i,
                  });
                else {
                  for (
                    r = g("textPath", {
                      "xlink:href": "#" + i,
                    });
                    o.firstChild;

                  )
                    r.appendChild(o.firstChild);
                  o.appendChild(r), (this.textPath = h(r));
                }
            }
          })(-1),
          e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
              for (
                var n = this.node,
                  i = function (t) {
                    var e = g("tspan");
                    if (f(t, "array"))
                      for (var n = 0; n < t.length; n++) e.appendChild(i(t[n]));
                    else e.appendChild(r.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e;
                  };
                n.firstChild;

              )
                n.removeChild(n.firstChild);
              for (var o = i(t); o.firstChild; ) n.appendChild(o.firstChild);
            }
            e.stop();
          })(-1),
          e.on("snap.util.attr.fontSize", s)(-1),
          e.on("snap.util.attr.font-size", s)(-1),
          e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform();
          })(-1),
          e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath;
          })(-1),
          (function () {
            function n(n) {
              return function () {
                e.stop();
                var i = r.doc.defaultView
                  .getComputedStyle(this.node, null)
                  .getPropertyValue("marker-" + n);
                return "none" == i ? i : t(r.doc.getElementById(i.match(p)[1]));
              };
            }
            function i(t) {
              return function (n) {
                e.stop();
                var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                if ("" == n || !n) return void (this.node.style[i] = "none");
                if ("marker" == n.type) {
                  var r = n.node.id;
                  return (
                    r ||
                      g(n.node, {
                        id: n.id,
                      }),
                    void (this.node.style[i] = v(r))
                  );
                }
              };
            }
            e.on("snap.util.getattr.marker-end", n("end"))(-1),
              e.on("snap.util.getattr.markerEnd", n("end"))(-1),
              e.on("snap.util.getattr.marker-start", n("start"))(-1),
              e.on("snap.util.getattr.markerStart", n("start"))(-1),
              e.on("snap.util.getattr.marker-mid", n("mid"))(-1),
              e.on("snap.util.getattr.markerMid", n("mid"))(-1),
              e.on("snap.util.attr.marker-end", i("end"))(-1),
              e.on("snap.util.attr.markerEnd", i("end"))(-1),
              e.on("snap.util.attr.marker-start", i("start"))(-1),
              e.on("snap.util.attr.markerStart", i("start"))(-1),
              e.on("snap.util.attr.marker-mid", i("mid"))(-1),
              e.on("snap.util.attr.markerMid", i("mid"))(-1);
          })(),
          e.on("snap.util.getattr.r", function () {
            return "rect" == this.type &&
              g(this.node, "rx") == g(this.node, "ry")
              ? (e.stop(), g(this.node, "rx"))
              : void 0;
          })(-1),
          e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
              e.stop();
              var t = u(this.node);
              return 1 == t.length ? t[0] : t;
            }
          })(-1),
          e.on("snap.util.getattr.#text", function () {
            return this.node.textContent;
          })(-1),
          e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var n = g(this.node, "viewBox");
            return n
              ? ((n = n.split(y)), t._.box(+n[0], +n[1], +n[2], +n[3]))
              : void 0;
          })(-1),
          e.on("snap.util.getattr.points", function () {
            var t = g(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0;
          })(-1),
          e.on("snap.util.getattr.path", function () {
            var t = g(this.node, "d");
            return e.stop(), t;
          })(-1),
          e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal;
          })(-1),
          e.on("snap.util.getattr.fontSize", l)(-1),
          e.on("snap.util.getattr.font-size", l)(-1);
      }),
      i.plugin(function () {
        function t(t) {
          return t;
        }
        function n(t) {
          return function (e) {
            return +e.toFixed(3) + t;
          };
        }
        var i = {
            "+": function (t, e) {
              return t + e;
            },
            "-": function (t, e) {
              return t - e;
            },
            "/": function (t, e) {
              return t / e;
            },
            "*": function (t, e) {
              return t * e;
            },
          },
          r = String,
          o = /[a-z]+$/i,
          a = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
          var n = r(t).match(a);
          if (n) {
            var s = e.nt(),
              u = s.substring(s.lastIndexOf(".") + 1),
              l = this.attr(u),
              c = {};
            e.stop();
            var h = n[3] || "",
              f = l.match(o),
              d = i[n[1]];
            if (
              (f && f == h
                ? (t = d(parseFloat(l), +n[2]))
                : ((l = this.asPX(u)),
                  (t = d(this.asPX(u), this.asPX(u, n[2] + h)))),
              isNaN(l) || isNaN(t))
            )
              return;
            (c[u] = t), this.attr(c);
          }
        })(-10),
          e.on("snap.util.equal", function (s, u) {
            var l = r(this.attr(s) || ""),
              c = r(u).match(a);
            if (c) {
              e.stop();
              var h = c[3] || "",
                f = l.match(o),
                d = i[c[1]];
              return f && f == h
                ? {
                    from: parseFloat(l),
                    to: d(parseFloat(l), +c[2]),
                    f: n(f),
                  }
                : ((l = this.asPX(s)),
                  {
                    from: l,
                    to: d(l, this.asPX(s, c[2] + h)),
                    f: t,
                  });
            }
          })(-10);
      }),
      i.plugin(function (t, n, i, r) {
        var o = i.prototype,
          a = t.is;
        (o.rect = function (t, e, n, i, r, o) {
          var s;
          return (
            null == o && (o = r),
            a(t, "object") && "[object Object]" == t
              ? (s = t)
              : null != t &&
                ((s = {
                  x: t,
                  y: e,
                  width: n,
                  height: i,
                }),
                null != r && ((s.rx = r), (s.ry = o))),
            this.el("rect", s)
          );
        }),
          (o.circle = function (t, e, n) {
            var i;
            return (
              a(t, "object") && "[object Object]" == t
                ? (i = t)
                : null != t &&
                  (i = {
                    cx: t,
                    cy: e,
                    r: n,
                  }),
              this.el("circle", i)
            );
          });
        var s = (function () {
          function t() {
            this.parentNode.removeChild(this);
          }
          return function (e, n) {
            var i = r.doc.createElement("img"),
              o = r.doc.body;
            (i.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
              (i.onload = function () {
                n.call(i), (i.onload = i.onerror = null), o.removeChild(i);
              }),
              (i.onerror = t),
              o.appendChild(i),
              (i.src = e);
          };
        })();
        (o.image = function (e, n, i, r, o) {
          var u = this.el("image");
          if (a(e, "object") && "src" in e) u.attr(e);
          else if (null != e) {
            var l = {
              "xlink:href": e,
              preserveAspectRatio: "none",
            };
            null != n && null != i && ((l.x = n), (l.y = i)),
              null != r && null != o
                ? ((l.width = r), (l.height = o))
                : s(e, function () {
                    t._.$(u.node, {
                      width: this.offsetWidth,
                      height: this.offsetHeight,
                    });
                  }),
              t._.$(u.node, l);
          }
          return u;
        }),
          (o.ellipse = function (t, e, n, i) {
            var r;
            return (
              a(t, "object") && "[object Object]" == t
                ? (r = t)
                : null != t &&
                  (r = {
                    cx: t,
                    cy: e,
                    rx: n,
                    ry: i,
                  }),
              this.el("ellipse", r)
            );
          }),
          (o.path = function (t) {
            var e;
            return (
              a(t, "object") && !a(t, "array")
                ? (e = t)
                : t &&
                  (e = {
                    d: t,
                  }),
              this.el("path", e)
            );
          }),
          (o.group = o.g =
            function (t) {
              var e = this.el("g");
              return (
                1 == arguments.length && t && !t.type
                  ? e.attr(t)
                  : arguments.length &&
                    e.add(Array.prototype.slice.call(arguments, 0)),
                e
              );
            }),
          (o.svg = function (t, e, n, i, r, o, s, u) {
            var l = {};
            return (
              a(t, "object") && null == e
                ? (l = t)
                : (null != t && (l.x = t),
                  null != e && (l.y = e),
                  null != n && (l.width = n),
                  null != i && (l.height = i),
                  null != r &&
                    null != o &&
                    null != s &&
                    null != u &&
                    (l.viewBox = [r, o, s, u])),
              this.el("svg", l)
            );
          }),
          (o.mask = function (t) {
            var e = this.el("mask");
            return (
              1 == arguments.length && t && !t.type
                ? e.attr(t)
                : arguments.length &&
                  e.add(Array.prototype.slice.call(arguments, 0)),
              e
            );
          }),
          (o.ptrn = function (t, e, n, i, r, o, s, u) {
            if (a(t, "object")) var l = t;
            else
              arguments.length
                ? ((l = {}),
                  null != t && (l.x = t),
                  null != e && (l.y = e),
                  null != n && (l.width = n),
                  null != i && (l.height = i),
                  null != r &&
                    null != o &&
                    null != s &&
                    null != u &&
                    (l.viewBox = [r, o, s, u]))
                : (l = {
                    patternUnits: "userSpaceOnUse",
                  });
            return this.el("pattern", l);
          }),
          (o.use = function (t) {
            return null != t
              ? (make("use", this.node),
                t instanceof n &&
                  (t.attr("id") ||
                    t.attr({
                      id: ID(),
                    }),
                  (t = t.attr("id"))),
                this.el("use", {
                  "xlink:href": t,
                }))
              : n.prototype.use.call(this);
          }),
          (o.text = function (t, e, n) {
            var i = {};
            return (
              a(t, "object")
                ? (i = t)
                : null != t &&
                  (i = {
                    x: t,
                    y: e,
                    text: n || "",
                  }),
              this.el("text", i)
            );
          }),
          (o.line = function (t, e, n, i) {
            var r = {};
            return (
              a(t, "object")
                ? (r = t)
                : null != t &&
                  (r = {
                    x1: t,
                    x2: n,
                    y1: e,
                    y2: i,
                  }),
              this.el("line", r)
            );
          }),
          (o.polyline = function (t) {
            arguments.length > 1 &&
              (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return (
              a(t, "object") && !a(t, "array")
                ? (e = t)
                : null != t &&
                  (e = {
                    points: t,
                  }),
              this.el("polyline", e)
            );
          }),
          (o.polygon = function (t) {
            arguments.length > 1 &&
              (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return (
              a(t, "object") && !a(t, "array")
                ? (e = t)
                : null != t &&
                  (e = {
                    points: t,
                  }),
              this.el("polygon", e)
            );
          }),
          (function () {
            function n() {
              return this.selectAll("stop");
            }
            function i(e, n) {
              var i = l("stop"),
                r = {
                  offset: +n + "%",
                };
              return (
                (e = t.color(e)),
                (r["stop-color"] = e.hex),
                e.opacity < 1 && (r["stop-opacity"] = e.opacity),
                l(i, r),
                this.node.appendChild(i),
                this
              );
            }
            function r() {
              if ("linearGradient" == this.type) {
                var e = l(this.node, "x1") || 0,
                  n = l(this.node, "x2") || 1,
                  i = l(this.node, "y1") || 0,
                  r = l(this.node, "y2") || 0;
                return t._.box(e, i, math.abs(n - e), math.abs(r - i));
              }
              var o = this.node.cx || 0.5,
                a = this.node.cy || 0.5,
                s = this.node.r || 0;
              return t._.box(o - s, a - s, 2 * s, 2 * s);
            }
            function a(t, n) {
              function i(t, e) {
                for (var n = (e - h) / (t - f), i = f; t > i; i++)
                  a[i].offset = +(+h + n * (i - f)).toFixed(2);
                (f = t), (h = e);
              }
              var r,
                o = e("snap.util.grad.parse", null, n).firstDefined();
              if (!o) return null;
              o.params.unshift(t),
                (r =
                  "l" == o.type.toLowerCase()
                    ? s.apply(0, o.params)
                    : u.apply(0, o.params)),
                o.type != o.type.toLowerCase() &&
                  l(r.node, {
                    gradientUnits: "userSpaceOnUse",
                  });
              var a = o.stops,
                c = a.length,
                h = 0,
                f = 0;
              c--;
              for (var d = 0; c > d; d++) "offset" in a[d] && i(d, a[d].offset);
              for (
                a[c].offset = a[c].offset || 100, i(c, a[c].offset), d = 0;
                c >= d;
                d++
              ) {
                var p = a[d];
                r.addStop(p.color, p.offset);
              }
              return r;
            }
            function s(e, o, a, s, u) {
              var c = t._.make("linearGradient", e);
              return (
                (c.stops = n),
                (c.addStop = i),
                (c.getBBox = r),
                null != o &&
                  l(c.node, {
                    x1: o,
                    y1: a,
                    x2: s,
                    y2: u,
                  }),
                c
              );
            }
            function u(e, o, a, s, u, c) {
              var h = t._.make("radialGradient", e);
              return (
                (h.stops = n),
                (h.addStop = i),
                (h.getBBox = r),
                null != o &&
                  l(h.node, {
                    cx: o,
                    cy: a,
                    r: s,
                  }),
                null != u &&
                  null != c &&
                  l(h.node, {
                    fx: u,
                    fy: c,
                  }),
                h
              );
            }
            var l = t._.$;
            (o.gradient = function (t) {
              return a(this.defs, t);
            }),
              (o.gradientLinear = function (t, e, n, i) {
                return s(this.defs, t, e, n, i);
              }),
              (o.gradientRadial = function (t, e, n, i, r) {
                return u(this.defs, t, e, n, i, r);
              }),
              (o.toString = function () {
                var e,
                  n = this.node.ownerDocument,
                  i = n.createDocumentFragment(),
                  r = n.createElement("div"),
                  o = this.node.cloneNode(!0);
                return (
                  i.appendChild(r),
                  r.appendChild(o),
                  t._.$(o, {
                    xmlns: "http://www.w3.org/2000/svg",
                  }),
                  (e = r.innerHTML),
                  i.removeChild(i.firstChild),
                  e
                );
              }),
              (o.clear = function () {
                for (var t, e = this.node.firstChild; e; )
                  (t = e.nextSibling),
                    "defs" != e.tagName
                      ? e.parentNode.removeChild(e)
                      : o.clear.call({
                          node: e,
                        }),
                    (e = t);
              });
          })();
      }),
      i.plugin(function (t, e) {
        function n(t) {
          var e = (n.ps = n.ps || {});
          return (
            e[t]
              ? (e[t].sleep = 100)
              : (e[t] = {
                  sleep: 100,
                }),
            setTimeout(function () {
              for (var n in e)
                e[F](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n]);
            }),
            e[t]
          );
        }
        function i(t, e, n, i) {
          return (
            null == t && (t = e = n = i = 0),
            null == e && ((e = t.y), (n = t.width), (i = t.height), (t = t.x)),
            {
              x: t,
              y: e,
              width: n,
              w: n,
              height: i,
              h: i,
              x2: t + n,
              y2: e + i,
              cx: t + n / 2,
              cy: e + i / 2,
              r1: D.min(n, i) / 2,
              r2: D.max(n, i) / 2,
              r0: D.sqrt(n * n + i * i) / 2,
              path: C(t, e, n, i),
              vb: [t, e, n, i].join(" "),
            }
          );
        }
        function r() {
          return this.join(",").replace(B, "$1");
        }
        function o(t) {
          var e = N(t);
          return (e.toString = r), e;
        }
        function a(t, e, n, i, r, o, a, s, l) {
          return null == l
            ? d(t, e, n, i, r, o, a, s)
            : u(t, e, n, i, r, o, a, s, p(t, e, n, i, r, o, a, s, l));
        }
        function s(n, i) {
          function r(t) {
            return +(+t).toFixed(3);
          }
          return t._.cacher(
            function (t, o, s) {
              t instanceof e && (t = t.attr("d")), (t = $(t));
              for (
                var l, c, h, f, d, p = "", g = {}, v = 0, m = 0, y = t.length;
                y > m;
                m++
              ) {
                if (((h = t[m]), "M" == h[0])) (l = +h[1]), (c = +h[2]);
                else {
                  if (
                    ((f = a(l, c, h[1], h[2], h[3], h[4], h[5], h[6])),
                    v + f > o)
                  ) {
                    if (i && !g.start) {
                      if (
                        ((d = a(
                          l,
                          c,
                          h[1],
                          h[2],
                          h[3],
                          h[4],
                          h[5],
                          h[6],
                          o - v
                        )),
                        (p += [
                          "C" + r(d.start.x),
                          r(d.start.y),
                          r(d.m.x),
                          r(d.m.y),
                          r(d.x),
                          r(d.y),
                        ]),
                        s)
                      )
                        return p;
                      (g.start = p),
                        (p = [
                          "M" + r(d.x),
                          r(d.y) + "C" + r(d.n.x),
                          r(d.n.y),
                          r(d.end.x),
                          r(d.end.y),
                          r(h[5]),
                          r(h[6]),
                        ].join()),
                        (v += f),
                        (l = +h[5]),
                        (c = +h[6]);
                      continue;
                    }
                    if (!n && !i)
                      return (d = a(
                        l,
                        c,
                        h[1],
                        h[2],
                        h[3],
                        h[4],
                        h[5],
                        h[6],
                        o - v
                      ));
                  }
                  (v += f), (l = +h[5]), (c = +h[6]);
                }
                p += h.shift() + h;
              }
              return (
                (g.end = p),
                (d = n
                  ? v
                  : i
                  ? g
                  : u(l, c, h[0], h[1], h[2], h[3], h[4], h[5], 1))
              );
            },
            null,
            t._.clone
          );
        }
        function u(t, e, n, i, r, o, a, s, u) {
          var l = 1 - u,
            c = Y(l, 3),
            h = Y(l, 2),
            f = u * u,
            d = f * u,
            p = c * t + 3 * h * u * n + 3 * l * u * u * r + d * a,
            g = c * e + 3 * h * u * i + 3 * l * u * u * o + d * s,
            v = t + 2 * u * (n - t) + f * (r - 2 * n + t),
            m = e + 2 * u * (i - e) + f * (o - 2 * i + e),
            y = n + 2 * u * (r - n) + f * (a - 2 * r + n),
            b = i + 2 * u * (o - i) + f * (s - 2 * o + i),
            x = l * t + u * n,
            w = l * e + u * i,
            C = l * r + u * a,
            E = l * o + u * s,
            k = 90 - (180 * D.atan2(v - y, m - b)) / R;
          return {
            x: p,
            y: g,
            m: {
              x: v,
              y: m,
            },
            n: {
              x: y,
              y: b,
            },
            start: {
              x: x,
              y: w,
            },
            end: {
              x: C,
              y: E,
            },
            alpha: k,
          };
        }
        function l(e, n, r, o, a, s, u, l) {
          t.is(e, "array") || (e = [e, n, r, o, a, s, u, l]);
          var c = P.apply(null, e);
          return i(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y);
        }
        function c(t, e, n) {
          return (
            e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
          );
        }
        function h(t, e) {
          return (
            (t = i(t)),
            (e = i(e)),
            c(e, t.x, t.y) ||
              c(e, t.x2, t.y) ||
              c(e, t.x, t.y2) ||
              c(e, t.x2, t.y2) ||
              c(t, e.x, e.y) ||
              c(t, e.x2, e.y) ||
              c(t, e.x, e.y2) ||
              c(t, e.x2, e.y2) ||
              (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
          );
        }
        function f(t, e, n, i, r) {
          var o = -3 * e + 9 * n - 9 * i + 3 * r,
            a = t * o + 6 * e - 12 * n + 6 * i;
          return t * a - 3 * e + 3 * n;
        }
        function d(t, e, n, i, r, o, a, s, u) {
          null == u && (u = 1), (u = u > 1 ? 1 : 0 > u ? 0 : u);
          for (
            var l = u / 2,
              c = 12,
              h = [
                -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
              ],
              d = [
                0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
                0.1069, 0.1069, 0.0472, 0.0472,
              ],
              p = 0,
              g = 0;
            c > g;
            g++
          ) {
            var v = l * h[g] + l,
              m = f(v, t, n, r, a),
              y = f(v, e, i, o, s),
              b = m * m + y * y;
            p += d[g] * D.sqrt(b);
          }
          return l * p;
        }
        function p(t, e, n, i, r, o, a, s, u) {
          if (!(0 > u || d(t, e, n, i, r, o, a, s) < u)) {
            var l,
              c = 1,
              h = c / 2,
              f = c - h,
              p = 0.01;
            for (l = d(t, e, n, i, r, o, a, s, f); V(l - u) > p; )
              (h /= 2),
                (f += (u > l ? 1 : -1) * h),
                (l = d(t, e, n, i, r, o, a, s, f));
            return f;
          }
        }
        function g(t, e, n, i, r, o, a, s) {
          if (
            !(
              X(t, n) < L(r, a) ||
              L(t, n) > X(r, a) ||
              X(e, i) < L(o, s) ||
              L(e, i) > X(o, s)
            )
          ) {
            var u = (t * i - e * n) * (r - a) - (t - n) * (r * s - o * a),
              l = (t * i - e * n) * (o - s) - (e - i) * (r * s - o * a),
              c = (t - n) * (o - s) - (e - i) * (r - a);
            if (c) {
              var h = u / c,
                f = l / c,
                d = +h.toFixed(2),
                p = +f.toFixed(2);
              if (
                !(
                  d < +L(t, n).toFixed(2) ||
                  d > +X(t, n).toFixed(2) ||
                  d < +L(r, a).toFixed(2) ||
                  d > +X(r, a).toFixed(2) ||
                  p < +L(e, i).toFixed(2) ||
                  p > +X(e, i).toFixed(2) ||
                  p < +L(o, s).toFixed(2) ||
                  p > +X(o, s).toFixed(2)
                )
              )
                return {
                  x: h,
                  y: f,
                };
            }
          }
        }
        function v(t, e, n) {
          var i = l(t),
            r = l(e);
          if (!h(i, r)) return n ? 0 : [];
          for (
            var o = d.apply(0, t),
              a = d.apply(0, e),
              s = ~~(o / 8),
              c = ~~(a / 8),
              f = [],
              p = [],
              v = {},
              m = n ? 0 : [],
              y = 0;
            s + 1 > y;
            y++
          ) {
            var b = u.apply(0, t.concat(y / s));
            f.push({
              x: b.x,
              y: b.y,
              t: y / s,
            });
          }
          for (y = 0; c + 1 > y; y++)
            (b = u.apply(0, e.concat(y / c))),
              p.push({
                x: b.x,
                y: b.y,
                t: y / c,
              });
          for (y = 0; s > y; y++)
            for (var x = 0; c > x; x++) {
              var w = f[y],
                C = f[y + 1],
                E = p[x],
                k = p[x + 1],
                _ = V(C.x - w.x) < 0.001 ? "y" : "x",
                S = V(k.x - E.x) < 0.001 ? "y" : "x",
                T = g(w.x, w.y, C.x, C.y, E.x, E.y, k.x, k.y);
              if (T) {
                if (v[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
                v[T.x.toFixed(4)] = T.y.toFixed(4);
                var j = w.t + V((T[_] - w[_]) / (C[_] - w[_])) * (C.t - w.t),
                  P = E.t + V((T[S] - E[S]) / (k[S] - E[S])) * (k.t - E.t);
                j >= 0 &&
                  1 >= j &&
                  P >= 0 &&
                  1 >= P &&
                  (n
                    ? m++
                    : m.push({
                        x: T.x,
                        y: T.y,
                        t1: j,
                        t2: P,
                      }));
              }
            }
          return m;
        }
        function m(t, e) {
          return b(t, e);
        }
        function y(t, e) {
          return b(t, e, 1);
        }
        function b(t, e, n) {
          (t = $(t)), (e = $(e));
          for (
            var i,
              r,
              o,
              a,
              s,
              u,
              l,
              c,
              h,
              f,
              d = n ? 0 : [],
              p = 0,
              g = t.length;
            g > p;
            p++
          ) {
            var m = t[p];
            if ("M" == m[0]) (i = s = m[1]), (r = u = m[2]);
            else {
              "C" == m[0]
                ? ((h = [i, r].concat(m.slice(1))), (i = h[6]), (r = h[7]))
                : ((h = [i, r, i, r, s, u, s, u]), (i = s), (r = u));
              for (var y = 0, b = e.length; b > y; y++) {
                var x = e[y];
                if ("M" == x[0]) (o = l = x[1]), (a = c = x[2]);
                else {
                  "C" == x[0]
                    ? ((f = [o, a].concat(x.slice(1))), (o = f[6]), (a = f[7]))
                    : ((f = [o, a, o, a, l, c, l, c]), (o = l), (a = c));
                  var w = v(h, f, n);
                  if (n) d += w;
                  else {
                    for (var C = 0, E = w.length; E > C; C++)
                      (w[C].segment1 = p),
                        (w[C].segment2 = y),
                        (w[C].bez1 = h),
                        (w[C].bez2 = f);
                    d = d.concat(w);
                  }
                }
              }
            }
          }
          return d;
        }
        function x(t, e, n) {
          var i = w(t);
          return (
            c(i, e, n) &&
            b(
              t,
              [
                ["M", e, n],
                ["H", i.x2 + 10],
              ],
              1
            ) %
              2 ==
              1
          );
        }
        function w(t) {
          var e = n(t);
          if (e.bbox) return N(e.bbox);
          if (!t) return i();
          t = $(t);
          for (
            var r, o = 0, a = 0, s = [], u = [], l = 0, c = t.length;
            c > l;
            l++
          )
            if (((r = t[l]), "M" == r[0]))
              (o = r[1]), (a = r[2]), s.push(o), u.push(a);
            else {
              var h = P(o, a, r[1], r[2], r[3], r[4], r[5], r[6]);
              (s = s.concat(h.min.x, h.max.x)),
                (u = u.concat(h.min.y, h.max.y)),
                (o = r[5]),
                (a = r[6]);
            }
          var f = L.apply(0, s),
            d = L.apply(0, u),
            p = X.apply(0, s),
            g = X.apply(0, u),
            v = i(f, d, p - f, g - d);
          return (e.bbox = N(v)), v;
        }
        function C(t, e, n, i, o) {
          if (o)
            return [
              ["M", +t + +o, e],
              ["l", n - 2 * o, 0],
              ["a", o, o, 0, 0, 1, o, o],
              ["l", 0, i - 2 * o],
              ["a", o, o, 0, 0, 1, -o, o],
              ["l", 2 * o - n, 0],
              ["a", o, o, 0, 0, 1, -o, -o],
              ["l", 0, 2 * o - i],
              ["a", o, o, 0, 0, 1, o, -o],
              ["z"],
            ];
          var a = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
          return (a.toString = r), a;
        }
        function E(t, e, n, i, o) {
          if (
            (null == o && null == i && (i = n),
            (t = +t),
            (e = +e),
            (n = +n),
            (i = +i),
            null != o)
          )
            var a = Math.PI / 180,
              s = t + n * Math.cos(-i * a),
              u = t + n * Math.cos(-o * a),
              l = e + n * Math.sin(-i * a),
              c = e + n * Math.sin(-o * a),
              h = [
                ["M", s, l],
                ["A", n, n, 0, +(o - i > 180), 0, u, c],
              ];
          else
            h = [
              ["M", t, e],
              ["m", 0, -i],
              ["a", n, i, 0, 1, 1, 0, 2 * i],
              ["a", n, i, 0, 1, 1, 0, -2 * i],
              ["z"],
            ];
          return (h.toString = r), h;
        }
        function k(e) {
          var i = n(e),
            a = String.prototype.toLowerCase;
          if (i.rel) return o(i.rel);
          (t.is(e, "array") && t.is(e && e[0], "array")) ||
            (e = t.parsePathString(e));
          var s = [],
            u = 0,
            l = 0,
            c = 0,
            h = 0,
            f = 0;
          "M" == e[0][0] &&
            ((u = e[0][1]),
            (l = e[0][2]),
            (c = u),
            (h = l),
            f++,
            s.push(["M", u, l]));
          for (var d = f, p = e.length; p > d; d++) {
            var g = (s[d] = []),
              v = e[d];
            if (v[0] != a.call(v[0]))
              switch (((g[0] = a.call(v[0])), g[0])) {
                case "a":
                  (g[1] = v[1]),
                    (g[2] = v[2]),
                    (g[3] = v[3]),
                    (g[4] = v[4]),
                    (g[5] = v[5]),
                    (g[6] = +(v[6] - u).toFixed(3)),
                    (g[7] = +(v[7] - l).toFixed(3));
                  break;
                case "v":
                  g[1] = +(v[1] - l).toFixed(3);
                  break;
                case "m":
                  (c = v[1]), (h = v[2]);
                default:
                  for (var m = 1, y = v.length; y > m; m++)
                    g[m] = +(v[m] - (m % 2 ? u : l)).toFixed(3);
              }
            else {
              (g = s[d] = []), "m" == v[0] && ((c = v[1] + u), (h = v[2] + l));
              for (var b = 0, x = v.length; x > b; b++) s[d][b] = v[b];
            }
            var w = s[d].length;
            switch (s[d][0]) {
              case "z":
                (u = c), (l = h);
                break;
              case "h":
                u += +s[d][w - 1];
                break;
              case "v":
                l += +s[d][w - 1];
                break;
              default:
                (u += +s[d][w - 2]), (l += +s[d][w - 1]);
            }
          }
          return (s.toString = r), (i.rel = o(s)), s;
        }
        function _(e) {
          var i = n(e);
          if (i.abs) return o(i.abs);
          if (
            ((M(e, "array") && M(e && e[0], "array")) ||
              (e = t.parsePathString(e)),
            !e || !e.length)
          )
            return [["M", 0, 0]];
          var a,
            s = [],
            u = 0,
            l = 0,
            c = 0,
            h = 0,
            f = 0;
          "M" == e[0][0] &&
            ((u = +e[0][1]),
            (l = +e[0][2]),
            (c = u),
            (h = l),
            f++,
            (s[0] = ["M", u, l]));
          for (
            var d,
              p,
              g =
                3 == e.length &&
                "M" == e[0][0] &&
                "R" == e[1][0].toUpperCase() &&
                "Z" == e[2][0].toUpperCase(),
              v = f,
              m = e.length;
            m > v;
            v++
          ) {
            if (
              (s.push((d = [])), (p = e[v]), (a = p[0]), a != a.toUpperCase())
            )
              switch (((d[0] = a.toUpperCase()), d[0])) {
                case "A":
                  (d[1] = p[1]),
                    (d[2] = p[2]),
                    (d[3] = p[3]),
                    (d[4] = p[4]),
                    (d[5] = p[5]),
                    (d[6] = +p[6] + u),
                    (d[7] = +p[7] + l);
                  break;
                case "V":
                  d[1] = +p[1] + l;
                  break;
                case "H":
                  d[1] = +p[1] + u;
                  break;
                case "R":
                  for (
                    var y = [u, l].concat(p.slice(1)), b = 2, x = y.length;
                    x > b;
                    b++
                  )
                    (y[b] = +y[b] + u), (y[++b] = +y[b] + l);
                  s.pop(), (s = s.concat(O(y, g)));
                  break;
                case "O":
                  s.pop(),
                    (y = E(u, l, p[1], p[2])),
                    y.push(y[0]),
                    (s = s.concat(y));
                  break;
                case "U":
                  s.pop(),
                    (s = s.concat(E(u, l, p[1], p[2], p[3]))),
                    (d = ["U"].concat(s[s.length - 1].slice(-2)));
                  break;
                case "M":
                  (c = +p[1] + u), (h = +p[2] + l);
                default:
                  for (b = 1, x = p.length; x > b; b++)
                    d[b] = +p[b] + (b % 2 ? u : l);
              }
            else if ("R" == a)
              (y = [u, l].concat(p.slice(1))),
                s.pop(),
                (s = s.concat(O(y, g))),
                (d = ["R"].concat(p.slice(-2)));
            else if ("O" == a)
              s.pop(),
                (y = E(u, l, p[1], p[2])),
                y.push(y[0]),
                (s = s.concat(y));
            else if ("U" == a)
              s.pop(),
                (s = s.concat(E(u, l, p[1], p[2], p[3]))),
                (d = ["U"].concat(s[s.length - 1].slice(-2)));
            else for (var w = 0, C = p.length; C > w; w++) d[w] = p[w];
            if (((a = a.toUpperCase()), "O" != a))
              switch (d[0]) {
                case "Z":
                  (u = +c), (l = +h);
                  break;
                case "H":
                  u = d[1];
                  break;
                case "V":
                  l = d[1];
                  break;
                case "M":
                  (c = d[d.length - 2]), (h = d[d.length - 1]);
                default:
                  (u = d[d.length - 2]), (l = d[d.length - 1]);
              }
          }
          return (s.toString = r), (i.abs = o(s)), s;
        }
        function S(t, e, n, i) {
          return [t, e, n, i, n, i];
        }
        function T(t, e, n, i, r, o) {
          var a = 1 / 3,
            s = 2 / 3;
          return [
            a * t + s * n,
            a * e + s * i,
            a * r + s * n,
            a * o + s * i,
            r,
            o,
          ];
        }
        function j(e, n, i, r, o, a, s, u, l, c) {
          var h,
            f = (120 * R) / 180,
            d = (R / 180) * (+o || 0),
            p = [],
            g = t._.cacher(function (t, e, n) {
              var i = t * D.cos(n) - e * D.sin(n),
                r = t * D.sin(n) + e * D.cos(n);
              return {
                x: i,
                y: r,
              };
            });
          if (c) (k = c[0]), (_ = c[1]), (C = c[2]), (E = c[3]);
          else {
            (h = g(e, n, -d)),
              (e = h.x),
              (n = h.y),
              (h = g(u, l, -d)),
              (u = h.x),
              (l = h.y);
            var v = (D.cos((R / 180) * o), D.sin((R / 180) * o), (e - u) / 2),
              m = (n - l) / 2,
              y = (v * v) / (i * i) + (m * m) / (r * r);
            y > 1 && ((y = D.sqrt(y)), (i = y * i), (r = y * r));
            var b = i * i,
              x = r * r,
              w =
                (a == s ? -1 : 1) *
                D.sqrt(
                  V((b * x - b * m * m - x * v * v) / (b * m * m + x * v * v))
                ),
              C = (w * i * m) / r + (e + u) / 2,
              E = (w * -r * v) / i + (n + l) / 2,
              k = D.asin(((n - E) / r).toFixed(9)),
              _ = D.asin(((l - E) / r).toFixed(9));
            (k = C > e ? R - k : k),
              (_ = C > u ? R - _ : _),
              0 > k && (k = 2 * R + k),
              0 > _ && (_ = 2 * R + _),
              s && k > _ && (k -= 2 * R),
              !s && _ > k && (_ -= 2 * R);
          }
          var S = _ - k;
          if (V(S) > f) {
            var T = _,
              P = u,
              $ = l;
            (_ = k + f * (s && _ > k ? 1 : -1)),
              (u = C + i * D.cos(_)),
              (l = E + r * D.sin(_)),
              (p = j(u, l, i, r, o, 0, s, P, $, [_, T, C, E]));
          }
          S = _ - k;
          var A = D.cos(k),
            O = D.sin(k),
            q = D.cos(_),
            M = D.sin(_),
            N = D.tan(S / 4),
            F = (4 / 3) * i * N,
            B = (4 / 3) * r * N,
            I = [e, n],
            L = [e + F * O, n - B * A],
            X = [u + F * M, l - B * q],
            Y = [u, l];
          if (((L[0] = 2 * I[0] - L[0]), (L[1] = 2 * I[1] - L[1]), c))
            return [L, X, Y].concat(p);
          p = [L, X, Y].concat(p).join().split(",");
          for (var z = [], G = 0, W = p.length; W > G; G++)
            z[G] = G % 2 ? g(p[G - 1], p[G], d).y : g(p[G], p[G + 1], d).x;
          return z;
        }
        function P(t, e, n, i, r, o, a, s) {
          for (
            var u, l, c, h, f, d, p, g, v = [], m = [[], []], y = 0;
            2 > y;
            ++y
          )
            if (
              (0 == y
                ? ((l = 6 * t - 12 * n + 6 * r),
                  (u = -3 * t + 9 * n - 9 * r + 3 * a),
                  (c = 3 * n - 3 * t))
                : ((l = 6 * e - 12 * i + 6 * o),
                  (u = -3 * e + 9 * i - 9 * o + 3 * s),
                  (c = 3 * i - 3 * e)),
              V(u) < 1e-12)
            ) {
              if (V(l) < 1e-12) continue;
              (h = -c / l), h > 0 && 1 > h && v.push(h);
            } else
              (p = l * l - 4 * c * u),
                (g = D.sqrt(p)),
                0 > p ||
                  ((f = (-l + g) / (2 * u)),
                  f > 0 && 1 > f && v.push(f),
                  (d = (-l - g) / (2 * u)),
                  d > 0 && 1 > d && v.push(d));
          for (var b, x = v.length, w = x; x--; )
            (h = v[x]),
              (b = 1 - h),
              (m[0][x] =
                b * b * b * t +
                3 * b * b * h * n +
                3 * b * h * h * r +
                h * h * h * a),
              (m[1][x] =
                b * b * b * e +
                3 * b * b * h * i +
                3 * b * h * h * o +
                h * h * h * s);
          return (
            (m[0][w] = t),
            (m[1][w] = e),
            (m[0][w + 1] = a),
            (m[1][w + 1] = s),
            (m[0].length = m[1].length = w + 2),
            {
              min: {
                x: L.apply(0, m[0]),
                y: L.apply(0, m[1]),
              },
              max: {
                x: X.apply(0, m[0]),
                y: X.apply(0, m[1]),
              },
            }
          );
        }
        function $(t, e) {
          var i = !e && n(t);
          if (!e && i.curve) return o(i.curve);
          for (
            var r = _(t),
              a = e && _(e),
              s = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null,
              },
              u = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null,
              },
              l = function (t, e, n) {
                var i, r;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (
                  (!(
                    t[0] in
                    {
                      T: 1,
                      Q: 1,
                    }
                  ) && (e.qx = e.qy = null),
                  t[0])
                ) {
                  case "M":
                    (e.X = t[1]), (e.Y = t[2]);
                    break;
                  case "A":
                    t = ["C"].concat(j.apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                  case "S":
                    "C" == n || "S" == n
                      ? ((i = 2 * e.x - e.bx), (r = 2 * e.y - e.by))
                      : ((i = e.x), (r = e.y)),
                      (t = ["C", i, r].concat(t.slice(1)));
                    break;
                  case "T":
                    "Q" == n || "T" == n
                      ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                      : ((e.qx = e.x), (e.qy = e.y)),
                      (t = ["C"].concat(T(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                    break;
                  case "Q":
                    (e.qx = t[1]),
                      (e.qy = t[2]),
                      (t = ["C"].concat(T(e.x, e.y, t[1], t[2], t[3], t[4])));
                    break;
                  case "L":
                    t = ["C"].concat(S(e.x, e.y, t[1], t[2]));
                    break;
                  case "H":
                    t = ["C"].concat(S(e.x, e.y, t[1], e.y));
                    break;
                  case "V":
                    t = ["C"].concat(S(e.x, e.y, e.x, t[1]));
                    break;
                  case "Z":
                    t = ["C"].concat(S(e.x, e.y, e.X, e.Y));
                }
                return t;
              },
              c = function (t, e) {
                if (t[e].length > 7) {
                  t[e].shift();
                  for (var n = t[e]; n.length; )
                    (f[e] = "A"),
                      a && (d[e] = "A"),
                      t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                  t.splice(e, 1), (m = X(r.length, (a && a.length) || 0));
                }
              },
              h = function (t, e, n, i, o) {
                t &&
                  e &&
                  "M" == t[o][0] &&
                  "M" != e[o][0] &&
                  (e.splice(o, 0, ["M", i.x, i.y]),
                  (n.bx = 0),
                  (n.by = 0),
                  (n.x = t[o][1]),
                  (n.y = t[o][2]),
                  (m = X(r.length, (a && a.length) || 0)));
              },
              f = [],
              d = [],
              p = "",
              g = "",
              v = 0,
              m = X(r.length, (a && a.length) || 0);
            m > v;
            v++
          ) {
            r[v] && (p = r[v][0]),
              "C" != p && ((f[v] = p), v && (g = f[v - 1])),
              (r[v] = l(r[v], s, g)),
              "A" != f[v] && "C" == p && (f[v] = "C"),
              c(r, v),
              a &&
                (a[v] && (p = a[v][0]),
                "C" != p && ((d[v] = p), v && (g = d[v - 1])),
                (a[v] = l(a[v], u, g)),
                "A" != d[v] && "C" == p && (d[v] = "C"),
                c(a, v)),
              h(r, a, s, u, v),
              h(a, r, u, s, v);
            var y = r[v],
              b = a && a[v],
              x = y.length,
              w = a && b.length;
            (s.x = y[x - 2]),
              (s.y = y[x - 1]),
              (s.bx = I(y[x - 4]) || s.x),
              (s.by = I(y[x - 3]) || s.y),
              (u.bx = a && (I(b[w - 4]) || u.x)),
              (u.by = a && (I(b[w - 3]) || u.y)),
              (u.x = a && b[w - 2]),
              (u.y = a && b[w - 1]);
          }
          return a || (i.curve = o(r)), a ? [r, a] : r;
        }
        function A(t, e) {
          if (!e) return t;
          var n, i, r, o, a, s, u;
          for (t = $(t), r = 0, a = t.length; a > r; r++)
            for (u = t[r], o = 1, s = u.length; s > o; o += 2)
              (n = e.x(u[o], u[o + 1])),
                (i = e.y(u[o], u[o + 1])),
                (u[o] = n),
                (u[o + 1] = i);
          return t;
        }
        function O(t, e) {
          for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) {
            var o = [
              {
                x: +t[i - 2],
                y: +t[i - 1],
              },
              {
                x: +t[i],
                y: +t[i + 1],
              },
              {
                x: +t[i + 2],
                y: +t[i + 3],
              },
              {
                x: +t[i + 4],
                y: +t[i + 5],
              },
            ];
            e
              ? i
                ? r - 4 == i
                  ? (o[3] = {
                      x: +t[0],
                      y: +t[1],
                    })
                  : r - 2 == i &&
                    ((o[2] = {
                      x: +t[0],
                      y: +t[1],
                    }),
                    (o[3] = {
                      x: +t[2],
                      y: +t[3],
                    }))
                : (o[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1],
                  })
              : r - 4 == i
              ? (o[3] = o[2])
              : i ||
                (o[0] = {
                  x: +t[i],
                  y: +t[i + 1],
                }),
              n.push([
                "C",
                (-o[0].x + 6 * o[1].x + o[2].x) / 6,
                (-o[0].y + 6 * o[1].y + o[2].y) / 6,
                (o[1].x + 6 * o[2].x - o[3].x) / 6,
                (o[1].y + 6 * o[2].y - o[3].y) / 6,
                o[2].x,
                o[2].y,
              ]);
          }
          return n;
        }
        var q = e.prototype,
          M = t.is,
          N = t._.clone,
          F = "hasOwnProperty",
          B = /,?([a-z]),?/gi,
          I = parseFloat,
          D = Math,
          R = D.PI,
          L = D.min,
          X = D.max,
          Y = D.pow,
          V = D.abs,
          z = s(1),
          G = s(),
          W = s(0, 1),
          U = t._unit2px,
          H = {
            path: function (t) {
              return t.attr("path");
            },
            circle: function (t) {
              var e = U(t);
              return E(e.cx, e.cy, e.r);
            },
            ellipse: function (t) {
              var e = U(t);
              return E(e.cx || 0, e.cy || 0, e.rx, e.ry);
            },
            rect: function (t) {
              var e = U(t);
              return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry);
            },
            image: function (t) {
              var e = U(t);
              return C(e.x || 0, e.y || 0, e.width, e.height);
            },
            line: function (t) {
              return (
                "M" +
                [
                  t.attr("x1") || 0,
                  t.attr("y1") || 0,
                  t.attr("x2"),
                  t.attr("y2"),
                ]
              );
            },
            polyline: function (t) {
              return "M" + t.attr("points");
            },
            polygon: function (t) {
              return "M" + t.attr("points") + "z";
            },
            deflt: function (t) {
              var e = t.node.getBBox();
              return C(e.x, e.y, e.width, e.height);
            },
          };
        (t.path = n),
          (t.path.getTotalLength = z),
          (t.path.getPointAtLength = G),
          (t.path.getSubpath = function (t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return W(t, e).end;
            var i = W(t, n, 1);
            return e ? W(i, e).end : i;
          }),
          (q.getTotalLength = function () {
            return this.node.getTotalLength
              ? this.node.getTotalLength()
              : void 0;
          }),
          (q.getPointAtLength = function (t) {
            return G(this.attr("d"), t);
          }),
          (q.getSubpath = function (e, n) {
            return t.path.getSubpath(this.attr("d"), e, n);
          }),
          (t._.box = i),
          (t.path.findDotsAtSegment = u),
          (t.path.bezierBBox = l),
          (t.path.isPointInsideBBox = c),
          (t.path.isBBoxIntersect = h),
          (t.path.intersection = m),
          (t.path.intersectionNumber = y),
          (t.path.isPointInside = x),
          (t.path.getBBox = w),
          (t.path.get = H),
          (t.path.toRelative = k),
          (t.path.toAbsolute = _),
          (t.path.toCubic = $),
          (t.path.map = A),
          (t.path.toString = r),
          (t.path.clone = o);
      }),
      i.plugin(function (t) {
        var i = Math.max,
          r = Math.min,
          o = function (t) {
            if (
              ((this.items = []),
              (this.bindings = {}),
              (this.length = 0),
              (this.type = "set"),
              t)
            )
              for (var e = 0, n = t.length; n > e; e++)
                t[e] &&
                  ((this[this.items.length] = this.items[this.items.length] =
                    t[e]),
                  this.length++);
          },
          a = o.prototype;
        (a.push = function () {
          for (var t, e, n = 0, i = arguments.length; i > n; n++)
            (t = arguments[n]),
              t &&
                ((e = this.items.length),
                (this[e] = this.items[e] = t),
                this.length++);
          return this;
        }),
          (a.pop = function () {
            return this.length && delete this[this.length--], this.items.pop();
          }),
          (a.forEach = function (t, e) {
            for (var n = 0, i = this.items.length; i > n; n++)
              if (t.call(e, this.items[n], n) === !1) return this;
            return this;
          }),
          (a.animate = function (i, r, o, a) {
            "function" != typeof o || o.length || ((a = o), (o = n.linear)),
              i instanceof t._.Animation &&
                ((a = i.callback), (o = i.easing), (r = o.dur), (i = i.attr));
            var s = arguments;
            if (t.is(i, "array") && t.is(s[s.length - 1], "array")) var u = !0;
            var l,
              c = function () {
                l ? (this.b = l) : (l = this.b);
              },
              h = 0,
              f =
                a &&
                function () {
                  h++ == this.length && a.call(this);
                };
            return this.forEach(function (t, n) {
              e.once("snap.animcreated." + t.id, c),
                u ? s[n] && t.animate.apply(t, s[n]) : t.animate(i, r, o, f);
            });
          }),
          (a.remove = function () {
            for (; this.length; ) this.pop().remove();
            return this;
          }),
          (a.bind = function (t, e, n) {
            var i = {};
            if ("function" == typeof e) this.bindings[t] = e;
            else {
              var r = n || t;
              this.bindings[t] = function (t) {
                (i[r] = t), e.attr(i);
              };
            }
            return this;
          }),
          (a.attr = function (t) {
            var e = {};
            for (var n in t)
              this.bindings[n] ? this.bindings[n](t[n]) : (e[n] = t[n]);
            for (var i = 0, r = this.items.length; r > i; i++)
              this.items[i].attr(e);
            return this;
          }),
          (a.clear = function () {
            for (; this.length; ) this.pop();
          }),
          (a.splice = function (t, e) {
            (t = 0 > t ? i(this.length + t, 0) : t),
              (e = i(0, r(this.length - t, e)));
            var n,
              a = [],
              s = [],
              u = [];
            for (n = 2; n < arguments.length; n++) u.push(arguments[n]);
            for (n = 0; e > n; n++) s.push(this[t + n]);
            for (; n < this.length - t; n++) a.push(this[t + n]);
            var l = u.length;
            for (n = 0; n < l + a.length; n++)
              this.items[t + n] = this[t + n] = l > n ? u[n] : a[n - l];
            for (n = this.items.length = this.length -= e - l; this[n]; )
              delete this[n++];
            return new o(s);
          }),
          (a.exclude = function (t) {
            for (var e = 0, n = this.length; n > e; e++)
              if (this[e] == t) return this.splice(e, 1), !0;
            return !1;
          }),
          (a.insertAfter = function (t) {
            for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
            return this;
          }),
          (a.getBBox = function () {
            for (
              var t = [], e = [], n = [], o = [], a = this.items.length;
              a--;

            )
              if (!this.items[a].removed) {
                var s = this.items[a].getBBox();
                t.push(s.x),
                  e.push(s.y),
                  n.push(s.x + s.width),
                  o.push(s.y + s.height);
              }
            return (
              (t = r.apply(0, t)),
              (e = r.apply(0, e)),
              (n = i.apply(0, n)),
              (o = i.apply(0, o)),
              {
                x: t,
                y: e,
                x2: n,
                y2: o,
                width: n - t,
                height: o - e,
                cx: t + (n - t) / 2,
                cy: e + (o - e) / 2,
              }
            );
          }),
          (a.clone = function (t) {
            t = new o();
            for (var e = 0, n = this.items.length; n > e; e++)
              t.push(this.items[e].clone());
            return t;
          }),
          (a.toString = function () {
            return "Snap‘s set";
          }),
          (a.type = "set"),
          (t.set = function () {
            var t = new o();
            return (
              arguments.length &&
                t.push.apply(t, Array.prototype.slice.call(arguments, 0)),
              t
            );
          });
      }),
      i.plugin(function (t, n) {
        function i(t) {
          var e = t[0];
          switch (e.toLowerCase()) {
            case "t":
              return [e, 0, 0];
            case "m":
              return [e, 1, 0, 0, 1, 0, 0];
            case "r":
              return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
            case "s":
              return 5 == t.length
                ? [e, 1, 1, t[3], t[4]]
                : 3 == t.length
                ? [e, 1, 1]
                : [e, 1];
          }
        }
        function r(e, n, r) {
          (n = f(n).replace(/\.{3}|\u2026/g, e)),
            (e = t.parseTransformString(e) || []),
            (n = t.parseTransformString(n) || []);
          for (
            var o,
              a,
              s,
              c,
              h = Math.max(e.length, n.length),
              d = [],
              p = [],
              g = 0;
            h > g;
            g++
          ) {
            if (
              ((s = e[g] || i(n[g])),
              (c = n[g] || i(s)),
              s[0] != c[0] ||
                ("r" == s[0].toLowerCase() && (s[2] != c[2] || s[3] != c[3])) ||
                ("s" == s[0].toLowerCase() && (s[3] != c[3] || s[4] != c[4])))
            ) {
              (e = t._.transform2matrix(e, r())),
                (n = t._.transform2matrix(n, r())),
                (d = [["m", e.a, e.b, e.c, e.d, e.e, e.f]]),
                (p = [["m", n.a, n.b, n.c, n.d, n.e, n.f]]);
              break;
            }
            for (
              d[g] = [], p[g] = [], o = 0, a = Math.max(s.length, c.length);
              a > o;
              o++
            )
              o in s && (d[g][o] = s[o]), o in c && (p[g][o] = c[o]);
          }
          return {
            from: l(d),
            to: l(p),
            f: u(d),
          };
        }
        function o(t) {
          return t;
        }
        function a(t) {
          return function (e) {
            return +e.toFixed(3) + t;
          };
        }
        function s(e) {
          return t.rgb(e[0], e[1], e[2]);
        }
        function u(t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s = 0,
            u = [];
          for (e = 0, n = t.length; n > e; e++) {
            for (
              o = "[", a = ['"' + t[e][0] + '"'], i = 1, r = t[e].length;
              r > i;
              i++
            )
              a[i] = "val[" + s++ + "]";
            (o += a + "]"), (u[e] = o);
          }
          return Function("val", "return Snap.path.toString.call([" + u + "])");
        }
        function l(t) {
          for (var e = [], n = 0, i = t.length; i > n; n++)
            for (var r = 1, o = t[n].length; o > r; r++) e.push(t[n][r]);
          return e;
        }
        var c = {},
          h = /[a-z]+$/i,
          f = String;
        (c.stroke = c.fill = "colour"),
          (n.prototype.equal = function (t, n) {
            return e("snap.util.equal", this, t, n).firstDefined();
          }),
          e.on("snap.util.equal", function (e, n) {
            var i,
              d,
              p = f(this.attr(e) || ""),
              g = this;
            if (p == +p && n == +n)
              return {
                from: +p,
                to: +n,
                f: o,
              };
            if ("colour" == c[e])
              return (
                (i = t.color(p)),
                (d = t.color(n)),
                {
                  from: [i.r, i.g, i.b, i.opacity],
                  to: [d.r, d.g, d.b, d.opacity],
                  f: s,
                }
              );
            if (
              "transform" == e ||
              "gradientTransform" == e ||
              "patternTransform" == e
            )
              return (
                n instanceof t.Matrix && (n = n.toTransformString()),
                t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)),
                r(p, n, function () {
                  return g.getBBox(1);
                })
              );
            if ("d" == e || "path" == e)
              return (
                (i = t.path.toCubic(p, n)),
                {
                  from: l(i[0]),
                  to: l(i[1]),
                  f: u(i[0]),
                }
              );
            if ("points" == e)
              return (
                (i = f(p).split(t._.separator)),
                (d = f(n).split(t._.separator)),
                {
                  from: i,
                  to: d,
                  f: function (t) {
                    return t;
                  },
                }
              );
            aUnit = p.match(h);
            var v = f(n).match(h);
            return aUnit && aUnit == v
              ? {
                  from: parseFloat(p),
                  to: parseFloat(n),
                  f: a(aUnit),
                }
              : {
                  from: this.asPX(e),
                  to: this.asPX(e, n),
                  f: o,
                };
          });
      }),
      i.plugin(function (t, n, i, r) {
        for (
          var o = n.prototype,
            a = "hasOwnProperty",
            s = ("createTouch" in r.doc),
            u = [
              "click",
              "dblclick",
              "mousedown",
              "mousemove",
              "mouseout",
              "mouseover",
              "mouseup",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
            ],
            l = {
              mousedown: "touchstart",
              mousemove: "touchmove",
              mouseup: "touchend",
            },
            c = function (t, e) {
              var n = "y" == t ? "scrollTop" : "scrollLeft",
                i = e && e.node ? e.node.ownerDocument : r.doc;
              return i[(n in i.documentElement) ? "documentElement" : "body"][
                n
              ];
            },
            h = function () {
              this.returnValue = !1;
            },
            f = function () {
              return this.originalEvent.preventDefault();
            },
            d = function () {
              this.cancelBubble = !0;
            },
            p = function () {
              return this.originalEvent.stopPropagation();
            },
            g = (function () {
              return r.doc.addEventListener
                ? function (t, e, n, i) {
                    var r = s && l[e] ? l[e] : e,
                      o = function (r) {
                        var o = c("y", i),
                          u = c("x", i);
                        if (s && l[a](e))
                          for (
                            var h = 0,
                              d = r.targetTouches && r.targetTouches.length;
                            d > h;
                            h++
                          )
                            if (
                              r.targetTouches[h].target == t ||
                              t.contains(r.targetTouches[h].target)
                            ) {
                              var g = r;
                              (r = r.targetTouches[h]),
                                (r.originalEvent = g),
                                (r.preventDefault = f),
                                (r.stopPropagation = p);
                              break;
                            }
                        var v = r.clientX + u,
                          m = r.clientY + o;
                        return n.call(i, r, v, m);
                      };
                    return (
                      e !== r && t.addEventListener(e, o, !1),
                      t.addEventListener(r, o, !1),
                      function () {
                        return (
                          e !== r && t.removeEventListener(e, o, !1),
                          t.removeEventListener(r, o, !1),
                          !0
                        );
                      }
                    );
                  }
                : r.doc.attachEvent
                ? function (t, e, n, i) {
                    var r = function (t) {
                      t = t || i.node.ownerDocument.window.event;
                      var e = c("y", i),
                        r = c("x", i),
                        o = t.clientX + r,
                        a = t.clientY + e;
                      return (
                        (t.preventDefault = t.preventDefault || h),
                        (t.stopPropagation = t.stopPropagation || d),
                        n.call(i, t, o, a)
                      );
                    };
                    t.attachEvent("on" + e, r);
                    var o = function () {
                      return t.detachEvent("on" + e, r), !0;
                    };
                    return o;
                  }
                : void 0;
            })(),
            v = [],
            m = function (t) {
              for (
                var n,
                  i = t.clientX,
                  r = t.clientY,
                  o = c("y"),
                  a = c("x"),
                  u = v.length;
                u--;

              ) {
                if (((n = v[u]), s)) {
                  for (var l, h = t.touches && t.touches.length; h--; )
                    if (
                      ((l = t.touches[h]),
                      l.identifier == n.el._drag.id ||
                        n.el.node.contains(l.target))
                    ) {
                      (i = l.clientX),
                        (r = l.clientY),
                        (t.originalEvent
                          ? t.originalEvent
                          : t
                        ).preventDefault();
                      break;
                    }
                } else t.preventDefault();
                var f = n.el.node;
                f.nextSibling,
                  f.parentNode,
                  f.style.display,
                  (i += a),
                  (r += o),
                  e(
                    "snap.drag.move." + n.el.id,
                    n.move_scope || n.el,
                    i - n.el._drag.x,
                    r - n.el._drag.y,
                    i,
                    r,
                    t
                  );
              }
            },
            y = function (n) {
              t.unmousemove(m).unmouseup(y);
              for (var i, r = v.length; r--; )
                (i = v[r]),
                  (i.el._drag = {}),
                  e(
                    "snap.drag.end." + i.el.id,
                    i.end_scope || i.start_scope || i.move_scope || i.el,
                    n
                  );
              v = [];
            },
            b = u.length;
          b--;

        )
          !(function (e) {
            (t[e] = o[e] =
              function (n, i) {
                return (
                  t.is(n, "function") &&
                    ((this.events = this.events || []),
                    this.events.push({
                      name: e,
                      f: n,
                      unbind: g(this.node || document, e, n, i || this),
                    })),
                  this
                );
              }),
              (t["un" + e] = o["un" + e] =
                function (t) {
                  for (var n = this.events || [], i = n.length; i--; )
                    if (n[i].name == e && (n[i].f == t || !t))
                      return (
                        n[i].unbind(),
                        n.splice(i, 1),
                        !n.length && delete this.events,
                        this
                      );
                  return this;
                });
          })(u[b]);
        (o.hover = function (t, e, n, i) {
          return this.mouseover(t, n).mouseout(e, i || n);
        }),
          (o.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e);
          });
        var x = [];
        (o.drag = function (n, i, r, o, a, s) {
          function u(u, l, c) {
            (u.originalEvent || u).preventDefault(),
              (this._drag.x = l),
              (this._drag.y = c),
              (this._drag.id = u.identifier),
              !v.length && t.mousemove(m).mouseup(y),
              v.push({
                el: this,
                move_scope: o,
                start_scope: a,
                end_scope: s,
              }),
              i && e.on("snap.drag.start." + this.id, i),
              n && e.on("snap.drag.move." + this.id, n),
              r && e.on("snap.drag.end." + this.id, r),
              e("snap.drag.start." + this.id, a || o || this, l, c, u);
          }
          if (!arguments.length) {
            var l;
            return this.drag(
              function (t, e) {
                this.attr({
                  transform: l + (l ? "T" : "t") + [t, e],
                });
              },
              function () {
                l = this.transform().local;
              }
            );
          }
          return (
            (this._drag = {}),
            x.push({
              el: this,
              start: u,
            }),
            this.mousedown(u),
            this
          );
        }),
          (o.undrag = function () {
            for (var n = x.length; n--; )
              x[n].el == this &&
                (this.unmousedown(x[n].start),
                x.splice(n, 1),
                e.unbind("snap.drag.*." + this.id));
            return !x.length && t.unmousemove(m).unmouseup(y), this;
          });
      }),
      i.plugin(function (t, n, i) {
        var r = (n.prototype, i.prototype),
          o = /^\s*url\((.+)\)/,
          a = String,
          s = t._.$;
        (t.filter = {}),
          (r.filter = function (e) {
            var i = this;
            "svg" != i.type && (i = i.paper);
            var r = t.parse(a(e)),
              o = t._.id(),
              u = (i.node.offsetWidth, i.node.offsetHeight, s("filter"));
            return (
              s(u, {
                id: o,
                filterUnits: "userSpaceOnUse",
              }),
              u.appendChild(r.node),
              i.defs.appendChild(u),
              new n(u)
            );
          }),
          e.on("snap.util.getattr.filter", function () {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
              var i = a(n).match(o);
              return i && t.select(i[1]);
            }
          }),
          e.on("snap.util.attr.filter", function (i) {
            if (i instanceof n && "filter" == i.type) {
              e.stop();
              var r = i.node.id;
              r ||
                (s(i.node, {
                  id: i.id,
                }),
                (r = i.id)),
                s(this.node, {
                  filter: t.url(r),
                });
            }
            (i && "none" != i) ||
              (e.stop(), this.node.removeAttribute("filter"));
          }),
          (t.filter.blur = function (e, n) {
            null == e && (e = 2);
            var i = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
              def: i,
            });
          }),
          (t.filter.blur.toString = function () {
            return this();
          }),
          (t.filter.shadow = function (e, n, i, r, o) {
            return (
              "string" == typeof i && ((r = i), (o = r), (i = 4)),
              "string" != typeof r && ((o = r), (r = "#000")),
              (r = r || "#000"),
              null == i && (i = 4),
              null == o && (o = 1),
              null == e && ((e = 0), (n = 2)),
              null == n && (n = e),
              (r = t.color(r)),
              t.format(
                '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                {
                  color: r,
                  dx: e,
                  dy: n,
                  blur: i,
                  opacity: o,
                }
              )
            );
          }),
          (t.filter.shadow.toString = function () {
            return this();
          }),
          (t.filter.grayscale = function (e) {
            return (
              null == e && (e = 1),
              t.format(
                '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                {
                  a: 0.2126 + 0.7874 * (1 - e),
                  b: 0.7152 - 0.7152 * (1 - e),
                  c: 0.0722 - 0.0722 * (1 - e),
                  d: 0.2126 - 0.2126 * (1 - e),
                  e: 0.7152 + 0.2848 * (1 - e),
                  f: 0.0722 - 0.0722 * (1 - e),
                  g: 0.2126 - 0.2126 * (1 - e),
                  h: 0.0722 + 0.9278 * (1 - e),
                }
              )
            );
          }),
          (t.filter.grayscale.toString = function () {
            return this();
          }),
          (t.filter.sepia = function (e) {
            return (
              null == e && (e = 1),
              t.format(
                '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                {
                  a: 0.393 + 0.607 * (1 - e),
                  b: 0.769 - 0.769 * (1 - e),
                  c: 0.189 - 0.189 * (1 - e),
                  d: 0.349 - 0.349 * (1 - e),
                  e: 0.686 + 0.314 * (1 - e),
                  f: 0.168 - 0.168 * (1 - e),
                  g: 0.272 - 0.272 * (1 - e),
                  h: 0.534 - 0.534 * (1 - e),
                  i: 0.131 + 0.869 * (1 - e),
                }
              )
            );
          }),
          (t.filter.sepia.toString = function () {
            return this();
          }),
          (t.filter.saturate = function (e) {
            return (
              null == e && (e = 1),
              t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e,
              })
            );
          }),
          (t.filter.saturate.toString = function () {
            return this();
          }),
          (t.filter.hueRotate = function (e) {
            return (
              (e = e || 0),
              t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e,
              })
            );
          }),
          (t.filter.hueRotate.toString = function () {
            return this();
          }),
          (t.filter.invert = function (e) {
            return (
              null == e && (e = 1),
              t.format(
                '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                {
                  amount: e,
                  amount2: 1 - e,
                }
              )
            );
          }),
          (t.filter.invert.toString = function () {
            return this();
          }),
          (t.filter.brightness = function (e) {
            return (
              null == e && (e = 1),
              t.format(
                '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                {
                  amount: e,
                }
              )
            );
          }),
          (t.filter.brightness.toString = function () {
            return this();
          }),
          (t.filter.contrast = function (e) {
            return (
              null == e && (e = 1),
              t.format(
                '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                {
                  amount: e,
                  amount2: 0.5 - e / 2,
                }
              )
            );
          }),
          (t.filter.contrast.toString = function () {
            return this();
          });
      }),
      i
    );
  }),
  define("Snap.svg", ["Snap.svg/snap.svg-min"], function (t) {
    return t;
  }),
  define("html-range/index", ["jquery-ui-widget"], function () {
    !(function (t) {
      var e = {
        name: "range",
        options: {},
        _create: function () {
          this._super("_create");
          var e = this.widget();
          this.options;
          (this.$range = e.find('input[type="range"]')),
            (this.$value = e.find("output")),
            this.$range
              .on({
                input: t.proxy(this, "_input"),
                change: t.proxy(this, "_change"),
              })
              .trigger("input");
        },
        _change: function (t) {
          this._input(t), this._trigger("change");
        },
        _input: function (e) {
          var n = t(e.currentTarget),
            i = n.val(),
            r = n.attr("min"),
            o = n.attr("max"),
            a = o - r,
            s = (100 / a) * i;
          this.$value.css({
            width: s + "%",
          }),
            this._trigger("input", null, {
              value: i,
              perc: s,
            });
        },
      };
      t.widget("twentyeight." + e.name, t.Widget, e);
    })(jQuery);
  }),
  define("html-range", ["html-range/index"], function (t) {
    return t;
  }),
  define("/js/lib/calculator/calculation.js", [], function () {
    var t = function (t) {
        (this.availableAreas = t), (this.selectedAreas = {});
      },
      e = t.prototype,
      n = {
        getSelectedAreas: function () {
          return Object.keys(this.selectedAreas);
        },
        getAvailableAreas: function () {
          return Object.keys(this.availableAreas);
        },
        toggleArea: function (t) {
          null == this.selectedAreas[t]
            ? (this.selectedAreas[t] = this.availableAreas[t])
            : ((this.selectedAreas[t] = null), delete this.selectedAreas[t]);
        },
        grafts: function (t) {
          var e = 0,
            n = this;
          return (
            Object.keys(this.selectedAreas).forEach(function (i, r, o) {
              var a = n.selectedAreas[i];
              null != a && (e += t * a.grafts);
            }),
            Math.round(e)
          );
        },
        hairs: function (t) {
          var e = 0,
            n = this;
          return (
            Object.keys(this.selectedAreas).forEach(function (i, r, o) {
              var a = n.selectedAreas[i];
              null != a && (e += t * a.hairs * a.grafts);
            }),
            Math.round(e)
          );
        },
      };
    return (
      Object.keys(n).forEach(function (t, i, r) {
        e[t] = n[t];
      }),
      t
    );
  }),
  define(
    "/js/lib/calculator/type.js",
    ["jquery-ui-widget", "Snap.svg"],
    function () {
      var t = require("Snap.svg");
      !(function (e) {
        var n = "type";
        e.widget("twentyeight." + n, e.Widget, {
          options: {},
          _create: function () {
            this._super("_create");
            var n = this.widget();
            this.options;
            (this.$inputs = n.find("input")), (this.$img = n.find(".img"));
            var i = this;
            this.$img.find("svg").each(function (n) {
              t(this)
                .selectAll('[id^="_"]')
                .forEach(function (t) {
                  t.click(e.proxy(i, "_click"));
                });
            }),
              this.$inputs.on({
                change: e.proxy(this, "_change"),
              });
          },
          percentage: function (e) {
            var n = {
                "fill-opacity": e + " !important",
              },
              i = "";
            Object.keys(n).forEach(function (t, e, r) {
              i += t + ":" + n[t] + ";";
            }),
              this.$img.find("svg").each(function (e) {
                t(this)
                  .selectAll('[id^="_"].checked')
                  .forEach(function (t) {
                    t.attr({
                      style: i,
                    });
                  });
              });
          },
          _change: function (n) {
            var i = (this.widget(), this.options),
              r = e(n.currentTarget),
              o = t(this.$img.find("#_" + r.val()).get(0));
            i.calculation.toggleArea(o.attr("id")),
              o.toggleClass("checked"),
              o.hasClass("checked") ||
                o.attr({
                  style: "fill-opacity: 0;",
                });
          },
          _click: function (e) {
            var n = this.widget(),
              i = this.options,
              r = "#area_" + i.i + t(e.currentTarget).attr("id");
            n.find(r).trigger("click");
          },
        });
      })(jQuery);
    }
  ),
  define(
    "js/lib/calculator/main",
    [
      "Snap.svg",
      "html-range",
      "jquery-ui-widget",
      "/js/lib/calculator/calculation.js",
      "/js/lib/calculator/type.js",
    ],
    function () {
      var t =
          (require("Snap.svg"), require("/js/lib/calculator/calculation.js")),
        e = function (t, e, n) {
          return t >= e && n >= t;
        };
      !(function (n) {
        var i = {
          name: "calculator",
          options: {},
          _create: function () {
            this._super("_create");
            var i = this.widget();
            this.options;
            (this.density = 0), (this.percentage = 0);
            var r = this;
            (this.areasets = {
              0: new t({
                _1: {
                  grafts: 12,
                  hairs: 1.3,
                },
                _2: {
                  grafts: 28,
                  hairs: 1.7,
                },
                _3: {
                  grafts: 22,
                  hairs: 2.3,
                },
                _4: {
                  grafts: 18,
                  hairs: 2.3,
                },
                _5: {
                  grafts: 22,
                  hairs: 2.3,
                },
                _6: {
                  grafts: 18,
                  hairs: 2.3,
                },
                _7: {
                  grafts: 17,
                  hairs: 1.3,
                },
              }),
              1: new t({
                _1: {
                  grafts: 12 * 0.8,
                  hairs: 1.04,
                },
                _2: {
                  grafts: 28 * 0.8,
                  hairs: 1.36,
                },
                _3: {
                  grafts: 17.6,
                  hairs: 2.3 * 0.8,
                },
                _4: {
                  grafts: 14.4,
                  hairs: 2.3 * 0.8,
                },
                _5: {
                  grafts: 17.6,
                  hairs: 2.3 * 0.8,
                },
                _6: {
                  grafts: 14.4,
                  hairs: 2.3 * 0.8,
                },
                _7: {
                  grafts: 17 * 0.8,
                  hairs: 1.04,
                },
              }),
              2: new t({
                _1: {
                  grafts: 1,
                  hairs: 2.5,
                },
                _2: {
                  grafts: 1,
                  hairs: 2.5,
                },
                _3: {
                  grafts: 1,
                  hairs: 3.75,
                },
                _4: {
                  grafts: 1,
                  hairs: 3.75,
                },
                _5: {
                  grafts: 1,
                  hairs: 3.75,
                },
                _6: {
                  grafts: 1,
                  hairs: 3.75,
                },
                _7: {
                  grafts: 1,
                  hairs: 2.5,
                },
                _8: {
                  grafts: 1,
                  hairs: 2.5,
                },
              }),
            }),
              (this.$grafts = i.find(".status tr:nth-of-type(1) th dd")),
              (this.$hairs = i.find(".status tr:nth-of-type(2) th dd")),
              (this.$price = i.find(".status tr:nth-of-type(3) th dd")),
              (this.$priceu = i.find(".status tr:nth-of-type(4) th dd")),
              (this.$pricee = i.find(".status tr:nth-of-type(5) th dd")),
              (this.$type = i.find('input[name="type"]')),
              (this.$show = i.find('label[for="results-toggle"]')),
              (this.$img = i.find("fieldset.areas .img")),
              (this.$age = i.find("select[name='age']")),
              (this.$ethnicity = i.find("select[name='ethnicity']")),
              (this.$results = i.find("#results-toggle")),
              (this.$areas = i.find(".areas > div").each(function (t) {
                var e = n(this);
                e.type({
                  calculation: r.areasets[t],
                  i: t,
                });
              })),
              this.$areas.find("input").on({
                change: n.proxy(this, "_change"),
              }),
              (this.currentAreaset = this.areasets[0]);
            var r = this;
            this.$type.on({
              change: function (t) {
                var e = n(t.currentTarget);
                (r.currentAreaset = r.areasets[e.val()]), r._change();
              },
            }),
              i.range({
                input: n.proxy(this, "_input"),
                change: n.proxy(this, "_change"),
              }),
              this.$age.add(this.$ethnicity).on({
                change: n.proxy(this, "_change"),
              }),
              this.$show.on("click", function (t) {
                var n = i.find(".areas input:checked").val(),
                  o = r.$age.val(),
                  a = r.$ethnicity.val(),
                  s = i.find(".results");
                s.find("> div > div").add(s.find("> div > div > div")).hide(),
                  s.find(".results_" + n).show();
                var u = "18-25";
                switch (!0) {
                  case e(o, 18, 25):
                    u = "18-25";
                    break;
                  case e(o, 26, 46):
                    u = "26-46";
                    break;
                  case e(o, 47, 100):
                    u = "47-100";
                }
                s.find(".age_" + u).show(), s.find(".ethnicity_" + a).show();
              });
          },
          _change: function () {
            var t = this.update();
            t > 49
              ? (this.$show.animate({
                  opacity: 1,
                }),
                this.$show.hasClass("checked") &&
                  (this.$show.removeClass("checked"),
                  this.$results.attr("checked", !1),
                  this.$show.parent().find("#gage").remove(),
                  clearInterval(this.interval)))
              : this.$show.animate({
                  opacity: 0,
                });
          },
          _startGage: function () {
            var t = this;
            this.$show
              .parent()
              .css("position", "relative")
              .append(
                '<span id="gage" style="display: block;height: 200px;position: absolute;bottom: -40px;left: 50%;margin-left: -150px;"></span>'
              ),
              (this.gage = new Gage({
                id: "gage",
                value: 100,
                min: 0,
                max: 100,
                label: "",
                hideValue: !0,
                hideMinMax: !0,
                gaugeColor: "#CCCCCC",
                gaugeWidthScale: 0.5,
                showInnerShadow: !1,
                levelColors: ["#46b1d4"],
                startAnimationTime: 5e3,
                startAnimationType: "linear",
              })),
              clearInterval(this.interval),
              (this.interval = setTimeout(function () {
                t.$results.trigger("click");
              }, 5e3));
          },
          _input: function (t, e) {
            (this.density = parseInt(e.value)),
              (this.percentage = 0.01 * e.perc),
              this.update();
          },
          update: function () {
            var t = this.density,
              e = Math.max(0.1, this.percentage);
            this.$areas.type("percentage", e);
            var n = this.currentAreaset.grafts(t),
              i = this.currentAreaset.hairs(t);
            return (
              this.$grafts.text(n),
              this.$hairs.text(i),
              this.$price.text(Math.round(i * 0.55) + " $"),
              this.$priceu.text(Math.round(i * 1.1) + " $"),
              this.$pricee.text(Math.round(i * 1.25) + " $"),
              n
            );
          },
        };
        n.widget("twentyeight." + i.name, n.Widget, i);
      })(jQuery);
    }
  ),
  define("js/lib/formAjax", ["jquery-ui-widget"], function (t) {
    !(function (t) {
      var e = "formAjax";
      t.widget("twentyeight." + e, t.Widget, {
        options: {
          valid: !0,
        },
        _create: function () {
          this._super("_create");
          var e = this.widget();
          this.options;
          e.on({
            submit: t.proxy(this, "_submit"),
          });
        },
        clean: function (t) {
          var e = this.widget();
          null == t && (t = e.add(e.find(".error"))), t.removeClass("error");
        },
        dirty: function (t) {
          t.addClass("error");
        },
        success: function () {
          var t = this.widget();
          t.addClass("success");
        },
        _validate: function () {
          var e = this.widget(),
            n = this.options;
          (n.valid = !0), this.clean();
          var i = this,
            r = e.find("[required]");
          r.each(function (r) {
            var o = t(this);
            switch (o.attr("type")) {
              case "checkbox":
                o.is(":checked") ||
                  (i.dirty(e.add(o.parent())), (n.valid = !1));
                break;
              case "text":
              case "email":
                "" == o.val() && (i.dirty(e.add(o.parent())), (n.valid = !1));
              default:
                o.is("textarea") &&
                  "" == o.val() &&
                  (i.dirty(e.add(o.parent())), (n.valid = !1)),
                  o.is("select") &&
                    "" == o.val() &&
                    (i.dirty(e.add(o.closest("label"))), (n.valid = !1));
            }
          }),
            (r = e.find("[data-required]")),
            r.each(function (r) {
              var o = t(this);
              0 == o.find(":checked").length &&
                (i.dirty(e.add(o)), (n.valid = !1));
            });
          var o = e.find("[type='email']");
          o.each(function (r) {
            var o = t(this),
              a = o.val();
            (-1 == a.indexOf("@") || -1 == a.split("@")[1].indexOf(".")) &&
              (i.dirty(e.add(o.parent())), (n.valid = !1));
          });
        },
        _submit: function (e) {
          var n = this.widget(),
            i = this.options,
            r = this;
          if ((this._trigger("validate"), this._validate(), i.valid)) {
            if (n.data("ajax")) {
              e.preventDefault();
              var o = new FormData(n.get(0));
              t.ajax({
                async: !1,
                cache: !1,
                contentType: !1,
                type: n.attr("method"),
                url: n.attr("action"),
                data: o,
                processData: !1,
                success: function (t) {
                  1 == t.success
                    ? (n.addClass("progress"),
                      setTimeout(function () {
                        r._trigger("success", [t]), r.success();
                      }))
                    : n.find(".g-recaptcha").addClass("error");
                },
              });
            }
          } else e.preventDefault();
        },
      });
    })(jQuery);
  }),
  (function (t) {
    Array.prototype.filter ||
      (Array.prototype.filter = function (t) {
        "use strict";
        if (void 0 === this || null === this) throw new TypeError();
        var e = Object(this),
          n = e.length >>> 0;
        if ("function" != typeof t) throw new TypeError();
        for (var i = [], r = arguments[1], o = 0; n > o; o++)
          if (o in e) {
            var a = e[o];
            t.call(r, a, o, e) && i.push(a);
          }
        return i;
      }),
      t("html").is(".ie8") &&
        $widget.on({
          click: function (e) {
            if (void 0 !== e.originalEvent) {
              var n = t(this),
                i = n.attr("for"),
                r = t("#" + i);
              r.is(":checked")
                ? r.removeAttr("checked").trigger("change")
                : (r.attr("checked", "checked"), r.trigger("click"));
            }
          },
        });
  })(jQuery),
  define("label-extras/ie8", function () {}),
  define("label-extras/index", ["jquery-ui-widget", "./ie8"], function () {
    !(function (t) {
      var e = (t(window), t("html")),
        n =
          (t(document),
          {
            name: "label",
            options: {
              checkedClass: "checked",
              rootPrefix: "with-checked",
            },
            _create: function () {
              this._super("_create");
              var n = this.widget(),
                i = (this.options, t(this), n.attr("for")),
                r = t("#" + i);
              r.data("label-extras") ||
                (r.data("label-extras", !0),
                r.filter(":checkbox,:radio").on({
                  change: function (n) {
                    var r = t(this),
                      o = r.val(),
                      a = r.is(":checked") ? "addClass" : "removeClass",
                      s = r.attr("name");
                    t("input[name='" + s + "'][id]").each(function () {
                      var e = t(this);
                      t("label[for='" + e.attr("id") + "']").removeClass(
                        "checked"
                      );
                    }),
                      t("label[for='" + r.attr("id") + "']")[a]("checked");
                    var u = "";
                    if ((null != s && (u += "with-checked-" + s), "" == u))
                      u = "with-checked-" + i;
                    else {
                      var l = e.get(0),
                        c = l.className.split(" ").filter(function (t) {
                          return 0 !== t.lastIndexOf(u);
                        });
                      (l.className = t.trim(c.join(" "))),
                        null != o && (u += " with-checked-" + s + "-" + o);
                    }
                    e[a](u), e.trigger("change.label");
                  },
                }));
            },
          });
      t.widget("twentyeight." + n.name, t.Widget, n);
    })(jQuery);
  }),
  define("label-extras", ["label-extras/index"], function (t) {
    return t;
  }),
  (function (t, e) {
    "use strict";
    function n(e) {
      (e = t.extend({}, P, e || {})), null === j && (j = t("body"));
      for (var n = t(this), r = 0, o = n.length; o > r; r++) i(n.eq(r), e);
      return n;
    }
    function i(e, n) {
      if (!e.hasClass("selecter-element")) {
        (n = t.extend({}, n, e.data("selecter-options"))),
          (n.multiple = e.prop("multiple")),
          (n.disabled = e.is(":disabled")),
          n.external && (n.links = !0);
        var i = e.find("[selected]").not(":disabled"),
          a = e.find("option").index(i);
        n.multiple || "" === n.label
          ? (n.label = "")
          : (e.prepend(
              '<option value="" class="selecter-placeholder" selected>' +
                n.label +
                "</option>"
            ),
            a > -1 && a++);
        var s = e.find("option, optgroup"),
          l = s.filter("option");
        i.length || (i = l.eq(0));
        var c = a > -1 ? a : 0,
          v = "" !== n.label ? n.label : i.text(),
          y = "div";
        (n.tabIndex = e[0].tabIndex), (e[0].tabIndex = -1);
        var b = "",
          x = "";
        (x += "<" + y + ' class="selecter ' + n.customClass),
          S ? (x += " mobile") : n.cover && (x += " cover"),
          (x += n.multiple ? " multiple" : " closed"),
          n.disabled && (x += " disabled"),
          (x += '" tabindex="' + n.tabIndex + '">'),
          (x += "</" + y + ">"),
          n.multiple ||
            ((b += '<span class="selecter-selected">'),
            (b += t("<span></span>").text(w(v, n.trim)).html()),
            (b += "</span>")),
          (b += '<div class="selecter-options">'),
          (b += "</div>"),
          e.addClass("selecter-element").wrap(x).after(b);
        var C = e.parent(".selecter"),
          k = t.extend(
            {
              $select: e,
              $allOptions: s,
              $options: l,
              $selecter: C,
              $selected: C.find(".selecter-selected"),
              $itemsWrapper: C.find(".selecter-options"),
              index: -1,
              guid: E++,
            },
            n
          );
        r(k),
          k.multiple || m(c, k),
          void 0 !== t.fn.scroller && k.$itemsWrapper.scroller(),
          k.$selecter
            .on("touchstart.selecter", ".selecter-selected", k, o)
            .on("click.selecter", ".selecter-selected", k, u)
            .on("click.selecter", ".selecter-item", k, f)
            .on("close.selecter", k, h)
            .data("selecter", k),
          k.$select.on("change.selecter", k, d),
          S ||
            (k.$selecter.on("focusin.selecter", k, p).on("blur.selecter", k, g),
            k.$select.on("focusin.selecter", k, function (t) {
              t.data.$selecter.trigger("focus");
            }));
      }
    }
    function r(e) {
      for (
        var n = "",
          i = e.links ? "a" : "span",
          r = 0,
          o = 0,
          a = e.$allOptions.length;
        a > o;
        o++
      ) {
        var s = e.$allOptions.eq(o);
        if ("OPTGROUP" === s[0].tagName)
          (n += '<span class="selecter-group'),
            s.is(":disabled") && (n += " disabled"),
            (n += '">' + s.attr("label") + "</span>");
        else {
          var u = s.val();
          s.attr("value") || s.attr("value", u),
            (n += "<" + i + ' class="selecter-item'),
            s.hasClass("selecter-placeholder") && (n += " placeholder"),
            s.is(":selected") && (n += " selected"),
            s.is(":disabled") && (n += " disabled"),
            (n += '" '),
            (n += e.links ? 'href="' + u + '"' : 'data-value="' + u + '"'),
            (n +=
              ">" +
              t("<span></span>").text(w(s.text(), e.trim)).html() +
              "</" +
              i +
              ">"),
            r++;
        }
      }
      e.$itemsWrapper.html(n), (e.$items = e.$selecter.find(".selecter-item"));
    }
    function o(t) {
      t.stopPropagation();
      var e = t.data;
      (e.touchStartEvent = t.originalEvent),
        (e.touchStartX = e.touchStartEvent.touches[0].clientX),
        (e.touchStartY = e.touchStartEvent.touches[0].clientY),
        e.$selecter
          .on("touchmove.selecter", ".selecter-selected", e, a)
          .on("touchend.selecter", ".selecter-selected", e, s);
    }
    function a(t) {
      var e = t.data,
        n = t.originalEvent;
      (Math.abs(n.touches[0].clientX - e.touchStartX) > 10 ||
        Math.abs(n.touches[0].clientY - e.touchStartY) > 10) &&
        e.$selecter.off("touchmove.selecter touchend.selecter");
    }
    function s(t) {
      var e = t.data;
      e.touchStartEvent.preventDefault(),
        e.$selecter.off("touchmove.selecter touchend.selecter"),
        u(t);
    }
    function u(n) {
      n.preventDefault(), n.stopPropagation();
      var i = n.data;
      if (!i.$select.is(":disabled"))
        if (
          (t(".selecter").not(i.$selecter).trigger("close.selecter", [i]),
          i.mobile || !S || T)
        )
          i.$selecter.hasClass("closed")
            ? l(n)
            : i.$selecter.hasClass("open") && h(n);
        else {
          var r = i.$select[0];
          if (e.document.createEvent) {
            var o = e.document.createEvent("MouseEvents");
            o.initMouseEvent(
              "mousedown",
              !1,
              !0,
              e,
              0,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              r.dispatchEvent(o);
          } else r.fireEvent && r.fireEvent("onmousedown");
        }
    }
    function l(t) {
      t.preventDefault(), t.stopPropagation();
      var e = t.data;
      if (!e.$selecter.hasClass("open")) {
        var n = e.$selecter.offset(),
          i = j.outerHeight(),
          r = e.$itemsWrapper.outerHeight(!0);
        e.index >= 0
          ? e.$items.eq(e.index).position()
          : {
              left: 0,
              top: 0,
            };
        n.top + r > i && e.$selecter.addClass("bottom"),
          e.$itemsWrapper.show(),
          e.$selecter.removeClass("closed").addClass("open"),
          j.on("click.selecter-" + e.guid, ":not(.selecter-options)", e, c),
          y(e);
      }
    }
    function c(e) {
      e.preventDefault(),
        e.stopPropagation(),
        0 === t(e.currentTarget).parents(".selecter").length && h(e);
    }
    function h(t) {
      t.preventDefault(), t.stopPropagation();
      var e = t.data;
      e.$selecter.hasClass("open") &&
        (e.$itemsWrapper.hide(),
        e.$selecter.removeClass("open bottom").addClass("closed"),
        j.off(".selecter-" + e.guid));
    }
    function f(e) {
      e.preventDefault(), e.stopPropagation();
      var n = t(this),
        i = e.data;
      if (!i.$select.is(":disabled")) {
        if (i.$itemsWrapper.is(":visible")) {
          var r = i.$items.index(n);
          r !== i.index && (m(r, i), b(i));
        }
        i.multiple || h(e);
      }
    }
    function d(e, n) {
      var i = t(this),
        r = e.data;
      if (!n && !r.multiple) {
        var o = r.$options.index(
          r.$options.filter("[value='" + C(i.val()) + "']")
        );
        m(o, r), b(r);
      }
    }
    function p(e) {
      e.preventDefault(), e.stopPropagation();
      var n = e.data;
      n.$select.is(":disabled") ||
        n.multiple ||
        (n.$selecter.addClass("focus").on("keydown.selecter-" + n.guid, n, v),
        t(".selecter").not(n.$selecter).trigger("close.selecter", [n]));
    }
    function g(e, n, i) {
      e.preventDefault(), e.stopPropagation();
      var r = e.data;
      r.$selecter.removeClass("focus").off("keydown.selecter-" + r.guid),
        t(".selecter").not(r.$selecter).trigger("close.selecter", [r]);
    }
    function v(e) {
      var n = e.data;
      if (13 === e.keyCode)
        n.$selecter.hasClass("open") && (h(e), m(n.index, n)), b(n);
      else if (
        !(9 === e.keyCode || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      ) {
        e.preventDefault(), e.stopPropagation();
        var i = n.$items.length - 1,
          r = n.index < 0 ? 0 : n.index;
        if (t.inArray(e.keyCode, _ ? [38, 40, 37, 39] : [38, 40]) > -1)
          (r += 38 === e.keyCode || (_ && 37 === e.keyCode) ? -1 : 1),
            0 > r && (r = 0),
            r > i && (r = i);
        else {
          var o,
            a,
            s = String.fromCharCode(e.keyCode).toUpperCase();
          for (a = n.index + 1; i >= a; a++)
            if (
              ((o = n.$options.eq(a).text().charAt(0).toUpperCase()), o === s)
            ) {
              r = a;
              break;
            }
          if (0 > r || r === n.index)
            for (a = 0; i >= a; a++)
              if (
                ((o = n.$options.eq(a).text().charAt(0).toUpperCase()), o === s)
              ) {
                r = a;
                break;
              }
        }
        r >= 0 && (m(r, n), y(n));
      }
    }
    function m(t, e) {
      var n = e.$items.eq(t),
        i = n.hasClass("selected"),
        r = n.hasClass("disabled");
      if (!r)
        if (e.multiple)
          i
            ? (e.$options.eq(t).prop("selected", null),
              n.removeClass("selected"))
            : (e.$options.eq(t).prop("selected", !0), n.addClass("selected"));
        else if (t > -1 && t < e.$items.length) {
          var o = n.html();
          n.data("value");
          e.$selected.html(o).removeClass("placeholder"),
            e.$items.filter(".selected").removeClass("selected"),
            (e.$select[0].selectedIndex = t),
            n.addClass("selected"),
            (e.index = t);
        } else "" !== e.label && e.$selected.html(e.label);
    }
    function y(e) {
      var n = e.$items.eq(e.index),
        i =
          e.index >= 0 && !n.hasClass("placeholder")
            ? n.position()
            : {
                left: 0,
                top: 0,
              };
      void 0 !== t.fn.scroller
        ? e.$itemsWrapper
            .scroller(
              "scroll",
              e.$itemsWrapper.find(".scroller-content").scrollTop() + i.top,
              0
            )
            .scroller("reset")
        : e.$itemsWrapper.scrollTop(e.$itemsWrapper.scrollTop() + i.top);
    }
    function b(t) {
      t.links
        ? x(t)
        : (t.callback.call(t.$selecter, t.$select.val(), t.index),
          t.$select.trigger("change", [!0]));
    }
    function x(t) {
      var n = t.$select.val();
      t.external ? e.open(n) : (e.location.href = n);
    }
    function w(t, e) {
      return 0 === e ? t : t.length > e ? t.substring(0, e) + "..." : t;
    }
    function C(t) {
      return "string" == typeof t
        ? t.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
        : t;
    }
    var E = 0,
      k = e.navigator.userAgent || e.navigator.vendor || e.opera,
      _ = /Firefox/i.test(k),
      S = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(k),
      T = _ && S,
      j = null,
      P = {
        callback: t.noop,
        cover: !1,
        customClass: "",
        label: "",
        external: !1,
        links: !1,
        mobile: !1,
        trim: 0,
      },
      $ = {
        defaults: function (e) {
          return (
            (P = t.extend(P, e || {})), "object" == typeof this ? t(this) : !0
          );
        },
        disable: function (e) {
          return t(this).each(function (n, i) {
            var r = t(i).parent(".selecter").data("selecter");
            if (r)
              if ("undefined" != typeof e) {
                var o = r.$items.index(
                  r.$items.filter("[data-value=" + e + "]")
                );
                r.$items.eq(o).addClass("disabled"),
                  r.$options.eq(o).prop("disabled", !0);
              } else
                r.$selecter.hasClass("open") &&
                  r.$selecter
                    .find(".selecter-selected")
                    .trigger("click.selecter"),
                  r.$selecter.addClass("disabled"),
                  r.$select.prop("disabled", !0);
          });
        },
        destroy: function () {
          return t(this).each(function (e, n) {
            var i = t(n).parent(".selecter").data("selecter");
            i &&
              (i.$selecter.hasClass("open") &&
                i.$selecter
                  .find(".selecter-selected")
                  .trigger("click.selecter"),
              void 0 !== t.fn.scroller &&
                i.$selecter.find(".selecter-options").scroller("destroy"),
              (i.$select[0].tabIndex = i.tabIndex),
              i.$select.find(".selecter-placeholder").remove(),
              i.$selected.remove(),
              i.$itemsWrapper.remove(),
              i.$selecter.off(".selecter"),
              i.$select
                .off(".selecter")
                .removeClass("selecter-element")
                .show()
                .unwrap());
          });
        },
        enable: function (e) {
          return t(this).each(function (n, i) {
            var r = t(i).parent(".selecter").data("selecter");
            if (r)
              if ("undefined" != typeof e) {
                var o = r.$items.index(
                  r.$items.filter("[data-value=" + e + "]")
                );
                r.$items.eq(o).removeClass("disabled"),
                  r.$options.eq(o).prop("disabled", !1);
              } else
                r.$selecter.removeClass("disabled"),
                  r.$select.prop("disabled", !1);
          });
        },
        refresh: function () {
          return $.update.apply(t(this));
        },
        update: function () {
          return t(this).each(function (e, n) {
            var i = t(n).parent(".selecter").data("selecter");
            if (i) {
              var o = i.index;
              (i.$allOptions = i.$select.find("option, optgroup")),
                (i.$options = i.$allOptions.filter("option")),
                (i.index = -1),
                (o = i.$options.index(i.$options.filter(":selected"))),
                r(i),
                i.multiple || m(o, i);
            }
          });
        },
      };
    (t.fn.selecter = function (t) {
      return $[t]
        ? $[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? this
        : n.apply(this, arguments);
    }),
      (t.selecter = function (t) {
        "defaults" === t &&
          $.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
      });
  })(jQuery, window),
  define("Selecter", ["Selecter/jquery.fs.selecter"], function (t) {
    return t;
  }),
  define("Selecter/jquery.fs.selecter", function () {}),
  require([
    "jquery",
    "js/bridge",
    "js/lib/vimeo",
    "js/lib/hero",
    "js/lib/calculator/main",
    "js/lib/formAjax",
    "label-extras",
    "html-range",
    "Selecter",
  ], function () {
    !(function (t) {
      t(window), t(document);
      t(".hero").hero(),
        t("label").label(),
        t("html:not(.magazine-article) p > iframe").each(function () {
          var e = t(this),
            n = e.attr("width"),
            i = e.attr("height"),
            r = (i / n) * 100;
          e.parent()
            .addClass("iframe")
            .css({
              paddingBottom: r + "%",
            });
        }),
        (jQuery.fn.comments = function (e) {
          var e = e || !1,
            n = t([]);
          return (
            this.each(function (i, r) {
              for (var o = r.firstChild, a = t(this).attr("id"); o; )
                8 === o.nodeType
                  ? (n = n.add(
                      "<div rel='" + a + "'>" + o.nodeValue + "</div>"
                    ))
                  : e && 1 === o.nodeType && (n = n.add(t(o).comments(!0))),
                  (o = o.nextSibling);
            }),
            n
          );
        }),
        t("form[data-ajax]")
          .formAjax()
          .each(function () {
            var e = t(this),
              n = e.prev();
            if (n.is("label")) {
              var i = n.attr("for");
              t("#" + i).on({
                change: function (t) {
                  e.removeClass("progress success");
                },
              });
            }
          })
          .on({
            formajaxsuccess: function () {
              var e = t(this);
              e.comments(!0).appendTo(e);
            },
          }),
        t(".hshc-graft-calc-main form").calculator(),
        t("select").each(function () {
          var e = t(this);
          e.selecter({
            label: e.attr("placeholder"),
            cover: !0,
          });
        });
    })(jQuery);
  }),
  define("js/lib/main", function () {});
