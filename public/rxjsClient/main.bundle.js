webpackJsonp([1,4],{

/***/ 401:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 401;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/usr/src/app/vidInfoClient/rx-app/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Video Info Client';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(667),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/usr/src/app/vidInfoClient/rx-app/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rx_item_rx_item_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__rx_item_rx_item_component__["a" /* RxItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/usr/src/app/vidInfoClient/rx-app/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = "http://localhost:8000/vidInfoWrapped/";
var urlCb = "?callback=JSON_CALLBACK";
var RxItemComponent = (function () {
    function RxItemComponent(http) {
        var _this = this;
        this.fileName = "";
        this.titleDetailsParsed = [];
        this.results = [];
        this.searchesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.searchesSubjectNot = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]("");
        this.fileNameSearchObservable = null;
        this.blockedLetterObservable = null;
        this.blockedLetterObservable = this.searchesSubjectNot.asObservable();
        this.fileNameSearchObservable = this.searchesSubject.asObservable()
            .debounceTime(200)
            .distinctUntilChanged()
            .map(function (fileName) {
            if (fileName === undefined || fileName.length === 0) {
                return "red-info.txt";
            }
            else {
                return fileName;
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].combineLatest(this.fileNameSearchObservable, this.blockedLetterObservable, function (file, blocked) {
            return { file: file, blocked: blocked };
        })
            .filter(function (_a) {
            var file = _a.file, blocked = _a.blocked;
            return (blocked.length === 0) || !(file.includes(blocked));
        })
            .map(function (_a) {
            var file = _a.file, blocked = _a.blocked;
            return file;
        })
            .switchMap(function (fileName) {
            var url2 = url + fileName + urlCb;
            return http.get(url2)
                .map(function (res) {
                return res.json();
            });
        })
            .filter(function (data) {
            if (data.fileName !== undefined && data.fileName.length !== 0)
                return true;
            else
                return false;
        })
            .map(function (data) {
            return {
                fileName: data.fileName,
                titleDetailsParsed: JSON.parse(data.titleDetails)
            };
        })
            .subscribe(function (data) {
            console.log('Returned data: ' + data);
            _this.fileName = data.fileName;
            _this.results =
                data.titleDetailsParsed
                    .map(function (val, idx) {
                    return {
                        titleNumber: val.titleNumber,
                        length: val.length
                    };
                });
        }, function (error) {
            console.error('Error connecting to server.');
        }, function () {
            console.log('Completed!');
        });
    }
    RxItemComponent.prototype.ngOnInit = function () {
    };
    RxItemComponent.prototype.keyup = function ($event) {
        this.results = [];
        this.searchesSubject.next($event.currentTarget.value);
    };
    RxItemComponent.prototype.keyupNot = function ($event) {
        this.results = [];
        this.searchesSubjectNot.next($event.currentTarget.value);
    };
    RxItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-rx-item',
            template: __webpack_require__(668),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], RxItemComponent);
    return RxItemComponent;
    var _a;
}());
//# sourceMappingURL=/usr/src/app/vidInfoClient/rx-app/src/rx-item.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/usr/src/app/vidInfoClient/rx-app/src/environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<app-rx-item></app-rx-item>\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    Get video file info\n    <br><br>\n    File name\n    <input #search type=\"text\" (keyup)=\"keyup($event)\">\n    <br>\n    Blocked letters\n    <input #searchNot type=\"text\" (keyup)=\"keyupNot($event)\">\n\n    {{fileName}}\n    <pre>{{ search.value | json }}</pre>\n    <ul>\n      <li *ngFor=\"let result of results\">\n        <div class=\"titleNumberCol\">\n          {{result.titleNumber}}</div>\n        <span class=\"lengthCol\">\n          {{result.length}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(402);


/***/ })

},[944]);
//# sourceMappingURL=main.bundle.js.map