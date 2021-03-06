/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzBreakpointService } from 'ng-zorro-antd/core/services';
import { IndexableObject } from 'ng-zorro-antd/core/types';
import { ReplaySubject } from 'rxjs';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzAlign = 'top' | 'middle' | 'bottom';
export declare class NzRowDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    mediaMatcher: MediaMatcher;
    ngZone: NgZone;
    platform: Platform;
    private breakpointService;
    /**
     * @deprecated don't need nzType="flex" after 9.0
     */
    nzType: 'flex' | null;
    nzAlign: NzAlign | null;
    nzJustify: NzJustify | null;
    nzGutter: number | IndexableObject | [number, number] | [IndexableObject, IndexableObject] | null;
    readonly actualGutter$: ReplaySubject<[number | null, number | null]>;
    private readonly destroy$;
    getGutter(): [number | null, number | null];
    setGutterStyle(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, breakpointService: NzBreakpointService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
