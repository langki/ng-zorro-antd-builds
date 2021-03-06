import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER } from '@angular/cdk/keycodes';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: switch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'switch';
var NzSwitchComponent = /** @class */ (function () {
    function NzSwitchComponent(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isChecked = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
        this.nzCheckedChildren = null;
        this.nzUnCheckedChildren = null;
        this.nzSize = 'default';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.onHostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.isChecked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _a;
        this.focusMonitor.focusVia((_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor((/** @type {?} */ (this.switchElement)).nativeElement, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring((/** @type {?} */ (this.switchElement)).nativeElement);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzSwitchComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    };
    NzSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-switch',
                    exportAs: 'nzSwitch',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzSwitchComponent; })),
                            multi: true
                        }
                    ],
                    template: "\n    <button\n      nz-wave\n      type=\"button\"\n      class=\"ant-switch\"\n      #switchElement\n      [disabled]=\"nzDisabled\"\n      [class.ant-switch-checked]=\"isChecked\"\n      [class.ant-switch-loading]=\"nzLoading\"\n      [class.ant-switch-disabled]=\"nzDisabled\"\n      [class.ant-switch-small]=\"nzSize === 'small'\"\n      [nzWaveExtraNode]=\"true\"\n      (keydown)=\"onKeyDown($event)\"\n    >\n      <i *ngIf=\"nzLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\n      <span class=\"ant-switch-inner\">\n        <ng-container *ngIf=\"isChecked; else uncheckTemplate\">\n          <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\n        </ng-container>\n        <ng-template #uncheckTemplate>\n          <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\n        </ng-template>\n      </span>\n      <div class=\"ant-click-animating-node\"></div>\n    </button>\n  ",
                    host: {
                        '(click)': 'onHostClick($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSwitchComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzSwitchComponent.propDecorators = {
        switchElement: [{ type: ViewChild, args: ['switchElement', { static: true },] }],
        nzLoading: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzControl: [{ type: Input }],
        nzCheckedChildren: [{ type: Input }],
        nzUnCheckedChildren: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzControl", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzSwitchComponent.prototype, "nzSize", void 0);
    return NzSwitchComponent;
}());
if (false) {
    /** @type {?} */
    NzSwitchComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzSwitchComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzSwitchComponent.ngAcceptInputType_nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.isChecked;
    /** @type {?} */
    NzSwitchComponent.prototype.onChange;
    /** @type {?} */
    NzSwitchComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.switchElement;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLoading;
    /** @type {?} */
    NzSwitchComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSwitchComponent.prototype.nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.nzCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzUnCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzSize;
    /** @type {?} */
    NzSwitchComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.focusMonitor;
}

/**
 * @fileoverview added by tsickle
 * Generated from: switch.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSwitchModule = /** @class */ (function () {
    function NzSwitchModule() {
    }
    NzSwitchModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSwitchComponent],
                    declarations: [NzSwitchComponent],
                    imports: [CommonModule, NzWaveModule, NzIconModule, NzOutletModule]
                },] }
    ];
    return NzSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-switch.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSwitchComponent, NzSwitchModule };
//# sourceMappingURL=ng-zorro-antd-switch.js.map
