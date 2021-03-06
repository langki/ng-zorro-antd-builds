/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NumberInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService, NzTextI18nInterface } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './text-copy.component';
import { NzTextEditComponent } from './text-edit.component';
export declare class NzTypographyComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    nzConfigService: NzConfigService;
    private host;
    private cdr;
    private viewContainerRef;
    private renderer;
    private platform;
    private i18n;
    private resizeService;
    static ngAcceptInputType_nzCopyable: BooleanInput;
    static ngAcceptInputType_nzEditable: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzExpandable: BooleanInput;
    static ngAcceptInputType_nzEllipsis: BooleanInput;
    static ngAcceptInputType_nzEllipsisRows: NumberInput;
    nzCopyable: boolean;
    nzEditable: boolean;
    nzDisabled: boolean;
    nzExpandable: boolean;
    nzEllipsis: boolean;
    nzContent?: string;
    nzEllipsisRows: number;
    nzType: 'secondary' | 'warning' | 'danger' | undefined;
    nzCopyText: string | undefined;
    nzSuffix: string | undefined;
    readonly nzContentChange: EventEmitter<string>;
    readonly nzCopy: EventEmitter<string>;
    readonly nzExpandChange: EventEmitter<void>;
    readonly nzOnEllipsis: EventEmitter<boolean>;
    textEditRef?: NzTextEditComponent;
    textCopyRef?: NzTextCopyComponent;
    ellipsisContainer?: ElementRef<HTMLSpanElement>;
    expandableBtn?: ElementRef<HTMLSpanElement>;
    contentTemplate?: TemplateRef<{
        content: string;
    }>;
    locale: NzTextI18nInterface;
    document: Document;
    expandableBtnElementCache: HTMLElement | null;
    editing: boolean;
    ellipsisText: string | undefined;
    cssEllipsis: boolean;
    isEllipsis: boolean;
    expanded: boolean;
    ellipsisStr: string;
    get hasEllipsisObservers(): boolean;
    get canCssEllipsis(): boolean;
    private viewInit;
    private rfaId;
    private destroy$;
    private windowResizeSubscription;
    get copyText(): string;
    constructor(nzConfigService: NzConfigService, host: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, viewContainerRef: ViewContainerRef, renderer: Renderer2, platform: Platform, i18n: NzI18nService, document: NzSafeAny, resizeService: NzResizeService);
    onTextCopy(text: string): void;
    onStartEditing(): void;
    onEndEditing(text: string): void;
    onExpand(): void;
    canUseCSSEllipsis(): boolean;
    renderOnNextFrame(): void;
    getOriginContentViewRef(): {
        viewRef: EmbeddedViewRef<{
            content: string;
        }>;
        removeView(): void;
    };
    syncEllipsis(): void;
    private getExpandableBtnElement;
    private renderAndSubscribeWindowResize;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
