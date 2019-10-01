/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var EasyPieChartComponent = /** @class */ (function () {
    function EasyPieChartComponent(el, platformId, _r) {
        this._r = _r;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        this.element = el;
        /** @type {?} */
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true,
            },
        };
        this.options = Object.assign(options, this.options);
    }
    /**
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var size = this.options.size;
            this.element.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
            // Positioning text in center of chart
            /** @type {?} */
            var percent = document.querySelector('.percent');
            if (percent) {
                this._r.setStyle(percent, 'line-height', size + 'px');
                this._r.setStyle(percent, 'width', size + 'px');
                this._r.setStyle(percent, 'height', size + 'px');
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    EasyPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-easy-pie-chart',
                    template: '<div>Loading</div>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    EasyPieChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 }
    ]; };
    EasyPieChartComponent.propDecorators = {
        percent: [{ type: Input }],
        options: [{ type: Input }]
    };
    return EasyPieChartComponent;
}());
export { EasyPieChartComponent };
if (false) {
    /** @type {?} */
    EasyPieChartComponent.prototype.percent;
    /** @type {?} */
    EasyPieChartComponent.prototype.options;
    /** @type {?} */
    EasyPieChartComponent.prototype.element;
    /** @type {?} */
    EasyPieChartComponent.prototype.pieChart;
    /** @type {?} */
    EasyPieChartComponent.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    EasyPieChartComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc21hbGxwaWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9lYXN5LWNoYXJ0cy9jaGFydC1zbWFsbHBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBWUUsK0JBQVksRUFBYyxFQUF1QixVQUFrQixFQUFVLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBRjFGLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFDWixPQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsU0FBUztZQUNyQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBRTdCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWhCQyxVQUFVOzZDQXdCbUIsTUFBTSxTQUFDLFdBQVc7Z0JBbkIvQyxTQUFTOzs7MEJBYVIsS0FBSzswQkFDTCxLQUFLOztJQThDUiw0QkFBQztDQUFBLEFBckRELElBcURDO1NBaERZLHFCQUFxQjs7O0lBQ2hDLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0Qix3Q0FBYTs7SUFDYix5Q0FBYzs7SUFDZCwwQ0FBdUI7Ozs7O0lBRThDLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyIEVhc3lQaWVDaGFydDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItZWFzeS1waWUtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJzxkaXY+TG9hZGluZzwvZGl2PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFYXN5UGllQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHBlcmNlbnQ6IGFueTtcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBlbGVtZW50OiBhbnk7XG4gIHBpZUNoYXJ0OiBhbnk7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZywgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYmFyQ29sb3I6ICcjZWYxZTI1JyxcbiAgICAgIHRyYWNrQ29sb3I6ICcjZjlmOWY5JyxcbiAgICAgIHNjYWxlQ29sb3I6ICcjZGZlMGUwJyxcbiAgICAgIHNjYWxlTGVuZ3RoOiA1LFxuICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgIGxpbmVXaWR0aDogMyxcbiAgICAgIHNpemU6IDExMCxcbiAgICAgIHJvdGF0ZTogMCxcbiAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBzaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMucGllQ2hhcnQgPSBuZXcgRWFzeVBpZUNoYXJ0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5waWVDaGFydC51cGRhdGUodGhpcy5wZXJjZW50KTtcbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRleHQgaW4gY2VudGVyIG9mIGNoYXJ0XG4gICAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcmNlbnQnKTtcbiAgICAgIGlmIChwZXJjZW50KSB7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUocGVyY2VudCwgJ2xpbmUtaGVpZ2h0Jywgc2l6ZSArICdweCcpO1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHBlcmNlbnQsICd3aWR0aCcsIHNpemUgKyAncHgnKTtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZShwZXJjZW50LCAnaGVpZ2h0Jywgc2l6ZSArICdweCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIWNoYW5nZXNbJ3BlcmNlbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucGllQ2hhcnQudXBkYXRlKHRoaXMucGVyY2VudCk7XG4gICAgfVxuICB9XG59XG4iXX0=