import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { TemplateRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { take, startWith, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * @fileoverview added by tsickle
 * Generated from: preset-colors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
const badgePresetColors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
];

/**
 * @fileoverview added by tsickle
 * Generated from: badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
class NzBadgeComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} contentObserver
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.presetColor = null;
        this.count = 0;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
    }
    /**
     * @return {?}
     */
    checkContent() {
        var _a;
        this.notWrapper = isEmpty((_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.viewInit = true;
            this.cdr.detectChanges();
        }));
        this.contentObserver
            .observe((/** @type {?} */ (this.contentElement)))
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.checkContent();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => +item));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: `
    <span #contentElement><ng-content></ng-content></span>
    <span
      class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
      [style.background]="!presetColor && nzColor"
      *ngIf="nzStatus || nzColor"
      [ngStyle]="nzStyle"
    ></span>
    <span class="ant-badge-status-text" *ngIf="nzStatus || nzColor">{{ nzText }}</span>
    <ng-container *nzStringTemplateOutlet="nzCount">
      <sup
        class="ant-scroll-number"
        *ngIf="showSup && viewInit"
        [@.disabled]="notWrapper"
        [@zoomBadgeMotion]
        [ngStyle]="nzStyle"
        [attr.title]="nzTitle === null ? '' : nzTitle || nzCount"
        [style.right.px]="nzOffset && nzOffset[0] ? -nzOffset[0] : null"
        [style.marginTop.px]="nzOffset && nzOffset[1] ? nzOffset[1] : null"
        [class.ant-badge-count]="!nzDot"
        [class.ant-badge-dot]="nzDot"
        [class.ant-badge-multiple-words]="countArray.length >= 2"
      >
        <ng-container *ngFor="let n of maxNumberArray; let i = index">
          <span
            class="ant-scroll-number-only"
            *ngIf="count <= nzOverflowCount"
            [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
          >
            <ng-container *ngIf="!nzDot && countArray[i] !== undefined">
              <p *ngFor="let p of countSingleArray" class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            </ng-container>
          </span>
        </ng-container>
        <ng-container *ngIf="count > nzOverflowCount">{{ nzOverflowCount }}+</ng-container>
      </sup>
    </ng-container>
  `,
                host: {
                    class: 'ant-badge',
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }] }
];
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ContentObserver },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzText: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Number)
], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzBadgeComponent.prototype, "nzColor", void 0);
if (false) {
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowZero;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowDot;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzDot;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: badge.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBadgeModule {
}
NzBadgeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzBadgeComponent],
                exports: [NzBadgeComponent],
                imports: [CommonModule, ObserversModule, NzOutletModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-badge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBadgeComponent, NzBadgeModule };
//# sourceMappingURL=ng-zorro-antd-badge.js.map
