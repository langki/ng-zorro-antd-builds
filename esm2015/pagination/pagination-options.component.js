/**
 * @fileoverview added by tsickle
 * Generated from: pagination-options.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { toNumber } from 'ng-zorro-antd/core/util';
export class NzPaginationOptionsComponent {
    constructor() {
        this.nzSize = 'default';
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [];
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.listOfPageSizeOption = [];
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        if (this.pageSize !== size) {
            this.pageSizeChange.next(size);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    jumpToPageViaInput($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        /** @type {?} */
        const index = toNumber(target.value, this.pageIndex);
        this.pageIndexChange.next(index);
        target.value = '';
    }
    /**
     * @param {?} _
     * @param {?} option
     * @return {?}
     */
    trackByOption(_, option) {
        return option.value;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { pageSize, pageSizeOptions, locale } = changes;
        if (pageSize || pageSizeOptions || locale) {
            this.listOfPageSizeOption = [...new Set([...this.pageSizeOptions, this.pageSize])].map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    value: item,
                    label: `${item} ${this.locale.items_per_page}`
                };
            }));
        }
    }
}
NzPaginationOptionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-pagination-options]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nz-select
      class="ant-pagination-options-size-changer"
      *ngIf="showSizeChanger"
      [nzDisabled]="disabled"
      [nzSize]="nzSize"
      [ngModel]="pageSize"
      (ngModelChange)="onPageSizeChange($event)"
    >
      <nz-option
        *ngFor="let option of listOfPageSizeOption; trackBy: trackByOption"
        [nzLabel]="option.label"
        [nzValue]="option.value"
      ></nz-option>
    </nz-select>
    <div class="ant-pagination-options-quick-jumper" *ngIf="showQuickJumper">
      {{ locale.jump_to }}
      <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
      {{ locale.page }}
    </div>
  `,
                host: {
                    '[class.ant-pagination-options]': 'true'
                }
            }] }
];
NzPaginationOptionsComponent.propDecorators = {
    nzSize: [{ type: Input }],
    disabled: [{ type: Input }],
    showSizeChanger: [{ type: Input }],
    showQuickJumper: [{ type: Input }],
    locale: [{ type: Input }],
    total: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    pageIndexChange: [{ type: Output }],
    pageSizeChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.disabled;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.showSizeChanger;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.showQuickJumper;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.locale;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.total;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageIndex;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSize;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSizeOptions;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageIndexChange;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSizeChange;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.listOfPageSizeOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24tb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWlDbkQsTUFBTSxPQUFPLDRCQUE0QjtJQTlCekM7UUErQlcsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUNyQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9ELHlCQUFvQixHQUE0QyxFQUFFLENBQUM7SUE4QnJFLENBQUM7Ozs7O0lBNUJDLGdCQUFnQixDQUFDLElBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBYTs7Y0FDeEIsTUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQW9COztjQUMxQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsQ0FBUyxFQUFFLE1BQXdDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUNyRCxJQUFJLFFBQVEsSUFBSSxlQUFlLElBQUksTUFBTSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVGLE9BQU87b0JBQ0wsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2lCQUMvQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2dCQUNELElBQUksRUFBRTtvQkFDSixnQ0FBZ0MsRUFBRSxNQUFNO2lCQUN6QzthQUNGOzs7cUJBRUUsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNOzs7O0lBVlAsOENBQWlEOztJQUNqRCxnREFBMEI7O0lBQzFCLHVEQUFpQzs7SUFDakMsdURBQWlDOztJQUNqQyw4Q0FBNEM7O0lBQzVDLDZDQUFtQjs7SUFDbkIsaURBQXVCOztJQUN2QixnREFBdUI7O0lBQ3ZCLHVEQUF3Qzs7SUFDeEMsdURBQWdFOztJQUNoRSxzREFBK0Q7O0lBQy9ELDREQUFtRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rpdltuei1wYWdpbmF0aW9uLW9wdGlvbnNdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1zZWxlY3RcbiAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tb3B0aW9ucy1zaXplLWNoYW5nZXJcIlxuICAgICAgKm5nSWY9XCJzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJuelNpemVcIlxuICAgICAgW25nTW9kZWxdPVwicGFnZVNpemVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bnotb3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbGlzdE9mUGFnZVNpemVPcHRpb247IHRyYWNrQnk6IHRyYWNrQnlPcHRpb25cIlxuICAgICAgICBbbnpMYWJlbF09XCJvcHRpb24ubGFiZWxcIlxuICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgPjwvbnotb3B0aW9uPlxuICAgIDwvbnotc2VsZWN0PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlclwiICpuZ0lmPVwic2hvd1F1aWNrSnVtcGVyXCI+XG4gICAgICB7eyBsb2NhbGUuanVtcF90byB9fVxuICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChrZXlkb3duLmVudGVyKT1cImp1bXBUb1BhZ2VWaWFJbnB1dCgkZXZlbnQpXCIgLz5cbiAgICAgIHt7IGxvY2FsZS5wYWdlIH19XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLW9wdGlvbnNdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgbGlzdE9mUGFnZVNpemVPcHRpb246IEFycmF5PHsgdmFsdWU6IG51bWJlcjsgbGFiZWw6IHN0cmluZyB9PiA9IFtdO1xuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnZVNpemUgIT09IHNpemUpIHtcbiAgICAgIHRoaXMucGFnZVNpemVDaGFuZ2UubmV4dChzaXplKTtcbiAgICB9XG4gIH1cblxuICBqdW1wVG9QYWdlVmlhSW5wdXQoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBpbmRleCA9IHRvTnVtYmVyKHRhcmdldC52YWx1ZSwgdGhpcy5wYWdlSW5kZXgpO1xuICAgIHRoaXMucGFnZUluZGV4Q2hhbmdlLm5leHQoaW5kZXgpO1xuICAgIHRhcmdldC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgdHJhY2tCeU9wdGlvbihfOiBudW1iZXIsIG9wdGlvbjogeyB2YWx1ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nIH0pOiBudW1iZXIge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgcGFnZVNpemVPcHRpb25zLCBsb2NhbGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHBhZ2VTaXplIHx8IHBhZ2VTaXplT3B0aW9ucyB8fCBsb2NhbGUpIHtcbiAgICAgIHRoaXMubGlzdE9mUGFnZVNpemVPcHRpb24gPSBbLi4ubmV3IFNldChbLi4udGhpcy5wYWdlU2l6ZU9wdGlvbnMsIHRoaXMucGFnZVNpemVdKV0ubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBgJHtpdGVtfSAke3RoaXMubG9jYWxlLml0ZW1zX3Blcl9wYWdlfWBcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19