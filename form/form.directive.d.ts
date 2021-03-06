/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, InputObservable } from 'ng-zorro-antd/core/types';
import { Observable, Subject } from 'rxjs';
export declare class NzFormDirective implements OnChanges, OnDestroy, InputObservable {
    nzConfigService: NzConfigService;
    private renderer;
    static ngAcceptInputType_nzNoColon: BooleanInput;
    static ngAcceptInputType_nzDisableAutoTips: BooleanInput;
    nzLayout: 'horizontal' | 'vertical' | 'inline';
    nzNoColon: boolean;
    nzAutoTips: Record<string, Record<string, string>>;
    nzDisableAutoTips: boolean;
    destroy$: Subject<unknown>;
    private inputChanges$;
    getInputObservable<K extends keyof this>(changeType: K): Observable<SimpleChange>;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
