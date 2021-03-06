/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzFormDirective } from './form.directive';
export declare class NzFormLabelComponent implements OnDestroy {
    private cdr;
    private nzFormDirective;
    static ngAcceptInputType_nzRequired: BooleanInput;
    static ngAcceptInputType_nzNoColon: BooleanInput;
    nzFor?: string;
    nzRequired: boolean;
    set nzNoColon(value: boolean);
    get nzNoColon(): boolean;
    noColon: boolean | 'default';
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, nzFormDirective: NzFormDirective);
    ngOnDestroy(): void;
}
