/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, } from 'rxjs/operators';
/** @enum {string} */
const Direction = {
    Up: 'Up',
    Down: 'Down',
};
export class StickyHeaderDirective {
    /**
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        () => window.pageYOffset)), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down))), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Up)));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Down)));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollUp$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(0%)');
                this.transitionEnd.emit({ state: 'Visible' });
            }));
            this.scrollDown$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(-100%)');
                this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    }
}
StickyHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbStickyHeader]',
                exportAs: 'mdbStickyHeader',
            },] }
];
/** @nocollapse */
StickyHeaderDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
StickyHeaderDirective.propDecorators = {
    animationDuration: [{ type: Input }],
    transitionEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StickyHeaderDirective.prototype.animationDuration;
    /** @type {?} */
    StickyHeaderDirective.prototype.transitionEnd;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollDown$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollUp$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsSUFBSSxFQUNKLFlBQVksR0FDYixNQUFNLGdCQUFnQixDQUFDOzs7SUFHdEIsSUFBSyxJQUFJO0lBQ1QsTUFBTyxNQUFNOztBQU9mLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBT2hDLFlBQW9CLFNBQW9CLEVBQVUsR0FBZTtRQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQU54RCxzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDdkIsa0JBQWEsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFLN0IsQ0FBQzs7OztJQUVyRSxlQUFlOztjQUNQLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFDLEVBQzdCLFFBQVEsRUFBRSxFQUNWLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUN2RSxvQkFBb0IsRUFBRSxFQUN0QixLQUFLLEVBQUUsQ0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVqRSxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsWUFBWSxFQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixZQUFZLENBQzFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsWUFBWSxFQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixZQUFZLENBQzFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUF0QkMsU0FBUztZQUpULFVBQVU7OztnQ0E0QlQsS0FBSzs0QkFDTCxNQUFNOzs7O0lBRFAsa0RBQWlDOztJQUNqQyw4Q0FBaUc7Ozs7O0lBRWpHLDRDQUF5Qjs7Ozs7SUFDekIsMENBQXVCOzs7OztJQUVYLDBDQUE0Qjs7Ozs7SUFBRSxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBwYWlyd2lzZSxcbiAgc2hhcmUsXG4gIHNraXAsXG4gIHRocm90dGxlVGltZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5lbnVtIERpcmVjdGlvbiB7XG4gIFVwID0gJ1VwJyxcbiAgRG93biA9ICdEb3duJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlN0aWNreUhlYWRlcl0nLFxuICBleHBvcnRBczogJ21kYlN0aWNreUhlYWRlcicsXG59KVxuZXhwb3J0IGNsYXNzIFN0aWNreUhlYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgQE91dHB1dCgpIHRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjx7IHN0YXRlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PigpO1xuXG4gIHByaXZhdGUgc2Nyb2xsRG93biQ6IGFueTtcbiAgcHJpdmF0ZSBzY3JvbGxVcCQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKS5waXBlKFxuICAgICAgdGhyb3R0bGVUaW1lKDEwKSxcbiAgICAgIG1hcCgoKSA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICAgIG1hcCgoW3kxLCB5Ml0pOiBEaXJlY3Rpb24gPT4gKHkyIDwgeTEgPyBEaXJlY3Rpb24uVXAgOiBEaXJlY3Rpb24uRG93bikpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGxVcCQgPSBzY3JvbGwkLnBpcGUoZmlsdGVyKGRpcmVjdGlvbiA9PiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5VcCkpO1xuICAgIHRoaXMuc2Nyb2xsRG93biQgPSBzY3JvbGwkLnBpcGUoZmlsdGVyKGRpcmVjdGlvbiA9PiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Eb3duKSk7XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgJzAnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbFVwJC5waXBlKHNraXAoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAgIGBhbGwgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW5gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kLmVtaXQoeyBzdGF0ZTogJ1Zpc2libGUnIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNjcm9sbERvd24kLnBpcGUoc2tpcCgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAndHJhbnNpdGlvbicsXG4gICAgICAgICAgYGFsbCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259bXMgZWFzZS1pbmBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKC0xMDAlKScpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmQuZW1pdCh7IHN0YXRlOiAnSGlkZGVuJyB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=