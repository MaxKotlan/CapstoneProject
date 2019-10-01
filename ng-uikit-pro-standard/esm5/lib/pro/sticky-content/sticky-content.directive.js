/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var MdbStickyDirective = /** @class */ (function () {
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            var bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            var dynProps;
            if (_this.original.float === 'right') {
                /** @type {?} */
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                /** @type {?} */
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (_this.original.marginTop +
                _this.original.marginBottom +
                _this.original.boundingClientRect.height +
                _this.stickyOffsetTop >=
                parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                var floatAdjustment = _this.original.float === 'right'
                    ? { right: 0 }
                    : _this.original.float === 'left'
                        ? { left: 0 }
                        : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0,
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop >
                _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit',
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left,
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
    MdbStickyDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        var parentElPosition = computedStyle(this.parentEl, 'position');
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
            var elRect = this.el.getBoundingClientRect();
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
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = /**
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSticky]',
                },] }
    ];
    /** @nocollapse */
    MdbStickyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStickyDirective.propDecorators = {
        stickyAfter: [{ type: Input }],
        stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
    };
    return MdbStickyDirective;
}());
export { MdbStickyDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBb0JFLDRCQUFZLEVBQWMsRUFBdUIsVUFBa0I7UUFBbkUsaUJBSUM7O1FBakJELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUErRXBCLGtCQUFhOzs7UUFBRzs7O2dCQUVSLFVBQVUsR0FBZSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQ3RFLFFBQVEsR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFDOUQsUUFBUTtZQUVaLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFOztvQkFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7Z0JBQzNFLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUM7YUFDcEM7aUJBQU0sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7O29CQUNuQyxJ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OztnQkFSbUIsVUFBVTs2Q0EwQkMsTUFBTSxTQUFDLFdBQVc7Ozs4QkFoQjlDLEtBQUs7bUNBRUwsS0FBSyxTQUFDLGNBQWM7O0lBdUx2Qix5QkFBQztDQUFBLEFBN0xELElBNkxDO1NBMUxZLGtCQUFrQjs7O0lBQzdCLHlDQUE2Qjs7SUFFN0IsOENBQWdEOztJQUNoRCx1Q0FBa0I7O0lBR2xCLGdDQUFzQjs7SUFFdEIsc0NBQTRCOztJQUU1QixzQ0FBNEI7O0lBQzVCLDZDQUFvQjs7SUFFcEIsa0NBQVU7O0lBQ1Ysc0NBQWM7O0lBNEVkLDJDQThGRSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21wdXRlZFN0eWxlIH0gZnJvbSAnLi9jb21wdXRlZC5zdHlsZSc7XG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlN0aWNreV0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzdGlja3lBZnRlcjogc3RyaW5nOyAvLyBjc3Mgc2VsZWN0b3IgdG8gYmUgc3RpY2t5IGFmdGVyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdzdGlja3ktYWZ0ZXInKSBzdGlja3lBZnRlckFsaWFzOiBzdHJpbmc7IC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgLy8gICBlbDogSFRNTEVsZW1lbnQ7XG4gIGVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgLy8gICBwYXJlbnRFbDogSFRNTEVsZW1lbnQ7XG4gIHBhcmVudEVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgLy8gZmlsbGVyRWw6IEhUTUxFbGVtZW50O1xuICBmaWxsZXJFbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIHN0aWNreU9mZnNldFRvcCA9IDA7XG5cbiAgZGlmZjogYW55O1xuICBvcmlnaW5hbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5wYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWwuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gICAgaWYgKHRoaXMuc3RpY2t5QWZ0ZXIpIHtcbiAgICAgIGNvbnN0IGNldFN0aWNreUFmdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3RpY2t5QWZ0ZXIpO1xuICAgICAgaWYgKGNldFN0aWNreUFmdGVyRWwpIHtcbiAgICAgICAgdGhpcy5zdGlja3lPZmZzZXRUb3AgPSBjZXRTdGlja3lBZnRlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlckFsaWFzKSB7XG4gICAgICBjb25zdCBjZXRTdGlja3lBZnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0aWNreUFmdGVyQWxpYXMpO1xuICAgICAgaWYgKGNldFN0aWNreUFmdGVyRWwpIHtcbiAgICAgICAgdGhpcy5zdGlja3lPZmZzZXRUb3AgPSBjZXRTdGlja3lBZnRlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHBhcmVudCByZWxhdGl2ZWx5IHBvc2l0aW9uZWRcbiAgICBjb25zdCBhbGxvd2VkUG9zaXRpb25zID0gWydhYnNvbHV0ZScsICdmaXhlZCcsICdyZWxhdGl2ZSddO1xuICAgIGNvbnN0IHBhcmVudEVsUG9zaXRpb24gPSBjb21wdXRlZFN0eWxlKHRoaXMucGFyZW50RWwsICdwb3NpdGlvbicpO1xuICAgIGlmIChhbGxvd2VkUG9zaXRpb25zLmluZGV4T2YocGFyZW50RWxQb3NpdGlvbikgPT09IC0xKSB7XG4gICAgICAvLyBpbmhlcml0LCBpbml0aWFsLCB1bnNldFxuICAgICAgdGhpcy5wYXJlbnRFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5kaWZmID0ge1xuICAgICAgdG9wOiB0aGlzLmVsLm9mZnNldFRvcCAtIHRoaXMucGFyZW50RWwub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0IC0gdGhpcy5wYXJlbnRFbC5vZmZzZXRMZWZ0LFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5vcmlnaW5hbCA9IHtcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiBlbFJlY3QsXG4gICAgICAgIHBvc2l0aW9uOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpLFxuICAgICAgICBmbG9hdDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnZmxvYXQnKSxcbiAgICAgICAgdG9wOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd0b3AnKSxcbiAgICAgICAgYm90dG9tOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdib3R0b20nKSxcbiAgICAgICAgd2lkdGg6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3dpZHRoJyksXG4gICAgICAgIC8vIGxlZnQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2xlZnQnKSxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG9mZnNldFRvcDogdGhpcy5lbC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgbWFyZ2luVG9wOiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5Ub3AnKSwgMTApLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkJvdHRvbScpLCAxMCksXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkxlZnQnKSwgMTApLFxuICAgICAgICBtYXJnaW5SaWdodDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgYXR0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgZGV0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBsZXQgZWxSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0OiBDbGllbnRSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgZHluUHJvcHM7XG5cbiAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgcmlnaHQgPSBib2R5UmVjdC5yaWdodCAtIHBhcmVudFJlY3QucmlnaHQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpblJpZ2h0O1xuICAgICAgZHluUHJvcHMgPSB7IHJpZ2h0OiByaWdodCArICdweCcgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0Jykge1xuICAgICAgY29uc3QgbGVmdCA9IHBhcmVudFJlY3QubGVmdCAtIGJvZHlSZWN0LmxlZnQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpbkxlZnQ7XG4gICAgICBkeW5Qcm9wcyA9IHsgbGVmdDogbGVmdCArICdweCcgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudFJlY3QuLi4uLi4uLi4uLi4uLicsIHBhcmVudFJlY3Qud2lkdGgpO1xuICAgICAgZHluUHJvcHMgPSB7IHdpZHRoOiBwYXJlbnRSZWN0LndpZHRoICsgJ3B4JyB9O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnZHluUHJvcHMnLCBkeW5Qcm9wcyk7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCArXG4gICAgICAgIHRoaXMub3JpZ2luYWwubWFyZ2luQm90dG9tICtcbiAgICAgICAgdGhpcy5vcmlnaW5hbC5ib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0ICtcbiAgICAgICAgdGhpcy5zdGlja3lPZmZzZXRUb3AgPj1cbiAgICAgIHBhcmVudFJlY3QuYm90dG9tXG4gICAgKSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IHJlYWNoZWQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDEgKGFic29sdXRlKScsIHBhcmVudFJlY3QuYm90dG9tLCB0aGlzLm9yaWdpbmFsLm1hcmdpbkJvdHRvbSk7XG4gICAgICBjb25zdCBmbG9hdEFkanVzdG1lbnQgPVxuICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnXG4gICAgICAgICAgPyB7IHJpZ2h0OiAwIH1cbiAgICAgICAgICA6IHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0J1xuICAgICAgICAgID8geyBsZWZ0OiAwIH1cbiAgICAgICAgICA6IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiAnaW5oZXJpdCcsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wcyxcbiAgICAgICAgZmxvYXRBZGp1c3RtZW50XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJlbnRSZWN0LnRvcCAqIC0xICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+XG4gICAgICB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcFxuICAgICkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgbWlkZGxlIG9mIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAyIChmaXhlZCknLCBwYXJlbnRSZWN0LnRvcCAqIC0xLCB0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCwgdGhpcy5vcmlnaW5hbC5vZmZzZXRUb3ApO1xuXG4gICAgICAvLyBpZiBub3QgZmxvYXRpbmcsIGFkZCBhbiBlbXB0eSBmaWxsZXIgZWxlbWVudCwgc2luY2UgdGhlIG9yaWdpbmFsIGVsZW1lbnRzIGJlY2FtZXMgJ2ZpeGVkJ1xuICAgICAgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdsZWZ0JyAmJiB0aGlzLm9yaWdpbmFsLmZsb2F0ICE9PSAncmlnaHQnICYmICF0aGlzLmZpbGxlckVsKSB7XG4gICAgICAgIHRoaXMuZmlsbGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5maWxsZXJFbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMucGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRoaXMuZmlsbGVyRWwsIHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB0aGlzLmVsLnN0eWxlLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsIC8vIGZpeGVkIGlzIGEgbG90IHNtb290aGVyIHRoYW4gYWJzb2x1dGVcbiAgICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICAgIHRvcDogdGhpcy5zdGlja3lPZmZzZXRUb3AgKyAncHgnLFxuICAgICAgICAgIGJvdHRvbTogJ2luaGVyaXQnLFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMyAob3JpZ2luYWwpJyk7XG4gICAgICBpZiAodGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuZmlsbGVyRWwpOyAvLyBJRTExIGRvZXMgbm90IHdvcmsgd2l0aCBlbC5yZW1vdmUoKVxuICAgICAgICB0aGlzLmZpbGxlckVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9yaWdpbmFsLnBvc2l0aW9uLFxuICAgICAgICAgIGZsb2F0OiB0aGlzLm9yaWdpbmFsLmZsb2F0LFxuICAgICAgICAgIHRvcDogdGhpcy5vcmlnaW5hbC50b3AsXG4gICAgICAgICAgYm90dG9tOiB0aGlzLm9yaWdpbmFsLmJvdHRvbSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5vcmlnaW5hbC53aWR0aCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLm9yaWdpbmFsLmxlZnQsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==