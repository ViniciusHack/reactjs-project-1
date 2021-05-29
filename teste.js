(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
      "+qE3": function (t, e, a) {
          "use strict";
          var n,
              i = "object" === typeof Reflect ? Reflect : null,
              o =
                  i && "function" === typeof i.apply
                      ? i.apply
                      : function (t, e, a) {
                            return Function.prototype.apply.call(t, e, a);
                        };
          n =
              i && "function" === typeof i.ownKeys
                  ? i.ownKeys
                  : Object.getOwnPropertySymbols
                  ? function (t) {
                        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                    }
                  : function (t) {
                        return Object.getOwnPropertyNames(t);
                    };
          var s =
              Number.isNaN ||
              function (t) {
                  return t !== t;
              };
          function r() {
              r.init.call(this);
          }
          (t.exports = r), (r.EventEmitter = r), (r.prototype._events = void 0), (r.prototype._eventsCount = 0), (r.prototype._maxListeners = void 0);
          var c = 10;
          function l(t) {
              if ("function" !== typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
          }
          function u(t) {
              return void 0 === t._maxListeners ? r.defaultMaxListeners : t._maxListeners;
          }
          function h(t, e, a, n) {
              var i, o, s, r;
              if (
                  (l(a),
                  void 0 === (o = t._events) ? ((o = t._events = Object.create(null)), (t._eventsCount = 0)) : (void 0 !== o.newListener && (t.emit("newListener", e, a.listener ? a.listener : a), (o = t._events)), (s = o[e])),
                  void 0 === s)
              )
                  (s = o[e] = a), ++t._eventsCount;
              else if (("function" === typeof s ? (s = o[e] = n ? [a, s] : [s, a]) : n ? s.unshift(a) : s.push(a), (i = u(t)) > 0 && s.length > i && !s.warned)) {
                  s.warned = !0;
                  var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  (c.name = "MaxListenersExceededWarning"), (c.emitter = t), (c.type = e), (c.count = s.length), (r = c), console && console.warn && console.warn(r);
              }
              return t;
          }
          function f() {
              if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function d(t, e, a) {
              var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: a },
                  i = f.bind(n);
              return (i.listener = a), (n.wrapFn = i), i;
          }
          function _(t, e, a) {
              var n = t._events;
              if (void 0 === n) return [];
              var i = n[e];
              return void 0 === i
                  ? []
                  : "function" === typeof i
                  ? a
                      ? [i.listener || i]
                      : [i]
                  : a
                  ? (function (t) {
                        for (var e = new Array(t.length), a = 0; a < e.length; ++a) e[a] = t[a].listener || t[a];
                        return e;
                    })(i)
                  : v(i, i.length);
          }
          function p(t) {
              var e = this._events;
              if (void 0 !== e) {
                  var a = e[t];
                  if ("function" === typeof a) return 1;
                  if (void 0 !== a) return a.length;
              }
              return 0;
          }
          function v(t, e) {
              for (var a = new Array(e), n = 0; n < e; ++n) a[n] = t[n];
              return a;
          }
          Object.defineProperty(r, "defaultMaxListeners", {
              enumerable: !0,
              get: function () {
                  return c;
              },
              set: function (t) {
                  if ("number" !== typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                  c = t;
              },
          }),
              (r.init = function () {
                  (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
              }),
              (r.prototype.setMaxListeners = function (t) {
                  if ("number" !== typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                  return (this._maxListeners = t), this;
              }),
              (r.prototype.getMaxListeners = function () {
                  return u(this);
              }),
              (r.prototype.emit = function (t) {
                  for (var e = [], a = 1; a < arguments.length; a++) e.push(arguments[a]);
                  var n = "error" === t,
                      i = this._events;
                  if (void 0 !== i) n = n && void 0 === i.error;
                  else if (!n) return !1;
                  if (n) {
                      var s;
                      if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
                      var r = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                      throw ((r.context = s), r);
                  }
                  var c = i[t];
                  if (void 0 === c) return !1;
                  if ("function" === typeof c) o(c, this, e);
                  else {
                      var l = c.length,
                          u = v(c, l);
                      for (a = 0; a < l; ++a) o(u[a], this, e);
                  }
                  return !0;
              }),
              (r.prototype.addListener = function (t, e) {
                  return h(this, t, e, !1);
              }),
              (r.prototype.on = r.prototype.addListener),
              (r.prototype.prependListener = function (t, e) {
                  return h(this, t, e, !0);
              }),
              (r.prototype.once = function (t, e) {
                  return l(e), this.on(t, d(this, t, e)), this;
              }),
              (r.prototype.prependOnceListener = function (t, e) {
                  return l(e), this.prependListener(t, d(this, t, e)), this;
              }),
              (r.prototype.removeListener = function (t, e) {
                  var a, n, i, o, s;
                  if ((l(e), void 0 === (n = this._events))) return this;
                  if (void 0 === (a = n[t])) return this;
                  if (a === e || a.listener === e) 0 === --this._eventsCount ? (this._events = Object.create(null)) : (delete n[t], n.removeListener && this.emit("removeListener", t, a.listener || e));
                  else if ("function" !== typeof a) {
                      for (i = -1, o = a.length - 1; o >= 0; o--)
                          if (a[o] === e || a[o].listener === e) {
                              (s = a[o].listener), (i = o);
                              break;
                          }
                      if (i < 0) return this;
                      0 === i
                          ? a.shift()
                          : (function (t, e) {
                                for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                                t.pop();
                            })(a, i),
                          1 === a.length && (n[t] = a[0]),
                          void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
                  }
                  return this;
              }),
              (r.prototype.off = r.prototype.removeListener),
              (r.prototype.removeAllListeners = function (t) {
                  var e, a, n;
                  if (void 0 === (a = this._events)) return this;
                  if (void 0 === a.removeListener)
                      return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== a[t] && (0 === --this._eventsCount ? (this._events = Object.create(null)) : delete a[t]), this;
                  if (0 === arguments.length) {
                      var i,
                          o = Object.keys(a);
                      for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                      return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                  }
                  if ("function" === typeof (e = a[t])) this.removeListener(t, e);
                  else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
                  return this;
              }),
              (r.prototype.listeners = function (t) {
                  return _(this, t, !0);
              }),
              (r.prototype.rawListeners = function (t) {
                  return _(this, t, !1);
              }),
              (r.listenerCount = function (t, e) {
                  return "function" === typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e);
              }),
              (r.prototype.listenerCount = p),
              (r.prototype.eventNames = function () {
                  return this._eventsCount > 0 ? n(this._events) : [];
              });
      },
      "1B+e": function (t, e, a) {
          "use strict";
          a.r(e);
          var n = a("s4An");
          function i(t, e, a) {
              return (i = (function () {
                  if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" === typeof Proxy) return !0;
                  try {
                      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                  } catch (t) {
                      return !1;
                  }
              })()
                  ? Reflect.construct
                  : function (t, e, a) {
                        var i = [null];
                        i.push.apply(i, e);
                        var o = new (Function.bind.apply(t, i))();
                        return a && Object(n.a)(o, a.prototype), o;
                    }).apply(null, arguments);
          }
          var o = a("KQm4"),
              s = a("1OyB"),
              r = a("vuIU"),
              c = a("JX7q"),
              l = a("md7G"),
              u = a("foSv"),
              h = a("Ji7U"),
              f = a("rePB"),
              d = a("q1tI"),
              _ = a.n(d),
              p = a("8Kt/"),
              v = a.n(p),
              m = a("nOHt"),
              y = a.n(m),
              g = a("pvp9");
          function b(t, e, a) {
              return (b =
                  "undefined" !== typeof Reflect && Reflect.get
                      ? Reflect.get
                      : function (t, e, a) {
                            var n = (function (t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Object(u.a)(t)); );
                                return t;
                            })(t, e);
                            if (n) {
                                var i = Object.getOwnPropertyDescriptor(n, e);
                                return i.get ? i.get.call(a) : i.value;
                            }
                        })(t, e, a || t);
          }
          var O = a("+qE3"),
              k = a.n(O);
          function w(t) {
              if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                  if (
                      Array.isArray(t) ||
                      (t = (function (t, e) {
                          if (!t) return;
                          if ("string" === typeof t) return j(t, e);
                          var a = Object.prototype.toString.call(t).slice(8, -1);
                          "Object" === a && t.constructor && (a = t.constructor.name);
                          if ("Map" === a || "Set" === a) return Array.from(a);
                          if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return j(t, e);
                      })(t))
                  ) {
                      var e = 0,
                          a = function () {};
                      return {
                          s: a,
                          n: function () {
                              return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
                          },
                          e: function (t) {
                              throw t;
                          },
                          f: a,
                      };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var n,
                  i,
                  o = !0,
                  s = !1;
              return {
                  s: function () {
                      n = t[Symbol.iterator]();
                  },
                  n: function () {
                      var t = n.next();
                      return (o = t.done), t;
                  },
                  e: function (t) {
                      (s = !0), (i = t);
                  },
                  f: function () {
                      try {
                          o || null == n.return || n.return();
                      } finally {
                          if (s) throw i;
                      }
                  },
              };
          }
          function j(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
              return n;
          }
          function R() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var E = 44,
              N = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (R()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t, e, i, r, l, u, h, d) {
                      var _;
                      return (
                          Object(s.a)(this, n),
                          (_ = a.call(this)),
                          Object(f.a)(Object(c.a)(_), "reportWord", function (t) {
                              _._socket.emit(E, _._codigo, t);
                          }),
                          (_._socket = t),
                          (_._id = e),
                          (_._codigo = i),
                          (_._salaId = r),
                          (_._dadosSala = l),
                          (_._usuarios = Object(o.a)(u)),
                          (_._dono = h),
                          (_._visitante = d),
                          _
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "init",
                              value: function (t) {
                                  var e = this;
                                  (this._player = t),
                                      (this._desenho = t.desenho),
                                      (this._ativo = Date.now()),
                                      (this._proprio = null),
                                      (this._vez = !1),
                                      (this._palavra = t.palavra),
                                      (this._dicasNum = 0),
                                      (this._palavrasSorteio = [
                                          { palavra: "", dicas: 0 },
                                          { palavra: "", dicas: 0 },
                                      ]),
                                      (this._inicioVez = !1),
                                      (this._desenhistaVez = null),
                                      (this._acertaram = !1),
                                      (this._listaUsuarios = []),
                                      (this._dadosDesenho = ""),
                                      (this._seqDesenho = ""),
                                      (this._floodMsg = ["", ""]),
                                      (this._floodResp = ["", ""]),
                                      (this._numConversaPend = 0),
                                      (this._jogadoresOrdem = 0),
                                      (this._inicioJogo = !1),
                                      (this._denunciaLista = []),
                                      (this._historico = !0),
                                      (this._tempoInicio = 0),
                                      (this._tempoDesconto = 0),
                                      (this._tempoVotekick = 0),
                                      (this._estado = n.WAITING),
                                      this._desenho.on("codigo", function (t) {
                                          e._vez && e._socket.emit(10, e._codigo, t);
                                      }),
                                      (this._timerAtivo = setInterval(function () {
                                          Date.now() - e._ativo > 15e4 && (b(Object(u.a)(n.prototype), "emit", e).call(e, "avisoInativo"), (e._ativo = Date.now()));
                                      }, 1e3));
                                  var a,
                                      i = w(this._usuarios);
                                  try {
                                      for (i.s(); !(a = i.n()).done; ) {
                                          var o = a.value;
                                          o.pontos -= o.pontosRodada;
                                      }
                                  } catch (s) {
                                      i.e(s);
                                  } finally {
                                      i.f();
                                  }
                                  this._ordenarUsuarios(), b(Object(u.a)(n.prototype), "emit", this).call(this, "iniciado", this._usuarios), this._news();
                              },
                          },
                          {
                              key: "active",
                              value: function () {
                                  (this._ativo = Date.now()), this._socket.emit(42, this._codigo);
                              },
                          },
                          {
                              key: "start",
                              value: function () {
                                  (this._ativo = Date.now()), this._socket.emit(41, this._codigo);
                              },
                          },
                          {
                              key: "message",
                              value: function (t) {
                                  return (t != this._floodMsg[0] || t != this._floodMsg[1]) && ((this._ativo = Date.now()), this._floodMsg.shift(), this._floodMsg.push(t), this._socket.emit(11, this._codigo, t), !0);
                              },
                          },
                          {
                              key: "answer",
                              value: function (t) {
                                  return (t != this._floodResp[0] || t != this._floodResp[1]) && ((this._ativo = Date.now()), this._floodResp.shift(), this._floodResp.push(t), this._socket.emit(13, this._codigo, t), !0);
                              },
                          },
                          {
                              key: "undo",
                              value: function () {
                                  return !(!this._vez || !this._desenho.desfazer()) && ((this._ativo = Date.now()), this._socket.emit(36, this._codigo), b(Object(u.a)(n.prototype), "emit", this).call(this, "undo"), !0);
                              },
                          },
                          {
                              key: "redo",
                              value: function () {
                                  return !(!this._vez || !this._desenho.refazer()) && ((this._ativo = Date.now()), this._socket.emit(37, this._codigo), b(Object(u.a)(n.prototype), "emit", this).call(this, "redo"), !0);
                              },
                          },
                          {
                              key: "report",
                              value: function () {
                                  return !this._vez && ((this._ativo = Date.now()), this._socket.emit(35, this._codigo), !0);
                              },
                          },
                          {
                              key: "cancel",
                              value: function () {
                                  this._opcoes.admin && this._socket.emit(38, this._codigo);
                              },
                          },
                          {
                              key: "draw",
                              value: function (t) {
                                  return (
                                      !!this._vez &&
                                      ((this._ativo = Date.now()),
                                      (this._palavra = this._palavrasSorteio[t].palavra),
                                      (this._dicasNum = this._palavrasSorteio[t].dicas),
                                      this._desenho.liberar(!0),
                                      this._socket.emit(34, this._codigo, t),
                                      !0)
                                  );
                              },
                          },
                          {
                              key: "hint",
                              value: function () {
                                  return !(!this._vez || this._acertaram) && ((this._ativo = Date.now()), this._socket.emit(30, this._codigo), !0);
                              },
                          },
                          {
                              key: "skip",
                              value: function () {
                                  return !(!this._vez || this._acertaram) && ((this._ativo = Date.now()), this._socket.emit(25, this._codigo), !0);
                              },
                          },
                          {
                              key: "kick",
                              value: function (t) {
                                  return !(!this._dono && !this._opcoes.admin) && ((this._ativo = Date.now()), this._socket.emit(39, this._codigo, t), !0);
                              },
                          },
                          {
                              key: "votekick",
                              value: function (t, e) {
                                  if (e && Date.now() - this._tempoVotekick < 6e4) return !1;
                                  var a = this._getUser(t);
                                  return a && ((a.votekick = e), this._socket.emit(45, this._codigo, [t, e]), b(Object(u.a)(n.prototype), "emit", this).call(this, "votar", a, e), (this._tempoVotekick = Date.now())), !0;
                              },
                          },
                          {
                              key: "ignore",
                              value: function (t, e) {
                                  var a = this._getUser(t);
                                  a && ((a.ignorado = e), b(Object(u.a)(n.prototype), "emit", this).call(this, "ignorar", a, e));
                              },
                          },
                          {
                              key: "exit",
                              value: function () {
                                  this._socket.emit(24, this._codigo);
                              },
                          },
                          {
                              key: "unlock",
                              value: function () {
                                  this._socket.emit(46, this._codigo);
                              },
                          },
                          {
                              key: "_confPadrao",
                              value: function () {
                                  this._desenho.mudaOpcao(0), this._desenho.mudaCor("x000000"), this._desenho.mudaBorda(4), this._desenho.mudaAlpha(1);
                              },
                          },
                          {
                              key: "_iniciarDesenho",
                              value: function () {
                                  this._inicioVez || ((this._inicioVez = !0), b(Object(u.a)(n.prototype), "emit", this).call(this, "inicioVez", this._palavra, this._dicasNum));
                              },
                          },
                          {
                              key: "_getUser",
                              value: function (t) {
                                  return this._usuarios.find(function (e) {
                                      return e.id == t;
                                  });
                              },
                          },
                          {
                              key: "_ordenarUsuarios",
                              value: function () {
                                  this._usuarios.sort(function (t, e) {
                                      return t.pontos != e.pontos ? e.pontos - t.pontos : t.entrada - e.entrada;
                                  });
                              },
                          },
                          {
                              key: "_removerProximos",
                              value: function () {
                                  var t,
                                      e = w(this._usuarios);
                                  try {
                                      for (e.s(); !(t = e.n()).done; ) {
                                          delete t.value.proximo;
                                      }
                                  } catch (a) {
                                      e.e(a);
                                  } finally {
                                      e.f();
                                  }
                              },
                          },
                          {
                              key: "_calcularProximos",
                              value: function () {
                                  this._removerProximos();
                                  var t = this._usuarios.slice();
                                  t.sort(function (t, e) {
                                      return t.turno - e.turno;
                                  }),
                                      (t = t.slice(0, 3));
                                  for (var e = 0; e < t.length; e++) t[e].proximo = e;
                                  return t;
                              },
                          },
                          {
                              key: "_news",
                              value: function () {
                                  var t = this;
                                  this._socket.on(43, function (e) {
                                      (t._tempoInicio = Date.now() - e), (t._historico = !1), (t._proprio = t._getUser(t._id)), b(Object(u.a)(n.prototype), "emit", t).call(t, "fimHistorico");
                                  }),
                                      this._socket.on(10, function (e) {
                                          t._player.registrar(e);
                                      }),
                                      this._socket.on(36, function () {
                                          t._player.registrar([31, 0]);
                                      }),
                                      this._socket.on(37, function () {
                                          t._player.registrar([31, 1]);
                                      }),
                                      this._socket.on(11, function (e, a) {
                                          var i = t._getUser(e);
                                          i.ignorado || b(Object(u.a)(n.prototype), "emit", t).call(t, "chat", a, i);
                                      }),
                                      this._socket.on(13, function (e, a) {
                                          var i = t._getUser(e);
                                          i.ignorado || b(Object(u.a)(n.prototype), "emit", t).call(t, "resposta", a, i);
                                      }),
                                      this._socket.on(15, function (e) {
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "perto", e);
                                      }),
                                      this._socket.on(16, function (e, a, i, o) {
                                          (t._estado = n.DRAWING),
                                              (t._tempoInicio = Date.now()),
                                              t._removerProximos(),
                                              (t._vez = !0),
                                              t._desenho.limparTela(!0, !0),
                                              t._confPadrao(),
                                              (t._inicioVez = !1),
                                              (t._desenhistaVez = t._proprio),
                                              (t._dadosDesenho = ""),
                                              (t._palavrasSorteio = [
                                                  { palavra: e, dicas: a },
                                                  { palavra: i, dicas: o },
                                              ]),
                                              (t._dicas = 0),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "vez", e, a, i, o);
                                      }),
                                      this._socket.on(17, function (e) {
                                          (t._estado = n.DRAWING),
                                              (t._tempoInicio = Date.now()),
                                              t._removerProximos(),
                                              t._player.iniciar(),
                                              t._confPadrao(),
                                              t._desenho.salvarEstado(!0),
                                              (t._inicioVez = !1),
                                              (t._desenhistaVez = t._getUser(e)),
                                              (t._dadosDesenho = ""),
                                              (t._palavra = ""),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "vezOutro", t._desenhistaVez);
                                      }),
                                      this._socket.on(19, function (e, a) {
                                          if (((t._tempoInicio = Date.now()), (t._tempoDesconto = 0), t._desenhistaVez && (t._desenhistaVez.turno = e), a)) t._estado = n.END;
                                          else {
                                              t._estado = n.INTERVAL;
                                              var i,
                                                  o = w(t._usuarios);
                                              try {
                                                  for (o.s(); !(i = o.n()).done; ) {
                                                      i.value.pontosRodada = 0;
                                                  }
                                              } catch (r) {
                                                  o.e(r);
                                              } finally {
                                                  o.f();
                                              }
                                          }
                                          var s = t._calcularProximos();
                                          t._desenho.liberar(!1),
                                              t._player.zerar(),
                                              (t._acertaram = !1),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "fimRodada", a),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "proximos", s),
                                              (t._vez = !1);
                                      }),
                                      this._socket.on(18, function (e) {
                                          t._vez, b(Object(u.a)(n.prototype), "emit", t).call(t, "intervalo", e);
                                      }),
                                      this._socket.on(22, function (e, a) {
                                          t._vez;
                                          var i,
                                              o = [],
                                              s = w(e);
                                          try {
                                              for (s.s(); !(i = s.n()).done; ) {
                                                  var r = i.value;
                                                  o.push(t._getUser(r));
                                              }
                                          } catch (_) {
                                              s.e(_);
                                          } finally {
                                              s.f();
                                          }
                                          t._historico || o[0].vitorias++;
                                          var c = o[0].pontos;
                                          t._ordenarUsuarios();
                                          var l,
                                              h = 0,
                                              f = w(t._usuarios);
                                          try {
                                              for (f.s(); !(l = f.n()).done; ) {
                                                  var d = l.value;
                                                  (d.entrada = ++h), (d.pontos = 0), (d.pontosRodada = 0);
                                              }
                                          } catch (_) {
                                              f.e(_);
                                          } finally {
                                              f.f();
                                          }
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "intervalo", a), b(Object(u.a)(n.prototype), "emit", t).call(t, "fimJogo", o, c);
                                      }),
                                      this._socket.on(23, function (e) {
                                          t._usuarios.push(e), b(Object(u.a)(n.prototype), "emit", t).call(t, "entrada", e);
                                      }),
                                      this._socket.on(24, function (e) {
                                          var a = t._getUser(e);
                                          a &&
                                              (t._usuarios.splice(t._usuarios.indexOf(a), 1),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "saida", a),
                                              (t._estado != n.INTERVAL && t._estado != n.END) || b(Object(u.a)(n.prototype), "emit", t).call(t, "proximos", t._calcularProximos()));
                                      }),
                                      this._socket.on(25, function () {
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "pular", t._desenhistaVez);
                                      }),
                                      this._socket.on(26, function (e, a, i, o) {
                                          (t._proprio.pontos += a),
                                              (t._proprio.pontosRodada += a),
                                              (t._desenhistaVez.pontos += i),
                                              (t._desenhistaVez.pontosRodada += i),
                                              (t._tempoDesconto += o),
                                              t._ordenarUsuarios(),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "acerto", e, a, i, o);
                                      }),
                                      this._socket.on(27, function (e, a, i, o) {
                                          var s = t._getUser(e);
                                          (s.pontos += a),
                                              (s.pontosRodada += a),
                                              (t._desenhistaVez.pontos += i),
                                              (t._desenhistaVez.pontosRodada += i),
                                              (t._tempoDesconto += o),
                                              t._ordenarUsuarios(),
                                              b(Object(u.a)(n.prototype), "emit", t).call(t, "acertoOutro", s, a, i, o);
                                      }),
                                      this._socket.on(28, function (e) {
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "todosAcertaram", e);
                                      }),
                                      this._socket.on(29, function () {
                                          (t._acertaram = !0), b(Object(u.a)(n.prototype), "emit", t).call(t, "primeiroAcerto");
                                      }),
                                      this._socket.on(30, function (e, a) {
                                          (t._dicasNum = a), b(Object(u.a)(n.prototype), "emit", t).call(t, "dica", e, a);
                                      }),
                                      this._socket.on(35, function (e) {
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "denuncia", t._getUser(e));
                                      }),
                                      this._socket.on(45, function (e, a, i) {
                                          var o = t._getUser(e),
                                              s = t._getUser(a);
                                          o && s && b(Object(u.a)(n.prototype), "emit", t).call(t, "votekick", o, s, i);
                                      }),
                                      this._socket.on(38, function () {
                                          var e,
                                              a = w(t._usuarios);
                                          try {
                                              for (a.s(); !(e = a.n()).done; ) {
                                                  var i = e.value;
                                                  i.pontos -= i.pontosRodada;
                                              }
                                          } catch (o) {
                                              a.e(o);
                                          } finally {
                                              a.f();
                                          }
                                          t._ordenarUsuarios(), b(Object(u.a)(n.prototype), "emit", t).call(t, "cancelar");
                                      }),
                                      this._socket.on(32, function () {
                                          b(Object(u.a)(n.prototype), "emit", t).call(t, "inativo");
                                      }),
                                      this._socket.on(33, function (e) {
                                          (t._estado = e ? n.LOBBY : n.WAITING), t._removerProximos(), (t._vez = !1), t._desenho.liberar(!1), t._player.zerar();
                                          var a,
                                              i = w(t._usuarios);
                                          try {
                                              for (i.s(); !(a = i.n()).done; ) {
                                                  var o = a.value;
                                                  (o.pontos = 0), (o.pontosRodada = 0);
                                              }
                                          } catch (s) {
                                              i.e(s);
                                          } finally {
                                              i.f();
                                          }
                                          t._ordenarUsuarios(), b(Object(u.a)(n.prototype), "emit", t).call(t, "aguardando", e);
                                      }),
                                      this._socket.on(34, function () {
                                          t._iniciarDesenho();
                                      }),
                                      this._socket.on(40, function (e) {
                                          switch (e) {
                                              case 1:
                                                  b(Object(u.a)(n.prototype), "emit", t).call(t, "ofensaChat");
                                                  break;
                                              case 2:
                                                  b(Object(u.a)(n.prototype), "emit", t).call(t, "respostaChat");
                                                  break;
                                              case 3:
                                                  b(Object(u.a)(n.prototype), "emit", t).call(t, "ofensaResposta");
                                                  break;
                                              case 4:
                                                  b(Object(u.a)(n.prototype), "emit", t).call(t, "avisoAdmin");
                                          }
                                      });
                              },
                          },
                          {
                              key: "destroy",
                              value: function () {
                                  this._socket.removeAllListeners(43),
                                      this._socket.removeAllListeners(10),
                                      this._socket.removeAllListeners(36),
                                      this._socket.removeAllListeners(37),
                                      this._socket.removeAllListeners(11),
                                      this._socket.removeAllListeners(13),
                                      this._socket.removeAllListeners(15),
                                      this._socket.removeAllListeners(16),
                                      this._socket.removeAllListeners(17),
                                      this._socket.removeAllListeners(19),
                                      this._socket.removeAllListeners(18),
                                      this._socket.removeAllListeners(22),
                                      this._socket.removeAllListeners(23),
                                      this._socket.removeAllListeners(24),
                                      this._socket.removeAllListeners(25),
                                      this._socket.removeAllListeners(26),
                                      this._socket.removeAllListeners(27),
                                      this._socket.removeAllListeners(28),
                                      this._socket.removeAllListeners(29),
                                      this._socket.removeAllListeners(30),
                                      this._socket.removeAllListeners(35),
                                      this._socket.removeAllListeners(45),
                                      this._socket.removeAllListeners(38),
                                      this._socket.removeAllListeners(32),
                                      this._socket.removeAllListeners(33),
                                      this._socket.removeAllListeners(34),
                                      this._socket.removeAllListeners(40),
                                      clearInterval(this._timerAtivo);
                              },
                          },
                          {
                              key: "hits",
                              get: function () {
                                  return this._acertaram;
                              },
                          },
                          {
                              key: "history",
                              get: function () {
                                  return this._historico;
                              },
                          },
                          {
                              key: "userTurn",
                              get: function () {
                                  return this._desenhistaVez;
                              },
                          },
                          {
                              key: "owner",
                              get: function () {
                                  return this._dono;
                              },
                          },
                          {
                              key: "started",
                              get: function () {
                                  return this._inicioVez;
                              },
                          },
                          {
                              key: "limit",
                              get: function () {
                                  return this._dadosSala.limite;
                              },
                          },
                          {
                              key: "word",
                              get: function () {
                                  return this._palavra;
                              },
                          },
                          {
                              key: "room",
                              get: function () {
                                  return this._dadosSala.id;
                              },
                          },
                          {
                              key: "interval",
                              get: function () {
                                  return this._estado == n.INTERVAL || this._estado == n.END;
                              },
                          },
                          {
                              key: "lobby",
                              get: function () {
                                  return this._estado == n.LOBBY;
                              },
                          },
                          {
                              key: "me",
                              get: function () {
                                  return this._proprio;
                              },
                          },
                          {
                              key: "goal",
                              get: function () {
                                  return this._dadosSala.meta;
                              },
                          },
                          {
                              key: "subject",
                              get: function () {
                                  return this._dadosSala.tipo;
                              },
                          },
                          {
                              key: "language",
                              get: function () {
                                  return this._dadosSala.idioma;
                              },
                          },
                          {
                              key: "time",
                              get: function () {
                                  var t = 0;
                                  switch (this._estado) {
                                      case n.DRAWING:
                                          t = this._dadosSala.tempoRodada;
                                          break;
                                      case n.INTERVAL:
                                          t = this._dadosSala.tempoIntervalo;
                                          break;
                                      case n.END:
                                          t = 2 * this._dadosSala.tempoIntervalo;
                                  }
                                  return t;
                              },
                          },
                          {
                              key: "timeWasted",
                              get: function () {
                                  return Date.now() + this._tempoDesconto - this._tempoInicio;
                              },
                          },
                          {
                              key: "timeInterval",
                              get: function () {
                                  return this._dadosSala.tempoIntervalo;
                              },
                          },
                          {
                              key: "timeTurn",
                              get: function () {
                                  return this._dadosSala.tempoRodada;
                              },
                          },
                          {
                              key: "users",
                              get: function () {
                                  return this._usuarios;
                              },
                          },
                          {
                              key: "turn",
                              get: function () {
                                  return this._vez;
                              },
                          },
                          {
                              key: "drawing",
                              get: function () {
                                  return this._desenho;
                              },
                          },
                          {
                              key: "state",
                              get: function () {
                                  return this._estado;
                              },
                          },
                          {
                              key: "created",
                              get: function () {
                                  return this._dadosSala && this._dadosSala.codigo;
                              },
                          },
                          {
                              key: "official",
                              get: function () {
                                  return this._dadosSala && this._dadosSala.oficial;
                              },
                          },
                          {
                              key: "photo",
                              get: function () {
                                  return this._dadosSala && this._dadosSala.foto;
                              },
                          },
                          {
                              key: "viewer",
                              get: function () {
                                  return this._visitante;
                              },
                          },
                          {
                              key: "roomId",
                              get: function () {
                                  return this._salaId;
                              },
                          },
                      ]),
                      n
                  );
              })(k.a);
          Object(f.a)(N, "DRAWING", 0), Object(f.a)(N, "INTERVAL", 1), Object(f.a)(N, "END", 2), Object(f.a)(N, "WAITING", 3), Object(f.a)(N, "LOBBY", 4);
          var S = N;
          function C(t) {
              if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                  if (
                      Array.isArray(t) ||
                      (t = (function (t, e) {
                          if (!t) return;
                          if ("string" === typeof t) return A(t, e);
                          var a = Object.prototype.toString.call(t).slice(8, -1);
                          "Object" === a && t.constructor && (a = t.constructor.name);
                          if ("Map" === a || "Set" === a) return Array.from(a);
                          if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return A(t, e);
                      })(t))
                  ) {
                      var e = 0,
                          a = function () {};
                      return {
                          s: a,
                          n: function () {
                              return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
                          },
                          e: function (t) {
                              throw t;
                          },
                          f: a,
                      };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var n,
                  i,
                  o = !0,
                  s = !1;
              return {
                  s: function () {
                      n = t[Symbol.iterator]();
                  },
                  n: function () {
                      var t = n.next();
                      return (o = t.done), t;
                  },
                  e: function (t) {
                      (s = !0), (i = t);
                  },
                  f: function () {
                      try {
                          o || null == n.return || n.return();
                      } finally {
                          if (s) throw i;
                      }
                  },
              };
          }
          function A(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
              return n;
          }
          function T() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var I = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (T()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t, e) {
                  var i;
                  return (
                      Object(s.a)(this, n),
                      ((i = a.call(this))._opcoes = Object.assign({ baldeFragmentado: !0 }, e)),
                      (i._desenho = t),
                      (i._fracao = 9),
                      (i._ativo = !1),
                      (i._partesDesenho = []),
                      (i._animacao = !1),
                      (i._contagem = 0),
                      (i._pendente = !1),
                      (i._cacheBalde = ""),
                      (i._direto = !1),
                      (i._removerDireto = !1),
                      i._ultimoTempo,
                      (i._dif = 0),
                      (i._posicao = 0),
                      i
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "registrar",
                          value: function (t) {
                              var e = this;
                              if ("string" != typeof t) this._partesDesenho.push(t);
                              else {
                                  var a,
                                      n = C(t.split("|"));
                                  try {
                                      for (n.s(); !(a = n.n()).done; ) {
                                          var i = a.value.split("@");
                                          if (2 == i.length) {
                                              var o = i[1].split("#");
                                              o.unshift(i[0]), this._partesDesenho.push(o);
                                          }
                                      }
                                  } catch (s) {
                                      n.e(s);
                                  } finally {
                                      n.f();
                                  }
                              }
                              this._ativo &&
                                  !this._animacao &&
                                  ((this._ultimoTempo = Date.now()),
                                  (this._animacao = requestAnimationFrame(function () {
                                      e._rotina();
                                  })));
                          },
                      },
                      {
                          key: "removerDireto",
                          value: function () {
                              this._removerDireto = !0;
                          },
                      },
                      {
                          key: "zerar",
                          value: function () {
                              this.parar(), (this._partesDesenho = []);
                          },
                      },
                      {
                          key: "iniciar",
                          value: function () {
                              var t = this;
                              b(Object(u.a)(n.prototype), "emit", this).call(this, "iniciar"),
                                  (this._ativo = !0),
                                  (this._ultimoTempo = Date.now()),
                                  (this._animacao = requestAnimationFrame(function () {
                                      t._rotina();
                                  }));
                          },
                      },
                      {
                          key: "pausar",
                          value: function () {
                              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              this._cancelarAnimacao(), (this._ativo = !1), t || b(Object(u.a)(n.prototype), "emit", this).call(this, "pausar");
                          },
                      },
                      {
                          key: "parar",
                          value: function () {
                              this.pausar(!0),
                                  this._desenho.limparTela(!1, !0),
                                  (this._posicao = 0),
                                  (this._contagem = 0),
                                  (this._dif = 0),
                                  (this._cacheBalde = ""),
                                  (this._pendente = !1),
                                  b(Object(u.a)(n.prototype), "emit", this).call(this, "parar");
                          },
                      },
                      {
                          key: "flush",
                          value: function () {
                              this._desenhar(this._pendente, 0, !0), (this._pendente = !1);
                          },
                      },
                      {
                          key: "_cancelarAnimacao",
                          value: function () {
                              this._animacao && (cancelAnimationFrame(this._animacao), (this._animacao = !1));
                          },
                      },
                      {
                          key: "_rotina",
                          value: function () {
                              var t = this;
                              if (this._ativo) {
                                  for (this._dif += Date.now() - this._ultimoTempo; this._dif >= this._fracao; ) {
                                      if (!this._passo()) {
                                          (this._dif = this._dif % this._fracao), b(Object(u.a)(n.prototype), "emit", this).call(this, "fim");
                                          break;
                                      }
                                      this._dif -= this._fracao;
                                  }
                                  this._removerDireto && ((this._direto = !1), (this._removerDireto = !1)),
                                      this._ativo &&
                                          this._animacao &&
                                          ((this._ultimoTempo = Date.now()),
                                          (this._animacao = requestAnimationFrame(function () {
                                              t._rotina();
                                          })));
                              }
                          },
                      },
                      {
                          key: "_passo",
                          value: function () {
                              if (this._posicao < this._partesDesenho.length) {
                                  var t = this._partesDesenho[this._posicao];
                                  return (
                                      0 == this._contagem &&
                                      this._pendente &&
                                      t.length > 3 &&
                                      this._pendente.length > 3 &&
                                      2 == t[0] &&
                                      t[1] == this._pendente[this._pendente.length - 2] &&
                                      t[2] == this._pendente[this._pendente.length - 1]
                                          ? ((this._contagem = (this._pendente.length - 1) / 2 + 1),
                                            (t = this._pendente.concat(t.slice(3))),
                                            this._partesDesenho.splice(this._posicao--, 1),
                                            (this._partesDesenho[this._posicao] = t),
                                            (this._pendente = !1))
                                          : this._pendente && this.flush(),
                                      this._desenhar(t, this._contagem) ? (2 == t[0] ? (this._pendente = this._partesDesenho[this._posicao]) : (this._pendente = !1), this._posicao++, (this._contagem = 0)) : this._contagem++,
                                      (this._direto || 4 == t[0] || 5 == t[0] || 6 == t[0] || 27 == t[0] || (3 == t[0] && this._partesDesenho.length && 3 == this._partesDesenho[0][0])) && this._passo(),
                                      !0
                                  );
                              }
                              return this._cancelarAnimacao(), !1;
                          },
                      },
                      {
                          key: "_desenhar",
                          value: function (t, e, a) {
                              switch (parseInt(t[0])) {
                                  case 1:
                                      this._desenho.desenhar(parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5]), parseInt(t[1]), 0, !1), this._desenho.salvarEstado(!1);
                                      break;
                                  case 2:
                                      var n = parseInt(t[1]),
                                          i = parseInt(t[2]),
                                          o = [[n, i]],
                                          s = [n, i, n, i],
                                          r = 3 + 2 * (e + 1);
                                      (r > t.length || a) && (r = t.length);
                                      for (var c = 3; c < r; c += 2) {
                                          var l = parseInt(t[c]),
                                              u = parseInt(t[c + 1]);
                                          l < s[0] ? (s[0] = l) : l > s[2] && (s[2] = l), u < s[1] ? (s[1] = u) : u > s[3] && (s[3] = u), o.push([l, u]);
                                      }
                                      if (e) {
                                          var h = this._desenho.borda,
                                              f = s[0] - h / 2,
                                              d = s[1] - h / 2,
                                              _ = s[2] - s[0] + h,
                                              p = s[3] - s[1] + h;
                                          this._desenho.limparTelaPrev(f, d, _, p);
                                      } else this._desenho.limparTelaPrev();
                                      if ((r += 2) <= t.length) return this._desenho.linhaSeq(o, 1), !1;
                                      a ? (this._desenho.linhaSeq(o, 0), this._desenho.salvarEstado(!1)) : this._desenho.linhaSeq(o, 1);
                                      break;
                                  case 3:
                                      if (this._opcoes.baldeFragmentado)
                                          if ("0" == t[1]) this._cacheBalde += t.slice(2).join("$");
                                          else if ("1" == t[1]) (this._cacheBalde = ""), (this._cacheBalde += t.slice(2).join("$"));
                                          else {
                                              "3" == t[1] && (this._cacheBalde = ""), (this._cacheBalde += t.slice(2).join("$"));
                                              var v = this._cacheBalde.split("$").map(function (t) {
                                                  return parseInt(t);
                                              });
                                              this._desenho.baldeF(v), this._desenho.salvarEstado(!1);
                                          }
                                      else
                                          this._desenho.baldeF(
                                              t.slice(1).map(function (t) {
                                                  return parseInt(t);
                                              })
                                          ),
                                              this._desenho.salvarEstado(!1);
                                      break;
                                  case 4:
                                      this._desenho.limparTela(!0, !0);
                                      break;
                                  case 5:
                                      this._desenho.mudaCor(t[1], !1);
                                      break;
                                  case 6:
                                      this._desenho.mudaBorda(t[1], !1);
                                      break;
                                  case 27:
                                      this._desenho.mudaAlpha(t[1], !1);
                                      break;
                                  case 21:
                                      for (var m = 1; m < t.length; m += 2) this._desenho.borracha(parseInt(t[m]), parseInt(t[m + 1]), 0, !1);
                                      break;
                                  case 31:
                                      1 == t[1] ? this._desenho.refazer() : this._desenho.desfazer();
                              }
                              return !0;
                          },
                      },
                      {
                          key: "direto",
                          set: function (t) {
                              this._direto = t;
                          },
                      },
                      {
                          key: "fracao",
                          set: function (t) {
                              this._fracao = t;
                          },
                      },
                      {
                          key: "desenho",
                          get: function () {
                              return this._desenho;
                          },
                      },
                  ]),
                  n
              );
          })(k.a);
          function P() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var x = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (P()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t, e) {
                      var i, o, r;
                      Object(s.a)(this, n),
                          ((i = a.call(this))._opcoes = Object.assign({ largura: 510, altura: 304, elems: 1, prev: !0, usoDesfazer: 1, usoRefazer: 1, retina: 1, quebra: 230 }, e)),
                          (i._elemBase = t),
                          i._opcoes.larguraIni || (i._opcoes.larguraIni = i._opcoes.largura),
                          i._opcoes.alturaIni || (i._opcoes.alturaIni = i._opcoes.altura),
                          i._opcoes.usoDesfazer && i._opcoes.usoDesfazer instanceof Boolean && (i._opcoes.usoDesfazer = 1),
                          i._opcoes.usoRefazer && i._opcoes.usoRefazer instanceof Boolean && (i._opcoes.usoRefazer = 1),
                          i._opcoes.retina || (i._opcoes.retina = 1),
                          (i._liberado = !1),
                          (i._draw = !1),
                          (i._stack = []),
                          (i._stackArr = []),
                          (i._des_cod = []),
                          (i._des_cod_hist = []),
                          (i._codigoQuebra = !0),
                          (i._cor = 0),
                          (i._corValor = "x000000"),
                          (i._borda = 4),
                          (i._tipo = 0),
                          (i._alpha = 1),
                          (i._bordaTemp = i._borda),
                          (i._alphaTemp = i._alpha),
                          (i._tolerancia = 20),
                          (i._camada = 0),
                          (i._histCamada = []),
                          (i._canvasHist = []),
                          (i._canvasHistElem = []),
                          (i._histPos = 0),
                          (i._undoQuant = 0),
                          (i._redoQuant = 0),
                          (i._histQuant = i._opcoes.usoDesfazer > i._opcoes.usoRefazer ? i._opcoes.usoDesfazer + 1 : i._opcoes.usoRefazer + 1),
                          (i._zoom = 1),
                          (i._zoomOrig = 1),
                          (i._zoomTela = i._opcoes.larguraIni / i._opcoes.largura),
                          (i._zoomPos = 1),
                          (i._fator = 1),
                          (i._cores = [
                              "rgba(0,0,0,0)",
                              "#000",
                              "#666",
                              "#8b0000",
                              "#008b00",
                              "#00008b",
                              "#008b8b",
                              "#8b8b00",
                              "#8b4500",
                              "#8b0a50",
                              "#551a8b",
                              "#548b54",
                              "#8b6969",
                              "#8b7b8b",
                              "#fff",
                              "#ccc",
                              "#ff0000",
                              "#00ff00",
                              "#0000ff",
                              "#00ffff",
                              "#ffff00",
                              "#ff7f00",
                              "#ff1493",
                              "#9b30ff",
                              "#9aff9a",
                              "#ffc1c1",
                              "#ffe1ff",
                          ]),
                          i._xFirst,
                          i._yFirst,
                          i._xCoord,
                          i._yCoord,
                          (i._canvasArr = []),
                          (i._canvasElemsArr = []);
                      for (var c = 0; c < i._opcoes.elems; c++) {
                          var l = document.createElement("canvas");
                          (l.width = i._opcoes.largura * i._opcoes.retina), (l.height = i._opcoes.altura * i._opcoes.retina);
                          var u = l.getContext("2d");
                          (u.lineCap = "round"),
                              (u.lineJoin = "round"),
                              (u.fillStyle = "#000000"),
                              (u.strokeStyle = "#000000"),
                              (u.lineWidth = i._borda * i._opcoes.retina),
                              i._canvasArr.push(u),
                              i._canvasElemsArr.push(l),
                              t.appendChild(l);
                      }
                      if (
                          ((i._canvasElem = i._canvasElemsArr[0]),
                          (i._canvas = i._canvasArr[0]),
                          (i._canvasLargura = i._canvasElem.width),
                          (i._canvasAltura = i._canvasElem.height),
                          (i._local = [i._canvas]),
                          i._opcoes.prev &&
                              ((i._canvasPrevElem = document.createElement("canvas")),
                              (i._canvasPrevElem.width = i._opcoes.largura * i._opcoes.retina),
                              (i._canvasPrevElem.height = i._opcoes.altura * i._opcoes.retina),
                              (i._canvasPrevElem.style.position = "absolute"),
                              (i._canvasPrevElem.style.zIndex = 1),
                              (i._canvasPrevElem.style.top = 0),
                              (i._canvasPrevElem.style.left = 0),
                              (i._canvasPrev = i._canvasPrevElem.getContext("2d")),
                              i._local.push(i._canvasPrev),
                              (i._canvasPrev.lineCap = "round"),
                              (i._canvasPrev.lineJoin = "round"),
                              (i._canvasPrev.fillStyle = "#000000"),
                              (i._canvasPrev.strokeStyle = "#000000"),
                              (i._canvasPrev.lineWidth = i._borda * i._opcoes.retina),
                              t.appendChild(i._canvasPrevElem),
                              (i._eventElem = i._opcoes.eventElem || i._canvasPrevElem),
                              (i._eventTouchStart = function (t) {
                                  i._startDraw(t), i._liberado && t.preventDefault();
                              }),
                              (i._eventTouchMove = function (t) {
                                  i._coordenada(t), i._liberado && t.preventDefault();
                              }),
                              (i._eventTouchEnd = function (t) {
                                  i._endDraw(t), i._liberado && t.preventDefault();
                              }),
                              i._eventElem.addEventListener("touchstart", i._eventTouchStart, !1),
                              i._eventElem.addEventListener("touchmove", i._eventTouchMove, !1),
                              i._eventElem.addEventListener("touchend", i._eventTouchEnd, !1),
                              i._eventElem.addEventListener("touchcancel", i._eventTouchEnd, !1),
                              i._opcoes.mobile ||
                                  ((i._eventMouseDown = function (t) {
                                      i._startDraw(t);
                                  }),
                                  (i._eventMouseMove = function (t) {
                                      i._coordenada(t), !i._draw || (0 !== t.which && 0 !== t.buttons) || i._endDraw(t);
                                  }),
                                  (i._eventMouseUp = function (t) {
                                      i._endDraw(t);
                                  }),
                                  i._eventElem.addEventListener("mousedown", i._eventMouseDown, !1),
                                  document.addEventListener("mousemove", i._eventMouseMove, !1),
                                  document.addEventListener("mouseup", i._eventMouseUp, !1))),
                          i._opcoes.usoDesfazer || i._opcoes.usoRefazer)
                      )
                          for (var h = 0; h < i._histQuant; h++)
                              ((o = document.createElement("canvas")).width = i._canvasLargura),
                                  (o.height = i._canvasAltura),
                                  (o.style.display = "none"),
                                  i._canvasHistElem.push(o),
                                  (r = o.getContext("2d")),
                                  i._local.push(r),
                                  (r.lineCap = "round"),
                                  (r.lineJoin = "round"),
                                  (r.fillStyle = "#000000"),
                                  (r.strokeStyle = "#000000"),
                                  (r.lineWidth = i._borda * i._opcoes.retina),
                                  i._canvasHist.push(r);
                      return (i.zoom = 1), i;
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "borracha",
                              value: function (t, e, a) {
                                  (t -= 3 * this._borda), (e -= 3 * this._borda), (t *= this._opcoes.retina), (e *= this._opcoes.retina);
                                  var n = (6 * this._borda + 1) * this._opcoes.retina;
                                  this._local[a].clearRect(t, e, n, n);
                              },
                          },
                          {
                              key: "linha",
                              value: function (t, e, a, n, i) {
                                  (t *= this._opcoes.retina),
                                      (e *= this._opcoes.retina),
                                      (a *= this._opcoes.retina),
                                      (n *= this._opcoes.retina),
                                      this._local[i].beginPath(),
                                      (this._local[i].lineWidth = this._borda * this._opcoes.retina),
                                      this._local[i].moveTo(t, e),
                                      this._local[i].lineTo(a, n),
                                      this._local[i].stroke(),
                                      this._local[i].closePath();
                              },
                          },
                          {
                              key: "linhaSeq",
                              value: function (t, e) {
                                  var a;
                                  for (this._local[e].beginPath(), this._local[e].moveTo(t[0][0] * this._opcoes.retina, t[0][1] * this._opcoes.retina), a = 1; a < t.length; a++)
                                      this._local[e].quadraticCurveTo(
                                          t[a - 1][0] * this._opcoes.retina,
                                          t[a - 1][1] * this._opcoes.retina,
                                          (t[a - 1][0] + (t[a][0] - t[a - 1][0]) / 2) * this._opcoes.retina,
                                          (t[a - 1][1] + (t[a][1] - t[a - 1][1]) / 2) * this._opcoes.retina
                                      );
                                  this._local[e].lineTo(t[a - 1][0] * this._opcoes.retina, t[a - 1][1] * this._opcoes.retina), this._local[e].stroke();
                              },
                          },
                          {
                              key: "retanguloF",
                              value: function (t, e, a, n, i) {
                                  (t *= this._opcoes.retina), (e *= this._opcoes.retina), (a *= this._opcoes.retina), (n *= this._opcoes.retina), this._local[i].fillRect(t, e, a, n);
                              },
                          },
                          {
                              key: "retanguloB",
                              value: function (t, e, a, n, i) {
                                  (t *= this._opcoes.retina), (e *= this._opcoes.retina), (a *= this._opcoes.retina), (n *= this._opcoes.retina), this._local[i].strokeRect(t, e, a, n);
                              },
                          },
                          {
                              key: "elipseF",
                              value: function (t, e, a, n, i) {
                                  (t *= this._opcoes.retina), (e *= this._opcoes.retina), (a *= this._opcoes.retina), (n *= this._opcoes.retina);
                                  var o = ((Math.sqrt(2) - 1) / 3) * 4;
                                  this._local[i].beginPath(),
                                      this._local[i].moveTo(t, e - n),
                                      this._local[i].bezierCurveTo(t + o * a, e - n, t + a, e - o * n, t + a, e),
                                      this._local[i].bezierCurveTo(t + a, e + o * n, t + o * a, e + n, t, e + n),
                                      this._local[i].bezierCurveTo(t - o * a, e + n, t - a, e + o * n, t - a, e),
                                      this._local[i].bezierCurveTo(t - a, e - o * n, t - o * a, e - n, t, e - n),
                                      this._local[i].fill();
                              },
                          },
                          {
                              key: "elipseB",
                              value: function (t, e, a, n, i) {
                                  (t *= this._opcoes.retina), (e *= this._opcoes.retina), (a *= this._opcoes.retina), (n *= this._opcoes.retina);
                                  var o = ((Math.sqrt(2) - 1) / 3) * 4;
                                  this._local[i].beginPath(),
                                      this._local[i].moveTo(t, e - n),
                                      this._local[i].bezierCurveTo(t + o * a, e - n, t + a, e - o * n, t + a, e),
                                      this._local[i].bezierCurveTo(t + a, e + o * n, t + o * a, e + n, t, e + n),
                                      this._local[i].bezierCurveTo(t - o * a, e + n, t - a, e + o * n, t - a, e),
                                      this._local[i].bezierCurveTo(t - a, e - o * n, t - o * a, e - n, t, e - n),
                                      this._local[i].stroke();
                              },
                          },
                          {
                              key: "contaGotas",
                              value: function (t) {
                                  for (var e = this.getPixel(Math.round(t[0]), Math.round(t[1])), a = (e.b + 256 * e.g + 65536 * e.r).toString(16).toUpperCase(); a.length < 6; ) a = "0" + a;
                                  return "x" + a;
                              },
                          },
                          {
                              key: "baldeF",
                              value: function (t) {
                                  var e, a, n, i;
                                  this._canvas.beginPath();
                                  for (var o = 0; o < t.length; o += 4)
                                      (e = parseInt(t[o]) * this._opcoes.retina),
                                          (a = parseInt(t[o + 1]) * this._opcoes.retina),
                                          (n = parseInt(t[o + 2]) * this._opcoes.retina),
                                          (i = parseInt(t[o + 3]) * this._opcoes.retina),
                                          this._canvas.rect(e, a, n, i);
                                  this._canvas.fill();
                              },
                          },
                          {
                              key: "balde",
                              value: function (t, e) {
                                  var a = this,
                                      i = function (t, e, a) {
                                          var n = e,
                                              i = a;
                                          if (c(e, a, t)) {
                                              for (; c(n + 1, i, t); ) n++;
                                              var o = n;
                                              do {
                                                  for (n = e - 1, i++; c(n + 1, i, t) && n + 1 <= o; ) n++;
                                              } while (n == o);
                                              return { x: e, y: a, w: o - e, h: --i - a };
                                          }
                                          return { w: -1, h: -1 };
                                      },
                                      o = function (t, e, a) {
                                          var n = e,
                                              i = a;
                                          if (c(e, a, t)) {
                                              for (; c(n - 1, i, t); ) n--;
                                              var o = n;
                                              do {
                                                  for (n = e + 1, i--; c(n - 1, i, t) && n - 1 >= o; ) n--;
                                              } while (n == o);
                                              return { x: o, y: ++i, w: e - o, h: a - i };
                                          }
                                          return { w: -1, h: -1 };
                                      },
                                      s = function (t, e, a) {
                                          var n = e,
                                              i = a;
                                          if (c(e, a, t)) {
                                              for (; c(n, i + 1, t); ) i++;
                                              var o = i;
                                              do {
                                                  for (i = a - 1, n--; c(n, i + 1, t) && i + 1 <= o; ) i++;
                                              } while (i == o);
                                              return { x: ++n, y: a, w: e - n, h: o - a };
                                          }
                                          return { w: -1, h: -1 };
                                      },
                                      r = function (t, e, a) {
                                          var n = e,
                                              i = a;
                                          if (c(e, a, t)) {
                                              for (; c(n, i - 1, t); ) i--;
                                              var o = i;
                                              do {
                                                  for (i = a + 1, n++; c(n, i - 1, t) && i - 1 >= o; ) i--;
                                              } while (i == o);
                                              return { x: e, y: o, w: --n - e, h: a - o };
                                          }
                                          return { w: -1, h: -1 };
                                      },
                                      c = function (t, e, n) {
                                          if (h[t][e]) return !1;
                                          var i = 4 * (t + e * a._canvasLargura),
                                              o = Math.abs(n[0] - v[i]),
                                              s = Math.abs(n[1] - v[i + 1]),
                                              r = Math.abs(n[2] - v[i + 2]),
                                              c = Math.abs(n[3] - v[i + 3]);
                                          return o < a._tolerancia && s < a._tolerancia && r < a._tolerancia && c < a._tolerancia;
                                      },
                                      l = function (t) {
                                          for (var e = t[0], n = t[1], i = e + t[2], o = n + t[3], s = e; s < i; s++) for (var r = n; r < o; r++) h[s][r] = !0;
                                          return (t[0] = Math.round(t[0] / a._opcoes.retina)), (t[1] = Math.round(t[1] / a._opcoes.retina)), (t[2] = Math.round(t[2] / a._opcoes.retina)), (t[3] = Math.round(t[3] / a._opcoes.retina)), t;
                                      };
                                  (t = Math.round(t) * this._opcoes.retina), (e = Math.round(e) * this._opcoes.retina);
                                  var h,
                                      f = this._cor,
                                      d = f % 256,
                                      _ = (f = Math.floor(f / 256)) % 256,
                                      p = (f = Math.floor(f / 256));
                                  !(function () {
                                      h = [];
                                      for (var t = -1; t <= a._canvasLargura; t++) h[t] = [];
                                      (h[-1] = []), (h[a._canvasLargura] = []);
                                      for (var e = -1; e <= a._canvasAltura; e++) (h[-1][e] = 1), (h[a._canvasLargura][e] = 1);
                                      for (var n = 0; n < a._canvasLargura; n++) (h[n][-1] = 1), (h[n][a._canvasAltura] = 1);
                                  })();
                                  for (
                                      var v = this._canvas.getImageData(0, 0, this._canvasLargura, this._canvasAltura).data, m = 4 * (t + e * this._canvasLargura), y = [v[m], v[m + 1], v[m + 2], v[m + 3]], g = [], O = 0;
                                      O <= this._canvasLargura;
                                      O++
                                  )
                                      g[O] = [];
                                  if (!c(t, e, [p, _, d, 255])) {
                                      for (; c(t - 1, e, y); ) t--;
                                      for (; c(t, e - 1, y); ) e--;
                                      var k,
                                          w,
                                          j = i(y, t, e),
                                          R = { x: t, y: e, w: j.w, h: j.h, ref: 0, andada: 0 },
                                          E = j.w;
                                      this._canvas.fillRect(j.x, j.y, j.w + 1, j.h + 1);
                                      var N = [3].concat(l([j.x, j.y, j.w + 1, j.h + 1]));
                                      do {
                                          for (k = 0, 2 == R.ref && (k += R.andada); k <= R.h; )
                                              -1 != (w = (j = r(y, R.x + R.w + 1, R.y + R.h - k)).h)
                                                  ? (g[w].push({ x: j.x, y: j.y, w: j.w, h: j.h, ref: 1, andada: R.h + 1 - k }),
                                                    this._canvas.fillRect(j.x, j.y, j.w + 1, j.h + 1),
                                                    (N = N.concat(l([j.x, j.y, j.w + 1, j.h + 1]))),
                                                    w > E && (E = w),
                                                    (k += w))
                                                  : k++;
                                          for (k = 0, 1 == R.ref && (k += R.andada); k <= R.h; )
                                              -1 != (w = (j = s(y, R.x - 1, R.y + k)).h)
                                                  ? (g[w].push({ x: j.x, y: j.y, w: j.w, h: j.h, ref: 2, andada: R.h + 1 - k }),
                                                    this._canvas.fillRect(j.x, j.y, j.w + 1, j.h + 1),
                                                    (N = N.concat(l([j.x, j.y, j.w + 1, j.h + 1]))),
                                                    w > E && (E = w),
                                                    (k += w))
                                                  : k++;
                                          for (k = 0, 4 == R.ref && (k += R.andada); k <= R.w; )
                                              -1 != (w = (j = i(y, R.x + k, R.y + R.h + 1)).w)
                                                  ? (g[w].push({ x: j.x, y: j.y, w: j.w, h: j.h, ref: 3, andada: R.w + 1 - k }),
                                                    this._canvas.fillRect(j.x, j.y, j.w + 1, j.h + 1),
                                                    (N = N.concat(l([j.x, j.y, j.w + 1, j.h + 1]))),
                                                    w > E && (E = w),
                                                    (k += w))
                                                  : k++;
                                          for (k = 0, 3 == R.ref && (k += R.andada); k <= R.w; )
                                              -1 != (w = (j = o(y, R.x + R.w - k, R.y - 1)).w)
                                                  ? (g[w].push({ x: j.x, y: j.y, w: j.w, h: j.h, ref: 4, andada: R.w + 1 - k }),
                                                    this._canvas.fillRect(j.x, j.y, j.w + 1, j.h + 1),
                                                    (N = N.concat(l([j.x, j.y, j.w + 1, j.h + 1]))),
                                                    w > E && (E = w),
                                                    (k += w))
                                                  : k++;
                                          for (R = g[E].pop(); null == R && E > 0; ) R = g[--E].pop();
                                      } while (null != R);
                                      this._des_cod.push(N), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", N);
                                  }
                              },
                          },
                          {
                              key: "_startDraw",
                              value: function (t) {
                                  if (!this._draw && this._liberado) {
                                      switch (
                                          (this._coordenada(t),
                                          b(Object(u.a)(n.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !1),
                                          (this._draw = !0),
                                          (this._xFirst = this._xCoord),
                                          (this._yFirst = this._yCoord),
                                          this._tipo)
                                      ) {
                                          case 0:
                                              (this._stack = [2, this._xFirst, this._yFirst]), (this._stackArr = [[this._xFirst, this._yFirst]]);
                                              break;
                                          case 7:
                                              this.balde(this._xFirst, this._yFirst), (this._draw = !1), this.salvarEstado(!1);
                                              break;
                                          case 8:
                                              this.mudaCor(this.contaGotas([this._xFirst, this._yFirst]), !0), b(Object(u.a)(n.prototype), "emit", this).call(this, "selCor"), (this._draw = !1);
                                              break;
                                          case 1:
                                              (this._stack = [21, this._xFirst, this._yFirst]), this.borracha(this._xCoord, this._yCoord, 0, !0);
                                      }
                                      8 != this._tipo && b(Object(u.a)(n.prototype), "emit", this).call(this, "startDraw"), 7 == this._tipo && b(Object(u.a)(n.prototype), "emit", this).call(this, "endDraw");
                                  }
                              },
                          },
                          {
                              key: "_coordenada",
                              value: function (t) {
                                  if (this._liberado) {
                                      var e = this._canvasPrevElem.getBoundingClientRect(),
                                          a = { x: e.left, y: e.top };
                                      if (
                                          ((a.x *= this._zoomPos),
                                          (a.y *= this._zoomPos),
                                          t && t.touches
                                              ? ((this._xCoord = t.touches[0].clientX + document.body.scrollLeft - a.x), (this._yCoord = t.touches[0].clientY + document.body.scrollTop - a.y))
                                              : window.event
                                              ? ((this._xCoord = event.clientX + document.body.scrollLeft - a.x), (this._yCoord = event.clientY + document.body.scrollTop - a.y))
                                              : document.layers
                                              ? ((this._xCoord = t.x + document.body.scrollLeft - a.x), (this._yCoord = t.y + document.body.scrollTop - a.y))
                                              : ((this._xCoord = t.clientX + document.body.scrollLeft - a.x), (this._yCoord = t.clientY + document.body.scrollTop - a.y)),
                                          (this._xCoord = Math.round(this._xCoord / this._zoom / this._fator / this._zoomTela)),
                                          (this._yCoord = Math.round(this._yCoord / this._zoom / this._fator / this._zoomTela)),
                                          this._draw ||
                                              (this._xCoord >= 0 && this._xCoord < this._canvasLargura && this._yCoord >= 0 && this._yCoord < this._canvasAltura
                                                  ? b(Object(u.a)(n.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !0)
                                                  : b(Object(u.a)(n.prototype), "emit", this).call(this, "coord", this._xCoord, this._yCoord, !1)),
                                          this._canvasPrevElem && 1 == this._tipo)
                                      ) {
                                          var i = this._xCoord - 3 * this._borda,
                                              o = this._yCoord - 3 * this._borda,
                                              s = 6 * this._borda + 1;
                                          this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura), this.desenhar(i, o, i + s, o + s, 2, 1, !1), this.desenhar(i, o, i + s, o + s, 3, 1, !1);
                                      }
                                      this._draw &&
                                          this._liberado &&
                                          (0 == this._tipo
                                              ? (this._codigoQuebra &&
                                                    this._stack.length > this._opcoes.quebra &&
                                                    (this._des_cod.push(this._stack),
                                                    b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", this._stack),
                                                    b(Object(u.a)(n.prototype), "emit", this).call(this, "quebra"),
                                                    (this._stack = [2, this._xFirst, this._yFirst]),
                                                    this.salvarEstado(!1)),
                                                (this._stack = this._stack.concat(this._xCoord, this._yCoord)),
                                                this._stackArr.push([this._xCoord, this._yCoord]),
                                                this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                                this.linhaSeq(this._stackArr, 1),
                                                (this._xFirst = this._xCoord),
                                                (this._yFirst = this._yCoord))
                                              : 1 == this._tipo
                                              ? (this._stack.length > this._opcoes.quebra &&
                                                    (this._des_cod.push(this._stack), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", this._stack), (this._stack = [21, this._xCoord, this._yCoord])),
                                                this.borracha(this._xCoord, this._yCoord, 0, !0),
                                                (this._stack = this._stack.concat(this._xCoord, this._yCoord)))
                                              : (this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura), this.desenhar(this._xFirst, this._yFirst, this._xCoord, this._yCoord, this._tipo, 1, !1)));
                                  }
                              },
                          },
                          {
                              key: "desenhar",
                              value: function (t, e, a, i, o, s, r) {
                                  if (t != a || e != i) {
                                      var c, l, h, f;
                                      switch ((t >= a ? ((c = a), (l = t)) : ((c = t), (l = a)), e >= i ? ((h = i), (f = e)) : ((h = e), (f = i)), o)) {
                                          case 6:
                                              this.linha(t, e, a, i, s);
                                              break;
                                          case 2:
                                              if (c == l || h == f) {
                                                  r = !1;
                                                  break;
                                              }
                                              this.retanguloF(c, h, l - c, f - h, s);
                                              break;
                                          case 3:
                                              this.retanguloB(c, h, l - c, f - h, s);
                                              break;
                                          case 4:
                                              if (c == l || h == f) {
                                                  r = !1;
                                                  break;
                                              }
                                              var d = Math.floor((l - c) / 2),
                                                  _ = Math.floor((f - h) / 2),
                                                  p = Math.round(c + d),
                                                  v = Math.round(h + _);
                                              this.elipseF(p, v, d, _, s);
                                              break;
                                          case 5:
                                              var m = Math.floor((l - c) / 2),
                                                  y = Math.floor((f - h) / 2),
                                                  g = Math.round(c + m),
                                                  O = Math.round(h + y);
                                              this.elipseB(g, O, m, y, s);
                                      }
                                      if (r) {
                                          var k = [1, o, t, e, a, i];
                                          this._des_cod.push(k), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", k);
                                      }
                                  }
                              },
                          },
                          {
                              key: "_endDraw",
                              value: function () {
                                  if (this._draw && this._liberado) {
                                      if (0 == this._tipo)
                                          if (2 == this._stack.length) {
                                              var t = Math.round(this._bordaTemp / 2),
                                                  e = 2 * t;
                                              (this._stack[0] -= t),
                                                  (this._stack[1] -= t),
                                                  (this._stack[2] = this._stack[0] + e),
                                                  (this._stack[3] = this._stack[1] + e),
                                                  this.desenhar(this._stack[0], this._stack[1], this._stack[2], this._stack[3], 4, 0, !0);
                                          } else
                                              this._des_cod.push(this._stack),
                                                  this.linhaSeq(this._stackArr, 0),
                                                  this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                                  b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", this._stack);
                                      else
                                          1 == this._tipo
                                              ? (this._des_cod.push(this._stack), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", this._stack))
                                              : (this.desenhar(this._xFirst, this._yFirst, this._xCoord, this._yCoord, this._tipo, 0, !0), this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura));
                                      this.salvarEstado(!1),
                                          (this._draw = !1),
                                          this._borda != this._bordaTemp && this.mudaBorda(this._bordaTemp, !0),
                                          this._alpha != this._alphaTemp && this.mudaAlpha(this._alphaTemp, !0),
                                          b(Object(u.a)(n.prototype), "emit", this).call(this, "endDraw");
                                  }
                              },
                          },
                          {
                              key: "mudaOpcao",
                              value: function (t) {
                                  1 == t
                                      ? ((this._canvas.fillStyle = "#FFFFFF"),
                                        this._canvasPrevElem &&
                                            this._liberado &&
                                            ((this._canvasPrev.lineWidth = 2 * this._opcoes.retina), (this._canvasPrev.globalAlpha = 1), (this._canvasPrev.strokeStyle = "#000000"), (this._canvasPrev.fillStyle = "rgba(255,255,255,0.8)")))
                                      : 1 == this._tipo &&
                                        ((this._canvas.fillStyle = this._converterCor(this._cor, !0)),
                                        this._canvasPrevElem &&
                                            (this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                            (this._canvasPrev.lineWidth = this._borda * this._opcoes.retina),
                                            (this._canvasPrev.globalAlpha = this._alpha),
                                            (this._canvasPrev.fillStyle = this._canvas.fillStyle),
                                            (this._canvasPrev.strokeStyle = this._canvas.fillStyle))),
                                      (this._tipo = t);
                              },
                          },
                          {
                              key: "mudaBorda",
                              value: function (t, e) {
                                  if (this._draw) this._bordaTemp = t;
                                  else if (
                                      ((this._canvas.lineWidth = t * this._opcoes.retina),
                                      null != this._canvasPrevElem && 1 != this._tipo && (this._canvasPrev.lineWidth = t * this._opcoes.retina),
                                      (this._borda = t),
                                      (this._bordaTemp = t),
                                      e)
                                  ) {
                                      var a = [6, t];
                                      this._des_cod.push(a), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", a);
                                  }
                              },
                          },
                          {
                              key: "mudaAlpha",
                              value: function (t, e) {
                                  if (this._draw) this._alphaTemp = t;
                                  else if (((this._canvas.globalAlpha = t), null != this._canvasPrevElem && 1 != this._tipo && (this._canvasPrev.globalAlpha = t), (this._alpha = t), (this._alphaTemp = t), e)) {
                                      var a = [27, t];
                                      this._des_cod.push(a), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", a);
                                  }
                              },
                          },
                          {
                              key: "mudaCor",
                              value: function (t, e) {
                                  var a,
                                      i = parseInt(t);
                                  if (isNaN(i)) {
                                      if (-1 == t.search(/^x[0-9A-F]{6}$/)) return;
                                      (i = parseInt(t.replace("x", ""), 16)), (a = this._converterCor(i, !0));
                                  } else a = this._cores[i];
                                  if (
                                      ((this._canvas.strokeStyle = a),
                                      null != this._canvasPrevElem && 1 != this._tipo && ((this._canvasPrev.strokeStyle = a), (this._canvasPrev.fillStyle = a)),
                                      1 != this._tipo && (this._canvas.fillStyle = a),
                                      (this._cor = i),
                                      (this._corValor = t),
                                      e)
                                  ) {
                                      var o = [5, t];
                                      this._des_cod.push(o), b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", o);
                                  }
                              },
                          },
                          {
                              key: "limparTela",
                              value: function (t, e) {
                                  if (
                                      ((this._canvas.globalAlpha = 1),
                                      this.transparencia(),
                                      (this._canvas.fillStyle = this._converterCor(this._cor, !0)),
                                      t &&
                                          ((this._des_cod = [
                                              [5, this._converterCor(this._cor, !0).replace("#", "x")],
                                              [6, this._borda],
                                              [27, this._alpha],
                                          ]),
                                          e || b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", [4])),
                                      (this._draw = !1),
                                      t)
                                  ) {
                                      for (var a = 0; a < this._histQuant; a++) this._des_cod_hist[a] = "";
                                      this.salvarEstado(!0);
                                  }
                                  this._canvas.globalAlpha = this._alpha;
                              },
                          },
                          {
                              key: "limparTelaPrev",
                              value: function (t, e, a, n) {
                                  this._canvasPrevElem &&
                                      (void 0 === t
                                          ? ((t = 0), (e = 0), (a = this._canvasLargura), (n = this._canvasAltura))
                                          : ((t *= this._opcoes.retina), (e *= this._opcoes.retina), (a *= this._opcoes.retina), (n *= this._opcoes.retina)),
                                      this._canvasPrev.clearRect(t, e, a, n));
                              },
                          },
                          {
                              key: "transparencia",
                              value: function () {
                                  this._canvas.clearRect(0, 0, this._canvasLargura, this._canvasAltura), this._canvasPrevElem && this._canvasPrev.clearRect(0, 0, this._canvasLargura, this._canvasAltura);
                              },
                          },
                          {
                              key: "desfazer",
                              value: function (t) {
                                  return (
                                      !(!this._opcoes.usoDesfazer || !this._undoQuant) &&
                                      (this._draw && this._endDraw(),
                                      this._opcoes.usoRefazer && this._redoQuant++,
                                      --this._histPos < 0 && (this._histPos = this._histQuant - 1),
                                      this.transparencia(),
                                      (this._canvas.globalAlpha = 1),
                                      this._canvas.drawImage(this._canvasHistElem[this._histPos], 0, 0),
                                      (this._canvas.globalAlpha = this._alpha),
                                      (this._des_cod = this._des_cod_hist[this._histPos].split("|")),
                                      t && b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", [31, 0]),
                                      this.mudaBorda(this._borda, !0),
                                      this.mudaAlpha(this._alpha, !0),
                                      this.mudaCor(this._corValor, !0),
                                      this._undoQuant--,
                                      !0)
                                  );
                              },
                          },
                          {
                              key: "refazer",
                              value: function (t) {
                                  return (
                                      !(!this._opcoes.usoRefazer || !this._redoQuant) &&
                                      (this._draw && this._endDraw(),
                                      this._opcoes.usoDesfazer && this._undoQuant++,
                                      (this._histPos = (this._histPos + 1) % this._histQuant),
                                      this._baseDiferente
                                          ? this.transparencia()
                                          : (this.transparencia(), (this._canvas.globalAlpha = 1), this._canvas.drawImage(this._canvasHistElem[this._histPos], 0, 0), (this._canvas.globalAlpha = this._alpha)),
                                      (this._des_cod = this._des_cod_hist[this._histPos].split("|")),
                                      t && b(Object(u.a)(n.prototype), "emit", this).call(this, "codigo", [31, 1]),
                                      this.mudaBorda(this._borda, !0),
                                      this.mudaAlpha(this._alpha, !0),
                                      this.mudaCor(this._corValor, !0),
                                      this._redoQuant--,
                                      !0)
                                  );
                              },
                          },
                          {
                              key: "salvarEstado",
                              value: function (t) {
                                  this._opcoes.usoDesfazer &&
                                      (t ? ((this._histPos = 0), (this._undoQuant = 0)) : (this._histPos = (this._histPos + 1) % this._histQuant),
                                      (this._redoQuant = 0),
                                      this._canvasHist[this._histPos].clearRect(0, 0, this._canvasLargura, this._canvasAltura),
                                      this._canvasHist[this._histPos].drawImage(this._canvasElem, 0, 0),
                                      (this._histCamada[this._histPos] = this._camada),
                                      (this._des_cod_hist[this._histPos] = this._des_cod.join("|")),
                                      !t && ++this._undoQuant > this._opcoes.usoDesfazer && (this._undoQuant = this._opcoes.usoDesfazer));
                              },
                          },
                          {
                              key: "_converterCor",
                              value: function (t, e) {
                                  for (var a = t.toString(16).toUpperCase(); a.length < 6; ) a = "0" + a;
                                  return e ? "#" + a : "x" + a;
                              },
                          },
                          {
                              key: "getPixel",
                              value: function (t, e) {
                                  var a = this._local[0].getImageData(t * this._opcoes.retina, e * this._opcoes.retina, 1, 1).data,
                                      n = a[3] / 255;
                                  return { r: Math.ceil(a[0] * n + 255 * (1 - n)), g: Math.ceil(a[1] * n + 255 * (1 - n)), b: Math.ceil(a[2] * n + 255 * (1 - n)) };
                              },
                          },
                          {
                              key: "salvar",
                              value: function (t) {
                                  return !!this._canvasElem.toDataURL && this._canvasElem.toDataURL(t);
                              },
                          },
                          {
                              key: "comprimir",
                              value: function () {
                                  for (var t, e = -1, a = 0; a < this._des_cod.length; a++) e != (t = parseInt(this._des_cod[a])) || (5 != t && 6 != t && 27 != t) ? (e = t) : (this._des_cod.splice(a - 1, 1), a--);
                              },
                          },
                          {
                              key: "hasCanvasPrev",
                              value: function () {
                                  return !!this._canvasPrevElem;
                              },
                          },
                          {
                              key: "liberar",
                              value: function (t) {
                                  t != this._liberado && ((this._liberado = t), this._eventElem && (this._eventElem.style.cursor = t ? "crosshair" : "default"));
                              },
                          },
                          {
                              key: "remover",
                              value: function () {
                                  for (var t = 0; t < this._canvasElemsArr.length; t++) this._elemBase.removeChild(this._canvasElemsArr[t]);
                                  this._canvasPrevElem && this._elemBase.removeChild(this._canvasPrevElem),
                                      this._eventTouchStart &&
                                          (this._eventElem.removeEventListener("touchstart", this._eventTouchStart, !1),
                                          this._eventElem.removeEventListener("touchmove", this._eventTouchMove, !1),
                                          this._eventElem.removeEventListener("touchend", this._eventTouchEnd, !1),
                                          this._eventElem.removeEventListener("touchcancel", this._eventTouchEnd, !1)),
                                      this._eventMouseDown &&
                                          (this._eventElem.removeEventListener("mousedown", this._eventMouseDown, !1),
                                          document.removeEventListener("mousemove", this._eventMouseMove, !1),
                                          document.removeEventListener("mouseup", this._eventMouseUp, !1));
                              },
                          },
                          {
                              key: "sequencia",
                              get: function () {
                                  return this._des_cod.join("|");
                              },
                              set: function (t) {
                                  this._des_cod = t.split("|");
                              },
                          },
                          {
                              key: "zoom",
                              get: function () {
                                  return this._zoomOrig;
                              },
                              set: function (t) {
                                  (this._canvasElem.style.width = Math.round(this._opcoes.larguraIni * t * this._fator) + "px"),
                                      (this._canvasElem.style.height = Math.round(this._opcoes.alturaIni * t * this._fator) + "px"),
                                      this._canvasPrevElem &&
                                          ((this._canvasPrevElem.style.width = Math.round(this._opcoes.larguraIni * t * this._fator) + "px"),
                                          (this._canvasPrevElem.style.height = Math.round(this._opcoes.alturaIni * t * this._fator) + "px")),
                                      (this._zoomOrig = t),
                                      (this._zoom = t);
                              },
                          },
                          {
                              key: "liberado",
                              get: function () {
                                  return this._liberado;
                              },
                          },
                          {
                              key: "opcao",
                              get: function () {
                                  return this._tipo;
                              },
                          },
                          {
                              key: "cor",
                              get: function () {
                                  return this._converterCor(this._cor, !1);
                              },
                          },
                          {
                              key: "corReal",
                              get: function () {
                                  return this._converterCor(this._cor, !0);
                              },
                          },
                          {
                              key: "corValor",
                              get: function () {
                                  return this._corValor;
                              },
                          },
                          {
                              key: "borda",
                              get: function () {
                                  return this._bordaTemp;
                              },
                          },
                          {
                              key: "alpha",
                              get: function () {
                                  return this._alphaTemp;
                              },
                          },
                          {
                              key: "largura",
                              get: function () {
                                  return this._canvasLargura;
                              },
                          },
                          {
                              key: "undoQuant",
                              get: function () {
                                  return this._undoQuant;
                              },
                          },
                          {
                              key: "redoQuant",
                              get: function () {
                                  return this._redoQuant;
                              },
                          },
                          {
                              key: "altura",
                              get: function () {
                                  return this._canvasAltura;
                              },
                          },
                          {
                              key: "canvas",
                              get: function () {
                                  return this._canvasElem;
                              },
                          },
                          {
                              key: "canvasPrev",
                              get: function () {
                                  return this._canvasPrevElem;
                              },
                          },
                          {
                              key: "ultimaAcao",
                              get: function () {
                                  return this._des_cod.length > 0 ? this._des_cod[this._des_cod.length - 1] : null;
                              },
                          },
                          {
                              key: "codigoQuebra",
                              set: function (t) {
                                  this._codigoQuebra = t;
                              },
                          },
                          {
                              key: "zoomTela",
                              set: function (t) {
                                  this._zoomTela = t;
                              },
                          },
                          {
                              key: "zoomPos",
                              set: function (t) {
                                  this._zoomPos = t;
                              },
                          },
                          {
                              key: "fator",
                              set: function (t) {
                                  (this._fator = t), this.setZoom(this._zoom);
                              },
                          },
                      ]),
                      n
                  );
              })(k.a),
              D = new ((function () {
                  function t() {
                      Object(s.a)(this, t), (this._baseURL = ""), (this._active = "undefined" !== typeof localStorage && !localStorage.getItem("soundOff")), (this._cache = {}), (this._list = {}), this._audioTag, this._extension;
                      try {
                          new Audio().canPlayType("audio/mpeg") && (this._extension = ".mp3"), (this._audioTag = !0);
                      } catch (e) {
                          (this._audioTag = !1), (this._active = !1);
                      }
                  }
                  return (
                      Object(r.a)(t, [
                          {
                              key: "_pauseAll",
                              value: function () {
                                  for (var t in this._list) this._list[t] && this.pause(t);
                              },
                          },
                          {
                              key: "activate",
                              value: function (t) {
                                  if (t) {
                                      if (this._audioTag) {
                                          this._active = !0;
                                          var e,
                                              a = [];
                                          for (e in this._list) this._list[e] && a.push(e);
                                          this._pauseAll();
                                          for (var n = 0; n < a.length; n++) this.play(a[n], !1, !0);
                                      }
                                      localStorage.removeItem("soundOff");
                                  } else this._pauseAll(), (this._active = !1), localStorage.setItem("soundOff", "1");
                              },
                          },
                          {
                              key: "load",
                              value: function (t) {
                                  if (this._audioTag)
                                      for (var e in t) {
                                          var a = t[e];
                                          if (!this._cache[a]) {
                                              var n = new Audio();
                                              (n.src = this._baseURL + a + this._extension), n.load(), (this._cache[a] = n);
                                          }
                                      }
                              },
                          },
                          {
                              key: "pause",
                              value: function (t) {
                                  var e = this._cache[t];
                                  e && (e.pause(), (this._list[t] = !1));
                              },
                          },
                          {
                              key: "play",
                              value: function (t) {
                                  var e = this,
                                      a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                      i = this._cache[t];
                                  if (i && this._active) {
                                      (i.currentTime = 0),
                                          (i.loop = a),
                                          (i.volume = n),
                                          (this._list[t] = !0),
                                          i.setAttribute("som", t),
                                          (i.onpause = function () {
                                              o(this.getAttribute("som"));
                                          });
                                      var o = function (t) {
                                          e._list[t] = !1;
                                      };
                                      i.play();
                                  }
                              },
                          },
                          {
                              key: "active",
                              get: function () {
                                  return this._active;
                              },
                          },
                          {
                              key: "baseURL",
                              set: function (t) {
                                  this._baseURL = t;
                              },
                          },
                      ]),
                      t
                  );
              })())(),
              L = a("TSYQ"),
              M = a.n(L),
              z = a("rFDI"),
              U = a("RnYt"),
              V = (a("imBb"), a("r3VO")),
              F = _.a.createElement;
          function W() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var G = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (W()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "sound", function () {
                              D.activate(!D.active), e.setState({ sound: D.active });
                          }),
                          Object(f.a)(Object(c.a)(e), "exit", function () {
                              var t = e.props,
                                  a = t.setPopup,
                                  n = t.game;
                              a(z.a.CONFIRM, {
                                  title: e._lang.exit,
                                  text: e._lang.exitGame,
                                  lottie: "exit",
                                  cb: function () {
                                      n.exit(), a(z.a.LOADING);
                                  },
                              });
                          }),
                          Object(f.a)(Object(c.a)(e), "info", function () {
                              var t = e.props,
                                  a = t.setPopup,
                                  n = t.data,
                                  i = t.game,
                                  o = t.lang;
                              a(z.a.INFO, { goal: i.goal, photo: i.photo, subject: o.subjects[i.subject], language: Object(U.a)(n.languages, i.language) });
                          }),
                          Object(f.a)(Object(c.a)(e), "share", function () {
                              e.props.setPopup(z.a.SHARE, e.props.data);
                          }),
                          (e.state = { sound: D.active }),
                          (e._lang = t.lang.roomHeader),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state || t.size != this.props.size;
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var t = this,
                                      e = this.props.game;
                                  return F(
                                      "div",
                                      null,
                                      F(
                                          "div",
                                          null,
                                          F(
                                              "button",
                                              {
                                                  id: "sounds",
                                                  className: M()({ off: !this.state.sound }),
                                                  onClick: function () {
                                                      return t.sound();
                                                  },
                                              },
                                              F("span", { className: "tooltip" }, this._lang.sound)
                                          ),
                                          e.created && F("button", { id: "share", onClick: this.share }, F("span", { className: "tooltip" }, this._lang.shareStream))
                                      ),
                                      F(
                                          "div",
                                          null,
                                          F("button", { id: "info", onClick: this.info }, F("span", { className: "tooltip" }, this._lang.info)),
                                          F("button", { id: "exit", onClick: this.exit }, F("span", { className: "tooltip" }, this._lang.exit))
                                      )
                                  );
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              B = Object(V.a)(G),
              H = a("wx14"),
              q = a("ynsN"),
              Y = _.a.createElement;
          function K() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Q = function (t) {
                  return (function (e) {
                      Object(h.a)(i, e);
                      var a,
                          n =
                              ((a = i),
                              function () {
                                  var t,
                                      e = Object(u.a)(a);
                                  if (K()) {
                                      var n = Object(u.a)(this).constructor;
                                      t = Reflect.construct(e, arguments, n);
                                  } else t = e.apply(this, arguments);
                                  return Object(l.a)(this, t);
                              });
                      function i() {
                          return Object(s.a)(this, i), n.apply(this, arguments);
                      }
                      return (
                          Object(r.a)(i, [
                              {
                                  key: "render",
                                  value: function () {
                                      var e = this;
                                      return Y(q.a.Consumer, null, function (a) {
                                          var n = a.setPopup;
                                          return Y(t, Object(H.a)({}, e.props, { setPopup: n }));
                                      });
                                  },
                              },
                          ]),
                          i
                      );
                  })(_.a.Component);
              },
              J = a("Hvvf"),
              X = a("5cDc"),
              $ = a("i2FJ"),
              Z = _.a.createElement;
          function tt(t, e) {
              var a = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                      (n = n.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      a.push.apply(a, n);
              }
              return a;
          }
          function et(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var a = null != arguments[e] ? arguments[e] : {};
                  e % 2
                      ? tt(Object(a), !0).forEach(function (e) {
                            Object(f.a)(t, e, a[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                      : tt(Object(a)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                        });
              }
              return t;
          }
          function at() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var nt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (at()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "setUser", function (t, e, a) {
                              var n = (t = t.slice()).find(function (t) {
                                  return t.id == e.id;
                              });
                              return n && Object.assign(n, a), t;
                          }),
                          (e.state = { list: [], limit: 10 }),
                          (e._game = e.props.game),
                          (e._pointId = 0),
                          (e._lang = t.lang.users),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state || t.size != this.props.size;
                              },
                          },
                          {
                              key: "events",
                              value: function () {
                                  var t = this,
                                      e = this.props.game,
                                      a = this.setUser,
                                      n = function (e) {
                                          return t.setState(e);
                                      };
                                  e.on("iniciado", function (t) {
                                      var a = e.limit;
                                      n({
                                          list: t.map(function (t) {
                                              return et({}, t, { pontosRodada: 0 });
                                          }),
                                          limit: a,
                                      });
                                  }),
                                      e.on("fimHistorico", function () {
                                          e.viewer ||
                                              n(function (t) {
                                                  return { list: a(t.list, e.me, { voce: !0 }) };
                                              });
                                      }),
                                      e.on("entrada", function (t) {
                                          n(function (e) {
                                              return { list: [].concat(Object(o.a)(e.list), [et({}, t)]) };
                                          });
                                      }),
                                      e.on("saida", function (t) {
                                          n(function (e) {
                                              return {
                                                  list: e.list.filter(function (e) {
                                                      return e.id != t.id;
                                                  }),
                                              };
                                          });
                                      }),
                                      e.on("acerto", function (t, i, o) {
                                          n(function (t) {
                                              var n = t.list;
                                              return (n = a(n, e.me, { pontos: e.me.pontos, pontosRodada: i, acertou: !0 })), { list: (n = a(n, e.userTurn, { pontos: e.userTurn.pontos, pontosRodada: o })) };
                                          });
                                      }),
                                      e.on("acertoOutro", function (t, i, o) {
                                          n(function (n) {
                                              var s = n.list;
                                              return (s = a(s, t, { pontos: t.pontos, pontosRodada: i, acertou: !0 })), { list: (s = a(s, e.userTurn, { pontos: e.userTurn.pontos, pontosRodada: o })) };
                                          });
                                      }),
                                      e.on("vez", function () {
                                          n(function (t) {
                                              var n = t.list.map(function (t) {
                                                  return et({}, t, { pontosRodada: 0, proximo: null });
                                              });
                                              return { list: (n = a(n, e.me, { desenhando: !0 })) };
                                          });
                                      }),
                                      e.on("vezOutro", function (t) {
                                          n(function (e) {
                                              var n = e.list.map(function (t) {
                                                  return et({}, t, { pontosRodada: 0, proximo: null });
                                              });
                                              return { list: (n = a(n, t, { desenhando: !0 })) };
                                          });
                                      }),
                                      e.on("cancelar", function () {
                                          n(function (t) {
                                              return {
                                                  list: t.list.map(function (t) {
                                                      return et({}, t, { pontos: t.pontos - t.pontosRodada, pontosRodada: -t.pontosRodada });
                                                  }),
                                              };
                                          });
                                      }),
                                      e.on("fimRodada", function () {
                                          n(function (t) {
                                              return {
                                                  list: t.list.map(function (t) {
                                                      return et({}, t, { acertou: !1, desenhando: !1 });
                                                  }),
                                              };
                                          });
                                      }),
                                      e.on("proximos", function (t) {
                                          n(function (e) {
                                              var n = e.list.slice();
                                              return (
                                                  t.forEach(function (t, e) {
                                                      n = a(n, t, { proximo: e });
                                                  }),
                                                  { list: n }
                                              );
                                          });
                                      }),
                                      e.on("fimJogo", function (e) {
                                          n(function (a) {
                                              var n = t.order(a.list);
                                              return {
                                                  list: a.list.map(function (t) {
                                                      return t.id != e[0].id
                                                          ? et({}, t, {
                                                                pontos: 0,
                                                                entrada:
                                                                    n.findIndex(function (e) {
                                                                        return e.id == t.id;
                                                                    }) + 1,
                                                            })
                                                          : et({}, t, {
                                                                pontos: 0,
                                                                entrada:
                                                                    n.findIndex(function (e) {
                                                                        return e.id == t.id;
                                                                    }) + 1,
                                                                vitorias: t.vitorias + 1,
                                                            });
                                                  }),
                                              };
                                          });
                                      }),
                                      e.on("aguardando", function (t) {
                                          n(function (t) {
                                              return {
                                                  list: t.list.map(function (t) {
                                                      return et({}, t, { pontos: 0, proximo: null });
                                                  }),
                                              };
                                          });
                                      }),
                                      e.on("votar", function (e, a) {
                                          t.setState(function (n) {
                                              return { list: t.setUser(n.list, e, { votekick: a }) };
                                          });
                                      }),
                                      e.on("ignorar", function (e, a) {
                                          t.setState(function (n) {
                                              return { list: t.setUser(n.list, e, { ignorado: a }) };
                                          });
                                      });
                              },
                          },
                          {
                              key: "order",
                              value: function (t) {
                                  var e = t.slice();
                                  return (
                                      e.sort(function (t, e) {
                                          return t.pontos != e.pontos ? e.pontos - t.pontos : t.entrada - e.entrada;
                                      }),
                                      e
                                  );
                              },
                          },
                          {
                              key: "profile",
                              value: function (t) {
                                  var e = this.props.setPopup,
                                      a = this._game;
                                  e(z.a.PROFILE, { user: t, game: a });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var t = this,
                                      e = this.props,
                                      a = e.size,
                                      n = e.game,
                                      i = this.state,
                                      o = i.list,
                                      s = i.limit;
                                  a = [95, 70, 79, 95, 51][a];
                                  for (var r = [], c = 0; c < s; c++) r.push(Z("li", { key: "limit" + c }));
                                  for (var l = [], u = o.length; u < s; u++)
                                      l.push(
                                          Z(
                                              "div",
                                              { className: "user empty", style: { transform: "translate3d(0, " + a * u + "px, 0)" }, key: "empty" + u },
                                              Z("div", { className: "avatar" }),
                                              Z("div", { className: "infosPlayer" }, Z("span", { className: "nick" }, this._lang.empty))
                                          )
                                      );
                                  var h = this.order(o);
                                  return Z(
                                      "div",
                                      { id: "users" },
                                      Z(
                                          X.a,
                                          null,
                                          Z("ul", null, r),
                                          o.map(function (e, i) {
                                              var s = h.findIndex(function (t) {
                                                      return t.id == e.id;
                                                  }),
                                                  r = t._lang.pts.split("###");
                                              return Z(
                                                  "div",
                                                  {
                                                      className: M()("user", { first: 0 === s, second: 1 === s && o.length >= 3, third: 2 === s && o.length >= 3, you: e.voce, hit: e.acertou, turn: e.desenhando }),
                                                      style: { transform: "translate3d(0, " + a * s + "px, 0)" },
                                                      onClick: function () {
                                                          return !n.viewer && t.profile(e);
                                                      },
                                                      key: e.id,
                                                  },
                                                  Z($.a, { type: e.avatar, url: e.foto }, e.ignorado && Z("span", { className: "ignored" }), e.vitorias > 0 && Z("span", { className: "win" }, e.vitorias <= 9 ? e.vitorias : "9+")),
                                                  Z(
                                                      "div",
                                                      { className: "infosPlayer" },
                                                      Z("span", { className: "nick" }, e.nick),
                                                      Z("span", { className: "points" }, r[0].length > 0 && Z("i", null, r[0]), e.pontos, r[1].length > 0 && Z("i", null, r[1])),
                                                      Z(
                                                          "div",
                                                          { className: "nextDrawOwner" },
                                                          null != e.proximo
                                                              ? Z("span", { className: "nextDraw" }, 0 == e.proximo ? t._lang.nextDraw : t._lang[e.proximo + "turn"])
                                                              : e.dono && Z("span", { className: "owner" }, t._lang.host)
                                                      )
                                                  ),
                                                  0 != e.pontosRodada &&
                                                      (e.pontosRodada > 0
                                                          ? Z("div", { className: "pointsTurn", key: e.id + "point" + e.pontosRodada }, "+", e.pontosRodada)
                                                          : Z("div", { className: "pointsTurn removePts", key: e.id + "point" + e.pontosRodada }, e.pontosRodada))
                                              );
                                          }),
                                          l
                                      )
                                  );
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              it = Q(Object(J.a)(nt)),
              ot = _.a.createElement;
          function st() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var rt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (st()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "clean", function () {
                              var t = e.props.setPopup;
                              t(z.a.CONFIRM_GAME, {
                                  title: e._lang.clean,
                                  text: e._lang.cleanDrawing,
                                  icon: "iconClean",
                                  cb: function () {
                                      t(null), e._drawing.limparTela(!0), e.setState({ undo: !1, redo: !1, toolsMobile: !1 });
                                  },
                              });
                          }),
                          Object(f.a)(Object(c.a)(e), "undo", function () {
                              e._game.undo(), e.setState({ toolsMobile: !1 });
                          }),
                          Object(f.a)(Object(c.a)(e), "redo", function () {
                              e._game.redo(), e.setState({ toolsMobile: !1 });
                          }),
                          Object(f.a)(Object(c.a)(e), "handleColor", function (t) {
                              var a = t.target.value;
                              e.selectColor(a);
                          }),
                          Object(f.a)(Object(c.a)(e), "handleSize", function (t) {
                              var a = t.target.value;
                              e._drawing.mudaBorda(a, !0), e.setState({ size: a });
                          }),
                          Object(f.a)(Object(c.a)(e), "handleOpacity", function (t) {
                              var a = t.target.value;
                              e._drawing.mudaAlpha(a, !0), e.setState({ opacity: a });
                          }),
                          Object(f.a)(Object(c.a)(e), "openToolsMobile", function () {
                              e.setState(function (t) {
                                  return t.toolsMobile ? { toolsMobile: !1 } : { toolsMobile: !0, opacityMobile: !1 };
                              });
                          }),
                          Object(f.a)(Object(c.a)(e), "openOpacityMobile", function () {
                              e.setState(function (t) {
                                  return t.opacityMobile ? { opacityMobile: !1 } : { opacityMobile: !0, toolsMobile: !1 };
                              });
                          }),
                          Object(f.a)(Object(c.a)(e), "skipMobile", function () {
                              var t = e.state,
                                  a = t.turn,
                                  n = t.hit;
                              if ((e.setState({ opacityMobile: !1, toolsMobile: !1 }), a && !n)) {
                                  var i = e.props,
                                      o = i.setPopup,
                                      s = i.game;
                                  o(z.a.CONFIRM_GAME, {
                                      title: e._lang.skip,
                                      text: e._lang.skipTurn,
                                      lottie: "skipped",
                                      cb: function () {
                                          o(null), s.skip();
                                      },
                                  });
                              }
                          }),
                          Object(f.a)(Object(c.a)(e), "hint", function () {
                              var t = e.state,
                                  a = t.turn,
                                  n = t.hit,
                                  i = t.hintNum;
                              e.setState({ opacityMobile: !1, toolsMobile: !1 }), a && !n && i && e.props.game.hint();
                          }),
                          (e.state = { tool: 0, color: "#000000", opacity: 1, size: 4, undo: !1, redo: !1, toolsMobile: !1, opacityMobile: !1, turn: !0, hintNum: 0, hit: !1 }),
                          (e._game = e.props.game),
                          (e._drawing = {}),
                          (e._lang = t.lang.tools),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state;
                              },
                          },
                          {
                              key: "events",
                              value: function () {
                                  var t = this,
                                      e = this.props.game;
                                  e.on("iniciado", function () {
                                      (t._drawing = e.drawing),
                                          t._drawing.on("selCor", function () {
                                              e.turn && t.selectColor(t._drawing.corReal);
                                          }),
                                          t._drawing.on("startDraw", function () {
                                              t.setState({ opacityMobile: !1, toolsMobile: !1 });
                                          }),
                                          t._drawing.on("endDraw", function () {
                                              t.setState({ undo: !!t._drawing.undoQuant, redo: !!t._drawing.redoQuant });
                                          });
                                  }),
                                      e.on("vez", function () {
                                          t.setState({ tool: 0, color: "#000000", opacity: 1, size: 4, undo: !1, redo: !1, hit: !1 });
                                      }),
                                      e.on("inicioVez", function (e, a) {
                                          t.setState({ hintNum: a });
                                      }),
                                      e.on("dica", function (e, a) {
                                          t.setState({ hintNum: a });
                                      }),
                                      e.on("primeiroAcerto", function () {
                                          e.turn && t.setState({ hit: !0 });
                                      }),
                                      e.on("undo", function () {
                                          t.setState({ undo: !1, redo: !0 });
                                      }),
                                      e.on("redo", function () {
                                          t.setState({ undo: !0, redo: !1 });
                                      });
                              },
                          },
                          {
                              key: "selectTool",
                              value: function (t) {
                                  this._drawing.mudaOpcao(t, !0), this.setState({ tool: t, toolsMobile: !1 });
                              },
                          },
                          {
                              key: "selectColor",
                              value: function (t) {
                                  this._drawing.mudaCor(t.toUpperCase().replace("#", "x"), !0), this.setState({ color: t, toolsMobile: !1, opacityMobile: !1 });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var t,
                                      e,
                                      a = this,
                                      n = this.state,
                                      i = n.tool,
                                      o = n.color,
                                      s = n.size,
                                      r = n.opacity,
                                      c = n.undo,
                                      l = n.redo,
                                      u = n.toolsMobile,
                                      h = n.hit,
                                      d = n.hintNum,
                                      _ = n.opacityMobile;
                                  !h && d && (t = ot("button", { className: "hint", onClick: this.hint }, ot("span", null, d))), h || (e = ot("button", { className: "skip", onClick: this.skipMobile }));
                                  return ot(
                                      "div",
                                      { id: "tools", className: M()({ rmOne: !d, rmTwo: h }) },
                                      ot(
                                          "div",
                                          null,
                                          ot(
                                              "div",
                                              { className: "buttonsMobile" },
                                              ot("button", {
                                                  className: "op" + i,
                                                  onClick: function () {
                                                      return a.openToolsMobile();
                                                  },
                                              }),
                                              ot("button", {
                                                  className: "opacity",
                                                  onClick: function () {
                                                      return a.openOpacityMobile();
                                                  },
                                              }),
                                              t,
                                              e
                                          ),
                                          ot(
                                              "ul",
                                              { className: M()({ active: u }) },
                                              [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (t) {
                                                  return ot("li", {
                                                      id: "op" + t,
                                                      className: M()("tool", { active: t == i }),
                                                      onClick: function () {
                                                          return a.selectTool(t);
                                                      },
                                                      key: "tool" + t,
                                                  });
                                              }),
                                              ot("li", { id: "clean", className: "tool", onClick: this.clean }),
                                              ot("li", Object(f.a)({ id: "undo", className: "tool", onClick: this.undo }, "className", M()({ inactive: !c }))),
                                              ot("li", Object(f.a)({ id: "repeat", className: "tool", onClick: this.redo }, "className", M()({ inactive: !l })))
                                          ),
                                          ot(
                                              "div",
                                              { className: "colors" },
                                              ot(
                                                  "div",
                                                  null,
                                                  [
                                                      "#000000",
                                                      "#666666",
                                                      "#0017f6",
                                                      "#ffffff",
                                                      "#aaaaaa",
                                                      "#26c9ff",
                                                      "#008d26",
                                                      "#a9230c",
                                                      "#964112",
                                                      "#00ff4d",
                                                      "#ff0013",
                                                      "#ff7829",
                                                      "#b0701c",
                                                      "#99004e",
                                                      "#936867",
                                                      "#ffc926",
                                                      "#ff008f",
                                                      "#feafa8",
                                                      "#00d9a3",
                                                      "#85b200",
                                                      "#8000ff",
                                                      "#052c6c",
                                                      "#b973ff",
                                                      "#fff73f",
                                                  ].map(function (t) {
                                                      return ot("div", {
                                                          className: M()("color", { active: t == o }),
                                                          style: { backgroundColor: t },
                                                          onClick: function () {
                                                              return a.selectColor(t);
                                                          },
                                                          key: "color" + t,
                                                      });
                                                  })
                                              ),
                                              ot(
                                                  "div",
                                                  null,
                                                  ot("div", { id: "colorSelected", style: { backgroundColor: o } }),
                                                  ot("label", { id: "colorsRange", htmlFor: "colorRangeInput" }, ot("input", { id: "colorRangeInput", type: "color", name: "color", value: o, onChange: this.handleColor }))
                                              )
                                          ),
                                          ot(
                                              "div",
                                              { className: M()("opacity-size", { active: _ }) },
                                              ot("div", { className: "size" }, ot("input", { name: "size", type: "range", min: "1", max: "50", step: "1", value: s, onChange: this.handleSize })),
                                              ot("div", { className: "opacity" }, ot("input", { name: "opacity", type: "range", min: "0.1", max: "1", step: "0.1", value: r, onChange: this.handleOpacity }))
                                          )
                                      )
                                  );
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              ct = Q(Object(J.a)(rt));
          function lt(t, e) {
              var a = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                      (n = n.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      a.push.apply(a, n);
              }
              return a;
          }
          function ut(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var a = null != arguments[e] ? arguments[e] : {};
                  e % 2
                      ? lt(Object(a), !0).forEach(function (e) {
                            Object(f.a)(t, e, a[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                      : lt(Object(a)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                        });
              }
              return t;
          }
          function ht() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var ft = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (ht()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t) {
                  var e;
                  return (
                      Object(s.a)(this, n),
                      (e = a.call(this, t)),
                      Object(f.a)(Object(c.a)(e), "message", function (t) {
                          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              i = arguments.length > 2 ? arguments[2] : void 0,
                              s = ut({ id: ++e._id, type: t }, a);
                          e.setState(function (t) {
                              var e;
                              return (
                                  (e = [].concat(
                                      i
                                          ? Object(o.a)(
                                                t.history.filter(function (t) {
                                                    return t.type != n.SENDING;
                                                })
                                            )
                                          : Object(o.a)(t.history),
                                      [s]
                                  )).length > 30 && e.shift(),
                                  { history: e }
                              );
                          });
                      }),
                      Object(f.a)(Object(c.a)(e), "handleText", function (t) {
                          var a = t.target.value;
                          e.setState({ text: a });
                      }),
                      Object(f.a)(Object(c.a)(e), "focus", function () {
                          e._game.viewer || e._ref.current.focus();
                      }),
                      (e._game = e.props.game),
                      (e._time = 0),
                      (e._id = 0),
                      (e._ref = _.a.createRef()),
                      t.getElem && t.getElem(Object(c.a)(e)),
                      e
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "shouldComponentUpdate",
                          value: function (t, e) {
                              return e !== this.state || t.size != this.props.size || t.openChat != this.props.openChat;
                          },
                      },
                      {
                          key: "focused",
                          get: function () {
                              return document.activeElement === this._ref.current;
                          },
                      },
                      {
                          key: "blocked",
                          get: function () {
                              return this._ref.current.disabled;
                          },
                      },
                  ]),
                  n
              );
          })(_.a.Component);
          Object(f.a)(ft, "SENDING", 2);
          var dt = ft,
              _t = _.a.createElement;
          function pt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var vt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (pt()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "open", function () {
                              var t = e.props,
                                  a = t.setPopup,
                                  n = t.game,
                                  i = t.data;
                              if (!n.viewer) {
                                  var o = n.users.find(function (t) {
                                      return t.id == i.id;
                                  });
                                  o ? a(z.a.PROFILE, { user: o, game: n }) : a(z.a.ALERT, { title: e._lang.profile, text: e._lang.userOut, icon: "iconSameNickname" });
                              }
                          }),
                          (e._lang = t.lang.user),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function () {
                                  return !1;
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  return _t("strong", { style: { cursor: "pointer" }, onClick: this.open }, this.props.data.nick);
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              mt = Q(Object(J.a)(vt)),
              yt = a("lPHp"),
              gt = a.n(yt),
              bt = _.a.createElement;
          function Ot() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var kt = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (Ot()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t) {
                  var e;
                  return (
                      Object(s.a)(this, n),
                      (e = a.call(this, t)),
                      Object(f.a)(Object(c.a)(e), "send", function (t) {
                          if ((t.preventDefault(), Date.now() - e._time > 500)) {
                              var a = e.state.text.trim();
                              if (a.length) {
                                  var i = e.props.game;
                                  e.message(n.SENDING, { user: i.me, msg: a }),
                                      i.answer(a),
                                      (e._time = Date.now()),
                                      e.setState(function (t) {
                                          return { text: "", update: t.update + 1 };
                                      });
                              }
                          }
                      }),
                      (e._lang = t.lang.answers),
                      (e.state = { history: [], text: "", textBloq: e._lang.waiting, hit: !1, update: 0 }),
                      (e._lottieRef = _.a.createRef()),
                      e.events(),
                      e
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "componentDidUpdate",
                          value: function (t, e) {
                              if (!e.hit && this.state.hit) this._lottie && this._lottie.goToAndPlay(0);
                              else if (t.size != this.props.size && !this.props.game.viewer) {
                                  this._lottie && this._lottie.destroy();
                                  var a = [null, "hitSmall", "hitMedium", "hitBig", null][this.props.size];
                                  this._lottie = a ? gt.a.loadAnimation({ container: this._lottieRef.current, renderer: "svg", loop: !1, autoplay: !1, path: "/static/lottie/".concat(a, ".json") }) : null;
                              }
                          },
                      },
                      {
                          key: "events",
                          value: function () {
                              var t = this,
                                  e = this._game,
                                  a = this.message;
                              e.on("resposta", function (t, i) {
                                  a(n.ANSWER, { user: i, msg: t }, i == e.me);
                              }),
                                  e.on("perto", function (t) {
                                      a(n.CLOSE, { answer: t }, !0);
                                  }),
                                  e.on("acerto", function (e) {
                                      a(n.YOUR_HIT, { answer: e }, !0), t.setState({ textBloq: t._lang.youGuessed, hit: !0 });
                                  }),
                                  e.on("acertoOutro", function (t) {
                                      a(n.HIT, { user: t });
                                  }),
                                  e.on("todosAcertaram", function (t) {
                                      a(n.EVERYBODY_HIT, { answer: t }, !0);
                                  }),
                                  e.on("denuncia", function (t) {
                                      a(n.REPORT, { user: t });
                                  }),
                                  e.on("vez", function (e) {
                                      a(n.YOUR_TURN, { answer: e }), t.setState({ textBloq: t._lang.yourTurn, hit: !1 });
                                  }),
                                  e.on("vezOutro", function (e) {
                                      a(n.TURN, { user: e }), t.setState({ textBloq: t._lang.waitingDrawing, hit: !1 });
                                  }),
                                  e.on("intervalo", function (t) {
                                      t ? a(n.INTERVAL_ANSWER, { answer: t }) : a(n.INTERVAL);
                                  }),
                                  e.on("fimRodada", function () {
                                      a(n.END_TURN), t.setState({ textBloq: t._lang.interval2, text: "" });
                                  }),
                                  e.on("cancelar", function () {
                                      a(n.CANCEL);
                                  }),
                                  e.on("pular", function () {
                                      e.turn ? a(n.YOUR_SKIP) : a(n.SKIP, { user: e.userTurn });
                                  }),
                                  e.on("fimJogo", function (t, e) {
                                      a(n.GAMEOVER, { user: t[0], points: e });
                                  }),
                                  e.on("inativo", function () {
                                      e.turn ? a(n.YOUR_INACTIVE) : a(n.INACTIVE, { user: e.userTurn });
                                  }),
                                  e.on("aguardando", function () {
                                      a(n.WAITING), t.setState({ textBloq: t._lang.waiting });
                                  }),
                                  e.on("ofensaResposta", function () {
                                      a(n.OFFENSIVE, {}, !0);
                                  }),
                                  e.on("avisoAdmin", function () {
                                      a(n.RULES);
                                  }),
                                  e.on("inicioVez", function () {
                                      e.turn || t.setState({ textBloq: "" });
                                  });
                          },
                      },
                      {
                          key: "content",
                          value: function (t) {
                              var e = t.type,
                                  a = t.id,
                                  i = this._game;
                              switch (e) {
                                  case n.SENDING:
                                      return bt("div", { key: "answer" + a, className: "msg sending" }, bt(mt, { game: i, data: t.user }), " " + t.msg);
                                  case n.SPAM:
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, this._lang.spam);
                                  case n.CLOSE:
                                      var o = this._lang.isClose.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg close" }, o[0], bt("strong", null, t.answer), o[1]);
                                  case n.YOUR_HIT:
                                      var s = this._lang.youFound.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg hit" }, s[0], bt("strong", null, t.answer), s[1]);
                                  case n.HIT:
                                      var r = this._lang.hit.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg hit" }, r[0], bt(mt, { game: i, data: t.user }), r[1]);
                                  case n.EVERYBODY_HIT:
                                      return i.viewer
                                          ? bt("div", { key: "answer" + a, className: "msg hit" }, this._lang.everybodyHit, " (", bt("strong", null, t.answer), ")")
                                          : bt("div", { key: "answer" + a, className: "msg hit" }, this._lang.everybodyHit);
                                  case n.REPORT:
                                      var c = this._lang.reported.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, c[0], bt(mt, { game: i, data: t.user }), c[1]);
                                  case n.YOUR_TURN:
                                      return bt("div", { key: "answer" + a, className: "msg turn" }, this._lang.yourTurnDraw);
                                  case n.TURN:
                                      var l = this._lang.turnOf.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg turn" }, l[0], bt(mt, { game: i, data: t.user }), l[1]);
                                  case n.INTERVAL_ANSWER:
                                      var u = this._lang.answerWas.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg turn" }, u[0], bt("strong", null, t.answer), u[1]);
                                  case n.INTERVAL:
                                      return bt("div", { key: "answer" + a, className: "msg turn" }, this._lang.nobodyHit);
                                  case n.END_TURN:
                                      return bt("div", { key: "answer" + a, className: "msg interval" }, this._lang.interval);
                                  case n.CANCEL:
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, this._lang.canceledTurn);
                                  case n.YOUR_SKIP:
                                      return bt("div", { key: "answer" + a, className: "msg system" }, this._lang.youSkipped);
                                  case n.SKIP:
                                      var h = this._lang.skippedTurn.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg system" }, h[0], bt(mt, { game: i, data: t.user }), h[1]);
                                  case n.GAMEOVER:
                                      var f = this._lang.gameoverWinner.replace("%%%", t.points).split("###");
                                      return bt("div", { key: "answer" + a, className: "msg system" }, f[0], bt(mt, { game: i, data: t.user }), f[1]);
                                  case n.YOUR_INACTIVE:
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, this._lang.youLostTurn);
                                  case n.INACTIVE:
                                      var d = this._lang.lostTurn.split("###");
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, d[0], bt(mt, { game: i, data: t.user }), d[1]);
                                  case n.WAITING:
                                      return bt("div", { key: "answer" + a, className: "msg system" }, this._lang.waitingPlayers);
                                  case n.OFFENSIVE:
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, this._lang.offensiveMessage);
                                  case n.RULES:
                                      return bt("div", { key: "answer" + a, className: "msg alert" }, this._lang.violatingRules);
                                  default:
                                      return bt("div", { key: "answer" + a, className: "msg" }, bt(mt, { game: i, data: t.user }), " " + t.msg);
                              }
                          },
                      },
                      {
                          key: "render",
                          value: function () {
                              var t = this,
                                  e = this.state,
                                  a = e.history,
                                  n = e.text,
                                  i = e.textBloq,
                                  o = e.update,
                                  s = e.hit,
                                  r = this.props.game;
                              return bt(
                                  "div",
                                  { id: "answer", onClick: this.focus },
                                  bt("h5", null, this._lang.answers),
                                  bt(
                                      "div",
                                      { className: "history" },
                                      bt(
                                          X.a,
                                          { margin: 0, autoScroll: !0, moveBottom: o },
                                          a.map(function (e) {
                                              return t.content(e);
                                          })
                                      )
                                  ),
                                  !r.viewer &&
                                      bt(
                                          "form",
                                          { onSubmit: this.send },
                                          bt(
                                              "div",
                                              { className: "textGame" },
                                              bt("input", {
                                                  type: "text",
                                                  name: "answer",
                                                  className: "mousetrap",
                                                  value: i || n,
                                                  placeholder: this._lang.answerHere,
                                                  onChange: this.handleText,
                                                  autoComplete: "off",
                                                  autoCorrect: "off",
                                                  autoCapitalize: "off",
                                                  maxLength: 100,
                                                  disabled: !!i,
                                                  ref: this._ref,
                                              }),
                                              bt("span", null),
                                              !this.props.data.mobile && bt("label", null, "tab", bt("span", { className: "tooltip" }, this._lang.sendText)),
                                              bt("div", { className: "lottieAns", ref: this._lottieRef, style: s ? { display: "block" } : null })
                                          )
                                      )
                              );
                          },
                      },
                  ]),
                  n
              );
          })(dt);
          Object(f.a)(kt, "ANSWER", 1),
              Object(f.a)(kt, "SPAM", 3),
              Object(f.a)(kt, "CLOSE", 4),
              Object(f.a)(kt, "YOUR_HIT", 5),
              Object(f.a)(kt, "HIT", 6),
              Object(f.a)(kt, "EVERYBODY_HIT", 7),
              Object(f.a)(kt, "REPORT", 8),
              Object(f.a)(kt, "YOUR_TURN", 9),
              Object(f.a)(kt, "TURN", 10),
              Object(f.a)(kt, "INTERVAL_ANSWER", 11),
              Object(f.a)(kt, "INTERVAL", 12),
              Object(f.a)(kt, "END_TURN", 13),
              Object(f.a)(kt, "CANCEL", 14),
              Object(f.a)(kt, "YOUR_SKIP", 15),
              Object(f.a)(kt, "SKIP", 16),
              Object(f.a)(kt, "GAMEOVER", 17),
              Object(f.a)(kt, "YOUR_INACTIVE", 18),
              Object(f.a)(kt, "INACTIVE", 19),
              Object(f.a)(kt, "WAITING", 20),
              Object(f.a)(kt, "OFFENSIVE", 21),
              Object(f.a)(kt, "RULES", 22);
          var wt = Object(V.a)(kt),
              jt = _.a.createElement;
          function Rt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Et = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (Rt()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t) {
                  var e;
                  return (
                      Object(s.a)(this, n),
                      (e = a.call(this, t)),
                      Object(f.a)(Object(c.a)(e), "send", function (t) {
                          if ((t.preventDefault(), Date.now() - e._time > 500)) {
                              var a = e.state.text.trim();
                              if (a.length) {
                                  var i = e.props.game;
                                  e.message(n.SENDING, { user: i.me, msg: a }),
                                      i.message(a),
                                      (e._time = Date.now()),
                                      e.setState(function (t) {
                                          return { text: "", update: t.update + 1 };
                                      });
                              }
                          }
                      }),
                      (e.state = { history: [], text: "", update: 0 }),
                      (e._lang = t.lang.chat),
                      e.events(),
                      e
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "events",
                          value: function () {
                              var t = this,
                                  e = this._game,
                                  a = this.message;
                              e.on("chat", function (t, i) {
                                  a(n.MESSAGE, { user: i, msg: t }, i == e.me);
                              }),
                                  e.on("entrada", function (t) {
                                      a(n.JOIN, { user: t });
                                  }),
                                  e.on("saida", function (t) {
                                      a(n.EXIT, { user: t });
                                  }),
                                  e.on("ofensaChat", function () {
                                      a(n.OFFENSIVE, {}, !0);
                                  }),
                                  e.on("respostaChat", function () {
                                      a(n.ANSWER, {}, !0);
                                  }),
                                  e.on("vez", function () {
                                      t.props.close();
                                  }),
                                  e.on("votekick", function (t, i, o) {
                                      var s = Math.ceil((e.users.length + 1) / 3);
                                      s < 2 && (s = 2), a(n.VOTEKICK, { user: t, target: i, quant: o, total: s });
                                  });
                          },
                      },
                      {
                          key: "content",
                          value: function (t) {
                              var e = t.type,
                                  a = t.id,
                                  i = this.props.game;
                              switch (e) {
                                  case n.SENDING:
                                      return jt("div", { key: "chat" + a, className: "msg sending you" }, jt($.a, { user: t.user }), jt("div", null, jt(mt, { game: i, data: t.user }), " ", jt("span", null, t.msg)));
                                  case n.SPAM:
                                      return jt("div", { key: "chat" + a, className: "msg alert" }, this._lang.spam);
                                  case n.OFFENSIVE:
                                      return jt("div", { key: "chat" + a, className: "msg alert" }, this._lang.offensiveMessage);
                                  case n.ANSWER:
                                      return jt("div", { key: "chat" + a, className: "msg alert" }, this._lang.answerChat);
                                  case n.JOIN:
                                      var o = this._lang.joined.split("###");
                                      return jt("div", { key: "chat" + a, className: "msg system" }, o[0], jt(mt, { game: i, data: t.user }), o[1]);
                                  case n.EXIT:
                                      var s = this._lang.left.split("###");
                                      return jt("div", { key: "chat" + a, className: "msg system" }, s[0], jt(mt, { game: i, data: t.user }), s[1]);
                                  case n.VOTEKICK:
                                      var r = this._lang.votingKick.split("###");
                                      return jt("div", { key: "chat" + a, className: "msg alert" }, r[0], jt(mt, { game: i, data: t.user }), r[1], jt(mt, { game: i, data: t.target }), r[2]);
                                  default:
                                      return jt(
                                          "div",
                                          { key: "chat" + a, className: M()("msg", { you: !i.viewer && i.me && t.user.id == i.me.id }) },
                                          jt($.a, { user: t.user }),
                                          jt("div", null, jt(mt, { game: i, data: t.user }), " ", jt("span", null, t.msg))
                                      );
                              }
                          },
                      },
                      {
                          key: "render",
                          value: function () {
                              var t,
                                  e = this,
                                  a = this.state,
                                  n = a.history,
                                  i = a.text,
                                  o = a.update,
                                  s = this.props,
                                  r = s.game,
                                  c = s.logged,
                                  l = s.openChat,
                                  u = s.close;
                              return (
                                  l || (t = this.focus),
                                  jt(
                                      "div",
                                      { id: "chat", className: M()({ active: l }), onClick: t },
                                      jt("button", {
                                          className: "closeChatMobile",
                                          onClick: function () {
                                              return u();
                                          },
                                      }),
                                      jt("h5", null, this._lang.chat),
                                      jt(
                                          "div",
                                          { className: "history" },
                                          jt(
                                              X.a,
                                              { margin: 0, autoScroll: !0, moveBottom: o },
                                              n.map(function (t, a) {
                                                  return e.content(t);
                                              })
                                          )
                                      ),
                                      !r.viewer &&
                                          jt(
                                              "form",
                                              { onSubmit: this.send },
                                              jt(
                                                  "div",
                                                  { className: "textGame" },
                                                  r.created || c
                                                      ? jt("input", {
                                                            type: "text",
                                                            name: "chat",
                                                            className: "mousetrap",
                                                            autoComplete: "off",
                                                            autoCorrect: "off",
                                                            autoCapitalize: "off",
                                                            value: i,
                                                            placeholder: this._lang.chatHere,
                                                            maxLength: 100,
                                                            onChange: this.handleText,
                                                            ref: this._ref,
                                                        })
                                                      : jt("input", {
                                                            type: "text",
                                                            name: "chat",
                                                            className: "mousetrap",
                                                            autoComplete: "off",
                                                            autoCorrect: "off",
                                                            autoCapitalize: "off",
                                                            value: this._lang.loginChat,
                                                            maxLength: 100,
                                                            ref: this._ref,
                                                            disabled: !0,
                                                        }),
                                                  jt("span", null),
                                                  jt("label", null, "tab", jt("span", { className: "tooltip" }, this._lang.sendText))
                                              )
                                          )
                                  )
                              );
                          },
                      },
                  ]),
                  n
              );
          })(dt);
          Object(f.a)(Et, "MESSAGE", 1), Object(f.a)(Et, "SPAM", 3), Object(f.a)(Et, "OFFENSIVE", 4), Object(f.a)(Et, "ANSWER", 5), Object(f.a)(Et, "JOIN", 6), Object(f.a)(Et, "EXIT", 7), Object(f.a)(Et, "VOTEKICK", 8);
          var Nt = Object(V.a)(Et),
              St = _.a.createElement;
          function Ct(t, e) {
              var a = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                      (n = n.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      a.push.apply(a, n);
              }
              return a;
          }
          function At(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var a = null != arguments[e] ? arguments[e] : {};
                  e % 2
                      ? Ct(Object(a), !0).forEach(function (e) {
                            Object(f.a)(t, e, a[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                      : Ct(Object(a)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                        });
              }
              return t;
          }
          function Tt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var It = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (Tt()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t) {
                  var e;
                  return (
                      Object(s.a)(this, n),
                      (e = a.call(this, t)),
                      Object(f.a)(Object(c.a)(e), "send", function () {
                          e._game.reportWord(e.state.selectedOption), e.notice(n.SKIP, { reported: !0 });
                      }),
                      Object(f.a)(Object(c.a)(e), "handleType", function (t) {
                          e.setState({ selectedOption: t.target.value });
                      }),
                      Object(f.a)(Object(c.a)(e), "handleWord", function (t) {
                          var a = t.target.value;
                          e.setState({ correctWord: a });
                      }),
                      Object(f.a)(Object(c.a)(e), "notice", function (t, a) {
                          e.setState({ data: At({ type: t }, a) });
                      }),
                      Object(f.a)(Object(c.a)(e), "draw", function (t) {
                          e._game.draw(t);
                      }),
                      Object(f.a)(Object(c.a)(e), "skip", function () {
                          e._game.skip();
                      }),
                      Object(f.a)(Object(c.a)(e), "start", function () {
                          e._game.start();
                      }),
                      Object(f.a)(Object(c.a)(e), "resize", function () {
                          e.props.data.mobile && e.setState({ sizeMobile: window.innerHeight + "px" });
                      }),
                      (e.state = { selectedOption: 1, correctWord: "", sizeMobile: t.data.mobile ? window.innerHeight + "px" : null, data: { type: n.WAITING } }),
                      (e._game = e.props.game),
                      (e._skipRef = _.a.createRef()),
                      (e._waitingRef = _.a.createRef()),
                      (e._waitingOwnerRef = _.a.createRef()),
                      (e._cancelRef = _.a.createRef()),
                      (e._intervalRef = _.a.createRef()),
                      (e._intervalAnsRef = _.a.createRef()),
                      (e._inactiveRef = _.a.createRef()),
                      (e._inactiveUserRef = _.a.createRef()),
                      (e._masterpieceRef = _.a.createRef()),
                      (e._yourTurnRef = _.a.createRef()),
                      (e._hitRef = _.a.createRef()),
                      (e._lang = t.lang.notices),
                      e.events(),
                      e
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "shouldComponentUpdate",
                          value: function (t, e) {
                              return e.data.type !== this.state.data.type ? (this._lottie && (this._lottie.destroy(), (this._lottie = null)), !0) : e.sizeMobile !== this.state.sizeMobile;
                          },
                      },
                      {
                          key: "events",
                          value: function () {
                              var t = this._game,
                                  e = this.notice;
                              t.on("acerto", function () {
                                  e(n.HIT);
                              }),
                                  t.on("todosAcertaram", function () {
                                      e(n.MASTERPIECE);
                                  }),
                                  t.on("vez", function (t, a, i, o) {
                                      e(n.YOUR_TURN, { answer: t, answer2: i });
                                  }),
                                  t.on("vezOutro", function (t) {
                                      e(n.TURN, { user: t });
                                  }),
                                  t.on("intervalo", function (t) {
                                      t ? e(n.INTERVAL_ANSWER, { answer: t }) : e(n.INTERVAL);
                                  }),
                                  t.on("cancelar", function () {
                                      e(n.CANCEL);
                                  }),
                                  t.on("pular", function () {
                                      t.turn ? e(n.SKIP) : e(n.SKIP, { user: t.userTurn });
                                  }),
                                  t.on("fimJogo", function (t, a) {
                                      e(n.GAMEOVER, { winners: t });
                                  }),
                                  t.on("inativo", function () {
                                      t.turn ? e(n.INACTIVE) : e(n.INACTIVE_USER, { user: t.userTurn });
                                  }),
                                  t.on("aguardando", function (a) {
                                      a ? (t.owner ? (t.users.length > 1 ? e(n.WAITING_OWNER) : e(n.WAITING_PLAYERS)) : e(n.WAITING_START)) : e(n.WAITING_PLAYERS);
                                  }),
                                  t.on("entrada", function () {
                                      t.lobby && t.owner && 2 == t.users.length && e(n.WAITING_OWNER);
                                  }),
                                  t.on("saida", function () {
                                      t.lobby && t.owner && 1 == t.users.length && e(n.WAITING_PLAYERS);
                                  }),
                                  t.on("inicioVez", function () {
                                      e(null);
                                  });
                          },
                      },
                      {
                          key: "componentDidMount",
                          value: function () {
                              window.addEventListener("resize", this.resize, !1);
                          },
                      },
                      {
                          key: "componentWillUnmount",
                          value: function () {
                              window.removeEventListener("resize", this.resize, !1);
                          },
                      },
                      {
                          key: "componentDidUpdate",
                          value: function (t, e) {
                              if (e.data.type != this.state.data.type) {
                                  var a, i;
                                  switch (this.state.data.type) {
                                      case n.SKIP:
                                          (a = "skipped"), (i = this._skipRef.current);
                                          break;
                                      case n.WAITING_PLAYERS:
                                      case n.WAITING_START:
                                          (a = "waiting"), (i = this._waitingRef.current);
                                          break;
                                      case n.WAITING_OWNER:
                                          (a = "waiting"), (i = this._waitingOwnerRef.current);
                                          break;
                                      case n.CANCEL:
                                          (a = "canceled"), (i = this._cancelRef.current);
                                          break;
                                      case n.INTERVAL:
                                          (a = "nobodyHit"), (i = this._intervalRef.current);
                                          break;
                                      case n.INTERVAL_ANSWER:
                                          (a = "interval" + Math.floor(3 * Math.random() + 1)), (i = this._intervalAnsRef.current);
                                          break;
                                      case n.INACTIVE:
                                          (a = "inactive"), (i = this._inactiveRef.current);
                                          break;
                                      case n.INACTIVE_USER:
                                          (a = "inactive"), (i = this._inactiveUserRef.current);
                                          break;
                                      case n.MASTERPIECE:
                                          (a = "masterpiece"), (i = this._masterpieceRef.current);
                                          break;
                                      case n.YOUR_TURN:
                                          (a = "your_turn"), (i = this._yourTurnRef.current);
                                          break;
                                      case n.HIT:
                                          (a = "hit"), (i = this._hitRef.current);
                                  }
                                  a && (this._lottie = gt.a.loadAnimation({ container: i, renderer: "svg", loop: "hit" != a, autoplay: !0, path: "/static/lottie/".concat(a, ".json") }));
                              }
                          },
                      },
                      {
                          key: "render",
                          value: function () {
                              var t = this,
                                  e = this.state,
                                  a = e.data,
                                  i = e.sizeMobile;
                              switch (a.type) {
                                  case n.SKIP:
                                      return St(
                                          "div",
                                          { id: "notification", className: "skipped" },
                                          St("h4", null, this._lang.skipped),
                                          St("div", { className: "lottie", ref: this._skipRef }),
                                          a.user && St("span", { className: "nick" }, a.user.nick),
                                          St("p", null, a.user ? this._lang.skipHisTurn : this._lang.youSkipped)
                                      );
                                  case n.WAITING_PLAYERS:
                                  case n.WAITING_START:
                                      return St(
                                          "div",
                                          { id: "notification", className: "waiting" },
                                          St("h4", null, this._lang.waiting),
                                          St("div", { className: "lottie", ref: this._waitingRef }),
                                          St("p", null, a.type == n.WAITING_PLAYERS ? this._lang.waitingForPlayers : this._lang.waitingOwner)
                                      );
                                  case n.WAITING_OWNER:
                                      return St(
                                          "div",
                                          { id: "notification", className: "waiting" },
                                          St("h4", null, this._lang.waiting),
                                          St("div", { className: "lottie", ref: this._waitingOwnerRef }),
                                          St("p", null, this._lang.waitingPlayersStart),
                                          St("div", { className: "buttons" }, St("button", { className: "btYellowBig ic-playHome", onClick: this.start }, St("strong", null, this._lang.start)))
                                      );
                                  case n.CANCEL:
                                      return St(
                                          "div",
                                          { id: "notification", className: "canceled" },
                                          St("h4", null, this._lang.canceledTurn),
                                          St("div", { className: "lottie", ref: this._cancelRef }),
                                          St("p", null, this._lang.pontuationCanceled)
                                      );
                                  case n.INTERVAL:
                                      return St(
                                          "div",
                                          { id: "notification", className: "interval" },
                                          St("h4", null, this._lang.interval),
                                          St("p", null, this._lang.takeRelax),
                                          St("div", { className: "lottie", ref: this._intervalRef }),
                                          St("p", null, this._lang.nobodyAnswer)
                                      );
                                  case n.INTERVAL_ANSWER:
                                      return St(
                                          "div",
                                          { id: "notification", className: "interval" },
                                          St("h4", null, this._lang.interval),
                                          St("p", null, this._lang.takeRelax),
                                          St("div", { className: "lottie", ref: this._intervalAnsRef }),
                                          St("p", null, this._lang.answerWas),
                                          St("strong", null, a.answer)
                                      );
                                  case n.YOUR_TURN:
                                      return St(
                                          "div",
                                          { id: "notification", className: "yourTurn", style: { height: i } },
                                          St("h4", null, this._lang.yourTurn),
                                          St("p", null, this._lang.drawWord),
                                          St(
                                              "div",
                                              { className: "cttCenter" },
                                              St("div", { className: "lottie", ref: this._yourTurnRef }),
                                              St(
                                                  "div",
                                                  { className: "containerWords" },
                                                  St(
                                                      "div",
                                                      { className: "word" },
                                                      St("span", { className: M()({ answerBig: a.answer.length > 10 }) }, a.answer),
                                                      St(
                                                          "button",
                                                          {
                                                              className: "btYellowBig ic-drawG",
                                                              onClick: function () {
                                                                  return t.draw(0);
                                                              },
                                                          },
                                                          St("strong", null, this._lang.draw)
                                                      )
                                                  ),
                                                  St("div", { className: "or" }, this._lang.or),
                                                  St(
                                                      "div",
                                                      { className: "word" },
                                                      St("span", { className: M()({ answerBig: a.answer2.length > 10 }) }, a.answer2),
                                                      St(
                                                          "button",
                                                          {
                                                              className: "btYellowBig ic-drawG",
                                                              onClick: function () {
                                                                  return t.draw(1);
                                                              },
                                                          },
                                                          St("strong", null, this._lang.draw)
                                                      )
                                                  )
                                              )
                                          )
                                      );
                                  case n.INACTIVE:
                                      return St(
                                          "div",
                                          { id: "notification", className: "inactive" },
                                          St("h4", null, this._lang.inactive),
                                          St("div", { className: "lottie", ref: this._inactiveRef }),
                                          St("p", null, this._lang.lostYourTurn)
                                      );
                                  case n.INACTIVE_USER:
                                      return St(
                                          "div",
                                          { id: "notification", className: "inactive" },
                                          St("h4", null, this._lang.inactive),
                                          St("div", { className: "lottie", ref: this._inactiveUserRef }),
                                          St("span", { className: "nick" }, a.user.nick),
                                          St("p", null, this._lang.lostHisTurn)
                                      );
                                  case n.MASTERPIECE:
                                      return St(
                                          "div",
                                          { id: "notification", className: "masterpiece" },
                                          St("h4", null, this._lang.masterpiece),
                                          St("div", { className: "lottie", ref: this._masterpieceRef }),
                                          St("p", null, this._lang.everybodyAnswer)
                                      );
                                  case n.TURN:
                                      return St("div", { id: "notification", className: "turn" }, St("h4", null, this._lang.newTurn), St($.a, { user: a.user }), St("p", null, this._lang.turnOf), St("strong", null, a.user.nick));
                                  case n.GAMEOVER:
                                      return St(
                                          "div",
                                          { id: "notification", className: "gameover" },
                                          St("h4", null, this._lang.gameOver),
                                          St("p", null, this._lang.winnersIs),
                                          St(
                                              "div",
                                              { className: "positions" },
                                              a.winners.length >= 3 && St("div", { className: "second" }, St($.a, { user: a.winners[1] }), St("i", null), St("span", null, a.winners[1].nick)),
                                              St("div", { className: "first" }, St("div", { className: "avtFirst" }, St($.a, { user: a.winners[0] })), St("i", null), St("span", null, a.winners[0].nick)),
                                              a.winners.length >= 3 && St("div", { className: "third" }, St($.a, { user: a.winners[2] }), St("i", null), St("span", null, a.winners[2].nick))
                                          )
                                      );
                                  case n.HIT:
                                      return St("div", { id: "notification", className: "hit" }, St("div", { className: "lottie", ref: this._hitRef }));
                                  default:
                                      return null;
                              }
                          },
                      },
                  ]),
                  n
              );
          })(_.a.Component);
          Object(f.a)(It, "SKIP", 1),
              Object(f.a)(It, "WAITING", 2),
              Object(f.a)(It, "WAITING_OWNER", 3),
              Object(f.a)(It, "WAITING_PLAYERS", 14),
              Object(f.a)(It, "WAITING_START", 15),
              Object(f.a)(It, "CANCEL", 5),
              Object(f.a)(It, "INTERVAL", 6),
              Object(f.a)(It, "INTERVAL_ANSWER", 7),
              Object(f.a)(It, "YOUR_TURN", 8),
              Object(f.a)(It, "INACTIVE", 9),
              Object(f.a)(It, "INACTIVE_USER", 10),
              Object(f.a)(It, "MASTERPIECE", 11),
              Object(f.a)(It, "TURN", 12),
              Object(f.a)(It, "GAMEOVER", 13),
              Object(f.a)(It, "HIT", 17);
          var Pt = Q(Object(V.a)(It)),
              xt = _.a.createElement;
          function Dt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Lt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (Dt()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "reset", function () {
                              var t = e._game;
                              t.state == S.DRAWING ? e.start(t.timeTurn, t.timeWasted) : t.state == S.INTERVAL ? e.start(t.timeInterval, t.timeWasted) : t.state == S.END && e.start(2 * t.timeInterval, t.timeWasted);
                          }),
                          (e.state = { show: !1, className: "" }),
                          (e._timeElem = _.a.createRef()),
                          (e._effectElem = _.a.createRef()),
                          (e._game = e.props.game),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state;
                              },
                          },
                          {
                              key: "componentDidMount",
                              value: function () {
                                  window.addEventListener("focus", this.reset, !1);
                              },
                          },
                          {
                              key: "componentWillUnmount",
                              value: function () {
                                  this._timer && clearTimeout(this._timer), window.removeEventListener("focus", this.reset, !1);
                              },
                          },
                          {
                              key: "events",
                              value: function () {
                                  var t = this,
                                      e = this._game;
                                  e.on("aguardando", function () {
                                      t.setState({ show: !1 });
                                  }),
                                      e.on("vez", function () {
                                          t.setState({ show: !0 }), t.start(e.timeTurn);
                                      }),
                                      e.on("vezOutro", function () {
                                          t.setState({ show: !0 }), t.start(e.timeTurn);
                                      }),
                                      e.on("fimRodada", function (a) {
                                          a ? t.start(2 * e.timeInterval) : t.start(e.timeInterval);
                                      }),
                                      e.on("acerto", function (a, n, i, o) {
                                          o && t.start(e.timeTurn, e.timeWasted, !0);
                                      }),
                                      e.on("acertoOutro", function (a, n, i, o) {
                                          o && t.start(e.timeTurn, e.timeWasted, !0);
                                      });
                              },
                          },
                          {
                              key: "start",
                              value: function (t) {
                                  var e = this,
                                      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  this._timer && clearTimeout(this._timer);
                                  var i = a / t,
                                      o = Math.round(100 - 100 * i);
                                  i > 1 && (i = 1);
                                  var s = Math.round((1 - i) * t);
                                  this._game.interval ? this.setState({ className: "interval" }) : i < 0.85 ? this.setState({ className: this._game.hits ? "dynamic" : "" }) : this.setState({ className: "finishing" });
                                  var r = this._timeElem.current,
                                      c = this._effectElem.current,
                                      l = r.offsetWidth;
                                  (c.style.transitionProperty = "none"),
                                      (r.style.transitionProperty = "none"),
                                      (r.style.width = o + "%"),
                                      n ? ((c.style.width = l + "px"), (c.style.opacity = 1)) : ((c.style.transitionProperty = "none"), (c.style.opacity = 0)),
                                      i < 1 &&
                                          (r.offsetWidth,
                                          (this._timer = setTimeout(function () {
                                              (r.style.transitionProperty = ""), (r.style.transitionDuration = s + "ms"), (r.style.width = "0%"), n && ((c.style.transitionProperty = ""), (c.style.opacity = 0));
                                          }, 0))),
                                      i < 0.85 &&
                                          !this._game.interval &&
                                          (this._timer = setTimeout(function () {
                                              e.setState({ className: "finishing" });
                                          }, Math.round(0.85 * t - a)));
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  return xt("div", { id: "time", className: M()(this.state.className, { hide: !this.state.show }) }, xt("div", null, xt("div", { ref: this._timeElem }), xt("div", { ref: this._effectElem })));
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              Mt = _.a.createElement;
          function zt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Ut = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (zt()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "hint", function () {
                              var t = e.state,
                                  a = t.turn,
                                  n = t.hit,
                                  i = t.hintEnd;
                              !a || n || i || e.props.game.hint();
                          }),
                          Object(f.a)(Object(c.a)(e), "skip", function () {
                              var t = e.state,
                                  a = t.turn,
                                  n = t.hit;
                              if (a && !n) {
                                  var i = e.props,
                                      o = i.setPopup,
                                      s = i.game;
                                  o(z.a.CONFIRM_GAME, {
                                      title: e._lang.skip,
                                      text: e._lang.skipTurn,
                                      lottie: "skipped",
                                      cb: function () {
                                          o(null), s.skip();
                                      },
                                  });
                              }
                          }),
                          (e.state = { turn: !1, hint: !1, hintEnd: !1, answer: "", hit: !1 }),
                          (e._game = t.game),
                          (e._lang = t.lang.hint),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state;
                              },
                          },
                          {
                              key: "events",
                              value: function () {
                                  var t = this,
                                      e = this.props.game;
                                  e.on("vez", function (e) {
                                      t.setState({ hit: !1, hintEnd: !1 });
                                  }),
                                      e.on("inicioVez", function (a) {
                                          e.turn && t.setState({ answer: a.toUpperCase(), turn: !0 });
                                      }),
                                      e.on("dica", function (a, n) {
                                          e.turn && !n ? t.setState({ hint: a, hintEnd: !0 }) : t.setState({ hint: a });
                                      }),
                                      e.on("primeiroAcerto", function () {
                                          e.turn && t.setState({ hit: !0 });
                                      }),
                                      e.on("fimRodada", function (e) {
                                          t.setState({ hint: !1, turn: !1 });
                                      }),
                                      e.on("aguardando", function () {
                                          t.setState({ hint: !1, turn: !1 });
                                      });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var t = this.state,
                                      e = t.hint,
                                      a = t.turn,
                                      n = t.answer,
                                      i = t.hit,
                                      o = t.hintEnd;
                                  this.props.size;
                                  if (!a && !e) return null;
                                  if (a) {
                                      var s = n.split(" "),
                                          r = -1;
                                      return Mt(
                                          "div",
                                          { id: "hint" },
                                          Mt(
                                              "div",
                                              null,
                                              Mt("button", { onClick: this.hint, disabled: i || o }, this._lang.hint),
                                              Mt(
                                                  "div",
                                                  { className: M()({ little: n.length > 12, line: 0 != e }) },
                                                  s.map(function (t, a) {
                                                      return Mt(
                                                          "div",
                                                          { className: "word", key: r++ + "word" + a },
                                                          t.split("").map(function (t, n) {
                                                              return Mt("span", { className: M()({ active: e && "_" != e[r++] }), key: "word" + a + "letter" + n }, t);
                                                          })
                                                      );
                                                  })
                                              ),
                                              Mt("button", { onClick: this.skip, disabled: i }, this._lang.skip)
                                          )
                                      );
                                  }
                                  var c = e.join("").split(" "),
                                      l = -1;
                                  return Mt(
                                      "div",
                                      { id: "hint" },
                                      Mt("h4", null, this._lang.hint),
                                      Mt(
                                          "div",
                                          null,
                                          Mt(
                                              "div",
                                              { className: M()("line", { little: e.length > 12 }) },
                                              c.map(function (t, e) {
                                                  return Mt(
                                                      "div",
                                                      { className: "word", key: ++l + "word" + e },
                                                      t.split("").map(function (t, a) {
                                                          return Mt("span", { key: "word" + e + "letter" + a }, "_" != t && t);
                                                      })
                                                  );
                                              })
                                          )
                                      )
                                  );
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              Vt = Q(Object(J.a)(Ut)),
              Ft = _.a.createElement;
          function Wt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Gt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (Wt()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "report", function () {
                              var t = e.props,
                                  a = t.setPopup,
                                  n = t.game;
                              a(z.a.CONFIRM_GAME, {
                                  text: e._lang.reportDrawing,
                                  icon: "iconReport",
                                  cb: function () {
                                      a(null), n.report(), e.setState({ reported: !0 });
                                  },
                              });
                          }),
                          (e.state = { show: !1, reported: !1 }),
                          (e._lang = t.lang.denounce),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "shouldComponentUpdate",
                              value: function (t, e) {
                                  return e !== this.state;
                              },
                          },
                          {
                              key: "events",
                              value: function () {
                                  var t = this,
                                      e = this.props.game;
                                  e.on("fimRodada", function () {
                                      t.setState({ show: !1 });
                                  }),
                                      e.on("aguardando", function () {
                                          t.setState({ show: !1 });
                                      }),
                                      e.on("inicioVez", function () {
                                          e.turn || t.setState({ show: !0, reported: !1 });
                                      });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var t = this.state,
                                      e = t.show,
                                      a = t.reported,
                                      n = this.props.game,
                                      i = !1;
                                  return (!e || a || n.viewer) && (i = !0), Ft("button", { className: "denounce", onClick: this.report, disabled: i }, Ft("span", { className: "tooltip" }, this._lang.report));
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              Bt = Q(Object(J.a)(Gt)),
              Ht = _.a.createElement;
          function qt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Yt = (function (t) {
                  Object(h.a)(n, t);
                  var e,
                      a =
                          ((e = n),
                          function () {
                              var t,
                                  a = Object(u.a)(e);
                              if (qt()) {
                                  var n = Object(u.a)(this).constructor;
                                  t = Reflect.construct(a, arguments, n);
                              } else t = a.apply(this, arguments);
                              return Object(l.a)(this, t);
                          });
                  function n(t) {
                      var e;
                      return (
                          Object(s.a)(this, n),
                          (e = a.call(this, t)),
                          Object(f.a)(Object(c.a)(e), "events", function () {
                              var t = e.props.game;
                              t.on("acertoOutro", function (a) {
                                  t.turn && e.add(e._lang.hit.replace("###", a.nick), "hit");
                              }),
                                  t.on("denuncia", function (a) {
                                      t.turn && e.add(e._lang.reported.replace("###", a.nick), "alert");
                                  }),
                                  t.on("fimRodada", function () {
                                      t.turn && e.setState({ posts: [] });
                                  });
                          }),
                          Object(f.a)(Object(c.a)(e), "add", function (t, a) {
                              e.setState(function (n) {
                                  var i = n.posts.slice(),
                                      o = ++e._ids;
                                  return i.push({ id: o, type: a, text: t }), { posts: i };
                              });
                          }),
                          (e.state = { posts: [] }),
                          (e._ids = 0),
                          (e._lang = t.lang.answers),
                          e.events(),
                          e
                      );
                  }
                  return (
                      Object(r.a)(n, [
                          {
                              key: "render",
                              value: function () {
                                  var t = this.state.posts;
                                  return Ht(
                                      "div",
                                      { id: "mobile-posts" },
                                      t.map(function (t) {
                                          var e = t.id,
                                              a = t.type,
                                              n = t.text;
                                          return Ht("div", { key: "post" + e, className: a }, Ht("div", null, n));
                                      })
                                  );
                              },
                          },
                      ]),
                      n
                  );
              })(_.a.Component),
              Kt = Object(V.a)(Yt),
              Qt = _.a.createElement;
          function Jt() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var Xt = (function (t) {
              Object(h.a)(n, t);
              var e,
                  a =
                      ((e = n),
                      function () {
                          var t,
                              a = Object(u.a)(e);
                          if (Jt()) {
                              var n = Object(u.a)(this).constructor;
                              t = Reflect.construct(a, arguments, n);
                          } else t = a.apply(this, arguments);
                          return Object(l.a)(this, t);
                      });
              function n(t) {
                  var e;
                  return (
                      Object(s.a)(this, n),
                      (e = a.call(this, t)),
                      Object(f.a)(Object(c.a)(e), "focusRoom", function () {
                          e.setState({ focus: !0 });
                      }),
                      Object(f.a)(Object(c.a)(e), "blurRoom", function () {
                          e.setState({ focus: !1 });
                      }),
                      Object(f.a)(Object(c.a)(e), "popState", function () {
                          e._game.viewer ? window.history.pushState({}, "", "/") : window.history.pushState({}, "", "/" + (e._game.created || "room"));
                      }),
                      Object(f.a)(Object(c.a)(e), "detectSize", function () {
                          var t,
                              a = e._game,
                              i = window.innerHeight,
                              o = window.innerWidth;
                          o <= 640
                              ? ((t = n.MOBILE), (e._drawing.zoomTela = Math.round(window.innerHeight - 119) / 448))
                              : (!a.viewer && (o <= 1151 || i <= 641)) || (a.viewer && (o <= 1010 || i <= 641))
                              ? ((t = n.SMALL), (e._drawing.zoomTela = 0.76))
                              : (!a.viewer && (o <= 1329 || i <= 753)) || (a.viewer && (o <= 1170 || i <= 753))
                              ? ((t = n.MEDIUM), (e._drawing.zoomTela = 0.85))
                              : ((t = n.BIG), (e._drawing.zoomTela = 1.023)),
                              e.setState({ size: t });
                      }),
                      Object(f.a)(Object(c.a)(e), "infoMobile", function () {
                          var t = e.props,
                              a = t.setPopup,
                              n = t.data,
                              i = t.lang,
                              o = e._game;
                          a(z.a.INFO, { goal: o.goal, photo: o.photo, subject: i.subjects[o.subject], language: Object(U.a)(n.languages, o.language) });
                      }),
                      Object(f.a)(Object(c.a)(e), "soundMobile", function () {
                          D.activate(!D.active), e.setState({ soundMobile: D.active });
                      }),
                      Object(f.a)(Object(c.a)(e), "openChatMobile", function () {
                          e.setState(function (t) {
                              if (!t.chatMobile) return { chatMobile: !0, chatCount: 0 };
                          });
                      }),
                      Object(f.a)(Object(c.a)(e), "closeChatMobile", function () {
                          e.setState({ chatMobile: !1 });
                      }),
                      (D.baseURL = "/static/sounds/"),
                      D.load(["join", "left", "turn", "hit", "hint", "interval", "yourHit", "yourTurn", "gameover"]),
                      (e.state = { size: 0, turn: !1, hideOptions: !1, focus: !0, soundMobile: D.active, chatMobile: !1, chatCount: 0 }),
                      (e._drawingRef = _.a.createRef()),
                      (e._eventsRef = _.a.createRef()),
                      (e._id = 0),
                      (e._game = i(S, Object(o.a)(t.data.game))),
                      (e._lang = t.lang.room),
                      e
                  );
              }
              return (
                  Object(r.a)(n, [
                      {
                          key: "componentDidMount",
                          value: function () {
                              var t = this;
                              this.startDrawing(),
                                  this.startGame(),
                                  (window.onbeforeunload = function () {
                                      return t._lang.exitGame;
                                  }),
                                  window.addEventListener("popstate", this.popState, !1),
                                  window.addEventListener("resize", this.detectSize, !1),
                                  this.detectSize(),
                                  window.addEventListener("focus", this.focusRoom, !1),
                                  window.addEventListener("blur", this.blurRoom, !1),
                                  this._game.viewer ||
                                      (Mousetrap.bind(["ctrl+z", "command+z"], function () {
                                          t._game.turn && t._game.undo();
                                      }),
                                      Mousetrap.bind(["ctrl+y", "command+y", "ctrl+shift+z", "command+shift+z"], function () {
                                          t._game.turn && t._game.redo();
                                      }),
                                      Mousetrap.bind(["tab"], function () {
                                          return (!t._chatElem.focused && t._answerElem.focused) || t._answerElem.blocked ? (t._game.created || t.props.data.user.logado) && t._chatElem.focus() : t._answerElem.focus(), !1;
                                      })),
                                  y.a.beforePopState(function () {
                                      return t._game.viewer || t.exit(), !1;
                                  }),
                                  this.setState({ users: Object(o.a)(this._game.users), limit: this._game.limit });
                          },
                      },
                      {
                          key: "componentWillUnmount",
                          value: function () {
                              (window.onbeforeunload = null),
                                  window.removeEventListener("resize", this.detectSize, !1),
                                  window.removeEventListener("popstate", this.popState, !1),
                                  y.a.beforePopState(function () {
                                      return !0;
                                  }),
                                  window.removeEventListener("focus", this.focusRoom, !1),
                                  window.removeEventListener("blur", this.blurRoom, !1),
                                  Mousetrap.reset(),
                                  this._game.destroy();
                          },
                      },
                      {
                          key: "startDrawing",
                          value: function () {
                              var t = this;
                              this._drawing = new x(this._drawingRef.current, { largura: 767, altura: 448, quebra: 32, eventElem: this._eventsRef.current, mobile: !1 });
                              var e = this._drawing;
                              e.on("startDraw", function () {
                                  t._timerFade && clearTimeout(t._timerFade), t.setState({ hideOptions: !0 });
                              }),
                                  e.on("endDraw", function () {
                                      t._timerFade = setTimeout(function () {
                                          t.setState({ hideOptions: !1 });
                                      }, 1e3);
                                  }),
                                  (this._player = new I(e, { baldeFragmentado: !1 }));
                          },
                      },
                      {
                          key: "startGame",
                          value: function () {
                              var t = this;
                              if (this.props.data.game) {
                                  this._game.init(this._player), this._game.viewer ? y.a.replace("/room", "/", { shallow: !0 }) : this._game.created && y.a.replace("/room", "/" + this._game.created, { shallow: !0 });
                                  var e = this._game,
                                      a = this.props,
                                      n = a.setPopup,
                                      i = a.data,
                                      o = a.lang,
                                      s = function (e) {
                                          return t.setState(e);
                                      };
                                  i.game[1]
                                      ? (e.on("avisoInativo", function () {
                                            n(z.a.ALERT, {
                                                title: t._lang.inactive,
                                                text: t._lang.preventDisconnection,
                                                lottie: "inactive",
                                                cb: function () {
                                                    n(null), e.active();
                                                },
                                            });
                                        }),
                                        e.owner || i.creating
                                            ? n(z.a.SHARE)
                                            : e.official
                                            ? n(z.a.RULES, { subject: o.subjects[e.subject], goal: e.goal, language: Object(U.a)(i.languages, e.language) })
                                            : n(z.a.ROOM_CREATED, { photo: e.photo }))
                                      : n(null),
                                      e.on("entrada", function () {
                                          D.play("join");
                                      }),
                                      e.on("saida", function () {
                                          D.play("left");
                                      }),
                                      e.on("inicioVez", function () {
                                          e.turn && s({ turn: !0 });
                                      }),
                                      e.on("dica", function () {
                                          D.play("hint");
                                      }),
                                      e.on("acerto", function () {
                                          D.play("yourHit");
                                      }),
                                      e.on("acertoOutro", function () {
                                          D.play("hit");
                                      }),
                                      e.on("denuncia", function (t) {
                                          t == e.me && s({ denounce: !1 });
                                      }),
                                      e.on("vez", function () {
                                          D.play("yourTurn");
                                      }),
                                      e.on("vezOutro", function () {
                                          D.play("turn");
                                      }),
                                      e.on("fimRodada", function (t) {
                                          t || D.play("interval"), s({ turn: !1, hideOptions: !1 }), n(z.a.CLOSE_GAME);
                                      }),
                                      e.on("fimJogo", function () {
                                          D.play("gameover", !1, 0.6);
                                      }),
                                      e.on("chat", function () {
                                          var e = t.state,
                                              a = e.chatMobile,
                                              n = e.chatCount;
                                          !a &&
                                              n < 10 &&
                                              t.setState(function (t) {
                                                  return { chatCount: t.chatCount + 1 };
                                              });
                                      }),
                                      e.unlock();
                              } else y.a.push("/");
                          },
                      },
                      {
                          key: "render",
                          value: function () {
                              var t,
                                  e,
                                  a = this,
                                  n = this.props.data,
                                  i = n.subjects,
                                  o = n.languages,
                                  s = n.user.logado,
                                  r = this.state,
                                  c = r.size,
                                  l = r.turn,
                                  u = r.hideOptions,
                                  h = r.focus,
                                  f = r.chatMobile,
                                  d = r.chatCount,
                                  _ = this._game;
                              if (_.created) {
                                  t = this.props.lang.subjects[_.subject];
                                  var p = Object(U.a)(o, _.language),
                                      m = _.roomId.length > 5 ? _.roomId : _.roomId.substr(1);
                                  e = "".concat(t, " #").concat(m, " (").concat(p, ")");
                              } else t = e = Object(U.a)(i, _.subject);
                              return Qt(
                                  "div",
                                  { id: "screenRoom", className: M()({ common: !_.viewer, viewer: _.viewer, blur: !h }) },
                                  Qt(v.a, null, Qt("title", null, this._lang.pageTitle.replace("###", e)), Qt("meta", { name: "description", content: this._lang.description.replace("###", t) })),
                                  Qt(
                                      "div",
                                      { className: M()("content", { turn: l, fadeOut: u }) },
                                      Qt("header", { className: "game" }, Qt("div", null, Qt("div", { className: "logo" })), !_.viewer && Qt(B, { game: _, size: c })),
                                      Qt(
                                          "div",
                                          { className: "ctt" },
                                          Qt("div", { className: "users-tools" }, Qt(it, { game: _, size: c }), Qt(ct, { game: _ })),
                                          Qt(
                                              "div",
                                              { id: "canvas" },
                                              Qt("div", { id: "drawing", ref: this._drawingRef }),
                                              Qt(Bt, { game: _ }),
                                              Qt(Vt, { game: _ }),
                                              Qt(Kt, { game: _ }),
                                              Qt(Pt, { game: _ }),
                                              Qt(Lt, { game: _ }),
                                              Qt("div", { id: "events", ref: this._eventsRef })
                                          ),
                                          Qt(
                                              "div",
                                              { id: "interaction" },
                                              Qt(
                                                  "div",
                                                  { className: "actionsMobile" },
                                                  Qt(Bt, { game: _ }),
                                                  Qt("button", {
                                                      className: M()("sound", { off: !this.state.soundMobile }),
                                                      onClick: function () {
                                                          return a.soundMobile();
                                                      },
                                                  }),
                                                  Qt("button", { onClick: this.infoMobile, className: "info" }),
                                                  Qt(
                                                      "button",
                                                      {
                                                          onClick: function () {
                                                              return a.openChatMobile();
                                                          },
                                                          className: "chat",
                                                      },
                                                      !!d && Qt("span", null, d <= 9 ? d : "+9")
                                                  )
                                              ),
                                              Qt(wt, {
                                                  game: _,
                                                  size: c,
                                                  getElem: function (t) {
                                                      return (a._answerElem = t);
                                                  },
                                              }),
                                              Qt("div", { className: "bar" }),
                                              Qt(Nt, {
                                                  game: _,
                                                  size: c,
                                                  logged: s,
                                                  openChat: f,
                                                  close: this.closeChatMobile,
                                                  getElem: function (t) {
                                                      return (a._chatElem = t);
                                                  },
                                              })
                                          )
                                      )
                                  )
                              );
                          },
                      },
                  ]),
                  n
              );
          })(_.a.Component);
          Object(f.a)(Xt, "SMALL", 1), Object(f.a)(Xt, "MEDIUM", 2), Object(f.a)(Xt, "BIG", 3), Object(f.a)(Xt, "MOBILE", 4);
          e.default = Object(g.a)(Xt);
      },
      KQm4: function (t, e, a) {
          "use strict";
          function n(t) {
              return (
                  (function (t) {
                      if (Array.isArray(t)) {
                          for (var e = 0, a = new Array(t.length); e < t.length; e++) a[e] = t[e];
                          return a;
                      }
                  })(t) ||
                  (function (t) {
                      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                  })(t) ||
                  (function () {
                      throw new TypeError("Invalid attempt to spread non-iterable instance");
                  })()
              );
          }
          a.d(e, "a", function () {
              return n;
          });
      },
      RnYt: function (t, e, a) {
          "use strict";
          var n = a("rePB");
          e.a = function (t, e) {
              var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "name";
              return (t.find(function (t) {
                  return t.id == e;
              }) || Object(n.a)({}, a, ""))[a];
          };
      },
      aqQv: function (t, e, a) {
          (window.__NEXT_P = window.__NEXT_P || []).push([
              "/room",
              function () {
                  return a("1B+e");
              },
          ]);
      },
      imBb: function (t, e, a) {
          var n;
          !(function (i, o, s) {
              if (i) {
                  for (
                      var r,
                          c = {
                              8: "backspace",
                              9: "tab",
                              13: "enter",
                              16: "shift",
                              17: "ctrl",
                              18: "alt",
                              20: "capslock",
                              27: "esc",
                              32: "space",
                              33: "pageup",
                              34: "pagedown",
                              35: "end",
                              36: "home",
                              37: "left",
                              38: "up",
                              39: "right",
                              40: "down",
                              45: "ins",
                              46: "del",
                              91: "meta",
                              93: "meta",
                              224: "meta",
                          },
                          l = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" },
                          u = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" },
                          h = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" },
                          f = 1;
                      f < 20;
                      ++f
                  )
                      c[111 + f] = "f" + f;
                  for (f = 0; f <= 9; ++f) c[f + 96] = f.toString();
                  (y.prototype.bind = function (t, e, a) {
                      return (t = t instanceof Array ? t : [t]), this._bindMultiple.call(this, t, e, a), this;
                  }),
                      (y.prototype.unbind = function (t, e) {
                          return this.bind.call(this, t, function () {}, e);
                      }),
                      (y.prototype.trigger = function (t, e) {
                          return this._directMap[t + ":" + e] && this._directMap[t + ":" + e]({}, t), this;
                      }),
                      (y.prototype.reset = function () {
                          return (this._callbacks = {}), (this._directMap = {}), this;
                      }),
                      (y.prototype.stopCallback = function (t, e) {
                          return (
                              !((" " + e.className + " ").indexOf(" mousetrap ") > -1) &&
                              !(function t(e, a) {
                                  return null !== e && e !== o && (e === a || t(e.parentNode, a));
                              })(e, this.target) &&
                              ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable)
                          );
                      }),
                      (y.prototype.handleKey = function () {
                          var t = this;
                          return t._handleKey.apply(t, arguments);
                      }),
                      (y.addKeycodes = function (t) {
                          for (var e in t) t.hasOwnProperty(e) && (c[e] = t[e]);
                          r = null;
                      }),
                      (y.init = function () {
                          var t = y(o);
                          for (var e in t)
                              "_" !== e.charAt(0) &&
                                  (y[e] = (function (e) {
                                      return function () {
                                          return t[e].apply(t, arguments);
                                      };
                                  })(e));
                      }),
                      y.init(),
                      (i.Mousetrap = y),
                      t.exports && (t.exports = y),
                      void 0 ===
                          (n = function () {
                              return y;
                          }.call(e, a, e, t)) || (t.exports = n);
              }
              function d(t, e, a) {
                  t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent("on" + e, a);
              }
              function _(t) {
                  if ("keypress" == t.type) {
                      var e = String.fromCharCode(t.which);
                      return t.shiftKey || (e = e.toLowerCase()), e;
                  }
                  return c[t.which] ? c[t.which] : l[t.which] ? l[t.which] : String.fromCharCode(t.which).toLowerCase();
              }
              function p(t) {
                  return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t;
              }
              function v(t, e, a) {
                  return (
                      a ||
                          (a = (function () {
                              if (!r) for (var t in ((r = {}), c)) (t > 95 && t < 112) || (c.hasOwnProperty(t) && (r[c[t]] = t));
                              return r;
                          })()[t]
                              ? "keydown"
                              : "keypress"),
                      "keypress" == a && e.length && (a = "keydown"),
                      a
                  );
              }
              function m(t, e) {
                  var a,
                      n,
                      i,
                      o = [];
                  for (
                      a = (function (t) {
                          return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus")).split("+");
                      })(t),
                          i = 0;
                      i < a.length;
                      ++i
                  )
                      (n = a[i]), h[n] && (n = h[n]), e && "keypress" != e && u[n] && ((n = u[n]), o.push("shift")), p(n) && o.push(n);
                  return { key: n, modifiers: o, action: (e = v(n, o, e)) };
              }
              function y(t) {
                  var e = this;
                  if (((t = t || o), !(e instanceof y))) return new y(t);
                  (e.target = t), (e._callbacks = {}), (e._directMap = {});
                  var a,
                      n = {},
                      i = !1,
                      s = !1,
                      r = !1;
                  function c(t) {
                      t = t || {};
                      var e,
                          a = !1;
                      for (e in n) t[e] ? (a = !0) : (n[e] = 0);
                      a || (r = !1);
                  }
                  function l(t, a, i, o, s, r) {
                      var c,
                          l,
                          u,
                          h,
                          f = [],
                          d = i.type;
                      if (!e._callbacks[t]) return [];
                      for ("keyup" == d && p(t) && (a = [t]), c = 0; c < e._callbacks[t].length; ++c)
                          if (
                              ((l = e._callbacks[t][c]), (o || !l.seq || n[l.seq] == l.level) && d == l.action && (("keypress" == d && !i.metaKey && !i.ctrlKey) || ((u = a), (h = l.modifiers), u.sort().join(",") === h.sort().join(","))))
                          ) {
                              var _ = !o && l.combo == s,
                                  v = o && l.seq == o && l.level == r;
                              (_ || v) && e._callbacks[t].splice(c, 1), f.push(l);
                          }
                      return f;
                  }
                  function u(t, a, n, i) {
                      e.stopCallback(a, a.target || a.srcElement, n, i) ||
                          (!1 === t(a, n) &&
                              ((function (t) {
                                  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                              })(a),
                              (function (t) {
                                  t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
                              })(a)));
                  }
                  function h(t) {
                      "number" !== typeof t.which && (t.which = t.keyCode);
                      var a = _(t);
                      a &&
                          ("keyup" != t.type || i !== a
                              ? e.handleKey(
                                    a,
                                    (function (t) {
                                        var e = [];
                                        return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e;
                                    })(t),
                                    t
                                )
                              : (i = !1));
                  }
                  function f(t, e, o, s) {
                      function l(e) {
                          return function () {
                              (r = e), ++n[t], clearTimeout(a), (a = setTimeout(c, 1e3));
                          };
                      }
                      function h(e) {
                          u(o, e, t), "keyup" !== s && (i = _(e)), setTimeout(c, 10);
                      }
                      n[t] = 0;
                      for (var f = 0; f < e.length; ++f) {
                          var d = f + 1 === e.length ? h : l(s || m(e[f + 1]).action);
                          v(e[f], d, s, t, f);
                      }
                  }
                  function v(t, a, n, i, o) {
                      e._directMap[t + ":" + n] = a;
                      var s,
                          r = (t = t.replace(/\s+/g, " ")).split(" ");
                      r.length > 1
                          ? f(t, r, a, n)
                          : ((s = m(t, n)),
                            (e._callbacks[s.key] = e._callbacks[s.key] || []),
                            l(s.key, s.modifiers, { type: s.action }, i, t, o),
                            e._callbacks[s.key][i ? "unshift" : "push"]({ callback: a, modifiers: s.modifiers, action: s.action, seq: i, level: o, combo: t }));
                  }
                  (e._handleKey = function (t, e, a) {
                      var n,
                          i = l(t, e, a),
                          o = {},
                          h = 0,
                          f = !1;
                      for (n = 0; n < i.length; ++n) i[n].seq && (h = Math.max(h, i[n].level));
                      for (n = 0; n < i.length; ++n)
                          if (i[n].seq) {
                              if (i[n].level != h) continue;
                              (f = !0), (o[i[n].seq] = 1), u(i[n].callback, a, i[n].combo, i[n].seq);
                          } else f || u(i[n].callback, a, i[n].combo);
                      var d = "keypress" == a.type && s;
                      a.type != r || p(t) || d || c(o), (s = f && "keydown" == a.type);
                  }),
                      (e._bindMultiple = function (t, e, a) {
                          for (var n = 0; n < t.length; ++n) v(t[n], e, a);
                      }),
                      d(t, "keypress", h),
                      d(t, "keydown", h),
                      d(t, "keyup", h);
              }
          })("undefined" !== typeof window ? window : null, "undefined" !== typeof window ? document : null);
      },
      r3VO: function (t, e, a) {
          "use strict";
          a.d(e, "a", function () {
              return _;
          });
          var n = a("wx14"),
              i = a("1OyB"),
              o = a("vuIU"),
              s = a("md7G"),
              r = a("foSv"),
              c = a("Ji7U"),
              l = a("q1tI"),
              u = a.n(l),
              h = a("ynsN"),
              f = u.a.createElement;
          function d() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (t) {
                  return !1;
              }
          }
          var _ = function (t) {
              return (function (e) {
                  Object(c.a)(u, e);
                  var a,
                      l =
                          ((a = u),
                          function () {
                              var t,
                                  e = Object(r.a)(a);
                              if (d()) {
                                  var n = Object(r.a)(this).constructor;
                                  t = Reflect.construct(e, arguments, n);
                              } else t = e.apply(this, arguments);
                              return Object(s.a)(this, t);
                          });
                  function u() {
                      return Object(i.a)(this, u), l.apply(this, arguments);
                  }
                  return (
                      Object(o.a)(u, [
                          {
                              key: "render",
                              value: function () {
                                  var e = this;
                                  return f(h.a.Consumer, null, function (a) {
                                      var i = a.data,
                                          o = a.lang,
                                          s = a.setData,
                                          r = a.setPopup;
                                      return f(t, Object(n.a)({}, e.props, { data: i, lang: o, setData: s, setPopup: r }));
                                  });
                              },
                          },
                      ]),
                      u
                  );
              })(u.a.Component);
          };
      },
  },
  [["aqQv", 0, 2, 5, 1, 4, 3]],
]);