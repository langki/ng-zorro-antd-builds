/**
 * @fileoverview added by tsickle
 * Generated from: slider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSliderHandleComponent } from './handle.component';
import { NzSliderMarksComponent } from './marks.component';
import { NzSliderComponent } from './slider.component';
import { NzSliderStepComponent } from './step.component';
import { NzSliderTrackComponent } from './track.component';
var NzSliderModule = /** @class */ (function () {
    function NzSliderModule() {
    }
    NzSliderModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    imports: [CommonModule, PlatformModule, NzToolTipModule]
                },] }
    ];
    return NzSliderModule;
}());
export { NzSliderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNEO0lBQUE7SUFLNkIsQ0FBQzs7Z0JBTDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDNUgsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ2pJLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO2lCQUN6RDs7SUFDNEIscUJBQUM7Q0FBQSxBQUw5QixJQUs4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL2hhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCB9IGZyb20gJy4vbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJUcmFja0NvbXBvbmVudCB9IGZyb20gJy4vdHJhY2suY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW056U2xpZGVyQ29tcG9uZW50LCBOelNsaWRlclRyYWNrQ29tcG9uZW50LCBOelNsaWRlckhhbmRsZUNvbXBvbmVudCwgTnpTbGlkZXJTdGVwQ29tcG9uZW50LCBOelNsaWRlck1hcmtzQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTnpTbGlkZXJDb21wb25lbnQsIE56U2xpZGVyVHJhY2tDb21wb25lbnQsIE56U2xpZGVySGFuZGxlQ29tcG9uZW50LCBOelNsaWRlclN0ZXBDb21wb25lbnQsIE56U2xpZGVyTWFya3NDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgTnpUb29sVGlwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1vZHVsZSB7fVxuIl19