/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/filter-trigger.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
var NzFilterTriggerComponent = /** @class */ (function () {
    function NzFilterTriggerComponent(cdr) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzVisible = false;
        this.nzVisibleChange = new EventEmitter();
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    NzFilterTriggerComponent.prototype.onVisibleChange = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.nzVisible = visible;
        this.nzVisibleChange.next(visible);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzFilterTriggerComponent.prototype.onFilterClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    NzFilterTriggerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzFilterTriggerComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.nzVisible = true;
        this.cdr.markForCheck();
    };
    NzFilterTriggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-filter-trigger',
                    exportAs: "nzFilterTrigger",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <span\n      nz-dropdown\n      class=\"ant-table-filter-trigger\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      [nzClickHide]=\"false\"\n      [nzDropdownMenu]=\"nzDropdownMenu\"\n      [class.active]=\"nzActive\"\n      [class.ant-table-filter-open]=\"nzVisible\"\n      [nzVisible]=\"nzVisible\"\n      (nzVisibleChange)=\"onVisibleChange($event)\"\n      (click)=\"onFilterClick($event)\"\n    >\n      <ng-content></ng-content>\n    </span>\n  ",
                    host: {
                        '[class.ant-table-filter-trigger-container]': 'true',
                        '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
                    }
                }] }
    ];
    /** @nocollapse */
    NzFilterTriggerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzFilterTriggerComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzDropdownMenu: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    return NzFilterTriggerComponent;
}());
export { NzFilterTriggerComponent };
if (false) {
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzActive;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzDropdownMenu;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzVisible;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @private
     */
    NzFilterTriggerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXRyaWdnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hZGRvbi9maWx0ZXItdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRTtJQWdERSxrQ0FBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNSLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWdCcEIsQ0FBQzs7Ozs7SUFmOUMsa0RBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELGdEQUFhOzs7O0lBQWIsVUFBYyxNQUFrQjtRQUM5QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxnZUFnQlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDRDQUE0QyxFQUFFLE1BQU07d0JBQ3BELGlEQUFpRCxFQUFFLFdBQVc7cUJBQy9EO2lCQUNGOzs7O2dCQTlCaUMsaUJBQWlCOzs7MkJBZ0NoRCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxNQUFNOztJQWlCVCwrQkFBQztDQUFBLEFBakRELElBaURDO1NBckJZLHdCQUF3Qjs7O0lBQ25DLDRDQUEwQjs7SUFDMUIsa0RBQWtEOztJQUNsRCw2Q0FBMkI7O0lBQzNCLG1EQUFpRTs7Ozs7SUFnQnJELHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1maWx0ZXItdHJpZ2dlcicsXG4gIGV4cG9ydEFzOiBgbnpGaWx0ZXJUcmlnZ2VyYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBuei1kcm9wZG93blxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIlxuICAgICAgW256RHJvcGRvd25NZW51XT1cIm56RHJvcGRvd25NZW51XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwibnpBY3RpdmVcIlxuICAgICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItb3Blbl09XCJuelZpc2libGVcIlxuICAgICAgW256VmlzaWJsZV09XCJuelZpc2libGVcIlxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoY2xpY2spPVwib25GaWx0ZXJDbGljaygkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXItb3Blbl0nOiAnbnpWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyVHJpZ2dlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51ITogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBvblZpc2libGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KHZpc2libGUpO1xuICB9XG4gIG9uRmlsdGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG4iXX0=