/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class MdbValidateDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    /**
     * @return {?}
     */
    get validate() {
        return this._validate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validate(value) {
        this._validate = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateSuccess() {
        return this._validateSuccess;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateSuccess(value) {
        this._validateSuccess = value;
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateError() {
        return this._validateError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateError(value) {
        this._validateError = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    updateSuccessClass() {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    }
    /**
     * @return {?}
     */
    updateErrorClass() {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSuccessClass();
        this.updateErrorClass();
    }
}
MdbValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbValidate]',
            },] }
];
/** @nocollapse */
MdbValidateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbValidateDirective.propDecorators = {
    mdbValidate: [{ type: Input }],
    validate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateSuccess;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateError;
    /** @type {?} */
    MdbValidateDirective.prototype.mdbValidate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL3ZhbGlkYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sb0JBQW9COzs7OztJQWlDL0IsWUFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBaEN2RCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztJQThCb0MsQ0FBQzs7OztJQTNCbkUsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBSjhDLFNBQVM7WUFBcEMsVUFBVTs7OzBCQVUzQixLQUFLO3VCQUNMLEtBQUs7OEJBU0wsS0FBSzs0QkFRTCxLQUFLOzs7Ozs7O0lBdEJOLHlDQUF5Qjs7Ozs7SUFDekIsZ0RBQWdDOzs7OztJQUNoQyw4Q0FBOEI7O0lBRTlCLDJDQUE4Qjs7Ozs7SUE0QmxCLHdDQUEyQjs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVmFsaWRhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVmFsaWRhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF92YWxpZGF0ZSA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlU3VjY2VzcyA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlRXJyb3IgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG1kYlZhbGlkYXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlO1xuICB9XG4gIHNldCB2YWxpZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGVTdWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVN1Y2Nlc3M7XG4gIH1cbiAgc2V0IHZhbGlkYXRlU3VjY2Vzcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlU3VjY2VzcyA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHZhbGlkYXRlRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlRXJyb3I7XG4gIH1cbiAgc2V0IHZhbGlkYXRlRXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZUVycm9yID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICB1cGRhdGVTdWNjZXNzQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZVN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtc3VjY2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLXN1Y2Nlc3MnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvckNsYXNzKCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGVFcnJvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLWVycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yQ2xhc3MoKTtcbiAgfVxufVxuIl19