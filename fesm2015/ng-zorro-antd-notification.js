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
class NzNotificationComponent extends NzMNComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.instance.onClick.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.instance.onClick.next(event);
    }
    /**
     * @return {?}
     */
    close() {
        this.destroy(true);
    }
    /**
     * @return {?}
     */
    get state() {
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
    }
}
NzNotificationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle || null"
      [ngClass]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div *ngIf="!instance.template" class="ant-notification-notice-content">
        <div class="ant-notification-notice-content" [ngClass]="{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }">
          <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
            <ng-container [ngSwitch]="instance.type">
              <i
                *ngSwitchCase="'success'"
                nz-icon
                nzType="check-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-success"
              ></i>
              <i
                *ngSwitchCase="'info'"
                nz-icon
                nzType="info-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-info"
              ></i>
              <i
                *ngSwitchCase="'warning'"
                nz-icon
                nzType="exclamation-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-warning"
              ></i>
              <i
                *ngSwitchCase="'error'"
                nz-icon
                nzType="close-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-error"
              ></i>
            </ng-container>
            <div class="ant-notification-notice-message" [innerHTML]="instance.title"></div>
            <div class="ant-notification-notice-description" [innerHTML]="instance.content"></div>
          </div>
        </div>
      </div>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template!"
        [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
      >
      </ng-template>
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.nzCloseIcon; else iconTpl">
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <i nz-icon [nzType]="closeIcon"></i>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <i nz-icon nzType="close" class="ant-notification-close-icon"></i>
          </ng-template>
        </span>
      </a>
    </div>
  `
            }] }
];
/** @nocollapse */
NzNotificationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzNotificationComponent.propDecorators = {
    instance: [{ type: Input }],
    placement: [{ type: Input }],
    index: [{ type: Input }],
    destroyed: [{ type: Output }]
};
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
const NZ_CONFIG_COMPONENT_NAME = 'notification';
/** @type {?} */
const NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
class NzNotificationContainerComponent extends NzMNContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        // initialized by parent class constructor
        this.instances = [];
        this.topLeftInstances = [];
        this.topRightInstances = [];
        this.bottomLeftInstances = [];
        this.bottomRightInstances = [];
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    create(notification) {
        /** @type {?} */
        const noti = this.onCreate(notification);
        /** @type {?} */
        const key = noti.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.instances.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = [...this.instances, noti];
        }
        this.readyInstances();
        return noti;
    }
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return (/** @type {?} */ (instance));
    }
    /**
     * @protected
     * @return {?}
     */
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateConfig()));
    }
    /**
     * @protected
     * @return {?}
     */
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel((/** @type {?} */ (this.config.nzTop)));
        this.bottom = toCssPixel((/** @type {?} */ (this.config.nzBottom)));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    }
    /**
     * @protected
     * @return {?}
     */
    readyInstances() {
        this.topLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'topLeft'));
        this.topRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'topRight' || !m.options.nzPlacement));
        this.bottomLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'bottomLeft'));
        this.bottomRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'bottomRight'));
        this.cdr.detectChanges();
    }
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    mergeOptions(options) {
        const { nzPosition } = options !== null && options !== void 0 ? options : {};
        if (nzPosition) {
            warnDeprecation('`nzPosition` of NzNotificationDataOptions is deprecated and would be removed in 10.0.0. Use `nzPlacement` instead.');
        }
        const { nzDuration, nzAnimate, nzPauseOnHover, nzPlacement } = this.config;
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover, nzPlacement: nzPlacement || nzPosition }, options);
    }
}
NzNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-notification ant-notification-topLeft" [style.top]="top" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-topRight" [style.top]="top" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomLeft" [style.bottom]="bottom" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomRight" [style.bottom]="bottom" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `
            }] }
];
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
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
class NzNotificationServiceModule {
}
NzNotificationServiceModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: notification.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationModule {
}
NzNotificationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzNotificationServiceModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                entryComponents: [NzNotificationContainerComponent]
            },] }
];

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
let notificationId = 0;
class NzNotificationService extends NzMNService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'notification-';
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(title, content, options) {
        return this.createInstance({ type: 'success', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(title, content, options) {
        return this.createInstance({ type: 'error', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(title, content, options) {
        return this.createInstance({ type: 'info', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(title, content, options) {
        return this.createInstance({ type: 'warning', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    blank(title, content, options) {
        return this.createInstance({ type: 'blank', title, content }, options);
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, title, content, options) {
        return this.createInstance({ type, title, content }, options);
    }
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    template(template, options) {
        return this.createInstance({ template }, options);
    }
    /**
     * @protected
     * @return {?}
     */
    generateMessageId() {
        return `${this.componentPrefix}-${notificationId++}`;
    }
    /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createInstance(message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.generateMessageId(),
            options
        }));
    }
}
NzNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzNotificationServiceModule
            },] }
];
/** @nocollapse */
NzNotificationService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector }
];
/** @nocollapse */ NzNotificationService.ɵprov = ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
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
