/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzTableContentComponent {
    constructor() {
        this.tableLayout = 'auto';
        this.theadTemplate = null;
        this.contentTemplate = null;
        this.listOfColWidth = [];
        this.scrollX = null;
    }
}
NzTableContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'table[nz-table-content]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <col [style.width]="width" [style.minWidth]="width" *ngFor="let width of listOfColWidth" />
    <thead class="ant-table-thead" *ngIf="theadTemplate">
      <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
    </thead>
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
  `,
                host: {
                    '[style.table-layout]': 'tableLayout',
                    '[class.ant-table-fixed]': 'scrollX',
                    '[style.width]': 'scrollX',
                    '[style.min-width]': `scrollX ? '100%': null`
                }
            }] }
];
NzTableContentComponent.propDecorators = {
    tableLayout: [{ type: Input }],
    theadTemplate: [{ type: Input }],
    contentTemplate: [{ type: Input }],
    listOfColWidth: [{ type: Input }],
    scrollX: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTableContentComponent.prototype.tableLayout;
    /** @type {?} */
    NzTableContentComponent.prototype.theadTemplate;
    /** @type {?} */
    NzTableContentComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTableContentComponent.prototype.listOfColWidth;
    /** @type {?} */
    NzTableContentComponent.prototype.scrollX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL3RhYmxlL3RhYmxlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUIxRyxNQUFNLE9BQU8sdUJBQXVCO0lBbkJwQztRQW9CVyxnQkFBVyxHQUFrQixNQUFNLENBQUM7UUFDcEMsa0JBQWEsR0FBa0MsSUFBSSxDQUFDO1FBQ3BELG9CQUFlLEdBQWtDLElBQUksQ0FBQztRQUN0RCxtQkFBYyxHQUF5QixFQUFFLENBQUM7UUFDMUMsWUFBTyxHQUFrQixJQUFJLENBQUM7SUFDekMsQ0FBQzs7O1lBekJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2dCQUNELElBQUksRUFBRTtvQkFDSixzQkFBc0IsRUFBRSxhQUFhO29CQUNyQyx5QkFBeUIsRUFBRSxTQUFTO29CQUNwQyxlQUFlLEVBQUUsU0FBUztvQkFDMUIsbUJBQW1CLEVBQUUsd0JBQXdCO2lCQUM5QzthQUNGOzs7MEJBRUUsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBSk4sOENBQTZDOztJQUM3QyxnREFBNkQ7O0lBQzdELGtEQUErRDs7SUFDL0QsaURBQW1EOztJQUNuRCwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUYWJsZUxheW91dCB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGVbbnotdGFibGUtY29udGVudF0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y29sIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5taW5XaWR0aF09XCJ3aWR0aFwiICpuZ0Zvcj1cImxldCB3aWR0aCBvZiBsaXN0T2ZDb2xXaWR0aFwiIC8+XG4gICAgPHRoZWFkIGNsYXNzPVwiYW50LXRhYmxlLXRoZWFkXCIgKm5nSWY9XCJ0aGVhZFRlbXBsYXRlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGhlYWRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC90aGVhZD5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnRhYmxlLWxheW91dF0nOiAndGFibGVMYXlvdXQnLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLWZpeGVkXSc6ICdzY3JvbGxYJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdzY3JvbGxYJyxcbiAgICAnW3N0eWxlLm1pbi13aWR0aF0nOiBgc2Nyb2xsWCA/ICcxMDAlJzogbnVsbGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYmxlQ29udGVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRhYmxlTGF5b3V0OiBOelRhYmxlTGF5b3V0ID0gJ2F1dG8nO1xuICBASW5wdXQoKSB0aGVhZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBsaXN0T2ZDb2xXaWR0aDogQXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgQElucHV0KCkgc2Nyb2xsWDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG59XG4iXX0=