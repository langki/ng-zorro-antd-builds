/**
 * @fileoverview added by tsickle
 * Generated from: typography.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTextCopyComponent } from './text-copy.component';
import { NzTextEditComponent } from './text-edit.component';
import { NzTypographyComponent } from './typography.component';
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    NzTypographyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, ClipboardModule],
                    exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                    declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
                },] }
    ];
    return NzTypographyModule;
}());
export { NzTypographyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJ0eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUvRDtJQUFBO0lBS2lDLENBQUM7O2dCQUxqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7b0JBQ3pILE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztvQkFDMUYsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7aUJBQ2hGOztJQUNnQyx5QkFBQztDQUFBLEFBTGxDLElBS2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBDbGlwYm9hcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvY2xpcGJvYXJkJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmFuc0J1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmFucy1idXR0b24nO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56VGV4dENvcHlDb21wb25lbnQgfSBmcm9tICcuL3RleHQtY29weS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelR5cG9ncmFwaHlDb21wb25lbnQgfSBmcm9tICcuL3R5cG9ncmFwaHkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOelRvb2xUaXBNb2R1bGUsIE56SW5wdXRNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpUcmFuc0J1dHRvbk1vZHVsZSwgQ2xpcGJvYXJkTW9kdWxlXSxcbiAgZXhwb3J0czogW056VHlwb2dyYXBoeUNvbXBvbmVudCwgTnpUZXh0Q29weUNvbXBvbmVudCwgTnpUZXh0RWRpdENvbXBvbmVudCwgUGxhdGZvcm1Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56VHlwb2dyYXBoeU1vZHVsZSB7fVxuIl19