/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/** @type {?} */
const M = 'm';
/* const MM = 'mm'; */
/* const MMM = 'mmm'; */
/** @type {?} */
const D = 'd';
/* const DD = 'dd'; */
/* const YYYY = 'yyyy'; */
export class UtilService {
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} minYear
     * @param {?} maxYear
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} monthLabels
     * @param {?} enableDays
     * @return {?}
     */
    isDateValid(dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        /** @type {?} */
        const returnDate = { day: 0, month: 0, year: 0 };
        /** @type {?} */
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /* const isMonthStr: boolean = dateFormat.indexOf(MMM) !== -1; */
        if (monthLabels === undefined) {
        }
        /** @type {?} */
        const delimeters = this.getDateFormatDelimeters(dateFormat);
        /** @type {?} */
        const dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        const year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        const month = this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        const day = this.getNumberByValue(dateValue[2]);
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            const date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    }
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    getDateValue(dateStr, dateFormat, delimeters) {
        /** @type {?} */
        let del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        const re = new RegExp('[' + del + ']');
        /** @type {?} */
        const ds = dateStr.split(re);
        /** @type {?} */
        const df = dateFormat.split(re);
        /** @type {?} */
        const da = [];
        for (let i = 0; i < df.length; i++) {
            if (df[i].indexOf('yy') !== -1) {
                da[0] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(M) !== -1) {
                da[1] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(D) !== -1) {
                da[2] = { value: ds[i], format: df[i] };
            }
        }
        return da;
    }
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    getMonthNumberByMonthName(df, monthLabels) {
        if (df.value) {
            for (let key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    }
    /**
     * @param {?} df
     * @return {?}
     */
    getNumberByValue(df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        let nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getDateFormatSeparator(dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getDateFormatDelimeters(dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    }
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    isMonthLabelValid(monthLabel, monthLabels) {
        for (let key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    }
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    isYearLabelValid(yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    parseDatePartNumber(dateFormat, dateString, datePart) {
        /** @type {?} */
        const pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            /** @type {?} */
            const value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    parseDatePartMonthName(dateFormat, dateString, datePart, monthLabels) {
        /** @type {?} */
        const pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    getDatePartIndex(dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    }
    // parseDefaultMonth(monthString: string): IMyMonth {
    /**
     * @param {?} monthString
     * @return {?}
     */
    parseDefaultMonth(monthString) {
        /** @type {?} */
        const month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            /** @type {?} */
            const split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        for (const e of enableDays) {
            if (typeof e === 'number') {
                if (e === this.getDayNumber(date)) {
                    return false;
                }
            }
            else if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        /** @type {?} */
        const dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            /** @type {?} */
            const dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        for (const d of disableDays) {
            if (typeof d === 'number') {
                if (this.getDayNumber(date) === d) {
                    return true;
                }
            }
            else if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (const d of disableDateRanges) {
            if (this.isInitializedDate(d.begin) &&
                this.isInitializedDate(d.end) &&
                dateMs >= this.getTimeInMilliseconds(d.begin) &&
                dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    isMarkedDate(date, markedDates, markWeekends) {
        for (const md of markedDates) {
            for (const d of md.dates) {
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    isMonthDisabledByDisableUntil(date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    }
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    isMonthDisabledByDisableSince(date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInitializedDate(date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    }
}
UtilService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlclV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvc2VydmljZXMvZGF0ZXBpY2tlclV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFTckMsQ0FBQyxHQUFHLEdBQUc7Ozs7TUFHUCxDQUFDLEdBQUcsR0FBRzs7O0FBTWIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztJQUN0QixXQUFXLENBQUMsT0FBZSxFQUN6QixVQUFrQixFQUNsQixPQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQXFCLEVBQ3JCLFlBQXFCLEVBQ3JCLGVBQXdCLEVBQ3hCLFdBQW9DLEVBQ3BDLGlCQUFzQyxFQUN0QyxXQUEyQixFQUMzQixVQUFtQzs7Y0FFN0IsVUFBVSxHQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7O2NBQ25ELFdBQVcsR0FBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuRixpRUFBaUU7UUFDakUsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1NBQzlCOztjQUVLLFVBQVUsR0FBa0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQzs7Y0FFcEUsU0FBUyxHQUF5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOztjQUNwRixJQUFJLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FB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UUFDakMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYTs7Y0FDbEIsQ0FBQyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBbFFGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElNeURhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RhdGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15RGF0ZVJhbmdlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kYXRlUmFuZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TW9udGggfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vbnRoLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1vbnRoTGFiZWxzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb250aExhYmVscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWFya2VkRGF0ZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWFya2VkRGF0ZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9teS1kYXRlLWZvcm1hdC5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgTSA9ICdtJztcclxuLyogY29uc3QgTU0gPSAnbW0nOyAqL1xyXG4vKiBjb25zdCBNTU0gPSAnbW1tJzsgKi9cclxuY29uc3QgRCA9ICdkJztcclxuLyogY29uc3QgREQgPSAnZGQnOyAqL1xyXG5cclxuLyogY29uc3QgWVlZWSA9ICd5eXl5JzsgKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuICBpc0RhdGVWYWxpZChkYXRlU3RyOiBzdHJpbmcsXHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcsXHJcbiAgICBtaW5ZZWFyOiBudW1iZXIsXHJcbiAgICBtYXhZZWFyOiBudW1iZXIsXHJcbiAgICBkaXNhYmxlVW50aWw6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlU2luY2U6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sXHJcbiAgICBkaXNhYmxlRGF5czogQXJyYXk8SU15RGF0ZSB8IG51bWJlcj4sXHJcbiAgICBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPixcclxuICAgIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyxcclxuICAgIGVuYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+LFxyXG4gICk6IElNeURhdGUge1xyXG4gICAgY29uc3QgcmV0dXJuRGF0ZTogSU15RGF0ZSA9IHsgZGF5OiAwLCBtb250aDogMCwgeWVhcjogMCB9O1xyXG4gICAgY29uc3QgZGF5c0luTW9udGg6IEFycmF5PG51bWJlcj4gPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcbiAgICAvKiBjb25zdCBpc01vbnRoU3RyOiBib29sZWFuID0gZGF0ZUZvcm1hdC5pbmRleE9mKE1NTSkgIT09IC0xOyAqL1xyXG4gICAgaWYgKG1vbnRoTGFiZWxzID09PSB1bmRlZmluZWQpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5nZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkYXRlRm9ybWF0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlVmFsdWU6IEFycmF5PElNeURhdGVGb3JtYXQ+ID0gdGhpcy5nZXREYXRlVmFsdWUoZGF0ZVN0ciwgZGF0ZUZvcm1hdCwgZGVsaW1ldGVycyk7XHJcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzBdKTtcclxuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzFdKTtcclxuICAgIGNvbnN0IGRheTogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XHJcblxyXG4gICAgaWYgKGRheSAhPT0gLTEgJiYgbW9udGggIT09IC0xICYmIHllYXIgIT09IC0xKSB7XHJcbiAgICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhciB8fCBtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIGRheTogZGF5IH07XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF5KGRhdGUsIGRpc2FibGVVbnRpbCwgZGlzYWJsZVNpbmNlLCBkaXNhYmxlV2Vla2VuZHMsIGRpc2FibGVEYXlzLCBkaXNhYmxlRGF0ZVJhbmdlcywgZW5hYmxlRGF5cykpIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSAxMDAgIT09IDAgJiYgeWVhciAlIDQgPT09IDApKSB7XHJcbiAgICAgICAgZGF5c0luTW9udGhbMV0gPSAyOTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gZGF5c0luTW9udGhbbW9udGggLSAxXSkge1xyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBWYWxpZCBkYXRlXHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlVmFsdWUoZGF0ZVN0cjogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcsIGRlbGltZXRlcnM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxJTXlEYXRlRm9ybWF0PiB7XHJcbiAgICBsZXQgZGVsOiBzdHJpbmcgPSBkZWxpbWV0ZXJzWzBdO1xyXG4gICAgaWYgKGRlbGltZXRlcnNbMF0gIT09IGRlbGltZXRlcnNbMV0pIHtcclxuICAgICAgZGVsID0gZGVsaW1ldGVyc1swXSArIGRlbGltZXRlcnNbMV07XHJcbiAgICB9XHJcbiAgICBjb25zdCByZTogYW55ID0gbmV3IFJlZ0V4cCgnWycgKyBkZWwgKyAnXScpO1xyXG4gICAgY29uc3QgZHM6IEFycmF5PHN0cmluZz4gPSBkYXRlU3RyLnNwbGl0KHJlKTtcclxuICAgIGNvbnN0IGRmOiBBcnJheTxzdHJpbmc+ID0gZGF0ZUZvcm1hdC5zcGxpdChyZSk7XHJcbiAgICBjb25zdCBkYTogQXJyYXk8SU15RGF0ZUZvcm1hdD4gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRmLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkZltpXS5pbmRleE9mKCd5eScpICE9PSAtMSkge1xyXG4gICAgICAgIGRhWzBdID0geyB2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV0gfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZihNKSAhPT0gLTEpIHtcclxuICAgICAgICBkYVsxXSA9IHsgdmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoRCkgIT09IC0xKSB7XHJcbiAgICAgICAgZGFbMl0gPSB7IHZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGE7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aE51bWJlckJ5TW9udGhOYW1lKGRmOiBJTXlEYXRlRm9ybWF0LCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgaWYgKGRmLnZhbHVlKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcclxuICAgICAgICBpZiAoZGYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gbW9udGhMYWJlbHNba2V5XS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtYmVyQnlWYWx1ZShkZjogSU15RGF0ZUZvcm1hdCk6IG51bWJlciB7XHJcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZGYudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmJyOiBudW1iZXIgPSBOdW1iZXIoZGYudmFsdWUpO1xyXG4gICAgaWYgKGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAxICYmIG5iciA8IDEwIHx8IGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAyICYmIG5iciA+PSAxMCkge1xyXG4gICAgICBuYnIgPSAtMTtcclxuICAgIH0gZWxzZSBpZiAoZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMiAmJiBkZi52YWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgIG5iciA9IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5icjtcclxuICB9XHJcblxyXG4gIGdldERhdGVGb3JtYXRTZXBhcmF0b3IoZGF0ZUZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlRm9ybWF0LnJlcGxhY2UoL1tkbXldL2csICcnKVswXTtcclxuICB9XHJcblxyXG4gIGdldERhdGVGb3JtYXREZWxpbWV0ZXJzKGRhdGVGb3JtYXQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4gfCBhbnkge1xyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXQubWF0Y2goL1teKGRteSldezEsfS9nKTtcclxuICB9XHJcblxyXG4gIGlzTW9udGhMYWJlbFZhbGlkKG1vbnRoTGFiZWw6IHN0cmluZywgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcclxuICAgICAgaWYgKG1vbnRoTGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gbW9udGhMYWJlbHNba2V5XS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgaXNZZWFyTGFiZWxWYWxpZCh5ZWFyTGFiZWw6IG51bWJlciwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHllYXJMYWJlbCA+PSBtaW5ZZWFyICYmIHllYXJMYWJlbCA8PSBtYXhZZWFyKSB7XHJcbiAgICAgIHJldHVybiB5ZWFyTGFiZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcclxuICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhwb3MsIHBvcyArIGRhdGVQYXJ0Lmxlbmd0aCk7XHJcbiAgICAgIGlmICghL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBwb3M6IG51bWJlciA9IHRoaXMuZ2V0RGF0ZVBhcnRJbmRleChkYXRlRm9ybWF0LCBkYXRlUGFydCk7XHJcbiAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc01vbnRoTGFiZWxWYWxpZChkYXRlU3RyaW5nLnN1YnN0cmluZyhwb3MsIHBvcyArIGRhdGVQYXJ0Lmxlbmd0aCksIG1vbnRoTGFiZWxzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRlRm9ybWF0LmluZGV4T2YoZGF0ZVBhcnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gcGFyc2VEZWZhdWx0TW9udGgobW9udGhTdHJpbmc6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICBwYXJzZURlZmF1bHRNb250aChtb250aFN0cmluZzogc3RyaW5nIHwgYW55KTogSU15TW9udGgge1xyXG4gICAgY29uc3QgbW9udGg6IElNeU1vbnRoID0geyBtb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwIH07XHJcbiAgICBpZiAobW9udGhTdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0ID0gbW9udGhTdHJpbmcuc3BsaXQobW9udGhTdHJpbmcubWF0Y2goL1teMC05XS8pWzBdKTtcclxuICAgICAgbW9udGgubW9udGhOYnIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFswXSwgMCkgOiBwYXJzZUludChzcGxpdFsxXSwgMCk7XHJcbiAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMCkgOiBwYXJzZUludChzcGxpdFswXSwgMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9udGg7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVkRGF5KGRhdGU6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlVW50aWw6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlU2luY2U6IElNeURhdGUsXHJcbiAgICBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sXHJcbiAgICBkaXNhYmxlRGF5czogQXJyYXk8SU15RGF0ZSB8IG51bWJlcj4sXHJcbiAgICBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPixcclxuICAgIGVuYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+LFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChjb25zdCBlIG9mIGVuYWJsZURheXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGlmIChlID09PSB0aGlzLmdldERheU51bWJlcihkYXRlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChlLnllYXIgPT09IGRhdGUueWVhciAmJiBlLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGUuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XHJcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIGRhdGVNcyA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlVW50aWwpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiYgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVTaW5jZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc2FibGVXZWVrZW5kcykge1xyXG4gICAgICBjb25zdCBkbiA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICBpZiAoZG4gPT09IDAgfHwgZG4gPT09IDYpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF5cykge1xyXG4gICAgICBpZiAodHlwZW9mIGQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpID09PSBkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF0ZVJhbmdlcykge1xyXG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJlxyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5lbmQpICYmXHJcbiAgICAgICAgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuYmVnaW4pICYmXHJcbiAgICAgICAgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNNYXJrZWREYXRlKGRhdGU6IElNeURhdGUsIG1hcmtlZERhdGVzOiBBcnJheTxJTXlNYXJrZWREYXRlcz4sIG1hcmtXZWVrZW5kczogSU15TWFya2VkRGF0ZSk6IElNeU1hcmtlZERhdGUge1xyXG4gICAgZm9yIChjb25zdCBtZCBvZiBtYXJrZWREYXRlcykge1xyXG4gICAgICBmb3IgKGNvbnN0IGQgb2YgbWQuZGF0ZXMpIHtcclxuICAgICAgICBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgIHJldHVybiB7IG1hcmtlZDogdHJ1ZSwgY29sb3I6IG1kLmNvbG9yIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWFya1dlZWtlbmRzICYmIG1hcmtXZWVrZW5kcy5tYXJrZWQpIHtcclxuICAgICAgY29uc3QgZGF5TmJyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XHJcbiAgICAgIGlmIChkYXlOYnIgPT09IDAgfHwgZGF5TmJyID09PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbWFya2VkOiB0cnVlLCBjb2xvcjogbWFya1dlZWtlbmRzLmNvbG9yIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IG1hcmtlZDogZmFsc2UsIGNvbG9yOiAnJyB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla051bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoZC5nZXREYXkoKSA9PT0gMCA/IC0zIDogNCAtIGQuZ2V0RGF5KCkpKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKCgoZC5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIDAsIDQpLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgLyA3KSArIDE7XHJcbiAgfVxyXG5cclxuICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlOiBJTXlEYXRlLCBkaXNhYmxlVW50aWw6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKTtcclxuICB9XHJcblxyXG4gIGlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKGRhdGU6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpO1xyXG4gIH1cclxuXHJcbiAgaXNJbml0aWFsaXplZERhdGUoZGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGUueWVhciAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUuZGF5ICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgcmV0dXJuIGQuZ2V0RGF5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==