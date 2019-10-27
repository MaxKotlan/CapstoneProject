/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
var CharCounterDirective = /** @class */ (function () {
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    };
    CharCounterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCharCounter]'
                },] }
    ];
    /** @nocollapse */
    CharCounterDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CharCounterDirective.propDecorators = {
        length: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['input',] }],
        hide: [{ type: HostListener, args: ['blur',] }],
        show: [{ type: HostListener, args: ['focus',] }]
    };
    return CharCounterDirective;
}());
export { CharCounterDirective };
if (false) {
    /** @type {?} */
    CharCounterDirective.prototype.length;
    /** @type {?} */
    CharCounterDirective.prototype.textContainer;
    /**
     * @type {?}
     * @private
     */
    CharCounterDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    CharCounterDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1jb3VudGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vaW5wdXRzL2NoYXItY291bnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGO0lBVUUsOEJBQW9CLE1BQWtCLEVBQVUsU0FBb0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIcEQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUcyQyxDQUFDOzs7O0lBRXhFLHVDQUFROzs7SUFBUjtRQUNFLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBR3NCLHNDQUFPOzs7SUFBOUI7UUFDRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNqRTtJQUNKLENBQUM7Ozs7SUFFcUIsbUNBQUk7OztJQUExQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFc0IsbUNBQUk7OztJQUEzQjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBSjJCLFVBQVU7Z0JBQUUsU0FBUzs7O3lCQVM5QyxLQUFLOzBCQWVMLFlBQVksU0FBQyxPQUFPO3VCQVVwQixZQUFZLFNBQUMsTUFBTTt1QkFJbkIsWUFBWSxTQUFDLE9BQU87O0lBS3ZCLDJCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksb0JBQW9COzs7SUFFL0Isc0NBQTRCOztJQUM1Qiw2Q0FBMEI7Ozs7O0lBRWQsc0NBQTBCOzs7OztJQUFFLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNoYXJDb3VudGVyXSdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIENoYXJDb3VudGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgbGVuZ3RoID0gMjA7XG4gIHB1YmxpYyB0ZXh0Q29udGFpbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gSW5pdGl0YWxpc2UgYSBuZXcgPHNwYW4+IGVsZW1lbnQgZm9yIHRoZSBjb3VudCBkaXNwbGF5IGFuZCByZW5kZXIgaXQgYmVsb3cgdGhlIGhvc3QgY29tcG9uZW50LlxuICAgIHRoaXMudGV4dENvbnRhaW5lciA9ICB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCB0aGlzLnRleHRDb250YWluZXIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGV4dENvbnRhaW5lciwgJ2NoYXJzJyk7XG4gICAgdGhpcy50ZXh0Q29udGFpbmVyLmlubmVySFRNTCA9ICcwLycgKyB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbktleVVwKCkge1xuICAgICB0aGlzLnRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggKyAnLycgKyB0aGlzLmxlbmd0aDtcblxuICAgICBpZiAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiB0aGlzLmxlbmd0aCkge1xuICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdpbnZhbGlkJyk7XG4gICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaW52YWxpZCcpO1xuICAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgaGlkZSgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgc2hvdygpIHtcbiAgICB0aGlzLm9uS2V5VXAoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cblxufVxuIl19