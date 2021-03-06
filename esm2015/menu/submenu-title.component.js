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
export class NzSubMenuTitleComponent {
    constructor() {
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
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    /**
     * @return {?}
     */
    clickTitle() {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-title]',
                exportAs: 'nzSubmenuTitle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="nzIcon" *ngIf="nzIcon"></i>
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span>{{ nzTitle }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-arrow">
      <i nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJzdWJtZW51LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBOEJoSSxNQUFNLE9BQU8sdUJBQXVCO0lBM0JwQztRQTRCVyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUM3QixZQUFPLEdBQXNDLElBQUksQ0FBQztRQUNsRCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFDbEMsU0FBSSxHQUFtQixVQUFVLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFXckUsQ0FBQzs7Ozs7SUFWQyxhQUFhLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLHlDQUF5QyxFQUFFLHNCQUFzQjtvQkFDakUsZ0NBQWdDLEVBQUUsdUJBQXVCO29CQUN6RCx3QkFBd0IsRUFBRSxhQUFhO29CQUN2QyxTQUFTLEVBQUUsY0FBYztvQkFDekIsY0FBYyxFQUFFLHFCQUFxQjtvQkFDckMsY0FBYyxFQUFFLHNCQUFzQjtpQkFDdkM7YUFDRjs7O3FCQUVFLEtBQUs7c0JBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzRCQUNMLE1BQU07Z0NBQ04sTUFBTTs7OztJQVBQLHlDQUFzQzs7SUFDdEMsMENBQTJEOztJQUMzRCx1REFBc0M7O0lBQ3RDLDZDQUE0Qjs7SUFDNUIsOENBQTJDOztJQUMzQyx1Q0FBMkM7O0lBQzNDLGdEQUFzRDs7SUFDdEQsb0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXN1Ym1lbnUtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICduelN1Ym1lbnVUaXRsZScsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJuekljb25cIiAqbmdJZj1cIm56SWNvblwiPjwvaT5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPlxuICAgICAgPHNwYW4+e3sgbnpUaXRsZSB9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPHNwYW4gKm5nSWY9XCJpc01lbnVJbnNpZGVEcm9wRG93bjsgZWxzZSBub3REcm9wZG93blRwbFwiIGNsYXNzPVwiYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hcnJvd1wiPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJyaWdodFwiIGNsYXNzPVwiYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hcnJvdy1pY29uXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8bmctdGVtcGxhdGUgI25vdERyb3Bkb3duVHBsPlxuICAgICAgPGkgY2xhc3M9XCJhbnQtbWVudS1zdWJtZW51LWFycm93XCI+PC9pPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGVdJzogJ2lzTWVudUluc2lkZURyb3BEb3duJyxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtdGl0bGVdJzogJyFpc01lbnVJbnNpZGVEcm9wRG93bicsXG4gICAgJ1tzdHlsZS5wYWRkaW5nTGVmdC5weF0nOiAncGFkZGluZ0xlZnQnLFxuICAgICcoY2xpY2spJzogJ2NsaWNrVGl0bGUoKScsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdzZXRNb3VzZVN0YXRlKHRydWUpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ3NldE1vdXNlU3RhdGUoZmFsc2UpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3ViTWVudVRpdGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgaXNNZW51SW5zaWRlRHJvcERvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWRkaW5nTGVmdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1vZGU6IE56TWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRvZ2dsZVN1Yk1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWJNZW51TW91c2VTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgc2V0TW91c2VTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnN1Yk1lbnVNb3VzZVN0YXRlLm5leHQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBjbGlja1RpdGxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdpbmxpbmUnICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlU3ViTWVudS5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=