import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
class NzAvatarComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, elementRef, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.platform = platform;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.nzError = new EventEmitter();
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.textStyles = {};
        this.classMap = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    imgError($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.cdr.detectChanges();
            this.setSizeStyle();
            this.notifyCalc();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setSizeStyle();
        this.notifyCalc();
    }
    /**
     * @private
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = (/** @type {?} */ (this.textEl)).nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.calcStringSize();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setSizeStyle() {
        if (typeof this.nzSize === 'number') {
            this.customSize = `${this.nzSize}px`;
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: `
    <i nz-icon *ngIf="nzIcon && hasIcon" [nzType]="nzIcon"></i>
    <img *ngIf="nzSrc && hasSrc" [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    <span class="ant-avatar-string" #textEl [ngStyle]="textStyles" *ngIf="nzText && hasText">{{ nzText }}</span>
  `,
                host: {
                    '[class.ant-avatar]': 'true',
                    '[class.ant-avatar-lg]': `nzSize === 'large'`,
                    '[class.ant-avatar-sm]': `nzSize === 'small'`,
                    '[class.ant-avatar-square]': `nzShape === 'square'`,
                    '[class.ant-avatar-circle]': `nzShape === 'circle'`,
                    '[class.ant-avatar-icon]': `nzIcon`,
                    '[class.ant-avatar-image]': `hasSrc `,
                    '[style.width]': 'customSize',
                    '[style.height]': 'customSize',
                    '[style.line-height]': 'customSize',
                    // nzSize type is number when customSize is true
                    '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzSrcSet: [{ type: Input }],
    nzAlt: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzError: [{ type: Output }],
    textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.classMap;
    /** @type {?} */
    NzAvatarComponent.prototype.customSize;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: avatar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAvatarModule {
}
NzAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzAvatarComponent],
                exports: [NzAvatarComponent],
                imports: [CommonModule, NzIconModule, PlatformModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-avatar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAvatarComponent, NzAvatarModule };
//# sourceMappingURL=ng-zorro-antd-avatar.js.map
