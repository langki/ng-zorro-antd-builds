(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/animation', ['exports', '@angular/animations'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.animation = {}), global.ng.animations));
}(this, (function (exports, animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: animation-consts.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var AnimationDuration = /** @class */ (function () {
        function AnimationDuration() {
        }
        AnimationDuration.SLOW = '0.3s'; // Modal
        // Modal
        AnimationDuration.BASE = '0.2s';
        AnimationDuration.FAST = '0.1s'; // Tooltip
        return AnimationDuration;
    }());
    if (false) {
        /** @type {?} */
        AnimationDuration.SLOW;
        /** @type {?} */
        AnimationDuration.BASE;
        /** @type {?} */
        AnimationDuration.FAST;
    }
    var AnimationCurves = /** @class */ (function () {
        function AnimationCurves() {
        }
        AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
        AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
        AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
        AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
        AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
        AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
        AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
        AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
        AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
        AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
        AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
        AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
        AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
        AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';
        return AnimationCurves;
    }());
    if (false) {
        /** @type {?} */
        AnimationCurves.EASE_BASE_OUT;
        /** @type {?} */
        AnimationCurves.EASE_BASE_IN;
        /** @type {?} */
        AnimationCurves.EASE_OUT;
        /** @type {?} */
        AnimationCurves.EASE_IN;
        /** @type {?} */
        AnimationCurves.EASE_IN_OUT;
        /** @type {?} */
        AnimationCurves.EASE_OUT_BACK;
        /** @type {?} */
        AnimationCurves.EASE_IN_BACK;
        /** @type {?} */
        AnimationCurves.EASE_IN_OUT_BACK;
        /** @type {?} */
        AnimationCurves.EASE_OUT_CIRC;
        /** @type {?} */
        AnimationCurves.EASE_IN_CIRC;
        /** @type {?} */
        AnimationCurves.EASE_IN_OUT_CIRC;
        /** @type {?} */
        AnimationCurves.EASE_OUT_QUINT;
        /** @type {?} */
        AnimationCurves.EASE_IN_QUINT;
        /** @type {?} */
        AnimationCurves.EASE_IN_OUT_QUINT;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: collapse.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var collapseMotion = animations.trigger('collapseMotion', [
        animations.state('expanded', animations.style({ height: '*' })),
        animations.state('collapsed', animations.style({ height: 0, overflow: 'hidden' })),
        animations.state('hidden', animations.style({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
        animations.transition('expanded => collapsed', animations.animate("150ms " + AnimationCurves.EASE_IN_OUT)),
        animations.transition('expanded => hidden', animations.animate("150ms " + AnimationCurves.EASE_IN_OUT)),
        animations.transition('collapsed => expanded', animations.animate("150ms " + AnimationCurves.EASE_IN_OUT)),
        animations.transition('hidden => expanded', animations.animate("150ms " + AnimationCurves.EASE_IN_OUT))
    ]);
    /** @type {?} */
    var treeCollapseMotion = animations.trigger('treeCollapseMotion', [
        animations.transition('* => *', [
            animations.query('nz-tree-node:leave', [animations.style({ overflow: 'hidden' }), animations.stagger(0, [animations.animate("150ms " + AnimationCurves.EASE_IN_OUT, animations.style({ height: 0 }))])], {
                optional: true
            }),
            animations.query('nz-tree-node:enter', [
                animations.style({ overflow: 'hidden', height: 0 }),
                animations.stagger(0, [animations.animate("150ms " + AnimationCurves.EASE_IN_OUT, animations.style({ overflow: 'hidden', height: '*' }))])
            ], {
                optional: true
            })
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: fade.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fadeMotion = animations.trigger('fadeMotion', [
        animations.transition(':enter', [animations.style({ opacity: 0 }), animations.animate("" + AnimationDuration.BASE, animations.style({ opacity: 1 }))]),
        animations.transition(':leave', [animations.style({ opacity: 1 }), animations.animate("" + AnimationDuration.BASE, animations.style({ opacity: 0 }))])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: help.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var helpMotion = animations.trigger('helpMotion', [
        animations.transition(':enter', [
            animations.style({
                opacity: 0,
                transform: 'translateY(-5px)'
            }),
            animations.animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, animations.style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ]),
        animations.transition(':leave', [
            animations.style({
                opacity: 1,
                transform: 'translateY(0)'
            }),
            animations.animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, animations.style({
                opacity: 0,
                transform: 'translateY(-5px)'
            }))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: move.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moveUpMotion = animations.trigger('moveUpMotion', [
        animations.transition('* => enter', [
            animations.style({
                transformOrigin: '0 0',
                transform: 'translateY(-100%)',
                opacity: 0
            }),
            animations.animate("" + AnimationDuration.BASE, animations.style({
                transformOrigin: '0 0',
                transform: 'translateY(0%)',
                opacity: 1
            }))
        ]),
        animations.transition('* => leave', [
            animations.style({
                transformOrigin: '0 0',
                transform: 'translateY(0%)',
                opacity: 1
            }),
            animations.animate("" + AnimationDuration.BASE, animations.style({
                transformOrigin: '0 0',
                transform: 'translateY(-100%)',
                opacity: 0
            }))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: notification.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var notificationMotion = animations.trigger('notificationMotion', [
        animations.state('enterRight', animations.style({ opacity: 1, transform: 'translateX(0)' })),
        animations.transition('* => enterRight', [animations.style({ opacity: 0, transform: 'translateX(5%)' }), animations.animate('100ms linear')]),
        animations.state('enterLeft', animations.style({ opacity: 1, transform: 'translateX(0)' })),
        animations.transition('* => enterLeft', [animations.style({ opacity: 0, transform: 'translateX(-5%)' }), animations.animate('100ms linear')]),
        animations.state('leave', animations.style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        })),
        animations.transition('* => leave', [
            animations.style({
                opacity: 1,
                transform: 'scaleY(1)',
                transformOrigin: '0% 0%'
            }),
            animations.animate('100ms linear')
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: slide.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANIMATION_TRANSITION_IN = AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_QUINT;
    /** @type {?} */
    var ANIMATION_TRANSITION_OUT = AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_QUINT;
    /** @type {?} */
    var slideMotion = animations.trigger('slideMotion', [
        animations.state('void', animations.style({
            opacity: 0,
            transform: 'scaleY(0.8)'
        })),
        animations.state('enter', animations.style({
            opacity: 1,
            transform: 'scaleY(1)'
        })),
        animations.transition('void => *', [animations.animate(ANIMATION_TRANSITION_IN)]),
        animations.transition('* => void', [animations.animate(ANIMATION_TRANSITION_OUT)])
    ]);
    /** @type {?} */
    var slideAlertMotion = animations.trigger('slideAlertMotion', [
        animations.transition(':leave', [
            animations.style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
            animations.animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT_CIRC, animations.style({
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: '0% 0%'
            }))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: zoom.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var zoomMotion = animations.trigger('zoomMotion', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'scale(0.2)' }),
            animations.animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, animations.style({
                opacity: 1,
                transform: 'scale(1)'
            }))
        ]),
        animations.transition(':leave', [
            animations.style({ opacity: 1, transform: 'scale(1)' }),
            animations.animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, animations.style({
                opacity: 0,
                transform: 'scale(0.2)'
            }))
        ])
    ]);
    /** @type {?} */
    var zoomBigMotion = animations.trigger('zoomBigMotion', [
        animations.transition('void => active', [
            animations.style({ opacity: 0, transform: 'scale(0.8)' }),
            animations.animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, animations.style({
                opacity: 1,
                transform: 'scale(1)'
            }))
        ]),
        animations.transition('active => void', [
            animations.style({ opacity: 1, transform: 'scale(1)' }),
            animations.animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, animations.style({
                opacity: 0,
                transform: 'scale(0.8)'
            }))
        ])
    ]);
    /** @type {?} */
    var zoomBadgeMotion = animations.trigger('zoomBadgeMotion', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
            animations.animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_OUT_BACK, animations.style({
                opacity: 1,
                transform: 'scale(1) translate(50%, -50%)'
            }))
        ]),
        animations.transition(':leave', [
            animations.style({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
            animations.animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_BACK, animations.style({
                opacity: 0,
                transform: 'scale(0) translate(50%, -50%)'
            }))
        ])
    ]);

    exports.AnimationCurves = AnimationCurves;
    exports.AnimationDuration = AnimationDuration;
    exports.collapseMotion = collapseMotion;
    exports.fadeMotion = fadeMotion;
    exports.helpMotion = helpMotion;
    exports.moveUpMotion = moveUpMotion;
    exports.notificationMotion = notificationMotion;
    exports.slideAlertMotion = slideAlertMotion;
    exports.slideMotion = slideMotion;
    exports.treeCollapseMotion = treeCollapseMotion;
    exports.zoomBadgeMotion = zoomBadgeMotion;
    exports.zoomBigMotion = zoomBigMotion;
    exports.zoomMotion = zoomMotion;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-core-animation.umd.js.map
