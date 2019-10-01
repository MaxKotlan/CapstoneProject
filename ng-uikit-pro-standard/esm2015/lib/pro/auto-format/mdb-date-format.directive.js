/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class MdbDateFormatDirective {
    constructor() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const currentValue = event.target.value;
        /** @type {?} */
        const newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setSeparatorsNumber();
        this.setResultLength();
    }
    /**
     * @return {?}
     */
    setSeparatorsNumber() {
        this.separatorsNumber = this.format.length - 1;
    }
    /**
     * @return {?}
     */
    setResultLength() {
        /** @type {?} */
        let resLength = 0;
        this.format.forEach((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            resLength += value.length;
        }));
        this.resultLength = resLength + this.separatorsNumber;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFormattedDate(date) {
        /** @type {?} */
        const dateParts = this.getDateParts(date);
        /** @type {?} */
        const result = dateParts.map((/**
         * @param {?} part
         * @param {?} index
         * @return {?}
         */
        (part, index) => {
            return part = this.formatDateParts(part, index);
        }));
        return result.join(this.separator).slice(0, this.resultLength);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateParts(date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        const parts = [];
        /** @type {?} */
        const partsIndex = {
            first: this.format[0].length,
            mid: this.format[0].length + this.format[1].length,
            last: this.resultLength
        };
        parts[0] = date.slice(0, partsIndex.first);
        if (date.length > partsIndex.first) {
            parts[1] = date.slice(partsIndex.first, partsIndex.mid);
        }
        if (date.length > partsIndex.mid) {
            parts[2] = date.slice(partsIndex.mid, partsIndex.last);
        }
        return parts;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDigits(value) {
        return value.replace(/\D/g, '');
    }
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    formatDateParts(datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedDay(value) {
        /** @type {?} */
        const dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedMonth(value) {
        /** @type {?} */
        const monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        const monthNum = parseInt(value, 10);
        if (value) {
            if (monthFirstNum > 1 && monthFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else if (monthNum > 12) {
                return '12';
            }
            else {
                return value;
            }
        }
    }
}
MdbDateFormatDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDateFormat]',
            },] }
];
MdbDateFormatDirective.propDecorators = {
    separator: [{ type: Input }],
    format: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }, { type: HostListener, args: ['paste', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MdbDateFormatDirective.prototype.resultLength;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separatorsNumber;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separator;
    /** @type {?} */
    MdbDateFormatDirective.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFPVyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFzR3pDLENBQUM7Ozs7O0lBbEdDLE9BQU8sQ0FBQyxLQUFVOztjQUNWLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O2NBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGVBQWU7O1lBQ1QsU0FBUyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QixTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxH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Q0Y7SUFDSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7O2NBQ3ZCLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O2NBQzdDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUVwQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozt3QkFLRSxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBUGpDLDhDQUFxQjs7SUFDckIsa0RBQXlCOztJQUV6QiwyQ0FBeUI7O0lBQ3pCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEYXRlRm9ybWF0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkRhdGVGb3JtYXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICByZXN1bHRMZW5ndGg6IG51bWJlcjtcbiAgc2VwYXJhdG9yc051bWJlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNlcGFyYXRvciA9ICcvJztcbiAgQElucHV0KCkgZm9ybWF0ID0gWydkZCcsICdtbScsICd5eXl5J107XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShjdXJyZW50VmFsdWUpO1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTZXBhcmF0b3JzTnVtYmVyKCk7XG4gICAgdGhpcy5zZXRSZXN1bHRMZW5ndGgoKTtcbiAgfVxuXG4gIHNldFNlcGFyYXRvcnNOdW1iZXIoKSB7XG4gICAgdGhpcy5zZXBhcmF0b3JzTnVtYmVyID0gdGhpcy5mb3JtYXQubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHNldFJlc3VsdExlbmd0aCgpIHtcbiAgICBsZXQgcmVzTGVuZ3RoID0gMDtcbiAgICB0aGlzLmZvcm1hdC5mb3JFYWNoKCAodmFsdWUpID0+IHtcbiAgICAgIHJlc0xlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XG4gICAgfSk7XG4gICAgdGhpcy5yZXN1bHRMZW5ndGggPSByZXNMZW5ndGggKyB0aGlzLnNlcGFyYXRvcnNOdW1iZXI7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXRlKGRhdGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHRoaXMuZ2V0RGF0ZVBhcnRzKGRhdGUpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydCA9IHRoaXMuZm9ybWF0RGF0ZVBhcnRzKHBhcnQsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQuam9pbih0aGlzLnNlcGFyYXRvcikuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGgpO1xuICB9XG5cbiAgZ2V0RGF0ZVBhcnRzKGRhdGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBkYXRlID0gdGhpcy5nZXREaWdpdHMoZGF0ZSkuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGggLSB0aGlzLnNlcGFyYXRvcnNOdW1iZXIpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhcnRzSW5kZXggPSB7XG4gICAgICBmaXJzdDogdGhpcy5mb3JtYXRbMF0ubGVuZ3RoLFxuICAgICAgbWlkOiB0aGlzLmZvcm1hdFswXS5sZW5ndGggKyB0aGlzLmZvcm1hdFsxXS5sZW5ndGgsXG4gICAgICBsYXN0OiB0aGlzLnJlc3VsdExlbmd0aFxuICAgIH07XG5cbiAgICBwYXJ0c1swXSA9IGRhdGUuc2xpY2UoMCwgcGFydHNJbmRleC5maXJzdCk7XG5cbiAgICBpZiAoZGF0ZS5sZW5ndGggPiBwYXJ0c0luZGV4LmZpcnN0KSB7XG4gICAgICBwYXJ0c1sxXSA9IGRhdGUuc2xpY2UocGFydHNJbmRleC5maXJzdCwgcGFydHNJbmRleC5taWQpO1xuICAgIH1cblxuICAgIGlmIChkYXRlLmxlbmd0aCA+IHBhcnRzSW5kZXgubWlkKSB7XG4gICAgICBwYXJ0c1syXSA9IGRhdGUuc2xpY2UocGFydHNJbmRleC5taWQsIHBhcnRzSW5kZXgubGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgZ2V0RGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVQYXJ0cyhkYXRlUGFydDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3dpdGNoICh0aGlzLmZvcm1hdFtpbmRleF0pIHtcbiAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgZGF0ZVBhcnQgPSB0aGlzLmdldEZvcm1hdHRlZERheShkYXRlUGFydCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtbSc6XG4gICAgICAgIGRhdGVQYXJ0ID0gdGhpcy5nZXRGb3JtYXR0ZWRNb250aChkYXRlUGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlUGFydDtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERheSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF5Rmlyc3ROdW0gPSBwYXJzZUludCh2YWx1ZS5jaGFyQXQoMCksIDEwKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChkYXlGaXJzdE51bSA+IDMgJiYgZGF5Rmlyc3ROdW0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRNb250aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9udGhGaXJzdE51bSA9IHBhcnNlSW50KHZhbHVlLmNoYXJBdCgwKSwgMTApO1xuICAgIGNvbnN0IG1vbnRoTnVtID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKG1vbnRoRmlyc3ROdW0gPiAxICYmIG1vbnRoRmlyc3ROdW0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobW9udGhOdW0gPiAxMikge1xuICAgICAgICByZXR1cm4gJzEyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==