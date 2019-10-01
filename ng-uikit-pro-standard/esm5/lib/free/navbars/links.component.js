/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            that.links.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                element.nativeElement.onclick = (/**
                 * @return {?}
                 */
                function () {
                    that._navbarService.setNavbarLinkClicks();
                });
            }));
        }), 0);
    };
    LinksComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'links',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    LinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    LinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return LinksComponent;
}());
export { LinksComponent };
if (false) {
    /** @type {?} */
    LinksComponent.prototype.links;
    /** @type {?} */
    LinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    LinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQ7SUFZRSx3QkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFEdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDTSxDQUFDOzs7O0lBRXJELDJDQUFrQjs7O0lBQWxCOztZQUNRLElBQUksR0FBRyxJQUFJO1FBQ2pCLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBUyxPQUFPO2dCQUNqQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU87OztnQkFBRztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUEsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFqQlEsYUFBYTs7O3dCQW1CbkIsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzRCQUczRSxNQUFNOztJQWFULHFCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FqQlksY0FBYzs7O0lBQ3pCLCtCQUM2Qjs7SUFFN0IsbUNBQThDOzs7OztJQUNsQyx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdsaW5rcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQubGlua3MuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhhdC5fbmF2YmFyU2VydmljZS5zZXROYXZiYXJMaW5rQ2xpY2tzKCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19