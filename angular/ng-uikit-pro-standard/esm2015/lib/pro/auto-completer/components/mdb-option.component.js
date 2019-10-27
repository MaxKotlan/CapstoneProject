/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostListener, InjectionToken, Optional, Inject, } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function MdbOptionParent() { }
if (false) {
    /** @type {?} */
    MdbOptionParent.prototype.optionHeight;
}
/** @type {?} */
export const MDB_OPTION_PARENT = new InjectionToken('MDB_OPTION_PARENT');
export class MdbOptionComponent {
    /**
     * @param {?} el
     * @param {?} _parent
     */
    constructor(el, _parent) {
        this.el = el;
        this._parent = _parent;
        this.clicked = false;
        this.clickSource = new Subject();
        this.click$ = this.clickSource.asObservable();
        this.clicked = false;
    }
    /**
     * @return {?}
     */
    get optionHeight() {
        return this._optionHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionHeight(value) {
        if (value !== 0) {
            this._optionHeight = value;
        }
        else {
            this._optionHeight = 45;
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        this.clickSource.next(this);
    }
    /**
     * @return {?}
     */
    get label() {
        return this.el.nativeElement.textContent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
    }
}
MdbOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-option',
                template: "<div\n  tabindex=\"0\"\n  class=\"completer-row\"\n  [ngStyle]=\"{\n    'height.px': _optionHeight,\n    'padding.px': _optionHeight / 3\n  }\"\n  mdbAutoCompleterOption\n>\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
MdbOptionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] }
];
MdbOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    optionHeight: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    MdbOptionComponent.prototype.value;
    /** @type {?} */
    MdbOptionComponent.prototype.disabled;
    /** @type {?} */
    MdbOptionComponent.prototype._optionHeight;
    /** @type {?} */
    MdbOptionComponent.prototype.clicked;
    /** @type {?} */
    MdbOptionComponent.prototype.selectedItem;
    /** @type {?} */
    MdbOptionComponent.prototype.clickSource;
    /** @type {?} */
    MdbOptionComponent.prototype.click$;
    /** @type {?} */
    MdbOptionComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbOptionComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tY29tcGxldGVyL2NvbXBvbmVudHMvbWRiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQyxxQ0FFQzs7O0lBREMsdUNBQXFCOzs7QUFHdkIsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixtQkFBbUIsQ0FBQztBQU16RixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQXNCN0IsWUFDUyxFQUFjLEVBQzBCLE9BQXdCO1FBRGhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDMEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFSekUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixnQkFBVyxHQUFnQyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUM3RSxXQUFNLEdBQW1DLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQXZCRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFlBQVksQ0FBQyxLQUFVO1FBQ3pCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFlRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK05BQXdDO2FBQ3pDOzs7O1lBcEJDLFVBQVU7NENBNkNQLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7b0JBdkJ0QyxLQUFLO3VCQUNMLEtBQUs7MkJBTUwsS0FBSztzQkFxQkwsWUFBWSxTQUFDLE9BQU87Ozs7SUE1QnJCLG1DQUF1Qjs7SUFDdkIsc0NBQTJCOztJQUMzQiwyQ0FBbUI7O0lBYW5CLHFDQUFnQjs7SUFDaEIsMENBQThCOztJQUU5Qix5Q0FBNkU7O0lBQzdFLG9DQUF5RTs7SUFHdkUsZ0NBQXFCOzs7OztJQUNyQixxQ0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZGJPcHRpb25QYXJlbnQge1xuICBvcHRpb25IZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE1EQl9PUFRJT05fUEFSRU5UID0gbmV3IEluamVjdGlvblRva2VuPE1kYk9wdGlvblBhcmVudD4oJ01EQl9PUFRJT05fUEFSRU5UJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgX29wdGlvbkhlaWdodDogYW55O1xuICBnZXQgb3B0aW9uSGVpZ2h0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbkhlaWdodDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25IZWlnaHQodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fb3B0aW9uSGVpZ2h0ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbkhlaWdodCA9IDQ1O1xuICAgIH1cbiAgfVxuICBjbGlja2VkID0gZmFsc2U7XG4gIHNlbGVjdGVkSXRlbTogSVNlbGVjdGVkT3B0aW9uO1xuXG4gIGNsaWNrU291cmNlOiBTdWJqZWN0PE1kYk9wdGlvbkNvbXBvbmVudD4gPSBuZXcgU3ViamVjdDxNZGJPcHRpb25Db21wb25lbnQ+KCk7XG4gIGNsaWNrJDogT2JzZXJ2YWJsZTxNZGJPcHRpb25Db21wb25lbnQ+ID0gdGhpcy5jbGlja1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNREJfT1BUSU9OX1BBUkVOVCkgcHJpdmF0ZSBfcGFyZW50OiBNZGJPcHRpb25QYXJlbnRcbiAgKSB7XG4gICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5jbGlja1NvdXJjZS5uZXh0KHRoaXMpO1xuICB9XG4gIGdldCBsYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0KSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19