/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NumberInput, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTabComponent } from './tab.component';
import { NzAnimatedInterface, NzTabChangeEvent, NzTabPosition, NzTabPositionMode, NzTabsCanDeactivateFn, NzTabType } from './table.types';
import { NzTabsNavComponent } from './tabs-nav.component';
export declare class NzTabSetComponent implements AfterContentChecked, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private renderer;
    private elementRef;
    private cdr;
    private router;
    static ngAcceptInputType_nzLinkRouter: BooleanInput;
    static ngAcceptInputType_nzLinkExact: BooleanInput;
    static ngAcceptInputType_nzSelectedIndex: NumberInput;
    private indexToSelect;
    private el;
    private _selectedIndex;
    /** Subscription to tabs being added/removed. */
    private tabsSubscription;
    /** Subscription to changes in the tab labels. */
    private tabLabelSubscription;
    private destroy$;
    tabPositionMode: NzTabPositionMode;
    listOfNzTabComponent: QueryList<NzTabComponent>;
    nzTabsNavComponent?: NzTabsNavComponent;
    tabContent?: ElementRef;
    nzTabBarExtraContent?: TemplateRef<void>;
    nzShowPagination: boolean;
    nzAnimated: NzAnimatedInterface | boolean;
    nzHideAll: boolean;
    nzTabPosition: NzTabPosition;
    nzSize: NzSizeLDSType;
    nzTabBarGutter?: number;
    nzTabBarStyle: {
        [key: string]: string;
    } | null;
    nzType: NzTabType;
    nzLinkRouter: boolean;
    nzLinkExact: boolean;
    nzCanDeactivate: NzTabsCanDeactivateFn | null;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    readonly nzSelectChange: EventEmitter<NzTabChangeEvent>;
    readonly nzSelectedIndexChange: EventEmitter<number>;
    set nzSelectedIndex(value: number | null);
    get nzSelectedIndex(): number | null;
    get inkBarAnimated(): boolean;
    get tabPaneAnimated(): boolean;
    get isAnimationDisabled(): boolean;
    setPosition(value: NzTabPosition): void;
    clickLabel(index: number, disabled: boolean): void;
    private emitClickEvent;
    createChangeEvent(index: number): NzTabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    private subscribeToTabLabels;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef, cdr: ChangeDetectorRef, router: Router);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateRouterActive;
    private findShouldActiveTabIndex;
    private isLinkActive;
}
