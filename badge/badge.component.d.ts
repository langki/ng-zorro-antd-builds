/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzBadgeStatusType } from './types';
export declare class NzBadgeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    private renderer;
    private elementRef;
    private contentObserver;
    private cdr;
    private ngZone;
    static ngAcceptInputType_nzShowZero: BooleanInput;
    static ngAcceptInputType_nzShowDot: BooleanInput;
    static ngAcceptInputType_nzDot: BooleanInput;
    private destroy$;
    notWrapper: boolean;
    viewInit: boolean;
    maxNumberArray: string[];
    countArray: number[];
    countSingleArray: number[];
    presetColor: string | null;
    count: number;
    contentElement?: ElementRef;
    nzShowZero: boolean;
    nzShowDot: boolean;
    nzDot: boolean;
    nzOverflowCount: number;
    nzColor?: string;
    nzStyle: {
        [key: string]: string;
    } | null;
    nzText?: string;
    nzTitle?: string | null | undefined;
    nzStatus?: NzBadgeStatusType | string;
    nzCount?: number | TemplateRef<NzSafeAny>;
    nzOffset?: [number, number];
    checkContent(): void;
    get showSup(): boolean;
    generateMaxNumberArray(): void;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef, contentObserver: ContentObserver, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
