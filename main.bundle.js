webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n  <div class=\"row\">\n    <h1>VZW Vincenthof</h1>\n    <p>Hier komt de content van de webapplicatie.</p>\n    <p>Voorbeeld van collectie patiënten.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <ul class=\"collection\">\n      <li class=\"collection-item avatar\" *ngFor=\"let patient of patienten\">\n        <img id=\"face\" src=\"../assets/images/unknown.png\" alt=\"\">\n        <span class=\"title\"><b>Patiënt:</b> {{patient.voornaam}}, {{patient.naam}}</span>\n        <p>\n          <b>Kamer: </b>{{patient.kamer}}\n          <br>\n          <b>Verdieping: </b>{{patient.verdieping}}\n          <br>\n        </p>\n        <a href=\"#!\" class=\"secondary-content\">\n          <a class=\"waves-effect waves-light btn\">Meer info</a>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>-->\n<app-verantwoordelijke [verantwoordelijke]=\"verantwoordelijke\"></app-verantwoordelijke>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__ = __webpack_require__("../../../../../src/app/patient/patient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verantwoordelijke_verantwoordelijke_model__ = __webpack_require__("../../../../../src/app/verantwoordelijke/verantwoordelijke.model.ts");
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
        this.title = 'app';
        this.patienten = new Array();
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Marie-Louise", "Van Nieuwenhuyse", 1, 1));
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Kathleen", "Van Eeckhoute", 2, 1));
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Jean-Pierre", "Van Wassenhove", 3, 1));
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Jonas", "Van Wassenhove", 4, 1));
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Thomas", "Van Wassenhove", 5, 1));
        this.patienten.push(new __WEBPACK_IMPORTED_MODULE_1__patient_patient_model__["a" /* Patient */]("Thias", "Van Wassenhove", 6, 1));
        this.verantwoordelijke = new __WEBPACK_IMPORTED_MODULE_2__verantwoordelijke_verantwoordelijke_model__["a" /* Verantwoordelijke */]("Van Wassenhove", "Ilias", "iliasvw@hotmail.com");
        this.verantwoordelijke.patienten = this.patienten;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_patient_component__ = __webpack_require__("../../../../../src/app/patient/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verantwoordelijke_verantwoordelijke_component__ = __webpack_require__("../../../../../src/app/verantwoordelijke/verantwoordelijke.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__patient_patient_component__["a" /* PatientComponent */],
            __WEBPACK_IMPORTED_MODULE_5__verantwoordelijke_verantwoordelijke_component__["a" /* VerantwoordelijkeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  patient works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientComponent = (function () {
    function PatientComponent() {
    }
    PatientComponent.prototype.ngOnInit = function () {
    };
    return PatientComponent;
}());
PatientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-patient',
        template: __webpack_require__("../../../../../src/app/patient/patient.component.html"),
        styles: [__webpack_require__("../../../../../src/app/patient/patient.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PatientComponent);

//# sourceMappingURL=patient.component.js.map

/***/ }),

/***/ "../../../../../src/app/patient/patient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
var Patient = (function () {
    function Patient(voornaam, naam, kamer, verdieping) {
        this._voornaam = voornaam;
        this._naam = naam;
        this._kamer = kamer;
        this._verdieping = verdieping;
    }
    Object.defineProperty(Patient.prototype, "voornaam", {
        get: function () {
            return this._voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "naam", {
        get: function () {
            return this._naam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "kamer", {
        get: function () {
            return this._kamer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "verdieping", {
        get: function () {
            return this._verdieping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "verantwoordelijke", {
        set: function (verantwoordelijke) {
            this.verantwoordelijke = verantwoordelijke;
        },
        enumerable: true,
        configurable: true
    });
    return Patient;
}());

//# sourceMappingURL=patient.model.js.map

/***/ }),

/***/ "../../../../../src/app/verantwoordelijke/verantwoordelijke.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1>Goedemorgen {{verantwoordelijke.voornaam}}</h1>\n    <p>Hieronder vindt u een overzicht van de patiënten waarvoor u verantwoordelijk bent:</p>\n    <ul class=\"collection\">\n      <li class=\"collection-item avatar\" *ngFor=\"let patient of verantwoordelijke.patienten\">\n        <img id=\"face\" src=\"../assets/images/unknown.png\" alt=\"\">\n        <span class=\"title\">\n          <b>Patiënt:</b> {{patient.voornaam}}, {{patient.naam}}</span>\n        <p>\n          <b>Kamer: </b>{{patient.kamer}}\n          <br>\n          <b>Verdieping: </b>{{patient.verdieping}}\n          <br>\n        </p>\n        <a href=\"../patient/patient.component.html\" class=\"secondary-content\">\n          <a class=\"waves-effect waves-light btn\">Meer info</a>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/verantwoordelijke/verantwoordelijke.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verantwoordelijke/verantwoordelijke.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerantwoordelijkeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verantwoordelijke_model__ = __webpack_require__("../../../../../src/app/verantwoordelijke/verantwoordelijke.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerantwoordelijkeComponent = (function () {
    function VerantwoordelijkeComponent() {
    }
    VerantwoordelijkeComponent.prototype.ngOnInit = function () {
    };
    return VerantwoordelijkeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__verantwoordelijke_model__["a" /* Verantwoordelijke */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__verantwoordelijke_model__["a" /* Verantwoordelijke */]) === "function" && _a || Object)
], VerantwoordelijkeComponent.prototype, "verantwoordelijke", void 0);
VerantwoordelijkeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-verantwoordelijke',
        template: __webpack_require__("../../../../../src/app/verantwoordelijke/verantwoordelijke.component.html"),
        styles: [__webpack_require__("../../../../../src/app/verantwoordelijke/verantwoordelijke.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], VerantwoordelijkeComponent);

var _a;
//# sourceMappingURL=verantwoordelijke.component.js.map

/***/ }),

/***/ "../../../../../src/app/verantwoordelijke/verantwoordelijke.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verantwoordelijke; });
var Verantwoordelijke = (function () {
    function Verantwoordelijke(naam, voornaam, email) {
        this._patienten = new Array();
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
    }
    Object.defineProperty(Verantwoordelijke.prototype, "voornaam", {
        get: function () {
            return this._voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Verantwoordelijke.prototype, "naam", {
        get: function () {
            return this._naam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Verantwoordelijke.prototype, "patienten", {
        get: function () {
            return this._patienten;
        },
        set: function (patienten) {
            this._patienten = patienten;
        },
        enumerable: true,
        configurable: true
    });
    Verantwoordelijke.prototype.voegPatientToe = function (patient) {
        this._patienten.push(patient);
    };
    return Verantwoordelijke;
}());

//# sourceMappingURL=verantwoordelijke.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map