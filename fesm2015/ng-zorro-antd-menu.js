import { __decorate, __metadata } from 'tslib';
import { Injectable, InjectionToken, SkipSelf, Optional, Inject, Directive, ChangeDetectorRef, Input, ContentChildren, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Host, Output, ViewChild, ElementRef, Renderer2, NgModule } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, BehaviorSubject, merge, combineLatest } from 'rxjs';
import { map, flatMap, filter, mapTo, auditTime, distinctUntilChanged, takeUntil, startWith, switchMap } from 'rxjs/operators';
import { NavigationEnd, RouterLink, RouterLinkWithHref, Router } from '@angular/router';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { POSITION_MAP, getPlacementName } from 'ng-zorro-antd/core/overlay';
import { collapseMotion, zoomBigMotion, slideMotion } from 'ng-zorro-antd/core/animation';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuService {
    constructor() {
        /**
         * all descendant menu click *
         */
        this.descendantMenuItemClick$ = new Subject();
        /**
         * child menu item click *
         */
        this.childMenuItemClick$ = new Subject();
        this.theme$ = new BehaviorSubject('light');
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    onDescendantMenuItemClick(menu) {
        this.descendantMenuItemClick$.next(menu);
    }
    /**
     * @param {?} menu
     * @return {?}
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode$.next(mode);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme$.next(theme);
    }
    /**
     * @param {?} indent
     * @return {?}
     */
    setInlineIndent(indent) {
        this.inlineIndent$.next(indent);
    }
}
MenuService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * all descendant menu click *
     * @type {?}
     */
    MenuService.prototype.descendantMenuItemClick$;
    /**
     * child menu item click *
     * @type {?}
     */
    MenuService.prototype.childMenuItemClick$;
    /** @type {?} */
    MenuService.prototype.theme$;
    /** @type {?} */
    MenuService.prototype.mode$;
    /** @type {?} */
    MenuService.prototype.inlineIndent$;
    /** @type {?} */
    MenuService.prototype.isChildSubMenuOpen$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NzIsMenuInsideDropDownToken = new InjectionToken('NzIsInDropDownMenuToken');
/** @type {?} */
const NzMenuServiceLocalToken = new InjectionToken('NzMenuServiceLocalToken');

/**
 * @fileoverview added by tsickle
 * Generated from: submenu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSubmenuService {
    /**
     * @param {?} nzHostSubmenuService
     * @param {?} nzMenuService
     * @param {?} isMenuInsideDropDown
     */
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
        /**
         * submenu title & overlay mouse enter status *
         */
        this.isMouseEnterTitleOrOverlay$ = new Subject();
        this.childMenuItemClick$ = new Subject();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /**
         * close if menu item clicked *
         * @type {?}
         */
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(flatMap((/**
         * @return {?}
         */
        () => this.mode$)), filter((/**
         * @param {?} mode
         * @return {?}
         */
        mode => mode !== 'inline' || this.isMenuInsideDropDown)), mapTo(false));
        /** @type {?} */
        const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /**
         * combine the child submenu status with current submenu status to calculate host submenu open *
         * @type {?}
         */
        const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen)), auditTime(150), distinctUntilChanged());
        isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        }));
    }
    /**
     * menu item inside submenu clicked
     * @param {?} menu
     * @return {?}
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
}
NzSubmenuService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzSubmenuService.ctorParameters = () => [
    { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: MenuService },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];
if (false) {
    /** @type {?} */
    NzSubmenuService.prototype.mode$;
    /** @type {?} */
    NzSubmenuService.prototype.level;
    /** @type {?} */
    NzSubmenuService.prototype.isCurrentSubMenuOpen$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.isChildSubMenuOpen$;
    /**
     * submenu title & overlay mouse enter status *
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.isMouseEnterTitleOrOverlay$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.childMenuItemClick$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.nzHostSubmenuService;
    /** @type {?} */
    NzSubmenuService.prototype.nzMenuService;
    /** @type {?} */
    NzSubmenuService.prototype.isMenuInsideDropDown;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMenuItemDirective {
    /**
     * @param {?} nzMenuService
     * @param {?} cdr
     * @param {?} nzSubmenuService
     * @param {?} isMenuInsideDropDown
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     * @param {?=} router
     */
    constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, routerLink, routerLinkWithHref, router) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.destroy$ = new Subject();
        this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
        this.selected$ = new Subject();
        this.inlinePaddingLeft = null;
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            (/** @type {?} */ (this.router)).events.pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd))).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
            }));
        }
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.nzMenuService.onDescendantMenuItemClick(this);
            if (this.nzSubmenuService) {
                /** menu item inside the submenu **/
                this.nzSubmenuService.onChildMenuItemClick(this);
            }
            else {
                /** menu item inside the root menu **/
                this.nzMenuService.onChildMenuItemClick(this);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hasActiveLinks() {
        /** @type {?} */
        const isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?} link
         * @return {?}
         */
        (link) => router.isActive(link.urlTree, this.nzMatchRouterExact));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** store origin padding in padding */
        combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.updateRouterActive();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                host: {
                    '[class.ant-dropdown-menu-item]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-item-selected]': `isMenuInsideDropDown && nzSelected`,
                    '[class.ant-dropdown-menu-item-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-item]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-item-selected]': `!isMenuInsideDropDown && nzSelected`,
                    '[class.ant-menu-item-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[style.paddingLeft.px]': 'nzPaddingLeft || inlinePaddingLeft',
                    '(click)': 'clickMenuItem($event)'
                }
            },] }
];
/** @nocollapse */
NzMenuItemDirective.ctorParameters = () => [
    { type: MenuService },
    { type: ChangeDetectorRef },
    { type: NzSubmenuService, decorators: [{ type: Optional }] },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
NzMenuItemDirective.propDecorators = {
    nzPaddingLeft: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzSelected: [{ type: Input }],
    nzMatchRouterExact: [{ type: Input }],
    nzMatchRouter: [{ type: Input }],
    listOfRouterLink: [{ type: ContentChildren, args: [RouterLink, { descendants: true },] }],
    listOfRouterLinkWithHref: [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzSelected", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
if (false) {
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzSelected;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzMatchRouter;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.destroy$;
    /** @type {?} */
    NzMenuItemDirective.prototype.level;
    /** @type {?} */
    NzMenuItemDirective.prototype.selected$;
    /** @type {?} */
    NzMenuItemDirective.prototype.inlinePaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzPaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSelected;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouter;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLink;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzSubmenuService;
    /** @type {?} */
    NzMenuItemDirective.prototype.isMenuInsideDropDown;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLink;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: submenu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listOfVerticalPositions = [
    POSITION_MAP.rightTop,
    POSITION_MAP.right,
    POSITION_MAP.rightBottom,
    POSITION_MAP.leftTop,
    POSITION_MAP.left,
    POSITION_MAP.leftBottom
];
/** @type {?} */
const listOfHorizontalPositions = [POSITION_MAP.bottomLeft];
class NzSubMenuComponent {
    /**
     * @param {?} nzMenuService
     * @param {?} cdr
     * @param {?} nzSubmenuService
     * @param {?} platform
     * @param {?} isMenuInsideDropDown
     * @param {?=} noAnimation
     */
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.noAnimation = noAnimation;
        this.nzMenuClassName = '';
        this.nzPaddingLeft = null;
        this.nzTitle = null;
        this.nzIcon = null;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new EventEmitter();
        this.cdkOverlayOrigin = null;
        this.listOfNzSubMenuComponent = null;
        this.listOfNzMenuItemDirective = null;
        this.level = this.nzSubmenuService.level;
        this.destroy$ = new Subject();
        this.position = 'right';
        this.triggerWidth = null;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlinePaddingLeft = null;
        this.overlayPositions = listOfVerticalPositions;
        this.isSelected = false;
        this.isActive = false;
    }
    /**
     * set the submenu host open status directly *
     * @param {?} open
     * @return {?}
     */
    setOpenStateWithoutDebounce(open) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(open);
    }
    /**
     * @return {?}
     */
    toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.nzOpen);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMouseEnterState(value) {
        this.isActive = value;
        if (this.mode !== 'inline') {
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
        }
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
            /** TODO: fast dom **/
            this.triggerWidth = (/** @type {?} */ (this.cdkOverlayOrigin)).nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const placement = getPlacementName(position);
        if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
            this.position = 'right';
        }
        else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
            this.position = 'left';
        }
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** submenu theme update **/
        this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        theme => {
            this.theme = theme;
            this.cdr.markForCheck();
        }));
        /** submenu mode update **/
        this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        mode => {
            this.mode = mode;
            if (mode === 'horizontal') {
                this.overlayPositions = listOfHorizontalPositions;
            }
            else if (mode === 'vertical') {
                this.overlayPositions = listOfVerticalPositions;
            }
            this.cdr.markForCheck();
        }));
        /** inlineIndent update **/
        combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            this.cdr.markForCheck();
        }));
        /** current submenu open status **/
        this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        open => {
            this.isActive = open;
            if (open !== this.nzOpen) {
                this.setTriggerWidth();
                this.nzOpen = open;
                this.nzOpenChange.emit(this.nzOpen);
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setTriggerWidth();
        /** @type {?} */
        const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
        /** @type {?} */
        const changes = (/** @type {?} */ (listOfNzMenuItemDirective)).changes;
        /** @type {?} */
        const mergedObservable = merge(...[changes, ...(/** @type {?} */ (listOfNzMenuItemDirective)).map((/**
             * @param {?} menu
             * @return {?}
             */
            menu => menu.selected$))]);
        changes
            .pipe(startWith(listOfNzMenuItemDirective), switchMap((/**
         * @return {?}
         */
        () => mergedObservable)), startWith(true), map((/**
         * @return {?}
         */
        () => (/** @type {?} */ (listOfNzMenuItemDirective)).some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.nzSelected)))), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            this.isSelected = selected;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOpen } = changes;
        if (nzOpen) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
            this.setTriggerWidth();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <div
      *ngIf="mode === 'inline'; else nonInlineTemplate"
      nz-submenu-inline-child
      [mode]="mode"
      [nzOpen]="nzOpen"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [menuClass]="nzMenuClassName"
      [templateOutlet]="subMenuTemplate"
    ></div>
    <ng-template #nonInlineTemplate>
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    </ng-template>

    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-submenu-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-dropdown-menu-submenu-open]': `isMenuInsideDropDown && nzOpen`,
                    '[class.ant-dropdown-menu-submenu-selected]': `isMenuInsideDropDown && isSelected`,
                    '[class.ant-dropdown-menu-submenu-vertical]': `isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-dropdown-menu-submenu-horizontal]': `isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-dropdown-menu-submenu-inline]': `isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-dropdown-menu-submenu-active]': `isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-submenu-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-submenu-open]': `!isMenuInsideDropDown && nzOpen`,
                    '[class.ant-menu-submenu-selected]': `!isMenuInsideDropDown && isSelected`,
                    '[class.ant-menu-submenu-vertical]': `!isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-menu-submenu-horizontal]': `!isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-menu-submenu-inline]': `!isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-menu-submenu-active]': `!isMenuInsideDropDown && isActive`
                }
            }] }
];
/** @nocollapse */
NzSubMenuComponent.ctorParameters = () => [
    { type: MenuService },
    { type: ChangeDetectorRef },
    { type: NzSubmenuService },
    { type: Platform },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzSubMenuComponent.propDecorators = {
    nzMenuClassName: [{ type: Input }],
    nzPaddingLeft: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true, read: ElementRef },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzSubMenuComponent.ngAcceptInputType_nzOpen;
    /** @type {?} */
    NzSubMenuComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzPaddingLeft;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzTitle;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzIcon;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzMenuItemDirective;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.level;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.destroy$;
    /** @type {?} */
    NzSubMenuComponent.prototype.position;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.theme;
    /** @type {?} */
    NzSubMenuComponent.prototype.mode;
    /** @type {?} */
    NzSubMenuComponent.prototype.inlinePaddingLeft;
    /** @type {?} */
    NzSubMenuComponent.prototype.overlayPositions;
    /** @type {?} */
    NzSubMenuComponent.prototype.isSelected;
    /** @type {?} */
    NzSubMenuComponent.prototype.isActive;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.cdr;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.platform;
    /** @type {?} */
    NzSubMenuComponent.prototype.isMenuInsideDropDown;
    /** @type {?} */
    NzSubMenuComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} serviceInsideDropDown
 * @param {?} serviceOutsideDropDown
 * @return {?}
 */
function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
/**
 * @param {?} isMenuInsideDropDownToken
 * @return {?}
 */
function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuDirective {
    /**
     * @param {?} nzMenuService
     * @param {?} isMenuInsideDropDown
     * @param {?} cdr
     */
    constructor(nzMenuService, isMenuInsideDropDown, cdr) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.isMenuInsideDropDown;
        this.nzClick = new EventEmitter();
        this.actualMode = 'vertical';
        this.inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
        this.mode$ = new BehaviorSubject(this.nzMode);
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
    }
    /**
     * @param {?} inlineCollapsed
     * @return {?}
     */
    setInlineCollapsed(inlineCollapsed) {
        this.nzInlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.nzOpen));
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(false)));
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(true)));
                this.listOfOpenedNzSubMenuComponent = [];
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        combineLatest([this.inlineCollapsed$, this.mode$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        }));
        this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.setSelectedState(item === menu)));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
        if (nzInlineCollapsed) {
            this.inlineCollapsed$.next(this.nzInlineCollapsed);
        }
        if (nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (nzMode) {
            this.mode$.next(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(false)));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    {
                        provide: NzMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), MenuService], NzMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nzInlineCollapsed`
                }
            },] }
];
/** @nocollapse */
NzMenuDirective.ctorParameters = () => [
    { type: MenuService },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: ChangeDetectorRef }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
