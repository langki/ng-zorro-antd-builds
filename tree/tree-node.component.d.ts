/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChange, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent, NzTreeBaseService, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { Observable, Subject } from 'rxjs';
export declare class NzTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeBaseService;
    private ngZone;
    private renderer;
    private elementRef;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    static ngAcceptInputType_nzShowLine: BooleanInput;
    static ngAcceptInputType_nzShowExpand: BooleanInput;
    static ngAcceptInputType_nzCheckable: BooleanInput;
    static ngAcceptInputType_nzAsyncData: BooleanInput;
    static ngAcceptInputType_nzHideUnMatched: BooleanInput;
    static ngAcceptInputType_nzNoAnimation: BooleanInput;
    static ngAcceptInputType_nzSelectMode: BooleanInput;
    static ngAcceptInputType_nzShowIcon: BooleanInput;
    /**
     * for global property
     */
    icon: string;
    title: string;
    isLoading: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    isMatched: boolean;
    isExpanded: boolean;
    isLeaf: boolean;
    isChecked?: boolean;
    isHalfChecked?: boolean;
    isDisableCheckbox?: boolean;
    isSelectable?: boolean;
    canHide?: boolean;
    isStart?: boolean[];
    isEnd?: boolean[];
    nzTreeNode: NzTreeNode;
    nzShowLine?: boolean;
    nzShowExpand?: boolean;
    nzCheckable?: boolean;
    nzAsyncData?: boolean;
    nzHideUnMatched: boolean;
    nzNoAnimation: boolean;
    nzSelectMode: boolean;
    nzShowIcon: boolean;
    nzExpandedIcon?: TemplateRef<{
        $implicit: NzTreeNode;
        origin: NzTreeNodeOptions;
    }>;
    nzTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
        origin: NzTreeNodeOptions;
    }> | null;
    nzBeforeDrop?: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzSearchValue: string;
    nzDraggable: boolean;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    /**
     * drag var
     */
    destroy$: Subject<unknown>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    get displayStyle(): string;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
    onMousedown(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    clickExpand(event: MouseEvent): void;
    clickSelect(event: MouseEvent): void;
    dblClick(event: MouseEvent): void;
    contextMenu(event: MouseEvent): void;
    /**
     * check node
     * @param event
     */
    clickCheckBox(event: MouseEvent): void;
    clearDragClass(): void;
    /**
     * drag event
     * @param e
     */
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    /**
     * Listening to dragging events.
     */
    handDragEvent(): void;
    markForCheck(): void;
    constructor(nzTreeService: NzTreeBaseService, ngZone: NgZone, renderer: Renderer2, elementRef: ElementRef, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
