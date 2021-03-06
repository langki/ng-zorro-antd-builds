import { __decorate, __metadata } from 'tslib';
import { Directive, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * @fileoverview added by tsickle
 * Generated from: card-grid.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective() {
        this.nzHoverable = true;
    }
    NzCardGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-card-grid]',
                    exportAs: 'nzCardGrid',
                    host: {
                        '[class.ant-card-grid]': 'true',
                        '[class.ant-card-hoverable]': 'nzHoverable'
                    }
                },] }
    ];
    NzCardGridDirective.propDecorators = {
        nzHoverable: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
if (false) {
    /** @type {?} */
    NzCardGridDirective.ngAcceptInputType_nzHoverable;
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}

/**
 * @fileoverview added by tsickle
 * Generated from: card-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardTabComponent = /** @class */ (function () {
    function NzCardTabComponent() {
    }
    NzCardTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-tab',
                    exportAs: 'nzCardTab',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
                }] }
    ];
    NzCardTabComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzCardTabComponent;
}());
if (false) {
    /** @type {?} */
    NzCardTabComponent.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * Generated from: card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, cdr) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzBordered = true;
        this.nzLoading = false;
        this.nzHoverable = false;
        this.nzBodyStyle = null;
        this.nzActions = [];
        this.nzType = null;
        this.nzSize = 'default';
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    NzCardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    exportAs: 'nzCard',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || listOfNzCardTabComponent\">\n      <div class=\"ant-card-head-wrapper\">\n        <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n          <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"listOfNzCardTabComponent\">\n        <ng-template [ngTemplateOutlet]=\"listOfNzCardTabComponent.template\"></ng-template>\n      </ng-container>\n    </div>\n    <div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n      <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n    </div>\n    <div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n      <ng-container *ngIf=\"!nzLoading; else loadingTemplate\">\n        <ng-content></ng-content>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <nz-card-loading></nz-card-loading>\n      </ng-template>\n    </div>\n    <ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n      <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n        <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n      </li>\n    </ul>\n  ",
                    host: {
                        '[class.ant-card]': 'true',
                        '[class.ant-card-loading]': 'nzLoading',
                        '[class.ant-card-bordered]': 'nzBordered',
                        '[class.ant-card-hoverable]': 'nzHoverable',
                        '[class.ant-card-small]': 'nzSize === "small"',
                        '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
                        '[class.ant-card-type-inner]': 'nzType === "inner"',
                        '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCardComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        listOfNzCardTabComponent: [{ type: ContentChild, args: [NzCardTabComponent, { static: false },] }],
        listOfNzCardGridDirective: [{ type: ContentChildren, args: [NzCardGridDirective,] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
if (false) {
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzBordered;
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzSize;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.listOfNzCardTabComponent;
    /** @type {?} */
    NzCardComponent.prototype.listOfNzCardGridDirective;
    /**
     * @type {?}
     * @private
     */
    NzCardComponent.prototype.destroy$;
    /** @type {?} */
    NzCardComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCardComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: card-loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardLoadingComponent = /** @class */ (function () {
    function NzCardLoadingComponent() {
        this.listOfLoading = [
            ['ant-col-22'],
            ['ant-col-8', 'ant-col-15'],
            ['ant-col-6', 'ant-col-18'],
            ['ant-col-13', 'ant-col-9'],
            ['ant-col-4', 'ant-col-3', 'ant-col-16'],
            ['ant-col-8', 'ant-col-6', 'ant-col-8']
        ];
    }
    NzCardLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-loading',
                    exportAs: 'nzCardLoading',
                    template: "\n    <div class=\"ant-card-loading-content\">\n      <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\" *ngFor=\"let listOfClassName of listOfLoading\">\n        <div *ngFor=\"let className of listOfClassName\" [ngClass]=\"className\" style=\"padding-left: 4px; padding-right: 4px;\">\n          <div class=\"ant-card-loading-block\"></div>\n        </div>\n      </div>\n    </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-card-loading-content]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCardLoadingComponent.ctorParameters = function () { return []; };
    return NzCardLoadingComponent;
}());
if (false) {
    /** @type {?} */
    NzCardLoadingComponent.prototype.listOfLoading;
}

/**
 * @fileoverview added by tsickle
 * Generated from: card-meta.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent() {
        this.nzTitle = null;
        this.nzDescription = null;
        this.nzAvatar = null;
    }
    NzCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-meta',
                    exportAs: 'nzCardMeta',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n      <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n    </div>\n    <div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n      <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n      <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </div>\n    </div>\n  ",
                    host: {
                        '[class.ant-card-meta]': 'true'
                    }
                }] }
    ];
    NzCardMetaComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzAvatar: [{ type: Input }]
    };
    return NzCardMetaComponent;
}());
if (false) {
    /** @type {?} */
    NzCardMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}

/**
 * @fileoverview added by tsickle
 * Generated from: card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    NzCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzOutletModule],
                    declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                    exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
                },] }
    ];
    return NzCardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCardComponent, NzCardGridDirective, NzCardLoadingComponent, NzCardMetaComponent, NzCardModule, NzCardTabComponent };
//# sourceMappingURL=ng-zorro-antd-card.js.map
