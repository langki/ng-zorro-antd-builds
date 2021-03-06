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
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService, cdr) {
        var _this = this;
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
        function () {
            _this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.closed = true;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner;
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
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [slideAlertMotion],
                    template: "\n    <div\n      *ngIf=\"!closed\"\n      class=\"ant-alert\"\n      [class.ant-alert-success]=\"nzType === 'success'\"\n      [class.ant-alert-info]=\"nzType === 'info'\"\n      [class.ant-alert-warning]=\"nzType === 'warning'\"\n      [class.ant-alert-error]=\"nzType === 'error'\"\n      [class.ant-alert-no-icon]=\"!nzShowIcon\"\n      [class.ant-alert-banner]=\"nzBanner\"\n      [class.ant-alert-closable]=\"nzCloseable\"\n      [class.ant-alert-with-description]=\"!!nzDescription\"\n      [@.disabled]=\"nzNoAnimation\"\n      [@slideAlertMotion]\n      (@slideAlertMotion.done)=\"onFadeAnimationDone()\"\n    >\n      <ng-container *ngIf=\"nzShowIcon\">\n        <i nz-icon class=\"ant-alert-icon\" [nzType]=\"nzIconType || inferredIconType\" [nzTheme]=\"iconTheme\"></i>\n      </ng-container>\n      <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n        <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n      </span>\n      <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </span>\n      <button type=\"button\" tabindex=\"0\" *ngIf=\"nzCloseable || nzCloseText\" class=\"ant-alert-close-icon\" (click)=\"closeAlert()\">\n        <ng-template #closeDefaultTemplate>\n          <i nz-icon nzType=\"close\"></i>\n        </ng-template>\n        <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n          <ng-container *nzStringTemplateOutlet=\"nzCloseText\">\n            <span class=\"ant-alert-close-text\">{{ nzCloseText }}</span>\n          </ng-container>\n        </ng-container>\n      </button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzAlertComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzAlertComponent;
}());
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
var NzAlertModule = /** @class */ (function () {
    function NzAlertModule() {
    }
    NzAlertModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzAlertComponent],
                    exports: [NzAlertComponent],
                    imports: [CommonModule, NzIconModule, NzOutletModule]
                },] }
    ];
    return NzAlertModule;
}());

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
