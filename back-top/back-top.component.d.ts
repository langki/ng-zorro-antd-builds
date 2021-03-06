/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { NumberInput, NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzBackTopComponent implements OnInit, OnDestroy, OnChanges {
    private doc;
    nzConfigService: NzConfigService;
    private scrollSrv;
    private platform;
    private cd;
    private zone;
    static ngAcceptInputType_nzVisibilityHeight: NumberInput;
    private scrollListenerDestroy$;
    private target;
    visible: boolean;
    nzTemplate?: TemplateRef<void>;
    nzVisibilityHeight: number;
    nzTarget?: string | HTMLElement;
    readonly nzClick: EventEmitter<boolean>;
    constructor(doc: NzSafeAny, nzConfigService: NzConfigService, scrollSrv: NzScrollService, platform: Platform, cd: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget;
    private handleScroll;
    private registerScrollEvent;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
