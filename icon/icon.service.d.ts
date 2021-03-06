/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { HttpBackend } from '@angular/common/http';
import { InjectionToken, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
export interface NzIconfontOption {
    scriptUrl: string;
}
export declare const NZ_ICONS: InjectionToken<unknown>;
export declare const NZ_ICON_DEFAULT_TWOTONE_COLOR: InjectionToken<unknown>;
export declare const DEFAULT_TWOTONE_COLOR = "#1890ff";
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export declare class NzIconService extends IconService {
    protected nzConfigService: NzConfigService;
    configUpdated$: Subject<void>;
    private iconfontCache;
    normalizeSvgElement(svg: SVGElement): void;
    fetchFromIconfont(opt: NzIconfontOption): void;
    createIconfontIcon(type: string): SVGElement;
    constructor(rendererFactory: RendererFactory2, sanitizer: DomSanitizer, nzConfigService: NzConfigService, handler: HttpBackend, _document: NzSafeAny, icons?: IconDefinition[]);
    private onConfigChange;
    private configDefaultTheme;
    private configDefaultTwotoneColor;
    private getConfig;
}
export declare const NZ_ICONS_PATCH: InjectionToken<unknown>;
export declare class NzIconPatchService {
    private extraIcons;
    private rootIconService;
    patched: boolean;
    constructor(extraIcons: IconDefinition[], rootIconService: NzIconService);
    doPatch(): void;
}
