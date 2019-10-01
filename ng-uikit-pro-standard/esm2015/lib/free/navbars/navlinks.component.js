/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export class NavlinksComponent {
    /**
     * @param {?} _navbarService
     */
    constructor(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const that = this;
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
    }
}
NavlinksComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'navlinks',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
NavlinksComponent.ctorParameters = () => [
    { type: NavbarService }
];
NavlinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NavlinksComponent.prototype.links;
    /** @type {?} */
    NavlinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    NavlinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2bGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9uYXZsaW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRckQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUs1QixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUR2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNNLENBQUM7Ozs7SUFFckQsa0JBQWtCOztjQUNWLElBQUksR0FBRyxJQUFJO1FBRWpCLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBUyxPQUFPO2dCQUNqQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU87OztnQkFBRztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUEsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBakJRLGFBQWE7OztvQkFtQm5CLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt3QkFHM0UsTUFBTTs7OztJQUhQLGtDQUM2Qjs7SUFFN0Isc0NBQThDOzs7OztJQUNsQywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduYXZsaW5rcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZsaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGF0Ll9uYXZiYXJTZXJ2aWNlLnNldE5hdmJhckxpbmtDbGlja3MoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=