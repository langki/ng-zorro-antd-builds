/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzOptionItemComponent implements OnChanges {
    selected: boolean;
    activated: boolean;
    grouped: boolean;
    customContent: boolean;
    template: TemplateRef<NzSafeAny> | null;
    disabled: boolean;
    showState: boolean;
    label: string | null;
    value: NzSafeAny | null;
    activatedValue: NzSafeAny | null;
    listOfSelectedValue: NzSafeAny[];
    icon: TemplateRef<NzSafeAny> | null;
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    readonly itemClick: EventEmitter<any>;
    readonly itemHover: EventEmitter<any>;
    onHostMouseEnter(): void;
    onHostClick(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
