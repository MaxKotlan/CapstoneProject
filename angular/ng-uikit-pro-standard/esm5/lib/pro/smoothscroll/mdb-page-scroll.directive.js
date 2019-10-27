/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject, Optional, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollInstance } from './mdb-page-scroll.instance';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollDirective = /** @class */ (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = (/** @type {?} */ (document));
    }
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    // private generatePageScrollInstance(): PageScrollInstance {
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.generatePageScrollInstance = 
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    function () {
        if (Util.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.pushRouterState = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: (/** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1))),
                queryParamsHandling: 'preserve'
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.scroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                /** @type {?} */
                var subscription_1 = (/** @type {?} */ (this.router.events.subscribe((/**
                 * @param {?} routerEvent
                 * @return {?}
                 */
                function (routerEvent) {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                }))));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    PageScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbPageScroll]'
                },] }
    ];
    /** @nocollapse */
    PageScrollDirective.ctorParameters = function () { return [
        { type: PageScrollService },
        { type: Router, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    PageScrollDirective.propDecorators = {
        routerLink: [{ type: Input }],
        href: [{ type: Input }],
        pageScrollHorizontal: [{ type: Input }],
        pageScrollOffset: [{ type: Input }],
        pageScrollDuration: [{ type: Input }],
        pageScrollSpeed: [{ type: Input }],
        pageScrollEasing: [{ type: Input }],
        pageScrollInterruptible: [{ type: Input }],
        pageScrollAdjustHash: [{ type: Input }],
        pageScroll: [{ type: Input }],
        pageScrollFinish: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click',] }]
    };
    return PageScrollDirective;
}());
export { PageScrollDirective };
if (false) {
    /** @type {?} */
    PageScrollDirective.prototype.routerLink;
    /** @type {?} */
    PageScrollDirective.prototype.href;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollHorizontal;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollOffset;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollDuration;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollSpeed;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollEasing;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollInterruptible;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollAdjustHash;
    /** @type {?} */
    PageScrollDirective.prototype.pageScroll;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollFinish;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollInstance;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollService;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFFBQVEsRUFFUixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUVqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUl6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMscUJBQXFCLElBQUksSUFBSSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0U7SUFnREUsNkJBQW9CLGlCQUFvQyxFQUFzQixNQUFjLEVBQW9CLFFBQWE7UUFBekcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbkNyRix5QkFBb0IsR0FBa0IsSUFBSSxDQUFDO1FBSTNDLHFCQUFnQixHQUFpQixJQUFJLENBQUM7UUFJdEMsdUJBQWtCLEdBQWlCLElBQUksQ0FBQztRQUl4QyxvQkFBZSxHQUFpQixJQUFJLENBQUM7UUFJckMscUJBQWdCLEdBQXNCLElBQUksQ0FBQztRQU0zQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFJN0IsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFHdkMscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFPcEUs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RTs7Ozs7SUFHdEUsaURBQXFEOzs7OztJQUNyRCx1Q0FBMkI7Ozs7O0lBRWYsZ0RBQTRDOzs7OztJQUFFLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGVyLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIFVybFRyZWVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtQYWdlU2Nyb2xsU2VydmljZX0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge1BhZ2VTY3JvbGxJbnN0YW5jZX0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuaW5zdGFuY2UnO1xuaW1wb3J0IHtQYWdlU2Nyb2xsVXRpbFNlcnZpY2UgYXMgVXRpbH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7RWFzaW5nTG9naWN9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJQYWdlU2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm91dGVyTGluazogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGxIb3Jpem9udGFsOiBib29sZWFuID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGxIb3Jpem9udGFsOiBib29sZWFuIHwgYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbE9mZnNldDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGxPZmZzZXQ6IG51bWJlciB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGxEdXJhdGlvbjogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGxEdXJhdGlvbjogbnVtYmVyIHwgYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbFNwZWVkOiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbFNwZWVkOiBudW1iZXIgfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsRWFzaW5nOiBFYXNpbmdMb2dpYyA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsRWFzaW5nOiBFYXNpbmdMb2dpYyB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYWdlU2Nyb2xsQWRqdXN0SGFzaCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsOiBzdHJpbmcgPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbDogc3RyaW5nIHwgYW55ID0gbnVsbDtcblxuICBAT3V0cHV0KClcbiAgcGFnZVNjcm9sbEZpbmlzaDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHByaXZhdGUgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2U7XG4gIHByaXZhdGUgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnk7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZVNjcm9sbFNlcnZpY2U6IFBhZ2VTY3JvbGxTZXJ2aWNlLCBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IDxEb2N1bWVudD4gZG9jdW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAvLyBTb21lIGlucHV0cyBjaGFuZ2VkLCByZXNldCB0aGUgcGFnZVNjcm9sbEluc3RhbmNlXG4gICAgdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5wYWdlU2Nyb2xsU2VydmljZS5zdG9wKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZ2VuZXJhdGVQYWdlU2Nyb2xsSW5zdGFuY2UoKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICBwcml2YXRlIGdlbmVyYXRlUGFnZVNjcm9sbEluc3RhbmNlKCk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB8IGFueSB7XG4gICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwodGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UpKSB7XG4gICAgICB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSA9IFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICAgICAgZG9jdW1lbnQ6IHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLmhyZWYsXG4gICAgICAgICAgc2Nyb2xsaW5nVmlld3M6IG51bGwsXG4gICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLnBhZ2VTY3JvbGwsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxpbmc6ICF0aGlzLnBhZ2VTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAgIHBhZ2VTY3JvbGxPZmZzZXQ6IHRoaXMucGFnZVNjcm9sbE9mZnNldCxcbiAgICAgICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZTogdGhpcy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSxcbiAgICAgICAgICBwYWdlU2Nyb2xsRWFzaW5nTG9naWM6IHRoaXMucGFnZVNjcm9sbEVhc2luZyxcbiAgICAgICAgICBwYWdlU2Nyb2xsRHVyYXRpb246IHRoaXMucGFnZVNjcm9sbER1cmF0aW9uLFxuICAgICAgICAgIHBhZ2VTY3JvbGxTcGVlZDogdGhpcy5wYWdlU2Nyb2xsU3BlZWQsXG4gICAgICAgICAgcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyOiB0aGlzLnBhZ2VTY3JvbGxGaW5pc2hcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIHB1c2hSb3V0ZXJTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdlU2Nyb2xsQWRqdXN0SGFzaCAmJiB0eXBlb2YgdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsVGFyZ2V0ID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQuc3Vic3RyKDAsIDEpID09PSAnIycpIHtcbiAgICAgICAgLy8gXCJOYXZpZ2F0ZVwiIHRvIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluIGFuZCB0aGlzIHRpbWUgc2V0IHRoZSBmcmFnbWVudC9oYXNoXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgICAgZnJhZ21lbnQ6IDxzdHJpbmc+dGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsVGFyZ2V0LnN1YnN0cigxKSxcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAncHJlc2VydmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VTY3JvbGxJbnN0YW5jZSA9IHRoaXMuZ2VuZXJhdGVQYWdlU2Nyb2xsSW5zdGFuY2UoKTtcbiAgICB0aGlzLnB1c2hSb3V0ZXJTdGF0ZSgpO1xuICAgIHRoaXMucGFnZVNjcm9sbFNlcnZpY2Uuc3RhcnQocGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgcHVibGljIGhhbmRsZUNsaWNrKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJvdXRlckxpbmsgJiYgdGhpcy5yb3V0ZXIgIT09IG51bGwgJiYgdGhpcy5yb3V0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgdXJsVHJlZTogVXJsVHJlZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvdXRlckxpbmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXJMaW5rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybFRyZWUgPSB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKHRoaXMucm91dGVyTGluayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJvdXRlci5pc0FjdGl2ZSh1cmxUcmVlLCB0cnVlKSkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBuYXZpZ2F0ZSB0aGVpciBmaXJzdC5cbiAgICAgICAgICAgIC8vIE5hdmlnYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgcm91dGVyTGluayBkaXJlY3RpdmVcbiAgICAgICAgICAgIC8vIHNvIHdlIG9ubHkgbmVlZCB0byBsaXN0ZW4gZm9yIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSA8U3Vic2NyaXB0aW9uPnRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJvdXRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IHJvdXRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gdG8gcHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyB0byBwcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxufVxuIl19