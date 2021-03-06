import { __read, __spread, __decorate, __metadata } from 'tslib';
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
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, overlay, renderer, viewContainerRef, platform) {
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
    NzDropDownDirective.prototype.setDropdownMenuValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.nzDropdownMenu) {
            this.nzDropdownMenu.setValue(key, value);
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzDropdownMenu) {
            /** @type {?} */
            var nativeElement_1 = this.elementRef.nativeElement;
            /**
             * host mouse state *
             * @type {?}
             */
            var hostMouseState$ = merge(fromEvent(nativeElement_1, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement_1, 'mouseleave').pipe(mapTo(false)));
            /**
             * menu mouse state *
             * @type {?}
             */
            var menuMouseState$ = this.nzDropdownMenu.mouseState$;
            /**
             * merged mouse state *
             * @type {?}
             */
            var mergedMouseState$_1 = merge(menuMouseState$, hostMouseState$);
            /**
             * host click state *
             * @type {?}
             */
            var hostClickState$_1 = fromEvent(nativeElement_1, 'click').pipe(mapTo(true));
            /**
             * visible state switch by nzTrigger *
             * @type {?}
             */
            var visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((/**
             * @param {?} trigger
             * @return {?}
             */
            function (trigger) {
                if (trigger === 'hover') {
                    return mergedMouseState$_1;
                }
                else if (trigger === 'click') {
                    return hostClickState$_1;
                }
                else {
                    return EMPTY;
                }
            })));
            /** @type {?} */
            var descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter((/**
             * @return {?}
             */
            function () { return _this.nzClickHide; })), mapTo(false));
            /** @type {?} */
            var domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter((/**
             * @return {?}
             */
            function () { return !_this.nzDisabled; })));
            /** @type {?} */
            var visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                .pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), visible = _b[0], sub = _b[1];
                return visible || sub;
            })), auditTime(150), distinctUntilChanged(), filter((/**
             * @return {?}
             */
            function () { return _this.platform.isBrowser; })), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) {
                /** @type {?} */
                var element = _this.nzMatchWidthElement ? _this.nzMatchWidthElement.nativeElement : nativeElement_1;
                /** @type {?} */
                var triggerWidth = element.getBoundingClientRect().width;
                if (_this.nzVisible !== visible) {
                    _this.nzVisibleChange.emit(visible);
                }
                _this.nzVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!_this.overlayRef) {
                        /** new overlay **/
                        _this.overlayRef = _this.overlay.create({
                            positionStrategy: _this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: _this.nzTrigger === 'click',
                            backdropClass: _this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                            scrollStrategy: _this.overlay.scrollStrategies.reposition()
                        });
                        merge(_this.overlayRef.backdropClick(), _this.overlayRef.detachments(), _this.overlayRef.keydownEvents().pipe(filter((/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); }))))
                            .pipe(mapTo(false), takeUntil(_this.destroy$))
                            .subscribe(_this.overlayClose$);
                    }
                    else {
                        /**
                         * update overlay config *
                         * @type {?}
                         */
                        var overlayConfig = _this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                        overlayConfig.hasBackdrop = _this.nzTrigger === 'click';
                    }
                    /** open dropdown with animation **/
                    _this.positionStrategy.withPositions(__spread([POSITION_MAP[_this.nzPlacement]], listOfPositions));
                    /** reset portal if needed **/
                    if (!_this.portal || _this.portal.templateRef !== (/** @type {?} */ (_this.nzDropdownMenu)).templateRef) {
                        _this.portal = new TemplatePortal((/** @type {?} */ (_this.nzDropdownMenu)).templateRef, _this.viewContainerRef);
                    }
                    _this.overlayRef.attach(_this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (_this.overlayRef) {
                        _this.overlayRef.detach();
                    }
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTrigger = changes.nzTrigger;
        if (nzTrigger) {
            this.nzTrigger$.next(this.nzTrigger);
        }
        if (nzVisible) {
            this.inputVisible$.next(this.nzVisible);
        }
        if (nzDisabled) {
            /** @type {?} */
            var nativeElement = this.elementRef.nativeElement;
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
    };
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
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: Platform }
    ]; };
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
    return NzDropDownDirective;
}());
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
var NzContextMenuServiceModule = /** @class */ (function () {
    function NzContextMenuServiceModule() {
    }
    NzContextMenuServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzContextMenuServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-a.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropDownADirective = /** @class */ (function () {
    function NzDropDownADirective() {
    }
    NzDropDownADirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[nz-dropdown]',
                    host: {
                        '[class.ant-dropdown-link]': 'true'
                    }
                },] }
    ];
    return NzDropDownADirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDropdownButtonDirective = /** @class */ (function () {
    function NzDropdownButtonDirective(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    NzDropdownButtonDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    };
    NzDropdownButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-button][nz-dropdown]'
                },] }
    ];
    /** @nocollapse */
    NzDropdownButtonDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzButtonGroupComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef }
    ]; };
    return NzDropdownButtonDirective;
}());
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
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuService, noAnimation) {
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
    NzDropdownMenuComponent.prototype.setMouseState = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.mouseState$.next(visible);
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    NzDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "nz-dropdown-menu",
                    exportAs: "nzDropdownMenu",
                    animations: [slideMotion],
                    providers: [
                        MenuService,
                        /** menu is inside dropdown-menu component **/
                        {
                            provide: NzIsMenuInsideDropDownToken,
                            useValue: true
                        }
                    ],
                    template: "\n    <ng-template>\n      <div\n        class=\"ant-dropdown\"\n        [ngClass]=\"nzOverlayClassName\"\n        [ngStyle]=\"nzOverlayStyle\"\n        [@slideMotion]=\"'enter'\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        (mouseenter)=\"setMouseState(true)\"\n        (mouseleave)=\"setMouseState(false)\"\n      >\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDropdownMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: MenuService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropdownMenuComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzDropdownMenuComponent;
}());
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
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
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
    return NzDropDownModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: context-menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var listOfPositions$1 = [
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
];
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
        this.overlay = overlay;
        this.overlayRef = null;
        this.closeSubscription = Subscription.EMPTY;
    }
    /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.create = /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function ($event, nzDropdownMenuComponent) {
        var _this = this;
        this.close(true);
        var x = $event.x, y = $event.y;
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
        }
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo({ x: x, y: y })
            .withPositions(listOfPositions$1)
            .withTransformOriginOn('.ant-dropdown');
        this.overlayRef = this.overlay.create({
            positionStrategy: positionStrategy,
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.closeSubscription = merge(nzDropdownMenuComponent.descendantMenuItemClick$, fromEvent(document, 'click').pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), 
        /** handle firefox contextmenu event **/
        filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.button !== 2; })), take(1))).subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
        this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
    };
    /**
     * @param {?=} clear
     * @return {?}
     */
    NzContextMenuService.prototype.close = /**
     * @param {?=} clear
     * @return {?}
     */
    function (clear) {
        if (clear === void 0) { clear = false; }
        if (this.overlayRef) {
            this.overlayRef.detach();
            if (clear) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
            this.closeSubscription.unsubscribe();
        }
    };
    NzContextMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzContextMenuServiceModule
                },] }
    ];
    /** @nocollapse */
    NzContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzContextMenuService.ɵprov = ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(ɵɵinject(Overlay)); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
    return NzContextMenuService;
}());
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
