import { __decorate, __metadata, __spread } from 'tslib';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Input, Output, Directive, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { isNil, InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { DateHelperService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: time-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'timePicker';
var NzTimePickerComponent = /** @class */ (function () {
    function NzTimePickerComponent(nzConfigService, element, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.isInit = false;
        this.focused = false;
        this.value = null;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 3
            }
        ];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzUse12Hours = false;
        this.nzSuffixIcon = 'clock-circle';
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzAllowEmpty = true;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value ? new Date(value) : null;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        this.focus();
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTimePickerComponent.prototype.onClickClearBtn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setValue(null);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focused = value;
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inputSize = Math.max(8, this.nzFormat.length) + 2;
        this.origin = new CdkOverlayOrigin(this.element);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, nzFormat = changes.nzFormat, nzDisabled = changes.nzDisabled, nzAutoFocus = changes.nzAutoFocus;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            /** @type {?} */
            var value = nzDisabled.currentValue;
            /** @type {?} */
            var input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    NzTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time instanceof Date) {
            this.value = time;
        }
        else if (isNil(time)) {
            this.value = null;
        }
        else {
            warn('Non-Date type is not recommended for time-picker, use "Date" type.');
            this.value = new Date(time);
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzTimePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker',
                    exportAs: 'nzTimePicker',
                    template: "\n    <div class=\"ant-picker-input\">\n      <input\n        #inputElement\n        type=\"text\"\n        [size]=\"inputSize\"\n        [nzTime]=\"nzFormat\"\n        [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"nzDisabled\"\n        (focus)=\"onFocus(true)\"\n        (blur)=\"onFocus(false)\"\n      />\n      <span class=\"ant-picker-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n      <span *ngIf=\"nzAllowEmpty && value\" class=\"ant-picker-clear\" (click)=\"onClickClearBtn($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" [attr.aria-label]=\"nzClearText\" [attr.title]=\"nzClearText\"></i>\n      </span>\n    </div>\n\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayOffsetY]=\"-2\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-dropdown'\"\n      (detach)=\"close()\"\n      (backdropClick)=\"close()\"\n    >\n      <div [@slideMotion]=\"'enter'\" class=\"ant-picker-dropdown\">\n        <div class=\"ant-picker-panel-container\">\n          <div tabindex=\"-1\" class=\"ant-picker-panel\">\n            <nz-time-picker-panel\n              [ngClass]=\"nzPopupClassName\"\n              [format]=\"nzFormat\"\n              [nzHourStep]=\"nzHourStep\"\n              [nzMinuteStep]=\"nzMinuteStep\"\n              [nzSecondStep]=\"nzSecondStep\"\n              [nzDisabledHours]=\"nzDisabledHours\"\n              [nzDisabledMinutes]=\"nzDisabledMinutes\"\n              [nzDisabledSeconds]=\"nzDisabledSeconds\"\n              [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n              [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n              [nzUse12Hours]=\"nzUse12Hours\"\n              [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n              [nzAddOn]=\"nzAddOn\"\n              [nzClearText]=\"nzClearText\"\n              [nzAllowEmpty]=\"nzAllowEmpty\"\n              [(ngModel)]=\"value\"\n              (ngModelChange)=\"setValue($event)\"\n              (closePanel)=\"close()\"\n            >\n            </nz-time-picker-panel>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-picker]': "true",
                        '[class.ant-picker-large]': "nzSize === 'large'",
                        '[class.ant-picker-small]': "nzSize === 'small'",
                        '[class.ant-picker-disabled]': "nzDisabled",
                        '[class.ant-picker-focused]': "focused",
                        '(click)': 'open()'
                    },
                    animations: [slideMotion],
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzTimePickerComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        nzSize: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPopupClassName: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzHideDisabledOptions: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzHourStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzClearText", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzFormat", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
    return NzTimePickerComponent;
}());
if (false) {
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzUse12Hours;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzAllowEmpty;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.focused;
    /** @type {?} */
    NzTimePickerComponent.prototype.value;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAllowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.renderer;
    /** @type {?} */
    NzTimePickerComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time-holder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
        this.selected12Hours = undefined;
        this._use12Hours = false;
        this._changes = new Subject();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setMinutes = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).minutes && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setMinutes(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setHours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).hours && !disabled) {
            (/** @type {?} */ (this)).initValue();
            if ((/** @type {?} */ (this))._use12Hours) {
                if ((/** @type {?} */ (this)).selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this)).value.setHours(((/** @type {?} */ (value))) + 12);
                }
                else if ((/** @type {?} */ (this)).selected12Hours === 'AM' && value === 12) {
                    (/** @type {?} */ (this)).value.setHours(0);
                }
                else {
                    (/** @type {?} */ (this)).value.setHours(value);
                }
            }
            else {
                (/** @type {?} */ (this)).value.setHours(value);
            }
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setSeconds = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).seconds && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setSeconds(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setUse12Hours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    TimeHolder.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        if (value !== (/** @type {?} */ (this)).value) {
            (/** @type {?} */ (this))._value = value;
            if (isNotNil((/** @type {?} */ (this)).value)) {
                if ((/** @type {?} */ (this))._use12Hours && isNotNil((/** @type {?} */ (this)).hours)) {
                    (/** @type {?} */ (this)).selected12Hours = (/** @type {?} */ (this)).hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                (/** @type {?} */ (this))._clear();
            }
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.initValue = /**
     * @return {?}
     */
    function () {
        if (isNil(this.value)) {
            this.setValue(new Date(), this._use12Hours);
        }
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = undefined;
        this.selected12Hours = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (isNotNil(this.hours)) {
                (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (isNotNil(this.minutes)) {
                (/** @type {?} */ (this.value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (isNotNil(this.seconds)) {
                (/** @type {?} */ (this.value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this.hours)) < 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) + 12);
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this.hours)) >= 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) - 12);
                }
            }
        }
        this.changed();
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this.value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: /**
         * \@description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         * @return {?}
         */
        function () {
            return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour((/** @type {?} */ (this.hours))) : this.hours;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.setSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this.selected12Hours) {
            this.selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    };
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value || this._defaultOpenValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "hours", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._defaultOpenValue = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.calculateViewHour = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selected12Hours = this.selected12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    };
    return TimeHolder;
}());
if (false) {
    /** @type {?} */
    TimeHolder.prototype.selected12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._use12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._changes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time-value-accessor.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimeValueAccessorDirective = /** @class */ (function () {
    function NzTimeValueAccessorDirective(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value, this.nzTime);
            this._onChange((/** @type {?} */ (value)));
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, (/** @type {?} */ (this.nzTime)));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    NzTimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzTime]',
                    exportAs: 'nzTime',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
                },] }
    ];
    /** @nocollapse */
    NzTimeValueAccessorDirective.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ElementRef }
    ]; };
    NzTimeValueAccessorDirective.propDecorators = {
        nzTime: [{ type: Input }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return NzTimeValueAccessorDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.nzTime;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time-picker-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(cdr, dateHelper) {
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._disabledHours = (/**
         * @return {?}
         */
        function () { return []; });
        this._disabledMinutes = (/**
         * @return {?}
         */
        function () { return []; });
        this._disabledSeconds = (/**
         * @return {?}
         */
        function () { return []; });
        this._allowEmpty = true;
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.firstScrolled = false;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.closePanel = new EventEmitter();
    }
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (!!this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
                this.hourEnabled = charSet.has('H') || charSet.has('h');
                this.minuteEnabled = charSet.has('m');
                this.secondEnabled = charSet.has('s');
                if (this.hourEnabled) {
                    this.enabledColumns++;
                }
                if (this.minuteEnabled) {
                    this.enabledColumns++;
                }
                if (this.secondEnabled) {
                    this.enabledColumns++;
                }
                if (this.nzUse12Hours) {
                    this.build12Hours();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
        /** @type {?} */
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = __spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!_this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!_this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isUpperFormat = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperFormat ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperFormat ? 'PM' : 'pm'
            }
        ];
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToTime = /**
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        if (delay === void 0) { delay = 0; }
        if (this.hourEnabled && this.hourListElement) {
            this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), delay, 'hour');
        }
        if (this.minuteEnabled && this.minuteListElement) {
            this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), delay, 'minute');
        }
        if (this.secondEnabled && this.secondListElement) {
            this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), delay, 'second');
        }
        if (this.nzUse12Hours && this.use12HoursListElement) {
            /** @type {?} */
            var selectedHours = this.time.selected12Hours;
            /** @type {?} */
            var index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setSelected12Hours(value.value);
        if (!!this._disabledHours) {
            this.buildHours();
        }
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        if (!instance) {
            return;
        }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[transIndex] || instance.children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, (/** @type {?} */ (this.time.hours))), this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, (/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))), this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.timeDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a, _b, _c, _d, _e, _f;
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minute = value.getMinutes();
        /** @type {?} */
        var second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
            ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
            ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.onClickNow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return hour.index === this.time.viewHours;
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return minute.index === this.time.minutes;
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return second.index === this.time.seconds;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.selectInputRange();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollToTime();
            _this.firstScrolled = true;
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, nzDefaultOpenValue = changes.nzDefaultOpenValue;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
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
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    NzTimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker-panel',
                    exportAs: 'nzTimePickerPanel',
                    template: "\n    <div *ngIf=\"nzInDatePicker\" class=\"ant-picker-header\">\n      <div class=\"ant-picker-header-view\">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>\n    </div>\n    <div class=\"ant-picker-content\">\n      <ul *ngIf=\"hourEnabled\" #hourListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let hour of hourRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectHour(hour)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedHour(hour)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"hour.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ hour.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"minuteEnabled\" #minuteListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let minute of minuteRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectMinute(minute)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedMinute(minute)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"minute.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ minute.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"secondEnabled\" #secondListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let second of secondRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectSecond(second)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedSecond(second)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"second.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ second.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"nzUse12Hours\" #use12HoursListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let range of use12HoursRange\">\n          <li\n            *ngIf=\"!nzHideDisabledOptions\"\n            (click)=\"select12Hours(range)\"\n            class=\"ant-picker-time-panel-cell\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelected12Hours(range)\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ range.value }}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div *ngIf=\"!nzInDatePicker\" class=\"ant-picker-footer\">\n      <div *ngIf=\"nzAddOn\" class=\"ant-picker-footer-extra\">\n        <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n      </div>\n      <ul class=\"ant-picker-ranges\">\n        <li class=\"ant-picker-now\">\n          <a (click)=\"onClickNow()\">\n            {{ 'Calendar.lang.now' | nzI18n }}\n          </a>\n        </li>\n      </ul>\n    </div>\n  ",
                    host: {
                        '[class.ant-picker-time-panel]': "true",
                        '[class.ant-picker-time-panel-column-0]': "enabledColumns === 0 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-1]': "enabledColumns === 1 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-2]': "enabledColumns === 2 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-3]': "enabledColumns === 3 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-narrow]': "enabledColumns < 3",
                        '[class.ant-picker-time-panel-placement-bottomLeft]': "!nzInDatePicker"
                    },
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DateHelperService }
    ]; };
    NzTimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective, { static: false },] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
        use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        closePanel: [{ type: Output }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return NzTimePickerPanelComponent;
}());
if (false) {
    /** @type {?} */
    NzTimePickerPanelComponent.ngAcceptInputType_nzUse12Hours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.firstScrolled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.closePanel;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.cdr;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.dateHelper;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimePickerModule = /** @class */ (function () {
    function NzTimePickerModule() {
    }
    NzTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                    exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                    imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule, NzOutletModule]
                },] }
    ];
    return NzTimePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-time-picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTimePickerComponent, NzTimePickerModule, NzTimePickerPanelComponent, NzTimeValueAccessorDirective };
//# sourceMappingURL=ng-zorro-antd-time-picker.js.map
