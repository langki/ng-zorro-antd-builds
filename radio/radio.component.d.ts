/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { NzRadioButtonDirective } from './radio-button.directive';
import { NzRadioService } from './radio.service';
export declare class NzRadioComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    private elementRef;
    private cdr;
    private focusMonitor;
    private nzRadioService;
    private nzRadioButtonDirective;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    private isNgModel;
    private destroy$;
    isChecked: boolean;
    name: string | null;
    isRadioButton: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    inputElement?: ElementRef;
    nzValue: NzSafeAny | null;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    onHostClick(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, nzRadioService: NzRadioService, nzRadioButtonDirective: NzRadioButtonDirective);
    setDisabledState(disabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
