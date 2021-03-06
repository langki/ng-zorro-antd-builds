/**
 * @fileoverview added by tsickle
 * Generated from: date-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function NzDateConfig() { }
if (false) {
    /**
     * Customize the first day of a week
     * @type {?|undefined}
     */
    NzDateConfig.prototype.firstDayOfWeek;
}
/** @type {?} */
export var NZ_DATE_CONFIG = new InjectionToken('date-config');
/** @type {?} */
export var NZ_DATE_CONFIG_DEFAULT = {
    firstDayOfWeek: undefined
};
/**
 * @deprecated Will be removed in 10.0.0, please update to date-fns v2 format
 * @type {?}
 */
export var NZ_DATE_FNS_COMPATIBLE = new InjectionToken('date-format-convert');
/**
 * @param {?} config
 * @return {?}
 */
export function mergeDateConfig(config) {
    return __assign(__assign({}, NZ_DATE_CONFIG_DEFAULT), config);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJkYXRlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUcvQyxrQ0FHQzs7Ozs7O0lBREMsc0NBQThCOzs7QUFHaEMsTUFBTSxLQUFPLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBZSxhQUFhLENBQUM7O0FBRTdFLE1BQU0sS0FBTyxzQkFBc0IsR0FBaUI7SUFDbEQsY0FBYyxFQUFFLFNBQVM7Q0FDMUI7Ozs7O0FBS0QsTUFBTSxLQUFPLHNCQUFzQixHQUFHLElBQUksY0FBYyxDQUFVLHFCQUFxQixDQUFDOzs7OztBQUV4RixNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQW9CO0lBQ2xELDZCQUFZLHNCQUFzQixHQUFLLE1BQU0sRUFBRztBQUNsRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtEYXlJbmRleCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBOekRhdGVDb25maWcge1xuICAvKiogQ3VzdG9taXplIHRoZSBmaXJzdCBkYXkgb2YgYSB3ZWVrICovXG4gIGZpcnN0RGF5T2ZXZWVrPzogV2Vla0RheUluZGV4O1xufVxuXG5leHBvcnQgY29uc3QgTlpfREFURV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpEYXRlQ29uZmlnPignZGF0ZS1jb25maWcnKTtcblxuZXhwb3J0IGNvbnN0IE5aX0RBVEVfQ09ORklHX0RFRkFVTFQ6IE56RGF0ZUNvbmZpZyA9IHtcbiAgZmlyc3REYXlPZldlZWs6IHVuZGVmaW5lZFxufTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLCBwbGVhc2UgdXBkYXRlIHRvIGRhdGUtZm5zIHYyIGZvcm1hdFxuICovXG5leHBvcnQgY29uc3QgTlpfREFURV9GTlNfQ09NUEFUSUJMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignZGF0ZS1mb3JtYXQtY29udmVydCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlQ29uZmlnKGNvbmZpZzogTnpEYXRlQ29uZmlnKTogTnpEYXRlQ29uZmlnIHtcbiAgcmV0dXJuIHsgLi4uTlpfREFURV9DT05GSUdfREVGQVVMVCwgLi4uY29uZmlnIH07XG59XG4iXX0=