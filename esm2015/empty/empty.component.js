/**
 * @fileoverview added by tsickle
 * Generated from: empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
/** @type {?} */
const NzEmptyDefaultImages = (/** @type {?} */ (['default', 'simple']));
export class NzEmptyComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.nzNotFoundImage = 'default';
        this.isContentString = false;
        this.isImageBuildIn = true;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzNotFoundContent, nzNotFoundImage } = changes;
        if (nzNotFoundContent) {
            /** @type {?} */
            const content = nzNotFoundContent.currentValue;
            this.isContentString = typeof content === 'string';
        }
        if (nzNotFoundImage) {
            /** @type {?} */
            const image = nzNotFoundImage.currentValue || 'default';
            this.isImageBuildIn = NzEmptyDefaultImages.findIndex((/**
             * @param {?} i
             * @return {?}
             */
            i => i === image)) > -1;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Empty');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: `
    <div class="ant-empty-image">
      <ng-container *ngIf="!isImageBuildIn">
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      </ng-container>
      <nz-empty-default *ngIf="isImageBuildIn && nzNotFoundImage !== 'simple'"></nz-empty-default>
      <nz-empty-simple *ngIf="isImageBuildIn && nzNotFoundImage === 'simple'"></nz-empty-simple>
    </div>
    <p class="ant-empty-description" *ngIf="nzNotFoundContent !== null">
      <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
        {{ isContentString ? nzNotFoundContent : locale['description'] }}
      </ng-container>
    </p>
    <div class="ant-empty-footer" *ngIf="nzNotFoundFooter">
      <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
        {{ nzNotFoundFooter }}
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-empty'
                }
            }] }
];
/** @nocollapse */
NzEmptyComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNotFoundFooter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundImage;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundFooter;
    /** @type {?} */
    NzEmptyComponent.prototype.isContentString;
    /** @type {?} */
    NzEmptyComponent.prototype.isImageBuildIn;
    /** @type {?} */
    NzEmptyComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbImVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQU1MLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQXdCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUVuRSxvQkFBb0IsR0FBRyxtQkFBQSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBUztBQWlDM0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFXM0IsWUFBb0IsSUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFWOUQsb0JBQWUsR0FBNkIsU0FBUyxDQUFDO1FBSS9ELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR0wsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFMEIsQ0FBQzs7Ozs7SUFFM0UsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLEdBQUcsT0FBTztRQUV0RCxJQUFJLGlCQUFpQixFQUFFOztrQkFDZixPQUFPLEdBQUcsaUJBQWlCLENBQUMsWUFBWTtZQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQztTQUNwRDtRQUVELElBQUksZUFBZSxFQUFFOztrQkFDYixLQUFLLEdBQUcsZUFBZSxDQUFDLFlBQVksSUFBSSxTQUFTO1lBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjs7OztZQWxDOEIsYUFBYTtZQWIxQyxpQkFBaUI7Ozs4QkFpRGhCLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7O0lBRk4sMkNBQStEOztJQUMvRCw2Q0FBK0Q7O0lBQy9ELDRDQUF1RDs7SUFFdkQsMkNBQXdCOztJQUN4QiwwQ0FBc0I7O0lBQ3RCLGtDQUE4Qjs7Ozs7SUFFOUIsb0NBQWdEOzs7OztJQUVwQyxnQ0FBMkI7Ozs7O0lBQUUsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56RW1wdHlJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuY29uc3QgTnpFbXB0eURlZmF1bHRJbWFnZXMgPSBbJ2RlZmF1bHQnLCAnc2ltcGxlJ10gYXMgY29uc3Q7XG50eXBlIE56RW1wdHlOb3RGb3VuZEltYWdlVHlwZSA9IHR5cGVvZiBOekVtcHR5RGVmYXVsdEltYWdlc1tudW1iZXJdIHwgbnVsbCB8IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotZW1wdHknLFxuICBleHBvcnRBczogJ256RW1wdHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZW1wdHktaW1hZ2VcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNJbWFnZUJ1aWxkSW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Tm90Rm91bmRJbWFnZVwiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJuek5vdEZvdW5kSW1hZ2VcIiBbYWx0XT1cImlzQ29udGVudFN0cmluZyA/IG56Tm90Rm91bmRDb250ZW50IDogJ2VtcHR5J1wiIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bnotZW1wdHktZGVmYXVsdCAqbmdJZj1cImlzSW1hZ2VCdWlsZEluICYmIG56Tm90Rm91bmRJbWFnZSAhPT0gJ3NpbXBsZSdcIj48L256LWVtcHR5LWRlZmF1bHQ+XG4gICAgICA8bnotZW1wdHktc2ltcGxlICpuZ0lmPVwiaXNJbWFnZUJ1aWxkSW4gJiYgbnpOb3RGb3VuZEltYWdlID09PSAnc2ltcGxlJ1wiPjwvbnotZW1wdHktc2ltcGxlPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwiYW50LWVtcHR5LWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJuek5vdEZvdW5kQ29udGVudCAhPT0gbnVsbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Tm90Rm91bmRDb250ZW50XCI+XG4gICAgICAgIHt7IGlzQ29udGVudFN0cmluZyA/IG56Tm90Rm91bmRDb250ZW50IDogbG9jYWxlWydkZXNjcmlwdGlvbiddIH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImFudC1lbXB0eS1mb290ZXJcIiAqbmdJZj1cIm56Tm90Rm91bmRGb290ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuek5vdEZvdW5kRm9vdGVyXCI+XG4gICAgICAgIHt7IG56Tm90Rm91bmRGb290ZXIgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtZW1wdHknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpFbXB0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuek5vdEZvdW5kSW1hZ2U6IE56RW1wdHlOb3RGb3VuZEltYWdlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRGb290ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBpc0NvbnRlbnRTdHJpbmcgPSBmYWxzZTtcbiAgaXNJbWFnZUJ1aWxkSW4gPSB0cnVlO1xuICBsb2NhbGUhOiBOekVtcHR5STE4bkludGVyZmFjZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek5vdEZvdW5kQ29udGVudCwgbnpOb3RGb3VuZEltYWdlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56Tm90Rm91bmRDb250ZW50KSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbnpOb3RGb3VuZENvbnRlbnQuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5pc0NvbnRlbnRTdHJpbmcgPSB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgaWYgKG56Tm90Rm91bmRJbWFnZSkge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuek5vdEZvdW5kSW1hZ2UuY3VycmVudFZhbHVlIHx8ICdkZWZhdWx0JztcbiAgICAgIHRoaXMuaXNJbWFnZUJ1aWxkSW4gPSBOekVtcHR5RGVmYXVsdEltYWdlcy5maW5kSW5kZXgoaSA9PiBpID09PSBpbWFnZSkgPiAtMTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRW1wdHknKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=