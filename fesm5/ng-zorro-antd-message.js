import { __spread, __assign, __extends } from 'tslib';
import { ComponentPortal } from '@angular/cdk/portal';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule, Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { NzSingletonService } from 'ng-zorro-antd/core/services';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { moveUpMotion } from 'ng-zorro-antd/core/animation';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var globalCounter = 0;
/**
 * @abstract
 */
var  /**
 * @abstract
 */
NzMNService = /** @class */ (function () {
    function NzMNService(nzSingletonService, overlay, injector) {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    NzMNService.prototype.remove = /**
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (this.container) {
            if (id) {
                this.container.remove(id);
            }
            else {
                this.container.removeAll();
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzMNService.prototype.getInstanceId = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.componentPrefix + "-" + globalCounter++;
    };
    /**
     * @protected
     * @template T
     * @param {?} ctor
     * @return {?}
     */
    NzMNService.prototype.withContainer = /**
     * @protected
     * @template T
     * @param {?} ctor
     * @return {?}
     */
    function (ctor) {
        /** @type {?} */
        var containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        var overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        /** @type {?} */
        var componentPortal = new ComponentPortal(ctor, null, this.injector);
        /** @type {?} */
        var componentRef = overlayRef.attach(componentPortal);
        /** @type {?} */
        var overlayPane = overlayRef.overlayElement;
        overlayPane.style.zIndex = '1010';
        if (!containerInstance) {
            this.container = containerInstance = componentRef.instance;
            this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
        }
        return (/** @type {?} */ (containerInstance));
    };
    return NzMNService;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.componentPrefix;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMNService.prototype.injector;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
NzMNContainerComponent = /** @class */ (function () {
    function NzMNContainerComponent(cdr, nzConfigService) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.instances = [];
        this.destroy$ = new Subject();
        this.updateConfig();
    }
    /**
     * @return {?}
     */
    NzMNContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeConfigChange();
    };
    /**
     * @return {?}
     */
    NzMNContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NzMNContainerComponent.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var instance = this.onCreate(data);
        if (this.instances.length >= (/** @type {?} */ (this.config)).nzMaxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = __spread(this.instances, [instance]);
        this.readyInstances();
        return instance;
    };
    /**
     * @param {?} id
     * @param {?=} userAction
     * @return {?}
     */
    NzMNContainerComponent.prototype.remove = /**
     * @param {?} id
     * @param {?=} userAction
     * @return {?}
     */
    function (id, userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        this.instances.some((/**
         * @param {?} instance
         * @param {?} index
         * @return {?}
         */
        function (instance, index) {
            if (instance.messageId === id) {
                _this.instances.splice(index, 1);
                _this.instances = __spread(_this.instances);
                _this.onRemove(instance, userAction);
                _this.readyInstances();
                return true;
            }
            return false;
        }));
    };
    /**
     * @return {?}
     */
    NzMNContainerComponent.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instances.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.onRemove(i, false); }));
        this.instances = [];
        this.readyInstances();
    };
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    NzMNContainerComponent.prototype.onCreate = /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        return (/** @type {?} */ (instance));
    };
    /**
     * @protected
     * @param {?} instance
     * @param {?} userAction
     * @return {?}
     */
    NzMNContainerComponent.prototype.onRemove = /**
     * @protected
     * @param {?} instance
     * @param {?} userAction
     * @return {?}
     */
    function (instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    NzMNContainerComponent.prototype.readyInstances = /**
     * @protected
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzMNContainerComponent.prototype.mergeOptions = /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _a = (/** @type {?} */ (this.config)), nzDuration = _a.nzDuration, nzAnimate = _a.nzAnimate, nzPauseOnHover = _a.nzPauseOnHover;
        return __assign({ nzDuration: nzDuration, nzAnimate: nzAnimate, nzPauseOnHover: nzPauseOnHover }, options);
    };
    return NzMNContainerComponent;
}());
if (false) {
    /** @type {?} */
    NzMNContainerComponent.prototype.config;
    /** @type {?} */
    NzMNContainerComponent.prototype.instances;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.nzConfigService;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NzMNContainerComponent.prototype.updateConfig = function () { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NzMNContainerComponent.prototype.subscribeConfigChange = function () { };
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
NzMNComponent = /** @class */ (function () {
    function NzMNComponent(cdr) {
        this.cdr = cdr;
        this.destroyed = new EventEmitter();
        this.eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMNComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = (/** @type {?} */ (this.instance.options));
        if (this.options.nzAnimate) {
            this.instance.state = 'enter';
        }
        this.autoClose = this.options.nzDuration > 0;
        if (this.autoClose) {
            this.initErase();
            this.startEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMNComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.autoClose) {
            this.clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMNComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.clearEraseTimeout();
            this.updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMNComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.startEraseTimeout();
        }
    };
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    NzMNComponent.prototype.destroy = /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    function (userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        if (this.options.nzAnimate) {
            this.instance.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.destroyed.next({ id: _this.instance.messageId, userAction: userAction });
            }), 200);
        }
        else {
            this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMNComponent.prototype.initErase = /**
     * @private
     * @return {?}
     */
    function () {
        this.eraseTTL = this.options.nzDuration;
        this.eraseTimingStart = Date.now();
    };
    /**
     * @private
     * @return {?}
     */
    NzMNComponent.prototype.updateTTL = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.autoClose) {
            this.eraseTTL -= Date.now() - (/** @type {?} */ (this.eraseTimingStart));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMNComponent.prototype.startEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.eraseTTL > 0) {
            this.clearEraseTimeout();
            this.eraseTimer = setTimeout((/**
             * @return {?}
             */
            function () { return _this.destroy(); }), this.eraseTTL);
            this.eraseTimingStart = Date.now();
        }
        else {
            this.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMNComponent.prototype.clearEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.eraseTimer !== null) {
            clearTimeout(this.eraseTimer);
            this.eraseTimer = null;
        }
    };
    return NzMNComponent;
}());
if (false) {
    /** @type {?} */
    NzMNComponent.prototype.instance;
    /** @type {?} */
    NzMNComponent.prototype.index;
    /** @type {?} */
    NzMNComponent.prototype.destroyed;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.options;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.autoClose;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTimer;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTimingStart;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTTL;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'message';
/** @type {?} */
var NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
var NzMessageContainerComponent = /** @class */ (function (_super) {
    __extends(NzMessageContainerComponent, _super);
    function NzMessageContainerComponent(cdr, nzConfigService) {
        var _this = _super.call(this, cdr, nzConfigService) || this;
        _this.destroy$ = new Subject();
        _this.instances = [];
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.subscribeConfigChange = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateConfig(); }));
    };
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.updateConfig = /**
     * @protected
     * @return {?}
     */
    function () {
        this.config = __assign(__assign(__assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"ant-message\" [style.top]=\"top\">\n      <nz-message *ngFor=\"let instance of instances\" [instance]=\"instance\" (destroyed)=\"remove($event.id, $event.userAction)\"></nz-message>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService }
    ]; };
    return NzMessageContainerComponent;
}(NzMNContainerComponent));
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.destroy$;
    /** @type {?} */
    NzMessageContainerComponent.prototype.instances;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
}

