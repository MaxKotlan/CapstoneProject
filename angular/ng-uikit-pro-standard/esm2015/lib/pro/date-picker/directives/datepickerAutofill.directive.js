/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
/** @enum {number} */
const KeyCode = {
    backspace: 8,
    delete: 46,
};
KeyCode[KeyCode.backspace] = 'backspace';
KeyCode[KeyCode.delete] = 'delete';
export class InputAutoFillDirective {
    /**
     * @param {?} el
     * @param {?} rndr
     */
    constructor(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onKeyUp(evt) {
        // tslint:disable-next-line: deprecation
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        /** @type {?} */
        const val = this.getInputValue();
        /** @type {?} */
        const ews = this.endsWith(val, this.opts.separator);
        /** @type {?} */
        const parts = val.split(this.opts.separator);
        /** @type {?} */
        const idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) &&
            (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            ((Number(parts[idx]) > 3 && this.isDay(idx)) || (Number(parts[idx]) > 1 && this.isMonth(idx)))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    }
    /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    endsWith(val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    }
    /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    insertPos(str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getPartLength(idx) {
        return this.opts.formatParts[idx].length;
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    isNumber(val) {
        return val.match(/[1-9]/) !== null;
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    isDay(idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    isMonth(idx) {
        return (this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2);
    }
    /**
     * @private
     * @return {?}
     */
    getInputValue() {
        return this.el.nativeElement.value;
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    setInputValue(val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    }
}
InputAutoFillDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputAutoFill]',
            },] }
];
/** @nocollapse */
InputAutoFillDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
InputAutoFillDirective.propDecorators = {
    opts: [{ type: Input }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    InputAutoFillDirective.prototype.opts;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.rndr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyQXV0b2ZpbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBSXBGLFlBQWE7SUFDYixVQUFXOzs7O0FBTWIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFHakMsWUFBb0IsRUFBYyxFQUFVLElBQWU7UUFBdkMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVc7SUFBRyxDQUFDOzs7OztJQUU1QixPQUFPLENBQUMsR0FBa0I7UUFDM0Qsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzdGLE9BQU87U0FDUjs7Y0FFSyxHQUFHLEdBQVcsSUFBSSxDQUFDLGFBQWEsRUFBRTs7Y0FDbEMsR0FBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztjQUN0RCxLQUFLLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O2NBQ3JELEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFFcEMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJ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Ozs7Ozs7SUFFTyxLQUFLLENBQUMsR0FBVztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsR0FBVztRQUN6QixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQzFGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEdBQVc7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQVZtQixVQUFVO1lBQUUsU0FBUzs7O21CQVl0QyxLQUFLO3NCQUlMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKakMsc0NBQWdDOzs7OztJQUVwQixvQ0FBc0I7Ozs7O0lBQUUsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU15SW5wdXRBdXRvRmlsbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5wdXRBdXRvZmlsbC5pbnRlcmZhY2UnO1xyXG5cclxuZW51bSBLZXlDb2RlIHtcclxuICBiYWNrc3BhY2UgPSA4LFxyXG4gIGRlbGV0ZSA9IDQ2LFxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttZGJJbnB1dEF1dG9GaWxsXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEF1dG9GaWxsRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBvcHRzOiBJTXlJbnB1dEF1dG9GaWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJuZHI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwKGV2dDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxyXG4gICAgaWYgKCF0aGlzLm9wdHMuZW5hYmxlZCB8fCBldnQua2V5Q29kZSA9PT0gS2V5Q29kZS5iYWNrc3BhY2UgfHwgZXZ0LmtleUNvZGUgPT09IEtleUNvZGUuZGVsZXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWw6IHN0cmluZyA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgpO1xyXG4gICAgY29uc3QgZXdzOiBib29sZWFuID0gdGhpcy5lbmRzV2l0aCh2YWwsIHRoaXMub3B0cy5zZXBhcmF0b3IpO1xyXG4gICAgY29uc3QgcGFydHM6IEFycmF5PHN0cmluZz4gPSB2YWwuc3BsaXQodGhpcy5vcHRzLnNlcGFyYXRvcik7XHJcbiAgICBjb25zdCBpZHg6IG51bWJlciA9IHBhcnRzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgaWYgKHZhbC5pbmRleE9mKHRoaXMub3B0cy5zZXBhcmF0b3IgKyB0aGlzLm9wdHMuc2VwYXJhdG9yKSAhPT0gLTEgfHwgaWR4ID4gMikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhZXdzICYmXHJcbiAgICAgICh2YWwubGVuZ3RoID09PSB0aGlzLmdldFBhcnRMZW5ndGgoMCkgfHxcclxuICAgICAgICB2YWwubGVuZ3RoID09PSB0aGlzLmdldFBhcnRMZW5ndGgoMCkgKyB0aGlzLmdldFBhcnRMZW5ndGgoMSkgKyB0aGlzLm9wdHMuc2VwYXJhdG9yLmxlbmd0aClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUodmFsICsgdGhpcy5vcHRzLnNlcGFyYXRvcik7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBld3MgJiZcclxuICAgICAgcGFydHNbaWR4IC0gMV0ubGVuZ3RoIDwgdGhpcy5nZXRQYXJ0TGVuZ3RoKGlkeCAtIDEpICYmXHJcbiAgICAgIHRoaXMuaXNOdW1iZXIocGFydHNbaWR4IC0gMV0pICYmXHJcbiAgICAgICh0aGlzLmlzRGF5KGlkeCAtIDEpIHx8IHRoaXMuaXNNb250aChpZHggLSAxKSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy5pbnNlcnRQb3ModmFsLCB2YWwubGVuZ3RoIC0gMiwgJzAnKSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBwYXJ0c1tpZHhdLmxlbmd0aCA8IHRoaXMuZ2V0UGFydExlbmd0aChpZHgpICYmXHJcbiAgICAgIHRoaXMuaXNOdW1iZXIocGFydHNbaWR4XSkgJiZcclxuICAgICAgKChOdW1iZXIocGFydHNbaWR4XSkgPiAzICYmIHRoaXMuaXNEYXkoaWR4KSkgfHwgKE51bWJlcihwYXJ0c1tpZHhdKSA+IDEgJiYgdGhpcy5pc01vbnRoKGlkeCkpKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShcclxuICAgICAgICB0aGlzLmluc2VydFBvcyh2YWwsIHZhbC5sZW5ndGggLSAxLCAnMCcpICsgKGlkeCA8IDIgPyB0aGlzLm9wdHMuc2VwYXJhdG9yIDogJycpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuZHNXaXRoKHZhbDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbC5pbmRleE9mKHN1ZmZpeCwgdmFsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zZXJ0UG9zKHN0cjogc3RyaW5nLCBpZHg6IG51bWJlciwgdmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaWR4KSArIHZhbCArIHN0ci5zdWJzdHIoaWR4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFydExlbmd0aChpZHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc051bWJlcih2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbC5tYXRjaCgvWzEtOV0vKSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXkoaWR4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wdHMuZm9ybWF0UGFydHNbaWR4XS5pbmRleE9mKCdkJykgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc01vbnRoKGlkeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm9wdHMuZm9ybWF0UGFydHNbaWR4XS5pbmRleE9mKCdtJykgIT09IC0xICYmIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmxlbmd0aCA9PT0gMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5wdXRWYWx1ZSh2YWw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5ybmRyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsKTtcclxuICB9XHJcbn1cclxuIl19