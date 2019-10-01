/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CONTAINER_QUERY, COMPLETE_CLASS_NAME, TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE, EMULATE_ELEMENT_NAME } from './preloader.constants';
var MDBSpinningPreloader = /** @class */ (function () {
    function MDBSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    MDBSpinningPreloader.errorHandler = /**
     * @return {?}
     */
    function () {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.start = /**
     * @return {?}
     */
    function () {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    };
    Object.defineProperty(MDBSpinningPreloader.prototype, "container", {
        get: /**
         * @return {?}
         */
        function () {
            return this._container;
        },
        set: /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (!element) {
                // NgSpinningPreloader.errorHandler();
            }
            this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
        },
        enumerable: true,
        configurable: true
    });
    MDBSpinningPreloader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBSpinningPreloader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return MDBSpinningPreloader;
}());
export { MDBSpinningPreloader };
if (false) {
    /** @type {?} */
    MDBSpinningPreloader.prototype._container;
    /** @type {?} */
    MDBSpinningPreloader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3ByZWxvYWRlci9wcmVsb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFFBQVEsRUFDVCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLDBDQUEwQyxFQUMxQyxvQkFBb0IsRUFDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUkvQjtJQVFFLDhCQUFxQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFOYSxpQ0FBWTs7O0lBQTFCO1FBQ0UsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFNTSxvQ0FBSzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRU0sbUNBQUk7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFXLDJDQUFTOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBcUIsT0FBTztZQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLHNDQUFzQzthQUN2QztZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakYsQ0FBQzs7O09BUkE7O2dCQXRCRixVQUFVOzs7O2dEQVFJLE1BQU0sU0FBQyxRQUFROztJQXdCOUIsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQS9CWSxvQkFBb0I7OztJQUMvQiwwQ0FBK0M7O0lBTW5DLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRE9DVU1FTlRcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgQ09OVEFJTkVSX1FVRVJZLFxuICBDT01QTEVURV9DTEFTU19OQU1FLFxuICBUWVBFX0VSUk9SX0NPTlRBSU5FUl9XQVNfTk9UX0ZPVU5EX01FU1NBR0UsXG4gIEVNVUxBVEVfRUxFTUVOVF9OQU1FXG59IGZyb20gJy4vcHJlbG9hZGVyLmNvbnN0YW50cyc7XG5cbmltcG9ydCB7TURCX1NQSU5OSU5HX1BSRUxPQURFUl9UWVBFfSBmcm9tICcuL3ByZWxvYWRlci50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNREJTcGlubmluZ1ByZWxvYWRlciB7XG4gIHB1YmxpYyBfY29udGFpbmVyOiBNREJfU1BJTk5JTkdfUFJFTE9BREVSX1RZUEU7XG5cbiAgcHVibGljIHN0YXRpYyBlcnJvckhhbmRsZXIoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihUWVBFX0VSUk9SX0NPTlRBSU5FUl9XQVNfTk9UX0ZPVU5EX01FU1NBR0UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHVibGljIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVJfUVVFUlkpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoQ09NUExFVEVfQ0xBU1NfTkFNRSk7XG4gIH1cblxuICBwdWJsaWMgc3RvcCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENPTVBMRVRFX0NMQVNTX05BTUUpO1xuICB9XG5cbiAgcHVibGljIGdldCBjb250YWluZXIoKTogTURCX1NQSU5OSU5HX1BSRUxPQURFUl9UWVBFIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb250YWluZXIoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgLy8gTmdTcGlubmluZ1ByZWxvYWRlci5lcnJvckhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBlbGVtZW50IHx8IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChFTVVMQVRFX0VMRU1FTlRfTkFNRSk7XG4gIH1cblxufVxuIl19