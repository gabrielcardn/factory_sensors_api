"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/analytics/page",{

/***/ "(app-pages-browser)/./src/components/SensorChart/index.js":
/*!*********************************************!*\
  !*** ./src/components/SensorChart/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Legend.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Line.js\");\n\n\n\nconst SensorChart = (param)=>{\n    let { data } = param;\n    // Group data by sensor_id\n    const dataBySensorId = data.reduce((acc, curr)=>{\n        if (!acc[curr.sensor_id]) {\n            acc[curr.sensor_id] = [];\n        }\n        acc[curr.sensor_id].push({\n            timestamp: new Date(curr.timestamp),\n            value: curr.sensor_value\n        });\n        return acc;\n    }, {});\n    // Create an array of LineChart series\n    const series = Object.entries(dataBySensorId).map((param)=>{\n        let [sensorId, sensorData] = param;\n        return {\n            key: sensorId,\n            data: sensorData,\n            name: \"Sensor \".concat(sensorId)\n        };\n    });\n    function getRandomColor(value) {\n        const hash = String(value).split(\"\").reduce((acc, char)=>{\n            acc = (acc << 5) - acc + char.charCodeAt(0);\n            return acc & acc; // Convert to 32bit integer\n        }, 0);\n        const r = (hash & 0xFF0000) >> 16;\n        const g = (hash & 0x00FF00) >> 8;\n        const b = hash & 0x0000FF;\n        return \"#\".concat(r.toString(16).padStart(2, \"0\")).concat(g.toString(16).padStart(2, \"0\")).concat(b.toString(16).padStart(2, \"0\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {\n        width: 600,\n        height: 300,\n        data: series,\n        margin: {\n            top: 5,\n            right: 30,\n            left: 20,\n            bottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                dataKey: \"timestamp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, {\n                strokeDasharray: \"3 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            series.map((param)=>{\n                let { key, data } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {\n                    name: \"Sensor \" + key,\n                    type: \"monotone\",\n                    dataKey: \"value\",\n                    data: data,\n                    stroke: getRandomColor(key),\n                    activeDot: {\n                        r: 8\n                    }\n                }, key, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 16\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SensorChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SensorChart);\nvar _c;\n$RefreshReg$(_c, \"SensorChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbnNvckNoYXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMrRDtBQUV6RixNQUFNUSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQzNCLDBCQUEwQjtJQUMxQixNQUFNQyxpQkFBaUJELEtBQUtFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUN2QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEVBQUU7WUFDeEJGLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUMxQjtRQUNBRixHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDdkJDLFdBQVcsSUFBSUMsS0FBS0osS0FBS0csU0FBUztZQUNsQ0UsT0FBT0wsS0FBS00sWUFBWTtRQUMxQjtRQUNBLE9BQU9QO0lBQ1QsR0FBRyxDQUFDO0lBQ0osc0NBQXNDO0lBQ3RDLE1BQU1RLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ1osZ0JBQWdCYSxHQUFHLENBQUM7WUFBQyxDQUFDQyxVQUFVQyxXQUFXO1FBQ3ZFLE9BQU87WUFFTEMsS0FBS0Y7WUFDTGYsTUFBTWdCO1lBQ05FLE1BQU0sVUFBbUIsT0FBVEg7UUFDbEI7SUFDRjtJQUVBLFNBQVNJLGVBQWVWLEtBQUs7UUFDM0IsTUFBTVcsT0FBT0MsT0FBT1osT0FBT2EsS0FBSyxDQUFDLElBQUlwQixNQUFNLENBQUMsQ0FBQ0MsS0FBS29CO1lBQ2hEcEIsTUFBTSxDQUFFQSxPQUFPLEtBQUtBLE1BQU9vQixLQUFLQyxVQUFVLENBQUM7WUFDM0MsT0FBT3JCLE1BQU1BLEtBQUssMkJBQTJCO1FBQy9DLEdBQUc7UUFFSCxNQUFNc0IsSUFBSSxDQUFDTCxPQUFPLFFBQU8sS0FBTTtRQUMvQixNQUFNTSxJQUFJLENBQUNOLE9BQU8sUUFBTyxLQUFNO1FBQy9CLE1BQU1PLElBQUlQLE9BQU87UUFFakIsT0FBTyxJQUFzQ00sT0FBbENELEVBQUVHLFFBQVEsQ0FBQyxJQUFJQyxRQUFRLENBQUMsR0FBRyxNQUF5Q0YsT0FBbENELEVBQUVFLFFBQVEsQ0FBQyxJQUFJQyxRQUFRLENBQUMsR0FBRyxNQUF1QyxPQUFoQ0YsRUFBRUMsUUFBUSxDQUFDLElBQUlDLFFBQVEsQ0FBQyxHQUFHO0lBQzVHO0lBRUEscUJBQ0UsOERBQUNyQyw4SEFBU0E7UUFDUnNDLE9BQU87UUFDUEMsUUFBUTtRQUNSL0IsTUFBTVc7UUFDTnFCLFFBQVE7WUFBRUMsS0FBSztZQUFHQyxPQUFPO1lBQUlDLE1BQU07WUFBSUMsUUFBUTtRQUFFOzswQkFFakQsOERBQUMxQywwSEFBS0E7Z0JBQUMyQyxTQUFROzs7Ozs7MEJBQ2YsOERBQUMxQywwSEFBS0E7Ozs7OzBCQUNOLDhEQUFDQyxrSUFBYUE7Z0JBQUMwQyxpQkFBZ0I7Ozs7OzswQkFDL0IsOERBQUN6Qyw0SEFBT0E7Ozs7OzBCQUNSLDhEQUFDQywySEFBTUE7Ozs7O1lBQ05hLE9BQU9HLEdBQUcsQ0FBQztvQkFBQyxFQUFFRyxHQUFHLEVBQUVqQixJQUFJLEVBQUU7Z0JBQ3hCLHFCQUFPLDhEQUFDUCx5SEFBSUE7b0JBRVZ5QixNQUFNLFlBQVlEO29CQUNsQnNCLE1BQUs7b0JBQ0xGLFNBQVE7b0JBQ1JyQyxNQUFNQTtvQkFDTndDLFFBQVFyQixlQUFlRjtvQkFDdkJ3QixXQUFXO3dCQUFFaEIsR0FBRztvQkFBRTttQkFOYlI7Ozs7O1lBUVQ7Ozs7Ozs7QUFHTjtLQTVETWxCO0FBOEROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlbnNvckNoYXJ0L2luZGV4LmpzPzA0YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IFNlbnNvckNoYXJ0ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgLy8gR3JvdXAgZGF0YSBieSBzZW5zb3JfaWRcclxuICBjb25zdCBkYXRhQnlTZW5zb3JJZCA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgIGlmICghYWNjW2N1cnIuc2Vuc29yX2lkXSkge1xyXG4gICAgICBhY2NbY3Vyci5zZW5zb3JfaWRdID0gW107XHJcbiAgICB9XHJcbiAgICBhY2NbY3Vyci5zZW5zb3JfaWRdLnB1c2goe1xyXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKGN1cnIudGltZXN0YW1wKSxcclxuICAgICAgdmFsdWU6IGN1cnIuc2Vuc29yX3ZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIHt9KTtcclxuICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgTGluZUNoYXJ0IHNlcmllc1xyXG4gIGNvbnN0IHNlcmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFCeVNlbnNvcklkKS5tYXAoKFtzZW5zb3JJZCwgc2Vuc29yRGF0YV0pID0+IHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICBrZXk6IHNlbnNvcklkLFxyXG4gICAgICBkYXRhOiBzZW5zb3JEYXRhLFxyXG4gICAgICBuYW1lOiBgU2Vuc29yICR7c2Vuc29ySWR9YCxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IodmFsdWUpIHtcclxuICAgIGNvbnN0IGhhc2ggPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcnKS5yZWR1Y2UoKGFjYywgY2hhcikgPT4ge1xyXG4gICAgICBhY2MgPSAoKGFjYyA8PCA1KSAtIGFjYykgKyBjaGFyLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgIHJldHVybiBhY2MgJiBhY2M7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgciA9IChoYXNoICYgMHhGRjAwMDApID4+IDE2O1xyXG4gICAgY29uc3QgZyA9IChoYXNoICYgMHgwMEZGMDApID4+IDg7XHJcbiAgICBjb25zdCBiID0gaGFzaCAmIDB4MDAwMEZGO1xyXG5cclxuICAgIHJldHVybiBgIyR7ci50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke2cudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9JHtiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVDaGFydFxyXG4gICAgICB3aWR0aD17NjAwfVxyXG4gICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgZGF0YT17c2VyaWVzfVxyXG4gICAgICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMzAsIGxlZnQ6IDIwLCBib3R0b206IDUgfX1cclxuICAgID5cclxuICAgICAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiAvPlxyXG4gICAgICA8WUF4aXMgLz5cclxuICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICB7c2VyaWVzLm1hcCgoeyBrZXksIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8TGluZVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICBuYW1lPXtcIlNlbnNvciBcIiArIGtleX1cclxuICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXHJcbiAgICAgICAgICBkYXRhS2V5PVwidmFsdWVcIlxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHN0cm9rZT17Z2V0UmFuZG9tQ29sb3Ioa2V5KX1cclxuICAgICAgICAgIGFjdGl2ZURvdD17eyByOiA4IH19XHJcbiAgICAgICAgLz5cclxuICAgICAgfSl9XHJcbiAgICA8L0xpbmVDaGFydD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vuc29yQ2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlNlbnNvckNoYXJ0IiwiZGF0YSIsImRhdGFCeVNlbnNvcklkIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbnNvcl9pZCIsInB1c2giLCJ0aW1lc3RhbXAiLCJEYXRlIiwidmFsdWUiLCJzZW5zb3JfdmFsdWUiLCJzZXJpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwic2Vuc29ySWQiLCJzZW5zb3JEYXRhIiwia2V5IiwibmFtZSIsImdldFJhbmRvbUNvbG9yIiwiaGFzaCIsIlN0cmluZyIsInNwbGl0IiwiY2hhciIsImNoYXJDb2RlQXQiLCJyIiwiZyIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJkYXRhS2V5Iiwic3Ryb2tlRGFzaGFycmF5IiwidHlwZSIsInN0cm9rZSIsImFjdGl2ZURvdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SensorChart/index.js\n"));

/***/ })

});