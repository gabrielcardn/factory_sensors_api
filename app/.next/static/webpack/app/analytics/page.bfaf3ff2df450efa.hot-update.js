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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Legend.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Line.js\");\n\n\n\nconst SensorChart = (param)=>{\n    let { data } = param;\n    // Group data by sensor_id\n    const dataBySensorId = data.reduce((acc, curr)=>{\n        if (!acc[curr.sensor_id]) {\n            acc[curr.sensor_id] = [];\n        }\n        acc[curr.sensor_id].push({\n            timestamp: new Date(curr.timestamp),\n            value: curr.sensor_value\n        });\n        return acc;\n    }, {});\n    // Create an array of LineChart series\n    const series = Object.entries(dataBySensorId).map((param)=>{\n        let [sensorId, sensorData] = param;\n        return {\n            key: sensorId,\n            data: sensorData,\n            name: \"Sensor \".concat(sensorId)\n        };\n    });\n    function getRandomColor() {\n        return \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {\n        width: 600,\n        height: 300,\n        data: series,\n        margin: {\n            top: 5,\n            right: 30,\n            left: 20,\n            bottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                dataKey: \"timestamp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, {\n                strokeDasharray: \"3 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            series.map((param)=>{\n                let { key, data } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"value\",\n                    data: data,\n                    stroke: getRandomColor(),\n                    activeDot: {\n                        r: 100\n                    }\n                }, key, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SensorChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SensorChart);\nvar _c;\n$RefreshReg$(_c, \"SensorChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbnNvckNoYXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMrRDtBQUV6RixNQUFNUSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQzNCLDBCQUEwQjtJQUMxQixNQUFNQyxpQkFBaUJELEtBQUtFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUN2QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEVBQUU7WUFDeEJGLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUMxQjtRQUNBRixHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDdkJDLFdBQVcsSUFBSUMsS0FBS0osS0FBS0csU0FBUztZQUNsQ0UsT0FBT0wsS0FBS00sWUFBWTtRQUMxQjtRQUNBLE9BQU9QO0lBQ1QsR0FBRyxDQUFDO0lBQ0osc0NBQXNDO0lBQ3RDLE1BQU1RLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ1osZ0JBQWdCYSxHQUFHLENBQUM7WUFBQyxDQUFDQyxVQUFVQyxXQUFXO1FBQ3ZFLE9BQU87WUFFTEMsS0FBS0Y7WUFDTGYsTUFBTWdCO1lBQ05FLE1BQU0sVUFBbUIsT0FBVEg7UUFDbEI7SUFDRjtJQUVBLFNBQVNJO1FBQ1AsT0FBTyxNQUFNQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBRyxVQUFVQyxRQUFRLENBQUM7SUFDM0Q7SUFFQSxxQkFDRSw4REFBQy9CLDhIQUFTQTtRQUNSZ0MsT0FBTztRQUNQQyxRQUFRO1FBQ1J6QixNQUFNVztRQUNOZSxRQUFRO1lBQUVDLEtBQUs7WUFBR0MsT0FBTztZQUFJQyxNQUFNO1lBQUlDLFFBQVE7UUFBRTs7MEJBRWpELDhEQUFDcEMsMEhBQUtBO2dCQUFDcUMsU0FBUTs7Ozs7OzBCQUNmLDhEQUFDcEMsMEhBQUtBOzs7OzswQkFDTiw4REFBQ0Msa0lBQWFBO2dCQUFDb0MsaUJBQWdCOzs7Ozs7MEJBQy9CLDhEQUFDbkMsNEhBQU9BOzs7OzswQkFDUiw4REFBQ0MsMkhBQU1BOzs7OztZQUNOYSxPQUFPRyxHQUFHLENBQUM7b0JBQUMsRUFBRUcsR0FBRyxFQUFFakIsSUFBSSxFQUFFO3FDQUN4Qiw4REFBQ1AseUhBQUlBO29CQUFXd0MsTUFBSztvQkFBV0YsU0FBUTtvQkFBUS9CLE1BQU1BO29CQUFNa0MsUUFBUWY7b0JBQWtCZ0IsV0FBVzt3QkFBRUMsR0FBRztvQkFBSTttQkFBL0ZuQjs7Ozs7Ozs7Ozs7O0FBSW5CO0tBM0NNbEI7QUE2Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2Vuc29yQ2hhcnQvaW5kZXguanM/MDRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAncmVjaGFydHMnO1xyXG5cclxuY29uc3QgU2Vuc29yQ2hhcnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICAvLyBHcm91cCBkYXRhIGJ5IHNlbnNvcl9pZFxyXG4gIGNvbnN0IGRhdGFCeVNlbnNvcklkID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgaWYgKCFhY2NbY3Vyci5zZW5zb3JfaWRdKSB7XHJcbiAgICAgIGFjY1tjdXJyLnNlbnNvcl9pZF0gPSBbXTtcclxuICAgIH1cclxuICAgIGFjY1tjdXJyLnNlbnNvcl9pZF0ucHVzaCh7XHJcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoY3Vyci50aW1lc3RhbXApLFxyXG4gICAgICB2YWx1ZTogY3Vyci5zZW5zb3JfdmFsdWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhY2M7XHJcbiAgfSwge30pO1xyXG4gIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBMaW5lQ2hhcnQgc2VyaWVzXHJcbiAgY29uc3Qgc2VyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YUJ5U2Vuc29ySWQpLm1hcCgoW3NlbnNvcklkLCBzZW5zb3JEYXRhXSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgIGtleTogc2Vuc29ySWQsXHJcbiAgICAgIGRhdGE6IHNlbnNvckRhdGEsXHJcbiAgICAgIG5hbWU6IGBTZW5zb3IgJHtzZW5zb3JJZH1gLFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xyXG4gICAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVDaGFydFxyXG4gICAgICB3aWR0aD17NjAwfVxyXG4gICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgZGF0YT17c2VyaWVzfVxyXG4gICAgICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMzAsIGxlZnQ6IDIwLCBib3R0b206IDUgfX1cclxuICAgID5cclxuICAgICAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiAvPlxyXG4gICAgICA8WUF4aXMgLz5cclxuICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICB7c2VyaWVzLm1hcCgoeyBrZXksIGRhdGEgfSkgPT4gKFxyXG4gICAgICAgIDxMaW5lIGtleT17a2V5fSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwidmFsdWVcIiBkYXRhPXtkYXRhfSBzdHJva2U9e2dldFJhbmRvbUNvbG9yKCl9IGFjdGl2ZURvdD17eyByOiAxMDAgfX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0xpbmVDaGFydD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vuc29yQ2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlNlbnNvckNoYXJ0IiwiZGF0YSIsImRhdGFCeVNlbnNvcklkIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbnNvcl9pZCIsInB1c2giLCJ0aW1lc3RhbXAiLCJEYXRlIiwidmFsdWUiLCJzZW5zb3JfdmFsdWUiLCJzZXJpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwic2Vuc29ySWQiLCJzZW5zb3JEYXRhIiwia2V5IiwibmFtZSIsImdldFJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImRhdGFLZXkiLCJzdHJva2VEYXNoYXJyYXkiLCJ0eXBlIiwic3Ryb2tlIiwiYWN0aXZlRG90IiwiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SensorChart/index.js\n"));

/***/ })

});