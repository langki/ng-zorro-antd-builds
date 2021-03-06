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
let globalCounter = 0;
/**
 * @abstract
 */
class NzMNService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(nzSingletonService, overlay, injector) {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    remove(id) {
        if (this.container) {
            if (id) {
                this.container.remove(id);
            }
            else {
                this.container.removeAll();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getInstanceId() {
        return `${this.componentPrefix}-${globalCounter++}`;
    }
    /**
     * @protected
     * @template T
     * @param {?} ctor
     * @return {?}
     */
    withContainer(ctor) {
        /** @type {?} */
        let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        /** @type {?} */
        const componentPortal = new ComponentPortal(ctor, null, this.injector);
        /** @type {?} */
        const componentRef = overlayRef.attach(componentPortal);
        /** @type {?} */
        const overlayPane = overlayRef.overlayElement;
        overlayPane.style.zIndex = '1010';
        if (!containerInstance) {
            this.container = containerInstance = componentRef.instance;
            this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
        }
        return (/** @type {?} */ (containerInstance));
    }
}
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
class NzMNContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.instances = [];
        this.destroy$ = new Subject();
        this.updateConfig();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeConfigChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        /** @type {?} */
        const instance = this.onCreate(data);
        if (this.instances.length >= (/** @type {?} */ (this.config)).nzMaxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, instance];
        this.readyInstances();
        return instance;
    }
    /**
     * @param {?} id
     * @param {?=} userAction
     * @return {?}
     */
    remove(id, userAction = false) {
        this.instances.some((/**
         * @param {?} instance
         * @param {?} index
         * @return {?}
         */
        (instance, index) => {
            if (instance.messageId === id) {
                this.instances.splice(index, 1);
                this.instances = [...this.instances];
                this.onRemove(instance, userAction);
                this.readyInstances();
                return true;
            }
            return false;
        }));
    }
    /**
     * @return {?}
     */
    removeAll() {
        this.instances.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.onRemove(i, false)));
        this.instances = [];
        this.readyInstances();
    }
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        return (/** @type {?} */ (instance));
    }
    /**
     * @protected
     * @param {?} instance
     * @param {?} userAction
     * @return {?}
     */
    onRemove(instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    readyInstances() {
        this.cdr.detectChanges();
    }
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover } = (/** @type {?} */ (this.config));
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover }, options);
    }
}
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
class NzMNComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.destroyed = new EventEmitter();
        this.eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = (/** @type {?} */ (this.instance.options));
        if (this.options.nzAnimate) {
            this.instance.state = 'enter';
        }
        this.autoClose = this.options.nzDuration > 0;
        if (this.autoClose) {
            this.initErase();
            this.startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.autoClose) {
            this.clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.clearEraseTimeout();
            this.updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.startEraseTimeout();
        }
    }
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    destroy(userAction = false) {
        if (this.options.nzAnimate) {
            this.instance.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
            }), 200);
        }
        else {
            this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
        }
    }
    /**
     * @private
     * @return {?}
     */
    initErase() {
        this.eraseTTL = this.options.nzDuration;
        this.eraseTimingStart = Date.now();
    }
    /**
     * @private
     * @return {?}
     */
    updateTTL() {
        if (this.autoClose) {
            this.eraseTTL -= Date.now() - (/** @type {?} */ (this.eraseTimingStart));
        }
    }
    /**
     * @private
     * @return {?}
     */
    startEraseTimeout() {
        if (this.eraseTTL > 0) {
            this.clearEraseTimeout();
            this.eraseTimer = setTimeout((/**
             * @return {?}
             */
            () => this.destroy()), this.eraseTTL);
            this.eraseTimingStart = Date.now();
        }
        else {
            this.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearEraseTimeout() {
        if (this.eraseTimer !== null) {
            clearTimeout(this.eraseTimer);
            this.eraseTimer = null;
        }
    }
}
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
const NZ_CONFIG_COMPONENT_NAME = 'message';
/** @type {?} */
const NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
class NzMessageContainerComponent extends NzMNContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.destroy$ = new Subject();
        this.instances = [];
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
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
}
NzMessageContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-message" [style.top]="top">
      <nz-message *ngFor="let instance of instances" [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></nz-message>
    </div>
  `
            }] }
];
/** @nocollapse */
NzMessageContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
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
class NzMessageServiceModule {
}
NzMessageServiceModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * Generated from: message.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMessageService extends NzMNService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'message-';
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createInstance({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createInstance({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createInstance({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createInstance({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createInstance({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createInstance({ type, content }, options);
    }
    /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createInstance(message, options) {
        this.container = this.withContainer(NzMessageContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options
        }));
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzMessageServiceModule
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector }
];
/** @nocollapse */ NzMessageService.ɵprov = ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: NzMessageService, providedIn: NzMessageServiceModule });
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
class NzMessageComponent extends NzMNComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
}
NzMessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: `
    <div class="ant-message-notice" [@moveUpMotion]="instance.state" (mouseenter)="onEnter()" (mouseleave)="onLeave()">
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container [ngSwitch]="instance.type">
            <i *ngSwitchCase="'success'" nz-icon nzType="check-circle"></i>
            <i *ngSwitchCase="'info'" nz-icon nzType="info-circle"></i>
            <i *ngSwitchCase="'warning'" nz-icon nzType="exclamation-circle"></i>
            <i *ngSwitchCase="'error'" nz-icon nzType="close-circle"></i>
            <i *ngSwitchCase="'loading'" nz-icon nzType="loading"></i>
          </ng-container>
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NzMessageComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzMessageComponent.propDecorators = {
    instance: [{ type: Input }],
    destroyed: [{ type: Output }]
};
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
class NzMessageModule {
}
NzMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                entryComponents: [NzMessageContainerComponent]
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
