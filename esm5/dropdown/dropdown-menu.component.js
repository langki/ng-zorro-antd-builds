/**
 * @fileoverview added by tsickle
 * Generated from: dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Optional, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { MenuService, NzIsMenuInsideDropDownToken } from 'ng-zorro-antd/menu';
import { BehaviorSubject } from 'rxjs';
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setMouseState = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.mouseState$.next(visible);
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    NzDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "nz-dropdown-menu",
                    exportAs: "nzDropdownMenu",
                    animations: [slideMotion],
                    providers: [
                        MenuService,
                        /** menu is inside dropdown-menu component **/
                        {
                            provide: NzIsMenuInsideDropDownToken,
                            useValue: true
                        }
                    ],
                    template: "\n    <ng-template>\n      <div\n        class=\"ant-dropdown\"\n        [ngClass]=\"nzOverlayClassName\"\n        [ngStyle]=\"nzOverlayStyle\"\n        [@slideMotion]=\"'enter'\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        (mouseenter)=\"setMouseState(true)\"\n        (mouseleave)=\"setMouseState(false)\"\n      >\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDropdownMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: MenuService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropdownMenuComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzDropdownMenuComponent;
}());
export { NzDropdownMenuComponent };
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.mouseState$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.isChildSubMenuOpen$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.descendantMenuItemClick$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDO0lBaURFLGlDQUNVLEdBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLGdCQUFrQyxFQUNsQyxhQUEwQixFQUNOLFdBQW9DO1FBTHZELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQ04sZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBdEJqRSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2xELHdCQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsNkJBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBb0IsRUFBRSxDQUFDO0lBbUJsQyxDQUFDOzs7OztJQWhCSiwrQ0FBYTs7OztJQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQUVELDBDQUFROzs7Ozs7SUFBUixVQUFrRCxHQUFNLEVBQUUsS0FBYztRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQVdELG9EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BILENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN6QixTQUFTLEVBQUU7d0JBQ1QsV0FBVzt3QkFDWCw4Q0FBOEM7d0JBQzlDOzRCQUNFLE9BQU8sRUFBRSwyQkFBMkI7NEJBQ3BDLFFBQVEsRUFBRSxJQUFJO3lCQUNmO3FCQUNGO29CQUNELFFBQVEsRUFBRSxpZEFlVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWxEQyxpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBR1YsU0FBUztnQkFHVCxnQkFBZ0I7Z0JBTVQsV0FBVztnQkFGWCxzQkFBc0IsdUJBOEQxQixJQUFJLFlBQUksUUFBUTs7OzhCQWpCbEIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBdUIxQyw4QkFBQztDQUFBLEFBN0RELElBNkRDO1NBN0JZLHVCQUF1Qjs7O0lBQ2xDLDhDQUFrRDs7SUFDbEQsc0RBQTZEOztJQUM3RCwyREFBdUU7O0lBQ3ZFLHFEQUFnQzs7SUFDaEMsaURBQXFDOztJQUNyQyw4Q0FBK0U7Ozs7O0lBWTdFLHNDQUE4Qjs7Ozs7SUFDOUIsNkNBQThCOzs7OztJQUM5QiwyQ0FBMkI7O0lBQzNCLG1EQUF5Qzs7SUFDekMsZ0RBQWlDOztJQUNqQyw4Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UsIE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBuei1kcm9wZG93bi1tZW51YCxcbiAgZXhwb3J0QXM6IGBuekRyb3Bkb3duTWVudWAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lbnVTZXJ2aWNlLFxuICAgIC8qKiBtZW51IGlzIGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXG4gICAgICB1c2VWYWx1ZTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LWRyb3Bkb3duXCJcbiAgICAgICAgW25nQ2xhc3NdPVwibnpPdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxuICAgICAgICBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VTdGF0ZSh0cnVlKVwiXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInNldE1vdXNlU3RhdGUoZmFsc2UpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcGRvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIG1vdXNlU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJDtcbiAgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5uek1lbnVTZXJ2aWNlLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJDtcbiAgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgbnpPdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgc2V0TW91c2VTdGF0ZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZVN0YXRlJC5uZXh0KHZpc2libGUpO1xuICB9XG5cbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIE56RHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XG4gICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==