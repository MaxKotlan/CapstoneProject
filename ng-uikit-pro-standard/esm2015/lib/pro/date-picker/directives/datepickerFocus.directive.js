/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class FocusDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    // Focus to element: if value 0 = don't set focus, 1 = set only focus, 2 = set focus and set cursor position
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // if (this.value === "0") {
        //     return;
        // }
        // this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
        this.el.nativeElement.focus();
        // // Set cursor position at the end of text if input element
        // if (this.value === "2") {
        //     let len = this.el.nativeElement.value.length;
        //     this.el.nativeElement.setSelectionRange(len, len);
        // }
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDpFocus]'
            },] }
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
FocusDirective.propDecorators = {
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FocusDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    FocusDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyRm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBa0IsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTdFLE1BQU0sT0FBTyxjQUFjOzs7O0lBR3pCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFHdEMsZUFBZTtRQUNiLDRCQUE0QjtRQUMxQixjQUFjO1FBQ2QsSUFBSTtRQUVOLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1Qiw2REFBNkQ7UUFDN0QsNEJBQTRCO1FBQzFCLG9EQUFvRDtRQUNwRCx5REFBeUQ7UUFDekQsSUFBSTtJQUNWLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFKbUIsVUFBVTs7O29CQU8zQixLQUFLOzs7O0lBQU4sK0JBQXVCOzs7OztJQUVYLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttZGJEcEZvY3VzXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIC8vIEZvY3VzIHRvIGVsZW1lbnQ6IGlmIHZhbHVlIDAgPSBkb24ndCBzZXQgZm9jdXMsIDEgPSBzZXQgb25seSBmb2N1cywgMiA9IHNldCBmb2N1cyBhbmQgc2V0IGN1cnNvciBwb3NpdGlvblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIGlmICh0aGlzLnZhbHVlID09PSBcIjBcIikge1xyXG4gICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgLy8gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgW10pO1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gICAgICAvLyAvLyBTZXQgY3Vyc29yIHBvc2l0aW9uIGF0IHRoZSBlbmQgb2YgdGV4dCBpZiBpbnB1dCBlbGVtZW50XHJcbiAgICAgIC8vIGlmICh0aGlzLnZhbHVlID09PSBcIjJcIikge1xyXG4gICAgICAgIC8vICAgICBsZXQgbGVuID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcclxuICAgICAgICAvLyB9XHJcbiAgfVxyXG59XHJcbiJdfQ==