/**
 * @fileoverview added by tsickle
 * Generated from: tabs-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** code from https://github.com/angular/material2 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { InputBoolean, pxToNumber } from 'ng-zorro-antd/core/util';
import { merge, of as observableOf, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzTabLabelDirective } from './tab-label.directive';
import { NzTabsInkBarDirective } from './tabs-ink-bar.directive';
/** @type {?} */
const EXAGGERATED_OVERSCROLL = 64;
export class NzTabsNavComponent {
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
            const dirChange = this.dir ? this.dir.change : observableOf(null);
            /** @type {?} */
            const resize = typeof window !== 'undefined' ? this.resizeService.subscribe().pipe(takeUntil(this.destroy$)) : observableOf(null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsidGFicy1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFM0Qsc0JBQXNCLEdBQUcsRUFBRTtBQWdFakMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7OztJQTBEN0IsWUFDUyxVQUFzQixFQUNyQixNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsUUFBa0IsRUFDbEIsYUFBOEIsRUFDbEIsR0FBbUI7UUFOaEMsZUFBVSxHQUFW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QzNDLHVDQUEyQzs7SUFDM0MsOENBQWlEOztJQUNqRCxvQ0FBeUI7O0lBQ3pCLG9DQUFnQzs7SUFDaEMsMkNBQThDOztJQTRCNUMsd0NBQTZCOzs7OztJQUM3QixvQ0FBc0I7Ozs7O0lBQ3RCLHNDQUEyQjs7Ozs7SUFDM0IsaUNBQThCOzs7OztJQUM5QixzQ0FBMEI7Ozs7O0lBQzFCLDJDQUFzQzs7Ozs7SUFDdEMsaUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpSZXNpemVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgcHhUb051bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56VGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbiwgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL3RhYmxlLnR5cGVzJztcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IEVYQUdHRVJBVEVEX09WRVJTQ1JPTEwgPSA2NDtcbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFicy1uYXYnLFxuICBleHBvcnRBczogJ256VGFic05hdicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHQ7XCIgKm5nSWY9XCJuelRhYkJhckV4dHJhQ29udGVudFwiIGNsYXNzPVwiYW50LXRhYnMtZXh0cmEtY29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VGFiQmFyRXh0cmFDb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2LWNvbnRhaW5lclwiIFtjbGFzcy5hbnQtdGFicy1uYXYtY29udGFpbmVyLXNjcm9sbGluZ109XCJzaG93UGFnaW5hdGlvbkNvbnRyb2xzXCIgI25hdkNvbnRhaW5lckVsZW1lbnQ+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYi1wcmV2XCJcbiAgICAgICAgKGNsaWNrKT1cInNjcm9sbEhlYWRlcignYmVmb3JlJylcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWJ0bi1kaXNhYmxlZF09XCJkaXNhYmxlU2Nyb2xsQmVmb3JlXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLXRhYi1hcnJvdy1zaG93XT1cInNob3dQYWdpbmF0aW9uQ29udHJvbHNcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC10YWJzLXRhYi1wcmV2LWljb25cIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJyA/ICdsZWZ0JyA6ICd1cCdcIiBjbGFzcz1cImFudC10YWJzLXRhYi1wcmV2LWljb24tdGFyZ2V0XCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYi1uZXh0XCJcbiAgICAgICAgKGNsaWNrKT1cInNjcm9sbEhlYWRlcignYWZ0ZXInKVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYnRuLWRpc2FibGVkXT1cImRpc2FibGVTY3JvbGxBZnRlclwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYXJyb3ctc2hvd109XCJzaG93UGFnaW5hdGlvbkNvbnRyb2xzXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdGFicy10YWItbmV4dC1pY29uXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcgPyAncmlnaHQnIDogJ2Rvd24nXCIgY2xhc3M9XCJhbnQtdGFicy10YWItbmV4dC1pY29uLXRhcmdldFwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJzLW5hdi13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFicy1uYXYtc2Nyb2xsXCIgI3Njcm9sbExpc3RFbGVtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFicy1uYXZcIiBbY2xhc3MuYW50LXRhYnMtbmF2LWFuaW1hdGVkXT1cIm56QW5pbWF0ZWRcIiAjbmF2TGlzdEVsZW1lbnQgKGNka09ic2VydmVDb250ZW50KT1cIm9uQ29udGVudENoYW5nZXMoKVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIG56LXRhYnMtaW5rLWJhclxuICAgICAgICAgICAgICBbaGlkZGVuXT1cIm56SGlkZUJhclwiXG4gICAgICAgICAgICAgIFtuekFuaW1hdGVkXT1cIm56QW5pbWF0ZWRcIlxuICAgICAgICAgICAgICBbbnpQb3NpdGlvbk1vZGVdPVwibnpQb3NpdGlvbk1vZGVcIlxuICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLWJhcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jYXJkLWJhcl0nOiBgbnpUeXBlID09PSAnY2FyZCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdG9wLWJhcl0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtYm90dG9tLWJhcl0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtbGVmdC1iYXJdJzogYG56VGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1yaWdodC1iYXJdJzogYG56VGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtc21hbGwtYmFyXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtZGVmYXVsdC1iYXJdJzogYG56U2l6ZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlLWJhcl0nOiBgbnpTaXplID09PSAnbGFyZ2UnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFic05hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekFuaW1hdGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVCYXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1BhZ2luYXRpb246IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIF90YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZSA9IDA7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xuICAvKiogQ2FjaGVkIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLiAqL1xuICBwcml2YXRlIGN1cnJlbnRUZXh0Q29udGVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHNob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBmYWxzZTtcbiAgZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcbiAgZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG4gIHJlYWxpZ25JbmtCYXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICB0YWJMYWJlbENvdW50PzogbnVtYmVyO1xuICBzY3JvbGxEaXN0YW5jZUNoYW5nZWQ/OiBib29sZWFuO1xuICBAQ29udGVudENoaWxkcmVuKE56VGFiTGFiZWxEaXJlY3RpdmUpIGxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUhOiBRdWVyeUxpc3Q8TnpUYWJMYWJlbERpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoTnpUYWJzSW5rQmFyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRhYnNJbmtCYXJEaXJlY3RpdmUhOiBOelRhYnNJbmtCYXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ25hdkNvbnRhaW5lckVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZDb250YWluZXJFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ25hdkxpc3RFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbmF2TGlzdEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzY3JvbGxMaXN0RWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZUJhciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56VHlwZSA9ICdsaW5lJztcbiAgQElucHV0KCkgbnpTaXplPzogTnpTaXplTERTVHlwZTtcbiAgQElucHV0KCkgbnpUYWJQb3NpdGlvbjogTnpUYWJQb3NpdGlvbiA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBvc2l0aW9uTW9kZSh2YWx1ZTogTnpUYWJQb3NpdGlvbk1vZGUpIHtcbiAgICB0aGlzLl90YWJQb3NpdGlvbk1vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBvc2l0aW9uTW9kZSgpOiBOelRhYlBvc2l0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYlBvc2l0aW9uTW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gdGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdmFsdWU7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJlc2l6ZVNlcnZpY2U6IE56UmVzaXplU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIG9uQ29udGVudENoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAvLyBXZSBuZWVkIHRvIGRpZmYgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLCBiZWNhdXNlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGNhbGxiYWNrXG4gICAgLy8gd2lsbCBmaXJlIGV2ZW4gaWYgdGhlIHRleHQgY29udGVudCBkaWRuJ3QgY2hhbmdlIHdoaWNoIGlzIGluZWZmaWNpZW50IGFuZCBpcyBwcm9uZVxuICAgIC8vIHRvIGluZmluaXRlIGxvb3BzIGlmIGEgcG9vcmx5IGNvbnN0cnVjdGVkIGV4cHJlc3Npb24gaXMgcGFzc2VkIGluIChzZWUgIzE0MjQ5KS5cbiAgICBpZiAodGV4dENvbnRlbnQgIT09IHRoaXMuY3VycmVudFRleHRDb250ZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgaWYgKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEJlZm9yZSkge1xuICAgICAgdGhpcy5uek9uUHJldkNsaWNrLmVtaXQoKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ2FmdGVyJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIpIHtcbiAgICAgIHRoaXMubnpPbk5leHRDbGljay5lbWl0KCk7XG4gICAgfVxuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtdGhpcmQgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3QncyB2aWV3cG9ydC5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9ICgoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCkgLyAzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYkxhYmVsQ291bnQgIT09IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYkxhYmVsQ291bnQgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvTGFiZWwodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgICAgfVxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlYWxpZ25JbmtCYXIgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBkaXJDaGFuZ2UgPSB0aGlzLmRpciA/IHRoaXMuZGlyLmNoYW5nZSA6IG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgIGNvbnN0IHJlc2l6ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yZXNpemVTZXJ2aWNlLnN1YnNjcmliZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKSA6IG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgIHJldHVybiBtZXJnZShkaXJDaGFuZ2UsIHJlc2l6ZSlcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAodGhpcy5yZWFsaWduSW5rQmFyKSB7XG4gICAgICB0aGlzLnJlYWxpZ25JbmtCYXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInID8gLXNjcm9sbERpc3RhbmNlIDogc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsIDAsIDApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsJHstc2Nyb2xsRGlzdGFuY2V9cHgsIDApYCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICB0aGlzLnVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cblxuICBjaGVja1BhZ2luYXRpb25FbmFibGVkKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzRW5hYmxlZCA9IHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4ID4gdGhpcy50YWJMaXN0U2Nyb2xsT2ZmU2V0V2lkdGhIZWlnaHQ7XG4gICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIH1cbiAgICBpZiAoaXNFbmFibGVkICE9PSB0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICB0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICBzY3JvbGxUb0xhYmVsKGxhYmVsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpW2xhYmVsSW5kZXhdIDogbnVsbDtcblxuICAgIGlmIChzZWxlY3RlZExhYmVsKSB7XG4gICAgICAvLyBUaGUgdmlldyBsZW5ndGggaXMgdGhlIHZpc2libGUgd2lkdGggb2YgdGhlIHRhYiBsYWJlbHMuXG5cbiAgICAgIGxldCBsYWJlbEJlZm9yZVBvczogbnVtYmVyO1xuICAgICAgbGV0IGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInKSB7XG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxBZnRlclBvcyA9IHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gbGFiZWxBZnRlclBvcyAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFRvcCgpO1xuICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldEhlaWdodCgpO1xuICAgICAgfVxuICAgICAgY29uc3QgYmVmb3JlVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgICBjb25zdCBhZnRlclZpc2libGVQb3MgPSB0aGlzLnNjcm9sbERpc3RhbmNlICsgdGhpcy52aWV3V2lkdGhIZWlnaHRQaXg7XG5cbiAgICAgIGlmIChsYWJlbEJlZm9yZVBvcyA8IGJlZm9yZVZpc2libGVQb3MpIHtcbiAgICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBiZWZvcmUgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgLT0gYmVmb3JlVmlzaWJsZVBvcyAtIGxhYmVsQmVmb3JlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcbiAgICAgIH0gZWxzZSBpZiAobGFiZWxBZnRlclBvcyA+IGFmdGVyVmlzaWJsZVBvcykge1xuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGFmdGVyIGRpcmVjdGlvblxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9IGxhYmVsQWZ0ZXJQb3MgLSBhZnRlclZpc2libGVQb3MgKyBFWEFHR0VSQVRFRF9PVkVSU0NST0xMO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcbiAgICB0aGlzLmRpc2FibGVTY3JvbGxBZnRlciA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IHRoaXMuZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgdGFiIGxpc3QgY29udGFpbmVyIGFuZCB0YWIgaGVhZGVyIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxuICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cbiAgICovXG4gIGdldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4IC0gdGhpcy52aWV3V2lkdGhIZWlnaHRQaXggfHwgMDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB0aGUgdGFiIGhlYWRlciBzaG91bGQgYmUgdHJhbnNmb3JtZWQgaW4gdGhlIFgtYXhpcy4gKi9cbiAgc2V0IHNjcm9sbERpc3RhbmNlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpLCB2KSk7XG5cbiAgICAvLyBNYXJrIHRoYXQgdGhlIHNjcm9sbCBkaXN0YW5jZSBoYXMgY2hhbmdlZCBzbyB0aGF0IGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQsIHRoZSBDU1NcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbiBjYW4gbW92ZSB0aGUgaGVhZGVyLlxuICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICB9XG5cbiAgZ2V0IHNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbERpc3RhbmNlO1xuICB9XG5cbiAgZ2V0IHZpZXdXaWR0aEhlaWdodFBpeCgpOiBudW1iZXIge1xuICAgIGxldCBQQUdJTkFUSU9OX1BJWCA9IDA7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xuICAgICAgUEFHSU5BVElPTl9QSVggPSB0aGlzLm5hdkNvbnRhaW5lclNjcm9sbFBhZGRpbmdQaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIFBBR0lOQVRJT05fUElYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gUEFHSU5BVElPTl9QSVg7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5hdkNvbnRhaW5lclNjcm9sbFBhZGRpbmdQaXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3Qgb3JpZ2luU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZVxuICAgICAgICA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdkNvbnRhaW5lcilcbiAgICAgICAgOiAobmF2Q29udGFpbmVyIGFzIE56U2FmZUFueSkuY3VycmVudFN0eWxlOyAvLyBjdXJyZW50U3R5bGUgZm9yIElFIDwgOVxuICAgICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm4gcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nTGVmdCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nVG9wKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBnZXRMYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kaXIgJiYgdGhpcy5kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuXG4gIGFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRMYWJlbFdyYXBwZXIgPVxuICAgICAgICB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgJiYgdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIGlmICh0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZS5hbGlnblRvRWxlbWVudChzZWxlY3RlZExhYmVsV3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=