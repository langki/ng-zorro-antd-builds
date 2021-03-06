/**
 * @fileoverview added by tsickle
 * Generated from: list-item-meta.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzListItemMetaDescriptionComponent as DescriptionComponent, NzListItemMetaTitleComponent as TitleComponent } from './list-item-meta-cell';
var NzListItemMetaComponent = /** @class */ (function () {
    function NzListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzListItemMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta, [nz-list-item-meta]',
                    exportAs: 'nzListItemMeta',
                    template: "\n    <!--Old API Start-->\n    <nz-list-item-meta-avatar *ngIf=\"avatarStr\" [nzSrc]=\"avatarStr\"></nz-list-item-meta-avatar>\n    <nz-list-item-meta-avatar *ngIf=\"avatarTpl\">\n      <ng-container [ngTemplateOutlet]=\"avatarTpl\"></ng-container>\n    </nz-list-item-meta-avatar>\n    <!--Old API End-->\n\n    <ng-content select=\"nz-list-item-meta-avatar\"></ng-content>\n\n    <div *ngIf=\"nzTitle || nzDescription || descriptionComponent || titleComponent\" class=\"ant-list-item-meta-content\">\n      <!--Old API Start-->\n      <nz-list-item-meta-title *ngIf=\"nzTitle && !titleComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </nz-list-item-meta-title>\n      <nz-list-item-meta-description *ngIf=\"nzDescription && !descriptionComponent\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </nz-list-item-meta-description>\n      <!--Old API End-->\n\n      <ng-content select=\"nz-list-item-meta-title\"></ng-content>\n      <ng-content select=\"nz-list-item-meta-description\"></ng-content>\n    </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzListItemMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzListItemMetaComponent.propDecorators = {
        nzAvatar: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        descriptionComponent: [{ type: ContentChild, args: [DescriptionComponent,] }],
        titleComponent: [{ type: ContentChild, args: [TitleComponent,] }]
    };
    return NzListItemMetaComponent;
}());
export { NzListItemMetaComponent };
if (false) {
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzListItemMetaComponent.prototype.descriptionComponent;
    /** @type {?} */
    NzListItemMetaComponent.prototype.titleComponent;
    /** @type {?} */
    NzListItemMetaComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzListItemMetaComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9saXN0LyIsInNvdXJjZXMiOlsibGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxrQ0FBa0MsSUFBSSxvQkFBb0IsRUFDMUQsNEJBQTRCLElBQUksY0FBYyxFQUMvQyxNQUFNLHVCQUF1QixDQUFDO0FBRS9CO0lBbURFLGlDQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbkJ0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBb0JiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBbEJELHNCQUNJLDZDQUFROzs7OztRQURaLFVBQ2EsS0FBaUM7WUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsa25DQXVCVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXpDQyxVQUFVO2dCQUVWLFNBQVM7OzsyQkE0Q1IsS0FBSzswQkFVTCxLQUFLO2dDQUVMLEtBQUs7dUNBRUwsWUFBWSxTQUFDLG9CQUFvQjtpQ0FDakMsWUFBWSxTQUFDLGNBQWM7O0lBSTlCLDhCQUFDO0NBQUEsQUF0REQsSUFzREM7U0F2QlksdUJBQXVCOzs7SUFDbEMsNENBQWU7O0lBQ2YsNENBQThCOztJQVk5QiwwQ0FBOEM7O0lBRTlDLGdEQUFvRDs7SUFFcEQsdURBQWdGOztJQUNoRixpREFBOEQ7O0lBQ2xELDZDQUE2Qjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE56TGlzdEl0ZW1NZXRhRGVzY3JpcHRpb25Db21wb25lbnQgYXMgRGVzY3JpcHRpb25Db21wb25lbnQsXG4gIE56TGlzdEl0ZW1NZXRhVGl0bGVDb21wb25lbnQgYXMgVGl0bGVDb21wb25lbnRcbn0gZnJvbSAnLi9saXN0LWl0ZW0tbWV0YS1jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1pdGVtLW1ldGEsIFtuei1saXN0LWl0ZW0tbWV0YV0nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1NZXRhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tT2xkIEFQSSBTdGFydC0tPlxuICAgIDxuei1saXN0LWl0ZW0tbWV0YS1hdmF0YXIgKm5nSWY9XCJhdmF0YXJTdHJcIiBbbnpTcmNdPVwiYXZhdGFyU3RyXCI+PC9uei1saXN0LWl0ZW0tbWV0YS1hdmF0YXI+XG4gICAgPG56LWxpc3QtaXRlbS1tZXRhLWF2YXRhciAqbmdJZj1cImF2YXRhclRwbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJhdmF0YXJUcGxcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L256LWxpc3QtaXRlbS1tZXRhLWF2YXRhcj5cbiAgICA8IS0tT2xkIEFQSSBFbmQtLT5cblxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWxpc3QtaXRlbS1tZXRhLWF2YXRhclwiPjwvbmctY29udGVudD5cblxuICAgIDxkaXYgKm5nSWY9XCJuelRpdGxlIHx8IG56RGVzY3JpcHRpb24gfHwgZGVzY3JpcHRpb25Db21wb25lbnQgfHwgdGl0bGVDb21wb25lbnRcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1jb250ZW50XCI+XG4gICAgICA8IS0tT2xkIEFQSSBTdGFydC0tPlxuICAgICAgPG56LWxpc3QtaXRlbS1tZXRhLXRpdGxlICpuZ0lmPVwibnpUaXRsZSAmJiAhdGl0bGVDb21wb25lbnRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L256LWxpc3QtaXRlbS1tZXRhLXRpdGxlPlxuICAgICAgPG56LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uICpuZ0lmPVwibnpEZXNjcmlwdGlvbiAmJiAhZGVzY3JpcHRpb25Db21wb25lbnRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RGVzY3JpcHRpb25cIj57eyBuekRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L256LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uPlxuICAgICAgPCEtLU9sZCBBUEkgRW5kLS0+XG5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB7XG4gIGF2YXRhclN0ciA9ICcnO1xuICBhdmF0YXJUcGw/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gJyc7XG4gICAgICB0aGlzLmF2YXRhclRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF2YXRhclN0ciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIG56VGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQENvbnRlbnRDaGlsZChEZXNjcmlwdGlvbkNvbXBvbmVudCkgZGVzY3JpcHRpb25Db21wb25lbnQ/OiBEZXNjcmlwdGlvbkNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChUaXRsZUNvbXBvbmVudCkgdGl0bGVDb21wb25lbnQ/OiBUaXRsZUNvbXBvbmVudDtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbS1tZXRhJyk7XG4gIH1cbn1cbiJdfQ==