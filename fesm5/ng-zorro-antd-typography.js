import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, ViewChild, ViewContainerRef, Renderer2, Inject, NgModule } from '@angular/core';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { isStyleSupport, measure, InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';

/**
 * @fileoverview added by tsickle
 * Generated from: text-copy.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTextCopyComponent = /** @class */ (function () {
    function NzTextCopyComponent(host, cdr, clipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.clipboard = clipboard;
        this.i18n = i18n;
        this.copied = false;
        this.copyId = -1;
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        var text = this.text;
        this.textCopy.emit(text);
        this.clipboard.copy(text);
        this.onCopied();
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onCopied = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }), 3000);
    };
    NzTextCopyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-copy',
                    exportAs: 'nzTextCopy',
                    template: "\n    <button\n      nz-tooltip\n      nz-trans-button\n      [nzTooltipTitle]=\"copied ? locale?.copied : locale?.copy\"\n      class=\"ant-typography-copy\"\n      [class.ant-typography-copy-success]=\"copied\"\n      (click)=\"onClick()\"\n    >\n      <i nz-icon [nzType]=\"copied ? 'check' : 'copy'\"></i>\n    </button>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextCopyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Clipboard },
        { type: NzI18nService }
    ]; };
    NzTextCopyComponent.propDecorators = {
        text: [{ type: Input }],
        textCopy: [{ type: Output }]
    };
    return NzTextCopyComponent;
}());
if (false) {
    /** @type {?} */
    NzTextCopyComponent.prototype.copied;
    /** @type {?} */
    NzTextCopyComponent.prototype.copyId;
    /** @type {?} */
    NzTextCopyComponent.prototype.locale;
    /** @type {?} */
    NzTextCopyComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.destroy$;
    /** @type {?} */
    NzTextCopyComponent.prototype.text;
    /** @type {?} */
    NzTextCopyComponent.prototype.textCopy;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.clipboard;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * Generated from: text-edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTextEditComponent = /** @class */ (function () {
    function NzTextEditComponent(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new Subject();
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter();
        this.nativeElement = this.host.nativeElement;
    }
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.focusAndSetValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var _a;
            if ((_a = _this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText || '';
                _this.autosizeDirective.resizeToFitContent();
            }
        }));
    };
    NzTextEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-edit',
                    exportAs: 'nzTextEdit',
                    template: "\n    <button *ngIf=\"!editing\" [nzTooltipTitle]=\"locale?.edit\" nz-tooltip nz-trans-button class=\"ant-typography-edit\" (click)=\"onClick()\">\n      <i nz-icon nzType=\"edit\"></i>\n    </button>\n    <ng-container *ngIf=\"editing\">\n      <textarea\n        #textarea\n        nz-input\n        nzAutosize\n        (input)=\"onInput($event)\"\n        (blur)=\"confirm()\"\n        (keydown.esc)=\"onCancel()\"\n        (keydown.enter)=\"onEnter($event)\"\n      >\n      </textarea>\n      <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\n        <i nz-icon nzType=\"enter\"></i>\n      </button>\n    </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextEditComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTextEditComponent.propDecorators = {
        text: [{ type: Input }],
        startEditing: [{ type: Output }],
        endEditing: [{ type: Output }],
        textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
        autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
    };
    return NzTextEditComponent;
}());
if (false) {
    /** @type {?} */
    NzTextEditComponent.prototype.editing;
    /** @type {?} */
    NzTextEditComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.destroy$;
    /** @type {?} */
    NzTextEditComponent.prototype.text;
    /** @type {?} */
    NzTextEditComponent.prototype.startEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.endEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.textarea;
    /** @type {?} */
    NzTextEditComponent.prototype.autosizeDirective;
    /** @type {?} */
    NzTextEditComponent.prototype.beforeText;
    /** @type {?} */
    NzTextEditComponent.prototype.currentText;
    /** @type {?} */
    NzTextEditComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * Generated from: typography.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'typography';
/** @type {?} */
var EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
var NzTypographyComponent = /** @class */ (function () {
    function NzTypographyComponent(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzEllipsisRows = 1;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new EventEmitter();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
        this.document = document;
    }
    Object.defineProperty(NzTypographyComponent.prototype, "hasEllipsisObservers", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzOnEllipsis.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTypographyComponent.prototype, "canCssEllipsis", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onTextCopy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.nzCopy.emit(text);
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onStartEditing = /**
     * @return {?}
     */
    function () {
        this.editing = true;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onEndEditing = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onExpand = /**
     * @return {?}
     */
    function () {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.canUseCSSEllipsis = /**
     * @return {?}
     */
    function () {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.renderOnNextFrame = /**
     * @return {?}
     */
    function () {
        var _this = this;
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        function () {
            _this.syncEllipsis();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.getOriginContentViewRef = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var viewRef = this.viewContainerRef.createEmbeddedView((/** @type {?} */ (this.contentTemplate)), {
            content: (/** @type {?} */ (this.nzContent))
        });
        viewRef.detectChanges();
        return {
            viewRef: viewRef,
            removeView: (/**
             * @return {?}
             */
            function () {
                _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
            })
        };
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.syncEllipsis = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.cssEllipsis) {
            return;
        }
        var _a = this.getOriginContentViewRef(), viewRef = _a.viewRef, removeView = _a.removeView;
        /** @type {?} */
        var fixedNodes = [this.textCopyRef, this.textEditRef].filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e && e.nativeElement; })).map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return (/** @type {?} */ (e)).nativeElement; }));
        /** @type {?} */
        var expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        var _b = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix), contentNodes = _b.contentNodes, text = _b.text, ellipsis = _b.ellipsis;
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        /** @type {?} */
        var ellipsisContainerNativeElement = (/** @type {?} */ (this.ellipsisContainer)).nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    };
    // Need to create the element for calculation size before view init
    // Need to create the element for calculation size before view init
    /**
     * @private
     * @return {?}
     */
    NzTypographyComponent.prototype.getExpandableBtnElement = 
    // Need to create the element for calculation size before view init
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.nzExpandable) {
            /** @type {?} */
            var expandText = this.locale ? this.locale.expand : '';
            /** @type {?} */
            var cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                /** @type {?} */
                var el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTypographyComponent.prototype.renderAndSubscribeWindowResize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.renderOnNextFrame(); }));
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzCopyable = changes.nzCopyable, nzEditable = changes.nzEditable, nzExpandable = changes.nzExpandable, nzEllipsis = changes.nzEllipsis, nzContent = changes.nzContent, nzEllipsisRows = changes.nzEllipsisRows, nzSuffix = changes.nzSuffix;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    };
    NzTypographyComponent.decorators = [
        { type: Component, args: [{
                    selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
                    exportAs: 'nzTypography',
                    template: "\n    <ng-template #contentTemplate let-content=\"content\">\n      <ng-content *ngIf=\"!content\"></ng-content>\n      {{ content }}\n    </ng-template>\n    <ng-container *ngIf=\"!editing\">\n      <ng-container\n        *ngIf=\"\n          expanded || (!nzExpandable && nzEllipsisRows === 1 && !hasEllipsisObservers) || canCssEllipsis || (nzSuffix && expanded);\n          else jsEllipsis\n        \"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\" [ngTemplateOutletContext]=\"{ content: nzContent }\"></ng-template>\n        <ng-container *ngIf=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n      </ng-container>\n      <ng-template #jsEllipsis>\n        <span #ellipsisContainer></span>\n        <ng-container *ngIf=\"isEllipsis\">{{ ellipsisStr }}</ng-container>\n        <ng-container *ngIf=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n        <a #expandable *ngIf=\"nzExpandable && isEllipsis\" class=\"ant-typography-expand\" (click)=\"onExpand()\">{{ locale?.expand }}</a>\n      </ng-template>\n    </ng-container>\n\n    <nz-text-edit *ngIf=\"nzEditable\" [text]=\"nzContent\" (endEditing)=\"onEndEditing($event)\" (startEditing)=\"onStartEditing()\">\n    </nz-text-edit>\n\n    <nz-text-copy *ngIf=\"nzCopyable && !editing\" [text]=\"copyText\" (textCopy)=\"onTextCopy($event)\"></nz-text-copy>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-typography]': '!editing',
                        '[class.ant-typography-edit-content]': 'editing',
                        '[class.ant-typography-secondary]': 'nzType === "secondary"',
                        '[class.ant-typography-warning]': 'nzType === "warning"',
                        '[class.ant-typography-danger]': 'nzType === "danger"',
                        '[class.ant-typography-disabled]': 'nzDisabled',
                        '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                        '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                        '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                        '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTypographyComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: Platform },
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzResizeService }
    ]; };
    NzTypographyComponent.propDecorators = {
        nzCopyable: [{ type: Input }],
        nzEditable: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzExpandable: [{ type: Input }],
        nzEllipsis: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzEllipsisRows: [{ type: Input }],
        nzType: [{ type: Input }],
        nzCopyText: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzContentChange: [{ type: Output }],
        nzCopy: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnEllipsis: [{ type: Output }],
        textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
        textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
        ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
        expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
        contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTypographyComponent.prototype, "nzCopyable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTypographyComponent.prototype, "nzEditable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTypographyComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTypographyComponent.prototype, "nzExpandable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTypographyComponent.prototype, "nzEllipsis", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
    return NzTypographyComponent;
}());
if (false) {
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzCopyable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEditable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzExpandable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEditable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContent;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzType;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyText;
    /** @type {?} */
    NzTypographyComponent.prototype.nzSuffix;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContentChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopy;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzOnEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.textEditRef;
    /** @type {?} */
    NzTypographyComponent.prototype.textCopyRef;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisContainer;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtn;
    /** @type {?} */
    NzTypographyComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTypographyComponent.prototype.locale;
    /** @type {?} */
    NzTypographyComponent.prototype.document;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtnElementCache;
    /** @type {?} */
    NzTypographyComponent.prototype.editing;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisText;
    /** @type {?} */
    NzTypographyComponent.prototype.cssEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.isEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.expanded;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisStr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.rfaId;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.windowResizeSubscription;
    /** @type {?} */
    NzTypographyComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.resizeService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: typography.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    NzTypographyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, ClipboardModule],
                    exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                    declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
                },] }
    ];
    return NzTypographyModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-typography.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule };
//# sourceMappingURL=ng-zorro-antd-typography.js.map
