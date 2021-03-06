/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzTabLabelDirective {
    elementRef: ElementRef;
    static ngAcceptInputType_disabled: BooleanInput;
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    getOffsetLeft(): number;
    getOffsetWidth(): number;
    getOffsetTop(): number;
    getOffsetHeight(): number;
}
