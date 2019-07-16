(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mylib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.mylib = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MylibService = /** @class */ (function () {
        function MylibService() {
        }
        MylibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MylibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MylibService.ngInjectableDef = core.defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });
        return MylibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MylibComponent = /** @class */ (function () {
        function MylibComponent() {
        }
        /**
         * @return {?}
         */
        MylibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        MylibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mylib-project',
                        template: "\n    <p>\n      test-project works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MylibComponent.ctorParameters = function () { return []; };
        return MylibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MylibModule = /** @class */ (function () {
        function MylibModule() {
        }
        MylibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MylibComponent],
                        imports: [],
                        exports: [MylibComponent]
                    },] }
        ];
        return MylibModule;
    }());

    exports.MylibComponent = MylibComponent;
    exports.MylibModule = MylibModule;
    exports.MylibService = MylibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mylib.umd.js.map
