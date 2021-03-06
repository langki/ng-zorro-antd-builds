import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth';
import isLastDayOfMonth from 'date-fns/isLastDayOfMonth';
import isSameDay from 'date-fns/isSameDay';
import isSameHour from 'date-fns/isSameHour';
import isSameMinute from 'date-fns/isSameMinute';
import isSameMonth from 'date-fns/isSameMonth';
import isSameSecond from 'date-fns/isSameSecond';
import isSameYear from 'date-fns/isSameYear';
import isToday from 'date-fns/isToday';
import isValid from 'date-fns/isValid';
import setDay from 'date-fns/setDay';
import setMonth from 'date-fns/setMonth';
import setYear from 'date-fns/setYear';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import { warn } from 'ng-zorro-antd/core/logger';

/**
 * @fileoverview added by tsickle
 * Generated from: candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rangeValue
 * @return {?}
 */
function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        const [start, end] = rangeValue;
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeRangeValue(value) {
    const [start, end] = value || [];
    /** @type {?} */
    const newStart = start || new CandyDate();
    /** @type {?} */
    const newEnd = (end === null || end === void 0 ? void 0 : end.isSameMonth(newStart)) ? end.addMonths(1) : end || newStart.addMonths(1);
    return [newStart, newEnd];
}
/**
 * @param {?} value
 * @return {?}
 */
function cloneDate(value) {
    if (Array.isArray(value)) {
        return value.map((/**
         * @param {?} v
         * @return {?}
         */
        v => (v instanceof CandyDate ? v.clone() : null)));
    }
    else {
        return value instanceof CandyDate ? value.clone() : null;
    }
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    calendarStart(options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        return new CandyDate(setYear(this.nativeDate, year));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    isSame(date, grain = 'day') {
        /** @type {?} */
        let fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        /** @type {?} */
        let fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return isToday(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isValid(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isFirstDayOfMonth() {
        return isFirstDayOfMonth(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isLastDayOfMonth() {
        return isLastDayOfMonth(this.nativeDate);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
const timeUnits = [
    ['Y', 1000 * 60 * 60 * 24 * 365],
    ['M', 1000 * 60 * 60 * 24 * 30],
    ['D', 1000 * 60 * 60 * 24],
    ['H', 1000 * 60 * 60],
    ['m', 1000 * 60],
    ['s', 1000],
    ['S', 1] // million seconds
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CandyDate, cloneDate, normalizeRangeValue, sortRangeValue, timeUnits };
//# sourceMappingURL=ng-zorro-antd-core-time.js.map
