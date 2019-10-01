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
export class PageScrollDirective {
    /**
     * @param {?} pageScrollService
     * @param {?} router
     * @param {?} document
     */
    constructor(pageScrollService, router, document) {
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
    ngOnChanges() {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    }
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    generatePageScrollInstance() {
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
    }
    /**
     * @private
     * @return {?}
     */
    pushRouterState() {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: (/** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1))),
                queryParamsHandling: 'preserve'
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    scroll() {
        /** @type {?} */
        const pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            let urlTree;
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
                const subscription = (/** @type {?} */ (this.router.events.subscribe((/**
                 * @param {?} routerEvent
                 * @return {?}
                 */
                (routerEvent) => {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription.unsubscribe();
                        this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription.unsubscribe();
                    }
                }))));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    }
}
PageScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbPageScroll]'
            },] }
];
/** @nocollapse */
PageScrollDirective.ctorParameters = () => [
    { type: PageScrollService },
    { type: Router, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFFBQVEsRUFFUixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUVqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUl6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMscUJBQXFCLElBQUksSUFBSSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFNN0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBNkM5QixZQUFvQixpQkFBb0MsRUFBc0IsTUFBYyxFQUFvQixRQUFhO1FBQXpHLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBc0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQW5DckYseUJBQW9CLEdBQWtCLElBQUksQ0FBQztRQUkzQyxxQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBSXRDLHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFJeEMsb0JBQWUsR0FBaUIsSUFBSSxDQUFDO1FBSXJDLHFCQUFnQixHQUFzQixJQUFJLENBQUM7UUFNM0MseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBSTdCLGVBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR3ZDLHFCQUFnQixHQUEwQixJQUFJ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e1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPbkNoYW5nZXMsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvbkVycm9yLFxuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBVcmxUcmVlXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7UGFnZVNjcm9sbFNlcnZpY2V9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHtQYWdlU2Nyb2xsSW5zdGFuY2V9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlJztcbmltcG9ydCB7UGFnZVNjcm9sbFV0aWxTZXJ2aWNlIGFzIFV0aWx9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZSc7XG5pbXBvcnQge0Vhc2luZ0xvZ2ljfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiUGFnZVNjcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdXRlckxpbms6IGFueTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsSG9yaXpvbnRhbDogYm9vbGVhbiA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsSG9yaXpvbnRhbDogYm9vbGVhbiB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGxPZmZzZXQ6IG51bWJlciA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsT2Zmc2V0OiBudW1iZXIgfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsRHVyYXRpb246IG51bWJlciA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsRHVyYXRpb246IG51bWJlciB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGxTcGVlZDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGxTcGVlZDogbnVtYmVyIHwgYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbEVhc2luZzogRWFzaW5nTG9naWMgPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbEVhc2luZzogRWFzaW5nTG9naWMgfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVNjcm9sbEFkanVzdEhhc2ggPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbDogc3RyaW5nID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGw6IHN0cmluZyB8IGFueSA9IG51bGw7XG5cbiAgQE91dHB1dCgpXG4gIHBhZ2VTY3JvbGxGaW5pc2g6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyBwcml2YXRlIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlO1xuICBwcml2YXRlIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlIHwgYW55O1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VTY3JvbGxTZXJ2aWNlOiBQYWdlU2Nyb2xsU2VydmljZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSA8RG9jdW1lbnQ+IGRvY3VtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgLy8gU29tZSBpbnB1dHMgY2hhbmdlZCwgcmVzZXQgdGhlIHBhZ2VTY3JvbGxJbnN0YW5jZVxuICAgIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMucGFnZVNjcm9sbFNlcnZpY2Uuc3RvcCh0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBwcml2YXRlIGdlbmVyYXRlUGFnZVNjcm9sbEluc3RhbmNlKCk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVBhZ2VTY3JvbGxJbnN0YW5jZSgpOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnkge1xuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKSkge1xuICAgICAgdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UgPSBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICAgIGRvY3VtZW50OiB0aGlzLmRvY3VtZW50LFxuICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy5ocmVmLFxuICAgICAgICAgIHNjcm9sbGluZ1ZpZXdzOiBudWxsLFxuICAgICAgICAgIG5hbWVzcGFjZTogdGhpcy5wYWdlU2Nyb2xsLFxuICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiAhdGhpcy5wYWdlU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgICBwYWdlU2Nyb2xsT2Zmc2V0OiB0aGlzLnBhZ2VTY3JvbGxPZmZzZXQsXG4gICAgICAgICAgcGFnZVNjcm9sbEludGVycnVwdGlibGU6IHRoaXMucGFnZVNjcm9sbEludGVycnVwdGlibGUsXG4gICAgICAgICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljOiB0aGlzLnBhZ2VTY3JvbGxFYXNpbmcsXG4gICAgICAgICAgcGFnZVNjcm9sbER1cmF0aW9uOiB0aGlzLnBhZ2VTY3JvbGxEdXJhdGlvbixcbiAgICAgICAgICBwYWdlU2Nyb2xsU3BlZWQ6IHRoaXMucGFnZVNjcm9sbFNwZWVkLFxuICAgICAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcjogdGhpcy5wYWdlU2Nyb2xsRmluaXNoXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoUm91dGVyU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMucGFnZVNjcm9sbEFkanVzdEhhc2ggJiYgdHlwZW9mIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbFRhcmdldCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsVGFyZ2V0LnN1YnN0cigwLCAxKSA9PT0gJyMnKSB7XG4gICAgICAgIC8vIFwiTmF2aWdhdGVcIiB0byB0aGUgY3VycmVudCByb3V0ZSBhZ2FpbiBhbmQgdGhpcyB0aW1lIHNldCB0aGUgZnJhZ21lbnQvaGFzaFxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgICAgIGZyYWdtZW50OiA8c3RyaW5nPnRoaXMucGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbFRhcmdldC5zdWJzdHIoMSksXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ3ByZXNlcnZlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbCgpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2UgPSB0aGlzLmdlbmVyYXRlUGFnZVNjcm9sbEluc3RhbmNlKCk7XG4gICAgdGhpcy5wdXNoUm91dGVyU3RhdGUoKTtcbiAgICB0aGlzLnBhZ2VTY3JvbGxTZXJ2aWNlLnN0YXJ0KHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIHB1YmxpYyBoYW5kbGVDbGljaygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJMaW5rICYmIHRoaXMucm91dGVyICE9PSBudWxsICYmIHRoaXMucm91dGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IHVybFRyZWU6IFVybFRyZWU7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb3V0ZXJMaW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyTGluayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxUcmVlID0gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZSh0aGlzLnJvdXRlckxpbmspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yb3V0ZXIuaXNBY3RpdmUodXJsVHJlZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gbmF2aWdhdGUgdGhlaXIgZmlyc3QuXG4gICAgICAgICAgICAvLyBOYXZpZ2F0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIHJvdXRlckxpbmsgZGlyZWN0aXZlXG4gICAgICAgICAgICAvLyBzbyB3ZSBvbmx5IG5lZWQgdG8gbGlzdGVuIGZvciByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gPFN1YnNjcmlwdGlvbj50aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChyb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCByb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHRvIHByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHJldHVybiBmYWxzZTsgLy8gdG8gcHJldmVudERlZmF1bHQoKVxuICB9XG5cbn1cbiJdfQ==