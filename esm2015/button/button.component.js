/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'button';
export class NzButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} nzConfigService
     */
    constructor(elementRef, cdr, renderer, nzConfigService) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzDanger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.nzType = null;
        this.nzShape = null;
        this.nzSize = 'default';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    haltDisabledEvents(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    /**
     * @param {?} nodes
     * @param {?} renderer
     * @return {?}
     */
    insertSpan(nodes, renderer) {
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            if (node.nodeName === '#text') {
                /** @type {?} */
                const span = renderer.createElement('span');
                /** @type {?} */
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        }));
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    assertIconOnly(element, renderer) {
        /** @type {?} */
        const listOfNode = Array.from(element.childNodes);
        /** @type {?} */
        const iconCount = listOfNode.filter((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName === 'I')).length;
        /** @type {?} */
        const noText = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName !== '#text'));
        /** @type {?} */
        const noSpan = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName !== 'SPAN'));
        /** @type {?} */
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzLoading } = changes;
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.loading$
            .pipe(startWith(this.nzLoading), filter((/**
         * @return {?}
         */
        () => !!this.nzIconDirectiveElement)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        loading => {
            /** @type {?} */
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
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
NzButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[nz-button], a[nz-button]',
                exportAs: 'nzButton',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <i nz-icon nzType="loading" *ngIf="nzLoading"></i>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-btn]': `true`,
                    '[class.ant-btn-primary]': `nzType === 'primary'`,
                    '[class.ant-btn-dashed]': `nzType === 'dashed'`,
                    '[class.ant-btn-link]': `nzType === 'link'`,
                    '[class.ant-btn-danger]': `nzType === 'danger'`,
                    '[class.ant-btn-circle]': `nzShape === 'circle'`,
                    '[class.ant-btn-round]': `nzShape === 'round'`,
                    '[class.ant-btn-lg]': `nzSize === 'large'`,
                    '[class.ant-btn-sm]': `nzSize === 'small'`,
                    '[class.ant-btn-dangerous]': `nzDanger`,
                    '[class.ant-btn-loading]': `nzLoading`,
                    '[class.ant-btn-background-ghost]': `nzGhost`,
                    '[class.ant-btn-block]': `nzBlock`,
                    '[class.ant-input-search-button]': `nzSearch`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null',
                    '(click)': 'haltDisabledEvents($event)'
                }
            }] }
];
/** @nocollapse */
NzButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NzConfigService }
];
NzButtonComponent.propDecorators = {
    nzIconDirectiveElement: [{ type: ContentChild, args: [NzIconDirective, { read: ElementRef },] }],
    nzBlock: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzDanger: [{ type: Input }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }],
    nzType: [{ type: Input }],
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzDanger", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "disabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzBlock;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzGhost;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzSearch;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzDanger;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_disabled;
    /** @type {?} */
    NzButtonComponent.prototype.nzIconDirectiveElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzBlock;
    /** @type {?} */
    NzButtonComponent.prototype.nzGhost;
    /** @type {?} */
    NzButtonComponent.prototype.nzSearch;
    /** @type {?} */
    NzButtonComponent.prototype.nzLoading;
    /** @type {?} */
    NzButtonComponent.prototype.nzDanger;
    /** @type {?} */
    NzButtonComponent.prototype.disabled;
    /** @type {?} */
    NzButtonComponent.prototype.tabIndex;
    /** @type {?} */
    NzButtonComponent.prototype.nzType;
    /** @type {?} */
    NzButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzButtonComponent.prototype.nzSize;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.renderer;
    /** @type {?} */
    NzButtonComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BTXhELHdCQUF3QixHQUFHLFFBQVE7QUFnQ3pDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFtRDVCLFlBQ1UsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZUFBZ0M7UUFIL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTlDaEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUMsYUFBUSxHQUEy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QyxtQ0FBZ0Y7Ozs7O0lBQ2hGLHFDQUF1Qzs7Ozs7SUFDdkMscUNBQTBDOzs7OztJQWdDeEMsdUNBQThCOzs7OztJQUM5QixnQ0FBOEI7Ozs7O0lBQzlCLHFDQUEyQjs7SUFDM0IsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2RlZmF1bHQnIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8IG51bGw7XG5leHBvcnQgdHlwZSBOekJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCAncm91bmQnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIE56QnV0dG9uU2l6ZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW256LWJ1dHRvbl0sIGFbbnotYnV0dG9uXScsXG4gIGV4cG9ydEFzOiAnbnpCdXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJuekxvYWRpbmdcIj48L2k+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtYnRuXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC1idG4tcHJpbWFyeV0nOiBgbnpUeXBlID09PSAncHJpbWFyeSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1kYXNoZWRdJzogYG56VHlwZSA9PT0gJ2Rhc2hlZCdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1saW5rXSc6IGBuelR5cGUgPT09ICdsaW5rJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWRhbmdlcl0nOiBgbnpUeXBlID09PSAnZGFuZ2VyJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWNpcmNsZV0nOiBgbnpTaGFwZSA9PT0gJ2NpcmNsZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1yb3VuZF0nOiBgbnpTaGFwZSA9PT0gJ3JvdW5kJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFuZ2Vyb3VzXSc6IGBuekRhbmdlcmAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxvYWRpbmddJzogYG56TG9hZGluZ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3RdJzogYG56R2hvc3RgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1ibG9ja10nOiBgbnpCbG9ja2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbl0nOiBgbnpTZWFyY2hgLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnZGlzYWJsZWQgPyAtMSA6ICh0YWJJbmRleCA9PT0gbnVsbCA/IG51bGwgOiB0YWJJbmRleCknLFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gICAgJyhjbGljayknOiAnaGFsdERpc2FibGVkRXZlbnRzKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekJsb2NrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekdob3N0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNlYXJjaDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRhbmdlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkKE56SWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIG56SWNvbkRpcmVjdGl2ZUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEYW5nZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUeXBlOiBOekJ1dHRvblR5cGUgPSBudWxsO1xuICBASW5wdXQoKSBuelNoYXBlOiBOekJ1dHRvblNoYXBlID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNpemU6IE56QnV0dG9uU2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9hZGluZyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGhhbHREaXNhYmxlZEV2ZW50cyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFNwYW4obm9kZXM6IE5vZGVMaXN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHJlbmRlcmVyLnBhcmVudE5vZGUobm9kZSk7XG4gICAgICAgIHJlbmRlcmVyLmluc2VydEJlZm9yZShwYXJlbnQsIHNwYW4sIG5vZGUpO1xuICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCBub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzc2VydEljb25Pbmx5KGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mTm9kZSA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICBjb25zdCBpY29uQ291bnQgPSBsaXN0T2ZOb2RlLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdJJykubGVuZ3RoO1xuICAgIGNvbnN0IG5vVGV4dCA9IGxpc3RPZk5vZGUuZXZlcnkobm9kZSA9PiBub2RlLm5vZGVOYW1lICE9PSAnI3RleHQnKTtcbiAgICBjb25zdCBub1NwYW4gPSBsaXN0T2ZOb2RlLmV2ZXJ5KG5vZGUgPT4gbm9kZS5ub2RlTmFtZSAhPT0gJ1NQQU4nKTtcbiAgICBjb25zdCBpc0ljb25Pbmx5ID0gbm9TcGFuICYmIG5vVGV4dCAmJiBpY29uQ291bnQgPj0gMTtcbiAgICBpZiAoaXNJY29uT25seSkge1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgJ2FudC1idG4taWNvbi1vbmx5Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekxvYWRpbmcgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56TG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRoaXMubnpMb2FkaW5nKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hc3NlcnRJY29uT25seSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5pbnNlcnRTcGFuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyRcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5uekxvYWRpbmcpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLm56SWNvbkRpcmVjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLm56SWNvbkRpcmVjdGl2ZUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKG5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=