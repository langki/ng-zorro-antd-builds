import { CommonModule } from '@angular/common';
import { TemplateRef, Directive, ViewContainerRef, Input, NgModule } from '@angular/core';
import { __values } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template _T
 */
var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.embeddedViewRef = null;
        this.context = new NzStringTemplateOutletContext();
        this.nzStringTemplateOutletContext = null;
        this.nzStringTemplateOutlet = null;
    }
    /**
     * @template T
     * @param {?} _dir
     * @param {?} _ctx
     * @return {?}
     */
    NzStringTemplateOutletDirective.ngTemplateContextGuard = /**
     * @template T
     * @param {?} _dir
     * @param {?} _ctx
     * @return {?}
     */
    function (_dir, _ctx) {
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.recreateView = /**
     * @private
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        /** @type {?} */
        var isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        var templateRef = (/** @type {?} */ ((isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef)));
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
    };
    /**
     * @private
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.updateContext = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        var newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
        /** @type {?} */
        var oldCtx = (/** @type {?} */ ((/** @type {?} */ (this.embeddedViewRef)).context));
        if (newCtx) {
            try {
                for (var _b = __values(Object.keys(newCtx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    oldCtx[propName] = newCtx[propName];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        /** @type {?} */
        var shouldRecreateView = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldOutletRecreate = false;
            if (nzStringTemplateOutlet) {
                if (nzStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                }
                else {
                    /** @type {?} */
                    var isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
                    /** @type {?} */
                    var isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            /** @type {?} */
            var hasContextShapeChanged = (/**
             * @param {?} ctxChange
             * @return {?}
             */
            function (ctxChange) {
                var e_2, _a;
                /** @type {?} */
                var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                /** @type {?} */
                var currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    try {
                        for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                            var propName = currCtxKeys_1_1.value;
                            if (prevCtxKeys.indexOf(propName) === -1) {
                                return true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
            /** @type {?} */
            var shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        });
        if (nzStringTemplateOutlet) {
            this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        /** @type {?} */
        var recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        }
        else {
            /** update context **/
            this.updateContext();
        }
    };
    NzStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    NzStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NzStringTemplateOutletDirective.propDecorators = {
        nzStringTemplateOutletContext: [{ type: Input }],
        nzStringTemplateOutlet: [{ type: Input }]
    };
    return NzStringTemplateOutletDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.embeddedViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.context;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutlet;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.templateRef;
}
var NzStringTemplateOutletContext = /** @class */ (function () {
    function NzStringTemplateOutletContext() {
    }
    return NzStringTemplateOutletContext;
}());
if (false) {
    /** @type {?} */
    NzStringTemplateOutletContext.prototype.$implicit;
}

/**
 * @fileoverview added by tsickle
 * Generated from: outlet.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOutletModule = /** @class */ (function () {
    function NzOutletModule() {
    }
    NzOutletModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [NzStringTemplateOutletDirective],
                    declarations: [NzStringTemplateOutletDirective]
                },] }
    ];
    return NzOutletModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzOutletModule, NzStringTemplateOutletDirective };
//# sourceMappingURL=ng-zorro-antd-core-outlet.js.map
