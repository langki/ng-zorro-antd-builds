/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
export declare class NzResizeService {
    private ngZone;
    private rendererFactory2;
    private readonly resizeSource$;
    private listeners;
    private renderer;
    private disposeHandle;
    private handler;
    constructor(ngZone: NgZone, rendererFactory2: RendererFactory2);
    subscribe(): Observable<void>;
    unsubscribe(): void;
    private registerListener;
    private unregisterListener;
}
