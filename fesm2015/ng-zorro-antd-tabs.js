import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Directive, ElementRef, Renderer2, Optional, Self, EventEmitter, ViewChild, ContentChild, TemplateRef, Output, NgZone, ChangeDetectorRef, ContentChildren, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean, pxToNumber, toNumber, wrapIntoObservable } from 'ng-zorro-antd/core/util';
import { Subject, of, merge, Subscription } from 'rxjs';
import { RouterLink, RouterLinkWithHref, NavigationEnd, Router } from '@angular/router';
import { ObserversModule } from '@angular/cdk/observers';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Directionality } from '@angular/cdk/bidi';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { takeUntil, startWith, first, filter } from 'rxjs/operators';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';

/**
 * @fileoverview added by tsickle
 * Generated from: tab-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.forceRender = false;
    }
}
NzTabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }] }
];
NzTabBodyComponent.propDecorators = {
    content: [{ type: Input }],
    active: [{ type: Input }],
    forceRender: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTabBodyComponent.prototype.content;
    /** @type {?} */
    NzTabBodyComponent.prototype.active;
    /** @type {?} */
    NzTabBodyComponent.prototype.forceRender;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-label.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabLabelDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    /**
     * @return {?}
     */
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    /**
     * @return {?}
     */
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    getOffsetTop() {
        return this.elementRef.nativeElement.offsetTop;
    }
    /**
     * @return {?}
     */
    getOffsetHeight() {
        return this.elementRef.nativeElement.offsetHeight;
    }
}
NzTabLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tab-label]',
                exportAs: 'nzTabLabel',
                host: {
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            },] }
];
/** @nocollapse */
NzTabLabelDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTabLabelDirective.propDecorators = {
    disabled: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabLabelDirective.prototype, "disabled", void 0);
