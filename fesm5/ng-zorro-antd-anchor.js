import { Platform, PlatformModule } from '@angular/cdk/platform';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, ChangeDetectorRef, NgZone, Renderer2, ViewChild, Input, Output, TemplateRef, ElementRef, ContentChild, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { Subject, fromEvent } from 'rxjs';
import { throttleTime, takeUntil } from 'rxjs/operators';
import { NzAffixModule } from 'ng-zorro-antd/affix';

/**
 * @fileoverview added by tsickle
 * Generated from: util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} element
 * @param {?} container
 * @return {?}
 */
function getOffsetTop(element, container) {
    if (!element || !element.getClientRects().length) {
        return 0;
    }
    /** @type {?} */
    var rect = element.getBoundingClientRect();
    if (rect.width || rect.height) {
        if (container === window) {
            /** @type {?} */
            var documentElement = (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement));
            return rect.top - documentElement.clientTop;
        }
        return rect.top - ((/** @type {?} */ (container))).getBoundingClientRect().top;
    }
    return rect.top;
}

/**
 * @fileoverview added by tsickle
 * Generated from: anchor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.cdr = cdr;
        this.platform = platform;
        this.zone = zone;
        this.renderer = renderer;
        this.nzAffix = true;
        this.nzShowInkInFixed = false;
        this.nzBounds = 5;
        this.nzOffsetTop = undefined;
        this.nzTarget = '';
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.destroy$ = new Subject();
        this.handleScrollTimeoutID = -1;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.getContainer = /**
     * @private
     * @return {?}
     */
    function () {
        return this.container || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.handleScrollTimeoutID);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.destroy$.next();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.getContainer(), 'scroll')
                .pipe(throttleTime(50), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
        }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        this.handleScrollTimeoutID = setTimeout((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof document === 'undefined' || this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                var top_1 = getOffsetTop(target, _this.getContainer());
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
            this.handleActive(maxSection.comp);
        }
        this.setVisible();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i.unsetActive();
        }));
    };
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.setActive();
        /** @type {?} */
        var linkNode = comp.getLinkTitleElement();
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.setVisible();
        this.nzScroll.emit(comp);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.setVisible = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var visible = this.visible;
        /** @type {?} */
        var visibleClassname = 'visible';
        if (this.ink) {
            if (visible) {
                this.renderer.addClass(this.ink.nativeElement, visibleClassname);
            }
            else {
                this.renderer.removeClass(this.ink.nativeElement, visibleClassname);
            }
        }
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
        /** @type {?} */
        var elOffsetTop = getOffsetTop(el, this.getContainer());
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget, nzContainer = changes.nzContainer;
        if (nzOffsetTop) {
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this.nzOffsetTop + "px)"
            };
        }
        if (nzContainer || nzTarget) {
            /** @type {?} */
            var container = this.nzContainer || this.nzTarget;
            this.container = typeof container === 'string' ? this.doc.querySelector(container) : container;
            this.registerScrollEvent();
            if (nzTarget) {
                warnDeprecation("'nzTarget' of 'nz-anchor' is deprecated and will be removed in 10.0.0.Please use 'nzContainer' instead.");
            }
        }
    };
    NzAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-anchor',
                    exportAs: 'nzAnchor',
                    preserveWhitespaces: false,
                    template: "\n    <nz-affix *ngIf=\"nzAffix; else content\" [nzOffsetTop]=\"nzOffsetTop\" [nzTarget]=\"container\">\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n    </nz-affix>\n    <ng-template #content>\n      <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n        <div class=\"ant-anchor\" [ngClass]=\"{ fixed: !nzAffix && !nzShowInkInFixed }\">\n          <div class=\"ant-anchor-ink\">\n            <div class=\"ant-anchor-ink-ball\" #ink></div>\n          </div>\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </ng-template>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    NzAnchorComponent.propDecorators = {
        ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
        nzAffix: [{ type: Input }],
        nzShowInkInFixed: [{ type: Input }],
        nzBounds: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzContainer: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzScroll: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAnchorComponent.prototype, "nzAffix", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputNumber(),
        __metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzBounds", void 0);
    __decorate([
        InputNumber(undefined),
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
    return NzAnchorComponent;
}());
if (false) {
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzAffix;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzBounds;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzOffsetTop;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /** @type {?} */
    NzAnchorComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzContainer;
    /** @type {?} */
    NzAnchorComponent.prototype.nzTarget;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    NzAnchorComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.handleScrollTimeoutID;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: anchor-link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAnchorLinkComponent = /** @class */ (function () {
    function NzAnchorLinkComponent(elementRef, anchorComp, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.platform = platform;
        this.renderer = renderer;
        this.nzHref = '#';
        this.titleStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleStr = null;
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.anchorComp.registerLink(this);
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.getLinkTitleElement = /**
     * @return {?}
     */
    function () {
        return this.linkTitle.nativeElement;
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.setActive = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.unsetActive = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.goToClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.anchorComp.unregisterLink(this);
    };
    NzAnchorLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-link',
                    exportAs: 'nzLink',
                    preserveWhitespaces: false,
                    template: "\n    <a #linkTitle (click)=\"goToClick($event)\" href=\"{{ nzHref }}\" class=\"ant-anchor-link-title\" title=\"{{ titleStr }}\">\n      <span *ngIf=\"titleStr; else titleTpl || nzTemplate\">{{ titleStr }}</span>\n    </a>\n    <ng-content></ng-content>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzAnchorComponent },
        { type: Platform },
        { type: Renderer2 }
    ]; };
    NzAnchorLinkComponent.propDecorators = {
        nzHref: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: false },] }],
        linkTitle: [{ type: ViewChild, args: ['linkTitle',] }]
    };
    return NzAnchorLinkComponent;
}());
if (false) {
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzHref;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzTemplate;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.linkTitle;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.anchorComp;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: anchor.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAnchorModule = /** @class */ (function () {
    function NzAnchorModule() {
    }
    NzAnchorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                    exports: [NzAnchorComponent, NzAnchorLinkComponent],
                    imports: [CommonModule, NzAffixModule, PlatformModule]
                },] }
    ];
    return NzAnchorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-anchor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAnchorComponent, NzAnchorLinkComponent, NzAnchorModule };
//# sourceMappingURL=ng-zorro-antd-anchor.js.map
