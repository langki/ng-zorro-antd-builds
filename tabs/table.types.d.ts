/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
export interface NzAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class NzTabChangeEvent {
    index?: number;
    tab: NzSafeAny;
}
export declare type NzTabsCanDeactivateFn = (fromIndex: number, toIndex: number) => Observable<boolean> | Promise<boolean> | boolean;
export declare type NzTabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare type NzTabType = 'line' | 'card';
