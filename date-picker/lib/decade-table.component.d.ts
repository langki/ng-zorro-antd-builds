/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell, DecadeCell } from './interface';
export declare class DecadeTableComponent extends AbstractTable implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void;
    get startYear(): number;
    get endYear(): number;
    makeHeadRow(): DateCell[];
    makeBodyRows(): DateBodyRow[];
    getClassMap(cell: DecadeCell): {
        [key: string]: boolean;
    };
    private chooseDecade;
}
