(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/overlay', ['exports', '@angular/cdk/overlay', '@angular/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.overlay = {}), global.ng.cdk.overlay, global.ng.core));
}(this, (function (exports, overlay, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-connected-overlay.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzConnectedOverlayDirective = /** @class */ (function () {
        function NzConnectedOverlayDirective(cdkConnectedOverlay) {
            this.cdkConnectedOverlay = cdkConnectedOverlay;
            this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
        }
        NzConnectedOverlayDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                        exportAs: 'nzConnectedOverlay'
                    },] }
        ];
        /** @nocollapse */
        NzConnectedOverlayDirective.ctorParameters = function () { return [
            { type: overlay.CdkConnectedOverlay }
        ]; };
        return NzConnectedOverlayDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzConnectedOverlayDirective.prototype.cdkConnectedOverlay;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-overlay.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOverlayModule = /** @class */ (function () {
        function NzOverlayModule() {
        }
        NzOverlayModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzConnectedOverlayDirective],
                        exports: [NzConnectedOverlayDirective]
                    },] }
        ];
        return NzOverlayModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: overlay-position.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POSITION_MAP = {
        top: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
        topCenter: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
        topLeft: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        topRight: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        right: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
        rightTop: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
        rightBottom: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
        bottom: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
        bottomCenter: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
        bottomLeft: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        bottomRight: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
        left: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
        leftTop: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
        leftBottom: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
    };
    /** @type {?} */
    var DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
    /** @type {?} */
    var DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight];
    /** @type {?} */
    var DEFAULT_MENTION_TOP_POSITIONS = [
        new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
        new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
    ];
    /** @type {?} */
    var DEFAULT_MENTION_BOTTOM_POSITIONS = [
        POSITION_MAP.bottomLeft,
        new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
    ];
    /**
     * @param {?} position
     * @return {?}
     */
    function getPlacementName(position) {
        for (var placement in POSITION_MAP) {
            if (position.connectionPair.originX === POSITION_MAP[placement].originX &&
                position.connectionPair.originY === POSITION_MAP[placement].originY &&
                position.connectionPair.overlayX === POSITION_MAP[placement].overlayX &&
                position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) {
                return placement;
            }
        }
        return undefined;
    }

    exports.DEFAULT_CASCADER_POSITIONS = DEFAULT_CASCADER_POSITIONS;
    exports.DEFAULT_MENTION_BOTTOM_POSITIONS = DEFAULT_MENTION_BOTTOM_POSITIONS;
    exports.DEFAULT_MENTION_TOP_POSITIONS = DEFAULT_MENTION_TOP_POSITIONS;
    exports.DEFAULT_TOOLTIP_POSITIONS = DEFAULT_TOOLTIP_POSITIONS;
    exports.NzConnectedOverlayDirective = NzConnectedOverlayDirective;
    exports.NzOverlayModule = NzOverlayModule;
    exports.POSITION_MAP = POSITION_MAP;
    exports.getPlacementName = getPlacementName;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-core-overlay.umd.js.map
