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
export class NzTimelineModule {
}
NzTimelineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzTimelineItemComponent, NzTimelineComponent],
                exports: [NzTimelineItemComponent, NzTimelineComponent],
                imports: [CommonModule, PlatformModule, NzIconModule, NzOutletModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbInRpbWVsaW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDO2dCQUM1RCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3RFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOelRpbWVsaW5lSXRlbUNvbXBvbmVudCwgTnpUaW1lbGluZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOelRpbWVsaW5lSXRlbUNvbXBvbmVudCwgTnpUaW1lbGluZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3V0bGV0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lTW9kdWxlIHt9XG4iXX0=