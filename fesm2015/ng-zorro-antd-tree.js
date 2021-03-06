import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, EventEmitter, NgZone, Renderer2, ElementRef, ChangeDetectorRef, Host, Optional, Output, Injectable, SkipSelf, forwardRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeBaseService, NzTreeBase, flattenTreeData, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
export { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';

/**
 * @fileoverview added by tsickle
 * Generated from: tree-indent.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeIndentComponent {
    constructor() {
        this.nzSelectMode = false;
        this.listOfUnit = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    unitMapOfClass(index) {
        return {
            [`ant-tree-indent-unit`]: !this.nzSelectMode,
            [`ant-tree-indent-unit-start`]: !this.nzSelectMode && (/** @type {?} */ (this.nzIsStart))[index + 1],
            [`ant-tree-indent-unit-end`]: !this.nzSelectMode && (/** @type {?} */ (this.nzIsEnd))[index + 1],
            [`ant-select-tree-indent-unit`]: this.nzSelectMode,
            [`ant-select-tree-indent-unit-start`]: this.nzSelectMode && (/** @type {?} */ (this.nzIsStart))[index + 1],
            [`ant-select-tree-indent-unit-end`]: this.nzSelectMode && (/** @type {?} */ (this.nzIsEnd))[index + 1]
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTreeLevel } = changes;
        if (nzTreeLevel) {
            this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
        }
    }
}
NzTreeIndentComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-indent',
                exportAs: 'nzTreeIndent',
                template: ` <span *ngFor="let i of listOfUnit; let index = index" [ngClass]="unitMapOfClass(index)"></span> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.aria-hidden]': 'true',
                    '[class.ant-tree-indent]': '!nzSelectMode',
                    '[class.ant-select-tree-indent]': 'nzSelectMode'
                }
            }] }
];
NzTreeIndentComponent.propDecorators = {
    nzTreeLevel: [{ type: Input }],
    nzIsStart: [{ type: Input }],
    nzIsEnd: [{ type: Input }],
    nzSelectMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzTreeLevel;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzIsStart;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzIsEnd;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeIndentComponent.prototype.listOfUnit;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeCheckboxComponent {
    constructor() {
        this.nzSelectMode = false;
    }
}
NzTreeNodeCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-checkbox',
                template: ` <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-checkbox]': `nzSelectMode`,
                    '[class.ant-select-tree-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-checkbox-disabled]': `nzSelectMode && (isDisabled || isDisableCheckbox)`,
                    '[class.ant-tree-checkbox]': `!nzSelectMode`,
                    '[class.ant-tree-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-checkbox-disabled]': `!nzSelectMode && (isDisabled || isDisableCheckbox)`
                }
            }] }
];
NzTreeNodeCheckboxComponent.propDecorators = {
    nzSelectMode: [{ type: Input }],
    isChecked: [{ type: Input }],
    isHalfChecked: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isDisableCheckbox: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeNodeCheckboxComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeCheckboxComponent.prototype.isChecked;
    /** @type {?} */
    NzTreeNodeCheckboxComponent.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNodeCheckboxComponent.prototype.isDisabled;
    /** @type {?} */
    NzTreeNodeCheckboxComponent.prototype.isDisableCheckbox;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-switcher.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeSwitcherComponent {
    constructor() {
        this.nzSelectMode = false;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.isLeaf && !!this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.isLeaf && !this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return !!this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-switcher',
                template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></i>
          <i *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <i nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></i>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-switcher]': 'nzSelectMode',
                    '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
                    '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
                    '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
                    '[class.ant-tree-switcher]': '!nzSelectMode',
                    '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
                    '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
                    '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
                }
            }] }
];
NzTreeNodeSwitcherComponent.propDecorators = {
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    context: [{ type: Input }],
    isLeaf: [{ type: Input }],
    isLoading: [{ type: Input }],
    isExpanded: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.context;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isLeaf;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isExpanded;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeTitleComponent {
    constructor() {
        this.treeTemplate = null;
        this.selectMode = false;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.draggable && !this.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get matchedValue() {
        return this.isMatched ? this.searchValue : '';
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-title',
                template: ` <ng-template [ngTemplateOutlet]="treeTemplate" [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }">
    </ng-template>
    <ng-container *ngIf="!treeTemplate">
      <span
        *ngIf="icon && showIcon"
        [class.ant-tree-icon__open]="isSwitcherOpen"
        [class.ant-tree-icon__close]="isSwitcherClose"
        [class.ant-tree-icon_loading]="isLoading"
        [class.ant-select-tree-iconEle]="selectMode"
        [class.ant-tree-iconEle]="!selectMode"
      >
        <span
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-select-tree-icon__customize]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
          [class.ant-tree-icon__customize]="!selectMode"
        >
          <i nz-icon *ngIf="icon" [nzType]="icon"></i>
        </span>
      </span>
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue:'i':'font-highlight'"> </span>
    </ng-container>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.title]': 'title',
                    '[attr.draggable]': 'canDraggable',
                    '[attr.aria-grabbed]': 'canDraggable',
                    '[class.draggable]': 'canDraggable',
                    '[class.ant-select-tree-node-content-wrapper]': `selectMode`,
                    '[class.ant-select-tree-node-content-wrapper-open]': `selectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-node-content-wrapper-close]': `selectMode && isSwitcherClose`,
                    '[class.ant-select-tree-node-selected]': `selectMode && isSelected`,
                    '[class.ant-tree-node-content-wrapper]': `!selectMode`,
                    '[class.ant-tree-node-content-wrapper-open]': `!selectMode && isSwitcherOpen`,
                    '[class.ant-tree-node-content-wrapper-close]': `!selectMode && isSwitcherClose`,
                    '[class.ant-tree-node-selected]': `!selectMode && isSelected`
                }
            }] }
];
NzTreeNodeTitleComponent.propDecorators = {
    searchValue: [{ type: Input }],
    treeTemplate: [{ type: Input }],
    draggable: [{ type: Input }],
    showIcon: [{ type: Input }],
    selectMode: [{ type: Input }],
    context: [{ type: Input }],
    icon: [{ type: Input }],
    title: [{ type: Input }],
    isLoading: [{ type: Input }],
    isSelected: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isMatched: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isLeaf: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.searchValue;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.treeTemplate;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.draggable;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.showIcon;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.selectMode;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.context;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.icon;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.title;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isSelected;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isDisabled;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isMatched;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isExpanded;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isLeaf;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        /**
         * for global property
         */
        this.icon = '';
        this.title = '';
        this.isLoading = false;
        this.isSelected = false;
        this.isDisabled = false;
        this.isMatched = false;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzTreeTemplate = null;
        this.nzSearchValue = '';
        this.nzDraggable = false;
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
    }
    /**
     * default set
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    clickExpand(event) {
        event.preventDefault();
        if (!this.isLoading && !this.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.isExpanded);
        }
        this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
        this.nzExpandChange.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickSelect(event) {
        event.preventDefault();
        if (this.isSelectable && !this.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzClick.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dblClick(event) {
        event.preventDefault();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzDblClick.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    contextMenu(event) {
        event.preventDefault();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzContextMenu.emit(eventNext);
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    clickCheckBox(event) {
        event.preventDefault();
        // return if node is disabled
        if (this.isDisabled || this.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzCheckBoxChange.emit(eventNext);
    }
    /**
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.elementRef.nativeElement, e);
        }));
    }
    /**
     * drag event
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
        try {
            // ie throw error
            // firefox-need-it
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzOnDragStart.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            this.nzOnDragEnter.emit(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.isLeaf)) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzOnDragOver.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.preventDefault();
        this.clearDragClass();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzOnDragLeave.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (this.nzTreeService.getSelectedNode())),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    this.nzOnDrop.emit(dropEvent);
                    this.nzOnDragEnd.emit(dragEndEvent);
                }));
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                this.nzOnDrop.emit(dropEvent);
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                this.nzOnDragEnd.emit(eventNext);
            }
        }));
    }
    /**
     * Listening to dragging events.
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.nzDraggable) {
                /** @type {?} */
                const nativeElement = this.elementRef.nativeElement;
                this.destroy$ = new Subject();
                fromEvent(nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                fromEvent(nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                fromEvent(nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                fromEvent(nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                fromEvent(nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                fromEvent(nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzTreeNode.component = this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDraggable } = changes;
        if (nzDraggable) {
            this.handDragEvent();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeNodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                template: `
    <nz-tree-indent [nzTreeLevel]="nzTreeNode.level" [nzSelectMode]="nzSelectMode" [nzIsStart]="isStart" [nzIsEnd]="isEnd"></nz-tree-indent>
    <nz-tree-node-switcher
      *ngIf="nzShowExpand"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzSelectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [isLeaf]="isLeaf"
      [isExpanded]="isExpanded"
      [isLoading]="isLoading"
      (click)="clickExpand($event)"
    ></nz-tree-node-switcher>
    <nz-tree-node-checkbox
      *ngIf="nzCheckable"
      (click)="clickCheckBox($event)"
      [nzSelectMode]="nzSelectMode"
      [isChecked]="isChecked"
      [isHalfChecked]="isHalfChecked"
      [isDisabled]="isDisabled"
      [isDisableCheckbox]="isDisableCheckbox"
    ></nz-tree-node-checkbox>
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-treenode]': `nzSelectMode`,
                    '[class.ant-select-tree-treenode-disabled]': `nzSelectMode && isDisabled`,
                    '[class.ant-select-tree-treenode-switcher-open]': `nzSelectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-treenode-switcher-close]': `nzSelectMode && isSwitcherClose`,
                    '[class.ant-select-tree-treenode-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-treenode-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-treenode-selected]': `nzSelectMode && isSelected`,
                    '[class.ant-select-tree-treenode-loading]': `nzSelectMode && isLoading`,
                    '[class.ant-tree-treenode]': `!nzSelectMode`,
                    '[class.ant-tree-treenode-disabled]': `!nzSelectMode && isDisabled`,
                    '[class.ant-tree-treenode-switcher-open]': `!nzSelectMode && isSwitcherOpen`,
                    '[class.ant-tree-treenode-switcher-close]': `!nzSelectMode && isSwitcherClose`,
                    '[class.ant-tree-treenode-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-treenode-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-treenode-selected]': `!nzSelectMode && isSelected`,
                    '[class.ant-tree-treenode-loading]': `!nzSelectMode && isLoading`,
                    '[style.display]': 'displayStyle',
                    '(mousedown)': 'onMousedown($event)'
                }
            }] }
];
/** @nocollapse */
NzTreeNodeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeNodeComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    isLoading: [{ type: Input }],
    isSelected: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isMatched: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isLeaf: [{ type: Input }],
    isChecked: [{ type: Input }],
    isHalfChecked: [{ type: Input }],
    isDisableCheckbox: [{ type: Input }],
    isSelectable: [{ type: Input }],
    canHide: [{ type: Input }],
    isStart: [{ type: Input }],
    isEnd: [{ type: Input }],
    nzTreeNode: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
