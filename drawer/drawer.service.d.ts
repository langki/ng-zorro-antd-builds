/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerOptions, NzDrawerOptionsOfComponent } from './drawer-options';
import { NzDrawerRef } from './drawer-ref';
export declare class DrawerBuilderForService<R> {
    private overlay;
    private options;
    private drawerRef;
    private overlayRef;
    private unsubscribe$;
    constructor(overlay: Overlay, options: NzDrawerOptions);
    getInstance(): NzDrawerRef<R>;
    updateOptions(options: NzDrawerOptionsOfComponent): void;
}
export declare class NzDrawerService {
    private overlay;
    constructor(overlay: Overlay);
    create<T = NzSafeAny, D = undefined, R = NzSafeAny>(options: NzDrawerOptions<T, D extends undefined ? {} : D>): NzDrawerRef<R>;
}
