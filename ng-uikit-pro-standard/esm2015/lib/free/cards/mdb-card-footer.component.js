/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
export class MdbCardFooterComponent {
    // @Input() class: string;
    /**
     * @param {?} _el
     * @param {?} _r
     */
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-footer');
        // if (this.class) {
        //     this.class.split(' ').forEach((element: any) => {
        //         this._r.addClass(this._el.nativeElement, element);
        //     });
        // }
    }
}
MdbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-footer',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdbCardFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2NhcmRzL21kYi1jYXJkLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9sRyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFFakMsWUFBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDOzs7O0lBRTlELFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxvQkFBb0I7UUFDcEIsd0RBQXdEO1FBQ3hELDZEQUE2RDtRQUM3RCxVQUFVO1FBQ1YsSUFBSTtJQUNOLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdUNBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU40QyxVQUFVO1lBQVUsU0FBUzs7Ozs7OztJQVM1RCxxQ0FBdUI7Ozs7O0lBQUUsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcmQtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1jYXJkLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJDYXJkRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3I6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkLWZvb3RlcicpO1xuICAgIC8vIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgLy8gICAgIHRoaXMuY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgfVxufVxuIl19