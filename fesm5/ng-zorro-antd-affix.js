import { __spread, __assign, __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Inject, NgZone, Renderer2, ViewChild, Input, Output, NgModule } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { shallowEqual, getStyleAsText, InputNumber } from 'ng-zorro-antd/core/util';
import { Subscription, ReplaySubject, Subject, merge, fromEvent } from 'rxjs';
import { takeUntil, map, auditTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: respond-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @enum {string} */
var AffixRespondEvents = {
    resize: "resize",
    scroll: "scroll",
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    pageshow: "pageshow",
    load: "LOAD",
};

/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function SimpleRect() { }
if (false) {
    /** @type {?} */
    SimpleRect.prototype.top;
    /** @type {?} */
    SimpleRect.prototype.left;
    /** @type {?|undefined} */
    SimpleRect.prototype.width;
    /** @type {?|undefined} */
    SimpleRect.prototype.height;
    /** @type {?|undefined} */
    SimpleRect.prototype.bottom;
}
/**
 * @param {?} target
 * @return {?}
 */
function isTargetWindow(target) {
    return typeof window !== 'undefined' && target === window;
}
/**
 * @param {?} target
 * @return {?}
 */
function getTargetRect(target) {
    return !isTargetWindow(target)
        ? target.getBoundingClientRect()
        : {
            top: 0,
            left: 0,
            bottom: 0
        };
}

/**
 * @fileoverview added by tsickle
 * Generated from: affix.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
var NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.renderer = renderer;
        this.nzChange = new EventEmitter();
        this.positionChangeSubscription = Subscription.EMPTY;
        this.offsetChanged$ = new ReplaySubject(1);
        this.destroy$ = new Subject();
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    Object.defineProperty(NzAffixComponent.prototype, "target", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.nzTarget;
            return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetBottom = changes.nzOffsetBottom, nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget;
        if (nzOffsetBottom || nzOffsetTop) {
            this.offsetChanged$.next();
        }
        if (nzTarget) {
            this.registerListeners();
        }
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerListeners();
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListeners();
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.registerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListeners();
        this.positionChangeSubscription = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, __spread(Object.keys(AffixRespondEvents).map((/**
             * @param {?} evName
             * @return {?}
             */
            function (evName) { return fromEvent(_this.target, evName); })), [_this.offsetChanged$.pipe(takeUntil(_this.destroy$), map((/**
                 * @return {?}
                 */
                function () { return ({}); })))])).pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.updatePosition((/** @type {?} */ (e))); }));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.updatePosition((/** @type {?} */ ({}))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.removeListeners = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.positionChangeSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.document.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = this.fixedEl.nativeElement;
        this.renderer.setStyle(wrapEl, 'cssText', getStyleAsText(affixStyle));
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.renderer.setStyle(this.placeholderNode, 'cssText', getStyleAsText(placeholderStyle));
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.syncPlaceholderStyle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.renderer.setStyle(this.placeholderNode, 'cssText', '');
        this.placeholderStyle = undefined;
        /** @type {?} */
        var styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, __assign(__assign({}, this.affixStyle), styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var targetNode = this.target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        var fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        /** @type {?} */
        var targetRect = getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        var targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight && offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffset = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffset + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === AffixRespondEvents.resize &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, __assign(__assign({}, this.affixStyle), { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    exportAs: 'nzAffix',
                    template: "\n    <div #fixedEl>\n      <ng-content></ng-content>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: NgZone },
        { type: Platform },
        { type: Renderer2 }
    ]; };
    NzAffixComponent.propDecorators = {
        fixedEl: [{ type: ViewChild, args: ['fixedEl', { static: true },] }],
        nzTarget: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzOffsetBottom: [{ type: Input }],
        nzChange: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputNumber(undefined),
        __metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetTop", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputNumber(undefined),
        __metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
    return NzAffixComponent;
}());
if (false) {
    /** @type {?} */
    NzAffixComponent.ngAcceptInputType_nzOffsetTop;
    /** @type {?} */
    NzAffixComponent.ngAcceptInputType_nzOffsetBottom;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.fixedEl;
    /** @type {?} */
    NzAffixComponent.prototype.nzTarget;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderNode;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.affixStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.positionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.offsetChanged$;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.document;
    /** @type {?} */
    NzAffixComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: affix.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAffixModule = /** @class */ (function () {
    function NzAffixModule() {
    }
    NzAffixModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzAffixComponent],
                    exports: [NzAffixComponent],
                    imports: [CommonModule, PlatformModule]
                },] }
    ];
    return NzAffixModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-affix.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAffixComponent, NzAffixModule };
//# sourceMappingURL=ng-zorro-antd-affix.js.map
