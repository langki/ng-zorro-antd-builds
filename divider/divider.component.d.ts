/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzDividerComponent {
    static ngAcceptInputType_nzDashed: BooleanInput;
    nzText?: string | TemplateRef<void>;
    nzType: 'horizontal' | 'vertical';
    nzOrientation: 'left' | 'right' | 'center';
    nzDashed: boolean;
}
