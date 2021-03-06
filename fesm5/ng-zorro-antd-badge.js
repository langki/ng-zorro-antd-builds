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
var badgePresetColors = [
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
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
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
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        var _a;
        this.notWrapper = isEmpty((_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.generateMaxNumberArray = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateMaxNumberArray();
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.viewInit = true;
            _this.cdr.detectChanges();
        }));
        this.contentObserver
            .observe((/** @type {?} */ (this.contentElement)))
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkContent();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return +item; }));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-badge',
                    exportAs: 'nzBadge',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [zoomBadgeMotion],
                    template: "\n    <span #contentElement><ng-content></ng-content></span>\n    <span\n      class=\"ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}\"\n      [style.background]=\"!presetColor && nzColor\"\n      *ngIf=\"nzStatus || nzColor\"\n      [ngStyle]=\"nzStyle\"\n    ></span>\n    <span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\n    <ng-container *nzStringTemplateOutlet=\"nzCount\">\n      <sup\n        class=\"ant-scroll-number\"\n        *ngIf=\"showSup && viewInit\"\n        [@.disabled]=\"notWrapper\"\n        [@zoomBadgeMotion]\n        [ngStyle]=\"nzStyle\"\n        [attr.title]=\"nzTitle === null ? '' : nzTitle || nzCount\"\n        [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\n        [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\n        [class.ant-badge-count]=\"!nzDot\"\n        [class.ant-badge-dot]=\"nzDot\"\n        [class.ant-badge-multiple-words]=\"countArray.length >= 2\"\n      >\n        <ng-container *ngFor=\"let n of maxNumberArray; let i = index\">\n          <span\n            class=\"ant-scroll-number-only\"\n            *ngIf=\"count <= nzOverflowCount\"\n            [style.transform]=\"'translateY(' + -countArray[i] * 100 + '%)'\"\n          >\n            <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n              <p *ngFor=\"let p of countSingleArray\" class=\"ant-scroll-number-only-unit\" [class.current]=\"p === countArray[i]\">\n                {{ p }}\n              </p>\n            </ng-container>\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n      </sup>\n    </ng-container>\n  ",
                    host: {
                        class: 'ant-badge',
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ContentObserver },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
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
    return NzBadgeComponent;
}());
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
var NzBadgeModule = /** @class */ (function () {
    function NzBadgeModule() {
    }
    NzBadgeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzBadgeComponent],
                    exports: [NzBadgeComponent],
                    imports: [CommonModule, ObserversModule, NzOutletModule]
                },] }
    ];
    return NzBadgeModule;
}());

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
