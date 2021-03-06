import { PlatformModule } from '@angular/cdk/platform';
import { InjectionToken, Injectable, RendererFactory2, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Self, Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { IconService, IconDirective } from '@ant-design/icons-angular';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { Subject } from 'rxjs';
import { BarsOutline, CalendarOutline, CaretUpFill, CaretUpOutline, CaretDownFill, CaretDownOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleOutline, CloseCircleFill, CloseOutline, CopyOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, StarFill, SearchOutline, UploadOutline, UpOutline, SwapRightOutline } from '@ant-design/icons-angular/icons';

/**
 * @fileoverview added by tsickle
 * Generated from: icons.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    CopyOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EditOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline,
    SwapRightOutline
];

/**
 * @fileoverview added by tsickle
 * Generated from: icon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
const DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
class NzIconService extends IconService {
    /**
     * @param {?} rendererFactory
     * @param {?} sanitizer
     * @param {?} nzConfigService
     * @param {?} handler
     * @param {?} _document
     * @param {?=} icons
     */
    constructor(rendererFactory, sanitizer, nzConfigService, handler, _document, icons) {
        super(rendererFactory, handler, _document, sanitizer);
        this.nzConfigService = nzConfigService;
        this.configUpdated$ = new Subject();
        this.iconfontCache = new Set();
        this.onConfigChange();
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(icons || []));
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    /**
     * @private
     * @return {?}
     */
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        () => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTheme() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTwotoneColor() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        /** @type {?} */
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: NzConfigService },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] }
];
/** @nocollapse */ NzIconService.ɵprov = ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer), ɵɵinject(NzConfigService), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(NZ_ICONS, 8)); }, token: NzIconService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NzIconService.prototype.configUpdated$;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.nzConfigService;
}
/** @type {?} */
const NZ_ICONS_PATCH = new InjectionToken('nz_icons_patch');
class NzIconPatchService {
    /**
     * @param {?} extraIcons
     * @param {?} rootIconService
     */
    constructor(extraIcons, rootIconService) {
        this.extraIcons = extraIcons;
        this.rootIconService = rootIconService;
        this.patched = false;
    }
    /**
     * @return {?}
     */
    doPatch() {
        if (this.patched) {
            return;
        }
        this.extraIcons.forEach((/**
         * @param {?} iconDefinition
         * @return {?}
         */
        iconDefinition => this.rootIconService.addIcon(iconDefinition)));
        this.patched = true;
    }
}
NzIconPatchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzIconPatchService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NZ_ICONS_PATCH,] }] },
    { type: NzIconService }
];
if (false) {
    /** @type {?} */
    NzIconPatchService.prototype.patched;
    /**
     * @type {?}
     * @private
     */
    NzIconPatchService.prototype.extraIcons;
    /**
     * @type {?}
     * @private
     */
    NzIconPatchService.prototype.rootIconService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: icon.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzIconDirective extends IconDirective {
    /**
     * @param {?} elementRef
     * @param {?} iconService
     * @param {?} renderer
     * @param {?} iconPatch
     */
    constructor(elementRef, iconService, renderer, iconPatch) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.renderer = renderer;
        this.cacheClassName = null;
        this.nzRotate = 0;
        this.spin = false;
        if (iconPatch) {
            iconPatch.doPatch();
        }
        this.el = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpin(value) {
        this.spin = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this.type = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTheme(value) {
        this.theme = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIconfont(value) {
        this.iconfont = value;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzType, nzTwotoneColor, nzSpin, nzTheme, nzRotate } = changes;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate((/** @type {?} */ (this.el.firstChild)));
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.type) {
            /** @type {?} */
            const children = this.el.children;
            /** @type {?} */
            let length = children.length;
            if (!this.type && children.length) {
                while (length--) {
                    /** @type {?} */
                    const child = children[length];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                    }
                }
            }
        }
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    changeIcon2() {
        this.setClassName();
        this._changeIcon().then((/**
         * @param {?} svgOrRemove
         * @return {?}
         */
        svgOrRemove => {
            if (svgOrRemove) {
                this.setSVGData(svgOrRemove);
                this.handleSpin(svgOrRemove);
                this.handleRotate(svgOrRemove);
            }
        }));
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleSpin(svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassName() {
        if (this.cacheClassName) {
            this.renderer.removeClass(this.el, this.cacheClassName);
        }
        this.cacheClassName = `anticon-${this.type}`;
        this.renderer.addClass(this.el, this.cacheClassName);
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        this.renderer.setAttribute(svg, 'data-icon', (/** @type {?} */ (this.type)));
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-icon]',
                exportAs: 'nzIcon',
                host: {
                    '[class.anticon]': 'true'
                }
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzIconService },
    { type: Renderer2 },
    { type: NzIconPatchService, decorators: [{ type: Optional }] }
];
NzIconDirective.propDecorators = {
    nzSpin: [{ type: Input }],
    nzRotate: [{ type: Input }],
    nzType: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzTwotoneColor: [{ type: Input }],
    nzIconfont: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NzIconDirective.prototype, "nzSpin", null);
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.cacheClassName;
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /** @type {?} */
    NzIconDirective.prototype.hostClass;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.spin;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: icon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzIconModule {
    /**
     * @param {?} icons
     * @return {?}
     */
    static forRoot(icons) {
        return {
            ngModule: NzIconModule,
            providers: [
                {
                    provide: NZ_ICONS,
                    useValue: icons
                }
            ]
        };
    }
    /**
     * @param {?} icons
     * @return {?}
     */
    static forChild(icons) {
        return {
            ngModule: NzIconModule,
            providers: [
                NzIconPatchService,
                {
                    provide: NZ_ICONS_PATCH,
                    useValue: icons
                }
            ]
        };
    }
}
NzIconModule.decorators = [
    { type: NgModule, args: [{
                exports: [NzIconDirective],
                declarations: [NzIconDirective],
                imports: [PlatformModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-icon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DEFAULT_TWOTONE_COLOR, NZ_ICONS, NZ_ICONS_PATCH, NZ_ICON_DEFAULT_TWOTONE_COLOR, NzIconDirective, NzIconModule, NzIconPatchService, NzIconService };
//# sourceMappingURL=ng-zorro-antd-icon.js.map
