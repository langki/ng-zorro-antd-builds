/**
 * @fileoverview added by tsickle
 * Generated from: time-holder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { isNil, isNotNil } from 'ng-zorro-antd/core/util';
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
        this.selected12Hours = undefined;
        this._use12Hours = false;
        this._changes = new Subject();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setMinutes = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).minutes && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setMinutes(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setHours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).hours && !disabled) {
            (/** @type {?} */ (this)).initValue();
            if ((/** @type {?} */ (this))._use12Hours) {
                if ((/** @type {?} */ (this)).selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this)).value.setHours(((/** @type {?} */ (value))) + 12);
                }
                else if ((/** @type {?} */ (this)).selected12Hours === 'AM' && value === 12) {
                    (/** @type {?} */ (this)).value.setHours(0);
                }
                else {
                    (/** @type {?} */ (this)).value.setHours(value);
                }
            }
            else {
                (/** @type {?} */ (this)).value.setHours(value);
            }
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setSeconds = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (value !== (/** @type {?} */ (this)).seconds && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setSeconds(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setUse12Hours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    TimeHolder.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        if (value !== (/** @type {?} */ (this)).value) {
            (/** @type {?} */ (this))._value = value;
            if (isNotNil((/** @type {?} */ (this)).value)) {
                if ((/** @type {?} */ (this))._use12Hours && isNotNil((/** @type {?} */ (this)).hours)) {
                    (/** @type {?} */ (this)).selected12Hours = (/** @type {?} */ (this)).hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                (/** @type {?} */ (this))._clear();
            }
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.initValue = /**
     * @return {?}
     */
    function () {
        if (isNil(this.value)) {
            this.setValue(new Date(), this._use12Hours);
        }
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = undefined;
        this.selected12Hours = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (isNotNil(this.hours)) {
                (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (isNotNil(this.minutes)) {
                (/** @type {?} */ (this.value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (isNotNil(this.seconds)) {
                (/** @type {?} */ (this.value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this.hours)) < 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) + 12);
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this.hours)) >= 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) - 12);
                }
            }
        }
        this.changed();
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this.value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: /**
         * \@description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         * @return {?}
         */
        function () {
            return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour((/** @type {?} */ (this.hours))) : this.hours;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.setSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this.selected12Hours) {
            this.selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    };
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value || this._defaultOpenValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "hours", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._defaultOpenValue = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.calculateViewHour = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selected12Hours = this.selected12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    };
    return TimeHolder;
}());
export { TimeHolder };
if (false) {
    /** @type {?} */
    TimeHolder.prototype.selected12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._use12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFEO0lBZ0tFO1FBL0pBLG9CQUFlLEdBQXVCLFNBQVMsQ0FBQztRQUV4QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQTJKeEIsQ0FBQzs7Ozs7Ozs7SUF6SmhCLCtCQUFVOzs7Ozs7O0lBQVYsVUFBVyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxLQUFLLEtBQUssbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJQUVELDZCQUFROzs7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsUUFBaUI7UUFDdkMsSUFBSSxLQUFLLEtBQUssbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLGVB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Ozs7O0lBQ3JDLHVDQUFpQzs7Ozs7SUFDakMsOEJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lSG9sZGVyIHtcbiAgc2VsZWN0ZWQxMkhvdXJzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF91c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWUhOiBEYXRlO1xuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8RGF0ZT4oKTtcblxuICBzZXRNaW51dGVzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLm1pbnV0ZXMgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgICAgdGhpcy52YWx1ZS5zZXRNaW51dGVzKHZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SG91cnModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaG91cnMgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlICE9PSAxMikge1xuICAgICAgICAgIHRoaXMudmFsdWUuc2V0SG91cnMoKHZhbHVlIGFzIG51bWJlcikgKyAxMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdmFsdWUgPT09IDEyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZS5zZXRIb3VycygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnNldEhvdXJzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXRIb3Vycyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuc2Vjb25kcyAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgICB0aGlzLnZhbHVlLnNldFNlY29uZHModmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRVc2UxMkhvdXJzKHZhbHVlOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fdXNlMTJIb3VycyA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgdXNlMTJIb3Vycz86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoaXNOb3ROaWwodXNlMTJIb3VycykpIHtcbiAgICAgIHRoaXMuX3VzZTEySG91cnMgPSB1c2UxMkhvdXJzIGFzIGJvb2xlYW47XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpZiAodGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLmhvdXJzKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5ob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW5pdFZhbHVlKCk6IHZvaWQge1xuICAgIGlmIChpc05pbCh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXcgRGF0ZSgpLCB0aGlzLl91c2UxMkhvdXJzKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShpc05vdE5pbCh0aGlzLmhvdXJzKSB8fCBpc05vdE5pbCh0aGlzLm1pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuc2Vjb25kcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZDEySG91cnMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuaG91cnMpKSB7XG4gICAgICAgIHRoaXMudmFsdWUhLnNldEhvdXJzKHRoaXMuaG91cnMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMubWludXRlcykpIHtcbiAgICAgICAgdGhpcy52YWx1ZSEuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuc2Vjb25kcykpIHtcbiAgICAgICAgdGhpcy52YWx1ZSEuc2V0U2Vjb25kcyh0aGlzLnNlY29uZHMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHRoaXMuaG91cnMhIDwgMTIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISArIDEyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdGhpcy5ob3VycyEgPj0gMTIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISAtIDEyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuXG4gIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBVSSB2aWV3IGhvdXJzXG4gICAqIEdldCB2aWV3SG91cnMgd2hpY2ggaXMgc2VsZWN0ZWQgaW4gYHRpbWUtcGlja2VyLXBhbmVsYCBhbmQgaXRzIHJhbmdlIGlzIFsxMiwgMSwgMiwgLi4uLCAxMV1cbiAgICovXG4gIGdldCB2aWV3SG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLmhvdXJzKSA/IHRoaXMuY2FsY3VsYXRlVmlld0hvdXIodGhpcy5ob3VycyEpIDogdGhpcy5ob3VycztcbiAgfVxuXG4gIHNldFNlbGVjdGVkMTJIb3Vycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIS50b1VwcGVyQ2FzZSgpICE9PSB0aGlzLnNlbGVjdGVkMTJIb3Vycykge1xuICAgICAgdGhpcy5zZWxlY3RlZDEySG91cnMgPSB2YWx1ZSEudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSB8fCB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xuICB9XG5cbiAgZ2V0IGhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LmdldEhvdXJzKCk7XG4gIH1cblxuICBnZXQgbWludXRlcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy5nZXRNaW51dGVzKCk7XG4gIH1cblxuICBnZXQgc2Vjb25kcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy5nZXRTZWNvbmRzKCk7XG4gIH1cblxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVmlld0hvdXIodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5zZWxlY3RlZDEySG91cnM7XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSA+IDEyKSB7XG4gICAgICByZXR1cm4gdmFsdWUgLSAxMjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==