if (false) {
    /** @type {?} */
    NzTabLabelDirective.ngAcceptInputType_disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component is for catching `routerLink` directive.
 */
class NzTabLinkDirective {
    /**
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     */
    constructor(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            },] }
];
/** @nocollapse */
NzTabLinkDirective.ctorParameters = () => [
    { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
];
if (false) {
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLink;
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLinkWithHref;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tab.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Decorates the `ng-template` tags and reads out the template from it.
 */
class NzTabDirective {
}
NzTabDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.position = null;
        this.origin = null;
        this.isActive = false;
        this.stateChanges = new Subject();
        this.nzForceRender = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
}
NzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #titleTpl>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #bodyTpl>
      <ng-content></ng-content>
    </ng-template>
  `
            }] }
];
/** @nocollapse */
NzTabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTabComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['bodyTpl', { static: true },] }],
    title: [{ type: ViewChild, args: ['titleTpl', { static: true },] }],
    template: [{ type: ContentChild, args: [NzTabDirective, { static: false, read: TemplateRef },] }],
    linkDirective: [{ type: ContentChild, args: [NzTabLinkDirective, { static: false },] }],
    nzTitle: [{ type: Input }],
    nzRouterIdentifier: [{ type: Input }],
    nzForceRender: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzDeselect: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabComponent.prototype, "nzForceRender", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabComponent.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzTabComponent.ngAcceptInputType_nzForceRender;
    /** @type {?} */
    NzTabComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTabComponent.prototype.position;
    /** @type {?} */
    NzTabComponent.prototype.origin;
    /** @type {?} */
    NzTabComponent.prototype.isActive;
    /** @type {?} */
    NzTabComponent.prototype.stateChanges;
    /** @type {?} */
    NzTabComponent.prototype.content;
    /** @type {?} */
    NzTabComponent.prototype.title;
    /** @type {?} */
    NzTabComponent.prototype.template;
    /** @type {?} */
    NzTabComponent.prototype.linkDirective;
    /** @type {?} */
    NzTabComponent.prototype.nzTitle;
    /** @type {?} */
    NzTabComponent.prototype.nzRouterIdentifier;
    /** @type {?} */
    NzTabComponent.prototype.nzForceRender;
    /** @type {?} */
    NzTabComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTabComponent.prototype.nzClick;
    /** @type {?} */
    NzTabComponent.prototype.nzSelect;
    /** @type {?} */
    NzTabComponent.prototype.nzDeselect;
    /** @type {?} */
    NzTabComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs-ink-bar.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabsInkBarDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    alignToElement(element) {
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => this.setStyles(element)));
            }));
        }
        else {
            this.setStyles(element);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setStyles(element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
NzTabsInkBarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tabs-ink-bar]',
                exportAs: 'nzTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            },] }
];
/** @nocollapse */
NzTabsInkBarDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
NzTabsInkBarDirective.propDecorators = {
    nzAnimated: [{ type: Input }],
    nzPositionMode: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
if (false) {
    /** @type {?} */
    NzTabsInkBarDirective.ngAcceptInputType_nzAnimated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzAnimated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAGGERATED_OVERSCROLL = 64;
class NzTabsNavComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} platform
     * @param {?} resizeService
     * @param {?} dir
     */
    constructor(elementRef, ngZone, renderer, cdr, platform, resizeService, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.destroy$ = new Subject();
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzAnimated = true;
        this.nzHideBar = false;
        this.nzShowPagination = true;
        this.nzType = 'line';
        this.nzTabPosition = 'top';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPositionMode(value) {
        this._tabPositionMode = value;
        this.alignInkBarToSelectedTab();
        if (this.nzShowPagination) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.updatePagination();
            }));
        }
    }
    /**
     * @return {?}
     */
    get nzPositionMode() {
        return this._tabPositionMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    onContentChanges() {
        /** @type {?} */
        const textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    scrollHeader(scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.nzShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
        if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.realignInkBar = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dirChange = this.dir ? this.dir.change : of(null);
            /** @type {?} */
            const resize = typeof window !== 'undefined' ? this.resizeService.subscribe().pipe(takeUntil(this.destroy$)) : of(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    updateTabScrollPosition() {
        /** @type {?} */
        const scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
        }
    }
    /**
     * @return {?}
     */
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    /**
     * @return {?}
     */
    checkPaginationEnabled() {
        /** @type {?} */
        const isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    }
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    scrollToLabel(labelIndex) {
        /** @type {?} */
        const selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            /** @type {?} */
            let labelBeforePos;
            /** @type {?} */
            let labelAfterPos;
            if (this.nzPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            const beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    }
    /**
     * @return {?}
     */
    checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.cdr.markForCheck();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    getMaxScrollDistance() {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    }
    /**
     * Sets the distance in pixels that the tab header should be transformed in the X-axis.
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
    }
    /**
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @return {?}
     */
    get viewWidthHeightPix() {
        /** @type {?} */
        let PAGINATION_PIX = 0;
        if (this.showPaginationControls) {
            PAGINATION_PIX = this.navContainerScrollPaddingPix;
        }
        if (this.nzPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
        }
        else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
        }
    }
    /**
     * @return {?}
     */
    get navContainerScrollPaddingPix() {
        if (this.platform.isBrowser) {
            /** @type {?} */
            const navContainer = this.navContainerElement.nativeElement;
            /** @type {?} */
            const originStyle = window.getComputedStyle
                ? window.getComputedStyle(navContainer)
                : ((/** @type {?} */ (navContainer))).currentStyle;
            if (this.nzPositionMode === 'horizontal') {
                return pxToNumber(originStyle.paddingLeft) + pxToNumber(originStyle.paddingRight);
            }
            else {
                return pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
            }
        }
        else {
            return 0;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollWidthHeightPix() {
        if (this.nzPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
        }
        else {
            return this.navListElement.nativeElement.scrollHeight;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollOffSetWidthHeight() {
        if (this.nzPositionMode === 'horizontal') {
            return this.scrollListElement.nativeElement.offsetWidth;
        }
        else {
            return this.elementRef.nativeElement.offsetHeight;
        }
    }
    /**
     * @return {?}
     */
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * @return {?}
     */
    alignInkBarToSelectedTab() {
        if (this.nzType === 'line') {
            /** @type {?} */
            const selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    }
}
NzTabsNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabs-nav',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div style="float:right;" *ngIf="nzTabBarExtraContent" class="ant-tabs-extra-content">
      <ng-template [ngTemplateOutlet]="nzTabBarExtraContent"></ng-template>
    </div>
    <div class="ant-tabs-nav-container" [class.ant-tabs-nav-container-scrolling]="showPaginationControls" #navContainerElement>
      <span
        class="ant-tabs-tab-prev"
        (click)="scrollHeader('before')"
        [class.ant-tabs-tab-btn-disabled]="disableScrollBefore"
        [class.ant-tabs-tab-arrow-show]="showPaginationControls"
      >
        <span class="ant-tabs-tab-prev-icon">
          <i nz-icon [nzType]="nzPositionMode === 'horizontal' ? 'left' : 'up'" class="ant-tabs-tab-prev-icon-target"></i>
        </span>
      </span>
      <span
        class="ant-tabs-tab-next"
        (click)="scrollHeader('after')"
        [class.ant-tabs-tab-btn-disabled]="disableScrollAfter"
        [class.ant-tabs-tab-arrow-show]="showPaginationControls"
      >
        <span class="ant-tabs-tab-next-icon">
          <i nz-icon [nzType]="nzPositionMode === 'horizontal' ? 'right' : 'down'" class="ant-tabs-tab-next-icon-target"></i>
        </span>
      </span>
      <div class="ant-tabs-nav-wrap">
        <div class="ant-tabs-nav-scroll" #scrollListElement>
          <div class="ant-tabs-nav" [class.ant-tabs-nav-animated]="nzAnimated" #navListElement (cdkObserveContent)="onContentChanges()">
            <div>
              <ng-content></ng-content>
            </div>
            <div
              nz-tabs-ink-bar
              [hidden]="nzHideBar"
              [nzAnimated]="nzAnimated"
              [nzPositionMode]="nzPositionMode"
              style="display: block;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
                host: {
                    '[class.ant-tabs-bar]': 'true',
                    '[class.ant-tabs-card-bar]': `nzType === 'card'`,
                    '[class.ant-tabs-top-bar]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom-bar]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left-bar]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right-bar]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-small-bar]': `nzSize === 'small'`,
                    '[class.ant-tabs-default-bar]': `nzSize === 'default'`,
                    '[class.ant-tabs-large-bar]': `nzSize === 'large'`
                }
            }] }
];
/** @nocollapse */
NzTabsNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: NzResizeService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTabsNavComponent.propDecorators = {
    listOfNzTabLabelDirective: [{ type: ContentChildren, args: [NzTabLabelDirective,] }],
    nzTabsInkBarDirective: [{ type: ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
    navContainerElement: [{ type: ViewChild, args: ['navContainerElement', { static: true },] }],
    navListElement: [{ type: ViewChild, args: ['navListElement', { static: true },] }],
    scrollListElement: [{ type: ViewChild, args: ['scrollListElement', { static: true },] }],
    nzOnNextClick: [{ type: Output }],
    nzOnPrevClick: [{ type: Output }],
    nzTabBarExtraContent: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzHideBar: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzType: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzPositionMode: [{ type: Input }],
    selectedIndex: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabsNavComponent.prototype, "nzAnimated", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabsNavComponent.prototype, "nzHideBar", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
if (false) {
    /** @type {?} */
    NzTabsNavComponent.ngAcceptInputType_nzAnimated;
    /** @type {?} */
    NzTabsNavComponent.ngAcceptInputType_nzHideBar;
    /** @type {?} */
    NzTabsNavComponent.ngAcceptInputType_nzShowPagination;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._tabPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype._selectedIndex;
    /**
     * Cached text content of the header.
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.currentTextContent;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.destroy$;
    /** @type {?} */
    NzTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    NzTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.listOfNzTabLabelDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabsInkBarDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzHideBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzType;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzSize;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabsNavComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.resizeService;
    /**
     * @type {?}
     * @private
     */
    NzTabsNavComponent.prototype.dir;
}

/**
 * @fileoverview added by tsickle
 * Generated from: table.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzAnimatedInterface() { }
if (false) {
    /** @type {?} */
    NzAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    NzAnimatedInterface.prototype.tabPane;
}
class NzTabChangeEvent {
}
if (false) {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tabset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tabs';
class NzTabSetComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} router
     */
    constructor(nzConfigService, renderer, elementRef, cdr, router) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.router = router;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.destroy$ = new Subject();
        this.tabPositionMode = 'horizontal';
        this.nzShowPagination = true;
        this.nzAnimated = true;
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzSize = 'default';
        this.nzTabBarGutter = undefined;
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzCanDeactivate = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedIndex(value) {
        this.indexToSelect = value ? toNumber(value, null) : null;
    }
    /**
     * @return {?}
     */
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get inkBarAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
    }
    /**
     * @return {?}
     */
    get tabPaneAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
    }
    /**
     * @return {?}
     */
    get isAnimationDisabled() {
        return this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPosition(value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            if (this.nzSelectedIndex !== null && this.nzSelectedIndex !== index && typeof this.nzCanDeactivate === 'function') {
                /** @type {?} */
                const observable = wrapIntoObservable(this.nzCanDeactivate(this.nzSelectedIndex, index));
                observable.pipe(first(), takeUntil(this.destroy$)).subscribe((/**
                 * @param {?} canChange
                 * @return {?}
                 */
                canChange => canChange && this.emitClickEvent(index)));
            }
            else {
                this.emitClickEvent(index);
            }
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    emitClickEvent(index) {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        this.nzSelectedIndex = index;
        tabs[index].nzClick.emit();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            (item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
            event.tab.nzSelect.emit();
        }
        return event;
    }
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.stateChanges))).subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTabPosition, nzType } = changes;
        if (nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.nzTabPosition);
        }
        if (nzType) {
            if (this.nzType === 'card') {
                this.nzAnimated = false;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                /** @type {?} */
                const isFirstRun = this._selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    (tab, index) => (tab.isActive = index === indexToSelect)));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            (tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), startWith(true))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            }));
        }
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                /** @type {?} */
                const tabs = this.listOfNzTabComponent.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this.indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
        if (this.router.navigated) {
            /** @type {?} */
            const index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    /**
     * @private
     * @return {?}
     */
    findShouldActiveTabIndex() {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /** @type {?} */
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?=} link
         * @return {?}
         */
        (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false));
    }
}
NzTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="listOfNzTabComponent">
      <nz-tabs-nav
        role="tablist"
        tabindex="0"
        [nzSize]="nzSize"
        [nzTabPosition]="nzTabPosition"
        [nzType]="nzType"
        [nzShowPagination]="nzShowPagination"
        [nzPositionMode]="tabPositionMode"
        [nzAnimated]="inkBarAnimated"
        [ngStyle]="nzTabBarStyle"
        [nzHideBar]="nzHideAll"
        [nzTabBarExtraContent]="nzTabBarExtraContent"
        [selectedIndex]="nzSelectedIndex!"
        (nzOnNextClick)="nzOnNextClick.emit()"
        (nzOnPrevClick)="nzOnPrevClick.emit()"
      >
        <div
          nz-tab-label
          role="tab"
          [style.margin-right.px]="nzTabBarGutter"
          [class.ant-tabs-tab-active]="nzSelectedIndex == i && !nzHideAll"
          [disabled]="tab.nzDisabled"
          (click)="clickLabel(i, tab.nzDisabled)"
          *ngFor="let tab of listOfNzTabComponent; let i = index"
        >
          <ng-container *nzStringTemplateOutlet="tab.nzTitle || tab.title">{{ tab.nzTitle }}</ng-container>
        </div>
      </nz-tabs-nav>
      <div
        #tabContent
        class="ant-tabs-content"
        [class.ant-tabs-top-content]="nzTabPosition === 'top'"
        [class.ant-tabs-bottom-content]="nzTabPosition === 'bottom'"
        [class.ant-tabs-left-content]="nzTabPosition === 'left'"
        [class.ant-tabs-right-content]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [class.ant-tabs-card-content]="nzType === 'card'"
        [class.ant-tabs-content-no-animated]="!tabPaneAnimated"
        [style.margin-left.%]="tabPositionMode === 'horizontal' && tabPaneAnimated && -(nzSelectedIndex || 0) * 100"
      >
        <div
          nz-tab-body
          class="ant-tabs-tabpane"
          *ngFor="let tab of listOfNzTabComponent; let i = index"
          [active]="nzSelectedIndex == i && !nzHideAll"
          [forceRender]="tab.nzForceRender"
          [content]="tab.template || tab.content"
        ></div>
      </div>
    </ng-container>
  `,
                host: {
                    '[class.ant-tabs]': `true`,
                    '[class.ant-tabs-no-animation]': `isAnimationDisabled`,
                    '[class.ant-tabs-line]': `nzType === 'line'`,
                    '[class.ant-tabs-card]': `nzType === 'card'`,
                    '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-vertical]': `nzTabPosition === 'left' || nzTabPosition === 'right'`,
                    '[class.ant-tabs-large]': `nzSize === 'large'`,
                    '[class.ant-tabs-small]': `nzSize === 'small'`
                }
            }] }
];
/** @nocollapse */
NzTabSetComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Router, decorators: [{ type: Optional }] }
];
NzTabSetComponent.propDecorators = {
    listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
    nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
    tabContent: [{ type: ViewChild, args: ['tabContent', { static: false },] }],
    nzTabBarExtraContent: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzHideAll: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTabBarGutter: [{ type: Input }],
    nzTabBarStyle: [{ type: Input }],
    nzType: [{ type: Input }],
    nzLinkRouter: [{ type: Input }],
    nzLinkExact: [{ type: Input }],
    nzCanDeactivate: [{ type: Input }],
    nzOnNextClick: [{ type: Output }],
    nzOnPrevClick: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzSelectedIndexChange: [{ type: Output }],
    nzSelectedIndex: [{ type: Input }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzShowPagination", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);
if (false) {
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabLabelSubscription;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.destroy$;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSize;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzType;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.prototype.nzCanDeactivate;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectedIndexChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabsModule {
}
NzTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                exports: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                imports: [CommonModule, ObserversModule, NzIconModule, NzOutletModule, PlatformModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tabs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTabBodyComponent, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLabelDirective, NzTabLinkDirective, NzTabSetComponent, NzTabsInkBarDirective, NzTabsModule, NzTabsNavComponent };
//# sourceMappingURL=ng-zorro-antd-tabs.js.map
