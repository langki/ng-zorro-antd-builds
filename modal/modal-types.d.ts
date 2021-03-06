/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { NzButtonShape, NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;
export declare type ModalTypes = 'default' | 'confirm';
export declare type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface StyleObjectLike {
    [key: string]: string;
}
export declare class ModalOptions<T = NzSafeAny, R = NzSafeAny> {
    nzClosable?: boolean;
    nzOkLoading?: boolean;
    nzOkDisabled?: boolean;
    nzCancelDisabled?: boolean;
    nzCancelLoading?: boolean;
    nzNoAnimation?: boolean;
    nzAutofocus?: 'ok' | 'cancel' | 'auto' | null;
    nzMask?: boolean;
    nzMaskClosable?: boolean;
    nzKeyboard?: boolean;
    nzZIndex?: number;
    nzWidth?: number | string;
    nzCloseIcon?: string | TemplateRef<void>;
    nzOkType?: NzButtonType;
    nzModalType?: ModalTypes;
    nzOnCancel?: EventEmitter<T> | OnClickCallback<T>;
    nzOnOk?: EventEmitter<T> | OnClickCallback<T>;
    nzComponentParams?: Partial<T>;
    nzMaskStyle?: StyleObjectLike;
    nzBodyStyle?: StyleObjectLike;
    nzWrapClassName?: string;
    nzClassName?: string;
    nzStyle?: object;
    nzTitle?: string | TemplateRef<{}>;
    nzFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    nzCancelText?: string | null;
    nzOkText?: string | null;
    nzContent?: string | TemplateRef<NzSafeAny> | Type<T>;
    nzCloseOnNavigation?: boolean;
    nzViewContainerRef?: ViewContainerRef;
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * @breaking-change 10.0.0
     */
    nzGetContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    nzAfterOpen?: EventEmitter<void>;
    nzAfterClose?: EventEmitter<R>;
    nzIconType?: string;
}
export interface ModalButtonOptions<T = NzSafeAny> {
    label: string;
    type?: NzButtonType;
    shape?: NzButtonShape;
    ghost?: boolean;
    size?: NzButtonSize;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): NzSafeAny | Promise<NzSafeAny>;
    [key: string]: NzSafeAny;
}
