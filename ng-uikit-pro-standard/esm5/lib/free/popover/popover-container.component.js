/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.class =
            'popover-fadeIn popover in popover-' +
                this.placement +
                ' ' +
                this.placement +
                ' bs-popover-' +
                this.placement;
    };
    PopoverContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-popover-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <h3 class=\"popover-header\" *ngIf=\"title\">{{ title }}</h3>\n    <div class=\"popover-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:'';border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:'';border-width:11px}.popover::after{content:'';border-width:10px}@-webkit-keyframes fadeInPopover{from{opacity:0}to{opacity:1}}@keyframes fadeInPopover{from{opacity:0}to{opacity:1}}.popover-fadeIn{-webkit-animation-name:fadeInPopover;animation-name:fadeInPopover;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}"]
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: Input }],
        title: [{ type: Input }],
        show: [{ type: HostBinding, args: ['class.show',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return PopoverContainerComponent;
}());
export { PopoverContainerComponent };
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.show;
    /** @type {?} */
    PopoverContainerComponent.prototype.role;
    /** @type {?} */
    PopoverContainerComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEQ7SUF5QkUsbUNBQW1CLE1BQXFCO1FBVGIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBU3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFORCxzQkFBVyw0Q0FBSzs7OztRQUFoQjtZQUNFLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7Ozs7SUFNRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSztZQUNSLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsR0FBRztnQkFDSCxJQUFJLENBQUMsU0FBUztnQkFDZCxjQUFjO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLHdKQUtUO29CQUVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBZFEsYUFBYTs7OzRCQWdCbkIsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLFdBQVcsU0FBQyxZQUFZO3VCQUN4QixXQUFXLFNBQUMsV0FBVzt3QkFFdkIsV0FBVyxTQUFDLE9BQU87O0lBbUJ0QixnQ0FBQztDQUFBLEFBdENELElBc0NDO1NBMUJZLHlCQUF5Qjs7O0lBQ3BDLDhDQUFrQzs7SUFDbEMsMENBQThCOztJQUU5Qix5Q0FBMkM7O0lBQzNDLHlDQUEyQzs7SUFFM0MsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItcG9wb3Zlci1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiICpuZ0lmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAnIWlzQnMzJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ3Rvb2x0aXAnO1xuICAvLyAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3M6IGFueTtcblxuICBwdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xhc3MgPVxuICAgICAgJ3BvcG92ZXItZmFkZUluIHBvcG92ZXIgaW4gcG9wb3Zlci0nICtcbiAgICAgIHRoaXMucGxhY2VtZW50ICtcbiAgICAgICcgJyArXG4gICAgICB0aGlzLnBsYWNlbWVudCArXG4gICAgICAnIGJzLXBvcG92ZXItJyArXG4gICAgICB0aGlzLnBsYWNlbWVudDtcbiAgfVxufVxuIl19