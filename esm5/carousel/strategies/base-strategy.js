/**
 * @fileoverview added by tsickle
 * Generated from: strategies/base-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
NzCarouselBaseStrategy = /** @class */ (function () {
    function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[0].el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[this.maxIndex].el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.withCarouselContents = /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    };
    /**
     * When user drag the carousel component.
     * @optional
     */
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dragging = /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) { };
    /**
     * Destroy a scroll strategy.
     */
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dispose = /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    function () { };
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.getFromToInBoundary = /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    function (f, t) {
        /** @type {?} */
        var length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    };
    return NzCarouselBaseStrategy;
}());
/**
 * @abstract
 */
export { NzCarouselBaseStrategy };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7SUFzQkUsZ0NBQVksaUJBQThDLEVBQVksR0FBc0IsRUFBWSxRQUFtQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDekgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFkRCxzQkFBYyw0Q0FBUTs7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsMkNBQU87Ozs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFjLDBDQUFNOzs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBTUQ7OztPQUdHOzs7Ozs7SUFDSCxxREFBb0I7Ozs7O0lBQXBCLFVBQXFCLFFBQXNEOzs7WUFFbkUsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7WUFDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFPRDs7O09BR0c7Ozs7Ozs7SUFDSCx5Q0FBUTs7Ozs7O0lBQVIsVUFBUyxPQUFzQixJQUFTLENBQUM7SUFFekM7O09BRUc7Ozs7O0lBQ0gsd0NBQU87Ozs7SUFBUCxjQUFpQixDQUFDOzs7Ozs7O0lBRVIsb0RBQW1COzs7Ozs7SUFBN0IsVUFBOEIsQ0FBUyxFQUFFLENBQVM7O1lBQzFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUE5REQsSUE4REM7Ozs7Ozs7Ozs7SUE1REMsbURBQWdFOzs7OztJQUNoRSwwQ0FBa0Q7Ozs7O0lBQ2xELDZDQUFvQzs7Ozs7SUFDcEMsOENBQXFDOzs7OztJQUNyQyx3Q0FBMEI7Ozs7O0lBQzFCLDJDQUE2Qjs7Ozs7SUFDN0IsNENBQThCOzs7OztJQWM4QixxQ0FBZ0M7Ozs7O0lBQUUsMENBQTZCOzs7Ozs7OztJQXVCM0gsZ0VBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRnJvbVRvSW50ZXJmYWNlLCBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsIFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi90eXBpbmdzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xuICAvLyBQcm9wZXJ0aWVzIHRoYXQgc3RyYXRlZ2llcyBtYXkgd2FudCB0byB1c2UuXG4gIHByb3RlY3RlZCBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlIHwgbnVsbDtcbiAgcHJvdGVjdGVkIGNvbnRlbnRzITogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmVbXTtcbiAgcHJvdGVjdGVkIHNsaWNrTGlzdEVsITogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBzbGlja1RyYWNrRWwhOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGxlbmd0aCE6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHVuaXRXaWR0aCE6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHVuaXRIZWlnaHQhOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGdldCBtYXhJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZpcnN0RWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzWzBdLmVsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBsYXN0RWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzW3RoaXMubWF4SW5kZXhdLmVsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5jYXJvdXNlbENvbXBvbmVudCA9IGNhcm91c2VsQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZHJhZ2dpbmcgc2VxdWVuY2VzLlxuICAgKiBAcGFyYW0gY29udGVudHNcbiAgICovXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xuICAgIC8vIFRPRE86IGNhcm91c2VsIGFuZCBpdHMgY29udGVudHMgc2hvdWxkIGJlIHNlcGFyYXRlZC5cbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xuICAgIGNvbnN0IHJlY3QgPSBjYXJvdXNlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gY2Fyb3VzZWwuc2xpY2tMaXN0RWw7XG4gICAgdGhpcy5zbGlja1RyYWNrRWwgPSBjYXJvdXNlbC5zbGlja1RyYWNrRWw7XG4gICAgdGhpcy51bml0V2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMudW5pdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyA/IGNvbnRlbnRzLnRvQXJyYXkoKSA6IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb250ZW50cy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYWJzdHJhY3Qgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBXaGVuIHVzZXIgZHJhZyB0aGUgY2Fyb3VzZWwgY29tcG9uZW50LlxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBzY3JvbGwgc3RyYXRlZ3kuXG4gICAqL1xuICBkaXNwb3NlKCk6IHZvaWQge31cblxuICBwcm90ZWN0ZWQgZ2V0RnJvbVRvSW5Cb3VuZGFyeShmOiBudW1iZXIsIHQ6IG51bWJlcik6IEZyb21Ub0ludGVyZmFjZSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5tYXhJbmRleCArIDE7XG4gICAgcmV0dXJuIHsgZnJvbTogKGYgKyBsZW5ndGgpICUgbGVuZ3RoLCB0bzogKHQgKyBsZW5ndGgpICUgbGVuZ3RoIH07XG4gIH1cbn1cbiJdfQ==