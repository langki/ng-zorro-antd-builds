/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTimelineMode } from './timeline.component';
import { TimelineService } from './timeline.service';
declare const TimelineTimeDefaultColors: readonly ["red", "blue", "green", "grey", "gray"];
export declare type NzTimelineItemColor = typeof TimelineTimeDefaultColors[number];
export declare class NzTimelineItemComponent implements OnChanges {
    private cdr;
    private timelineService;
    template: TemplateRef<void>;
    nzColor: NzTimelineItemColor;
    nzDot?: string | TemplateRef<void>;
    isLast: boolean;
    borderColor: string | null;
    position: NzTimelineMode | undefined;
    constructor(cdr: ChangeDetectorRef, timelineService: TimelineService);
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    private updateCustomColor;
}
export {};
