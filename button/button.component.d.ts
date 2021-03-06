/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare type NzButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link' | null;
export declare type NzButtonShape = 'circle' | 'round' | null;
export declare type NzButtonSize = 'large' | 'default' | 'small';
export declare class NzButtonComponent implements OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    private elementRef;
    private cdr;
    private renderer;
    nzConfigService: NzConfigService;
    static ngAcceptInputType_nzBlock: BooleanInput;
    static ngAcceptInputType_nzGhost: BooleanInput;
    static ngAcceptInputType_nzSearch: BooleanInput;
    static ngAcceptInputType_nzLoading: BooleanInput;
    static ngAcceptInputType_nzDanger: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    nzIconDirectiveElement: ElementRef;
    nzBlock: boolean;
    nzGhost: boolean;
    nzSearch: boolean;
    nzLoading: boolean;
    nzDanger: boolean;
    disabled: boolean;
    tabIndex: number | string | null;
    nzType: NzButtonType;
    nzShape: NzButtonShape;
    nzSize: NzButtonSize;
    private destroy$;
    private loading$;
    haltDisabledEvents(event: Event): void;
    insertSpan(nodes: NodeList, renderer: Renderer2): void;
    assertIconOnly(element: HTMLButtonElement, renderer: Renderer2): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, nzConfigService: NzConfigService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
