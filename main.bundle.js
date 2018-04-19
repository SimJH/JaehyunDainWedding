webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* swiper {\r\n  height: 500px;\r\n  width: 100%;\r\n} */\r\n.swiper-wrapper {\r\n    box-sizing: border-box;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"sameHeight\">\n  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n    <swiper [config]=\"config\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" data-swiper-autoplay=\"3000\">\n          <div style=\"text-align:center\">\n            <h1>\n              My Dain !\n            </h1>\n            <img width=\"100%\" src=\"assets/images/1.png\">\n          </div>\n        </div>\n        <div class=\"swiper-slide\" data-swiper-autoplay=\"3000\">\n          <div style=\"text-align:center\">\n            <h1>\n              I LOVE YOU\n            </h1>\n            <img width=\"100%\" src=\"assets/images/2.png\">\n          </div>\n        </div>\n      </div>\n      <!-- Add Pagination -->\n      <!-- <div class=\"swiper-pagination\"></div> -->\n      <!-- Add Arrows -->\n      <!-- <div class=\"swiper-button-next\"></div>\n      <div class=\"swiper-button-prev\"></div> -->\n    </swiper>\n    <!-- \n    <div class=\"reveal\">\n      <div class=\"slides\">\n        <section>\n          <div style=\"text-align:center\">\n            <h1>\n              My Dain !\n            </h1>\n            <img width=\"300\" src=\"https://cdn.pixabay.com/photo/2017/01/20/08/41/hearts-1994273_960_720.png\">\n          </div>\n        </section>\n        <section>\n          <div style=\"text-align:center\">\n            <h1>\n              I LOVE YOU\n            </h1>\n            <img width=\"300\" src=\"https://cdn.pixabay.com/photo/2017/01/20/08/41/hearts-1994273_960_720.png\">\n          </div>\n        </section>\n      </div>\n    </div> -->\n\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 typingArea\">\n    <span typingAnimation [typeSpeed]=\"35\" [startDelay]=\"1000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      ▷ For Her\n    </span>\n    <br />\n    <span class=\"padding15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"2000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      ▷ I love you\n    </span>\n    <br />\n    <span class=\"padding30 font-size-17\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"3000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      that words I never say friends make fun but\n      <br/>I tell you every day\n    </span>\n    <br />\n    <span class=\"padding30\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"6000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      ▷ And\n    </span>\n    <br />\n    <span class=\"padding50 font-size-17\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"7000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      everyone is jealous of my ride because you sit in the passenger side\n    </span>\n    <br />\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"9000\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      □ IT'S THE SIMPLE THINGS YOU DO\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"9500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">\n      □ I JUST CAN'T GET ENOUGH OF YOU\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"10000\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ IT'S THAT PERFUME THAT YOU WEAR\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"10500\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ AND\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"11000\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ THE WAY YOU DO YOUR HAIR THAT I LOVE SO MUCH\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"11500\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ SO TAKE MY HAND STAY AS LONG AS\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"12000\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ YOU CAN WITH THE MAN\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"12500\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ IF YOU PROMISE TO ACCOMPLISH LOVE\n    </span>\n    <br />\n    <span class=\"padding15 font-size-15\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"13000\" [hideCursorOnComplete]=\"true\"\n      (complete)=\"onTypingAnimationComplete()\">\n      □ ALL ME NEED IS LOVE.\n    </span>\n    <br />\n    <span class=\"padding60\" typingAnimation [typeSpeed]=\"35\" [startDelay]=\"13000\" [hideCursorOnComplete]=\"false\" (complete)=\"onTypingAnimationComplete()\">\n      ▷ From Your Jaehyun\n    </span>\n  </div>\n</div>\n\n\n\n<!-- <div id=\"typed-strings\">\n    <p>Typed.js is an\n      <strong>Awesome</strong> library.</p>\n    <p>It\n      <em>types</em> out sentences.</p>\n  </div>\n  <span id=\"typed\" #typetext></span> -->\n<!-- <h2>\n  <span typingAnimation [typeSpeed]=\"35\" [startDelay]=\"1000\" (complete)=\"onComplete()\">\n    I love you I love you I love you\n    <br> I love you I love you I love you I love you I love you\n  </span>\n</h2> -->\n<!-- <ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    // next() {
    //   this.usefulSwiper.swiper.slideNext();
    // }
    function AppComponent() {
        this.title = 'app';
        // index = 0;
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            autoplay: 3000
        };
    }
    // @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
    AppComponent.prototype.ngOnInit = function () {
        // this.typed.begin();
        // var typed = new Typed(this.elementRef.nativeElement, {
        //   strings: ["This is a JavaScript library", "This is an ES6 module"],
        //   smartBackspace: true, // Default value
        //   typeSpeed: 40
        // });
        // setTimeout(function() {
        // this.usefulSwiper.swiper.createLoop();
        // Now you can use all slider methods like
        // this.index = 1;
        // }, 1000);
        // const mySwiper = new Swiper('.swiper-container', {
        //   autoplay: {
        //     delay: 5000,
        //   }
        // })
    };
    AppComponent.prototype.onTypingAnimationComplete = function () {
        console.log('#TYPING ANIMATION COMPLETE');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typetext'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "elementRef", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_typing_animation__ = __webpack_require__("../../../../angular-typing-animation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3_angular_typing_animation__["a" /* TypingAnimationDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_useful_swiper__["SwiperModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map