function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Automate</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link  btn btn-light text-white bg-secondary\" href=\"#\" style=\"padding:4px 26px;margin-right:20px;\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link btn btn-light text-white bg-secondary\" href=\"#\" style=\"padding:4px 26px;margin-right:20px;\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\" *ngFor=\"let product of notes\">\n        <a class=\"nav-link btn btn-light text-white bg-secondary\" (click)=\"delete(product)\"  style=\"padding:4px 26px;margin-right:20px;\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\"  *ngFor=\"let product of notes\">\n        <a class=\"nav-link btn btn-light text-white bg-secondary\" (click)=\"addtocart(product)\" style=\"padding:4px 26px;margin-right:20px;\"><i class=\"fa fa-edit\"  aria-hidden=\"true\"></i></a>\n      </li> \n      <li class=\"nav-item active\">\n        <a class=\"nav-link btn btn-light text-white bg-secondary\" href=\"#\" style=\"padding:4px 26px;\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" [(ngModel)]=\"searchText\" name=\"s1\"  type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"width:450px;\">\n    </form>\n  </div>\n</nav>\n<div class=\"sidenav\">\n <app-notes [posts]=\"posts\" [(inputValue)]=\"value\"></app-notes>\n</div>\n<div class=\"main1\">\n \n<h6 class=\"text-center text-secondary\">{{date | date : 'medium'}}</h6>\n <input type=\"text\" class=\"in\" class=\"form-control\" \n  [(ngModel)]=\"value\">\n  <router-outlet></router-outlet>\n <!-- <app-desc> </app-desc>   -->\n<!-- {{value}} -->\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDescDescComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>{{product?.notes}} </p>\n       <!-- <p>{{product?.description}} </p> -->\n        \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotesNotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  class=\"head\"  [routerLink]=\"['desc',item.id]\" *ngFor=\"let item of items1  | category : searchText;\"\n style=\"border-bottom: 1px solid lightgray;padding:20px;outline:none;\">\n    <h6>{{inputValue}}</h6>\n    <!-- <h6>{{i}}</h6> -->\n    <!-- <h6 ><a class=\"text-secondary\"> {{item.id}}</a></h6> -->\n    <h6><a class=\"text-secondary\"> {{item.notes}}</a></h6>\n    <p>{{item.date | date:'shortTime'}}&nbsp; <span>{{item.description}}</span></p>\n</div>\n      \n     \n      \n  ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/addnote.service.ts":
  /*!************************************!*\
    !*** ./src/app/addnote.service.ts ***!
    \************************************/

  /*! exports provided: AddnoteService */

  /***/
  function srcAppAddnoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddnoteService", function () {
      return AddnoteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddnoteService =
    /*#__PURE__*/
    function () {
      function AddnoteService() {
        _classCallCheck(this, AddnoteService);

        // items=[];
        this.items = [{
          id: 1,
          notes: 'New Notes',
          description: 'No Description to show',
          date: 2 / 17 / 2020
        }, {
          id: 2,
          notes: 'My Notes',
          description: 'No Description to show',
          date: 2 / 17 / 2020
        }, {
          id: 3,
          notes: 'My Time table',
          description: 'Spend time at Office Premises',
          date: 2 / 17 / 2020
        }, {
          id: 4,
          notes: 'Notes',
          description: 'Angular 7 and JavaScript',
          date: 2 / 17 / 2020
        }, {
          id: 5,
          notes: 'Blog Posts',
          description: 'Notes on MVC',
          date: 2 / 17 / 2020
        }, {
          id: 6,
          notes: 'ACTUC',
          description: 'Laptop form the HP company',
          date: 2 / 17 / 2020
        }, {
          id: 7,
          notes: 'ACTUC',
          description: 'Laptop form the HP company',
          date: 2 / 17 / 2020
        }, {
          id: 8,
          notes: 'ACTUC',
          description: 'Laptop form the HP company',
          date: 2 / 17 / 2020
        }, {
          id: 9,
          notes: 'ACTUC',
          description: 'Laptop form the HP company',
          date: 2 / 17 / 2020
        }, {
          id: 10,
          notes: 'ACTUC',
          description: 'Laptop form the HP company',
          date: 2 / 17 / 2020
        }];
      }

      _createClass(AddnoteService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNote",
        value: function addNote(note) {
          this.items.unshift(note);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.items;
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.items.shift();
        }
      }]);

      return AddnoteService;
    }();

    AddnoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddnoteService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _notes_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes/notes.component */
    "./src/app/notes/notes.component.ts");
    /* harmony import */


    var _desc_desc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./desc/desc.component */
    "./src/app/desc/desc.component.ts");

    var routes = [{
      path: 'notes',
      component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]
    }, {
      path: 'desc/:id',
      component: _desc_desc_component__WEBPACK_IMPORTED_MODULE_4__["DescComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top:0;\r\n}\r\na{\r\n    padding:4px 36px;\r\n}\r\n.sidenav {\r\n    height: 100%;\r\n    width: 260px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    float: left;\r\n    \r\n    overflow: auto;\r\n  }\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    color: black;\r\n    display: block;\r\n  }\r\n/*  \r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  } */\r\ndiv.main1{\r\n      margin-left:20%;\r\n  }\r\ninput[type='text']{\r\n    border:0;\r\n    outline:none;\r\n}\r\ninput[type=text]:focus{\r\n    border:0;\r\n    box-shadow: inset 0 0px 0 #ddd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLEtBQUs7QUFDUDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7O0lBRVgsY0FBYztFQUNoQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUdGOzs7OztLQUtLO0FBQ0g7TUFDSSxlQUFlO0VBQ25CO0FBQ0E7SUFDRSxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbn1cclxuYXtcclxuICAgIHBhZGRpbmc6NHB4IDM2cHg7XHJcbn1cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4vKiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9ICovXHJcbiAgZGl2Lm1haW4xe1xyXG4gICAgICBtYXJnaW4tbGVmdDoyMCU7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDAgI2RkZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _addnote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addnote.service */
    "./src/app/addnote.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(notesService) {
        _classCallCheck(this, AppComponent);

        this.notesService = notesService;
        this.title = 'automate';
        this.date = new Date();
        this.notes = [{
          id: 1,
          notes1: 'New Notes',
          description: 'No Description to show',
          date: new Date()
        }];
        this.value = "New Notes";
      }

      _createClass(AppComponent, [{
        key: "addtocart",
        value: function addtocart(note) {
          this.notesService.addNote(note);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.notesService.delete();
          this.notes = this.notes.filter(function (elem) {
            return elem.id !== id;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _addnote_service__WEBPACK_IMPORTED_MODULE_2__["AddnoteService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notes/notes.component */
    "./src/app/notes/notes.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _desc_desc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./desc/desc.component */
    "./src/app/desc/desc.component.ts");
    /* harmony import */


    var src_app_categories_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/categories.pipe */
    "./src/app/categories.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"], _desc_desc_component__WEBPACK_IMPORTED_MODULE_7__["DescComponent"], src_app_categories_pipe__WEBPACK_IMPORTED_MODULE_8__["CategoryPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/categories.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/categories.pipe.ts ***!
    \************************************/

  /*! exports provided: CategoryPipe */

  /***/
  function srcAppCategoriesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPipe", function () {
      return CategoryPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoryPipe =
    /*#__PURE__*/
    function () {
      function CategoryPipe() {
        _classCallCheck(this, CategoryPipe);
      }

      _createClass(CategoryPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (searchText == null) {
            return items;
          }

          return items.filter(function (category) {
            //  return category.itemname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            // return category.columns.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            return JSON.stringify(category).includes(searchText);
          });
        }
      }]);

      return CategoryPipe;
    }();

    CategoryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'category'
    })], CategoryPipe);
    /***/
  },

  /***/
  "./src/app/desc/desc.component.css":
  /*!*****************************************!*\
    !*** ./src/app/desc/desc.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDescDescComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type='text']{\r\n    border:0;\r\n    outline:none;\r\n}\r\ninput[type=text]:focus{\r\n    border:0;\r\n    box-shadow: inset 0 0px 0 #ddd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzYy9kZXNjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2Rlc2MvZGVzYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT0ndGV4dCdde1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMCAjZGRkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/desc/desc.component.ts":
  /*!****************************************!*\
    !*** ./src/app/desc/desc.component.ts ***!
    \****************************************/

  /*! exports provided: DescComponent */

  /***/
  function srcAppDescDescComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescComponent", function () {
      return DescComponent;
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


    var _addnote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../addnote.service */
    "./src/app/addnote.service.ts");

    var DescComponent =
    /*#__PURE__*/
    function () {
      function DescComponent(activatedRoute, router, notesService) {
        _classCallCheck(this, DescComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notesService = notesService;
        this.value = "New Notes";
      }

      _createClass(DescComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params);
            _this.id = params.get('id');

            var items1 = _this.notesService.getProducts();

            _this.product = items1.find(function (p) {
              return p.id == _this.id;
            });
          });
        }
      }]);

      return DescComponent;
    }();

    DescComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _addnote_service__WEBPACK_IMPORTED_MODULE_3__["AddnoteService"]
      }];
    };

    DescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-desc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./desc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./desc.component.css */
      "./src/app/desc/desc.component.css")).default]
    })], DescComponent);
    /***/
  },

  /***/
  "./src/app/notes/notes.component.css":
  /*!*******************************************!*\
    !*** ./src/app/notes/notes.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotesNotesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n    margin-bottom:0;\r\n}\r\ndiv {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n\r\n  }\r\n.head:hover{  \r\n    background: orange;\r\n}\r\n@media only screen and (max-width: 300px) {\r\n    div {\r\n      display:none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCOztFQUV6QjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtNQUNFLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbn1cclxuZGl2IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIH1cclxuLmhlYWQ6aG92ZXJ7ICBcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICBkaXYge1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/notes/notes.component.ts":
  /*!******************************************!*\
    !*** ./src/app/notes/notes.component.ts ***!
    \******************************************/

  /*! exports provided: NotesComponent */

  /***/
  function srcAppNotesNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponent", function () {
      return NotesComponent;
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


    var _addnote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../addnote.service */
    "./src/app/addnote.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NotesComponent =
    /*#__PURE__*/
    function () {
      // @Output() inputValueChange = new EventEmitter();
      function NotesComponent(activatedRoute, router, notesService) {
        _classCallCheck(this, NotesComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notesService = notesService;
        this.show = false;
        this.selectedproductID = 1;
      }

      _createClass(NotesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.items1 = this.notesService.getProducts();
          var indx = this.items1.filter(function (x) {
            return x.id == _this2.selectedproductID;
          })[-1];

          if (indx) {
            this.show = true;
          }
        }
      }]);

      return NotesComponent;
    }();

    NotesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _addnote_service__WEBPACK_IMPORTED_MODULE_2__["AddnoteService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "posts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "inputValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotesComponent.prototype, "items1", void 0);
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes.component.css */
      "./src/app/notes/notes.component.css")).default]
    })], NotesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\angular\automate\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map