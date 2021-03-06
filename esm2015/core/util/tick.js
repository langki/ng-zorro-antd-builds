/**
 * @fileoverview added by tsickle
 * Generated from: tick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * @return {?}
 */
export function inNextTick() {
    /** @type {?} */
    const timer = new Subject();
    Promise.resolve().then((/**
     * @return {?}
     */
    () => timer.next()));
    return timer.pipe(take(1));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS91dGlsLyIsInNvdXJjZXMiOlsidGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0QyxNQUFNLFVBQVUsVUFBVTs7VUFDbEIsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFRO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk5leHRUaWNrKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICBjb25zdCB0aW1lciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGltZXIubmV4dCgpKTtcbiAgcmV0dXJuIHRpbWVyLnBpcGUodGFrZSgxKSk7XG59XG4iXX0=