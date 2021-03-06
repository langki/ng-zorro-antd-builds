/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzTabPositionMode } from './table.types';
export declare class NzTabsInkBarDirective {
    private renderer;
    private elementRef;
    private ngZone;
    static ngAcceptInputType_nzAnimated: BooleanInput;
    nzAnimated: boolean;
    nzPositionMode: NzTabPositionMode;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
}
