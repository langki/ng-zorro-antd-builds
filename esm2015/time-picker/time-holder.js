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
export class TimeHolder {
    constructor() {
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
    setMinutes(value, disabled) {
        if (value !== (/** @type {?} */ (this)).minutes && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setMinutes(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setHours(value, disabled) {
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
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setSeconds(value, disabled) {
        if (value !== (/** @type {?} */ (this)).seconds && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setSeconds(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setUse12Hours(value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    setValue(value, use12Hours) {
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
    }
    /**
     * @return {?}
     */
    initValue() {
        if (isNil(this.value)) {
            this.setValue(new Date(), this._use12Hours);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        this._value = undefined;
        this.selected12Hours = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    update() {
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
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this.value);
    }
    /**
     * \@description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     * @return {?}
     */
    get viewHours() {
        return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour((/** @type {?} */ (this.hours))) : this.hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelected12Hours(value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this.selected12Hours) {
            this.selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value || this._defaultOpenValue;
    }
    /**
     * @return {?}
     */
    get hours() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
    }
    /**
     * @return {?}
     */
    get minutes() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
    }
    /**
     * @return {?}
     */
    get seconds() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setDefaultOpenValue(value) {
        (/** @type {?} */ (this))._defaultOpenValue = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateViewHour(value) {
        /** @type {?} */
        const selected12Hours = this.selected12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE1BQU0sT0FBTyxVQUFVO0lBZ0tyQjtRQS9KQSxvQkFBZSxHQUF1QixTQUFTLENBQUM7UUFFeEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUEySnhCLENBQUM7Ozs7Ozs7O0lBekpoQixVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksS0FBSyxLQUFLLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3ZDLElBQUksS0FBSyxLQUFLLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBQ2pELG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBQSxLQUFLLEVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QztxQkFBTSxJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFDeEQsbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtpQkFBTTtnQkFDTCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxLQUFLLEtBQUssbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLG1CQUFBLElBQUksRUFBQSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDMUIsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUF1QixFQUFFLFVBQW9CO1FBQ3BELElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxtQkFBQSxVQUFVLEVBQVcsQ0FBQztTQUMxQztRQUNELElBQUksS0FBSyxLQUFLLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssRUFBRTtZQUN4QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksUUFBUSxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVDLG1CQUFBLElBQUksRUFBQSxDQUFDLGVBQWUsR0FBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDdkQ7YUFDRjtpQkFBTTtnQkFDTCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7UUFFRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3JELG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3RELG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQU9ELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckcsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUF5QjtRQUMxQyxJQUFJLG1CQUFBLEtBQUssRUFBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxtQkFBQSxLQUFLLEVBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7O1FBQ1AsYUFBTyxJQUFJLENBQUMsS0FBSywwQ0FBRSxRQUFRLEdBQUc7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksT0FBTzs7UUFDVCxhQUFPLElBQUksQ0FBQyxLQUFLLDBDQUFFLFVBQVUsR0FBRztJQUNsQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPOztRQUNULGFBQU8sSUFBSSxDQUFDLEtBQUssMENBQUUsVUFBVSxHQUFHO0lBQ2xDLENBQUM7Ozs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFXO1FBQzdCLG1CQUFBLElBQUksRUFBQSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBSU8saUJBQWlCLENBQUMsS0FBYTs7Y0FDL0IsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQzVDLElBQUksZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjs7O0lBM0tDLHFDQUFnRDs7Ozs7SUFDaEQsNEJBQWlDOzs7OztJQUNqQyxpQ0FBcUM7Ozs7O0lBQ3JDLHVDQUFpQzs7Ozs7SUFDakMsOEJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lSG9sZGVyIHtcbiAgc2VsZWN0ZWQxMkhvdXJzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF91c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWUhOiBEYXRlO1xuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8RGF0ZT4oKTtcblxuICBzZXRNaW51dGVzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLm1pbnV0ZXMgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgICAgdGhpcy52YWx1ZS5zZXRNaW51dGVzKHZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SG91cnModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaG91cnMgJiYgIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlICE9PSAxMikge1xuICAgICAgICAgIHRoaXMudmFsdWUuc2V0SG91cnMoKHZhbHVlIGFzIG51bWJlcikgKyAxMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdmFsdWUgPT09IDEyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZS5zZXRIb3VycygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlLnNldEhvdXJzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXRIb3Vycyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuc2Vjb25kcyAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgICB0aGlzLnZhbHVlLnNldFNlY29uZHModmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRVc2UxMkhvdXJzKHZhbHVlOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fdXNlMTJIb3VycyA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgdXNlMTJIb3Vycz86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoaXNOb3ROaWwodXNlMTJIb3VycykpIHtcbiAgICAgIHRoaXMuX3VzZTEySG91cnMgPSB1c2UxMkhvdXJzIGFzIGJvb2xlYW47XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpZiAodGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLmhvdXJzKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5ob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW5pdFZhbHVlKCk6IHZvaWQge1xuICAgIGlmIChpc05pbCh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXcgRGF0ZSgpLCB0aGlzLl91c2UxMkhvdXJzKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShpc05vdE5pbCh0aGlzLmhvdXJzKSB8fCBpc05vdE5pbCh0aGlzLm1pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuc2Vjb25kcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZDEySG91cnMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuaG91cnMpKSB7XG4gICAgICAgIHRoaXMudmFsdWUhLnNldEhvdXJzKHRoaXMuaG91cnMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMubWludXRlcykpIHtcbiAgICAgICAgdGhpcy52YWx1ZSEuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuc2Vjb25kcykpIHtcbiAgICAgICAgdGhpcy52YWx1ZSEuc2V0U2Vjb25kcyh0aGlzLnNlY29uZHMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHRoaXMuaG91cnMhIDwgMTIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISArIDEyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdGhpcy5ob3VycyEgPj0gMTIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISAtIDEyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuXG4gIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBVSSB2aWV3IGhvdXJzXG4gICAqIEdldCB2aWV3SG91cnMgd2hpY2ggaXMgc2VsZWN0ZWQgaW4gYHRpbWUtcGlja2VyLXBhbmVsYCBhbmQgaXRzIHJhbmdlIGlzIFsxMiwgMSwgMiwgLi4uLCAxMV1cbiAgICovXG4gIGdldCB2aWV3SG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLmhvdXJzKSA/IHRoaXMuY2FsY3VsYXRlVmlld0hvdXIodGhpcy5ob3VycyEpIDogdGhpcy5ob3VycztcbiAgfVxuXG4gIHNldFNlbGVjdGVkMTJIb3Vycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIS50b1VwcGVyQ2FzZSgpICE9PSB0aGlzLnNlbGVjdGVkMTJIb3Vycykge1xuICAgICAgdGhpcy5zZWxlY3RlZDEySG91cnMgPSB2YWx1ZSEudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSB8fCB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xuICB9XG5cbiAgZ2V0IGhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LmdldEhvdXJzKCk7XG4gIH1cblxuICBnZXQgbWludXRlcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy5nZXRNaW51dGVzKCk7XG4gIH1cblxuICBnZXQgc2Vjb25kcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy5nZXRTZWNvbmRzKCk7XG4gIH1cblxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVmlld0hvdXIodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5zZWxlY3RlZDEySG91cnM7XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSA+IDEyKSB7XG4gICAgICByZXR1cm4gdmFsdWUgLSAxMjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==