/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzTagComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    static ngAcceptInputType_nzChecked: BooleanInput;
    static ngAcceptInputType_nzNoAnimation: BooleanInput;
    presetColor: boolean;
    cacheClassName: string | null;
    nzMode: 'default' | 'closeable' | 'checkable';
    nzColor?: string;
    nzChecked: boolean;
    nzNoAnimation: boolean;
    readonly nzAfterClose: EventEmitter<void>;
    readonly nzOnClose: EventEmitter<MouseEvent>;
    readonly nzCheckedChange: EventEmitter<boolean>;
    private isPresetColor;
    private updateClassMap;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    afterAnimation(e: AnimationEvent): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
}