/**
 * @fileoverview added by tsickle
 * Generated from: message.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMessageServiceModule = /** @class */ (function () {
    function NzMessageServiceModule() {
    }
    NzMessageServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzMessageServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: message.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMessageService = /** @class */ (function (_super) {
    __extends(NzMessageService, _super);
    function NzMessageService(nzSingletonService, overlay, injector) {
        var _this = _super.call(this, nzSingletonService, overlay, injector) || this;
        _this.componentPrefix = 'message-';
        return _this;
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.success = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createInstance({ type: 'success', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.error = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createInstance({ type: 'error', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.info = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createInstance({ type: 'info', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.warning = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createInstance({ type: 'warning', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.loading = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createInstance({ type: 'loading', content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.create = /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, content, options) {
        return this.createInstance({ type: type, content: content }, options);
    };
    /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.createInstance = /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        this.container = this.withContainer(NzMessageContainerComponent);
        return this.container.create(__assign(__assign({}, message), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options: options
        }));
    };
    NzMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzMessageServiceModule
                },] }
    ];
    /** @nocollapse */
    NzMessageService.ctorParameters = function () { return [
        { type: NzSingletonService },
        { type: Overlay },
        { type: Injector }
    ]; };
    /** @nocollapse */ NzMessageService.ɵprov = ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: NzMessageService, providedIn: NzMessageServiceModule });
    return NzMessageService;
}(NzMNService));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageService.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzMessageService.prototype.componentPrefix;
}

/**
 * @fileoverview added by tsickle
 * Generated from: message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMessageComponent = /** @class */ (function (_super) {
    __extends(NzMessageComponent, _super);
    function NzMessageComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this.destroyed = new EventEmitter();
        return _this;
    }
    NzMessageComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message',
                    exportAs: 'nzMessage',
                    preserveWhitespaces: false,
                    animations: [moveUpMotion],
                    template: "\n    <div class=\"ant-message-notice\" [@moveUpMotion]=\"instance.state\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\">\n      <div class=\"ant-message-notice-content\">\n        <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + instance.type\">\n          <ng-container [ngSwitch]=\"instance.type\">\n            <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\n            <i *ngSwitchCase=\"'info'\" nz-icon nzType=\"info-circle\"></i>\n            <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\n            <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\n            <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\n          </ng-container>\n          <ng-container *nzStringTemplateOutlet=\"instance.content\">\n            <span [innerHTML]=\"instance.content\"></span>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzMessageComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzMessageComponent.propDecorators = {
        instance: [{ type: Input }],
        destroyed: [{ type: Output }]
    };
    return NzMessageComponent;
}(NzMNComponent));
if (false) {
    /** @type {?} */
    NzMessageComponent.prototype.instance;
    /** @type {?} */
    NzMessageComponent.prototype.destroyed;
}

/**
 * @fileoverview added by tsickle
 * Generated from: message.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
    NzMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzMessageServiceModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    entryComponents: [NzMessageContainerComponent]
                },] }
    ];
    return NzMessageModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzMessageDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzPauseOnHover;
}
/**
 * @record
 */
function NzMessageData() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageData.prototype.type;
    /** @type {?|undefined} */
    NzMessageData.prototype.content;
    /** @type {?|undefined} */
    NzMessageData.prototype.messageId;
    /** @type {?|undefined} */
    NzMessageData.prototype.createdAt;
    /** @type {?|undefined} */
    NzMessageData.prototype.options;
    /** @type {?|undefined} */
    NzMessageData.prototype.state;
    /** @type {?|undefined} */
    NzMessageData.prototype.onClose;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-message.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzMNComponent, NzMNContainerComponent, NzMNService, NzMessageComponent, NzMessageContainerComponent, NzMessageModule, NzMessageService, NzMessageServiceModule };
//# sourceMappingURL=ng-zorro-antd-message.js.map
