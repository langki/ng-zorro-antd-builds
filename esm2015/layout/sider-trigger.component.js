/**
 * @fileoverview added by tsickle
 * Generated from: sider-trigger.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzSiderTriggerComponent {
    constructor() {
        this.nzCollapsed = false;
        this.nzReverseArrow = false;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.matchBreakPoint = false;
        this.nzCollapsedWidth = null;
        this.siderWidth = null;
        this.nzBreakpoint = null;
        this.isZeroTrigger = false;
        this.isNormalTrigger = false;
    }
    /**
     * @return {?}
     */
    updateTriggerType() {
        this.isZeroTrigger = this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
        this.isNormalTrigger = this.nzCollapsedWidth !== 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateTriggerType();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateTriggerType();
    }
}
NzSiderTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-sider-trigger]',
                exportAs: 'nzSiderTrigger',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger"></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" *ngIf="!nzReverseArrow"></i>
      <i nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" *ngIf="nzReverseArrow"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i nz-icon nzType="bars"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
                    '[style.width]': 'isNormalTrigger ? siderWidth : null',
                    '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
                    '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
                    '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
                }
            }] }
];
NzSiderTriggerComponent.propDecorators = {
    nzCollapsed: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    matchBreakPoint: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    siderWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.matchBreakPoint;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.siderWidth;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.isZeroTrigger;
    /** @type {?} */
    NzSiderTriggerComponent.prototype.isNormalTrigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXItdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xheW91dC8iLCJzb3VyY2VzIjpbInNpZGVyLXRyaWdnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFrQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdDN0gsTUFBTSxPQUFPLHVCQUF1QjtJQTdCcEM7UUE4QlcsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsa0JBQWEsR0FBNkIsSUFBSSxDQUFDO1FBQy9DLGNBQVMsR0FBeUMsU0FBUyxDQUFDO1FBQzVELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFrQixJQUFJLENBQUM7UUFDdkMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsaUJBQVksR0FBMkIsSUFBSSxDQUFDO1FBQ3JELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBVzFCLENBQUM7Ozs7SUFWQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osa0NBQWtDLEVBQUUsaUJBQWlCO29CQUNyRCxlQUFlLEVBQUUscUNBQXFDO29CQUN0RCw2Q0FBNkMsRUFBRSxlQUFlO29CQUM5RCxtREFBbUQsRUFBRSxpQ0FBaUM7b0JBQ3RGLGtEQUFrRCxFQUFFLGtDQUFrQztpQkFDdkY7YUFDRjs7OzBCQUVFLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7OztJQVBOLDhDQUE2Qjs7SUFDN0IsaURBQWdDOztJQUNoQyxnREFBd0Q7O0lBQ3hELDRDQUFxRTs7SUFDckUsa0RBQWlDOztJQUNqQyxtREFBZ0Q7O0lBQ2hELDZDQUEwQzs7SUFDMUMsK0NBQXFEOztJQUNyRCxnREFBc0I7O0lBQ3RCLGtEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJyZWFrcG9pbnRLZXkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc2lkZXItdHJpZ2dlcl0nLFxuICBleHBvcnRBczogJ256U2lkZXJUcmlnZ2VyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1plcm9UcmlnZ2VyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpaZXJvVHJpZ2dlciB8fCBkZWZhdWx0WmVyb1RyaWdnZXJcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc05vcm1hbFRyaWdnZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuelRyaWdnZXIgfHwgZGVmYXVsdFRyaWdnZXJcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRyaWdnZXI+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpDb2xsYXBzZWQgPyAncmlnaHQnIDogJ2xlZnQnXCIgKm5nSWY9XCIhbnpSZXZlcnNlQXJyb3dcIj48L2k+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpDb2xsYXBzZWQgPyAnbGVmdCcgOiAncmlnaHQnXCIgKm5nSWY9XCJuelJldmVyc2VBcnJvd1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFplcm9UcmlnZ2VyPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJiYXJzXCI+PC9pPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItdHJpZ2dlcl0nOiAnaXNOb3JtYWxUcmlnZ2VyJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdpc05vcm1hbFRyaWdnZXIgPyBzaWRlcldpZHRoIDogbnVsbCcsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgtdHJpZ2dlcl0nOiAnaXNaZXJvVHJpZ2dlcicsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgtdHJpZ2dlci1yaWdodF0nOiAnaXNaZXJvVHJpZ2dlciAmJiBuelJldmVyc2VBcnJvdycsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgtdHJpZ2dlci1sZWZ0XSc6ICdpc1plcm9UcmlnZ2VyICYmICFuelJldmVyc2VBcnJvdydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNpZGVyVHJpZ2dlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgbnpDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpSZXZlcnNlQXJyb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpaZXJvVHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZCB8IG51bGwgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG1hdGNoQnJlYWtQb2ludCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2lkZXJXaWR0aDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QnJlYWtwb2ludDogTnpCcmVha3BvaW50S2V5IHwgbnVsbCA9IG51bGw7XG4gIGlzWmVyb1RyaWdnZXIgPSBmYWxzZTtcbiAgaXNOb3JtYWxUcmlnZ2VyID0gZmFsc2U7XG4gIHVwZGF0ZVRyaWdnZXJUeXBlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNaZXJvVHJpZ2dlciA9IHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCAmJiAoKHRoaXMubnpCcmVha3BvaW50ICYmIHRoaXMubWF0Y2hCcmVha1BvaW50KSB8fCAhdGhpcy5uekJyZWFrcG9pbnQpO1xuICAgIHRoaXMuaXNOb3JtYWxUcmlnZ2VyID0gdGhpcy5uekNvbGxhcHNlZFdpZHRoICE9PSAwO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclR5cGUoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUeXBlKCk7XG4gIH1cbn1cbiJdfQ==