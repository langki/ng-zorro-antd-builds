(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/wave', ['exports', '@angular/cdk/platform', '@angular/core', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.wave = {}), global.ng.cdk.platform, global.ng.core, global.ng.platformBrowser.animations));
}(this, (function (exports, platform, core, animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-wave-renderer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzWaveRenderer = /** @class */ (function () {
        function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
            var _this = this;
            this.triggerElement = triggerElement;
            this.ngZone = ngZone;
            this.insertExtraNode = insertExtraNode;
            this.waveTransitionDuration = 400;
            this.styleForPseudo = null;
            this.extraNode = null;
            this.lastTime = 0;
            this.platform = new platform.Platform();
            this.onClick = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (!_this.triggerElement ||
                    !_this.triggerElement.getAttribute ||
                    _this.triggerElement.getAttribute('disabled') ||
                    ((/** @type {?} */ (event.target))).tagName === 'INPUT' ||
                    _this.triggerElement.className.indexOf('disabled') >= 0) {
                    return;
                }
                _this.fadeOutWave();
            });
            this.clickHandler = this.onClick.bind(this);
            this.bindTriggerEvent();
        }
        Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
            get: /**
             * @return {?}
             */
            function () {
                return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzWaveRenderer.prototype.bindTriggerEvent = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.platform.isBrowser) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.removeTriggerEvent();
                    if (_this.triggerElement) {
                        _this.triggerElement.addEventListener('click', _this.clickHandler, true);
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        NzWaveRenderer.prototype.removeTriggerEvent = /**
         * @return {?}
         */
        function () {
            if (this.triggerElement) {
                this.triggerElement.removeEventListener('click', this.clickHandler, true);
            }
        };
        /**
         * @return {?}
         */
        NzWaveRenderer.prototype.removeStyleAndExtraNode = /**
         * @return {?}
         */
        function () {
            if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
                document.body.removeChild(this.styleForPseudo);
                this.styleForPseudo = null;
            }
            if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
                this.triggerElement.removeChild((/** @type {?} */ (this.extraNode)));
            }
        };
        /**
         * @return {?}
         */
        NzWaveRenderer.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.removeTriggerEvent();
            this.removeStyleAndExtraNode();
        };
        /**
         * @private
         * @return {?}
         */
        NzWaveRenderer.prototype.fadeOutWave = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var node = this.triggerElement;
            /** @type {?} */
            var waveColor = this.getWaveColor(node);
            node.setAttribute(this.waveAttributeName, 'true');
            if (Date.now() < this.lastTime + this.waveTransitionDuration) {
                return;
            }
            if (this.isValidColor(waveColor)) {
                if (!this.styleForPseudo) {
                    this.styleForPseudo = document.createElement('style');
                }
                this.styleForPseudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: " + waveColor + ";\n      }";
                document.body.appendChild(this.styleForPseudo);
            }
            if (this.insertExtraNode) {
                if (!this.extraNode) {
                    this.extraNode = document.createElement('div');
                }
                this.extraNode.className = 'ant-click-animating-node';
                node.appendChild(this.extraNode);
            }
            this.lastTime = Date.now();
            this.runTimeoutOutsideZone((/**
             * @return {?}
             */
            function () {
                node.removeAttribute(_this.waveAttributeName);
                _this.removeStyleAndExtraNode();
            }), this.waveTransitionDuration);
        };
        /**
         * @private
         * @param {?} color
         * @return {?}
         */
        NzWaveRenderer.prototype.isValidColor = /**
         * @private
         * @param {?} color
         * @return {?}
         */
        function (color) {
            return (!!color &&
                color !== '#ffffff' &&
                color !== 'rgb(255, 255, 255)' &&
                this.isNotGrey(color) &&
                !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
                color !== 'transparent');
        };
        /**
         * @private
         * @param {?} color
         * @return {?}
         */
        NzWaveRenderer.prototype.isNotGrey = /**
         * @private
         * @param {?} color
         * @return {?}
         */
        function (color) {
            /** @type {?} */
            var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
            if (match && match[1] && match[2] && match[3]) {
                return !(match[1] === match[2] && match[2] === match[3]);
            }
            return true;
        };
        /**
         * @private
         * @param {?} node
         * @return {?}
         */
        NzWaveRenderer.prototype.getWaveColor = /**
         * @private
         * @param {?} node
         * @return {?}
         */
        function (node) {
            /** @type {?} */
            var nodeStyle = getComputedStyle(node);
            return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
                nodeStyle.getPropertyValue('border-color') ||
                nodeStyle.getPropertyValue('background-color'));
        };
        /**
         * @private
         * @param {?} fn
         * @param {?} delay
         * @return {?}
         */
        NzWaveRenderer.prototype.runTimeoutOutsideZone = /**
         * @private
         * @param {?} fn
         * @param {?} delay
         * @return {?}
         */
        function (fn, delay) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return setTimeout(fn, delay); }));
        };
        return NzWaveRenderer;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.waveTransitionDuration;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.styleForPseudo;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.extraNode;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.lastTime;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.platform;
        /** @type {?} */
        NzWaveRenderer.prototype.clickHandler;
        /** @type {?} */
        NzWaveRenderer.prototype.onClick;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.triggerElement;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzWaveRenderer.prototype.insertExtraNode;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-wave.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzWaveConfig() { }
    if (false) {
        /** @type {?|undefined} */
        NzWaveConfig.prototype.disabled;
    }
    /** @type {?} */
    var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
        disabled: false
    };
    /** @type {?} */
    var NZ_WAVE_GLOBAL_CONFIG = new core.InjectionToken('nz-wave-global-options', {
        providedIn: 'root',
        factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
    });
    /**
     * @return {?}
     */
    function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
        return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
    }
    var NzWaveDirective = /** @class */ (function () {
        function NzWaveDirective(ngZone, elementRef, config, animationType) {
            this.ngZone = ngZone;
            this.elementRef = elementRef;
            this.config = config;
            this.animationType = animationType;
            this.nzWaveExtraNode = false;
            this.waveDisabled = false;
            this.waveDisabled = this.isConfigDisabled();
        }
        Object.defineProperty(NzWaveDirective.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this.waveDisabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
            get: /**
             * @return {?}
             */
            function () {
                return this.waveRenderer;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.isConfigDisabled = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var disabled = false;
            if (this.config && typeof this.config.disabled === 'boolean') {
                disabled = this.config.disabled;
            }
            if (this.animationType === 'NoopAnimations') {
                disabled = true;
            }
            return disabled;
        };
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.waveRenderer) {
                this.waveRenderer.destroy();
            }
        };
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.renderWaveIfEnabled();
        };
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.renderWaveIfEnabled = /**
         * @return {?}
         */
        function () {
            if (!this.waveDisabled && this.elementRef.nativeElement) {
                this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
            }
        };
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.disable = /**
         * @return {?}
         */
        function () {
            this.waveDisabled = true;
            if (this.waveRenderer) {
                this.waveRenderer.removeTriggerEvent();
                this.waveRenderer.removeStyleAndExtraNode();
            }
        };
        /**
         * @return {?}
         */
        NzWaveDirective.prototype.enable = /**
         * @return {?}
         */
        function () {
            // config priority
            this.waveDisabled = this.isConfigDisabled() || false;
            if (this.waveRenderer) {
                this.waveRenderer.bindTriggerEvent();
            }
        };
        NzWaveDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-wave],button[nz-button]:not([nzType="link"])',
                        exportAs: 'nzWave'
                    },] }
        ];
        /** @nocollapse */
        NzWaveDirective.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        NzWaveDirective.propDecorators = {
            nzWaveExtraNode: [{ type: core.Input }]
        };
        return NzWaveDirective;
    }());
    if (false) {
        /** @type {?} */
        NzWaveDirective.prototype.nzWaveExtraNode;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.waveRenderer;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.waveDisabled;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.config;
        /**
         * @type {?}
         * @private
         */
        NzWaveDirective.prototype.animationType;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-wave.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzWaveModule = /** @class */ (function () {
        function NzWaveModule() {
        }
        NzWaveModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [platform.PlatformModule],
                        exports: [NzWaveDirective],
                        declarations: [NzWaveDirective]
                    },] }
        ];
        return NzWaveModule;
    }());

    exports.NZ_WAVE_GLOBAL_CONFIG = NZ_WAVE_GLOBAL_CONFIG;
    exports.NZ_WAVE_GLOBAL_CONFIG_FACTORY = NZ_WAVE_GLOBAL_CONFIG_FACTORY;
    exports.NZ_WAVE_GLOBAL_DEFAULT_CONFIG = NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
    exports.NzWaveDirective = NzWaveDirective;
    exports.NzWaveModule = NzWaveModule;
    exports.NzWaveRenderer = NzWaveRenderer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-core-wave.umd.js.map
