/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base-util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} node
 * @return {?}
 */
export function isCheckDisabled(node) {
    var isDisabled = node.isDisabled, isDisableCheckbox = node.isDisableCheckbox;
    return !!(isDisabled || isDisableCheckbox);
}
/**
 * @param {?} needle
 * @param {?} haystack
 * @return {?}
 */
export function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
/**
 * @param {?} level
 * @param {?} index
 * @return {?}
 */
export function getPosition(level, index) {
    return level + "-" + index;
}
/**
 * @param {?} key
 * @param {?} pos
 * @return {?}
 */
export function getKey(key, pos) {
    if (key !== null && key !== undefined) {
        return key;
    }
    return pos;
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param {?=} treeNodeList Origin data node list
 * @param {?=} expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 * @return {?}
 */
export function flattenTreeData(treeNodeList, expandedKeys) {
    if (treeNodeList === void 0) { treeNodeList = []; }
    if (expandedKeys === void 0) { expandedKeys = []; }
    /** @type {?} */
    var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
    /** @type {?} */
    var flattenList = [];
    /**
     * @param {?} list
     * @param {?=} parent
     * @return {?}
     */
    function dig(list, parent) {
        if (parent === void 0) { parent = null; }
        return list.map((/**
         * @param {?} treeNode
         * @param {?} index
         * @return {?}
         */
        function (treeNode, index) {
            /** @type {?} */
            var pos = getPosition(parent ? parent.pos : '0', index);
            /** @type {?} */
            var mergedKey = getKey(treeNode.key, pos);
            treeNode.isStart = __spread((parent ? parent.isStart : []), [index === 0]);
            treeNode.isEnd = __spread((parent ? parent.isEnd : []), [index === list.length - 1]);
            // Add FlattenDataNode into list
            // TODO: only need data here.
            /** @type {?} */
            var flattenNode = {
                parent: parent,
                pos: pos,
                children: [],
                data: treeNode,
                isStart: __spread((parent ? parent.isStart : []), [index === 0]),
                isEnd: __spread((parent ? parent.isEnd : []), [index === list.length - 1])
            };
            flattenList.push(flattenNode);
            // Loop treeNode children
            if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
                flattenNode.children = dig(treeNode.children || [], flattenNode);
            }
            else {
                flattenNode.children = [];
            }
            return flattenNode;
        }));
    }
    dig(treeNodeList);
    return flattenList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLXV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtYmFzZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFnQjtJQUN0QyxJQUFBLDRCQUFVLEVBQUUsMENBQWlCO0lBQ3JDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLGlCQUFpQixDQUFDLENBQUM7QUFDN0MsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFpQixFQUFFLFFBQXFCO0lBQ2hFLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQXNCLEVBQUUsS0FBYTtJQUMvRCxPQUFVLEtBQUssU0FBSSxLQUFPLENBQUM7QUFDN0IsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFrQixFQUFFLEdBQVc7SUFDcEQsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDckMsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsZUFBZSxDQUFDLFlBQStCLEVBQUUsWUFBeUM7SUFBMUUsNkJBQUEsRUFBQSxpQkFBK0I7SUFBRSw2QkFBQSxFQUFBLGlCQUF5Qzs7UUFDbEcsY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDOztRQUNuRSxXQUFXLEdBQWtCLEVBQUU7Ozs7OztJQUVyQyxTQUFTLEdBQUcsQ0FBQyxJQUFrQixFQUFFLE1BQWlDO1FBQWpDLHVCQUFBLEVBQUEsYUFBaUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLFFBQVEsRUFBRSxLQUFLOztnQkFDeEIsR0FBRyxHQUFXLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7O2dCQUMzRCxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzNDLFFBQVEsQ0FBQyxPQUFPLFlBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEtBQUssS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUNwRSxRQUFRLENBQUMsS0FBSyxZQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQzs7OztnQkFHeEUsV0FBVyxHQUFnQjtnQkFDL0IsTUFBTSxRQUFBO2dCQUNOLEdBQUcsS0FBQTtnQkFDSCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLFdBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEtBQUssS0FBSyxDQUFDLEVBQUM7Z0JBQ3pELEtBQUssV0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2FBQ3BFO1lBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU5Qix5QkFBeUI7WUFDekIsSUFBSSxZQUFZLEtBQUssSUFBSSxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDakYsV0FBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDM0I7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEIsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBGbGF0dGVuTm9kZSwgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZUtleSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGVja0Rpc2FibGVkKG5vZGU6IE56VHJlZU5vZGUpOiBib29sZWFuIHtcbiAgY29uc3QgeyBpc0Rpc2FibGVkLCBpc0Rpc2FibGVDaGVja2JveCB9ID0gbm9kZTtcbiAgcmV0dXJuICEhKGlzRGlzYWJsZWQgfHwgaXNEaXNhYmxlQ2hlY2tib3gpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFycmF5KG5lZWRsZTogTnpTYWZlQW55LCBoYXlzdGFjazogTnpTYWZlQW55W10pOiBib29sZWFuIHtcbiAgcmV0dXJuIGhheXN0YWNrLmxlbmd0aCA+IDAgJiYgaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihsZXZlbDogc3RyaW5nIHwgbnVtYmVyLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2xldmVsfS0ke2luZGV4fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXkoa2V5OiBOelRyZWVOb2RlS2V5LCBwb3M6IHN0cmluZyk6IE56VHJlZU5vZGVLZXkge1xuICBpZiAoa2V5ICE9PSBudWxsICYmIGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gcG9zO1xufVxuXG4vKipcbiAqIEZsYXQgbmVzdCB0cmVlIGRhdGEgaW50byBmbGF0dGVuIGxpc3QuIFRoaXMgaXMgdXNlZCBmb3IgdmlydHVhbCBsaXN0IHJlbmRlci5cbiAqIEBwYXJhbSB0cmVlTm9kZUxpc3QgT3JpZ2luIGRhdGEgbm9kZSBsaXN0XG4gKiBAcGFyYW0gZXhwYW5kZWRLZXlzXG4gKiBuZWVkIGV4cGFuZGVkIGtleXMsIHByb3ZpZGVzIGB0cnVlYCBtZWFucyBhbGwgZXhwYW5kZWQgKHVzZWQgaW4gYHJjLXRyZWUtc2VsZWN0YCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuVHJlZURhdGEodHJlZU5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXSwgZXhwYW5kZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gfCB0cnVlID0gW10pOiBGbGF0dGVuTm9kZVtdIHtcbiAgY29uc3QgZXhwYW5kZWRLZXlTZXQgPSBuZXcgU2V0KGV4cGFuZGVkS2V5cyA9PT0gdHJ1ZSA/IFtdIDogZXhwYW5kZWRLZXlzKTtcbiAgY29uc3QgZmxhdHRlbkxpc3Q6IEZsYXR0ZW5Ob2RlW10gPSBbXTtcblxuICBmdW5jdGlvbiBkaWcobGlzdDogTnpUcmVlTm9kZVtdLCBwYXJlbnQ6IEZsYXR0ZW5Ob2RlIHwgbnVsbCA9IG51bGwpOiBGbGF0dGVuTm9kZVtdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoKHRyZWVOb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcG9zOiBzdHJpbmcgPSBnZXRQb3NpdGlvbihwYXJlbnQgPyBwYXJlbnQucG9zIDogJzAnLCBpbmRleCk7XG4gICAgICBjb25zdCBtZXJnZWRLZXkgPSBnZXRLZXkodHJlZU5vZGUua2V5LCBwb3MpO1xuICAgICAgdHJlZU5vZGUuaXNTdGFydCA9IFsuLi4ocGFyZW50ID8gcGFyZW50LmlzU3RhcnQgOiBbXSksIGluZGV4ID09PSAwXTtcbiAgICAgIHRyZWVOb2RlLmlzRW5kID0gWy4uLihwYXJlbnQgPyBwYXJlbnQuaXNFbmQgOiBbXSksIGluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgLy8gQWRkIEZsYXR0ZW5EYXRhTm9kZSBpbnRvIGxpc3RcbiAgICAgIC8vIFRPRE86IG9ubHkgbmVlZCBkYXRhIGhlcmUuXG4gICAgICBjb25zdCBmbGF0dGVuTm9kZTogRmxhdHRlbk5vZGUgPSB7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgcG9zLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIGRhdGE6IHRyZWVOb2RlLFxuICAgICAgICBpc1N0YXJ0OiBbLi4uKHBhcmVudCA/IHBhcmVudC5pc1N0YXJ0IDogW10pLCBpbmRleCA9PT0gMF0sXG4gICAgICAgIGlzRW5kOiBbLi4uKHBhcmVudCA/IHBhcmVudC5pc0VuZCA6IFtdKSwgaW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMV1cbiAgICAgIH07XG5cbiAgICAgIGZsYXR0ZW5MaXN0LnB1c2goZmxhdHRlbk5vZGUpO1xuXG4gICAgICAvLyBMb29wIHRyZWVOb2RlIGNoaWxkcmVuXG4gICAgICBpZiAoZXhwYW5kZWRLZXlzID09PSB0cnVlIHx8IGV4cGFuZGVkS2V5U2V0LmhhcyhtZXJnZWRLZXkpIHx8IHRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgZmxhdHRlbk5vZGUuY2hpbGRyZW4gPSBkaWcodHJlZU5vZGUuY2hpbGRyZW4gfHwgW10sIGZsYXR0ZW5Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYXR0ZW5Ob2RlLmNoaWxkcmVuID0gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGF0dGVuTm9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZyh0cmVlTm9kZUxpc3QpO1xuICByZXR1cm4gZmxhdHRlbkxpc3Q7XG59XG4iXX0=