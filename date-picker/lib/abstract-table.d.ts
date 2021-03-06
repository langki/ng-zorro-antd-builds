/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
import { DateBodyRow, DateCell } from './interface';
export declare abstract class AbstractTable implements OnInit, OnChanges {
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    headRow: DateCell[];
    bodyRows: DateBodyRow[];
    MAX_ROW: number;
    MAX_COL: number;
    prefixCls: string;
    value: CandyDate;
    activeDate: CandyDate;
    showWeek: boolean;
    disabledDate?: (d: Date) => boolean;
    cellRender?: string | TemplateRef<Date> | FunctionProp<TemplateRef<Date> | string>;
    fullCellRender?: string | TemplateRef<Date> | FunctionProp<TemplateRef<Date> | string>;
    readonly valueChange: EventEmitter<CandyDate>;
    protected render(): void;
    trackByBodyRow(_index: number, item: DateBodyRow): NzSafeAny;
    trackByBodyColumn(_index: number, item: DateCell): NzSafeAny;
    abstract makeHeadRow(): DateCell[];
    abstract makeBodyRows(): DateBodyRow[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
