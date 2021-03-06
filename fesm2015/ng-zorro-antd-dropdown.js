import { __decorate, __metadata } from 'tslib';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayModule, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { EventEmitter, Directive, ElementRef, Renderer2, ViewContainerRef, Input, Output, NgModule, Host, Optional, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { POSITION_MAP, NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, BehaviorSubject, merge, fromEvent, EMPTY, combineLatest, Subscription } from 'rxjs';
import { mapTo, switchMap, filter, map, auditTime, distinctUntilChanged, takeUntil, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonGroupComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuService, NzIsMenuInsideDropDownToken, NzMenuModule } from 'ng-zorro-antd/menu';
import { slideMotion } from 'ng-zorro-antd/core/animation';

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
class NzDropDownDirective {
    /**
     * @param {?} elementRef
     * @param {?} overlay
     * @param {?} renderer
     * @param {?} viewContainerRef
     * @param {?} platform
     */
    constructor(elementRef, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.nzTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.nzDropdownMenu = null;
        this.nzTrigger = 'hover';
        this.nzMatchWidthElement = null;
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setDropdownMenuValue(key, value) {
        if (this.nzDropdownMenu) {
            this.nzDropdownMenu.setValue(key, value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            /** @type {?} */
            const nativeElement = this.elementRef.nativeElement;
            /**
             * host mouse state *
             * @type {?}
             */
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /**
             * menu mouse state *
             * @type {?}
             */
            const menuMouseState$ = this.nzDropdownMenu.mouseState$;
            /**
             * merged mouse state *
             * @type {?}
             */
            const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
            /**
             * host click state *
             * @type {?}
             */
            const hostClickState$ = fromEvent(nativeElement, 'click').pipe(mapTo(true));
            /**
             * visible state switch by nzTrigger *
             * @type {?}
             */
            const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((/**
             * @param {?} trigger
             * @return {?}
             */
            trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return EMPTY;
                }
            })));
            /** @type {?} */
            const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter((/**
             * @return {?}
             */
            () => this.nzClickHide)), mapTo(false));
            /** @type {?} */
            const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter((/**
             * @return {?}
             */
            () => !this.nzDisabled)));
            /** @type {?} */
            const visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                .pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([visible, sub]) => visible || sub)), auditTime(150), distinctUntilChanged(), filter((/**
             * @return {?}
             */
            () => this.platform.isBrowser)), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            (visible) => {
                /** @type {?} */
                const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
                /** @type {?} */
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.nzVisible !== visible) {
                    this.nzVisibleChange.emit(visible);
                }
                this.nzVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: this.nzTrigger === 'click',
                            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.keydownEvents().pipe(filter((/**
                         * @param {?} e
                         * @return {?}
                         */
                        e => e.keyCode === ESCAPE && !hasModifierKey(e)))))
                            .pipe(mapTo(false), takeUntil(this.destroy$))
                            .subscribe(this.overlayClose$);
                    }
                    else {
                        /**
                         * update overlay config *
                         * @type {?}
                         */
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([POSITION_MAP[this.nzPlacement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== (/** @type {?} */ (this.nzDropdownMenu)).templateRef) {
                        this.portal = new TemplatePortal((/** @type {?} */ (this.nzDropdownMenu)).templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTrigger } = changes;
        if (nzTrigger) {
            this.nzTrigger$.next(this.nzTrigger);
        }
        if (nzVisible) {
            this.inputVisible$.next(this.nzVisible);
        }
        if (nzDisabled) {
            /** @type {?} */
            const nativeElement = this.elementRef.nativeElement;
            if (this.nzDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (nzOverlayClassName) {
            this.setDropdownMenuValue('nzOverlayClassName', this.nzOverlayClassName);
        }
        if (nzOverlayStyle) {
            this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
        }
    }
}
NzDropDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown',
                host: {
                    '[class.ant-dropdown-trigger]': 'true'
                }
            },] }
];
/** @nocollapse */
NzDropDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: Platform }
];
NzDropDownDirective.propDecorators = {
    nzDropdownMenu: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzMatchWidthElement: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzClickHide: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzBackdrop", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzClickHide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzVisible", void 0);
if (false) {
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzClickHide;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzVisible;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.inputVisible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzTrigger$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayClose$;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDropdownMenu;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownDirective.prototype.nzMatchWidthElement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisible;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownDirective.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: context-menu.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzContextMenuServiceModule {
}
NzContextMenuServiceModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-a.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDropDownADirective {
}
NzDropDownADirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[nz-dropdown]',
                host: {
                    '[class.ant-dropdown-link]': 'true'
                }
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDropdownButtonDirective {
    /**
     * @param {?} renderer
     * @param {?} nzButtonGroupComponent
     * @param {?} elementRef
     */
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
}
NzDropdownButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-button][nz-dropdown]'
            },] }
];
/** @nocollapse */
NzDropdownButtonDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: NzButtonGroupComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropdownButtonDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropdownButtonDirective.prototype.nzButtonGroupComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropdownButtonDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDropdownMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} viewContainerRef
     * @param {?} nzMenuService
     * @param {?=} noAnimation
     */
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
NzDropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: `nz-dropdown-menu`,
                exportAs: `nzDropdownMenu`,
                animations: [slideMotion],
                providers: [
                    MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ],
                template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzDropdownMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: MenuService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.mouseState$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.isChildSubMenuOpen$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.descendantMenuItemClick$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDropDownModule {
}
NzDropDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    FormsModule,
                    NzButtonModule,
                    NzMenuModule,
                    NzIconModule,
                    NzNoAnimationModule,
                    PlatformModule,
                    NzOverlayModule,
                    NzContextMenuServiceModule,
                    NzOutletModule
                ],
                entryComponents: [NzDropdownMenuComponent],
                declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective],
                exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: context-menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listOfPositions$1 = [
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
];
class NzContextMenuService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = null;
        this.closeSubscription = Subscription.EMPTY;
    }
    /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    create($event, nzDropdownMenuComponent) {
        this.close(true);
        const { x, y } = $event;
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
        }
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo({ x, y })
            .withPositions(listOfPositions$1)
            .withTransformOriginOn('.ant-dropdown');
        this.overlayRef = this.overlay.create({
            positionStrategy,
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.closeSubscription = merge(nzDropdownMenuComponent.descendantMenuItemClick$, fromEvent(document, 'click').pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => !!this.overlayRef && !this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))))), 
        /** handle firefox contextmenu event **/
        filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.button !== 2)), take(1))).subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
        this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
    }
    /**
     * @param {?=} clear
     * @return {?}
     */
    close(clear = false) {
        if (this.overlayRef) {
            this.overlayRef.detach();
            if (clear) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
            this.closeSubscription.unsubscribe();
        }
    }
}
NzContextMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzContextMenuServiceModule
            },] }
];
/** @nocollapse */
NzContextMenuService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzContextMenuService.ɵprov = ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(ɵɵinject(Overlay)); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.closeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzContextMenuService, NzContextMenuServiceModule, NzDropDownADirective, NzDropDownDirective, NzDropDownModule, NzDropdownButtonDirective, NzDropdownMenuComponent };
//# sourceMappingURL=ng-zorro-antd-dropdown.js.map
