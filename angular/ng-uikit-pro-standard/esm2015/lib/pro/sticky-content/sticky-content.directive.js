/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class MdbStickyDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        () => {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            const parentRect = this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            const bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            let dynProps;
            if (this.original.float === 'right') {
                /** @type {?} */
                const right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                /** @type {?} */
                const left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (this.original.marginTop +
                this.original.marginBottom +
                this.original.boundingClientRect.height +
                this.stickyOffsetTop >=
                parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                const floatAdjustment = this.original.float === 'right'
                    ? { right: 0 }
                    : this.original.float === 'left'
                        ? { left: 0 }
                        : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0,
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop >
                this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit',
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left,
                }, dynProps);
            }
        });
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        const allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        const parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft,
        };
        if (this.isBrowser) {
            /** @type {?} */
            const elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                // left: computedStyle(this.el, 'left'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10),
            };
        }
        this.attach();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
    }
    /**
     * @return {?}
     */
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    /**
     * @return {?}
     */
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
}
MdbStickyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSticky]',
            },] }
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbStickyDirective.propDecorators = {
    stickyAfter: [{ type: Input }],
    stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
};
if (false) {
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfter;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfterAlias;
    /** @type {?} */
    MdbStickyDirective.prototype.isBrowser;
    /** @type {?} */
    MdbStickyDirective.prototype.el;
    /** @type {?} */
    MdbStickyDirective.prototype.parentEl;
    /** @type {?} */
    MdbStickyDirective.prototype.fillerEl;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyOffsetTop;
    /** @type {?} */
    MdbStickyDirective.prototype.diff;
    /** @type {?} */
    MdbStickyDirective.prototype.original;
    /** @type {?} */
    MdbStickyDirective.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBaUI3QixZQUFZLEVBQWMsRUFBdUIsVUFBa0I7O1FBYm5FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUErRXBCLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUU7OztrQkFFYixVQUFVLEdBQWUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2tCQUN0RSxRQUFRLEdBQWUsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzlELFFBQVE7WUFFWixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTs7c0JBQzdCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUMzRSxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDO2FBQ3BDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUss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Q0EwQkMsTUFBTSxTQUFDLFdBQVc7OzswQkFoQjlDLEtBQUs7K0JBRUwsS0FBSyxTQUFDLGNBQWM7Ozs7SUFGckIseUNBQTZCOztJQUU3Qiw4Q0FBZ0Q7O0lBQ2hELHVDQUFrQjs7SUFHbEIsZ0NBQXNCOztJQUV0QixzQ0FBNEI7O0lBRTVCLHNDQUE0Qjs7SUFDNUIsNkNBQW9COztJQUVwQixrQ0FBVTs7SUFDVixzQ0FBYzs7SUE0RWQsMkNBOEZFIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbXB1dGVkU3R5bGUgfSBmcm9tICcuL2NvbXB1dGVkLnN0eWxlJztcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0aWNreURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHN0aWNreUFmdGVyOiBzdHJpbmc7IC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3N0aWNreS1hZnRlcicpIHN0aWNreUFmdGVyQWxpYXM6IHN0cmluZzsgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBpc0Jyb3dzZXIgPSBmYWxzZTtcblxuICAvLyAgIGVsOiBIVE1MRWxlbWVudDtcbiAgZWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyAgIHBhcmVudEVsOiBIVE1MRWxlbWVudDtcbiAgcGFyZW50RWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyBmaWxsZXJFbDogSFRNTEVsZW1lbnQ7XG4gIGZpbGxlckVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgc3RpY2t5T2Zmc2V0VG9wID0gMDtcblxuICBkaWZmOiBhbnk7XG4gIG9yaWdpbmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlcikge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlcik7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0aWNreUFmdGVyQWxpYXMpIHtcbiAgICAgIGNvbnN0IGNldFN0aWNreUFmdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3RpY2t5QWZ0ZXJBbGlhcyk7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgcGFyZW50IHJlbGF0aXZlbHkgcG9zaXRpb25lZFxuICAgIGNvbnN0IGFsbG93ZWRQb3NpdGlvbnMgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJ107XG4gICAgY29uc3QgcGFyZW50RWxQb3NpdGlvbiA9IGNvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnRFbCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKGFsbG93ZWRQb3NpdGlvbnMuaW5kZXhPZihwYXJlbnRFbFBvc2l0aW9uKSA9PT0gLTEpIHtcbiAgICAgIC8vIGluaGVyaXQsIGluaXRpYWwsIHVuc2V0XG4gICAgICB0aGlzLnBhcmVudEVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmRpZmYgPSB7XG4gICAgICB0b3A6IHRoaXMuZWwub2Zmc2V0VG9wIC0gdGhpcy5wYXJlbnRFbC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiB0aGlzLmVsLm9mZnNldExlZnQgLSB0aGlzLnBhcmVudEVsLm9mZnNldExlZnQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLm9yaWdpbmFsID0ge1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IGVsUmVjdCxcbiAgICAgICAgcG9zaXRpb246IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJyksXG4gICAgICAgIGZsb2F0OiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdmbG9hdCcpLFxuICAgICAgICB0b3A6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3RvcCcpLFxuICAgICAgICBib3R0b206IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2JvdHRvbScpLFxuICAgICAgICB3aWR0aDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnKSxcbiAgICAgICAgLy8gbGVmdDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbGVmdCcpLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb2Zmc2V0VG9wOiB0aGlzLmVsLm9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0LFxuICAgICAgICBtYXJnaW5Ub3A6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpblRvcCcpLCAxMCksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luQm90dG9tJyksIDEwKSxcbiAgICAgICAgbWFyZ2luTGVmdDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICAgIG1hcmdpblJpZ2h0OiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5MZWZ0JyksIDEwKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBkZXRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGxldCBlbFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHBhcmVudFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3Q6IENsaWVudFJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBkeW5Qcm9wcztcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCByaWdodCA9IGJvZHlSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5yaWdodCArIHRoaXMub3JpZ2luYWwubWFyZ2luUmlnaHQ7XG4gICAgICBkeW5Qcm9wcyA9IHsgcmlnaHQ6IHJpZ2h0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCArIHRoaXMub3JpZ2luYWwubWFyZ2luTGVmdDtcbiAgICAgIGR5blByb3BzID0geyBsZWZ0OiBsZWZ0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncGFyZW50UmVjdC4uLi4uLi4uLi4uLi4uJywgcGFyZW50UmVjdC53aWR0aCk7XG4gICAgICBkeW5Qcm9wcyA9IHsgd2lkdGg6IHBhcmVudFJlY3Qud2lkdGggKyAncHgnIH07XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkeW5Qcm9wcycsIGR5blByb3BzKTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICtcbiAgICAgICAgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20gK1xuICAgICAgICB0aGlzLm9yaWdpbmFsLmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgK1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA+PVxuICAgICAgcGFyZW50UmVjdC5ib3R0b21cbiAgICApIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgcmVhY2hlZCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMSAoYWJzb2x1dGUpJywgcGFyZW50UmVjdC5ib3R0b20sIHRoaXMub3JpZ2luYWwubWFyZ2luQm90dG9tKTtcbiAgICAgIGNvbnN0IGZsb2F0QWRqdXN0bWVudCA9XG4gICAgICAgIHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdyaWdodCdcbiAgICAgICAgICA/IHsgcmlnaHQ6IDAgfVxuICAgICAgICAgIDogdGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnXG4gICAgICAgICAgPyB7IGxlZnQ6IDAgfVxuICAgICAgICAgIDoge307XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB0aGlzLmVsLnN0eWxlLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgICB0b3A6ICdpbmhlcml0JyxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzLFxuICAgICAgICBmbG9hdEFkanVzdG1lbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHBhcmVudFJlY3QudG9wICogLTEgKyB0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCArIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID5cbiAgICAgIHRoaXMub3JpZ2luYWwub2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBtaWRkbGUgb2YgY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDIgKGZpeGVkKScsIHBhcmVudFJlY3QudG9wICogLTEsIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wLCB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcCk7XG5cbiAgICAgIC8vIGlmIG5vdCBmbG9hdGluZywgYWRkIGFuIGVtcHR5IGZpbGxlciBlbGVtZW50LCBzaW5jZSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgYmVjYW1lcyAnZml4ZWQnXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ2xlZnQnICYmIHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdyaWdodCcgJiYgIXRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbGxlckVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5maWxsZXJFbCwgdGhpcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHRoaXMuZWwuc3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgLy8gZml4ZWQgaXMgYSBsb3Qgc21vb3RoZXIgdGhhbiBhYnNvbHV0ZVxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiB0aGlzLnN0aWNreU9mZnNldFRvcCArICdweCcsXG4gICAgICAgICAgYm90dG9tOiAnaW5oZXJpdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICovXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAzIChvcmlnaW5hbCknKTtcbiAgICAgIGlmICh0aGlzLmZpbGxlckVsKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWwucmVtb3ZlQ2hpbGQodGhpcy5maWxsZXJFbCk7IC8vIElFMTEgZG9lcyBub3Qgd29yayB3aXRoIGVsLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuZmlsbGVyRWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB0aGlzLmVsLnN0eWxlLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IHRoaXMub3JpZ2luYWwucG9zaXRpb24sXG4gICAgICAgICAgZmxvYXQ6IHRoaXMub3JpZ2luYWwuZmxvYXQsXG4gICAgICAgICAgdG9wOiB0aGlzLm9yaWdpbmFsLnRvcCxcbiAgICAgICAgICBib3R0b206IHRoaXMub3JpZ2luYWwuYm90dG9tLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLm9yaWdpbmFsLndpZHRoLFxuICAgICAgICAgIGxlZnQ6IHRoaXMub3JpZ2luYWwubGVmdCxcbiAgICAgICAgfSxcbiAgICAgICAgZHluUHJvcHNcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuIl19