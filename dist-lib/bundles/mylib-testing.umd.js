(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('mylib/testing', ['exports'], factory) :
    (global = global || self, factory((global.mylib = global.mylib || {}, global.mylib.testing = {})));
}(this, function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockService = /** @class */ (function () {
        function MockService() {
            this.mockMethod = {};
        }
        return MockService;
    }());

    exports.MockService = MockService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mylib-testing.umd.js.map
