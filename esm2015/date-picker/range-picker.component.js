/**
 * @fileoverview added by tsickle
 * Generated from: range-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';
// tslint:disable-next-line:directive-class-suffix
export class NzRangePickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.isRange = true;
        this.datePicker.nzMode = ['date', 'date'];
    }
}
NzRangePickerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker'
            },] }
];
/** @nocollapse */
NzRangePickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
if (false) {
    /** @type {?} */
    NzRangePickerComponent.prototype.datePicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJyYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU1oRSxrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUF1QyxVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBTFEscUJBQXFCLHVCQVFmLFFBQVEsWUFBSSxJQUFJOzs7O0lBQWpCLDRDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotcmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduelJhbmdlUGlja2VyJ1xufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IE56RGF0ZVBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5pc1JhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLmRhdGVQaWNrZXIubnpNb2RlID0gWydkYXRlJywgJ2RhdGUnXTtcbiAgfVxufVxuIl19