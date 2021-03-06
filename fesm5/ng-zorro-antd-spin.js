import { __decorate, __metadata } from 'tslib';
import { Component, ViewEncapsulation, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputNumber, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, BehaviorSubject } from 'rxjs';
import { flatMap, debounceTime, takeUntil } from 'rxjs/operators';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: spin.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzIndicator = null;
        this.nzSize = 'default';
        this.nzTip = null;
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.delay$ = new BehaviorSubject(this.nzDelay);
        this.isLoading = true;
    }
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var loading$ = this.spinning$.pipe(flatMap((/**
         * @return {?}
         */
        function () { return _this.delay$; })), flatMap((/**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            if (delay === 0) {
                return _this.spinning$;
            }
            else {
                return _this.spinning$.pipe(debounceTime(delay));
            }
        })), takeUntil(this.destroy$));
        loading$.subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            _this.isLoading = loading;
            _this.cdr.markForCheck();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSpinning = changes.nzSpinning, nzDelay = changes.nzDelay;
        if (nzSpinning) {
            this.spinning$.next(this.nzSpinning);
        }
        if (nzDelay) {
            this.delay$.next(this.nzDelay);
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    exportAs: 'nzSpin',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <ng-template #defaultTemplate>\n      <span class=\"ant-spin-dot ant-spin-dot-spin\">\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n      </span>\n    </ng-template>\n    <div *ngIf=\"isLoading\">\n      <div\n        class=\"ant-spin\"\n        [class.ant-spin-spinning]=\"isLoading\"\n        [class.ant-spin-lg]=\"nzSize === 'large'\"\n        [class.ant-spin-sm]=\"nzSize === 'small'\"\n        [class.ant-spin-show-text]=\"nzTip\"\n      >\n        <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultTemplate\"></ng-template>\n        <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n      </div>\n    </div>\n    <div *ngIf=\"!nzSimple\" class=\"ant-spin-container\" [class.ant-spin-blur]=\"isLoading\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[class.ant-spin-nested-loading]': '!nzSimple'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzSpinComponent.propDecorators = {
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
}());
if (false) {
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzDelay;
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzSimple;
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.delay$;
    /** @type {?} */
    NzSpinComponent.prototype.isLoading;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: spin.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSpinModule = /** @class */ (function () {
    function NzSpinModule() {
    }
    NzSpinModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSpinComponent],
                    declarations: [NzSpinComponent],
                    imports: [CommonModule, ObserversModule]
                },] }
    ];
    return NzSpinModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-spin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSpinComponent, NzSpinModule };
//# sourceMappingURL=ng-zorro-antd-spin.js.map
