/**
 * @fileoverview added by tsickle
 * Generated from: transfer-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var NzTransferListComponent = /** @class */ (function () {
    // #endregion
    function NzTransferListComponent(cdr) {
        var _this = this;
        this.cdr = cdr;
        // #region fields
        this.direction = 'left';
        this.titleText = '';
        this.showSelectAll = true;
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        this.renderList = null;
        this.render = null;
        this.footer = null;
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.onItemSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            _this.updateCheckStatus();
            _this.handleSelect.emit(item);
        });
        this.onItemSelectAll = (/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            _this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            }));
            _this.updateCheckStatus();
            _this.handleSelectAll.emit(status);
        });
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferListComponent.prototype.updateCheckStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; })).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked && !w.disabled; })).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // #endregion
    // #region search
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    NzTransferListComponent.prototype.handleFilter = 
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.hide = value.length > 0 && !_this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.handleFilter('');
    };
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    NzTransferListComponent.prototype.matchFilter = /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    };
    NzTransferListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer-list',
                    exportAs: 'nzTransferList',
                    preserveWhitespaces: false,
                    template: "\n    <ng-template #defaultRenderList>\n      <ul *ngIf=\"stat.shownCount > 0\" class=\"ant-transfer-list-content\">\n        <div class=\"LazyLoad\" *ngFor=\"let item of dataSource\">\n          <li\n            *ngIf=\"!item.hide\"\n            (click)=\"onItemSelect(item)\"\n            class=\"ant-transfer-list-content-item\"\n            [ngClass]=\"{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }\"\n          >\n            <label\n              nz-checkbox\n              [nzChecked]=\"item.checked\"\n              (nzCheckedChange)=\"onItemSelect(item)\"\n              (click)=\"$event.stopPropagation()\"\n              [nzDisabled]=\"disabled || item.disabled\"\n            >\n              <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n              <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n            </label>\n          </li>\n        </div>\n      </ul>\n      <div *ngIf=\"stat.shownCount === 0\" class=\"ant-transfer-list-body-not-found\">\n        <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n      </div>\n    </ng-template>\n    <div class=\"ant-transfer-list-header\">\n      <label\n        *ngIf=\"showSelectAll\"\n        nz-checkbox\n        [nzChecked]=\"stat.checkAll\"\n        (nzCheckedChange)=\"onItemSelectAll($event)\"\n        [nzIndeterminate]=\"stat.checkHalf\"\n        [nzDisabled]=\"stat.shownCount == 0 || disabled\"\n      >\n      </label>\n      <span class=\"ant-transfer-list-header-selected\">\n        <span\n          >{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}\n          {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span\n        >\n        <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n      </span>\n    </div>\n    <div\n      class=\"{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}\"\n      [ngClass]=\"{ 'ant-transfer__nodata': stat.shownCount === 0 }\"\n    >\n      <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n        <div\n          nz-transfer-search\n          (valueChanged)=\"handleFilter($event)\"\n          (valueClear)=\"handleClear()\"\n          [placeholder]=\"searchPlaceholder\"\n          [disabled]=\"disabled\"\n          [value]=\"filter\"\n        ></div>\n      </div>\n      <ng-container *ngIf=\"renderList; else defaultRenderList\">\n        <div class=\"ant-transfer-list-body-customize-wrapper\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              renderList;\n              context: {\n                $implicit: dataSource,\n                direction: direction,\n                disabled: disabled,\n                onItemSelectAll: onItemSelectAll,\n                onItemSelect: onItemSelect,\n                stat: stat\n              }\n            \"\n          ></ng-container>\n        </div>\n      </ng-container>\n    </div>\n    <div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n      <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-transfer-list]': 'true',
                        '[class.ant-transfer-list-with-footer]': '!!footer'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTransferListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzTransferListComponent.propDecorators = {
        direction: [{ type: Input }],
        titleText: [{ type: Input }],
        showSelectAll: [{ type: Input }],
        dataSource: [{ type: Input }],
        itemUnit: [{ type: Input }],
        itemsUnit: [{ type: Input }],
        filter: [{ type: Input }],
        disabled: [{ type: Input }],
        showSearch: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        notFoundContent: [{ type: Input }],
        filterOption: [{ type: Input }],
        renderList: [{ type: Input }],
        render: [{ type: Input }],
        footer: [{ type: Input }],
        handleSelectAll: [{ type: Output }],
        handleSelect: [{ type: Output }],
        filterChange: [{ type: Output }]
    };
    return NzTransferListComponent;
}());
export { NzTransferListComponent };
if (false) {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.showSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.renderList;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelectAll;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsidHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQWtMRSxhQUFhO0lBRWIsaUNBQW9CLEdBQXNCO1FBQTFDLGlCQUE4QztRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFyRmpDLGNBQVMsR0FBc0IsTUFBTSxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVyQixlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxhQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBT1osZUFBVSxHQUE2QixJQUFJLENBQUM7UUFDNUMsV0FBTSxHQUE2QixJQUFJLENBQUM7UUFDeEMsV0FBTSxHQUE2QixJQUFJLENBQUM7O1FBRzlCLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckUsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxpQkFBWSxHQUFrRSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBILFNBQUksR0FBRztZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFFRixpQkFBWTs7OztRQUFHLFVBQUMsSUFBa0I7WUFDaEMsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJ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ckIsMkNBQTRCOztJQUM1Qiw2Q0FBOEI7O0lBQzlCLG9EQUFvQzs7SUFDcEMsa0RBQWtDOztJQUNsQywrQ0FBNEU7O0lBRTVFLDZDQUFxRDs7SUFDckQseUNBQWlEOztJQUNqRCx5Q0FBaUQ7O0lBR2pELGtEQUF3Rjs7SUFDeEYsK0NBQWlGOztJQUNqRiwrQ0FBb0g7O0lBRXBILHVDQUtFOztJQUVGLCtDQU9FOztJQUVGLGtEQVNFOzs7OztJQW9DVSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zZmVyRGlyZWN0aW9uLCBUcmFuc2Zlckl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyYW5zZmVyLWxpc3QnLFxuICBleHBvcnRBczogJ256VHJhbnNmZXJMaXN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0UmVuZGVyTGlzdD5cbiAgICAgIDx1bCAqbmdJZj1cInN0YXQuc2hvd25Db3VudCA+IDBcIiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIkxhenlMb2FkXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVNvdXJjZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhaXRlbS5oaWRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1TZWxlY3QoaXRlbSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1jb250ZW50LWl0ZW1cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnYW50LXRyYW5zZmVyLWxpc3QtY29udGVudC1pdGVtLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZCB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgbnotY2hlY2tib3hcbiAgICAgICAgICAgICAgW256Q2hlY2tlZF09XCJpdGVtLmNoZWNrZWRcIlxuICAgICAgICAgICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uSXRlbVNlbGVjdChpdGVtKVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZW5kZXI7IGVsc2UgcmVuZGVyQ29udGFpbmVyXCI+e3sgaXRlbS50aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3JlbmRlckNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgKm5nSWY9XCJzdGF0LnNob3duQ291bnQgPT09IDBcIiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LWJvZHktbm90LWZvdW5kXCI+XG4gICAgICAgIDxuei1lbWJlZC1lbXB0eSBbbnpDb21wb25lbnROYW1lXT1cIid0cmFuc2ZlcidcIiBbc3BlY2lmaWNDb250ZW50XT1cIm5vdEZvdW5kQ29udGVudFwiPjwvbnotZW1iZWQtZW1wdHk+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1oZWFkZXJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICAqbmdJZj1cInNob3dTZWxlY3RBbGxcIlxuICAgICAgICBuei1jaGVja2JveFxuICAgICAgICBbbnpDaGVja2VkXT1cInN0YXQuY2hlY2tBbGxcIlxuICAgICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uSXRlbVNlbGVjdEFsbCgkZXZlbnQpXCJcbiAgICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJzdGF0LmNoZWNrSGFsZlwiXG4gICAgICAgIFtuekRpc2FibGVkXT1cInN0YXQuc2hvd25Db3VudCA9PSAwIHx8IGRpc2FibGVkXCJcbiAgICAgID5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LWhlYWRlci1zZWxlY3RlZFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgID57eyAoc3RhdC5jaGVja0NvdW50ID4gMCA/IHN0YXQuY2hlY2tDb3VudCArICcvJyA6ICcnKSArIHN0YXQuc2hvd25Db3VudCB9fVxuICAgICAgICAgIHt7IGRhdGFTb3VyY2UubGVuZ3RoID4gMSA/IGl0ZW1zVW5pdCA6IGl0ZW1Vbml0IH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aXRsZVRleHRcIiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LWhlYWRlci10aXRsZVwiPnt7IHRpdGxlVGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInt7IHNob3dTZWFyY2ggPyAnYW50LXRyYW5zZmVyLWxpc3QtYm9keSBhbnQtdHJhbnNmZXItbGlzdC1ib2R5LXdpdGgtc2VhcmNoJyA6ICdhbnQtdHJhbnNmZXItbGlzdC1ib2R5JyB9fVwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdhbnQtdHJhbnNmZXJfX25vZGF0YSc6IHN0YXQuc2hvd25Db3VudCA9PT0gMCB9XCJcbiAgICA+XG4gICAgICA8ZGl2ICpuZ0lmPVwic2hvd1NlYXJjaFwiIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtYm9keS1zZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgbnotdHJhbnNmZXItc2VhcmNoXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJoYW5kbGVGaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgKHZhbHVlQ2xlYXIpPVwiaGFuZGxlQ2xlYXIoKVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZW5kZXJMaXN0OyBlbHNlIGRlZmF1bHRSZW5kZXJMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1ib2R5LWN1c3RvbWl6ZS13cmFwcGVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgcmVuZGVyTGlzdDtcbiAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogZGF0YVNvdXJjZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0QWxsOiBvbkl0ZW1TZWxlY3RBbGwsXG4gICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0OiBvbkl0ZW1TZWxlY3QsXG4gICAgICAgICAgICAgICAgc3RhdDogc3RhdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcIlxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1mb290ZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGRpcmVjdGlvbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1saXN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1saXN0LXdpdGgtZm9vdGVyXSc6ICchIWZvb3RlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgQElucHV0KCkgaXRlbVVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuICBASW5wdXQoKSBpdGVtc1VuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXIgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93U2VhcmNoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyT3B0aW9uPzogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHJlbmRlckxpc3Q6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmFuc2Zlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uOyB2YWx1ZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHN0YXQgPSB7XG4gICAgY2hlY2tBbGw6IGZhbHNlLFxuICAgIGNoZWNrSGFsZjogZmFsc2UsXG4gICAgY2hlY2tDb3VudDogMCxcbiAgICBzaG93bkNvdW50OiAwXG4gIH07XG5cbiAgb25JdGVtU2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3QuZW1pdChpdGVtKTtcbiAgfTtcblxuICBvbkl0ZW1TZWxlY3RBbGwgPSAoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQgJiYgIWl0ZW0uaGlkZSkge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RBbGwuZW1pdChzdGF0dXMpO1xuICB9O1xuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0NvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+IHcuY2hlY2tlZCAmJiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmhpZGUpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuY2hlY2tBbGwgPSB2YWxpZENvdW50ID4gMCAmJiB2YWxpZENvdW50ID09PSB0aGlzLnN0YXQuY2hlY2tDb3VudDtcbiAgICB0aGlzLnN0YXQuY2hlY2tIYWxmID0gdGhpcy5zdGF0LmNoZWNrQ291bnQgPiAwICYmICF0aGlzLnN0YXQuY2hlY2tBbGw7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZWFyY2hcblxuICBoYW5kbGVGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmhpZGUgPSB2YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLm1hdGNoRmlsdGVyKHZhbHVlLCBpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5oaWRlKS5sZW5ndGg7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIHZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaEZpbHRlcih0ZXh0OiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyT3B0aW9uKHRleHQsIGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS50aXRsZS5pbmNsdWRlcyh0ZXh0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19