/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCarouselContentDirective } from '../carousel-content.directive';
import { PointerVector } from '../typings';
import { NzCarouselBaseStrategy } from './base-strategy';
export declare class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
    private isDragging;
    private isTransitioning;
    private get vertical();
    dispose(): void;
    withCarouselContents(contents: QueryList<NzCarouselContentDirective> | null): void;
    switch(_f: number, _t: number): Observable<void>;
    dragging(_vector: PointerVector): void;
    private verticalTransform;
    private horizontalTransform;
    private prepareVerticalContext;
    private prepareHorizontalContext;
}
