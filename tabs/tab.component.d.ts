/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { NzTabLinkDirective } from './tab-link.directive';
export declare class NzTabComponent implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    private renderer;
    static ngAcceptInputType_nzForceRender: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    position: number | null;
    origin: number | null;
    isActive: boolean;
    readonly stateChanges: Subject<void>;
    content: TemplateRef<void>;
    title: TemplateRef<void>;
    template: TemplateRef<void>;
    linkDirective: NzTabLinkDirective;
    nzTitle?: string | TemplateRef<void>;
    nzRouterIdentifier?: string;
    nzForceRender: boolean;
    nzDisabled: boolean;
    readonly nzClick: EventEmitter<void>;
    readonly nzSelect: EventEmitter<void>;
    readonly nzDeselect: EventEmitter<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
