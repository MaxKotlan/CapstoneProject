/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var MdbDateFormatDirective = /** @class */ (function () {
    function MdbDateFormatDirective() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbDateFormatDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentValue = event.target.value;
        /** @type {?} */
        var newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setSeparatorsNumber();
        this.setResultLength();
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setSeparatorsNumber = /**
     * @return {?}
     */
    function () {
        this.separatorsNumber = this.format.length - 1;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setResultLength = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var resLength = 0;
        this.format.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            resLength += value.length;
        }));
        this.resultLength = resLength + this.separatorsNumber;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        /** @type {?} */
        var dateParts = this.getDateParts(date);
        /** @type {?} */
        var result = dateParts.map((/**
         * @param {?} part
         * @param {?} index
         * @return {?}
         */
        function (part, index) {
            return part = _this.formatDateParts(part, index);
        }));
        return result.join(this.separator).slice(0, this.resultLength);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDateParts = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        var parts = [];
        /** @type {?} */
        var partsIndex = {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDigits = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    MdbDateFormatDirective.prototype.formatDateParts = /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    function (datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        var monthNum = parseInt(value, 10);
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
    };
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
    return MdbDateFormatDirective;
}());
export { MdbDateFormatDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUFPVyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFzR3pDLENBQUM7Ozs7O0lBbEdDLHdDQUFPOzs7O0lBRlAsVUFFUSxLQUFVOztZQUNWLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxvREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjs7WUFDTSxTQUFTLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUs7WUFDekIsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFNB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QUFDLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELGtEQUFpQjs7OztJQUFqQixVQUFrQixLQUFhOztZQUN2QixhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUM3QyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFFcEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLGFBQWEsR0FBRyxDQUFDLElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDNUMsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLFFBQVEsR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQzs7Z0JBN0dGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OzRCQUtFLEtBQUs7eUJBQ0wsS0FBSzswQkFFTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBbUduQyw2QkFBQztDQUFBLEFBOUdELElBOEdDO1NBM0dZLHNCQUFzQjs7O0lBQ2pDLDhDQUFxQjs7SUFDckIsa0RBQXlCOztJQUV6QiwyQ0FBeUI7O0lBQ3pCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEYXRlRm9ybWF0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkRhdGVGb3JtYXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICByZXN1bHRMZW5ndGg6IG51bWJlcjtcbiAgc2VwYXJhdG9yc051bWJlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNlcGFyYXRvciA9ICcvJztcbiAgQElucHV0KCkgZm9ybWF0ID0gWydkZCcsICdtbScsICd5eXl5J107XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShjdXJyZW50VmFsdWUpO1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTZXBhcmF0b3JzTnVtYmVyKCk7XG4gICAgdGhpcy5zZXRSZXN1bHRMZW5ndGgoKTtcbiAgfVxuXG4gIHNldFNlcGFyYXRvcnNOdW1iZXIoKSB7XG4gICAgdGhpcy5zZXBhcmF0b3JzTnVtYmVyID0gdGhpcy5mb3JtYXQubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHNldFJlc3VsdExlbmd0aCgpIHtcbiAgICBsZXQgcmVzTGVuZ3RoID0gMDtcbiAgICB0aGlzLmZvcm1hdC5mb3JFYWNoKCAodmFsdWUpID0+IHtcbiAgICAgIHJlc0xlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XG4gICAgfSk7XG4gICAgdGhpcy5yZXN1bHRMZW5ndGggPSByZXNMZW5ndGggKyB0aGlzLnNlcGFyYXRvcnNOdW1iZXI7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXRlKGRhdGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHRoaXMuZ2V0RGF0ZVBhcnRzKGRhdGUpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydCA9IHRoaXMuZm9ybWF0RGF0ZVBhcnRzKHBhcnQsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQuam9pbih0aGlzLnNlcGFyYXRvcikuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGgpO1xuICB9XG5cbiAgZ2V0RGF0ZVBhcnRzKGRhdGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBkYXRlID0gdGhpcy5nZXREaWdpdHMoZGF0ZSkuc2xpY2UoMCwgdGhpcy5yZXN1bHRMZW5ndGggLSB0aGlzLnNlcGFyYXRvcnNOdW1iZXIpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhcnRzSW5kZXggPSB7XG4gICAgICBmaXJzdDogdGhpcy5mb3JtYXRbMF0ubGVuZ3RoLFxuICAgICAgbWlkOiB0aGlzLmZvcm1hdFswXS5sZW5ndGggKyB0aGlzLmZvcm1hdFsxXS5sZW5ndGgsXG4gICAgICBsYXN0OiB0aGlzLnJlc3VsdExlbmd0aFxuICAgIH07XG5cbiAgICBwYXJ0c1swXSA9IGRhdGUuc2xpY2UoMCwgcGFydHNJbmRleC5maXJzdCk7XG5cbiAgICBpZiAoZGF0ZS5sZW5ndGggPiBwYXJ0c0luZGV4LmZpcnN0KSB7XG4gICAgICBwYXJ0c1sxXSA9IGRhdGUuc2xpY2UocGFydHNJbmRleC5maXJzdCwgcGFydHNJbmRleC5taWQpO1xuICAgIH1cblxuICAgIGlmIChkYXRlLmxlbmd0aCA+IHBhcnRzSW5kZXgubWlkKSB7XG4gICAgICBwYXJ0c1syXSA9IGRhdGUuc2xpY2UocGFydHNJbmRleC5taWQsIHBhcnRzSW5kZXgubGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgZ2V0RGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVQYXJ0cyhkYXRlUGFydDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3dpdGNoICh0aGlzLmZvcm1hdFtpbmRleF0pIHtcbiAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgZGF0ZVBhcnQgPSB0aGlzLmdldEZvcm1hdHRlZERheShkYXRlUGFydCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtbSc6XG4gICAgICAgIGRhdGVQYXJ0ID0gdGhpcy5nZXRGb3JtYXR0ZWRNb250aChkYXRlUGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlUGFydDtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERheSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF5Rmlyc3ROdW0gPSBwYXJzZUludCh2YWx1ZS5jaGFyQXQoMCksIDEwKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChkYXlGaXJzdE51bSA+IDMgJiYgZGF5Rmlyc3ROdW0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRNb250aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9udGhGaXJzdE51bSA9IHBhcnNlSW50KHZhbHVlLmNoYXJBdCgwKSwgMTApO1xuICAgIGNvbnN0IG1vbnRoTnVtID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKG1vbnRoRmlyc3ROdW0gPiAxICYmIG1vbnRoRmlyc3ROdW0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuICcwJyArIHZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobW9udGhOdW0gPiAxMikge1xuICAgICAgICByZXR1cm4gJzEyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==