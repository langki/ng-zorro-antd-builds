/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
import { WeekDayIndex } from 'ng-zorro-antd/core/time';
export interface NzDateConfig {
    /** Customize the first day of a week */
    firstDayOfWeek?: WeekDayIndex;
}
export declare const NZ_DATE_CONFIG: InjectionToken<NzDateConfig>;
export declare const NZ_DATE_CONFIG_DEFAULT: NzDateConfig;
/**
 * @deprecated Will be removed in 10.0.0, please update to date-fns v2 format
 */
export declare const NZ_DATE_FNS_COMPATIBLE: InjectionToken<boolean>;
export declare function mergeDateConfig(config: NzDateConfig): NzDateConfig;
