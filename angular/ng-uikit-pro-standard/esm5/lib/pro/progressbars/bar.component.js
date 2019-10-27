/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input } from '@angular/core';
import { ProgressDirective } from './progress.directive';
// todo: number pipe
// todo: use query from progress?
var BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        /** @type {?} */
        var totalPercentage = this.progress.bars.reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-bar',
                    template: "<div class=\"progress-bar\"\nstyle=\"min-width: 0;\"\nrole=\"progressbar\"\n[ngClass]=\"type && 'progress-bar-' + type\"\n[ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\naria-valuemin=\"0\"\n[attr.aria-valuenow]=\"value\"\n[attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n[attr.aria-valuemax]=\"max\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressDirective, decorators: [{ type: Host }] }
    ]; };
    BarComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }]
    };
    return BarComponent;
}());
export { BarComponent };
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    BarComponent.prototype.type;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.transition;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcHJvZ3Jlc3NiYXJzL2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUl6RDtJQTZCRSxzQkFBMkIsUUFBMkI7UUFOL0MsWUFBTyxHQUFHLENBQUMsQ0FBQztRQU9qQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBckJELHNCQUNXLCtCQUFLO1FBRmhCLG9DQUFvQzs7Ozs7UUFDcEM7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFFRCxVQUFpQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDOzs7T0FSQTs7OztJQW9CTSwrQkFBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sa0NBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSw0Q0FBcUI7OztJQUE1QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUU1RCxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFVLEtBQWEsRUFBRSxHQUFpQjtZQUN4RixPQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUMsR0FBRSxDQUFDLENBQUM7UUFFTCxJQUFJLGVBQWUsR0FBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIseVlBQW1DO2lCQUNwQzs7OztnQkFQUSxpQkFBaUIsdUJBaUNKLElBQUk7Ozt1QkFyQnZCLEtBQUs7d0JBRUwsS0FBSzs7SUEwQ1IsbUJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQWhEWSxZQUFZOzs7SUFDdkIsMkJBQW1COzs7OztJQUduQiw0QkFBNkI7O0lBZTdCLCtCQUFtQjs7SUFDbkIsa0NBQTBCOztJQUMxQixnQ0FBbUM7Ozs7O0lBRW5DLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2dyZXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9wcm9ncmVzcy5kaXJlY3RpdmUnO1xuXG4vLyB0b2RvOiBudW1iZXIgcGlwZVxuLy8gdG9kbzogdXNlIHF1ZXJ5IGZyb20gcHJvZ3Jlc3M/XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgbWF4OiBudW1iZXI7XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICBpZiAoIXYgJiYgdiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICB9XG5cbiAgcHVibGljIHBlcmNlbnQgPSAwO1xuICBwdWJsaWMgdHJhbnNpdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3Jlc3M6IFByb2dyZXNzRGlyZWN0aXZlO1xuXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5hZGRCYXIodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5yZW1vdmVCYXIodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGVyY2VudCA9ICsoMTAwICogdGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4KS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzLnJlZHVjZShmdW5jdGlvbiAodG90YWw6IG51bWJlciwgYmFyOiBCYXJDb21wb25lbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdG90YWwgKyBiYXIucGVyY2VudDtcbiAgICB9LCAwKTtcblxuICAgIGlmICh0b3RhbFBlcmNlbnRhZ2UgPiAxMDApIHtcbiAgICAgICAgdGhpcy5wZXJjZW50IC09IHRvdGFsUGVyY2VudGFnZSAtIDEwMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==