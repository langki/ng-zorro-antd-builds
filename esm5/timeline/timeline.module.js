/**
 * @fileoverview added by tsickle
 * Generated from: timeline.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineItemComponent } from './timeline-item.component';
import { NzTimelineComponent } from './timeline.component';
var NzTimelineModule = /** @class */ (function () {
    function NzTimelineModule() {
    }
    NzTimelineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTimelineItemComponent, NzTimelineComponent],
                    exports: [NzTimelineItemComponent, NzTimelineComponent],
                    imports: [CommonModule, PlatformModule, NzIconModule, NzOutletModule]
                },] }
    ];
    return NzTimelineModule;
}());
export { NzTimelineModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbInRpbWVsaW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRDtJQUFBO0lBSytCLENBQUM7O2dCQUwvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUM7b0JBQzVELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7aUJBQ3RFOztJQUM4Qix1QkFBQztDQUFBLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTnpUaW1lbGluZUl0ZW1Db21wb25lbnQsIE56VGltZWxpbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpUaW1lbGluZUl0ZW1Db21wb25lbnQsIE56VGltZWxpbmVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek91dGxldE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lbGluZU1vZHVsZSB7fVxuIl19