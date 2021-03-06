import { Injectable, NgZone, RendererFactory2, ɵɵdefineInjectable, ɵɵinject, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime, finalize, map, filter, startWith, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'ng-zorro-antd/core/environments';
import { getEventPosition, isTouchEvent } from 'ng-zorro-antd/core/util';
import { DOCUMENT } from '@angular/common';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { MediaMatcher } from '@angular/cdk/layout';

/**
 * @fileoverview added by tsickle
 * Generated from: resize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NOOP = (/**
 * @return {?}
 */
function () { });
var ɵ0 = NOOP;
var NzResizeService = /** @class */ (function () {
    function NzResizeService(ngZone, rendererFactory2) {
        var _this = this;
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource$ = new Subject();
        this.listeners = 0;
        this.disposeHandle = NOOP;
        this.handler = (/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.resizeSource$.next();
            }));
        });
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    NzResizeService.prototype.subscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerListener();
        return this.resizeSource$.pipe(auditTime(16), finalize((/**
         * @return {?}
         */
        function () { return _this.unregisterListener(); })));
    };
    /**
     * @return {?}
     */
    NzResizeService.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        this.unregisterListener();
    };
    /**
     * @private
     * @return {?}
     */
    NzResizeService.prototype.registerListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listeners === 0) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.disposeHandle = _this.renderer.listen('window', 'resize', _this.handler);
            }));
        }
        this.listeners += 1;
    };
    /**
     * @private
     * @return {?}
     */
    NzResizeService.prototype.unregisterListener = /**
     * @private
     * @return {?}
     */
    function () {
        this.listeners -= 1;
        if (this.listeners === 0) {
            this.disposeHandle();
            this.disposeHandle = NOOP;
        }
    };
    NzResizeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzResizeService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzResizeService.ɵprov = ɵɵdefineInjectable({ factory: function NzResizeService_Factory() { return new NzResizeService(ɵɵinject(NgZone), ɵɵinject(RendererFactory2)); }, token: NzResizeService, providedIn: "root" });
    return NzResizeService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.resizeSource$;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.listeners;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.disposeHandle;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.handler;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.rendererFactory2;
}

/**
 * @fileoverview added by tsickle
 * Generated from: singleton.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.registerSingletonWithKey = /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    function (key, target) {
        /** @type {?} */
        var alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        var item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NzSingletonService.prototype.getSingletonWithKey = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.withNewTarget = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return {
            target: target
        };
    };
    NzSingletonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NzSingletonService.ɵprov = ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
    return NzSingletonService;
}());
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}

/**
 * @fileoverview added by tsickle
 * Generated from: drag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
function HandlerItem() { }
if (false) {
    /**
     * @param {?} e
     * @return {?}
     */
    HandlerItem.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    HandlerItem.prototype.teardown = function () { };
}
/**
 * @param {?} event
 * @return {?}
 */
function getPagePosition(event) {
    /** @type {?} */
    var e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
var NzDragService = /** @class */ (function () {
    function NzDragService(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzDragService.prototype.requestDraggingSequence = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return {
                x: e.pageX - (/** @type {?} */ (_this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (_this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; })), finalize((/**
         * @return {?}
         */
        function () { return _this.teardownDraggingSequence(); })));
    };
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    NzDragService.prototype.registerDraggingHandler = /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDragService.prototype.teardownDraggingSequence = /**
     * @private
     * @return {?}
     */
    function () {
        this.currentDraggingSequence = null;
    };
    NzDragService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDragService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDragService.ɵprov = ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(ɵɵinject(RendererFactory2)); }, token: NzDragService, providedIn: "root" });
    return NzDragService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.draggingThreshold;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentDraggingSequence;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentStartingPoint;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.handleRegistry;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzScrollService.ɵprov = ɵɵdefineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(ɵɵinject(DOCUMENT)); }, token: NzScrollService, providedIn: "root" });
    return NzScrollService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: breakpoint.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var NzBreakpointEnum = {
    xxl: "xxl",
    xl: "xl",
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs",
};
/** @type {?} */
var gridResponsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
/** @type {?} */
var siderResponsiveMap = {
    xs: '(max-width: 479.98px)',
    sm: '(max-width: 575.98px)',
    md: '(max-width: 767.98px)',
    lg: '(max-width: 991.98px)',
    xl: '(max-width: 1199.98px)',
    xxl: '(max-width: 1599.98px)'
};
var NzBreakpointService = /** @class */ (function () {
    function NzBreakpointService(resizeService, mediaMatcher) {
        this.resizeService = resizeService;
        this.mediaMatcher = mediaMatcher;
        this.resizeService.subscribe().subscribe((/**
         * @return {?}
         */
        function () { }));
    }
    /**
     * @param {?} breakpointMap
     * @param {?=} fullMap
     * @return {?}
     */
    NzBreakpointService.prototype.subscribe = /**
     * @param {?} breakpointMap
     * @param {?=} fullMap
     * @return {?}
     */
    function (breakpointMap, fullMap) {
        var _this = this;
        if (fullMap) {
            /** @type {?} */
            var get = (/**
             * @return {?}
             */
            function () { return _this.matchMedia(breakpointMap, true); });
            return this.resizeService.subscribe().pipe(map(get), startWith(get()), distinctUntilChanged((/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            function (x, y) { return x[0] === y[0]; })), map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x[1]; })));
        }
        else {
            /** @type {?} */
            var get = (/**
             * @return {?}
             */
            function () { return _this.matchMedia(breakpointMap); });
            return this.resizeService.subscribe().pipe(map(get), startWith(get()), distinctUntilChanged());
        }
    };
    /**
     * @private
     * @param {?} breakpointMap
     * @param {?=} fullMap
     * @return {?}
     */
    NzBreakpointService.prototype.matchMedia = /**
     * @private
     * @param {?} breakpointMap
     * @param {?=} fullMap
     * @return {?}
     */
    function (breakpointMap, fullMap) {
        var _this = this;
        /** @type {?} */
        var bp = NzBreakpointEnum.md;
        /** @type {?} */
        var breakpointBooleanMap = {};
        Object.keys(breakpointMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            /** @type {?} */
            var castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            var matched = _this.mediaMatcher.matchMedia(gridResponsiveMap[castBP]).matches;
            breakpointBooleanMap[(/** @type {?} */ (breakpoint))] = matched;
            if (matched) {
                bp = castBP;
            }
        }));
        if (fullMap) {
            return [bp, (/** @type {?} */ (breakpointBooleanMap))];
        }
        else {
            return bp;
        }
    };
    NzBreakpointService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzBreakpointService.ctorParameters = function () { return [
        { type: NzResizeService },
        { type: MediaMatcher }
    ]; };
    /** @nocollapse */ NzBreakpointService.ɵprov = ɵɵdefineInjectable({ factory: function NzBreakpointService_Factory() { return new NzBreakpointService(ɵɵinject(NzResizeService), ɵɵinject(MediaMatcher)); }, token: NzBreakpointService, providedIn: "root" });
    return NzBreakpointService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBreakpointService.prototype.resizeService;
    /**
     * @type {?}
     * @private
     */
    NzBreakpointService.prototype.mediaMatcher;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-services.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBreakpointEnum, NzBreakpointService, NzDragService, NzResizeService, NzScrollService, NzSingletonService, gridResponsiveMap, siderResponsiveMap };
//# sourceMappingURL=ng-zorro-antd-core-services.js.map
