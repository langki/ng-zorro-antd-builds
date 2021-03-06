/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { NumberInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { SimpleRect } from './utils';
export declare class NzAffixComponent implements AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private ngZone;
    private platform;
    private renderer;
    static ngAcceptInputType_nzOffsetTop: NumberInput;
    static ngAcceptInputType_nzOffsetBottom: NumberInput;
    private fixedEl;
    nzTarget?: string | Element | Window;
    nzOffsetTop?: null | number;
    nzOffsetBottom?: null | number;
    readonly nzChange: EventEmitter<boolean>;
    private readonly placeholderNode;
    private affixStyle?;
    private placeholderStyle?;
    private positionChangeSubscription;
    private offsetChanged$;
    private destroy$;
    private timeout?;
    private document;
    private get target();
    constructor(el: ElementRef, doc: NzSafeAny, nzConfigService: NzConfigService, scrollSrv: NzScrollService, ngZone: NgZone, platform: Platform, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerListeners;
    private removeListeners;
    getOffset(element: Element, target: Element | Window | undefined): SimpleRect;
    private setAffixStyle;
    private setPlaceholderStyle;
    private syncPlaceholderStyle;
    updatePosition(e: Event): void;
}
