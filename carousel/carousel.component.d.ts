/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzDragService, NzResizeService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NumberInput } from 'ng-zorro-antd/core/types';
import { NzCarouselContentDirective } from './carousel-content.directive';
import { NzCarouselBaseStrategy } from './strategies/base-strategy';
import { FromToInterface, NzCarouselDotPosition, NzCarouselEffects, NzCarouselStrategyRegistryItem } from './typings';
export declare class NzCarouselComponent implements AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    readonly nzConfigService: NzConfigService;
    private readonly renderer;
    private readonly cdr;
    private readonly platform;
    private readonly resizeService;
    private readonly nzDragService;
    private customStrategies;
    static ngAcceptInputType_nzEnableSwipe: BooleanInput;
    static ngAcceptInputType_nzDots: BooleanInput;
    static ngAcceptInputType_nzAutoPlay: BooleanInput;
    static ngAcceptInputType_nzAutoPlaySpeed: NumberInput;
    static ngAcceptInputType_nzTransitionSpeed: NumberInput;
    carouselContents: QueryList<NzCarouselContentDirective>;
    slickList?: ElementRef;
    slickTrack?: ElementRef;
    nzDotRender?: TemplateRef<{
        $implicit: number;
    }>;
    nzEffect: NzCarouselEffects;
    nzEnableSwipe: boolean;
    nzDots: boolean;
    nzAutoPlay: boolean;
    nzAutoPlaySpeed: number;
    nzTransitionSpeed: number;
    set nzDotPosition(value: NzCarouselDotPosition);
    get nzDotPosition(): NzCarouselDotPosition;
    private _dotPosition;
    readonly nzBeforeChange: EventEmitter<FromToInterface>;
    readonly nzAfterChange: EventEmitter<number>;
    activeIndex: number;
    el: HTMLElement;
    slickListEl: HTMLElement;
    slickTrackEl: HTMLElement;
    strategy?: NzCarouselBaseStrategy;
    vertical: boolean;
    transitionInProgress: number | null;
    private destroy$;
    private gestureRect;
    private pointerDelta;
    private isTransiting;
    private isDragging;
    constructor(elementRef: ElementRef, nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef, platform: Platform, resizeService: NzResizeService, nzDragService: NzDragService, customStrategies: NzCarouselStrategyRegistryItem[]);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onKeyDown(e: KeyboardEvent): void;
    next(): void;
    pre(): void;
    goTo(index: number): void;
    private switchStrategy;
    private scheduleNextTransition;
    private clearScheduledTransition;
    private markContentActive;
    /**
     * Drag carousel.
     */
    pointerDown: (event: TouchEvent | MouseEvent) => void;
    private syncStrategy;
}
