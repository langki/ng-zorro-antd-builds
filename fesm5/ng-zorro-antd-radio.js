import { Directive, Injectable, Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Input, ElementRef, Optional, ViewChild, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { ReplaySubject, Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: radio-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioButtonDirective = /** @class */ (function () {
    function NzRadioButtonDirective() {
    }
    NzRadioButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-radio-button]'
                },] }
    ];
    return NzRadioButtonDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: radio.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioService = /** @class */ (function () {
    function NzRadioService() {
        this.selected$ = new ReplaySubject(1);
        this.touched$ = new Subject();
        this.disabled$ = new ReplaySubject(1);
        this.name$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    NzRadioService.prototype.touch = /**
     * @return {?}
     */
    function () {
        this.touched$.next();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioService.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selected$.next(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioService.prototype.setDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.disabled$.next(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioService.prototype.setName = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.name$.next(value);
    };
    NzRadioService.decorators = [
        { type: Injectable }
    ];
    return NzRadioService;
}());
if (false) {
    /** @type {?} */
    NzRadioService.prototype.selected$;
    /** @type {?} */
    NzRadioService.prototype.touched$;
    /** @type {?} */
    NzRadioService.prototype.disabled$;
    /** @type {?} */
    NzRadioService.prototype.name$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: radio-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, nzRadioService) {
        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.value = null;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nzDisabled = false;
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        this.nzName = null;
    }
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzRadioService.selected$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.value !== value) {
                _this.value = value;
                _this.onChange(_this.value);
            }
        }));
        this.nzRadioService.touched$.subscribe((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.onTouched(); }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzName = changes.nzName;
        if (nzDisabled) {
            this.nzRadioService.setDisabled(this.nzDisabled);
        }
        if (nzName) {
            this.nzRadioService.setName((/** @type {?} */ (this.nzName)));
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.nzRadioService.select(value);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
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
    NzRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.nzRadioService.setDisabled(isDisabled);
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-radio-group',
                    exportAs: 'nzRadioGroup',
                    preserveWhitespaces: false,
                    template: " <ng-content></ng-content> ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzRadioService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group]': "true",
                        '[class.ant-radio-group-large]': "nzSize === 'large'",
                        '[class.ant-radio-group-small]': "nzSize === 'small'",
                        '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzRadioService }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        nzDisabled: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzName: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
if (false) {
    /** @type {?} */
    NzRadioGroupComponent.ngAcceptInputType_nzDisabled;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.destroy$;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzName;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.nzRadioService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioComponent = /** @class */ (function () {
    function NzRadioComponent(elementRef, cdr, focusMonitor, nzRadioService, nzRadioButtonDirective) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nzValue = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzRadioComponent.prototype.onHostClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** prevent label click triggered twice. **/
        event.stopPropagation();
        event.preventDefault();
        if (!this.nzDisabled && !this.isChecked) {
            if (this.nzRadioService) {
                this.nzRadioService.select(this.nzValue);
            }
            if (this.isNgModel) {
                this.isChecked = true;
                this.onChange(true);
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia((/** @type {?} */ (this.inputElement)), 'keyboard');
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.inputElement)).nativeElement.blur();
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzRadioComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.writeValue = /**
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
    NzRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.name = name;
                _this.cdr.markForCheck();
            }));
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                _this.nzDisabled = disabled;
                _this.cdr.markForCheck();
            }));
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.isChecked = _this.nzValue === value;
                _this.cdr.markForCheck();
            }));
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
                if (_this.nzRadioService) {
                    _this.nzRadioService.touch();
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio],[nz-radio-button]',
                    exportAs: 'nzRadio',
                    preserveWhitespaces: false,
                    template: "\n    <span\n      [class.ant-radio]=\"!isRadioButton\"\n      [class.ant-radio-checked]=\"isChecked && !isRadioButton\"\n      [class.ant-radio-disabled]=\"nzDisabled && !isRadioButton\"\n      [class.ant-radio-button]=\"isRadioButton\"\n      [class.ant-radio-button-checked]=\"isChecked && isRadioButton\"\n      [class.ant-radio-button-disabled]=\"nzDisabled && isRadioButton\"\n    >\n      <input\n        #inputElement\n        type=\"radio\"\n        [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n        [class.ant-radio-input]=\"!isRadioButton\"\n        [class.ant-radio-button-input]=\"isRadioButton\"\n        [disabled]=\"nzDisabled\"\n        [checked]=\"isChecked\"\n        [attr.name]=\"name\"\n      />\n      <span [class.ant-radio-inner]=\"!isRadioButton\" [class.ant-radio-button-inner]=\"isRadioButton\"></span>\n    </span>\n    <span><ng-content></ng-content></span>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-wrapper]': '!isRadioButton',
                        '[class.ant-radio-button-wrapper]': 'isRadioButton',
                        '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                        '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                        '[class.ant-radio-wrapper-disabled]': 'nzDisabled && !isRadioButton',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled && isRadioButton',
                        '(click)': 'onHostClick($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: NzRadioService, decorators: [{ type: Optional }] },
        { type: NzRadioButtonDirective, decorators: [{ type: Optional }] }
    ]; };
    NzRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
}());
if (false) {
    /** @type {?} */
    NzRadioComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzRadioComponent.ngAcceptInputType_nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.isNgModel;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.destroy$;
    /** @type {?} */
    NzRadioComponent.prototype.isChecked;
    /** @type {?} */
    NzRadioComponent.prototype.name;
    /** @type {?} */
    NzRadioComponent.prototype.isRadioButton;
    /** @type {?} */
    NzRadioComponent.prototype.onChange;
    /** @type {?} */
    NzRadioComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioComponent.prototype.inputElement;
    /** @type {?} */
    NzRadioComponent.prototype.nzValue;
    /** @type {?} */
    NzRadioComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioComponent.prototype.nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.nzRadioService;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.nzRadioButtonDirective;
}

/**
 * @fileoverview added by tsickle
 * Generated from: radio.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzRadioModule = /** @class */ (function () {
    function NzRadioModule() {
    }
    NzRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
                    declarations: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]
                },] }
    ];
    return NzRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-radio.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzRadioButtonDirective, NzRadioComponent, NzRadioGroupComponent, NzRadioModule, NzRadioService };
//# sourceMappingURL=ng-zorro-antd-radio.js.map
