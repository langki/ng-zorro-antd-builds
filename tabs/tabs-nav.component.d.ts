/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Subscription } from 'rxjs';
import { NzTabLabelDirective } from './tab-label.directive';
import { NzTabPosition, NzTabPositionMode } from './table.types';
import { NzTabsInkBarDirective } from './tabs-ink-bar.directive';
export declare type ScrollDirection = 'after' | 'before';
export declare class NzTabsNavComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
    elementRef: ElementRef;
    private ngZone;
    private renderer;
    private cdr;
    private platform;
    private resizeService;
    private dir;
    static ngAcceptInputType_nzAnimated: BooleanInput;
    static ngAcceptInputType_nzHideBar: BooleanInput;
    static ngAcceptInputType_nzShowPagination: BooleanInput;
    private _tabPositionMode;
    private _scrollDistance;
    private _selectedIndex;
    /** Cached text content of the header. */
    private currentTextContent?;
    private destroy$;
    showPaginationControls: boolean;
    disableScrollAfter: boolean;
    disableScrollBefore: boolean;
    selectedIndexChanged: boolean;
    realignInkBar: Subscription | null;
    tabLabelCount?: number;
    scrollDistanceChanged?: boolean;
    listOfNzTabLabelDirective: QueryList<NzTabLabelDirective>;
    nzTabsInkBarDirective: NzTabsInkBarDirective;
    navContainerElement: ElementRef<HTMLDivElement>;
    navListElement: ElementRef<HTMLDivElement>;
    scrollListElement: ElementRef<HTMLDivElement>;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    nzTabBarExtraContent?: TemplateRef<void>;
    nzAnimated: boolean;
    nzHideBar: boolean;
    nzShowPagination: boolean;
    nzType: string;
    nzSize?: NzSizeLDSType;
    nzTabPosition: NzTabPosition;
    set nzPositionMode(value: NzTabPositionMode);
    get nzPositionMode(): NzTabPositionMode;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2, cdr: ChangeDetectorRef, platform: Platform, resizeService: NzResizeService, dir: Directionality);
    onContentChanges(): void;
    scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateTabScrollPosition(): void;
    updatePagination(): void;
    checkPaginationEnabled(): void;
    scrollToLabel(labelIndex: number): void;
    checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    set scrollDistance(v: number);
    get scrollDistance(): number;
    get viewWidthHeightPix(): number;
    get navContainerScrollPaddingPix(): number;
    get tabListScrollWidthHeightPix(): number;
    get tabListScrollOffSetWidthHeight(): number;
    getLayoutDirection(): Direction;
    alignInkBarToSelectedTab(): void;
}
