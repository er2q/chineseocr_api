(function (e) {
    function t(t) {
        for (var s, i, d = t[0], c = t[1], o = t[2], f = 0, u = []; f < d.length; f++) i = d[f], Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]), n[i] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        l && l(t);
        while (u.length) u.shift()();
        return r.push.apply(r, o || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], s = !0, d = 1; d < a.length; d++) {
                var c = a[d];
                0 !== n[c] && (s = !1)
            }
            s && (r.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }

    var s = {}, n = {app: 0}, r = [];

    function i(t) {
        if (s[t]) return s[t].exports;
        var a = s[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }

    i.m = e, i.c = s, i.d = function (e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) i.d(a, s, function (t) {
            return e[t]
        }.bind(null, s));
        return a
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [], c = d.push.bind(d);
    d.push = t, d = d.slice();
    for (var o = 0; o < d.length; o++) t(d[o]);
    var l = c;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "034f": function (e, t, a) {
        "use strict";
        var s = a("85ec"), n = a.n(s);
        n.a
    }, 4437: function (e, t, a) {
        "use strict";
        var s = a("5cad"), n = a.n(s);
        n.a
    }, 4678: function (e, t, a) {
        var s = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function n(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(s, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return s[e]
        }

        n.keys = function () {
            return Object.keys(s)
        }, n.resolve = r, e.exports = n, n.id = "4678"
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79df");
        var s = a("2b0e"), n = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "app"}}, [a("a-layout", [a("a-layout-content", [a("router-view")], 1), a("a-layout-footer", {
                    staticClass: "footer",
                    staticStyle: {"background-color": "transparent", padding: "0.2rem"}
                }, [a("a", {attrs: {href: "https://github.com/ouyanghuiyu/chineseocr_lite"}}, [e._v("chineseocr_lite-好用开源的轻量级OCR（https://github.com/ouyanghuiyu/chineseocr_lite）")])])], 1)], 1)
            }, r = [], i = (a("034f"), a("2877")), d = {}, c = Object(i["a"])(d, n, r, !1, null, null, null), o = c.exports,
            l = a("8c4f"), f = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "wrapper"}, [a("a-row", [a("a-col", {
                    attrs: {
                        lg: 10,
                        md: 10,
                        sm: 9
                    }
                }, [a("div", {staticClass: "left-wrapper"}, [a("div", {staticClass: "upimg-dragger"}, [a("a-upload-dragger", {
                    attrs: {
                        name: "file",
                        action: "/tools/ocr_text/",
                        accept: ".jpg, .jpeg, .png, .gif, .ico",
                        beforeUpload: e.beforeUpload,
                        listType: "picture",
                        showUploadList: !1
                    }, on: {change: e.handleChange}
                }, [a("p", [e._v("点击、拖动、或者粘贴图片")])])], 1), a("div", {staticClass: "up-img-preview"}, [a("img", {
                    attrs: {
                        src: e.upImage,
                        alt: "预览图片",
                        hidden: e.previewImgHidden
                    }
                })])])]), a("a-col", {
                    attrs: {
                        lg: 3,
                        md: 4,
                        sm: 6
                    }
                }, [a("div", {staticClass: "split"}, [a("div", {staticClass: "divider"}), a("div", {staticClass: "btn-group"}, [a("a-button", {
                    attrs: {loading: e.isOCRing},
                    on: {click: e.handleUpload}
                }, [e._v("识别")]), a("div", {staticStyle: {"margin-top": "1rem"}}, [a("p", [e._v(" 压缩图片: "), a("a-switch", {
                    staticStyle: {
                        width: "auto",
                        "min-width": "45%"
                    },
                    attrs: {"checked-children": "开", "un-checked-children": "关", "default-checked": ""},
                    on: {change: e.changeCompressBtn}
                })], 1), a("p", {attrs: {hidden: e.hiddenCompressBox}}, [e._v(" 短边尺寸: "), a("a-input-number", {
                    staticStyle: {
                        width: "auto",
                        "max-width": "45%"
                    },
                    attrs: {id: "compressSizeInput", size: "small", min: 1},
                    model: {
                        value: e.comporessSize, callback: function (t) {
                            e.comporessSize = t
                        }, expression: "comporessSize"
                    }
                })], 1)])], 1)])]), a("a-col", {
                    attrs: {
                        lg: 11,
                        md: 10,
                        sm: 9
                    }
                }, [a("div", {staticClass: "right-wrapper"}, [a("div", {
                    staticClass: "detected-img",
                    attrs: {hidden: e.hiddenDetectedImg}
                }, [a("a-divider", {attrs: {orientation: "left"}}, [e._v("文字检测结果")]), a("img", {
                    attrs: {
                        src: e.detectedImg,
                        alt: "检测结果图片"
                    }
                })], 1), a("div", {
                    staticClass: "ocr-raw",
                    attrs: {hidden: e.hiddenOcrRaw}
                }, [a("a-divider", {attrs: {orientation: "left"}}, [e._v("原始结果")]), a("CodeHighlight", {attrs: {txt: e.ocrRaw}})], 1), a("div", {
                    staticClass: "ocr-text",
                    attrs: {hidden: e.hiddenOcrText}
                }, [a("a-divider", {attrs: {orientation: "left"}}, [e._v("识别的文字")]), a("CodeHighlight", {attrs: {txt: e.ocrText}})], 1)])])], 1)], 1)
            }, u = [],
            p = (a("4160"), a("c975"), a("b0c0"), a("d3b7"), a("3ca3"), a("159b"), a("ddb0"), a("2b3d"), function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    directives: [{
                        name: "highlightjs",
                        rawName: "v-highlightjs",
                        value: e.txt,
                        expression: "txt"
                    }], staticClass: "source-code"
                }, [e._m(0)])
            }), h = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("pre", [a("code", {staticClass: "javascript"})])
            }], b = {name: "CodeHighlight", props: {txt: String}}, j = b,
            m = (a("4437"), Object(i["a"])(j, p, h, !1, null, null, null)), g = m.exports, v = a("f23d"), w = a("bc3a");

        function y(e) {
            var t = null;
            return void 0 != window.createObjectURL ? t = window.createObjectURL(e) : void 0 != window.URL ? t = window.URL.createObjectURL(e) : void 0 != window.webkitURL && (t = window.webkitURL.createObjectURL(e)), t
        }

        s["a"].use(v["a"]);
        var x = {
            name: "Index", data: function () {
                return {
                    upImage: "",
                    fileList: [],
                    detectedImg: "",
                    ocrRaw: "",
                    ocrText: "",
                    uploading: !1,
                    previewImgHidden: !0,
                    isOCRing: !1,
                    hiddenDetectedImg: !0,
                    hiddenOcrRaw: !0,
                    hiddenOcrText: !0,
                    comporessSize: 960,
                    hiddenCompressBox: !1
                }
            }, components: {CodeHighlight: g}, methods: {
                changeCompressBtn: function (e) {
                    this.$data.hiddenCompressBox = !0 !== e
                }, handleChange: function (e) {
                    var t = e.file.status;
                    "uploading" !== t && (this.$data.fileList = [e.file], this.$data.upImage = y(e.file), this.$data.previewImgHidden = !1, console.log("success")), "done" === t ? (console.log("done"), this.$message.success("".concat(e.file.name, " file uploaded successfully."))) : "error" === t && (this.$message.error("".concat(e.file.name, " file upload failed.")), console.log("error"))
                }, beforeUpload: function (e) {
                    return this.fileList = [e], !1
                }, handleUpload: function () {
                    if (this.fileList.length < 1) this.$message.warning("还没有选择图片"); else {
                        var e = new FormData;
                        this.fileList.forEach((function (t) {
                            e.append("file", t)
                        })), !0 === this.$data.hiddenCompressBox ? e.append("compress", 0) : e.append("compress", this.$data.comporessSize), this.isOCRing = !0, this.uploading = !0;
                        var t = this;
                        w({
                            url: "/api/tr-run/",
                            method: "post",
                            headers: {"Content-Type": "multipart/form-data", "X-Requested-With": "XMLHttpRequest"},
                            transformRequest: {},
                            data: e
                        }).then((function (e) {
                            t.$data.detectedImg = e.data["data"]["img_detected"], t.$data.ocrRaw = "", t.$data.ocrText = "";
                            for (var a = 0, s = e.data["data"]["raw_out"], n = 0; n < s.length; n++) t.$data.ocrRaw += JSON.stringify(s[n]) + "\r", n < s.length - 1 ? (a = s[n + 1][0][1], Math.abs(s[n][0][1] - a) < s[n][0][3] / 2 ? t.$data.ocrText += s[n][1] + " " : t.$data.ocrText += s[n][1] + "\r") : t.$data.ocrText += s[n][1];
                            t.$data.uploading = !1, t.$data.isOCRing = !1, t.$data.hiddenDetectedImg = !1, t.$data.hiddenOcrRaw = !1, t.$data.hiddenOcrText = !1, t.$message.success("成功! 耗时：" + e.data["data"]["speed_time"] + " 秒")
                        })).catch((function (e) {
                            t.$data.isOCRing = !1;
                            var a = e.response["msg"] || e.message;
                            t.$message.error("错误：" + a), t.$data.hiddenDetectedImg = !0, t.$data.hiddenOcrRaw = !0, t.$data.hiddenOcrText = !0
                        }))
                    }
                }
            }, watch: {
                fileList: function (e, t) {
                    e.length <= 0 && (this.hiddenDetectedImg = !0, this.hiddenOcrRaw = !0, this.hiddenOcrText = !0)
                }
            }, mounted: function () {
                this.$nextTick((function () {
                    var e = this;
                    document.addEventListener("paste", (function (t) {
                        var a = t.clipboardData && t.clipboardData.items, s = null;
                        if (a && a.length) for (var n = 0; n < a.length; n++) if (-1 !== a[n].type.indexOf("image")) {
                            s = a[n].getAsFile();
                            break
                        }
                        null !== s && (e.$data.fileList = [s], e.$data.upImage = y(s), e.$data.previewImgHidden = !1), console.log(e.$data.fileList)
                    }))
                }))
            }
        }, O = x, k = (a("8fc1"), Object(i["a"])(O, f, u, !1, null, null, null)), C = k.exports;
        s["a"].use(l["a"]);
        var $ = [{path: "/", name: "Index", component: C}], R = new l["a"]({mode: "history", base: "/", routes: $}),
            z = R, _ = a("5efb"), T = a("98c5"), I = a("b558"), L = a("9a63"), S = a("e32c"), U = a("0c63"),
            D = a("a79d"), H = a("39ab"), E = (a("202f"), a("bc3a")), M = a.n(E), P = a("998c"), q = a.n(P);
        s["a"].use(q.a), s["a"].use(_["a"]), s["a"].use(T["a"]), s["a"].use(I["a"]), s["a"].use(L["a"]), s["a"].use(S["a"]), s["a"].use(U["a"]), s["a"].use(D["a"]), s["a"].use(H["a"]), s["a"].config.productionTip = !1, M.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", M.a.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded", M.a.defaults.transformRequest = [function (e) {
            var t = "";
            for (var a in e) t += encodeURIComponent(a) + "=" + encodeURIComponent(e[a]) + "&";
            return t
        }], new s["a"]({
            router: z, render: function (e) {
                return e(o)
            }
        }).$mount("#app")
    }, "5cad": function (e, t, a) {
    }, "85ec": function (e, t, a) {
    }, "8fc1": function (e, t, a) {
        "use strict";
        var s = a("9272"), n = a.n(s);
        n.a
    }, 9272: function (e, t, a) {
    }
});
//# sourceMappingURL=app.7dd3e457.js.map