/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __values } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
export function BreadcrumbOption() { }
if (false) {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
var NzBreadCrumbComponent = /** @class */ (function () {
    function NzBreadCrumbComponent(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    };
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.navigate = /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    function (url, e) {
        var _this = this;
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.injector.get(Router).navigateByUrl(url).then(); })).then();
    };
    /**
     * @private
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.registerRouterChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            /** @type {?} */
            var router = this.injector.get(Router);
            /** @type {?} */
            var activatedRoute_1 = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                _this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
        }
    };
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.getBreadcrumbs = /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        var e_1, _a;
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        /** @type {?} */
        var children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet === PRIMARY_OUTLET) {
                    // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                    // Parse this layer and generate a breadcrumb item.
                    /** @type {?} */
                    var routeURL = child.snapshot.url
                        .map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    function (segment) { return segment.path; }))
                        .filter((/**
                     * @param {?} path
                     * @return {?}
                     */
                    function (path) { return path; }))
                        .join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    /** @type {?} */
                    var breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                    // If have data, go to generate a breadcrumb for it.
                    if (routeURL && breadcrumbLabel) {
                        /** @type {?} */
                        var breadcrumb = {
                            label: breadcrumbLabel,
                            params: child.snapshot.params,
                            url: nextUrl
                        };
                        breadcrumbs.push(breadcrumb);
                    }
                    return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    NzBreadCrumbComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-breadcrumb',
                    exportAs: 'nzBreadcrumb',
                    preserveWhitespaces: false,
                    template: "\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"nzAutoGenerate\">\n      <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n        <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n      </nz-breadcrumb-item>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzBreadCrumbComponent.propDecorators = {
        nzAutoGenerate: [{ type: Input }],
        nzSeparator: [{ type: Input }],
        nzRouteLabel: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
    return NzBreadCrumbComponent;
}());
export { NzBreadCrumbComponent };
if (false) {
    /** @type {?} */
    NzBreadCrumbComponent.ngAcceptInputType_nzAutoGenerate;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzAutoGenerate;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzSeparator;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzRouteLabel;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJicmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFVLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFOUQsc0NBSUM7OztJQUhDLGlDQUFjOztJQUNkLGtDQUFlOztJQUNmLCtCQUFZOztBQUdkO0lBMEJFLCtCQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxHQUFzQixFQUM5QixVQUFzQixFQUN0QixRQUFtQjtRQUpYLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWFAsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkMsZ0JBQVcsR0FBc0MsR0FBRyxDQUFDO1FBQ3JELGlCQUFZLEdBQVcsWUFBWSxDQUFDO1FBRTdDLGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztR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RDtvQkFDcEQsSUFBSSxRQUFRLElBQUksZUFBZSxFQUFFOzs0QkFDekIsVUFBVSxHQUFxQjs0QkFDbkMsS0FBSyxFQUFFLGVBQWU7NEJBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU07NEJBQzdCLEdBQUcsRUFBRSxPQUFPO3lCQUNiO3dCQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzlCO29CQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUN6RDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztnQkFyR0YsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsNFRBT1Q7aUJBQ0Y7Ozs7Z0JBckNDLFFBQVE7Z0JBRVIsTUFBTTtnQkFMTixpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBTVYsU0FBUzs7O2lDQW9DUixLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7O2lFQUF3QjtJQW9GbEQsNEJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXZGWSxxQkFBcUI7OztJQUNoQyx1REFBc0Q7O0lBRXRELCtDQUFnRDs7SUFDaEQsNENBQThEOztJQUM5RCw2Q0FBNkM7O0lBRTdDLDRDQUFpRDs7Ozs7SUFFakQseUNBQXVDOzs7OztJQUdyQyx5Q0FBMEI7Ozs7O0lBQzFCLHVDQUFzQjs7Ozs7SUFDdEIsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotYnJlYWRjcnVtYicsXG4gIGV4cG9ydEFzOiAnbnpCcmVhZGNydW1iJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekF1dG9HZW5lcmF0ZVwiPlxuICAgICAgPG56LWJyZWFkY3J1bWItaXRlbSAqbmdGb3I9XCJsZXQgYnJlYWRjcnVtYiBvZiBicmVhZGNydW1ic1wiPlxuICAgICAgICA8YSBbYXR0ci5ocmVmXT1cImJyZWFkY3J1bWIudXJsXCIgKGNsaWNrKT1cIm5hdmlnYXRlKGJyZWFkY3J1bWIudXJsLCAkZXZlbnQpXCI+e3sgYnJlYWRjcnVtYi5sYWJlbCB9fTwvYT5cbiAgICAgIDwvbnotYnJlYWRjcnVtYi1pdGVtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56QnJlYWRDcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXV0b0dlbmVyYXRlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0dlbmVyYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSAnLyc7XG4gIEBJbnB1dCgpIG56Um91dGVMYWJlbDogc3RyaW5nID0gJ2JyZWFkY3J1bWInO1xuXG4gIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gfCB1bmRlZmluZWQgPSBbXTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJyZWFkY3J1bWInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b0dlbmVyYXRlKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmF2aWdhdGUodXJsOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKHVybCkudGhlbigpKS50aGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgY29uc3QgYWN0aXZhdGVkUm91dGUgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpIC8vIFRyaWdnZXIgaW5pdGlhbCByZW5kZXIuXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoYWN0aXZhdGVkUm91dGUucm9vdCk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IFlvdSBzaG91bGQgaW1wb3J0IFJvdXRlck1vZHVsZSBpZiB5b3Ugd2FudCB0byB1c2UgJ056QXV0b0dlbmVyYXRlJy5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJywgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSA9IFtdKTogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjaGlsZHJlbjogQWN0aXZhdGVkUm91dGVbXSA9IHJvdXRlLmNoaWxkcmVuO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSBjaGlsZC5zbmFwc2hvdC51cmxcbiAgICAgICAgICAubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKVxuICAgICAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoKVxuICAgICAgICAgIC5qb2luKCcvJyk7XG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB1cmwgKyBgLyR7cm91dGVVUkx9YDtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYkxhYmVsID0gY2hpbGQuc25hcHNob3QuZGF0YVt0aGlzLm56Um91dGVMYWJlbF07XG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cbiAgICAgICAgaWYgKHJvdXRlVVJMICYmIGJyZWFkY3J1bWJMYWJlbCkge1xuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XG4gICAgICAgICAgICBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLFxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJlYWRjcnVtYnMoY2hpbGQsIG5leHRVcmwsIGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19