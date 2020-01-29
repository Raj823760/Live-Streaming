function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-live-streaming-live-streaming-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLiveStreamingStreamnIoStreamnIoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>streamn-io works!</p>\n";
    /***/
  },

  /***/
  "./src/app/modules/live-streaming/live-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/live-streaming/live-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: LiveRoutingModule */

  /***/
  function srcAppModulesLiveStreamingLiveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveRoutingModule", function () {
      return LiveRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./streamn-io/streamn-io.component */
    "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts");

    var routes = [{
      path: '',
      component: _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__["StreamnIOComponent"]
    }];

    var LiveRoutingModule = function LiveRoutingModule() {
      _classCallCheck(this, LiveRoutingModule);
    };

    LiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LiveRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/live-streaming/live-streaming.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/live-streaming/live-streaming.module.ts ***!
    \*****************************************************************/

  /*! exports provided: LiveStreamingModule */

  /***/
  function srcAppModulesLiveStreamingLiveStreamingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveStreamingModule", function () {
      return LiveStreamingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./streamn-io/streamn-io.component */
    "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts");
    /* harmony import */


    var _live_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./live-routing.module */
    "./src/app/modules/live-streaming/live-routing.module.ts");

    var LiveStreamingModule = function LiveStreamingModule() {
      _classCallCheck(this, LiveStreamingModule);
    };

    LiveStreamingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_streamn_io_streamn_io_component__WEBPACK_IMPORTED_MODULE_3__["StreamnIOComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _live_routing_module__WEBPACK_IMPORTED_MODULE_4__["LiveRoutingModule"]]
    })], LiveStreamingModule);
    /***/
  },

  /***/
  "./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLiveStreamingStreamnIoStreamnIoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGl2ZS1zdHJlYW1pbmcvc3RyZWFtbi1pby9zdHJlYW1uLWlvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/live-streaming/streamn-io/streamn-io.component.ts ***!
    \***************************************************************************/

  /*! exports provided: StreamnIOComponent */

  /***/
  function srcAppModulesLiveStreamingStreamnIoStreamnIoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamnIOComponent", function () {
      return StreamnIOComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StreamnIOComponent =
    /*#__PURE__*/
    function () {
      function StreamnIOComponent() {
        _classCallCheck(this, StreamnIOComponent);
      }

      _createClass(StreamnIOComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StreamnIOComponent;
    }();

    StreamnIOComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-streamn-io',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./streamn-io.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/live-streaming/streamn-io/streamn-io.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./streamn-io.component.scss */
      "./src/app/modules/live-streaming/streamn-io/streamn-io.component.scss")).default]
    })], StreamnIOComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-live-streaming-live-streaming-module-es5.js.map