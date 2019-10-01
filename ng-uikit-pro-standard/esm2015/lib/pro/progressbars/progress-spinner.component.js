/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class ProgressSpinnerComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        /** @type {?} */
        const colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    }
    /**
     * @return {?}
     */
    spinerRun() {
        /** @type {?} */
        let counter = 0;
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            () => {
                switch (counter) {
                    case 0:
                        this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    }
}
ProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinner',
                template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ProgressSpinnerComponent.propDecorators = {
    spinnerType: [{ type: Input }],
    spinnerColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressSpinnerComponent.prototype.el;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.addClass;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerType;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXBELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBT25DLFlBQVksRUFBYyxFQUF1QixVQUFrQjtRQUxuRSxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBR2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztjQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUVsQyxRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkMsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLHdEQUF3RCxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsU0FBUzs7WUFDSCxPQUFPLEdBQUcsQ0FBQzs7Y0FDVCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixXQUFXOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2YsUUFBUSxPQUFPLEVBQUU7b0JBQ2YsS0FBSyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsd0NBQXdDLENBQUM7d0JBQ3pELE1BQU07b0JBQ1IsS0FBSyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsMENBQTBDLENBQUM7d0JBQzNELE1BQU07b0JBQ1IsS0FBSyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsd0NBQXdDLENBQUM7d0JBQ3pELE1BQU07b0JBQ1IsS0FBSyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcseUNBQXlDLENBQUM7d0JBQzFELE1BQU07aUJBQ1Q7Z0JBRUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7b0JBQ2YsT0FBTyxFQUFFLENBQUM7aUJBQ1g7cUJBQU07b0JBQ0wsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDYjtZQUNILENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsbUpBQThDO2dCQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFiQyxVQUFVO3lDQXFCbUIsTUFBTSxTQUFDLFdBQVc7OzswQkFIOUMsS0FBSzsyQkFDTCxLQUFLOzs7O0lBSk4sc0NBQWU7O0lBQ2YsNENBQXVDOztJQUN2Qyw2Q0FBa0I7O0lBQ2xCLCtDQUEwQjs7SUFDMUIsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBQTEFURk9STV9JRCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFycy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZWw6IEVsZW1lbnRSZWY7XG4gIGFkZENsYXNzOiBTdHJpbmcgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICBpc0Jyb3dzZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3Bpbm5lclR5cGUgPSAnJztcbiAgQElucHV0KCkgc3Bpbm5lckNvbG9yID0gJ3JhaW5ib3cnO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBob3N0RWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjb2xvckNsYXNzID0gdGhpcy5zcGlubmVyQ29sb3I7XG4gICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cnO1xuXG4gICAgc3dpdGNoIChjb2xvckNsYXNzKSB7XG4gICAgICBjYXNlICdncmVlbic6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWJsdWUtb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZWQnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhaW5ib3cnOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmFpbmJvdyBzcGlubmVyLWJsdWUtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgIHRoaXMuc3BpbmVyUnVuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgfVxuXG4gIHNwaW5lclJ1bigpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yZWQtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWdyZWVuLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgPSAnICcgKyB0aGlzLmFkZENsYXNzO1xuICAgICAgICBpZiAoY291bnRlciA8IDMpIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sIDEzMzMpO1xuICAgIH1cbiAgfVxufVxuIl19