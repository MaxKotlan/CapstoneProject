/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(_elementRef, _renderer, cdRef) {
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
    SelectDropdownComponent.prototype.onWindowKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchKey = event.key.toString().replace('"', '');
        /** @type {?} */
        var items = Array.from(this.optionList['_options'])
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.group; }))
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.disabled; }))
            .map((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label || el.wrappedOption.value; }));
        this.navigateThroughArray(searchKey, items);
        this.previousKey = searchKey;
    };
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    SelectDropdownComponent.prototype.navigateThroughArray = /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    function (key, itemSource) {
        var _this = this;
        /** @type {?} */
        var items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            return el
                .toString()
                .toLowerCase()
                .charAt(0)
                .includes(key.toString().toLowerCase());
        }));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label === items[_this.searchIndex]; }));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
        }
        this.moveHighlightedIntoView();
    };
    /** Event handlers. **/
    // Angular life cycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.onkeyup = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    function () {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeydown = /**
     * @return {?}
     */
    function () {
        this.setOptionHeight();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setDropdownHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return (/**
         * @return {?}
         */
        function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 8 + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }); }));
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setVisibleOptionsNumber = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
                }
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        function () {
            container.add('fadeInSelect');
        }), 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = this.state === 'invisible' ? 'visible' : 'invisible';
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            var disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (var i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterInput.nativeElement.focus();
            }), 0);
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            var optionStyle = {};
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
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSelectAllClick = /**
     * @return {?}
     */
    function () {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.updateSelectAllState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return !option.disabled; }))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected ? true : false;
        }));
        areAllSelected ? (this.selectAllSelected = true) : (this.selectAllSelected = false);
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationDone.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listHeight;
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        listHeight =
            this.multiple && this.enableSelectAll
                ? list.offsetHeight - this.optionHeight
                : list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
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
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQTZERSxpQ0FDUyxXQUF1QixFQUN2QixTQUFvQixFQUNuQixLQUF3QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBdEN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtuQixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWYsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLGtCQUFhLEdBQUcs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SUFFbEQsOENBQThEOztJQUM5RCw4Q0FBNkQ7O0lBQzdELGtEQUE0RTs7SUFDNUUsZ0RBQXdFOztJQUV4RSxnREFBdUI7O0lBQ3ZCLG9EQUE2Qjs7SUFHN0Isd0NBQW9COztJQUNwQiw4Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFFcEIsa0RBQThCOztJQUU5QixvREFBMEI7O0lBUTFCLGtEQUFxQjs7SUFDckIsOENBQWdCOztJQUNoQiw4Q0FBaUI7O0lBUGYsOENBQThCOztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE9wdGlvbkxpc3QgfSBmcm9tICcuL29wdGlvbi1saXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcgfSkpLFxuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZpbHRlckF1dG9jb21wbGV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSB2aXNpYmxlT3B0aW9ucyA9IDQ7XG4gIEBJbnB1dCgpIGRyb3Bkb3duSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF4SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wdGlvbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBhbGwnO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWx0ZXJJbnB1dDogYW55O1xuICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIG9wdGlvbnNMaXN0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY3VzdG9tQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGN1c3RvbUNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZGlzYWJsZWRDb2xvciA9ICcjZmZmJztcbiAgZGlzYWJsZWRUZXh0Q29sb3IgPSAnOWU5ZTllJztcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAnaW52aXNpYmxlJztcbiAgc3RhcnRIZWlnaHQ6IGFueSA9IDA7XG4gIGVuZEhlaWdodDogYW55ID0gNDU7XG5cbiAgcHVibGljIGhhc09wdGlvbnNJdGVtcyA9IHRydWU7XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pIG9uV2luZG93S2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IGV2ZW50LmtleS50b1N0cmluZygpLnJlcGxhY2UoJ1wiJywgJycpO1xuXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uTGlzdFsnX29wdGlvbnMnXSlcbiAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZ3JvdXApXG4gICAgICAuZmlsdGVyKChlbGVtOiBhbnkpID0+ICFlbGVtLmRpc2FibGVkKVxuICAgICAgLm1hcCgoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCB8fCBlbC53cmFwcGVkT3B0aW9uLnZhbHVlKTtcblxuICAgIHRoaXMubmF2aWdhdGVUaHJvdWdoQXJyYXkoc2VhcmNoS2V5LCBpdGVtcyk7XG4gICAgdGhpcy5wcmV2aW91c0tleSA9IHNlYXJjaEtleTtcbiAgfVxuXG4gIG5hdmlnYXRlVGhyb3VnaEFycmF5KGtleTogc3RyaW5nLCBpdGVtU291cmNlOiBhbnkpIHtcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1Tb3VyY2UuZmlsdGVyKChlbDogYW55KSA9PlxuICAgICAgZWxcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmNoYXJBdCgwKVxuICAgICAgICAuaW5jbHVkZXMoa2V5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmICh0aGlzLnNlYXJjaEluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBrZXkgIT09IHRoaXMucHJldmlvdXNLZXkpIHtcbiAgICAgIHRoaXMuc2VhcmNoSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5maW5kKFxuICAgICAgKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgPT09IGl0ZW1zW3RoaXMuc2VhcmNoSW5kZXhdXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoSW5kZXgrKztcblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAvLyBBbmd1bGFyIGxpZmUgY3ljbGUgaG9va3MuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBvbmtleXVwKCkge1xuICAgIHRoaXMuaGFzT3B0aW9uc0l0ZW1zID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbmtleWRvd24oKSB7XG4gICAgdGhpcy5zZXRPcHRpb25IZWlnaHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICB0aGlzLm9wdGlvbnNSZXNldCgpO1xuICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zTnVtYmVyKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4ICsgJ3B4J1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyAncHgnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlT3B0aW9uc051bWJlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICdtYXgtaGVpZ2h0JyxcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnXG4gICAgKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC1jb250ZW50Jyk7XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uSGVpZ2h0ICYmIGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2xpbmUtaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gJ2ludmlzaWJsZScgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJztcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZEVsZW1lbnRzID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICcuZGlzYWJsZWQub3B0Z3JvdXAnXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgZGlzYWJsZWRFbGVtZW50c1tpXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgLmZpbHRlcigob3B0aW9uOiBPcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAuZXZlcnkoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gKHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlKSA6ICh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2UpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGFydC5lbWl0KCk7XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpIHtcbiAgICBsZXQgbGlzdEhlaWdodDogbnVtYmVyO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGlzdEhlaWdodCA9XG4gICAgICB0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsXG4gICAgICAgID8gbGlzdC5vZmZzZXRIZWlnaHQgLSB0aGlzLm9wdGlvbkhlaWdodFxuICAgICAgICA6IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0LmdldEhpZ2hsaWdodGVkSW5kZXgoKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbUJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbVRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==