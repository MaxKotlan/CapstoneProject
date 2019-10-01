/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, HostBinding, ElementRef, Renderer2, Component, ViewEncapsulation, } from '@angular/core';
/** @type {?} */
let defaultIdNumber = 0;
// tslint:disable-next-line:component-class-suffix
export class MdbSuccessDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = `mdb-success-${defaultIdNumber++}`;
        this.successMsg = true;
        this.messageId = this.id;
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    _getClosestEl(el, selector) {
        for (; el && el !== document; el = el.previousElementSibling) {
            if (el.matches(selector)) {
                return el;
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    _calculateMarginTop() {
        /** @type {?} */
        const parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        /** @type {?} */
        const heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            /** @type {?} */
            const margin = heightParent / 12.5;
            this.el.nativeElement.style.top = `${heightParent + heightParent / margin}px`;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const textarea = this._getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            /** @type {?} */
            let height = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            () => {
                height = textarea.offsetHeight + 4 + 'px';
                this.renderer.setStyle(this.el.nativeElement, 'top', height);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
    }
}
MdbSuccessDirective.decorators = [
    { type: Component, args: [{
                selector: 'mdb-success',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".error-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#f44336}.success-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#00c851}"]
            }] }
];
/** @nocollapse */
MdbSuccessDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbSuccessDirective.propDecorators = {
    id: [{ type: Input }],
    successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
    messageId: [{ type: HostBinding, args: ['attr.id',] }]
};
if (false) {
    /** @type {?} */
    MdbSuccessDirective.prototype.id;
    /** @type {?} */
    MdbSuccessDirective.prototype.successMsg;
    /** @type {?} */
    MdbSuccessDirective.prototype.messageId;
    /** @type {?} */
    MdbSuccessDirective.prototype.textareaListenFunction;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvc3VjY2Vzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7SUFFbkIsZUFBZSxHQUFHLENBQUM7QUFRdkIsa0RBQWtEO0FBQ2xELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUTlCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVB0RCxPQUFFLEdBQUcsZUFBZSxlQUFlLEVBQUUsRUFBRSxDQUFDO1FBRVgsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNoQyxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUlzQixDQUFDOzs7Ozs7O0lBRTNELGFBQWEsQ0FBQyxFQUFPLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1lBQzVELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUNPLG1CQUFtQjs7Y0FDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDOztjQUN0RSxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3hELElBQUksWUFBWSxFQUFFOztrQkFDVixNQUFNLEdBQUcsWUFBWSxHQUFHLElBQUk7WUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUM7U0FDL0U7SUFDSCxDQUFDOzs7O0lBQ0QsUUFBUTs7Y0FDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDMUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU87OztZQUFFLEdBQUcsRUFBRTtnQkFDekUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBZkMsVUFBVTtZQUNWLFNBQVM7OztpQkFpQlIsS0FBSzt5QkFFTCxXQUFXLFNBQUMsdUJBQXVCO3dCQUNuQyxXQUFXLFNBQUMsU0FBUzs7OztJQUh0QixpQ0FBaUQ7O0lBRWpELHlDQUF3RDs7SUFDeEQsd0NBQTRDOztJQUU1QyxxREFBaUM7Ozs7O0lBRXJCLGlDQUFzQjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgZGVmYXVsdElkTnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN1Y2Nlc3MnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC11dGlsaXRpZXMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE1kYlN1Y2Nlc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkID0gYG1kYi1zdWNjZXNzLSR7ZGVmYXVsdElkTnVtYmVyKyt9YDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN1Y2Nlc3MtbWVzc2FnZScpIHN1Y2Nlc3NNc2cgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBtZXNzYWdlSWQgPSB0aGlzLmlkO1xuXG4gIHRleHRhcmVhTGlzdGVuRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9nZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlTWFyZ2luVG9wKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNoZWNrJyk7XG4gICAgY29uc3QgaGVpZ2h0UGFyZW50ID0gcGFyZW50ID8gcGFyZW50Lm9mZnNldEhlaWdodCA6IG51bGw7XG4gICAgaWYgKGhlaWdodFBhcmVudCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gaGVpZ2h0UGFyZW50IC8gMTIuNTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtoZWlnaHRQYXJlbnQgKyBoZWlnaHRQYXJlbnQgLyBtYXJnaW59cHhgO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuX2dldENsb3Nlc3RFbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcubWQtdGV4dGFyZWEnKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVNYXJnaW5Ub3AoKTtcbiAgICBpZiAodGV4dGFyZWEpIHtcbiAgICAgIGxldCBoZWlnaHQgPSB0ZXh0YXJlYS5vZmZzZXRIZWlnaHQgKyA0ICsgJ3B4JztcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgaGVpZ2h0KTtcblxuICAgICAgdGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGV4dGFyZWEsICdrZXl1cCcsICgpID0+IHtcbiAgICAgICAgaGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0ICsgNCArICdweCc7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19