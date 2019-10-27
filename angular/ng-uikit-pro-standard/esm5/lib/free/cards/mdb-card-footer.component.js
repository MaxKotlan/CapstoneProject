/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
var MdbCardFooterComponent = /** @class */ (function () {
    // @Input() class: string;
    function MdbCardFooterComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._r.addClass(this._el.nativeElement, 'card-footer');
        // if (this.class) {
        //     this.class.split(' ').forEach((element: any) => {
        //         this._r.addClass(this._el.nativeElement, element);
        //     });
        // }
    };
    MdbCardFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-footer',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbCardFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return MdbCardFooterComponent;
}());
export { MdbCardFooterComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbCardFooterComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardFooterComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2NhcmRzL21kYi1jYXJkLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRztJQU1FLDBCQUEwQjtJQUMxQixnQ0FBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDOzs7O0lBRTlELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELG9CQUFvQjtRQUNwQix3REFBd0Q7UUFDeEQsNkRBQTZEO1FBQzdELFVBQVU7UUFDVixJQUFJO0lBQ04sQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix1Q0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFONEMsVUFBVTtnQkFBVSxTQUFTOztJQW1CMUUsNkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLHNCQUFzQjs7Ozs7O0lBRXJCLHFDQUF1Qjs7Ozs7SUFBRSxvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2FyZC1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkNhcmRGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtZm9vdGVyJyk7XG4gICAgLy8gaWYgKHRoaXMuY2xhc3MpIHtcbiAgICAvLyAgICAgdGhpcy5jbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICB9XG59XG4iXX0=