if (false) {
    /** @type {?} */
    NzMenuDirective.ngAcceptInputType_nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.ngAcceptInputType_nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype.nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.actualMode;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.inlineCollapsed$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.mode$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.listOfOpenedNzSubMenuComponent;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzMenuService;
    /** @type {?} */
    NzMenuDirective.prototype.isMenuInsideDropDown;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} isMenuInsideDropDownToken
 * @return {?}
 */
function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} isMenuInsideDropDown
     */
    constructor(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        /** @type {?} */
        const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const ulElement = (/** @type {?} */ (this.titleElement)).nativeElement.nextElementSibling;
        if (ulElement) {
            /**
             * add classname to ul *
             * @type {?}
             */
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    }
}
NzMenuGroupComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuGroupFactory,
                        deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzMenuGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];
NzMenuGroupComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    titleElement: [{ type: ViewChild, args: ['titleElement',] }]
};
if (false) {
    /** @type {?} */
    NzMenuGroupComponent.prototype.nzTitle;
    /** @type {?} */
    NzMenuGroupComponent.prototype.titleElement;
    /** @type {?} */
    NzMenuGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuGroupComponent.prototype.renderer;
    /** @type {?} */
    NzMenuGroupComponent.prototype.isMenuInsideDropDown;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu-divider.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMenuDividerDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
NzMenuDividerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            },] }
];
/** @nocollapse */
NzMenuDividerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    NzMenuDividerDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuDividerDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: submenu-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSubMenuTitleComponent {
    constructor() {
        this.nzIcon = null;
        this.nzTitle = null;
        this.isMenuInsideDropDown = false;
        this.nzDisabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new EventEmitter();
        this.subMenuMouseState = new EventEmitter();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    /**
     * @return {?}
     */
    clickTitle() {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-title]',
                exportAs: 'nzSubmenuTitle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="nzIcon" *ngIf="nzIcon"></i>
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span>{{ nzTitle }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-arrow">
      <i nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': 'paddingLeft',
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }] }
];
NzSubMenuTitleComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    isMenuInsideDropDown: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    paddingLeft: [{ type: Input }],
    mode: [{ type: Input }],
    toggleSubMenu: [{ type: Output }],
    subMenuMouseState: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzIcon;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzTitle;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.isMenuInsideDropDown;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.paddingLeft;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.mode;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.toggleSubMenu;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.subMenuMouseState;
}

