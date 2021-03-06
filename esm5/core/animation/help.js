/**
 * @fileoverview added by tsickle
 * Generated from: help.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation-consts';
/** @type {?} */
export var helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24vIiwic291cmNlcyI6WyJoZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV4RSxNQUFNLEtBQU8sVUFBVSxHQUE2QixPQUFPLENBQUMsWUFBWSxFQUFFO0lBQ3hFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUM7UUFDRixPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxXQUFhLEVBQzFELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLGVBQWU7U0FDM0IsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsZUFBZTtTQUMzQixDQUFDO1FBQ0YsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsV0FBYSxFQUMxRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcblxuZXhwb3J0IGNvbnN0IGhlbHBNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2hlbHBNb3Rpb24nLCBbXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KSdcbiAgICB9KSxcbiAgICBhbmltYXRlKFxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uU0xPV30gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgIH0pXG4gICAgKVxuICBdKSxcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5TTE9XfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xuICAgICAgfSlcbiAgICApXG4gIF0pXG5dKTtcbiJdfQ==