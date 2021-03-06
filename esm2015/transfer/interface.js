/**
 * @fileoverview added by tsickle
 * Generated from: interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function TransferItem() { }
if (false) {
    /** @type {?} */
    TransferItem.prototype.title;
    /** @type {?|undefined} */
    TransferItem.prototype.direction;
    /** @type {?|undefined} */
    TransferItem.prototype.disabled;
    /** @type {?|undefined} */
    TransferItem.prototype.checked;
    /** @type {?|undefined} */
    TransferItem.prototype.hide;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @record
 */
export function TransferCanMove() { }
if (false) {
    /** @type {?} */
    TransferCanMove.prototype.direction;
    /** @type {?} */
    TransferCanMove.prototype.list;
}
/**
 * @record
 */
export function TransferChange() { }
if (false) {
    /** @type {?} */
    TransferChange.prototype.from;
    /** @type {?} */
    TransferChange.prototype.to;
    /** @type {?} */
    TransferChange.prototype.list;
}
/**
 * @record
 */
export function TransferSearchChange() { }
if (false) {
    /** @type {?} */
    TransferSearchChange.prototype.direction;
    /** @type {?} */
    TransferSearchChange.prototype.value;
}
/**
 * @record
 */
export function TransferSelectChange() { }
if (false) {
    /** @type {?} */
    TransferSelectChange.prototype.direction;
    /** @type {?} */
    TransferSelectChange.prototype.checked;
    /** @type {?} */
    TransferSelectChange.prototype.list;
    /** @type {?|undefined} */
    TransferSelectChange.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbImludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBLGtDQU9DOzs7SUFOQyw2QkFBYzs7SUFDZCxpQ0FBOEI7O0lBQzlCLGdDQUFtQjs7SUFDbkIsK0JBQWtCOztJQUNsQiw0QkFBZTs7Ozs7O0FBSWpCLHFDQUdDOzs7SUFGQyxvQ0FBNkI7O0lBQzdCLCtCQUFxQjs7Ozs7QUFHdkIsb0NBSUM7OztJQUhDLDhCQUF3Qjs7SUFDeEIsNEJBQXNCOztJQUN0Qiw4QkFBcUI7Ozs7O0FBR3ZCLDBDQUdDOzs7SUFGQyx5Q0FBNkI7O0lBQzdCLHFDQUFjOzs7OztBQUdoQiwwQ0FLQzs7O0lBSkMseUNBQTZCOztJQUM3Qix1Q0FBaUI7O0lBQ2pCLG9DQUFxQjs7SUFDckIsb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFRyYW5zZmVyRGlyZWN0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2Zlckl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkaXJlY3Rpb24/OiBUcmFuc2ZlckRpcmVjdGlvbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgaGlkZT86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlckNhbk1vdmUge1xuICBkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uO1xuICBsaXN0OiBUcmFuc2Zlckl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlckNoYW5nZSB7XG4gIGZyb206IFRyYW5zZmVyRGlyZWN0aW9uO1xuICB0bzogVHJhbnNmZXJEaXJlY3Rpb247XG4gIGxpc3Q6IFRyYW5zZmVySXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVyU2VhcmNoQ2hhbmdlIHtcbiAgZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbjtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlclNlbGVjdENoYW5nZSB7XG4gIGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb247XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGxpc3Q6IFRyYW5zZmVySXRlbVtdO1xuICBpdGVtPzogVHJhbnNmZXJJdGVtO1xufVxuIl19