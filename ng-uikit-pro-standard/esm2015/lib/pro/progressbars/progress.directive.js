/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
export class ProgressDirective {
    constructor() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((/**
         * @param {?} bar
         * @return {?}
         */
        (bar) => {
            bar.recalculatePercentage();
        }));
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] }
];
ProgressDirective.propDecorators = {
    animate: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
    addClass: [{ type: HostBinding, args: ['class.progress',] }]
};
if (false) {
    /**
     * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
     * @type {?}
     */
    ProgressDirective.prototype.animate;
    /** @type {?} */
    ProgressDirective.prototype.addClass;
    /** @type {?} */
    ProgressDirective.prototype.bars;
    /**
     * @type {?}
     * @protected
     */
    ProgressDirective.prototype._max;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU85RCxNQUFNLE9BQU8saUJBQWlCO0lBRDlCO1FBbUJ3QyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRS9DLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFZCxTQUFJLEdBQUcsR0FBRyxDQUFDO0lBWXZCLENBQUM7Ozs7O0lBN0JDLElBRVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELElBQVcsR0FBRyxDQUFDLENBQVM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBUU0sTUFBTSxDQUFDLEdBQWlCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsR0FBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBQzs7O3NCQUdoRCxLQUFLO2tCQUdMLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLEtBQUs7dUJBWUwsV0FBVyxTQUFDLGdCQUFnQjs7Ozs7OztJQWhCN0Isb0NBQWlDOztJQWdCakMscUNBQXNEOztJQUV0RCxpQ0FBd0I7Ozs7O0lBRXhCLGlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbi8vIHRvZG86IHByb2dyZXNzIGVsZW1lbnQgY29uZmxpY3Qgd2l0aCBib290c3RyYXAuY3NzXG4vLyB0b2RvOiBuZWVkIGhhY2s6IHJlcGxhY2UgaG9zdCBlbGVtZW50IHdpdGggZGl2XG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ21kYlByb2dyZXNzLCBbbWRiUHJvZ3Jlc3NdJ30pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NEaXJlY3RpdmUgIHtcbiAgICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkIChub3RlOiBub3Qgc3VwcG9ydGVkIGJ5IEJvb3RzdHJhcCA0KSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBwdWJsaWMgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgdGhpcy5fbWF4ID0gdjtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcm9ncmVzcycpIHB1YmxpYyBhZGRDbGFzcyA9IHRydWU7XG5cbiAgcHVibGljIGJhcnM6IGFueVtdID0gW107XG5cbiAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XG5cbiAgcHVibGljIGFkZEJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbmltYXRlKSB7XG4gICAgYmFyLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgfVxuICAgIHRoaXMuYmFycy5wdXNoKGJhcik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihiYXIpLCAxKTtcbiAgfVxufVxuIl19