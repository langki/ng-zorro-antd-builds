/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzEmptyCustomContent, NzEmptySize } from './config';
declare type NzEmptyContentType = 'component' | 'template' | 'string';
export declare class NzEmbedEmptyComponent implements OnChanges, OnInit, OnDestroy {
    private configService;
    private viewContainerRef;
    private cdr;
    private injector;
    nzComponentName?: string;
    specificContent?: NzEmptyCustomContent;
    content?: NzEmptyCustomContent;
    contentType: NzEmptyContentType;
    contentPortal?: Portal<NzSafeAny>;
    size: NzEmptySize;
    private destroy$;
    constructor(configService: NzConfigService, viewContainerRef: ViewContainerRef, cdr: ChangeDetectorRef, injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private renderEmpty;
    private subscribeDefaultEmptyContentChange;
    private getUserDefaultEmptyContent;
}
export {};
