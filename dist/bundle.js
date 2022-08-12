(() => {
  "use strict";
  var n = {
      424: (n, r, e) => {
        e.d(r, { Z: () => u });
        var t = e(81),
          o = e.n(t),
          a = e(645),
          i = e.n(a),
          d = e(667),
          c = e.n(d),
          l = new URL(e(744), e.b),
          p = i()(o()),
          s = c()(l);
        p.push([
          n.id,
          "body {\r\n    background-image: url(" +
            s +
            ");\r\n    background-position: center center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    /* background-size: 100vw 100vh; */\r\n    font-family: 'JetBrains Mono', monospace;\r\n    ;\r\n\r\n\r\n    margin: 0px 0px;\r\n}\r\n\r\ndiv#title {\r\n    color: white;\r\n    /* border: 2px solid white; */\r\n    display: inline-block;\r\n    padding: 4em 5em;\r\n    width: 50%;\r\n}\r\n\r\ndiv#title h1#heading {\r\n    font-size: 8em;\r\n}\r\n\r\nbutton {\r\n    border: 1px solid white;\r\n    background: transparent;\r\n    color: white;\r\n    font-size: 2em;\r\n    margin: 1em 1em;\r\n    padding: 0.5em 0.7em;\r\n    border-radius: 10px;\r\n    backdrop-filter: blur(0px);\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n    backdrop-filter: blur(20px);\r\n}\r\n\r\n\r\n.blur-filter {\r\n    backdrop-filter: blur(8px);\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n    display: flex;\r\n    /* align-items: center; */\r\n    /* flex-wrap: wrap; */\r\n    justify-content: center;\r\n    height: auto;\r\n    /* border-top: 2px solid white; */\r\n    margin-top: 3em;\r\n}\r\n\r\n/* footer:hover {\r\n    backdrop-filter: blur(10px);\r\n} */\r\n\r\nfooter div {\r\n    flex: 0 1 50%;\r\n    height: auto;\r\n    /* border: 2px solid white; */\r\n    padding: 1em 1em;\r\n\r\n}\r\n\r\nfooter div a img {\r\n    margin: 1em 1em;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n    div#title h1#heading {\r\n        font-size: 4em;\r\n    }\r\n\r\n    button {\r\n\r\n        color: white;\r\n        font-size: 1.5em;\r\n        margin: 1em 1em;\r\n        padding: 0.5em 0.7em;\r\n    }\r\n\r\n    footer div {\r\n        flex: 0 1 100%;\r\n\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n    div#title h1#heading {\r\n        font-size: 3.5em;\r\n    }\r\n    div#title {\r\n        text-align: center;\r\n        padding: 4em 3em;\r\n        /* width: 90%; */\r\n    }\r\n\r\n    button {\r\n        font-size: 1.2em;\r\n        margin: 1em 1em;\r\n        padding: 0.5em 0.7em;\r\n    }\r\n\r\n    footer div {\r\n        flex: 0 1 100%;\r\n        padding: 0.5em 0.5em;\r\n        font-size: 0.7em;\r\n    }\r\n    footer div a img {\r\n        margin: 1em 1em;\r\n        width: 30px;\r\n    }\r\n    div#content div.card {\r\n        backdrop-filter: blur(10px);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n    button {\r\n        margin: 1em 0.5em;\r\n    }\r\n    div#content div.card {\r\n        backdrop-filter: blur(10px);\r\n    }\r\n}",
          "",
        ]);
        const u = p;
      },
      426: (n, r, e) => {
        e.d(r, { Z: () => d });
        var t = e(81),
          o = e.n(t),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          n.id,
          "body {\r\n    color: white;\r\n\r\n    background-position: center center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    font-family: 'JetBrains Mono', monospace;\r\n\r\n}\r\n\r\n\r\n\r\ndiv#content {\r\n    /* border: 2px solid black; */\r\n    width: 100%;\r\n    display: flex;\r\n    margin: 0px 0px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    height: auto;\r\n\r\n}\r\n\r\ndiv#content div.card {\r\n    /* display: inline-block; */\r\n\r\n    height: auto;\r\n    /* border: 2px solid black; */\r\n    margin: 1.25em 1.25em;\r\n    text-overflow: ellipsis;\r\n    flex: 0 1 24%;\r\n    text-align: center;\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    backdrop-filter: blur(0px);\r\n    border-radius: 10px;\r\n    /* font-size: 2em; */\r\n}\r\n\r\ndiv#content div.card:hover {\r\n    backdrop-filter: blur(10px);\r\n\r\n}\r\n\r\n.card-img {\r\n    width: 100%;\r\n    min-height: 25%;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.blur-filter {\r\n    backdrop-filter: blur(8px);\r\n}\r\n\r\ndiv#nav {\r\n    text-align: center;\r\n    margin: 0px 0px;\r\n}\r\n\r\ndiv#content div.card h1:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\ndiv#content div.card button {\r\n    padding: 0.3em 0.7em;\r\n    font-size: 1.6em;\r\n}\r\n\r\ndiv#content div.card button:hover {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\ndiv#content div.about {\r\n    text-align: center;\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    backdrop-filter: blur(10px);\r\n    width: 50%;\r\n    padding: 1em 1em;\r\n    border-radius: 10px;\r\n}\r\n\r\ndiv#content div.about h1 {\r\n    font-size: 3em;\r\n    text-decoration: underline;\r\n}\r\n\r\ndiv#content div.about p {\r\n    font-size: 1.3em;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1300px) {\r\n    div#content div.card {\r\n        flex: 0 1 40%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n    div#content div.about{\r\n        width: 80%;\r\n    }\r\n    div#content div.card {\r\n        flex: 0 1 80%;\r\n    }\r\n}",
          "",
        ]);
        const d = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  t && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, t, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (t)
                for (var d = 0; d < this.length; d++) {
                  var c = this[d][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var p = [].concat(n[l]);
                (t && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  e &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  r.push(p));
              }
            }),
            r
          );
        };
      },
      667: (n) => {
        n.exports = function (n, r) {
          return (
            r || (r = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                r.hash && (n += r.hash),
                /["'() \t\n]|(%20)/.test(n) || r.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var a = {}, i = [], d = 0; d < n.length; d++) {
            var c = n[d],
              l = t.base ? c[0] + t.base : c[0],
              p = a[l] || 0,
              s = "".concat(l, " ").concat(p);
            a[l] = p + 1;
            var u = e(s),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) r[u].references++, r[u].updater(m);
            else {
              var f = o(m, t);
              (t.byIndex = d),
                r.splice(d, 0, { identifier: s, updater: f, references: 1 });
            }
            i.push(s);
          }
          return i;
        }
        function o(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var d = e(a[i]);
              r[d].references--;
            }
            for (var c = t(n, o), l = 0; l < a.length; l++) {
              var p = e(a[l]);
              0 === r[p].references && (r[p].updater(), r.splice(p, 1));
            }
            a = c;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var t = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(t, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
      744: (n, r, e) => {
        n.exports = e.p + "6fc03b9b3ff71d83ef48.png";
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var a = (r[t] = { id: t, exports: {} });
    return n[t](a, a.exports, e), a.exports;
  }
  (e.m = n),
    (e.n = (n) => {
      var r = n && n.__esModule ? () => n.default : () => n;
      return e.d(r, { a: r }), r;
    }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var r = e.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var t = r.getElementsByTagName("script");
        t.length && (n = t[t.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0),
    (() => {
      const n = e.p + "aab9f93e936395df6f68.png",
        r = e.p + "c60b4e1a4acb76a84294.png",
        t = e.p + "c738b0223ea6696dcc4e.png",
        o = e.p + "22d47f8fe224a8ba23a5.png",
        a = e.p + "9a1b537e9677f7aa274c.png",
        i = e.p + "7d9c64955debaad67873.png",
        d = e.p + "7960cdf98b349d83ae3f.png",
        c = e.p + "3af6ae0a397f802b4165.png",
        l = e.p + "f3907dc8b0575e7eb7e8.png";
      var p = e(379),
        s = e.n(p),
        u = e(795),
        m = e.n(u),
        f = e(569),
        h = e.n(f),
        b = e(565),
        g = e.n(b),
        v = e(216),
        x = e.n(v),
        y = e(589),
        w = e.n(y),
        k = e(426),
        T = {};
      (T.styleTagTransform = w()),
        (T.setAttributes = g()),
        (T.insert = h().bind(null, "head")),
        (T.domAPI = m()),
        (T.insertStyleElement = x()),
        s()(k.Z, T),
        k.Z && k.Z.locals && k.Z.locals;
      const C = (n, r, e) => {
        const t = document.createElement("div");
        t.className = "card";
        const o = new Image();
        (o.className = "card-img"), (o.src = n), t.appendChild(o);
        const a = document.createElement("div");
        a.className = "detail";
        const i = document.createElement("h1");
        (i.innerHTML = r), a.appendChild(i);
        const d = document.createElement("h3");
        (d.innerHTML = `At Rs <u>${e}</u> per plate`), a.appendChild(d);
        const c = document.createElement("button");
        (c.innerHTML = "More"), a.appendChild(c);
        const l = document.createElement("button");
        return (l.innerHTML = "Order"), a.appendChild(l), t.appendChild(a), t;
      };
      var E = e(424),
        M = {};
      (M.styleTagTransform = w()),
        (M.setAttributes = g()),
        (M.insert = h().bind(null, "head")),
        (M.domAPI = m()),
        (M.insertStyleElement = x()),
        s()(E.Z, M),
        E.Z && E.Z.locals && E.Z.locals;
      const I = document.getElementById("content"),
        B = document.getElementById("title");
      document.getElementById("nav"),
        (document.getElementById("home").onclick = () => {
          window.location.reload();
        }),
        (document.getElementById("menu").onclick = () => {
          (I.innerHTML = ""),
            (B.style.display = "none"),
            (function () {
              const e = document.getElementById("content");
              (p = C(t, "Pooran Poli", 100)), e.appendChild(p);
              var p = C(r, "Veg Thali", 150);
              e.appendChild(p),
                (p = C(o, "Idli", 60)),
                e.appendChild(p),
                (p = C(a, "Masala Dosa", 60)),
                e.appendChild(p),
                (p = C(i, "Panneer Tikka", 80)),
                e.appendChild(p),
                (p = C(d, "Chole bhature", 120)),
                e.appendChild(p),
                (p = C(c, "Rajasthani Thali", 200)),
                e.appendChild(p);
              var s = C(n, "Biryani", 110);
              e.appendChild(s),
                (document.body.style.backgroundImage = `url(${l})`);
            })();
        }),
        (document.getElementById("about").onclick = () => {
          (I.innerHTML = ""),
            (B.style.display = "none"),
            (function () {
              const n = document.getElementById("content"),
                r = document.createElement("div");
              r.className = "about";
              const e = document.createElement("h1");
              (e.innerHTML = "Story of Hotel Annapurna"), r.appendChild(e);
              const t = document.createElement("p");
              (t.innerHTML =
                "The main reason Behind starting this Hotel was to give our customers an experience of <b><u>Traditional Bhartiya food</u></b>. We are grateful that we are born in this beautiful and great country, with so many rich tradition and most importantly food. <br>Bhartiyas are blessed with sooo many variety of food, which are delicious and healthy."),
                r.appendChild(t),
                n.appendChild(r),
                (document.body.style.backgroundImage = `url(${l})`);
            })();
        });
    })();
})();
