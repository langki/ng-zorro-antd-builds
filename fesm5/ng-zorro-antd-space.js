import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Renderer2, ElementRef, Input, ContentChildren, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: space-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var spaceSize = {
    small: 8,
    middle: 16,
    large: 24
};
var NzSpaceItemComponent = /** @class */ (function () {
    function NzSpaceItemComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @param {?} direction
     * @param {?} size
     * @return {?}
     */
    NzSpaceItemComponent.prototype.setDirectionAndSize = /**
     * @param {?} direction
     * @param {?} size
     * @return {?}
     */
    function (direction, size) {
        /** @type {?} */
        var marginSize = typeof size === 'string' ? spaceSize[size] : size;
        if (direction === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-bottom');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', marginSize + "px");
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-right');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-bottom', marginSize + "px");
        }
    };
    /**
     * @return {?}
     */
    NzSpaceItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NzSpaceItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-space-item, [nz-space-item]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-space-item'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSpaceItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    return NzSpaceItemComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzSpaceItemComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzSpaceItemComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: space.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'space';
var NzSpaceComponent = /** @class */ (function () {
    function NzSpaceComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzDirection = 'horizontal';
        this.nzSize = 'small';
        this.destroy$ = new Subject();
    }
    /**
     * @private
     * @return {?}
     */
    NzSpaceComponent.prototype.updateSpaceItems = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzSpaceItemComponents) {
            this.nzSpaceItemComponents.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.setDirectionAndSize(_this.nzDirection, _this.nzSize);
            }));
        }
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateSpaceItems();
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSpaceItemComponents.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSpaceItems();
        }));
    };
    NzSpaceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-space',
                    exportAs: 'NzSpace',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-space',
                        '[class.ant-space-horizontal]': 'nzDirection === "horizontal"',
                        '[class.ant-space-vertical]': 'nzDirection === "vertical"'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSpaceComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzSpaceComponent.propDecorators = {
        nzDirection: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSpaceItemComponents: [{ type: ContentChildren, args: [NzSpaceItemComponent,] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzSpaceComponent.prototype, "nzSize", void 0);
    return NzSpaceComponent;
}());
if (false) {
    /** @type {?} */
    NzSpaceComponent.prototype.nzDirection;
    /** @type {?} */
    NzSpaceComponent.prototype.nzSize;
    /** @type {?} */
    NzSpaceComponent.prototype.nzSpaceItemComponents;
    /**
     * @type {?}
     * @private
     */
    NzSpaceComponent.prototype.destroy$;
    /** @type {?} */
    NzSpaceComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: space.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSpaceModule = /** @class */ (function () {
    function NzSpaceModule() {
    }
    NzSpaceModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzSpaceComponent, NzSpaceItemComponent],
                    exports: [NzSpaceComponent, NzSpaceItemComponent],
                    imports: [CommonModule]
                },] }
    ];
    return NzSpaceModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-space.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSpaceComponent, NzSpaceItemComponent, NzSpaceModule };
//# sourceMappingURL=ng-zorro-antd-space.js.map
