/**
 * @fileoverview added by tsickle
 * Generated from: pagination.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationDefaultComponent } from './pagination-default.component';
import { NzPaginationItemComponent } from './pagination-item.component';
import { NzPaginationOptionsComponent } from './pagination-options.component';
import { NzPaginationSimpleComponent } from './pagination-simple.component';
import { NzPaginationComponent } from './pagination.component';
var NzPaginationModule = /** @class */ (function () {
    function NzPaginationModule() {
    }
    NzPaginationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzPaginationComponent,
                        NzPaginationSimpleComponent,
                        NzPaginationOptionsComponent,
                        NzPaginationItemComponent,
                        NzPaginationDefaultComponent
                    ],
                    exports: [NzPaginationComponent],
                    imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
                },] }
    ];
    return NzPaginationModule;
}());
export { NzPaginationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0Q7SUFBQTtJQVdpQyxDQUFDOztnQkFYakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLDJCQUEyQjt3QkFDM0IsNEJBQTRCO3dCQUM1Qix5QkFBeUI7d0JBQ3pCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7aUJBQ2pGOztJQUNnQyx5QkFBQztDQUFBLEFBWGxDLElBV2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25EZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi1vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25TaW1wbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24tc2ltcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIE56UGFnaW5hdGlvblNpbXBsZUNvbXBvbmVudCxcbiAgICBOelBhZ2luYXRpb25PcHRpb25zQ29tcG9uZW50LFxuICAgIE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQsXG4gICAgTnpQYWdpbmF0aW9uRGVmYXVsdENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTnpQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56U2VsZWN0TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56SWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uTW9kdWxlIHt9XG4iXX0=