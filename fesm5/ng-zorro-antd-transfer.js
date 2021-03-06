import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, ViewChildren, NgModule } from '@angular/core';
import { __values, __spread, __decorate, __metadata } from 'tslib';
import { toArray, InputBoolean } from 'ng-zorro-antd/core/util';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

/**
 * @fileoverview added by tsickle
 * Generated from: interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TransferItem() { }
if (false) {
    /** @type {?} */
    TransferItem.prototype.title;
    /** @type {?|undefined} */
    TransferItem.prototype.direction;
    /** @type {?|undefined} */
    TransferItem.prototype.disabled;
    /** @type {?|undefined} */
    TransferItem.prototype.checked;
    /** @type {?|undefined} */
    TransferItem.prototype.hide;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @record
 */
function TransferCanMove() { }
if (false) {
    /** @type {?} */
    TransferCanMove.prototype.direction;
    /** @type {?} */
    TransferCanMove.prototype.list;
}
/**
 * @record
 */
function TransferChange() { }
if (false) {
    /** @type {?} */
    TransferChange.prototype.from;
    /** @type {?} */
    TransferChange.prototype.to;
    /** @type {?} */
    TransferChange.prototype.list;
}
/**
 * @record
 */
function TransferSearchChange() { }
if (false) {
    /** @type {?} */
    TransferSearchChange.prototype.direction;
    /** @type {?} */
    TransferSearchChange.prototype.value;
}
/**
 * @record
 */
function TransferSelectChange() { }
if (false) {
    /** @type {?} */
    TransferSelectChange.prototype.direction;
    /** @type {?} */
    TransferSelectChange.prototype.checked;
    /** @type {?} */
    TransferSelectChange.prototype.list;
    /** @type {?|undefined} */
    TransferSelectChange.prototype.item;
}

/**
 * @fileoverview added by tsickle
 * Generated from: transfer-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: transfer-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTransferSearchComponent = /** @class */ (function () {
    // endregion
    function NzTransferSearchComponent(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype._handle = /**
     * @return {?}
     */
    function () {
        this.valueChanged.emit(this.value);
    };
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    };
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    NzTransferSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-transfer-search]',
                    exportAs: 'nzTransferSearch',
                    preserveWhitespaces: false,
                    template: "\n    <input\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"_handle()\"\n      [disabled]=\"disabled\"\n      [placeholder]=\"placeholder\"\n      class=\"ant-input ant-transfer-list-search\"\n      [ngClass]=\"{ 'ant-input-disabled': disabled }\"\n    />\n    <a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\n      <i nz-icon nzType=\"close-circle\"></i>\n    </a>\n    <ng-template #def>\n      <span class=\"ant-transfer-list-search-action\"><i nz-icon nzType=\"search\"></i></span>\n    </ng-template>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzTransferSearchComponent.propDecorators = {
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        valueChanged: [{ type: Output }],
        valueClear: [{ type: Output }]
    };
    return NzTransferSearchComponent;
}());
if (false) {
    /** @type {?} */
    NzTransferSearchComponent.prototype.placeholder;
    /** @type {?} */
    NzTransferSearchComponent.prototype.value;
    /** @type {?} */
    NzTransferSearchComponent.prototype.disabled;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueChanged;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueClear;
    /**
     * @type {?}
     * @private
     */
    NzTransferSearchComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: transfer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzListStyle = {};
        this.nzShowSelectAll = true;
        this.nzCanMove = (/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) { return of(arg.list); });
        this.nzRenderList = null;
        this.nzRender = null;
        this.nzFooter = null;
        this.nzShowSearch = false;
        this.nzTargetKeys = [];
        this.nzSelectedKeys = [];
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('left', checked); });
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('right', checked); });
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('left', !!item.checked, item); });
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('right', !!item.checked, item); });
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        function () { return _this.moveTo('left'); });
        this.moveToRight = (/**
         * @return {?}
         */
        function () { return _this.moveTo('right'); });
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.direction === 'right') {
                record.direction = 'right';
                _this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                _this.leftDataSource.push(record);
            }
        }));
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true && !item.disabled; }));
        this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        function (newMoveList) {
            return _this.truthMoveTo(direction, newMoveList.filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; })));
        }), (/**
         * @return {?}
         */
        function () { return moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); })); }));
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                item.hide = false;
                item.direction = direction;
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        targetDatasource.splice.apply(targetDatasource, __spread([0, 0], list));
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.markForCheck(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.handleNzTargetKeys = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = toArray(this.nzTargetKeys);
        /** @type {?} */
        var hasOwnKey = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.hasOwnProperty('key'); });
        this.leftDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
                e.checked = true;
            }
        }));
        this.moveToRight();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.handleNzSelectedKeys = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = toArray(this.nzSelectedKeys);
        this.nzDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (keys.indexOf(e.key) !== -1) {
                e.checked = true;
            }
        }));
        /** @type {?} */
        var term = (/**
         * @param {?} ld
         * @return {?}
         */
        function (ld) { return ld.disabled === false && ld.checked === true; });
        this.rightActive = this.leftDataSource.some(term);
        this.leftActive = this.rightDataSource.some(term);
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDataSource) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
        if (changes.nzTargetKeys) {
            this.handleNzTargetKeys();
        }
        if (changes.nzSelectedKeys) {
            this.handleNzSelectedKeys();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    exportAs: 'nzTransfer',
                    preserveWhitespaces: false,
                    template: "\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"left\"\n      direction=\"left\"\n      [titleText]=\"nzTitles[0]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"leftDataSource\"\n      [filter]=\"leftFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[0]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleLeftSelect($event)\"\n      (handleSelectAll)=\"handleLeftSelectAll($event)\"\n    >\n    </nz-transfer-list>\n    <div class=\"ant-transfer-operation\">\n      <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n      </button>\n      <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n      </button>\n    </div>\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"right\"\n      direction=\"right\"\n      [titleText]=\"nzTitles[1]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"rightDataSource\"\n      [filter]=\"rightFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[1]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleRightSelect($event)\"\n      (handleSelectAll)=\"handleRightSelectAll($event)\"\n    >\n    </nz-transfer-list>\n  ",
                    host: {
                        '[class.ant-transfer]': "true",
                        '[class.ant-transfer-disabled]': "nzDisabled",
                        '[class.ant-transfer-customize-list]': "nzRenderList"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzShowSelectAll: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRenderList: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzTargetKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
    return NzTransferComponent;
}());
if (false) {
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzShowSearch;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRenderList;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzTargetKeys;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectedKeys;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * Generated from: transfer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTransferModule = /** @class */ (function () {
    function NzTransferModule() {
    }
    NzTransferModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzI18nModule, NzIconModule, NzEmptyModule],
                    declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                    exports: [NzTransferComponent]
                },] }
    ];
    return NzTransferModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-transfer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTransferComponent, NzTransferListComponent, NzTransferModule, NzTransferSearchComponent };
//# sourceMappingURL=ng-zorro-antd-transfer.js.map
