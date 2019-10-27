/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
var ProgressDirective = /** @class */ (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach((/**
             * @param {?} bar
             * @return {?}
             */
            function (bar) {
                bar.recalculatePercentage();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] }
    ];
    ProgressDirective.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
    return ProgressDirective;
}());
export { ProgressDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU05RDtJQUFBO1FBbUJ3QyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRS9DLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFZCxTQUFJLEdBQUcsR0FBRyxDQUFDO0lBWXZCLENBQUM7SUE3QkMsc0JBRVcsa0NBQUc7UUFIZCw4Q0FBOEM7Ozs7O1FBQzlDO1lBR0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBRUQsVUFBZSxDQUFTO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFpQjtnQkFDaEMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FQQTs7Ozs7SUFlTSxrQ0FBTTs7OztJQUFiLFVBQWMsR0FBaUI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkIsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVNLHFDQUFTOzs7O0lBQWhCLFVBQWlCLEdBQWlCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQWxDRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7OzswQkFHaEQsS0FBSztzQkFHTCxXQUFXLFNBQUMsVUFBVSxjQUN0QixLQUFLOzJCQVlMLFdBQVcsU0FBQyxnQkFBZ0I7O0lBZ0IvQix3QkFBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLGlCQUFpQjs7Ozs7O0lBRTVCLG9DQUFpQzs7SUFnQmpDLHFDQUFzRDs7SUFFdEQsaUNBQXdCOzs7OztJQUV4QixpQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuXG4vLyB0b2RvOiBwcm9ncmVzcyBlbGVtZW50IGNvbmZsaWN0IHdpdGggYm9vdHN0cmFwLmNzc1xuLy8gdG9kbzogbmVlZCBoYWNrOiByZXBsYWNlIGhvc3QgZWxlbWVudCB3aXRoIGRpdlxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdtZGJQcm9ncmVzcywgW21kYlByb2dyZXNzXSd9KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzRGlyZWN0aXZlICB7XG4gICAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAobm90ZTogbm90IHN1cHBvcnRlZCBieSBCb290c3RyYXAgNCkgKi9cbiAgQElucHV0KCkgcHVibGljIGFuaW1hdGU6IGJvb2xlYW47XG5cbiAgLyoqIG1heGltdW0gdG90YWwgdmFsdWUgb2YgcHJvZ3Jlc3MgZWxlbWVudCAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcbiAgQElucHV0KClcbiAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgcHVibGljIHNldCBtYXgodjogbnVtYmVyKSB7XG4gIHRoaXMuX21heCA9IHY7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGJhcjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGJhci5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBwdWJsaWMgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIHB1YmxpYyBiYXJzOiBhbnlbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbWF4ID0gMTAwO1xuXG4gIHB1YmxpYyBhZGRCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0ZSkge1xuICAgIGJhci50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XG4gIH1cbn1cbiJdfQ==