if (false) {
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowIcon;
    /**
     * for global property
     * @type {?}
     */
    NzTreeNodeComponent.prototype.icon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.title;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isSelected;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isDisabled;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isExpanded;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isLeaf;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isChecked;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isDisableCheckbox;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isSelectable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.canHide;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isEnd;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragEnd;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeNodeComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeService extends NzTreeBaseService {
    constructor() {
        super();
    }
}
NzTreeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzTreeService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tree';
class NzTreeComponent extends NzTreeBase {
    // Handle emit event end
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowIcon = false;
        this.nzHideUnMatched = false;
        this.nzBlockNode = false;
        this.nzExpandAll = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = null;
        this.nzData = [];
        this.nzExpandedKeys = [];
        this.nzSelectedKeys = [];
        this.nzCheckedKeys = [];
        this.nzFlattenNodes = [];
        this.beforeInit = true;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.HIDDEN_STYLE = {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        };
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.handleNzData(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Render all properties of nzTree
     * @param {?} changes
     * @return {?}
     */
    renderTreeProperties(changes) {
        /** @type {?} */
        let useDefaultExpandedKeys = false;
        /** @type {?} */
        let expandAll = false;
        const { nzData, nzExpandedKeys, nzSelectedKeys, nzCheckedKeys, nzCheckStrictly, nzExpandAll, nzMultiple, nzSearchValue } = changes;
        if (nzExpandAll) {
            useDefaultExpandedKeys = true;
            expandAll = this.nzExpandAll;
        }
        if (nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
        if (nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (nzData) {
            this.handleNzData(this.nzData);
        }
        if (nzCheckedKeys) {
            this.handleCheckedKeys(this.nzCheckedKeys);
        }
        if (nzCheckStrictly) {
            this.handleCheckedKeys(null);
        }
        if (nzExpandedKeys || nzExpandAll) {
            useDefaultExpandedKeys = true;
            this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
        }
        if (nzSelectedKeys) {
            this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
        }
        if (nzSearchValue) {
            if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
                useDefaultExpandedKeys = false;
                this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        }
        // flatten data
        /** @type {?} */
        const currentExpandedKeys = this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key));
        /** @type {?} */
        const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
        this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
    }
    /**
     * @param {?} _
     * @param {?} node
     * @return {?}
     */
    trackByFlattenNode(_, node) {
        return node.key;
    }
    // Deal with properties
    /**
     * nzData
     * @param {?} value
     * @return {?}
     */
    handleNzData(value) {
        if (Array.isArray(value)) {
            /** @type {?} */
            const data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
        }
    }
    /**
     * @param {?} data
     * @param {?=} expandKeys
     * @return {?}
     */
    handleFlattenNodes(data, expandKeys = []) {
        this.nzTreeService.flattenTreeData(data, expandKeys);
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    handleCheckedKeys(keys) {
        this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
    }
    /**
     * @param {?=} keys
     * @return {?}
     */
    handleExpandedKeys(keys = []) {
        this.nzTreeService.conductExpandedKeys(keys);
    }
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    handleSelectedKeys(keys, isMulti) {
        this.nzTreeService.conductSelectedKeys(keys, isMulti);
    }
    /**
     * @param {?} value
     * @param {?=} searchFunc
     * @return {?}
     */
    handleSearchValue(value, searchFunc) {
        /** @type {?} */
        const dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.data));
        /** @type {?} */
        const checkIfMatched = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (searchFunc) {
                return searchFunc(node.origin);
            }
            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
        });
        dataList.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;
            if (!v.isMatched) {
                v.setExpanded(false);
                this.nzTreeService.setExpandedNodeList(v);
            }
            else {
                // expand
                this.nzTreeService.expandNodeAllParentBySearch(v);
            }
            this.nzTreeService.setMatchedNodeList(v);
        }));
    }
    /**
     * Handle emit event
     * @param {?} event
     * handle each event
     * @return {?}
     */
    eventTriggerChanged(event) {
        /** @type {?} */
        const node = (/** @type {?} */ (event.node));
        switch (event.eventName) {
            case 'expand':
                this.renderTree();
                this.nzExpandChange.emit(event);
                break;
            case 'click':
                this.nzClick.emit(event);
                break;
            case 'dblclick':
                this.nzDblClick.emit(event);
                break;
            case 'contextmenu':
                this.nzContextMenu.emit(event);
                break;
            case 'check':
                // Render checked state with nodes' property `isChecked`
                this.nzTreeService.setCheckedNodeList(node);
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
                // Cause check method will rerender list, so we need recover it and next the new event to user
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('check', node, (/** @type {?} */ (event.event)));
                this.nzCheckBoxChange.emit(eventNext);
                break;
            case 'dragstart':
                // if node is expanded
                if (node.isExpanded) {
                    node.setExpanded(!node.isExpanded);
                    this.renderTree();
                }
                this.nzOnDragStart.emit(event);
                break;
            case 'dragenter':
                /** @type {?} */
                const selectedNode = this.nzTreeService.getSelectedNode();
                if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                    node.setExpanded(true);
                    this.renderTree();
                }
                this.nzOnDragEnter.emit(event);
                break;
            case 'dragover':
                this.nzOnDragOver.emit(event);
                break;
            case 'dragleave':
                this.nzOnDragLeave.emit(event);
                break;
            case 'dragend':
                this.nzOnDragEnd.emit(event);
                break;
            case 'drop':
                this.renderTree();
                this.nzOnDrop.emit(event);
                break;
        }
    }
    /**
     * Click expand icon
     * @return {?}
     */
    renderTree() {
        this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key)));
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.nzFlattenNodes = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.renderTreeProperties(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.beforeInit = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                animations: [treeCollapseMotion],
                template: `
    <div role="tree">
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div [class.ant-select-tree-list]="nzSelectMode" [class.ant-tree-list]="nzSelectMode">
      <div>
        <cdk-virtual-scroll-viewport
          *ngIf="nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [itemSize]="nzVirtualItemSize"
          [minBufferPx]="nzVirtualMinBufferPx"
          [maxBufferPx]="nzVirtualMaxBufferPx"
          [style.height]="nzVirtualHeight"
        >
          <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </cdk-virtual-scroll-viewport>

        <div
          *ngIf="!nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [@.disabled]="beforeInit || noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [@treeCollapseMotion]="nzFlattenNodes.length"
        >
          <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      >
      </nz-tree-node>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzTreeComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-tree]': `nzSelectMode`,
                    '[class.ant-select-tree-show-line]': `nzSelectMode && nzShowLine`,
                    '[class.ant-select-tree-icon-hide]': `nzSelectMode && !nzShowIcon`,
                    '[class.ant-select-tree-block-node]': `nzSelectMode && nzBlockNode`,
                    '[class.ant-tree]': `!nzSelectMode`,
                    '[class.ant-tree-show-line]': `!nzSelectMode && nzShowLine`,
                    '[class.ant-tree-icon-hide]': `!nzSelectMode && !nzShowIcon`,
                    '[class.ant-tree-block-node]': `!nzSelectMode && nzBlockNode`,
                    '[class.draggable-tree]': `nzDraggable`
                }
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzBlockNode: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualHeight: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzData: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzCheckedKeys: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzSearchFunc: [{ type: Input }],
    nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }],
    cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport },] }],
    nzExpandedKeysChange: [{ type: Output }],
    nzSelectedKeysChange: [{ type: Output }],
    nzCheckedKeysChange: [{ type: Output }],
    nzSearchValueChange: [{ type: Output }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }]
};
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
if (false) {
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowIcon;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzBlockNode;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzExpandAll;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzSelectMode;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowLine;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzCheckable;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzAsyncData;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzDraggable;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.prototype.nzBlockNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualHeight;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzData;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchFunc;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplateChild;
    /** @type {?} */
    NzTreeComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTreeComponent.prototype.nzFlattenNodes;
    /** @type {?} */
    NzTreeComponent.prototype.beforeInit;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype.HIDDEN_STYLE;
    /** @type {?} */
    NzTreeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tree.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeModule {
}
NzTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzOutletModule, NzIconModule, NzNoAnimationModule, NzHighlightModule, ScrollingModule],
                declarations: [
                    NzTreeComponent,
                    NzTreeNodeComponent,
                    NzTreeIndentComponent,
                    NzTreeNodeSwitcherComponent,
                    NzTreeNodeCheckboxComponent,
                    NzTreeNodeTitleComponent
                ],
                exports: [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTreeComponent, NzTreeIndentComponent, NzTreeModule, NzTreeNodeCheckboxComponent, NzTreeNodeComponent, NzTreeNodeSwitcherComponent, NzTreeNodeTitleComponent, NzTreeService, NzTreeServiceFactory };
//# sourceMappingURL=ng-zorro-antd-tree.js.map