/**
 * @fileoverview added by tsickle
 * Generated from: submenu-inline-child.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSubmenuInlineChildComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.nzOpen = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
    }
    /**
     * @return {?}
     */
    calcMotionState() {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calcMotionState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { mode, nzOpen, menuClass } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => !!item))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                }));
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => !!item))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                }));
            }
        }
    }
}
NzSubmenuInlineChildComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-inline-child]',
                animations: [collapseMotion],
                exportAs: 'nzSubmenuInlineChild',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
                host: {
                    '[class.ant-menu]': 'true',
                    '[class.ant-menu-inline]': 'true',
                    '[class.ant-menu-sub]': 'true',
                    '[@collapseMotion]': 'expandState'
                }
            }] }
];
/** @nocollapse */
NzSubmenuInlineChildComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzSubmenuInlineChildComponent.propDecorators = {
    templateOutlet: [{ type: Input }],
    menuClass: [{ type: Input }],
    mode: [{ type: Input }],
    nzOpen: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.templateOutlet;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.menuClass;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.mode;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.listOfCacheClassName;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.expandState;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuInlineChildComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuInlineChildComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: submenu-non-inline-child.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSubmenuNoneInlineChildComponent {
    constructor() {
        this.menuClass = '';
        this.theme = 'light';
        this.templateOutlet = null;
        this.isMenuInsideDropDown = false;
        this.mode = 'vertical';
        this.position = 'right';
        this.nzDisabled = false;
        this.nzOpen = false;
        this.subMenuMouseState = new EventEmitter();
        this.expandState = 'collapsed';
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    /**
     * @return {?}
     */
    calcMotionState() {
        if (this.nzOpen) {
            if (this.mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (this.mode === 'vertical') {
                this.expandState = 'active';
            }
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calcMotionState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { mode, nzOpen } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
    }
}
NzSubmenuNoneInlineChildComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-none-inline-child]',
                exportAs: 'nzSubmenuNoneInlineChild',
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion, slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-menu-submenu]': 'true',
                    '[class.ant-menu-submenu-popup]': 'true',
                    '[class.ant-menu-light]': "theme === 'light'",
                    '[class.ant-menu-dark]': "theme === 'dark'",
                    '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                    '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                    '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                    '[@slideMotion]': 'expandState',
                    '[@zoomBigMotion]': 'expandState',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }] }
];
NzSubmenuNoneInlineChildComponent.propDecorators = {
    menuClass: [{ type: Input }],
    theme: [{ type: Input }],
    templateOutlet: [{ type: Input }],
    isMenuInsideDropDown: [{ type: Input }],
    mode: [{ type: Input }],
    position: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzOpen: [{ type: Input }],
    subMenuMouseState: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.menuClass;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.theme;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.templateOutlet;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.isMenuInsideDropDown;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.mode;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.position;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.subMenuMouseState;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.expandState;
}

/**
 * @fileoverview added by tsickle
 * Generated from: menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMenuModule {
}
NzMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PlatformModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzOutletModule],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent,
                    NzSubMenuTitleComponent,
                    NzSubmenuInlineChildComponent,
                    NzSubmenuNoneInlineChildComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: menu.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MenuDropDownTokenFactory, MenuGroupFactory, MenuService, MenuServiceFactory, NzIsMenuInsideDropDownToken, NzMenuDirective, NzMenuDividerDirective, NzMenuGroupComponent, NzMenuItemDirective, NzMenuModule, NzMenuServiceLocalToken, NzSubMenuComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent, NzSubmenuService };
//# sourceMappingURL=ng-zorro-antd-menu.js.map
