/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent(el, platformId) {
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
    ProgressSpinnerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        /** @type {?} */
        var colorClass = this.spinnerColor;
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
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var counter = 0;
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            function () {
                switch (counter) {
                    case 0:
                        _this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        _this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        _this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + _this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    };
    ProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinner',
                    template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProgressSpinnerComponent.propDecorators = {
        spinnerType: [{ type: Input }],
        spinnerColor: [{ type: Input }]
    };
    return ProgressSpinnerComponent;
}());
export { ProgressSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBYUUsa0NBQVksRUFBYyxFQUF1QixVQUFrQjtRQUxuRSxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBR2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBRWxDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNyQyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3BDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO2dCQUNuQyxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsd0RBQXdELENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtTQUNUO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFBQSxpQkE0QkM7O1lBM0JLLE9BQU8sR0FBRyxDQUFDOztZQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFdBQVc7OztZQUFDO2dCQUNWLFFBQVEsT0FBTyxFQUFFO29CQUNmLEtBQUssQ0FBQzt3QkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLDBDQUEwQyxDQUFDO3dCQUMzRCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO3dCQUMxRCxNQUFNO2lCQUNUO2dCQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUNmLE9BQU8sRUFBRSxDQUFDO2lCQUNYO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7WUFDSCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG1KQUE4QztvQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFiQyxVQUFVOzZDQXFCbUIsTUFBTSxTQUFDLFdBQVc7Ozs4QkFIOUMsS0FBSzsrQkFDTCxLQUFLOztJQThEUiwrQkFBQztDQUFBLEFBekVELElBeUVDO1NBbkVZLHdCQUF3Qjs7O0lBQ25DLHNDQUFlOztJQUNmLDRDQUF1Qzs7SUFDdkMsNkNBQWtCOztJQUNsQiwrQ0FBMEI7O0lBQzFCLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzc2JhcnMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGVsOiBFbGVtZW50UmVmO1xuICBhZGRDbGFzczogU3RyaW5nID0gJ3NwaW5uZXItYmx1ZS1vbmx5JztcbiAgaXNCcm93c2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNwaW5uZXJUeXBlID0gJyc7XG4gIEBJbnB1dCgpIHNwaW5uZXJDb2xvciA9ICdyYWluYm93JztcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29sb3JDbGFzcyA9IHRoaXMuc3Bpbm5lckNvbG9yO1xuICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yYWluYm93JztcblxuICAgIHN3aXRjaCAoY29sb3JDbGFzcykge1xuICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItZ3JlZW4tb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJlZC1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWluYm93JzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cgc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICB0aGlzLnNwaW5lclJ1bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XG4gIH1cblxuICBzcGluZXJSdW4oKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IGhvc3RFbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXIgJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItYmx1ZS1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lID0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgICAgICAgaWYgKGNvdW50ZXIgPCAzKSB7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9LCAxMzMzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==