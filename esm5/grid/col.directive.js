/**
 * @fileoverview added by tsickle
 * Generated from: col.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
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
export { NzColDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbImNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRWpELHNDQU1DOzs7SUFMQyxnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztBQUdqQjtJQW1GRSx3QkFBb0IsVUFBc0IsRUFBNkIsY0FBOEIsRUFBUyxRQUFtQjtRQUE3RyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUEzRXpILGFBQVEsR0FBK0IsRUFBRSxDQUFDO1FBQzFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQWtCLElBQUksQ0FBQztRQUMzQixXQUFNLEdBQTJCLElBQUksQ0FBQztRQUN0QyxXQUFNLEdBQTJCLElBQUksQ0FBQztRQUN0QyxZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxhQUFRLEdBQTJCLElBQUksQ0FBQztRQUN4QyxXQUFNLEdBQTJCLElBQUksQ0FBQztRQUN0QyxXQUFNLEdBQTJCLElBQUksQ0FBQztRQUN0QyxTQUFJLEdBQThDLElBQUksQ0FBQztRQUN2RCxTQUFJLEdBQThDLElBQUksQ0FBQztRQUN2RCxTQUFJLEdBQThDLElBQUksQ0FBQztRQUN2RCxTQUFJLEdBQThDLElBQUksQ0FBQztRQUN2RCxTQUFJLEdBQThDLElBQUksQ0FBQztRQUN2RCxVQUFLLEdBQThDLElBQUksQ0FBQztJQTZEbUUsQ0FBQzs7OztJQTNEckksd0NBQWU7OztJQUFmOzs7WUFDUSxZQUFZLHlCQUNmLFNBQVMsSUFBRyxJQUFJLEtBQ2hCLGFBQVcsSUFBSSxDQUFDLE1BQVEsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUNoRCxtQkFBaUIsSUFBSSxDQUFDLE9BQVMsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUN4RCxvQkFBa0IsSUFBSSxDQUFDLFFBQVUsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUMzRCxrQkFBZ0IsSUFBSSxDQUFDLE1BQVEsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUNyRCxrQkFBZ0IsSUFBSSxDQUFDLE1BQVEsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUNuRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQ3hCO1FBQ0QsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxnQkFBUSxZQUFZLENBQUUsQ0FBQztRQUNwQyxLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxJQUE0QjtRQUNwQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFVLElBQUksU0FBSSxJQUFJLFVBQU8sQ0FBQztTQUMvQjthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLFNBQU8sSUFBTSxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxzQ0FBYTs7O0lBQWI7UUFBQSxpQkFtQkM7O1lBbEJPLG1CQUFtQixHQUFnQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDOztZQUNwRyxZQUFZLEdBQXFCLEVBQUU7UUFDekMsbUJBQW1CLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTs7Z0JBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDckQsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDcEUsWUFBWSxDQUFDLGFBQVcsUUFBUSxTQUFJLEtBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDMUQ7cUJBQU07O3dCQUNDLFVBQVEsR0FBRyxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQW9COzt3QkFDekMsV0FBVyxHQUFrQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7b0JBQzlGLFdBQVcsQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsTUFBTTs7NEJBQ2xCLFdBQVcsR0FBRyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQUksTUFBTSxNQUFHO3dCQUMzRCxZQUFZLENBQUMsYUFBVyxRQUFRLEdBQUcsV0FBVyxHQUFHLFVBQVEsQ0FBQyxNQUFNLENBQUcsQ0FBQyxHQUFHLFVBQVEsSUFBSSxRQUFRLENBQUMsVUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hILENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2YsSUFBQSx1QkFBTTtRQUNkLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxFQUFrQztvQkFBbEMsa0JBQWtDLEVBQWpDLHdCQUFnQixFQUFFLHNCQUFjOztvQkFDckcsWUFBWTs7Ozs7Z0JBQUcsVUFBQyxJQUFZLEVBQUUsTUFBcUI7O3dCQUNqRCxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO29CQUNuRCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7d0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUssTUFBTSxHQUFHLENBQUMsT0FBSSxDQUFDLENBQUM7cUJBQ2hFO2dCQUNILENBQUMsQ0FBQTtnQkFDRCxZQUFZLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9DLFlBQVksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEQsWUFBWSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDNUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXRIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtDQUErQztvQkFDekQsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsZUFBZTtxQkFDaEM7aUJBQ0Y7Ozs7Z0JBOUJDLFVBQVU7Z0JBY0gsY0FBYyx1QkE2RndCLFFBQVEsWUFBSSxJQUFJO2dCQXBHN0QsU0FBUzs7O3lCQTRCUixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFpR1IscUJBQUM7Q0FBQSxBQXZIRCxJQXVIQztTQWhIWSxjQUFjOzs7Ozs7SUFDekIsa0NBQWtEOzs7OztJQUNsRCxrQ0FBaUM7O0lBQ2pDLHVDQUFvQzs7SUFDcEMsZ0NBQStDOztJQUMvQyxnQ0FBK0M7O0lBQy9DLGlDQUFnRDs7SUFDaEQsa0NBQWlEOztJQUNqRCxnQ0FBK0M7O0lBQy9DLGdDQUErQzs7SUFDL0MsOEJBQWdFOztJQUNoRSw4QkFBZ0U7O0lBQ2hFLDhCQUFnRTs7SUFDaEUsOEJBQWdFOztJQUNoRSw4QkFBZ0U7O0lBQ2hFLCtCQUFpRTs7Ozs7SUE2RHJELG9DQUE4Qjs7SUFBRSx3Q0FBeUQ7O0lBQUUsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vcm93LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XG4gIHNwYW4/OiBudW1iZXI7XG4gIHB1bGw/OiBudW1iZXI7XG4gIHB1c2g/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1jb2xdLG56LWNvbCxuei1mb3JtLWNvbnRyb2wsbnotZm9ybS1sYWJlbCcsXG4gIGV4cG9ydEFzOiAnbnpDb2wnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5mbGV4XSc6ICdob3N0RmxleFN0eWxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBob3N0RmxleFN0eWxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpGbGV4OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpTcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpPcmRlcjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQdXNoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQdWxsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpYczogc3RyaW5nIHwgbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNtOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWQ6IHN0cmluZyB8IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpMZzogc3RyaW5nIHwgbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelhsOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56WFhsOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG5cbiAgc2V0SG9zdENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGhvc3RDbGFzc01hcCA9IHtcbiAgICAgIFsnYW50LWNvbCddOiB0cnVlLFxuICAgICAgW2BhbnQtY29sLSR7dGhpcy5uelNwYW59YF06IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcbiAgICAgIFtgYW50LWNvbC1vcmRlci0ke3RoaXMubnpPcmRlcn1gXTogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcbiAgICAgIFtgYW50LWNvbC1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFtgYW50LWNvbC1wdWxsLSR7dGhpcy5uelB1bGx9YF06IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcbiAgICAgIFtgYW50LWNvbC1wdXNoLSR7dGhpcy5uelB1c2h9YF06IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jbGFzc01hcCkge1xuICAgICAgaWYgKHRoaXMuY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xhc3NNYXAgPSB7IC4uLmhvc3RDbGFzc01hcCB9O1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNsYXNzTWFwKSB7XG4gICAgICBpZiAodGhpcy5jbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0aGlzLmNsYXNzTWFwW2ldKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEhvc3RGbGV4U3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3N0RmxleFN0eWxlID0gdGhpcy5wYXJzZUZsZXgodGhpcy5uekZsZXgpO1xuICB9XG5cbiAgcGFyc2VGbGV4KGZsZXg6IG51bWJlciB8IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGZsZXggPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYCR7ZmxleH0gJHtmbGV4fSBhdXRvYDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmbGV4ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKC9eXFxkKyhcXC5cXGQrKT8ocHh8ZW18cmVtfCUpJC8udGVzdChmbGV4KSkge1xuICAgICAgICByZXR1cm4gYDAgMCAke2ZsZXh9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsZXg7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZTogQXJyYXk8a2V5b2YgTnpDb2xEaXJlY3RpdmU+ID0gWyduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnXTtcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzW25hbWVdKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzW25hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFtgYW50LWNvbC0ke3NpemVOYW1lfS0ke3RoaXNbbmFtZV19YF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVtYmVkZGVkID0gdGhpc1tuYW1lXSBhcyBFbWJlZGRlZFByb3BlcnR5O1xuICAgICAgICAgIGNvbnN0IHByZWZpeEFycmF5OiBBcnJheTxrZXlvZiBFbWJlZGRlZFByb3BlcnR5PiA9IFsnc3BhbicsICdwdWxsJywgJ3B1c2gnLCAnb2Zmc2V0JywgJ29yZGVyJ107XG4gICAgICAgICAgcHJlZml4QXJyYXkuZm9yRWFjaChwcmVmaXggPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZml4Q2xhc3MgPSBwcmVmaXggPT09ICdzcGFuJyA/ICctJyA6IGAtJHtwcmVmaXh9LWA7XG4gICAgICAgICAgICBsaXN0Q2xhc3NNYXBbYGFudC1jb2wtJHtzaXplTmFtZX0ke3ByZWZpeENsYXNzfSR7ZW1iZWRkZWRbcHJlZml4XX1gXSA9IGVtYmVkZGVkICYmIGlzTm90TmlsKGVtYmVkZGVkW3ByZWZpeF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SG9zdEZsZXhTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzTWFwKCk7XG4gICAgY29uc3QgeyBuekZsZXggfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56RmxleCkge1xuICAgICAgdGhpcy5zZXRIb3N0RmxleFN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56Um93RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJHdXR0ZXIgPSAobmFtZTogc3RyaW5nLCBndXR0ZXI6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgaWYgKGd1dHRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCBuYW1lLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctbGVmdCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctcmlnaHQnLCBob3Jpem9udGFsR3V0dGVyKTtcbiAgICAgICAgcmVuZGVyR3V0dGVyKCdwYWRkaW5nLXRvcCcsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICAgICAgcmVuZGVyR3V0dGVyKCdwYWRkaW5nLWJvdHRvbScsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19