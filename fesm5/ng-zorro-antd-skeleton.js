import { __assign, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Renderer2, ElementRef, Input, Directive, NgModule } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getTitleProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return __assign({ width: width }, this.getProps(this.nzTitle));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getAvatarProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return __assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getParagraphProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasTitle = !!this.nzTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return __assign(__assign({}, basicProps), this.getProps(this.nzParagraph));
    };
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    NzSkeletonComponent.prototype.getProps = /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getWidthList = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateProps = /**
     * @private
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = __spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    NzSkeletonComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-skeleton',
                    exportAs: 'nzSkeleton',
                    host: {
                        '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                        '[class.ant-skeleton-active]': 'nzActive'
                    },
                    template: "\n    <ng-container *ngIf=\"nzLoading\">\n      <div class=\"ant-skeleton-header\" *ngIf=\"!!nzAvatar\">\n        <nz-skeleton-element nzType=\"avatar\" [nzSize]=\"avatar.size\" [nzShape]=\"avatar.shape\"></nz-skeleton-element>\n      </div>\n      <div class=\"ant-skeleton-content\">\n        <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n        <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n          <li *ngFor=\"let row of rowsList; let i = index\" [style.width]=\"toCSSUnit(widthList[i])\"></li>\n        </ul>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!nzLoading\">\n      <ng-content></ng-content>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    NzSkeletonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzSkeletonComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzAvatar: [{ type: Input }],
        nzParagraph: [{ type: Input }]
    };
    return NzSkeletonComponent;
}());
if (false) {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /**
     * @type {?}
     * @private
     */
    NzSkeletonComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton-element.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSkeletonElementDirective = /** @class */ (function () {
    function NzSkeletonElementDirective() {
        this.nzActive = false;
    }
    NzSkeletonElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-skeleton-element',
                    host: {
                        '[class.ant-skeleton]': 'true',
                        '[class.ant-skeleton-element]': 'true',
                        '[class.ant-skeleton-active]': 'nzActive'
                    }
                },] }
    ];
    NzSkeletonElementDirective.propDecorators = {
        nzActive: [{ type: Input }],
        nzType: [{ type: Input }]
    };
    return NzSkeletonElementDirective;
}());
if (false) {
    /** @type {?} */
    NzSkeletonElementDirective.prototype.nzActive;
    /** @type {?} */
    NzSkeletonElementDirective.prototype.nzType;
}
var NzSkeletonElementButtonComponent = /** @class */ (function () {
    function NzSkeletonElementButtonComponent() {
        this.nzShape = 'default';
        this.nzSize = 'default';
    }
    NzSkeletonElementButtonComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-skeleton-element[nzType="button"]',
                    template: "\n    <span\n      [class.ant-skeleton-button]=\"true\"\n      [class.ant-skeleton-button-round]=\"nzShape === 'round'\"\n      [class.ant-skeleton-button-circle]=\"nzShape === 'circle'\"\n      [class.ant-skeleton-button-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-button-sm]=\"nzSize === 'small'\"\n    >\n    </span>\n  "
                }] }
    ];
    NzSkeletonElementButtonComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    return NzSkeletonElementButtonComponent;
}());
if (false) {
    /** @type {?} */
    NzSkeletonElementButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzSkeletonElementButtonComponent.prototype.nzSize;
}
var NzSkeletonElementAvatarComponent = /** @class */ (function () {
    function NzSkeletonElementAvatarComponent() {
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.styleMap = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonElementAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSize && typeof this.nzSize === 'number') {
            /** @type {?} */
            var sideLength = this.nzSize + "px";
            this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
        }
        else {
            this.styleMap = {};
        }
    };
    NzSkeletonElementAvatarComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-skeleton-element[nzType="avatar"]',
                    template: "\n    <span\n      [class.ant-skeleton-avatar]=\"true\"\n      [class.ant-skeleton-avatar-square]=\"nzShape === 'square'\"\n      [class.ant-skeleton-avatar-circle]=\"nzShape === 'circle'\"\n      [class.ant-skeleton-avatar-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-avatar-sm]=\"nzSize === 'small'\"\n      [ngStyle]=\"styleMap\"\n    >\n    </span>\n  "
                }] }
    ];
    NzSkeletonElementAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    return NzSkeletonElementAvatarComponent;
}());
if (false) {
    /** @type {?} */
    NzSkeletonElementAvatarComponent.ngAcceptInputType_nzShape;
    /** @type {?} */
    NzSkeletonElementAvatarComponent.ngAcceptInputType_AvatarSize;
    /** @type {?} */
    NzSkeletonElementAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzSkeletonElementAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzSkeletonElementAvatarComponent.prototype.styleMap;
}
var NzSkeletonElementInputComponent = /** @class */ (function () {
    function NzSkeletonElementInputComponent() {
        this.nzSize = 'default';
    }
    NzSkeletonElementInputComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-skeleton-element[nzType="input"]',
                    template: "\n    <span\n      [class.ant-skeleton-input]=\"true\"\n      [class.ant-skeleton-input-lg]=\"nzSize === 'large'\"\n      [class.ant-skeleton-input-sm]=\"nzSize === 'small'\"\n    >\n    </span>\n  "
                }] }
    ];
    NzSkeletonElementInputComponent.propDecorators = {
        nzSize: [{ type: Input }]
    };
    return NzSkeletonElementInputComponent;
}());
if (false) {
    /** @type {?} */
    NzSkeletonElementInputComponent.prototype.nzSize;
}

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSkeletonModule = /** @class */ (function () {
    function NzSkeletonModule() {
    }
    NzSkeletonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzSkeletonComponent,
                        NzSkeletonElementDirective,
                        NzSkeletonElementButtonComponent,
                        NzSkeletonElementAvatarComponent,
                        NzSkeletonElementInputComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        NzSkeletonComponent,
                        NzSkeletonElementDirective,
                        NzSkeletonElementButtonComponent,
                        NzSkeletonElementAvatarComponent,
                        NzSkeletonElementInputComponent
                    ]
                },] }
    ];
    return NzSkeletonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzSkeletonAvatar() { }
if (false) {
    /** @type {?|undefined} */
    NzSkeletonAvatar.prototype.size;
    /** @type {?|undefined} */
    NzSkeletonAvatar.prototype.shape;
}
/**
 * @record
 */
function NzSkeletonTitle() { }
if (false) {
    /** @type {?|undefined} */
    NzSkeletonTitle.prototype.width;
}
/**
 * @record
 */
function NzSkeletonParagraph() { }
if (false) {
    /** @type {?|undefined} */
    NzSkeletonParagraph.prototype.rows;
    /** @type {?|undefined} */
    NzSkeletonParagraph.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-skeleton.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSkeletonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementButtonComponent, NzSkeletonElementDirective, NzSkeletonElementInputComponent, NzSkeletonModule };
//# sourceMappingURL=ng-zorro-antd-skeleton.js.map
