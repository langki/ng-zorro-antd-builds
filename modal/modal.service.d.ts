/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { Injector, OnDestroy } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, Subject } from 'rxjs';
import { NzModalRef } from './modal-ref';
import { ConfirmType, ModalOptions } from './modal-types';
export declare class NzModalService implements OnDestroy {
    private overlay;
    private injector;
    private nzConfigService;
    private parentModal;
    private openModalsAtThisLevel;
    private readonly afterAllClosedAtThisLevel;
    get openModals(): NzModalRef[];
    get _afterAllClosed(): Subject<void>;
    readonly afterAllClose: Observable<void>;
    constructor(overlay: Overlay, injector: Injector, nzConfigService: NzConfigService, parentModal: NzModalService);
    create<T, R = NzSafeAny>(config: ModalOptions<T, R>): NzModalRef<T, R>;
    closeAll(): void;
    confirm<T>(options?: ModalOptions<T>, confirmType?: ConfirmType): NzModalRef<T>;
    info<T>(options?: ModalOptions<T>): NzModalRef<T>;
    success<T>(options?: ModalOptions<T>): NzModalRef<T>;
    error<T>(options?: ModalOptions<T>): NzModalRef<T>;
    warning<T>(options?: ModalOptions<T>): NzModalRef<T>;
    private open;
    private removeOpenModal;
    private closeModals;
    private createOverlay;
    private attachModalContainer;
    private attachModalContent;
    private createInjector;
    private confirmFactory;
    ngOnDestroy(): void;
}
