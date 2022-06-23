/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.jsx */ "./client/src/components/Search.jsx");
/* harmony import */ var _RestroomList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RestroomList.jsx */ "./client/src/components/RestroomList.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  backgroud: #41326B\n"])));
var BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: #8377AF\n"])));

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "RESTROOM FINDER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Home"), " |", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Add a Restroom"), " |", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " About"), " |", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Search_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RestroomList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./client/src/components/RestroomList.jsx":
/*!************************************************!*\
  !*** ./client/src/components/RestroomList.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RestroomList = function RestroomList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Welcome to the Restroom Finder!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " Search a safe restroom where you are"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestroomList);

/***/ }),

/***/ "./client/src/components/Search.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Search.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0.3rem;\n  align-items: center;\n  margin: 1rem 0 0 1rem;\n  border: solid;\n  border-color: #36393E;\n"])));
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 0.5rem 0 0.5rem;\n  border: none;\n  outline: none;\n  background: #41326B;\n"])));

var Search = function Search() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = function handleSearchChange(e) {
    setSearch(e.target.value);
    searchQuestions(search);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMagnifyingGlass
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchInput, {
    type: "text",
    placeholder: " Search for restroom",
    value: search,
    size: "80",
    onChange: handleSearchChange
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);

/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);

/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === _typeof(d)) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);

/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "config": () => (/* binding */ config$1),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition$1),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "library": () => (/* binding */ library$1),
/* harmony export */   "noAuto": () => (/* binding */ noAuto$1),
/* harmony export */   "parse": () => (/* binding */ parse$1),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toHtml": () => (/* binding */ toHtml$1)
/* harmony export */ });
function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != _typeof2(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var PREFIX_TO_LONG_STYLE = {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
};
var LONG_STYLE_TO_PREFIX = {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
};
var ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = [].concat(_toConsumableArray(Object.keys(STYLE_TO_PREFIX)), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  styleDefault: 'solid',
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_config).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];

function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}

var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */


var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};
/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}

function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = Object.values(PREFIX_TO_LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = Object.keys(PREFIX_TO_STYLE);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault);
};

onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault);
});
build();

function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}

function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}

function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}

function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}

function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}

var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};

function getCanonicalPrefix(styleOrPrefix) {
  var style = PREFIX_TO_STYLE[styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[styleOrPrefix] || STYLE_TO_PREFIX[style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}

function getCanonicalIcon(values) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var givenPrefix = null;
  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE.includes(cls) ? LONG_STYLE_TO_PREFIX[cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES.indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls);
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);

function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}

function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}

function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}

function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

var library = new Library();

var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.familyPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val["abstract"].map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon(_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol(_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        "class": 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        "class": 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;

function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.1.1\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes["class"]) {
      var splitClasses = _abstract2[0].attributes["class"].split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes["class"] = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation() {
  disabled = true;
}

function enableObservation() {
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}

function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser(node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser(node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}

function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$2);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    })["catch"](function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};

var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        })["catch"](reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a["abstract"]);
            }) : children = children.concat(args["abstract"]);
          });
          return [{
            tag: 'span',
            attributes: {
              "class": ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];

function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract3 = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract3.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        })["catch"](reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    })["catch"](function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};

var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract4) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract4.attributes && (_abstract4.attributes.fill || force)) {
    _abstract4.attributes.fill = 'black';
  }

  return _abstract4;
}

function deGroup(_abstract5) {
  if (_abstract5.tag === 'g') {
    return _abstract5.children;
  } else {
    return [_abstract5];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;


/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fa0": () => (/* binding */ fa0),
/* harmony export */   "fa1": () => (/* binding */ fa1),
/* harmony export */   "fa2": () => (/* binding */ fa2),
/* harmony export */   "fa3": () => (/* binding */ fa3),
/* harmony export */   "fa4": () => (/* binding */ fa4),
/* harmony export */   "fa5": () => (/* binding */ fa5),
/* harmony export */   "fa6": () => (/* binding */ fa6),
/* harmony export */   "fa7": () => (/* binding */ fa7),
/* harmony export */   "fa8": () => (/* binding */ fa8),
/* harmony export */   "fa9": () => (/* binding */ fa9),
/* harmony export */   "faA": () => (/* binding */ faA),
/* harmony export */   "faAd": () => (/* binding */ faAd),
/* harmony export */   "faAdd": () => (/* binding */ faAdd),
/* harmony export */   "faAddressBook": () => (/* binding */ faAddressBook),
/* harmony export */   "faAddressCard": () => (/* binding */ faAddressCard),
/* harmony export */   "faAdjust": () => (/* binding */ faAdjust),
/* harmony export */   "faAirFreshener": () => (/* binding */ faAirFreshener),
/* harmony export */   "faAlignCenter": () => (/* binding */ faAlignCenter),
/* harmony export */   "faAlignJustify": () => (/* binding */ faAlignJustify),
/* harmony export */   "faAlignLeft": () => (/* binding */ faAlignLeft),
/* harmony export */   "faAlignRight": () => (/* binding */ faAlignRight),
/* harmony export */   "faAllergies": () => (/* binding */ faAllergies),
/* harmony export */   "faAmbulance": () => (/* binding */ faAmbulance),
/* harmony export */   "faAmericanSignLanguageInterpreting": () => (/* binding */ faAmericanSignLanguageInterpreting),
/* harmony export */   "faAnchor": () => (/* binding */ faAnchor),
/* harmony export */   "faAnchorCircleCheck": () => (/* binding */ faAnchorCircleCheck),
/* harmony export */   "faAnchorCircleExclamation": () => (/* binding */ faAnchorCircleExclamation),
/* harmony export */   "faAnchorCircleXmark": () => (/* binding */ faAnchorCircleXmark),
/* harmony export */   "faAnchorLock": () => (/* binding */ faAnchorLock),
/* harmony export */   "faAngleDoubleDown": () => (/* binding */ faAngleDoubleDown),
/* harmony export */   "faAngleDoubleLeft": () => (/* binding */ faAngleDoubleLeft),
/* harmony export */   "faAngleDoubleRight": () => (/* binding */ faAngleDoubleRight),
/* harmony export */   "faAngleDoubleUp": () => (/* binding */ faAngleDoubleUp),
/* harmony export */   "faAngleDown": () => (/* binding */ faAngleDown),
/* harmony export */   "faAngleLeft": () => (/* binding */ faAngleLeft),
/* harmony export */   "faAngleRight": () => (/* binding */ faAngleRight),
/* harmony export */   "faAngleUp": () => (/* binding */ faAngleUp),
/* harmony export */   "faAnglesDown": () => (/* binding */ faAnglesDown),
/* harmony export */   "faAnglesLeft": () => (/* binding */ faAnglesLeft),
/* harmony export */   "faAnglesRight": () => (/* binding */ faAnglesRight),
/* harmony export */   "faAnglesUp": () => (/* binding */ faAnglesUp),
/* harmony export */   "faAngry": () => (/* binding */ faAngry),
/* harmony export */   "faAnkh": () => (/* binding */ faAnkh),
/* harmony export */   "faAppleAlt": () => (/* binding */ faAppleAlt),
/* harmony export */   "faAppleWhole": () => (/* binding */ faAppleWhole),
/* harmony export */   "faArchive": () => (/* binding */ faArchive),
/* harmony export */   "faArchway": () => (/* binding */ faArchway),
/* harmony export */   "faAreaChart": () => (/* binding */ faAreaChart),
/* harmony export */   "faArrowAltCircleDown": () => (/* binding */ faArrowAltCircleDown),
/* harmony export */   "faArrowAltCircleLeft": () => (/* binding */ faArrowAltCircleLeft),
/* harmony export */   "faArrowAltCircleRight": () => (/* binding */ faArrowAltCircleRight),
/* harmony export */   "faArrowAltCircleUp": () => (/* binding */ faArrowAltCircleUp),
/* harmony export */   "faArrowCircleDown": () => (/* binding */ faArrowCircleDown),
/* harmony export */   "faArrowCircleLeft": () => (/* binding */ faArrowCircleLeft),
/* harmony export */   "faArrowCircleRight": () => (/* binding */ faArrowCircleRight),
/* harmony export */   "faArrowCircleUp": () => (/* binding */ faArrowCircleUp),
/* harmony export */   "faArrowDown": () => (/* binding */ faArrowDown),
/* harmony export */   "faArrowDown19": () => (/* binding */ faArrowDown19),
/* harmony export */   "faArrowDown91": () => (/* binding */ faArrowDown91),
/* harmony export */   "faArrowDownAZ": () => (/* binding */ faArrowDownAZ),
/* harmony export */   "faArrowDownLong": () => (/* binding */ faArrowDownLong),
/* harmony export */   "faArrowDownShortWide": () => (/* binding */ faArrowDownShortWide),
/* harmony export */   "faArrowDownUpAcrossLine": () => (/* binding */ faArrowDownUpAcrossLine),
/* harmony export */   "faArrowDownUpLock": () => (/* binding */ faArrowDownUpLock),
/* harmony export */   "faArrowDownWideShort": () => (/* binding */ faArrowDownWideShort),
/* harmony export */   "faArrowDownZA": () => (/* binding */ faArrowDownZA),
/* harmony export */   "faArrowLeft": () => (/* binding */ faArrowLeft),
/* harmony export */   "faArrowLeftLong": () => (/* binding */ faArrowLeftLong),
/* harmony export */   "faArrowLeftRotate": () => (/* binding */ faArrowLeftRotate),
/* harmony export */   "faArrowPointer": () => (/* binding */ faArrowPointer),
/* harmony export */   "faArrowRight": () => (/* binding */ faArrowRight),
/* harmony export */   "faArrowRightArrowLeft": () => (/* binding */ faArrowRightArrowLeft),
/* harmony export */   "faArrowRightFromBracket": () => (/* binding */ faArrowRightFromBracket),
/* harmony export */   "faArrowRightFromFile": () => (/* binding */ faArrowRightFromFile),
/* harmony export */   "faArrowRightLong": () => (/* binding */ faArrowRightLong),
/* harmony export */   "faArrowRightRotate": () => (/* binding */ faArrowRightRotate),
/* harmony export */   "faArrowRightToBracket": () => (/* binding */ faArrowRightToBracket),
/* harmony export */   "faArrowRightToCity": () => (/* binding */ faArrowRightToCity),
/* harmony export */   "faArrowRightToFile": () => (/* binding */ faArrowRightToFile),
/* harmony export */   "faArrowRotateBack": () => (/* binding */ faArrowRotateBack),
/* harmony export */   "faArrowRotateBackward": () => (/* binding */ faArrowRotateBackward),
/* harmony export */   "faArrowRotateForward": () => (/* binding */ faArrowRotateForward),
/* harmony export */   "faArrowRotateLeft": () => (/* binding */ faArrowRotateLeft),
/* harmony export */   "faArrowRotateRight": () => (/* binding */ faArrowRotateRight),
/* harmony export */   "faArrowTrendDown": () => (/* binding */ faArrowTrendDown),
/* harmony export */   "faArrowTrendUp": () => (/* binding */ faArrowTrendUp),
/* harmony export */   "faArrowTurnDown": () => (/* binding */ faArrowTurnDown),
/* harmony export */   "faArrowTurnRight": () => (/* binding */ faArrowTurnRight),
/* harmony export */   "faArrowTurnUp": () => (/* binding */ faArrowTurnUp),
/* harmony export */   "faArrowUp": () => (/* binding */ faArrowUp),
/* harmony export */   "faArrowUp19": () => (/* binding */ faArrowUp19),
/* harmony export */   "faArrowUp91": () => (/* binding */ faArrowUp91),
/* harmony export */   "faArrowUpAZ": () => (/* binding */ faArrowUpAZ),
/* harmony export */   "faArrowUpFromBracket": () => (/* binding */ faArrowUpFromBracket),
/* harmony export */   "faArrowUpFromGroundWater": () => (/* binding */ faArrowUpFromGroundWater),
/* harmony export */   "faArrowUpFromWaterPump": () => (/* binding */ faArrowUpFromWaterPump),
/* harmony export */   "faArrowUpLong": () => (/* binding */ faArrowUpLong),
/* harmony export */   "faArrowUpRightDots": () => (/* binding */ faArrowUpRightDots),
/* harmony export */   "faArrowUpRightFromSquare": () => (/* binding */ faArrowUpRightFromSquare),
/* harmony export */   "faArrowUpShortWide": () => (/* binding */ faArrowUpShortWide),
/* harmony export */   "faArrowUpWideShort": () => (/* binding */ faArrowUpWideShort),
/* harmony export */   "faArrowUpZA": () => (/* binding */ faArrowUpZA),
/* harmony export */   "faArrows": () => (/* binding */ faArrows),
/* harmony export */   "faArrowsAlt": () => (/* binding */ faArrowsAlt),
/* harmony export */   "faArrowsAltH": () => (/* binding */ faArrowsAltH),
/* harmony export */   "faArrowsAltV": () => (/* binding */ faArrowsAltV),
/* harmony export */   "faArrowsDownToLine": () => (/* binding */ faArrowsDownToLine),
/* harmony export */   "faArrowsDownToPeople": () => (/* binding */ faArrowsDownToPeople),
/* harmony export */   "faArrowsH": () => (/* binding */ faArrowsH),
/* harmony export */   "faArrowsLeftRight": () => (/* binding */ faArrowsLeftRight),
/* harmony export */   "faArrowsLeftRightToLine": () => (/* binding */ faArrowsLeftRightToLine),
/* harmony export */   "faArrowsRotate": () => (/* binding */ faArrowsRotate),
/* harmony export */   "faArrowsSpin": () => (/* binding */ faArrowsSpin),
/* harmony export */   "faArrowsSplitUpAndLeft": () => (/* binding */ faArrowsSplitUpAndLeft),
/* harmony export */   "faArrowsToCircle": () => (/* binding */ faArrowsToCircle),
/* harmony export */   "faArrowsToDot": () => (/* binding */ faArrowsToDot),
/* harmony export */   "faArrowsToEye": () => (/* binding */ faArrowsToEye),
/* harmony export */   "faArrowsTurnRight": () => (/* binding */ faArrowsTurnRight),
/* harmony export */   "faArrowsTurnToDots": () => (/* binding */ faArrowsTurnToDots),
/* harmony export */   "faArrowsUpDown": () => (/* binding */ faArrowsUpDown),
/* harmony export */   "faArrowsUpDownLeftRight": () => (/* binding */ faArrowsUpDownLeftRight),
/* harmony export */   "faArrowsUpToLine": () => (/* binding */ faArrowsUpToLine),
/* harmony export */   "faArrowsV": () => (/* binding */ faArrowsV),
/* harmony export */   "faAslInterpreting": () => (/* binding */ faAslInterpreting),
/* harmony export */   "faAssistiveListeningSystems": () => (/* binding */ faAssistiveListeningSystems),
/* harmony export */   "faAsterisk": () => (/* binding */ faAsterisk),
/* harmony export */   "faAt": () => (/* binding */ faAt),
/* harmony export */   "faAtlas": () => (/* binding */ faAtlas),
/* harmony export */   "faAtom": () => (/* binding */ faAtom),
/* harmony export */   "faAudioDescription": () => (/* binding */ faAudioDescription),
/* harmony export */   "faAustralSign": () => (/* binding */ faAustralSign),
/* harmony export */   "faAutomobile": () => (/* binding */ faAutomobile),
/* harmony export */   "faAward": () => (/* binding */ faAward),
/* harmony export */   "faB": () => (/* binding */ faB),
/* harmony export */   "faBaby": () => (/* binding */ faBaby),
/* harmony export */   "faBabyCarriage": () => (/* binding */ faBabyCarriage),
/* harmony export */   "faBackspace": () => (/* binding */ faBackspace),
/* harmony export */   "faBackward": () => (/* binding */ faBackward),
/* harmony export */   "faBackwardFast": () => (/* binding */ faBackwardFast),
/* harmony export */   "faBackwardStep": () => (/* binding */ faBackwardStep),
/* harmony export */   "faBacon": () => (/* binding */ faBacon),
/* harmony export */   "faBacteria": () => (/* binding */ faBacteria),
/* harmony export */   "faBacterium": () => (/* binding */ faBacterium),
/* harmony export */   "faBagShopping": () => (/* binding */ faBagShopping),
/* harmony export */   "faBahai": () => (/* binding */ faBahai),
/* harmony export */   "faBahtSign": () => (/* binding */ faBahtSign),
/* harmony export */   "faBalanceScale": () => (/* binding */ faBalanceScale),
/* harmony export */   "faBalanceScaleLeft": () => (/* binding */ faBalanceScaleLeft),
/* harmony export */   "faBalanceScaleRight": () => (/* binding */ faBalanceScaleRight),
/* harmony export */   "faBan": () => (/* binding */ faBan),
/* harmony export */   "faBanSmoking": () => (/* binding */ faBanSmoking),
/* harmony export */   "faBandAid": () => (/* binding */ faBandAid),
/* harmony export */   "faBandage": () => (/* binding */ faBandage),
/* harmony export */   "faBank": () => (/* binding */ faBank),
/* harmony export */   "faBarChart": () => (/* binding */ faBarChart),
/* harmony export */   "faBarcode": () => (/* binding */ faBarcode),
/* harmony export */   "faBars": () => (/* binding */ faBars),
/* harmony export */   "faBarsProgress": () => (/* binding */ faBarsProgress),
/* harmony export */   "faBarsStaggered": () => (/* binding */ faBarsStaggered),
/* harmony export */   "faBaseball": () => (/* binding */ faBaseball),
/* harmony export */   "faBaseballBall": () => (/* binding */ faBaseballBall),
/* harmony export */   "faBaseballBatBall": () => (/* binding */ faBaseballBatBall),
/* harmony export */   "faBasketShopping": () => (/* binding */ faBasketShopping),
/* harmony export */   "faBasketball": () => (/* binding */ faBasketball),
/* harmony export */   "faBasketballBall": () => (/* binding */ faBasketballBall),
/* harmony export */   "faBath": () => (/* binding */ faBath),
/* harmony export */   "faBathtub": () => (/* binding */ faBathtub),
/* harmony export */   "faBattery": () => (/* binding */ faBattery),
/* harmony export */   "faBattery0": () => (/* binding */ faBattery0),
/* harmony export */   "faBattery2": () => (/* binding */ faBattery2),
/* harmony export */   "faBattery3": () => (/* binding */ faBattery3),
/* harmony export */   "faBattery4": () => (/* binding */ faBattery4),
/* harmony export */   "faBattery5": () => (/* binding */ faBattery5),
/* harmony export */   "faBatteryCar": () => (/* binding */ faBatteryCar),
/* harmony export */   "faBatteryEmpty": () => (/* binding */ faBatteryEmpty),
/* harmony export */   "faBatteryFull": () => (/* binding */ faBatteryFull),
/* harmony export */   "faBatteryHalf": () => (/* binding */ faBatteryHalf),
/* harmony export */   "faBatteryQuarter": () => (/* binding */ faBatteryQuarter),
/* harmony export */   "faBatteryThreeQuarters": () => (/* binding */ faBatteryThreeQuarters),
/* harmony export */   "faBed": () => (/* binding */ faBed),
/* harmony export */   "faBedPulse": () => (/* binding */ faBedPulse),
/* harmony export */   "faBeer": () => (/* binding */ faBeer),
/* harmony export */   "faBeerMugEmpty": () => (/* binding */ faBeerMugEmpty),
/* harmony export */   "faBell": () => (/* binding */ faBell),
/* harmony export */   "faBellConcierge": () => (/* binding */ faBellConcierge),
/* harmony export */   "faBellSlash": () => (/* binding */ faBellSlash),
/* harmony export */   "faBezierCurve": () => (/* binding */ faBezierCurve),
/* harmony export */   "faBible": () => (/* binding */ faBible),
/* harmony export */   "faBicycle": () => (/* binding */ faBicycle),
/* harmony export */   "faBiking": () => (/* binding */ faBiking),
/* harmony export */   "faBinoculars": () => (/* binding */ faBinoculars),
/* harmony export */   "faBiohazard": () => (/* binding */ faBiohazard),
/* harmony export */   "faBirthdayCake": () => (/* binding */ faBirthdayCake),
/* harmony export */   "faBitcoinSign": () => (/* binding */ faBitcoinSign),
/* harmony export */   "faBlackboard": () => (/* binding */ faBlackboard),
/* harmony export */   "faBlender": () => (/* binding */ faBlender),
/* harmony export */   "faBlenderPhone": () => (/* binding */ faBlenderPhone),
/* harmony export */   "faBlind": () => (/* binding */ faBlind),
/* harmony export */   "faBlog": () => (/* binding */ faBlog),
/* harmony export */   "faBold": () => (/* binding */ faBold),
/* harmony export */   "faBolt": () => (/* binding */ faBolt),
/* harmony export */   "faBoltLightning": () => (/* binding */ faBoltLightning),
/* harmony export */   "faBomb": () => (/* binding */ faBomb),
/* harmony export */   "faBone": () => (/* binding */ faBone),
/* harmony export */   "faBong": () => (/* binding */ faBong),
/* harmony export */   "faBook": () => (/* binding */ faBook),
/* harmony export */   "faBookAtlas": () => (/* binding */ faBookAtlas),
/* harmony export */   "faBookBible": () => (/* binding */ faBookBible),
/* harmony export */   "faBookBookmark": () => (/* binding */ faBookBookmark),
/* harmony export */   "faBookDead": () => (/* binding */ faBookDead),
/* harmony export */   "faBookJournalWhills": () => (/* binding */ faBookJournalWhills),
/* harmony export */   "faBookMedical": () => (/* binding */ faBookMedical),
/* harmony export */   "faBookOpen": () => (/* binding */ faBookOpen),
/* harmony export */   "faBookOpenReader": () => (/* binding */ faBookOpenReader),
/* harmony export */   "faBookQuran": () => (/* binding */ faBookQuran),
/* harmony export */   "faBookReader": () => (/* binding */ faBookReader),
/* harmony export */   "faBookSkull": () => (/* binding */ faBookSkull),
/* harmony export */   "faBookmark": () => (/* binding */ faBookmark),
/* harmony export */   "faBorderAll": () => (/* binding */ faBorderAll),
/* harmony export */   "faBorderNone": () => (/* binding */ faBorderNone),
/* harmony export */   "faBorderStyle": () => (/* binding */ faBorderStyle),
/* harmony export */   "faBorderTopLeft": () => (/* binding */ faBorderTopLeft),
/* harmony export */   "faBoreHole": () => (/* binding */ faBoreHole),
/* harmony export */   "faBottleDroplet": () => (/* binding */ faBottleDroplet),
/* harmony export */   "faBottleWater": () => (/* binding */ faBottleWater),
/* harmony export */   "faBowlFood": () => (/* binding */ faBowlFood),
/* harmony export */   "faBowlRice": () => (/* binding */ faBowlRice),
/* harmony export */   "faBowlingBall": () => (/* binding */ faBowlingBall),
/* harmony export */   "faBox": () => (/* binding */ faBox),
/* harmony export */   "faBoxArchive": () => (/* binding */ faBoxArchive),
/* harmony export */   "faBoxOpen": () => (/* binding */ faBoxOpen),
/* harmony export */   "faBoxTissue": () => (/* binding */ faBoxTissue),
/* harmony export */   "faBoxes": () => (/* binding */ faBoxes),
/* harmony export */   "faBoxesAlt": () => (/* binding */ faBoxesAlt),
/* harmony export */   "faBoxesPacking": () => (/* binding */ faBoxesPacking),
/* harmony export */   "faBoxesStacked": () => (/* binding */ faBoxesStacked),
/* harmony export */   "faBraille": () => (/* binding */ faBraille),
/* harmony export */   "faBrain": () => (/* binding */ faBrain),
/* harmony export */   "faBrazilianRealSign": () => (/* binding */ faBrazilianRealSign),
/* harmony export */   "faBreadSlice": () => (/* binding */ faBreadSlice),
/* harmony export */   "faBridge": () => (/* binding */ faBridge),
/* harmony export */   "faBridgeCircleCheck": () => (/* binding */ faBridgeCircleCheck),
/* harmony export */   "faBridgeCircleExclamation": () => (/* binding */ faBridgeCircleExclamation),
/* harmony export */   "faBridgeCircleXmark": () => (/* binding */ faBridgeCircleXmark),
/* harmony export */   "faBridgeLock": () => (/* binding */ faBridgeLock),
/* harmony export */   "faBridgeWater": () => (/* binding */ faBridgeWater),
/* harmony export */   "faBriefcase": () => (/* binding */ faBriefcase),
/* harmony export */   "faBriefcaseClock": () => (/* binding */ faBriefcaseClock),
/* harmony export */   "faBriefcaseMedical": () => (/* binding */ faBriefcaseMedical),
/* harmony export */   "faBroadcastTower": () => (/* binding */ faBroadcastTower),
/* harmony export */   "faBroom": () => (/* binding */ faBroom),
/* harmony export */   "faBroomBall": () => (/* binding */ faBroomBall),
/* harmony export */   "faBrush": () => (/* binding */ faBrush),
/* harmony export */   "faBucket": () => (/* binding */ faBucket),
/* harmony export */   "faBug": () => (/* binding */ faBug),
/* harmony export */   "faBugSlash": () => (/* binding */ faBugSlash),
/* harmony export */   "faBugs": () => (/* binding */ faBugs),
/* harmony export */   "faBuilding": () => (/* binding */ faBuilding),
/* harmony export */   "faBuildingCircleArrowRight": () => (/* binding */ faBuildingCircleArrowRight),
/* harmony export */   "faBuildingCircleCheck": () => (/* binding */ faBuildingCircleCheck),
/* harmony export */   "faBuildingCircleExclamation": () => (/* binding */ faBuildingCircleExclamation),
/* harmony export */   "faBuildingCircleXmark": () => (/* binding */ faBuildingCircleXmark),
/* harmony export */   "faBuildingColumns": () => (/* binding */ faBuildingColumns),
/* harmony export */   "faBuildingFlag": () => (/* binding */ faBuildingFlag),
/* harmony export */   "faBuildingLock": () => (/* binding */ faBuildingLock),
/* harmony export */   "faBuildingNgo": () => (/* binding */ faBuildingNgo),
/* harmony export */   "faBuildingShield": () => (/* binding */ faBuildingShield),
/* harmony export */   "faBuildingUn": () => (/* binding */ faBuildingUn),
/* harmony export */   "faBuildingUser": () => (/* binding */ faBuildingUser),
/* harmony export */   "faBuildingWheat": () => (/* binding */ faBuildingWheat),
/* harmony export */   "faBullhorn": () => (/* binding */ faBullhorn),
/* harmony export */   "faBullseye": () => (/* binding */ faBullseye),
/* harmony export */   "faBurger": () => (/* binding */ faBurger),
/* harmony export */   "faBurn": () => (/* binding */ faBurn),
/* harmony export */   "faBurst": () => (/* binding */ faBurst),
/* harmony export */   "faBus": () => (/* binding */ faBus),
/* harmony export */   "faBusAlt": () => (/* binding */ faBusAlt),
/* harmony export */   "faBusSimple": () => (/* binding */ faBusSimple),
/* harmony export */   "faBusinessTime": () => (/* binding */ faBusinessTime),
/* harmony export */   "faC": () => (/* binding */ faC),
/* harmony export */   "faCab": () => (/* binding */ faCab),
/* harmony export */   "faCake": () => (/* binding */ faCake),
/* harmony export */   "faCakeCandles": () => (/* binding */ faCakeCandles),
/* harmony export */   "faCalculator": () => (/* binding */ faCalculator),
/* harmony export */   "faCalendar": () => (/* binding */ faCalendar),
/* harmony export */   "faCalendarAlt": () => (/* binding */ faCalendarAlt),
/* harmony export */   "faCalendarCheck": () => (/* binding */ faCalendarCheck),
/* harmony export */   "faCalendarDay": () => (/* binding */ faCalendarDay),
/* harmony export */   "faCalendarDays": () => (/* binding */ faCalendarDays),
/* harmony export */   "faCalendarMinus": () => (/* binding */ faCalendarMinus),
/* harmony export */   "faCalendarPlus": () => (/* binding */ faCalendarPlus),
/* harmony export */   "faCalendarTimes": () => (/* binding */ faCalendarTimes),
/* harmony export */   "faCalendarWeek": () => (/* binding */ faCalendarWeek),
/* harmony export */   "faCalendarXmark": () => (/* binding */ faCalendarXmark),
/* harmony export */   "faCamera": () => (/* binding */ faCamera),
/* harmony export */   "faCameraAlt": () => (/* binding */ faCameraAlt),
/* harmony export */   "faCameraRetro": () => (/* binding */ faCameraRetro),
/* harmony export */   "faCameraRotate": () => (/* binding */ faCameraRotate),
/* harmony export */   "faCampground": () => (/* binding */ faCampground),
/* harmony export */   "faCancel": () => (/* binding */ faCancel),
/* harmony export */   "faCandyCane": () => (/* binding */ faCandyCane),
/* harmony export */   "faCannabis": () => (/* binding */ faCannabis),
/* harmony export */   "faCapsules": () => (/* binding */ faCapsules),
/* harmony export */   "faCar": () => (/* binding */ faCar),
/* harmony export */   "faCarAlt": () => (/* binding */ faCarAlt),
/* harmony export */   "faCarBattery": () => (/* binding */ faCarBattery),
/* harmony export */   "faCarBurst": () => (/* binding */ faCarBurst),
/* harmony export */   "faCarCrash": () => (/* binding */ faCarCrash),
/* harmony export */   "faCarOn": () => (/* binding */ faCarOn),
/* harmony export */   "faCarRear": () => (/* binding */ faCarRear),
/* harmony export */   "faCarSide": () => (/* binding */ faCarSide),
/* harmony export */   "faCarTunnel": () => (/* binding */ faCarTunnel),
/* harmony export */   "faCaravan": () => (/* binding */ faCaravan),
/* harmony export */   "faCaretDown": () => (/* binding */ faCaretDown),
/* harmony export */   "faCaretLeft": () => (/* binding */ faCaretLeft),
/* harmony export */   "faCaretRight": () => (/* binding */ faCaretRight),
/* harmony export */   "faCaretSquareDown": () => (/* binding */ faCaretSquareDown),
/* harmony export */   "faCaretSquareLeft": () => (/* binding */ faCaretSquareLeft),
/* harmony export */   "faCaretSquareRight": () => (/* binding */ faCaretSquareRight),
/* harmony export */   "faCaretSquareUp": () => (/* binding */ faCaretSquareUp),
/* harmony export */   "faCaretUp": () => (/* binding */ faCaretUp),
/* harmony export */   "faCarriageBaby": () => (/* binding */ faCarriageBaby),
/* harmony export */   "faCarrot": () => (/* binding */ faCarrot),
/* harmony export */   "faCartArrowDown": () => (/* binding */ faCartArrowDown),
/* harmony export */   "faCartFlatbed": () => (/* binding */ faCartFlatbed),
/* harmony export */   "faCartFlatbedSuitcase": () => (/* binding */ faCartFlatbedSuitcase),
/* harmony export */   "faCartPlus": () => (/* binding */ faCartPlus),
/* harmony export */   "faCartShopping": () => (/* binding */ faCartShopping),
/* harmony export */   "faCashRegister": () => (/* binding */ faCashRegister),
/* harmony export */   "faCat": () => (/* binding */ faCat),
/* harmony export */   "faCediSign": () => (/* binding */ faCediSign),
/* harmony export */   "faCentSign": () => (/* binding */ faCentSign),
/* harmony export */   "faCertificate": () => (/* binding */ faCertificate),
/* harmony export */   "faChain": () => (/* binding */ faChain),
/* harmony export */   "faChainBroken": () => (/* binding */ faChainBroken),
/* harmony export */   "faChainSlash": () => (/* binding */ faChainSlash),
/* harmony export */   "faChair": () => (/* binding */ faChair),
/* harmony export */   "faChalkboard": () => (/* binding */ faChalkboard),
/* harmony export */   "faChalkboardTeacher": () => (/* binding */ faChalkboardTeacher),
/* harmony export */   "faChalkboardUser": () => (/* binding */ faChalkboardUser),
/* harmony export */   "faChampagneGlasses": () => (/* binding */ faChampagneGlasses),
/* harmony export */   "faChargingStation": () => (/* binding */ faChargingStation),
/* harmony export */   "faChartArea": () => (/* binding */ faChartArea),
/* harmony export */   "faChartBar": () => (/* binding */ faChartBar),
/* harmony export */   "faChartColumn": () => (/* binding */ faChartColumn),
/* harmony export */   "faChartGantt": () => (/* binding */ faChartGantt),
/* harmony export */   "faChartLine": () => (/* binding */ faChartLine),
/* harmony export */   "faChartPie": () => (/* binding */ faChartPie),
/* harmony export */   "faChartSimple": () => (/* binding */ faChartSimple),
/* harmony export */   "faCheck": () => (/* binding */ faCheck),
/* harmony export */   "faCheckCircle": () => (/* binding */ faCheckCircle),
/* harmony export */   "faCheckDouble": () => (/* binding */ faCheckDouble),
/* harmony export */   "faCheckSquare": () => (/* binding */ faCheckSquare),
/* harmony export */   "faCheckToSlot": () => (/* binding */ faCheckToSlot),
/* harmony export */   "faCheese": () => (/* binding */ faCheese),
/* harmony export */   "faChess": () => (/* binding */ faChess),
/* harmony export */   "faChessBishop": () => (/* binding */ faChessBishop),
/* harmony export */   "faChessBoard": () => (/* binding */ faChessBoard),
/* harmony export */   "faChessKing": () => (/* binding */ faChessKing),
/* harmony export */   "faChessKnight": () => (/* binding */ faChessKnight),
/* harmony export */   "faChessPawn": () => (/* binding */ faChessPawn),
/* harmony export */   "faChessQueen": () => (/* binding */ faChessQueen),
/* harmony export */   "faChessRook": () => (/* binding */ faChessRook),
/* harmony export */   "faChevronCircleDown": () => (/* binding */ faChevronCircleDown),
/* harmony export */   "faChevronCircleLeft": () => (/* binding */ faChevronCircleLeft),
/* harmony export */   "faChevronCircleRight": () => (/* binding */ faChevronCircleRight),
/* harmony export */   "faChevronCircleUp": () => (/* binding */ faChevronCircleUp),
/* harmony export */   "faChevronDown": () => (/* binding */ faChevronDown),
/* harmony export */   "faChevronLeft": () => (/* binding */ faChevronLeft),
/* harmony export */   "faChevronRight": () => (/* binding */ faChevronRight),
/* harmony export */   "faChevronUp": () => (/* binding */ faChevronUp),
/* harmony export */   "faChild": () => (/* binding */ faChild),
/* harmony export */   "faChildDress": () => (/* binding */ faChildDress),
/* harmony export */   "faChildReaching": () => (/* binding */ faChildReaching),
/* harmony export */   "faChildRifle": () => (/* binding */ faChildRifle),
/* harmony export */   "faChildren": () => (/* binding */ faChildren),
/* harmony export */   "faChurch": () => (/* binding */ faChurch),
/* harmony export */   "faCircle": () => (/* binding */ faCircle),
/* harmony export */   "faCircleArrowDown": () => (/* binding */ faCircleArrowDown),
/* harmony export */   "faCircleArrowLeft": () => (/* binding */ faCircleArrowLeft),
/* harmony export */   "faCircleArrowRight": () => (/* binding */ faCircleArrowRight),
/* harmony export */   "faCircleArrowUp": () => (/* binding */ faCircleArrowUp),
/* harmony export */   "faCircleCheck": () => (/* binding */ faCircleCheck),
/* harmony export */   "faCircleChevronDown": () => (/* binding */ faCircleChevronDown),
/* harmony export */   "faCircleChevronLeft": () => (/* binding */ faCircleChevronLeft),
/* harmony export */   "faCircleChevronRight": () => (/* binding */ faCircleChevronRight),
/* harmony export */   "faCircleChevronUp": () => (/* binding */ faCircleChevronUp),
/* harmony export */   "faCircleDollarToSlot": () => (/* binding */ faCircleDollarToSlot),
/* harmony export */   "faCircleDot": () => (/* binding */ faCircleDot),
/* harmony export */   "faCircleDown": () => (/* binding */ faCircleDown),
/* harmony export */   "faCircleExclamation": () => (/* binding */ faCircleExclamation),
/* harmony export */   "faCircleH": () => (/* binding */ faCircleH),
/* harmony export */   "faCircleHalfStroke": () => (/* binding */ faCircleHalfStroke),
/* harmony export */   "faCircleInfo": () => (/* binding */ faCircleInfo),
/* harmony export */   "faCircleLeft": () => (/* binding */ faCircleLeft),
/* harmony export */   "faCircleMinus": () => (/* binding */ faCircleMinus),
/* harmony export */   "faCircleNodes": () => (/* binding */ faCircleNodes),
/* harmony export */   "faCircleNotch": () => (/* binding */ faCircleNotch),
/* harmony export */   "faCirclePause": () => (/* binding */ faCirclePause),
/* harmony export */   "faCirclePlay": () => (/* binding */ faCirclePlay),
/* harmony export */   "faCirclePlus": () => (/* binding */ faCirclePlus),
/* harmony export */   "faCircleQuestion": () => (/* binding */ faCircleQuestion),
/* harmony export */   "faCircleRadiation": () => (/* binding */ faCircleRadiation),
/* harmony export */   "faCircleRight": () => (/* binding */ faCircleRight),
/* harmony export */   "faCircleStop": () => (/* binding */ faCircleStop),
/* harmony export */   "faCircleUp": () => (/* binding */ faCircleUp),
/* harmony export */   "faCircleUser": () => (/* binding */ faCircleUser),
/* harmony export */   "faCircleXmark": () => (/* binding */ faCircleXmark),
/* harmony export */   "faCity": () => (/* binding */ faCity),
/* harmony export */   "faClapperboard": () => (/* binding */ faClapperboard),
/* harmony export */   "faClinicMedical": () => (/* binding */ faClinicMedical),
/* harmony export */   "faClipboard": () => (/* binding */ faClipboard),
/* harmony export */   "faClipboardCheck": () => (/* binding */ faClipboardCheck),
/* harmony export */   "faClipboardList": () => (/* binding */ faClipboardList),
/* harmony export */   "faClipboardQuestion": () => (/* binding */ faClipboardQuestion),
/* harmony export */   "faClipboardUser": () => (/* binding */ faClipboardUser),
/* harmony export */   "faClock": () => (/* binding */ faClock),
/* harmony export */   "faClockFour": () => (/* binding */ faClockFour),
/* harmony export */   "faClockRotateLeft": () => (/* binding */ faClockRotateLeft),
/* harmony export */   "faClone": () => (/* binding */ faClone),
/* harmony export */   "faClose": () => (/* binding */ faClose),
/* harmony export */   "faClosedCaptioning": () => (/* binding */ faClosedCaptioning),
/* harmony export */   "faCloud": () => (/* binding */ faCloud),
/* harmony export */   "faCloudArrowDown": () => (/* binding */ faCloudArrowDown),
/* harmony export */   "faCloudArrowUp": () => (/* binding */ faCloudArrowUp),
/* harmony export */   "faCloudBolt": () => (/* binding */ faCloudBolt),
/* harmony export */   "faCloudDownload": () => (/* binding */ faCloudDownload),
/* harmony export */   "faCloudDownloadAlt": () => (/* binding */ faCloudDownloadAlt),
/* harmony export */   "faCloudMeatball": () => (/* binding */ faCloudMeatball),
/* harmony export */   "faCloudMoon": () => (/* binding */ faCloudMoon),
/* harmony export */   "faCloudMoonRain": () => (/* binding */ faCloudMoonRain),
/* harmony export */   "faCloudRain": () => (/* binding */ faCloudRain),
/* harmony export */   "faCloudShowersHeavy": () => (/* binding */ faCloudShowersHeavy),
/* harmony export */   "faCloudShowersWater": () => (/* binding */ faCloudShowersWater),
/* harmony export */   "faCloudSun": () => (/* binding */ faCloudSun),
/* harmony export */   "faCloudSunRain": () => (/* binding */ faCloudSunRain),
/* harmony export */   "faCloudUpload": () => (/* binding */ faCloudUpload),
/* harmony export */   "faCloudUploadAlt": () => (/* binding */ faCloudUploadAlt),
/* harmony export */   "faClover": () => (/* binding */ faClover),
/* harmony export */   "faCny": () => (/* binding */ faCny),
/* harmony export */   "faCocktail": () => (/* binding */ faCocktail),
/* harmony export */   "faCode": () => (/* binding */ faCode),
/* harmony export */   "faCodeBranch": () => (/* binding */ faCodeBranch),
/* harmony export */   "faCodeCommit": () => (/* binding */ faCodeCommit),
/* harmony export */   "faCodeCompare": () => (/* binding */ faCodeCompare),
/* harmony export */   "faCodeFork": () => (/* binding */ faCodeFork),
/* harmony export */   "faCodeMerge": () => (/* binding */ faCodeMerge),
/* harmony export */   "faCodePullRequest": () => (/* binding */ faCodePullRequest),
/* harmony export */   "faCoffee": () => (/* binding */ faCoffee),
/* harmony export */   "faCog": () => (/* binding */ faCog),
/* harmony export */   "faCogs": () => (/* binding */ faCogs),
/* harmony export */   "faCoins": () => (/* binding */ faCoins),
/* harmony export */   "faColonSign": () => (/* binding */ faColonSign),
/* harmony export */   "faColumns": () => (/* binding */ faColumns),
/* harmony export */   "faComment": () => (/* binding */ faComment),
/* harmony export */   "faCommentAlt": () => (/* binding */ faCommentAlt),
/* harmony export */   "faCommentDollar": () => (/* binding */ faCommentDollar),
/* harmony export */   "faCommentDots": () => (/* binding */ faCommentDots),
/* harmony export */   "faCommentMedical": () => (/* binding */ faCommentMedical),
/* harmony export */   "faCommentSlash": () => (/* binding */ faCommentSlash),
/* harmony export */   "faCommentSms": () => (/* binding */ faCommentSms),
/* harmony export */   "faCommenting": () => (/* binding */ faCommenting),
/* harmony export */   "faComments": () => (/* binding */ faComments),
/* harmony export */   "faCommentsDollar": () => (/* binding */ faCommentsDollar),
/* harmony export */   "faCompactDisc": () => (/* binding */ faCompactDisc),
/* harmony export */   "faCompass": () => (/* binding */ faCompass),
/* harmony export */   "faCompassDrafting": () => (/* binding */ faCompassDrafting),
/* harmony export */   "faCompress": () => (/* binding */ faCompress),
/* harmony export */   "faCompressAlt": () => (/* binding */ faCompressAlt),
/* harmony export */   "faCompressArrowsAlt": () => (/* binding */ faCompressArrowsAlt),
/* harmony export */   "faComputer": () => (/* binding */ faComputer),
/* harmony export */   "faComputerMouse": () => (/* binding */ faComputerMouse),
/* harmony export */   "faConciergeBell": () => (/* binding */ faConciergeBell),
/* harmony export */   "faContactBook": () => (/* binding */ faContactBook),
/* harmony export */   "faContactCard": () => (/* binding */ faContactCard),
/* harmony export */   "faCookie": () => (/* binding */ faCookie),
/* harmony export */   "faCookieBite": () => (/* binding */ faCookieBite),
/* harmony export */   "faCopy": () => (/* binding */ faCopy),
/* harmony export */   "faCopyright": () => (/* binding */ faCopyright),
/* harmony export */   "faCouch": () => (/* binding */ faCouch),
/* harmony export */   "faCow": () => (/* binding */ faCow),
/* harmony export */   "faCreditCard": () => (/* binding */ faCreditCard),
/* harmony export */   "faCreditCardAlt": () => (/* binding */ faCreditCardAlt),
/* harmony export */   "faCrop": () => (/* binding */ faCrop),
/* harmony export */   "faCropAlt": () => (/* binding */ faCropAlt),
/* harmony export */   "faCropSimple": () => (/* binding */ faCropSimple),
/* harmony export */   "faCross": () => (/* binding */ faCross),
/* harmony export */   "faCrosshairs": () => (/* binding */ faCrosshairs),
/* harmony export */   "faCrow": () => (/* binding */ faCrow),
/* harmony export */   "faCrown": () => (/* binding */ faCrown),
/* harmony export */   "faCrutch": () => (/* binding */ faCrutch),
/* harmony export */   "faCruzeiroSign": () => (/* binding */ faCruzeiroSign),
/* harmony export */   "faCube": () => (/* binding */ faCube),
/* harmony export */   "faCubes": () => (/* binding */ faCubes),
/* harmony export */   "faCubesStacked": () => (/* binding */ faCubesStacked),
/* harmony export */   "faCut": () => (/* binding */ faCut),
/* harmony export */   "faCutlery": () => (/* binding */ faCutlery),
/* harmony export */   "faD": () => (/* binding */ faD),
/* harmony export */   "faDashboard": () => (/* binding */ faDashboard),
/* harmony export */   "faDatabase": () => (/* binding */ faDatabase),
/* harmony export */   "faDeaf": () => (/* binding */ faDeaf),
/* harmony export */   "faDeafness": () => (/* binding */ faDeafness),
/* harmony export */   "faDedent": () => (/* binding */ faDedent),
/* harmony export */   "faDeleteLeft": () => (/* binding */ faDeleteLeft),
/* harmony export */   "faDemocrat": () => (/* binding */ faDemocrat),
/* harmony export */   "faDesktop": () => (/* binding */ faDesktop),
/* harmony export */   "faDesktopAlt": () => (/* binding */ faDesktopAlt),
/* harmony export */   "faDharmachakra": () => (/* binding */ faDharmachakra),
/* harmony export */   "faDiagnoses": () => (/* binding */ faDiagnoses),
/* harmony export */   "faDiagramNext": () => (/* binding */ faDiagramNext),
/* harmony export */   "faDiagramPredecessor": () => (/* binding */ faDiagramPredecessor),
/* harmony export */   "faDiagramProject": () => (/* binding */ faDiagramProject),
/* harmony export */   "faDiagramSuccessor": () => (/* binding */ faDiagramSuccessor),
/* harmony export */   "faDiamond": () => (/* binding */ faDiamond),
/* harmony export */   "faDiamondTurnRight": () => (/* binding */ faDiamondTurnRight),
/* harmony export */   "faDice": () => (/* binding */ faDice),
/* harmony export */   "faDiceD20": () => (/* binding */ faDiceD20),
/* harmony export */   "faDiceD6": () => (/* binding */ faDiceD6),
/* harmony export */   "faDiceFive": () => (/* binding */ faDiceFive),
/* harmony export */   "faDiceFour": () => (/* binding */ faDiceFour),
/* harmony export */   "faDiceOne": () => (/* binding */ faDiceOne),
/* harmony export */   "faDiceSix": () => (/* binding */ faDiceSix),
/* harmony export */   "faDiceThree": () => (/* binding */ faDiceThree),
/* harmony export */   "faDiceTwo": () => (/* binding */ faDiceTwo),
/* harmony export */   "faDigging": () => (/* binding */ faDigging),
/* harmony export */   "faDigitalTachograph": () => (/* binding */ faDigitalTachograph),
/* harmony export */   "faDirections": () => (/* binding */ faDirections),
/* harmony export */   "faDisease": () => (/* binding */ faDisease),
/* harmony export */   "faDisplay": () => (/* binding */ faDisplay),
/* harmony export */   "faDivide": () => (/* binding */ faDivide),
/* harmony export */   "faDizzy": () => (/* binding */ faDizzy),
/* harmony export */   "faDna": () => (/* binding */ faDna),
/* harmony export */   "faDog": () => (/* binding */ faDog),
/* harmony export */   "faDollar": () => (/* binding */ faDollar),
/* harmony export */   "faDollarSign": () => (/* binding */ faDollarSign),
/* harmony export */   "faDolly": () => (/* binding */ faDolly),
/* harmony export */   "faDollyBox": () => (/* binding */ faDollyBox),
/* harmony export */   "faDollyFlatbed": () => (/* binding */ faDollyFlatbed),
/* harmony export */   "faDonate": () => (/* binding */ faDonate),
/* harmony export */   "faDongSign": () => (/* binding */ faDongSign),
/* harmony export */   "faDoorClosed": () => (/* binding */ faDoorClosed),
/* harmony export */   "faDoorOpen": () => (/* binding */ faDoorOpen),
/* harmony export */   "faDotCircle": () => (/* binding */ faDotCircle),
/* harmony export */   "faDove": () => (/* binding */ faDove),
/* harmony export */   "faDownLeftAndUpRightToCenter": () => (/* binding */ faDownLeftAndUpRightToCenter),
/* harmony export */   "faDownLong": () => (/* binding */ faDownLong),
/* harmony export */   "faDownload": () => (/* binding */ faDownload),
/* harmony export */   "faDraftingCompass": () => (/* binding */ faDraftingCompass),
/* harmony export */   "faDragon": () => (/* binding */ faDragon),
/* harmony export */   "faDrawPolygon": () => (/* binding */ faDrawPolygon),
/* harmony export */   "faDriversLicense": () => (/* binding */ faDriversLicense),
/* harmony export */   "faDroplet": () => (/* binding */ faDroplet),
/* harmony export */   "faDropletSlash": () => (/* binding */ faDropletSlash),
/* harmony export */   "faDrum": () => (/* binding */ faDrum),
/* harmony export */   "faDrumSteelpan": () => (/* binding */ faDrumSteelpan),
/* harmony export */   "faDrumstickBite": () => (/* binding */ faDrumstickBite),
/* harmony export */   "faDumbbell": () => (/* binding */ faDumbbell),
/* harmony export */   "faDumpster": () => (/* binding */ faDumpster),
/* harmony export */   "faDumpsterFire": () => (/* binding */ faDumpsterFire),
/* harmony export */   "faDungeon": () => (/* binding */ faDungeon),
/* harmony export */   "faE": () => (/* binding */ faE),
/* harmony export */   "faEarDeaf": () => (/* binding */ faEarDeaf),
/* harmony export */   "faEarListen": () => (/* binding */ faEarListen),
/* harmony export */   "faEarth": () => (/* binding */ faEarth),
/* harmony export */   "faEarthAfrica": () => (/* binding */ faEarthAfrica),
/* harmony export */   "faEarthAmerica": () => (/* binding */ faEarthAmerica),
/* harmony export */   "faEarthAmericas": () => (/* binding */ faEarthAmericas),
/* harmony export */   "faEarthAsia": () => (/* binding */ faEarthAsia),
/* harmony export */   "faEarthEurope": () => (/* binding */ faEarthEurope),
/* harmony export */   "faEarthOceania": () => (/* binding */ faEarthOceania),
/* harmony export */   "faEdit": () => (/* binding */ faEdit),
/* harmony export */   "faEgg": () => (/* binding */ faEgg),
/* harmony export */   "faEject": () => (/* binding */ faEject),
/* harmony export */   "faElevator": () => (/* binding */ faElevator),
/* harmony export */   "faEllipsis": () => (/* binding */ faEllipsis),
/* harmony export */   "faEllipsisH": () => (/* binding */ faEllipsisH),
/* harmony export */   "faEllipsisV": () => (/* binding */ faEllipsisV),
/* harmony export */   "faEllipsisVertical": () => (/* binding */ faEllipsisVertical),
/* harmony export */   "faEnvelope": () => (/* binding */ faEnvelope),
/* harmony export */   "faEnvelopeCircleCheck": () => (/* binding */ faEnvelopeCircleCheck),
/* harmony export */   "faEnvelopeOpen": () => (/* binding */ faEnvelopeOpen),
/* harmony export */   "faEnvelopeOpenText": () => (/* binding */ faEnvelopeOpenText),
/* harmony export */   "faEnvelopeSquare": () => (/* binding */ faEnvelopeSquare),
/* harmony export */   "faEnvelopesBulk": () => (/* binding */ faEnvelopesBulk),
/* harmony export */   "faEquals": () => (/* binding */ faEquals),
/* harmony export */   "faEraser": () => (/* binding */ faEraser),
/* harmony export */   "faEthernet": () => (/* binding */ faEthernet),
/* harmony export */   "faEur": () => (/* binding */ faEur),
/* harmony export */   "faEuro": () => (/* binding */ faEuro),
/* harmony export */   "faEuroSign": () => (/* binding */ faEuroSign),
/* harmony export */   "faExchange": () => (/* binding */ faExchange),
/* harmony export */   "faExchangeAlt": () => (/* binding */ faExchangeAlt),
/* harmony export */   "faExclamation": () => (/* binding */ faExclamation),
/* harmony export */   "faExclamationCircle": () => (/* binding */ faExclamationCircle),
/* harmony export */   "faExclamationTriangle": () => (/* binding */ faExclamationTriangle),
/* harmony export */   "faExpand": () => (/* binding */ faExpand),
/* harmony export */   "faExpandAlt": () => (/* binding */ faExpandAlt),
/* harmony export */   "faExpandArrowsAlt": () => (/* binding */ faExpandArrowsAlt),
/* harmony export */   "faExplosion": () => (/* binding */ faExplosion),
/* harmony export */   "faExternalLink": () => (/* binding */ faExternalLink),
/* harmony export */   "faExternalLinkAlt": () => (/* binding */ faExternalLinkAlt),
/* harmony export */   "faExternalLinkSquare": () => (/* binding */ faExternalLinkSquare),
/* harmony export */   "faExternalLinkSquareAlt": () => (/* binding */ faExternalLinkSquareAlt),
/* harmony export */   "faEye": () => (/* binding */ faEye),
/* harmony export */   "faEyeDropper": () => (/* binding */ faEyeDropper),
/* harmony export */   "faEyeDropperEmpty": () => (/* binding */ faEyeDropperEmpty),
/* harmony export */   "faEyeLowVision": () => (/* binding */ faEyeLowVision),
/* harmony export */   "faEyeSlash": () => (/* binding */ faEyeSlash),
/* harmony export */   "faEyedropper": () => (/* binding */ faEyedropper),
/* harmony export */   "faF": () => (/* binding */ faF),
/* harmony export */   "faFaceAngry": () => (/* binding */ faFaceAngry),
/* harmony export */   "faFaceDizzy": () => (/* binding */ faFaceDizzy),
/* harmony export */   "faFaceFlushed": () => (/* binding */ faFaceFlushed),
/* harmony export */   "faFaceFrown": () => (/* binding */ faFaceFrown),
/* harmony export */   "faFaceFrownOpen": () => (/* binding */ faFaceFrownOpen),
/* harmony export */   "faFaceGrimace": () => (/* binding */ faFaceGrimace),
/* harmony export */   "faFaceGrin": () => (/* binding */ faFaceGrin),
/* harmony export */   "faFaceGrinBeam": () => (/* binding */ faFaceGrinBeam),
/* harmony export */   "faFaceGrinBeamSweat": () => (/* binding */ faFaceGrinBeamSweat),
/* harmony export */   "faFaceGrinHearts": () => (/* binding */ faFaceGrinHearts),
/* harmony export */   "faFaceGrinSquint": () => (/* binding */ faFaceGrinSquint),
/* harmony export */   "faFaceGrinSquintTears": () => (/* binding */ faFaceGrinSquintTears),
/* harmony export */   "faFaceGrinStars": () => (/* binding */ faFaceGrinStars),
/* harmony export */   "faFaceGrinTears": () => (/* binding */ faFaceGrinTears),
/* harmony export */   "faFaceGrinTongue": () => (/* binding */ faFaceGrinTongue),
/* harmony export */   "faFaceGrinTongueSquint": () => (/* binding */ faFaceGrinTongueSquint),
/* harmony export */   "faFaceGrinTongueWink": () => (/* binding */ faFaceGrinTongueWink),
/* harmony export */   "faFaceGrinWide": () => (/* binding */ faFaceGrinWide),
/* harmony export */   "faFaceGrinWink": () => (/* binding */ faFaceGrinWink),
/* harmony export */   "faFaceKiss": () => (/* binding */ faFaceKiss),
/* harmony export */   "faFaceKissBeam": () => (/* binding */ faFaceKissBeam),
/* harmony export */   "faFaceKissWinkHeart": () => (/* binding */ faFaceKissWinkHeart),
/* harmony export */   "faFaceLaugh": () => (/* binding */ faFaceLaugh),
/* harmony export */   "faFaceLaughBeam": () => (/* binding */ faFaceLaughBeam),
/* harmony export */   "faFaceLaughSquint": () => (/* binding */ faFaceLaughSquint),
/* harmony export */   "faFaceLaughWink": () => (/* binding */ faFaceLaughWink),
/* harmony export */   "faFaceMeh": () => (/* binding */ faFaceMeh),
/* harmony export */   "faFaceMehBlank": () => (/* binding */ faFaceMehBlank),
/* harmony export */   "faFaceRollingEyes": () => (/* binding */ faFaceRollingEyes),
/* harmony export */   "faFaceSadCry": () => (/* binding */ faFaceSadCry),
/* harmony export */   "faFaceSadTear": () => (/* binding */ faFaceSadTear),
/* harmony export */   "faFaceSmile": () => (/* binding */ faFaceSmile),
/* harmony export */   "faFaceSmileBeam": () => (/* binding */ faFaceSmileBeam),
/* harmony export */   "faFaceSmileWink": () => (/* binding */ faFaceSmileWink),
/* harmony export */   "faFaceSurprise": () => (/* binding */ faFaceSurprise),
/* harmony export */   "faFaceTired": () => (/* binding */ faFaceTired),
/* harmony export */   "faFan": () => (/* binding */ faFan),
/* harmony export */   "faFastBackward": () => (/* binding */ faFastBackward),
/* harmony export */   "faFastForward": () => (/* binding */ faFastForward),
/* harmony export */   "faFaucet": () => (/* binding */ faFaucet),
/* harmony export */   "faFaucetDrip": () => (/* binding */ faFaucetDrip),
/* harmony export */   "faFax": () => (/* binding */ faFax),
/* harmony export */   "faFeather": () => (/* binding */ faFeather),
/* harmony export */   "faFeatherAlt": () => (/* binding */ faFeatherAlt),
/* harmony export */   "faFeatherPointed": () => (/* binding */ faFeatherPointed),
/* harmony export */   "faFeed": () => (/* binding */ faFeed),
/* harmony export */   "faFemale": () => (/* binding */ faFemale),
/* harmony export */   "faFerry": () => (/* binding */ faFerry),
/* harmony export */   "faFighterJet": () => (/* binding */ faFighterJet),
/* harmony export */   "faFile": () => (/* binding */ faFile),
/* harmony export */   "faFileAlt": () => (/* binding */ faFileAlt),
/* harmony export */   "faFileArchive": () => (/* binding */ faFileArchive),
/* harmony export */   "faFileArrowDown": () => (/* binding */ faFileArrowDown),
/* harmony export */   "faFileArrowUp": () => (/* binding */ faFileArrowUp),
/* harmony export */   "faFileAudio": () => (/* binding */ faFileAudio),
/* harmony export */   "faFileCircleCheck": () => (/* binding */ faFileCircleCheck),
/* harmony export */   "faFileCircleExclamation": () => (/* binding */ faFileCircleExclamation),
/* harmony export */   "faFileCircleMinus": () => (/* binding */ faFileCircleMinus),
/* harmony export */   "faFileCirclePlus": () => (/* binding */ faFileCirclePlus),
/* harmony export */   "faFileCircleQuestion": () => (/* binding */ faFileCircleQuestion),
/* harmony export */   "faFileCircleXmark": () => (/* binding */ faFileCircleXmark),
/* harmony export */   "faFileClipboard": () => (/* binding */ faFileClipboard),
/* harmony export */   "faFileCode": () => (/* binding */ faFileCode),
/* harmony export */   "faFileContract": () => (/* binding */ faFileContract),
/* harmony export */   "faFileCsv": () => (/* binding */ faFileCsv),
/* harmony export */   "faFileDownload": () => (/* binding */ faFileDownload),
/* harmony export */   "faFileEdit": () => (/* binding */ faFileEdit),
/* harmony export */   "faFileExcel": () => (/* binding */ faFileExcel),
/* harmony export */   "faFileExport": () => (/* binding */ faFileExport),
/* harmony export */   "faFileImage": () => (/* binding */ faFileImage),
/* harmony export */   "faFileImport": () => (/* binding */ faFileImport),
/* harmony export */   "faFileInvoice": () => (/* binding */ faFileInvoice),
/* harmony export */   "faFileInvoiceDollar": () => (/* binding */ faFileInvoiceDollar),
/* harmony export */   "faFileLines": () => (/* binding */ faFileLines),
/* harmony export */   "faFileMedical": () => (/* binding */ faFileMedical),
/* harmony export */   "faFileMedicalAlt": () => (/* binding */ faFileMedicalAlt),
/* harmony export */   "faFilePdf": () => (/* binding */ faFilePdf),
/* harmony export */   "faFilePen": () => (/* binding */ faFilePen),
/* harmony export */   "faFilePowerpoint": () => (/* binding */ faFilePowerpoint),
/* harmony export */   "faFilePrescription": () => (/* binding */ faFilePrescription),
/* harmony export */   "faFileShield": () => (/* binding */ faFileShield),
/* harmony export */   "faFileSignature": () => (/* binding */ faFileSignature),
/* harmony export */   "faFileText": () => (/* binding */ faFileText),
/* harmony export */   "faFileUpload": () => (/* binding */ faFileUpload),
/* harmony export */   "faFileVideo": () => (/* binding */ faFileVideo),
/* harmony export */   "faFileWaveform": () => (/* binding */ faFileWaveform),
/* harmony export */   "faFileWord": () => (/* binding */ faFileWord),
/* harmony export */   "faFileZipper": () => (/* binding */ faFileZipper),
/* harmony export */   "faFill": () => (/* binding */ faFill),
/* harmony export */   "faFillDrip": () => (/* binding */ faFillDrip),
/* harmony export */   "faFilm": () => (/* binding */ faFilm),
/* harmony export */   "faFilter": () => (/* binding */ faFilter),
/* harmony export */   "faFilterCircleDollar": () => (/* binding */ faFilterCircleDollar),
/* harmony export */   "faFilterCircleXmark": () => (/* binding */ faFilterCircleXmark),
/* harmony export */   "faFingerprint": () => (/* binding */ faFingerprint),
/* harmony export */   "faFire": () => (/* binding */ faFire),
/* harmony export */   "faFireAlt": () => (/* binding */ faFireAlt),
/* harmony export */   "faFireBurner": () => (/* binding */ faFireBurner),
/* harmony export */   "faFireExtinguisher": () => (/* binding */ faFireExtinguisher),
/* harmony export */   "faFireFlameCurved": () => (/* binding */ faFireFlameCurved),
/* harmony export */   "faFireFlameSimple": () => (/* binding */ faFireFlameSimple),
/* harmony export */   "faFirstAid": () => (/* binding */ faFirstAid),
/* harmony export */   "faFish": () => (/* binding */ faFish),
/* harmony export */   "faFishFins": () => (/* binding */ faFishFins),
/* harmony export */   "faFistRaised": () => (/* binding */ faFistRaised),
/* harmony export */   "faFlag": () => (/* binding */ faFlag),
/* harmony export */   "faFlagCheckered": () => (/* binding */ faFlagCheckered),
/* harmony export */   "faFlagUsa": () => (/* binding */ faFlagUsa),
/* harmony export */   "faFlask": () => (/* binding */ faFlask),
/* harmony export */   "faFlaskVial": () => (/* binding */ faFlaskVial),
/* harmony export */   "faFloppyDisk": () => (/* binding */ faFloppyDisk),
/* harmony export */   "faFlorinSign": () => (/* binding */ faFlorinSign),
/* harmony export */   "faFlushed": () => (/* binding */ faFlushed),
/* harmony export */   "faFolder": () => (/* binding */ faFolder),
/* harmony export */   "faFolderBlank": () => (/* binding */ faFolderBlank),
/* harmony export */   "faFolderClosed": () => (/* binding */ faFolderClosed),
/* harmony export */   "faFolderMinus": () => (/* binding */ faFolderMinus),
/* harmony export */   "faFolderOpen": () => (/* binding */ faFolderOpen),
/* harmony export */   "faFolderPlus": () => (/* binding */ faFolderPlus),
/* harmony export */   "faFolderTree": () => (/* binding */ faFolderTree),
/* harmony export */   "faFont": () => (/* binding */ faFont),
/* harmony export */   "faFontAwesome": () => (/* binding */ faFontAwesome),
/* harmony export */   "faFontAwesomeFlag": () => (/* binding */ faFontAwesomeFlag),
/* harmony export */   "faFontAwesomeLogoFull": () => (/* binding */ faFontAwesomeLogoFull),
/* harmony export */   "faFootball": () => (/* binding */ faFootball),
/* harmony export */   "faFootballBall": () => (/* binding */ faFootballBall),
/* harmony export */   "faForward": () => (/* binding */ faForward),
/* harmony export */   "faForwardFast": () => (/* binding */ faForwardFast),
/* harmony export */   "faForwardStep": () => (/* binding */ faForwardStep),
/* harmony export */   "faFrancSign": () => (/* binding */ faFrancSign),
/* harmony export */   "faFrog": () => (/* binding */ faFrog),
/* harmony export */   "faFrown": () => (/* binding */ faFrown),
/* harmony export */   "faFrownOpen": () => (/* binding */ faFrownOpen),
/* harmony export */   "faFunnelDollar": () => (/* binding */ faFunnelDollar),
/* harmony export */   "faFutbol": () => (/* binding */ faFutbol),
/* harmony export */   "faFutbolBall": () => (/* binding */ faFutbolBall),
/* harmony export */   "faG": () => (/* binding */ faG),
/* harmony export */   "faGamepad": () => (/* binding */ faGamepad),
/* harmony export */   "faGasPump": () => (/* binding */ faGasPump),
/* harmony export */   "faGauge": () => (/* binding */ faGauge),
/* harmony export */   "faGaugeHigh": () => (/* binding */ faGaugeHigh),
/* harmony export */   "faGaugeMed": () => (/* binding */ faGaugeMed),
/* harmony export */   "faGaugeSimple": () => (/* binding */ faGaugeSimple),
/* harmony export */   "faGaugeSimpleHigh": () => (/* binding */ faGaugeSimpleHigh),
/* harmony export */   "faGaugeSimpleMed": () => (/* binding */ faGaugeSimpleMed),
/* harmony export */   "faGavel": () => (/* binding */ faGavel),
/* harmony export */   "faGbp": () => (/* binding */ faGbp),
/* harmony export */   "faGear": () => (/* binding */ faGear),
/* harmony export */   "faGears": () => (/* binding */ faGears),
/* harmony export */   "faGem": () => (/* binding */ faGem),
/* harmony export */   "faGenderless": () => (/* binding */ faGenderless),
/* harmony export */   "faGhost": () => (/* binding */ faGhost),
/* harmony export */   "faGift": () => (/* binding */ faGift),
/* harmony export */   "faGifts": () => (/* binding */ faGifts),
/* harmony export */   "faGlassCheers": () => (/* binding */ faGlassCheers),
/* harmony export */   "faGlassMartini": () => (/* binding */ faGlassMartini),
/* harmony export */   "faGlassMartiniAlt": () => (/* binding */ faGlassMartiniAlt),
/* harmony export */   "faGlassWater": () => (/* binding */ faGlassWater),
/* harmony export */   "faGlassWaterDroplet": () => (/* binding */ faGlassWaterDroplet),
/* harmony export */   "faGlassWhiskey": () => (/* binding */ faGlassWhiskey),
/* harmony export */   "faGlasses": () => (/* binding */ faGlasses),
/* harmony export */   "faGlobe": () => (/* binding */ faGlobe),
/* harmony export */   "faGlobeAfrica": () => (/* binding */ faGlobeAfrica),
/* harmony export */   "faGlobeAmericas": () => (/* binding */ faGlobeAmericas),
/* harmony export */   "faGlobeAsia": () => (/* binding */ faGlobeAsia),
/* harmony export */   "faGlobeEurope": () => (/* binding */ faGlobeEurope),
/* harmony export */   "faGlobeOceania": () => (/* binding */ faGlobeOceania),
/* harmony export */   "faGolfBall": () => (/* binding */ faGolfBall),
/* harmony export */   "faGolfBallTee": () => (/* binding */ faGolfBallTee),
/* harmony export */   "faGopuram": () => (/* binding */ faGopuram),
/* harmony export */   "faGraduationCap": () => (/* binding */ faGraduationCap),
/* harmony export */   "faGreaterThan": () => (/* binding */ faGreaterThan),
/* harmony export */   "faGreaterThanEqual": () => (/* binding */ faGreaterThanEqual),
/* harmony export */   "faGrimace": () => (/* binding */ faGrimace),
/* harmony export */   "faGrin": () => (/* binding */ faGrin),
/* harmony export */   "faGrinAlt": () => (/* binding */ faGrinAlt),
/* harmony export */   "faGrinBeam": () => (/* binding */ faGrinBeam),
/* harmony export */   "faGrinBeamSweat": () => (/* binding */ faGrinBeamSweat),
/* harmony export */   "faGrinHearts": () => (/* binding */ faGrinHearts),
/* harmony export */   "faGrinSquint": () => (/* binding */ faGrinSquint),
/* harmony export */   "faGrinSquintTears": () => (/* binding */ faGrinSquintTears),
/* harmony export */   "faGrinStars": () => (/* binding */ faGrinStars),
/* harmony export */   "faGrinTears": () => (/* binding */ faGrinTears),
/* harmony export */   "faGrinTongue": () => (/* binding */ faGrinTongue),
/* harmony export */   "faGrinTongueSquint": () => (/* binding */ faGrinTongueSquint),
/* harmony export */   "faGrinTongueWink": () => (/* binding */ faGrinTongueWink),
/* harmony export */   "faGrinWink": () => (/* binding */ faGrinWink),
/* harmony export */   "faGrip": () => (/* binding */ faGrip),
/* harmony export */   "faGripHorizontal": () => (/* binding */ faGripHorizontal),
/* harmony export */   "faGripLines": () => (/* binding */ faGripLines),
/* harmony export */   "faGripLinesVertical": () => (/* binding */ faGripLinesVertical),
/* harmony export */   "faGripVertical": () => (/* binding */ faGripVertical),
/* harmony export */   "faGroupArrowsRotate": () => (/* binding */ faGroupArrowsRotate),
/* harmony export */   "faGuaraniSign": () => (/* binding */ faGuaraniSign),
/* harmony export */   "faGuitar": () => (/* binding */ faGuitar),
/* harmony export */   "faGun": () => (/* binding */ faGun),
/* harmony export */   "faH": () => (/* binding */ faH),
/* harmony export */   "faHSquare": () => (/* binding */ faHSquare),
/* harmony export */   "faHamburger": () => (/* binding */ faHamburger),
/* harmony export */   "faHammer": () => (/* binding */ faHammer),
/* harmony export */   "faHamsa": () => (/* binding */ faHamsa),
/* harmony export */   "faHand": () => (/* binding */ faHand),
/* harmony export */   "faHandBackFist": () => (/* binding */ faHandBackFist),
/* harmony export */   "faHandDots": () => (/* binding */ faHandDots),
/* harmony export */   "faHandFist": () => (/* binding */ faHandFist),
/* harmony export */   "faHandHolding": () => (/* binding */ faHandHolding),
/* harmony export */   "faHandHoldingDollar": () => (/* binding */ faHandHoldingDollar),
/* harmony export */   "faHandHoldingDroplet": () => (/* binding */ faHandHoldingDroplet),
/* harmony export */   "faHandHoldingHand": () => (/* binding */ faHandHoldingHand),
/* harmony export */   "faHandHoldingHeart": () => (/* binding */ faHandHoldingHeart),
/* harmony export */   "faHandHoldingMedical": () => (/* binding */ faHandHoldingMedical),
/* harmony export */   "faHandHoldingUsd": () => (/* binding */ faHandHoldingUsd),
/* harmony export */   "faHandHoldingWater": () => (/* binding */ faHandHoldingWater),
/* harmony export */   "faHandLizard": () => (/* binding */ faHandLizard),
/* harmony export */   "faHandMiddleFinger": () => (/* binding */ faHandMiddleFinger),
/* harmony export */   "faHandPaper": () => (/* binding */ faHandPaper),
/* harmony export */   "faHandPeace": () => (/* binding */ faHandPeace),
/* harmony export */   "faHandPointDown": () => (/* binding */ faHandPointDown),
/* harmony export */   "faHandPointLeft": () => (/* binding */ faHandPointLeft),
/* harmony export */   "faHandPointRight": () => (/* binding */ faHandPointRight),
/* harmony export */   "faHandPointUp": () => (/* binding */ faHandPointUp),
/* harmony export */   "faHandPointer": () => (/* binding */ faHandPointer),
/* harmony export */   "faHandRock": () => (/* binding */ faHandRock),
/* harmony export */   "faHandScissors": () => (/* binding */ faHandScissors),
/* harmony export */   "faHandSparkles": () => (/* binding */ faHandSparkles),
/* harmony export */   "faHandSpock": () => (/* binding */ faHandSpock),
/* harmony export */   "faHandcuffs": () => (/* binding */ faHandcuffs),
/* harmony export */   "faHands": () => (/* binding */ faHands),
/* harmony export */   "faHandsAmericanSignLanguageInterpreting": () => (/* binding */ faHandsAmericanSignLanguageInterpreting),
/* harmony export */   "faHandsAslInterpreting": () => (/* binding */ faHandsAslInterpreting),
/* harmony export */   "faHandsBound": () => (/* binding */ faHandsBound),
/* harmony export */   "faHandsBubbles": () => (/* binding */ faHandsBubbles),
/* harmony export */   "faHandsClapping": () => (/* binding */ faHandsClapping),
/* harmony export */   "faHandsHelping": () => (/* binding */ faHandsHelping),
/* harmony export */   "faHandsHolding": () => (/* binding */ faHandsHolding),
/* harmony export */   "faHandsHoldingChild": () => (/* binding */ faHandsHoldingChild),
/* harmony export */   "faHandsHoldingCircle": () => (/* binding */ faHandsHoldingCircle),
/* harmony export */   "faHandsPraying": () => (/* binding */ faHandsPraying),
/* harmony export */   "faHandsWash": () => (/* binding */ faHandsWash),
/* harmony export */   "faHandshake": () => (/* binding */ faHandshake),
/* harmony export */   "faHandshakeAlt": () => (/* binding */ faHandshakeAlt),
/* harmony export */   "faHandshakeAltSlash": () => (/* binding */ faHandshakeAltSlash),
/* harmony export */   "faHandshakeAngle": () => (/* binding */ faHandshakeAngle),
/* harmony export */   "faHandshakeSimple": () => (/* binding */ faHandshakeSimple),
/* harmony export */   "faHandshakeSimpleSlash": () => (/* binding */ faHandshakeSimpleSlash),
/* harmony export */   "faHandshakeSlash": () => (/* binding */ faHandshakeSlash),
/* harmony export */   "faHanukiah": () => (/* binding */ faHanukiah),
/* harmony export */   "faHardDrive": () => (/* binding */ faHardDrive),
/* harmony export */   "faHardHat": () => (/* binding */ faHardHat),
/* harmony export */   "faHardOfHearing": () => (/* binding */ faHardOfHearing),
/* harmony export */   "faHashtag": () => (/* binding */ faHashtag),
/* harmony export */   "faHatCowboy": () => (/* binding */ faHatCowboy),
/* harmony export */   "faHatCowboySide": () => (/* binding */ faHatCowboySide),
/* harmony export */   "faHatHard": () => (/* binding */ faHatHard),
/* harmony export */   "faHatWizard": () => (/* binding */ faHatWizard),
/* harmony export */   "faHdd": () => (/* binding */ faHdd),
/* harmony export */   "faHeadSideCough": () => (/* binding */ faHeadSideCough),
/* harmony export */   "faHeadSideCoughSlash": () => (/* binding */ faHeadSideCoughSlash),
/* harmony export */   "faHeadSideMask": () => (/* binding */ faHeadSideMask),
/* harmony export */   "faHeadSideVirus": () => (/* binding */ faHeadSideVirus),
/* harmony export */   "faHeader": () => (/* binding */ faHeader),
/* harmony export */   "faHeading": () => (/* binding */ faHeading),
/* harmony export */   "faHeadphones": () => (/* binding */ faHeadphones),
/* harmony export */   "faHeadphonesAlt": () => (/* binding */ faHeadphonesAlt),
/* harmony export */   "faHeadphonesSimple": () => (/* binding */ faHeadphonesSimple),
/* harmony export */   "faHeadset": () => (/* binding */ faHeadset),
/* harmony export */   "faHeart": () => (/* binding */ faHeart),
/* harmony export */   "faHeartBroken": () => (/* binding */ faHeartBroken),
/* harmony export */   "faHeartCircleBolt": () => (/* binding */ faHeartCircleBolt),
/* harmony export */   "faHeartCircleCheck": () => (/* binding */ faHeartCircleCheck),
/* harmony export */   "faHeartCircleExclamation": () => (/* binding */ faHeartCircleExclamation),
/* harmony export */   "faHeartCircleMinus": () => (/* binding */ faHeartCircleMinus),
/* harmony export */   "faHeartCirclePlus": () => (/* binding */ faHeartCirclePlus),
/* harmony export */   "faHeartCircleXmark": () => (/* binding */ faHeartCircleXmark),
/* harmony export */   "faHeartCrack": () => (/* binding */ faHeartCrack),
/* harmony export */   "faHeartMusicCameraBolt": () => (/* binding */ faHeartMusicCameraBolt),
/* harmony export */   "faHeartPulse": () => (/* binding */ faHeartPulse),
/* harmony export */   "faHeartbeat": () => (/* binding */ faHeartbeat),
/* harmony export */   "faHelicopter": () => (/* binding */ faHelicopter),
/* harmony export */   "faHelicopterSymbol": () => (/* binding */ faHelicopterSymbol),
/* harmony export */   "faHelmetSafety": () => (/* binding */ faHelmetSafety),
/* harmony export */   "faHelmetUn": () => (/* binding */ faHelmetUn),
/* harmony export */   "faHighlighter": () => (/* binding */ faHighlighter),
/* harmony export */   "faHiking": () => (/* binding */ faHiking),
/* harmony export */   "faHillAvalanche": () => (/* binding */ faHillAvalanche),
/* harmony export */   "faHillRockslide": () => (/* binding */ faHillRockslide),
/* harmony export */   "faHippo": () => (/* binding */ faHippo),
/* harmony export */   "faHistory": () => (/* binding */ faHistory),
/* harmony export */   "faHockeyPuck": () => (/* binding */ faHockeyPuck),
/* harmony export */   "faHollyBerry": () => (/* binding */ faHollyBerry),
/* harmony export */   "faHome": () => (/* binding */ faHome),
/* harmony export */   "faHomeAlt": () => (/* binding */ faHomeAlt),
/* harmony export */   "faHomeLg": () => (/* binding */ faHomeLg),
/* harmony export */   "faHomeLgAlt": () => (/* binding */ faHomeLgAlt),
/* harmony export */   "faHomeUser": () => (/* binding */ faHomeUser),
/* harmony export */   "faHorse": () => (/* binding */ faHorse),
/* harmony export */   "faHorseHead": () => (/* binding */ faHorseHead),
/* harmony export */   "faHospital": () => (/* binding */ faHospital),
/* harmony export */   "faHospitalAlt": () => (/* binding */ faHospitalAlt),
/* harmony export */   "faHospitalSymbol": () => (/* binding */ faHospitalSymbol),
/* harmony export */   "faHospitalUser": () => (/* binding */ faHospitalUser),
/* harmony export */   "faHospitalWide": () => (/* binding */ faHospitalWide),
/* harmony export */   "faHotTub": () => (/* binding */ faHotTub),
/* harmony export */   "faHotTubPerson": () => (/* binding */ faHotTubPerson),
/* harmony export */   "faHotdog": () => (/* binding */ faHotdog),
/* harmony export */   "faHotel": () => (/* binding */ faHotel),
/* harmony export */   "faHourglass": () => (/* binding */ faHourglass),
/* harmony export */   "faHourglass1": () => (/* binding */ faHourglass1),
/* harmony export */   "faHourglass2": () => (/* binding */ faHourglass2),
/* harmony export */   "faHourglass3": () => (/* binding */ faHourglass3),
/* harmony export */   "faHourglassEmpty": () => (/* binding */ faHourglassEmpty),
/* harmony export */   "faHourglassEnd": () => (/* binding */ faHourglassEnd),
/* harmony export */   "faHourglassHalf": () => (/* binding */ faHourglassHalf),
/* harmony export */   "faHourglassStart": () => (/* binding */ faHourglassStart),
/* harmony export */   "faHouse": () => (/* binding */ faHouse),
/* harmony export */   "faHouseChimney": () => (/* binding */ faHouseChimney),
/* harmony export */   "faHouseChimneyCrack": () => (/* binding */ faHouseChimneyCrack),
/* harmony export */   "faHouseChimneyMedical": () => (/* binding */ faHouseChimneyMedical),
/* harmony export */   "faHouseChimneyUser": () => (/* binding */ faHouseChimneyUser),
/* harmony export */   "faHouseChimneyWindow": () => (/* binding */ faHouseChimneyWindow),
/* harmony export */   "faHouseCircleCheck": () => (/* binding */ faHouseCircleCheck),
/* harmony export */   "faHouseCircleExclamation": () => (/* binding */ faHouseCircleExclamation),
/* harmony export */   "faHouseCircleXmark": () => (/* binding */ faHouseCircleXmark),
/* harmony export */   "faHouseCrack": () => (/* binding */ faHouseCrack),
/* harmony export */   "faHouseDamage": () => (/* binding */ faHouseDamage),
/* harmony export */   "faHouseFire": () => (/* binding */ faHouseFire),
/* harmony export */   "faHouseFlag": () => (/* binding */ faHouseFlag),
/* harmony export */   "faHouseFloodWater": () => (/* binding */ faHouseFloodWater),
/* harmony export */   "faHouseFloodWaterCircleArrowRight": () => (/* binding */ faHouseFloodWaterCircleArrowRight),
/* harmony export */   "faHouseLaptop": () => (/* binding */ faHouseLaptop),
/* harmony export */   "faHouseLock": () => (/* binding */ faHouseLock),
/* harmony export */   "faHouseMedical": () => (/* binding */ faHouseMedical),
/* harmony export */   "faHouseMedicalCircleCheck": () => (/* binding */ faHouseMedicalCircleCheck),
/* harmony export */   "faHouseMedicalCircleExclamation": () => (/* binding */ faHouseMedicalCircleExclamation),
/* harmony export */   "faHouseMedicalCircleXmark": () => (/* binding */ faHouseMedicalCircleXmark),
/* harmony export */   "faHouseMedicalFlag": () => (/* binding */ faHouseMedicalFlag),
/* harmony export */   "faHouseSignal": () => (/* binding */ faHouseSignal),
/* harmony export */   "faHouseTsunami": () => (/* binding */ faHouseTsunami),
/* harmony export */   "faHouseUser": () => (/* binding */ faHouseUser),
/* harmony export */   "faHryvnia": () => (/* binding */ faHryvnia),
/* harmony export */   "faHryvniaSign": () => (/* binding */ faHryvniaSign),
/* harmony export */   "faHurricane": () => (/* binding */ faHurricane),
/* harmony export */   "faI": () => (/* binding */ faI),
/* harmony export */   "faICursor": () => (/* binding */ faICursor),
/* harmony export */   "faIceCream": () => (/* binding */ faIceCream),
/* harmony export */   "faIcicles": () => (/* binding */ faIcicles),
/* harmony export */   "faIcons": () => (/* binding */ faIcons),
/* harmony export */   "faIdBadge": () => (/* binding */ faIdBadge),
/* harmony export */   "faIdCard": () => (/* binding */ faIdCard),
/* harmony export */   "faIdCardAlt": () => (/* binding */ faIdCardAlt),
/* harmony export */   "faIdCardClip": () => (/* binding */ faIdCardClip),
/* harmony export */   "faIgloo": () => (/* binding */ faIgloo),
/* harmony export */   "faIls": () => (/* binding */ faIls),
/* harmony export */   "faImage": () => (/* binding */ faImage),
/* harmony export */   "faImagePortrait": () => (/* binding */ faImagePortrait),
/* harmony export */   "faImages": () => (/* binding */ faImages),
/* harmony export */   "faInbox": () => (/* binding */ faInbox),
/* harmony export */   "faIndent": () => (/* binding */ faIndent),
/* harmony export */   "faIndianRupee": () => (/* binding */ faIndianRupee),
/* harmony export */   "faIndianRupeeSign": () => (/* binding */ faIndianRupeeSign),
/* harmony export */   "faIndustry": () => (/* binding */ faIndustry),
/* harmony export */   "faInfinity": () => (/* binding */ faInfinity),
/* harmony export */   "faInfo": () => (/* binding */ faInfo),
/* harmony export */   "faInfoCircle": () => (/* binding */ faInfoCircle),
/* harmony export */   "faInr": () => (/* binding */ faInr),
/* harmony export */   "faInstitution": () => (/* binding */ faInstitution),
/* harmony export */   "faItalic": () => (/* binding */ faItalic),
/* harmony export */   "faJ": () => (/* binding */ faJ),
/* harmony export */   "faJar": () => (/* binding */ faJar),
/* harmony export */   "faJarWheat": () => (/* binding */ faJarWheat),
/* harmony export */   "faJedi": () => (/* binding */ faJedi),
/* harmony export */   "faJetFighter": () => (/* binding */ faJetFighter),
/* harmony export */   "faJetFighterUp": () => (/* binding */ faJetFighterUp),
/* harmony export */   "faJoint": () => (/* binding */ faJoint),
/* harmony export */   "faJournalWhills": () => (/* binding */ faJournalWhills),
/* harmony export */   "faJpy": () => (/* binding */ faJpy),
/* harmony export */   "faJugDetergent": () => (/* binding */ faJugDetergent),
/* harmony export */   "faK": () => (/* binding */ faK),
/* harmony export */   "faKaaba": () => (/* binding */ faKaaba),
/* harmony export */   "faKey": () => (/* binding */ faKey),
/* harmony export */   "faKeyboard": () => (/* binding */ faKeyboard),
/* harmony export */   "faKhanda": () => (/* binding */ faKhanda),
/* harmony export */   "faKipSign": () => (/* binding */ faKipSign),
/* harmony export */   "faKiss": () => (/* binding */ faKiss),
/* harmony export */   "faKissBeam": () => (/* binding */ faKissBeam),
/* harmony export */   "faKissWinkHeart": () => (/* binding */ faKissWinkHeart),
/* harmony export */   "faKitMedical": () => (/* binding */ faKitMedical),
/* harmony export */   "faKitchenSet": () => (/* binding */ faKitchenSet),
/* harmony export */   "faKiwiBird": () => (/* binding */ faKiwiBird),
/* harmony export */   "faKrw": () => (/* binding */ faKrw),
/* harmony export */   "faL": () => (/* binding */ faL),
/* harmony export */   "faLadderWater": () => (/* binding */ faLadderWater),
/* harmony export */   "faLandMineOn": () => (/* binding */ faLandMineOn),
/* harmony export */   "faLandmark": () => (/* binding */ faLandmark),
/* harmony export */   "faLandmarkAlt": () => (/* binding */ faLandmarkAlt),
/* harmony export */   "faLandmarkDome": () => (/* binding */ faLandmarkDome),
/* harmony export */   "faLandmarkFlag": () => (/* binding */ faLandmarkFlag),
/* harmony export */   "faLanguage": () => (/* binding */ faLanguage),
/* harmony export */   "faLaptop": () => (/* binding */ faLaptop),
/* harmony export */   "faLaptopCode": () => (/* binding */ faLaptopCode),
/* harmony export */   "faLaptopFile": () => (/* binding */ faLaptopFile),
/* harmony export */   "faLaptopHouse": () => (/* binding */ faLaptopHouse),
/* harmony export */   "faLaptopMedical": () => (/* binding */ faLaptopMedical),
/* harmony export */   "faLariSign": () => (/* binding */ faLariSign),
/* harmony export */   "faLaugh": () => (/* binding */ faLaugh),
/* harmony export */   "faLaughBeam": () => (/* binding */ faLaughBeam),
/* harmony export */   "faLaughSquint": () => (/* binding */ faLaughSquint),
/* harmony export */   "faLaughWink": () => (/* binding */ faLaughWink),
/* harmony export */   "faLayerGroup": () => (/* binding */ faLayerGroup),
/* harmony export */   "faLeaf": () => (/* binding */ faLeaf),
/* harmony export */   "faLeftLong": () => (/* binding */ faLeftLong),
/* harmony export */   "faLeftRight": () => (/* binding */ faLeftRight),
/* harmony export */   "faLegal": () => (/* binding */ faLegal),
/* harmony export */   "faLemon": () => (/* binding */ faLemon),
/* harmony export */   "faLessThan": () => (/* binding */ faLessThan),
/* harmony export */   "faLessThanEqual": () => (/* binding */ faLessThanEqual),
/* harmony export */   "faLevelDown": () => (/* binding */ faLevelDown),
/* harmony export */   "faLevelDownAlt": () => (/* binding */ faLevelDownAlt),
/* harmony export */   "faLevelUp": () => (/* binding */ faLevelUp),
/* harmony export */   "faLevelUpAlt": () => (/* binding */ faLevelUpAlt),
/* harmony export */   "faLifeRing": () => (/* binding */ faLifeRing),
/* harmony export */   "faLightbulb": () => (/* binding */ faLightbulb),
/* harmony export */   "faLineChart": () => (/* binding */ faLineChart),
/* harmony export */   "faLinesLeaning": () => (/* binding */ faLinesLeaning),
/* harmony export */   "faLink": () => (/* binding */ faLink),
/* harmony export */   "faLinkSlash": () => (/* binding */ faLinkSlash),
/* harmony export */   "faLiraSign": () => (/* binding */ faLiraSign),
/* harmony export */   "faList": () => (/* binding */ faList),
/* harmony export */   "faList12": () => (/* binding */ faList12),
/* harmony export */   "faListAlt": () => (/* binding */ faListAlt),
/* harmony export */   "faListCheck": () => (/* binding */ faListCheck),
/* harmony export */   "faListDots": () => (/* binding */ faListDots),
/* harmony export */   "faListNumeric": () => (/* binding */ faListNumeric),
/* harmony export */   "faListOl": () => (/* binding */ faListOl),
/* harmony export */   "faListSquares": () => (/* binding */ faListSquares),
/* harmony export */   "faListUl": () => (/* binding */ faListUl),
/* harmony export */   "faLitecoinSign": () => (/* binding */ faLitecoinSign),
/* harmony export */   "faLocation": () => (/* binding */ faLocation),
/* harmony export */   "faLocationArrow": () => (/* binding */ faLocationArrow),
/* harmony export */   "faLocationCrosshairs": () => (/* binding */ faLocationCrosshairs),
/* harmony export */   "faLocationDot": () => (/* binding */ faLocationDot),
/* harmony export */   "faLocationPin": () => (/* binding */ faLocationPin),
/* harmony export */   "faLocationPinLock": () => (/* binding */ faLocationPinLock),
/* harmony export */   "faLock": () => (/* binding */ faLock),
/* harmony export */   "faLockOpen": () => (/* binding */ faLockOpen),
/* harmony export */   "faLocust": () => (/* binding */ faLocust),
/* harmony export */   "faLongArrowAltDown": () => (/* binding */ faLongArrowAltDown),
/* harmony export */   "faLongArrowAltLeft": () => (/* binding */ faLongArrowAltLeft),
/* harmony export */   "faLongArrowAltRight": () => (/* binding */ faLongArrowAltRight),
/* harmony export */   "faLongArrowAltUp": () => (/* binding */ faLongArrowAltUp),
/* harmony export */   "faLongArrowDown": () => (/* binding */ faLongArrowDown),
/* harmony export */   "faLongArrowLeft": () => (/* binding */ faLongArrowLeft),
/* harmony export */   "faLongArrowRight": () => (/* binding */ faLongArrowRight),
/* harmony export */   "faLongArrowUp": () => (/* binding */ faLongArrowUp),
/* harmony export */   "faLowVision": () => (/* binding */ faLowVision),
/* harmony export */   "faLuggageCart": () => (/* binding */ faLuggageCart),
/* harmony export */   "faLungs": () => (/* binding */ faLungs),
/* harmony export */   "faLungsVirus": () => (/* binding */ faLungsVirus),
/* harmony export */   "faM": () => (/* binding */ faM),
/* harmony export */   "faMagic": () => (/* binding */ faMagic),
/* harmony export */   "faMagicWandSparkles": () => (/* binding */ faMagicWandSparkles),
/* harmony export */   "faMagnet": () => (/* binding */ faMagnet),
/* harmony export */   "faMagnifyingGlass": () => (/* binding */ faMagnifyingGlass),
/* harmony export */   "faMagnifyingGlassArrowRight": () => (/* binding */ faMagnifyingGlassArrowRight),
/* harmony export */   "faMagnifyingGlassChart": () => (/* binding */ faMagnifyingGlassChart),
/* harmony export */   "faMagnifyingGlassDollar": () => (/* binding */ faMagnifyingGlassDollar),
/* harmony export */   "faMagnifyingGlassLocation": () => (/* binding */ faMagnifyingGlassLocation),
/* harmony export */   "faMagnifyingGlassMinus": () => (/* binding */ faMagnifyingGlassMinus),
/* harmony export */   "faMagnifyingGlassPlus": () => (/* binding */ faMagnifyingGlassPlus),
/* harmony export */   "faMailBulk": () => (/* binding */ faMailBulk),
/* harmony export */   "faMailForward": () => (/* binding */ faMailForward),
/* harmony export */   "faMailReply": () => (/* binding */ faMailReply),
/* harmony export */   "faMailReplyAll": () => (/* binding */ faMailReplyAll),
/* harmony export */   "faMale": () => (/* binding */ faMale),
/* harmony export */   "faManatSign": () => (/* binding */ faManatSign),
/* harmony export */   "faMap": () => (/* binding */ faMap),
/* harmony export */   "faMapLocation": () => (/* binding */ faMapLocation),
/* harmony export */   "faMapLocationDot": () => (/* binding */ faMapLocationDot),
/* harmony export */   "faMapMarked": () => (/* binding */ faMapMarked),
/* harmony export */   "faMapMarkedAlt": () => (/* binding */ faMapMarkedAlt),
/* harmony export */   "faMapMarker": () => (/* binding */ faMapMarker),
/* harmony export */   "faMapMarkerAlt": () => (/* binding */ faMapMarkerAlt),
/* harmony export */   "faMapPin": () => (/* binding */ faMapPin),
/* harmony export */   "faMapSigns": () => (/* binding */ faMapSigns),
/* harmony export */   "faMarker": () => (/* binding */ faMarker),
/* harmony export */   "faMars": () => (/* binding */ faMars),
/* harmony export */   "faMarsAndVenus": () => (/* binding */ faMarsAndVenus),
/* harmony export */   "faMarsAndVenusBurst": () => (/* binding */ faMarsAndVenusBurst),
/* harmony export */   "faMarsDouble": () => (/* binding */ faMarsDouble),
/* harmony export */   "faMarsStroke": () => (/* binding */ faMarsStroke),
/* harmony export */   "faMarsStrokeH": () => (/* binding */ faMarsStrokeH),
/* harmony export */   "faMarsStrokeRight": () => (/* binding */ faMarsStrokeRight),
/* harmony export */   "faMarsStrokeUp": () => (/* binding */ faMarsStrokeUp),
/* harmony export */   "faMarsStrokeV": () => (/* binding */ faMarsStrokeV),
/* harmony export */   "faMartiniGlass": () => (/* binding */ faMartiniGlass),
/* harmony export */   "faMartiniGlassCitrus": () => (/* binding */ faMartiniGlassCitrus),
/* harmony export */   "faMartiniGlassEmpty": () => (/* binding */ faMartiniGlassEmpty),
/* harmony export */   "faMask": () => (/* binding */ faMask),
/* harmony export */   "faMaskFace": () => (/* binding */ faMaskFace),
/* harmony export */   "faMaskVentilator": () => (/* binding */ faMaskVentilator),
/* harmony export */   "faMasksTheater": () => (/* binding */ faMasksTheater),
/* harmony export */   "faMattressPillow": () => (/* binding */ faMattressPillow),
/* harmony export */   "faMaximize": () => (/* binding */ faMaximize),
/* harmony export */   "faMedal": () => (/* binding */ faMedal),
/* harmony export */   "faMedkit": () => (/* binding */ faMedkit),
/* harmony export */   "faMeh": () => (/* binding */ faMeh),
/* harmony export */   "faMehBlank": () => (/* binding */ faMehBlank),
/* harmony export */   "faMehRollingEyes": () => (/* binding */ faMehRollingEyes),
/* harmony export */   "faMemory": () => (/* binding */ faMemory),
/* harmony export */   "faMenorah": () => (/* binding */ faMenorah),
/* harmony export */   "faMercury": () => (/* binding */ faMercury),
/* harmony export */   "faMessage": () => (/* binding */ faMessage),
/* harmony export */   "faMeteor": () => (/* binding */ faMeteor),
/* harmony export */   "faMicrochip": () => (/* binding */ faMicrochip),
/* harmony export */   "faMicrophone": () => (/* binding */ faMicrophone),
/* harmony export */   "faMicrophoneAlt": () => (/* binding */ faMicrophoneAlt),
/* harmony export */   "faMicrophoneAltSlash": () => (/* binding */ faMicrophoneAltSlash),
/* harmony export */   "faMicrophoneLines": () => (/* binding */ faMicrophoneLines),
/* harmony export */   "faMicrophoneLinesSlash": () => (/* binding */ faMicrophoneLinesSlash),
/* harmony export */   "faMicrophoneSlash": () => (/* binding */ faMicrophoneSlash),
/* harmony export */   "faMicroscope": () => (/* binding */ faMicroscope),
/* harmony export */   "faMillSign": () => (/* binding */ faMillSign),
/* harmony export */   "faMinimize": () => (/* binding */ faMinimize),
/* harmony export */   "faMinus": () => (/* binding */ faMinus),
/* harmony export */   "faMinusCircle": () => (/* binding */ faMinusCircle),
/* harmony export */   "faMinusSquare": () => (/* binding */ faMinusSquare),
/* harmony export */   "faMitten": () => (/* binding */ faMitten),
/* harmony export */   "faMobile": () => (/* binding */ faMobile),
/* harmony export */   "faMobileAlt": () => (/* binding */ faMobileAlt),
/* harmony export */   "faMobileAndroid": () => (/* binding */ faMobileAndroid),
/* harmony export */   "faMobileAndroidAlt": () => (/* binding */ faMobileAndroidAlt),
/* harmony export */   "faMobileButton": () => (/* binding */ faMobileButton),
/* harmony export */   "faMobilePhone": () => (/* binding */ faMobilePhone),
/* harmony export */   "faMobileRetro": () => (/* binding */ faMobileRetro),
/* harmony export */   "faMobileScreen": () => (/* binding */ faMobileScreen),
/* harmony export */   "faMobileScreenButton": () => (/* binding */ faMobileScreenButton),
/* harmony export */   "faMoneyBill": () => (/* binding */ faMoneyBill),
/* harmony export */   "faMoneyBill1": () => (/* binding */ faMoneyBill1),
/* harmony export */   "faMoneyBill1Wave": () => (/* binding */ faMoneyBill1Wave),
/* harmony export */   "faMoneyBillAlt": () => (/* binding */ faMoneyBillAlt),
/* harmony export */   "faMoneyBillTransfer": () => (/* binding */ faMoneyBillTransfer),
/* harmony export */   "faMoneyBillTrendUp": () => (/* binding */ faMoneyBillTrendUp),
/* harmony export */   "faMoneyBillWave": () => (/* binding */ faMoneyBillWave),
/* harmony export */   "faMoneyBillWaveAlt": () => (/* binding */ faMoneyBillWaveAlt),
/* harmony export */   "faMoneyBillWheat": () => (/* binding */ faMoneyBillWheat),
/* harmony export */   "faMoneyBills": () => (/* binding */ faMoneyBills),
/* harmony export */   "faMoneyCheck": () => (/* binding */ faMoneyCheck),
/* harmony export */   "faMoneyCheckAlt": () => (/* binding */ faMoneyCheckAlt),
/* harmony export */   "faMoneyCheckDollar": () => (/* binding */ faMoneyCheckDollar),
/* harmony export */   "faMonument": () => (/* binding */ faMonument),
/* harmony export */   "faMoon": () => (/* binding */ faMoon),
/* harmony export */   "faMortarBoard": () => (/* binding */ faMortarBoard),
/* harmony export */   "faMortarPestle": () => (/* binding */ faMortarPestle),
/* harmony export */   "faMosque": () => (/* binding */ faMosque),
/* harmony export */   "faMosquito": () => (/* binding */ faMosquito),
/* harmony export */   "faMosquitoNet": () => (/* binding */ faMosquitoNet),
/* harmony export */   "faMotorcycle": () => (/* binding */ faMotorcycle),
/* harmony export */   "faMound": () => (/* binding */ faMound),
/* harmony export */   "faMountain": () => (/* binding */ faMountain),
/* harmony export */   "faMountainCity": () => (/* binding */ faMountainCity),
/* harmony export */   "faMountainSun": () => (/* binding */ faMountainSun),
/* harmony export */   "faMouse": () => (/* binding */ faMouse),
/* harmony export */   "faMousePointer": () => (/* binding */ faMousePointer),
/* harmony export */   "faMugHot": () => (/* binding */ faMugHot),
/* harmony export */   "faMugSaucer": () => (/* binding */ faMugSaucer),
/* harmony export */   "faMultiply": () => (/* binding */ faMultiply),
/* harmony export */   "faMuseum": () => (/* binding */ faMuseum),
/* harmony export */   "faMusic": () => (/* binding */ faMusic),
/* harmony export */   "faN": () => (/* binding */ faN),
/* harmony export */   "faNairaSign": () => (/* binding */ faNairaSign),
/* harmony export */   "faNavicon": () => (/* binding */ faNavicon),
/* harmony export */   "faNetworkWired": () => (/* binding */ faNetworkWired),
/* harmony export */   "faNeuter": () => (/* binding */ faNeuter),
/* harmony export */   "faNewspaper": () => (/* binding */ faNewspaper),
/* harmony export */   "faNotEqual": () => (/* binding */ faNotEqual),
/* harmony export */   "faNoteSticky": () => (/* binding */ faNoteSticky),
/* harmony export */   "faNotesMedical": () => (/* binding */ faNotesMedical),
/* harmony export */   "faO": () => (/* binding */ faO),
/* harmony export */   "faObjectGroup": () => (/* binding */ faObjectGroup),
/* harmony export */   "faObjectUngroup": () => (/* binding */ faObjectUngroup),
/* harmony export */   "faOilCan": () => (/* binding */ faOilCan),
/* harmony export */   "faOilWell": () => (/* binding */ faOilWell),
/* harmony export */   "faOm": () => (/* binding */ faOm),
/* harmony export */   "faOtter": () => (/* binding */ faOtter),
/* harmony export */   "faOutdent": () => (/* binding */ faOutdent),
/* harmony export */   "faP": () => (/* binding */ faP),
/* harmony export */   "faPager": () => (/* binding */ faPager),
/* harmony export */   "faPaintBrush": () => (/* binding */ faPaintBrush),
/* harmony export */   "faPaintRoller": () => (/* binding */ faPaintRoller),
/* harmony export */   "faPaintbrush": () => (/* binding */ faPaintbrush),
/* harmony export */   "faPalette": () => (/* binding */ faPalette),
/* harmony export */   "faPallet": () => (/* binding */ faPallet),
/* harmony export */   "faPanorama": () => (/* binding */ faPanorama),
/* harmony export */   "faPaperPlane": () => (/* binding */ faPaperPlane),
/* harmony export */   "faPaperclip": () => (/* binding */ faPaperclip),
/* harmony export */   "faParachuteBox": () => (/* binding */ faParachuteBox),
/* harmony export */   "faParagraph": () => (/* binding */ faParagraph),
/* harmony export */   "faParking": () => (/* binding */ faParking),
/* harmony export */   "faPassport": () => (/* binding */ faPassport),
/* harmony export */   "faPastafarianism": () => (/* binding */ faPastafarianism),
/* harmony export */   "faPaste": () => (/* binding */ faPaste),
/* harmony export */   "faPause": () => (/* binding */ faPause),
/* harmony export */   "faPauseCircle": () => (/* binding */ faPauseCircle),
/* harmony export */   "faPaw": () => (/* binding */ faPaw),
/* harmony export */   "faPeace": () => (/* binding */ faPeace),
/* harmony export */   "faPen": () => (/* binding */ faPen),
/* harmony export */   "faPenAlt": () => (/* binding */ faPenAlt),
/* harmony export */   "faPenClip": () => (/* binding */ faPenClip),
/* harmony export */   "faPenFancy": () => (/* binding */ faPenFancy),
/* harmony export */   "faPenNib": () => (/* binding */ faPenNib),
/* harmony export */   "faPenRuler": () => (/* binding */ faPenRuler),
/* harmony export */   "faPenSquare": () => (/* binding */ faPenSquare),
/* harmony export */   "faPenToSquare": () => (/* binding */ faPenToSquare),
/* harmony export */   "faPencil": () => (/* binding */ faPencil),
/* harmony export */   "faPencilAlt": () => (/* binding */ faPencilAlt),
/* harmony export */   "faPencilRuler": () => (/* binding */ faPencilRuler),
/* harmony export */   "faPencilSquare": () => (/* binding */ faPencilSquare),
/* harmony export */   "faPeopleArrows": () => (/* binding */ faPeopleArrows),
/* harmony export */   "faPeopleArrowsLeftRight": () => (/* binding */ faPeopleArrowsLeftRight),
/* harmony export */   "faPeopleCarry": () => (/* binding */ faPeopleCarry),
/* harmony export */   "faPeopleCarryBox": () => (/* binding */ faPeopleCarryBox),
/* harmony export */   "faPeopleGroup": () => (/* binding */ faPeopleGroup),
/* harmony export */   "faPeopleLine": () => (/* binding */ faPeopleLine),
/* harmony export */   "faPeoplePulling": () => (/* binding */ faPeoplePulling),
/* harmony export */   "faPeopleRobbery": () => (/* binding */ faPeopleRobbery),
/* harmony export */   "faPeopleRoof": () => (/* binding */ faPeopleRoof),
/* harmony export */   "faPepperHot": () => (/* binding */ faPepperHot),
/* harmony export */   "faPercent": () => (/* binding */ faPercent),
/* harmony export */   "faPercentage": () => (/* binding */ faPercentage),
/* harmony export */   "faPerson": () => (/* binding */ faPerson),
/* harmony export */   "faPersonArrowDownToLine": () => (/* binding */ faPersonArrowDownToLine),
/* harmony export */   "faPersonArrowUpFromLine": () => (/* binding */ faPersonArrowUpFromLine),
/* harmony export */   "faPersonBiking": () => (/* binding */ faPersonBiking),
/* harmony export */   "faPersonBooth": () => (/* binding */ faPersonBooth),
/* harmony export */   "faPersonBreastfeeding": () => (/* binding */ faPersonBreastfeeding),
/* harmony export */   "faPersonBurst": () => (/* binding */ faPersonBurst),
/* harmony export */   "faPersonCane": () => (/* binding */ faPersonCane),
/* harmony export */   "faPersonChalkboard": () => (/* binding */ faPersonChalkboard),
/* harmony export */   "faPersonCircleCheck": () => (/* binding */ faPersonCircleCheck),
/* harmony export */   "faPersonCircleExclamation": () => (/* binding */ faPersonCircleExclamation),
/* harmony export */   "faPersonCircleMinus": () => (/* binding */ faPersonCircleMinus),
/* harmony export */   "faPersonCirclePlus": () => (/* binding */ faPersonCirclePlus),
/* harmony export */   "faPersonCircleQuestion": () => (/* binding */ faPersonCircleQuestion),
/* harmony export */   "faPersonCircleXmark": () => (/* binding */ faPersonCircleXmark),
/* harmony export */   "faPersonDigging": () => (/* binding */ faPersonDigging),
/* harmony export */   "faPersonDotsFromLine": () => (/* binding */ faPersonDotsFromLine),
/* harmony export */   "faPersonDress": () => (/* binding */ faPersonDress),
/* harmony export */   "faPersonDressBurst": () => (/* binding */ faPersonDressBurst),
/* harmony export */   "faPersonDrowning": () => (/* binding */ faPersonDrowning),
/* harmony export */   "faPersonFalling": () => (/* binding */ faPersonFalling),
/* harmony export */   "faPersonFallingBurst": () => (/* binding */ faPersonFallingBurst),
/* harmony export */   "faPersonHalfDress": () => (/* binding */ faPersonHalfDress),
/* harmony export */   "faPersonHarassing": () => (/* binding */ faPersonHarassing),
/* harmony export */   "faPersonHiking": () => (/* binding */ faPersonHiking),
/* harmony export */   "faPersonMilitaryPointing": () => (/* binding */ faPersonMilitaryPointing),
/* harmony export */   "faPersonMilitaryRifle": () => (/* binding */ faPersonMilitaryRifle),
/* harmony export */   "faPersonMilitaryToPerson": () => (/* binding */ faPersonMilitaryToPerson),
/* harmony export */   "faPersonPraying": () => (/* binding */ faPersonPraying),
/* harmony export */   "faPersonPregnant": () => (/* binding */ faPersonPregnant),
/* harmony export */   "faPersonRays": () => (/* binding */ faPersonRays),
/* harmony export */   "faPersonRifle": () => (/* binding */ faPersonRifle),
/* harmony export */   "faPersonRunning": () => (/* binding */ faPersonRunning),
/* harmony export */   "faPersonShelter": () => (/* binding */ faPersonShelter),
/* harmony export */   "faPersonSkating": () => (/* binding */ faPersonSkating),
/* harmony export */   "faPersonSkiing": () => (/* binding */ faPersonSkiing),
/* harmony export */   "faPersonSkiingNordic": () => (/* binding */ faPersonSkiingNordic),
/* harmony export */   "faPersonSnowboarding": () => (/* binding */ faPersonSnowboarding),
/* harmony export */   "faPersonSwimming": () => (/* binding */ faPersonSwimming),
/* harmony export */   "faPersonThroughWindow": () => (/* binding */ faPersonThroughWindow),
/* harmony export */   "faPersonWalking": () => (/* binding */ faPersonWalking),
/* harmony export */   "faPersonWalkingArrowLoopLeft": () => (/* binding */ faPersonWalkingArrowLoopLeft),
/* harmony export */   "faPersonWalkingArrowRight": () => (/* binding */ faPersonWalkingArrowRight),
/* harmony export */   "faPersonWalkingDashedLineArrowRight": () => (/* binding */ faPersonWalkingDashedLineArrowRight),
/* harmony export */   "faPersonWalkingLuggage": () => (/* binding */ faPersonWalkingLuggage),
/* harmony export */   "faPersonWalkingWithCane": () => (/* binding */ faPersonWalkingWithCane),
/* harmony export */   "faPesetaSign": () => (/* binding */ faPesetaSign),
/* harmony export */   "faPesoSign": () => (/* binding */ faPesoSign),
/* harmony export */   "faPhone": () => (/* binding */ faPhone),
/* harmony export */   "faPhoneAlt": () => (/* binding */ faPhoneAlt),
/* harmony export */   "faPhoneFlip": () => (/* binding */ faPhoneFlip),
/* harmony export */   "faPhoneSlash": () => (/* binding */ faPhoneSlash),
/* harmony export */   "faPhoneSquare": () => (/* binding */ faPhoneSquare),
/* harmony export */   "faPhoneSquareAlt": () => (/* binding */ faPhoneSquareAlt),
/* harmony export */   "faPhoneVolume": () => (/* binding */ faPhoneVolume),
/* harmony export */   "faPhotoFilm": () => (/* binding */ faPhotoFilm),
/* harmony export */   "faPhotoVideo": () => (/* binding */ faPhotoVideo),
/* harmony export */   "faPieChart": () => (/* binding */ faPieChart),
/* harmony export */   "faPiggyBank": () => (/* binding */ faPiggyBank),
/* harmony export */   "faPills": () => (/* binding */ faPills),
/* harmony export */   "faPingPongPaddleBall": () => (/* binding */ faPingPongPaddleBall),
/* harmony export */   "faPizzaSlice": () => (/* binding */ faPizzaSlice),
/* harmony export */   "faPlaceOfWorship": () => (/* binding */ faPlaceOfWorship),
/* harmony export */   "faPlane": () => (/* binding */ faPlane),
/* harmony export */   "faPlaneArrival": () => (/* binding */ faPlaneArrival),
/* harmony export */   "faPlaneCircleCheck": () => (/* binding */ faPlaneCircleCheck),
/* harmony export */   "faPlaneCircleExclamation": () => (/* binding */ faPlaneCircleExclamation),
/* harmony export */   "faPlaneCircleXmark": () => (/* binding */ faPlaneCircleXmark),
/* harmony export */   "faPlaneDeparture": () => (/* binding */ faPlaneDeparture),
/* harmony export */   "faPlaneLock": () => (/* binding */ faPlaneLock),
/* harmony export */   "faPlaneSlash": () => (/* binding */ faPlaneSlash),
/* harmony export */   "faPlaneUp": () => (/* binding */ faPlaneUp),
/* harmony export */   "faPlantWilt": () => (/* binding */ faPlantWilt),
/* harmony export */   "faPlateWheat": () => (/* binding */ faPlateWheat),
/* harmony export */   "faPlay": () => (/* binding */ faPlay),
/* harmony export */   "faPlayCircle": () => (/* binding */ faPlayCircle),
/* harmony export */   "faPlug": () => (/* binding */ faPlug),
/* harmony export */   "faPlugCircleBolt": () => (/* binding */ faPlugCircleBolt),
/* harmony export */   "faPlugCircleCheck": () => (/* binding */ faPlugCircleCheck),
/* harmony export */   "faPlugCircleExclamation": () => (/* binding */ faPlugCircleExclamation),
/* harmony export */   "faPlugCircleMinus": () => (/* binding */ faPlugCircleMinus),
/* harmony export */   "faPlugCirclePlus": () => (/* binding */ faPlugCirclePlus),
/* harmony export */   "faPlugCircleXmark": () => (/* binding */ faPlugCircleXmark),
/* harmony export */   "faPlus": () => (/* binding */ faPlus),
/* harmony export */   "faPlusCircle": () => (/* binding */ faPlusCircle),
/* harmony export */   "faPlusMinus": () => (/* binding */ faPlusMinus),
/* harmony export */   "faPlusSquare": () => (/* binding */ faPlusSquare),
/* harmony export */   "faPodcast": () => (/* binding */ faPodcast),
/* harmony export */   "faPoll": () => (/* binding */ faPoll),
/* harmony export */   "faPollH": () => (/* binding */ faPollH),
/* harmony export */   "faPoo": () => (/* binding */ faPoo),
/* harmony export */   "faPooBolt": () => (/* binding */ faPooBolt),
/* harmony export */   "faPooStorm": () => (/* binding */ faPooStorm),
/* harmony export */   "faPoop": () => (/* binding */ faPoop),
/* harmony export */   "faPortrait": () => (/* binding */ faPortrait),
/* harmony export */   "faPoundSign": () => (/* binding */ faPoundSign),
/* harmony export */   "faPowerOff": () => (/* binding */ faPowerOff),
/* harmony export */   "faPray": () => (/* binding */ faPray),
/* harmony export */   "faPrayingHands": () => (/* binding */ faPrayingHands),
/* harmony export */   "faPrescription": () => (/* binding */ faPrescription),
/* harmony export */   "faPrescriptionBottle": () => (/* binding */ faPrescriptionBottle),
/* harmony export */   "faPrescriptionBottleAlt": () => (/* binding */ faPrescriptionBottleAlt),
/* harmony export */   "faPrescriptionBottleMedical": () => (/* binding */ faPrescriptionBottleMedical),
/* harmony export */   "faPrint": () => (/* binding */ faPrint),
/* harmony export */   "faProcedures": () => (/* binding */ faProcedures),
/* harmony export */   "faProjectDiagram": () => (/* binding */ faProjectDiagram),
/* harmony export */   "faPumpMedical": () => (/* binding */ faPumpMedical),
/* harmony export */   "faPumpSoap": () => (/* binding */ faPumpSoap),
/* harmony export */   "faPuzzlePiece": () => (/* binding */ faPuzzlePiece),
/* harmony export */   "faQ": () => (/* binding */ faQ),
/* harmony export */   "faQrcode": () => (/* binding */ faQrcode),
/* harmony export */   "faQuestion": () => (/* binding */ faQuestion),
/* harmony export */   "faQuestionCircle": () => (/* binding */ faQuestionCircle),
/* harmony export */   "faQuidditch": () => (/* binding */ faQuidditch),
/* harmony export */   "faQuidditchBroomBall": () => (/* binding */ faQuidditchBroomBall),
/* harmony export */   "faQuoteLeft": () => (/* binding */ faQuoteLeft),
/* harmony export */   "faQuoteLeftAlt": () => (/* binding */ faQuoteLeftAlt),
/* harmony export */   "faQuoteRight": () => (/* binding */ faQuoteRight),
/* harmony export */   "faQuoteRightAlt": () => (/* binding */ faQuoteRightAlt),
/* harmony export */   "faQuran": () => (/* binding */ faQuran),
/* harmony export */   "faR": () => (/* binding */ faR),
/* harmony export */   "faRadiation": () => (/* binding */ faRadiation),
/* harmony export */   "faRadiationAlt": () => (/* binding */ faRadiationAlt),
/* harmony export */   "faRadio": () => (/* binding */ faRadio),
/* harmony export */   "faRainbow": () => (/* binding */ faRainbow),
/* harmony export */   "faRandom": () => (/* binding */ faRandom),
/* harmony export */   "faRankingStar": () => (/* binding */ faRankingStar),
/* harmony export */   "faReceipt": () => (/* binding */ faReceipt),
/* harmony export */   "faRecordVinyl": () => (/* binding */ faRecordVinyl),
/* harmony export */   "faRectangleAd": () => (/* binding */ faRectangleAd),
/* harmony export */   "faRectangleList": () => (/* binding */ faRectangleList),
/* harmony export */   "faRectangleTimes": () => (/* binding */ faRectangleTimes),
/* harmony export */   "faRectangleXmark": () => (/* binding */ faRectangleXmark),
/* harmony export */   "faRecycle": () => (/* binding */ faRecycle),
/* harmony export */   "faRedo": () => (/* binding */ faRedo),
/* harmony export */   "faRedoAlt": () => (/* binding */ faRedoAlt),
/* harmony export */   "faRefresh": () => (/* binding */ faRefresh),
/* harmony export */   "faRegistered": () => (/* binding */ faRegistered),
/* harmony export */   "faRemove": () => (/* binding */ faRemove),
/* harmony export */   "faRemoveFormat": () => (/* binding */ faRemoveFormat),
/* harmony export */   "faReorder": () => (/* binding */ faReorder),
/* harmony export */   "faRepeat": () => (/* binding */ faRepeat),
/* harmony export */   "faReply": () => (/* binding */ faReply),
/* harmony export */   "faReplyAll": () => (/* binding */ faReplyAll),
/* harmony export */   "faRepublican": () => (/* binding */ faRepublican),
/* harmony export */   "faRestroom": () => (/* binding */ faRestroom),
/* harmony export */   "faRetweet": () => (/* binding */ faRetweet),
/* harmony export */   "faRibbon": () => (/* binding */ faRibbon),
/* harmony export */   "faRightFromBracket": () => (/* binding */ faRightFromBracket),
/* harmony export */   "faRightLeft": () => (/* binding */ faRightLeft),
/* harmony export */   "faRightLong": () => (/* binding */ faRightLong),
/* harmony export */   "faRightToBracket": () => (/* binding */ faRightToBracket),
/* harmony export */   "faRing": () => (/* binding */ faRing),
/* harmony export */   "faRmb": () => (/* binding */ faRmb),
/* harmony export */   "faRoad": () => (/* binding */ faRoad),
/* harmony export */   "faRoadBarrier": () => (/* binding */ faRoadBarrier),
/* harmony export */   "faRoadBridge": () => (/* binding */ faRoadBridge),
/* harmony export */   "faRoadCircleCheck": () => (/* binding */ faRoadCircleCheck),
/* harmony export */   "faRoadCircleExclamation": () => (/* binding */ faRoadCircleExclamation),
/* harmony export */   "faRoadCircleXmark": () => (/* binding */ faRoadCircleXmark),
/* harmony export */   "faRoadLock": () => (/* binding */ faRoadLock),
/* harmony export */   "faRoadSpikes": () => (/* binding */ faRoadSpikes),
/* harmony export */   "faRobot": () => (/* binding */ faRobot),
/* harmony export */   "faRocket": () => (/* binding */ faRocket),
/* harmony export */   "faRodAsclepius": () => (/* binding */ faRodAsclepius),
/* harmony export */   "faRodSnake": () => (/* binding */ faRodSnake),
/* harmony export */   "faRotate": () => (/* binding */ faRotate),
/* harmony export */   "faRotateBack": () => (/* binding */ faRotateBack),
/* harmony export */   "faRotateBackward": () => (/* binding */ faRotateBackward),
/* harmony export */   "faRotateForward": () => (/* binding */ faRotateForward),
/* harmony export */   "faRotateLeft": () => (/* binding */ faRotateLeft),
/* harmony export */   "faRotateRight": () => (/* binding */ faRotateRight),
/* harmony export */   "faRouble": () => (/* binding */ faRouble),
/* harmony export */   "faRoute": () => (/* binding */ faRoute),
/* harmony export */   "faRss": () => (/* binding */ faRss),
/* harmony export */   "faRssSquare": () => (/* binding */ faRssSquare),
/* harmony export */   "faRub": () => (/* binding */ faRub),
/* harmony export */   "faRuble": () => (/* binding */ faRuble),
/* harmony export */   "faRubleSign": () => (/* binding */ faRubleSign),
/* harmony export */   "faRug": () => (/* binding */ faRug),
/* harmony export */   "faRuler": () => (/* binding */ faRuler),
/* harmony export */   "faRulerCombined": () => (/* binding */ faRulerCombined),
/* harmony export */   "faRulerHorizontal": () => (/* binding */ faRulerHorizontal),
/* harmony export */   "faRulerVertical": () => (/* binding */ faRulerVertical),
/* harmony export */   "faRunning": () => (/* binding */ faRunning),
/* harmony export */   "faRupee": () => (/* binding */ faRupee),
/* harmony export */   "faRupeeSign": () => (/* binding */ faRupeeSign),
/* harmony export */   "faRupiahSign": () => (/* binding */ faRupiahSign),
/* harmony export */   "faS": () => (/* binding */ faS),
/* harmony export */   "faSackDollar": () => (/* binding */ faSackDollar),
/* harmony export */   "faSackXmark": () => (/* binding */ faSackXmark),
/* harmony export */   "faSadCry": () => (/* binding */ faSadCry),
/* harmony export */   "faSadTear": () => (/* binding */ faSadTear),
/* harmony export */   "faSailboat": () => (/* binding */ faSailboat),
/* harmony export */   "faSatellite": () => (/* binding */ faSatellite),
/* harmony export */   "faSatelliteDish": () => (/* binding */ faSatelliteDish),
/* harmony export */   "faSave": () => (/* binding */ faSave),
/* harmony export */   "faScaleBalanced": () => (/* binding */ faScaleBalanced),
/* harmony export */   "faScaleUnbalanced": () => (/* binding */ faScaleUnbalanced),
/* harmony export */   "faScaleUnbalancedFlip": () => (/* binding */ faScaleUnbalancedFlip),
/* harmony export */   "faSchool": () => (/* binding */ faSchool),
/* harmony export */   "faSchoolCircleCheck": () => (/* binding */ faSchoolCircleCheck),
/* harmony export */   "faSchoolCircleExclamation": () => (/* binding */ faSchoolCircleExclamation),
/* harmony export */   "faSchoolCircleXmark": () => (/* binding */ faSchoolCircleXmark),
/* harmony export */   "faSchoolFlag": () => (/* binding */ faSchoolFlag),
/* harmony export */   "faSchoolLock": () => (/* binding */ faSchoolLock),
/* harmony export */   "faScissors": () => (/* binding */ faScissors),
/* harmony export */   "faScrewdriver": () => (/* binding */ faScrewdriver),
/* harmony export */   "faScrewdriverWrench": () => (/* binding */ faScrewdriverWrench),
/* harmony export */   "faScroll": () => (/* binding */ faScroll),
/* harmony export */   "faScrollTorah": () => (/* binding */ faScrollTorah),
/* harmony export */   "faSdCard": () => (/* binding */ faSdCard),
/* harmony export */   "faSearch": () => (/* binding */ faSearch),
/* harmony export */   "faSearchDollar": () => (/* binding */ faSearchDollar),
/* harmony export */   "faSearchLocation": () => (/* binding */ faSearchLocation),
/* harmony export */   "faSearchMinus": () => (/* binding */ faSearchMinus),
/* harmony export */   "faSearchPlus": () => (/* binding */ faSearchPlus),
/* harmony export */   "faSection": () => (/* binding */ faSection),
/* harmony export */   "faSeedling": () => (/* binding */ faSeedling),
/* harmony export */   "faServer": () => (/* binding */ faServer),
/* harmony export */   "faShapes": () => (/* binding */ faShapes),
/* harmony export */   "faShare": () => (/* binding */ faShare),
/* harmony export */   "faShareAlt": () => (/* binding */ faShareAlt),
/* harmony export */   "faShareAltSquare": () => (/* binding */ faShareAltSquare),
/* harmony export */   "faShareFromSquare": () => (/* binding */ faShareFromSquare),
/* harmony export */   "faShareNodes": () => (/* binding */ faShareNodes),
/* harmony export */   "faShareSquare": () => (/* binding */ faShareSquare),
/* harmony export */   "faSheetPlastic": () => (/* binding */ faSheetPlastic),
/* harmony export */   "faShekel": () => (/* binding */ faShekel),
/* harmony export */   "faShekelSign": () => (/* binding */ faShekelSign),
/* harmony export */   "faSheqel": () => (/* binding */ faSheqel),
/* harmony export */   "faSheqelSign": () => (/* binding */ faSheqelSign),
/* harmony export */   "faShield": () => (/* binding */ faShield),
/* harmony export */   "faShieldAlt": () => (/* binding */ faShieldAlt),
/* harmony export */   "faShieldBlank": () => (/* binding */ faShieldBlank),
/* harmony export */   "faShieldCat": () => (/* binding */ faShieldCat),
/* harmony export */   "faShieldDog": () => (/* binding */ faShieldDog),
/* harmony export */   "faShieldHalved": () => (/* binding */ faShieldHalved),
/* harmony export */   "faShieldHeart": () => (/* binding */ faShieldHeart),
/* harmony export */   "faShieldVirus": () => (/* binding */ faShieldVirus),
/* harmony export */   "faShip": () => (/* binding */ faShip),
/* harmony export */   "faShippingFast": () => (/* binding */ faShippingFast),
/* harmony export */   "faShirt": () => (/* binding */ faShirt),
/* harmony export */   "faShoePrints": () => (/* binding */ faShoePrints),
/* harmony export */   "faShop": () => (/* binding */ faShop),
/* harmony export */   "faShopLock": () => (/* binding */ faShopLock),
/* harmony export */   "faShopSlash": () => (/* binding */ faShopSlash),
/* harmony export */   "faShoppingBag": () => (/* binding */ faShoppingBag),
/* harmony export */   "faShoppingBasket": () => (/* binding */ faShoppingBasket),
/* harmony export */   "faShoppingCart": () => (/* binding */ faShoppingCart),
/* harmony export */   "faShower": () => (/* binding */ faShower),
/* harmony export */   "faShrimp": () => (/* binding */ faShrimp),
/* harmony export */   "faShuffle": () => (/* binding */ faShuffle),
/* harmony export */   "faShuttleSpace": () => (/* binding */ faShuttleSpace),
/* harmony export */   "faShuttleVan": () => (/* binding */ faShuttleVan),
/* harmony export */   "faSign": () => (/* binding */ faSign),
/* harmony export */   "faSignHanging": () => (/* binding */ faSignHanging),
/* harmony export */   "faSignIn": () => (/* binding */ faSignIn),
/* harmony export */   "faSignInAlt": () => (/* binding */ faSignInAlt),
/* harmony export */   "faSignLanguage": () => (/* binding */ faSignLanguage),
/* harmony export */   "faSignOut": () => (/* binding */ faSignOut),
/* harmony export */   "faSignOutAlt": () => (/* binding */ faSignOutAlt),
/* harmony export */   "faSignal": () => (/* binding */ faSignal),
/* harmony export */   "faSignal5": () => (/* binding */ faSignal5),
/* harmony export */   "faSignalPerfect": () => (/* binding */ faSignalPerfect),
/* harmony export */   "faSignature": () => (/* binding */ faSignature),
/* harmony export */   "faSigning": () => (/* binding */ faSigning),
/* harmony export */   "faSignsPost": () => (/* binding */ faSignsPost),
/* harmony export */   "faSimCard": () => (/* binding */ faSimCard),
/* harmony export */   "faSink": () => (/* binding */ faSink),
/* harmony export */   "faSitemap": () => (/* binding */ faSitemap),
/* harmony export */   "faSkating": () => (/* binding */ faSkating),
/* harmony export */   "faSkiing": () => (/* binding */ faSkiing),
/* harmony export */   "faSkiingNordic": () => (/* binding */ faSkiingNordic),
/* harmony export */   "faSkull": () => (/* binding */ faSkull),
/* harmony export */   "faSkullCrossbones": () => (/* binding */ faSkullCrossbones),
/* harmony export */   "faSlash": () => (/* binding */ faSlash),
/* harmony export */   "faSleigh": () => (/* binding */ faSleigh),
/* harmony export */   "faSliders": () => (/* binding */ faSliders),
/* harmony export */   "faSlidersH": () => (/* binding */ faSlidersH),
/* harmony export */   "faSmile": () => (/* binding */ faSmile),
/* harmony export */   "faSmileBeam": () => (/* binding */ faSmileBeam),
/* harmony export */   "faSmileWink": () => (/* binding */ faSmileWink),
/* harmony export */   "faSmog": () => (/* binding */ faSmog),
/* harmony export */   "faSmoking": () => (/* binding */ faSmoking),
/* harmony export */   "faSmokingBan": () => (/* binding */ faSmokingBan),
/* harmony export */   "faSms": () => (/* binding */ faSms),
/* harmony export */   "faSnowboarding": () => (/* binding */ faSnowboarding),
/* harmony export */   "faSnowflake": () => (/* binding */ faSnowflake),
/* harmony export */   "faSnowman": () => (/* binding */ faSnowman),
/* harmony export */   "faSnowplow": () => (/* binding */ faSnowplow),
/* harmony export */   "faSoap": () => (/* binding */ faSoap),
/* harmony export */   "faSoccerBall": () => (/* binding */ faSoccerBall),
/* harmony export */   "faSocks": () => (/* binding */ faSocks),
/* harmony export */   "faSolarPanel": () => (/* binding */ faSolarPanel),
/* harmony export */   "faSort": () => (/* binding */ faSort),
/* harmony export */   "faSortAlphaAsc": () => (/* binding */ faSortAlphaAsc),
/* harmony export */   "faSortAlphaDesc": () => (/* binding */ faSortAlphaDesc),
/* harmony export */   "faSortAlphaDown": () => (/* binding */ faSortAlphaDown),
/* harmony export */   "faSortAlphaDownAlt": () => (/* binding */ faSortAlphaDownAlt),
/* harmony export */   "faSortAlphaUp": () => (/* binding */ faSortAlphaUp),
/* harmony export */   "faSortAlphaUpAlt": () => (/* binding */ faSortAlphaUpAlt),
/* harmony export */   "faSortAmountAsc": () => (/* binding */ faSortAmountAsc),
/* harmony export */   "faSortAmountDesc": () => (/* binding */ faSortAmountDesc),
/* harmony export */   "faSortAmountDown": () => (/* binding */ faSortAmountDown),
/* harmony export */   "faSortAmountDownAlt": () => (/* binding */ faSortAmountDownAlt),
/* harmony export */   "faSortAmountUp": () => (/* binding */ faSortAmountUp),
/* harmony export */   "faSortAmountUpAlt": () => (/* binding */ faSortAmountUpAlt),
/* harmony export */   "faSortAsc": () => (/* binding */ faSortAsc),
/* harmony export */   "faSortDesc": () => (/* binding */ faSortDesc),
/* harmony export */   "faSortDown": () => (/* binding */ faSortDown),
/* harmony export */   "faSortNumericAsc": () => (/* binding */ faSortNumericAsc),
/* harmony export */   "faSortNumericDesc": () => (/* binding */ faSortNumericDesc),
/* harmony export */   "faSortNumericDown": () => (/* binding */ faSortNumericDown),
/* harmony export */   "faSortNumericDownAlt": () => (/* binding */ faSortNumericDownAlt),
/* harmony export */   "faSortNumericUp": () => (/* binding */ faSortNumericUp),
/* harmony export */   "faSortNumericUpAlt": () => (/* binding */ faSortNumericUpAlt),
/* harmony export */   "faSortUp": () => (/* binding */ faSortUp),
/* harmony export */   "faSpa": () => (/* binding */ faSpa),
/* harmony export */   "faSpaceShuttle": () => (/* binding */ faSpaceShuttle),
/* harmony export */   "faSpaghettiMonsterFlying": () => (/* binding */ faSpaghettiMonsterFlying),
/* harmony export */   "faSpellCheck": () => (/* binding */ faSpellCheck),
/* harmony export */   "faSpider": () => (/* binding */ faSpider),
/* harmony export */   "faSpinner": () => (/* binding */ faSpinner),
/* harmony export */   "faSplotch": () => (/* binding */ faSplotch),
/* harmony export */   "faSpoon": () => (/* binding */ faSpoon),
/* harmony export */   "faSprayCan": () => (/* binding */ faSprayCan),
/* harmony export */   "faSprayCanSparkles": () => (/* binding */ faSprayCanSparkles),
/* harmony export */   "faSprout": () => (/* binding */ faSprout),
/* harmony export */   "faSquare": () => (/* binding */ faSquare),
/* harmony export */   "faSquareArrowUpRight": () => (/* binding */ faSquareArrowUpRight),
/* harmony export */   "faSquareCaretDown": () => (/* binding */ faSquareCaretDown),
/* harmony export */   "faSquareCaretLeft": () => (/* binding */ faSquareCaretLeft),
/* harmony export */   "faSquareCaretRight": () => (/* binding */ faSquareCaretRight),
/* harmony export */   "faSquareCaretUp": () => (/* binding */ faSquareCaretUp),
/* harmony export */   "faSquareCheck": () => (/* binding */ faSquareCheck),
/* harmony export */   "faSquareEnvelope": () => (/* binding */ faSquareEnvelope),
/* harmony export */   "faSquareFull": () => (/* binding */ faSquareFull),
/* harmony export */   "faSquareH": () => (/* binding */ faSquareH),
/* harmony export */   "faSquareMinus": () => (/* binding */ faSquareMinus),
/* harmony export */   "faSquareNfi": () => (/* binding */ faSquareNfi),
/* harmony export */   "faSquareParking": () => (/* binding */ faSquareParking),
/* harmony export */   "faSquarePen": () => (/* binding */ faSquarePen),
/* harmony export */   "faSquarePersonConfined": () => (/* binding */ faSquarePersonConfined),
/* harmony export */   "faSquarePhone": () => (/* binding */ faSquarePhone),
/* harmony export */   "faSquarePhoneFlip": () => (/* binding */ faSquarePhoneFlip),
/* harmony export */   "faSquarePlus": () => (/* binding */ faSquarePlus),
/* harmony export */   "faSquarePollHorizontal": () => (/* binding */ faSquarePollHorizontal),
/* harmony export */   "faSquarePollVertical": () => (/* binding */ faSquarePollVertical),
/* harmony export */   "faSquareRootAlt": () => (/* binding */ faSquareRootAlt),
/* harmony export */   "faSquareRootVariable": () => (/* binding */ faSquareRootVariable),
/* harmony export */   "faSquareRss": () => (/* binding */ faSquareRss),
/* harmony export */   "faSquareShareNodes": () => (/* binding */ faSquareShareNodes),
/* harmony export */   "faSquareUpRight": () => (/* binding */ faSquareUpRight),
/* harmony export */   "faSquareVirus": () => (/* binding */ faSquareVirus),
/* harmony export */   "faSquareXmark": () => (/* binding */ faSquareXmark),
/* harmony export */   "faStaffAesculapius": () => (/* binding */ faStaffAesculapius),
/* harmony export */   "faStaffSnake": () => (/* binding */ faStaffSnake),
/* harmony export */   "faStairs": () => (/* binding */ faStairs),
/* harmony export */   "faStamp": () => (/* binding */ faStamp),
/* harmony export */   "faStar": () => (/* binding */ faStar),
/* harmony export */   "faStarAndCrescent": () => (/* binding */ faStarAndCrescent),
/* harmony export */   "faStarHalf": () => (/* binding */ faStarHalf),
/* harmony export */   "faStarHalfAlt": () => (/* binding */ faStarHalfAlt),
/* harmony export */   "faStarHalfStroke": () => (/* binding */ faStarHalfStroke),
/* harmony export */   "faStarOfDavid": () => (/* binding */ faStarOfDavid),
/* harmony export */   "faStarOfLife": () => (/* binding */ faStarOfLife),
/* harmony export */   "faStepBackward": () => (/* binding */ faStepBackward),
/* harmony export */   "faStepForward": () => (/* binding */ faStepForward),
/* harmony export */   "faSterlingSign": () => (/* binding */ faSterlingSign),
/* harmony export */   "faStethoscope": () => (/* binding */ faStethoscope),
/* harmony export */   "faStickyNote": () => (/* binding */ faStickyNote),
/* harmony export */   "faStop": () => (/* binding */ faStop),
/* harmony export */   "faStopCircle": () => (/* binding */ faStopCircle),
/* harmony export */   "faStopwatch": () => (/* binding */ faStopwatch),
/* harmony export */   "faStopwatch20": () => (/* binding */ faStopwatch20),
/* harmony export */   "faStore": () => (/* binding */ faStore),
/* harmony export */   "faStoreAlt": () => (/* binding */ faStoreAlt),
/* harmony export */   "faStoreAltSlash": () => (/* binding */ faStoreAltSlash),
/* harmony export */   "faStoreSlash": () => (/* binding */ faStoreSlash),
/* harmony export */   "faStream": () => (/* binding */ faStream),
/* harmony export */   "faStreetView": () => (/* binding */ faStreetView),
/* harmony export */   "faStrikethrough": () => (/* binding */ faStrikethrough),
/* harmony export */   "faStroopwafel": () => (/* binding */ faStroopwafel),
/* harmony export */   "faSubscript": () => (/* binding */ faSubscript),
/* harmony export */   "faSubtract": () => (/* binding */ faSubtract),
/* harmony export */   "faSubway": () => (/* binding */ faSubway),
/* harmony export */   "faSuitcase": () => (/* binding */ faSuitcase),
/* harmony export */   "faSuitcaseMedical": () => (/* binding */ faSuitcaseMedical),
/* harmony export */   "faSuitcaseRolling": () => (/* binding */ faSuitcaseRolling),
/* harmony export */   "faSun": () => (/* binding */ faSun),
/* harmony export */   "faSunPlantWilt": () => (/* binding */ faSunPlantWilt),
/* harmony export */   "faSuperscript": () => (/* binding */ faSuperscript),
/* harmony export */   "faSurprise": () => (/* binding */ faSurprise),
/* harmony export */   "faSwatchbook": () => (/* binding */ faSwatchbook),
/* harmony export */   "faSwimmer": () => (/* binding */ faSwimmer),
/* harmony export */   "faSwimmingPool": () => (/* binding */ faSwimmingPool),
/* harmony export */   "faSynagogue": () => (/* binding */ faSynagogue),
/* harmony export */   "faSync": () => (/* binding */ faSync),
/* harmony export */   "faSyncAlt": () => (/* binding */ faSyncAlt),
/* harmony export */   "faSyringe": () => (/* binding */ faSyringe),
/* harmony export */   "faT": () => (/* binding */ faT),
/* harmony export */   "faTShirt": () => (/* binding */ faTShirt),
/* harmony export */   "faTable": () => (/* binding */ faTable),
/* harmony export */   "faTableCells": () => (/* binding */ faTableCells),
/* harmony export */   "faTableCellsLarge": () => (/* binding */ faTableCellsLarge),
/* harmony export */   "faTableColumns": () => (/* binding */ faTableColumns),
/* harmony export */   "faTableList": () => (/* binding */ faTableList),
/* harmony export */   "faTableTennis": () => (/* binding */ faTableTennis),
/* harmony export */   "faTableTennisPaddleBall": () => (/* binding */ faTableTennisPaddleBall),
/* harmony export */   "faTablet": () => (/* binding */ faTablet),
/* harmony export */   "faTabletAlt": () => (/* binding */ faTabletAlt),
/* harmony export */   "faTabletAndroid": () => (/* binding */ faTabletAndroid),
/* harmony export */   "faTabletButton": () => (/* binding */ faTabletButton),
/* harmony export */   "faTabletScreenButton": () => (/* binding */ faTabletScreenButton),
/* harmony export */   "faTablets": () => (/* binding */ faTablets),
/* harmony export */   "faTachographDigital": () => (/* binding */ faTachographDigital),
/* harmony export */   "faTachometer": () => (/* binding */ faTachometer),
/* harmony export */   "faTachometerAlt": () => (/* binding */ faTachometerAlt),
/* harmony export */   "faTachometerAltAverage": () => (/* binding */ faTachometerAltAverage),
/* harmony export */   "faTachometerAltFast": () => (/* binding */ faTachometerAltFast),
/* harmony export */   "faTachometerAverage": () => (/* binding */ faTachometerAverage),
/* harmony export */   "faTachometerFast": () => (/* binding */ faTachometerFast),
/* harmony export */   "faTag": () => (/* binding */ faTag),
/* harmony export */   "faTags": () => (/* binding */ faTags),
/* harmony export */   "faTape": () => (/* binding */ faTape),
/* harmony export */   "faTarp": () => (/* binding */ faTarp),
/* harmony export */   "faTarpDroplet": () => (/* binding */ faTarpDroplet),
/* harmony export */   "faTasks": () => (/* binding */ faTasks),
/* harmony export */   "faTasksAlt": () => (/* binding */ faTasksAlt),
/* harmony export */   "faTaxi": () => (/* binding */ faTaxi),
/* harmony export */   "faTeeth": () => (/* binding */ faTeeth),
/* harmony export */   "faTeethOpen": () => (/* binding */ faTeethOpen),
/* harmony export */   "faTeletype": () => (/* binding */ faTeletype),
/* harmony export */   "faTelevision": () => (/* binding */ faTelevision),
/* harmony export */   "faTemperature0": () => (/* binding */ faTemperature0),
/* harmony export */   "faTemperature1": () => (/* binding */ faTemperature1),
/* harmony export */   "faTemperature2": () => (/* binding */ faTemperature2),
/* harmony export */   "faTemperature3": () => (/* binding */ faTemperature3),
/* harmony export */   "faTemperature4": () => (/* binding */ faTemperature4),
/* harmony export */   "faTemperatureArrowDown": () => (/* binding */ faTemperatureArrowDown),
/* harmony export */   "faTemperatureArrowUp": () => (/* binding */ faTemperatureArrowUp),
/* harmony export */   "faTemperatureDown": () => (/* binding */ faTemperatureDown),
/* harmony export */   "faTemperatureEmpty": () => (/* binding */ faTemperatureEmpty),
/* harmony export */   "faTemperatureFull": () => (/* binding */ faTemperatureFull),
/* harmony export */   "faTemperatureHalf": () => (/* binding */ faTemperatureHalf),
/* harmony export */   "faTemperatureHigh": () => (/* binding */ faTemperatureHigh),
/* harmony export */   "faTemperatureLow": () => (/* binding */ faTemperatureLow),
/* harmony export */   "faTemperatureQuarter": () => (/* binding */ faTemperatureQuarter),
/* harmony export */   "faTemperatureThreeQuarters": () => (/* binding */ faTemperatureThreeQuarters),
/* harmony export */   "faTemperatureUp": () => (/* binding */ faTemperatureUp),
/* harmony export */   "faTenge": () => (/* binding */ faTenge),
/* harmony export */   "faTengeSign": () => (/* binding */ faTengeSign),
/* harmony export */   "faTent": () => (/* binding */ faTent),
/* harmony export */   "faTentArrowDownToLine": () => (/* binding */ faTentArrowDownToLine),
/* harmony export */   "faTentArrowLeftRight": () => (/* binding */ faTentArrowLeftRight),
/* harmony export */   "faTentArrowTurnLeft": () => (/* binding */ faTentArrowTurnLeft),
/* harmony export */   "faTentArrowsDown": () => (/* binding */ faTentArrowsDown),
/* harmony export */   "faTents": () => (/* binding */ faTents),
/* harmony export */   "faTerminal": () => (/* binding */ faTerminal),
/* harmony export */   "faTextHeight": () => (/* binding */ faTextHeight),
/* harmony export */   "faTextSlash": () => (/* binding */ faTextSlash),
/* harmony export */   "faTextWidth": () => (/* binding */ faTextWidth),
/* harmony export */   "faTh": () => (/* binding */ faTh),
/* harmony export */   "faThLarge": () => (/* binding */ faThLarge),
/* harmony export */   "faThList": () => (/* binding */ faThList),
/* harmony export */   "faTheaterMasks": () => (/* binding */ faTheaterMasks),
/* harmony export */   "faThermometer": () => (/* binding */ faThermometer),
/* harmony export */   "faThermometer0": () => (/* binding */ faThermometer0),
/* harmony export */   "faThermometer1": () => (/* binding */ faThermometer1),
/* harmony export */   "faThermometer2": () => (/* binding */ faThermometer2),
/* harmony export */   "faThermometer3": () => (/* binding */ faThermometer3),
/* harmony export */   "faThermometer4": () => (/* binding */ faThermometer4),
/* harmony export */   "faThermometerEmpty": () => (/* binding */ faThermometerEmpty),
/* harmony export */   "faThermometerFull": () => (/* binding */ faThermometerFull),
/* harmony export */   "faThermometerHalf": () => (/* binding */ faThermometerHalf),
/* harmony export */   "faThermometerQuarter": () => (/* binding */ faThermometerQuarter),
/* harmony export */   "faThermometerThreeQuarters": () => (/* binding */ faThermometerThreeQuarters),
/* harmony export */   "faThumbTack": () => (/* binding */ faThumbTack),
/* harmony export */   "faThumbsDown": () => (/* binding */ faThumbsDown),
/* harmony export */   "faThumbsUp": () => (/* binding */ faThumbsUp),
/* harmony export */   "faThumbtack": () => (/* binding */ faThumbtack),
/* harmony export */   "faThunderstorm": () => (/* binding */ faThunderstorm),
/* harmony export */   "faTicket": () => (/* binding */ faTicket),
/* harmony export */   "faTicketAlt": () => (/* binding */ faTicketAlt),
/* harmony export */   "faTicketSimple": () => (/* binding */ faTicketSimple),
/* harmony export */   "faTimeline": () => (/* binding */ faTimeline),
/* harmony export */   "faTimes": () => (/* binding */ faTimes),
/* harmony export */   "faTimesCircle": () => (/* binding */ faTimesCircle),
/* harmony export */   "faTimesRectangle": () => (/* binding */ faTimesRectangle),
/* harmony export */   "faTimesSquare": () => (/* binding */ faTimesSquare),
/* harmony export */   "faTint": () => (/* binding */ faTint),
/* harmony export */   "faTintSlash": () => (/* binding */ faTintSlash),
/* harmony export */   "faTired": () => (/* binding */ faTired),
/* harmony export */   "faToggleOff": () => (/* binding */ faToggleOff),
/* harmony export */   "faToggleOn": () => (/* binding */ faToggleOn),
/* harmony export */   "faToilet": () => (/* binding */ faToilet),
/* harmony export */   "faToiletPaper": () => (/* binding */ faToiletPaper),
/* harmony export */   "faToiletPaperSlash": () => (/* binding */ faToiletPaperSlash),
/* harmony export */   "faToiletPortable": () => (/* binding */ faToiletPortable),
/* harmony export */   "faToiletsPortable": () => (/* binding */ faToiletsPortable),
/* harmony export */   "faToolbox": () => (/* binding */ faToolbox),
/* harmony export */   "faTools": () => (/* binding */ faTools),
/* harmony export */   "faTooth": () => (/* binding */ faTooth),
/* harmony export */   "faTorah": () => (/* binding */ faTorah),
/* harmony export */   "faToriiGate": () => (/* binding */ faToriiGate),
/* harmony export */   "faTornado": () => (/* binding */ faTornado),
/* harmony export */   "faTowerBroadcast": () => (/* binding */ faTowerBroadcast),
/* harmony export */   "faTowerCell": () => (/* binding */ faTowerCell),
/* harmony export */   "faTowerObservation": () => (/* binding */ faTowerObservation),
/* harmony export */   "faTractor": () => (/* binding */ faTractor),
/* harmony export */   "faTrademark": () => (/* binding */ faTrademark),
/* harmony export */   "faTrafficLight": () => (/* binding */ faTrafficLight),
/* harmony export */   "faTrailer": () => (/* binding */ faTrailer),
/* harmony export */   "faTrain": () => (/* binding */ faTrain),
/* harmony export */   "faTrainSubway": () => (/* binding */ faTrainSubway),
/* harmony export */   "faTrainTram": () => (/* binding */ faTrainTram),
/* harmony export */   "faTram": () => (/* binding */ faTram),
/* harmony export */   "faTransgender": () => (/* binding */ faTransgender),
/* harmony export */   "faTransgenderAlt": () => (/* binding */ faTransgenderAlt),
/* harmony export */   "faTrash": () => (/* binding */ faTrash),
/* harmony export */   "faTrashAlt": () => (/* binding */ faTrashAlt),
/* harmony export */   "faTrashArrowUp": () => (/* binding */ faTrashArrowUp),
/* harmony export */   "faTrashCan": () => (/* binding */ faTrashCan),
/* harmony export */   "faTrashCanArrowUp": () => (/* binding */ faTrashCanArrowUp),
/* harmony export */   "faTrashRestore": () => (/* binding */ faTrashRestore),
/* harmony export */   "faTrashRestoreAlt": () => (/* binding */ faTrashRestoreAlt),
/* harmony export */   "faTree": () => (/* binding */ faTree),
/* harmony export */   "faTreeCity": () => (/* binding */ faTreeCity),
/* harmony export */   "faTriangleCircleSquare": () => (/* binding */ faTriangleCircleSquare),
/* harmony export */   "faTriangleExclamation": () => (/* binding */ faTriangleExclamation),
/* harmony export */   "faTrophy": () => (/* binding */ faTrophy),
/* harmony export */   "faTrowel": () => (/* binding */ faTrowel),
/* harmony export */   "faTrowelBricks": () => (/* binding */ faTrowelBricks),
/* harmony export */   "faTruck": () => (/* binding */ faTruck),
/* harmony export */   "faTruckArrowRight": () => (/* binding */ faTruckArrowRight),
/* harmony export */   "faTruckDroplet": () => (/* binding */ faTruckDroplet),
/* harmony export */   "faTruckFast": () => (/* binding */ faTruckFast),
/* harmony export */   "faTruckField": () => (/* binding */ faTruckField),
/* harmony export */   "faTruckFieldUn": () => (/* binding */ faTruckFieldUn),
/* harmony export */   "faTruckFront": () => (/* binding */ faTruckFront),
/* harmony export */   "faTruckLoading": () => (/* binding */ faTruckLoading),
/* harmony export */   "faTruckMedical": () => (/* binding */ faTruckMedical),
/* harmony export */   "faTruckMonster": () => (/* binding */ faTruckMonster),
/* harmony export */   "faTruckMoving": () => (/* binding */ faTruckMoving),
/* harmony export */   "faTruckPickup": () => (/* binding */ faTruckPickup),
/* harmony export */   "faTruckPlane": () => (/* binding */ faTruckPlane),
/* harmony export */   "faTruckRampBox": () => (/* binding */ faTruckRampBox),
/* harmony export */   "faTry": () => (/* binding */ faTry),
/* harmony export */   "faTshirt": () => (/* binding */ faTshirt),
/* harmony export */   "faTty": () => (/* binding */ faTty),
/* harmony export */   "faTurkishLira": () => (/* binding */ faTurkishLira),
/* harmony export */   "faTurkishLiraSign": () => (/* binding */ faTurkishLiraSign),
/* harmony export */   "faTurnDown": () => (/* binding */ faTurnDown),
/* harmony export */   "faTurnUp": () => (/* binding */ faTurnUp),
/* harmony export */   "faTv": () => (/* binding */ faTv),
/* harmony export */   "faTvAlt": () => (/* binding */ faTvAlt),
/* harmony export */   "faU": () => (/* binding */ faU),
/* harmony export */   "faUmbrella": () => (/* binding */ faUmbrella),
/* harmony export */   "faUmbrellaBeach": () => (/* binding */ faUmbrellaBeach),
/* harmony export */   "faUnderline": () => (/* binding */ faUnderline),
/* harmony export */   "faUndo": () => (/* binding */ faUndo),
/* harmony export */   "faUndoAlt": () => (/* binding */ faUndoAlt),
/* harmony export */   "faUniversalAccess": () => (/* binding */ faUniversalAccess),
/* harmony export */   "faUniversity": () => (/* binding */ faUniversity),
/* harmony export */   "faUnlink": () => (/* binding */ faUnlink),
/* harmony export */   "faUnlock": () => (/* binding */ faUnlock),
/* harmony export */   "faUnlockAlt": () => (/* binding */ faUnlockAlt),
/* harmony export */   "faUnlockKeyhole": () => (/* binding */ faUnlockKeyhole),
/* harmony export */   "faUnsorted": () => (/* binding */ faUnsorted),
/* harmony export */   "faUpDown": () => (/* binding */ faUpDown),
/* harmony export */   "faUpDownLeftRight": () => (/* binding */ faUpDownLeftRight),
/* harmony export */   "faUpLong": () => (/* binding */ faUpLong),
/* harmony export */   "faUpRightAndDownLeftFromCenter": () => (/* binding */ faUpRightAndDownLeftFromCenter),
/* harmony export */   "faUpRightFromSquare": () => (/* binding */ faUpRightFromSquare),
/* harmony export */   "faUpload": () => (/* binding */ faUpload),
/* harmony export */   "faUsd": () => (/* binding */ faUsd),
/* harmony export */   "faUser": () => (/* binding */ faUser),
/* harmony export */   "faUserAlt": () => (/* binding */ faUserAlt),
/* harmony export */   "faUserAltSlash": () => (/* binding */ faUserAltSlash),
/* harmony export */   "faUserAstronaut": () => (/* binding */ faUserAstronaut),
/* harmony export */   "faUserCheck": () => (/* binding */ faUserCheck),
/* harmony export */   "faUserCircle": () => (/* binding */ faUserCircle),
/* harmony export */   "faUserClock": () => (/* binding */ faUserClock),
/* harmony export */   "faUserCog": () => (/* binding */ faUserCog),
/* harmony export */   "faUserDoctor": () => (/* binding */ faUserDoctor),
/* harmony export */   "faUserEdit": () => (/* binding */ faUserEdit),
/* harmony export */   "faUserFriends": () => (/* binding */ faUserFriends),
/* harmony export */   "faUserGear": () => (/* binding */ faUserGear),
/* harmony export */   "faUserGraduate": () => (/* binding */ faUserGraduate),
/* harmony export */   "faUserGroup": () => (/* binding */ faUserGroup),
/* harmony export */   "faUserInjured": () => (/* binding */ faUserInjured),
/* harmony export */   "faUserLarge": () => (/* binding */ faUserLarge),
/* harmony export */   "faUserLargeSlash": () => (/* binding */ faUserLargeSlash),
/* harmony export */   "faUserLock": () => (/* binding */ faUserLock),
/* harmony export */   "faUserMd": () => (/* binding */ faUserMd),
/* harmony export */   "faUserMinus": () => (/* binding */ faUserMinus),
/* harmony export */   "faUserNinja": () => (/* binding */ faUserNinja),
/* harmony export */   "faUserNurse": () => (/* binding */ faUserNurse),
/* harmony export */   "faUserPen": () => (/* binding */ faUserPen),
/* harmony export */   "faUserPlus": () => (/* binding */ faUserPlus),
/* harmony export */   "faUserSecret": () => (/* binding */ faUserSecret),
/* harmony export */   "faUserShield": () => (/* binding */ faUserShield),
/* harmony export */   "faUserSlash": () => (/* binding */ faUserSlash),
/* harmony export */   "faUserTag": () => (/* binding */ faUserTag),
/* harmony export */   "faUserTie": () => (/* binding */ faUserTie),
/* harmony export */   "faUserTimes": () => (/* binding */ faUserTimes),
/* harmony export */   "faUserXmark": () => (/* binding */ faUserXmark),
/* harmony export */   "faUsers": () => (/* binding */ faUsers),
/* harmony export */   "faUsersBetweenLines": () => (/* binding */ faUsersBetweenLines),
/* harmony export */   "faUsersCog": () => (/* binding */ faUsersCog),
/* harmony export */   "faUsersGear": () => (/* binding */ faUsersGear),
/* harmony export */   "faUsersLine": () => (/* binding */ faUsersLine),
/* harmony export */   "faUsersRays": () => (/* binding */ faUsersRays),
/* harmony export */   "faUsersRectangle": () => (/* binding */ faUsersRectangle),
/* harmony export */   "faUsersSlash": () => (/* binding */ faUsersSlash),
/* harmony export */   "faUsersViewfinder": () => (/* binding */ faUsersViewfinder),
/* harmony export */   "faUtensilSpoon": () => (/* binding */ faUtensilSpoon),
/* harmony export */   "faUtensils": () => (/* binding */ faUtensils),
/* harmony export */   "faV": () => (/* binding */ faV),
/* harmony export */   "faVanShuttle": () => (/* binding */ faVanShuttle),
/* harmony export */   "faVault": () => (/* binding */ faVault),
/* harmony export */   "faVcard": () => (/* binding */ faVcard),
/* harmony export */   "faVectorSquare": () => (/* binding */ faVectorSquare),
/* harmony export */   "faVenus": () => (/* binding */ faVenus),
/* harmony export */   "faVenusDouble": () => (/* binding */ faVenusDouble),
/* harmony export */   "faVenusMars": () => (/* binding */ faVenusMars),
/* harmony export */   "faVest": () => (/* binding */ faVest),
/* harmony export */   "faVestPatches": () => (/* binding */ faVestPatches),
/* harmony export */   "faVial": () => (/* binding */ faVial),
/* harmony export */   "faVialCircleCheck": () => (/* binding */ faVialCircleCheck),
/* harmony export */   "faVialVirus": () => (/* binding */ faVialVirus),
/* harmony export */   "faVials": () => (/* binding */ faVials),
/* harmony export */   "faVideo": () => (/* binding */ faVideo),
/* harmony export */   "faVideoCamera": () => (/* binding */ faVideoCamera),
/* harmony export */   "faVideoSlash": () => (/* binding */ faVideoSlash),
/* harmony export */   "faVihara": () => (/* binding */ faVihara),
/* harmony export */   "faVirus": () => (/* binding */ faVirus),
/* harmony export */   "faVirusCovid": () => (/* binding */ faVirusCovid),
/* harmony export */   "faVirusCovidSlash": () => (/* binding */ faVirusCovidSlash),
/* harmony export */   "faVirusSlash": () => (/* binding */ faVirusSlash),
/* harmony export */   "faViruses": () => (/* binding */ faViruses),
/* harmony export */   "faVoicemail": () => (/* binding */ faVoicemail),
/* harmony export */   "faVolcano": () => (/* binding */ faVolcano),
/* harmony export */   "faVolleyball": () => (/* binding */ faVolleyball),
/* harmony export */   "faVolleyballBall": () => (/* binding */ faVolleyballBall),
/* harmony export */   "faVolumeControlPhone": () => (/* binding */ faVolumeControlPhone),
/* harmony export */   "faVolumeDown": () => (/* binding */ faVolumeDown),
/* harmony export */   "faVolumeHigh": () => (/* binding */ faVolumeHigh),
/* harmony export */   "faVolumeLow": () => (/* binding */ faVolumeLow),
/* harmony export */   "faVolumeMute": () => (/* binding */ faVolumeMute),
/* harmony export */   "faVolumeOff": () => (/* binding */ faVolumeOff),
/* harmony export */   "faVolumeTimes": () => (/* binding */ faVolumeTimes),
/* harmony export */   "faVolumeUp": () => (/* binding */ faVolumeUp),
/* harmony export */   "faVolumeXmark": () => (/* binding */ faVolumeXmark),
/* harmony export */   "faVoteYea": () => (/* binding */ faVoteYea),
/* harmony export */   "faVrCardboard": () => (/* binding */ faVrCardboard),
/* harmony export */   "faW": () => (/* binding */ faW),
/* harmony export */   "faWalkieTalkie": () => (/* binding */ faWalkieTalkie),
/* harmony export */   "faWalking": () => (/* binding */ faWalking),
/* harmony export */   "faWallet": () => (/* binding */ faWallet),
/* harmony export */   "faWandMagic": () => (/* binding */ faWandMagic),
/* harmony export */   "faWandMagicSparkles": () => (/* binding */ faWandMagicSparkles),
/* harmony export */   "faWandSparkles": () => (/* binding */ faWandSparkles),
/* harmony export */   "faWarehouse": () => (/* binding */ faWarehouse),
/* harmony export */   "faWarning": () => (/* binding */ faWarning),
/* harmony export */   "faWater": () => (/* binding */ faWater),
/* harmony export */   "faWaterLadder": () => (/* binding */ faWaterLadder),
/* harmony export */   "faWaveSquare": () => (/* binding */ faWaveSquare),
/* harmony export */   "faWeight": () => (/* binding */ faWeight),
/* harmony export */   "faWeightHanging": () => (/* binding */ faWeightHanging),
/* harmony export */   "faWeightScale": () => (/* binding */ faWeightScale),
/* harmony export */   "faWheatAlt": () => (/* binding */ faWheatAlt),
/* harmony export */   "faWheatAwn": () => (/* binding */ faWheatAwn),
/* harmony export */   "faWheatAwnCircleExclamation": () => (/* binding */ faWheatAwnCircleExclamation),
/* harmony export */   "faWheelchair": () => (/* binding */ faWheelchair),
/* harmony export */   "faWheelchairAlt": () => (/* binding */ faWheelchairAlt),
/* harmony export */   "faWheelchairMove": () => (/* binding */ faWheelchairMove),
/* harmony export */   "faWhiskeyGlass": () => (/* binding */ faWhiskeyGlass),
/* harmony export */   "faWifi": () => (/* binding */ faWifi),
/* harmony export */   "faWifi3": () => (/* binding */ faWifi3),
/* harmony export */   "faWifiStrong": () => (/* binding */ faWifiStrong),
/* harmony export */   "faWind": () => (/* binding */ faWind),
/* harmony export */   "faWindowClose": () => (/* binding */ faWindowClose),
/* harmony export */   "faWindowMaximize": () => (/* binding */ faWindowMaximize),
/* harmony export */   "faWindowMinimize": () => (/* binding */ faWindowMinimize),
/* harmony export */   "faWindowRestore": () => (/* binding */ faWindowRestore),
/* harmony export */   "faWineBottle": () => (/* binding */ faWineBottle),
/* harmony export */   "faWineGlass": () => (/* binding */ faWineGlass),
/* harmony export */   "faWineGlassAlt": () => (/* binding */ faWineGlassAlt),
/* harmony export */   "faWineGlassEmpty": () => (/* binding */ faWineGlassEmpty),
/* harmony export */   "faWon": () => (/* binding */ faWon),
/* harmony export */   "faWonSign": () => (/* binding */ faWonSign),
/* harmony export */   "faWorm": () => (/* binding */ faWorm),
/* harmony export */   "faWrench": () => (/* binding */ faWrench),
/* harmony export */   "faX": () => (/* binding */ faX),
/* harmony export */   "faXRay": () => (/* binding */ faXRay),
/* harmony export */   "faXmark": () => (/* binding */ faXmark),
/* harmony export */   "faXmarkCircle": () => (/* binding */ faXmarkCircle),
/* harmony export */   "faXmarkSquare": () => (/* binding */ faXmarkSquare),
/* harmony export */   "faXmarksLines": () => (/* binding */ faXmarksLines),
/* harmony export */   "faY": () => (/* binding */ faY),
/* harmony export */   "faYen": () => (/* binding */ faYen),
/* harmony export */   "faYenSign": () => (/* binding */ faYenSign),
/* harmony export */   "faYinYang": () => (/* binding */ faYinYang),
/* harmony export */   "faZ": () => (/* binding */ faZ),
/* harmony export */   "faZap": () => (/* binding */ faZap),
/* harmony export */   "fas": () => (/* binding */ _iconsCache),
/* harmony export */   "prefix": () => (/* binding */ prefix)
/* harmony export */ });
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeIcon": () => (/* binding */ FontAwesomeIcon)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} // Get CSS class list from a props object


function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
} // Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number


function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var _excluded$1 = ["style"];

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded$1);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log() {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
} // creates an object with a key of key
// and a value of value
// if certain conditions are met


function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var _excluded = ["forwardedRef"];

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId,
      maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var _abstract = renderedIcon["abstract"];
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(_abstract[0], extraProps);
}

FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  bounce: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flash: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  maskId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0, 90, 180, 270]),
  shake: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinPulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinReverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  titleId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, (react__WEBPACK_IMPORTED_MODULE_1___default().createElement));


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};

  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {
      /**/
    }
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && _typeof(data) === 'object' ? data : {};
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

        if (checkerResult == null) {
          return null;
        }

        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }

      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}if(true){(function(){'use strict';/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());}var React=__webpack_require__(/*! react */ "./node_modules/react/index.js");var Scheduler=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");var ReactSharedInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var suppressWarning=false;function setSuppressWarning(newSuppressWarning){{suppressWarning=newSuppressWarning;}}// In DEV, calls to console.warn and console.error get replaced
// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(format){{if(!suppressWarning){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}printWarning('warn',format,args);}}}function error(format){{if(!suppressWarning){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}printWarning('error',format,args);}}}function printWarning(level,format,args){// When changing this logic, you might want to also
// update consoleWithStackDev.www.js as well.
{var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var stack=ReactDebugCurrentFrame.getStackAddendum();if(stack!==''){format+='%s';args=args.concat([stack]);}// eslint-disable-next-line react-internal/safe-string-coercion
var argsWithFormat=args.map(function(item){return String(item);});// Careful: RN currently depends on this prefix
argsWithFormat.unshift('Warning: '+format);// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[level],console,argsWithFormat);}}var FunctionComponent=0;var ClassComponent=1;var IndeterminateComponent=2;// Before we know whether it is function or class
var HostRoot=3;// Root of a host tree. Could be nested inside another node.
var HostPortal=4;// A subtree. Could be an entry point to a different renderer.
var HostComponent=5;var HostText=6;var Fragment=7;var Mode=8;var ContextConsumer=9;var ContextProvider=10;var ForwardRef=11;var Profiler=12;var SuspenseComponent=13;var MemoComponent=14;var SimpleMemoComponent=15;var LazyComponent=16;var IncompleteClassComponent=17;var DehydratedFragment=18;var SuspenseListComponent=19;var ScopeComponent=21;var OffscreenComponent=22;var LegacyHiddenComponent=23;var CacheComponent=24;var TracingMarkerComponent=25;// -----------------------------------------------------------------------------
var enableClientRenderFallbackOnTextMismatch=true;// TODO: Need to review this code one more time before landing
// the react-reconciler package.
var enableNewReconciler=false;// Support legacy Primer support on internal FB www
var enableLazyContextPropagation=false;// FB-only usage. The new API has different semantics.
var enableLegacyHidden=false;// Enables unstable_avoidThisFallback feature in Fiber
var enableSuspenseAvoidThisFallback=false;// Enables unstable_avoidThisFallback feature in Fizz
// React DOM Chopping Block
//
// Similar to main Chopping Block but only flags related to React DOM. These are
// grouped because we will likely batch all of them into a single major release.
// -----------------------------------------------------------------------------
// Disable support for comment nodes as React DOM containers. Already disabled
// in open source, but www codebase still relies on it. Need to remove.
var disableCommentsAsDOMContainers=true;// Disable javascript: URL strings in href for XSS protection.
// and client rendering, mostly to allow JSX attributes to apply to the custom
// element's object properties instead of only HTML attributes.
// https://github.com/facebook/react/issues/11347
var enableCustomElementPropertySupport=false;// Disables children for <textarea> elements
var warnAboutStringRefs=false;// -----------------------------------------------------------------------------
// Debugging and DevTools
// -----------------------------------------------------------------------------
// Adds user timing marks for e.g. state updates, suspense, and work loop stuff,
// for an experimental timeline tool.
var enableSchedulingProfiler=true;// Helps identify side effects in render-phase lifecycle hooks and setState
var enableProfilerTimer=true;// Record durations for commit and passive effects phases.
var enableProfilerCommitHooks=true;// Phase param passed to onRender callback differentiates between an "update" and a "cascading-update".
var allNativeEvents=new Set();/**
 * Mapping from registration name to event name
 */var registrationNameDependencies={};/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */var possibleRegistrationNames={};// Trust the developer to only use possibleRegistrationNames in true
function registerTwoPhaseEvent(registrationName,dependencies){registerDirectEvent(registrationName,dependencies);registerDirectEvent(registrationName+'Capture',dependencies);}function registerDirectEvent(registrationName,dependencies){{if(registrationNameDependencies[registrationName]){error('EventRegistry: More than one plugin attempted to publish the same '+'registration name, `%s`.',registrationName);}}registrationNameDependencies[registrationName]=dependencies;{var lowerCasedName=registrationName.toLowerCase();possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){possibleRegistrationNames.ondblclick=registrationName;}}for(var i=0;i<dependencies.length;i++){allNativeEvents.add(dependencies[i]);}}var canUseDOM=!!(typeof window!=='undefined'&&typeof window.document!=='undefined'&&typeof window.document.createElement!=='undefined');var hasOwnProperty=Object.prototype.hasOwnProperty;/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value){{// toStringTag is needed for namespaced types like Temporal.Instant
var hasToStringTag=typeof Symbol==='function'&&Symbol.toStringTag;var type=hasToStringTag&&value[Symbol.toStringTag]||value.constructor.name||'Object';return type;}}// $FlowFixMe only called in DEV, so void return is not possible.
function willCoercionThrow(value){{try{testStringCoercion(value);return false;}catch(e){return true;}}}function testStringCoercion(value){// If you ended up here by following an exception call stack, here's what's
// happened: you supplied an object or symbol value to React (as a prop, key,
// DOM attribute, CSS property, string ref, etc.) and when React tried to
// coerce it to a string using `'' + value`, an exception was thrown.
//
// The most common types that will cause this exception are `Symbol` instances
// and Temporal objects like `Temporal.Instant`. But any object that has a
// `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
// exception. (Library authors do this to prevent users from using built-in
// numeric operators like `+` or comparison operators like `>=` because custom
// methods are needed to perform accurate arithmetic or comparison.)
//
// To fix the problem, coerce this object or symbol value to a string before
// passing it to React. The most reliable way is usually `String(value)`.
//
// To find which value is throwing, check the browser or debugger console.
// Before this exception was thrown, there should be `console.error` output
// that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
// problem and how that type was used: key, atrribute, input value prop, etc.
// In most cases, this console output also shows the component and its
// ancestor components where the exception happened.
//
// eslint-disable-next-line react-internal/safe-string-coercion
return''+value;}function checkAttributeStringCoercion(value,attributeName){{if(willCoercionThrow(value)){error('The provided `%s` attribute is an unsupported type %s.'+' This value must be coerced to a string before before using it here.',attributeName,typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}function checkKeyStringCoercion(value){{if(willCoercionThrow(value)){error('The provided key is an unsupported type %s.'+' This value must be coerced to a string before before using it here.',typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}function checkPropStringCoercion(value,propName){{if(willCoercionThrow(value)){error('The provided `%s` prop is an unsupported type %s.'+' This value must be coerced to a string before before using it here.',propName,typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}function checkCSSPropertyStringCoercion(value,propName){{if(willCoercionThrow(value)){error('The provided `%s` CSS property is an unsupported type %s.'+' This value must be coerced to a string before before using it here.',propName,typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}function checkHtmlStringCoercion(value){{if(willCoercionThrow(value)){error('The provided HTML markup uses a value of unsupported type %s.'+' This value must be coerced to a string before before using it here.',typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}function checkFormFieldValueStringCoercion(value){{if(willCoercionThrow(value)){error('Form field values (value, checked, defaultValue, or defaultChecked props)'+' must be strings, not %s.'+' This value must be coerced to a string before before using it here.',typeName(value));return testStringCoercion(value);// throw (to help callers find troubleshooting comments)
}}}// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED=0;// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
var STRING=1;// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING=2;// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN=3;// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN=4;// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC=5;// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC=6;/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";/* eslint-enable max-len */var ATTRIBUTE_NAME_CHAR=ATTRIBUTE_NAME_START_CHAR+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+ATTRIBUTE_NAME_START_CHAR+']['+ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(hasOwnProperty.call(validatedAttributeNameCache,attributeName)){return true;}if(hasOwnProperty.call(illegalAttributeNameCache,attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;{error('Invalid attribute name: `%s`',attributeName);}return false;}function shouldIgnoreAttribute(name,propertyInfo,isCustomComponentTag){if(propertyInfo!==null){return propertyInfo.type===RESERVED;}if(isCustomComponentTag){return false;}if(name.length>2&&(name[0]==='o'||name[0]==='O')&&(name[1]==='n'||name[1]==='N')){return true;}return false;}function shouldRemoveAttributeWithWarning(name,value,propertyInfo,isCustomComponentTag){if(propertyInfo!==null&&propertyInfo.type===RESERVED){return false;}switch(_typeof(value)){case'function':// $FlowIssue symbol is perfectly valid here
case'symbol':// eslint-disable-line
return true;case'boolean':{if(isCustomComponentTag){return false;}if(propertyInfo!==null){return!propertyInfo.acceptsBooleans;}else{var prefix=name.toLowerCase().slice(0,5);return prefix!=='data-'&&prefix!=='aria-';}}default:return false;}}function shouldRemoveAttribute(name,value,propertyInfo,isCustomComponentTag){if(value===null||typeof value==='undefined'){return true;}if(shouldRemoveAttributeWithWarning(name,value,propertyInfo,isCustomComponentTag)){return true;}if(isCustomComponentTag){return false;}if(propertyInfo!==null){switch(propertyInfo.type){case BOOLEAN:return!value;case OVERLOADED_BOOLEAN:return value===false;case NUMERIC:return isNaN(value);case POSITIVE_NUMERIC:return isNaN(value)||value<1;}}return false;}function getPropertyInfo(name){return properties.hasOwnProperty(name)?properties[name]:null;}function PropertyInfoRecord(name,type,mustUseProperty,attributeName,attributeNamespace,sanitizeURL,removeEmptyString){this.acceptsBooleans=type===BOOLEANISH_STRING||type===BOOLEAN||type===OVERLOADED_BOOLEAN;this.attributeName=attributeName;this.attributeNamespace=attributeNamespace;this.mustUseProperty=mustUseProperty;this.propertyName=name;this.type=type;this.sanitizeURL=sanitizeURL;this.removeEmptyString=removeEmptyString;}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties={};// These props are reserved by React. They shouldn't be written to the DOM.
var reservedProps=['children','dangerouslySetInnerHTML',// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue','defaultChecked','innerHTML','suppressContentEditableWarning','suppressHydrationWarning','style'];reservedProps.forEach(function(name){properties[name]=new PropertyInfoRecord(name,RESERVED,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset','accept-charset'],['className','class'],['htmlFor','for'],['httpEquiv','http-equiv']].forEach(function(_ref){var name=_ref[0],attributeName=_ref[1];properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable','draggable','spellCheck','value'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEANISH_STRING,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse','externalResourcesRequired','focusable','preserveAlpha'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEANISH_STRING,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML boolean attributes.
['allowFullScreen','async',// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus','autoPlay','controls','default','defer','disabled','disablePictureInPicture','disableRemotePlayback','formNoValidate','hidden','loop','noModule','noValidate','open','playsInline','readOnly','required','reversed','scoped','seamless',// Microdata
'itemScope'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEAN,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple','muted','selected'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEAN,true,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture','download'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,OVERLOADED_BOOLEAN,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that must be positive numbers.
['cols','rows','size','span'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,POSITIVE_NUMERIC,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that must be numbers.
['rowSpan','start'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,NUMERIC,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});var CAMELIZE=/[\-\:]([a-z])/g;var capitalize=function capitalize(token){return token[1].toUpperCase();};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
['accent-height','alignment-baseline','arabic-form','baseline-shift','cap-height','clip-path','clip-rule','color-interpolation','color-interpolation-filters','color-profile','color-rendering','dominant-baseline','enable-background','fill-opacity','fill-rule','flood-color','flood-opacity','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','glyph-name','glyph-orientation-horizontal','glyph-orientation-vertical','horiz-adv-x','horiz-origin-x','image-rendering','letter-spacing','lighting-color','marker-end','marker-mid','marker-start','overline-position','overline-thickness','paint-order','panose-1','pointer-events','rendering-intent','shape-rendering','stop-color','stop-opacity','strikethrough-position','strikethrough-thickness','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke-width','text-anchor','text-decoration','text-rendering','underline-position','underline-thickness','unicode-bidi','unicode-range','units-per-em','v-alphabetic','v-hanging','v-ideographic','v-mathematical','vector-effect','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing','writing-mode','xmlns:xlink','x-height'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,null,// attributeNamespace
false,// sanitizeURL
false);});// String SVG attributes with the xlink namespace.
['xlink:actuate','xlink:arcrole','xlink:role','xlink:show','xlink:title','xlink:type'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,'http://www.w3.org/1999/xlink',false,// sanitizeURL
false);});// String SVG attributes with the xml namespace.
['xml:base','xml:lang','xml:space'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,'http://www.w3.org/XML/1998/namespace',false,// sanitizeURL
false);});// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex','crossOrigin'].forEach(function(attributeName){properties[attributeName]=new PropertyInfoRecord(attributeName,STRING,false,// mustUseProperty
attributeName.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
var xlinkHref='xlinkHref';properties[xlinkHref]=new PropertyInfoRecord('xlinkHref',STRING,false,// mustUseProperty
'xlink:href','http://www.w3.org/1999/xlink',true,// sanitizeURL
false);['src','href','action','formAction'].forEach(function(attributeName){properties[attributeName]=new PropertyInfoRecord(attributeName,STRING,false,// mustUseProperty
attributeName.toLowerCase(),// attributeName
null,// attributeNamespace
true,// sanitizeURL
true);});// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */var isJavaScriptProtocol=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;var didWarn=false;function sanitizeURL(url){{if(!didWarn&&isJavaScriptProtocol.test(url)){didWarn=true;error('A future version of React will block javascript: URLs as a security precaution. '+'Use event handlers instead if you can. If you need to generate unsafe HTML try '+'using dangerouslySetInnerHTML instead. React was passed %s.',JSON.stringify(url));}}}/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */function getValueForProperty(node,name,expected,propertyInfo){{if(propertyInfo.mustUseProperty){var propertyName=propertyInfo.propertyName;return node[propertyName];}else{// This check protects multiple uses of `expected`, which is why the
// react-internal/safe-string-coercion rule is disabled in several spots
// below.
{checkAttributeStringCoercion(expected,name);}if(propertyInfo.sanitizeURL){// If we haven't fully disabled javascript: URLs, and if
// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
// eslint-disable-next-line react-internal/safe-string-coercion
sanitizeURL(''+expected);}var attributeName=propertyInfo.attributeName;var stringValue=null;if(propertyInfo.type===OVERLOADED_BOOLEAN){if(node.hasAttribute(attributeName)){var value=node.getAttribute(attributeName);if(value===''){return true;}if(shouldRemoveAttribute(name,expected,propertyInfo,false)){return value;}// eslint-disable-next-line react-internal/safe-string-coercion
if(value===''+expected){return expected;}return value;}}else if(node.hasAttribute(attributeName)){if(shouldRemoveAttribute(name,expected,propertyInfo,false)){// We had an attribute but shouldn't have had one, so read it
// for the error message.
return node.getAttribute(attributeName);}if(propertyInfo.type===BOOLEAN){// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return expected;}// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
stringValue=node.getAttribute(attributeName);}if(shouldRemoveAttribute(name,expected,propertyInfo,false)){return stringValue===null?expected:stringValue;// eslint-disable-next-line react-internal/safe-string-coercion
}else if(stringValue===''+expected){return expected;}else{return stringValue;}}}}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */function getValueForAttribute(node,name,expected){{if(!isAttributeNameSafe(name)){return;}if(!node.hasAttribute(name)){return expected===undefined?undefined:null;}var value=node.getAttribute(name);{checkAttributeStringCoercion(expected,name);}if(value===''+expected){return expected;}return value;}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */function setValueForProperty(node,name,value,isCustomComponentTag){var propertyInfo=getPropertyInfo(name);if(shouldIgnoreAttribute(name,propertyInfo,isCustomComponentTag)){return;}if(shouldRemoveAttribute(name,value,propertyInfo,isCustomComponentTag)){value=null;}// If the prop isn't in the special list, treat it as a simple attribute.
if(isCustomComponentTag||propertyInfo===null){if(isAttributeNameSafe(name)){var _attributeName=name;if(value===null){node.removeAttribute(_attributeName);}else{{checkAttributeStringCoercion(value,name);}node.setAttribute(_attributeName,''+value);}}return;}var mustUseProperty=propertyInfo.mustUseProperty;if(mustUseProperty){var propertyName=propertyInfo.propertyName;if(value===null){var type=propertyInfo.type;node[propertyName]=type===BOOLEAN?false:'';}else{// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propertyName]=value;}return;}// The rest are treated as attributes with special cases.
var attributeName=propertyInfo.attributeName,attributeNamespace=propertyInfo.attributeNamespace;if(value===null){node.removeAttribute(attributeName);}else{var _type=propertyInfo.type;var attributeValue;if(_type===BOOLEAN||_type===OVERLOADED_BOOLEAN&&value===true){// If attribute type is boolean, we know for sure it won't be an execution sink
// and we won't require Trusted Type here.
attributeValue='';}else{// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
{{checkAttributeStringCoercion(value,attributeName);}attributeValue=''+value;}if(propertyInfo.sanitizeURL){sanitizeURL(attributeValue.toString());}}if(attributeNamespace){node.setAttributeNS(attributeNamespace,attributeName,attributeValue);}else{node.setAttribute(attributeName,attributeValue);}}}// ATTENTION
var REACT_ELEMENT_TYPE=Symbol["for"]('react.element');var REACT_PORTAL_TYPE=Symbol["for"]('react.portal');var REACT_FRAGMENT_TYPE=Symbol["for"]('react.fragment');var REACT_STRICT_MODE_TYPE=Symbol["for"]('react.strict_mode');var REACT_PROFILER_TYPE=Symbol["for"]('react.profiler');var REACT_PROVIDER_TYPE=Symbol["for"]('react.provider');var REACT_CONTEXT_TYPE=Symbol["for"]('react.context');var REACT_FORWARD_REF_TYPE=Symbol["for"]('react.forward_ref');var REACT_SUSPENSE_TYPE=Symbol["for"]('react.suspense');var REACT_SUSPENSE_LIST_TYPE=Symbol["for"]('react.suspense_list');var REACT_MEMO_TYPE=Symbol["for"]('react.memo');var REACT_LAZY_TYPE=Symbol["for"]('react.lazy');var REACT_SCOPE_TYPE=Symbol["for"]('react.scope');var REACT_DEBUG_TRACING_MODE_TYPE=Symbol["for"]('react.debug_trace_mode');var REACT_OFFSCREEN_TYPE=Symbol["for"]('react.offscreen');var REACT_LEGACY_HIDDEN_TYPE=Symbol["for"]('react.legacy_hidden');var REACT_CACHE_TYPE=Symbol["for"]('react.cache');var REACT_TRACING_MARKER_TYPE=Symbol["for"]('react.tracing_marker');var MAYBE_ITERATOR_SYMBOL=Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){if(maybeIterable===null||_typeof(maybeIterable)!=='object'){return null;}var maybeIterator=MAYBE_ITERATOR_SYMBOL&&maybeIterable[MAYBE_ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof maybeIterator==='function'){return maybeIterator;}return null;}var assign=Object.assign;// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth=0;var prevLog;var prevInfo;var prevWarn;var prevError;var prevGroup;var prevGroupCollapsed;var prevGroupEnd;function disabledLog(){}disabledLog.__reactDisabledLog=true;function disableLogs(){{if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */prevLog=console.log;prevInfo=console.info;prevWarn=console.warn;prevError=console.error;prevGroup=console.group;prevGroupCollapsed=console.groupCollapsed;prevGroupEnd=console.groupEnd;// https://github.com/facebook/react/issues/19099
var props={configurable:true,enumerable:true,value:disabledLog,writable:true};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:props,log:props,warn:props,error:props,group:props,groupCollapsed:props,groupEnd:props});/* eslint-enable react-internal/no-production-logging */}disabledDepth++;}}function reenableLogs(){{disabledDepth--;if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */var props={configurable:true,enumerable:true,writable:true};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:assign({},props,{value:prevLog}),info:assign({},props,{value:prevInfo}),warn:assign({},props,{value:prevWarn}),error:assign({},props,{value:prevError}),group:assign({},props,{value:prevGroup}),groupCollapsed:assign({},props,{value:prevGroupCollapsed}),groupEnd:assign({},props,{value:prevGroupEnd})});/* eslint-enable react-internal/no-production-logging */}if(disabledDepth<0){error('disabledDepth fell below zero. '+'This is a bug in React. Please file an issue.');}}}var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;var prefix;function describeBuiltInComponentFrame(name,source,ownerFn){{if(prefix===undefined){// Extract the VM specific prefix used by each line.
try{throw Error();}catch(x){var match=x.stack.trim().match(/\n( *(at )?)/);prefix=match&&match[1]||'';}}// We use the prefix to ensure our stacks line up with native stack frames.
return'\n'+prefix+name;}}var reentry=false;var componentFrameCache;{var PossiblyWeakMap=typeof WeakMap==='function'?WeakMap:Map;componentFrameCache=new PossiblyWeakMap();}function describeNativeComponentFrame(fn,construct){// If something asked for a stack inside a fake render, it should get ignored.
if(!fn||reentry){return'';}{var frame=componentFrameCache.get(fn);if(frame!==undefined){return frame;}}var control;reentry=true;var previousPrepareStackTrace=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=undefined;var previousDispatcher;{previousDispatcher=ReactCurrentDispatcher.current;// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
ReactCurrentDispatcher.current=null;disableLogs();}try{// This should throw.
if(construct){// Something should be setting the props in the constructor.
var Fake=function Fake(){throw Error();};// $FlowFixMe
Object.defineProperty(Fake.prototype,'props',{set:function set(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error();}});if((typeof Reflect==="undefined"?"undefined":_typeof(Reflect))==='object'&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(Fake,[]);}catch(x){control=x;}Reflect.construct(fn,[],Fake);}else{try{Fake.call();}catch(x){control=x;}fn.call(Fake.prototype);}}else{try{throw Error();}catch(x){control=x;}fn();}}catch(sample){// This is inlined manually because closure doesn't do it for us.
if(sample&&control&&typeof sample.stack==='string'){// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var sampleLines=sample.stack.split('\n');var controlLines=control.stack.split('\n');var s=sampleLines.length-1;var c=controlLines.length-1;while(s>=1&&c>=0&&sampleLines[s]!==controlLines[c]){// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
c--;}for(;s>=1&&c>=0;s--,c--){// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(sampleLines[s]!==controlLines[c]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(s!==1||c!==1){do{s--;c--;// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(c<0||sampleLines[s]!==controlLines[c]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var _frame='\n'+sampleLines[s].replace(' at new ',' at ');// If our component frame is labeled "<anonymous>"
// but we have a user-provided "displayName"
// splice it in to make the stack more readable.
if(fn.displayName&&_frame.includes('<anonymous>')){_frame=_frame.replace('<anonymous>',fn.displayName);}{if(typeof fn==='function'){componentFrameCache.set(fn,_frame);}}// Return the line we found.
return _frame;}}while(s>=1&&c>=0);}break;}}}}finally{reentry=false;{ReactCurrentDispatcher.current=previousDispatcher;reenableLogs();}Error.prepareStackTrace=previousPrepareStackTrace;}// Fallback to just using the name if we couldn't make it throw.
var name=fn?fn.displayName||fn.name:'';var syntheticFrame=name?describeBuiltInComponentFrame(name):'';{if(typeof fn==='function'){componentFrameCache.set(fn,syntheticFrame);}}return syntheticFrame;}function describeClassComponentFrame(ctor,source,ownerFn){{return describeNativeComponentFrame(ctor,true);}}function describeFunctionComponentFrame(fn,source,ownerFn){{return describeNativeComponentFrame(fn,false);}}function shouldConstruct(Component){var prototype=Component.prototype;return!!(prototype&&prototype.isReactComponent);}function describeUnknownElementTypeFrameInDEV(type,source,ownerFn){if(type==null){return'';}if(typeof type==='function'){{return describeNativeComponentFrame(type,shouldConstruct(type));}}if(typeof type==='string'){return describeBuiltInComponentFrame(type);}switch(type){case REACT_SUSPENSE_TYPE:return describeBuiltInComponentFrame('Suspense');case REACT_SUSPENSE_LIST_TYPE:return describeBuiltInComponentFrame('SuspenseList');}if(_typeof(type)==='object'){switch(type.$$typeof){case REACT_FORWARD_REF_TYPE:return describeFunctionComponentFrame(type.render);case REACT_MEMO_TYPE:// Memo may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(type.type,source,ownerFn);case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{// Lazy may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(init(payload),source,ownerFn);}catch(x){}}}}return'';}function describeFiber(fiber){var owner=fiber._debugOwner?fiber._debugOwner.type:null;var source=fiber._debugSource;switch(fiber.tag){case HostComponent:return describeBuiltInComponentFrame(fiber.type);case LazyComponent:return describeBuiltInComponentFrame('Lazy');case SuspenseComponent:return describeBuiltInComponentFrame('Suspense');case SuspenseListComponent:return describeBuiltInComponentFrame('SuspenseList');case FunctionComponent:case IndeterminateComponent:case SimpleMemoComponent:return describeFunctionComponentFrame(fiber.type);case ForwardRef:return describeFunctionComponentFrame(fiber.type.render);case ClassComponent:return describeClassComponentFrame(fiber.type);default:return'';}}function getStackByFiberInDevAndProd(workInProgress){try{var info='';var node=workInProgress;do{info+=describeFiber(node);node=node["return"];}while(node);return info;}catch(x){return'\nError generating stack: '+x.message+'\n'+x.stack;}}function getWrappedName(outerType,innerType,wrapperName){var displayName=outerType.displayName;if(displayName){return displayName;}var functionName=innerType.displayName||innerType.name||'';return functionName!==''?wrapperName+"("+functionName+")":wrapperName;}// Keep in sync with react-reconciler/getComponentNameFromFiber
function getContextName(type){return type.displayName||'Context';}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function getComponentNameFromType(type){if(type==null){// Host root, text node or just invalid type.
return null;}{if(typeof type.tag==='number'){error('Received an unexpected object in getComponentNameFromType(). '+'This is likely a bug in React. Please file an issue.');}}if(typeof type==='function'){return type.displayName||type.name||null;}if(typeof type==='string'){return type;}switch(type){case REACT_FRAGMENT_TYPE:return'Fragment';case REACT_PORTAL_TYPE:return'Portal';case REACT_PROFILER_TYPE:return'Profiler';case REACT_STRICT_MODE_TYPE:return'StrictMode';case REACT_SUSPENSE_TYPE:return'Suspense';case REACT_SUSPENSE_LIST_TYPE:return'SuspenseList';}if(_typeof(type)==='object'){switch(type.$$typeof){case REACT_CONTEXT_TYPE:var context=type;return getContextName(context)+'.Consumer';case REACT_PROVIDER_TYPE:var provider=type;return getContextName(provider._context)+'.Provider';case REACT_FORWARD_REF_TYPE:return getWrappedName(type,type.render,'ForwardRef');case REACT_MEMO_TYPE:var outerName=type.displayName||null;if(outerName!==null){return outerName;}return getComponentNameFromType(type.type)||'Memo';case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{return getComponentNameFromType(init(payload));}catch(x){return null;}}// eslint-disable-next-line no-fallthrough
}}return null;}function getWrappedName$1(outerType,innerType,wrapperName){var functionName=innerType.displayName||innerType.name||'';return outerType.displayName||(functionName!==''?wrapperName+"("+functionName+")":wrapperName);}// Keep in sync with shared/getComponentNameFromType
function getContextName$1(type){return type.displayName||'Context';}function getComponentNameFromFiber(fiber){var tag=fiber.tag,type=fiber.type;switch(tag){case CacheComponent:return'Cache';case ContextConsumer:var context=type;return getContextName$1(context)+'.Consumer';case ContextProvider:var provider=type;return getContextName$1(provider._context)+'.Provider';case DehydratedFragment:return'DehydratedFragment';case ForwardRef:return getWrappedName$1(type,type.render,'ForwardRef');case Fragment:return'Fragment';case HostComponent:// Host component type is the display name (e.g. "div", "View")
return type;case HostPortal:return'Portal';case HostRoot:return'Root';case HostText:return'Text';case LazyComponent:// Name comes from the type in this case; we don't have a tag.
return getComponentNameFromType(type);case Mode:if(type===REACT_STRICT_MODE_TYPE){// Don't be less specific than shared/getComponentNameFromType
return'StrictMode';}return'Mode';case OffscreenComponent:return'Offscreen';case Profiler:return'Profiler';case ScopeComponent:return'Scope';case SuspenseComponent:return'Suspense';case SuspenseListComponent:return'SuspenseList';case TracingMarkerComponent:return'TracingMarker';// The display name for this tags come from the user-provided type:
case ClassComponent:case FunctionComponent:case IncompleteClassComponent:case IndeterminateComponent:case MemoComponent:case SimpleMemoComponent:if(typeof type==='function'){return type.displayName||type.name||null;}if(typeof type==='string'){return type;}break;}return null;}var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var current=null;var isRendering=false;function getCurrentFiberOwnerNameInDevOrNull(){{if(current===null){return null;}var owner=current._debugOwner;if(owner!==null&&typeof owner!=='undefined'){return getComponentNameFromFiber(owner);}}return null;}function getCurrentFiberStackInDev(){{if(current===null){return'';}// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
return getStackByFiberInDevAndProd(current);}}function resetCurrentFiber(){{ReactDebugCurrentFrame.getCurrentStack=null;current=null;isRendering=false;}}function setCurrentFiber(fiber){{ReactDebugCurrentFrame.getCurrentStack=fiber===null?null:getCurrentFiberStackInDev;current=fiber;isRendering=false;}}function getCurrentFiber(){{return current;}}function setIsRendering(rendering){{isRendering=rendering;}}// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(value){// The coercion safety check is performed in getToStringValue().
// eslint-disable-next-line react-internal/safe-string-coercion
return''+value;}function getToStringValue(value){switch(_typeof(value)){case'boolean':case'number':case'string':case'undefined':return value;case'object':{checkFormFieldValueStringCoercion(value);}return value;default:// function, symbol are assigned as empty strings
return'';}}var hasReadOnlyValue={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true};function checkControlledValueProps(tagName,props){{if(!(hasReadOnlyValue[props.type]||props.onChange||props.onInput||props.readOnly||props.disabled||props.value==null)){error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');}if(!(props.onChange||props.readOnly||props.disabled||props.checked==null)){error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');}}}function isCheckable(elem){var type=elem.type;var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(type==='checkbox'||type==='radio');}function getTracker(node){return node._valueTracker;}function detachTracker(node){node._valueTracker=null;}function getValueFromNode(node){var value='';if(!node){return value;}if(isCheckable(node)){value=node.checked?'true':'false';}else{value=node.value;}return value;}function trackValueOnNode(node){var valueField=isCheckable(node)?'checked':'value';var descriptor=Object.getOwnPropertyDescriptor(node.constructor.prototype,valueField);{checkFormFieldValueStringCoercion(node[valueField]);}var currentValue=''+node[valueField];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(node.hasOwnProperty(valueField)||typeof descriptor==='undefined'||typeof descriptor.get!=='function'||typeof descriptor.set!=='function'){return;}var _get=descriptor.get,_set=descriptor.set;Object.defineProperty(node,valueField,{configurable:true,get:function get(){return _get.call(this);},set:function set(value){{checkFormFieldValueStringCoercion(value);}currentValue=''+value;_set.call(this,value);}});// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(node,valueField,{enumerable:descriptor.enumerable});var tracker={getValue:function getValue(){return currentValue;},setValue:function setValue(value){{checkFormFieldValueStringCoercion(value);}currentValue=''+value;},stopTracking:function stopTracking(){detachTracker(node);delete node[valueField];}};return tracker;}function track(node){if(getTracker(node)){return;}// TODO: Once it's just Fiber we can move this to node._wrapperState
node._valueTracker=trackValueOnNode(node);}function updateValueIfChanged(node){if(!node){return false;}var tracker=getTracker(node);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!tracker){return true;}var lastValue=tracker.getValue();var nextValue=getValueFromNode(node);if(nextValue!==lastValue){tracker.setValue(nextValue);return true;}return false;}function getActiveElement(doc){doc=doc||(typeof document!=='undefined'?document:undefined);if(typeof doc==='undefined'){return null;}try{return doc.activeElement||doc.body;}catch(e){return doc.body;}}var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */function getHostProps(element,props){var node=element;var checked=props.checked;var hostProps=assign({},props,{defaultChecked:undefined,defaultValue:undefined,value:undefined,checked:checked!=null?checked:node._wrapperState.initialChecked});return hostProps;}function initWrapperState(element,props){{checkControlledValueProps('input',props);if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){error('%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component',props.type);didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){error('%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component',props.type);didWarnValueDefaultValue=true;}}var node=element;var defaultValue=props.defaultValue==null?'':props.defaultValue;node._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:getToStringValue(props.value!=null?props.value:defaultValue),controlled:isControlled(props)};}function updateChecked(element,props){var node=element;var checked=props.checked;if(checked!=null){setValueForProperty(node,'checked',checked,false);}}function updateWrapper(element,props){var node=element;{var controlled=isControlled(props);if(!node._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){error('A component is changing an uncontrolled input to be controlled. '+'This is likely caused by the value changing from undefined to '+'a defined value, which should not happen. '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');didWarnUncontrolledToControlled=true;}if(node._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){error('A component is changing a controlled input to be uncontrolled. '+'This is likely caused by the value changing from a defined to '+'undefined, which should not happen. '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');didWarnControlledToUncontrolled=true;}}updateChecked(element,props);var value=getToStringValue(props.value);var type=props.type;if(value!=null){if(type==='number'){if(value===0&&node.value===''||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
node.value!=value){node.value=toString(value);}}else if(node.value!==toString(value)){node.value=toString(value);}}else if(type==='submit'||type==='reset'){// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
node.removeAttribute('value');return;}{// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
if(props.hasOwnProperty('value')){setDefaultValue(node,props.type,value);}else if(props.hasOwnProperty('defaultValue')){setDefaultValue(node,props.type,getToStringValue(props.defaultValue));}}{// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}}function postMountWrapper(element,props,isHydrating){var node=element;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(props.hasOwnProperty('value')||props.hasOwnProperty('defaultValue')){var type=props.type;var isButton=type==='submit'||type==='reset';// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(isButton&&(props.value===undefined||props.value===null)){return;}var initialValue=toString(node._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(!isHydrating){{// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
if(initialValue!==node.value){node.value=initialValue;}}}{// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
node.defaultValue=initialValue;}}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var name=node.name;if(name!==''){node.name='';}{// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
node.defaultChecked=!node.defaultChecked;node.defaultChecked=!!node._wrapperState.initialChecked;}if(name!==''){node.name=name;}}function restoreControlledState(element,props){var node=element;updateWrapper(node,props);updateNamedCousins(node,props);}function updateNamedCousins(rootNode,props){var name=props.name;if(props.type==='radio'&&name!=null){var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
{checkAttributeStringCoercion(name,'name');}var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherProps=getFiberCurrentPropsFromNode(otherNode);if(!otherProps){throw new Error('ReactDOMInput: Mixing React and non-React radio inputs with the '+'same `name` is not supported.');}// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(otherNode);// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(otherNode,otherProps);}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function setDefaultValue(node,type,value){if(// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
type!=='number'||getActiveElement(node.ownerDocument)!==node){if(value==null){node.defaultValue=toString(node._wrapperState.initialValue);}else if(node.defaultValue!==toString(value)){node.defaultValue=toString(value);}}}var didWarnSelectedSetOnOption=false;var didWarnInvalidChild=false;var didWarnInvalidInnerHTML=false;/**
 * Implements an <option> host component that warns when `selected` is set.
 */function validateProps(element,props){{// If a value is not provided, then the children must be simple.
if(props.value==null){if(_typeof(props.children)==='object'&&props.children!==null){React.Children.forEach(props.children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){return;}if(!didWarnInvalidChild){didWarnInvalidChild=true;error('Cannot infer the option value of complex children. '+'Pass a `value` prop or use a plain string as children to <option>.');}});}else if(props.dangerouslySetInnerHTML!=null){if(!didWarnInvalidInnerHTML){didWarnInvalidInnerHTML=true;error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows '+'which value should be selected.');}}}// TODO: Remove support for `selected` in <option>.
if(props.selected!=null&&!didWarnSelectedSetOnOption){error('Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.');didWarnSelectedSetOnOption=true;}}}function postMountWrapper$1(element,props){// value="" should make a value attribute (#6219)
if(props.value!=null){element.setAttribute('value',toString(getToStringValue(props.value)));}}var isArrayImpl=Array.isArray;// eslint-disable-next-line no-redeclare
function isArray(a){return isArrayImpl(a);}var didWarnValueDefaultValue$1;{didWarnValueDefaultValue$1=false;}function getDeclarationErrorAddendum(){var ownerName=getCurrentFiberOwnerNameInDevOrNull();if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';}var valuePropNames=['value','defaultValue'];/**
 * Validation function for `value` and `defaultValue`.
 */function checkSelectPropTypes(props){{checkControlledValueProps('select',props);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var propNameIsArray=isArray(props[propName]);if(props.multiple&&!propNameIsArray){error('The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum());}else if(!props.multiple&&propNameIsArray){error('The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum());}}}}function updateOptions(node,multiple,propValue,setDefaultSelected){var options=node.options;if(multiple){var selectedValues=propValue;var selectedValue={};for(var i=0;i<selectedValues.length;i++){// Prefix to avoid chaos with special keys.
selectedValue['$'+selectedValues[i]]=true;}for(var _i=0;_i<options.length;_i++){var selected=selectedValue.hasOwnProperty('$'+options[_i].value);if(options[_i].selected!==selected){options[_i].selected=selected;}if(selected&&setDefaultSelected){options[_i].defaultSelected=true;}}}else{// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var _selectedValue=toString(getToStringValue(propValue));var defaultSelected=null;for(var _i2=0;_i2<options.length;_i2++){if(options[_i2].value===_selectedValue){options[_i2].selected=true;if(setDefaultSelected){options[_i2].defaultSelected=true;}return;}if(defaultSelected===null&&!options[_i2].disabled){defaultSelected=options[_i2];}}if(defaultSelected!==null){defaultSelected.selected=true;}}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */function getHostProps$1(element,props){return assign({},props,{value:undefined});}function initWrapperState$1(element,props){var node=element;{checkSelectPropTypes(props);}node._wrapperState={wasMultiple:!!props.multiple};{if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue$1){error('Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components');didWarnValueDefaultValue$1=true;}}}function postMountWrapper$2(element,props){var node=element;node.multiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}}function postUpdateWrapper(element,props){var node=element;var wasMultiple=node._wrapperState.wasMultiple;node._wrapperState.wasMultiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(wasMultiple!==!!props.multiple){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}else{// Revert the select back to its default unselected state.
updateOptions(node,!!props.multiple,props.multiple?[]:'',false);}}}function restoreControlledState$1(element,props){var node=element;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}}var didWarnValDefaultVal=false;/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */function getHostProps$2(element,props){var node=element;if(props.dangerouslySetInnerHTML!=null){throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');}// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
var hostProps=assign({},props,{value:undefined,defaultValue:undefined,children:toString(node._wrapperState.initialValue)});return hostProps;}function initWrapperState$2(element,props){var node=element;{checkControlledValueProps('textarea',props);if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){error('%s contains a textarea with both value and defaultValue props. '+'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component');didWarnValDefaultVal=true;}}var initialValue=props.value;// Only bother fetching default value if we're going to use it
if(initialValue==null){var children=props.children,defaultValue=props.defaultValue;if(children!=null){{error('Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.');}{if(defaultValue!=null){throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');}if(isArray(children)){if(children.length>1){throw new Error('<textarea> can only have at most one child.');}children=children[0];}defaultValue=children;}}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}node._wrapperState={initialValue:getToStringValue(initialValue)};}function updateWrapper$1(element,props){var node=element;var value=getToStringValue(props.value);var defaultValue=getToStringValue(props.defaultValue);if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=toString(value);// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null&&node.defaultValue!==newValue){node.defaultValue=newValue;}}if(defaultValue!=null){node.defaultValue=toString(defaultValue);}}function postMountWrapper$3(element,props){var node=element;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var textContent=node.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
if(textContent===node._wrapperState.initialValue){if(textContent!==''&&textContent!==null){node.value=textContent;}}}function restoreControlledState$2(element,props){// DOM component is still mounted; update
updateWrapper$1(element,props);}var HTML_NAMESPACE='http://www.w3.org/1999/xhtml';var MATH_NAMESPACE='http://www.w3.org/1998/Math/MathML';var SVG_NAMESPACE='http://www.w3.org/2000/svg';// Assumes there is no parent namespace.
function getIntrinsicNamespace(type){switch(type){case'svg':return SVG_NAMESPACE;case'math':return MATH_NAMESPACE;default:return HTML_NAMESPACE;}}function getChildNamespace(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE){// No (or default) parent namespace: potential entry point.
return getIntrinsicNamespace(type);}if(parentNamespace===SVG_NAMESPACE&&type==='foreignObject'){// We're leaving SVG.
return HTML_NAMESPACE;}// By default, pass namespace below.
return parentNamespace;}/* globals MSApp */ /**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else{return func;}};var reusableSVGContainer;/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){if(node.namespaceURI===SVG_NAMESPACE){if(!('innerHTML'in node)){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html.valueOf().toString()+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(node.firstChild){node.removeChild(node.firstChild);}while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}return;}}node.innerHTML=html;});/**
 * HTML nodeType values that represent the type of the node
 */var ELEMENT_NODE=1;var TEXT_NODE=3;var COMMENT_NODE=8;var DOCUMENT_NODE=9;var DOCUMENT_FRAGMENT_NODE=11;/**
 * Set the textContent property of a node. For text updates, it's faster
 * to set the `nodeValue` of the Text node directly instead of using
 * `.textContent` which will remove the existing node and create a new one.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===TEXT_NODE){firstChild.nodeValue=text;return;}}node.textContent=text;};// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var shorthandToLonghand={animation:['animationDelay','animationDirection','animationDuration','animationFillMode','animationIterationCount','animationName','animationPlayState','animationTimingFunction'],background:['backgroundAttachment','backgroundClip','backgroundColor','backgroundImage','backgroundOrigin','backgroundPositionX','backgroundPositionY','backgroundRepeat','backgroundSize'],backgroundPosition:['backgroundPositionX','backgroundPositionY'],border:['borderBottomColor','borderBottomStyle','borderBottomWidth','borderImageOutset','borderImageRepeat','borderImageSlice','borderImageSource','borderImageWidth','borderLeftColor','borderLeftStyle','borderLeftWidth','borderRightColor','borderRightStyle','borderRightWidth','borderTopColor','borderTopStyle','borderTopWidth'],borderBlockEnd:['borderBlockEndColor','borderBlockEndStyle','borderBlockEndWidth'],borderBlockStart:['borderBlockStartColor','borderBlockStartStyle','borderBlockStartWidth'],borderBottom:['borderBottomColor','borderBottomStyle','borderBottomWidth'],borderColor:['borderBottomColor','borderLeftColor','borderRightColor','borderTopColor'],borderImage:['borderImageOutset','borderImageRepeat','borderImageSlice','borderImageSource','borderImageWidth'],borderInlineEnd:['borderInlineEndColor','borderInlineEndStyle','borderInlineEndWidth'],borderInlineStart:['borderInlineStartColor','borderInlineStartStyle','borderInlineStartWidth'],borderLeft:['borderLeftColor','borderLeftStyle','borderLeftWidth'],borderRadius:['borderBottomLeftRadius','borderBottomRightRadius','borderTopLeftRadius','borderTopRightRadius'],borderRight:['borderRightColor','borderRightStyle','borderRightWidth'],borderStyle:['borderBottomStyle','borderLeftStyle','borderRightStyle','borderTopStyle'],borderTop:['borderTopColor','borderTopStyle','borderTopWidth'],borderWidth:['borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopWidth'],columnRule:['columnRuleColor','columnRuleStyle','columnRuleWidth'],columns:['columnCount','columnWidth'],flex:['flexBasis','flexGrow','flexShrink'],flexFlow:['flexDirection','flexWrap'],font:['fontFamily','fontFeatureSettings','fontKerning','fontLanguageOverride','fontSize','fontSizeAdjust','fontStretch','fontStyle','fontVariant','fontVariantAlternates','fontVariantCaps','fontVariantEastAsian','fontVariantLigatures','fontVariantNumeric','fontVariantPosition','fontWeight','lineHeight'],fontVariant:['fontVariantAlternates','fontVariantCaps','fontVariantEastAsian','fontVariantLigatures','fontVariantNumeric','fontVariantPosition'],gap:['columnGap','rowGap'],grid:['gridAutoColumns','gridAutoFlow','gridAutoRows','gridTemplateAreas','gridTemplateColumns','gridTemplateRows'],gridArea:['gridColumnEnd','gridColumnStart','gridRowEnd','gridRowStart'],gridColumn:['gridColumnEnd','gridColumnStart'],gridColumnGap:['columnGap'],gridGap:['columnGap','rowGap'],gridRow:['gridRowEnd','gridRowStart'],gridRowGap:['rowGap'],gridTemplate:['gridTemplateAreas','gridTemplateColumns','gridTemplateRows'],listStyle:['listStyleImage','listStylePosition','listStyleType'],margin:['marginBottom','marginLeft','marginRight','marginTop'],marker:['markerEnd','markerMid','markerStart'],mask:['maskClip','maskComposite','maskImage','maskMode','maskOrigin','maskPositionX','maskPositionY','maskRepeat','maskSize'],maskPosition:['maskPositionX','maskPositionY'],outline:['outlineColor','outlineStyle','outlineWidth'],overflow:['overflowX','overflowY'],padding:['paddingBottom','paddingLeft','paddingRight','paddingTop'],placeContent:['alignContent','justifyContent'],placeItems:['alignItems','justifyItems'],placeSelf:['alignSelf','justifySelf'],textDecoration:['textDecorationColor','textDecorationLine','textDecorationStyle'],textEmphasis:['textEmphasisColor','textEmphasisStyle'],transition:['transitionDelay','transitionDuration','transitionProperty','transitionTimingFunction'],wordWrap:['overflowWrap']};/**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,isCustomProperty){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}if(!isCustomProperty&&typeof value==='number'&&value!==0&&!(isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name])){return value+'px';// Presumes implicit 'px' suffix for unitless numbers
}{checkCSSPropertyStringCoercion(value,name);}return(''+value).trim();}var uppercasePattern=/([A-Z])/g;var msPattern=/^ms-/;/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */function hyphenateStyleName(name){return name.replace(uppercasePattern,'-$1').toLowerCase().replace(msPattern,'-ms-');}var warnValidStyle=function warnValidStyle(){};{// 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;var msPattern$1=/^-ms-/;var hyphenPattern=/-(.)/g;// style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnedForInfinityValue=false;var camelize=function camelize(string){return string.replace(hyphenPattern,function(_,character){return character.toUpperCase();});};var warnHyphenatedStyleName=function warnHyphenatedStyleName(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;error('Unsupported style property %s. Did you mean %s?',name,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
camelize(name.replace(msPattern$1,'ms-')));};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;error('Unsupported vendor-prefixed style property %s. Did you mean %s?',name,name.charAt(0).toUpperCase()+name.slice(1));};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;error("Style property values shouldn't contain a semicolon. "+'Try "%s: %s" instead.',name,value.replace(badStyleValueWithSemicolonPattern,''));};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value){if(warnedForNaNValue){return;}warnedForNaNValue=true;error('`NaN` is an invalid value for the `%s` css style property.',name);};var warnStyleValueIsInfinity=function warnStyleValueIsInfinity(name,value){if(warnedForInfinityValue){return;}warnedForInfinityValue=true;error('`Infinity` is an invalid value for the `%s` css style property.',name);};warnValidStyle=function warnValidStyle(name,value){if(name.indexOf('-')>-1){warnHyphenatedStyleName(name);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value);}if(typeof value==='number'){if(isNaN(value)){warnStyleValueIsNaN(name,value);}else if(!isFinite(value)){warnStyleValueIsInfinity(name,value);}}};}var warnValidStyle$1=warnValidStyle;/**
 * Operations for dealing with CSS properties.
 */ /**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */function createDangerousStringForStyles(styles){{var serialized='';var delimiter='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if(styleValue!=null){var isCustomProperty=styleName.indexOf('--')===0;serialized+=delimiter+(isCustomProperty?styleName:hyphenateStyleName(styleName))+':';serialized+=dangerousStyleValue(styleName,styleValue,isCustomProperty);delimiter=';';}}return serialized||null;}}/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */function setValueForStyles(node,styles){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var isCustomProperty=styleName.indexOf('--')===0;{if(!isCustomProperty){warnValidStyle$1(styleName,styles[styleName]);}}var styleValue=dangerousStyleValue(styleName,styles[styleName],isCustomProperty);if(styleName==='float'){styleName='cssFloat';}if(isCustomProperty){style.setProperty(styleName,styleValue);}else{style[styleName]=styleValue;}}}function isValueEmpty(value){return value==null||typeof value==='boolean'||value==='';}/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */function expandShorthandMap(styles){var expanded={};for(var key in styles){var longhands=shorthandToLonghand[key]||[key];for(var i=0;i<longhands.length;i++){expanded[longhands[i]]=key;}}return expanded;}/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */function validateShorthandPropertyCollisionInDev(styleUpdates,nextStyles){{if(!nextStyles){return;}var expandedUpdates=expandShorthandMap(styleUpdates);var expandedStyles=expandShorthandMap(nextStyles);var warnedAbout={};for(var key in expandedUpdates){var originalKey=expandedUpdates[key];var correctOriginalKey=expandedStyles[key];if(correctOriginalKey&&originalKey!==correctOriginalKey){var warningKey=originalKey+','+correctOriginalKey;if(warnedAbout[warningKey]){continue;}warnedAbout[warningKey]=true;error('%s a style property during rerender (%s) when a '+'conflicting property is set (%s) can lead to styling bugs. To '+"avoid this, don't mix shorthand and non-shorthand properties "+'for the same value; instead, replace the shorthand with '+'separate values.',isValueEmpty(styleUpdates[originalKey])?'Removing':'Updating',originalKey,correctOriginalKey);}}}}// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags={area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true// NOTE: menuitem's close tag should be omitted, but that causes problems.
};// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=assign({menuitem:true},omittedCloseTags);var HTML='__html';function assertValidProps(tag,props){if(!props){return;}// Note the use of `==` which checks for null or undefined.
if(voidElementTags[tag]){if(props.children!=null||props.dangerouslySetInnerHTML!=null){throw new Error(tag+" is a void element tag and must neither have `children` nor "+'use `dangerouslySetInnerHTML`.');}}if(props.dangerouslySetInnerHTML!=null){if(props.children!=null){throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');}if(_typeof(props.dangerouslySetInnerHTML)!=='object'||!(HTML in props.dangerouslySetInnerHTML)){throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. '+'Please visit https://reactjs.org/link/dangerously-set-inner-html '+'for more information.');}}{if(!props.suppressContentEditableWarning&&props.contentEditable&&props.children!=null){error('A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.');}}if(props.style!=null&&_typeof(props.style)!=='object'){throw new Error('The `style` prop expects a mapping from style properties to values, '+"not a string. For example, style={{marginRight: spacing + 'em'}} when "+'using JSX.');}}function isCustomComponent(tagName,props){if(tagName.indexOf('-')===-1){return typeof props.is==='string';}switch(tagName){// These are reserved SVG and MathML elements.
// We don't mind this list too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case'annotation-xml':case'color-profile':case'font-face':case'font-face-src':case'font-face-uri':case'font-face-format':case'font-face-name':case'missing-glyph':return false;default:return true;}}// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames={// HTML
accept:'accept',acceptcharset:'acceptCharset','accept-charset':'acceptCharset',accesskey:'accessKey',action:'action',allowfullscreen:'allowFullScreen',alt:'alt',as:'as',async:'async',autocapitalize:'autoCapitalize',autocomplete:'autoComplete',autocorrect:'autoCorrect',autofocus:'autoFocus',autoplay:'autoPlay',autosave:'autoSave',capture:'capture',cellpadding:'cellPadding',cellspacing:'cellSpacing',challenge:'challenge',charset:'charSet',checked:'checked',children:'children',cite:'cite',"class":'className',classid:'classID',classname:'className',cols:'cols',colspan:'colSpan',content:'content',contenteditable:'contentEditable',contextmenu:'contextMenu',controls:'controls',controlslist:'controlsList',coords:'coords',crossorigin:'crossOrigin',dangerouslysetinnerhtml:'dangerouslySetInnerHTML',data:'data',datetime:'dateTime',"default":'default',defaultchecked:'defaultChecked',defaultvalue:'defaultValue',defer:'defer',dir:'dir',disabled:'disabled',disablepictureinpicture:'disablePictureInPicture',disableremoteplayback:'disableRemotePlayback',download:'download',draggable:'draggable',enctype:'encType',enterkeyhint:'enterKeyHint',"for":'htmlFor',form:'form',formmethod:'formMethod',formaction:'formAction',formenctype:'formEncType',formnovalidate:'formNoValidate',formtarget:'formTarget',frameborder:'frameBorder',headers:'headers',height:'height',hidden:'hidden',high:'high',href:'href',hreflang:'hrefLang',htmlfor:'htmlFor',httpequiv:'httpEquiv','http-equiv':'httpEquiv',icon:'icon',id:'id',imagesizes:'imageSizes',imagesrcset:'imageSrcSet',innerhtml:'innerHTML',inputmode:'inputMode',integrity:'integrity',is:'is',itemid:'itemID',itemprop:'itemProp',itemref:'itemRef',itemscope:'itemScope',itemtype:'itemType',keyparams:'keyParams',keytype:'keyType',kind:'kind',label:'label',lang:'lang',list:'list',loop:'loop',low:'low',manifest:'manifest',marginwidth:'marginWidth',marginheight:'marginHeight',max:'max',maxlength:'maxLength',media:'media',mediagroup:'mediaGroup',method:'method',min:'min',minlength:'minLength',multiple:'multiple',muted:'muted',name:'name',nomodule:'noModule',nonce:'nonce',novalidate:'noValidate',open:'open',optimum:'optimum',pattern:'pattern',placeholder:'placeholder',playsinline:'playsInline',poster:'poster',preload:'preload',profile:'profile',radiogroup:'radioGroup',readonly:'readOnly',referrerpolicy:'referrerPolicy',rel:'rel',required:'required',reversed:'reversed',role:'role',rows:'rows',rowspan:'rowSpan',sandbox:'sandbox',scope:'scope',scoped:'scoped',scrolling:'scrolling',seamless:'seamless',selected:'selected',shape:'shape',size:'size',sizes:'sizes',span:'span',spellcheck:'spellCheck',src:'src',srcdoc:'srcDoc',srclang:'srcLang',srcset:'srcSet',start:'start',step:'step',style:'style',summary:'summary',tabindex:'tabIndex',target:'target',title:'title',type:'type',usemap:'useMap',value:'value',width:'width',wmode:'wmode',wrap:'wrap',// SVG
about:'about',accentheight:'accentHeight','accent-height':'accentHeight',accumulate:'accumulate',additive:'additive',alignmentbaseline:'alignmentBaseline','alignment-baseline':'alignmentBaseline',allowreorder:'allowReorder',alphabetic:'alphabetic',amplitude:'amplitude',arabicform:'arabicForm','arabic-form':'arabicForm',ascent:'ascent',attributename:'attributeName',attributetype:'attributeType',autoreverse:'autoReverse',azimuth:'azimuth',basefrequency:'baseFrequency',baselineshift:'baselineShift','baseline-shift':'baselineShift',baseprofile:'baseProfile',bbox:'bbox',begin:'begin',bias:'bias',by:'by',calcmode:'calcMode',capheight:'capHeight','cap-height':'capHeight',clip:'clip',clippath:'clipPath','clip-path':'clipPath',clippathunits:'clipPathUnits',cliprule:'clipRule','clip-rule':'clipRule',color:'color',colorinterpolation:'colorInterpolation','color-interpolation':'colorInterpolation',colorinterpolationfilters:'colorInterpolationFilters','color-interpolation-filters':'colorInterpolationFilters',colorprofile:'colorProfile','color-profile':'colorProfile',colorrendering:'colorRendering','color-rendering':'colorRendering',contentscripttype:'contentScriptType',contentstyletype:'contentStyleType',cursor:'cursor',cx:'cx',cy:'cy',d:'d',datatype:'datatype',decelerate:'decelerate',descent:'descent',diffuseconstant:'diffuseConstant',direction:'direction',display:'display',divisor:'divisor',dominantbaseline:'dominantBaseline','dominant-baseline':'dominantBaseline',dur:'dur',dx:'dx',dy:'dy',edgemode:'edgeMode',elevation:'elevation',enablebackground:'enableBackground','enable-background':'enableBackground',end:'end',exponent:'exponent',externalresourcesrequired:'externalResourcesRequired',fill:'fill',fillopacity:'fillOpacity','fill-opacity':'fillOpacity',fillrule:'fillRule','fill-rule':'fillRule',filter:'filter',filterres:'filterRes',filterunits:'filterUnits',floodopacity:'floodOpacity','flood-opacity':'floodOpacity',floodcolor:'floodColor','flood-color':'floodColor',focusable:'focusable',fontfamily:'fontFamily','font-family':'fontFamily',fontsize:'fontSize','font-size':'fontSize',fontsizeadjust:'fontSizeAdjust','font-size-adjust':'fontSizeAdjust',fontstretch:'fontStretch','font-stretch':'fontStretch',fontstyle:'fontStyle','font-style':'fontStyle',fontvariant:'fontVariant','font-variant':'fontVariant',fontweight:'fontWeight','font-weight':'fontWeight',format:'format',from:'from',fx:'fx',fy:'fy',g1:'g1',g2:'g2',glyphname:'glyphName','glyph-name':'glyphName',glyphorientationhorizontal:'glyphOrientationHorizontal','glyph-orientation-horizontal':'glyphOrientationHorizontal',glyphorientationvertical:'glyphOrientationVertical','glyph-orientation-vertical':'glyphOrientationVertical',glyphref:'glyphRef',gradienttransform:'gradientTransform',gradientunits:'gradientUnits',hanging:'hanging',horizadvx:'horizAdvX','horiz-adv-x':'horizAdvX',horizoriginx:'horizOriginX','horiz-origin-x':'horizOriginX',ideographic:'ideographic',imagerendering:'imageRendering','image-rendering':'imageRendering',in2:'in2',"in":'in',inlist:'inlist',intercept:'intercept',k1:'k1',k2:'k2',k3:'k3',k4:'k4',k:'k',kernelmatrix:'kernelMatrix',kernelunitlength:'kernelUnitLength',kerning:'kerning',keypoints:'keyPoints',keysplines:'keySplines',keytimes:'keyTimes',lengthadjust:'lengthAdjust',letterspacing:'letterSpacing','letter-spacing':'letterSpacing',lightingcolor:'lightingColor','lighting-color':'lightingColor',limitingconeangle:'limitingConeAngle',local:'local',markerend:'markerEnd','marker-end':'markerEnd',markerheight:'markerHeight',markermid:'markerMid','marker-mid':'markerMid',markerstart:'markerStart','marker-start':'markerStart',markerunits:'markerUnits',markerwidth:'markerWidth',mask:'mask',maskcontentunits:'maskContentUnits',maskunits:'maskUnits',mathematical:'mathematical',mode:'mode',numoctaves:'numOctaves',offset:'offset',opacity:'opacity',operator:'operator',order:'order',orient:'orient',orientation:'orientation',origin:'origin',overflow:'overflow',overlineposition:'overlinePosition','overline-position':'overlinePosition',overlinethickness:'overlineThickness','overline-thickness':'overlineThickness',paintorder:'paintOrder','paint-order':'paintOrder',panose1:'panose1','panose-1':'panose1',pathlength:'pathLength',patterncontentunits:'patternContentUnits',patterntransform:'patternTransform',patternunits:'patternUnits',pointerevents:'pointerEvents','pointer-events':'pointerEvents',points:'points',pointsatx:'pointsAtX',pointsaty:'pointsAtY',pointsatz:'pointsAtZ',prefix:'prefix',preservealpha:'preserveAlpha',preserveaspectratio:'preserveAspectRatio',primitiveunits:'primitiveUnits',property:'property',r:'r',radius:'radius',refx:'refX',refy:'refY',renderingintent:'renderingIntent','rendering-intent':'renderingIntent',repeatcount:'repeatCount',repeatdur:'repeatDur',requiredextensions:'requiredExtensions',requiredfeatures:'requiredFeatures',resource:'resource',restart:'restart',result:'result',results:'results',rotate:'rotate',rx:'rx',ry:'ry',scale:'scale',security:'security',seed:'seed',shaperendering:'shapeRendering','shape-rendering':'shapeRendering',slope:'slope',spacing:'spacing',specularconstant:'specularConstant',specularexponent:'specularExponent',speed:'speed',spreadmethod:'spreadMethod',startoffset:'startOffset',stddeviation:'stdDeviation',stemh:'stemh',stemv:'stemv',stitchtiles:'stitchTiles',stopcolor:'stopColor','stop-color':'stopColor',stopopacity:'stopOpacity','stop-opacity':'stopOpacity',strikethroughposition:'strikethroughPosition','strikethrough-position':'strikethroughPosition',strikethroughthickness:'strikethroughThickness','strikethrough-thickness':'strikethroughThickness',string:'string',stroke:'stroke',strokedasharray:'strokeDasharray','stroke-dasharray':'strokeDasharray',strokedashoffset:'strokeDashoffset','stroke-dashoffset':'strokeDashoffset',strokelinecap:'strokeLinecap','stroke-linecap':'strokeLinecap',strokelinejoin:'strokeLinejoin','stroke-linejoin':'strokeLinejoin',strokemiterlimit:'strokeMiterlimit','stroke-miterlimit':'strokeMiterlimit',strokewidth:'strokeWidth','stroke-width':'strokeWidth',strokeopacity:'strokeOpacity','stroke-opacity':'strokeOpacity',suppresscontenteditablewarning:'suppressContentEditableWarning',suppresshydrationwarning:'suppressHydrationWarning',surfacescale:'surfaceScale',systemlanguage:'systemLanguage',tablevalues:'tableValues',targetx:'targetX',targety:'targetY',textanchor:'textAnchor','text-anchor':'textAnchor',textdecoration:'textDecoration','text-decoration':'textDecoration',textlength:'textLength',textrendering:'textRendering','text-rendering':'textRendering',to:'to',transform:'transform',"typeof":'typeof',u1:'u1',u2:'u2',underlineposition:'underlinePosition','underline-position':'underlinePosition',underlinethickness:'underlineThickness','underline-thickness':'underlineThickness',unicode:'unicode',unicodebidi:'unicodeBidi','unicode-bidi':'unicodeBidi',unicoderange:'unicodeRange','unicode-range':'unicodeRange',unitsperem:'unitsPerEm','units-per-em':'unitsPerEm',unselectable:'unselectable',valphabetic:'vAlphabetic','v-alphabetic':'vAlphabetic',values:'values',vectoreffect:'vectorEffect','vector-effect':'vectorEffect',version:'version',vertadvy:'vertAdvY','vert-adv-y':'vertAdvY',vertoriginx:'vertOriginX','vert-origin-x':'vertOriginX',vertoriginy:'vertOriginY','vert-origin-y':'vertOriginY',vhanging:'vHanging','v-hanging':'vHanging',videographic:'vIdeographic','v-ideographic':'vIdeographic',viewbox:'viewBox',viewtarget:'viewTarget',visibility:'visibility',vmathematical:'vMathematical','v-mathematical':'vMathematical',vocab:'vocab',widths:'widths',wordspacing:'wordSpacing','word-spacing':'wordSpacing',writingmode:'writingMode','writing-mode':'writingMode',x1:'x1',x2:'x2',x:'x',xchannelselector:'xChannelSelector',xheight:'xHeight','x-height':'xHeight',xlinkactuate:'xlinkActuate','xlink:actuate':'xlinkActuate',xlinkarcrole:'xlinkArcrole','xlink:arcrole':'xlinkArcrole',xlinkhref:'xlinkHref','xlink:href':'xlinkHref',xlinkrole:'xlinkRole','xlink:role':'xlinkRole',xlinkshow:'xlinkShow','xlink:show':'xlinkShow',xlinktitle:'xlinkTitle','xlink:title':'xlinkTitle',xlinktype:'xlinkType','xlink:type':'xlinkType',xmlbase:'xmlBase','xml:base':'xmlBase',xmllang:'xmlLang','xml:lang':'xmlLang',xmlns:'xmlns','xml:space':'xmlSpace',xmlnsxlink:'xmlnsXlink','xmlns:xlink':'xmlnsXlink',xmlspace:'xmlSpace',y1:'y1',y2:'y2',y:'y',ychannelselector:'yChannelSelector',z:'z',zoomandpan:'zoomAndPan'};var ariaProperties={'aria-current':0,// state
'aria-description':0,'aria-details':0,'aria-disabled':0,// state
'aria-hidden':0,// state
'aria-invalid':0,// state
'aria-keyshortcuts':0,'aria-label':0,'aria-roledescription':0,// Widget Attributes
'aria-autocomplete':0,'aria-checked':0,'aria-expanded':0,'aria-haspopup':0,'aria-level':0,'aria-modal':0,'aria-multiline':0,'aria-multiselectable':0,'aria-orientation':0,'aria-placeholder':0,'aria-pressed':0,'aria-readonly':0,'aria-required':0,'aria-selected':0,'aria-sort':0,'aria-valuemax':0,'aria-valuemin':0,'aria-valuenow':0,'aria-valuetext':0,// Live Region Attributes
'aria-atomic':0,'aria-busy':0,'aria-live':0,'aria-relevant':0,// Drag-and-Drop Attributes
'aria-dropeffect':0,'aria-grabbed':0,// Relationship Attributes
'aria-activedescendant':0,'aria-colcount':0,'aria-colindex':0,'aria-colspan':0,'aria-controls':0,'aria-describedby':0,'aria-errormessage':0,'aria-flowto':0,'aria-labelledby':0,'aria-owns':0,'aria-posinset':0,'aria-rowcount':0,'aria-rowindex':0,'aria-rowspan':0,'aria-setsize':0};var warnedProperties={};var rARIA=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');function validateProperty(tagName,name){{if(hasOwnProperty.call(warnedProperties,name)&&warnedProperties[name]){return true;}if(rARIACamel.test(name)){var ariaName='aria-'+name.slice(4).toLowerCase();var correctName=ariaProperties.hasOwnProperty(ariaName)?ariaName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(correctName==null){error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',name);warnedProperties[name]=true;return true;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==correctName){error('Invalid ARIA attribute `%s`. Did you mean `%s`?',name,correctName);warnedProperties[name]=true;return true;}}if(rARIA.test(name)){var lowerCasedName=name.toLowerCase();var standardName=ariaProperties.hasOwnProperty(lowerCasedName)?lowerCasedName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(standardName==null){warnedProperties[name]=true;return false;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==standardName){error('Unknown ARIA attribute `%s`. Did you mean `%s`?',name,standardName);warnedProperties[name]=true;return true;}}}return true;}function warnInvalidARIAProps(type,props){{var invalidProps=[];for(var key in props){var isValid=validateProperty(type,key);if(!isValid){invalidProps.push(key);}}var unknownPropString=invalidProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(invalidProps.length===1){error('Invalid aria prop %s on <%s> tag. '+'For details, see https://reactjs.org/link/invalid-aria-props',unknownPropString,type);}else if(invalidProps.length>1){error('Invalid aria props %s on <%s> tag. '+'For details, see https://reactjs.org/link/invalid-aria-props',unknownPropString,type);}}}function validateProperties(type,props){if(isCustomComponent(type,props)){return;}warnInvalidARIAProps(type,props);}var didWarnValueNull=false;function validateProperties$1(type,props){{if(type!=='input'&&type!=='textarea'&&type!=='select'){return;}if(props!=null&&props.value===null&&!didWarnValueNull){didWarnValueNull=true;if(type==='select'&&props.multiple){error('`value` prop on `%s` should not be null. '+'Consider using an empty array when `multiple` is set to `true` '+'to clear the component or `undefined` for uncontrolled components.',type);}else{error('`value` prop on `%s` should not be null. '+'Consider using an empty string to clear the component or `undefined` '+'for uncontrolled components.',type);}}}}var validateProperty$1=function validateProperty$1(){};{var warnedProperties$1={};var EVENT_NAME_REGEX=/^on./;var INVALID_EVENT_NAME_REGEX=/^on[^A-Z]/;var rARIA$1=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel$1=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');validateProperty$1=function validateProperty$1(tagName,name,value,eventRegistry){if(hasOwnProperty.call(warnedProperties$1,name)&&warnedProperties$1[name]){return true;}var lowerCasedName=name.toLowerCase();if(lowerCasedName==='onfocusin'||lowerCasedName==='onfocusout'){error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.');warnedProperties$1[name]=true;return true;}// We can't rely on the event system being injected on the server.
if(eventRegistry!=null){var registrationNameDependencies=eventRegistry.registrationNameDependencies,possibleRegistrationNames=eventRegistry.possibleRegistrationNames;if(registrationNameDependencies.hasOwnProperty(name)){return true;}var registrationName=possibleRegistrationNames.hasOwnProperty(lowerCasedName)?possibleRegistrationNames[lowerCasedName]:null;if(registrationName!=null){error('Invalid event handler property `%s`. Did you mean `%s`?',name,registrationName);warnedProperties$1[name]=true;return true;}if(EVENT_NAME_REGEX.test(name)){error('Unknown event handler property `%s`. It will be ignored.',name);warnedProperties$1[name]=true;return true;}}else if(EVENT_NAME_REGEX.test(name)){// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
if(INVALID_EVENT_NAME_REGEX.test(name)){error('Invalid event handler property `%s`. '+'React events use the camelCase naming convention, for example `onClick`.',name);}warnedProperties$1[name]=true;return true;}// Let the ARIA attribute hook validate ARIA attributes
if(rARIA$1.test(name)||rARIACamel$1.test(name)){return true;}if(lowerCasedName==='innerhtml'){error('Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='aria'){error('The `aria` attribute is reserved for future use in React. '+'Pass individual `aria-` attributes instead.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='is'&&value!==null&&value!==undefined&&typeof value!=='string'){error('Received a `%s` for a string attribute `is`. If this is expected, cast '+'the value to a string.',_typeof(value));warnedProperties$1[name]=true;return true;}if(typeof value==='number'&&isNaN(value)){error('Received NaN for the `%s` attribute. If this is expected, cast '+'the value to a string.',name);warnedProperties$1[name]=true;return true;}var propertyInfo=getPropertyInfo(name);var isReserved=propertyInfo!==null&&propertyInfo.type===RESERVED;// Known attributes should match the casing specified in the property config.
if(possibleStandardNames.hasOwnProperty(lowerCasedName)){var standardName=possibleStandardNames[lowerCasedName];if(standardName!==name){error('Invalid DOM property `%s`. Did you mean `%s`?',name,standardName);warnedProperties$1[name]=true;return true;}}else if(!isReserved&&name!==lowerCasedName){// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
error('React does not recognize the `%s` prop on a DOM element. If you '+'intentionally want it to appear in the DOM as a custom '+'attribute, spell it as lowercase `%s` instead. '+'If you accidentally passed it from a parent component, remove '+'it from the DOM element.',name,lowerCasedName);warnedProperties$1[name]=true;return true;}if(typeof value==='boolean'&&shouldRemoveAttributeWithWarning(name,value,propertyInfo,false)){if(value){error('Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.',value,name,name,value,name);}else{error('Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.',value,name,name,value,name,name,name);}warnedProperties$1[name]=true;return true;}// Now that we've validated casing, do not validate
// data types for reserved props
if(isReserved){return true;}// Warn when a known attribute is a bad type
if(shouldRemoveAttributeWithWarning(name,value,propertyInfo,false)){warnedProperties$1[name]=true;return false;}// Warn when passing the strings 'false' or 'true' into a boolean prop
if((value==='false'||value==='true')&&propertyInfo!==null&&propertyInfo.type===BOOLEAN){error('Received the string `%s` for the boolean attribute `%s`. '+'%s '+'Did you mean %s={%s}?',value,name,value==='false'?'The browser will interpret it as a truthy value.':'Although this works, it will not work as expected if you pass the string "false".',name,value);warnedProperties$1[name]=true;return true;}return true;};}var warnUnknownProperties=function warnUnknownProperties(type,props,eventRegistry){{var unknownProps=[];for(var key in props){var isValid=validateProperty$1(type,key,props[key],eventRegistry);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(unknownProps.length===1){error('Invalid value for prop %s on <%s> tag. Either remove it from the element, '+'or pass a string or number value to keep it in the DOM. '+'For details, see https://reactjs.org/link/attribute-behavior ',unknownPropString,type);}else if(unknownProps.length>1){error('Invalid values for props %s on <%s> tag. Either remove them from the element, '+'or pass a string or number value to keep them in the DOM. '+'For details, see https://reactjs.org/link/attribute-behavior ',unknownPropString,type);}}};function validateProperties$2(type,props,eventRegistry){if(isCustomComponent(type,props)){return;}warnUnknownProperties(type,props,eventRegistry);}var IS_EVENT_HANDLE_NON_MANAGED_NODE=1;var IS_NON_DELEGATED=1<<1;var IS_CAPTURE_PHASE=1<<2;// set to LEGACY_FB_SUPPORT. LEGACY_FB_SUPPORT only gets set when
// we call willDeferLaterForLegacyFBSupport, thus not bailing out
// will result in endless cycles like an infinite loop.
// We also don't want to defer during event replaying.
var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS=IS_EVENT_HANDLE_NON_MANAGED_NODE|IS_NON_DELEGATED|IS_CAPTURE_PHASE;// This exists to avoid circular dependency between ReactDOMEventReplaying
// and DOMPluginEventSystem.
var currentReplayingEvent=null;function setReplayingEvent(event){{if(currentReplayingEvent!==null){error('Expected currently replaying event to be null. This error '+'is likely caused by a bug in React. Please file an issue.');}}currentReplayingEvent=event;}function resetReplayingEvent(){{if(currentReplayingEvent===null){error('Expected currently replaying event to not be null. This error '+'is likely caused by a bug in React. Please file an issue.');}}currentReplayingEvent=null;}function isReplayingEvent(event){return event===currentReplayingEvent;}/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===TEXT_NODE?target.parentNode:target;}var restoreImpl=null;var restoreTarget=null;var restoreQueue=null;function restoreStateOfTarget(target){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var internalInstance=getInstanceFromNode(target);if(!internalInstance){// Unmounted
return;}if(typeof restoreImpl!=='function'){throw new Error('setRestoreImplementation() needs to be called to handle a target for controlled '+'events. This error is likely caused by a bug in React. Please file an issue.');}var stateNode=internalInstance.stateNode;// Guard against Fiber being unmounted.
if(stateNode){var _props=getFiberCurrentPropsFromNode(stateNode);restoreImpl(internalInstance.stateNode,internalInstance.type,_props);}}function setRestoreImplementation(impl){restoreImpl=impl;}function enqueueStateRestore(target){if(restoreTarget){if(restoreQueue){restoreQueue.push(target);}else{restoreQueue=[target];}}else{restoreTarget=target;}}function needsStateRestore(){return restoreTarget!==null||restoreQueue!==null;}function restoreStateIfNeeded(){if(!restoreTarget){return;}var target=restoreTarget;var queuedTargets=restoreQueue;restoreTarget=null;restoreQueue=null;restoreStateOfTarget(target);if(queuedTargets){for(var i=0;i<queuedTargets.length;i++){restoreStateOfTarget(queuedTargets[i]);}}}// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var batchedUpdatesImpl=function batchedUpdatesImpl(fn,bookkeeping){return fn(bookkeeping);};var flushSyncImpl=function flushSyncImpl(){};var isInsideEventHandler=false;function finishEventHandler(){// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
var controlledComponentsHavePendingUpdates=needsStateRestore();if(controlledComponentsHavePendingUpdates){// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
// TODO: Restore state in the microtask, after the discrete updates flush,
// instead of early flushing them here.
flushSyncImpl();restoreStateIfNeeded();}}function batchedUpdates(fn,a,b){if(isInsideEventHandler){// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return fn(a,b);}isInsideEventHandler=true;try{return batchedUpdatesImpl(fn,a,b);}finally{isInsideEventHandler=false;finishEventHandler();}}// TODO: Replace with flushSync
function setBatchingImplementation(_batchedUpdatesImpl,_discreteUpdatesImpl,_flushSyncImpl){batchedUpdatesImpl=_batchedUpdatesImpl;flushSyncImpl=_flushSyncImpl;}function isInteractive(tag){return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';}function shouldPreventMouseEvent(name,type,props){switch(name){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':case'onMouseEnter':return!!(props.disabled&&isInteractive(type));default:return false;}}/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */function getListener(inst,registrationName){var stateNode=inst.stateNode;if(stateNode===null){// Work in progress (ex: onload events in incremental mode).
return null;}var props=getFiberCurrentPropsFromNode(stateNode);if(props===null){// Work in progress.
return null;}var listener=props[registrationName];if(shouldPreventMouseEvent(registrationName,inst.type,props)){return null;}if(listener&&typeof listener!=='function'){throw new Error("Expected `"+registrationName+"` listener to be a function, instead got a value of `"+_typeof(listener)+"` type.");}return listener;}var passiveBrowserEventsSupported=false;// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if(canUseDOM){try{var options={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(options,'passive',{get:function get(){passiveBrowserEventsSupported=true;}});window.addEventListener('test',options,options);window.removeEventListener('test',options,options);}catch(e){passiveBrowserEventsSupported=false;}}function invokeGuardedCallbackProd(name,func,context,a,b,c,d,e,f){var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){this.onError(error);}}var invokeGuardedCallbackImpl=invokeGuardedCallbackProd;{// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');invokeGuardedCallbackImpl=function invokeGuardedCallbackDev(name,func,context,a,b,c,d,e,f){// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebook/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if(typeof document==='undefined'||document===null){throw new Error('The `document` global was defined when React was initialized, but is not '+'defined anymore. This can happen in a test environment if a component '+'schedules an update from an asynchronous callback, but the test has already '+'finished running. To solve this, you can either unmount the component at '+'the end of your test (and ensure that any asynchronous operations get '+'canceled in `componentWillUnmount`), or you can change the test itself '+'to be asynchronous.');}var evt=document.createEvent('Event');var didCall=false;// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var didError=true;// Keeps track of the value of window.event so that we can reset it
// during the callback to let user code access window.event in the
// browsers that support it.
var windowEvent=window.event;// Keeps track of the descriptor of window.event to restore it after event
// dispatching: https://github.com/facebook/react/issues/13688
var windowEventDescriptor=Object.getOwnPropertyDescriptor(window,'event');function restoreAfterDispatch(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
fakeNode.removeEventListener(evtType,callCallback,false);// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
if(typeof window.event!=='undefined'&&window.hasOwnProperty('event')){window.event=windowEvent;}}// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){didCall=true;restoreAfterDispatch();func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
var error;// Use this to track whether the error event is ever called.
var didSetError=false;var isCrossOriginError=false;function handleWindowError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}if(event.defaultPrevented){// Some other error handler has prevented default.
// Browsers silence the error report if this happens.
// We'll remember this to later decide whether to log it or not.
if(error!=null&&_typeof(error)==='object'){try{error._suppressLogging=true;}catch(inner){// Ignore.
}}}}// Create a fake event type.
var evtType="react-"+(name?name:'invokeguardedcallback');// Attach our event handlers
window.addEventListener('error',handleWindowError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(windowEventDescriptor){Object.defineProperty(window,'event',windowEventDescriptor);}if(didCall&&didError){if(!didSetError){// The callback errored, but the error event never fired.
// eslint-disable-next-line react-internal/prod-error-codes
error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){// eslint-disable-next-line react-internal/prod-error-codes
error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error object in development. '+'See https://reactjs.org/link/crossorigin-error for more information.');}this.onError(error);}// Remove our event listeners
window.removeEventListener('error',handleWindowError);if(!didCall){// Something went really wrong, and our event was not dispatched.
// https://github.com/facebook/react/issues/16734
// https://github.com/facebook/react/issues/16585
// Fall back to the production implementation.
restoreAfterDispatch();return invokeGuardedCallbackProd.apply(this,arguments);}};}}var invokeGuardedCallbackImpl$1=invokeGuardedCallbackImpl;var hasError=false;var caughtError=null;// Used by event system to capture/rethrow the first error.
var hasRethrowError=false;var rethrowError=null;var reporter={onError:function onError(error){hasError=true;caughtError=error;}};/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){hasError=false;caughtError=null;invokeGuardedCallbackImpl$1.apply(reporter,arguments);}/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallbackAndCatchFirstError(name,func,context,a,b,c,d,e,f){invokeGuardedCallback.apply(this,arguments);if(hasError){var error=clearCaughtError();if(!hasRethrowError){hasRethrowError=true;rethrowError=error;}}}/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */function rethrowCaughtError(){if(hasRethrowError){var error=rethrowError;hasRethrowError=false;rethrowError=null;throw error;}}function hasCaughtError(){return hasError;}function clearCaughtError(){if(hasError){var error=caughtError;hasError=false;caughtError=null;return error;}else{throw new Error('clearCaughtError was called but no error was captured. This error '+'is likely caused by a bug in React. Please file an issue.');}}/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */function get(key){return key._reactInternals;}function has(key){return key._reactInternals!==undefined;}function set(key,value){key._reactInternals=value;}// Don't change these two values. They're used by React Dev Tools.
var NoFlags=/*                      */0;var PerformedWork=/*                */1;// You can change the rest (and add more).
var Placement=/*                    */2;var Update=/*                       */4;var ChildDeletion=/*                */16;var ContentReset=/*                 */32;var Callback=/*                     */64;var DidCapture=/*                   */128;var ForceClientRender=/*            */256;var Ref=/*                          */512;var Snapshot=/*                     */1024;var Passive=/*                      */2048;var Hydrating=/*                    */4096;var Visibility=/*                   */8192;var StoreConsistency=/*             */16384;var LifecycleEffectMask=Passive|Update|Callback|Ref|Snapshot|StoreConsistency;// Union of all commit flags (flags with the lifetime of a particular commit)
var HostEffectMask=/*               */32767;// These are not really side effects, but we still reuse this field.
var Incomplete=/*                   */32768;var ShouldCapture=/*                */65536;var ForceUpdateForLegacySuspense=/* */131072;var Forked=/*                       */1048576;// Static tags describe aspects of a fiber that are not specific to a render,
// e.g. a fiber uses a passive effect (even if there are no updates on this particular render).
// This enables us to defer more work in the unmount case,
// since we can defer traversing the tree during layout to look for Passive effects,
// and instead rely on the static flag as a signal that there may be cleanup work.
var RefStatic=/*                    */2097152;var LayoutStatic=/*                 */4194304;var PassiveStatic=/*                */8388608;// These flags allow us to traverse to fibers that have effects on mount
// without traversing the entire tree after every commit for
// double invoking
var MountLayoutDev=/*               */16777216;var MountPassiveDev=/*              */33554432;// Groups of flags that are used in the commit phase to skip over trees that
// don't contain effects, by checking subtreeFlags.
var BeforeMutationMask=// TODO: Remove Update flag from before mutation phase by re-landing Visibility
// flag logic (see #20043)
Update|Snapshot|0;var MutationMask=Placement|Update|ChildDeletion|ContentReset|Ref|Hydrating|Visibility;var LayoutMask=Update|Callback|Ref|Visibility;// TODO: Split into PassiveMountMask and PassiveUnmountMask
var PassiveMask=Passive|ChildDeletion;// Union of tags that don't get reset on clones.
// This allows certain concepts to persist without recalculating them,
// e.g. whether a subtree contains passive effects or portals.
var StaticMask=LayoutStatic|PassiveStatic|RefStatic;var ReactCurrentOwner=ReactSharedInternals.ReactCurrentOwner;function getNearestMountedFiber(fiber){var node=fiber;var nearestMounted=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var nextNode=node;do{node=nextNode;if((node.flags&(Placement|Hydrating))!==NoFlags){// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
nearestMounted=node["return"];}nextNode=node["return"];}while(nextNode);}else{while(node["return"]){node=node["return"];}}if(node.tag===HostRoot){// TODO: Check if this was a nested HostRoot when used with
// renderContainerIntoSubtree.
return nearestMounted;}// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
return null;}function getSuspenseInstanceFromFiber(fiber){if(fiber.tag===SuspenseComponent){var suspenseState=fiber.memoizedState;if(suspenseState===null){var current=fiber.alternate;if(current!==null){suspenseState=current.memoizedState;}}if(suspenseState!==null){return suspenseState.dehydrated;}}return null;}function getContainerFromFiber(fiber){return fiber.tag===HostRoot?fiber.stateNode.containerInfo:null;}function isFiberMounted(fiber){return getNearestMountedFiber(fiber)===fiber;}function isMounted(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;if(!instance._warnedAboutRefsInRender){error('%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentNameFromFiber(ownerFiber)||'A component');}instance._warnedAboutRefsInRender=true;}}var fiber=get(component);if(!fiber){return false;}return getNearestMountedFiber(fiber)===fiber;}function assertIsMounted(fiber){if(getNearestMountedFiber(fiber)!==fiber){throw new Error('Unable to find node on an unmounted component.');}}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
var nearestMounted=getNearestMountedFiber(fiber);if(nearestMounted===null){throw new Error('Unable to find node on an unmounted component.');}if(nearestMounted!==fiber){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var a=fiber;var b=alternate;while(true){var parentA=a["return"];if(parentA===null){// We're at the root.
break;}var parentB=parentA.alternate;if(parentB===null){// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var nextParent=parentA["return"];if(nextParent!==null){a=b=nextParent;continue;}// If there's no parent, we're at the root.
break;}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw new Error('Unable to find node on an unmounted component.');}if(a["return"]!==b["return"]){// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
a=parentA;b=parentB;}else{// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}if(!didFindChild){throw new Error('Child was not found in either parent set. This indicates a bug '+'in React related to the return pointer. Please file an issue.');}}}if(a.alternate!==b){throw new Error("Return fibers should always be each others' alternates. "+'This error is likely caused by a bug in React. Please file an issue.');}}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(a.tag!==HostRoot){throw new Error('Unable to find node on an unmounted component.');}if(a.stateNode.current===a){// We've determined that A is the current branch.
return fiber;}// Otherwise B has to be current branch.
return alternate;}function findCurrentHostFiber(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);return currentParent!==null?findCurrentHostFiberImpl(currentParent):null;}function findCurrentHostFiberImpl(node){// Next we'll drill down this component to find the first HostComponent/Text.
if(node.tag===HostComponent||node.tag===HostText){return node;}var child=node.child;while(child!==null){var match=findCurrentHostFiberImpl(child);if(match!==null){return match;}child=child.sibling;}return null;}function findCurrentHostFiberWithNoPortals(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);return currentParent!==null?findCurrentHostFiberWithNoPortalsImpl(currentParent):null;}function findCurrentHostFiberWithNoPortalsImpl(node){// Next we'll drill down this component to find the first HostComponent/Text.
if(node.tag===HostComponent||node.tag===HostText){return node;}var child=node.child;while(child!==null){if(child.tag!==HostPortal){var match=findCurrentHostFiberWithNoPortalsImpl(child);if(match!==null){return match;}}child=child.sibling;}return null;}// This module only exists as an ESM wrapper around the external CommonJS
var scheduleCallback=Scheduler.unstable_scheduleCallback;var cancelCallback=Scheduler.unstable_cancelCallback;var shouldYield=Scheduler.unstable_shouldYield;var requestPaint=Scheduler.unstable_requestPaint;var now=Scheduler.unstable_now;var getCurrentPriorityLevel=Scheduler.unstable_getCurrentPriorityLevel;var ImmediatePriority=Scheduler.unstable_ImmediatePriority;var UserBlockingPriority=Scheduler.unstable_UserBlockingPriority;var NormalPriority=Scheduler.unstable_NormalPriority;var LowPriority=Scheduler.unstable_LowPriority;var IdlePriority=Scheduler.unstable_IdlePriority;// this doesn't actually exist on the scheduler, but it *does*
// on scheduler/unstable_mock, which we'll need for internal testing
var unstable_yieldValue=Scheduler.unstable_yieldValue;var unstable_setDisableYieldValue=Scheduler.unstable_setDisableYieldValue;var rendererID=null;var injectedHook=null;var injectedProfilingHooks=null;var hasLoggedError=false;var isDevToolsPresent=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined';function injectInternals(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(hook.isDisabled){// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return true;}if(!hook.supportsFiber){{error('The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://reactjs.org/link/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
return true;}try{if(enableSchedulingProfiler){// Conditionally inject these hooks only if Timeline profiler is supported by this build.
// This gives DevTools a way to feature detect that isn't tied to version number
// (since profiling and timeline are controlled by different feature flags).
internals=assign({},internals,{getLaneLabelMap:getLaneLabelMap,injectProfilingHooks:injectProfilingHooks});}rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
injectedHook=hook;}catch(err){// Catch all errors because it is unsafe to throw during initialization.
{error('React instrumentation encountered an error: %s.',err);}}if(hook.checkDCE){// This is the real DevTools.
return true;}else{// This is likely a hook installed by Fast Refresh runtime.
return false;}}function onScheduleRoot(root,children){{if(injectedHook&&typeof injectedHook.onScheduleFiberRoot==='function'){try{injectedHook.onScheduleFiberRoot(rendererID,root,children);}catch(err){if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitRoot(root,eventPriority){if(injectedHook&&typeof injectedHook.onCommitFiberRoot==='function'){try{var didError=(root.current.flags&DidCapture)===DidCapture;if(enableProfilerTimer){var schedulerPriority;switch(eventPriority){case DiscreteEventPriority:schedulerPriority=ImmediatePriority;break;case ContinuousEventPriority:schedulerPriority=UserBlockingPriority;break;case DefaultEventPriority:schedulerPriority=NormalPriority;break;case IdleEventPriority:schedulerPriority=IdlePriority;break;default:schedulerPriority=NormalPriority;break;}injectedHook.onCommitFiberRoot(rendererID,root,schedulerPriority,didError);}else{injectedHook.onCommitFiberRoot(rendererID,root,undefined,didError);}}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onPostCommitRoot(root){if(injectedHook&&typeof injectedHook.onPostCommitFiberRoot==='function'){try{injectedHook.onPostCommitFiberRoot(rendererID,root);}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitUnmount(fiber){if(injectedHook&&typeof injectedHook.onCommitFiberUnmount==='function'){try{injectedHook.onCommitFiberUnmount(rendererID,fiber);}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function setIsStrictModeForDevtools(newIsStrictMode){{if(typeof unstable_yieldValue==='function'){// We're in a test because Scheduler.unstable_yieldValue only exists
// in SchedulerMock. To reduce the noise in strict mode tests,
// suppress warnings and disable scheduler yielding during the double render
unstable_setDisableYieldValue(newIsStrictMode);setSuppressWarning(newIsStrictMode);}if(injectedHook&&typeof injectedHook.setStrictMode==='function'){try{injectedHook.setStrictMode(rendererID,newIsStrictMode);}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}}// Profiler API hooks
function injectProfilingHooks(profilingHooks){injectedProfilingHooks=profilingHooks;}function getLaneLabelMap(){{var map=new Map();var lane=1;for(var index=0;index<TotalLanes;index++){var label=getLabelForLane(lane);map.set(lane,label);lane*=2;}return map;}}function markCommitStarted(lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markCommitStarted==='function'){injectedProfilingHooks.markCommitStarted(lanes);}}}function markCommitStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markCommitStopped==='function'){injectedProfilingHooks.markCommitStopped();}}}function markComponentRenderStarted(fiber){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentRenderStarted==='function'){injectedProfilingHooks.markComponentRenderStarted(fiber);}}}function markComponentRenderStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentRenderStopped==='function'){injectedProfilingHooks.markComponentRenderStopped();}}}function markComponentPassiveEffectMountStarted(fiber){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted==='function'){injectedProfilingHooks.markComponentPassiveEffectMountStarted(fiber);}}}function markComponentPassiveEffectMountStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped==='function'){injectedProfilingHooks.markComponentPassiveEffectMountStopped();}}}function markComponentPassiveEffectUnmountStarted(fiber){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted==='function'){injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(fiber);}}}function markComponentPassiveEffectUnmountStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped==='function'){injectedProfilingHooks.markComponentPassiveEffectUnmountStopped();}}}function markComponentLayoutEffectMountStarted(fiber){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted==='function'){injectedProfilingHooks.markComponentLayoutEffectMountStarted(fiber);}}}function markComponentLayoutEffectMountStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped==='function'){injectedProfilingHooks.markComponentLayoutEffectMountStopped();}}}function markComponentLayoutEffectUnmountStarted(fiber){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted==='function'){injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(fiber);}}}function markComponentLayoutEffectUnmountStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped==='function'){injectedProfilingHooks.markComponentLayoutEffectUnmountStopped();}}}function markComponentErrored(fiber,thrownValue,lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentErrored==='function'){injectedProfilingHooks.markComponentErrored(fiber,thrownValue,lanes);}}}function markComponentSuspended(fiber,wakeable,lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markComponentSuspended==='function'){injectedProfilingHooks.markComponentSuspended(fiber,wakeable,lanes);}}}function markLayoutEffectsStarted(lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markLayoutEffectsStarted==='function'){injectedProfilingHooks.markLayoutEffectsStarted(lanes);}}}function markLayoutEffectsStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markLayoutEffectsStopped==='function'){injectedProfilingHooks.markLayoutEffectsStopped();}}}function markPassiveEffectsStarted(lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markPassiveEffectsStarted==='function'){injectedProfilingHooks.markPassiveEffectsStarted(lanes);}}}function markPassiveEffectsStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markPassiveEffectsStopped==='function'){injectedProfilingHooks.markPassiveEffectsStopped();}}}function markRenderStarted(lanes){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markRenderStarted==='function'){injectedProfilingHooks.markRenderStarted(lanes);}}}function markRenderYielded(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markRenderYielded==='function'){injectedProfilingHooks.markRenderYielded();}}}function markRenderStopped(){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markRenderStopped==='function'){injectedProfilingHooks.markRenderStopped();}}}function markRenderScheduled(lane){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markRenderScheduled==='function'){injectedProfilingHooks.markRenderScheduled(lane);}}}function markForceUpdateScheduled(fiber,lane){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markForceUpdateScheduled==='function'){injectedProfilingHooks.markForceUpdateScheduled(fiber,lane);}}}function markStateUpdateScheduled(fiber,lane){{if(injectedProfilingHooks!==null&&typeof injectedProfilingHooks.markStateUpdateScheduled==='function'){injectedProfilingHooks.markStateUpdateScheduled(fiber,lane);}}}var NoMode=/*                         */0;// TODO: Remove ConcurrentMode by reading from the root tag instead
var ConcurrentMode=/*                 */1;var ProfileMode=/*                    */2;var StrictLegacyMode=/*               */8;var StrictEffectsMode=/*              */16;// TODO: This is pretty well supported by browsers. Maybe we can drop it.
var clz32=Math.clz32?Math.clz32:clz32Fallback;// Count leading zeros.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
var log=Math.log;var LN2=Math.LN2;function clz32Fallback(x){var asUint=x>>>0;if(asUint===0){return 32;}return 31-(log(asUint)/LN2|0)|0;}// If those values are changed that package should be rebuilt and redeployed.
var TotalLanes=31;var NoLanes=/*                        */0;var NoLane=/*                          */0;var SyncLane=/*                        */1;var InputContinuousHydrationLane=/*    */2;var InputContinuousLane=/*             */4;var DefaultHydrationLane=/*            */8;var DefaultLane=/*                     */16;var TransitionHydrationLane=/*                */32;var TransitionLanes=/*                       */4194240;var TransitionLane1=/*                        */64;var TransitionLane2=/*                        */128;var TransitionLane3=/*                        */256;var TransitionLane4=/*                        */512;var TransitionLane5=/*                        */1024;var TransitionLane6=/*                        */2048;var TransitionLane7=/*                        */4096;var TransitionLane8=/*                        */8192;var TransitionLane9=/*                        */16384;var TransitionLane10=/*                       */32768;var TransitionLane11=/*                       */65536;var TransitionLane12=/*                       */131072;var TransitionLane13=/*                       */262144;var TransitionLane14=/*                       */524288;var TransitionLane15=/*                       */1048576;var TransitionLane16=/*                       */2097152;var RetryLanes=/*                            */130023424;var RetryLane1=/*                             */4194304;var RetryLane2=/*                             */8388608;var RetryLane3=/*                             */16777216;var RetryLane4=/*                             */33554432;var RetryLane5=/*                             */67108864;var SomeRetryLane=RetryLane1;var SelectiveHydrationLane=/*          */134217728;var NonIdleLanes=/*                          */268435455;var IdleHydrationLane=/*               */268435456;var IdleLane=/*                        */536870912;var OffscreenLane=/*                   */1073741824;// This function is used for the experimental timeline (react-devtools-timeline)
// It should be kept in sync with the Lanes values above.
function getLabelForLane(lane){{if(lane&SyncLane){return'Sync';}if(lane&InputContinuousHydrationLane){return'InputContinuousHydration';}if(lane&InputContinuousLane){return'InputContinuous';}if(lane&DefaultHydrationLane){return'DefaultHydration';}if(lane&DefaultLane){return'Default';}if(lane&TransitionHydrationLane){return'TransitionHydration';}if(lane&TransitionLanes){return'Transition';}if(lane&RetryLanes){return'Retry';}if(lane&SelectiveHydrationLane){return'SelectiveHydration';}if(lane&IdleHydrationLane){return'IdleHydration';}if(lane&IdleLane){return'Idle';}if(lane&OffscreenLane){return'Offscreen';}}}var NoTimestamp=-1;var nextTransitionLane=TransitionLane1;var nextRetryLane=RetryLane1;function getHighestPriorityLanes(lanes){switch(getHighestPriorityLane(lanes)){case SyncLane:return SyncLane;case InputContinuousHydrationLane:return InputContinuousHydrationLane;case InputContinuousLane:return InputContinuousLane;case DefaultHydrationLane:return DefaultHydrationLane;case DefaultLane:return DefaultLane;case TransitionHydrationLane:return TransitionHydrationLane;case TransitionLane1:case TransitionLane2:case TransitionLane3:case TransitionLane4:case TransitionLane5:case TransitionLane6:case TransitionLane7:case TransitionLane8:case TransitionLane9:case TransitionLane10:case TransitionLane11:case TransitionLane12:case TransitionLane13:case TransitionLane14:case TransitionLane15:case TransitionLane16:return lanes&TransitionLanes;case RetryLane1:case RetryLane2:case RetryLane3:case RetryLane4:case RetryLane5:return lanes&RetryLanes;case SelectiveHydrationLane:return SelectiveHydrationLane;case IdleHydrationLane:return IdleHydrationLane;case IdleLane:return IdleLane;case OffscreenLane:return OffscreenLane;default:{error('Should have found matching lanes. This is a bug in React.');}// This shouldn't be reachable, but as a fallback, return the entire bitmask.
return lanes;}}function getNextLanes(root,wipLanes){// Early bailout if there's no pending work left.
var pendingLanes=root.pendingLanes;if(pendingLanes===NoLanes){return NoLanes;}var nextLanes=NoLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;// Do not work on any idle work until all the non-idle work has finished,
// even if the work is suspended.
var nonIdlePendingLanes=pendingLanes&NonIdleLanes;if(nonIdlePendingLanes!==NoLanes){var nonIdleUnblockedLanes=nonIdlePendingLanes&~suspendedLanes;if(nonIdleUnblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdleUnblockedLanes);}else{var nonIdlePingedLanes=nonIdlePendingLanes&pingedLanes;if(nonIdlePingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdlePingedLanes);}}}else{// The only remaining work is Idle.
var unblockedLanes=pendingLanes&~suspendedLanes;if(unblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(unblockedLanes);}else{if(pingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(pingedLanes);}}}if(nextLanes===NoLanes){// This should only be reachable if we're suspended
// TODO: Consider warning in this path if a fallback timer is not scheduled.
return NoLanes;}// If we're already in the middle of a render, switching lanes will interrupt
// it and we'll lose our progress. We should only do this if the new lanes are
// higher priority.
if(wipLanes!==NoLanes&&wipLanes!==nextLanes&&// If we already suspended with a delay, then interrupting is fine. Don't
// bother waiting until the root is complete.
(wipLanes&suspendedLanes)===NoLanes){var nextLane=getHighestPriorityLane(nextLanes);var wipLane=getHighestPriorityLane(wipLanes);if(// Tests whether the next lane is equal or lower priority than the wip
// one. This works because the bits decrease in priority as you go left.
nextLane>=wipLane||// Default priority updates should not interrupt transition updates. The
// only difference between default updates and transition updates is that
// default updates do not support refresh transitions.
nextLane===DefaultLane&&(wipLane&TransitionLanes)!==NoLanes){// Keep working on the existing in-progress tree. Do not interrupt.
return wipLanes;}}if((nextLanes&InputContinuousLane)!==NoLanes){// When updates are sync by default, we entangle continuous priority updates
// and default updates, so they render in the same batch. The only reason
// they use separate lanes is because continuous updates should interrupt
// transitions, but default updates should not.
nextLanes|=pendingLanes&DefaultLane;}// Check for entangled lanes and add them to the batch.
//
// A lane is said to be entangled with another when it's not allowed to render
// in a batch that does not also include the other lane. Typically we do this
// when multiple updates have the same source, and we only want to respond to
// the most recent event from that source.
//
// Note that we apply entanglements *after* checking for partial work above.
// This means that if a lane is entangled during an interleaved event while
// it's already rendering, we won't interrupt it. This is intentional, since
// entanglement is usually "best effort": we'll try our best to render the
// lanes in the same batch, but it's not worth throwing out partially
// completed work in order to do it.
// TODO: Reconsider this. The counter-argument is that the partial work
// represents an intermediate state, which we don't want to show to the user.
// And by spending extra time finishing it, we're increasing the amount of
// time it takes to show the final state, which is what they are actually
// waiting for.
//
// For those exceptions where entanglement is semantically important, like
// useMutableSource, we should ensure that there is no partial work at the
// time we apply the entanglement.
var entangledLanes=root.entangledLanes;if(entangledLanes!==NoLanes){var entanglements=root.entanglements;var lanes=nextLanes&entangledLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;nextLanes|=entanglements[index];lanes&=~lane;}}return nextLanes;}function getMostRecentEventTime(root,lanes){var eventTimes=root.eventTimes;var mostRecentEventTime=NoTimestamp;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var eventTime=eventTimes[index];if(eventTime>mostRecentEventTime){mostRecentEventTime=eventTime;}lanes&=~lane;}return mostRecentEventTime;}function computeExpirationTime(lane,currentTime){switch(lane){case SyncLane:case InputContinuousHydrationLane:case InputContinuousLane:// User interactions should expire slightly more quickly.
//
// NOTE: This is set to the corresponding constant as in Scheduler.js.
// When we made it larger, a product metric in www regressed, suggesting
// there's a user interaction that's being starved by a series of
// synchronous updates. If that theory is correct, the proper solution is
// to fix the starvation. However, this scenario supports the idea that
// expiration times are an important safeguard when starvation
// does happen.
return currentTime+250;case DefaultHydrationLane:case DefaultLane:case TransitionHydrationLane:case TransitionLane1:case TransitionLane2:case TransitionLane3:case TransitionLane4:case TransitionLane5:case TransitionLane6:case TransitionLane7:case TransitionLane8:case TransitionLane9:case TransitionLane10:case TransitionLane11:case TransitionLane12:case TransitionLane13:case TransitionLane14:case TransitionLane15:case TransitionLane16:return currentTime+5000;case RetryLane1:case RetryLane2:case RetryLane3:case RetryLane4:case RetryLane5:// TODO: Retries should be allowed to expire if they are CPU bound for
// too long, but when I made this change it caused a spike in browser
// crashes. There must be some other underlying bug; not super urgent but
// ideally should figure out why and fix it. Unfortunately we don't have
// a repro for the crashes, only detected via production metrics.
return NoTimestamp;case SelectiveHydrationLane:case IdleHydrationLane:case IdleLane:case OffscreenLane:// Anything idle priority or lower should never expire.
return NoTimestamp;default:{error('Should have found matching lanes. This is a bug in React.');}return NoTimestamp;}}function markStarvedLanesAsExpired(root,currentTime){// TODO: This gets called every time we yield. We can optimize by storing
// the earliest expiration time on the root. Then use that to quickly bail out
// of this function.
var pendingLanes=root.pendingLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;var expirationTimes=root.expirationTimes;// Iterate through the pending lanes and check if we've reached their
// expiration time. If so, we'll assume the update is being starved and mark
// it as expired to force it to finish.
var lanes=pendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var expirationTime=expirationTimes[index];if(expirationTime===NoTimestamp){// Found a pending lane with no expiration time. If it's not suspended, or
// if it's pinged, assume it's CPU-bound. Compute a new expiration time
// using the current time.
if((lane&suspendedLanes)===NoLanes||(lane&pingedLanes)!==NoLanes){// Assumes timestamps are monotonically increasing.
expirationTimes[index]=computeExpirationTime(lane,currentTime);}}else if(expirationTime<=currentTime){// This lane expired
root.expiredLanes|=lane;}lanes&=~lane;}}// This returns the highest priority pending lanes regardless of whether they
// are suspended.
function getHighestPriorityPendingLanes(root){return getHighestPriorityLanes(root.pendingLanes);}function getLanesToRetrySynchronouslyOnError(root){var everythingButOffscreen=root.pendingLanes&~OffscreenLane;if(everythingButOffscreen!==NoLanes){return everythingButOffscreen;}if(everythingButOffscreen&OffscreenLane){return OffscreenLane;}return NoLanes;}function includesSyncLane(lanes){return(lanes&SyncLane)!==NoLanes;}function includesNonIdleWork(lanes){return(lanes&NonIdleLanes)!==NoLanes;}function includesOnlyRetries(lanes){return(lanes&RetryLanes)===lanes;}function includesOnlyNonUrgentLanes(lanes){var UrgentLanes=SyncLane|InputContinuousLane|DefaultLane;return(lanes&UrgentLanes)===NoLanes;}function includesOnlyTransitions(lanes){return(lanes&TransitionLanes)===lanes;}function includesBlockingLane(root,lanes){var SyncDefaultLanes=InputContinuousHydrationLane|InputContinuousLane|DefaultHydrationLane|DefaultLane;return(lanes&SyncDefaultLanes)!==NoLanes;}function includesExpiredLane(root,lanes){// This is a separate check from includesBlockingLane because a lane can
// expire after a render has already started.
return(lanes&root.expiredLanes)!==NoLanes;}function isTransitionLane(lane){return(lane&TransitionLanes)!==NoLanes;}function claimNextTransitionLane(){// Cycle through the lanes, assigning each new transition to the next lane.
// In most cases, this means every transition gets its own lane, until we
// run out of lanes and cycle back to the beginning.
var lane=nextTransitionLane;nextTransitionLane<<=1;if((nextTransitionLane&TransitionLanes)===NoLanes){nextTransitionLane=TransitionLane1;}return lane;}function claimNextRetryLane(){var lane=nextRetryLane;nextRetryLane<<=1;if((nextRetryLane&RetryLanes)===NoLanes){nextRetryLane=RetryLane1;}return lane;}function getHighestPriorityLane(lanes){return lanes&-lanes;}function pickArbitraryLane(lanes){// This wrapper function gets inlined. Only exists so to communicate that it
// doesn't matter which bit is selected; you can pick any bit without
// affecting the algorithms where its used. Here I'm using
// getHighestPriorityLane because it requires the fewest operations.
return getHighestPriorityLane(lanes);}function pickArbitraryLaneIndex(lanes){return 31-clz32(lanes);}function laneToIndex(lane){return pickArbitraryLaneIndex(lane);}function includesSomeLane(a,b){return(a&b)!==NoLanes;}function isSubsetOfLanes(set,subset){return(set&subset)===subset;}function mergeLanes(a,b){return a|b;}function removeLanes(set,subset){return set&~subset;}function intersectLanes(a,b){return a&b;}// Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).
function laneToLanes(lane){return lane;}function higherPriorityLane(a,b){// This works because the bit ranges decrease in priority as you go left.
return a!==NoLane&&a<b?a:b;}function createLaneMap(initial){// Intentionally pushing one by one.
// https://v8.dev/blog/elements-kinds#avoid-creating-holes
var laneMap=[];for(var i=0;i<TotalLanes;i++){laneMap.push(initial);}return laneMap;}function markRootUpdated(root,updateLane,eventTime){root.pendingLanes|=updateLane;// If there are any suspended transitions, it's possible this new update
// could unblock them. Clear the suspended lanes so that we can try rendering
// them again.
//
// TODO: We really only need to unsuspend only lanes that are in the
// `subtreeLanes` of the updated fiber, or the update lanes of the return
// path. This would exclude suspended updates in an unrelated sibling tree,
// since there's no way for this update to unblock it.
//
// We don't do this if the incoming update is idle, because we never process
// idle updates until after all the regular updates have finished; there's no
// way it could unblock a transition.
if(updateLane!==IdleLane){root.suspendedLanes=NoLanes;root.pingedLanes=NoLanes;}var eventTimes=root.eventTimes;var index=laneToIndex(updateLane);// We can always overwrite an existing timestamp because we prefer the most
// recent event, and we assume time is monotonically increasing.
eventTimes[index]=eventTime;}function markRootSuspended(root,suspendedLanes){root.suspendedLanes|=suspendedLanes;root.pingedLanes&=~suspendedLanes;// The suspended lanes are no longer CPU-bound. Clear their expiration times.
var expirationTimes=root.expirationTimes;var lanes=suspendedLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootPinged(root,pingedLanes,eventTime){root.pingedLanes|=root.suspendedLanes&pingedLanes;}function markRootFinished(root,remainingLanes){var noLongerPendingLanes=root.pendingLanes&~remainingLanes;root.pendingLanes=remainingLanes;// Let's try everything again
root.suspendedLanes=NoLanes;root.pingedLanes=NoLanes;root.expiredLanes&=remainingLanes;root.mutableReadLanes&=remainingLanes;root.entangledLanes&=remainingLanes;var entanglements=root.entanglements;var eventTimes=root.eventTimes;var expirationTimes=root.expirationTimes;// Clear the lanes that no longer have pending work
var lanes=noLongerPendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;entanglements[index]=NoLanes;eventTimes[index]=NoTimestamp;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootEntangled(root,entangledLanes){// In addition to entangling each of the given lanes with each other, we also
// have to consider _transitive_ entanglements. For each lane that is already
// entangled with *any* of the given lanes, that lane is now transitively
// entangled with *all* the given lanes.
//
// Translated: If C is entangled with A, then entangling A with B also
// entangles C with B.
//
// If this is hard to grasp, it might help to intentionally break this
// function and look at the tests that fail in ReactTransition-test.js. Try
// commenting out one of the conditions below.
var rootEntangledLanes=root.entangledLanes|=entangledLanes;var entanglements=root.entanglements;var lanes=rootEntangledLanes;while(lanes){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;if(// Is this one of the newly entangled lanes?
lane&entangledLanes|// Is this lane transitively entangled with the newly entangled lanes?
entanglements[index]&entangledLanes){entanglements[index]|=entangledLanes;}lanes&=~lane;}}function getBumpedLaneForHydration(root,renderLanes){var renderLane=getHighestPriorityLane(renderLanes);var lane;switch(renderLane){case InputContinuousLane:lane=InputContinuousHydrationLane;break;case DefaultLane:lane=DefaultHydrationLane;break;case TransitionLane1:case TransitionLane2:case TransitionLane3:case TransitionLane4:case TransitionLane5:case TransitionLane6:case TransitionLane7:case TransitionLane8:case TransitionLane9:case TransitionLane10:case TransitionLane11:case TransitionLane12:case TransitionLane13:case TransitionLane14:case TransitionLane15:case TransitionLane16:case RetryLane1:case RetryLane2:case RetryLane3:case RetryLane4:case RetryLane5:lane=TransitionHydrationLane;break;case IdleLane:lane=IdleHydrationLane;break;default:// Everything else is already either a hydration lane, or shouldn't
// be retried at a hydration lane.
lane=NoLane;break;}// Check if the lane we chose is suspended. If so, that indicates that we
// already attempted and failed to hydrate at that level. Also check if we're
// already rendering that lane, which is rare but could happen.
if((lane&(root.suspendedLanes|renderLanes))!==NoLane){// Give up trying to hydrate and fall back to client render.
return NoLane;}return lane;}function addFiberToLanesMap(root,fiber,lanes){if(!isDevToolsPresent){return;}var pendingUpdatersLaneMap=root.pendingUpdatersLaneMap;while(lanes>0){var index=laneToIndex(lanes);var lane=1<<index;var updaters=pendingUpdatersLaneMap[index];updaters.add(fiber);lanes&=~lane;}}function movePendingFibersToMemoized(root,lanes){if(!isDevToolsPresent){return;}var pendingUpdatersLaneMap=root.pendingUpdatersLaneMap;var memoizedUpdaters=root.memoizedUpdaters;while(lanes>0){var index=laneToIndex(lanes);var lane=1<<index;var updaters=pendingUpdatersLaneMap[index];if(updaters.size>0){updaters.forEach(function(fiber){var alternate=fiber.alternate;if(alternate===null||!memoizedUpdaters.has(alternate)){memoizedUpdaters.add(fiber);}});updaters.clear();}lanes&=~lane;}}function getTransitionsForLanes(root,lanes){{return null;}}var DiscreteEventPriority=SyncLane;var ContinuousEventPriority=InputContinuousLane;var DefaultEventPriority=DefaultLane;var IdleEventPriority=IdleLane;var currentUpdatePriority=NoLane;function getCurrentUpdatePriority(){return currentUpdatePriority;}function setCurrentUpdatePriority(newPriority){currentUpdatePriority=newPriority;}function runWithPriority(priority,fn){var previousPriority=currentUpdatePriority;try{currentUpdatePriority=priority;return fn();}finally{currentUpdatePriority=previousPriority;}}function higherEventPriority(a,b){return a!==0&&a<b?a:b;}function lowerEventPriority(a,b){return a===0||a>b?a:b;}function isHigherEventPriority(a,b){return a!==0&&a<b;}function lanesToEventPriority(lanes){var lane=getHighestPriorityLane(lanes);if(!isHigherEventPriority(DiscreteEventPriority,lane)){return DiscreteEventPriority;}if(!isHigherEventPriority(ContinuousEventPriority,lane)){return ContinuousEventPriority;}if(includesNonIdleWork(lane)){return DefaultEventPriority;}return IdleEventPriority;}// This is imported by the event replaying implementation in React DOM. It's
// in a separate file to break a circular dependency between the renderer and
// the reconciler.
function isRootDehydrated(root){var currentState=root.current.memoizedState;return currentState.isDehydrated;}var _attemptSynchronousHydration;function setAttemptSynchronousHydration(fn){_attemptSynchronousHydration=fn;}function attemptSynchronousHydration(fiber){_attemptSynchronousHydration(fiber);}var attemptContinuousHydration;function setAttemptContinuousHydration(fn){attemptContinuousHydration=fn;}var attemptHydrationAtCurrentPriority;function setAttemptHydrationAtCurrentPriority(fn){attemptHydrationAtCurrentPriority=fn;}var getCurrentUpdatePriority$1;function setGetCurrentUpdatePriority(fn){getCurrentUpdatePriority$1=fn;}var attemptHydrationAtPriority;function setAttemptHydrationAtPriority(fn){attemptHydrationAtPriority=fn;}// TODO: Upgrade this definition once we're on a newer version of Flow that
// has this definition built-in.
var hasScheduledReplayAttempt=false;// The queue of discrete events to be replayed.
var queuedDiscreteEvents=[];// Indicates if any continuous event targets are non-null for early bailout.
// if the last target was dehydrated.
var queuedFocus=null;var queuedDrag=null;var queuedMouse=null;// For pointer events there can be one latest event per pointerId.
var queuedPointers=new Map();var queuedPointerCaptures=new Map();// We could consider replaying selectionchange and touchmoves too.
var queuedExplicitHydrationTargets=[];var discreteReplayableEvents=['mousedown','mouseup','touchcancel','touchend','touchstart','auxclick','dblclick','pointercancel','pointerdown','pointerup','dragend','dragstart','drop','compositionend','compositionstart','keydown','keypress','keyup','input','textInput',// Intentionally camelCase
'copy','cut','paste','click','change','contextmenu','reset','submit'];function isDiscreteEventThatRequiresHydration(eventType){return discreteReplayableEvents.indexOf(eventType)>-1;}function createQueuedReplayableEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){return{blockedOn:blockedOn,domEventName:domEventName,eventSystemFlags:eventSystemFlags,nativeEvent:nativeEvent,targetContainers:[targetContainer]};}function clearIfContinuousEvent(domEventName,nativeEvent){switch(domEventName){case'focusin':case'focusout':queuedFocus=null;break;case'dragenter':case'dragleave':queuedDrag=null;break;case'mouseover':case'mouseout':queuedMouse=null;break;case'pointerover':case'pointerout':{var pointerId=nativeEvent.pointerId;queuedPointers["delete"](pointerId);break;}case'gotpointercapture':case'lostpointercapture':{var _pointerId=nativeEvent.pointerId;queuedPointerCaptures["delete"](_pointerId);break;}}}function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent,blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){if(existingQueuedEvent===null||existingQueuedEvent.nativeEvent!==nativeEvent){var queuedEvent=createQueuedReplayableEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent);if(blockedOn!==null){var _fiber2=getInstanceFromNode(blockedOn);if(_fiber2!==null){// Attempt to increase the priority of this target.
attemptContinuousHydration(_fiber2);}}return queuedEvent;}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags, and the targetContainers, and
// store a single event to be replayed.
existingQueuedEvent.eventSystemFlags|=eventSystemFlags;var targetContainers=existingQueuedEvent.targetContainers;if(targetContainer!==null&&targetContainers.indexOf(targetContainer)===-1){targetContainers.push(targetContainer);}return existingQueuedEvent;}function queueIfContinuousEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(domEventName){case'focusin':{var focusEvent=nativeEvent;queuedFocus=accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus,blockedOn,domEventName,eventSystemFlags,targetContainer,focusEvent);return true;}case'dragenter':{var dragEvent=nativeEvent;queuedDrag=accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag,blockedOn,domEventName,eventSystemFlags,targetContainer,dragEvent);return true;}case'mouseover':{var mouseEvent=nativeEvent;queuedMouse=accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse,blockedOn,domEventName,eventSystemFlags,targetContainer,mouseEvent);return true;}case'pointerover':{var pointerEvent=nativeEvent;var pointerId=pointerEvent.pointerId;queuedPointers.set(pointerId,accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId)||null,blockedOn,domEventName,eventSystemFlags,targetContainer,pointerEvent));return true;}case'gotpointercapture':{var _pointerEvent=nativeEvent;var _pointerId2=_pointerEvent.pointerId;queuedPointerCaptures.set(_pointerId2,accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2)||null,blockedOn,domEventName,eventSystemFlags,targetContainer,_pointerEvent));return true;}}return false;}// Check if this target is unblocked. Returns true if it's unblocked.
function attemptExplicitHydrationTarget(queuedTarget){// TODO: This function shares a lot of logic with findInstanceBlockingEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var targetInst=getClosestInstanceFromNode(queuedTarget.target);if(targetInst!==null){var nearestMounted=getNearestMountedFiber(targetInst);if(nearestMounted!==null){var tag=nearestMounted.tag;if(tag===SuspenseComponent){var instance=getSuspenseInstanceFromFiber(nearestMounted);if(instance!==null){// We're blocked on hydrating this boundary.
// Increase its priority.
queuedTarget.blockedOn=instance;attemptHydrationAtPriority(queuedTarget.priority,function(){attemptHydrationAtCurrentPriority(nearestMounted);});return;}}else if(tag===HostRoot){var root=nearestMounted.stateNode;if(isRootDehydrated(root)){queuedTarget.blockedOn=getContainerFromFiber(nearestMounted);// We don't currently have a way to increase the priority of
// a root other than sync.
return;}}}}queuedTarget.blockedOn=null;}function queueExplicitHydrationTarget(target){// TODO: This will read the priority if it's dispatched by the React
// event system but not native events. Should read window.event.type, like
// we do for updates (getCurrentEventPriority).
var updatePriority=getCurrentUpdatePriority$1();var queuedTarget={blockedOn:null,target:target,priority:updatePriority};var i=0;for(;i<queuedExplicitHydrationTargets.length;i++){// Stop once we hit the first target with lower priority than
if(!isHigherEventPriority(updatePriority,queuedExplicitHydrationTargets[i].priority)){break;}}queuedExplicitHydrationTargets.splice(i,0,queuedTarget);if(i===0){attemptExplicitHydrationTarget(queuedTarget);}}function attemptReplayContinuousQueuedEvent(queuedEvent){if(queuedEvent.blockedOn!==null){return false;}var targetContainers=queuedEvent.targetContainers;while(targetContainers.length>0){var targetContainer=targetContainers[0];var nextBlockedOn=findInstanceBlockingEvent(queuedEvent.domEventName,queuedEvent.eventSystemFlags,targetContainer,queuedEvent.nativeEvent);if(nextBlockedOn===null){{var nativeEvent=queuedEvent.nativeEvent;var nativeEventClone=new nativeEvent.constructor(nativeEvent.type,nativeEvent);setReplayingEvent(nativeEventClone);nativeEvent.target.dispatchEvent(nativeEventClone);resetReplayingEvent();}}else{// We're still blocked. Try again later.
var _fiber3=getInstanceFromNode(nextBlockedOn);if(_fiber3!==null){attemptContinuousHydration(_fiber3);}queuedEvent.blockedOn=nextBlockedOn;return false;}// This target container was successfully dispatched. Try the next.
targetContainers.shift();}return true;}function attemptReplayContinuousQueuedEventInMap(queuedEvent,key,map){if(attemptReplayContinuousQueuedEvent(queuedEvent)){map["delete"](key);}}function replayUnblockedEvents(){hasScheduledReplayAttempt=false;if(queuedFocus!==null&&attemptReplayContinuousQueuedEvent(queuedFocus)){queuedFocus=null;}if(queuedDrag!==null&&attemptReplayContinuousQueuedEvent(queuedDrag)){queuedDrag=null;}if(queuedMouse!==null&&attemptReplayContinuousQueuedEvent(queuedMouse)){queuedMouse=null;}queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);}function scheduleCallbackIfUnblocked(queuedEvent,unblocked){if(queuedEvent.blockedOn===unblocked){queuedEvent.blockedOn=null;if(!hasScheduledReplayAttempt){hasScheduledReplayAttempt=true;// Schedule a callback to attempt replaying as many events as are
// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority,replayUnblockedEvents);}}}function retryIfBlockedOn(unblocked){// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(queuedDiscreteEvents.length>0){scheduleCallbackIfUnblocked(queuedDiscreteEvents[0],unblocked);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var i=1;i<queuedDiscreteEvents.length;i++){var queuedEvent=queuedDiscreteEvents[i];if(queuedEvent.blockedOn===unblocked){queuedEvent.blockedOn=null;}}}if(queuedFocus!==null){scheduleCallbackIfUnblocked(queuedFocus,unblocked);}if(queuedDrag!==null){scheduleCallbackIfUnblocked(queuedDrag,unblocked);}if(queuedMouse!==null){scheduleCallbackIfUnblocked(queuedMouse,unblocked);}var unblock=function unblock(queuedEvent){return scheduleCallbackIfUnblocked(queuedEvent,unblocked);};queuedPointers.forEach(unblock);queuedPointerCaptures.forEach(unblock);for(var _i=0;_i<queuedExplicitHydrationTargets.length;_i++){var queuedTarget=queuedExplicitHydrationTargets[_i];if(queuedTarget.blockedOn===unblocked){queuedTarget.blockedOn=null;}}while(queuedExplicitHydrationTargets.length>0){var nextExplicitTarget=queuedExplicitHydrationTargets[0];if(nextExplicitTarget.blockedOn!==null){// We're still blocked.
break;}else{attemptExplicitHydrationTarget(nextExplicitTarget);if(nextExplicitTarget.blockedOn===null){// We're unblocked.
queuedExplicitHydrationTargets.shift();}}}}var ReactCurrentBatchConfig=ReactSharedInternals.ReactCurrentBatchConfig;// TODO: can we stop exporting these?
var _enabled=true;// This is exported in FB builds for use by legacy FB layer infra.
// We'd like to remove this but it's not clear if this is safe.
function setEnabled(enabled){_enabled=!!enabled;}function isEnabled(){return _enabled;}function createEventListenerWrapperWithPriority(targetContainer,domEventName,eventSystemFlags){var eventPriority=getEventPriority(domEventName);var listenerWrapper;switch(eventPriority){case DiscreteEventPriority:listenerWrapper=dispatchDiscreteEvent;break;case ContinuousEventPriority:listenerWrapper=dispatchContinuousEvent;break;case DefaultEventPriority:default:listenerWrapper=dispatchEvent;break;}return listenerWrapper.bind(null,domEventName,eventSystemFlags,targetContainer);}function dispatchDiscreteEvent(domEventName,eventSystemFlags,container,nativeEvent){var previousPriority=getCurrentUpdatePriority();var prevTransition=ReactCurrentBatchConfig.transition;ReactCurrentBatchConfig.transition=null;try{setCurrentUpdatePriority(DiscreteEventPriority);dispatchEvent(domEventName,eventSystemFlags,container,nativeEvent);}finally{setCurrentUpdatePriority(previousPriority);ReactCurrentBatchConfig.transition=prevTransition;}}function dispatchContinuousEvent(domEventName,eventSystemFlags,container,nativeEvent){var previousPriority=getCurrentUpdatePriority();var prevTransition=ReactCurrentBatchConfig.transition;ReactCurrentBatchConfig.transition=null;try{setCurrentUpdatePriority(ContinuousEventPriority);dispatchEvent(domEventName,eventSystemFlags,container,nativeEvent);}finally{setCurrentUpdatePriority(previousPriority);ReactCurrentBatchConfig.transition=prevTransition;}}function dispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent){if(!_enabled){return;}{dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay(domEventName,eventSystemFlags,targetContainer,nativeEvent);}}function dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay(domEventName,eventSystemFlags,targetContainer,nativeEvent){var blockedOn=findInstanceBlockingEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent);if(blockedOn===null){dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,return_targetInst,targetContainer);clearIfContinuousEvent(domEventName,nativeEvent);return;}if(queueIfContinuousEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent)){nativeEvent.stopPropagation();return;}// We need to clear only if we didn't queue because
// queueing is accumulative.
clearIfContinuousEvent(domEventName,nativeEvent);if(eventSystemFlags&IS_CAPTURE_PHASE&&isDiscreteEventThatRequiresHydration(domEventName)){while(blockedOn!==null){var fiber=getInstanceFromNode(blockedOn);if(fiber!==null){attemptSynchronousHydration(fiber);}var nextBlockedOn=findInstanceBlockingEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent);if(nextBlockedOn===null){dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,return_targetInst,targetContainer);}if(nextBlockedOn===blockedOn){break;}blockedOn=nextBlockedOn;}if(blockedOn!==null){nativeEvent.stopPropagation();}return;}// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,null,targetContainer);}var return_targetInst=null;// Returns a SuspenseInstance or Container if it's blocked.
// The return_targetInst field above is conceptually part of the return value.
function findInstanceBlockingEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent){// TODO: Warn if _enabled is false.
return_targetInst=null;var nativeEventTarget=getEventTarget(nativeEvent);var targetInst=getClosestInstanceFromNode(nativeEventTarget);if(targetInst!==null){var nearestMounted=getNearestMountedFiber(targetInst);if(nearestMounted===null){// This tree has been unmounted already. Dispatch without a target.
targetInst=null;}else{var tag=nearestMounted.tag;if(tag===SuspenseComponent){var instance=getSuspenseInstanceFromFiber(nearestMounted);if(instance!==null){// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return instance;}// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
targetInst=null;}else if(tag===HostRoot){var root=nearestMounted.stateNode;if(isRootDehydrated(root)){// If this happens during a replay something went wrong and it might block
// the whole system.
return getContainerFromFiber(nearestMounted);}targetInst=null;}else if(nearestMounted!==targetInst){// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
targetInst=null;}}}return_targetInst=targetInst;// We're not blocked on anything.
return null;}function getEventPriority(domEventName){switch(domEventName){// Used by SimpleEventPlugin:
case'cancel':case'click':case'close':case'contextmenu':case'copy':case'cut':case'auxclick':case'dblclick':case'dragend':case'dragstart':case'drop':case'focusin':case'focusout':case'input':case'invalid':case'keydown':case'keypress':case'keyup':case'mousedown':case'mouseup':case'paste':case'pause':case'play':case'pointercancel':case'pointerdown':case'pointerup':case'ratechange':case'reset':case'resize':case'seeked':case'submit':case'touchcancel':case'touchend':case'touchstart':case'volumechange':// Used by polyfills:
// eslint-disable-next-line no-fallthrough
case'change':case'selectionchange':case'textInput':case'compositionstart':case'compositionend':case'compositionupdate':// Only enableCreateEventHandleAPI:
// eslint-disable-next-line no-fallthrough
case'beforeblur':case'afterblur':// Not used by React but could be by user code:
// eslint-disable-next-line no-fallthrough
case'beforeinput':case'blur':case'fullscreenchange':case'focus':case'hashchange':case'popstate':case'select':case'selectstart':return DiscreteEventPriority;case'drag':case'dragenter':case'dragexit':case'dragleave':case'dragover':case'mousemove':case'mouseout':case'mouseover':case'pointermove':case'pointerout':case'pointerover':case'scroll':case'toggle':case'touchmove':case'wheel':// Not used by React but could be by user code:
// eslint-disable-next-line no-fallthrough
case'mouseenter':case'mouseleave':case'pointerenter':case'pointerleave':return ContinuousEventPriority;case'message':{// We might be in the Scheduler callback.
// Eventually this mechanism will be replaced by a check
// of the current priority on the native scheduler.
var schedulerPriority=getCurrentPriorityLevel();switch(schedulerPriority){case ImmediatePriority:return DiscreteEventPriority;case UserBlockingPriority:return ContinuousEventPriority;case NormalPriority:case LowPriority:// TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
return DefaultEventPriority;case IdlePriority:return IdleEventPriority;default:return DefaultEventPriority;}}default:return DefaultEventPriority;}}function addEventBubbleListener(target,eventType,listener){target.addEventListener(eventType,listener,false);return listener;}function addEventCaptureListener(target,eventType,listener){target.addEventListener(eventType,listener,true);return listener;}function addEventCaptureListenerWithPassiveFlag(target,eventType,listener,passive){target.addEventListener(eventType,listener,{capture:true,passive:passive});return listener;}function addEventBubbleListenerWithPassiveFlag(target,eventType,listener,passive){target.addEventListener(eventType,listener,{passive:passive});return listener;}/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */var root=null;var startText=null;var fallbackText=null;function initialize(nativeEventTarget){root=nativeEventTarget;startText=getText();return true;}function reset(){root=null;startText=null;fallbackText=null;}function getData(){if(fallbackText){return fallbackText;}var start;var startValue=startText;var startLength=startValue.length;var end;var endValue=getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;fallbackText=endValue.slice(start,sliceTail);return fallbackText;}function getText(){if('value'in root){return root.value;}return root.textContent;}/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else{// IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;}// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
if(charCode===10){charCode=13;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}function functionThatReturnsTrue(){return true;}function functionThatReturnsFalse(){return false;}// This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.
function createSyntheticEvent(Interface){/**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events can also subclass this.
   */function SyntheticBaseEvent(reactName,reactEventType,targetInst,nativeEvent,nativeEventTarget){this._reactName=reactName;this._targetInst=targetInst;this.type=reactEventType;this.nativeEvent=nativeEvent;this.target=nativeEventTarget;this.currentTarget=null;for(var _propName in Interface){if(!Interface.hasOwnProperty(_propName)){continue;}var normalize=Interface[_propName];if(normalize){this[_propName]=normalize(nativeEvent);}else{this[_propName]=nativeEvent[_propName];}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=functionThatReturnsTrue;}else{this.isDefaultPrevented=functionThatReturnsFalse;}this.isPropagationStopped=functionThatReturnsFalse;return this;}assign(SyntheticBaseEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();// $FlowFixMe - flow is not aware of `unknown` in IE
}else if(typeof event.returnValue!=='unknown'){event.returnValue=false;}this.isDefaultPrevented=functionThatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();// $FlowFixMe - flow is not aware of `unknown` in IE
}else if(typeof event.cancelBubble!=='unknown'){// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
event.cancelBubble=true;}this.isPropagationStopped=functionThatReturnsTrue;},/**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into the pool.
     */persist:function persist(){// Modern event system doesn't use pooling.
},/**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */isPersistent:functionThatReturnsTrue});return SyntheticBaseEvent;}/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:0,isTrusted:0};var SyntheticEvent=createSyntheticEvent(EventInterface);var UIEventInterface=assign({},EventInterface,{view:0,detail:0});var SyntheticUIEvent=createSyntheticEvent(UIEventInterface);var lastMovementX;var lastMovementY;var lastMouseEvent;function updateMouseMovementPolyfillState(event){if(event!==lastMouseEvent){if(lastMouseEvent&&event.type==='mousemove'){lastMovementX=event.screenX-lastMouseEvent.screenX;lastMovementY=event.screenY-lastMouseEvent.screenY;}else{lastMovementX=0;lastMovementY=0;}lastMouseEvent=event;}}/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface=assign({},UIEventInterface,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:getEventModifierState,button:0,buttons:0,relatedTarget:function relatedTarget(event){if(event.relatedTarget===undefined)return event.fromElement===event.srcElement?event.toElement:event.fromElement;return event.relatedTarget;},movementX:function movementX(event){if('movementX'in event){return event.movementX;}updateMouseMovementPolyfillState(event);return lastMovementX;},movementY:function movementY(event){if('movementY'in event){return event.movementY;}// Don't need to call updateMouseMovementPolyfillState() here
// because it's guaranteed to have already run when movementX
// was copied.
return lastMovementY;}});var SyntheticMouseEvent=createSyntheticEvent(MouseEventInterface);/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface=assign({},MouseEventInterface,{dataTransfer:0});var SyntheticDragEvent=createSyntheticEvent(DragEventInterface);/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface=assign({},UIEventInterface,{relatedTarget:0});var SyntheticFocusEvent=createSyntheticEvent(FocusEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface=assign({},EventInterface,{animationName:0,elapsedTime:0,pseudoElement:0});var SyntheticAnimationEvent=createSyntheticEvent(AnimationEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface=assign({},EventInterface,{clipboardData:function clipboardData(event){return'clipboardData'in event?event.clipboardData:window.clipboardData;}});var SyntheticClipboardEvent=createSyntheticEvent(ClipboardEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface=assign({},EventInterface,{data:0});var SyntheticCompositionEvent=createSyntheticEvent(CompositionEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */ // Happens to share the same list for now.
var SyntheticInputEvent=SyntheticCompositionEvent;/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'};/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={'8':'Backspace','9':'Tab','12':'Clear','13':'Enter','16':'Shift','17':'Control','18':'Alt','19':'Pause','20':'CapsLock','27':'Escape','32':' ','33':'PageUp','34':'PageDown','35':'End','36':'Home','37':'ArrowLeft','38':'ArrowUp','39':'ArrowRight','40':'ArrowDown','45':'Insert','46':'Delete','112':'F1','113':'F2','114':'F3','115':'F4','116':'F5','117':'F6','118':'F7','119':'F8','120':'F9','121':'F10','122':'F11','123':'F12','144':'NumLock','145':'ScrollLock','224':'Meta'};/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return'';}/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'};// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface=assign({},UIEventInterface,{key:getEventKey,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:getEventModifierState,// Legacy Interface
charCode:function charCode(event){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}});var SyntheticKeyboardEvent=createSyntheticEvent(KeyboardEventInterface);/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */var PointerEventInterface=assign({},MouseEventInterface,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});var SyntheticPointerEvent=createSyntheticEvent(PointerEventInterface);/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface=assign({},UIEventInterface,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:getEventModifierState});var SyntheticTouchEvent=createSyntheticEvent(TouchEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface=assign({},EventInterface,{propertyName:0,elapsedTime:0,pseudoElement:0});var SyntheticTransitionEvent=createSyntheticEvent(TransitionEventInterface);/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface=assign({},MouseEventInterface,{deltaX:function deltaX(event){return'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:0,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:0});var SyntheticWheelEvent=createSyntheticEvent(WheelEventInterface);var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=canUseDOM&&'TextEvent'in window&&!documentMode;// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);function registerEvents(){registerTwoPhaseEvent('onBeforeInput',['compositionend','keypress','textInput','paste']);registerTwoPhaseEvent('onCompositionEnd',['compositionend','focusout','keydown','keypress','keyup','mousedown']);registerTwoPhaseEvent('onCompositionStart',['compositionstart','focusout','keydown','keypress','keyup','mousedown']);registerTwoPhaseEvent('onCompositionUpdate',['compositionupdate','focusout','keydown','keypress','keyup','mousedown']);}// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false;/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
 * Translate native top level events into event types.
 */function getCompositionEventType(domEventName){switch(domEventName){case'compositionstart':return'onCompositionStart';case'compositionend':return'onCompositionEnd';case'compositionupdate':return'onCompositionUpdate';}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 */function isFallbackCompositionStart(domEventName,nativeEvent){return domEventName==='keydown'&&nativeEvent.keyCode===START_KEYCODE;}/**
 * Does our fallback mode think that this event is the end of composition?
 */function isFallbackCompositionEnd(domEventName,nativeEvent){switch(domEventName){case'keyup':// Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case'keydown':// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case'keypress':case'mousedown':case'focusout':// Events are not possible without cancelling IME.
return true;default:return false;}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(_typeof(detail)==='object'&&'data'in detail){return detail.data;}return null;}/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */function isUsingKoreanIME(nativeEvent){return nativeEvent.locale==='ko';}// Track the current IME composition status, if any.
var isComposing=false;/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(domEventName);}else if(!isComposing){if(isFallbackCompositionStart(domEventName,nativeEvent)){eventType='onCompositionStart';}}else if(isFallbackCompositionEnd(domEventName,nativeEvent)){eventType='onCompositionEnd';}if(!eventType){return null;}if(useFallbackCompositionData&&!isUsingKoreanIME(nativeEvent)){// The current composition is stored statically and must not be
// overwritten while composition continues.
if(!isComposing&&eventType==='onCompositionStart'){isComposing=initialize(nativeEventTarget);}else if(eventType==='onCompositionEnd'){if(isComposing){fallbackData=getData();}}}var listeners=accumulateTwoPhaseListeners(targetInst,eventType);if(listeners.length>0){var event=new SyntheticCompositionEvent(eventType,domEventName,null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});if(fallbackData){// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else{var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}}}function getNativeBeforeInputChars(domEventName,nativeEvent){switch(domEventName){case'compositionend':return getDataFromCustomEvent(nativeEvent);case'keypress':/**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case'textInput':// Record the characters to be added to the DOM.
var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
return null;}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 */function getFallbackBeforeInputChars(domEventName,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(isComposing){if(domEventName==='compositionend'||!canUseCompositionEvent&&isFallbackCompositionEnd(domEventName,nativeEvent)){var chars=getData();reset();isComposing=false;return chars;}return null;}switch(domEventName){case'paste':// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case'keypress':/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(!isKeypressCommand(nativeEvent)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(nativeEvent["char"]&&nativeEvent["char"].length>1){return nativeEvent["char"];}else if(nativeEvent.which){return String.fromCharCode(nativeEvent.which);}}return null;case'compositionend':return useFallbackCompositionData&&!isUsingKoreanIME(nativeEvent)?null:nativeEvent.data;default:return null;}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(domEventName,nativeEvent);}else{chars=getFallbackBeforeInputChars(domEventName,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var listeners=accumulateTwoPhaseListeners(targetInst,'onBeforeInput');if(listeners.length>0){var event=new SyntheticInputEvent('onBeforeInput','beforeinput',null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});event.data=chars;}}/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */function extractEvents(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){extractCompositionEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractBeforeInputEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);}/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={color:true,date:true,datetime:true,'datetime-local':true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return!!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix){if(!canUseDOM){return false;}var eventName='on'+eventNameSuffix;var isSupported=(eventName in document);if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}return isSupported;}function registerEvents$1(){registerTwoPhaseEvent('onChange',['change','click','focusin','focusout','input','keydown','keyup','selectionchange']);}function createAndAccumulateChangeEvent(dispatchQueue,inst,nativeEvent,target){// Flag this event loop as needing state restore.
enqueueStateRestore(target);var listeners=accumulateTwoPhaseListeners(inst,'onChange');if(listeners.length>0){var event=new SyntheticEvent('onChange','change',null,nativeEvent,target);dispatchQueue.push({event:event,listeners:listeners});}}/**
 * For IE shims
 */var activeElement=null;var activeElementInst=null;/**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}function manualDispatchChangeEvent(nativeEvent){var dispatchQueue=[];createAndAccumulateChangeEvent(dispatchQueue,activeElementInst,nativeEvent,getEventTarget(nativeEvent));// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
batchedUpdates(runEventInBatch,dispatchQueue);}function runEventInBatch(dispatchQueue){processDispatchQueue(dispatchQueue,0);}function getInstIfValueChanged(targetInst){var targetNode=getNodeFromInstance(targetInst);if(updateValueIfChanged(targetNode)){return targetInst;}}function getTargetInstForChangeEvent(domEventName,targetInst){if(domEventName==='change'){return targetInst;}}/**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(canUseDOM){// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
isInputEventSupported=isEventSupported('input')&&(!document.documentMode||document.documentMode>9);}/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onpropertychange',handlePropertyChange);}/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;}activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementInst=null;}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}if(getInstIfValueChanged(activeElementInst)){manualDispatchChangeEvent(nativeEvent);}}function handleEventsForInputEventPolyfill(domEventName,target,targetInst){if(domEventName==='focusin'){// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(domEventName==='focusout'){stopWatchingForValueChange();}}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(domEventName,targetInst){if(domEventName==='selectionchange'||domEventName==='keyup'||domEventName==='keydown'){// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged(activeElementInst);}}/**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(domEventName,targetInst){if(domEventName==='click'){return getInstIfValueChanged(targetInst);}}function getTargetInstForInputOrChangeEvent(domEventName,targetInst){if(domEventName==='input'||domEventName==='change'){return getInstIfValueChanged(targetInst);}}function handleControlledInputBlur(node){var state=node._wrapperState;if(!state||!state.controlled||node.type!=='number'){return;}{// If controlled, assign the value attribute to the current value on blur
setDefaultValue(node,'number',node.value);}}/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */function extractEvents$1(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var targetNode=targetInst?getNodeFromInstance(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){getTargetInstFunc=getTargetInstForChangeEvent;}else if(isTextInputElement(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputOrChangeEvent;}else{getTargetInstFunc=getTargetInstForInputEventPolyfill;handleEventFunc=handleEventsForInputEventPolyfill;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(domEventName,targetInst);if(inst){createAndAccumulateChangeEvent(dispatchQueue,inst,nativeEvent,nativeEventTarget);return;}}if(handleEventFunc){handleEventFunc(domEventName,targetNode,targetInst);}// When blurring, set the value attribute for number inputs
if(domEventName==='focusout'){handleControlledInputBlur(targetNode);}}function registerEvents$2(){registerDirectEvent('onMouseEnter',['mouseout','mouseover']);registerDirectEvent('onMouseLeave',['mouseout','mouseover']);registerDirectEvent('onPointerEnter',['pointerout','pointerover']);registerDirectEvent('onPointerLeave',['pointerout','pointerover']);}/**
 * For almost every interaction we care about, there will be both a top-level
 * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
 * we do not extract duplicate events. However, moving the mouse into the
 * browser from outside will not fire a `mouseout` event. In this case, we use
 * the `mouseover` top-level event.
 */function extractEvents$2(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var isOverEvent=domEventName==='mouseover'||domEventName==='pointerover';var isOutEvent=domEventName==='mouseout'||domEventName==='pointerout';if(isOverEvent&&!isReplayingEvent(nativeEvent)){// If this is an over event with a target, we might have already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
var related=nativeEvent.relatedTarget||nativeEvent.fromElement;if(related){// If the related node is managed by React, we can assume that we have
// already dispatched the corresponding events during its mouseout.
if(getClosestInstanceFromNode(related)||isContainerMarkedAsRoot(related)){return;}}}if(!isOutEvent&&!isOverEvent){// Must not be a mouse or pointer in or out - ignoring.
return;}var win;// TODO: why is this nullable in the types but we read from it?
if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else{win=window;}}var from;var to;if(isOutEvent){var _related=nativeEvent.relatedTarget||nativeEvent.toElement;from=targetInst;to=_related?getClosestInstanceFromNode(_related):null;if(to!==null){var nearestMounted=getNearestMountedFiber(to);if(to!==nearestMounted||to.tag!==HostComponent&&to.tag!==HostText){to=null;}}}else{// Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
return;}var SyntheticEventCtor=SyntheticMouseEvent;var leaveEventType='onMouseLeave';var enterEventType='onMouseEnter';var eventTypePrefix='mouse';if(domEventName==='pointerout'||domEventName==='pointerover'){SyntheticEventCtor=SyntheticPointerEvent;leaveEventType='onPointerLeave';enterEventType='onPointerEnter';eventTypePrefix='pointer';}var fromNode=from==null?win:getNodeFromInstance(from);var toNode=to==null?win:getNodeFromInstance(to);var leave=new SyntheticEventCtor(leaveEventType,eventTypePrefix+'leave',from,nativeEvent,nativeEventTarget);leave.target=fromNode;leave.relatedTarget=toNode;var enter=null;// We should only process this nativeEvent if we are processing
// the first ancestor. Next time, we will ignore the event.
var nativeTargetInst=getClosestInstanceFromNode(nativeEventTarget);if(nativeTargetInst===targetInst){var enterEvent=new SyntheticEventCtor(enterEventType,eventTypePrefix+'enter',to,nativeEvent,nativeEventTarget);enterEvent.target=toNode;enterEvent.relatedTarget=fromNode;enter=enterEvent;}accumulateEnterLeaveTwoPhaseListeners(dispatchQueue,leave,enter,from,to);}/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
;}var objectIs=typeof Object.is==='function'?Object.is:is;/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(objectIs(objA,objB)){return true;}if(_typeof(objA)!=='object'||objA===null||_typeof(objB)!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
for(var i=0;i<keysA.length;i++){var currentKey=keysA[i];if(!hasOwnProperty.call(objB,currentKey)||!objectIs(objA[currentKey],objB[currentKey])){return false;}}return true;}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===TEXT_NODE){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return{node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */function getOffsets(outerNode){var ownerDocument=outerNode.ownerDocument;var win=ownerDocument&&ownerDocument.defaultView||window;var selection=win.getSelection&&win.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode,anchorOffset=selection.anchorOffset,focusNode=selection.focusNode,focusOffset=selection.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */anchorNode.nodeType;focusNode.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}return getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode,focusOffset);}/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */function getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode,focusOffset){var length=0;var start=-1;var end=-1;var indexWithinAnchor=0;var indexWithinFocus=0;var node=outerNode;var parentNode=null;outer:while(true){var next=null;while(true){if(node===anchorNode&&(anchorOffset===0||node.nodeType===TEXT_NODE)){start=length+anchorOffset;}if(node===focusNode&&(focusOffset===0||node.nodeType===TEXT_NODE)){end=length+focusOffset;}if(node.nodeType===TEXT_NODE){length+=node.nodeValue.length;}if((next=node.firstChild)===null){break;}// Moving from `node` to its first child `next`.
parentNode=node;node=next;}while(true){if(node===outerNode){// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break outer;}if(parentNode===anchorNode&&++indexWithinAnchor===anchorOffset){start=length;}if(parentNode===focusNode&&++indexWithinFocus===focusOffset){end=length;}if((next=node.nextSibling)!==null){break;}node=parentNode;parentNode=node.parentNode;}// Moving from `node` to its next sibling `next`.
node=next;}if(start===-1||end===-1){// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;}return{start:start,end:end};}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setOffsets(node,offsets){var doc=node.ownerDocument||document;var win=doc&&doc.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(!win.getSelection){return;}var selection=win.getSelection();var length=node.textContent.length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){if(selection.rangeCount===1&&selection.anchorNode===startMarker.node&&selection.anchorOffset===startMarker.offset&&selection.focusNode===endMarker.node&&selection.focusOffset===endMarker.offset){return;}var range=doc.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else{range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}function isTextNode(node){return node&&node.nodeType===TEXT_NODE;}function containsNode(outerNode,innerNode){if(!outerNode||!innerNode){return false;}else if(outerNode===innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){return containsNode(outerNode,innerNode.parentNode);}else if('contains'in outerNode){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return!!(outerNode.compareDocumentPosition(innerNode)&16);}else{return false;}}function isInDocument(node){return node&&node.ownerDocument&&containsNode(node.ownerDocument.documentElement,node);}function isSameOriginFrame(iframe){try{// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return typeof iframe.contentWindow.location.href==='string';}catch(err){return false;}}function getActiveElementDeep(){var win=window;var element=getActiveElement();while(element instanceof win.HTMLIFrameElement){if(isSameOriginFrame(element)){win=element.contentWindow;}else{return element;}element=getActiveElement(win.document);}return element;}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */ /**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&(elem.type==='text'||elem.type==='search'||elem.type==='tel'||elem.type==='url'||elem.type==='password')||nodeName==='textarea'||elem.contentEditable==='true');}function getSelectionInformation(){var focusedElem=getActiveElementDeep();return{focusedElem:focusedElem,selectionRange:hasSelectionCapabilities(focusedElem)?getSelection(focusedElem):null};}/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElementDeep();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(priorSelectionRange!==null&&hasSelectionCapabilities(priorFocusedElem)){setSelection(priorFocusedElem,priorSelectionRange);}// Focusing a node can change the scroll position, which is undesirable
var ancestors=[];var ancestor=priorFocusedElem;while(ancestor=ancestor.parentNode){if(ancestor.nodeType===ELEMENT_NODE){ancestors.push({element:ancestor,left:ancestor.scrollLeft,top:ancestor.scrollTop});}}if(typeof priorFocusedElem.focus==='function'){priorFocusedElem.focus();}for(var i=0;i<ancestors.length;i++){var info=ancestors[i];info.element.scrollLeft=info.left;info.element.scrollTop=info.top;}}}/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */function getSelection(input){var selection;if('selectionStart'in input){// Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else{// Content editable or old IE textarea.
selection=getOffsets(input);}return selection||{start:0,end:0};}/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else{setOffsets(input,offsets);}}var skipSelectionChangeEvent=canUseDOM&&'documentMode'in document&&document.documentMode<=11;function registerEvents$3(){registerTwoPhaseEvent('onSelect',['focusout','contextmenu','dragend','focusin','keydown','keyup','mousedown','mouseup','selectionchange']);}var activeElement$1=null;var activeElementInst$1=null;var lastSelection=null;var mouseDown=false;/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 */function getSelection$1(node){if('selectionStart'in node&&hasSelectionCapabilities(node)){return{start:node.selectionStart,end:node.selectionEnd};}else{var win=node.ownerDocument&&node.ownerDocument.defaultView||window;var selection=win.getSelection();return{anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}}/**
 * Get document associated with the event target.
 */function getEventTargetDocument(eventTarget){return eventTarget.window===eventTarget?eventTarget.document:eventTarget.nodeType===DOCUMENT_NODE?eventTarget:eventTarget.ownerDocument;}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */function constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var doc=getEventTargetDocument(nativeEventTarget);if(mouseDown||activeElement$1==null||activeElement$1!==getActiveElement(doc)){return;}// Only fire when selection has actually changed.
var currentSelection=getSelection$1(activeElement$1);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var listeners=accumulateTwoPhaseListeners(activeElementInst$1,'onSelect');if(listeners.length>0){var event=new SyntheticEvent('onSelect','select',null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});event.target=activeElement$1;}}}/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */function extractEvents$3(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var targetNode=targetInst?getNodeFromInstance(targetInst):window;switch(domEventName){// Track the input node that has focus.
case'focusin':if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){activeElement$1=targetNode;activeElementInst$1=targetInst;lastSelection=null;}break;case'focusout':activeElement$1=null;activeElementInst$1=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case'mousedown':mouseDown=true;break;case'contextmenu':case'mouseup':case'dragend':mouseDown=false;constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget);break;// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case'selectionchange':if(skipSelectionChangeEvent){break;}// falls through
case'keydown':case'keyup':constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget);}}/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;return prefixes;}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={};/**
 * Element to check for prefixes on.
 */var style={};/**
 * Bootstrap if a DOM exists.
 */if(canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return eventName;}var ANIMATION_END=getVendorPrefixedEventName('animationend');var ANIMATION_ITERATION=getVendorPrefixedEventName('animationiteration');var ANIMATION_START=getVendorPrefixedEventName('animationstart');var TRANSITION_END=getVendorPrefixedEventName('transitionend');var topLevelEventsToReactNames=new Map();// NOTE: Capitalization is important in this list!
//
// E.g. it needs "pointerDown", not "pointerdown".
// This is because we derive both React name ("onPointerDown")
// and DOM name ("pointerdown") from the same list.
//
// Exceptions that don't match this convention are listed separately.
//
// prettier-ignore
var simpleEventPluginEvents=['abort','auxClick','cancel','canPlay','canPlayThrough','click','close','contextMenu','copy','cut','drag','dragEnd','dragEnter','dragExit','dragLeave','dragOver','dragStart','drop','durationChange','emptied','encrypted','ended','error','gotPointerCapture','input','invalid','keyDown','keyPress','keyUp','load','loadedData','loadedMetadata','loadStart','lostPointerCapture','mouseDown','mouseMove','mouseOut','mouseOver','mouseUp','paste','pause','play','playing','pointerCancel','pointerDown','pointerMove','pointerOut','pointerOver','pointerUp','progress','rateChange','reset','resize','seeked','seeking','stalled','submit','suspend','timeUpdate','touchCancel','touchEnd','touchStart','volumeChange','scroll','toggle','touchMove','waiting','wheel'];function registerSimpleEvent(domEventName,reactName){topLevelEventsToReactNames.set(domEventName,reactName);registerTwoPhaseEvent(reactName,[domEventName]);}function registerSimpleEvents(){for(var i=0;i<simpleEventPluginEvents.length;i++){var eventName=simpleEventPluginEvents[i];var domEventName=eventName.toLowerCase();var capitalizedEvent=eventName[0].toUpperCase()+eventName.slice(1);registerSimpleEvent(domEventName,'on'+capitalizedEvent);}// Special cases where event names don't match.
registerSimpleEvent(ANIMATION_END,'onAnimationEnd');registerSimpleEvent(ANIMATION_ITERATION,'onAnimationIteration');registerSimpleEvent(ANIMATION_START,'onAnimationStart');registerSimpleEvent('dblclick','onDoubleClick');registerSimpleEvent('focusin','onFocus');registerSimpleEvent('focusout','onBlur');registerSimpleEvent(TRANSITION_END,'onTransitionEnd');}function extractEvents$4(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var reactName=topLevelEventsToReactNames.get(domEventName);if(reactName===undefined){return;}var SyntheticEventCtor=SyntheticEvent;var reactEventType=domEventName;switch(domEventName){case'keypress':// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return;}/* falls through */case'keydown':case'keyup':SyntheticEventCtor=SyntheticKeyboardEvent;break;case'focusin':reactEventType='focus';SyntheticEventCtor=SyntheticFocusEvent;break;case'focusout':reactEventType='blur';SyntheticEventCtor=SyntheticFocusEvent;break;case'beforeblur':case'afterblur':SyntheticEventCtor=SyntheticFocusEvent;break;case'click':// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return;}/* falls through */case'auxclick':case'dblclick':case'mousedown':case'mousemove':case'mouseup':// TODO: Disabled elements should not respond to mouse events
/* falls through */case'mouseout':case'mouseover':case'contextmenu':SyntheticEventCtor=SyntheticMouseEvent;break;case'drag':case'dragend':case'dragenter':case'dragexit':case'dragleave':case'dragover':case'dragstart':case'drop':SyntheticEventCtor=SyntheticDragEvent;break;case'touchcancel':case'touchend':case'touchmove':case'touchstart':SyntheticEventCtor=SyntheticTouchEvent;break;case ANIMATION_END:case ANIMATION_ITERATION:case ANIMATION_START:SyntheticEventCtor=SyntheticAnimationEvent;break;case TRANSITION_END:SyntheticEventCtor=SyntheticTransitionEvent;break;case'scroll':SyntheticEventCtor=SyntheticUIEvent;break;case'wheel':SyntheticEventCtor=SyntheticWheelEvent;break;case'copy':case'cut':case'paste':SyntheticEventCtor=SyntheticClipboardEvent;break;case'gotpointercapture':case'lostpointercapture':case'pointercancel':case'pointerdown':case'pointermove':case'pointerout':case'pointerover':case'pointerup':SyntheticEventCtor=SyntheticPointerEvent;break;}var inCapturePhase=(eventSystemFlags&IS_CAPTURE_PHASE)!==0;{// Some events don't bubble in the browser.
// In the past, React has always bubbled them, but this can be surprising.
// We're going to try aligning closer to the browser behavior by not bubbling
// them in React either. We'll start by not bubbling onScroll, and then expand.
var accumulateTargetOnly=!inCapturePhase&&// TODO: ideally, we'd eventually add all events from
// nonDelegatedEvents list in DOMPluginEventSystem.
// Then we can remove this special list.
// This is a breaking change that can wait until React 18.
domEventName==='scroll';var _listeners=accumulateSinglePhaseListeners(targetInst,reactName,nativeEvent.type,inCapturePhase,accumulateTargetOnly);if(_listeners.length>0){// Intentionally create event lazily.
var _event=new SyntheticEventCtor(reactName,reactEventType,null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:_event,listeners:_listeners});}}}// TODO: remove top-level side effect.
registerSimpleEvents();registerEvents$2();registerEvents$1();registerEvents$3();registerEvents();function extractEvents$5(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){// TODO: we should remove the concept of a "SimpleEventPlugin".
// This is the basic functionality of the event system. All
// the other plugins are essentially polyfills. So the plugin
// should probably be inlined somewhere and have its logic
// be core the to event system. This would potentially allow
// us to ship builds of React without the polyfilled plugins below.
extractEvents$4(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags);var shouldProcessPolyfillPlugins=(eventSystemFlags&SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS)===0;// We don't process these events unless we are in the
// event's native "bubble" phase, which means that we're
// not in the capture phase. That's because we emulate
// the capture phase here still. This is a trade-off,
// because in an ideal world we would not emulate and use
// the phases properly, like we do with the SimpleEvent
// plugin. However, the plugins below either expect
// emulation (EnterLeave) or use state localized to that
// plugin (BeforeInput, Change, Select). The state in
// these modules complicates things, as you'll essentially
// get the case where the capture phase event might change
// state, only for the following bubble event to come in
// later and not trigger anything as the state now
// invalidates the heuristics of the event plugin. We
// could alter all these plugins to work in such ways, but
// that might cause other unknown side-effects that we
// can't foresee right now.
if(shouldProcessPolyfillPlugins){extractEvents$2(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractEvents$1(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractEvents$3(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractEvents(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);}}// List of events that need to be individually attached to media elements.
var mediaEventTypes=['abort','canplay','canplaythrough','durationchange','emptied','encrypted','ended','error','loadeddata','loadedmetadata','loadstart','pause','play','playing','progress','ratechange','resize','seeked','seeking','stalled','suspend','timeupdate','volumechange','waiting'];// We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.
var nonDelegatedEvents=new Set(['cancel','close','invalid','load','scroll','toggle'].concat(mediaEventTypes));function executeDispatch(event,listener,currentTarget){var type=event.type||'unknown-event';event.currentTarget=currentTarget;invokeGuardedCallbackAndCatchFirstError(type,listener,undefined,event);event.currentTarget=null;}function processDispatchQueueItemsInOrder(event,dispatchListeners,inCapturePhase){var previousInstance;if(inCapturePhase){for(var i=dispatchListeners.length-1;i>=0;i--){var _dispatchListeners$i=dispatchListeners[i],instance=_dispatchListeners$i.instance,currentTarget=_dispatchListeners$i.currentTarget,listener=_dispatchListeners$i.listener;if(instance!==previousInstance&&event.isPropagationStopped()){return;}executeDispatch(event,listener,currentTarget);previousInstance=instance;}}else{for(var _i=0;_i<dispatchListeners.length;_i++){var _dispatchListeners$_i=dispatchListeners[_i],_instance=_dispatchListeners$_i.instance,_currentTarget=_dispatchListeners$_i.currentTarget,_listener=_dispatchListeners$_i.listener;if(_instance!==previousInstance&&event.isPropagationStopped()){return;}executeDispatch(event,_listener,_currentTarget);previousInstance=_instance;}}}function processDispatchQueue(dispatchQueue,eventSystemFlags){var inCapturePhase=(eventSystemFlags&IS_CAPTURE_PHASE)!==0;for(var i=0;i<dispatchQueue.length;i++){var _dispatchQueue$i=dispatchQueue[i],event=_dispatchQueue$i.event,listeners=_dispatchQueue$i.listeners;processDispatchQueueItemsInOrder(event,listeners,inCapturePhase);//  event system doesn't use pooling.
}// This would be a good time to rethrow if any of the event handlers threw.
rethrowCaughtError();}function dispatchEventsForPlugins(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer){var nativeEventTarget=getEventTarget(nativeEvent);var dispatchQueue=[];extractEvents$5(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags);processDispatchQueue(dispatchQueue,eventSystemFlags);}function listenToNonDelegatedEvent(domEventName,targetElement){{if(!nonDelegatedEvents.has(domEventName)){error('Did not expect a listenToNonDelegatedEvent() call for "%s". '+'This is a bug in React. Please file an issue.',domEventName);}}var isCapturePhaseListener=false;var listenerSet=getEventListenerSet(targetElement);var listenerSetKey=getListenerSetKey(domEventName,isCapturePhaseListener);if(!listenerSet.has(listenerSetKey)){addTrappedEventListener(targetElement,domEventName,IS_NON_DELEGATED,isCapturePhaseListener);listenerSet.add(listenerSetKey);}}function listenToNativeEvent(domEventName,isCapturePhaseListener,target){{if(nonDelegatedEvents.has(domEventName)&&!isCapturePhaseListener){error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. '+'This is a bug in React. Please file an issue.',domEventName);}}var eventSystemFlags=0;if(isCapturePhaseListener){eventSystemFlags|=IS_CAPTURE_PHASE;}addTrappedEventListener(target,domEventName,eventSystemFlags,isCapturePhaseListener);}// This is only used by createEventHandle when the
var listeningMarker='_reactListening'+Math.random().toString(36).slice(2);function listenToAllSupportedEvents(rootContainerElement){if(!rootContainerElement[listeningMarker]){rootContainerElement[listeningMarker]=true;allNativeEvents.forEach(function(domEventName){// We handle selectionchange separately because it
// doesn't bubble and needs to be on the document.
if(domEventName!=='selectionchange'){if(!nonDelegatedEvents.has(domEventName)){listenToNativeEvent(domEventName,false,rootContainerElement);}listenToNativeEvent(domEventName,true,rootContainerElement);}});var ownerDocument=rootContainerElement.nodeType===DOCUMENT_NODE?rootContainerElement:rootContainerElement.ownerDocument;if(ownerDocument!==null){// The selectionchange event also needs deduplication
// but it is attached to the document.
if(!ownerDocument[listeningMarker]){ownerDocument[listeningMarker]=true;listenToNativeEvent('selectionchange',false,ownerDocument);}}}}function addTrappedEventListener(targetContainer,domEventName,eventSystemFlags,isCapturePhaseListener,isDeferredListenerForLegacyFBSupport){var listener=createEventListenerWrapperWithPriority(targetContainer,domEventName,eventSystemFlags);// If passive option is not supported, then the event will be
// active and not passive.
var isPassiveListener=undefined;if(passiveBrowserEventsSupported){// Browsers introduced an intervention, making these events
// passive by default on document. React doesn't bind them
// to document anymore, but changing this now would undo
// the performance wins from the change. So we emulate
// the existing behavior manually on the roots now.
// https://github.com/facebook/react/issues/19651
if(domEventName==='touchstart'||domEventName==='touchmove'||domEventName==='wheel'){isPassiveListener=true;}}targetContainer=targetContainer;var unsubscribeListener;// When legacyFBSupport is enabled, it's for when we
if(isCapturePhaseListener){if(isPassiveListener!==undefined){unsubscribeListener=addEventCaptureListenerWithPassiveFlag(targetContainer,domEventName,listener,isPassiveListener);}else{unsubscribeListener=addEventCaptureListener(targetContainer,domEventName,listener);}}else{if(isPassiveListener!==undefined){unsubscribeListener=addEventBubbleListenerWithPassiveFlag(targetContainer,domEventName,listener,isPassiveListener);}else{unsubscribeListener=addEventBubbleListener(targetContainer,domEventName,listener);}}}function isMatchingRootContainer(grandContainer,targetContainer){return grandContainer===targetContainer||grandContainer.nodeType===COMMENT_NODE&&grandContainer.parentNode===targetContainer;}function dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer){var ancestorInst=targetInst;if((eventSystemFlags&IS_EVENT_HANDLE_NON_MANAGED_NODE)===0&&(eventSystemFlags&IS_NON_DELEGATED)===0){var targetContainerNode=targetContainer;// If we are using the legacy FB support flag, we
if(targetInst!==null){// The below logic attempts to work out if we need to change
// the target fiber to a different ancestor. We had similar logic
// in the legacy event system, except the big difference between
// systems is that the modern event system now has an event listener
// attached to each React Root and React Portal Root. Together,
// the DOM nodes representing these roots are the "rootContainer".
// To figure out which ancestor instance we should use, we traverse
// up the fiber tree from the target instance and attempt to find
// root boundaries that match that of our current "rootContainer".
// If we find that "rootContainer", we find the parent fiber
// sub-tree for that root and make that our ancestor instance.
var node=targetInst;mainLoop:while(true){if(node===null){return;}var nodeTag=node.tag;if(nodeTag===HostRoot||nodeTag===HostPortal){var container=node.stateNode.containerInfo;if(isMatchingRootContainer(container,targetContainerNode)){break;}if(nodeTag===HostPortal){// The target is a portal, but it's not the rootContainer we're looking for.
// Normally portals handle their own events all the way down to the root.
// So we should be able to stop now. However, we don't know if this portal
// was part of *our* root.
var grandNode=node["return"];while(grandNode!==null){var grandTag=grandNode.tag;if(grandTag===HostRoot||grandTag===HostPortal){var grandContainer=grandNode.stateNode.containerInfo;if(isMatchingRootContainer(grandContainer,targetContainerNode)){// This is the rootContainer we're looking for and we found it as
// a parent of the Portal. That means we can ignore it because the
// Portal will bubble through to us.
return;}}grandNode=grandNode["return"];}}// Now we need to find it's corresponding host fiber in the other
// tree. To do this we can use getClosestInstanceFromNode, but we
// need to validate that the fiber is a host instance, otherwise
// we need to traverse up through the DOM till we find the correct
// node that is from the other tree.
while(container!==null){var parentNode=getClosestInstanceFromNode(container);if(parentNode===null){return;}var parentTag=parentNode.tag;if(parentTag===HostComponent||parentTag===HostText){node=ancestorInst=parentNode;continue mainLoop;}container=container.parentNode;}}node=node["return"];}}}batchedUpdates(function(){return dispatchEventsForPlugins(domEventName,eventSystemFlags,nativeEvent,ancestorInst);});}function createDispatchListener(instance,listener,currentTarget){return{instance:instance,listener:listener,currentTarget:currentTarget};}function accumulateSinglePhaseListeners(targetFiber,reactName,nativeEventType,inCapturePhase,accumulateTargetOnly,nativeEvent){var captureName=reactName!==null?reactName+'Capture':null;var reactEventName=inCapturePhase?captureName:reactName;var listeners=[];var instance=targetFiber;var lastHostComponent=null;// Accumulate all instances and listeners via the target -> root path.
while(instance!==null){var _instance2=instance,stateNode=_instance2.stateNode,tag=_instance2.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(tag===HostComponent&&stateNode!==null){lastHostComponent=stateNode;// createEventHandle listeners
if(reactEventName!==null){var listener=getListener(instance,reactEventName);if(listener!=null){listeners.push(createDispatchListener(instance,listener,lastHostComponent));}}}// If we are only accumulating events for the target, then we don't
// continue to propagate through the React fiber tree to find other
// listeners.
if(accumulateTargetOnly){break;}// If we are processing the onBeforeBlur event, then we need to take
instance=instance["return"];}return listeners;}// We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).
function accumulateTwoPhaseListeners(targetFiber,reactName){var captureName=reactName+'Capture';var listeners=[];var instance=targetFiber;// Accumulate all instances and listeners via the target -> root path.
while(instance!==null){var _instance3=instance,stateNode=_instance3.stateNode,tag=_instance3.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(tag===HostComponent&&stateNode!==null){var currentTarget=stateNode;var captureListener=getListener(instance,captureName);if(captureListener!=null){listeners.unshift(createDispatchListener(instance,captureListener,currentTarget));}var bubbleListener=getListener(instance,reactName);if(bubbleListener!=null){listeners.push(createDispatchListener(instance,bubbleListener,currentTarget));}}instance=instance["return"];}return listeners;}function getParent(inst){if(inst===null){return null;}do{inst=inst["return"];// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(inst&&inst.tag!==HostComponent);if(inst){return inst;}return null;}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){var nodeA=instA;var nodeB=instB;var depthA=0;for(var tempA=nodeA;tempA;tempA=getParent(tempA)){depthA++;}var depthB=0;for(var tempB=nodeB;tempB;tempB=getParent(tempB)){depthB++;}// If A is deeper, crawl up.
while(depthA-depthB>0){nodeA=getParent(nodeA);depthA--;}// If B is deeper, crawl up.
while(depthB-depthA>0){nodeB=getParent(nodeB);depthB--;}// Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(nodeA===nodeB||nodeB!==null&&nodeA===nodeB.alternate){return nodeA;}nodeA=getParent(nodeA);nodeB=getParent(nodeB);}return null;}function accumulateEnterLeaveListenersForEvent(dispatchQueue,event,target,common,inCapturePhase){var registrationName=event._reactName;var listeners=[];var instance=target;while(instance!==null){if(instance===common){break;}var _instance4=instance,alternate=_instance4.alternate,stateNode=_instance4.stateNode,tag=_instance4.tag;if(alternate!==null&&alternate===common){break;}if(tag===HostComponent&&stateNode!==null){var currentTarget=stateNode;if(inCapturePhase){var captureListener=getListener(instance,registrationName);if(captureListener!=null){listeners.unshift(createDispatchListener(instance,captureListener,currentTarget));}}else if(!inCapturePhase){var bubbleListener=getListener(instance,registrationName);if(bubbleListener!=null){listeners.push(createDispatchListener(instance,bubbleListener,currentTarget));}}}instance=instance["return"];}if(listeners.length!==0){dispatchQueue.push({event:event,listeners:listeners});}}// We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate two
// phase event listeners.
function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue,leaveEvent,enterEvent,from,to){var common=from&&to?getLowestCommonAncestor(from,to):null;if(from!==null){accumulateEnterLeaveListenersForEvent(dispatchQueue,leaveEvent,from,common,false);}if(to!==null&&enterEvent!==null){accumulateEnterLeaveListenersForEvent(dispatchQueue,enterEvent,to,common,true);}}function getListenerSetKey(domEventName,capture){return domEventName+"__"+(capture?'capture':'bubble');}var didWarnInvalidHydration=false;var DANGEROUSLY_SET_INNER_HTML='dangerouslySetInnerHTML';var SUPPRESS_CONTENT_EDITABLE_WARNING='suppressContentEditableWarning';var SUPPRESS_HYDRATION_WARNING='suppressHydrationWarning';var AUTOFOCUS='autoFocus';var CHILDREN='children';var STYLE='style';var HTML$1='__html';var warnedUnknownTags;var validatePropertiesInDevelopment;var warnForPropDifference;var warnForExtraAttributes;var warnForInvalidEventListener;var canDiffStyleForHydrationWarning;var normalizeHTML;{warnedUnknownTags={// There are working polyfills for <dialog>. Let people use it.
dialog:true,// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:true};validatePropertiesInDevelopment=function validatePropertiesInDevelopment(type,props){validateProperties(type,props);validateProperties$1(type,props);validateProperties$2(type,props,{registrationNameDependencies:registrationNameDependencies,possibleRegistrationNames:possibleRegistrationNames});};// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
canDiffStyleForHydrationWarning=canUseDOM&&!document.documentMode;warnForPropDifference=function warnForPropDifference(propName,serverValue,clientValue){if(didWarnInvalidHydration){return;}var normalizedClientValue=normalizeMarkupForTextOrAttribute(clientValue);var normalizedServerValue=normalizeMarkupForTextOrAttribute(serverValue);if(normalizedServerValue===normalizedClientValue){return;}didWarnInvalidHydration=true;error('Prop `%s` did not match. Server: %s Client: %s',propName,JSON.stringify(normalizedServerValue),JSON.stringify(normalizedClientValue));};warnForExtraAttributes=function warnForExtraAttributes(attributeNames){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;var names=[];attributeNames.forEach(function(name){names.push(name);});error('Extra attributes from the server: %s',names);};warnForInvalidEventListener=function warnForInvalidEventListener(registrationName,listener){if(listener===false){error('Expected `%s` listener to be a function, instead got `false`.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.',registrationName,registrationName,registrationName);}else{error('Expected `%s` listener to be a function, instead got a value of `%s` type.',registrationName,_typeof(listener));}};// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
normalizeHTML=function normalizeHTML(parent,html){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var testElement=parent.namespaceURI===HTML_NAMESPACE?parent.ownerDocument.createElement(parent.tagName):parent.ownerDocument.createElementNS(parent.namespaceURI,parent.tagName);testElement.innerHTML=html;return testElement.innerHTML;};}// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var NORMALIZE_NEWLINES_REGEX=/\r\n?/g;var NORMALIZE_NULL_AND_REPLACEMENT_REGEX=/\u0000|\uFFFD/g;function normalizeMarkupForTextOrAttribute(markup){{checkHtmlStringCoercion(markup);}var markupString=typeof markup==='string'?markup:''+markup;return markupString.replace(NORMALIZE_NEWLINES_REGEX,'\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX,'');}function checkForUnmatchedText(serverText,clientText,isConcurrentMode,shouldWarnDev){var normalizedClientText=normalizeMarkupForTextOrAttribute(clientText);var normalizedServerText=normalizeMarkupForTextOrAttribute(serverText);if(normalizedServerText===normalizedClientText){return;}if(shouldWarnDev){{if(!didWarnInvalidHydration){didWarnInvalidHydration=true;error('Text content did not match. Server: "%s" Client: "%s"',normalizedServerText,normalizedClientText);}}}if(isConcurrentMode&&enableClientRenderFallbackOnTextMismatch){// In concurrent roots, we throw when there's a text mismatch and revert to
// client rendering, up to the nearest Suspense boundary.
throw new Error('Text content does not match server-rendered HTML.');}}function getOwnerDocumentFromRootContainer(rootContainerElement){return rootContainerElement.nodeType===DOCUMENT_NODE?rootContainerElement:rootContainerElement.ownerDocument;}function noop(){}function trapClickOnNonInteractiveElement(node){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
node.onclick=noop;}function setInitialDOMProperties(tag,domElement,rootContainerElement,nextProps,isCustomComponentTag){for(var propKey in nextProps){if(!nextProps.hasOwnProperty(propKey)){continue;}var nextProp=nextProps[propKey];if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(domElement,nextProp);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML$1]:undefined;if(nextHtml!=null){setInnerHTML(domElement,nextHtml);}}else if(propKey===CHILDREN){if(typeof nextProp==='string'){// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var canSetTextContent=tag!=='textarea'||nextProp!=='';if(canSetTextContent){setTextContent(domElement,nextProp);}}else if(typeof nextProp==='number'){setTextContent(domElement,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(propKey===AUTOFOCUS);else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}}else if(nextProp!=null){setValueForProperty(domElement,propKey,nextProp,isCustomComponentTag);}}}function updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag){// TODO: Handle wasCustomComponentTag
for(var i=0;i<updatePayload.length;i+=2){var propKey=updatePayload[i];var propValue=updatePayload[i+1];if(propKey===STYLE){setValueForStyles(domElement,propValue);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){setInnerHTML(domElement,propValue);}else if(propKey===CHILDREN){setTextContent(domElement,propValue);}else{setValueForProperty(domElement,propKey,propValue,isCustomComponentTag);}}}function createElement(type,props,rootContainerElement,parentNamespace){var isCustomComponentTag;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var ownerDocument=getOwnerDocumentFromRootContainer(rootContainerElement);var domElement;var namespaceURI=parentNamespace;if(namespaceURI===HTML_NAMESPACE){namespaceURI=getIntrinsicNamespace(type);}if(namespaceURI===HTML_NAMESPACE){{isCustomComponentTag=isCustomComponent(type,props);// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
if(!isCustomComponentTag&&type!==type.toLowerCase()){error('<%s /> is using incorrect casing. '+'Use PascalCase for React components, '+'or lowercase for HTML elements.',type);}}if(type==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');div.innerHTML='<script><'+'/script>';// eslint-disable-line
// This is guaranteed to yield a script element.
var firstChild=div.firstChild;domElement=div.removeChild(firstChild);}else if(typeof props.is==='string'){// $FlowIssue `createElement` should be updated for Web Components
domElement=ownerDocument.createElement(type,{is:props.is});}else{// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
domElement=ownerDocument.createElement(type);// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(type==='select'){var node=domElement;if(props.multiple){node.multiple=true;}else if(props.size){// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
//
// This is only necessary when a select in "single selection mode".
node.size=props.size;}}}}else{domElement=ownerDocument.createElementNS(namespaceURI,type);}{if(namespaceURI===HTML_NAMESPACE){if(!isCustomComponentTag&&Object.prototype.toString.call(domElement)==='[object HTMLUnknownElement]'&&!hasOwnProperty.call(warnedUnknownTags,type)){warnedUnknownTags[type]=true;error('The tag <%s> is unrecognized in this browser. '+'If you meant to render a React component, start its name with '+'an uppercase letter.',type);}}}return domElement;}function createTextNode(text,rootContainerElement){return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);}function setInitialProperties(domElement,tag,rawProps,rootContainerElement){var isCustomComponentTag=isCustomComponent(tag,rawProps);{validatePropertiesInDevelopment(tag,rawProps);}// TODO: Make sure that we check isMounted before firing any of these events.
var props;switch(tag){case'dialog':listenToNonDelegatedEvent('cancel',domElement);listenToNonDelegatedEvent('close',domElement);props=rawProps;break;case'iframe':case'object':case'embed':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent('load',domElement);props=rawProps;break;case'video':case'audio':// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var i=0;i<mediaEventTypes.length;i++){listenToNonDelegatedEvent(mediaEventTypes[i],domElement);}props=rawProps;break;case'source':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent('error',domElement);props=rawProps;break;case'img':case'image':case'link':// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent('error',domElement);listenToNonDelegatedEvent('load',domElement);props=rawProps;break;case'details':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent('toggle',domElement);props=rawProps;break;case'input':initWrapperState(domElement,rawProps);props=getHostProps(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'option':validateProps(domElement,rawProps);props=rawProps;break;case'select':initWrapperState$1(domElement,rawProps);props=getHostProps$1(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'textarea':initWrapperState$2(domElement,rawProps);props=getHostProps$2(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;default:props=rawProps;}assertValidProps(tag,props);setInitialDOMProperties(tag,domElement,rootContainerElement,props,isCustomComponentTag);switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps,false);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement);break;case'option':postMountWrapper$1(domElement,rawProps);break;case'select':postMountWrapper$2(domElement,rawProps);break;default:if(typeof props.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}}// Calculate the diff between the two objects.
function diffProperties(domElement,tag,lastRawProps,nextRawProps,rootContainerElement){{validatePropertiesInDevelopment(tag,nextRawProps);}var updatePayload=null;var lastProps;var nextProps;switch(tag){case'input':lastProps=getHostProps(domElement,lastRawProps);nextProps=getHostProps(domElement,nextRawProps);updatePayload=[];break;case'select':lastProps=getHostProps$1(domElement,lastRawProps);nextProps=getHostProps$1(domElement,nextRawProps);updatePayload=[];break;case'textarea':lastProps=getHostProps$2(domElement,lastRawProps);nextProps=getHostProps$2(domElement,nextRawProps);updatePayload=[];break;default:lastProps=lastRawProps;nextProps=nextRawProps;if(typeof lastProps.onClick!=='function'&&typeof nextProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}assertValidProps(tag,nextProps);var propKey;var styleName;var styleUpdates=null;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN);else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(propKey===AUTOFOCUS);else if(registrationNameDependencies.hasOwnProperty(propKey)){// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
if(!updatePayload){updatePayload=[];}}else{// For all other deleted properties we add it to the queue. We use
// the allowed property list in the commit phase instead.
(updatePayload=updatePayload||[]).push(propKey,null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
if(!styleUpdates){if(!updatePayload){updatePayload=[];}updatePayload.push(propKey,styleUpdates);}styleUpdates=nextProp;}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML$1]:undefined;var lastHtml=lastProp?lastProp[HTML$1]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,nextHtml);}}}else if(propKey===CHILDREN){if(typeof nextProp==='string'||typeof nextProp==='number'){(updatePayload=updatePayload||[]).push(propKey,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){// We eagerly listen to this even though we haven't committed yet.
if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}if(!updatePayload&&lastProp!==nextProp){// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
updatePayload=[];}}else{// For any other property we always add it to the queue and then we
// filter it out using the allowed property list during the commit.
(updatePayload=updatePayload||[]).push(propKey,nextProp);}}if(styleUpdates){{validateShorthandPropertyCollisionInDev(styleUpdates,nextProps[STYLE]);}(updatePayload=updatePayload||[]).push(STYLE,styleUpdates);}return updatePayload;}// Apply the diff.
function updateProperties(domElement,updatePayload,tag,lastRawProps,nextRawProps){// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
if(tag==='input'&&nextRawProps.type==='radio'&&nextRawProps.name!=null){updateChecked(domElement,nextRawProps);}var wasCustomComponentTag=isCustomComponent(tag,lastRawProps);var isCustomComponentTag=isCustomComponent(tag,nextRawProps);// Apply the diff.
updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(domElement,nextRawProps);break;case'textarea':updateWrapper$1(domElement,nextRawProps);break;case'select':// <select> value update needs to occur after <option> children
// reconciliation
postUpdateWrapper(domElement,nextRawProps);break;}}function getPossibleStandardName(propName){{var lowerCasedName=propName.toLowerCase();if(!possibleStandardNames.hasOwnProperty(lowerCasedName)){return null;}return possibleStandardNames[lowerCasedName]||null;}}function diffHydratedProperties(domElement,tag,rawProps,parentNamespace,rootContainerElement,isConcurrentMode,shouldWarnDev){var isCustomComponentTag;var extraAttributeNames;{isCustomComponentTag=isCustomComponent(tag,rawProps);validatePropertiesInDevelopment(tag,rawProps);}// TODO: Make sure that we check isMounted before firing any of these events.
switch(tag){case'dialog':listenToNonDelegatedEvent('cancel',domElement);listenToNonDelegatedEvent('close',domElement);break;case'iframe':case'object':case'embed':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent('load',domElement);break;case'video':case'audio':// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var i=0;i<mediaEventTypes.length;i++){listenToNonDelegatedEvent(mediaEventTypes[i],domElement);}break;case'source':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent('error',domElement);break;case'img':case'image':case'link':// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent('error',domElement);listenToNonDelegatedEvent('load',domElement);break;case'details':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent('toggle',domElement);break;case'input':initWrapperState(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'option':validateProps(domElement,rawProps);break;case'select':initWrapperState$1(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'textarea':initWrapperState$2(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;}assertValidProps(tag,rawProps);{extraAttributeNames=new Set();var attributes=domElement.attributes;for(var _i=0;_i<attributes.length;_i++){var name=attributes[_i].name.toLowerCase();switch(name){// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case'value':break;case'checked':break;case'selected':break;default:// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
extraAttributeNames.add(attributes[_i].name);}}}var updatePayload=null;for(var propKey in rawProps){if(!rawProps.hasOwnProperty(propKey)){continue;}var nextProp=rawProps[propKey];if(propKey===CHILDREN){// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
if(typeof nextProp==='string'){if(domElement.textContent!==nextProp){if(rawProps[SUPPRESS_HYDRATION_WARNING]!==true){checkForUnmatchedText(domElement.textContent,nextProp,isConcurrentMode,shouldWarnDev);}updatePayload=[CHILDREN,nextProp];}}else if(typeof nextProp==='number'){if(domElement.textContent!==''+nextProp){if(rawProps[SUPPRESS_HYDRATION_WARNING]!==true){checkForUnmatchedText(domElement.textContent,nextProp,isConcurrentMode,shouldWarnDev);}updatePayload=[CHILDREN,''+nextProp];}}}else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}}else if(shouldWarnDev&&true&&// Convince Flow we've calculated it (it's DEV-only in this method.)
typeof isCustomComponentTag==='boolean'){// Validate that the properties correspond to their expected values.
var serverValue=void 0;var propertyInfo=isCustomComponentTag&&enableCustomElementPropertySupport?null:getPropertyInfo(propKey);if(rawProps[SUPPRESS_HYDRATION_WARNING]===true);else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
propKey==='value'||propKey==='checked'||propKey==='selected');else if(propKey===DANGEROUSLY_SET_INNER_HTML){var serverHTML=domElement.innerHTML;var nextHtml=nextProp?nextProp[HTML$1]:undefined;if(nextHtml!=null){var expectedHTML=normalizeHTML(domElement,nextHtml);if(expectedHTML!==serverHTML){warnForPropDifference(propKey,serverHTML,expectedHTML);}}}else if(propKey===STYLE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey);if(canDiffStyleForHydrationWarning){var expectedStyle=createDangerousStringForStyles(nextProp);serverValue=domElement.getAttribute('style');if(expectedStyle!==serverValue){warnForPropDifference(propKey,serverValue,expectedStyle);}}}else if(isCustomComponentTag&&!enableCustomElementPropertySupport){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey.toLowerCase());serverValue=getValueForAttribute(domElement,propKey,nextProp);if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}else if(!shouldIgnoreAttribute(propKey,propertyInfo,isCustomComponentTag)&&!shouldRemoveAttribute(propKey,nextProp,propertyInfo,isCustomComponentTag)){var isMismatchDueToBadCasing=false;if(propertyInfo!==null){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propertyInfo.attributeName);serverValue=getValueForProperty(domElement,propKey,nextProp,propertyInfo);}else{var ownNamespace=parentNamespace;if(ownNamespace===HTML_NAMESPACE){ownNamespace=getIntrinsicNamespace(tag);}if(ownNamespace===HTML_NAMESPACE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey.toLowerCase());}else{var standardName=getPossibleStandardName(propKey);if(standardName!==null&&standardName!==propKey){// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
isMismatchDueToBadCasing=true;// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](standardName);}// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey);}serverValue=getValueForAttribute(domElement,propKey,nextProp);}var dontWarnCustomElement=enableCustomElementPropertySupport;if(!dontWarnCustomElement&&nextProp!==serverValue&&!isMismatchDueToBadCasing){warnForPropDifference(propKey,serverValue,nextProp);}}}}{if(shouldWarnDev){if(// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames.size>0&&rawProps[SUPPRESS_HYDRATION_WARNING]!==true){// $FlowFixMe - Should be inferred as not undefined.
warnForExtraAttributes(extraAttributeNames);}}}switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps,true);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement);break;case'select':case'option':// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:if(typeof rawProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}return updatePayload;}function diffHydratedText(textNode,text,isConcurrentMode){var isDifferent=textNode.nodeValue!==text;return isDifferent;}function warnForDeletedHydratableElement(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Did not expect server HTML to contain a <%s> in <%s>.',child.nodeName.toLowerCase(),parentNode.nodeName.toLowerCase());}}function warnForDeletedHydratableText(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Did not expect server HTML to contain the text node "%s" in <%s>.',child.nodeValue,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedElement(parentNode,tag,props){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Expected server HTML to contain a matching <%s> in <%s>.',tag,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedText(parentNode,text){{if(text===''){// We expect to insert empty text nodes since they're not represented in
// the HTML.
// TODO: Remove this special case if we can just avoid inserting empty
// text nodes.
return;}if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Expected server HTML to contain a matching text node for "%s" in <%s>.',text,parentNode.nodeName.toLowerCase());}}function restoreControlledState$3(domElement,tag,props){switch(tag){case'input':restoreControlledState(domElement,props);return;case'textarea':restoreControlledState$2(domElement,props);return;case'select':restoreControlledState$1(domElement,props);return;}}var validateDOMNesting=function validateDOMNesting(){};var updatedAncestorInfo=function updatedAncestorInfo(){};{// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};updatedAncestorInfo=function updatedAncestorInfo(oldInfo,tag){var ancestorInfo=assign({},oldInfo||emptyAncestorInfo);var info={tag:tag};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
   * Returns whether
   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case'html':return tag==='head'||tag==='body'||tag==='frameset';case'frameset':return tag==='frame';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frameset':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;};/**
   * Returns whether
   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};var didWarn$1={};validateDOMNesting=function validateDOMNesting(childTag,childText,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){if(childTag!=null){error('validateDOMNesting: when childText is passed, childTag should be null');}childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var invalidParentOrAncestor=invalidParent||invalidAncestor;if(!invalidParentOrAncestor){return;}var ancestorTag=invalidParentOrAncestor.tag;var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag;if(didWarn$1[warnKey]){return;}didWarn$1[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else{tagDisplayName='Whitespace text nodes';whitespaceInfo=" Make sure you don't have any extra whitespace between tags on "+'each line of your source code.';}}else{tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by '+'the browser.';}error('validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',tagDisplayName,ancestorTag,whitespaceInfo,info);}else{error('validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>.',tagDisplayName,ancestorTag);}};}var SUPPRESS_HYDRATION_WARNING$1='suppressHydrationWarning';var SUSPENSE_START_DATA='$';var SUSPENSE_END_DATA='/$';var SUSPENSE_PENDING_START_DATA='$?';var SUSPENSE_FALLBACK_START_DATA='$!';var STYLE$1='style';var eventsEnabled=null;var selectionInformation=null;function getRootHostContext(rootContainerInstance){var type;var namespace;var nodeType=rootContainerInstance.nodeType;switch(nodeType){case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:{type=nodeType===DOCUMENT_NODE?'#document':'#fragment';var root=rootContainerInstance.documentElement;namespace=root?root.namespaceURI:getChildNamespace(null,'');break;}default:{var container=nodeType===COMMENT_NODE?rootContainerInstance.parentNode:rootContainerInstance;var ownNamespace=container.namespaceURI||null;type=container.tagName;namespace=getChildNamespace(ownNamespace,type);break;}}{var validatedTag=type.toLowerCase();var ancestorInfo=updatedAncestorInfo(null,validatedTag);return{namespace:namespace,ancestorInfo:ancestorInfo};}}function getChildHostContext(parentHostContext,type,rootContainerInstance){{var parentHostContextDev=parentHostContext;var namespace=getChildNamespace(parentHostContextDev.namespace,type);var ancestorInfo=updatedAncestorInfo(parentHostContextDev.ancestorInfo,type);return{namespace:namespace,ancestorInfo:ancestorInfo};}}function getPublicInstance(instance){return instance;}function prepareForCommit(containerInfo){eventsEnabled=isEnabled();selectionInformation=getSelectionInformation();var activeInstance=null;setEnabled(false);return activeInstance;}function resetAfterCommit(containerInfo){restoreSelection(selectionInformation);setEnabled(eventsEnabled);eventsEnabled=null;selectionInformation=null;}function createInstance(type,props,rootContainerInstance,hostContext,internalInstanceHandle){var parentNamespace;{// TODO: take namespace into account when validating.
var hostContextDev=hostContext;validateDOMNesting(type,null,hostContextDev.ancestorInfo);if(typeof props.children==='string'||typeof props.children==='number'){var string=''+props.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type);validateDOMNesting(null,string,ownAncestorInfo);}parentNamespace=hostContextDev.namespace;}var domElement=createElement(type,props,rootContainerInstance,parentNamespace);precacheFiberNode(internalInstanceHandle,domElement);updateFiberProps(domElement,props);return domElement;}function appendInitialChild(parentInstance,child){parentInstance.appendChild(child);}function finalizeInitialChildren(domElement,type,props,rootContainerInstance,hostContext){setInitialProperties(domElement,type,props,rootContainerInstance);switch(type){case'button':case'input':case'select':case'textarea':return!!props.autoFocus;case'img':return true;default:return false;}}function prepareUpdate(domElement,type,oldProps,newProps,rootContainerInstance,hostContext){{var hostContextDev=hostContext;if(_typeof(newProps.children)!==_typeof(oldProps.children)&&(typeof newProps.children==='string'||typeof newProps.children==='number')){var string=''+newProps.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type);validateDOMNesting(null,string,ownAncestorInfo);}}return diffProperties(domElement,type,oldProps,newProps);}function shouldSetTextContent(type,props){return type==='textarea'||type==='noscript'||typeof props.children==='string'||typeof props.children==='number'||_typeof(props.dangerouslySetInnerHTML)==='object'&&props.dangerouslySetInnerHTML!==null&&props.dangerouslySetInnerHTML.__html!=null;}function createTextInstance(text,rootContainerInstance,hostContext,internalInstanceHandle){{var hostContextDev=hostContext;validateDOMNesting(null,text,hostContextDev.ancestorInfo);}var textNode=createTextNode(text,rootContainerInstance);precacheFiberNode(internalInstanceHandle,textNode);return textNode;}function getCurrentEventPriority(){var currentEvent=window.event;if(currentEvent===undefined){return DefaultEventPriority;}return getEventPriority(currentEvent.type);}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var scheduleTimeout=typeof setTimeout==='function'?setTimeout:undefined;var cancelTimeout=typeof clearTimeout==='function'?clearTimeout:undefined;var noTimeout=-1;var localPromise=typeof Promise==='function'?Promise:undefined;// -------------------
var scheduleMicrotask=typeof queueMicrotask==='function'?queueMicrotask:typeof localPromise!=='undefined'?function(callback){return localPromise.resolve(null).then(callback)["catch"](handleErrorInNextTick);}:scheduleTimeout;// TODO: Determine the best fallback here.
function handleErrorInNextTick(error){setTimeout(function(){throw error;});}// -------------------
function commitMount(domElement,type,newProps,internalInstanceHandle){// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
switch(type){case'button':case'input':case'select':case'textarea':if(newProps.autoFocus){domElement.focus();}return;case'img':{if(newProps.src){domElement.src=newProps.src;}return;}}}function commitUpdate(domElement,updatePayload,type,oldProps,newProps,internalInstanceHandle){// Apply the diff to the DOM node.
updateProperties(domElement,updatePayload,type,oldProps,newProps);// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(domElement,newProps);}function resetTextContent(domElement){setTextContent(domElement,'');}function commitTextUpdate(textInstance,oldText,newText){textInstance.nodeValue=newText;}function appendChild(parentInstance,child){parentInstance.appendChild(child);}function appendChildToContainer(container,child){var parentNode;if(container.nodeType===COMMENT_NODE){parentNode=container.parentNode;parentNode.insertBefore(child,container);}else{parentNode=container;parentNode.appendChild(child);}// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var reactRootContainer=container._reactRootContainer;if((reactRootContainer===null||reactRootContainer===undefined)&&parentNode.onclick===null){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(parentNode);}}function insertBefore(parentInstance,child,beforeChild){parentInstance.insertBefore(child,beforeChild);}function insertInContainerBefore(container,child,beforeChild){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,beforeChild);}else{container.insertBefore(child,beforeChild);}}function removeChild(parentInstance,child){parentInstance.removeChild(child);}function removeChildFromContainer(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.removeChild(child);}else{container.removeChild(child);}}function clearSuspenseBoundary(parentInstance,suspenseInstance){var node=suspenseInstance;// Delete all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
var depth=0;do{var nextNode=node.nextSibling;parentInstance.removeChild(node);if(nextNode&&nextNode.nodeType===COMMENT_NODE){var data=nextNode.data;if(data===SUSPENSE_END_DATA){if(depth===0){parentInstance.removeChild(nextNode);// Retry if any event replaying was blocked on this.
retryIfBlockedOn(suspenseInstance);return;}else{depth--;}}else if(data===SUSPENSE_START_DATA||data===SUSPENSE_PENDING_START_DATA||data===SUSPENSE_FALLBACK_START_DATA){depth++;}}node=nextNode;}while(node);// TODO: Warn, we didn't find the end comment boundary.
// Retry if any event replaying was blocked on this.
retryIfBlockedOn(suspenseInstance);}function clearSuspenseBoundaryFromContainer(container,suspenseInstance){if(container.nodeType===COMMENT_NODE){clearSuspenseBoundary(container.parentNode,suspenseInstance);}else if(container.nodeType===ELEMENT_NODE){clearSuspenseBoundary(container,suspenseInstance);}// Retry if any event replaying was blocked on this.
retryIfBlockedOn(container);}function hideInstance(instance){// TODO: Does this work for all element types? What about MathML? Should we
// pass host context to this method?
instance=instance;var style=instance.style;if(typeof style.setProperty==='function'){style.setProperty('display','none','important');}else{style.display='none';}}function hideTextInstance(textInstance){textInstance.nodeValue='';}function unhideInstance(instance,props){instance=instance;var styleProp=props[STYLE$1];var display=styleProp!==undefined&&styleProp!==null&&styleProp.hasOwnProperty('display')?styleProp.display:null;instance.style.display=dangerousStyleValue('display',display);}function unhideTextInstance(textInstance,text){textInstance.nodeValue=text;}function clearContainer(container){if(container.nodeType===ELEMENT_NODE){container.textContent='';}else if(container.nodeType===DOCUMENT_NODE){var body=container.body;if(body!=null){body.textContent='';}}}// -------------------
function canHydrateInstance(instance,type,props){if(instance.nodeType!==ELEMENT_NODE||type.toLowerCase()!==instance.nodeName.toLowerCase()){return null;}// This has now been refined to an element node.
return instance;}function canHydrateTextInstance(instance,text){if(text===''||instance.nodeType!==TEXT_NODE){// Empty strings are not parsed by HTML so there won't be a correct match here.
return null;}// This has now been refined to a text node.
return instance;}function canHydrateSuspenseInstance(instance){if(instance.nodeType!==COMMENT_NODE){// Empty strings are not parsed by HTML so there won't be a correct match here.
return null;}// This has now been refined to a suspense node.
return instance;}function isSuspenseInstancePending(instance){return instance.data===SUSPENSE_PENDING_START_DATA;}function isSuspenseInstanceFallback(instance){return instance.data===SUSPENSE_FALLBACK_START_DATA;}function registerSuspenseInstanceRetry(instance,callback){instance._reactRetry=callback;}function getNextHydratable(node){// Skip non-hydratable nodes.
for(;node!=null;node=node.nextSibling){var nodeType=node.nodeType;if(nodeType===ELEMENT_NODE||nodeType===TEXT_NODE){break;}if(nodeType===COMMENT_NODE){var nodeData=node.data;if(nodeData===SUSPENSE_START_DATA||nodeData===SUSPENSE_FALLBACK_START_DATA||nodeData===SUSPENSE_PENDING_START_DATA){break;}if(nodeData===SUSPENSE_END_DATA){return null;}}}return node;}function getNextHydratableSibling(instance){return getNextHydratable(instance.nextSibling);}function getFirstHydratableChild(parentInstance){return getNextHydratable(parentInstance.firstChild);}function getFirstHydratableChildWithinContainer(parentContainer){return getNextHydratable(parentContainer.firstChild);}function getFirstHydratableChildWithinSuspenseInstance(parentInstance){return getNextHydratable(parentInstance.nextSibling);}function hydrateInstance(instance,type,props,rootContainerInstance,hostContext,internalInstanceHandle,shouldWarnDev){precacheFiberNode(internalInstanceHandle,instance);// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(instance,props);var parentNamespace;{var hostContextDev=hostContext;parentNamespace=hostContextDev.namespace;}// TODO: Temporary hack to check if we're in a concurrent root. We can delete
// when the legacy root API is removed.
var isConcurrentMode=(internalInstanceHandle.mode&ConcurrentMode)!==NoMode;return diffHydratedProperties(instance,type,props,parentNamespace,rootContainerInstance,isConcurrentMode,shouldWarnDev);}function hydrateTextInstance(textInstance,text,internalInstanceHandle,shouldWarnDev){precacheFiberNode(internalInstanceHandle,textInstance);// TODO: Temporary hack to check if we're in a concurrent root. We can delete
// when the legacy root API is removed.
var isConcurrentMode=(internalInstanceHandle.mode&ConcurrentMode)!==NoMode;return diffHydratedText(textInstance,text);}function hydrateSuspenseInstance(suspenseInstance,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,suspenseInstance);}function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance){var node=suspenseInstance.nextSibling;// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
var depth=0;while(node){if(node.nodeType===COMMENT_NODE){var data=node.data;if(data===SUSPENSE_END_DATA){if(depth===0){return getNextHydratableSibling(node);}else{depth--;}}else if(data===SUSPENSE_START_DATA||data===SUSPENSE_FALLBACK_START_DATA||data===SUSPENSE_PENDING_START_DATA){depth++;}}node=node.nextSibling;}// TODO: Warn, we didn't find the end comment boundary.
return null;}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function getParentSuspenseInstance(targetInstance){var node=targetInstance.previousSibling;// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
var depth=0;while(node){if(node.nodeType===COMMENT_NODE){var data=node.data;if(data===SUSPENSE_START_DATA||data===SUSPENSE_FALLBACK_START_DATA||data===SUSPENSE_PENDING_START_DATA){if(depth===0){return node;}else{depth--;}}else if(data===SUSPENSE_END_DATA){depth++;}}node=node.previousSibling;}return null;}function commitHydratedContainer(container){// Retry if any event replaying was blocked on this.
retryIfBlockedOn(container);}function commitHydratedSuspenseInstance(suspenseInstance){// Retry if any event replaying was blocked on this.
retryIfBlockedOn(suspenseInstance);}function shouldDeleteUnhydratedTailInstances(parentType){return parentType!=='head'&&parentType!=='body';}function didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,text,isConcurrentMode){var shouldWarnDev=true;checkForUnmatchedText(textInstance.nodeValue,text,isConcurrentMode,shouldWarnDev);}function didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,text,isConcurrentMode){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){var shouldWarnDev=true;checkForUnmatchedText(textInstance.nodeValue,text,isConcurrentMode,shouldWarnDev);}}function didNotHydrateInstanceWithinContainer(parentContainer,instance){{if(instance.nodeType===ELEMENT_NODE){warnForDeletedHydratableElement(parentContainer,instance);}else if(instance.nodeType===COMMENT_NODE);else{warnForDeletedHydratableText(parentContainer,instance);}}}function didNotHydrateInstanceWithinSuspenseInstance(parentInstance,instance){{// $FlowFixMe: Only Element or Document can be parent nodes.
var parentNode=parentInstance.parentNode;if(parentNode!==null){if(instance.nodeType===ELEMENT_NODE){warnForDeletedHydratableElement(parentNode,instance);}else if(instance.nodeType===COMMENT_NODE);else{warnForDeletedHydratableText(parentNode,instance);}}}}function didNotHydrateInstance(parentType,parentProps,parentInstance,instance,isConcurrentMode){{if(isConcurrentMode||parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){if(instance.nodeType===ELEMENT_NODE){warnForDeletedHydratableElement(parentInstance,instance);}else if(instance.nodeType===COMMENT_NODE);else{warnForDeletedHydratableText(parentInstance,instance);}}}}function didNotFindHydratableInstanceWithinContainer(parentContainer,type,props){{warnForInsertedHydratedElement(parentContainer,type);}}function didNotFindHydratableTextInstanceWithinContainer(parentContainer,text){{warnForInsertedHydratedText(parentContainer,text);}}function didNotFindHydratableInstanceWithinSuspenseInstance(parentInstance,type,props){{// $FlowFixMe: Only Element or Document can be parent nodes.
var parentNode=parentInstance.parentNode;if(parentNode!==null)warnForInsertedHydratedElement(parentNode,type);}}function didNotFindHydratableTextInstanceWithinSuspenseInstance(parentInstance,text){{// $FlowFixMe: Only Element or Document can be parent nodes.
var parentNode=parentInstance.parentNode;if(parentNode!==null)warnForInsertedHydratedText(parentNode,text);}}function didNotFindHydratableInstance(parentType,parentProps,parentInstance,type,props,isConcurrentMode){{if(isConcurrentMode||parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){warnForInsertedHydratedElement(parentInstance,type);}}}function didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,text,isConcurrentMode){{if(isConcurrentMode||parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){warnForInsertedHydratedText(parentInstance,text);}}}function errorHydratingContainer(parentContainer){{// TODO: This gets logged by onRecoverableError, too, so we should be
// able to remove it.
error('An error occurred during hydration. The server HTML was replaced with client content in <%s>.',parentContainer.nodeName.toLowerCase());}}function preparePortalMount(portalInstance){listenToAllSupportedEvents(portalInstance);}var randomKey=Math.random().toString(36).slice(2);var internalInstanceKey='__reactFiber$'+randomKey;var internalPropsKey='__reactProps$'+randomKey;var internalContainerInstanceKey='__reactContainer$'+randomKey;var internalEventHandlersKey='__reactEvents$'+randomKey;var internalEventHandlerListenersKey='__reactListeners$'+randomKey;var internalEventHandlesSetKey='__reactHandles$'+randomKey;function detachDeletedInstance(node){// TODO: This function is only called on host components. I don't think all of
// these fields are relevant.
delete node[internalInstanceKey];delete node[internalPropsKey];delete node[internalEventHandlersKey];delete node[internalEventHandlerListenersKey];delete node[internalEventHandlesSetKey];}function precacheFiberNode(hostInst,node){node[internalInstanceKey]=hostInst;}function markContainerAsRoot(hostRoot,node){node[internalContainerInstanceKey]=hostRoot;}function unmarkContainerAsRoot(node){node[internalContainerInstanceKey]=null;}function isContainerMarkedAsRoot(node){return!!node[internalContainerInstanceKey];}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function getClosestInstanceFromNode(targetNode){var targetInst=targetNode[internalInstanceKey];if(targetInst){// Don't return HostRoot or SuspenseComponent here.
return targetInst;}// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
var parentNode=targetNode.parentNode;while(parentNode){// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
targetInst=parentNode[internalContainerInstanceKey]||parentNode[internalInstanceKey];if(targetInst){// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var alternate=targetInst.alternate;if(targetInst.child!==null||alternate!==null&&alternate.child!==null){// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var suspenseInstance=getParentSuspenseInstance(targetNode);while(suspenseInstance!==null){// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var targetSuspenseInst=suspenseInstance[internalInstanceKey];if(targetSuspenseInst){return targetSuspenseInst;}// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
suspenseInstance=getParentSuspenseInstance(suspenseInstance);// If we don't find one, then that should mean that the parent
// host component also hasn't hydrated yet. We can return it
// below since it will bail out on the isMounted check later.
}}return targetInst;}targetNode=parentNode;parentNode=targetNode.parentNode;}return null;}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode(node){var inst=node[internalInstanceKey]||node[internalContainerInstanceKey];if(inst){if(inst.tag===HostComponent||inst.tag===HostText||inst.tag===SuspenseComponent||inst.tag===HostRoot){return inst;}else{return null;}}return null;}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance(inst){if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return inst.stateNode;}// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw new Error('getNodeFromInstance: Invalid argument.');}function getFiberCurrentPropsFromNode(node){return node[internalPropsKey]||null;}function updateFiberProps(node,props){node[internalPropsKey]=props;}function getEventListenerSet(node){var elementListenerSet=node[internalEventHandlersKey];if(elementListenerSet===undefined){elementListenerSet=node[internalEventHandlersKey]=new Set();}return elementListenerSet;}var loggedTypeFailures={};var ReactDebugCurrentFrame$1=ReactSharedInternals.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(element){{if(element){var owner=element._owner;var stack=describeUnknownElementTypeFrameInDEV(element.type,element._source,owner?owner.type:null);ReactDebugCurrentFrame$1.setExtraStackFrame(stack);}else{ReactDebugCurrentFrame$1.setExtraStackFrame(null);}}}function checkPropTypes(typeSpecs,values,location,componentName,element){{// $FlowFixMe This is okay but Flow doesn't know it.
var has=Function.call.bind(hasOwnProperty);for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error$1=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if(typeof typeSpecs[typeSpecName]!=='function'){// eslint-disable-next-line react-internal/prod-error-codes
var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+_typeof(typeSpecs[typeSpecName])+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}error$1=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');}catch(ex){error$1=ex;}if(error$1&&!(error$1 instanceof Error)){setCurrentlyValidatingElement(element);error('%s: type specification of %s'+' `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',location,typeSpecName,_typeof(error$1));setCurrentlyValidatingElement(null);}if(error$1 instanceof Error&&!(error$1.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error$1.message]=true;setCurrentlyValidatingElement(element);error('Failed %s type: %s',location,error$1.message);setCurrentlyValidatingElement(null);}}}}}var valueStack=[];var fiberStack;{fiberStack=[];}var index=-1;function createCursor(defaultValue){return{current:defaultValue};}function pop(cursor,fiber){if(index<0){{error('Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){error('Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;}function push(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;}var warnedAboutMissingGetChildContext;{warnedAboutMissingGetChildContext={};}var emptyContextObject={};{Object.freeze(emptyContextObject);}// A cursor to the current merged context object on the stack.
var contextStackCursor=createCursor(emptyContextObject);// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext=emptyContextObject;function getUnmaskedContext(workInProgress,Component,didPushOwnContextIfProvider){{if(didPushOwnContextIfProvider&&isContextProvider(Component)){// If the fiber is a context provider itself, when we read its context
// we may have already pushed its own child context on the stack. A context
// provider should not "see" its own child context. Therefore we read the
// previous (parent) context instead for a context provider.
return previousContext;}return contextStackCursor.current;}}function cacheContext(workInProgress,unmaskedContext,maskedContext){{var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}}function getMaskedContext(workInProgress,unmaskedContext){{var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyContextObject;}// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentNameFromFiber(workInProgress)||'Unknown';checkPropTypes(contextTypes,context,'context',name);}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;}}function hasContextChanged(){{return didPerformWorkStackCursor.current;}}function isContextProvider(type){{var childContextTypes=type.childContextTypes;return childContextTypes!==null&&childContextTypes!==undefined;}}function popContext(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function popTopLevelContextObject(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function pushTopLevelContextObject(fiber,context,didChange){{if(contextStackCursor.current!==emptyContextObject){throw new Error('Unexpected context found on stack. '+'This error is likely caused by a bug in React. Please file an issue.');}push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);}}function processChildContext(fiber,type,parentContext){{var instance=fiber.stateNode;var childContextTypes=type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if(typeof instance.getChildContext!=='function'){{var componentName=getComponentNameFromFiber(fiber)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;error('%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=instance.getChildContext();for(var contextKey in childContext){if(!(contextKey in childContextTypes)){throw new Error((getComponentNameFromFiber(fiber)||'Unknown')+".getChildContext(): key \""+contextKey+"\" is not defined in childContextTypes.");}}{var name=getComponentNameFromFiber(fiber)||'Unknown';checkPropTypes(childContextTypes,childContext,'child context',name);}return assign({},parentContext,childContext);}}function pushContextProvider(workInProgress){{var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyContextObject;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;}}function invalidateContextProvider(workInProgress,type,didChange){{var instance=workInProgress.stateNode;if(!instance){throw new Error('Expected to have an instance by this point. '+'This error is likely caused by a bug in React. Please file an issue.');}if(didChange){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var mergedContext=processChildContext(workInProgress,type,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else{pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}}}function findCurrentUnmaskedContext(fiber){{// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!isFiberMounted(fiber)||fiber.tag!==ClassComponent){throw new Error('Expected subtree parent to be a mounted class component. '+'This error is likely caused by a bug in React. Please file an issue.');}var node=fiber;do{switch(node.tag){case HostRoot:return node.stateNode.context;case ClassComponent:{var Component=node.type;if(isContextProvider(Component)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}break;}}node=node["return"];}while(node!==null);throw new Error('Found unexpected detached subtree parent. '+'This error is likely caused by a bug in React. Please file an issue.');}}var LegacyRoot=0;var ConcurrentRoot=1;var syncQueue=null;var includesLegacySyncCallbacks=false;var isFlushingSyncQueue=false;function scheduleSyncCallback(callback){// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
if(syncQueue===null){syncQueue=[callback];}else{// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
syncQueue.push(callback);}}function scheduleLegacySyncCallback(callback){includesLegacySyncCallbacks=true;scheduleSyncCallback(callback);}function flushSyncCallbacksOnlyInLegacyMode(){// Only flushes the queue if there's a legacy sync callback scheduled.
// TODO: There's only a single type of callback: performSyncOnWorkOnRoot. So
// it might make more sense for the queue to be a list of roots instead of a
// list of generic callbacks. Then we can have two: one for legacy roots, one
// for concurrent roots. And this method would only flush the legacy ones.
if(includesLegacySyncCallbacks){flushSyncCallbacks();}}function flushSyncCallbacks(){if(!isFlushingSyncQueue&&syncQueue!==null){// Prevent re-entrance.
isFlushingSyncQueue=true;var i=0;var previousUpdatePriority=getCurrentUpdatePriority();try{var isSync=true;var queue=syncQueue;// TODO: Is this necessary anymore? The only user code that runs in this
// queue is in the render or commit phases.
setCurrentUpdatePriority(DiscreteEventPriority);for(;i<queue.length;i++){var callback=queue[i];do{callback=callback(isSync);}while(callback!==null);}syncQueue=null;includesLegacySyncCallbacks=false;}catch(error){// If something throws, leave the remaining callbacks on the queue.
if(syncQueue!==null){syncQueue=syncQueue.slice(i+1);}// Resume flushing in the next tick
scheduleCallback(ImmediatePriority,flushSyncCallbacks);throw error;}finally{setCurrentUpdatePriority(previousUpdatePriority);isFlushingSyncQueue=false;}}return null;}var ReactCurrentBatchConfig$1=ReactSharedInternals.ReactCurrentBatchConfig;var NoTransition=null;function requestCurrentTransition(){return ReactCurrentBatchConfig$1.transition;}var ReactStrictModeWarnings={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(fiber,instance){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(fiber,instance){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}};{var findStrictRoot=function findStrictRoot(fiber){var maybeStrictRoot=null;var node=fiber;while(node!==null){if(node.mode&StrictLegacyMode){maybeStrictRoot=node;}node=node["return"];}return maybeStrictRoot;};var setToSortedString=function setToSortedString(set){var array=[];set.forEach(function(value){array.push(value);});return array.sort().join(', ');};var pendingComponentWillMountWarnings=[];var pendingUNSAFE_ComponentWillMountWarnings=[];var pendingComponentWillReceivePropsWarnings=[];var pendingUNSAFE_ComponentWillReceivePropsWarnings=[];var pendingComponentWillUpdateWarnings=[];var pendingUNSAFE_ComponentWillUpdateWarnings=[];// Tracks components we have already warned about.
var didWarnAboutUnsafeLifecycles=new Set();ReactStrictModeWarnings.recordUnsafeLifecycleWarnings=function(fiber,instance){// Dedupe strategy: Warn once per component.
if(didWarnAboutUnsafeLifecycles.has(fiber.type)){return;}if(typeof instance.componentWillMount==='function'&&// Don't warn about react-lifecycles-compat polyfilled components.
instance.componentWillMount.__suppressDeprecationWarning!==true){pendingComponentWillMountWarnings.push(fiber);}if(fiber.mode&StrictLegacyMode&&typeof instance.UNSAFE_componentWillMount==='function'){pendingUNSAFE_ComponentWillMountWarnings.push(fiber);}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){pendingComponentWillReceivePropsWarnings.push(fiber);}if(fiber.mode&StrictLegacyMode&&typeof instance.UNSAFE_componentWillReceiveProps==='function'){pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){pendingComponentWillUpdateWarnings.push(fiber);}if(fiber.mode&StrictLegacyMode&&typeof instance.UNSAFE_componentWillUpdate==='function'){pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);}};ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
var componentWillMountUniqueNames=new Set();if(pendingComponentWillMountWarnings.length>0){pendingComponentWillMountWarnings.forEach(function(fiber){componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillMountWarnings=[];}var UNSAFE_componentWillMountUniqueNames=new Set();if(pendingUNSAFE_ComponentWillMountWarnings.length>0){pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber){UNSAFE_componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillMountWarnings=[];}var componentWillReceivePropsUniqueNames=new Set();if(pendingComponentWillReceivePropsWarnings.length>0){pendingComponentWillReceivePropsWarnings.forEach(function(fiber){componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillReceivePropsWarnings=[];}var UNSAFE_componentWillReceivePropsUniqueNames=new Set();if(pendingUNSAFE_ComponentWillReceivePropsWarnings.length>0){pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber){UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillReceivePropsWarnings=[];}var componentWillUpdateUniqueNames=new Set();if(pendingComponentWillUpdateWarnings.length>0){pendingComponentWillUpdateWarnings.forEach(function(fiber){componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillUpdateWarnings=[];}var UNSAFE_componentWillUpdateUniqueNames=new Set();if(pendingUNSAFE_ComponentWillUpdateWarnings.length>0){pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber){UNSAFE_componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillUpdateWarnings=[];}// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
if(UNSAFE_componentWillMountUniqueNames.size>0){var sortedNames=setToSortedString(UNSAFE_componentWillMountUniqueNames);error('Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'\nPlease update the following components: %s',sortedNames);}if(UNSAFE_componentWillReceivePropsUniqueNames.size>0){var _sortedNames=setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);error('Using UNSAFE_componentWillReceiveProps in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, "+'refactor your code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'\nPlease update the following components: %s',_sortedNames);}if(UNSAFE_componentWillUpdateUniqueNames.size>0){var _sortedNames2=setToSortedString(UNSAFE_componentWillUpdateUniqueNames);error('Using UNSAFE_componentWillUpdate in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'\nPlease update the following components: %s',_sortedNames2);}if(componentWillMountUniqueNames.size>0){var _sortedNames3=setToSortedString(componentWillMountUniqueNames);warn('componentWillMount has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'* Rename componentWillMount to UNSAFE_componentWillMount to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames3);}if(componentWillReceivePropsUniqueNames.size>0){var _sortedNames4=setToSortedString(componentWillReceivePropsUniqueNames);warn('componentWillReceiveProps has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, refactor your "+'code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames4);}if(componentWillUpdateUniqueNames.size>0){var _sortedNames5=setToSortedString(componentWillUpdateUniqueNames);warn('componentWillUpdate has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames5);}};var pendingLegacyContextWarning=new Map();// Tracks components we have already warned about.
var didWarnAboutLegacyContext=new Set();ReactStrictModeWarnings.recordLegacyContextWarning=function(fiber,instance){var strictRoot=findStrictRoot(fiber);if(strictRoot===null){error('Expected to find a StrictMode component in a strict mode tree. '+'This error is likely caused by a bug in React. Please file an issue.');return;}// Dedup strategy: Warn once per component.
if(didWarnAboutLegacyContext.has(fiber.type)){return;}var warningsForRoot=pendingLegacyContextWarning.get(strictRoot);if(fiber.type.contextTypes!=null||fiber.type.childContextTypes!=null||instance!==null&&typeof instance.getChildContext==='function'){if(warningsForRoot===undefined){warningsForRoot=[];pendingLegacyContextWarning.set(strictRoot,warningsForRoot);}warningsForRoot.push(fiber);}};ReactStrictModeWarnings.flushLegacyContextWarning=function(){pendingLegacyContextWarning.forEach(function(fiberArray,strictRoot){if(fiberArray.length===0){return;}var firstFiber=fiberArray[0];var uniqueNames=new Set();fiberArray.forEach(function(fiber){uniqueNames.add(getComponentNameFromFiber(fiber)||'Component');didWarnAboutLegacyContext.add(fiber.type);});var sortedNames=setToSortedString(uniqueNames);try{setCurrentFiber(firstFiber);error('Legacy context API has been detected within a strict-mode tree.'+'\n\nThe old API will be supported in all 16.x releases, but applications '+'using it should migrate to the new version.'+'\n\nPlease update the following components: %s'+'\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context',sortedNames);}finally{resetCurrentFiber();}});};ReactStrictModeWarnings.discardPendingWarnings=function(){pendingComponentWillMountWarnings=[];pendingUNSAFE_ComponentWillMountWarnings=[];pendingComponentWillReceivePropsWarnings=[];pendingUNSAFE_ComponentWillReceivePropsWarnings=[];pendingComponentWillUpdateWarnings=[];pendingUNSAFE_ComponentWillUpdateWarnings=[];pendingLegacyContextWarning=new Map();};}function resolveDefaultProps(Component,baseProps){if(Component&&Component.defaultProps){// Resolve default props. Taken from ReactElement
var props=assign({},baseProps);var defaultProps=Component.defaultProps;for(var propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}return props;}return baseProps;}var valueCursor=createCursor(null);var rendererSigil;{// Use this to detect multiple renderers using the same context
rendererSigil={};}var currentlyRenderingFiber=null;var lastContextDependency=null;var lastFullyObservedContext=null;var isDisallowedContextReadInDEV=false;function resetContextDependencies(){// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
currentlyRenderingFiber=null;lastContextDependency=null;lastFullyObservedContext=null;{isDisallowedContextReadInDEV=false;}}function enterDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=true;}}function exitDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=false;}}function pushProvider(providerFiber,context,nextValue){{push(valueCursor,context._currentValue,providerFiber);context._currentValue=nextValue;{if(context._currentRenderer!==undefined&&context._currentRenderer!==null&&context._currentRenderer!==rendererSigil){error('Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.');}context._currentRenderer=rendererSigil;}}}function popProvider(context,providerFiber){var currentValue=valueCursor.current;pop(valueCursor,providerFiber);{{context._currentValue=currentValue;}}}function scheduleContextWorkOnParentPath(parent,renderLanes,propagationRoot){// Update the child lanes of all the ancestors, including the alternates.
var node=parent;while(node!==null){var alternate=node.alternate;if(!isSubsetOfLanes(node.childLanes,renderLanes)){node.childLanes=mergeLanes(node.childLanes,renderLanes);if(alternate!==null){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}}else if(alternate!==null&&!isSubsetOfLanes(alternate.childLanes,renderLanes)){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}if(node===propagationRoot){break;}node=node["return"];}{if(node!==propagationRoot){error('Expected to find the propagation root when scheduling context work. '+'This error is likely caused by a bug in React. Please file an issue.');}}}function propagateContextChange(workInProgress,context,renderLanes){{propagateContextChange_eager(workInProgress,context,renderLanes);}}function propagateContextChange_eager(workInProgress,context,renderLanes){var fiber=workInProgress.child;if(fiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
fiber["return"]=workInProgress;}while(fiber!==null){var nextFiber=void 0;// Visit this fiber.
var list=fiber.dependencies;if(list!==null){nextFiber=fiber.child;var dependency=list.firstContext;while(dependency!==null){// Check if the context matches.
if(dependency.context===context){// Match! Schedule an update on this fiber.
if(fiber.tag===ClassComponent){// Schedule a force update on the work-in-progress.
var lane=pickArbitraryLane(renderLanes);var update=createUpdate(NoTimestamp,lane);update.tag=ForceUpdate;// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
// Inlined `enqueueUpdate` to remove interleaved update check
var updateQueue=fiber.updateQueue;if(updateQueue===null);else{var sharedQueue=updateQueue.shared;var pending=sharedQueue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else{update.next=pending.next;pending.next=update;}sharedQueue.pending=update;}}fiber.lanes=mergeLanes(fiber.lanes,renderLanes);var alternate=fiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,renderLanes);}scheduleContextWorkOnParentPath(fiber["return"],renderLanes,workInProgress);// Mark the updated lanes on the list, too.
list.lanes=mergeLanes(list.lanes,renderLanes);// Since we already found a match, we can stop traversing the
// dependency list.
break;}dependency=dependency.next;}}else if(fiber.tag===ContextProvider){// Don't scan deeper if this is a matching provider
nextFiber=fiber.type===workInProgress.type?null:fiber.child;}else if(fiber.tag===DehydratedFragment){// If a dehydrated suspense boundary is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates.
var parentSuspense=fiber["return"];if(parentSuspense===null){throw new Error('We just came from a parent so we must have had a parent. This is a bug in React.');}parentSuspense.lanes=mergeLanes(parentSuspense.lanes,renderLanes);var _alternate=parentSuspense.alternate;if(_alternate!==null){_alternate.lanes=mergeLanes(_alternate.lanes,renderLanes);}// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childLanes on
// this fiber to indicate that a context has changed.
scheduleContextWorkOnParentPath(parentSuspense,renderLanes,workInProgress);nextFiber=fiber.sibling;}else{// Traverse down.
nextFiber=fiber.child;}if(nextFiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
nextFiber["return"]=fiber;}else{// No child. Traverse to next sibling.
nextFiber=fiber;while(nextFiber!==null){if(nextFiber===workInProgress){// We're back to the root of this subtree. Exit.
nextFiber=null;break;}var sibling=nextFiber.sibling;if(sibling!==null){// Set the return pointer of the sibling to the work-in-progress fiber.
sibling["return"]=nextFiber["return"];nextFiber=sibling;break;}// No more siblings. Traverse up.
nextFiber=nextFiber["return"];}}fiber=nextFiber;}}function prepareToReadContext(workInProgress,renderLanes){currentlyRenderingFiber=workInProgress;lastContextDependency=null;lastFullyObservedContext=null;var dependencies=workInProgress.dependencies;if(dependencies!==null){{var firstContext=dependencies.firstContext;if(firstContext!==null){if(includesSomeLane(dependencies.lanes,renderLanes)){// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate();}// Reset the work-in-progress list
dependencies.firstContext=null;}}}}function _readContext(context){{// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
if(isDisallowedContextReadInDEV){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');}}var value=context._currentValue;if(lastFullyObservedContext===context);else{var contextItem={context:context,memoizedValue:value,next:null};if(lastContextDependency===null){if(currentlyRenderingFiber===null){throw new Error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');}// This is the first dependency for this component. Create a new list.
lastContextDependency=contextItem;currentlyRenderingFiber.dependencies={lanes:NoLanes,firstContext:contextItem};}else{// Append a new context item.
lastContextDependency=lastContextDependency.next=contextItem;}}return value;}// An array of all update queues that received updates during the current
// render. When this render exits, either because it finishes or because it is
// interrupted, the interleaved updates will be transferred onto the main part
// of the queue.
var interleavedQueues=null;function pushInterleavedQueue(queue){if(interleavedQueues===null){interleavedQueues=[queue];}else{interleavedQueues.push(queue);}}function hasInterleavedUpdates(){return interleavedQueues!==null;}function enqueueInterleavedUpdates(){// Transfer the interleaved updates onto the main queue. Each queue has a
// `pending` field and an `interleaved` field. When they are not null, they
// point to the last node in a circular linked list. We need to append the
// interleaved list to the end of the pending list by joining them into a
// single, circular list.
if(interleavedQueues!==null){for(var i=0;i<interleavedQueues.length;i++){var queue=interleavedQueues[i];var lastInterleavedUpdate=queue.interleaved;if(lastInterleavedUpdate!==null){queue.interleaved=null;var firstInterleavedUpdate=lastInterleavedUpdate.next;var lastPendingUpdate=queue.pending;if(lastPendingUpdate!==null){var firstPendingUpdate=lastPendingUpdate.next;lastPendingUpdate.next=firstInterleavedUpdate;lastInterleavedUpdate.next=firstPendingUpdate;}queue.pending=lastInterleavedUpdate;}}interleavedQueues=null;}}var UpdateState=0;var ReplaceState=1;var ForceUpdate=2;var CaptureUpdate=3;// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate=false;var didWarnUpdateInsideUpdate;var currentlyProcessingQueue;{didWarnUpdateInsideUpdate=false;currentlyProcessingQueue=null;}function initializeUpdateQueue(fiber){var queue={baseState:fiber.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:NoLanes},effects:null};fiber.updateQueue=queue;}function cloneUpdateQueue(current,workInProgress){// Clone the update queue from current. Unless it's already a clone.
var queue=workInProgress.updateQueue;var currentQueue=current.updateQueue;if(queue===currentQueue){var clone={baseState:currentQueue.baseState,firstBaseUpdate:currentQueue.firstBaseUpdate,lastBaseUpdate:currentQueue.lastBaseUpdate,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=clone;}}function createUpdate(eventTime,lane){var update={eventTime:eventTime,lane:lane,tag:UpdateState,payload:null,callback:null,next:null};return update;}function enqueueUpdate(fiber,update,lane){var updateQueue=fiber.updateQueue;if(updateQueue===null){// Only occurs if the fiber has been unmounted.
return;}var sharedQueue=updateQueue.shared;if(isInterleavedUpdate(fiber)){var interleaved=sharedQueue.interleaved;if(interleaved===null){// This is the first update. Create a circular list.
update.next=update;// At the end of the current render, this queue's interleaved updates will
// be transferred to the pending queue.
pushInterleavedQueue(sharedQueue);}else{update.next=interleaved.next;interleaved.next=update;}sharedQueue.interleaved=update;}else{var pending=sharedQueue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else{update.next=pending.next;pending.next=update;}sharedQueue.pending=update;}{if(currentlyProcessingQueue===sharedQueue&&!didWarnUpdateInsideUpdate){error('An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');didWarnUpdateInsideUpdate=true;}}}function entangleTransitions(root,fiber,lane){var updateQueue=fiber.updateQueue;if(updateQueue===null){// Only occurs if the fiber has been unmounted.
return;}var sharedQueue=updateQueue.shared;if(isTransitionLane(lane)){var queueLanes=sharedQueue.lanes;// If any entangled lanes are no longer pending on the root, then they must
// have finished. We can remove them from the shared queue, which represents
// a superset of the actually pending lanes. In some cases we may entangle
// more than we need to, but that's OK. In fact it's worse if we *don't*
// entangle when we should.
queueLanes=intersectLanes(queueLanes,root.pendingLanes);// Entangle the new transition lane with the other transition lanes.
var newQueueLanes=mergeLanes(queueLanes,lane);sharedQueue.lanes=newQueueLanes;// Even if queue.lanes already include lane, we don't know for certain if
// the lane finished since the last time we entangled it. So we need to
// entangle it again, just to be sure.
markRootEntangled(root,newQueueLanes);}}function enqueueCapturedUpdate(workInProgress,capturedUpdate){// Captured updates are updates that are thrown by a child during the render
// phase. They should be discarded if the render is aborted. Therefore,
// we should only put them on the work-in-progress queue, not the current one.
var queue=workInProgress.updateQueue;// Check if the work-in-progress queue is a clone.
var current=workInProgress.alternate;if(current!==null){var currentQueue=current.updateQueue;if(queue===currentQueue){// The work-in-progress queue is the same as current. This happens when
// we bail out on a parent fiber that then captures an error thrown by
// a child. Since we want to append the update only to the work-in
// -progress queue, we need to clone the updates. We usually clone during
// processUpdateQueue, but that didn't happen in this case because we
// skipped over the parent when we bailed out.
var newFirst=null;var newLast=null;var firstBaseUpdate=queue.firstBaseUpdate;if(firstBaseUpdate!==null){// Loop through the updates and clone them.
var update=firstBaseUpdate;do{var clone={eventTime:update.eventTime,lane:update.lane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLast===null){newFirst=newLast=clone;}else{newLast.next=clone;newLast=clone;}update=update.next;}while(update!==null);// Append the captured update the end of the cloned list.
if(newLast===null){newFirst=newLast=capturedUpdate;}else{newLast.next=capturedUpdate;newLast=capturedUpdate;}}else{// There are no base updates.
newFirst=newLast=capturedUpdate;}queue={baseState:currentQueue.baseState,firstBaseUpdate:newFirst,lastBaseUpdate:newLast,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=queue;return;}}// Append the update to the end of the list.
var lastBaseUpdate=queue.lastBaseUpdate;if(lastBaseUpdate===null){queue.firstBaseUpdate=capturedUpdate;}else{lastBaseUpdate.next=capturedUpdate;}queue.lastBaseUpdate=capturedUpdate;}function getStateFromUpdate(workInProgress,queue,update,prevState,nextProps,instance){switch(update.tag){case ReplaceState:{var payload=update.payload;if(typeof payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();}var nextState=payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictLegacyMode){setIsStrictModeForDevtools(true);try{payload.call(instance,prevState,nextProps);}finally{setIsStrictModeForDevtools(false);}}exitDisallowedContextReadInDEV();}return nextState;}// State object
return payload;}case CaptureUpdate:{workInProgress.flags=workInProgress.flags&~ShouldCapture|DidCapture;}// Intentional fallthrough
case UpdateState:{var _payload=update.payload;var partialState;if(typeof _payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();}partialState=_payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictLegacyMode){setIsStrictModeForDevtools(true);try{_payload.call(instance,prevState,nextProps);}finally{setIsStrictModeForDevtools(false);}}exitDisallowedContextReadInDEV();}}else{// Partial state object
partialState=_payload;}if(partialState===null||partialState===undefined){// Null and undefined are treated as no-ops.
return prevState;}// Merge the partial state and the previous state.
return assign({},prevState,partialState);}case ForceUpdate:{hasForceUpdate=true;return prevState;}}return prevState;}function processUpdateQueue(workInProgress,props,instance,renderLanes){// This is always non-null on a ClassComponent or HostRoot
var queue=workInProgress.updateQueue;hasForceUpdate=false;{currentlyProcessingQueue=queue.shared;}var firstBaseUpdate=queue.firstBaseUpdate;var lastBaseUpdate=queue.lastBaseUpdate;// Check if there are pending updates. If so, transfer them to the base queue.
var pendingQueue=queue.shared.pending;if(pendingQueue!==null){queue.shared.pending=null;// The pending queue is circular. Disconnect the pointer between first
// and last so that it's non-circular.
var lastPendingUpdate=pendingQueue;var firstPendingUpdate=lastPendingUpdate.next;lastPendingUpdate.next=null;// Append pending updates to base queue
if(lastBaseUpdate===null){firstBaseUpdate=firstPendingUpdate;}else{lastBaseUpdate.next=firstPendingUpdate;}lastBaseUpdate=lastPendingUpdate;// If there's a current queue, and it's different from the base queue, then
// we need to transfer the updates to that queue, too. Because the base
// queue is a singly-linked list with no cycles, we can append to both
// lists and take advantage of structural sharing.
// TODO: Pass `current` as argument
var current=workInProgress.alternate;if(current!==null){// This is always non-null on a ClassComponent or HostRoot
var currentQueue=current.updateQueue;var currentLastBaseUpdate=currentQueue.lastBaseUpdate;if(currentLastBaseUpdate!==lastBaseUpdate){if(currentLastBaseUpdate===null){currentQueue.firstBaseUpdate=firstPendingUpdate;}else{currentLastBaseUpdate.next=firstPendingUpdate;}currentQueue.lastBaseUpdate=lastPendingUpdate;}}}// These values may change as we process the queue.
if(firstBaseUpdate!==null){// Iterate through the list of updates to compute the result.
var newState=queue.baseState;// TODO: Don't need to accumulate this. Instead, we can remove renderLanes
// from the original lanes.
var newLanes=NoLanes;var newBaseState=null;var newFirstBaseUpdate=null;var newLastBaseUpdate=null;var update=firstBaseUpdate;do{var updateLane=update.lane;var updateEventTime=update.eventTime;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var clone={eventTime:updateEventTime,lane:updateLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLastBaseUpdate===null){newFirstBaseUpdate=newLastBaseUpdate=clone;newBaseState=newState;}else{newLastBaseUpdate=newLastBaseUpdate.next=clone;}// Update the remaining priority in the queue.
newLanes=mergeLanes(newLanes,updateLane);}else{// This update does have sufficient priority.
if(newLastBaseUpdate!==null){var _clone={eventTime:updateEventTime,// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:NoLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};newLastBaseUpdate=newLastBaseUpdate.next=_clone;}// Process this update.
newState=getStateFromUpdate(workInProgress,queue,update,newState,props,instance);var callback=update.callback;if(callback!==null&&// If the update was already committed, we should not queue its
// callback again.
update.lane!==NoLane){workInProgress.flags|=Callback;var effects=queue.effects;if(effects===null){queue.effects=[update];}else{effects.push(update);}}}update=update.next;if(update===null){pendingQueue=queue.shared.pending;if(pendingQueue===null){break;}else{// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
var _lastPendingUpdate=pendingQueue;// Intentionally unsound. Pending updates form a circular list, but we
// unravel them when transferring them to the base queue.
var _firstPendingUpdate=_lastPendingUpdate.next;_lastPendingUpdate.next=null;update=_firstPendingUpdate;queue.lastBaseUpdate=_lastPendingUpdate;queue.shared.pending=null;}}}while(true);if(newLastBaseUpdate===null){newBaseState=newState;}queue.baseState=newBaseState;queue.firstBaseUpdate=newFirstBaseUpdate;queue.lastBaseUpdate=newLastBaseUpdate;// Interleaved updates are stored on a separate queue. We aren't going to
// process them during this render, but we do need to track which lanes
// are remaining.
var lastInterleaved=queue.shared.interleaved;if(lastInterleaved!==null){var interleaved=lastInterleaved;do{newLanes=mergeLanes(newLanes,interleaved.lane);interleaved=interleaved.next;}while(interleaved!==lastInterleaved);}else if(firstBaseUpdate===null){// `queue.lanes` is used for entangling transitions. We can set it back to
// zero once the queue is empty.
queue.shared.lanes=NoLanes;}// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markSkippedUpdateLanes(newLanes);workInProgress.lanes=newLanes;workInProgress.memoizedState=newState;}{currentlyProcessingQueue=null;}}function callCallback(callback,context){if(typeof callback!=='function'){throw new Error('Invalid argument passed as callback. Expected a function. Instead '+("received: "+callback));}callback.call(context);}function resetHasForceUpdateBeforeProcessing(){hasForceUpdate=false;}function checkHasForceUpdateAfterProcessing(){return hasForceUpdate;}function commitUpdateQueue(finishedWork,finishedQueue,instance){// Commit the effects
var effects=finishedQueue.effects;finishedQueue.effects=null;if(effects!==null){for(var i=0;i<effects.length;i++){var effect=effects[i];var callback=effect.callback;if(callback!==null){effect.callback=null;callCallback(callback,instance);}}}}var fakeInternalInstance={};// React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.
var emptyRefsObject=new React.Component().refs;var didWarnAboutStateAssignmentForComponent;var didWarnAboutUninitializedState;var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;var didWarnAboutLegacyLifecyclesAndDerivedState;var didWarnAboutUndefinedDerivedState;var warnOnUndefinedDerivedState;var warnOnInvalidCallback;var didWarnAboutDirectlyAssigningPropsToState;var didWarnAboutContextTypeAndContextTypes;var didWarnAboutInvalidateContextType;{didWarnAboutStateAssignmentForComponent=new Set();didWarnAboutUninitializedState=new Set();didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate=new Set();didWarnAboutLegacyLifecyclesAndDerivedState=new Set();didWarnAboutDirectlyAssigningPropsToState=new Set();didWarnAboutUndefinedDerivedState=new Set();didWarnAboutContextTypeAndContextTypes=new Set();didWarnAboutInvalidateContextType=new Set();var didWarnOnInvalidCallback=new Set();warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){if(callback===null||typeof callback==='function'){return;}var key=callerName+'_'+callback;if(!didWarnOnInvalidCallback.has(key)){didWarnOnInvalidCallback.add(key);error('%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);}};warnOnUndefinedDerivedState=function warnOnUndefinedDerivedState(type,partialState){if(partialState===undefined){var componentName=getComponentNameFromType(type)||'Component';if(!didWarnAboutUndefinedDerivedState.has(componentName)){didWarnAboutUndefinedDerivedState.add(componentName);error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. '+'You have returned undefined.',componentName);}}};// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(fakeInternalInstance,'_processChildContext',{enumerable:false,value:function value(){throw new Error('_processChildContext is not available in React 16+. This likely '+'means you have multiple copies of React and are attempting to nest '+'a React 15 tree inside a React 16 tree using '+"unstable_renderSubtreeIntoContainer, which isn't supported. Try "+'to make sure you have only one copy of React (and ideally, switch '+'to ReactDOM.createPortal).');}});Object.freeze(fakeInternalInstance);}function applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,nextProps){var prevState=workInProgress.memoizedState;var partialState=getDerivedStateFromProps(nextProps,prevState);{if(workInProgress.mode&StrictLegacyMode){setIsStrictModeForDevtools(true);try{// Invoke the function an extra time to help detect side-effects.
partialState=getDerivedStateFromProps(nextProps,prevState);}finally{setIsStrictModeForDevtools(false);}}warnOnUndefinedDerivedState(ctor,partialState);}// Merge the partial state and the previous state.
var memoizedState=partialState===null||partialState===undefined?prevState:assign({},prevState,partialState);workInProgress.memoizedState=memoizedState;// Once the update queue is empty, persist the derived state onto the
// base state.
if(workInProgress.lanes===NoLanes){// Queue is always non-null for classes
var updateQueue=workInProgress.updateQueue;updateQueue.baseState=memoizedState;}}var classComponentUpdater={isMounted:isMounted,enqueueSetState:function enqueueSetState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'setState');}update.callback=callback;}enqueueUpdate(fiber,update);var root=scheduleUpdateOnFiber(fiber,lane,eventTime);if(root!==null){entangleTransitions(root,fiber,lane);}{markStateUpdateScheduled(fiber,lane);}},enqueueReplaceState:function enqueueReplaceState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ReplaceState;update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'replaceState');}update.callback=callback;}enqueueUpdate(fiber,update);var root=scheduleUpdateOnFiber(fiber,lane,eventTime);if(root!==null){entangleTransitions(root,fiber,lane);}{markStateUpdateScheduled(fiber,lane);}},enqueueForceUpdate:function enqueueForceUpdate(inst,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ForceUpdate;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'forceUpdate');}update.callback=callback;}enqueueUpdate(fiber,update);var root=scheduleUpdateOnFiber(fiber,lane,eventTime);if(root!==null){entangleTransitions(root,fiber,lane);}{markForceUpdateScheduled(fiber,lane);}}};function checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext){var instance=workInProgress.stateNode;if(typeof instance.shouldComponentUpdate==='function'){var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,nextContext);{if(workInProgress.mode&StrictLegacyMode){setIsStrictModeForDevtools(true);try{// Invoke the function an extra time to help detect side-effects.
shouldUpdate=instance.shouldComponentUpdate(newProps,newState,nextContext);}finally{setIsStrictModeForDevtools(false);}}if(shouldUpdate===undefined){error('%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentNameFromType(ctor)||'Component');}}return shouldUpdate;}if(ctor.prototype&&ctor.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress,ctor,newProps){var instance=workInProgress.stateNode;{var name=getComponentNameFromType(ctor)||'Component';var renderPresent=instance.render;if(!renderPresent){if(ctor.prototype&&typeof ctor.prototype.render==='function'){error('%s(...): No `render` method found on the returned component '+'instance: did you accidentally return an object from the constructor?',name);}else{error('%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);}}if(instance.getInitialState&&!instance.getInitialState.isReactClassApproved&&!instance.state){error('getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);}if(instance.getDefaultProps&&!instance.getDefaultProps.isReactClassApproved){error('getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);}if(instance.propTypes){error('propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);}if(instance.contextType){error('contextType was defined as an instance property on %s. Use a static '+'property to define contextType instead.',name);}{if(instance.contextTypes){error('contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);}if(ctor.contextType&&ctor.contextTypes&&!didWarnAboutContextTypeAndContextTypes.has(ctor)){didWarnAboutContextTypeAndContextTypes.add(ctor);error('%s declares both contextTypes and contextType static properties. '+'The legacy contextTypes property will be ignored.',name);}}if(typeof instance.componentShouldUpdate==='function'){error('%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);}if(ctor.prototype&&ctor.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){error('%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentNameFromType(ctor)||'A pure component');}if(typeof instance.componentDidUnmount==='function'){error('%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);}if(typeof instance.componentDidReceiveProps==='function'){error('%s has a method called '+'componentDidReceiveProps(). But there is no such lifecycle method. '+'If you meant to update the state in response to changing props, '+'use componentWillReceiveProps(). If you meant to fetch data or '+'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',name);}if(typeof instance.componentWillRecieveProps==='function'){error('%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);}if(typeof instance.UNSAFE_componentWillRecieveProps==='function'){error('%s has a method called '+'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',name);}var hasMutatedProps=instance.props!==newProps;if(instance.props!==undefined&&hasMutatedProps){error('%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);}if(instance.defaultProps){error('Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name);}if(typeof instance.getSnapshotBeforeUpdate==='function'&&typeof instance.componentDidUpdate!=='function'&&!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)){didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). '+'This component defines getSnapshotBeforeUpdate() only.',getComponentNameFromType(ctor));}if(typeof instance.getDerivedStateFromProps==='function'){error('%s: getDerivedStateFromProps() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof instance.getDerivedStateFromError==='function'){error('%s: getDerivedStateFromError() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof ctor.getSnapshotBeforeUpdate==='function'){error('%s: getSnapshotBeforeUpdate() is defined as a static method '+'and will be ignored. Instead, declare it as an instance method.',name);}var _state=instance.state;if(_state&&(_typeof(_state)!=='object'||isArray(_state))){error('%s.state: must be set to an object or null',name);}if(typeof instance.getChildContext==='function'&&_typeof(ctor.childContextTypes)!=='object'){error('%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',name);}}}function adoptClassInstance(workInProgress,instance){instance.updater=classComponentUpdater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
set(instance,workInProgress);{instance._reactInternalInstance=fakeInternalInstance;}}function constructClassInstance(workInProgress,ctor,props){var isLegacyContextConsumer=false;var unmaskedContext=emptyContextObject;var context=emptyContextObject;var contextType=ctor.contextType;{if('contextType'in ctor){var isValid=// Allow null for conditional declaration
contextType===null||contextType!==undefined&&contextType.$$typeof===REACT_CONTEXT_TYPE&&contextType._context===undefined;// Not a <Context.Consumer>
if(!isValid&&!didWarnAboutInvalidateContextType.has(ctor)){didWarnAboutInvalidateContextType.add(ctor);var addendum='';if(contextType===undefined){addendum=' However, it is set to undefined. '+'This can be caused by a typo or by mixing up named and default imports. '+'This can also happen due to a circular dependency, so '+'try moving the createContext() call to a separate file.';}else if(_typeof(contextType)!=='object'){addendum=' However, it is set to a '+_typeof(contextType)+'.';}else if(contextType.$$typeof===REACT_PROVIDER_TYPE){addendum=' Did you accidentally pass the Context.Provider instead?';}else if(contextType._context!==undefined){// <Context.Consumer>
addendum=' Did you accidentally pass the Context.Consumer instead?';}else{addendum=' However, it is set to an object with keys {'+Object.keys(contextType).join(', ')+'}.';}error('%s defines an invalid contextType. '+'contextType should point to the Context object returned by React.createContext().%s',getComponentNameFromType(ctor)||'Component',addendum);}}}if(_typeof(contextType)==='object'&&contextType!==null){context=_readContext(contextType);}else{unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);var contextTypes=ctor.contextTypes;isLegacyContextConsumer=contextTypes!==null&&contextTypes!==undefined;context=isLegacyContextConsumer?getMaskedContext(workInProgress,unmaskedContext):emptyContextObject;}var instance=new ctor(props,context);// Instantiate twice to help detect side-effects.
{if(workInProgress.mode&StrictLegacyMode){setIsStrictModeForDevtools(true);try{instance=new ctor(props,context);// eslint-disable-line no-new
}finally{setIsStrictModeForDevtools(false);}}}var state=workInProgress.memoizedState=instance.state!==null&&instance.state!==undefined?instance.state:null;adoptClassInstance(workInProgress,instance);{if(typeof ctor.getDerivedStateFromProps==='function'&&state===null){var componentName=getComponentNameFromType(ctor)||'Component';if(!didWarnAboutUninitializedState.has(componentName)){didWarnAboutUninitializedState.add(componentName);error('`%s` uses `getDerivedStateFromProps` but its initial state is '+'%s. This is not recommended. Instead, define the initial state by '+'assigning an object to `this.state` in the constructor of `%s`. '+'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',componentName,instance.state===null?'null':'undefined',componentName);}}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if(typeof ctor.getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function'){var foundWillMountName=null;var foundWillReceivePropsName=null;var foundWillUpdateName=null;if(typeof instance.componentWillMount==='function'&&instance.componentWillMount.__suppressDeprecationWarning!==true){foundWillMountName='componentWillMount';}else if(typeof instance.UNSAFE_componentWillMount==='function'){foundWillMountName='UNSAFE_componentWillMount';}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){foundWillReceivePropsName='componentWillReceiveProps';}else if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){foundWillReceivePropsName='UNSAFE_componentWillReceiveProps';}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){foundWillUpdateName='componentWillUpdate';}else if(typeof instance.UNSAFE_componentWillUpdate==='function'){foundWillUpdateName='UNSAFE_componentWillUpdate';}if(foundWillMountName!==null||foundWillReceivePropsName!==null||foundWillUpdateName!==null){var _componentName=getComponentNameFromType(ctor)||'Component';var newApiName=typeof ctor.getDerivedStateFromProps==='function'?'getDerivedStateFromProps()':'getSnapshotBeforeUpdate()';if(!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)){didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n'+'%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n'+'The above lifecycles should be removed. Learn more about this warning here:\n'+'https://reactjs.org/link/unsafe-component-lifecycles',_componentName,newApiName,foundWillMountName!==null?"\n  "+foundWillMountName:'',foundWillReceivePropsName!==null?"\n  "+foundWillReceivePropsName:'',foundWillUpdateName!==null?"\n  "+foundWillUpdateName:'');}}}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
if(isLegacyContextConsumer){cacheContext(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){var oldState=instance.state;if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}if(oldState!==instance.state){{error('%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentNameFromFiber(workInProgress)||'Component');}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext){var oldState=instance.state;if(typeof instance.componentWillReceiveProps==='function'){instance.componentWillReceiveProps(newProps,nextContext);}if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){instance.UNSAFE_componentWillReceiveProps(newProps,nextContext);}if(instance.state!==oldState){{var componentName=getComponentNameFromFiber(workInProgress)||'Component';if(!didWarnAboutStateAssignmentForComponent.has(componentName)){didWarnAboutStateAssignmentForComponent.add(componentName);error('%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',componentName);}}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress,ctor,newProps,renderLanes){{checkClassInstance(workInProgress,ctor,newProps);}var instance=workInProgress.stateNode;instance.props=newProps;instance.state=workInProgress.memoizedState;instance.refs=emptyRefsObject;initializeUpdateQueue(workInProgress);var contextType=ctor.contextType;if(_typeof(contextType)==='object'&&contextType!==null){instance.context=_readContext(contextType);}else{var unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);instance.context=getMaskedContext(workInProgress,unmaskedContext);}{if(instance.state===newProps){var componentName=getComponentNameFromType(ctor)||'Component';if(!didWarnAboutDirectlyAssigningPropsToState.has(componentName)){didWarnAboutDirectlyAssigningPropsToState.add(componentName);error('%s: It is not recommended to assign props directly to state '+"because updates to props won't be reflected in state. "+'In most cases, it is better to use props directly.',componentName);}}if(workInProgress.mode&StrictLegacyMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,instance);}{ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress,instance);}}instance.state=workInProgress.memoizedState;var getDerivedStateFromProps=ctor.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);instance.state=workInProgress.memoizedState;}// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(typeof ctor.getDerivedStateFromProps!=='function'&&typeof instance.getSnapshotBeforeUpdate!=='function'&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
// process them now.
processUpdateQueue(workInProgress,newProps,instance,renderLanes);instance.state=workInProgress.memoizedState;}if(typeof instance.componentDidMount==='function'){var fiberFlags=Update;{fiberFlags|=LayoutStatic;}if((workInProgress.mode&StrictEffectsMode)!==NoMode){fiberFlags|=MountLayoutDev;}workInProgress.flags|=fiberFlags;}}function resumeMountClassInstance(workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;var oldProps=workInProgress.memoizedProps;instance.props=oldProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else{var nextLegacyUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextLegacyUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(oldProps!==newProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){var fiberFlags=Update;{fiberFlags|=LayoutStatic;}if((workInProgress.mode&StrictEffectsMode)!==NoMode){fiberFlags|=MountLayoutDev;}workInProgress.flags|=fiberFlags;}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}}if(typeof instance.componentDidMount==='function'){var _fiberFlags=Update;{_fiberFlags|=LayoutStatic;}if((workInProgress.mode&StrictEffectsMode)!==NoMode){_fiberFlags|=MountLayoutDev;}workInProgress.flags|=_fiberFlags;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){var _fiberFlags2=Update;{_fiberFlags2|=LayoutStatic;}if((workInProgress.mode&StrictEffectsMode)!==NoMode){_fiberFlags2|=MountLayoutDev;}workInProgress.flags|=_fiberFlags2;}// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current,workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;cloneUpdateQueue(current,workInProgress);var unresolvedOldProps=workInProgress.memoizedProps;var oldProps=workInProgress.type===workInProgress.elementType?unresolvedOldProps:resolveDefaultProps(workInProgress.type,unresolvedOldProps);instance.props=oldProps;var unresolvedNewProps=workInProgress.pendingProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else{var nextUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(unresolvedOldProps!==unresolvedNewProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(unresolvedOldProps===unresolvedNewProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()&&!enableLazyContextPropagation){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext)||// TODO: In some cases, we'll end up checking if context has changed twice,
// both before and after `shouldComponentUpdate` has been called. Not ideal,
// but I'm loath to refactor this function. This only happens for memoized
// components so it's not that common.
enableLazyContextPropagation;if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillUpdate==='function'||typeof instance.componentWillUpdate==='function')){if(typeof instance.componentWillUpdate==='function'){instance.componentWillUpdate(newProps,newState,nextContext);}if(typeof instance.UNSAFE_componentWillUpdate==='function'){instance.UNSAFE_componentWillUpdate(newProps,newState,nextContext);}}if(typeof instance.componentDidUpdate==='function'){workInProgress.flags|=Update;}if(typeof instance.getSnapshotBeforeUpdate==='function'){workInProgress.flags|=Snapshot;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}// TODO: Use the unified fiber stack module instead of this local one?
// Intentionally not using it yet to derisk the initial implementation, because
// the way we push/pop these values is a bit unusual. If there's a mistake, I'd
// rather the ids be wrong than crash the whole reconciler.
var forkStack=[];var forkStackIndex=0;var treeForkProvider=null;var treeForkCount=0;var idStack=[];var idStackIndex=0;var treeContextProvider=null;var treeContextId=1;var treeContextOverflow='';function isForkedChild(workInProgress){warnIfNotHydrating();return(workInProgress.flags&Forked)!==NoFlags;}function getForksAtLevel(workInProgress){warnIfNotHydrating();return treeForkCount;}function getTreeId(){var overflow=treeContextOverflow;var idWithLeadingBit=treeContextId;var id=idWithLeadingBit&~getLeadingBit(idWithLeadingBit);return id.toString(32)+overflow;}function pushTreeFork(workInProgress,totalChildren){// This is called right after we reconcile an array (or iterator) of child
// fibers, because that's the only place where we know how many children in
// the whole set without doing extra work later, or storing addtional
// information on the fiber.
//
// That's why this function is separate from pushTreeId — it's called during
// the render phase of the fork parent, not the child, which is where we push
// the other context values.
//
// In the Fizz implementation this is much simpler because the child is
// rendered in the same callstack as the parent.
//
// It might be better to just add a `forks` field to the Fiber type. It would
// make this module simpler.
warnIfNotHydrating();forkStack[forkStackIndex++]=treeForkCount;forkStack[forkStackIndex++]=treeForkProvider;treeForkProvider=workInProgress;treeForkCount=totalChildren;}function pushTreeId(workInProgress,totalChildren,index){warnIfNotHydrating();idStack[idStackIndex++]=treeContextId;idStack[idStackIndex++]=treeContextOverflow;idStack[idStackIndex++]=treeContextProvider;treeContextProvider=workInProgress;var baseIdWithLeadingBit=treeContextId;var baseOverflow=treeContextOverflow;// The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
// of the id; we use it to account for leading 0s.
var baseLength=getBitLength(baseIdWithLeadingBit)-1;var baseId=baseIdWithLeadingBit&~(1<<baseLength);var slot=index+1;var length=getBitLength(totalChildren)+baseLength;// 30 is the max length we can store without overflowing, taking into
// consideration the leading 1 we use to mark the end of the sequence.
if(length>30){// We overflowed the bitwise-safe range. Fall back to slower algorithm.
// This branch assumes the length of the base id is greater than 5; it won't
// work for smaller ids, because you need 5 bits per character.
//
// We encode the id in multiple steps: first the base id, then the
// remaining digits.
//
// Each 5 bit sequence corresponds to a single base 32 character. So for
// example, if the current id is 23 bits long, we can convert 20 of those
// bits into a string of 4 characters, with 3 bits left over.
//
// First calculate how many bits in the base id represent a complete
// sequence of characters.
var numberOfOverflowBits=baseLength-baseLength%5;// Then create a bitmask that selects only those bits.
var newOverflowBits=(1<<numberOfOverflowBits)-1;// Select the bits, and convert them to a base 32 string.
var newOverflow=(baseId&newOverflowBits).toString(32);// Now we can remove those bits from the base id.
var restOfBaseId=baseId>>numberOfOverflowBits;var restOfBaseLength=baseLength-numberOfOverflowBits;// Finally, encode the rest of the bits using the normal algorithm. Because
// we made more room, this time it won't overflow.
var restOfLength=getBitLength(totalChildren)+restOfBaseLength;var restOfNewBits=slot<<restOfBaseLength;var id=restOfNewBits|restOfBaseId;var overflow=newOverflow+baseOverflow;treeContextId=1<<restOfLength|id;treeContextOverflow=overflow;}else{// Normal path
var newBits=slot<<baseLength;var _id=newBits|baseId;var _overflow=baseOverflow;treeContextId=1<<length|_id;treeContextOverflow=_overflow;}}function pushMaterializedTreeId(workInProgress){warnIfNotHydrating();// This component materialized an id. This will affect any ids that appear
// in its children.
var returnFiber=workInProgress["return"];if(returnFiber!==null){var numberOfForks=1;var slotIndex=0;pushTreeFork(workInProgress,numberOfForks);pushTreeId(workInProgress,numberOfForks,slotIndex);}}function getBitLength(number){return 32-clz32(number);}function getLeadingBit(id){return 1<<getBitLength(id)-1;}function popTreeContext(workInProgress){// Restore the previous values.
// This is a bit more complicated than other context-like modules in Fiber
// because the same Fiber may appear on the stack multiple times and for
// different reasons. We have to keep popping until the work-in-progress is
// no longer at the top of the stack.
while(workInProgress===treeForkProvider){treeForkProvider=forkStack[--forkStackIndex];forkStack[forkStackIndex]=null;treeForkCount=forkStack[--forkStackIndex];forkStack[forkStackIndex]=null;}while(workInProgress===treeContextProvider){treeContextProvider=idStack[--idStackIndex];idStack[idStackIndex]=null;treeContextOverflow=idStack[--idStackIndex];idStack[idStackIndex]=null;treeContextId=idStack[--idStackIndex];idStack[idStackIndex]=null;}}function getSuspendedTreeContext(){warnIfNotHydrating();if(treeContextProvider!==null){return{id:treeContextId,overflow:treeContextOverflow};}else{return null;}}function restoreSuspendedTreeContext(workInProgress,suspendedContext){warnIfNotHydrating();idStack[idStackIndex++]=treeContextId;idStack[idStackIndex++]=treeContextOverflow;idStack[idStackIndex++]=treeContextProvider;treeContextId=suspendedContext.id;treeContextOverflow=suspendedContext.overflow;treeContextProvider=workInProgress;}function warnIfNotHydrating(){{if(!getIsHydrating()){error('Expected to be hydrating. This is a bug in React. Please file '+'an issue.');}}}// This may have been an insertion or a hydration.
var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;// This flag allows for warning supression when we expect there to be mismatches
// due to earlier mismatches or a suspended fiber.
var didSuspendOrErrorDEV=false;// Hydration errors that were thrown inside this boundary
var hydrationErrors=null;function warnIfHydrating(){{if(isHydrating){error('We should not be hydrating here. This is a bug in React. Please file a bug.');}}}function markDidThrowWhileHydratingDEV(){{didSuspendOrErrorDEV=true;}}function enterHydrationState(fiber){var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChildWithinContainer(parentInstance);hydrationParentFiber=fiber;isHydrating=true;hydrationErrors=null;didSuspendOrErrorDEV=false;return true;}function reenterHydrationStateFromDehydratedSuspenseInstance(fiber,suspenseInstance,treeContext){nextHydratableInstance=getFirstHydratableChildWithinSuspenseInstance(suspenseInstance);hydrationParentFiber=fiber;isHydrating=true;hydrationErrors=null;didSuspendOrErrorDEV=false;if(treeContext!==null){restoreSuspendedTreeContext(fiber,treeContext);}return true;}function warnUnhydratedInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot:{didNotHydrateInstanceWithinContainer(returnFiber.stateNode.containerInfo,instance);break;}case HostComponent:{var isConcurrentMode=(returnFiber.mode&ConcurrentMode)!==NoMode;didNotHydrateInstance(returnFiber.type,returnFiber.memoizedProps,returnFiber.stateNode,instance,// TODO: Delete this argument when we remove the legacy root API.
isConcurrentMode);break;}case SuspenseComponent:{var suspenseState=returnFiber.memoizedState;if(suspenseState.dehydrated!==null)didNotHydrateInstanceWithinSuspenseInstance(suspenseState.dehydrated,instance);break;}}}}function deleteHydratableInstance(returnFiber,instance){warnUnhydratedInstance(returnFiber,instance);var childToDelete=createFiberFromHostInstanceForDeletion();childToDelete.stateNode=instance;childToDelete["return"]=returnFiber;var deletions=returnFiber.deletions;if(deletions===null){returnFiber.deletions=[childToDelete];returnFiber.flags|=ChildDeletion;}else{deletions.push(childToDelete);}}function warnNonhydratedInstance(returnFiber,fiber){{if(didSuspendOrErrorDEV){// Inside a boundary that already suspended. We're currently rendering the
// siblings of a suspended node. The mismatch may be due to the missing
// data, so it's probably a false positive.
return;}switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;switch(fiber.tag){case HostComponent:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableInstanceWithinContainer(parentContainer,type);break;case HostText:var text=fiber.pendingProps;didNotFindHydratableTextInstanceWithinContainer(parentContainer,text);break;}break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;switch(fiber.tag){case HostComponent:{var _type=fiber.type;var _props=fiber.pendingProps;var isConcurrentMode=(returnFiber.mode&ConcurrentMode)!==NoMode;didNotFindHydratableInstance(parentType,parentProps,parentInstance,_type,_props,// TODO: Delete this argument when we remove the legacy root API.
isConcurrentMode);break;}case HostText:{var _text=fiber.pendingProps;var _isConcurrentMode=(returnFiber.mode&ConcurrentMode)!==NoMode;didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,_text,// TODO: Delete this argument when we remove the legacy root API.
_isConcurrentMode);break;}}break;}case SuspenseComponent:{var suspenseState=returnFiber.memoizedState;var _parentInstance=suspenseState.dehydrated;if(_parentInstance!==null)switch(fiber.tag){case HostComponent:var _type2=fiber.type;var _props2=fiber.pendingProps;didNotFindHydratableInstanceWithinSuspenseInstance(_parentInstance,_type2);break;case HostText:var _text2=fiber.pendingProps;didNotFindHydratableTextInstanceWithinSuspenseInstance(_parentInstance,_text2);break;}break;}default:return;}}}function insertNonHydratedInstance(returnFiber,fiber){fiber.flags=fiber.flags&~Hydrating|Placement;warnNonhydratedInstance(returnFiber,fiber);}function tryHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent:{var type=fiber.type;var props=fiber.pendingProps;var instance=canHydrateInstance(nextInstance,type);if(instance!==null){fiber.stateNode=instance;hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(instance);return true;}return false;}case HostText:{var text=fiber.pendingProps;var textInstance=canHydrateTextInstance(nextInstance,text);if(textInstance!==null){fiber.stateNode=textInstance;hydrationParentFiber=fiber;// Text Instances don't have children so there's nothing to hydrate.
nextHydratableInstance=null;return true;}return false;}case SuspenseComponent:{var suspenseInstance=canHydrateSuspenseInstance(nextInstance);if(suspenseInstance!==null){var suspenseState={dehydrated:suspenseInstance,treeContext:getSuspendedTreeContext(),retryLane:OffscreenLane};fiber.memoizedState=suspenseState;// Store the dehydrated fragment as a child fiber.
// This simplifies the code for getHostSibling and deleting nodes,
// since it doesn't have to consider all Suspense boundaries and
// check if they're dehydrated ones or not.
var dehydratedFragment=createFiberFromDehydratedFragment(suspenseInstance);dehydratedFragment["return"]=fiber;fiber.child=dehydratedFragment;hydrationParentFiber=fiber;// While a Suspense Instance does have children, we won't step into
// it during the first pass. Instead, we'll reenter it later.
nextHydratableInstance=null;return true;}return false;}default:return false;}}function shouldClientRenderOnMismatch(fiber){return(fiber.mode&ConcurrentMode)!==NoMode&&(fiber.flags&DidCapture)===NoFlags;}function throwOnHydrationMismatch(fiber){throw new Error('Hydration failed because the initial UI does not match what was '+'rendered on the server.');}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){if(shouldClientRenderOnMismatch(fiber)){warnNonhydratedInstance(hydrationParentFiber,fiber);throwOnHydrationMismatch();}// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}var firstAttemptedInstance=nextInstance;if(!tryHydrate(fiber,nextInstance)){if(shouldClientRenderOnMismatch(fiber)){warnNonhydratedInstance(hydrationParentFiber,fiber);throwOnHydrationMismatch();}// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
nextInstance=getNextHydratableSibling(firstAttemptedInstance);var prevHydrationParentFiber=hydrationParentFiber;if(!nextInstance||!tryHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(prevHydrationParentFiber,firstAttemptedInstance);}}function prepareToHydrateHostInstance(fiber,rootContainerInstance,hostContext){var instance=fiber.stateNode;var shouldWarnIfMismatchDev=!didSuspendOrErrorDEV;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,hostContext,fiber,shouldWarnIfMismatchDev);// TODO: Type this specific to this type of component.
fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){var textInstance=fiber.stateNode;var textContent=fiber.memoizedProps;var shouldUpdate=hydrateTextInstance(textInstance,textContent,fiber);if(shouldUpdate){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var returnFiber=hydrationParentFiber;if(returnFiber!==null){switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;var isConcurrentMode=(returnFiber.mode&ConcurrentMode)!==NoMode;didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,textContent,// TODO: Delete this argument when we remove the legacy root API.
isConcurrentMode);break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;var _isConcurrentMode2=(returnFiber.mode&ConcurrentMode)!==NoMode;didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,textContent,// TODO: Delete this argument when we remove the legacy root API.
_isConcurrentMode2);break;}}}}return shouldUpdate;}function prepareToHydrateHostSuspenseInstance(fiber){var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){throw new Error('Expected to have a hydrated suspense instance. '+'This error is likely caused by a bug in React. Please file an issue.');}hydrateSuspenseInstance(suspenseInstance,fiber);}function skipPastDehydratedSuspenseInstance(fiber){var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){throw new Error('Expected to have a hydrated suspense instance. '+'This error is likely caused by a bug in React. Please file an issue.');}return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);}function popToNextHostParent(fiber){var parent=fiber["return"];while(parent!==null&&parent.tag!==HostComponent&&parent.tag!==HostRoot&&parent.tag!==SuspenseComponent){parent=parent["return"];}hydrationParentFiber=parent;}function popHydrationState(fiber){if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
// tree.
return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
popToNextHostParent(fiber);isHydrating=true;return false;}// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them. We also don't delete anything inside the root container.
if(fiber.tag!==HostRoot&&(fiber.tag!==HostComponent||shouldDeleteUnhydratedTailInstances(fiber.type)&&!shouldSetTextContent(fiber.type,fiber.memoizedProps))){var nextInstance=nextHydratableInstance;if(nextInstance){if(shouldClientRenderOnMismatch(fiber)){warnIfUnhydratedTailNodes(fiber);throwOnHydrationMismatch();}else{while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}}}popToNextHostParent(fiber);if(fiber.tag===SuspenseComponent){nextHydratableInstance=skipPastDehydratedSuspenseInstance(fiber);}else{nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;}return true;}function hasUnhydratedTailNodes(){return isHydrating&&nextHydratableInstance!==null;}function warnIfUnhydratedTailNodes(fiber){var nextInstance=nextHydratableInstance;while(nextInstance){warnUnhydratedInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}function resetHydrationState(){hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;didSuspendOrErrorDEV=false;}function upgradeHydrationErrorsToRecoverable(){if(hydrationErrors!==null){// Successfully completed a forced client render. The errors that occurred
// during the hydration attempt are now recovered. We will log them in
// commit phase, once the entire tree has finished.
queueRecoverableErrors(hydrationErrors);hydrationErrors=null;}}function getIsHydrating(){return isHydrating;}function queueHydrationError(error){if(hydrationErrors===null){hydrationErrors=[error];}else{hydrationErrors.push(error);}}var didWarnAboutMaps;var didWarnAboutGenerators;var didWarnAboutStringRefs;var ownerHasKeyUseWarning;var ownerHasFunctionTypeWarning;var warnForMissingKey=function warnForMissingKey(child,returnFiber){};{didWarnAboutMaps=false;didWarnAboutGenerators=false;didWarnAboutStringRefs={};/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */ownerHasKeyUseWarning={};ownerHasFunctionTypeWarning={};warnForMissingKey=function warnForMissingKey(child,returnFiber){if(child===null||_typeof(child)!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}if(_typeof(child._store)!=='object'){throw new Error('React Component in warnForMissingKey should have a _store. '+'This error is likely caused by a bug in React. Please file an issue.');}child._store.validated=true;var componentName=getComponentNameFromFiber(returnFiber)||'Component';if(ownerHasKeyUseWarning[componentName]){return;}ownerHasKeyUseWarning[componentName]=true;error('Each child in a list should have a unique '+'"key" prop. See https://reactjs.org/link/warning-keys for '+'more information.');};}function coerceRef(returnFiber,current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'&&_typeof(mixedRef)!=='object'){{// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if((returnFiber.mode&StrictLegacyMode||warnAboutStringRefs)&&// We warn in ReactElement.js if owner and self are equal for string refs
// because these cannot be automatically converted to an arrow function
// using a codemod. Therefore, we don't have to warn about string refs again.
!(element._owner&&element._self&&element._owner.stateNode!==element._self)){var componentName=getComponentNameFromFiber(returnFiber)||'Component';if(!didWarnAboutStringRefs[componentName]){{error('A string ref, "%s", has been found within a strict mode tree. '+'String refs are a source of potential bugs and should be avoided. '+'We recommend using useRef() or createRef() instead. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-string-ref',mixedRef);}didWarnAboutStringRefs[componentName]=true;}}}if(element._owner){var owner=element._owner;var inst;if(owner){var ownerFiber=owner;if(ownerFiber.tag!==ClassComponent){throw new Error('Function components cannot have string refs. '+'We recommend using useRef() instead. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-string-ref');}inst=ownerFiber.stateNode;}if(!inst){throw new Error("Missing owner for string ref "+mixedRef+". This error is likely caused by a "+'bug in React. Please file an issue.');}// Assigning this to a const so Flow knows it won't change in the closure
var resolvedInst=inst;{checkPropStringCoercion(mixedRef,'ref');}var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
if(current!==null&&current.ref!==null&&typeof current.ref==='function'&&current.ref._stringRef===stringRef){return current.ref;}var ref=function ref(value){var refs=resolvedInst.refs;if(refs===emptyRefsObject){// This is a lazy pooled frozen object, so we need to initialize.
refs=resolvedInst.refs={};}if(value===null){delete refs[stringRef];}else{refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else{if(typeof mixedRef!=='string'){throw new Error('Expected ref to be a function, a string, an object returned by React.createRef(), or null.');}if(!element._owner){throw new Error("Element ref was specified as a string ("+mixedRef+") but no owner was set. This could happen for one of"+' the following reasons:\n'+'1. You may be adding a ref to a function component\n'+"2. You may be adding a ref to a component that was not created inside a component's render method\n"+'3. You have multiple copies of React loaded\n'+'See https://reactjs.org/link/refs-must-have-owner for more information.');}}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){var childString=Object.prototype.toString.call(newChild);throw new Error("Objects are not valid as a React child (found: "+(childString==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':childString)+"). "+'If you meant to render a collection of children, use an array '+'instead.');}function warnOnFunctionType(returnFiber){{var componentName=getComponentNameFromFiber(returnFiber)||'Component';if(ownerHasFunctionTypeWarning[componentName]){return;}ownerHasFunctionTypeWarning[componentName]=true;error('Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.');}}function resolveLazy(lazyType){var payload=lazyType._payload;var init=lazyType._init;return init(payload);}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
return;}var deletions=returnFiber.deletions;if(deletions===null){returnFiber.deletions=[childToDelete];returnFiber.flags|=ChildDeletion;}else{deletions.push(childToDelete);}}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else{existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,pendingProps){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var clone=createWorkInProgress(fiber,pendingProps);clone.index=0;clone.sibling=null;return clone;}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// During hydration, the useId algorithm needs to know which fibers are
// part of a list of children (arrays, iterators).
newFiber.flags|=Forked;return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
newFiber.flags|=Placement;return lastPlacedIndex;}else{// This item can stay in place.
return oldIndex;}}else{// This is an insertion.
newFiber.flags|=Placement;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.flags|=Placement;}return newFiber;}function updateTextNode(returnFiber,current,textContent,lanes){if(current===null||current.tag!==HostText){// Insert
var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else{// Update
var existing=useFiber(current,textContent);existing["return"]=returnFiber;return existing;}}function updateElement(returnFiber,current,element,lanes){var elementType=element.type;if(elementType===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,current,element.props.children,lanes,element.key);}if(current!==null){if(current.elementType===elementType||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(current,element)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
_typeof(elementType)==='object'&&elementType!==null&&elementType.$$typeof===REACT_LAZY_TYPE&&resolveLazy(elementType)===current.type){// Move based on index
var existing=useFiber(current,element.props);existing.ref=coerceRef(returnFiber,current,element);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}// Insert
var created=createFiberFromElement(element,returnFiber.mode,lanes);created.ref=coerceRef(returnFiber,current,element);created["return"]=returnFiber;return created;}function updatePortal(returnFiber,current,portal,lanes){if(current===null||current.tag!==HostPortal||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else{// Update
var existing=useFiber(current,portal.children||[]);existing["return"]=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,lanes,key){if(current===null||current.tag!==Fragment){// Insert
var created=createFiberFromFragment(fragment,returnFiber.mode,lanes,key);created["return"]=returnFiber;return created;}else{// Update
var existing=useFiber(current,fragment);existing["return"]=returnFiber;return existing;}}function createChild(returnFiber,newChild,lanes){if(typeof newChild==='string'&&newChild!==''||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var created=createFiberFromText(''+newChild,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _created=createFiberFromElement(newChild,returnFiber.mode,lanes);_created.ref=coerceRef(returnFiber,null,newChild);_created["return"]=returnFiber;return _created;}case REACT_PORTAL_TYPE:{var _created2=createFiberFromPortal(newChild,returnFiber.mode,lanes);_created2["return"]=returnFiber;return _created2;}case REACT_LAZY_TYPE:{var payload=newChild._payload;var init=newChild._init;return createChild(returnFiber,init(payload),lanes);}}if(isArray(newChild)||getIteratorFn(newChild)){var _created3=createFiberFromFragment(newChild,returnFiber.mode,lanes,null);_created3["return"]=returnFiber;return _created3;}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateSlot(returnFiber,oldFiber,newChild,lanes){// Update the fiber if the keys match, otherwise return null.
var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'&&newChild!==''||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,lanes);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){return updateElement(returnFiber,oldFiber,newChild,lanes);}else{return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,lanes);}else{return null;}}case REACT_LAZY_TYPE:{var payload=newChild._payload;var init=newChild._init;return updateSlot(returnFiber,oldFiber,init(payload),lanes);}}if(isArray(newChild)||getIteratorFn(newChild)){if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,lanes){if(typeof newChild==='string'&&newChild!==''||typeof newChild==='number'){// Text nodes don't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,lanes);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateElement(returnFiber,_matchedFiber,newChild,lanes);}case REACT_PORTAL_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber2,newChild,lanes);}case REACT_LAZY_TYPE:var payload=newChild._payload;var init=newChild._init;return updateFromMap(existingChildren,returnFiber,newIdx,init(payload),lanes);}if(isArray(newChild)||getIteratorFn(newChild)){var _matchedFiber3=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber3,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(child,knownKeys,returnFiber){{if(_typeof(child)!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child,returnFiber);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}error('Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.',key);break;case REACT_LAZY_TYPE:var payload=child._payload;var init=child._init;warnOnInvalidKey(init(payload),knownKeys,returnFiber);break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,lanes){// This algorithm can't optimize by searching from both ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
{// First, validate keys.
var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);if(getIsHydrating()){var numberOfForks=newIdx;pushTreeFork(returnFiber,numberOfForks);}return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],lanes);if(_newFiber===null){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber;}else{previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}if(getIsHydrating()){var _numberOfForks=newIdx;pushTreeFork(returnFiber,_numberOfForks);}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],lanes);if(_newFiber2!==null){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren["delete"](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else{previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}if(getIsHydrating()){var _numberOfForks2=newIdx;pushTreeFork(returnFiber,_numberOfForks2);}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,lanes){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var iteratorFn=getIteratorFn(newChildrenIterable);if(typeof iteratorFn!=='function'){throw new Error('An object is not an iterable. This error is likely caused by a bug in '+'React. Please file an issue.');}{// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
if(typeof Symbol==='function'&&// $FlowFixMe Flow doesn't know about toStringTag
newChildrenIterable[Symbol.toStringTag]==='Generator'){if(!didWarnAboutGenerators){error('Using Generators as children is unsupported and will likely yield '+'unexpected results because enumerating a generator mutates it. '+'You may convert it to an array with `Array.from()` or the '+'`[...spread]` operator before rendering. Keep in mind '+'you might need to polyfill these features for older browsers.');}didWarnAboutGenerators=true;}// Warn about using Maps as children
if(newChildrenIterable.entries===iteratorFn){if(!didWarnAboutMaps){error('Using Maps as children is not supported. '+'Use an array of keyed ReactElements instead.');}didWarnAboutMaps=true;}// First, validate keys.
// We'll get a different iterator later for the main pass.
var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}}var newChildren=iteratorFn.call(newChildrenIterable);if(newChildren==null){throw new Error('An iterable object provided no iterator.');}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);if(getIsHydrating()){var numberOfForks=newIdx;pushTreeFork(returnFiber,numberOfForks);}return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,lanes);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber3;}else{previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}if(getIsHydrating()){var _numberOfForks3=newIdx;pushTreeFork(returnFiber,_numberOfForks3);}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,lanes);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren["delete"](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else{previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}if(getIsHydrating()){var _numberOfForks4=newIdx;pushTreeFork(returnFiber,_numberOfForks4);}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,lanes){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(currentFirstChild!==null&&currentFirstChild.tag===HostText){// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,textContent);existing["return"]=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,lanes){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){var elementType=element.type;if(elementType===REACT_FRAGMENT_TYPE){if(child.tag===Fragment){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,element.props.children);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}else{if(child.elementType===elementType||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(child,element)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
_typeof(elementType)==='object'&&elementType!==null&&elementType.$$typeof===REACT_LAZY_TYPE&&resolveLazy(elementType)===child.type){deleteRemainingChildren(returnFiber,child.sibling);var _existing=useFiber(child,element.props);_existing.ref=coerceRef(returnFiber,child,element);_existing["return"]=returnFiber;{_existing._debugSource=element._source;_existing._debugOwner=element._owner;}return _existing;}}// Didn't match.
deleteRemainingChildren(returnFiber,child);break;}else{deleteChild(returnFiber,child);}child=child.sibling;}if(element.type===REACT_FRAGMENT_TYPE){var created=createFiberFromFragment(element.props.children,returnFiber.mode,lanes,element.key);created["return"]=returnFiber;return created;}else{var _created4=createFiberFromElement(element,returnFiber.mode,lanes);_created4.ref=coerceRef(returnFiber,currentFirstChild,element);_created4["return"]=returnFiber;return _created4;}}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,lanes){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,portal.children||[]);existing["return"]=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function reconcileChildFibers(returnFiber,currentFirstChild,newChild,lanes){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var isUnkeyedTopLevelFragment=_typeof(newChild)==='object'&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null;if(isUnkeyedTopLevelFragment){newChild=newChild.props.children;}// Handle object types
if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,lanes));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,lanes));case REACT_LAZY_TYPE:var payload=newChild._payload;var init=newChild._init;// TODO: This function is supposed to be non-recursive.
return reconcileChildFibers(returnFiber,currentFirstChild,init(payload),lanes);}if(isArray(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,lanes);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,lanes);}throwOnInvalidObjectType(returnFiber,newChild);}if(typeof newChild==='string'&&newChild!==''||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,lanes));}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}// Remaining cases are all treated as empty.
return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers=ChildReconciler(true);var mountChildFibers=ChildReconciler(false);function cloneChildFibers(current,workInProgress){if(current!==null&&workInProgress.child!==current.child){throw new Error('Resuming work not yet implemented.');}if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress(currentChild,currentChild.pendingProps);workInProgress.child=newChild;newChild["return"]=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps);newChild["return"]=workInProgress;}newChild.sibling=null;}// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(workInProgress,lanes){var child=workInProgress.child;while(child!==null){resetWorkInProgress(child,lanes);child=child.sibling;}}var NO_CONTEXT={};var contextStackCursor$1=createCursor(NO_CONTEXT);var contextFiberStackCursor=createCursor(NO_CONTEXT);var rootInstanceStackCursor=createCursor(NO_CONTEXT);function requiredContext(c){if(c===NO_CONTEXT){throw new Error('Expected host context to exist. This error is likely caused by a bug '+'in React. Please file an issue.');}return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(rootInstanceStackCursor,nextRootInstance,fiber);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(contextStackCursor$1,NO_CONTEXT,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Now that we know this function doesn't throw, replace it.
pop(contextStackCursor$1,fiber);push(contextStackCursor$1,nextRootContext,fiber);}function popHostContainer(fiber){pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor$1.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor$1.current);var nextContext=getChildHostContext(context,fiber.type);// Don't push this Fiber's context unless it's unique.
if(context===nextContext){return;}// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor$1,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
if(contextFiberStackCursor.current!==fiber){return;}pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);}var DefaultSuspenseContext=0;// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
var SubtreeSuspenseContextMask=1;// Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.
var InvisibleParentSuspenseContext=1;// Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.
var ForceSuspenseFallback=2;var suspenseStackCursor=createCursor(DefaultSuspenseContext);function hasSuspenseContext(parentContext,flag){return(parentContext&flag)!==0;}function setDefaultShallowSuspenseContext(parentContext){return parentContext&SubtreeSuspenseContextMask;}function setShallowSuspenseContext(parentContext,shallowContext){return parentContext&SubtreeSuspenseContextMask|shallowContext;}function addSubtreeSuspenseContext(parentContext,subtreeContext){return parentContext|subtreeContext;}function pushSuspenseContext(fiber,newContext){push(suspenseStackCursor,newContext,fiber);}function popSuspenseContext(fiber){pop(suspenseStackCursor,fiber);}function shouldCaptureSuspense(workInProgress,hasInvisibleParent){// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var nextState=workInProgress.memoizedState;if(nextState!==null){if(nextState.dehydrated!==null){// A dehydrated boundary always captures.
return true;}return false;}var props=workInProgress.memoizedProps;// Regular boundaries always capture.
{return true;}// If it's a boundary we should avoid, then we prefer to bubble up to the
}function findFirstSuspended(row){var node=row;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){var dehydrated=state.dehydrated;if(dehydrated===null||isSuspenseInstancePending(dehydrated)||isSuspenseInstanceFallback(dehydrated)){return node;}}}else if(node.tag===SuspenseListComponent&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
node.memoizedProps.revealOrder!==undefined){var didSuspend=(node.flags&DidCapture)!==NoFlags;if(didSuspend){return node;}}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===row){return null;}while(node.sibling===null){if(node["return"]===null||node["return"]===row){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}return null;}var NoFlags$1=/*   */0;// Represents whether effect should fire.
var HasEffect=/* */1;// Represents the phase in which the effect (not the clean-up) fires.
var Insertion=/*  */2;var Layout=/*    */4;var Passive$1=/*   */8;// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
var workInProgressSources=[];function resetWorkInProgressVersions(){for(var i=0;i<workInProgressSources.length;i++){var mutableSource=workInProgressSources[i];{mutableSource._workInProgressVersionPrimary=null;}}workInProgressSources.length=0;}// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and a full deopt render is required.
function registerMutableSourceForHydration(root,mutableSource){var getVersion=mutableSource._getVersion;var version=getVersion(mutableSource._source);// TODO Clear this data once all pending hydration work is finished.
// Retaining it forever may interfere with GC.
if(root.mutableSourceEagerHydrationData==null){root.mutableSourceEagerHydrationData=[mutableSource,version];}else{root.mutableSourceEagerHydrationData.push(mutableSource,version);}}var ReactCurrentDispatcher$1=ReactSharedInternals.ReactCurrentDispatcher,ReactCurrentBatchConfig$2=ReactSharedInternals.ReactCurrentBatchConfig;var didWarnAboutMismatchedHooksForComponent;var didWarnUncachedGetSnapshot;{didWarnAboutMismatchedHooksForComponent=new Set();}// These are set right before calling the component.
var renderLanes=NoLanes;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
var currentlyRenderingFiber$1=null;// Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.
var currentHook=null;var workInProgressHook=null;// Whether an update was scheduled at any point during the render phase. This
// does not get reset if we do another render pass; only when we're completely
// finished evaluating this component. This is an optimization so we know
// whether we need to clear render phase updates after a throw.
var didScheduleRenderPhaseUpdate=false;// Where an update was scheduled only during the current render pass. This
// gets reset after each attempt.
// TODO: Maybe there's some way to consolidate this with
// `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.
var didScheduleRenderPhaseUpdateDuringThisPass=false;// Counts the number of useId hooks in this component.
var localIdCounter=0;// Used for ids that are generated completely client-side (i.e. not during
// hydration). This counter is global, so client ids are not stable across
// render attempts.
var globalClientIdCounter=0;var RE_RENDER_LIMIT=25;// In DEV, this is the name of the currently executing primitive hook
var currentHookNameInDev=null;// In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.
var hookTypesDev=null;var hookTypesUpdateIndexDev=-1;// In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.
var ignorePreviousDependencies=false;function mountHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev===null){hookTypesDev=[hookName];}else{hookTypesDev.push(hookName);}}}function updateHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev!==null){hookTypesUpdateIndexDev++;if(hookTypesDev[hookTypesUpdateIndexDev]!==hookName){warnOnHookMismatchInDev(hookName);}}}}function checkDepsAreArrayDev(deps){{if(deps!==undefined&&deps!==null&&!isArray(deps)){// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
error('%s received a final argument that is not an array (instead, received `%s`). When '+'specified, the final argument must be an array.',currentHookNameInDev,_typeof(deps));}}}function warnOnHookMismatchInDev(currentHookName){{var componentName=getComponentNameFromFiber(currentlyRenderingFiber$1);if(!didWarnAboutMismatchedHooksForComponent.has(componentName)){didWarnAboutMismatchedHooksForComponent.add(componentName);if(hookTypesDev!==null){var table='';var secondColumnStart=30;for(var i=0;i<=hookTypesUpdateIndexDev;i++){var oldHookName=hookTypesDev[i];var newHookName=i===hookTypesUpdateIndexDev?currentHookName:oldHookName;var row=i+1+". "+oldHookName;// Extra space so second column lines up
// lol @ IE not supporting String#repeat
while(row.length<secondColumnStart){row+=' ';}row+=newHookName+'\n';table+=row;}error('React has detected a change in the order of Hooks called by %s. '+'This will lead to bugs and errors if not fixed. '+'For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n'+'   Previous render            Next render\n'+'   ------------------------------------------------------\n'+'%s'+'   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',componentName,table);}}}}function throwInvalidHookError(){throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for'+' one of the following reasons:\n'+'1. You might have mismatching versions of React and the renderer (such as React DOM)\n'+'2. You might be breaking the Rules of Hooks\n'+'3. You might have more than one copy of React in the same app\n'+'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');}function areHookInputsEqual(nextDeps,prevDeps){{if(ignorePreviousDependencies){// Only true when this component is being hot reloaded.
return false;}}if(prevDeps===null){{error('%s received a final argument during this render, but not during '+'the previous render. Even though the final argument is optional, '+'its type cannot change between renders.',currentHookNameInDev);}return false;}{// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
if(nextDeps.length!==prevDeps.length){error('The final argument passed to %s changed size between renders. The '+'order and size of this array must remain constant.\n\n'+'Previous: %s\n'+'Incoming: %s',currentHookNameInDev,"["+prevDeps.join(', ')+"]","["+nextDeps.join(', ')+"]");}}for(var i=0;i<prevDeps.length&&i<nextDeps.length;i++){if(objectIs(nextDeps[i],prevDeps[i])){continue;}return false;}return true;}function renderWithHooks(current,workInProgress,Component,props,secondArg,nextRenderLanes){renderLanes=nextRenderLanes;currentlyRenderingFiber$1=workInProgress;{hookTypesDev=current!==null?current._debugHookTypes:null;hookTypesUpdateIndexDev=-1;// Used for hot reloading:
ignorePreviousDependencies=current!==null&&current.type!==workInProgress.type;}workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.lanes=NoLanes;// The following should have already been reset
// currentHook = null;
// workInProgressHook = null;
// didScheduleRenderPhaseUpdate = false;
// localIdCounter = 0;
// TODO Warn if no hooks are used at all during mount, then some are used during update.
// Currently we will identify the update render as a mount because memoizedState === null.
// This is tricky because it's valid for certain types of components (e.g. React.lazy)
// Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
// Non-stateful hooks (e.g. context) don't get added to memoizedState,
// so memoizedState would be null during updates and mounts.
{if(current!==null&&current.memoizedState!==null){ReactCurrentDispatcher$1.current=HooksDispatcherOnUpdateInDEV;}else if(hookTypesDev!==null){// This dispatcher handles an edge case where a component is updating,
// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
ReactCurrentDispatcher$1.current=HooksDispatcherOnMountWithHookTypesInDEV;}else{ReactCurrentDispatcher$1.current=HooksDispatcherOnMountInDEV;}}var children=Component(props,secondArg);// Check if there was a render phase update
if(didScheduleRenderPhaseUpdateDuringThisPass){// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var numberOfReRenders=0;do{didScheduleRenderPhaseUpdateDuringThisPass=false;localIdCounter=0;if(numberOfReRenders>=RE_RENDER_LIMIT){throw new Error('Too many re-renders. React limits the number of renders to prevent '+'an infinite loop.');}numberOfReRenders+=1;{// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
ignorePreviousDependencies=false;}// Start over from the beginning of the list
currentHook=null;workInProgressHook=null;workInProgress.updateQueue=null;{// Also validate hook order for cascading updates.
hookTypesUpdateIndexDev=-1;}ReactCurrentDispatcher$1.current=HooksDispatcherOnRerenderInDEV;children=Component(props,secondArg);}while(didScheduleRenderPhaseUpdateDuringThisPass);}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrance.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;{workInProgress._debugHookTypes=hookTypesDev;}// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var didRenderTooFewHooks=currentHook!==null&&currentHook.next!==null;renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{currentHookNameInDev=null;hookTypesDev=null;hookTypesUpdateIndexDev=-1;// Confirm that a static flag was not added or removed since the last
// render. If this fires, it suggests that we incorrectly reset the static
// flags in some other part of the codebase. This has happened before, for
// example, in the SuspenseList implementation.
if(current!==null&&(current.flags&StaticMask)!==(workInProgress.flags&StaticMask)&&// Disable this warning in legacy mode, because legacy Suspense is weird
// and creates false positives. To make this work in legacy mode, we'd
// need to mark fibers that commit in an incomplete state, somehow. For
// now I'll disable the warning that most of the bugs that would trigger
// it are either exclusive to concurrent mode or exist in both.
(current.mode&ConcurrentMode)!==NoMode){error('Internal React error: Expected static flag was missing. Please '+'notify the React team.');}}didScheduleRenderPhaseUpdate=false;// This is reset by checkDidRenderIdHook
// localIdCounter = 0;
if(didRenderTooFewHooks){throw new Error('Rendered fewer hooks than expected. This may be caused by an accidental '+'early return statement.');}return children;}function checkDidRenderIdHook(){// This should be called immediately after every renderWithHooks call.
// Conceptually, it's part of the return value of renderWithHooks; it's only a
// separate function to avoid using an array tuple.
var didRenderIdHook=localIdCounter!==0;localIdCounter=0;return didRenderIdHook;}function bailoutHooks(current,workInProgress,lanes){workInProgress.updateQueue=current.updateQueue;// TODO: Don't need to reset the flags here, because they're reset in the
// complete phase (bubbleProperties).
if((workInProgress.mode&StrictEffectsMode)!==NoMode){workInProgress.flags&=~(MountPassiveDev|MountLayoutDev|Passive|Update);}else{workInProgress.flags&=~(Passive|Update);}current.lanes=removeLanes(current.lanes,lanes);}function resetHooksAfterThrow(){// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrance.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;if(didScheduleRenderPhaseUpdate){// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
//
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
var hook=currentlyRenderingFiber$1.memoizedState;while(hook!==null){var queue=hook.queue;if(queue!==null){queue.pending=null;}hook=hook.next;}didScheduleRenderPhaseUpdate=false;}renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{hookTypesDev=null;hookTypesUpdateIndexDev=-1;currentHookNameInDev=null;isUpdatingOpaqueValueInRenderPhase=false;}didScheduleRenderPhaseUpdateDuringThisPass=false;localIdCounter=0;}function mountWorkInProgressHook(){var hook={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};if(workInProgressHook===null){// This is the first hook in the list
currentlyRenderingFiber$1.memoizedState=workInProgressHook=hook;}else{// Append to the end of the list
workInProgressHook=workInProgressHook.next=hook;}return workInProgressHook;}function updateWorkInProgressHook(){// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
var nextCurrentHook;if(currentHook===null){var current=currentlyRenderingFiber$1.alternate;if(current!==null){nextCurrentHook=current.memoizedState;}else{nextCurrentHook=null;}}else{nextCurrentHook=currentHook.next;}var nextWorkInProgressHook;if(workInProgressHook===null){nextWorkInProgressHook=currentlyRenderingFiber$1.memoizedState;}else{nextWorkInProgressHook=workInProgressHook.next;}if(nextWorkInProgressHook!==null){// There's already a work-in-progress. Reuse it.
workInProgressHook=nextWorkInProgressHook;nextWorkInProgressHook=workInProgressHook.next;currentHook=nextCurrentHook;}else{// Clone from the current hook.
if(nextCurrentHook===null){throw new Error('Rendered more hooks than during the previous render.');}currentHook=nextCurrentHook;var newHook={memoizedState:currentHook.memoizedState,baseState:currentHook.baseState,baseQueue:currentHook.baseQueue,queue:currentHook.queue,next:null};if(workInProgressHook===null){// This is the first hook in the list.
currentlyRenderingFiber$1.memoizedState=workInProgressHook=newHook;}else{// Append to the end of the list.
workInProgressHook=workInProgressHook.next=newHook;}}return workInProgressHook;}function createFunctionComponentUpdateQueue(){return{lastEffect:null,stores:null};}function basicStateReducer(state,action){// $FlowFixMe: Flow doesn't like mixed types
return typeof action==='function'?action(state):action;}function mountReducer(reducer,initialArg,init){var hook=mountWorkInProgressHook();var initialState;if(init!==undefined){initialState=init(initialArg);}else{initialState=initialArg;}hook.memoizedState=hook.baseState=initialState;var queue={pending:null,interleaved:null,lanes:NoLanes,dispatch:null,lastRenderedReducer:reducer,lastRenderedState:initialState};hook.queue=queue;var dispatch=queue.dispatch=dispatchReducerAction.bind(null,currentlyRenderingFiber$1,queue);return[hook.memoizedState,dispatch];}function updateReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(queue===null){throw new Error('Should have a queue. This is likely a bug in React. Please file an issue.');}queue.lastRenderedReducer=reducer;var current=currentHook;// The last rebase update that is NOT part of the base state.
var baseQueue=current.baseQueue;// The last pending update that hasn't been processed yet.
var pendingQueue=queue.pending;if(pendingQueue!==null){// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(baseQueue!==null){// Merge the pending queue and the base queue.
var baseFirst=baseQueue.next;var pendingFirst=pendingQueue.next;baseQueue.next=pendingFirst;pendingQueue.next=baseFirst;}{if(current.baseQueue!==baseQueue){// Internal invariant that should never happen, but feasibly could in
// the future if we implement resuming, or some form of that.
error('Internal error: Expected work-in-progress queue to be a clone. '+'This is a bug in React.');}}current.baseQueue=baseQueue=pendingQueue;queue.pending=null;}if(baseQueue!==null){// We have a queue to process.
var first=baseQueue.next;var newState=current.baseState;var newBaseState=null;var newBaseQueueFirst=null;var newBaseQueueLast=null;var update=first;do{var updateLane=update.lane;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var clone={lane:updateLane,action:update.action,hasEagerState:update.hasEagerState,eagerState:update.eagerState,next:null};if(newBaseQueueLast===null){newBaseQueueFirst=newBaseQueueLast=clone;newBaseState=newState;}else{newBaseQueueLast=newBaseQueueLast.next=clone;}// Update the remaining priority in the queue.
// TODO: Don't need to accumulate this. Instead, we can remove
// renderLanes from the original lanes.
currentlyRenderingFiber$1.lanes=mergeLanes(currentlyRenderingFiber$1.lanes,updateLane);markSkippedUpdateLanes(updateLane);}else{// This update does have sufficient priority.
if(newBaseQueueLast!==null){var _clone={// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:NoLane,action:update.action,hasEagerState:update.hasEagerState,eagerState:update.eagerState,next:null};newBaseQueueLast=newBaseQueueLast.next=_clone;}// Process this update.
if(update.hasEagerState){// If this update is a state update (not a reducer) and was processed eagerly,
// we can use the eagerly computed state
newState=update.eagerState;}else{var action=update.action;newState=reducer(newState,action);}}update=update.next;}while(update!==null&&update!==first);if(newBaseQueueLast===null){newBaseState=newState;}else{newBaseQueueLast.next=newBaseQueueFirst;}// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;hook.baseState=newBaseState;hook.baseQueue=newBaseQueueLast;queue.lastRenderedState=newState;}// Interleaved updates are stored on a separate queue. We aren't going to
// process them during this render, but we do need to track which lanes
// are remaining.
var lastInterleaved=queue.interleaved;if(lastInterleaved!==null){var interleaved=lastInterleaved;do{var interleavedLane=interleaved.lane;currentlyRenderingFiber$1.lanes=mergeLanes(currentlyRenderingFiber$1.lanes,interleavedLane);markSkippedUpdateLanes(interleavedLane);interleaved=interleaved.next;}while(interleaved!==lastInterleaved);}else if(baseQueue===null){// `queue.lanes` is used for entangling transitions. We can set it back to
// zero once the queue is empty.
queue.lanes=NoLanes;}var dispatch=queue.dispatch;return[hook.memoizedState,dispatch];}function rerenderReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(queue===null){throw new Error('Should have a queue. This is likely a bug in React. Please file an issue.');}queue.lastRenderedReducer=reducer;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var dispatch=queue.dispatch;var lastRenderPhaseUpdate=queue.pending;var newState=hook.memoizedState;if(lastRenderPhaseUpdate!==null){// The queue doesn't persist past this render pass.
queue.pending=null;var firstRenderPhaseUpdate=lastRenderPhaseUpdate.next;var update=firstRenderPhaseUpdate;do{// Process this render phase update. We don't have to check the
// priority because it will always be the same as the current
// render's.
var action=update.action;newState=reducer(newState,action);update=update.next;}while(update!==firstRenderPhaseUpdate);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
if(hook.baseQueue===null){hook.baseState=newState;}queue.lastRenderedState=newState;}return[newState,dispatch];}function mountMutableSource(source,getSnapshot,subscribe){{return undefined;}}function updateMutableSource(source,getSnapshot,subscribe){{return undefined;}}function mountSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){var fiber=currentlyRenderingFiber$1;var hook=mountWorkInProgressHook();var nextSnapshot;var isHydrating=getIsHydrating();if(isHydrating){if(getServerSnapshot===undefined){throw new Error('Missing getServerSnapshot, which is required for '+'server-rendered content. Will revert to client rendering.');}nextSnapshot=getServerSnapshot();{if(!didWarnUncachedGetSnapshot){if(nextSnapshot!==getServerSnapshot()){error('The result of getServerSnapshot should be cached to avoid an infinite loop');didWarnUncachedGetSnapshot=true;}}}}else{nextSnapshot=getSnapshot();{if(!didWarnUncachedGetSnapshot){var cachedSnapshot=getSnapshot();if(!objectIs(nextSnapshot,cachedSnapshot)){error('The result of getSnapshot should be cached to avoid an infinite loop');didWarnUncachedGetSnapshot=true;}}}// Unless we're rendering a blocking lane, schedule a consistency check.
// Right before committing, we will walk the tree and check if any of the
// stores were mutated.
//
// We won't do this if we're hydrating server-rendered content, because if
// the content is stale, it's already visible anyway. Instead we'll patch
// it up in a passive effect.
var root=getWorkInProgressRoot();if(root===null){throw new Error('Expected a work-in-progress root. This is a bug in React. Please file an issue.');}if(!includesBlockingLane(root,renderLanes)){pushStoreConsistencyCheck(fiber,getSnapshot,nextSnapshot);}}// Read the current snapshot from the store on every render. This breaks the
// normal rules of React, and only works because store updates are
// always synchronous.
hook.memoizedState=nextSnapshot;var inst={value:nextSnapshot,getSnapshot:getSnapshot};hook.queue=inst;// Schedule an effect to subscribe to the store.
mountEffect(subscribeToStore.bind(null,fiber,inst,subscribe),[subscribe]);// Schedule an effect to update the mutable instance fields. We will update
// this whenever subscribe, getSnapshot, or value changes. Because there's no
// clean-up function, and we track the deps correctly, we can call pushEffect
// directly, without storing any additional state. For the same reason, we
// don't need to set a static flag, either.
// TODO: We can move this to the passive phase once we add a pre-commit
// consistency check. See the next comment.
fiber.flags|=Passive;pushEffect(HasEffect|Passive$1,updateStoreInstance.bind(null,fiber,inst,nextSnapshot,getSnapshot),undefined,null);return nextSnapshot;}function updateSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){var fiber=currentlyRenderingFiber$1;var hook=updateWorkInProgressHook();// Read the current snapshot from the store on every render. This breaks the
// normal rules of React, and only works because store updates are
// always synchronous.
var nextSnapshot=getSnapshot();{if(!didWarnUncachedGetSnapshot){var cachedSnapshot=getSnapshot();if(!objectIs(nextSnapshot,cachedSnapshot)){error('The result of getSnapshot should be cached to avoid an infinite loop');didWarnUncachedGetSnapshot=true;}}}var prevSnapshot=hook.memoizedState;var snapshotChanged=!objectIs(prevSnapshot,nextSnapshot);if(snapshotChanged){hook.memoizedState=nextSnapshot;markWorkInProgressReceivedUpdate();}var inst=hook.queue;updateEffect(subscribeToStore.bind(null,fiber,inst,subscribe),[subscribe]);// Whenever getSnapshot or subscribe changes, we need to check in the
// commit phase if there was an interleaved mutation. In concurrent mode
// this can happen all the time, but even in synchronous mode, an earlier
// effect may have mutated the store.
if(inst.getSnapshot!==getSnapshot||snapshotChanged||// Check if the susbcribe function changed. We can save some memory by
// checking whether we scheduled a subscription effect above.
workInProgressHook!==null&&workInProgressHook.memoizedState.tag&HasEffect){fiber.flags|=Passive;pushEffect(HasEffect|Passive$1,updateStoreInstance.bind(null,fiber,inst,nextSnapshot,getSnapshot),undefined,null);// Unless we're rendering a blocking lane, schedule a consistency check.
// Right before committing, we will walk the tree and check if any of the
// stores were mutated.
var root=getWorkInProgressRoot();if(root===null){throw new Error('Expected a work-in-progress root. This is a bug in React. Please file an issue.');}if(!includesBlockingLane(root,renderLanes)){pushStoreConsistencyCheck(fiber,getSnapshot,nextSnapshot);}}return nextSnapshot;}function pushStoreConsistencyCheck(fiber,getSnapshot,renderedSnapshot){fiber.flags|=StoreConsistency;var check={getSnapshot:getSnapshot,value:renderedSnapshot};var componentUpdateQueue=currentlyRenderingFiber$1.updateQueue;if(componentUpdateQueue===null){componentUpdateQueue=createFunctionComponentUpdateQueue();currentlyRenderingFiber$1.updateQueue=componentUpdateQueue;componentUpdateQueue.stores=[check];}else{var stores=componentUpdateQueue.stores;if(stores===null){componentUpdateQueue.stores=[check];}else{stores.push(check);}}}function updateStoreInstance(fiber,inst,nextSnapshot,getSnapshot){// These are updated in the passive phase
inst.value=nextSnapshot;inst.getSnapshot=getSnapshot;// Something may have been mutated in between render and commit. This could
// have been in an event that fired before the passive effects, or it could
// have been in a layout effect. In that case, we would have used the old
// snapsho and getSnapshot values to bail out. We need to check one more time.
if(checkIfSnapshotChanged(inst)){// Force a re-render.
forceStoreRerender(fiber);}}function subscribeToStore(fiber,inst,subscribe){var handleStoreChange=function handleStoreChange(){// The store changed. Check if the snapshot changed since the last time we
// read from the store.
if(checkIfSnapshotChanged(inst)){// Force a re-render.
forceStoreRerender(fiber);}};// Subscribe to the store and return a clean-up function.
return subscribe(handleStoreChange);}function checkIfSnapshotChanged(inst){var latestGetSnapshot=inst.getSnapshot;var prevValue=inst.value;try{var nextValue=latestGetSnapshot();return!objectIs(prevValue,nextValue);}catch(error){return true;}}function forceStoreRerender(fiber){scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}function mountState(initialState){var hook=mountWorkInProgressHook();if(typeof initialState==='function'){// $FlowFixMe: Flow doesn't like mixed types
initialState=initialState();}hook.memoizedState=hook.baseState=initialState;var queue={pending:null,interleaved:null,lanes:NoLanes,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:initialState};hook.queue=queue;var dispatch=queue.dispatch=dispatchSetState.bind(null,currentlyRenderingFiber$1,queue);return[hook.memoizedState,dispatch];}function updateState(initialState){return updateReducer(basicStateReducer);}function rerenderState(initialState){return rerenderReducer(basicStateReducer);}function pushEffect(tag,create,destroy,deps){var effect={tag:tag,create:create,destroy:destroy,deps:deps,// Circular
next:null};var componentUpdateQueue=currentlyRenderingFiber$1.updateQueue;if(componentUpdateQueue===null){componentUpdateQueue=createFunctionComponentUpdateQueue();currentlyRenderingFiber$1.updateQueue=componentUpdateQueue;componentUpdateQueue.lastEffect=effect.next=effect;}else{var lastEffect=componentUpdateQueue.lastEffect;if(lastEffect===null){componentUpdateQueue.lastEffect=effect.next=effect;}else{var firstEffect=lastEffect.next;lastEffect.next=effect;effect.next=firstEffect;componentUpdateQueue.lastEffect=effect;}}return effect;}function mountRef(initialValue){var hook=mountWorkInProgressHook();{var _ref2={current:initialValue};hook.memoizedState=_ref2;return _ref2;}}function updateRef(initialValue){var hook=updateWorkInProgressHook();return hook.memoizedState;}function mountEffectImpl(fiberFlags,hookFlags,create,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,undefined,nextDeps);}function updateEffectImpl(fiberFlags,hookFlags,create,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var destroy=undefined;if(currentHook!==null){var prevEffect=currentHook.memoizedState;destroy=prevEffect.destroy;if(nextDeps!==null){var prevDeps=prevEffect.deps;if(areHookInputsEqual(nextDeps,prevDeps)){hook.memoizedState=pushEffect(hookFlags,create,destroy,nextDeps);return;}}}currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,destroy,nextDeps);}function mountEffect(create,deps){if((currentlyRenderingFiber$1.mode&StrictEffectsMode)!==NoMode){return mountEffectImpl(MountPassiveDev|Passive|PassiveStatic,Passive$1,create,deps);}else{return mountEffectImpl(Passive|PassiveStatic,Passive$1,create,deps);}}function updateEffect(create,deps){return updateEffectImpl(Passive,Passive$1,create,deps);}function mountInsertionEffect(create,deps){return mountEffectImpl(Update,Insertion,create,deps);}function updateInsertionEffect(create,deps){return updateEffectImpl(Update,Insertion,create,deps);}function mountLayoutEffect(create,deps){var fiberFlags=Update;{fiberFlags|=LayoutStatic;}if((currentlyRenderingFiber$1.mode&StrictEffectsMode)!==NoMode){fiberFlags|=MountLayoutDev;}return mountEffectImpl(fiberFlags,Layout,create,deps);}function updateLayoutEffect(create,deps){return updateEffectImpl(Update,Layout,create,deps);}function imperativeHandleEffect(create,ref){if(typeof ref==='function'){var refCallback=ref;var _inst=create();refCallback(_inst);return function(){refCallback(null);};}else if(ref!==null&&ref!==undefined){var refObject=ref;{if(!refObject.hasOwnProperty('current')){error('Expected useImperativeHandle() first argument to either be a '+'ref callback or React.createRef() object. Instead received: %s.','an object with keys {'+Object.keys(refObject).join(', ')+'}');}}var _inst2=create();refObject.current=_inst2;return function(){refObject.current=null;};}}function mountImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;var fiberFlags=Update;{fiberFlags|=LayoutStatic;}if((currentlyRenderingFiber$1.mode&StrictEffectsMode)!==NoMode){fiberFlags|=MountLayoutDev;}return mountEffectImpl(fiberFlags,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function updateImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return updateEffectImpl(Update,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function mountDebugValue(value,formatterFn){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var updateDebugValue=mountDebugValue;function mountCallback(callback,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;hook.memoizedState=[callback,nextDeps];return callback;}function updateCallback(callback,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}hook.memoizedState=[callback,nextDeps];return callback;}function mountMemo(nextCreate,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function updateMemo(nextCreate,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){// Assume these are defined. If they're not, areHookInputsEqual will warn.
if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function mountDeferredValue(value){var hook=mountWorkInProgressHook();hook.memoizedState=value;return value;}function updateDeferredValue(value){var hook=updateWorkInProgressHook();var resolvedCurrentHook=currentHook;var prevValue=resolvedCurrentHook.memoizedState;return updateDeferredValueImpl(hook,prevValue,value);}function rerenderDeferredValue(value){var hook=updateWorkInProgressHook();if(currentHook===null){// This is a rerender during a mount.
hook.memoizedState=value;return value;}else{// This is a rerender during an update.
var prevValue=currentHook.memoizedState;return updateDeferredValueImpl(hook,prevValue,value);}}function updateDeferredValueImpl(hook,prevValue,value){var shouldDeferValue=!includesOnlyNonUrgentLanes(renderLanes);if(shouldDeferValue){// This is an urgent update. If the value has changed, keep using the
// previous value and spawn a deferred render to update it later.
if(!objectIs(value,prevValue)){// Schedule a deferred render
var deferredLane=claimNextTransitionLane();currentlyRenderingFiber$1.lanes=mergeLanes(currentlyRenderingFiber$1.lanes,deferredLane);markSkippedUpdateLanes(deferredLane);// Set this to true to indicate that the rendered value is inconsistent
// from the latest value. The name "baseState" doesn't really match how we
// use it because we're reusing a state hook field instead of creating a
// new one.
hook.baseState=true;}// Reuse the previous value
return prevValue;}else{// This is not an urgent update, so we can use the latest value regardless
// of what it is. No need to defer it.
// However, if we're currently inside a spawned render, then we need to mark
// this as an update to prevent the fiber from bailing out.
//
// `baseState` is true when the current value is different from the rendered
// value. The name doesn't really match how we use it because we're reusing
// a state hook field instead of creating a new one.
if(hook.baseState){// Flip this back to false.
hook.baseState=false;markWorkInProgressReceivedUpdate();}hook.memoizedState=value;return value;}}function startTransition(setPending,callback,options){var previousPriority=getCurrentUpdatePriority();setCurrentUpdatePriority(higherEventPriority(previousPriority,ContinuousEventPriority));setPending(true);var prevTransition=ReactCurrentBatchConfig$2.transition;ReactCurrentBatchConfig$2.transition={};var currentTransition=ReactCurrentBatchConfig$2.transition;{ReactCurrentBatchConfig$2.transition._updatedFibers=new Set();}try{setPending(false);callback();}finally{setCurrentUpdatePriority(previousPriority);ReactCurrentBatchConfig$2.transition=prevTransition;{if(prevTransition===null&&currentTransition._updatedFibers){var updatedFibersCount=currentTransition._updatedFibers.size;if(updatedFibersCount>10){warn('Detected a large number of updates inside startTransition. '+'If this is due to a subscription please re-write it to use React provided hooks. '+'Otherwise concurrent mode guarantees are off the table.');}currentTransition._updatedFibers.clear();}}}}function mountTransition(){var _mountState=mountState(false),isPending=_mountState[0],setPending=_mountState[1];// The `start` method never changes.
var start=startTransition.bind(null,setPending);var hook=mountWorkInProgressHook();hook.memoizedState=start;return[isPending,start];}function updateTransition(){var _updateState=updateState(),isPending=_updateState[0];var hook=updateWorkInProgressHook();var start=hook.memoizedState;return[isPending,start];}function rerenderTransition(){var _rerenderState=rerenderState(),isPending=_rerenderState[0];var hook=updateWorkInProgressHook();var start=hook.memoizedState;return[isPending,start];}var isUpdatingOpaqueValueInRenderPhase=false;function getIsUpdatingOpaqueValueInRenderPhaseInDEV(){{return isUpdatingOpaqueValueInRenderPhase;}}function mountId(){var hook=mountWorkInProgressHook();var root=getWorkInProgressRoot();// TODO: In Fizz, id generation is specific to each server config. Maybe we
// should do this in Fiber, too? Deferring this decision for now because
// there's no other place to store the prefix except for an internal field on
// the public createRoot object, which the fiber tree does not currently have
// a reference to.
var identifierPrefix=root.identifierPrefix;var id;if(getIsHydrating()){var treeId=getTreeId();// Use a captial R prefix for server-generated ids.
id=':'+identifierPrefix+'R'+treeId;// Unless this is the first id at this level, append a number at the end
// that represents the position of this useId hook among all the useId
// hooks for this fiber.
var localId=localIdCounter++;if(localId>0){id+='H'+localId.toString(32);}id+=':';}else{// Use a lowercase r prefix for client-generated ids.
var globalClientId=globalClientIdCounter++;id=':'+identifierPrefix+'r'+globalClientId.toString(32)+':';}hook.memoizedState=id;return id;}function updateId(){var hook=updateWorkInProgressHook();var id=hook.memoizedState;return id;}function dispatchReducerAction(fiber,queue,action){{if(typeof arguments[3]==='function'){error("State updates from the useState() and useReducer() Hooks don't support the "+'second callback argument. To execute a side effect after '+'rendering, declare it in the component body with useEffect().');}}var lane=requestUpdateLane(fiber);var update={lane:lane,action:action,hasEagerState:false,eagerState:null,next:null};if(isRenderPhaseUpdate(fiber)){enqueueRenderPhaseUpdate(queue,update);}else{enqueueUpdate$1(fiber,queue,update);var eventTime=requestEventTime();var root=scheduleUpdateOnFiber(fiber,lane,eventTime);if(root!==null){entangleTransitionUpdate(root,queue,lane);}}markUpdateInDevTools(fiber,lane);}function dispatchSetState(fiber,queue,action){{if(typeof arguments[3]==='function'){error("State updates from the useState() and useReducer() Hooks don't support the "+'second callback argument. To execute a side effect after '+'rendering, declare it in the component body with useEffect().');}}var lane=requestUpdateLane(fiber);var update={lane:lane,action:action,hasEagerState:false,eagerState:null,next:null};if(isRenderPhaseUpdate(fiber)){enqueueRenderPhaseUpdate(queue,update);}else{enqueueUpdate$1(fiber,queue,update);var alternate=fiber.alternate;if(fiber.lanes===NoLanes&&(alternate===null||alternate.lanes===NoLanes)){// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var lastRenderedReducer=queue.lastRenderedReducer;if(lastRenderedReducer!==null){var prevDispatcher;{prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;}try{var currentState=queue.lastRenderedState;var eagerState=lastRenderedReducer(currentState,action);// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
update.hasEagerState=true;update.eagerState=eagerState;if(objectIs(eagerState,currentState)){// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return;}}catch(error){// Suppress the error. It will throw again in the render phase.
}finally{{ReactCurrentDispatcher$1.current=prevDispatcher;}}}}var eventTime=requestEventTime();var root=scheduleUpdateOnFiber(fiber,lane,eventTime);if(root!==null){entangleTransitionUpdate(root,queue,lane);}}markUpdateInDevTools(fiber,lane);}function isRenderPhaseUpdate(fiber){var alternate=fiber.alternate;return fiber===currentlyRenderingFiber$1||alternate!==null&&alternate===currentlyRenderingFiber$1;}function enqueueRenderPhaseUpdate(queue,update){// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
didScheduleRenderPhaseUpdateDuringThisPass=didScheduleRenderPhaseUpdate=true;var pending=queue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else{update.next=pending.next;pending.next=update;}queue.pending=update;}function enqueueUpdate$1(fiber,queue,update,lane){if(isInterleavedUpdate(fiber)){var interleaved=queue.interleaved;if(interleaved===null){// This is the first update. Create a circular list.
update.next=update;// At the end of the current render, this queue's interleaved updates will
// be transferred to the pending queue.
pushInterleavedQueue(queue);}else{update.next=interleaved.next;interleaved.next=update;}queue.interleaved=update;}else{var pending=queue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else{update.next=pending.next;pending.next=update;}queue.pending=update;}}function entangleTransitionUpdate(root,queue,lane){if(isTransitionLane(lane)){var queueLanes=queue.lanes;// If any entangled lanes are no longer pending on the root, then they
// must have finished. We can remove them from the shared queue, which
// represents a superset of the actually pending lanes. In some cases we
// may entangle more than we need to, but that's OK. In fact it's worse if
// we *don't* entangle when we should.
queueLanes=intersectLanes(queueLanes,root.pendingLanes);// Entangle the new transition lane with the other transition lanes.
var newQueueLanes=mergeLanes(queueLanes,lane);queue.lanes=newQueueLanes;// Even if queue.lanes already include lane, we don't know for certain if
// the lane finished since the last time we entangled it. So we need to
// entangle it again, just to be sure.
markRootEntangled(root,newQueueLanes);}}function markUpdateInDevTools(fiber,lane,action){{markStateUpdateScheduled(fiber,lane);}}var ContextOnlyDispatcher={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useInsertionEffect:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError,useMutableSource:throwInvalidHookError,useSyncExternalStore:throwInvalidHookError,useId:throwInvalidHookError,unstable_isNewReconciler:enableNewReconciler};var HooksDispatcherOnMountInDEV=null;var HooksDispatcherOnMountWithHookTypesInDEV=null;var HooksDispatcherOnUpdateInDEV=null;var HooksDispatcherOnRerenderInDEV=null;var InvalidNestedHooksDispatcherOnMountInDEV=null;var InvalidNestedHooksDispatcherOnUpdateInDEV=null;var InvalidNestedHooksDispatcherOnRerenderInDEV=null;{var warnInvalidContextAccess=function warnInvalidContextAccess(){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');};var warnInvalidHookAccess=function warnInvalidHookAccess(){error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. '+'You can only call Hooks at the top level of your React function. '+'For more information, see '+'https://reactjs.org/link/rules-of-hooks');};HooksDispatcherOnMountInDEV={readContext:function readContext(context){return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';mountHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';mountHookTypesDev();checkDepsAreArrayDev(deps);var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';mountHookTypesDev();return mountMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';mountHookTypesDev();return mountSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);},useId:function useId(){currentHookNameInDev='useId';mountHookTypesDev();return mountId();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnMountWithHookTypesInDEV={readContext:function readContext(context){return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return mountImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';updateHookTypesDev();return mountInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return mountMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';updateHookTypesDev();return mountSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);},useId:function useId(){currentHookNameInDev='useId';updateHookTypesDev();return mountId();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnUpdateInDEV={readContext:function readContext(context){return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';updateHookTypesDev();return updateInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';updateHookTypesDev();return updateSyncExternalStore(subscribe,getSnapshot);},useId:function useId(){currentHookNameInDev='useId';updateHookTypesDev();return updateId();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnRerenderInDEV={readContext:function readContext(context){return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';updateHookTypesDev();return updateInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';updateHookTypesDev();return updateSyncExternalStore(subscribe,getSnapshot);},useId:function useId(){currentHookNameInDev='useId';updateHookTypesDev();return updateId();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnMountInDEV={readContext:function readContext(context){warnInvalidContextAccess();return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();mountHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';warnInvalidHookAccess();mountHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();mountHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();mountHookTypesDev();return mountImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';warnInvalidHookAccess();mountHookTypesDev();return mountInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();mountHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();mountHookTypesDev();return mountMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';warnInvalidHookAccess();mountHookTypesDev();return mountSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);},useId:function useId(){currentHookNameInDev='useId';warnInvalidHookAccess();mountHookTypesDev();return mountId();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnUpdateInDEV={readContext:function readContext(context){warnInvalidContextAccess();return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';warnInvalidHookAccess();updateHookTypesDev();return updateInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';warnInvalidHookAccess();updateHookTypesDev();return updateSyncExternalStore(subscribe,getSnapshot);},useId:function useId(){currentHookNameInDev='useId';warnInvalidHookAccess();updateHookTypesDev();return updateId();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnRerenderInDEV={readContext:function readContext(context){warnInvalidContextAccess();return _readContext(context);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useInsertionEffect:function useInsertionEffect(create,deps){currentHookNameInDev='useInsertionEffect';warnInvalidHookAccess();updateHookTypesDev();return updateInsertionEffect(create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource();},useSyncExternalStore:function useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot){currentHookNameInDev='useSyncExternalStore';warnInvalidHookAccess();updateHookTypesDev();return updateSyncExternalStore(subscribe,getSnapshot);},useId:function useId(){currentHookNameInDev='useId';warnInvalidHookAccess();updateHookTypesDev();return updateId();},unstable_isNewReconciler:enableNewReconciler};}var now$1=Scheduler.unstable_now;var commitTime=0;var layoutEffectStartTime=-1;var profilerStartTime=-1;var passiveEffectStartTime=-1;/**
 * Tracks whether the current update was a nested/cascading update (scheduled from a layout effect).
 *
 * The overall sequence is:
 *   1. render
 *   2. commit (and call `onRender`, `onCommit`)
 *   3. check for nested updates
 *   4. flush passive effects (and call `onPostCommit`)
 *
 * Nested updates are identified in step 3 above,
 * but step 4 still applies to the work that was just committed.
 * We use two flags to track nested updates then:
 * one tracks whether the upcoming update is a nested update,
 * and the other tracks whether the current update was a nested update.
 * The first value gets synced to the second at the start of the render phase.
 */var currentUpdateIsNested=false;var nestedUpdateScheduled=false;function isCurrentUpdateNested(){return currentUpdateIsNested;}function markNestedUpdateScheduled(){{nestedUpdateScheduled=true;}}function resetNestedUpdateFlag(){{currentUpdateIsNested=false;nestedUpdateScheduled=false;}}function syncNestedUpdateFlag(){{currentUpdateIsNested=nestedUpdateScheduled;nestedUpdateScheduled=false;}}function getCommitTime(){return commitTime;}function recordCommitTime(){commitTime=now$1();}function startProfilerTimer(fiber){profilerStartTime=now$1();if(fiber.actualStartTime<0){fiber.actualStartTime=now$1();}}function stopProfilerTimerIfRunning(fiber){profilerStartTime=-1;}function stopProfilerTimerIfRunningAndRecordDelta(fiber,overrideBaseTime){if(profilerStartTime>=0){var elapsedTime=now$1()-profilerStartTime;fiber.actualDuration+=elapsedTime;if(overrideBaseTime){fiber.selfBaseDuration=elapsedTime;}profilerStartTime=-1;}}function recordLayoutEffectDuration(fiber){if(layoutEffectStartTime>=0){var elapsedTime=now$1()-layoutEffectStartTime;layoutEffectStartTime=-1;// Store duration on the next nearest Profiler ancestor
// Or the root (for the DevTools Profiler to read)
var parentFiber=fiber["return"];while(parentFiber!==null){switch(parentFiber.tag){case HostRoot:var root=parentFiber.stateNode;root.effectDuration+=elapsedTime;return;case Profiler:var parentStateNode=parentFiber.stateNode;parentStateNode.effectDuration+=elapsedTime;return;}parentFiber=parentFiber["return"];}}}function recordPassiveEffectDuration(fiber){if(passiveEffectStartTime>=0){var elapsedTime=now$1()-passiveEffectStartTime;passiveEffectStartTime=-1;// Store duration on the next nearest Profiler ancestor
// Or the root (for the DevTools Profiler to read)
var parentFiber=fiber["return"];while(parentFiber!==null){switch(parentFiber.tag){case HostRoot:var root=parentFiber.stateNode;if(root!==null){root.passiveEffectDuration+=elapsedTime;}return;case Profiler:var parentStateNode=parentFiber.stateNode;if(parentStateNode!==null){// Detached fibers have their state node cleared out.
// In this case, the return pointer is also cleared out,
// so we won't be able to report the time spent in this Profiler's subtree.
parentStateNode.passiveEffectDuration+=elapsedTime;}return;}parentFiber=parentFiber["return"];}}}function startLayoutEffectTimer(){layoutEffectStartTime=now$1();}function startPassiveEffectTimer(){passiveEffectStartTime=now$1();}function transferActualDuration(fiber){// Transfer time spent rendering these children so we don't lose it
// after we rerender. This is used as a helper in special cases
// where we should count the work of multiple passes.
var child=fiber.child;while(child){fiber.actualDuration+=child.actualDuration;child=child.sibling;}}function createCapturedValue(value,source){// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:value,source:source,stack:getStackByFiberInDevAndProd(source)};}// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(boundary,errorInfo){return true;}function logCapturedError(boundary,errorInfo){try{var logError=showErrorDialog(boundary,errorInfo);// Allow injected showErrorDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(logError===false){return;}var error=errorInfo.value;if(true){var source=errorInfo.source;var stack=errorInfo.stack;var componentStack=stack!==null?stack:'';// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(error!=null&&error._suppressLogging){if(boundary.tag===ClassComponent){// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
