/** imports */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ui_router_ng2_1 = require("ui-router-ng2");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
/** Components */
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <a uiSref=\"hello\" uiSrefActive=\"active\">Hello</a>\n  <a uiSref=\"about\" uiSrefActive=\"active\">About</a>\n  \n  <ui-view></ui-view>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
var Hello = (function () {
    function Hello() {
    }
    Hello = __decorate([
        core_1.Component({
            template: '<h3>Hello world!</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], Hello);
    return Hello;
}());
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
/** States */
var helloState = { name: 'hello', url: '/hello', component: Hello };
var aboutState = { name: 'about', url: '/about', component: About };
/** Root Application NgModule */
var RootAppModule = (function () {
    function RootAppModule() {
    }
    RootAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ui_router_ng2_1.UIRouterModule.forRoot({ states: [helloState, aboutState], useHash: true })
            ],
            declarations: [App, Hello, About],
            bootstrap: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], RootAppModule);
    return RootAppModule;
}());
/** Angular 2 bootstrap */
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RootAppModule);
//# sourceMappingURL=helloworld.js.map