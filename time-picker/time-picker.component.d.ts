/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    nzConfigService: NzConfigService;
    private element;
    private renderer;
    cdr: ChangeDetectorRef;
    static ngAcceptInputType_nzUse12Hours: BooleanInput;
    static ngAcceptInputType_nzHideDisabledOptions: BooleanInput;
    static ngAcceptInputType_nzAllowEmpty: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    private _onChange?;
    private _onTouched?;
    isInit: boolean;
    focused: boolean;
    value: Date | null;
    origin: CdkOverlayOrigin;
    inputSize?: number;
    overlayPositions: ConnectionPositionPair[];
    inputRef: ElementRef<HTMLInputElement>;
    nzSize: string | null;
    nzHourStep: number;
    nzMinuteStep: number;
    nzSecondStep: number;
    nzClearText: string;
    nzPopupClassName: string;
    nzPlaceHolder: string;
    nzAddOn?: TemplateRef<void>;
    nzDefaultOpenValue?: Date;
    nzDisabledHours?: () => number[];
    nzDisabledMinutes?: (hour: number) => number[];
    nzDisabledSeconds?: (hour: number, minute: number) => number[];
    nzFormat: string;
    nzOpen: boolean;
    nzUse12Hours: boolean;
    nzSuffixIcon: string | TemplateRef<NzSafeAny>;
    readonly nzOpenChange: EventEmitter<boolean>;
    nzHideDisabledOptions: boolean;
    nzAllowEmpty: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    setValue(value: Date | null): void;
    open(): void;
    close(): void;
    updateAutoFocus(): void;
    onClickClearBtn(event: MouseEvent): void;
    onFocus(value: boolean): void;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, element: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    writeValue(time: Date | null | undefined): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
