/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzThAddOnComponent } from '../cell/th-addon.component';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTrDirective } from './tr.directive';
export declare class NzTheadComponent implements AfterContentInit, OnDestroy, AfterViewInit, OnInit, OnChanges {
    private elementRef;
    private renderer;
    private nzTableStyleService;
    private nzTableDataService;
    static ngAcceptInputType_nzSingleSort: BooleanInput;
    private destroy$;
    isInsideTable: boolean;
    templateRef: TemplateRef<NzSafeAny>;
    listOfNzTrDirective: QueryList<NzTrDirective>;
    listOfNzThAddOnComponent: QueryList<NzThAddOnComponent>;
    /** @deprecated use nzSortFn and nzSortPriority instead **/
    nzSingleSort: boolean;
    /** @deprecated use nzSortOrderChange instead **/
    readonly nzSortChange: EventEmitter<{
        key: any;
        value: import("../table.types").NzTableSortOrder;
    }>;
    readonly nzSortOrderChange: EventEmitter<{
        key: any;
        value: import("../table.types").NzTableSortOrder;
    }>;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzTableStyleService: NzTableStyleService, nzTableDataService: NzTableDataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
