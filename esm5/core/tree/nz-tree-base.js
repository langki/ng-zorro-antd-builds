/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    NzTreeBase.prototype.coerceTreeNodes = /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return new NzTreeNode(item, null, _this.nzTreeService); }));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.service = _this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodes = /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodeByKey = /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // flat tree nodes
        /** @type {?} */
        var nodes = [];
        /** @type {?} */
        var getNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.key === key; })) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    NzTreeBase.prototype.getCheckedNodeList = /**
     * Get checked nodes(merged)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    /**
     * Get selected nodes
     * @return {?}
     */
    NzTreeBase.prototype.getSelectedNodeList = /**
     * Get selected nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    /**
     * Get half checked nodes
     * @return {?}
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = /**
     * Get half checked nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    /**
     * Get expanded nodes
     * @return {?}
     */
    NzTreeBase.prototype.getExpandedNodeList = /**
     * Get expanded nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    NzTreeBase.prototype.getMatchedNodeList = /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());
export { NzTreeBase };
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pEO0lBQ0Usb0JBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7SUFFdkQ7O09BRUc7Ozs7OztJQUNILG9DQUFlOzs7OztJQUFmLFVBQWdCLEtBQWtCO1FBQWxDLGlCQVlDOztZQVhLLEtBQUssR0FBaUIsRUFBRTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRCw4QkFBOEI7WUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWdCO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gscUNBQWdCOzs7OztJQUFoQixVQUFpQixHQUFXOzs7WUFFcEIsS0FBSyxHQUFpQixFQUFFOztZQUN4QixPQUFPOzs7O1FBQUcsVUFBQyxJQUFnQjtZQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWIsQ0FBYSxFQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBa0I7Ozs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQW1COzs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFzQjs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3Q0FBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQWtCOzs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQS9FRCxJQStFQzs7OztJQTlFYSxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE56VHJlZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIENvZXJjZXMgYSB2YWx1ZSh7QGxpbmsgYW55W119KSB0byBhIFRyZWVOb2Rlcyh7QGxpbmsgTnpUcmVlTm9kZVtdfSlcbiAgICovXG4gIGNvZXJjZVRyZWVOb2Rlcyh2YWx1ZTogTnpTYWZlQW55W10pOiBOelRyZWVOb2RlW10ge1xuICAgIGxldCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZSkpIHtcbiAgICAgIC8vIGhhcyBub3QgYmVlbiBuZXcgTnpUcmVlTm9kZVxuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoaXRlbSA9PiBuZXcgTnpUcmVlTm9kZShpdGVtLCBudWxsLCB0aGlzLm56VHJlZVNlcnZpY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoKGl0ZW06IE56VHJlZU5vZGUpID0+IHtcbiAgICAgICAgaXRlbS5zZXJ2aWNlID0gdGhpcy5uelRyZWVTZXJ2aWNlO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlcyh7QGxpbmsgTnpUcmVlTm9kZX0pXG4gICAqL1xuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQge0BsaW5rIE56VHJlZU5vZGV9IHdpdGgga2V5XG4gICAqL1xuICBnZXRUcmVlTm9kZUJ5S2V5KGtleTogc3RyaW5nKTogTnpUcmVlTm9kZSB8IG51bGwge1xuICAgIC8vIGZsYXQgdHJlZSBub2Rlc1xuICAgIGNvbnN0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBjb25zdCBnZXROb2RlID0gKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgZ2V0Tm9kZShuKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5nZXRUcmVlTm9kZXMoKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgZ2V0Tm9kZShuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZXMuZmluZChuID0+IG4ua2V5ID09PSBrZXkpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoZWNrZWQgbm9kZXMobWVyZ2VkKVxuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgbm9kZXNcbiAgICovXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGFsZiBjaGVja2VkIG5vZGVzXG4gICAqL1xuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1hdGNoZWQgbm9kZXMoaWYgbnpTZWFyY2hWYWx1ZSBpcyBub3QgbnVsbClcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XG4gIH1cbn1cbiJdfQ==