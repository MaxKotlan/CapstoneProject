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
export var MDB_OPTION_PARENT = new InjectionToken('MDB_OPTION_PARENT');
var MdbOptionComponent = /** @class */ (function () {
    function MdbOptionComponent(el, _parent) {
        this.el = el;
        this._parent = _parent;
        this.clicked = false;
        this.clickSource = new Subject();
        this.click$ = this.clickSource.asObservable();
        this.clicked = false;
    }
    Object.defineProperty(MdbOptionComponent.prototype, "optionHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionHeight;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 0) {
                this._optionHeight = value;
            }
            else {
                this._optionHeight = 45;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbOptionComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.clickSource.next(this);
    };
    Object.defineProperty(MdbOptionComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
    };
    MdbOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-option',
                    template: "<div\n  tabindex=\"0\"\n  class=\"completer-row\"\n  [ngStyle]=\"{\n    'height.px': _optionHeight,\n    'padding.px': _optionHeight / 3\n  }\"\n  mdbAutoCompleterOption\n>\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MdbOptionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] }
    ]; };
    MdbOptionComponent.propDecorators = {
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        optionHeight: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbOptionComponent;
}());
export { MdbOptionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tY29tcGxldGVyL2NvbXBvbmVudHMvbWRiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQyxxQ0FFQzs7O0lBREMsdUNBQXFCOzs7QUFHdkIsTUFBTSxLQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixtQkFBbUIsQ0FBQztBQUV6RjtJQTBCRSw0QkFDUyxFQUFjLEVBQzBCLE9BQXdCO1FBRGhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDMEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFSekUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixnQkFBVyxHQUFnQyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUM3RSxXQUFNLEdBQW1DLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQXZCRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQ2lCLEtBQVU7WUFDekIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BVEE7Ozs7SUF3QkQsb0NBQU87OztJQURQO1FBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELHNCQUFJLHFDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7OztJQUNELHFDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLCtOQUF3QztpQkFDekM7Ozs7Z0JBcEJDLFVBQVU7Z0RBNkNQLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7d0JBdkJ0QyxLQUFLOzJCQUNMLEtBQUs7K0JBTUwsS0FBSzswQkFxQkwsWUFBWSxTQUFDLE9BQU87O0lBWXZCLHlCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F6Q1ksa0JBQWtCOzs7SUFDN0IsbUNBQXVCOztJQUN2QixzQ0FBMkI7O0lBQzNCLDJDQUFtQjs7SUFhbkIscUNBQWdCOztJQUNoQiwwQ0FBOEI7O0lBRTlCLHlDQUE2RTs7SUFDN0Usb0NBQXlFOztJQUd2RSxnQ0FBcUI7Ozs7O0lBQ3JCLHFDQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1kYk9wdGlvblBhcmVudCB7XG4gIG9wdGlvbkhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTURCX09QVElPTl9QQVJFTlQgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWRiT3B0aW9uUGFyZW50PignTURCX09QVElPTl9QQVJFTlQnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbWRiLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1kYk9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBfb3B0aW9uSGVpZ2h0OiBhbnk7XG4gIGdldCBvcHRpb25IZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbkhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9uSGVpZ2h0ID0gNDU7XG4gICAgfVxuICB9XG4gIGNsaWNrZWQgPSBmYWxzZTtcbiAgc2VsZWN0ZWRJdGVtOiBJU2VsZWN0ZWRPcHRpb247XG5cbiAgY2xpY2tTb3VyY2U6IFN1YmplY3Q8TWRiT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBTdWJqZWN0PE1kYk9wdGlvbkNvbXBvbmVudD4oKTtcbiAgY2xpY2skOiBPYnNlcnZhYmxlPE1kYk9wdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNsaWNrU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1EQl9PUFRJT05fUEFSRU5UKSBwcml2YXRlIF9wYXJlbnQ6IE1kYk9wdGlvblBhcmVudFxuICApIHtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmNsaWNrU291cmNlLm5leHQodGhpcyk7XG4gIH1cbiAgZ2V0IGxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudC5vcHRpb25IZWlnaHQpIHtcbiAgICAgIHRoaXMuX29wdGlvbkhlaWdodCA9IHRoaXMuX3BhcmVudC5vcHRpb25IZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iXX0=