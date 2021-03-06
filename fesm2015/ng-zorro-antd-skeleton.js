import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Renderer2, ElementRef, Input, Directive, NgModule } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSkeletonComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
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
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @private
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @private
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @private
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
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
        return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
    }
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @private
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    }
    /**
     * @private
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
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
                template: `
    <ng-container *ngIf="nzLoading">
      <div class="ant-skeleton-header" *ngIf="!!nzAvatar">
        <nz-skeleton-element nzType="avatar" [nzSize]="avatar.size" [nzShape]="avatar.shape"></nz-skeleton-element>
      </div>
      <div class="ant-skeleton-content">
        <h3 *ngIf="!!nzTitle" class="ant-skeleton-title" [style.width]="toCSSUnit(title.width)"></h3>
        <ul *ngIf="!!nzParagraph" class="ant-skeleton-paragraph">
          <li *ngFor="let row of rowsList; let i = index" [style.width]="toCSSUnit(widthList[i])"></li>
        </ul>
      </div>
    </ng-container>
    <ng-container *ngIf="!nzLoading">
      <ng-content></ng-content>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
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
class NzSkeletonElementDirective {
    constructor() {
        this.nzActive = false;
    }
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
if (false) {
    /** @type {?} */
    NzSkeletonElementDirective.prototype.nzActive;
    /** @type {?} */
    NzSkeletonElementDirective.prototype.nzType;
}
class NzSkeletonElementButtonComponent {
    constructor() {
        this.nzShape = 'default';
        this.nzSize = 'default';
    }
}
NzSkeletonElementButtonComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="button"]',
                template: `
    <span
      [class.ant-skeleton-button]="true"
      [class.ant-skeleton-button-round]="nzShape === 'round'"
      [class.ant-skeleton-button-circle]="nzShape === 'circle'"
      [class.ant-skeleton-button-lg]="nzSize === 'large'"
      [class.ant-skeleton-button-sm]="nzSize === 'small'"
    >
    </span>
  `
            }] }
];
NzSkeletonElementButtonComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzSkeletonElementButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzSkeletonElementButtonComponent.prototype.nzSize;
}
class NzSkeletonElementAvatarComponent {
    constructor() {
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.styleMap = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSize && typeof this.nzSize === 'number') {
            /** @type {?} */
            const sideLength = `${this.nzSize}px`;
            this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
        }
        else {
            this.styleMap = {};
        }
    }
}
NzSkeletonElementAvatarComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="avatar"]',
                template: `
    <span
      [class.ant-skeleton-avatar]="true"
      [class.ant-skeleton-avatar-square]="nzShape === 'square'"
      [class.ant-skeleton-avatar-circle]="nzShape === 'circle'"
      [class.ant-skeleton-avatar-lg]="nzSize === 'large'"
      [class.ant-skeleton-avatar-sm]="nzSize === 'small'"
      [ngStyle]="styleMap"
    >
    </span>
  `
            }] }
];
NzSkeletonElementAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
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
class NzSkeletonElementInputComponent {
    constructor() {
        this.nzSize = 'default';
    }
}
NzSkeletonElementInputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="input"]',
                template: `
    <span
      [class.ant-skeleton-input]="true"
      [class.ant-skeleton-input-lg]="nzSize === 'large'"
      [class.ant-skeleton-input-sm]="nzSize === 'small'"
    >
    </span>
  `
            }] }
];
NzSkeletonElementInputComponent.propDecorators = {
    nzSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzSkeletonElementInputComponent.prototype.nzSize;
}

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSkeletonModule {
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
