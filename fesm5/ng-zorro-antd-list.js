import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation, ElementRef, Renderer2, ContentChild, ViewChild, NgZone, ChangeDetectorRef, ContentChildren, Directive, HostBinding, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, defer, of, merge, BehaviorSubject } from 'rxjs';
import { take, switchMap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';

/**
 * @fileoverview added by tsickle
 * Generated from: interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzListGrid() { }
if (false) {
    /** @type {?|undefined} */
    NzListGrid.prototype.gutter;
    /** @type {?|undefined} */
    NzListGrid.prototype.span;
    /** @type {?|undefined} */
    NzListGrid.prototype.column;
    /** @type {?|undefined} */
    NzListGrid.prototype.xs;
    /** @type {?|undefined} */
    NzListGrid.prototype.sm;
    /** @type {?|undefined} */
    NzListGrid.prototype.md;
    /** @type {?|undefined} */
    NzListGrid.prototype.lg;
    /** @type {?|undefined} */
    NzListGrid.prototype.xl;
    /** @type {?|undefined} */
    NzListGrid.prototype.xxl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list-item-meta-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListItemMetaTitleComponent = /** @class */ (function () {
    function NzListItemMetaTitleComponent() {
    }
    NzListItemMetaTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta-title',
                    exportAs: 'nzListItemMetaTitle',
                    template: "\n    <h4 class=\"ant-list-item-meta-title\">\n      <ng-content></ng-content>\n    </h4>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return NzListItemMetaTitleComponent;
}());
var NzListItemMetaDescriptionComponent = /** @class */ (function () {
    function NzListItemMetaDescriptionComponent() {
    }
    NzListItemMetaDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta-description',
                    exportAs: 'nzListItemMetaDescription',
                    template: "\n    <div class=\"ant-list-item-meta-description\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return NzListItemMetaDescriptionComponent;
}());
var NzListItemMetaAvatarComponent = /** @class */ (function () {
    function NzListItemMetaAvatarComponent() {
    }
    NzListItemMetaAvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta-avatar',
                    exportAs: 'nzListItemMetaAvatar',
                    template: "\n    <div class=\"ant-list-item-meta-avatar\">\n      <nz-avatar *ngIf=\"nzSrc\" [nzSrc]=\"nzSrc\"></nz-avatar>\n      <ng-content *ngIf=\"!nzSrc\"></ng-content>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NzListItemMetaAvatarComponent.propDecorators = {
        nzSrc: [{ type: Input }]
    };
    return NzListItemMetaAvatarComponent;
}());
if (false) {
    /** @type {?} */
    NzListItemMetaAvatarComponent.prototype.nzSrc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list-item-meta.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListItemMetaComponent = /** @class */ (function () {
    function NzListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzListItemMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta, [nz-list-item-meta]',
                    exportAs: 'nzListItemMeta',
                    template: "\n    <!--Old API Start-->\n    <nz-list-item-meta-avatar *ngIf=\"avatarStr\" [nzSrc]=\"avatarStr\"></nz-list-item-meta-avatar>\n    <nz-list-item-meta-avatar *ngIf=\"avatarTpl\">\n      <ng-container [ngTemplateOutlet]=\"avatarTpl\"></ng-container>\n    </nz-list-item-meta-avatar>\n    <!--Old API End-->\n\n    <ng-content select=\"nz-list-item-meta-avatar\"></ng-content>\n\n    <div *ngIf=\"nzTitle || nzDescription || descriptionComponent || titleComponent\" class=\"ant-list-item-meta-content\">\n      <!--Old API Start-->\n      <nz-list-item-meta-title *ngIf=\"nzTitle && !titleComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </nz-list-item-meta-title>\n      <nz-list-item-meta-description *ngIf=\"nzDescription && !descriptionComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </nz-list-item-meta-description>\n      <!--Old API End-->\n\n      <ng-content select=\"nz-list-item-meta-title\"></ng-content>\n      <ng-content select=\"nz-list-item-meta-description\"></ng-content>\n    </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzListItemMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzListItemMetaComponent.propDecorators = {
        nzAvatar: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        descriptionComponent: [{ type: ContentChild, args: [NzListItemMetaDescriptionComponent,] }],
        titleComponent: [{ type: ContentChild, args: [NzListItemMetaTitleComponent,] }]
    };
    return NzListItemMetaComponent;
}());
if (false) {
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzListItemMetaComponent.prototype.descriptionComponent;
    /** @type {?} */
    NzListItemMetaComponent.prototype.titleComponent;
    /** @type {?} */
    NzListItemMetaComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzListItemMetaComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list-item-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListItemExtraComponent = /** @class */ (function () {
    function NzListItemExtraComponent() {
    }
    NzListItemExtraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-extra, [nz-list-item-extra]',
                    exportAs: 'nzListItemExtra',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-list-item-extra'
                    }
                }] }
    ];
    /** @nocollapse */
    NzListItemExtraComponent.ctorParameters = function () { return []; };
    return NzListItemExtraComponent;
}());
var NzListItemActionComponent = /** @class */ (function () {
    function NzListItemActionComponent() {
    }
    NzListItemActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-action',
                    exportAs: 'nzListItemAction',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-template><ng-content></ng-content></ng-template> "
                }] }
    ];
    /** @nocollapse */
    NzListItemActionComponent.ctorParameters = function () { return []; };
    NzListItemActionComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return NzListItemActionComponent;
}());
if (false) {
    /** @type {?} */
    NzListItemActionComponent.prototype.templateRef;
}
var NzListItemActionsComponent = /** @class */ (function () {
    function NzListItemActionsComponent(ngZone, cdr) {
        var _this = this;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer((/**
         * @return {?}
         */
        function () {
            if (_this.nzListItemActions) {
                return of(null);
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            function () { return _this.contentChildrenChanges$; })));
        }));
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.nzActions.length) {
                _this.actions = _this.nzActions;
            }
            else {
                _this.actions = _this.nzListItemActions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return (/** @type {?} */ (action.templateRef)); }));
            }
            _this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    NzListItemActionsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.inputActionChanges$.next(null);
    };
    /**
     * @return {?}
     */
    NzListItemActionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzListItemActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ul[nz-list-item-actions]',
                    exportAs: 'nzListItemActions',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <li *ngFor=\"let i of actions; let last = last\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  ",
                    host: {
                        class: 'ant-list-item-action'
                    }
                }] }
    ];
    /** @nocollapse */
    NzListItemActionsComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    NzListItemActionsComponent.propDecorators = {
        nzActions: [{ type: Input }],
        nzListItemActions: [{ type: ContentChildren, args: [NzListItemActionComponent,] }]
    };
    return NzListItemActionsComponent;
}());
if (false) {
    /** @type {?} */
    NzListItemActionsComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemActionsComponent.prototype.nzListItemActions;
    /** @type {?} */
    NzListItemActionsComponent.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.inputActionChanges$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.contentChildrenChanges$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListEmptyComponent = /** @class */ (function () {
    function NzListEmptyComponent() {
    }
    NzListEmptyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-empty',
                    exportAs: 'nzListHeader',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty> ",
                    host: {
                        class: 'ant-list-empty-text'
                    }
                }] }
    ];
    NzListEmptyComponent.propDecorators = {
        nzNoResult: [{ type: Input }]
    };
    return NzListEmptyComponent;
}());
if (false) {
    /** @type {?} */
    NzListEmptyComponent.prototype.nzNoResult;
}
var NzListHeaderComponent = /** @class */ (function () {
    function NzListHeaderComponent() {
    }
    NzListHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-header',
                    exportAs: 'nzListHeader',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-list-header'
                    }
                }] }
    ];
    return NzListHeaderComponent;
}());
var NzListFooterComponent = /** @class */ (function () {
    function NzListFooterComponent() {
    }
    NzListFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-footer',
                    exportAs: 'nzListFooter',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-list-footer'
                    }
                }] }
    ];
    return NzListFooterComponent;
}());
var NzListPaginationComponent = /** @class */ (function () {
    function NzListPaginationComponent() {
    }
    NzListPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-pagination',
                    exportAs: 'nzListPagination',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-list-pagination'
                    }
                }] }
    ];
    return NzListPaginationComponent;
}());
var NzListLoadMoreDirective = /** @class */ (function () {
    function NzListLoadMoreDirective() {
    }
    NzListLoadMoreDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-list-load-more',
                    exportAs: 'nzListLoadMoreDirective'
                },] }
    ];
    return NzListLoadMoreDirective;
}());
var NzListGridDirective = /** @class */ (function () {
    function NzListGridDirective() {
    }
    NzListGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-list[nzGrid]',
                    host: {
                        class: 'ant-list-grid'
                    }
                },] }
    ];
    return NzListGridDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListComponent = /** @class */ (function () {
    function NzListComponent() {
        this.nzBordered = false;
        this.nzGrid = '';
        this.nzItemLayout = 'horizontal';
        this.nzRenderItem = null;
        this.nzLoading = false;
        this.nzLoadMore = null;
        this.nzSize = 'default';
        this.nzSplit = true;
        this.hasSomethingAfterLastItem = false;
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayoutNotifySource.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListComponent.prototype.getSomethingAfterLastItem = /**
     * @return {?}
     */
    function () {
        return !!(this.nzLoadMore ||
            this.nzPagination ||
            this.nzFooter ||
            this.nzListFooterComponent ||
            this.nzListPaginationComponent ||
            this.nzListLoadMoreDirective);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    };
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.itemLayoutNotifySource.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
    };
    NzListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list, [nz-list]',
                    exportAs: 'nzList',
                    template: "\n    <ng-template #itemsTpl>\n      <div class=\"ant-list-items\">\n        <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n          <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n        </ng-container>\n        <ng-content select=\"nz-list-item, [nz-list-item]\"></ng-content>\n      </div>\n    </ng-template>\n\n    <nz-list-header *ngIf=\"nzHeader\">\n      <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n    </nz-list-header>\n    <ng-content select=\"nz-list-header\"></ng-content>\n\n    <nz-spin [nzSpinning]=\"nzLoading\">\n      <ng-container>\n        <div *ngIf=\"nzLoading && nzDataSource && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n        <div *ngIf=\"nzGrid && nzDataSource; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter || null\">\n          <div\n            nz-col\n            [nzSpan]=\"nzGrid.span || null\"\n            [nzXs]=\"nzGrid.xs || null\"\n            [nzSm]=\"nzGrid.sm || null\"\n            [nzMd]=\"nzGrid.md || null\"\n            [nzLg]=\"nzGrid.lg || null\"\n            [nzXl]=\"nzGrid.xl || null\"\n            [nzXXl]=\"nzGrid.xxl || null\"\n            *ngFor=\"let item of nzDataSource; let index = index\"\n          >\n            <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n          </div>\n        </div>\n        <nz-list-empty *ngIf=\"!nzLoading && nzDataSource && nzDataSource.length === 0\" [nzNoResult]=\"nzNoResult\"></nz-list-empty>\n      </ng-container>\n      <ng-content></ng-content>\n    </nz-spin>\n\n    <nz-list-footer *ngIf=\"nzFooter\">\n      <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n    </nz-list-footer>\n    <ng-content select=\"nz-list-footer, [nz-list-footer]\"></ng-content>\n\n    <ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n    <ng-content select=\"nz-list-load-more, [nz-list-load-more]\"></ng-content>\n\n    <nz-list-pagination *ngIf=\"nzPagination\">\n      <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n    </nz-list-pagination>\n    <ng-content select=\"nz-list-pagination, [nz-list-pagination]\"></ng-content>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-list]': 'true',
                        '[class.ant-list-vertical]': 'nzItemLayout === "vertical"',
                        '[class.ant-list-lg]': 'nzSize === "large"',
                        '[class.ant-list-sm]': 'nzSize === "small"',
                        '[class.ant-list-split]': 'nzSplit',
                        '[class.ant-list-bordered]': 'nzBordered',
                        '[class.ant-list-loading]': 'nzLoading',
                        '[class.ant-list-something-after-last-item]': 'hasSomethingAfterLastItem'
                    }
                }] }
    ];
    /** @nocollapse */
    NzListComponent.ctorParameters = function () { return []; };
    NzListComponent.propDecorators = {
        nzDataSource: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzGrid: [{ type: Input }],
        nzHeader: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzItemLayout: [{ type: Input }],
        nzRenderItem: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzLoadMore: [{ type: Input }],
        nzPagination: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSplit: [{ type: Input }],
        nzNoResult: [{ type: Input }],
        nzListFooterComponent: [{ type: ContentChild, args: [NzListFooterComponent,] }],
        nzListPaginationComponent: [{ type: ContentChild, args: [NzListPaginationComponent,] }],
        nzListLoadMoreDirective: [{ type: ContentChild, args: [NzListLoadMoreDirective,] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzListComponent.prototype, "nzSplit", void 0);
    return NzListComponent;
}());
if (false) {
    /** @type {?} */
    NzListComponent.ngAcceptInputType_nzBordered;
    /** @type {?} */
    NzListComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzListComponent.ngAcceptInputType_nzSplit;
    /** @type {?} */
    NzListComponent.ngAcceptInputType_nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.nzNoResult;
    /** @type {?} */
    NzListComponent.prototype.nzListFooterComponent;
    /** @type {?} */
    NzListComponent.prototype.nzListPaginationComponent;
    /** @type {?} */
    NzListComponent.prototype.nzListLoadMoreDirective;
    /** @type {?} */
    NzListComponent.prototype.hasSomethingAfterLastItem;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.itemLayoutNotifySource;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzExtra = null;
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.nzExtra);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.itemLayout = val;
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    };
    NzListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item, [nz-list-item]',
                    exportAs: 'nzListItem',
                    template: "\n    <ng-template #actionsTpl>\n      <ul nz-list-item-actions *ngIf=\"nzActions && nzActions.length > 0\" [nzActions]=\"nzActions\"></ul>\n      <ng-content select=\"nz-list-item-actions, [nz-list-item-actions]\"></ng-content>\n    </ng-template>\n    <ng-template #contentTpl>\n      <ng-content select=\"nz-list-item-meta, [nz-list-item-meta]\"></ng-content>\n      <ng-content></ng-content>\n      <ng-container *ngIf=\"nzContent\">\n        <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n      </ng-container>\n    </ng-template>\n    <ng-template #extraTpl>\n      <ng-content select=\"nz-list-item-extra, [nz-list-item-extra]\"></ng-content>\n    </ng-template>\n    <ng-template #simpleTpl>\n      <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"extraTpl\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n    </ng-template>\n\n    <ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n      <div class=\"ant-list-item-main\">\n        <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n      </div>\n      <nz-list-item-extra *ngIf=\"nzExtra\">\n        <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n      </nz-list-item-extra>\n      <ng-template [ngTemplateOutlet]=\"extraTpl\"></ng-template>\n    </ng-container>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzListComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzListItemComponent.propDecorators = {
        nzActions: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzNoFlex: [{ type: Input }, { type: HostBinding, args: ['class.ant-list-item-no-flex',] }],
        listItemExtraDirective: [{ type: ContentChild, args: [NzListItemExtraComponent,] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
}());
if (false) {
    /** @type {?} */
    NzListItemComponent.ngAcceptInputType_nzNoFlex;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
    /** @type {?} */
    NzListItemComponent.prototype.nzNoFlex;
    /** @type {?} */
    NzListItemComponent.prototype.listItemExtraDirective;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout$;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.parentComp;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DIRECTIVES = [
    NzListComponent,
    NzListHeaderComponent,
    NzListFooterComponent,
    NzListPaginationComponent,
    NzListEmptyComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzListItemMetaTitleComponent,
    NzListItemMetaDescriptionComponent,
    NzListItemMetaAvatarComponent,
    NzListItemActionsComponent,
    NzListItemActionComponent,
    NzListItemExtraComponent,
    NzListLoadMoreDirective,
    NzListGridDirective
];
var NzListModule = /** @class */ (function () {
    function NzListModule() {
    }
    NzListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzOutletModule, NzEmptyModule],
                    declarations: [DIRECTIVES],
                    exports: [DIRECTIVES]
                },] }
    ];
    return NzListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzListComponent, NzListEmptyComponent, NzListFooterComponent, NzListGridDirective, NzListHeaderComponent, NzListItemActionComponent, NzListItemActionsComponent, NzListItemComponent, NzListItemExtraComponent, NzListItemMetaAvatarComponent, NzListItemMetaComponent, NzListItemMetaDescriptionComponent, NzListItemMetaTitleComponent, NzListLoadMoreDirective, NzListModule, NzListPaginationComponent };
//# sourceMappingURL=ng-zorro-antd-list.js.map
