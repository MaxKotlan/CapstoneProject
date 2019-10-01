/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { SBItemComponent } from './sb-item';
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem, _cdRef) {
        this.sbItem = sbItem;
        this._cdRef = _cdRef;
        this.isDisabled = false;
        this.indicator = true;
        this.id = "mdb-accordion-";
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = "mdb-accordion-head-" + this.sbItem.idModifier;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 32) {
            this.toggleClick(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.toggleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    SBItemHeadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ariaExpanded = this.sbItem.collapsed ? false : true;
    };
    /**
     * @return {?}
     */
    SBItemHeadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.sbItem.body) {
                _this.ariaControls = _this.sbItem.body.id;
                _this.sbItem.body.ariaLabelledBy = _this.id;
            }
        }), 0);
    };
    SBItemHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemHead',
                    selector: 'mdb-item-head, mdb-accordion-item-head',
                    template: "<div\n  class=\"card-header {{ customClass }}\"\n  [ngClass]=\"{ 'item-disabled': isDisabled }\"\n  (click)=\"toggleClick($event)\"\n  [id]=\"id\"\n>\n  <a\n    role=\"button\"\n    href=\"javascript:;\"\n    [attr.aria-expanded]=\"ariaExpanded\"\n    [attr.aria-controls]=\"ariaControls\"\n  >\n    <h5 class=\"mb-0\">\n      <span class=\"\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent },
        { type: ChangeDetectorRef }
    ]; };
    SBItemHeadComponent.propDecorators = {
        isDisabled: [{ type: Input }],
        customClass: [{ type: Input }],
        indicator: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return SBItemHeadComponent;
}());
export { SBItemHeadComponent };
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /** @type {?} */
    SBItemHeadComponent.prototype.id;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaExpanded;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUM7SUFlRSw2QkFBb0IsTUFBdUIsRUFBVSxNQUF5QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUnJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFZLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFb0MsdUNBQVM7Ozs7SUFBOUMsVUFBK0MsS0FBb0I7UUFDakUsd0NBQXdDO1FBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFPQztRQU5DLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQseWhCQUFnQztvQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLGVBQWU7Z0JBSHRCLGlCQUFpQjs7OzZCQVloQixLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFVTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTZCckMsMEJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTFDWSxtQkFBbUI7OztJQUM5Qix5Q0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0Isd0NBQTBCOztJQUUxQixpQ0FBNkI7O0lBQzdCLDJDQUFxQjs7SUFDckIsMkNBQWtCOzs7OztJQUVOLHFDQUErQjs7Ozs7SUFBRSxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2ItaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUhlYWQnLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWhlYWQsIG1kYi1hY2NvcmRpb24taXRlbS1oZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmhlYWQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1IZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRpY2F0b3IgPSB0cnVlO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICBhcmlhQ29udHJvbHMgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNiSXRlbTogU0JJdGVtQ29tcG9uZW50LCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmlkID0gYG1kYi1hY2NvcmRpb24taGVhZC0ke3RoaXMuc2JJdGVtLmlkTW9kaWZpZXJ9YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYkl0ZW0uY29sbGFwc2VkID0gIXRoaXMuc2JJdGVtLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuc2JJdGVtLnRvZ2dsZSh0aGlzLnNiSXRlbS5jb2xsYXBzZWQpO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSAhdGhpcy5hcmlhRXhwYW5kZWQ7XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSB0aGlzLnNiSXRlbS5jb2xsYXBzZWQgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zYkl0ZW0uYm9keSkge1xuICAgICAgICB0aGlzLmFyaWFDb250cm9scyA9IHRoaXMuc2JJdGVtLmJvZHkuaWQ7XG4gICAgICAgIHRoaXMuc2JJdGVtLmJvZHkuYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=