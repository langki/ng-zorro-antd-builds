/**
 * @fileoverview added by tsickle
 * Generated from: cascader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual, isNotNil } from 'ng-zorro-antd/core/util';
import { isShowSearchObject } from './typings';
import { isChildOption, isParentOption } from './utils';
/**
 * All data is stored and parsed in NzCascaderService.
 */
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = [];
        this.$loading = new BehaviorSubject(false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new Subject();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new Subject();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new Subject();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: /**
         * Return cascader options in the first layer.
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    NzCascaderService.prototype.syncOptions = /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        /** @type {?} */
        var values = this.values;
        /** @type {?} */
        var hasValue = values && values.length;
        /** @type {?} */
        var lastColumnIndex = values.length - 1;
        /** @type {?} */
        var initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        function (columnIndex) {
            /** @type {?} */
            var activatedOptionSetter = (/**
             * @return {?}
             */
            function () {
                var _a;
                /** @type {?} */
                var currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    _this.$redraw.next();
                    return;
                }
                /** @type {?} */
                var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : (_a = {},
                            _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                            _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                            _a));
                _this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    _this.dropBehindColumns(columnIndex);
                    _this.selectedOptions = __spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            });
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    };
    /**
     * Bind cascader component so this service could use inputs.
     */
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    NzCascaderService.prototype.withComponent = /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    NzCascaderService.prototype.withOptions = /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    };
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    NzCascaderService.prototype.setOptionActivated = /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    function (option, columnIndex, performSelect, loadingChildren) {
        if (performSelect === void 0) { performSelect = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        var isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (performSelect) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = __spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    NzCascaderService.prototype.setOptionDeactivatedSinceColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    };
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    NzCascaderService.prototype.setSearchOptionSelected = /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = __spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = __spread(_this.columnsSnapshot);
            _this.activatedOptions = __spread(_this.selectedOptions);
        }), 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    NzCascaderService.prototype.prepareSearchOptions = /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    function (searchValue) {
        var _this = this;
        /** @type {?} */
        var results = [];
        // Search results only have one layer.
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        function (i, p) {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        var showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            var _a;
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, searchValue); }));
        }
        this.columns = [results];
        this.$redraw.next(); // Search results may be empty, so should redraw.
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    NzCascaderService.prototype.toggleSearchingMode = /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = __spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = __spread(this.activatedOptionsSnapshot);
            this.selectedOptions = __spread(this.activatedOptions);
            this.columns = __spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    NzCascaderService.prototype.clear = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionLabel = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionValue = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    NzCascaderService.prototype.setColumnData = /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    function (options, columnIndex, parent) {
        /** @type {?} */
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return (o.parent = parent); }));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindActivatedOptions = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindColumns = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderService.prototype.loadChildren = /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, columnIndex, success, failure) {
        var _this = this;
        /** @type {?} */
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            }));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.isLoaded = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    NzCascaderService.prototype.findOptionWithValue = /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    function (columnIndex, value) {
        var _this = this;
        /** @type {?} */
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return v_1 === _this.getOptionValue(o); }))));
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderService.prototype.prepareEmitValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionValue(o); }));
    };
    NzCascaderService.decorators = [
        { type: Injectable }
    ];
    return NzCascaderService;
}());
export { NzCascaderService };
if (false) {
    /**
     * Activated options in each column.
     * @type {?}
     */
    NzCascaderService.prototype.activatedOptions;
    /**
     * An array to store cascader items arranged in different layers.
     * @type {?}
     */
    NzCascaderService.prototype.columns;
    /**
     * If user has entered searching mode.
     * @type {?}
     */
    NzCascaderService.prototype.inSearchingMode;
    /**
     * Selected options would be output to user.
     * @type {?}
     */
    NzCascaderService.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderService.prototype.values;
    /** @type {?} */
    NzCascaderService.prototype.$loading;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     * @type {?}
     */
    NzCascaderService.prototype.$redraw;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     * @type {?}
     */
    NzCascaderService.prototype.$optionSelected;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     * @type {?}
     */
    NzCascaderService.prototype.$quitSearching;
    /**
     * To hold columns before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.columnsSnapshot;
    /**
     * To hold activated options before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.cascaderComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJjYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGtCQUFrQixFQUEyRixNQUFNLFdBQVcsQ0FBQztBQUN4SSxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUt4RDtJQUFBOzs7O1FBR0UscUJBQWdCLEdBQXVCLEVBQUUsQ0FBQzs7OztRQUcxQyxZQUFPLEdBQXlCLEVBQUUsQ0FBQzs7OztRQUduQyxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQUd4QixvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFFekMsV0FBTSxHQUFnQixFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDOzs7OztRQU0vQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7Ozs7UUFNOUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFHM0IsQ0FBQzs7Ozs7UUFNSCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFHdEMsb0JBQWUsR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztRQUc3Qyw2QkFBd0IsR0FBdUIsRUFBRSxDQUFDO0lBaVg1RCxDQUFDO0lBNVdDLHNCQUFJLHdDQUFTO1FBRGIsa0RBQWtEOzs7OztRQUNsRDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixD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QTBEOzs7OztJQUUxRCw4Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgYXJyYXlzRXF1YWwsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBpc1Nob3dTZWFyY2hPYmplY3QsIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSwgTnpDYXNjYWRlckZpbHRlciwgTnpDYXNjYWRlck9wdGlvbiwgTnpDYXNjYWRlclNlYXJjaE9wdGlvbiB9IGZyb20gJy4vdHlwaW5ncyc7XG5pbXBvcnQgeyBpc0NoaWxkT3B0aW9uLCBpc1BhcmVudE9wdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIEFsbCBkYXRhIGlzIHN0b3JlZCBhbmQgcGFyc2VkIGluIE56Q2FzY2FkZXJTZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQWN0aXZhdGVkIG9wdGlvbnMgaW4gZWFjaCBjb2x1bW4uICovXG4gIGFjdGl2YXRlZE9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuXG4gIC8qKiBBbiBhcnJheSB0byBzdG9yZSBjYXNjYWRlciBpdGVtcyBhcnJhbmdlZCBpbiBkaWZmZXJlbnQgbGF5ZXJzLiAqL1xuICBjb2x1bW5zOiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtdO1xuXG4gIC8qKiBJZiB1c2VyIGhhcyBlbnRlcmVkIHNlYXJjaGluZyBtb2RlLiAqL1xuICBpblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcblxuICAvKiogU2VsZWN0ZWQgb3B0aW9ucyB3b3VsZCBiZSBvdXRwdXQgdG8gdXNlci4gKi9cbiAgc2VsZWN0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICB2YWx1ZXM6IE56U2FmZUFueVtdID0gW107XG5cbiAgcmVhZG9ubHkgJGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcmVkcmF3IGJlY2F1c2UgYWN0aXZhdGVkIG9yXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXG4gICAqL1xuICByZWFkb25seSAkcmVkcmF3ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xuICAgIGluZGV4OiBudW1iZXI7XG4gIH0gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxuICAgKiBPbmx5IGVtaXQgd2hlbiB1c2VyIGRvIHNlbGVjdCBhIHNlYXJjaGluZyBvcHRpb24uXG4gICAqL1xuICByZWFkb25seSAkcXVpdFNlYXJjaGluZyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXG4gIHByaXZhdGUgY29sdW1uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XG5cbiAgLyoqIFRvIGhvbGQgYWN0aXZhdGVkIG9wdGlvbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBjYXNjYWRlckNvbXBvbmVudCE6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZTtcblxuICAvKiogUmV0dXJuIGNhc2NhZGVyIG9wdGlvbnMgaW4gdGhlIGZpcnN0IGxheWVyLiAqL1xuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1swXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJHJlZHJhdy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcuY29tcGxldGUoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJGxvYWRpbmcuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIHN5bmNPcHRpb25zKGZpcnN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICBjb25zdCBoYXNWYWx1ZSA9IHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3RDb2x1bW5JbmRleCA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGluaXRDb2x1bW5XaXRoSW5kZXggPSAoY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uU2V0dGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB2YWx1ZXNbY29sdW1uSW5kZXhdO1xuXG4gICAgICAgIGlmICghaXNOb3ROaWwoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uID1cbiAgICAgICAgICB0aGlzLmZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXgsIHZhbHVlc1tjb2x1bW5JbmRleF0pIHx8XG4gICAgICAgICAgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IGN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWUsXG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWVcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCBsYXN0Q29sdW1uSW5kZXgpIHtcbiAgICAgICAgICBpbml0Q29sdW1uV2l0aEluZGV4KGNvbHVtbkluZGV4ICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc0xvYWRlZChjb2x1bW5JbmRleCkgfHwgIXRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSkge1xuICAgICAgICBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleCAtIDFdIHx8IHt9O1xuICAgICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4IC0gMSwgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcblxuICAgIGlmIChmaXJzdCAmJiB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEgJiYgIWhhc1ZhbHVlKSB7XG4gICAgICAvLyBTaG91bGQgYWxzbyBub3RpZnkgdGhlIGNvbXBvbmVudCB0aGF0IHZhbHVlIGNoYW5nZXMuIEZpeCAjMzQ4MC5cbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgY2FzY2FkZXIgY29tcG9uZW50IHNvIHRoaXMgc2VydmljZSBjb3VsZCB1c2UgaW5wdXRzLlxuICAgKi9cbiAgd2l0aENvbXBvbmVudChjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5jYXNjYWRlckNvbXBvbmVudCA9IGNhc2NhZGVyQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCBvcHRpb25zLiBSZWJ1aWxkIHNlYXJjaGluZyBvcHRpb25zIGlmIGluIHNlYXJjaGluZyBtb2RlLlxuICAgKi9cbiAgd2l0aE9wdGlvbnMob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFtvcHRpb25zXSA6IFtdO1xuXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuY2FzY2FkZXJDb21wb25lbnQuaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgYSBvcHRpb24gYXMgYWN0aXZhdGVkLlxuICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggT2Ygd2hpY2ggY29sdW1uIHRoaXMgb3B0aW9uIGlzIGluXG4gICAqIEBwYXJhbSBwZXJmb3JtU2VsZWN0IFNlbGVjdFxuICAgKiBAcGFyYW0gbG9hZGluZ0NoaWxkcmVuIFRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgcGVyZm9ybVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLCBsb2FkaW5nQ2hpbGRyZW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XG4gICAgdGhpcy50cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG5cbiAgICBjb25zdCBpc1BhcmVudCA9IGlzUGFyZW50T3B0aW9uKG9wdGlvbik7XG5cbiAgICBpZiAoaXNQYXJlbnQpIHtcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBoYXMgY2hpbGRyZW4uXG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuISwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgc2hvdWxkIHRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XG4gICAgICAvLyBMZWFmIG9wdGlvbi5cbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEFjdHVhbGx5IHBlcmZvcm0gc2VsZWN0aW9uIHRvIG1ha2UgYW4gb3B0aW9ucyBub3Qgb25seSBhY3RpdmF0ZWQgYnV0IGFsc28gc2VsZWN0ZWQuXG4gICAgaWYgKHBlcmZvcm1TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xuICAgIGNvbnN0IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24gPSAobzogTnpDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gY2hhbmdlT24obywgaSkgOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBpbmRleCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW4gLSAxKTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbik7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIHNlbGVjdGVkLCBmaW5pc2hpbmcgdXAgdGhpbmdzLlxuICAgKiBAcGFyYW0gb3B0aW9uXG4gICAqL1xuICBzZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbb3B0aW9uXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXG4gICAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLm5leHQoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgY2FzY2FkZXIgb3B0aW9ucyB0byByZXNldCBgY29sdW1uc2AuXG4gICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBUaGUgc3RyaW5nIHVzZXIgd2FudHMgdG8gc2VhcmNoLlxuICAgKi9cbiAgcHJlcGFyZVNlYXJjaE9wdGlvbnMoc2VhcmNoVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdOyAvLyBTZWFyY2ggcmVzdWx0cyBvbmx5IGhhdmUgb25lIGxheWVyLlxuICAgIGNvbnN0IHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXI6IE56Q2FzY2FkZXJGaWx0ZXIgPSAoaSwgcCkgPT4ge1xuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG8pO1xuICAgICAgICByZXR1cm4gISFsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGkpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd1NlYXJjaCA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpTaG93U2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcbiAgICBjb25zdCBzb3J0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5zb3J0ZXIgPyBzaG93U2VhcmNoLnNvcnRlciA6IG51bGw7XG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcihzZWFyY2hWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICBjb25zdCBvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGNQYXRoLFxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdHMucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4hLmZvckVhY2goc05vZGUgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb2x1bW5zU25hcHNob3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbW11dO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcblxuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcblxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7IC8vIFNlYXJjaCByZXN1bHRzIG1heSBiZSBlbXB0eSwgc28gc2hvdWxkIHJlZHJhdy5cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgc2VhcmNoaW5nIG1vZGUgYnkgVUkuIEl0IGRlYWxzIHdpdGggdGhpbmdzIG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIFVJLlxuICAgKiBAcGFyYW0gdG9TZWFyY2hpbmcgSWYgdGhpcyBjYXNjYWRlciBpcyBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZVxuICAgKi9cbiAgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gdG9TZWFyY2hpbmc7XG5cbiAgICBpZiAodG9TZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2VyIHF1aXQgc2VhcmNoaW5nIG1vZGUgd2l0aG91dCBzZWxlY3RpbmcgYW4gb3B0aW9uLlxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKDApO1xuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dChudWxsKTtcbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKG86IE56Q2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCddIGFzIHN0cmluZztcbiAgfVxuXG4gIGdldE9wdGlvblZhbHVlKG86IE56Q2FzY2FkZXJPcHRpb24pOiBOelNhZmVBbnkge1xuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSddO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBpbnNlcnQgb3B0aW9ucyBpbnRvIGEgY29sdW1uLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGluc2VydFxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggUG9zaXRpb25cbiAgICovXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBhcmVudDogTnpDYXNjYWRlck9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nT3B0aW9ucyA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgaWYgKCFhcnJheXNFcXVhbChleGlzdGluZ09wdGlvbnMsIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcbiAgICAgIHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF0gPSBvcHRpb25zO1xuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFzdFJlc2VydmVJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuc2xpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNoaWxkcmVuIG9mIGFuIG9wdGlvbiBhc3luY2hyb25vdXNseS5cbiAgICovXG4gIGxvYWRDaGlsZHJlbihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24gfCBOelNhZmVBbnksIGNvbHVtbkluZGV4OiBudW1iZXIsIHN1Y2Nlc3M/OiBWb2lkRnVuY3Rpb24sIGZhaWx1cmU/OiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkRm4gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGE7XG5cbiAgICBpZiAobG9hZEZuKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhbnkgb3B0aW9uIGluIGNvbHVtbnMuXG4gICAgICB0aGlzLiRsb2FkaW5nLm5leHQoY29sdW1uSW5kZXggPCAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbG9hZEZuKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgb3B0aW9uIHRoYXQgaGFzIGEgZ2l2ZW4gdmFsdWUgaW4gYSBnaXZlbiBjb2x1bW4uXG4gICAqL1xuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXg6IG51bWJlciwgdmFsdWU6IE56Q2FzY2FkZXJPcHRpb24gfCBOelNhZmVBbnkpOiBOekNhc2NhZGVyT3B0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XG4gICAgICBjb25zdCB2ID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUodmFsdWUpIDogdmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0Q29sdW1uLmZpbmQobyA9PiB2ID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKSE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRW1pdFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XG4gIH1cbn1cbiJdfQ==