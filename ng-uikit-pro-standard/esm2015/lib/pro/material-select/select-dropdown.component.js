/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
export class SelectDropdownComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} cdRef
     */
    constructor(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this.selectAllSelected = false;
        this.searchIndex = 0;
        this.previousKey = '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowKeyUp(event) {
        /** @type {?} */
        const searchKey = event.key.toString().replace('"', '');
        /** @type {?} */
        const items = Array.from(this.optionList['_options'])
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => !elem.group))
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => !elem.disabled))
            .map((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.wrappedOption.label || el.wrappedOption.value));
        this.navigateThroughArray(searchKey, items);
        this.previousKey = searchKey;
    }
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    navigateThroughArray(key, itemSource) {
        /** @type {?} */
        const items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el
            .toString()
            .toLowerCase()
            .charAt(0)
            .includes(key.toString().toLowerCase())));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.wrappedOption.label === items[this.searchIndex]));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
        }
        this.moveHighlightedIntoView();
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    onkeyup() {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    }
    /**
     * @return {?}
     */
    onkeydown() {
        this.setOptionHeight();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    }
    /**
     * @return {?}
     */
    setDropdownHeight() {
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        el => (/**
         * @return {?}
         */
        () => {
            if (el.icon) {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 8 + 'px');
            }
            else {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 'px');
            }
        })));
    }
    /**
     * @return {?}
     */
    setVisibleOptionsNumber() {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    }
    /**
     * @return {?}
     */
    setOptionHeight() {
        /** @type {?} */
        const optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            /** @type {?} */
            const isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
                }
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        const container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        () => {
            container.add('fadeInSelect');
        }), 200);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = this.state === 'invisible' ? 'visible' : 'invisible';
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            const disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (let i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.filterInput.nativeElement.focus();
            }), 0);
        }
    }
    // Filter input (single select).
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionClick(option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    }
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    getOptionStyle(option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            const optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    onSelectAllClick() {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    }
    /**
     * @return {?}
     */
    updateSelectAllState() {
        /** @type {?} */
        const areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => !option.disabled))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.selected ? true : false;
        }));
        areAllSelected ? (this.selectAllSelected = true) : (this.selectAllSelected = false);
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    clearFilterInput() {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    /**
     * @return {?}
     */
    onAnimationDone() {
        this.animationDone.emit();
    }
    /**
     * @return {?}
     */
    onAnimationStart() {
        this.animationStart.emit();
    }
    /**
     * @return {?}
     */
    moveHighlightedIntoView() {
        /** @type {?} */
        let listHeight;
        /** @type {?} */
        const list = this.optionsList.nativeElement;
        listHeight =
            this.multiple && this.enableSelectAll
                ? list.offsetHeight - this.optionHeight
                : list.offsetHeight;
        /** @type {?} */
        const itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            const item = list.children[0].children[itemIndex];
            /** @type {?} */
            const itemHeight = item.offsetHeight;
            /** @type {?} */
            const itemTop = itemIndex * itemHeight;
            /** @type {?} */
            const itemBottom = itemTop + itemHeight;
            /** @type {?} */
            const viewTop = list.scrollTop;
            /** @type {?} */
            const viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    handleOptionsWheel(e) {
        /** @type {?} */
        const div = this.optionsList.nativeElement;
        /** @type {?} */
        const atTop = div.scrollTop === 0;
        /** @type {?} */
        const atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
}
SelectDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select-dropdown',
                template: "<div\n  (click)=\"$event.stopPropagation()\"\n  class=\"dropdown-content\"\n  #dropdownContent\n  [ngStyle]=\"{ 'top.px': top, 'left.px': left, 'width.px': width }\"\n  [@dropdownAnimation]=\"{\n    value: state,\n    params: { startHeight: startHeight, endHeight: endHeight }\n  }\"\n  (@dropdownAnimation.done)=\"onAnimationDone()\"\n  (@dropdownAnimation.start)=\"onAnimationStart()\"\n>\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\" [ngClass]=\"{ 'md-outline': outline }\">\n    <input\n      type=\"text\"\n      class=\"search form-control w-100 d-block\"\n      #filterInput\n      [attr.autocomplete]=\"filterAutocomplete ? 'on' : 'off'\"\n      [placeholder]=\"placeholder\"\n      (input)=\"onSingleFilterInput($event)\"\n      (keydown)=\"onSingleFilterKeydown($event)\"\n    />\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul\n      class=\"select-dropdown\"\n      [ngClass]=\"{ 'multiple-select-dropdown': multiple }\"\n      (wheel)=\"onOptionsWheel($event)\"\n    >\n      <li\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n        *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\"\n        (click)=\"onSelectAllClick()\"\n      >\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"selectAllSelected\"\n            class=\"form-check-input {{ customClass }}\"\n          />\n          <label></label>\n          {{ selectAllLabel }}\n        </span>\n      </li>\n      <li\n        *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{\n          active: option.highlighted,\n          selected: option.selected,\n          disabled: option.disabled,\n          optgroup: option.group,\n          'd-flex justify-content-between flex-row-reverse align-items-center': option.icon\n        }\"\n        [ngStyle]=\"{\n          'height.px': optionHeight,\n          'line-height.px': optionHeight,\n          'background-color': getOptionStyle(option)['background-color'],\n          color: getOptionStyle(option)['color']\n        }\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\"\n      >\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\" />\n        <span\n          class=\"deselect-option\"\n          *ngIf=\"!multiple\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          >{{ option.label }}</span\n        >\n        <span\n          class=\"deselect-option\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          *ngIf=\"multiple\"\n        >\n          <input\n            type=\"checkbox\"\n            [checked]=\"option.selected\"\n            class=\"form-check-input {{ customClass }}\"\n            [disabled]=\"option.disabled\"\n          />\n          <label></label>\n          {{ option.label }}\n        </span>\n      </li>\n      <li\n        *ngIf=\"!this.hasOptionsItems\"\n        class=\"message disabled\"\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n      >\n        <span>{{ notFoundMsg }}</span>\n      </li>\n      <li #customContent class=\"custom-select-content\">\n        <ng-content></ng-content>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('dropdownAnimation', [
                        state('invisible', style({ opacity: 0, height: '0px' })),
                        state('visible', style({ opacity: 1, height: '*' })),
                        transition('invisible => visible', animate('300ms ease')),
                        transition('visible => invisible', animate('300ms ease')),
                    ]),
                ]
            }] }
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SelectDropdownComponent.propDecorators = {
    filterEnabled: [{ type: Input }],
    filterAutocomplete: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    left: [{ type: Input }],
    multiple: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    optionList: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    placeholder: [{ type: Input }],
    customClass: [{ type: Input }],
    visibleOptions: [{ type: Input }],
    dropdownHeight: [{ type: Input }],
    dropdownMaxHeight: [{ type: Input }],
    optionHeight: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    selectAllLabel: [{ type: Input }],
    outline: [{ type: Input }],
    close: [{ type: Output }],
    optionClicked: [{ type: Output }],
    singleFilterClick: [{ type: Output }],
    singleFilterInput: [{ type: Output }],
    singleFilterKeydown: [{ type: Output }],
    animationDone: [{ type: Output }],
    animationStart: [{ type: Output }],
    selectAll: [{ type: Output }],
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    optionsList: [{ type: ViewChild, args: ['optionsList', { static: true },] }],
    dropdownContent: [{ type: ViewChild, args: ['dropdownContent', { static: true },] }],
    customContent: [{ type: ViewChild, args: ['customContent', { static: true },] }],
    onWindowKeyUp: [{ type: HostListener, args: ['window:keyup', ['$event'],] }],
    onkeyup: [{ type: HostListener, args: ['keyup',] }],
    onkeydown: [{ type: HostListener, args: ['input',] }]
};
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.left;
    /** @type {?} */
    SelectDropdownComponent.prototype.multiple;
    /** @type {?} */
    SelectDropdownComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionList;
    /** @type {?} */
    SelectDropdownComponent.prototype.top;
    /** @type {?} */
    SelectDropdownComponent.prototype.width;
    /** @type {?} */
    SelectDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SelectDropdownComponent.prototype.customClass;
    /** @type {?} */
    SelectDropdownComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectDropdownComponent.prototype.outline;
    /** @type {?} */
    SelectDropdownComponent.prototype.close;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionClicked;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterKeydown;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationDone;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationStart;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsList;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.customContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.state;
    /** @type {?} */
    SelectDropdownComponent.prototype.startHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.endHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.hasOptionsItems;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllSelected;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightedItem;
    /** @type {?} */
    SelectDropdownComponent.prototype.searchIndex;
    /** @type {?} */
    SelectDropdownComponent.prototype.previousKey;
    /** @type {?} */
    SelectDropdownComponent.prototype._elementRef;
    /** @type {?} */
    SelectDropdownComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdCM0MsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBK0NsQyxZQUNTLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ25CLEtBQXdCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUF0Q3pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBS25CLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFP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U0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQzdDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzRCQXdCM0MsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkF3Q3ZDLFlBQVksU0FBQyxPQUFPO3dCQUtwQixZQUFZLFNBQUMsT0FBTzs7OztJQXJHckIsZ0RBQWdDOztJQUNoQyxxREFBcUM7O0lBQ3JDLGlEQUFnQzs7SUFDaEMscURBQW9DOztJQUNwQyx1Q0FBc0I7O0lBQ3RCLDJDQUEyQjs7SUFDM0IsOENBQTZCOztJQUM3Qiw2Q0FBZ0M7O0lBQ2hDLHNDQUFxQjs7SUFDckIsd0NBQXVCOztJQUN2Qiw4Q0FBNkI7O0lBQzdCLDhDQUEwQjs7SUFDMUIsaURBQTRCOztJQUM1QixpREFBZ0M7O0lBQ2hDLG9EQUFtQzs7SUFDbkMsK0NBQThCOztJQUM5QixrREFBa0M7O0lBQ2xDLGlEQUF1Qzs7SUFDdkMsMENBQXlCOztJQUV6Qix3Q0FBOEM7O0lBQzlDLGdEQUFxRDs7SUFDckQsb0RBQXVEOztJQUN2RCxvREFBeUQ7O0lBQ3pELHNEQUF3RDs7SUFDeEQsZ0RBQWtEOztJQUNsRCxpREFBbUQ7O0lBQ25ELDRDQUFrRDs7SUFFbEQsOENBQThEOztJQUM5RCw4Q0FBNkQ7O0lBQzdELGtEQUE0RTs7SUFDNUUsZ0RBQXdFOztJQUV4RSxnREFBdUI7O0lBQ3ZCLG9EQUE2Qjs7SUFHN0Isd0NBQW9COztJQUNwQiw4Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFFcEIsa0RBQThCOztJQUU5QixvREFBMEI7O0lBUTFCLGtEQUFxQjs7SUFDckIsOENBQWdCOztJQUNoQiw4Q0FBaUI7O0lBUGYsOENBQThCOztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE9wdGlvbkxpc3QgfSBmcm9tICcuL29wdGlvbi1saXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcgfSkpLFxuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZpbHRlckF1dG9jb21wbGV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSB2aXNpYmxlT3B0aW9ucyA9IDQ7XG4gIEBJbnB1dCgpIGRyb3Bkb3duSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF4SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wdGlvbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBhbGwnO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWx0ZXJJbnB1dDogYW55O1xuICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIG9wdGlvbnNMaXN0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY3VzdG9tQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZGlzYWJsZWRDb2xvciA9ICcjZmZmJztcbiAgZGlzYWJsZWRUZXh0Q29sb3IgPSAnOWU5ZTllJztcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAnaW52aXNpYmxlJztcbiAgc3RhcnRIZWlnaHQ6IGFueSA9IDA7XG4gIGVuZEhlaWdodDogYW55ID0gNDU7XG5cbiAgcHVibGljIGhhc09wdGlvbnNJdGVtcyA9IHRydWU7XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pIG9uV2luZG93S2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IGV2ZW50LmtleS50b1N0cmluZygpLnJlcGxhY2UoJ1wiJywgJycpO1xuXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uTGlzdFsnX29wdGlvbnMnXSlcbiAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZ3JvdXApXG4gICAgICAuZmlsdGVyKChlbGVtOiBhbnkpID0+ICFlbGVtLmRpc2FibGVkKVxuICAgICAgLm1hcCgoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCB8fCBlbC53cmFwcGVkT3B0aW9uLnZhbHVlKTtcblxuICAgIHRoaXMubmF2aWdhdGVUaHJvdWdoQXJyYXkoc2VhcmNoS2V5LCBpdGVtcyk7XG4gICAgdGhpcy5wcmV2aW91c0tleSA9IHNlYXJjaEtleTtcbiAgfVxuXG4gIG5hdmlnYXRlVGhyb3VnaEFycmF5KGtleTogc3RyaW5nLCBpdGVtU291cmNlOiBhbnkpIHtcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1Tb3VyY2UuZmlsdGVyKChlbDogYW55KSA9PlxuICAgICAgZWxcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmNoYXJBdCgwKVxuICAgICAgICAuaW5jbHVkZXMoa2V5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmICh0aGlzLnNlYXJjaEluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBrZXkgIT09IHRoaXMucHJldmlvdXNLZXkpIHtcbiAgICAgIHRoaXMuc2VhcmNoSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5maW5kKFxuICAgICAgKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgPT09IGl0ZW1zW3RoaXMuc2VhcmNoSW5kZXhdXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoSW5kZXgrKztcblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAvLyBBbmd1bGFyIGxpZmUgY3ljbGUgaG9va3MuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBvbmtleXVwKCkge1xuICAgIHRoaXMuaGFzT3B0aW9uc0l0ZW1zID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbmtleWRvd24oKSB7XG4gICAgdGhpcy5zZXRPcHRpb25IZWlnaHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICB0aGlzLm9wdGlvbnNSZXNldCgpO1xuICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zTnVtYmVyKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4ICsgJ3B4J1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyAncHgnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlT3B0aW9uc051bWJlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICdtYXgtaGVpZ2h0JyxcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnXG4gICAgKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC1jb250ZW50Jyk7XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uSGVpZ2h0ICYmIGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2xpbmUtaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gJ2ludmlzaWJsZScgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJztcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZEVsZW1lbnRzID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICcuZGlzYWJsZWQub3B0Z3JvdXAnXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgZGlzYWJsZWRFbGVtZW50c1tpXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgLmZpbHRlcigob3B0aW9uOiBPcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAuZXZlcnkoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gKHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlKSA6ICh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2UpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGFydC5lbWl0KCk7XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpIHtcbiAgICBsZXQgbGlzdEhlaWdodDogbnVtYmVyO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGlzdEhlaWdodCA9XG4gICAgICB0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsXG4gICAgICAgID8gbGlzdC5vZmZzZXRIZWlnaHQgLSB0aGlzLm9wdGlvbkhlaWdodFxuICAgICAgICA6IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0LmdldEhpZ2hsaWdodGVkSW5kZXgoKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbUJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbVRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==