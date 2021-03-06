/**
 * @fileoverview added by tsickle
 * Generated from: input-group-slot.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var NzInputGroupSlotComponent = /** @class */ (function () {
    function NzInputGroupSlotComponent() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    NzInputGroupSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-input-group-slot]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <i nz-icon [nzType]=\"icon\" *ngIf=\"icon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"template\">{{ template }}</ng-container>\n  ",
                    host: {
                        '[class.ant-input-group-addon]': "type === 'addon'",
                        '[class.ant-input-prefix]': "type === 'prefix'",
                        '[class.ant-input-suffix]': "type === 'suffix'"
                    }
                }] }
    ];
    NzInputGroupSlotComponent.propDecorators = {
        icon: [{ type: Input }],
        type: [{ type: Input }],
        template: [{ type: Input }]
    };
    return NzInputGroupSlotComponent;
}());
export { NzInputGroupSlotComponent };
if (false) {
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.icon;
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.type;
    /** @type {?} */
    NzInputGroupSlotComponent.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2lucHV0LyIsInNvdXJjZXMiOlsiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUc7SUFBQTtRQWdCVyxTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQXlDLElBQUksQ0FBQztRQUNsRCxhQUFRLEdBQXVDLElBQUksQ0FBQztJQUMvRCxDQUFDOztnQkFuQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGtKQUdUO29CQUNELElBQUksRUFBRTt3QkFDSiwrQkFBK0IsRUFBRSxrQkFBa0I7d0JBQ25ELDBCQUEwQixFQUFFLG1CQUFtQjt3QkFDL0MsMEJBQTBCLEVBQUUsbUJBQW1CO3FCQUNoRDtpQkFDRjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQUNSLGdDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FKWSx5QkFBeUI7OztJQUNwQyx5Q0FBcUM7O0lBQ3JDLHlDQUEyRDs7SUFDM0QsNkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXQtZ3JvdXAtc2xvdF0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIiAqbmdJZj1cImljb25cIj48L2k+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+e3sgdGVtcGxhdGUgfX08L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWFkZG9uXSc6IGB0eXBlID09PSAnYWRkb24nYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1wcmVmaXhdJzogYHR5cGUgPT09ICdwcmVmaXgnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zdWZmaXhdJzogYHR5cGUgPT09ICdzdWZmaXgnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cFNsb3RDb21wb25lbnQge1xuICBASW5wdXQoKSBpY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU6ICdhZGRvbicgfCAncHJlZml4JyB8ICdzdWZmaXgnIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHRlbXBsYXRlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbn1cbiJdfQ==