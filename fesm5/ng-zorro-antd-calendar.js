import { CommonModule } from '@angular/common';
import { Directive, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { LibPackerModule } from 'ng-zorro-antd/date-picker';
import { NzI18nService, DateHelperService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';

/**
 * @fileoverview added by tsickle
 * Generated from: calendar-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDateCellDirective = /** @class */ (function () {
    function NzDateCellDirective() {
    }
    NzDateCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzDateCell]',
                    exportAs: 'nzDateCell'
                },] }
    ];
    return NzDateCellDirective;
}());
var NzMonthCellDirective = /** @class */ (function () {
    function NzMonthCellDirective() {
    }
    NzMonthCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzMonthCell]',
                    exportAs: 'nzMonthCell'
                },] }
    ];
    return NzMonthCellDirective;
}());
var NzDateFullCellDirective = /** @class */ (function () {
    function NzDateFullCellDirective() {
    }
    NzDateFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzDateFullCell]',
                    exportAs: 'nzDateFullCell'
                },] }
    ];
    return NzDateFullCellDirective;
}());
var NzMonthFullCellDirective = /** @class */ (function () {
    function NzMonthFullCellDirective() {
    }
    NzMonthFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzMonthFullCell]',
                    exportAs: 'nzMonthFullCell'
                },] }
    ];
    return NzMonthFullCellDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: calendar-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new CandyDate();
        this.modeChange = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.years = [];
        this.months = [];
    }
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.lang.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.lang.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    NzCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar-header',
                    exportAs: 'nzCalendarHeader',
                    template: "\n    <div class=\"ant-picker-calendar-header\">\n      <nz-select\n        class=\"ant-picker-calendar-year-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeYear\"\n        (ngModelChange)=\"updateYear($event)\"\n      >\n        <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n      </nz-select>\n\n      <nz-select\n        *ngIf=\"mode === 'month'\"\n        class=\"ant-picker-calendar-month-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeMonth\"\n        (ngModelChange)=\"monthChange.emit($event)\"\n      >\n        <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n      </nz-select>\n\n      <nz-radio-group class=\"ant-picker-calendar-mode-switch\" [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n        <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n        <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n      </nz-radio-group>\n    </div>\n  ",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        modeChange: [{ type: Output }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return NzCalendarHeaderComponent;
}());
if (false) {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.dateHelper;
}

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-picker-calendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzDateCell || this.nzDateCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzDateFullCell || this.nzDateFullCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzMonthCell || this.nzMonthCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzMonthFullCell || this.nzMonthFullCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.updateDate(new CandyDate(this.nzValue), false);
        }
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    template: "\n    <nz-calendar-header\n      [fullscreen]=\"nzFullscreen\"\n      [activeDate]=\"activeDate\"\n      [(mode)]=\"nzMode\"\n      (modeChange)=\"onModeChange($event)\"\n      (yearChange)=\"onYearSelect($event)\"\n      (monthChange)=\"onMonthSelect($event)\"\n    >\n    </nz-calendar-header>\n\n    <div class=\"ant-picker-panel\">\n      <div class=\"ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel\">\n        <div class=\"ant-picker-body\">\n          <ng-container *ngIf=\"nzMode === 'month'; then monthModeTable; else yearModeTable\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #monthModeTable>\n      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n      <date-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(dateCell)\"\n        [fullCellRender]=\"$any(dateFullCell)\"\n        [disabledDate]=\"nzDisabledDate\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></date-table>\n    </ng-template>\n\n    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n    <ng-template #yearModeTable>\n      <month-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(monthCell)\"\n        [fullCellRender]=\"$any(monthFullCell)\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></month-table>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-picker-calendar]': 'true',
                        '[class.ant-picker-calendar-full]': 'nzFullscreen',
                        '[class.ant-picker-calendar-mini]': '!nzFullscreen'
                    },
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzModeChange: [{ type: Output }],
        nzPanelChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzValueChange: [{ type: Output }],
        nzDateCell: [{ type: Input }],
        nzDateCellChild: [{ type: ContentChild, args: [NzDateCellDirective, { static: false, read: TemplateRef },] }],
        nzDateFullCell: [{ type: Input }],
        nzDateFullCellChild: [{ type: ContentChild, args: [NzDateFullCellDirective, { static: false, read: TemplateRef },] }],
        nzMonthCell: [{ type: Input }],
        nzMonthCellChild: [{ type: ContentChild, args: [NzMonthCellDirective, { static: false, read: TemplateRef },] }],
        nzMonthFullCell: [{ type: Input }],
        nzMonthFullCellChild: [{ type: ContentChild, args: [NzMonthFullCellDirective, { static: false, read: TemplateRef },] }],
        nzFullscreen: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
if (false) {
    /** @type {?} */
    NzCalendarComponent.ngAcceptInputType_nzFullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValue;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDisabledDate;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective
                    ],
                    exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]
                },] }
    ];
    return NzCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective };
//# sourceMappingURL=ng-zorro-antd-calendar.js.map
