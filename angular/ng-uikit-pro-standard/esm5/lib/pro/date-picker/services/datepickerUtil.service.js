/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/** @type {?} */
var M = 'm';
/* const MM = 'mm'; */
/* const MMM = 'mmm'; */
/** @type {?} */
var D = 'd';
/* const DD = 'dd'; */
/* const YYYY = 'yyyy'; */
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
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
    UtilService.prototype.isDateValid = /**
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
    function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        /** @type {?} */
        var returnDate = { day: 0, month: 0, year: 0 };
        /** @type {?} */
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /* const isMonthStr: boolean = dateFormat.indexOf(MMM) !== -1; */
        if (monthLabels === undefined) {
        }
        /** @type {?} */
        var delimeters = this.getDateFormatDelimeters(dateFormat);
        /** @type {?} */
        var dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        var year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        var month = this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        var day = this.getNumberByValue(dateValue[2]);
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            var date = { year: year, month: month, day: day };
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
    };
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    UtilService.prototype.getDateValue = /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    function (dateStr, dateFormat, delimeters) {
        /** @type {?} */
        var del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        var re = new RegExp('[' + del + ']');
        /** @type {?} */
        var ds = dateStr.split(re);
        /** @type {?} */
        var df = dateFormat.split(re);
        /** @type {?} */
        var da = [];
        for (var i = 0; i < df.length; i++) {
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
    };
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.getMonthNumberByMonthName = /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    function (df, monthLabels) {
        if (df.value) {
            for (var key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    };
    /**
     * @param {?} df
     * @return {?}
     */
    UtilService.prototype.getNumberByValue = /**
     * @param {?} df
     * @return {?}
     */
    function (df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        var nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatSeparator = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatDelimeters = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    };
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.isMonthLabelValid = /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    UtilService.prototype.isYearLabelValid = /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.parseDatePartNumber = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, dateString, datePart) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            /** @type {?} */
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.parseDatePartMonthName = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    function (dateFormat, dateString, datePart, monthLabels) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.getDatePartIndex = /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    // parseDefaultMonth(monthString: string): IMyMonth {
    // parseDefaultMonth(monthString: string): IMyMonth {
    /**
     * @param {?} monthString
     * @return {?}
     */
    UtilService.prototype.parseDefaultMonth = 
    // parseDefaultMonth(monthString: string): IMyMonth {
    /**
     * @param {?} monthString
     * @return {?}
     */
    function (monthString) {
        /** @type {?} */
        var month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            /** @type {?} */
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    };
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
    UtilService.prototype.isDisabledDay = /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    function (date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var enableDays_1 = tslib_1.__values(enableDays), enableDays_1_1 = enableDays_1.next(); !enableDays_1_1.done; enableDays_1_1 = enableDays_1.next()) {
                var e = enableDays_1_1.value;
                if (typeof e === 'number') {
                    if (e === this.getDayNumber(date)) {
                        return false;
                    }
                }
                else if (e.year === date.year && e.month === date.month && e.day === date.day) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (enableDays_1_1 && !enableDays_1_1.done && (_a = enableDays_1.return)) _a.call(enableDays_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            /** @type {?} */
            var dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        try {
            for (var disableDays_1 = tslib_1.__values(disableDays), disableDays_1_1 = disableDays_1.next(); !disableDays_1_1.done; disableDays_1_1 = disableDays_1.next()) {
                var d = disableDays_1_1.value;
                if (typeof d === 'number') {
                    if (this.getDayNumber(date) === d) {
                        return true;
                    }
                }
                else if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (disableDays_1_1 && !disableDays_1_1.done && (_b = disableDays_1.return)) _b.call(disableDays_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var disableDateRanges_1 = tslib_1.__values(disableDateRanges), disableDateRanges_1_1 = disableDateRanges_1.next(); !disableDateRanges_1_1.done; disableDateRanges_1_1 = disableDateRanges_1.next()) {
                var d = disableDateRanges_1_1.value;
                if (this.isInitializedDate(d.begin) &&
                    this.isInitializedDate(d.end) &&
                    dateMs >= this.getTimeInMilliseconds(d.begin) &&
                    dateMs <= this.getTimeInMilliseconds(d.end)) {
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (disableDateRanges_1_1 && !disableDateRanges_1_1.done && (_c = disableDateRanges_1.return)) _c.call(disableDateRanges_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    UtilService.prototype.isMarkedDate = /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    function (date, markedDates, markWeekends) {
        var e_4, _a, e_5, _b;
        try {
            for (var markedDates_1 = tslib_1.__values(markedDates), markedDates_1_1 = markedDates_1.next(); !markedDates_1_1.done; markedDates_1_1 = markedDates_1.next()) {
                var md = markedDates_1_1.value;
                try {
                    for (var _c = tslib_1.__values(md.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var d = _d.value;
                        if (d.year === date.year && d.month === date.month && d.day === date.day) {
                            return { marked: true, color: md.color };
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (markedDates_1_1 && !markedDates_1_1.done && (_a = markedDates_1.return)) _a.call(markedDates_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getWeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableUntil = /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableSince = /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isInitializedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDayNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());
export { UtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlclV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvc2VydmljZXMvZGF0ZXBpY2tlclV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBU3JDLENBQUMsR0FBRyxHQUFHOzs7O0lBR1AsQ0FBQyxHQUFHLEdBQUc7OztBQUtiO0lBQUE7SUFtUUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBalFDLGlDQUFXOzs7Ozs7Ozs7Ozs7OztJQUFYLFVBQVksT0FBZSxFQUN6QixVQUFrQixFQUNsQixPQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQXFCLEVBQ3JCLFlBQXFCLEVBQ3JCLGVBQXdCLEVBQ3hCLFdBQW9DLEVBQ3BDLGlCQUFzQyxFQUN0QyxXQUEyQixFQUMzQixVQUFtQzs7WUFFN0IsVUFBVSxHQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7O1lBQ25ELFdBQVcsR0FBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuRixpRUFBaUU7UUFDakUsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1NBQzlCOztZQUVLLFVBQVUsR0FBa0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQzs7WUFFcEUsU0FBUyxHQUF5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOztZQUNwRixJQUFJLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNB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QW1RQztTQWxRWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTXlEYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kYXRlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeURhdGVSYW5nZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGF0ZVJhbmdlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1vbnRoIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb250aC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJTXlNb250aExhYmVscyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9udGhMYWJlbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21hcmtlZERhdGVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElNeU1hcmtlZERhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21hcmtlZERhdGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSU15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbXktZGF0ZS1mb3JtYXQuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IE0gPSAnbSc7XHJcbi8qIGNvbnN0IE1NID0gJ21tJzsgKi9cclxuLyogY29uc3QgTU1NID0gJ21tbSc7ICovXHJcbmNvbnN0IEQgPSAnZCc7XHJcbi8qIGNvbnN0IEREID0gJ2RkJzsgKi9cclxuXHJcbi8qIGNvbnN0IFlZWVkgPSAneXl5eSc7ICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcbiAgaXNEYXRlVmFsaWQoZGF0ZVN0cjogc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogc3RyaW5nLFxyXG4gICAgbWluWWVhcjogbnVtYmVyLFxyXG4gICAgbWF4WWVhcjogbnVtYmVyLFxyXG4gICAgZGlzYWJsZVVudGlsOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLFxyXG4gICAgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sXHJcbiAgICBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMsXHJcbiAgICBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlIHwgbnVtYmVyPixcclxuICApOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IHJldHVybkRhdGU6IElNeURhdGUgPSB7IGRheTogMCwgbW9udGg6IDAsIHllYXI6IDAgfTtcclxuICAgIGNvbnN0IGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG4gICAgLyogY29uc3QgaXNNb250aFN0cjogYm9vbGVhbiA9IGRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMTsgKi9cclxuICAgIGlmIChtb250aExhYmVscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZVZhbHVlOiBBcnJheTxJTXlEYXRlRm9ybWF0PiA9IHRoaXMuZ2V0RGF0ZVZhbHVlKGRhdGVTdHIsIGRhdGVGb3JtYXQsIGRlbGltZXRlcnMpO1xyXG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVswXSk7XHJcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XHJcbiAgICBjb25zdCBkYXk6IG51bWJlciA9IHRoaXMuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMl0pO1xyXG5cclxuICAgIGlmIChkYXkgIT09IC0xICYmIG1vbnRoICE9PSAtMSAmJiB5ZWFyICE9PSAtMSkge1xyXG4gICAgICBpZiAoeWVhciA8IG1pblllYXIgfHwgeWVhciA+IG1heFllYXIgfHwgbW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBkYXk6IGRheSB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZERheShkYXRlLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgZGlzYWJsZVdlZWtlbmRzLCBkaXNhYmxlRGF5cywgZGlzYWJsZURhdGVSYW5nZXMsIGVuYWJsZURheXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgMTAwICE9PSAwICYmIHllYXIgJSA0ID09PSAwKSkge1xyXG4gICAgICAgIGRheXNJbk1vbnRoWzFdID0gMjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IGRheXNJbk1vbnRoW21vbnRoIC0gMV0pIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVmFsaWQgZGF0ZVxyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZVZhbHVlKGRhdGVTdHI6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nLCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8SU15RGF0ZUZvcm1hdD4ge1xyXG4gICAgbGV0IGRlbDogc3RyaW5nID0gZGVsaW1ldGVyc1swXTtcclxuICAgIGlmIChkZWxpbWV0ZXJzWzBdICE9PSBkZWxpbWV0ZXJzWzFdKSB7XHJcbiAgICAgIGRlbCA9IGRlbGltZXRlcnNbMF0gKyBkZWxpbWV0ZXJzWzFdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmU6IGFueSA9IG5ldyBSZWdFeHAoJ1snICsgZGVsICsgJ10nKTtcclxuICAgIGNvbnN0IGRzOiBBcnJheTxzdHJpbmc+ID0gZGF0ZVN0ci5zcGxpdChyZSk7XHJcbiAgICBjb25zdCBkZjogQXJyYXk8c3RyaW5nPiA9IGRhdGVGb3JtYXQuc3BsaXQocmUpO1xyXG4gICAgY29uc3QgZGE6IEFycmF5PElNeURhdGVGb3JtYXQ+ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZigneXknKSAhPT0gLTEpIHtcclxuICAgICAgICBkYVswXSA9IHsgdmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoTSkgIT09IC0xKSB7XHJcbiAgICAgICAgZGFbMV0gPSB7IHZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZltpXS5pbmRleE9mKEQpICE9PSAtMSkge1xyXG4gICAgICAgIGRhWzJdID0geyB2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV0gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShkZjogSU15RGF0ZUZvcm1hdCwgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgIGlmIChkZi52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBrZXkgPSAxOyBrZXkgPD0gMTI7IGtleSsrKSB7XHJcbiAgICAgICAgaWYgKGRmLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGdldE51bWJlckJ5VmFsdWUoZGY6IElNeURhdGVGb3JtYXQpOiBudW1iZXIge1xyXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGRmLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5icjogbnVtYmVyID0gTnVtYmVyKGRmLnZhbHVlKTtcclxuICAgIGlmIChkZi5mb3JtYXQubGVuZ3RoID09PSAxICYmIGRmLnZhbHVlLmxlbmd0aCAhPT0gMSAmJiBuYnIgPCAxMCB8fCBkZi5mb3JtYXQubGVuZ3RoID09PSAxICYmIGRmLnZhbHVlLmxlbmd0aCAhPT0gMiAmJiBuYnIgPj0gMTApIHtcclxuICAgICAgbmJyID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGRmLmZvcm1hdC5sZW5ndGggPT09IDIgJiYgZGYudmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICBuYnIgPSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBuYnI7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlRm9ybWF0U2VwYXJhdG9yKGRhdGVGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdC5yZXBsYWNlKC9bZG15XS9nLCAnJylbMF07XHJcbiAgfVxyXG5cclxuICBnZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkYXRlRm9ybWF0OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHwgYW55IHtcclxuICAgIHJldHVybiBkYXRlRm9ybWF0Lm1hdGNoKC9bXihkbXkpXXsxLH0vZyk7XHJcbiAgfVxyXG5cclxuICBpc01vbnRoTGFiZWxWYWxpZChtb250aExhYmVsOiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XHJcbiAgICBmb3IgKGxldCBrZXkgPSAxOyBrZXkgPD0gMTI7IGtleSsrKSB7XHJcbiAgICAgIGlmIChtb250aExhYmVsLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGlzWWVhckxhYmVsVmFsaWQoeWVhckxhYmVsOiBudW1iZXIsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh5ZWFyTGFiZWwgPj0gbWluWWVhciAmJiB5ZWFyTGFiZWwgPD0gbWF4WWVhcikge1xyXG4gICAgICByZXR1cm4geWVhckxhYmVsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVTdHJpbmc6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBwb3M6IG51bWJlciA9IHRoaXMuZ2V0RGF0ZVBhcnRJbmRleChkYXRlRm9ybWF0LCBkYXRlUGFydCk7XHJcbiAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcocG9zLCBwb3MgKyBkYXRlUGFydC5sZW5ndGgpO1xyXG4gICAgICBpZiAoIS9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcG9zOiBudW1iZXIgPSB0aGlzLmdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdCwgZGF0ZVBhcnQpO1xyXG4gICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNNb250aExhYmVsVmFsaWQoZGF0ZVN0cmluZy5zdWJzdHJpbmcocG9zLCBwb3MgKyBkYXRlUGFydC5sZW5ndGgpLCBtb250aExhYmVscyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICB9XHJcblxyXG4gIC8vIHBhcnNlRGVmYXVsdE1vbnRoKG1vbnRoU3RyaW5nOiBzdHJpbmcpOiBJTXlNb250aCB7XHJcbiAgcGFyc2VEZWZhdWx0TW9udGgobW9udGhTdHJpbmc6IHN0cmluZyB8IGFueSk6IElNeU1vbnRoIHtcclxuICAgIGNvbnN0IG1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gICAgaWYgKG1vbnRoU3RyaW5nICE9PSAnJykge1xyXG4gICAgICBjb25zdCBzcGxpdCA9IG1vbnRoU3RyaW5nLnNwbGl0KG1vbnRoU3RyaW5nLm1hdGNoKC9bXjAtOV0vKVswXSk7XHJcbiAgICAgIG1vbnRoLm1vbnRoTmJyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMF0sIDApIDogcGFyc2VJbnQoc3BsaXRbMV0sIDApO1xyXG4gICAgICBtb250aC55ZWFyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMV0sIDApIDogcGFyc2VJbnQoc3BsaXRbMF0sIDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbnRoO1xyXG4gIH1cclxuXHJcbiAgaXNEaXNhYmxlZERheShkYXRlOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVVudGlsOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLFxyXG4gICAgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGUgfCBudW1iZXI+LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sXHJcbiAgICBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlIHwgbnVtYmVyPixcclxuICApOiBib29sZWFuIHtcclxuICAgIGZvciAoY29uc3QgZSBvZiBlbmFibGVEYXlzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBpZiAoZSA9PT0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZS55ZWFyID09PSBkYXRlLnllYXIgJiYgZS5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBlLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlTXM6IG51bWJlciA9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpO1xyXG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJiBkYXRlTXMgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlU2luY2UpICYmIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNhYmxlV2Vla2VuZHMpIHtcclxuICAgICAgY29uc3QgZG4gPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgaWYgKGRuID09PSAwIHx8IGRuID09PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGlzYWJsZURheXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldERheU51bWJlcihkYXRlKSA9PT0gZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGlzYWJsZURhdGVSYW5nZXMpIHtcclxuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5iZWdpbikgJiZcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSAmJlxyXG4gICAgICAgIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmJlZ2luKSAmJlxyXG4gICAgICAgIGRhdGVNcyA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmVuZClcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzTWFya2VkRGF0ZShkYXRlOiBJTXlEYXRlLCBtYXJrZWREYXRlczogQXJyYXk8SU15TWFya2VkRGF0ZXM+LCBtYXJrV2Vla2VuZHM6IElNeU1hcmtlZERhdGUpOiBJTXlNYXJrZWREYXRlIHtcclxuICAgIGZvciAoY29uc3QgbWQgb2YgbWFya2VkRGF0ZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBkIG9mIG1kLmRhdGVzKSB7XHJcbiAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICByZXR1cm4geyBtYXJrZWQ6IHRydWUsIGNvbG9yOiBtZC5jb2xvciB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1hcmtXZWVrZW5kcyAmJiBtYXJrV2Vla2VuZHMubWFya2VkKSB7XHJcbiAgICAgIGNvbnN0IGRheU5iciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xyXG4gICAgICAgIHJldHVybiB7IG1hcmtlZDogdHJ1ZSwgY29sb3I6IG1hcmtXZWVrZW5kcy5jb2xvciB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtYXJrZWQ6IGZhbHNlLCBjb2xvcjogJycgfTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoKGQuZ2V0VGltZSgpIC0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCAwLCA0KS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxO1xyXG4gIH1cclxuXHJcbiAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVVudGlsOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCk7XHJcbiAgfVxyXG5cclxuICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKTtcclxuICB9XHJcblxyXG4gIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRlLnllYXIgIT09IDAgJiYgZGF0ZS5tb250aCAhPT0gMCAmJiBkYXRlLmRheSAhPT0gMDtcclxuICB9XHJcblxyXG4gIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5TnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgIHJldHVybiBkLmdldERheSgpO1xyXG4gIH1cclxufVxyXG4iXX0=