/**
 * @fileoverview added by tsickle
 * Generated from: empty.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzEmbedEmptyComponent } from './embed-empty.component';
import { NzEmptyComponent } from './empty.component';
import { NzEmptyDefaultComponent } from './partial/default';
import { NzEmptySimpleComponent } from './partial/simple';
export class NzEmptyModule {
}
NzEmptyModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PortalModule, NzOutletModule, NzI18nModule],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbImVtcHR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU8xRCxNQUFNLE9BQU8sYUFBYTs7O1lBTHpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUM7Z0JBQ25FLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixDQUFDO2dCQUN4RyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBOekVtYmVkRW1wdHlDb21wb25lbnQgfSBmcm9tICcuL2VtYmVkLWVtcHR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9lbXB0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpFbXB0eURlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvZGVmYXVsdCc7XG5pbXBvcnQgeyBOekVtcHR5U2ltcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3NpbXBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBvcnRhbE1vZHVsZSwgTnpPdXRsZXRNb2R1bGUsIE56STE4bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056RW1wdHlDb21wb25lbnQsIE56RW1iZWRFbXB0eUNvbXBvbmVudCwgTnpFbXB0eURlZmF1bHRDb21wb25lbnQsIE56RW1wdHlTaW1wbGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpFbXB0eUNvbXBvbmVudCwgTnpFbWJlZEVtcHR5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOekVtcHR5TW9kdWxlIHt9XG4iXX0=