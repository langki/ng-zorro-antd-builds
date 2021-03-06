/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
export declare class NzSpinComponent implements OnChanges, OnDestroy, OnInit {
    nzConfigService: NzConfigService;
    private cdr;
    static ngAcceptInputType_nzDelay: NumberInput;
    static ngAcceptInputType_nzSimple: BooleanInput;
    static ngAcceptInputType_nzSpinning: BooleanInput;
    nzIndicator: TemplateRef<NzSafeAny> | null;
    nzSize: NzSizeLDSType;
    nzTip: string | null;
    nzDelay: number;
    nzSimple: boolean;
    nzSpinning: boolean;
    private destroy$;
    private spinning$;
    private delay$;
    isLoading: boolean;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
