/**
 * @fileoverview added by tsickle
 * Generated from: popover.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent, NzPopoverDirective } from './popover';
var NzPopoverModule = /** @class */ (function () {
    function NzPopoverModule() {
    }
    NzPopoverModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzPopoverDirective, NzPopoverComponent],
                    entryComponents: [NzPopoverComponent],
                    declarations: [NzPopoverDirective, NzPopoverComponent],
                    imports: [CommonModule, OverlayModule, NzOutletModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
                },] }
    ];
    return NzPopoverModule;
}());
export { NzPopoverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5FO0lBQUE7SUFNOEIsQ0FBQzs7Z0JBTjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDakQsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO2lCQUM5Rzs7SUFDNkIsc0JBQUM7Q0FBQSxBQU4vQixJQU0rQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcblxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50LCBOelBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTnpQb3BvdmVyRGlyZWN0aXZlLCBOelBvcG92ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOelBvcG92ZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtOelBvcG92ZXJEaXJlY3RpdmUsIE56UG9wb3ZlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56T3V0bGV0TW9kdWxlLCBOek92ZXJsYXlNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyTW9kdWxlIHt9XG4iXX0=