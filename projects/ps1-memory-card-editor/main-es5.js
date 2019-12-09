(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navigation title=\"{{title}}\"></app-navigation>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-dialog/confirm-dialog.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-dialog/confirm-dialog.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Are you sure?</h1>\n<div mat-dialog-content>\n  <p>{{data.message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>OK</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-detail/memory-card-detail.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-detail/memory-card-detail.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel class=\"memory-card\">\n  \n  <mat-expansion-panel-header cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"card\">\n    <div>\n      <mat-panel-title>\n          {{card.filename}}\n      </mat-panel-title>\n      <mat-panel-description>\n        <div class=\"tiny-icons\">\n          <app-save-icon [save]=\"save\" [iconFrame]=\"iconFrame\" *ngFor=\"let save of card.saves\" size=\"16px\" margin=\"0\"></app-save-icon>\n        </div>\n      </mat-panel-description>\n    </div>\n  </mat-expansion-panel-header>\n  \n  <p>\n    Blocks used: {{card.usedBlocks.length}}, Blocks free: {{card.freeBlocks.length}}\n    <mat-progress-bar\n        class=\"example-margin\"\n        color=\"primary\"\n        mode=\"determinate\"\n        value=\"{{(card.usedBlocks / 15.0) * 100.0}}\">\n    </mat-progress-bar>\n  </p>\n  <div cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"card\">\n    <mat-card *ngFor=\"let save of card.saves;let saveIndex=index\" class=\"save\" cdkDrag [cdkDragData]=\"saveIndex\">\n      <mat-card-content>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <app-save-icon [save]=\"save\" [iconFrame]=\"iconFrame\"></app-save-icon>\n          <div>\n            <p>{{save.title}}</p>\n            <p>Blocks used: {{save.blockCount}}</p>\n          </div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n          <button mat-button (click)=\"deleteSave(saveIndex)\">DELETE</button>\n          <button mat-button (click)=\"downloadSave(saveIndex)\">DOWNLOAD</button>\n        </mat-card-actions>\n    </mat-card>\n    <p *ngIf=\"card.saves.length === 0\">No saves.</p>\n  </div>\n  <mat-action-row>\n    <button mat-button (click)=\"downloadCard()\">DOWNLOAD</button>\n    <button mat-button (click)=\"closeCard(index)\">CLOSE</button>\n  </mat-action-row>\n</mat-expansion-panel>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-list/memory-card-list.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-list/memory-card-list.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"memory-card-list\" fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" cdkDropListGroup>\n  <app-memory-card-detail fxFlex=\"0 0 calc(50% - 16px)\" fxFlex.gt-md=\"0 0 calc(33.33% - 16px)\" fxFlex.lt-md=\"0 0 calc(100% - 16px)\" *ngFor=\"let card of memoryCards; let index=index\" class=\"memory-card\" [card]=\"card\" [iconFrame]=\"iconFrame\" [index]=\"index\"></app-memory-card-detail>\n</div>\n<p *ngIf=\"memoryCards.length == 0\">No memory cards loaded. Click the Add button to load a memory card.</p>\n<input type=\"file\" id=\"mc-file\" (change)=\"loadMemoryCard()\">\n<button mat-fab class=\"mc-add-button\" aria-label=\"Load a Memory Card\" (click)=\"openMemoryCard()\">\n  <mat-icon>addition</mat-icon>\n</button>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/\">Memory Cards</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>{{title}}</span>\n    </mat-toolbar>\n    <div id=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/save-icon/save-icon.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/save-icon/save-icon.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<canvas class=\"save-icon\" width=\"16\" height=\"16\" [style.margin-left]=\"margin\" [style.margin-top]=\"margin\" [style.width]=\"size\" [style.height]=\"size\" #canvas></canvas>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>welcome works!</p>\n<button mat-fab class=\"mc-add-button\" aria-label=\"Load a Memory Card\">\n    <mat-icon>addition</mat-icon>\n</button>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
            /* harmony import */ var _memory_card_list_memory_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memory-card-list/memory-card-list.component */ "./src/app/memory-card-list/memory-card-list.component.ts");
            var routes = [
                { path: '', component: _memory_card_list_memory_card_list_component__WEBPACK_IMPORTED_MODULE_4__["MemoryCardListComponent"] },
                { path: 'saves', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'PS1 Memory Card Editor';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
            /* harmony import */ var _memory_card_list_memory_card_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./memory-card-list/memory-card-list.component */ "./src/app/memory-card-list/memory-card-list.component.ts");
            /* harmony import */ var _save_icon_save_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./save-icon/save-icon.component */ "./src/app/save-icon/save-icon.component.ts");
            /* harmony import */ var _memory_card_detail_memory_card_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./memory-card-detail/memory-card-detail.component */ "./src/app/memory-card-detail/memory-card-detail.component.ts");
            /* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
                        _memory_card_list_memory_card_list_component__WEBPACK_IMPORTED_MODULE_21__["MemoryCardListComponent"],
                        _save_icon_save_icon_component__WEBPACK_IMPORTED_MODULE_22__["SaveIconComponent"],
                        _memory_card_detail_memory_card_detail_component__WEBPACK_IMPORTED_MODULE_23__["MemoryCardDetailComponent"],
                        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogComponent"],
                    ],
                    entryComponents: [
                        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/confirm-dialog/confirm-dialog.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/confirm-dialog/confirm-dialog.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/confirm-dialog/confirm-dialog.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
          \************************************************************/
        /*! exports provided: ConfirmDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () { return ConfirmDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var ConfirmDialogComponent = /** @class */ (function () {
                function ConfirmDialogComponent(data) {
                    this.data = data;
                }
                return ConfirmDialogComponent;
            }());
            ConfirmDialogComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-confirm-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-dialog/confirm-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/confirm-dialog/confirm-dialog.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ConfirmDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/memory-card-detail/memory-card-detail.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/memory-card-detail/memory-card-detail.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel-header-description {\n  flex-grow: 0;\n}\n\n.save {\n  margin-bottom: 16px;\n  background: #37474F;\n}\n\n.saves {\n  margin-left: -8px;\n  margin-top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RodXJzdG9uL2NvZGUvcHMxLW1lbW9yeS1jYXJkLWVkaXRvci9zcmMvYXBwL21lbW9yeS1jYXJkLWRldGFpbC9tZW1vcnktY2FyZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbW9yeS1jYXJkLWRldGFpbC9tZW1vcnktY2FyZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW1vcnktY2FyZC1kZXRhaWwvbWVtb3J5LWNhcmQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5zYXZlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICMzNzQ3NEY7XG59XG5cbi5zYXZlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbn0iLCIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWdyb3c6IDA7XG59XG5cbi5zYXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZDogIzM3NDc0Rjtcbn1cblxuLnNhdmVzIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/memory-card-detail/memory-card-detail.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/memory-card-detail/memory-card-detail.component.ts ***!
          \********************************************************************/
        /*! exports provided: MemoryCardDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCardDetailComponent", function () { return MemoryCardDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _memory_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memory-card.service */ "./src/app/memory-card.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
            var MemoryCardDetailComponent = /** @class */ (function () {
                function MemoryCardDetailComponent(memoryCardService, dialog) {
                    this.iconFrame = 0;
                    this.memoryCardService = memoryCardService;
                    this.dialog = dialog;
                }
                MemoryCardDetailComponent.prototype.downloadCard = function () {
                    var buffer = this.card.buffer;
                    var blob = new Blob([new Uint8Array(buffer.buffer)]);
                    var downloadUrl = URL.createObjectURL(blob);
                    var link = document.createElement('a');
                    link.setAttribute('href', downloadUrl);
                    link.setAttribute('download', this.card.filename);
                    link.setAttribute('style', 'display: none');
                    document.body.appendChild(link);
                    link.click();
                    URL.revokeObjectURL(downloadUrl);
                    link.remove();
                };
                MemoryCardDetailComponent.prototype.closeCard = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
                        data: {
                            message: 'If the card has been edited, changes will be lost!'
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === true) {
                            _this.memoryCardService.closeCard(_this.index);
                        }
                    });
                };
                MemoryCardDetailComponent.prototype.deleteSave = function (index) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
                        data: {
                            message: 'Deleting a save is not undoable!'
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === true) {
                            _this.card.deleteSave(index);
                            _this.memoryCardService.persist();
                        }
                    });
                };
                MemoryCardDetailComponent.prototype.drop = function (event) {
                    if (event.container !== event.previousContainer) {
                        // copying save
                        var source = event.previousContainer.data;
                        var destination = event.container.data;
                        var saveIndex = event.item.data;
                        this.memoryCardService.copySave(source, saveIndex, destination);
                        this.memoryCardService.persist();
                    }
                };
                MemoryCardDetailComponent.prototype.downloadSave = function (index) {
                    var save = this.card.saves[index];
                    var saveBlocks = this.card.getSaveBlocks(index);
                    console.log(saveBlocks);
                    var blob = new Blob(saveBlocks.map(function (block) { return new Uint8Array(block.buffer, block.byteOffset, block.byteLength); }));
                    var downloadUrl = URL.createObjectURL(blob);
                    var link = document.createElement('a');
                    link.setAttribute('href', downloadUrl);
                    link.setAttribute('download', save.filename);
                    link.setAttribute('style', 'display: none');
                    document.body.appendChild(link);
                    link.click();
                    URL.revokeObjectURL(downloadUrl);
                    link.remove();
                };
                return MemoryCardDetailComponent;
            }());
            MemoryCardDetailComponent.ctorParameters = function () { return [
                { type: _memory_card_service__WEBPACK_IMPORTED_MODULE_2__["MemoryCardService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MemoryCardDetailComponent.prototype, "card", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MemoryCardDetailComponent.prototype, "iconFrame", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MemoryCardDetailComponent.prototype, "index", void 0);
            MemoryCardDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-memory-card-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./memory-card-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-detail/memory-card-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./memory-card-detail.component.scss */ "./src/app/memory-card-detail/memory-card-detail.component.scss")).default]
                })
            ], MemoryCardDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/memory-card-list/memory-card-list.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/memory-card-list/memory-card-list.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mc-add-button {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n  z-index: 100;\n}\n\n#mc-file {\n  display: none;\n}\n\n.justify-headers .mat-expansion-panel-header-title,\n.justify-headers .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.justify-headers .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.memory-card-list {\n  margin-left: -16px;\n  margin-top: -16px;\n}\n\n.memory-card {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RodXJzdG9uL2NvZGUvcHMxLW1lbW9yeS1jYXJkLWVkaXRvci9zcmMvYXBwL21lbW9yeS1jYXJkLWxpc3QvbWVtb3J5LWNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVtb3J5LWNhcmQtbGlzdC9tZW1vcnktY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBOztFQUVFLGFBQUE7QUNDRjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS1jYXJkLWxpc3QvbWVtb3J5LWNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYy1hZGQtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwMFxufVxuXG4jbWMtZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmp1c3RpZnktaGVhZGVycyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uanVzdGlmeS1oZWFkZXJzIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5qdXN0aWZ5LWhlYWRlcnMgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbW9yeS1jYXJkLWxpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cblxuLm1lbW9yeS1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufSIsIi5tYy1hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbiNtYy1maWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmp1c3RpZnktaGVhZGVycyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uanVzdGlmeS1oZWFkZXJzIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5qdXN0aWZ5LWhlYWRlcnMgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVtb3J5LWNhcmQtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG5cbi5tZW1vcnktY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/memory-card-list/memory-card-list.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/memory-card-list/memory-card-list.component.ts ***!
          \****************************************************************/
        /*! exports provided: MemoryCardListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCardListComponent", function () { return MemoryCardListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _memory_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memory-card.service */ "./src/app/memory-card.service.ts");
            var MemoryCardListComponent = /** @class */ (function () {
                function MemoryCardListComponent(memoryCardService) {
                    this.iconFrame = 0;
                    this.memoryCardService = memoryCardService;
                }
                MemoryCardListComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    setInterval(function () {
                        _this.iconFrame += 1;
                    }, 500);
                };
                Object.defineProperty(MemoryCardListComponent.prototype, "memoryCards", {
                    get: function () {
                        return this.memoryCardService.memoryCards;
                    },
                    enumerable: true,
                    configurable: true
                });
                MemoryCardListComponent.prototype.dataURI = function (data) {
                    return this.memoryCardService.dataURI(data);
                };
                MemoryCardListComponent.prototype.openMemoryCard = function () {
                    document.getElementById('mc-file').click();
                };
                MemoryCardListComponent.prototype.loadMemoryCard = function () {
                    var _this = this;
                    var fileInput = document.getElementById('mc-file');
                    var file = fileInput.files[0];
                    var reader = new FileReader();
                    reader.onload = function () { return _this.memoryCardService.loadMemoryCard(file.name, reader.result); };
                    reader.readAsArrayBuffer(file);
                };
                MemoryCardListComponent.prototype.closeCard = function (index) {
                    this.memoryCardService.closeCard(index);
                };
                return MemoryCardListComponent;
            }());
            MemoryCardListComponent.ctorParameters = function () { return [
                { type: _memory_card_service__WEBPACK_IMPORTED_MODULE_2__["MemoryCardService"] }
            ]; };
            MemoryCardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-memory-card-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./memory-card-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-card-list/memory-card-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./memory-card-list.component.scss */ "./src/app/memory-card-list/memory-card-list.component.scss")).default]
                })
            ], MemoryCardListComponent);
            /***/ 
        }),
        /***/ "./src/app/memory-card.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/memory-card.service.ts ***!
          \****************************************/
        /*! exports provided: MemoryCardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCardService", function () { return MemoryCardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _memory_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory-card */ "./src/app/memory-card.ts");
            var MemoryCardState = /** @class */ (function () {
                function MemoryCardState(filename, data) {
                    this.filename = filename;
                    this.data = data;
                }
                return MemoryCardState;
            }());
            var MemoryCardService = /** @class */ (function () {
                function MemoryCardService() {
                    var _this = this;
                    this.memoryCards = [];
                    this.state = [];
                    // reload state from localStorage
                    var states = JSON.parse(localStorage.getItem('state'));
                    if (states !== null) {
                        this.state = states;
                        states.forEach(function (state) {
                            _this.memoryCards.push(new _memory_card__WEBPACK_IMPORTED_MODULE_2__["MemoryCard"](state.filename, _this.b64decode(state.data)));
                        });
                    }
                }
                MemoryCardService.prototype.loadMemoryCard = function (filename, buffer) {
                    this.memoryCards.push(new _memory_card__WEBPACK_IMPORTED_MODULE_2__["MemoryCard"](filename, new DataView(buffer)));
                    this.state.push(new MemoryCardState(filename, this.b64encode(buffer)));
                    localStorage.setItem('state', JSON.stringify(this.state));
                };
                MemoryCardService.prototype.dataURI = function (data) {
                    var encoded = this.b64encode(data);
                    return "data:image/bmp;base64," + encoded;
                };
                MemoryCardService.prototype.b64encode = function (buffer) {
                    var u8Array = new Uint8Array(buffer);
                    return btoa(String.fromCharCode.apply(null, u8Array));
                };
                MemoryCardService.prototype.b64decode = function (value) {
                    var decoded = atob(value);
                    var array = new Uint8Array(decoded.length);
                    array.forEach(function (value, i) {
                        array[i] = decoded.charCodeAt(i);
                    });
                    return new DataView(array.buffer);
                };
                MemoryCardService.prototype.closeCard = function (index) {
                    this.memoryCards.splice(index, 1);
                    this.state.splice(index, 1);
                    localStorage.setItem('state', JSON.stringify(this.state));
                };
                MemoryCardService.prototype.persist = function () {
                    var _this = this;
                    console.log('persisting');
                    this.memoryCards.forEach(function (card, index) {
                        _this.state[index] = new MemoryCardState(card.filename, _this.b64encode(card.buffer.buffer));
                    });
                    localStorage.setItem('state', JSON.stringify(this.state));
                };
                MemoryCardService.prototype.copySave = function (source, saveIndex, destination) {
                    var blocks = source.getSaveBlocks(saveIndex);
                    var blockIndexes = blocks.map(function (block) { return (block.byteOffset / 8192) - 1; });
                    var destinationBlocks = destination.freeBlocks;
                    if (destinationBlocks.length < blocks.length) {
                        throw 'Not enough blocks on the destination!';
                    }
                    blocks.forEach(function (block, i) {
                        var destinationBlock = destinationBlocks[i];
                        var sourceFrame = new Uint8Array(source.buffer.buffer, 128 + (128 * blockIndexes[i]), 128);
                        var destFrame = new Uint8Array(destination.buffer.buffer, 128 + (128 * destinationBlock.blockIndex), 128);
                        destFrame.set(sourceFrame);
                        if (i < blocks.length - 1) {
                            destinationBlock.nextBlock = destinationBlocks[i + 1].blockIndex;
                        }
                        destinationBlock.fixChecksum();
                        var sourceBlock = new Uint8Array(source.buffer.buffer, 8192 + (8192 * blockIndexes[i]), 8192);
                        var destBlock = new Uint8Array(destination.buffer.buffer, 8192 + (8192 * destinationBlock.blockIndex), 8192);
                        destBlock.set(sourceBlock);
                    });
                    destination.reloadSaves();
                };
                return MemoryCardService;
            }());
            MemoryCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MemoryCardService);
            /***/ 
        }),
        /***/ "./src/app/memory-card.ts": 
        /*!********************************!*\
          !*** ./src/app/memory-card.ts ***!
          \********************************/
        /*! exports provided: MemoryCard, SaveMetadata */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCard", function () { return MemoryCard; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveMetadata", function () { return SaveMetadata; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BLOCK_AVAILABLE = 0xA0;
            var BLOCK_UNUSABLE = 0xFF;
            var BLOCK_FIRST = 0x51;
            var BLOCK_MIDDLE = 0x52;
            var BLOCK_LAST = 0x53;
            var LAST_BLOCK_SENTINAL = 0xFF;
            var shiftJisDecoder = new TextDecoder('shift_jis');
            var utf8Decoder = new TextDecoder('utf-8');
            function truncateString(value) {
                var end = value.indexOf(String.fromCharCode(0));
                if (end === -1) {
                    end = value.length;
                }
                return value.slice(0, end);
            }
            function writeString(buffer, offset, value) {
                for (var i = 0; i < value.length; i++) {
                    buffer.setUint8(offset, value.charCodeAt(i));
                    offset += 1;
                }
                return value.length;
            }
            var MemoryCard = /** @class */ (function () {
                function MemoryCard(filename, buffer) {
                    if (buffer === void 0) { buffer = undefined; }
                    this.saves = [];
                    this.filename = filename;
                    if (buffer === undefined) {
                        var buffer_1 = new ArrayBuffer(131072);
                        this.buffer = new DataView(buffer_1);
                    }
                    else {
                        this.buffer = buffer;
                    }
                    this.header = new Header(this.buffer);
                    if (buffer === undefined) {
                        this.format();
                    }
                    this.reloadSaves();
                }
                MemoryCard.prototype.reloadSaves = function () {
                    var _this = this;
                    while (this.saves.length > 0) {
                        this.saves.pop();
                    }
                    this.header.blockMetadata.forEach(function (block, index) {
                        if (block.blockState == BLOCK_FIRST) {
                            var blockCount = _this.getSaveBlocks(_this.saves.length).length;
                            _this.saves.push(new SaveMetadata(block, _this.buffer, (index + 1) * 8192, blockCount));
                        }
                    });
                };
                MemoryCard.prototype.format = function () {
                    this.header.format();
                };
                Object.defineProperty(MemoryCard.prototype, "usedBlocks", {
                    get: function () {
                        return this.header.blockMetadata
                            .filter(function (block) { return block.blockState !== BLOCK_AVAILABLE; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MemoryCard.prototype, "freeBlocks", {
                    get: function () {
                        return this.header.blockMetadata
                            .filter(function (block) { return block.blockState === BLOCK_AVAILABLE; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MemoryCard.prototype, "saveCount", {
                    get: function () {
                        return this.header.blockMetadata
                            .filter(function (block) { return block.blockState === BLOCK_FIRST; }).length;
                    },
                    enumerable: true,
                    configurable: true
                });
                MemoryCard.prototype.deleteSave = function (index) {
                    var _this = this;
                    var blocks = this.getSaveBlocks(index);
                    blocks.forEach(function (block) {
                        var blockIndex = (block.byteOffset / 8192) - 1;
                        _this.header.blockMetadata[blockIndex].format();
                    });
                    this.reloadSaves();
                };
                MemoryCard.prototype.getSaveBlocks = function (index) {
                    var blocks = [];
                    var block = this.header.blockMetadata.filter(function (block) { return block.blockState == BLOCK_FIRST; })[index];
                    var blockIndex = block.blockIndex;
                    blocks.push(new DataView(this.buffer.buffer, 8192 * (1 + blockIndex), 8192));
                    if (block.nextBlock !== LAST_BLOCK_SENTINAL) {
                        this.getLinkedBlocks(block.nextBlock).forEach(function (block) { return blocks.push(block); });
                    }
                    return blocks;
                };
                MemoryCard.prototype.getLinkedBlocks = function (index) {
                    var block = this.header.blockMetadata[index];
                    var blocks = [];
                    while (true) {
                        blocks.push(new DataView(this.buffer.buffer, 8192 * (1 + index), 8192));
                        if (block.nextBlock === LAST_BLOCK_SENTINAL) {
                            break;
                        }
                        index = block.nextBlock;
                        block = this.header.blockMetadata[block.nextBlock];
                    }
                    return blocks;
                };
                return MemoryCard;
            }());
            var Header = /** @class */ (function () {
                function Header(buffer) {
                    this._buffer = buffer;
                    this.blockMetadata = new Array(15);
                    for (var i = 0; i < 15; i++) {
                        var offset = 0x80 + (i * 128);
                        this.blockMetadata[i] = new BlockMetadata(buffer, offset);
                    }
                }
                Header.prototype.format = function () {
                    writeString(this._buffer, 0, 'MC');
                    this._buffer.setUint8(0x7f, 0x0e);
                    for (var i = 0; i < 15; i++) {
                        this.blockMetadata[i].format();
                    }
                    for (var i = 0; i < 3456; i++) {
                        this._buffer.setUint8(0x1200 + i, 0xff);
                    }
                    // clear unused frames
                    for (var i = 0; i < 20; i++) {
                        var offset = 0x1200 + (i * 128);
                        this._buffer.setUint8(offset, 0xff); // mark as unusable
                        for (var j = 0; j < 3; j++) {
                            this._buffer.setUint8(offset + j, 0xff);
                        }
                        this._buffer.setUint8(offset + 8, 0xff); // mark next block unused
                        this._buffer.setUint8(offset + 8, 0xff); // mark next frame unused
                    }
                };
                return Header;
            }());
            var BlockMetadata = /** @class */ (function () {
                function BlockMetadata(buffer, offset) {
                    this._buffer = buffer;
                    this._offset = offset;
                }
                Object.defineProperty(BlockMetadata.prototype, "blockIndex", {
                    get: function () {
                        return (this._offset / 0x80) - 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockMetadata.prototype, "blockState", {
                    get: function () {
                        return this._buffer.getUint8(this._offset);
                    },
                    set: function (value) {
                        this._buffer.setUint8(this._offset, value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockMetadata.prototype, "nextBlock", {
                    get: function () {
                        return this._buffer.getUint8(this._offset + 8);
                    },
                    set: function (value) {
                        this._buffer.setUint8(this._offset + 8, value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockMetadata.prototype, "countryCode", {
                    get: function () {
                        var view = new DataView(this._buffer.buffer, this._buffer.byteOffset + this._offset + 0xA, 2);
                        return utf8Decoder.decode(view);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockMetadata.prototype, "productCode", {
                    get: function () {
                        var view = new DataView(this._buffer.buffer, this._buffer.byteOffset + this._offset + 0xC, 10);
                        return utf8Decoder.decode(view);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockMetadata.prototype, "identifier", {
                    get: function () {
                        var view = new DataView(this._buffer.buffer, this._buffer.byteOffset + this._offset + 0x16, 8);
                        return utf8Decoder.decode(view);
                    },
                    enumerable: true,
                    configurable: true
                });
                BlockMetadata.prototype.format = function () {
                    this.blockState = BLOCK_AVAILABLE;
                    this.fixChecksum();
                };
                BlockMetadata.prototype.fixChecksum = function () {
                    var value = 0;
                    for (var i = 0; i < 127; i++) {
                        value = value ^ this._buffer.getUint8(this._offset + i);
                    }
                    this._buffer.setUint8(this._offset + 127, value);
                };
                return BlockMetadata;
            }());
            var SaveMetadata = /** @class */ (function () {
                function SaveMetadata(block, buffer, offset, blockCount) {
                    this.block = block;
                    this.buffer = buffer;
                    this.offset = offset;
                    this.blockCount = blockCount;
                }
                Object.defineProperty(SaveMetadata.prototype, "filename", {
                    get: function () {
                        return truncateString("" + this.block.countryCode + this.block.productCode + this.block.identifier);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SaveMetadata.prototype, "title", {
                    get: function () {
                        var array = new Uint8Array(this.buffer.buffer, this.offset + 4, 64);
                        return truncateString(shiftJisDecoder.decode(array)).normalize('NFKC');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SaveMetadata.prototype, "iconFrameCount", {
                    get: function () {
                        return 3 & this.buffer.getUint8(2 + this.offset);
                    },
                    enumerable: true,
                    configurable: true
                });
                SaveMetadata.prototype.iconDataAsRGBA = function (frameIndex) {
                    var iconPalette = this.iconPalette;
                    var array = new Uint8ClampedArray(256 * 4);
                    var offset = frameIndex * 128 + this.offset;
                    for (var i = 0; i < 128; i++) {
                        var byte = this.buffer.getUint8(offset + 128 + i);
                        var index1 = (15 & byte);
                        var index2 = (240 & byte) >>> 4;
                        array.set(iconPalette[index1], i * 8);
                        array.set(iconPalette[index2], i * 8 + 4);
                    }
                    return array;
                };
                Object.defineProperty(SaveMetadata.prototype, "iconPalette", {
                    get: function () {
                        var mapping = {};
                        for (var i = 0; i < 16; i++) {
                            var color = this.buffer.getUint16(96 + (2 * i) + this.offset, true);
                            var r = (31 & color);
                            var g = (992 & color) >>> 5;
                            var b = (31744 & color) >>> 10;
                            var a = color == 0 ? 0 : 255;
                            r = Math.trunc(r * (255.0 / 31.0));
                            g = Math.trunc(g * (255.0 / 31.0));
                            b = Math.trunc(b * (255.0 / 31.0));
                            mapping[i] = new Uint8Array([r, g, b, a]);
                        }
                        return mapping;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SaveMetadata;
            }());
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/navigation/navigation.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nrouter-outlet {\n  display: none;\n}\n\n#content {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RodXJzdG9uL2NvZGUvcHMxLW1lbW9yeS1jYXJkLWVkaXRvci9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5yb3V0ZXItb3V0bGV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW46IDE2cHg7XG59IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5yb3V0ZXItb3V0bGV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW46IDE2cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/navigation/navigation.component.ts ***!
          \****************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent(breakpointObserver) {
                    this.breakpointObserver = breakpointObserver;
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                }
                return NavigationComponent;
            }());
            NavigationComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NavigationComponent.prototype, "title", void 0);
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/save-icon/save-icon.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/save-icon/save-icon.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".save-icon {\n  image-rendering: optimizeSpeed;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RodXJzdG9uL2NvZGUvcHMxLW1lbW9yeS1jYXJkLWVkaXRvci9zcmMvYXBwL3NhdmUtaWNvbi9zYXZlLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhdmUtaWNvbi9zYXZlLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHdDQUFBO01BQUEsaUNBQUE7TUFBQSwwQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zYXZlLWljb24vc2F2ZS1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhdmUtaWNvbiB7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59IiwiLnNhdmUtaWNvbiB7XG4gIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/save-icon/save-icon.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/save-icon/save-icon.component.ts ***!
          \**************************************************/
        /*! exports provided: SaveIconComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIconComponent", function () { return SaveIconComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _memory_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memory-card.service */ "./src/app/memory-card.service.ts");
            var SaveIconComponent = /** @class */ (function () {
                function SaveIconComponent(memoryCardService) {
                    this.iconFrames = [];
                    this.iconFrame = 0;
                    this.size = '64px';
                    this.margin = '8px';
                    this.memoryCardService = memoryCardService;
                }
                Object.defineProperty(SaveIconComponent.prototype, "effectiveIconFrame", {
                    get: function () {
                        return this.iconFrame % this.save.iconFrameCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                SaveIconComponent.prototype.ngAfterViewInit = function () {
                    this.context = this.canvas.nativeElement.getContext('2d');
                    for (var i = 0; i < this.save.iconFrameCount; i++) {
                        var iconData = this.save.iconDataAsRGBA(i);
                        this.iconFrames.push(new ImageData(iconData, 16, 16));
                    }
                    this.context.putImageData(this.iconFrames[this.effectiveIconFrame], 0, 0);
                };
                SaveIconComponent.prototype.ngOnChanges = function (changes) {
                    if (this.context !== undefined) {
                        this.context.putImageData(this.iconFrames[this.effectiveIconFrame], 0, 0);
                    }
                };
                return SaveIconComponent;
            }());
            SaveIconComponent.ctorParameters = function () { return [
                { type: _memory_card_service__WEBPACK_IMPORTED_MODULE_2__["MemoryCardService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SaveIconComponent.prototype, "save", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false })
            ], SaveIconComponent.prototype, "canvas", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SaveIconComponent.prototype, "iconFrame", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SaveIconComponent.prototype, "size", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SaveIconComponent.prototype, "margin", void 0);
            SaveIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-save-icon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./save-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/save-icon/save-icon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./save-icon.component.scss */ "./src/app/save-icon/save-icon.component.scss")).default]
                })
            ], SaveIconComponent);
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/welcome/welcome.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mc-add-button {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RodXJzdG9uL2NvZGUvcHMxLW1lbW9yeS1jYXJkLWVkaXRvci9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1jLWFkZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMXJlbTtcbiAgICBib3R0b206IDFyZW07XG4gICAgei1pbmRleDogMTAwXG59IiwiLm1jLWFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxcmVtO1xuICBib3R0b206IDFyZW07XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/welcome/welcome.component.ts ***!
          \**********************************************/
        /*! exports provided: WelcomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () { return WelcomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WelcomeComponent = /** @class */ (function () {
                function WelcomeComponent() {
                    console.log(this.memoryCard);
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                };
                return WelcomeComponent;
            }());
            WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-welcome',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
                })
            ], WelcomeComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/thurston/code/ps1-memory-card-editor/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map