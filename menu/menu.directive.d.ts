/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { NzMenuModeType, NzMenuThemeType } from './menu.types';
import { NzSubMenuComponent } from './submenu.component';
export declare function MenuServiceFactory(serviceInsideDropDown: MenuService, serviceOutsideDropDown: MenuService): MenuService;
export declare function MenuDropDownTokenFactory(isMenuInsideDropDownToken: boolean): boolean;
export declare class NzMenuDirective implements AfterContentInit, OnInit, OnChanges, OnDestroy {
    private nzMenuService;
    isMenuInsideDropDown: boolean;
    private cdr;
    static ngAcceptInputType_nzInlineCollapsed: BooleanInput;
    static ngAcceptInputType_nzSelectable: BooleanInput;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective>;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent>;
    nzInlineIndent: number;
    nzTheme: NzMenuThemeType;
    nzMode: NzMenuModeType;
    nzInlineCollapsed: boolean;
    nzSelectable: boolean;
    readonly nzClick: EventEmitter<NzMenuItemDirective>;
    actualMode: NzMenuModeType;
    private inlineCollapsed$;
    private mode$;
    private destroy$;
    private listOfOpenedNzSubMenuComponent;
    setInlineCollapsed(inlineCollapsed: boolean): void;
    updateInlineCollapse(): void;
    constructor(nzMenuService: MenuService, isMenuInsideDropDown: boolean, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
