import { PlatformModule } from '@angular/cdk/platform';
import { InjectionToken, Injectable, RendererFactory2, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Self, Directive, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { __extends, __spread, __decorate, __metadata } from 'tslib';
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
var NZ_ICONS_USED_BY_ZORRO = [
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
var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
var DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    __extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, _document, icons) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, __spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
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
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.onConfigChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTwotoneColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        /** @type {?} */
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DomSanitizer },
        { type: NzConfigService },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ɵprov = ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer), ɵɵinject(NzConfigService), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(NZ_ICONS, 8)); }, token: NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
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
var NZ_ICONS_PATCH = new InjectionToken('nz_icons_patch');
var NzIconPatchService = /** @class */ (function () {
    function NzIconPatchService(extraIcons, rootIconService) {
        this.extraIcons = extraIcons;
        this.rootIconService = rootIconService;
        this.patched = false;
    }
    /**
     * @return {?}
     */
    NzIconPatchService.prototype.doPatch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.patched) {
            return;
        }
        this.extraIcons.forEach((/**
         * @param {?} iconDefinition
         * @return {?}
         */
        function (iconDefinition) { return _this.rootIconService.addIcon(iconDefinition); }));
        this.patched = true;
    };
    NzIconPatchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzIconPatchService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NZ_ICONS_PATCH,] }] },
        { type: NzIconService }
    ]; };
    return NzIconPatchService;
}());
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
var NzIconDirective = /** @class */ (function (_super) {
    __extends(NzIconDirective, _super);
    function NzIconDirective(elementRef, iconService, renderer, iconPatch) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.renderer = renderer;
        _this.cacheClassName = null;
        _this.nzRotate = 0;
        _this.spin = false;
        if (iconPatch) {
            iconPatch.doPatch();
        }
        _this.el = elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, nzSpin = changes.nzSpin, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate((/** @type {?} */ (this.el.firstChild)));
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        if (!this.type) {
            /** @type {?} */
            var children = this.el.children;
            /** @type {?} */
            var length_1 = children.length;
            if (!this.type && children.length) {
                while (length_1--) {
                    /** @type {?} */
                    var child = children[length_1];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                    }
                }
            }
        }
    };
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassName();
        this._changeIcon().then((/**
         * @param {?} svgOrRemove
         * @return {?}
         */
        function (svgOrRemove) {
            if (svgOrRemove) {
                _this.setSVGData(svgOrRemove);
                _this.handleSpin(svgOrRemove);
                _this.handleRotate(svgOrRemove);
            }
        }));
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheClassName) {
            this.renderer.removeClass(this.el, this.cacheClassName);
        }
        this.cacheClassName = "anticon-" + this.type;
        this.renderer.addClass(this.el, this.cacheClassName);
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this.renderer.setAttribute(svg, 'data-icon', (/** @type {?} */ (this.type)));
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    };
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
    NzIconDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzIconService },
        { type: Renderer2 },
        { type: NzIconPatchService, decorators: [{ type: Optional }] }
    ]; };
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
    return NzIconDirective;
}(IconDirective));
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
var NzIconModule = /** @class */ (function () {
    function NzIconModule() {
    }
    /**
     * @param {?} icons
     * @return {?}
     */
    NzIconModule.forRoot = /**
     * @param {?} icons
     * @return {?}
     */
    function (icons) {
        return {
            ngModule: NzIconModule,
            providers: [
                {
                    provide: NZ_ICONS,
                    useValue: icons
                }
            ]
        };
    };
    /**
     * @param {?} icons
     * @return {?}
     */
    NzIconModule.forChild = /**
     * @param {?} icons
     * @return {?}
     */
    function (icons) {
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
    };
    NzIconModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzIconDirective],
                    declarations: [NzIconDirective],
                    imports: [PlatformModule]
                },] }
    ];
    return NzIconModule;
}());

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
