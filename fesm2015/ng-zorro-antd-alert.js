import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'alert';
class NzAlertComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     */
    constructor(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCloseText = null;
        this.nzIconType = null;
        this.nzMessage = null;
        this.nzDescription = null;
        this.nzType = 'info';
        this.nzCloseable = false;
        this.nzShowIcon = false;
        this.nzBanner = false;
        this.nzNoAnimation = false;
        this.nzOnClose = new EventEmitter();
        this.closed = false;
        this.iconTheme = 'fill';
        this.inferredIconType = 'info-circle';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.closed = true;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (this.closed) {
            this.nzOnClose.emit(true);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzShowIcon, nzDescription, nzType, nzBanner } = changes;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzType) {
            this.isTypeSet = true;
            switch (this.nzType) {
                case 'error':
                    this.inferredIconType = 'close-circle';
                    break;
                case 'success':
                    this.inferredIconType = 'check-circle';
                    break;
                case 'info':
                    this.inferredIconType = 'info-circle';
                    break;
                case 'warning':
                    this.inferredIconType = 'exclamation-circle';
                    break;
            }
        }
        if (nzDescription) {
            this.iconTheme = this.nzDescription ? 'outline' : 'fill';
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
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
NzAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [slideAlertMotion],
                template: `
    <div
      *ngIf="!closed"
      class="ant-alert"
      [class.ant-alert-success]="nzType === 'success'"
      [class.ant-alert-info]="nzType === 'info'"
      [class.ant-alert-warning]="nzType === 'warning'"
      [class.ant-alert-error]="nzType === 'error'"
      [class.ant-alert-no-icon]="!nzShowIcon"
      [class.ant-alert-banner]="nzBanner"
      [class.ant-alert-closable]="nzCloseable"
      [class.ant-alert-with-description]="!!nzDescription"
      [@.disabled]="nzNoAnimation"
      [@slideAlertMotion]
      (@slideAlertMotion.done)="onFadeAnimationDone()"
    >
      <ng-container *ngIf="nzShowIcon">
        <i nz-icon class="ant-alert-icon" [nzType]="nzIconType || inferredIconType" [nzTheme]="iconTheme"></i>
      </ng-container>
      <span class="ant-alert-message" *ngIf="nzMessage">
        <ng-container *nzStringTemplateOutlet="nzMessage">{{ nzMessage }}</ng-container>
      </span>
      <span class="ant-alert-description" *ngIf="nzDescription">
        <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
      </span>
      <button type="button" tabindex="0" *ngIf="nzCloseable || nzCloseText" class="ant-alert-close-icon" (click)="closeAlert()">
        <ng-template #closeDefaultTemplate>
          <i nz-icon nzType="close"></i>
        </ng-template>
        <ng-container *ngIf="nzCloseText; else closeDefaultTemplate">
          <ng-container *nzStringTemplateOutlet="nzCloseText">
            <span class="ant-alert-close-text">{{ nzCloseText }}</span>
          </ng-container>
        </ng-container>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzAlertComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef }
];
NzAlertComponent.propDecorators = {
    nzCloseText: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzMessage: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCloseable: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzBanner: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzOnClose: [{ type: Output }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzBanner", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzNoAnimation", void 0);
if (false) {
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzCloseable;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzShowIcon;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzBanner;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.closed;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.inferredIconType;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isShowIconSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.destroy$;
    /** @type {?} */
    NzAlertComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAlertModule {
}
NzAlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [CommonModule, NzIconModule, NzOutletModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAlertComponent, NzAlertModule };
//# sourceMappingURL=ng-zorro-antd-alert.js.map
