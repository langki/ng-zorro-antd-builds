/**
 * @fileoverview added by tsickle
 * Generated from: marks.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var marksArray = changes.marksArray, lowerBound = changes.lowerBound, upperBound = changes.upperBound;
        if (marksArray) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    NzSliderMarksComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    function (_index, mark) {
        return mark.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildMarks = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.max - this.min;
        this.marks = this.marksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var style = _this.getMarkStyles(value, range, config);
            /** @type {?} */
            var label = isConfigObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    NzSliderMarksComponent.prototype.getMarkStyles = /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    function (value, range, config) {
        /** @type {?} */
        var style;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.min) / range) * 100 + "%"
            };
        }
        else {
            style = {
                transform: "translate3d(-50%, 0, 0)",
                left: ((value - this.min) / range) * 100 + "%"
            };
        }
        if (isConfigObject(config) && config.style) {
            style = __assign(__assign({}, style), config.style);
        }
        return style;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                /** @type {?} */
                var value = mark.value;
                /** @type {?} */
                var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= (/** @type {?} */ (_this.upperBound)) && value >= (/** @type {?} */ (_this.lowerBound)));
                mark.active = isActive;
            }));
        }
    };
    NzSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-slider-marks',
                    exportAs: 'nzSliderMarks',
                    template: "\n    <div class=\"ant-slider-mark\">\n      <span\n        class=\"ant-slider-mark-text\"\n        *ngFor=\"let attr of marks; trackBy: trackById\"\n        [class.ant-slider-mark-active]=\"attr.active\"\n        [ngStyle]=\"attr.style!\"\n        [innerHTML]=\"attr.label\"\n      >\n      </span>\n    </div>\n  "
                }] }
    ];
    NzSliderMarksComponent.propDecorators = {
        lowerBound: [{ type: Input }],
        upperBound: [{ type: Input }],
        marksArray: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        vertical: [{ type: Input }],
        included: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "vertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "included", void 0);
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
if (false) {
    /** @type {?} */
    NzSliderMarksComponent.ngAcceptInputType_vertical;
    /** @type {?} */
    NzSliderMarksComponent.ngAcceptInputType_included;
    /** @type {?} */
    NzSliderMarksComponent.prototype.lowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.upperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.min;
    /** @type {?} */
    NzSliderMarksComponent.prototype.max;
    /** @type {?} */
    NzSliderMarksComponent.prototype.vertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype.included;
    /** @type {?} */
    NzSliderMarksComponent.prototype.marks;
}
/**
 * @param {?} config
 * @return {?}
 */
function isConfigObject(config) {
    return typeof config !== 'string';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJtYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQ7SUFBQTtRQXVCVyxlQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxlQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUdsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUMsVUFBSyxHQUFzQixFQUFFLENBQUM7SUFzRWhDLENBQUM7Ozs7O0lBcEVDLDRDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLCtCQUFVLEVBQUUsK0JBQVUsRUFBRSwrQkFBVTtRQUUxQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxJQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTywyQ0FBVTs7OztJQUFsQjtRQUFBLGlCQWlCQzs7WUFoQk8sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDM0IsSUFBQSxrQkFBSyxFQUFFLG9CQUFNLEVBQUUsb0JBQU07O2dCQUN2QixLQUFLLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQzs7Z0JBQ2hELEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFFNUQsT0FBTztnQkFDTCxLQUFLLE9BQUE7Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEtBQUssT0FBQTtnQkFDTCxLQUFLLE9BQUE7Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTyw4Q0FBYTs7Ozs7OztJQUFyQixVQUFzQixLQUFhLEVBQUUsS0FBYSxFQUFFLE1BQWM7O1lBQzVELEtBQUs7UUFFVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxHQUFHO2dCQUNOLFlBQVksRUFBRSxNQUFNO2dCQUNwQixNQUFNLEVBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFHO2FBQ2pELENBQUM7U0FDSDthQUFNO1lBQ0wsS0FBSyxHQUFHO2dCQUNOLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLElBQUksRUFBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQUc7YUFDL0MsQ0FBQztTQUNIO1FBRUQsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQyxLQUFLLHlCQUFRLEtBQUssR0FBSyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU8sa0RBQWlCOzs7O0lBQXpCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJOztvQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7O29CQUNsQixRQUFRLEdBQ1osQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxJQUFJLG1CQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxLQUFLLElBQUksbUJBQUEsS0FBSSxDQUFDLFVBQVUsRUFBQyxDQUFDO2dCQUU1SCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN6QixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBcEdGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsNlRBV1Q7aUJBQ0Y7Ozs2QkFLRSxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7NERBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzs0REFBa0I7SUF3RTVDLDZCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FsRlksc0JBQXNCOzs7SUFDakMsa0RBQWdEOztJQUNoRCxrREFBZ0Q7O0lBRWhELDRDQUEwQzs7SUFDMUMsNENBQTBDOztJQUMxQyw0Q0FBMkM7O0lBQzNDLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0QiwwQ0FBMEM7O0lBQzFDLDBDQUEwQzs7SUFFMUMsdUNBQThCOzs7Ozs7QUF3RWhDLFNBQVMsY0FBYyxDQUFDLE1BQWM7SUFDcEMsT0FBTyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOekRpc3BsYXllZE1hcmssIE56RXh0ZW5kZWRNYXJrLCBOek1hcmssIE56TWFya09iaiB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLW1hcmtzJyxcbiAgZXhwb3J0QXM6ICduelNsaWRlck1hcmtzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci1tYXJrXCI+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImFudC1zbGlkZXItbWFyay10ZXh0XCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGF0dHIgb2YgbWFya3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiXG4gICAgICAgIFtjbGFzcy5hbnQtc2xpZGVyLW1hcmstYWN0aXZlXT1cImF0dHIuYWN0aXZlXCJcbiAgICAgICAgW25nU3R5bGVdPVwiYXR0ci5zdHlsZSFcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImF0dHIubGFiZWxcIlxuICAgICAgPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmVydGljYWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luY2x1ZGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdID0gW107XG4gIEBJbnB1dCgpIG1pbiE6IG51bWJlcjtcbiAgQElucHV0KCkgbWF4ITogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XG5cbiAgbWFya3M6IE56RGlzcGxheWVkTWFya1tdID0gW107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWFya3NBcnJheSwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChtYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcbiAgICB9XG5cbiAgICBpZiAobWFya3NBcnJheSB8fCBsb3dlckJvdW5kIHx8IHVwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IE56RGlzcGxheWVkTWFyayk6IG51bWJlciB7XG4gICAgcmV0dXJuIG1hcmsudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTWFya3MoKTogdm9pZCB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMubWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRNYXJrU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gaXNDb25maWdPYmplY3QoY29uZmlnKSA/IGNvbmZpZy5sYWJlbCA6IGNvbmZpZztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtTdHlsZXModmFsdWU6IG51bWJlciwgcmFuZ2U6IG51bWJlciwgY29uZmlnOiBOek1hcmspOiBOZ1N0eWxlSW50ZXJmYWNlIHtcbiAgICBsZXQgc3R5bGU7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnLFxuICAgICAgICBib3R0b206IGAkeygodmFsdWUgLSB0aGlzLm1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKWAsXG4gICAgICAgIGxlZnQ6IGAkeygodmFsdWUgLSB0aGlzLm1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29uZmlnT2JqZWN0KGNvbmZpZykgJiYgY29uZmlnLnN0eWxlKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFya3MgJiYgdGhpcy5sb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMudXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmsudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAoIXRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMudXBwZXJCb3VuZCkgfHwgKHRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy51cHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLmxvd2VyQm91bmQhKTtcblxuICAgICAgICBtYXJrLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29uZmlnT2JqZWN0KGNvbmZpZzogTnpNYXJrKTogY29uZmlnIGlzIE56TWFya09iaiB7XG4gIHJldHVybiB0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJztcbn1cbiJdfQ==