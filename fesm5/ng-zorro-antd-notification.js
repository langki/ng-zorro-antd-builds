import { __extends, __spread, __assign } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectorRef, Input, Output, ChangeDetectionStrategy, NgModule, Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR } from '@angular/core';
import { notificationMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent, NzMNContainerComponent, NzMNService } from 'ng-zorro-antd/message';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzSingletonService } from 'ng-zorro-antd/core/services';

/**
 * @fileoverview added by tsickle
 * Generated from: notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationComponent = /** @class */ (function (_super) {
    __extends(NzNotificationComponent, _super);
    function NzNotificationComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this.destroyed = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.instance.onClick.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzNotificationComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.instance.onClick.next(event);
    };
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.instance.state === 'enter') {
                if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.instance.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzNotificationComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification',
                    exportAs: 'nzNotification',
                    preserveWhitespaces: false,
                    animations: [notificationMotion],
                    template: "\n    <div\n      class=\"ant-notification-notice ant-notification-notice-closable\"\n      [ngStyle]=\"instance.options?.nzStyle || null\"\n      [ngClass]=\"instance.options?.nzClass || ''\"\n      [@notificationMotion]=\"state\"\n      (click)=\"onClick($event)\"\n      (mouseenter)=\"onEnter()\"\n      (mouseleave)=\"onLeave()\"\n    >\n      <div *ngIf=\"!instance.template\" class=\"ant-notification-notice-content\">\n        <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }\">\n          <div [class.ant-notification-notice-with-icon]=\"instance.type !== 'blank'\">\n            <ng-container [ngSwitch]=\"instance.type\">\n              <i\n                *ngSwitchCase=\"'success'\"\n                nz-icon\n                nzType=\"check-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'info'\"\n                nz-icon\n                nzType=\"info-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'warning'\"\n                nz-icon\n                nzType=\"exclamation-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'error'\"\n                nz-icon\n                nzType=\"close-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"\n              ></i>\n            </ng-container>\n            <div class=\"ant-notification-notice-message\" [innerHTML]=\"instance.title\"></div>\n            <div class=\"ant-notification-notice-description\" [innerHTML]=\"instance.content\"></div>\n          </div>\n        </div>\n      </div>\n      <ng-template\n        [ngIf]=\"instance.template\"\n        [ngTemplateOutlet]=\"instance.template!\"\n        [ngTemplateOutletContext]=\"{ $implicit: this, data: instance.options?.nzData }\"\n      >\n      </ng-template>\n      <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n        <span class=\"ant-notification-notice-close-x\">\n          <ng-container *ngIf=\"instance.options?.nzCloseIcon; else iconTpl\">\n            <ng-container *nzStringTemplateOutlet=\"instance.options?.nzCloseIcon; let closeIcon\">\n              <i nz-icon [nzType]=\"closeIcon\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-template #iconTpl>\n            <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\n          </ng-template>\n        </span>\n      </a>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzNotificationComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzNotificationComponent.propDecorators = {
        instance: [{ type: Input }],
        placement: [{ type: Input }],
        index: [{ type: Input }],
        destroyed: [{ type: Output }]
    };
    return NzNotificationComponent;
}(NzMNComponent));
if (false) {
    /** @type {?} */
    NzNotificationComponent.prototype.instance;
    /** @type {?} */
    NzNotificationComponent.prototype.placement;
    /** @type {?} */
    NzNotificationComponent.prototype.index;
    /** @type {?} */
    NzNotificationComponent.prototype.destroyed;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notification-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'notification';
/** @type {?} */
var NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    __extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService) {
        var _this = _super.call(this, cdr, nzConfigService) || this;
        // initialized by parent class constructor
        _this.instances = [];
        _this.topLeftInstances = [];
        _this.topRightInstances = [];
        _this.bottomLeftInstances = [];
        _this.bottomRightInstances = [];
        return _this;
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.create = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        /** @type {?} */
        var noti = this.onCreate(notification);
        /** @type {?} */
        var key = noti.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.instances.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = __spread(this.instances, [noti]);
        }
        this.readyInstances();
        return noti;
    };
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.onCreate = /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return (/** @type {?} */ (instance));
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = /**
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
    NzNotificationContainerComponent.prototype.updateConfig = /**
     * @protected
     * @return {?}
     */
    function () {
        this.config = __assign(__assign(__assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel((/** @type {?} */ (this.config.nzTop)));
        this.bottom = toCssPixel((/** @type {?} */ (this.config.nzBottom)));
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.readyInstances = /**
     * @protected
     * @return {?}
     */
    function () {
        this.topLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'topLeft'; }));
        this.topRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'topRight' || !m.options.nzPlacement; }));
        this.bottomLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'bottomLeft'; }));
        this.bottomRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'bottomRight'; }));
        this.cdr.detectChanges();
    };
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.mergeOptions = /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var nzPosition = (options !== null && options !== void 0 ? options : {}).nzPosition;
        if (nzPosition) {
            warnDeprecation('`nzPosition` of NzNotificationDataOptions is deprecated and would be removed in 10.0.0. Use `nzPlacement` instead.');
        }
        var _a = this.config, nzDuration = _a.nzDuration, nzAnimate = _a.nzAnimate, nzPauseOnHover = _a.nzPauseOnHover, nzPlacement = _a.nzPlacement;
        return __assign({ nzDuration: nzDuration, nzAnimate: nzAnimate, nzPauseOnHover: nzPauseOnHover, nzPlacement: nzPlacement || nzPosition }, options);
    };
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"ant-notification ant-notification-topLeft\" [style.top]=\"top\" [style.left]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of topLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-topRight\" [style.top]=\"top\" [style.right]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of topRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-bottomLeft\" [style.bottom]=\"bottom\" [style.left]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of bottomLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-bottomRight\" [style.bottom]=\"bottom\" [style.right]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of bottomRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService }
    ]; };
    return NzNotificationContainerComponent;
}(NzMNContainerComponent));
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.top;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.instances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.topLeftInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.topRightInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottomLeftInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottomRightInstances;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notification.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationServiceModule = /** @class */ (function () {
    function NzNotificationServiceModule() {
    }
    NzNotificationServiceModule.decorators = [
        { type: NgModule }
    ];
    return NzNotificationServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: notification.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    NzNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzNotificationServiceModule],
                    declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                    entryComponents: [NzNotificationContainerComponent]
                },] }
    ];
    return NzNotificationModule;
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
 * @template T
 */
function NzNotificationDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzKey;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzStyle;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzClass;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzCloseIcon;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzPlacement;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzData;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzDuration;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzNotificationDataOptions.prototype.nzPauseOnHover;
    /**
     * @deprecated use nzPlacement instead, this would be removed in 10.0.0
     * @type {?|undefined}
     */
    NzNotificationDataOptions.prototype.nzPosition;
}
/**
 * @record
 */
function NzNotificationData() { }
if (false) {
    /** @type {?|undefined} */
    NzNotificationData.prototype.content;
    /** @type {?|undefined} */
    NzNotificationData.prototype.createdAt;
    /** @type {?|undefined} */
    NzNotificationData.prototype.messageId;
    /** @type {?|undefined} */
    NzNotificationData.prototype.options;
    /** @type {?|undefined} */
    NzNotificationData.prototype.state;
    /** @type {?|undefined} */
    NzNotificationData.prototype.template;
    /** @type {?|undefined} */
    NzNotificationData.prototype.title;
    /** @type {?|undefined} */
    NzNotificationData.prototype.type;
    /** @type {?|undefined} */
    NzNotificationData.prototype.onClose;
    /** @type {?|undefined} */
    NzNotificationData.prototype.onClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var notificationId = 0;
var NzNotificationService = /** @class */ (function (_super) {
    __extends(NzNotificationService, _super);
    function NzNotificationService(nzSingletonService, overlay, injector) {
        var _this = _super.call(this, nzSingletonService, overlay, injector) || this;
        _this.componentPrefix = 'notification-';
        return _this;
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.success = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return this.createInstance({ type: 'success', title: title, content: content }, options);
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.error = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return this.createInstance({ type: 'error', title: title, content: content }, options);
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.info = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return this.createInstance({ type: 'info', title: title, content: content }, options);
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.warning = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return this.createInstance({ type: 'warning', title: title, content: content }, options);
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.blank = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return this.createInstance({ type: 'blank', title: title, content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.create = /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, title, content, options) {
        return this.createInstance({ type: type, title: title, content: content }, options);
    };
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.template = /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    function (template, options) {
        return this.createInstance({ template: template }, options);
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationService.prototype.generateMessageId = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.componentPrefix + "-" + notificationId++;
    };
    /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.createInstance = /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(__assign(__assign({}, message), {
            createdAt: new Date(),
            messageId: this.generateMessageId(),
            options: options
        }));
    };
    NzNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzNotificationServiceModule
                },] }
    ];
    /** @nocollapse */
    NzNotificationService.ctorParameters = function () { return [
        { type: NzSingletonService },
        { type: Overlay },
        { type: Injector }
    ]; };
    /** @nocollapse */ NzNotificationService.ɵprov = ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
    return NzNotificationService;
}(NzMNService));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzNotificationService.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzNotificationService.prototype.componentPrefix;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzNotificationComponent, NzNotificationContainerComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule };
//# sourceMappingURL=ng-zorro-antd-notification.js.map
