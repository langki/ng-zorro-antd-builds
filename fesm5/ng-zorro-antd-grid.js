import { __read, __assign } from 'tslib';
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
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService) {
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
    NzRowDirective.prototype.getGutter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [null, null];
        /** @type {?} */
        var gutter = this.nzGutter || 0;
        /** @type {?} */
        var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((/**
         * @param {?} g
         * @param {?} index
         * @return {?}
         */
        function (g, index) {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(gridResponsiveMap).map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                function (screen) {
                    /** @type {?} */
                    var bp = (/** @type {?} */ (screen));
                    if (_this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
                        results[index] = (/** @type {?} */ ((/** @type {?} */ (g))[bp]));
                    }
                }));
            }
            else {
                results[index] = g || null;
            }
        }));
        return results;
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.setGutterStyle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = __read(this.getGutter(), 2), horizontalGutter = _a[0], verticalGutter = _a[1];
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        /** @type {?} */
        var renderGutter = (/**
         * @param {?} name
         * @param {?} gutter
         * @return {?}
         */
        function (name, gutter) {
            /** @type {?} */
            var nativeElement = _this.elementRef.nativeElement;
            if (gutter !== null) {
                _this.renderer.setStyle(nativeElement, name, "-" + gutter / 2 + "px");
            }
        });
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setGutterStyle();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(gridResponsiveMap)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.setGutterStyle();
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row],nz-row,nz-form-item',
                    exportAs: 'nzRow',
                    host: {
                        '[class.ant-row]': "true",
                        '[class.ant-row-top]': "nzAlign === 'top'",
                        '[class.ant-row-middle]': "nzAlign === 'middle'",
                        '[class.ant-row-bottom]': "nzAlign === 'bottom'",
                        '[class.ant-row-start]': "nzJustify === 'start'",
                        '[class.ant-row-end]': "nzJustify === 'end'",
                        '[class.ant-row-center]': "nzJustify === 'center'",
                        '[class.ant-row-space-around]': "nzJustify === 'space-around'",
                        '[class.ant-row-space-between]': "nzJustify === 'space-between'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzBreakpointService }
    ]; };
    NzRowDirective.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowDirective;
}());
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
var NzColDirective = /** @class */ (function () {
    function NzColDirective(elementRef, nzRowDirective, renderer) {
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
    NzColDirective.prototype.setHostClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var hostClassMap = __assign((_a = {}, _a['ant-col'] = true, _a["ant-col-" + this.nzSpan] = isNotNil(this.nzSpan), _a["ant-col-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a["ant-col-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a["ant-col-pull-" + this.nzPull] = isNotNil(this.nzPull), _a["ant-col-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        for (var i in this.classMap) {
            if (this.classMap.hasOwnProperty(i)) {
                this.renderer.removeClass(this.elementRef.nativeElement, i);
            }
        }
        this.classMap = __assign({}, hostClassMap);
        for (var i in this.classMap) {
            if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
                this.renderer.addClass(this.elementRef.nativeElement, i);
            }
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.setHostFlexStyle = /**
     * @return {?}
     */
    function () {
        this.hostFlexStyle = this.parseFlex(this.nzFlex);
    };
    /**
     * @param {?} flex
     * @return {?}
     */
    NzColDirective.prototype.parseFlex = /**
     * @param {?} flex
     * @return {?}
     */
    function (flex) {
        if (typeof flex === 'number') {
            return flex + " " + flex + " auto";
        }
        else if (typeof flex === 'string') {
            if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
                return "0 0 " + flex;
            }
        }
        return flex;
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                    listClassMap["ant-col-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    /** @type {?} */
                    var embedded_1 = (/** @type {?} */ (_this[name]));
                    /** @type {?} */
                    var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    function (prefix) {
                        /** @type {?} */
                        var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                        listClassMap["ant-col-" + sizeName + prefixClass + embedded_1[prefix]] = embedded_1 && isNotNil(embedded_1[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setHostClassMap();
        this.setHostFlexStyle();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzColDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setHostClassMap();
        var nzFlex = changes.nzFlex;
        if (nzFlex) {
            this.setHostFlexStyle();
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), horizontalGutter = _b[0], verticalGutter = _b[1];
                /** @type {?} */
                var renderGutter = (/**
                 * @param {?} name
                 * @param {?} gutter
                 * @return {?}
                 */
                function (name, gutter) {
                    /** @type {?} */
                    var nativeElement = _this.elementRef.nativeElement;
                    if (gutter !== null) {
                        _this.renderer.setStyle(nativeElement, name, gutter / 2 + "px");
                    }
                });
                renderGutter('padding-left', horizontalGutter);
                renderGutter('padding-right', horizontalGutter);
                renderGutter('padding-top', verticalGutter);
                renderGutter('padding-bottom', verticalGutter);
            }));
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    NzColDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
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
    return NzColDirective;
}());
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
var NzGridModule = /** @class */ (function () {
    function NzGridModule() {
    }
    NzGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzColDirective, NzRowDirective],
                    exports: [NzColDirective, NzRowDirective],
                    imports: [CommonModule, LayoutModule, PlatformModule]
                },] }
    ];
    return NzGridModule;
}());

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
