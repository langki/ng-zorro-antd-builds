import { __spread, __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directive, Optional, Self, Renderer2, ElementRef, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, NgZone, NgModule } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, merge } from 'rxjs';
import { filter, takeUntil, startWith, switchMap, flatMap, map } from 'rxjs/operators';
import { NgControl } from '@angular/forms';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResizeService } from 'ng-zorro-antd/core/services';

/**
 * @fileoverview added by tsickle
 * Generated from: input.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.nzSize = 'default';
        this._disabled = false;
        this.disabled$ = new Subject();
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    Object.defineProperty(NzInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value != null && "" + value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        if (this.ngControl) {
            (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(filter((/**
             * @return {?}
             */
            function () { return _this.ngControl.disabled !== null; })), takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.disabled$.next((/** @type {?} */ (_this.ngControl.disabled)));
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var disabled = changes.disabled;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nz-input],textarea[nz-input]',
                    exportAs: 'nzInput',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'",
                        '[attr.disabled]': 'disabled || null'
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return NzInputDirective;
}());
if (false) {
    /** @type {?} */
    NzInputDirective.ngAcceptInputType_disabled;
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype._disabled;
    /** @type {?} */
    NzInputDirective.prototype.disabled$;
    /**
     * @type {?}
     * @private
     */
    NzInputDirective.prototype.destroy$;
    /** @type {?} */
    NzInputDirective.prototype.ngControl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzInputGroupWhitSuffixOrPrefixDirective = /** @class */ (function () {
    function NzInputGroupWhitSuffixOrPrefixDirective(elementRef) {
        this.elementRef = elementRef;
    }
    NzInputGroupWhitSuffixOrPrefixDirective.decorators = [
        { type: Directive, args: [{
                    selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]"
                },] }
    ];
    /** @nocollapse */
    NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NzInputGroupWhitSuffixOrPrefixDirective;
}());
if (false) {
    /** @type {?} */
    NzInputGroupWhitSuffixOrPrefixDirective.prototype.elementRef;
}
var NzInputGroupComponent = /** @class */ (function () {
    function NzInputGroupComponent(focusMonitor, elementRef, cdr) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzAddOnBeforeIcon = null;
        this.nzAddOnAfterIcon = null;
        this.nzPrefixIcon = null;
        this.nzSuffixIcon = null;
        this.nzSize = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.nzSize = _this.nzSize); }));
        }
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            _this.focused = !!focusOrigin;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenInputSize();
        /** @type {?} */
        var listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            return merge.apply(void 0, __spread([listOfInputChange$], list.map((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.disabled$; }))));
        })), flatMap((/**
         * @return {?}
         */
        function () { return listOfInputChange$; })), map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return list.some((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.disabled; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            _this.disabled = disabled;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSize = changes.nzSize, nzSuffix = changes.nzSuffix, nzPrefix = changes.nzPrefix, nzPrefixIcon = changes.nzPrefixIcon, nzSuffixIcon = changes.nzSuffixIcon, nzAddOnAfter = changes.nzAddOnAfter, nzAddOnBefore = changes.nzAddOnBefore, nzAddOnAfterIcon = changes.nzAddOnAfterIcon, nzAddOnBeforeIcon = changes.nzAddOnBeforeIcon;
        if (nzSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.nzSize === 'large';
            this.isSmall = this.nzSize === 'small';
        }
        if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
            this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
        }
        if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
            this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        }
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzInputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-group',
                    exportAs: 'nzInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn; else noAddOnTemplate\">\n      <span\n        *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnBeforeIcon\"\n        [template]=\"nzAddOnBefore\"\n      >\n      </span>\n      <span\n        *ngIf=\"isAffix; else contentTemplate\"\n        class=\"ant-input-affix-wrapper\"\n        [class.ant-input-affix-wrapper-sm]=\"isSmall\"\n        [class.ant-input-affix-wrapper-lg]=\"isLarge\"\n      >\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </span>\n      <span\n        *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnAfterIcon\"\n        [template]=\"nzAddOnAfter\"\n      ></span>\n    </span>\n    <ng-template #noAddOnTemplate>\n      <ng-template [ngIf]=\"isAffix\" [ngIfElse]=\"contentTemplate\">\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #affixTemplate>\n      <span *ngIf=\"nzPrefix || nzPrefixIcon\" nz-input-group-slot type=\"prefix\" [icon]=\"nzPrefixIcon\" [template]=\"nzPrefix\"></span>\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      <span *ngIf=\"nzSuffix || nzSuffixIcon\" nz-input-group-slot type=\"suffix\" [icon]=\"nzSuffixIcon\" [template]=\"nzSuffix\"></span>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-input-group-compact]': "nzCompact",
                        '[class.ant-input-search-enter-button]': "nzSearch",
                        '[class.ant-input-search]': "nzSearch",
                        '[class.ant-input-search-sm]': "nzSearch && isSmall",
                        '[class.ant-input-search-large]': "nzSearch && isLarge",
                        '[class.ant-input-group-wrapper]': "isAddOn",
                        '[class.ant-input-group-wrapper-lg]': "isAddOn && isLarge",
                        '[class.ant-input-group-wrapper-sm]': "isAddOn && isSmall",
                        '[class.ant-input-affix-wrapper]': "isAffix && !isAddOn",
                        '[class.ant-input-affix-wrapper-focused]': "isAffix && focused",
                        '[class.ant-input-affix-wrapper-disabled]': "isAffix && disabled",
                        '[class.ant-input-affix-wrapper-lg]': "isAffix && !isAddOn && isLarge",
                        '[class.ant-input-affix-wrapper-sm]': "isAffix && !isAddOn && isSmall",
                        '[class.ant-input-group]': "!isAffix && !isAddOn",
                        '[class.ant-input-group-lg]': "!isAffix && !isAddOn && isLarge",
                        '[class.ant-input-group-sm]': "!isAffix && !isAddOn && isSmall"
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputGroupComponent.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NzInputGroupComponent.propDecorators = {
        listOfNzInputDirective: [{ type: ContentChildren, args: [NzInputDirective,] }],
        nzAddOnBeforeIcon: [{ type: Input }],
        nzAddOnAfterIcon: [{ type: Input }],
        nzPrefixIcon: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzAddOnBefore: [{ type: Input }],
        nzAddOnAfter: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzCompact: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzCompact", void 0);
    return NzInputGroupComponent;
}());
if (false) {
    /** @type {?} */
    NzInputGroupComponent.ngAcceptInputType_nzSearch;
    /** @type {?} */
    NzInputGroupComponent.ngAcceptInputType_nzCompact;
    /** @type {?} */
    NzInputGroupComponent.prototype.listOfNzInputDirective;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSearch;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzCompact;
    /** @type {?} */
    NzInputGroupComponent.prototype.isLarge;
    /** @type {?} */
    NzInputGroupComponent.prototype.isSmall;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAddOn;
    /** @type {?} */
    NzInputGroupComponent.prototype.focused;
    /** @type {?} */
    NzInputGroupComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: autosize.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AutoSizeType() { }
if (false) {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
var NzAutosizeDirective = /** @class */ (function () {
    function NzAutosizeDirective(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isAutoSizeType = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
            });
            if (typeof value === 'string') {
                this.autosize = true;
            }
            else if (isAutoSizeType(value)) {
                this.autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.maxHeight = this.setMaxHeight();
                this.minHeight = this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzAutosizeDirective.prototype.resizeToFitContent = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = (/** @type {?} */ (this.maxHeight));
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = (/** @type {?} */ (this.minHeight));
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }));
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutosizeDirective.prototype.cacheTextareaLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        var textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this.el.parentNode)).appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        (/** @type {?} */ (this.el.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMinHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = minHeight + "px";
        }
        return minHeight;
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMaxHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = maxHeight + "px";
        }
        return maxHeight;
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.resizeToFitContent(true); }));
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    NzAutosizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[nzAutosize]',
                    exportAs: 'nzAutosize',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1',
                        '(input)': 'noopInputHandler()'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: NzResizeService }
    ]; };
    NzAutosizeDirective.propDecorators = {
        nzAutosize: [{ type: Input }]
    };
    return NzAutosizeDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.cachedLineHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousMinRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.minRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.maxRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.maxHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.minHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.inputGap;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.resizeService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: input-group-slot.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzInputGroupSlotComponent = /** @class */ (function () {
    function NzInputGroupSlotComponent() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    NzInputGroupSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-input-group-slot]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <i nz-icon [nzType]=\"icon\" *ngIf=\"icon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"template\">{{ template }}</ng-container>\n  ",
                    host: {
                        '[class.ant-input-group-addon]': "type === 'addon'",
                        '[class.ant-input-prefix]': "type === 'prefix'",
                        '[class.ant-input-suffix]': "type === 'suffix'"
                    }
                }] }
    ];
    NzInputGroupSlotComponent.propDecorators = {
        icon: [{ type: Input }],
        type: [{ type: Input }],
        template: [{ type: Input }]
    };
    return NzInputGroupSlotComponent;
}());
if (false) {
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.icon;
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.type;
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * Generated from: input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzInputModule = /** @class */ (function () {
    function NzInputModule() {
    }
    NzInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzInputDirective,
                        NzInputGroupComponent,
                        NzAutosizeDirective,
                        NzInputGroupSlotComponent,
                        NzInputGroupWhitSuffixOrPrefixDirective
                    ],
                    exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective],
                    imports: [CommonModule, NzIconModule, PlatformModule, NzOutletModule]
                },] }
    ];
    return NzInputModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAutosizeDirective, NzInputDirective, NzInputGroupComponent, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzInputModule };
//# sourceMappingURL=ng-zorro-antd-input.js.map
