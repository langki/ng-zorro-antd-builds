/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BooleanInput, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
export declare class NzInputDirective implements OnChanges, OnInit, OnDestroy {
    ngControl: NgControl;
    static ngAcceptInputType_disabled: BooleanInput;
    nzSize: NzSizeLDSType;
    get disabled(): boolean;
    set disabled(value: boolean);
    _disabled: boolean;
    disabled$: Subject<boolean>;
    private destroy$;
    constructor(ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
