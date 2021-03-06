import { OverlayRef } from '@angular/cdk/overlay';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { BaseModalContainer } from './modal-container';
import { NzModalLegacyAPI } from './modal-legacy-api';
import { ModalOptions } from './modal-types';
export declare const enum NzModalState {
    OPEN = 0,
    CLOSING = 1,
    CLOSED = 2
}
export declare const enum NzTriggerAction {
    CANCEL = "cancel",
    OK = "ok"
}
export declare class NzModalRef<T = NzSafeAny, R = NzSafeAny> implements NzModalLegacyAPI<T, R> {
    private overlayRef;
    private config;
    containerInstance: BaseModalContainer;
    componentInstance: T | null;
    result?: R;
    state: NzModalState;
    afterClose: Subject<R>;
    afterOpen: Subject<void>;
    private closeTimeout?;
    constructor(overlayRef: OverlayRef, config: ModalOptions, containerInstance: BaseModalContainer);
    getContentComponent(): T;
    getElement(): HTMLElement;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * @breaking-change 10.0.0
     */
    open(): void;
    close(result?: R): void;
    updateConfig(config: ModalOptions): void;
    getState(): NzModalState;
    getConfig(): ModalOptions;
    getBackdropElement(): HTMLElement | null;
    private trigger;
    private closeWhitResult;
    _finishDialogClose(): void;
}
