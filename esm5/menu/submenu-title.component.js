/**
 * @fileoverview added by tsickle
 * Generated from: submenu-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var NzSubMenuTitleComponent = /** @class */ (function () {
    function NzSubMenuTitleComponent() {
        this.nzIcon = null;
        this.nzTitle = null;
        this.isMenuInsideDropDown = false;
        this.nzDisabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new EventEmitter();
        this.subMenuMouseState = new EventEmitter();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    NzSubMenuTitleComponent.prototype.setMouseState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    };
    /**
     * @return {?}
     */
    NzSubMenuTitleComponent.prototype.clickTitle = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    };
    NzSubMenuTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-submenu-title]',
                    exportAs: 'nzSubmenuTitle',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <i nz-icon [nzType]=\"nzIcon\" *ngIf=\"nzIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">\n      <span>{{ nzTitle }}</span>\n    </ng-container>\n    <ng-content></ng-content>\n    <span *ngIf=\"isMenuInsideDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\n      <i nz-icon nzType=\"right\" class=\"ant-dropdown-menu-submenu-arrow-icon\"></i>\n    </span>\n    <ng-template #notDropdownTpl>\n      <i class=\"ant-menu-submenu-arrow\"></i>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                        '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                        '[style.paddingLeft.px]': 'paddingLeft',
                        '(click)': 'clickTitle()',
                        '(mouseenter)': 'setMouseState(true)',
                        '(mouseleave)': 'setMouseState(false)'
                    }
                }] }
    ];
    NzSubMenuTitleComponent.propDecorators = {
        nzIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        isMenuInsideDropDown: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        paddingLeft: [{ type: Input }],
        mode: [{ type: Input }],
        toggleSubMenu: [{ type: Output }],
        subMenuMouseState: [{ type: Output }]
    };
    return NzSubMenuTitleComponent;
}());
export { NzSubMenuTitleComponent };
if (false) {
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzIcon;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzTitle;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.isMenuInsideDropDown;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.paddingLeft;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.mode;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.toggleSubMenu;
    /** @type {?} */
    NzSubMenuTitleComponent.prototype.subMenuMouseState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJzdWJtZW51LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hJO0lBQUE7UUE0QlcsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUFzQyxJQUFJLENBQUM7UUFDbEQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLFNBQUksR0FBbUIsVUFBVSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBV3JFLENBQUM7Ozs7O0lBVkMsK0NBQWE7Ozs7SUFBYixVQUFjLEtBQWM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFDRCw0Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxtZ0JBWVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLHlDQUF5QyxFQUFFLHNCQUFzQjt3QkFDakUsZ0NBQWdDLEVBQUUsdUJBQXVCO3dCQUN6RCx3QkFBd0IsRUFBRSxhQUFhO3dCQUN2QyxTQUFTLEVBQUUsY0FBYzt3QkFDekIsY0FBYyxFQUFFLHFCQUFxQjt3QkFDckMsY0FBYyxFQUFFLHNCQUFzQjtxQkFDdkM7aUJBQ0Y7Ozt5QkFFRSxLQUFLOzBCQUNMLEtBQUs7dUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxNQUFNO29DQUNOLE1BQU07O0lBV1QsOEJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQW5CWSx1QkFBdUI7OztJQUNsQyx5Q0FBc0M7O0lBQ3RDLDBDQUEyRDs7SUFDM0QsdURBQXNDOztJQUN0Qyw2Q0FBNEI7O0lBQzVCLDhDQUEyQzs7SUFDM0MsdUNBQTJDOztJQUMzQyxnREFBc0Q7O0lBQ3RELG9EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek1lbnVNb2RlVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1zdWJtZW51LXRpdGxlXScsXG4gIGV4cG9ydEFzOiAnbnpTdWJtZW51VGl0bGUnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpJY29uXCIgKm5nSWY9XCJuekljb25cIj48L2k+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj5cbiAgICAgIDxzcGFuPnt7IG56VGl0bGUgfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxzcGFuICpuZ0lmPVwiaXNNZW51SW5zaWRlRHJvcERvd247IGVsc2Ugbm90RHJvcGRvd25UcGxcIiBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3dcIj5cbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwicmlnaHRcIiBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvblwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG5nLXRlbXBsYXRlICNub3REcm9wZG93blRwbD5cbiAgICAgIDxpIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudS1hcnJvd1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlXSc6ICdpc01lbnVJbnNpZGVEcm9wRG93bicsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXRpdGxlXSc6ICchaXNNZW51SW5zaWRlRHJvcERvd24nLFxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogJ3BhZGRpbmdMZWZ0JyxcbiAgICAnKGNsaWNrKSc6ICdjbGlja1RpdGxlKCknLFxuICAgICcobW91c2VlbnRlciknOiAnc2V0TW91c2VTdGF0ZSh0cnVlKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdzZXRNb3VzZVN0YXRlKGZhbHNlKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN1Yk1lbnVUaXRsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGlzTWVudUluc2lkZURyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtb2RlOiBOek1lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0b2dnbGVTdWJNZW51ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3ViTWVudU1vdXNlU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHNldE1vdXNlU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zdWJNZW51TW91c2VTdGF0ZS5uZXh0KHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgY2xpY2tUaXRsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19