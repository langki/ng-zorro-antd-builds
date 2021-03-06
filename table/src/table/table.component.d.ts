/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTableData, NzTableLayout, NzTablePaginationPosition, NzTableQueryParams, NzTableSize } from '../table.types';
import { NzTableInnerScrollComponent } from './table-inner-scroll.component';
import { NzTableVirtualScrollDirective } from './table-virtual-scroll.directive';
export declare class NzTableComponent<T = NzSafeAny> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private elementRef;
    private nzResizeObserver;
    private nzConfigService;
    private cdr;
    private nzTableStyleService;
    private nzTableDataService;
    static ngAcceptInputType_nzFrontPagination: BooleanInput;
    static ngAcceptInputType_nzTemplateMode: BooleanInput;
    static ngAcceptInputType_nzShowPagination: BooleanInput;
    static ngAcceptInputType_nzLoading: BooleanInput;
    static ngAcceptInputType_nzBordered: BooleanInput;
    static ngAcceptInputType_nzShowSizeChanger: BooleanInput;
    static ngAcceptInputType_nzHideOnSinglePage: BooleanInput;
    static ngAcceptInputType_nzShowQuickJumper: BooleanInput;
    static ngAcceptInputType_nzSimple: BooleanInput;
    nzTableLayout: NzTableLayout;
    nzShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }> | null;
    nzItemRender: TemplateRef<PaginationItemRenderContext> | null;
    nzTitle: string | TemplateRef<NzSafeAny> | null;
    nzFooter: string | TemplateRef<NzSafeAny> | null;
    nzNoResult: string | TemplateRef<NzSafeAny> | undefined;
    nzPageSizeOptions: number[];
    nzVirtualItemSize: number;
    nzVirtualMaxBufferPx: number;
    nzVirtualMinBufferPx: number;
    nzVirtualForTrackBy: TrackByFunction<NzTableData>;
    nzLoadingDelay: number;
    nzPageIndex: number;
    nzPageSize: number;
    nzTotal: number;
    nzWidthConfig: Array<string | null>;
    nzData: T[];
    nzPaginationPosition: NzTablePaginationPosition;
    nzScroll: {
        x?: string | null;
        y?: string | null;
    };
    nzFrontPagination: boolean;
    nzTemplateMode: boolean;
    nzShowPagination: boolean;
    nzLoading: boolean;
    nzLoadingIndicator: TemplateRef<NzSafeAny> | null;
    nzBordered: boolean;
    nzSize: NzTableSize;
    nzShowSizeChanger: boolean;
    nzHideOnSinglePage: boolean;
    nzShowQuickJumper: boolean;
    nzSimple: boolean;
    readonly nzPageSizeChange: EventEmitter<number>;
    readonly nzPageIndexChange: EventEmitter<number>;
    readonly nzQueryParams: EventEmitter<NzTableQueryParams>;
    readonly nzCurrentPageDataChange: EventEmitter<any[]>;
    /** public data for ngFor tr */
    data: T[];
    cdkVirtualScrollViewport?: CdkVirtualScrollViewport;
    scrollX: string | null;
    scrollY: string | null;
    theadTemplate: TemplateRef<NzSafeAny> | null;
    listOfAutoColWidth: Array<string | null>;
    listOfManualColWidth: Array<string | null>;
    hasFixLeft: boolean;
    hasFixRight: boolean;
    private destroy$;
    private loading$;
    private templateMode$;
    nzVirtualScrollDirective: NzTableVirtualScrollDirective;
    nzTableInnerScrollComponent: NzTableInnerScrollComponent;
    verticalScrollBarWidth: number;
    onPageSizeChange(size: number): void;
    onPageIndexChange(index: number): void;
    constructor(elementRef: ElementRef, nzResizeObserver: NzResizeObserver, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, nzTableStyleService: NzTableStyleService, nzTableDataService: NzTableDataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
