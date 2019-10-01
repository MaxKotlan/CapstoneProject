/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MaterialChipsComponent)),
    multi: true,
};
export class MaterialChipsComponent {
    constructor() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback =
            this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    /**
     * @return {?}
     */
    get tagsfocused() {
        return this.isTagsFocused;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeValue(value) {
        /** @type {?} */
        const index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    addValue(value, event) {
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.values) {
            this.values = value;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
    /**
     * @return {?}
     */
    focusOutFunction() {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
}
MaterialChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-material-chips',
                template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\" [ngClass]=\"focused\" #chipComponent>\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected>\n    {{ value }} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\"></i>\n  </span>\n\n  <span>\n    <input\n      (blur)=\"addValue(box.value, $event)\"\n      [(ngModel)]=\"labelToAdd\"\n      (keyup.enter)=\"addValue(box.value, $event)\"\n      (focus)=\"onFocus()\"\n      (focusout)=\"focusOutFunction()\"\n      #box\n    />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input\n    (blur)=\"addValue(tbox.value, $event)\"\n    class=\"md-chips-input\"\n    placeholder=\"{{ placeholder }}\"\n    #tbox\n    (keyup.enter)=\"addValue(tbox.value, $event)\"\n  />\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MaterialChipsComponent.ctorParameters = () => [];
MaterialChipsComponent.propDecorators = {
    placeholder: [{ type: Input }],
    tagsfocusedChange: [{ type: Output }],
    labelsChange: [{ type: Output }],
    tagsfocused: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MaterialChipsComponent.prototype.placeholder;
    /** @type {?} */
    MaterialChipsComponent.prototype.addAreaDisplayed;
    /** @type {?} */
    MaterialChipsComponent.prototype.isTagsFocused;
    /** @type {?} */
    MaterialChipsComponent.prototype.values;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelToAdd;
    /** @type {?} */
    MaterialChipsComponent.prototype.focused;
    /** @type {?} */
    MaterialChipsComponent.prototype.selected;
    /** @type {?} */
    MaterialChipsComponent.prototype.noop;
    /** @type {?} */
    MaterialChipsComponent.prototype.tagsfocusedChange;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelsChange;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxtQ0FBbUMsR0FBUTtJQUN0RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVNELE1BQU0sT0FBTyxzQkFBc0I7SUEyQmpDO1FBMUJTLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRzFCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBT1osc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBT3RFLHNCQUFpQixHQUFlLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMscUJBQWdCLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFRckQsSUFBSSxDQUFDLGlCQUFpQjtZQUNwQixJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNsRyxDQUFDOzs7O0lBakJELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUlELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQU9ELFdBQVcsQ0FBQyxLQUFhOztjQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsS0FBVTtRQUNoQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFlO1FBQ3hCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHd5QkFBbUM7Z0JBQ25DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7OzBCQUVFLEtBQUs7Z0NBVUwsTUFBTTsyQkFDTixNQUFNOzBCQUVOLEtBQUs7Ozs7SUFiTiw2Q0FBMEI7O0lBRTFCLGtEQUEwQjs7SUFDMUIsK0NBQXNCOztJQUN0Qix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIseUNBQWdCOztJQUNoQiwwQ0FBaUI7O0lBQ2pCLHNDQUFVOztJQUVWLG1EQUFpRDs7SUFDakQsOENBQThFOzs7OztJQU85RSxtREFBa0Q7Ozs7O0lBQ2xELGtEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRlcmlhbENoaXBzQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbWF0ZXJpYWwtY2hpcHMnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDaGlwc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgYWRkQXJlYURpc3BsYXllZDogYm9vbGVhbjtcbiAgaXNUYWdzRm9jdXNlZCA9IGZhbHNlO1xuICB2YWx1ZXM6IHN0cmluZ1tdO1xuICBsYWJlbFRvQWRkOiBzdHJpbmc7XG4gIGZvY3VzZWQ6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbiAgbm9vcDogYW55O1xuXG4gIEBPdXRwdXQoKSB0YWdzZm9jdXNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsc0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhZ3Nmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmlzVGFnc0ZvY3VzZWQ7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gdGhpcy5ub29wO1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSB0aGlzLm5vb3A7XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9XG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aGlzLm5vb3AgOiB0aGlzLm9uVG91Y2hlZENhbGxiYWNrO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IHRoaXMub25DaGFuZ2VDYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhpcy5ub29wIDogdGhpcy5vbkNoYW5nZUNhbGxiYWNrO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSwgMCk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmxhYmVsc0NoYW5nZS5lbWl0KHRoaXMudmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICBhZGRWYWx1ZSh2YWx1ZTogc3RyaW5nLCBldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5sYWJlbFRvQWRkID0gJyc7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSAnbWQtZm9jdXNlZCc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnRhZ3Nmb2N1c2VkQ2hhbmdlLmVtaXQodGhpcy5pc1RhZ3NGb2N1c2VkKTtcbiAgfVxuICBmb2N1c091dEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICcnO1xuICAgIHRoaXMuaXNUYWdzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG59XG4iXX0=