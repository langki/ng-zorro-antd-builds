/**
 * @fileoverview added by tsickle
 * Generated from: statistic.module.ts
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
import { NzPipesModule } from 'ng-zorro-antd/core/pipe';
import { NzCountdownComponent } from './countdown.component';
import { NzStatisticNumberComponent } from './statistic-number.component';
import { NzStatisticComponent } from './statistic.component';
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
    NzStatisticModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, PlatformModule, NzOutletModule, NzPipesModule],
                    declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
                },] }
    ];
    return NzStatisticModule;
}());
export { NzStatisticModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsic3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RDtJQUFBO0lBS2dDLENBQUM7O2dCQUxoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO29CQUN0RSxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDdEYsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUM7aUJBQ2xGOztJQUMrQix3QkFBQztDQUFBLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOelBpcGVzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BpcGUnO1xuXG5pbXBvcnQgeyBOekNvdW50ZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY291bnRkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCB9IGZyb20gJy4vc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNDb21wb25lbnQgfSBmcm9tICcuL3N0YXRpc3RpYy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgTnpPdXRsZXRNb2R1bGUsIE56UGlwZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056U3RhdGlzdGljQ29tcG9uZW50LCBOekNvdW50ZG93bkNvbXBvbmVudCwgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTW9kdWxlIHt9XG4iXX0=