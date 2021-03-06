import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, ChangeDetectorRef, NgZone, Input, Output, NgModule } from '@angular/core';
import { fadeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { InputNumber } from 'ng-zorro-antd/core/util';
import { Subject, fromEvent } from 'rxjs';
import { throttleTime, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: back-top.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBackTopComponent = /** @class */ (function () {
    function NzBackTopComponent(doc, nzConfigService, scrollSrv, platform, cd, zone) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.platform = platform;
        this.cd = cd;
        this.zone = zone;
        this.scrollListenerDestroy$ = new Subject();
        this.target = null;
        this.visible = false;
        this.nzVisibilityHeight = 400;
        this.nzClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.clickBackTop = /**
     * @return {?}
     */
    function () {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollListenerDestroy$.next();
        this.handleScroll();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.getTarget(), 'scroll')
                .pipe(throttleTime(50), takeUntil(_this.scrollListenerDestroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
        }));
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollListenerDestroy$.next();
        this.scrollListenerDestroy$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzTarget = changes.nzTarget;
        if (nzTarget) {
            this.target = typeof this.nzTarget === 'string' ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
            this.registerScrollEvent();
        }
    };
    NzBackTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-back-top',
                    exportAs: 'nzBackTop',
                    animations: [fadeMotion],
                    template: "\n    <div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\n      <ng-template #defaultContent>\n        <div class=\"ant-back-top-content\">\n          <div class=\"ant-back-top-icon\"></div>\n        </div>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzBackTopComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: Platform },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzBackTopComponent.propDecorators = {
        nzTemplate: [{ type: Input }],
        nzVisibilityHeight: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
    return NzBackTopComponent;
}());
if (false) {
    /** @type {?} */
    NzBackTopComponent.ngAcceptInputType_nzVisibilityHeight;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollListenerDestroy$;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype.nzVisibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTarget;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.doc;
    /** @type {?} */
    NzBackTopComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: back-top.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzBackTopModule = /** @class */ (function () {
    function NzBackTopModule() {
    }
    NzBackTopModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzBackTopComponent],
                    exports: [NzBackTopComponent],
                    imports: [CommonModule, PlatformModule]
                },] }
    ];
    return NzBackTopModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-back-top.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBackTopComponent, NzBackTopModule };
//# sourceMappingURL=ng-zorro-antd-back-top.js.map
