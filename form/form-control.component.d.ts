/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzFormDirective } from './form.directive';
import { NzFormItemComponent } from './form-item.component';
declare const iconTypeMap: {
    readonly error: "close-circle-fill";
    readonly validating: "loading";
    readonly success: "check-circle-fill";
    readonly warning: "exclamation-circle-fill";
};
export declare class NzFormControlComponent implements OnChanges, OnDestroy, OnInit, AfterContentInit, OnDestroy {
    private nzFormItemComponent;
    private cdr;
    private nzFormDirective;
    static ngAcceptInputType_nzHasFeedback: BooleanInput;
    static ngAcceptInputType_nzRequired: BooleanInput;
    static ngAcceptInputType_nzNoColon: BooleanInput;
    static ngAcceptInputType_nzDisableAutoTips: BooleanInput;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    private status;
    private destroyed$;
    private localeId;
    private autoErrorTip?;
    private get disableAutoTips();
    validateControl: AbstractControl | NgModel | null;
    iconType: typeof iconTypeMap[keyof typeof iconTypeMap] | null;
    innerTip: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }> | null;
    defaultValidateControl?: FormControlName | FormControlDirective;
    nzSuccessTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    nzWarningTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    nzErrorTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    nzValidatingTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    nzExtra?: string | TemplateRef<void>;
    nzAutoTips: Record<string, Record<string, string>>;
    nzDisableAutoTips: boolean | 'default';
    set nzHasFeedback(value: boolean);
    get nzHasFeedback(): boolean;
    set nzValidateStatus(value: string | AbstractControl | FormControlName | NgModel);
    private watchControl;
    private setStatus;
    private getControlStatus;
    private validateControlStatus;
    private getInnerTip;
    private updateAutoErrorTip;
    private subscribeAutoTips;
    constructor(elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, cdr: ChangeDetectorRef, renderer: Renderer2, i18n: NzI18nService, nzFormDirective: NzFormDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
export {};
