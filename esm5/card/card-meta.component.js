/**
 * @fileoverview added by tsickle
 * Generated from: card-meta.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent() {
        this.nzTitle = null;
        this.nzDescription = null;
        this.nzAvatar = null;
    }
    NzCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-meta',
                    exportAs: 'nzCardMeta',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n      <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n    </div>\n    <div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n      <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n      <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </div>\n    </div>\n  ",
                    host: {
                        '[class.ant-card-meta]': 'true'
                    }
                }] }
    ];
    NzCardMetaComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzAvatar: [{ type: Input }]
    };
    return NzCardMetaComponent;
}());
export { NzCardMetaComponent };
if (false) {
    /** @type {?} */
    NzCardMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQtbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUc7SUFBQTtRQXdCVyxZQUFPLEdBQXNDLElBQUksQ0FBQztRQUNsRCxrQkFBYSxHQUFzQyxJQUFJLENBQUM7UUFDeEQsYUFBUSxHQUE2QixJQUFJLENBQUM7SUFDckQsQ0FBQzs7Z0JBM0JBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHlrQkFZVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTtxQkFDaEM7aUJBQ0Y7OzswQkFFRSxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFDUiwwQkFBQztDQUFBLEFBM0JELElBMkJDO1NBSlksbUJBQW1COzs7SUFDOUIsc0NBQTJEOztJQUMzRCw0Q0FBaUU7O0lBQ2pFLHVDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2FyZC1tZXRhJyxcbiAgZXhwb3J0QXM6ICduekNhcmRNZXRhJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLWF2YXRhclwiICpuZ0lmPVwibnpBdmF0YXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekF2YXRhclwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLW1ldGEtZGV0YWlsXCIgKm5nSWY9XCJuelRpdGxlIHx8IG56RGVzY3JpcHRpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLXRpdGxlXCIgKm5nSWY9XCJuelRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbWV0YS1kZXNjcmlwdGlvblwiICpuZ0lmPVwibnpEZXNjcmlwdGlvblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1tZXRhXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FyZE1ldGFDb21wb25lbnQge1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekF2YXRhcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbn1cbiJdfQ==