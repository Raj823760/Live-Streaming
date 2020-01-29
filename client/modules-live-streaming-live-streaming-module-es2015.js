(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-live-streaming-live-streaming-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>streamn-io works!</p>\n");

/***/ }),

/***/ "./src/app/modules/live-streaming/live-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/live-streaming/live-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveRoutingModule", function() { return LiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streamn-io/streamn-io.component */ "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts");




const routes = [
    {
        path: '',
        component: _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__["StreamnIOComponent"]
    }
];
let LiveRoutingModule = class LiveRoutingModule {
};
LiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LiveRoutingModule);



/***/ }),

/***/ "./src/app/modules/live-streaming/live-streaming.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/live-streaming/live-streaming.module.ts ***!
  \*****************************************************************/
/*! exports provided: LiveStreamingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamingModule", function() { return LiveStreamingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streamn-io/streamn-io.component */ "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts");
/* harmony import */ var _live_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-routing.module */ "./src/app/modules/live-streaming/live-routing.module.ts");





let LiveStreamingModule = class LiveStreamingModule {
};
LiveStreamingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__["StreamnIOComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _live_routing_module__WEBPACK_IMPORTED_MODULE_4__["LiveRoutingModule"]
        ]
    })
], LiveStreamingModule);



/***/ }),

/***/ "./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGl2ZS1zdHJlYW1pbmcvc3RyZWFtbi1pby9zdHJlYW1uLWlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts ***!
  \***************************************************************************/
/*! exports provided: StreamnIOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamnIOComponent", function() { return StreamnIOComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StreamnIOComponent = class StreamnIOComponent {
    constructor() { }
    ngOnInit() {
    }
};
StreamnIOComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-streamn-io',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./streamn-io.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./streamn-io.component.scss */ "./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss")).default]
    })
], StreamnIOComponent);



/***/ })

}]);