/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService, NzCalendarI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell, DayCell } from './interface';
export declare class DateTableComponent extends AbstractTable implements OnChanges, OnInit {
    private i18n;
    private dateHelper;
    locale: NzCalendarI18nInterface;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    readonly dayHover: EventEmitter<CandyDate>;
    constructor(i18n: NzI18nService, dateHelper: DateHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    private isDateRealChange;
    private isSameDate;
    private changeValueFromInside;
    makeHeadRow(): DayCell[];
    private getVeryShortWeekFormat;
    makeBodyRows(): DateBodyRow[];
    getClassMap(cell: DayCell): {
        [key: string]: boolean;
    };
    trackByBodyRow(_index: number, item: DateBodyRow): string;
    trackByBodyColumn(_index: number, item: DateCell): string;
}
