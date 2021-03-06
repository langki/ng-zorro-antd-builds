/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentChecked, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { IconDirective, ThemeType } from '@ant-design/icons-angular';
import { NzIconPatchService, NzIconService } from './icon.service';
export declare class NzIconDirective extends IconDirective implements OnInit, OnChanges, AfterContentChecked {
    iconService: NzIconService;
    renderer: Renderer2;
    cacheClassName: string | null;
    set nzSpin(value: boolean);
    nzRotate: number;
    set nzType(value: string);
    set nzTheme(value: ThemeType);
    set nzTwotoneColor(value: string);
    set nzIconfont(value: string);
    hostClass?: string;
    private readonly el;
    private iconfont?;
    private spin;
    constructor(elementRef: ElementRef, iconService: NzIconService, renderer: Renderer2, iconPatch: NzIconPatchService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    ngAfterContentChecked(): void;
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    private changeIcon2;
    private handleSpin;
    private handleRotate;
    private setClassName;
    private setSVGData;
}
