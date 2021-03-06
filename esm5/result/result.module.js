/**
 * @fileoverview added by tsickle
 * Generated from: result.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './result-cells';
import { NzResultComponent } from './result.component';
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
/** @type {?} */
var partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
var cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
var NzResultModule = /** @class */ (function () {
    function NzResultModule() {
    }
    NzResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzOutletModule, NzIconModule],
                    declarations: __spread([NzResultComponent], cellDirectives, partial),
                    exports: __spread([NzResultComponent], cellDirectives)
                },] }
    ];
    return NzResultModule;
}());
export { NzResultModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUVqRSxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQzs7SUFFbEcsY0FBYyxHQUFHO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBSzZCLENBQUM7O2dCQUw3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUM7b0JBQ3JELFlBQVksWUFBRyxpQkFBaUIsR0FBSyxjQUFjLEVBQUssT0FBTyxDQUFDO29CQUNoRSxPQUFPLFlBQUcsaUJBQWlCLEdBQUssY0FBYyxDQUFDO2lCQUNoRDs7SUFDNEIscUJBQUM7Q0FBQSxBQUw5QixJQUs4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQge1xuICBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUsXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXG4gIE56UmVzdWx0SWNvbkRpcmVjdGl2ZSxcbiAgTnpSZXN1bHRTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxufSBmcm9tICcuL3Jlc3VsdC1jZWxscyc7XG5pbXBvcnQgeyBOelJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdWx0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE56UmVzdWx0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvbm90LWZvdW5kJztcbmltcG9ydCB7IE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvc2VydmVyLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC91bmF1dGhvcml6ZWQnO1xuXG5jb25zdCBwYXJ0aWFsID0gW056UmVzdWx0Tm90Rm91bmRDb21wb25lbnQsIE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQsIE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50XTtcblxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzLCAuLi5wYXJ0aWFsXSxcbiAgZXhwb3J0czogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRNb2R1bGUge31cbiJdfQ==