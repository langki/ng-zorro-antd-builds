/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/sorters.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzTableSortersComponent {
    constructor() {
        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrder = null;
        this.contentTemplate = null;
        this.isUp = false;
        this.isDown = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { sortDirections } = changes;
        if (sortDirections) {
            this.isUp = this.sortDirections.indexOf('ascend') !== -1;
            this.isDown = this.sortDirections.indexOf('descend') !== -1;
        }
    }
}
NzTableSortersComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table-sorters',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        <i nz-icon nzType="caret-up" *ngIf="isUp" class="ant-table-column-sorter-up" [class.active]="sortOrder == 'ascend'"></i>
        <i nz-icon nzType="caret-down" *ngIf="isDown" class="ant-table-column-sorter-down" [class.active]="sortOrder == 'descend'"></i>
      </span>
    </span>
  `,
                host: {
                    '[class.ant-table-column-sorters]': 'true'
                }
            }] }
];
NzTableSortersComponent.propDecorators = {
    sortDirections: [{ type: Input }],
    sortOrder: [{ type: Input }],
    contentTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTableSortersComponent.prototype.sortDirections;
    /** @type {?} */
    NzTableSortersComponent.prototype.sortOrder;
    /** @type {?} */
    NzTableSortersComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTableSortersComponent.prototype.isUp;
    /** @type {?} */
    NzTableSortersComponent.prototype.isDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FkZG9uL3NvcnRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5QyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNCcEksTUFBTSxPQUFPLHVCQUF1QjtJQWxCcEM7UUFtQlcsbUJBQWMsR0FBdUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGNBQVMsR0FBcUIsSUFBSSxDQUFDO1FBQ25DLG9CQUFlLEdBQWtDLElBQUksQ0FBQztRQUMvRCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLEtBQUssQ0FBQztJQVFqQixDQUFDOzs7OztJQVBDLFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU87UUFDbEMsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osa0NBQWtDLEVBQUUsTUFBTTtpQkFDM0M7YUFDRjs7OzZCQUVFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBRk4saURBQTBFOztJQUMxRSw0Q0FBNEM7O0lBQzVDLGtEQUErRDs7SUFDL0QsdUNBQWE7O0lBQ2IseUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelRhYmxlU29ydE9yZGVyIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJsZS1zb3J0ZXJzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuPjxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyXCIgW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydGVyLWZ1bGxdPVwiaXNEb3duICYmIGlzVXBcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItaW5uZXJcIj5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC11cFwiICpuZ0lmPVwiaXNVcFwiIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXBcIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRPcmRlciA9PSAnYXNjZW5kJ1wiPjwvaT5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC1kb3duXCIgKm5nSWY9XCJpc0Rvd25cIiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd25cIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRPcmRlciA9PSAnZGVzY2VuZCdcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLXNvcnRlcnNdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZVNvcnRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzb3J0RGlyZWN0aW9uczogTnpUYWJsZVNvcnRPcmRlcltdID0gWydhc2NlbmQnLCAnZGVzY2VuZCcsIG51bGxdO1xuICBASW5wdXQoKSBzb3J0T3JkZXI6IE56VGFibGVTb3J0T3JkZXIgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgaXNVcCA9IGZhbHNlO1xuICBpc0Rvd24gPSBmYWxzZTtcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgc29ydERpcmVjdGlvbnMgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHNvcnREaXJlY3Rpb25zKSB7XG4gICAgICB0aGlzLmlzVXAgPSB0aGlzLnNvcnREaXJlY3Rpb25zLmluZGV4T2YoJ2FzY2VuZCcpICE9PSAtMTtcbiAgICAgIHRoaXMuaXNEb3duID0gdGhpcy5zb3J0RGlyZWN0aW9ucy5pbmRleE9mKCdkZXNjZW5kJykgIT09IC0xO1xuICAgIH1cbiAgfVxufVxuIl19