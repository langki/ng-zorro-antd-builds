import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Directive, ElementRef, Renderer2, NgZone, Input, Optional, Host, NgModule } from '@angular/core';
import { gridResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} breakpointService
     */
    constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.breakpointService = breakpointService;
        /**
         * @deprecated don't need nzType="flex" after 9.0
         */
        this.nzType = 'flex';
        this.nzAlign = null;
        this.nzJustify = null;
        this.nzGutter = null;
        this.actualGutter$ = new ReplaySubject(1);
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    getGutter() {
        /** @type {?} */
        const results = [null, null];
        /** @type {?} */
        const gutter = this.nzGutter || 0;
        /** @type {?} */
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((/**
         * @param {?} g
         * @param {?} index
         * @return {?}
         */
        (g, index) => {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(gridResponsiveMap).map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                (screen) => {
                    /** @type {?} */
                    const bp = (/** @type {?} */ (screen));
                    if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
                        results[index] = (/** @type {?} */ ((/** @type {?} */ (g))[bp]));
                    }
                }));
            }
            else {
                results[index] = g || null;
            }
        }));
        return results;
    }
    /**
     * @return {?}
     */
    setGutterStyle() {
        const [horizontalGutter, verticalGutter] = this.getGutter();
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        /** @type {?} */
        const renderGutter = (/**
         * @param {?} name
         * @param {?} gutter
         * @return {?}
         */
        (name, gutter) => {
            /** @type {?} */
            const nativeElement = this.elementRef.nativeElement;
            if (gutter !== null) {
                this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
            }
        });
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setGutterStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(gridResponsiveMap)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.setGutterStyle();
            }));
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
NzRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-row],nz-row,nz-form-item',
                exportAs: 'nzRow',
                host: {
                    '[class.ant-row]': `true`,
                    '[class.ant-row-top]': `nzAlign === 'top'`,
                    '[class.ant-row-middle]': `nzAlign === 'middle'`,
                    '[class.ant-row-bottom]': `nzAlign === 'bottom'`,
                    '[class.ant-row-start]': `nzJustify === 'start'`,
                    '[class.ant-row-end]': `nzJustify === 'end'`,
                    '[class.ant-row-center]': `nzJustify === 'center'`,
                    '[class.ant-row-space-around]': `nzJustify === 'space-around'`,
                    '[class.ant-row-space-between]': `nzJustify === 'space-between'`
                }
            },] }
];
/** @nocollapse */
NzRowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzBreakpointService }
];
NzRowDirective.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }]
};
if (false) {
    /**
     * @deprecated don't need nzType="flex" after 9.0
     * @type {?}
     */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakpointService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: col.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function EmbeddedProperty() { }
if (false) {
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.span;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.pull;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.push;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.offset;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.order;
}
class NzColDirective {
    /**
     * @param {?} elementRef
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(elementRef, nzRowDirective, renderer) {
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.classMap = {};
        this.destroy$ = new Subject();
        this.hostFlexStyle = null;
        this.nzFlex = null;
        this.nzSpan = null;
        this.nzOrder = null;
        this.nzOffset = null;
        this.nzPush = null;
        this.nzPull = null;
        this.nzXs = null;
        this.nzSm = null;
        this.nzMd = null;
        this.nzLg = null;
        this.nzXl = null;
        this.nzXXl = null;
    }
    /**
     * @return {?}
     */
    setHostClassMap() {
        /** @type {?} */
        const hostClassMap = Object.assign({ ['ant-col']: true, [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan), [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i)) {
                this.renderer.removeClass(this.elementRef.nativeElement, i);
            }
        }
        this.classMap = Object.assign({}, hostClassMap);
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
                this.renderer.addClass(this.elementRef.nativeElement, i);
            }
        }
    }
    /**
     * @return {?}
     */
    setHostFlexStyle() {
        this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }
    /**
     * @param {?} flex
     * @return {?}
     */
    parseFlex(flex) {
        if (typeof flex === 'number') {
            return `${flex} ${flex} auto`;
        }
        else if (typeof flex === 'string') {
            if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
                return `0 0 ${flex}`;
            }
        }
        return flex;
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
                }
                else {
                    /** @type {?} */
                    const embedded = (/** @type {?} */ (this[name]));
                    /** @type {?} */
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    prefix => {
                        /** @type {?} */
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setHostClassMap();
        this.setHostFlexStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setHostClassMap();
        const { nzFlex } = changes;
        if (nzFlex) {
            this.setHostFlexStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([horizontalGutter, verticalGutter]) => {
                /** @type {?} */
                const renderGutter = (/**
                 * @param {?} name
                 * @param {?} gutter
                 * @return {?}
                 */
                (name, gutter) => {
                    /** @type {?} */
                    const nativeElement = this.elementRef.nativeElement;
                    if (gutter !== null) {
                        this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
                    }
                });
                renderGutter('padding-left', horizontalGutter);
                renderGutter('padding-right', horizontalGutter);
                renderGutter('padding-top', verticalGutter);
                renderGutter('padding-bottom', verticalGutter);
            }));
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
NzColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-col],nz-col,nz-form-control,nz-form-label',
                exportAs: 'nzCol',
                host: {
                    '[style.flex]': 'hostFlexStyle'
                }
            },] }
];
/** @nocollapse */
NzColDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzColDirective.propDecorators = {
    nzFlex: [{ type: Input }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.classMap;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.destroy$;
    /** @type {?} */
    NzColDirective.prototype.hostFlexStyle;
    /** @type {?} */
    NzColDirective.prototype.nzFlex;
    /** @type {?} */
    NzColDirective.prototype.nzSpan;
    /** @type {?} */
    NzColDirective.prototype.nzOrder;
    /** @type {?} */
    NzColDirective.prototype.nzOffset;
    /** @type {?} */
    NzColDirective.prototype.nzPush;
    /** @type {?} */
    NzColDirective.prototype.nzPull;
    /** @type {?} */
    NzColDirective.prototype.nzXs;
    /** @type {?} */
    NzColDirective.prototype.nzSm;
    /** @type {?} */
    NzColDirective.prototype.nzMd;
    /** @type {?} */
    NzColDirective.prototype.nzLg;
    /** @type {?} */
    NzColDirective.prototype.nzXl;
    /** @type {?} */
    NzColDirective.prototype.nzXXl;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.elementRef;
    /** @type {?} */
    NzColDirective.prototype.nzRowDirective;
    /** @type {?} */
    NzColDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzGridModule {
}
NzGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [CommonModule, LayoutModule, PlatformModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzColDirective, NzGridModule, NzRowDirective };
//# sourceMappingURL=ng-zorro-antd-grid.js.map
