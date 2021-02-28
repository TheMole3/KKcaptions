webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_hugom_OneDrive_Dokument_GitHub_KKcaptions2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_components_TokenFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/components/TokenFooter */ "./public/components/TokenFooter.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_components_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/components/colors */ "./public/components/colors.js");
/* harmony import */ var _public_components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/components/Header */ "./public/components/Header.js");
/* harmony import */ var _public_components_ReditSong__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/components/ReditSong */ "./public/components/ReditSong.js");
/* harmony import */ var _public_components_SongList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/components/SongList */ "./public/components/SongList.js");



var _jsxFileName = "C:\\Users\\hugom\\OneDrive\\Dokument\\GitHub\\KKcaptions2\\pages\\index.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_hugom_OneDrive_Dokument_GitHub_KKcaptions2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var globalAny = global;








var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])();
globalAny.socket = socket;

function App() {
  _s();

  // Init options
  if (true) var arr = JSON.parse(localStorage.getItem('song'));else { var arr; }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    view: "Captions",
    token: "",
    songList:  true && localStorage.getItem('song') ? arr : {
      "Du omsluter mig": ["Du omsluter mig på alla sidor\nOch du håller mig i din hand"],
      "Jag går på livets väg": ["Jag går på livets väg\nJag går på livets väg\nDär kan allting hända men jag kan va trygg", "för Gud finns över mig och under mig\nFramför mig och bakom mig\nHan omsluter mig på alla sidor"],
      "Mitt hjärta": ["Knäpper mina händer ber en bön till Gud.\nGud som haver barnen kär\nse till mig som liten är", "Här i mitt hjärta vill du bo hos mig\nHär i mitt hjärta finns det plats för Dig\nDu vill bo i mitt hjärta och stanna kvar hos mig", "Jag får be till Dig\njag får tacka Dig om och om igen", "Knäpper mina händer ber en bön till Gud\nVart jag mig i världen vänder\nstår min lycka i Guds händer"]
    },
    live: false,
    text: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    socket.on('update', function (data) {
      setState(_objectSpread(_objectSpread({}, state), data));
    });
  });
  return [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastProvider"], {
    placement: "top-left",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        state: {
          state: state,
          setState: setState
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), state.view == "Captions" ? [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_components_SongList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        state: {
          state: state,
          setState: setState
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          height: "10vh"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_components_TokenFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        state: {
          state: state,
          setState: setState
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this)] : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_components_ReditSong__WEBPACK_IMPORTED_MODULE_9__["default"], {
        state: {
          state: state,
          setState: setState
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3612722403",
    dynamic: [_public_components_colors__WEBPACK_IMPORTED_MODULE_7__["default"].richBlackFogra],
    children: "html,body{padding:0;margin:0;background-color:".concat(_public_components_colors__WEBPACK_IMPORTED_MODULE_7__["default"].richBlackFogra, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHVnb21cXE9uZURyaXZlXFxEb2t1bWVudFxcR2l0SHViXFxLS2NhcHRpb25zMlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlENEIsQUFJMkIsVUFDRCxTQUNxQyw4Q0FDbEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxodWdvbVxcT25lRHJpdmVcXERva3VtZW50XFxHaXRIdWJcXEtLY2FwdGlvbnMyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnbG9iYWxBbnkgPSBnbG9iYWw7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2lvLCBTb2NrZXR9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuaW1wb3J0IFRva2VuRm9vdGVyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL1Rva2VuRm9vdGVyJztcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL2NvbG9ycyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEVkaXRTb25nIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL1JlZGl0U29uZyc7XHJcbmltcG9ydCBTb25nTGlzdCBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Tb25nTGlzdCc7XHJcblxyXG5cclxudmFyIHNvY2tldCA9IGlvKCk7XHJcbmdsb2JhbEFueS5zb2NrZXQgPSBzb2NrZXQ7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICAvLyBJbml0IG9wdGlvbnNcclxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB2YXIgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29uZycpKTsgZWxzZSB2YXIgYXJyID0ge31cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHZpZXc6IFwiQ2FwdGlvbnNcIixcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBzb25nTGlzdDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvbmcnKSA/IGFyciA6IHtcIkR1IG9tc2x1dGVyIG1pZ1wiOltcIkR1IG9tc2x1dGVyIG1pZyBww6UgYWxsYSBzaWRvclxcbk9jaCBkdSBow6VsbGVyIG1pZyBpIGRpbiBoYW5kXCJdLFwiSmFnIGfDpXIgcMOlIGxpdmV0cyB2w6RnXCI6W1wiSmFnIGfDpXIgcMOlIGxpdmV0cyB2w6RnXFxuSmFnIGfDpXIgcMOlIGxpdmV0cyB2w6RnXFxuRMOkciBrYW4gYWxsdGluZyBow6RuZGEgbWVuIGphZyBrYW4gdmEgdHJ5Z2dcIixcImbDtnIgR3VkIGZpbm5zIMO2dmVyIG1pZyBvY2ggdW5kZXIgbWlnXFxuRnJhbWbDtnIgbWlnIG9jaCBiYWtvbSBtaWdcXG5IYW4gb21zbHV0ZXIgbWlnIHDDpSBhbGxhIHNpZG9yXCJdLFwiTWl0dCBoasOkcnRhXCI6W1wiS27DpHBwZXIgbWluYSBow6RuZGVyIGJlciBlbiBiw7ZuIHRpbGwgR3VkLlxcbkd1ZCBzb20gaGF2ZXIgYmFybmVuIGvDpHJcXG5zZSB0aWxsIG1pZyBzb20gbGl0ZW4gw6RyXCIsXCJIw6RyIGkgbWl0dCBoasOkcnRhIHZpbGwgZHUgYm8gaG9zIG1pZ1xcbkjDpHIgaSBtaXR0IGhqw6RydGEgZmlubnMgZGV0IHBsYXRzIGbDtnIgRGlnXFxuRHUgdmlsbCBibyBpIG1pdHQgaGrDpHJ0YSBvY2ggc3Rhbm5hIGt2YXIgaG9zIG1pZ1wiLFwiSmFnIGbDpXIgYmUgdGlsbCBEaWdcXG5qYWcgZsOlciB0YWNrYSBEaWcgb20gb2NoIG9tIGlnZW5cIixcIktuw6RwcGVyIG1pbmEgaMOkbmRlciBiZXIgZW4gYsO2biB0aWxsIEd1ZFxcblZhcnQgamFnIG1pZyBpIHbDpHJsZGVuIHbDpG5kZXJcXG5zdMOlciBtaW4gbHlja2EgaSBHdWRzIGjDpG5kZXJcIl19LFxyXG4gICAgICAgIGxpdmU6IGZhbHNlLFxyXG4gICAgICAgIHRleHQ6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb2NrZXQub24oJ3VwZGF0ZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIC4uLmRhdGEgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICA8VG9hc3RQcm92aWRlciBwbGFjZW1lbnQ9XCJ0b3AtbGVmdFwiPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHN0YXRlPXt7c3RhdGUsIHNldFN0YXRlfX0+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIHtzdGF0ZS52aWV3ID09IFwiQ2FwdGlvbnNcIj9cclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICA8U29uZ0xpc3Qgc3RhdGU9e3tzdGF0ZSwgc2V0U3RhdGV9fT48L1NvbmdMaXN0PixcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvZGl2PixcclxuICAgICAgICAgICAgPFRva2VuRm9vdGVyIHN0YXRlPXt7c3RhdGUsIHNldFN0YXRlfX0+PC9Ub2tlbkZvb3Rlcj5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxFZGl0U29uZyBzdGF0ZT17e3N0YXRlLCBzZXRTdGF0ZX19PjwvRWRpdFNvbmc+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG5cclxuXHJcbiAgICAgICAgLDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnJpY2hCbGFja0ZvZ3JhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT4gIFxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\hugom\\\\OneDrive\\\\Dokument\\\\GitHub\\\\KKcaptions2\\\\pages\\\\index.js */")
  }, void 0, false, void 0, this)];
}

_s(App, "txdL4wvupJwQoYqMc8JXMsyG4Bo=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2xvYmFsQW55IiwiZ2xvYmFsIiwic29ja2V0IiwiaW8iLCJBcHAiLCJhcnIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ2aWV3IiwidG9rZW4iLCJzb25nTGlzdCIsImxpdmUiLCJ0ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsIm9uIiwiZGF0YSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjb2xvcnMiLCJyaWNoQmxhY2tGb2dyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxNQUFsQjtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQyxNQUFNLEdBQUdDLDJEQUFFLEVBQWY7QUFDQUgsU0FBUyxDQUFDRSxNQUFWLEdBQW1CQSxNQUFuQjs7QUFFQSxTQUFTRSxHQUFULEdBQWU7QUFBQTs7QUFDWDtBQUNBLFlBQWtDLElBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVYsQ0FBbEMsS0FBMkY7O0FBRmhGLGtCQUdlQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsVUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLFNBQWlDTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakMsR0FBZ0VKLEdBQWhFLEdBQXNFO0FBQUMseUJBQWtCLENBQUMsNkRBQUQsQ0FBbkI7QUFBbUYsK0JBQXdCLENBQUMsMEZBQUQsRUFBNEYsaUdBQTVGLENBQTNHO0FBQTBTLHFCQUFjLENBQUMsOEZBQUQsRUFBZ0csbUlBQWhHLEVBQW9PLHVEQUFwTyxFQUE0UixzR0FBNVI7QUFBeFQsS0FIakQ7QUFJL0JTLFFBQUksRUFBRSxLQUp5QjtBQUsvQkMsUUFBSSxFQUFFO0FBTHlCLEdBQUQsQ0FIdkI7QUFBQSxNQUdKQyxLQUhJO0FBQUEsTUFHR0MsUUFISDs7QUFVWEMseURBQVMsQ0FBQyxZQUFNO0FBQ1poQixVQUFNLENBQUNpQixFQUFQLENBQVUsUUFBVixFQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUJILGNBQVEsaUNBQU1ELEtBQU4sR0FBZ0JJLElBQWhCLEVBQVI7QUFDSCxLQUZEO0FBR0gsR0FKUSxDQUFUO0FBT0EsU0FBTyxjQUNILHFFQUFDLHVFQUFEO0FBQWUsYUFBUyxFQUFDLFVBQXpCO0FBQUEsMkJBRUE7QUFBQSw4QkFDSSxxRUFBQyxpRUFBRDtBQUFRLGFBQUssRUFBRTtBQUFDSixlQUFLLEVBQUxBLEtBQUQ7QUFBUUMsa0JBQVEsRUFBUkE7QUFBUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVLRCxLQUFLLENBQUNMLElBQU4sSUFBYyxVQUFkLEdBQ0QsY0FDQSxxRUFBQyxvRUFBRDtBQUFVLGFBQUssRUFBRTtBQUFDSyxlQUFLLEVBQUxBLEtBQUQ7QUFBUUMsa0JBQVEsRUFBUkE7QUFBUjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUNJLGFBQUssRUFBRTtBQUNISSxpQkFBTyxFQUFFLE1BRE47QUFFSEMsZ0JBQU0sRUFBRTtBQUZMO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBUUEscUVBQUMsc0VBQUQ7QUFBYSxhQUFLLEVBQUU7QUFBQ04sZUFBSyxFQUFMQSxLQUFEO0FBQVFDLGtCQUFRLEVBQVJBO0FBQVI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBLENBREMsZ0JBWUQscUVBQUMsb0VBQUQ7QUFBVSxhQUFLLEVBQUU7QUFBQ0QsZUFBSyxFQUFMQSxLQUFEO0FBQVFDLGtCQUFRLEVBQVJBO0FBQVI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERztBQUFBO0FBQUEsY0E2QnlCTSxpRUFBTSxDQUFDQyxjQTdCaEM7QUFBQSxzRUE2QnlCRCxpRUFBTSxDQUFDQyxjQTdCaEM7QUFBQSxrQ0FBUDtBQWlDSDs7R0FsRFFwQixHOztLQUFBQSxHO0FBb0RNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTI5ZmQwMjM2MWQ5ZjMyNjBlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2xvYmFsQW55ID0gZ2xvYmFsO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtpbywgU29ja2V0fSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmltcG9ydCBUb2tlbkZvb3RlciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Ub2tlbkZvb3Rlcic7XHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9jb2xvcnMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBFZGl0U29uZyBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9SZWRpdFNvbmcnO1xyXG5pbXBvcnQgU29uZ0xpc3QgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvU29uZ0xpc3QnO1xyXG5cclxuXHJcbnZhciBzb2NrZXQgPSBpbygpO1xyXG5nbG9iYWxBbnkuc29ja2V0ID0gc29ja2V0O1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgLy8gSW5pdCBvcHRpb25zXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgdmFyIGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvbmcnKSk7IGVsc2UgdmFyIGFyciA9IHt9XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB2aWV3OiBcIkNhcHRpb25zXCIsXHJcbiAgICAgICAgdG9rZW46IFwiXCIsXHJcbiAgICAgICAgc29uZ0xpc3Q6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb25nJykgPyBhcnIgOiB7XCJEdSBvbXNsdXRlciBtaWdcIjpbXCJEdSBvbXNsdXRlciBtaWcgcMOlIGFsbGEgc2lkb3JcXG5PY2ggZHUgaMOlbGxlciBtaWcgaSBkaW4gaGFuZFwiXSxcIkphZyBnw6VyIHDDpSBsaXZldHMgdsOkZ1wiOltcIkphZyBnw6VyIHDDpSBsaXZldHMgdsOkZ1xcbkphZyBnw6VyIHDDpSBsaXZldHMgdsOkZ1xcbkTDpHIga2FuIGFsbHRpbmcgaMOkbmRhIG1lbiBqYWcga2FuIHZhIHRyeWdnXCIsXCJmw7ZyIEd1ZCBmaW5ucyDDtnZlciBtaWcgb2NoIHVuZGVyIG1pZ1xcbkZyYW1mw7ZyIG1pZyBvY2ggYmFrb20gbWlnXFxuSGFuIG9tc2x1dGVyIG1pZyBww6UgYWxsYSBzaWRvclwiXSxcIk1pdHQgaGrDpHJ0YVwiOltcIktuw6RwcGVyIG1pbmEgaMOkbmRlciBiZXIgZW4gYsO2biB0aWxsIEd1ZC5cXG5HdWQgc29tIGhhdmVyIGJhcm5lbiBrw6RyXFxuc2UgdGlsbCBtaWcgc29tIGxpdGVuIMOkclwiLFwiSMOkciBpIG1pdHQgaGrDpHJ0YSB2aWxsIGR1IGJvIGhvcyBtaWdcXG5Iw6RyIGkgbWl0dCBoasOkcnRhIGZpbm5zIGRldCBwbGF0cyBmw7ZyIERpZ1xcbkR1IHZpbGwgYm8gaSBtaXR0IGhqw6RydGEgb2NoIHN0YW5uYSBrdmFyIGhvcyBtaWdcIixcIkphZyBmw6VyIGJlIHRpbGwgRGlnXFxuamFnIGbDpXIgdGFja2EgRGlnIG9tIG9jaCBvbSBpZ2VuXCIsXCJLbsOkcHBlciBtaW5hIGjDpG5kZXIgYmVyIGVuIGLDtm4gdGlsbCBHdWRcXG5WYXJ0IGphZyBtaWcgaSB2w6RybGRlbiB2w6RuZGVyXFxuc3TDpXIgbWluIGx5Y2thIGkgR3VkcyBow6RuZGVyXCJdfSxcclxuICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICB0ZXh0OiBcIlwiXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0Lm9uKCd1cGRhdGUnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCAuLi5kYXRhIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgPFRvYXN0UHJvdmlkZXIgcGxhY2VtZW50PVwidG9wLWxlZnRcIj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciBzdGF0ZT17e3N0YXRlLCBzZXRTdGF0ZX19PjwvSGVhZGVyPlxyXG4gICAgICAgICAgICB7c3RhdGUudmlldyA9PSBcIkNhcHRpb25zXCI/XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgPFNvbmdMaXN0IHN0YXRlPXt7c3RhdGUsIHNldFN0YXRlfX0+PC9Tb25nTGlzdD4sXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwdmhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L2Rpdj4sXHJcbiAgICAgICAgICAgIDxUb2tlbkZvb3RlciBzdGF0ZT17e3N0YXRlLCBzZXRTdGF0ZX19PjwvVG9rZW5Gb290ZXI+XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8RWRpdFNvbmcgc3RhdGU9e3tzdGF0ZSwgc2V0U3RhdGV9fT48L0VkaXRTb25nPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvVG9hc3RQcm92aWRlcj5cclxuXHJcblxyXG4gICAgICAgICw8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5yaWNoQmxhY2tGb2dyYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+ICBcclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=