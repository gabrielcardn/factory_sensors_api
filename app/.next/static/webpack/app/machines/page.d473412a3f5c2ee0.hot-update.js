"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/machines/page",{

/***/ "(app-pages-browser)/./src/app/machines/page.js":
/*!**********************************!*\
  !*** ./src/app/machines/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Machines; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./src/components/Form/index.js\");\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal/Modal */ \"(app-pages-browser)/./src/components/Modal/Modal.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Table */ \"(app-pages-browser)/./src/components/Table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Machines() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(\"http://localhost:5001/machines\", {\n            method: \"GET\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((d)=>{\n            setData(d);\n            setLoading(false);\n        });\n    }, []);\n    const handleSubmit = (values)=>{\n        fetch(\"http://localhost:5001/machines\", {\n            method: \"POST\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name: values.name,\n                sensors: values.sensors.split(\",\").map(Number)\n            })\n        }).then((res)=>res.json()).then((d)=>{\n            console.log(d);\n            setModal(false);\n        });\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, this);\n    const columns = [\n        {\n            header: \"Nome\",\n            cellRenderer: (row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: row.column1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 36\n                }, this),\n            style: {\n                width: \"200px\"\n            },\n            clickable: true,\n            onClick: (row)=>{\n                alert(\"ROW: \" + row.id);\n            }\n        },\n        {\n            header: \"IDs dos Sensores\",\n            cellRenderer: (row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"[\" + row.column2 + \"]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 36\n                }, this),\n            style: {\n                width: \"200px\"\n            }\n        }\n    ];\n    const rows = data.map((machine)=>{\n        return {\n            id: machine.id,\n            column1: machine.name,\n            column2: machine.sensors.toString()\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setModal(true),\n                children: \"Criar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                columns: columns,\n                rows: rows\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            modal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: ()=>setModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onSubmit: handleSubmit,\n                    onCancel: ()=>setModal(false),\n                    inputs: [\n                        {\n                            id: \"name\",\n                            title: \"Nome:\",\n                            type: \"text\",\n                            initialValue: \"\"\n                        },\n                        {\n                            id: \"sensors\",\n                            title: \"Sensores:\",\n                            type: \"text\",\n                            initialValue: \"\"\n                        }\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                    lineNumber: 84,\n                    columnNumber: 25\n                }, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n                lineNumber: 81,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\app\\\\machines\\\\page.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(Machines, \"0o5QlW7kLR5tLRJXxO/asbG1oLs=\");\n_c = Machines;\nvar _c;\n$RefreshReg$(_c, \"Machines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFjaGluZXMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFcUM7QUFDUTtBQUNOO0FBQ0s7QUFHN0IsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNOUyxNQUFNLGtDQUFrQztZQUNwQ0MsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1FBQ0osR0FBR0MsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQUlGLElBQUksQ0FBQ0csQ0FBQUE7WUFDNUJaLFFBQVFZO1lBQ1JSLFdBQVc7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDbEJULE1BQU0sa0NBQWtDO1lBQ3BDQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQU8sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsTUFBTUosT0FBT0ksSUFBSTtnQkFDakJDLFNBQVNMLE9BQU9LLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0M7WUFDM0M7UUFDSixHQUFHYixJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFBSUYsSUFBSSxDQUFDRyxDQUFBQTtZQUM1QlcsUUFBUUMsR0FBRyxDQUFDWjtZQUNaVixTQUFTO1FBQ2I7SUFDSjtJQUdBLElBQUlDLFNBQVMscUJBQU8sOERBQUNzQjtrQkFBRTs7Ozs7O0lBRXZCLE1BQU1DLFVBQVU7UUFDWjtZQUNJQyxRQUFRO1lBQ1JDLGNBQWMsQ0FBQ0Msb0JBQVEsOERBQUNDOzhCQUFLRCxJQUFJRSxPQUFPOzs7Ozs7WUFDeENDLE9BQU87Z0JBQ0hDLE9BQU87WUFDWDtZQUNBQyxXQUFXO1lBQ1hDLFNBQVMsQ0FBQ047Z0JBQ05PLE1BQU0sVUFBVVAsSUFBSVEsRUFBRTtZQUMxQjtRQUNKO1FBQ0E7WUFDSVYsUUFBUTtZQUNSQyxjQUFjLENBQUNDLG9CQUFRLDhEQUFDQzs4QkFBSyxNQUFNRCxJQUFJUyxPQUFPLEdBQUc7Ozs7OztZQUNqRE4sT0FBTztnQkFDSEMsT0FBTztZQUNYO1FBQ0o7S0FDSDtJQUVELE1BQU1NLE9BQU94QyxLQUFLc0IsR0FBRyxDQUFDbUIsQ0FBQUE7UUFDbEIsT0FBTztZQUNISCxJQUFJRyxRQUFRSCxFQUFFO1lBQ2ROLFNBQVNTLFFBQVF0QixJQUFJO1lBQ3JCb0IsU0FBU0UsUUFBUXJCLE9BQU8sQ0FBQ3NCLFFBQVE7UUFDckM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDWDs7MEJBQ0csOERBQUNZO2dCQUFPUCxTQUFTLElBQU1qQyxTQUFTOzBCQUFPOzs7Ozs7MEJBQ3ZDLDhEQUFDUCx5REFBS0E7Z0JBQUMrQixTQUFTQTtnQkFBU2EsTUFBTUE7Ozs7OztZQUM5QnRDLHNCQUNHLDhEQUFDUCwrREFBS0E7Z0JBQ0ZpRCxTQUFTLElBQU16QyxTQUFTO2dCQUN4QjBDLHdCQUNJLDhEQUFDbkQsd0RBQUlBO29CQUNEb0QsVUFBVWhDO29CQUNWaUMsVUFBVSxJQUFNNUMsU0FBUztvQkFDekI2QyxRQUFRO3dCQUNKOzRCQUNJVixJQUFJOzRCQUNKVyxPQUFPOzRCQUNQQyxNQUFNOzRCQUNOQyxjQUFjO3dCQUNsQjt3QkFDQTs0QkFDSWIsSUFBSTs0QkFDSlcsT0FBTzs0QkFDUEMsTUFBTTs0QkFDTkMsY0FBYzt3QkFDbEI7cUJBQ0g7Ozs7Ozs7Ozs7dUJBR1g7Ozs7Ozs7QUFHbEI7R0FqR3dCcEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYWNoaW5lcy9wYWdlLmpzP2YxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFjaGluZXMoKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9tYWNoaW5lc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihkID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAxL21hY2hpbmVzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICAgICAgICAgIHNlbnNvcnM6IHZhbHVlcy5zZW5zb3JzLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxhPkxvYWRpbmcuLi48L2E+XHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogJ05vbWUnLFxyXG4gICAgICAgICAgICBjZWxsUmVuZGVyZXI6IChyb3cpID0+IDxkaXY+e3Jvdy5jb2x1bW4xfTwvZGl2PixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUk9XOiBcIiArIHJvdy5pZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOiAnSURzIGRvcyBTZW5zb3JlcycsXHJcbiAgICAgICAgICAgIGNlbGxSZW5kZXJlcjogKHJvdykgPT4gPGRpdj57XCJbXCIgKyByb3cuY29sdW1uMiArIFwiXVwifTwvZGl2PixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHJvd3MgPSBkYXRhLm1hcChtYWNoaW5lID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogbWFjaGluZS5pZCxcclxuICAgICAgICAgICAgY29sdW1uMTogbWFjaGluZS5uYW1lLFxyXG4gICAgICAgICAgICBjb2x1bW4yOiBtYWNoaW5lLnNlbnNvcnMudG9TdHJpbmcoKSxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCh0cnVlKX0+Q3JpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IHJvd3M9e3Jvd3N9IC8+XHJcbiAgICAgICAgICAgIHttb2RhbCA/XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm9tZTpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5zb3JzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbnNvcmVzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZvcm0iLCJNb2RhbCIsIlRhYmxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWNoaW5lcyIsImRhdGEiLCJzZXREYXRhIiwibW9kYWwiLCJzZXRNb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZCIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsInNlbnNvcnMiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhIiwiY29sdW1ucyIsImhlYWRlciIsImNlbGxSZW5kZXJlciIsInJvdyIsImRpdiIsImNvbHVtbjEiLCJzdHlsZSIsIndpZHRoIiwiY2xpY2thYmxlIiwib25DbGljayIsImFsZXJ0IiwiaWQiLCJjb2x1bW4yIiwicm93cyIsIm1hY2hpbmUiLCJ0b1N0cmluZyIsImJ1dHRvbiIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJpbnB1dHMiLCJ0aXRsZSIsInR5cGUiLCJpbml0aWFsVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/machines/page.js\n"));

/***/ })

});