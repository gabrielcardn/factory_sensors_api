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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Legend.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Line.js\");\n\n\n\nconst SensorChart = (param)=>{\n    let { data } = param;\n    // Group data by sensor_id\n    const dataBySensorId = data.reduce((acc, curr)=>{\n        if (!acc[curr.sensor_id]) {\n            acc[curr.sensor_id] = [];\n        }\n        acc[curr.sensor_id].push({\n            timestamp: new Date(curr.timestamp),\n            value: curr.sensor_value\n        });\n        return acc;\n    }, {});\n    // Create an array of LineChart series\n    const series = Object.entries(dataBySensorId).map((param)=>{\n        let [sensorId, sensorData] = param;\n        console.log(sensorId, data);\n        return {\n            key: sensorId,\n            data: sensorData,\n            name: \"Sensor \".concat(sensorId)\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {\n        width: 600,\n        height: 300,\n        data: series,\n        margin: {\n            top: 5,\n            right: 30,\n            left: 20,\n            bottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                dataKey: \"timestamp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, {\n                strokeDasharray: \"3 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            series.map((param)=>{\n                let { key, data } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Legend_Line_LineChart_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"value\",\n                    data: data,\n                    stroke: \"#8884d8\",\n                    activeDot: {\n                        r: 8\n                    }\n                }, key, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\workspace\\\\python_flask\\\\app\\\\src\\\\components\\\\SensorChart\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SensorChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SensorChart);\nvar _c;\n$RefreshReg$(_c, \"SensorChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbnNvckNoYXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMrRDtBQUV6RixNQUFNUSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQzNCLDBCQUEwQjtJQUMxQixNQUFNQyxpQkFBaUJELEtBQUtFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUN2QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEVBQUU7WUFDeEJGLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUMxQjtRQUNBRixHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDdkJDLFdBQVcsSUFBSUMsS0FBS0osS0FBS0csU0FBUztZQUNsQ0UsT0FBT0wsS0FBS00sWUFBWTtRQUMxQjtRQUNBLE9BQU9QO0lBQ1QsR0FBRyxDQUFDO0lBRUosc0NBQXNDO0lBQ3RDLE1BQU1RLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ1osZ0JBQWdCYSxHQUFHLENBQUM7WUFBQyxDQUFDQyxVQUFVQyxXQUFXO1FBQ3ZFQyxRQUFRQyxHQUFHLENBQUNILFVBQVVmO1FBQ3RCLE9BQU87WUFFTG1CLEtBQUtKO1lBQ0xmLE1BQU1nQjtZQUNOSSxNQUFNLFVBQW1CLE9BQVRMO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3ZCLDhIQUFTQTtRQUNSNkIsT0FBTztRQUNQQyxRQUFRO1FBQ1J0QixNQUFNVztRQUNOWSxRQUFRO1lBQUVDLEtBQUs7WUFBR0MsT0FBTztZQUFJQyxNQUFNO1lBQUlDLFFBQVE7UUFBRTs7MEJBRWpELDhEQUFDakMsMEhBQUtBO2dCQUFDa0MsU0FBUTs7Ozs7OzBCQUNmLDhEQUFDakMsMEhBQUtBOzs7OzswQkFDTiw4REFBQ0Msa0lBQWFBO2dCQUFDaUMsaUJBQWdCOzs7Ozs7MEJBQy9CLDhEQUFDaEMsNEhBQU9BOzs7OzswQkFDUiw4REFBQ0MsMkhBQU1BOzs7OztZQUNOYSxPQUFPRyxHQUFHLENBQUM7b0JBQUMsRUFBRUssR0FBRyxFQUFFbkIsSUFBSSxFQUFFO3FDQUN4Qiw4REFBQ1AseUhBQUlBO29CQUFXcUMsTUFBSztvQkFBV0YsU0FBUTtvQkFBUTVCLE1BQU1BO29CQUFNK0IsUUFBTztvQkFBVUMsV0FBVzt3QkFBRUMsR0FBRztvQkFBRTttQkFBcEZkOzs7Ozs7Ozs7Ozs7QUFJbkI7S0F6Q01wQjtBQTJDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZW5zb3JDaGFydC9pbmRleC5qcz8wNGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5jb25zdCBTZW5zb3JDaGFydCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIC8vIEdyb3VwIGRhdGEgYnkgc2Vuc29yX2lkXHJcbiAgY29uc3QgZGF0YUJ5U2Vuc29ySWQgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICBpZiAoIWFjY1tjdXJyLnNlbnNvcl9pZF0pIHtcclxuICAgICAgYWNjW2N1cnIuc2Vuc29yX2lkXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWNjW2N1cnIuc2Vuc29yX2lkXS5wdXNoKHtcclxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShjdXJyLnRpbWVzdGFtcCksXHJcbiAgICAgIHZhbHVlOiBjdXJyLnNlbnNvcl92YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCB7fSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBMaW5lQ2hhcnQgc2VyaWVzXHJcbiAgY29uc3Qgc2VyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YUJ5U2Vuc29ySWQpLm1hcCgoW3NlbnNvcklkLCBzZW5zb3JEYXRhXSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2Vuc29ySWQsIGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAga2V5OiBzZW5zb3JJZCxcclxuICAgICAgZGF0YTogc2Vuc29yRGF0YSxcclxuICAgICAgbmFtZTogYFNlbnNvciAke3NlbnNvcklkfWAsXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUNoYXJ0XHJcbiAgICAgIHdpZHRoPXs2MDB9XHJcbiAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICBkYXRhPXtzZXJpZXN9XHJcbiAgICAgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAzMCwgbGVmdDogMjAsIGJvdHRvbTogNSB9fVxyXG4gICAgPlxyXG4gICAgICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIC8+XHJcbiAgICAgIDxZQXhpcyAvPlxyXG4gICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICA8TGVnZW5kIC8+XHJcbiAgICAgIHtzZXJpZXMubWFwKCh7IGtleSwgZGF0YSB9KSA9PiAoXHJcbiAgICAgICAgPExpbmUga2V5PXtrZXl9IHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJ2YWx1ZVwiIGRhdGE9e2RhdGF9IHN0cm9rZT1cIiM4ODg0ZDhcIiBhY3RpdmVEb3Q9e3sgcjogOCB9fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvTGluZUNoYXJ0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW5zb3JDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiTGVnZW5kIiwiU2Vuc29yQ2hhcnQiLCJkYXRhIiwiZGF0YUJ5U2Vuc29ySWQiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2Vuc29yX2lkIiwicHVzaCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ2YWx1ZSIsInNlbnNvcl92YWx1ZSIsInNlcmllcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJzZW5zb3JJZCIsInNlbnNvckRhdGEiLCJjb25zb2xlIiwibG9nIiwia2V5IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiZGF0YUtleSIsInN0cm9rZURhc2hhcnJheSIsInR5cGUiLCJzdHJva2UiLCJhY3RpdmVEb3QiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SensorChart/index.js\n"));

/***/ })

});