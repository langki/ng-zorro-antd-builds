import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, TemplateRef, Input, ChangeDetectorRef, ContentChildren, NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { __decorate, __metadata, __spread } from 'tslib';
import { InputNumber, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, merge } from 'rxjs';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { NzBreakpointEnum, gridResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { startWith, takeUntil, switchMap, auditTime, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: descriptions-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDescriptionsItemComponent = /** @class */ (function () {
    function NzDescriptionsItemComponent() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.inputChange$.next();
    };
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.inputChange$.complete();
    };
    NzDescriptionsItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-descriptions-item',
                    template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    exportAs: 'nzDescriptionsItem',
                    preserveWhitespaces: false
                }] }
    ];
    NzDescriptionsItemComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        nzSpan: [{ type: Input }],
        nzTitle: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
    return NzDescriptionsItemComponent;
}());
if (false) {
    /** @type {?} */
    NzDescriptionsItemComponent.ngAcceptInputType_nzSpan;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.content;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzSpan;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.inputChange$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: descriptions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'descriptions';
/** @type {?} */
var defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
var NzDescriptionsComponent = /** @class */ (function () {
    function NzDescriptionsComponent(nzConfigService, cdr, breakpointService) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.nzBordered = false;
        this.nzLayout = 'horizontal';
        this.nzColumn = defaultColumnMap;
        this.nzSize = 'default';
        this.nzTitle = '';
        this.nzColon = true;
        this.itemMatrix = [];
        this.realColumn = 3;
        this.breakpoint = NzBreakpointEnum.md;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColumn) {
            this.prepareMatrix();
        }
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return merge.apply(void 0, __spread(_this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.inputChange$; })))).pipe(auditTime(16)); }))), this.breakpointService.subscribe(gridResponsiveMap).pipe(tap((/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return (_this.breakpoint = bp); }))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.prepareMatrix();
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * Prepare the render matrix according to description items' spans.
     */
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.prepareMatrix = /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    function () {
        if (!this.items) {
            return;
        }
        /** @type {?} */
        var currentRow = [];
        /** @type {?} */
        var width = 0;
        /** @type {?} */
        var column = (this.realColumn = this.getColumn());
        /** @type {?} */
        var items = this.items.toArray();
        /** @type {?} */
        var length = items.length;
        /** @type {?} */
        var matrix = [];
        /** @type {?} */
        var flushRow = (/**
         * @return {?}
         */
        function () {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var item = items[i];
            var title = item.nzTitle, content = item.content, span = item.nzSpan;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn("\"nzColumn\" is " + column + " but we have row length " + width);
                }
                currentRow.push({ title: title, content: content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title: title, content: content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title: title, content: content, span: span });
            }
        }
        this.itemMatrix = matrix;
    };
    /**
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.getColumn = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.breakpoint];
        }
        return this.nzColumn;
    };
    NzDescriptionsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-descriptions',
                    exportAs: 'nzDescriptions',
                    preserveWhitespaces: false,
                    template: "\n    <div *ngIf=\"nzTitle\" class=\"ant-descriptions-title\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-descriptions-view\">\n      <table>\n        <tbody>\n          <ng-container *ngIf=\"nzLayout === 'horizontal'\">\n            <tr class=\"ant-descriptions-row\" *ngFor=\"let row of itemMatrix; let i = index\">\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\n                <!-- Horizontal & NOT Bordered -->\n                <ng-container *ngIf=\"!nzBordered\">\n                  <td class=\"ant-descriptions-item\" [colSpan]=\"item.span\">\n                    <span class=\"ant-descriptions-item-label\" [class.ant-descriptions-item-colon]=\"nzColon\">\n                      <ng-container *nzStringTemplateOutlet=\"item.title\">\n                        {{ item.title }}\n                      </ng-container>\n                    </span>\n                    <span class=\"ant-descriptions-item-content\">\n                      <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                    </span>\n                  </td>\n                </ng-container>\n                <!-- Horizontal & Bordered -->\n                <ng-container *ngIf=\"nzBordered\">\n                  <td class=\"ant-descriptions-item-label\" *nzStringTemplateOutlet=\"item.title\">\n                    <ng-container *nzStringTemplateOutlet=\"item.title\">\n                      {{ item.title }}\n                    </ng-container>\n                  </td>\n                  <td class=\"ant-descriptions-item-content\" [colSpan]=\"item.span * 2 - 1\">\n                    <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                  </td>\n                </ng-container>\n              </ng-container>\n            </tr>\n          </ng-container>\n\n          <ng-container *ngIf=\"nzLayout === 'vertical'\">\n            <!-- Vertical & NOT Bordered -->\n            <ng-container *ngIf=\"!nzBordered\">\n              <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n                <tr class=\"ant-descriptions-row\">\n                  <ng-container *ngFor=\"let item of row; let isLast = last\">\n                    <td class=\"ant-descriptions-item\" [colSpan]=\"item.span\">\n                      <span class=\"ant-descriptions-item-label\" [class.ant-descriptions-item-colon]=\"nzColon\">\n                        <ng-container *nzStringTemplateOutlet=\"item.title\">\n                          {{ item.title }}\n                        </ng-container>\n                      </span>\n                    </td>\n                  </ng-container>\n                </tr>\n                <tr class=\"ant-descriptions-row\">\n                  <ng-container *ngFor=\"let item of row; let isLast = last\">\n                    <td class=\"ant-descriptions-item\" [colSpan]=\"item.span\">\n                      <span class=\"ant-descriptions-item-content\">\n                        <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                      </span>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </ng-container>\n            <!-- Vertical & Bordered -->\n            <ng-container *ngIf=\"nzBordered\">\n              <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\n                <tr class=\"ant-descriptions-row\">\n                  <ng-container *ngFor=\"let item of row; let isLast = last\">\n                    <td class=\"ant-descriptions-item-label\" [colSpan]=\"item.span\">\n                      <ng-container *nzStringTemplateOutlet=\"item.title\">\n                        {{ item.title }}\n                      </ng-container>\n                    </td>\n                  </ng-container>\n                </tr>\n                <tr class=\"ant-descriptions-row\">\n                  <ng-container *ngFor=\"let item of row; let isLast = last\">\n                    <td class=\"ant-descriptions-item-content\" [colSpan]=\"item.span\">\n                      <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  ",
                    host: {
                        class: 'ant-descriptions',
                        '[class.ant-descriptions-bordered]': 'nzBordered',
                        '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                        '[class.ant-descriptions-small]': 'nzSize === "small"'
                    }
                }] }
    ];
    /** @nocollapse */
    NzDescriptionsComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzBreakpointService }
    ]; };
    NzDescriptionsComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
        nzBordered: [{ type: Input }],
        nzLayout: [{ type: Input }],
        nzColumn: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzColon: [{ type: Input }]
    };
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzBordered", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzDescriptionsComponent.prototype, "nzColumn", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzDescriptionsComponent.prototype, "nzSize", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzColon", void 0);
    return NzDescriptionsComponent;
}());
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.ngAcceptInputType_nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.ngAcceptInputType_nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzLayout;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.breakpoint;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.breakpointService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: descriptions.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDescriptionsModule = /** @class */ (function () {
    function NzDescriptionsModule() {
    }
    NzDescriptionsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzOutletModule, PlatformModule],
                    declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                    exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
                },] }
    ];
    return NzDescriptionsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzDescriptionsItemRenderProps() { }
if (false) {
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.title;
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.span;
    /** @type {?} */
    NzDescriptionsItemRenderProps.prototype.content;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-descriptions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzDescriptionsComponent, NzDescriptionsItemComponent, NzDescriptionsModule };
//# sourceMappingURL=ng-zorro-antd-descriptions.js.map
