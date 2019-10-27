/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
if (false) {
    /**
     *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.containerClass;
    /** @type {?} */
    ModalOptions.prototype.animated;
    /** @type {?} */
    ModalOptions.prototype.scroll;
    /** @type {?} */
    ModalOptions.prototype.data;
}
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: Injectable }
    ];
    return MDBModalRef;
}());
export { MDBModalRef };
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
var ɵ0 = {};
/** @type {?} */
export var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: ɵ0
};
/** @type {?} */
export var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
export var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
export var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFnQ0MsQ0FBQzs7Z0JBaENELFVBQVU7O0lBZ0NWLG1CQUFDO0NBQUEsQUFoQ0YsSUFnQ0U7U0EvQlcsWUFBWTs7Ozs7O0lBS3ZCLGdDQUFvQzs7Ozs7SUFJbkMsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsc0NBQXdCOztJQUN4QixnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWM7O0FBR2hCO0lBQUE7SUFVQSxDQUFDO0lBSkE7O09BRUc7Ozs7O0lBQ0YsMEJBQUk7Ozs7SUFBSixjQUFjLENBQUM7O2dCQVRoQixVQUFVOztJQVVYLGtCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksV0FBVzs7Ozs7O0lBSXRCLDhCQUFxQjs7U0FpQmYsRUFBRTs7QUFWVixNQUFNLEtBQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLElBQUk7Q0FDVDs7QUFFRCxNQUFNLEtBQU8sU0FBUyxHQUFRO0lBQzVCLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBRSxNQUFNO0NBQ3JCOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQVE7SUFDM0IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLGFBQWEsRUFBRSxvREFBb0Q7Q0FDcEU7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFRO0lBQ3RDLEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLEdBQUc7Q0FDZDs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQUFHO0lBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7Q0FDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LCBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIC8vICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYycgfCBhbnk7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxuICAgKi9cbiAgIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXG4gICAqL1xuICAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgIGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xuICAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICAgc2Nyb2xsPzogYm9vbGVhbjtcbiAgIGRhdGE/OiBPYmplY3Q7XG4gfVxuXG4gQEluamVjdGFibGUoKVxuIGV4cG9ydCBjbGFzcyBNREJNb2RhbFJlZiB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gYSBjb21wb25lbnQgaW5zaWRlIHRoZSBtb2RhbC4gTnVsbCBpZiBtb2RhbCdzIGJlZW4gY3JlYXRlZCB3aXRoIFRlbXBsYXRlUmVmXG4gICAqL1xuICAgY29udGVudD86IGFueSB8IG51bGw7XG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgbW9kYWxcbiAgICovXG4gICBoaWRlKCk6IHZvaWQge31cbiB9XG5cbiBleHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICAgYmFja2Ryb3A6IHRydWUsXG4gICBrZXlib2FyZDogdHJ1ZSxcbiAgIGZvY3VzOiB0cnVlLFxuICAgc2hvdzogZmFsc2UsXG4gICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcbiAgIGNsYXNzOiAnJyxcbiAgIGNvbnRhaW5lckNsYXNzOiAnJyxcbiAgIGFuaW1hdGVkOiB0cnVlLFxuICAgc2Nyb2xsOiBmYWxzZSxcbiAgIGRhdGE6IHt9XG4gfTtcblxuIGV4cG9ydCBjb25zdCBDbGFzc05hbWU6IGFueSA9IHtcbiAgIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgT1BFTjogJ21vZGFsLW9wZW4nLFxuICAgRkFERTogJ2ZhZGUnLFxuICAgSU46ICdpbicsICAgICAvLyBiczNcbiAgIFNIT1c6ICdzaG93JyAgLy8gYnM0XG4gfTtcblxuIGV4cG9ydCBjb25zdCBTZWxlY3RvcjogYW55ID0ge1xuICAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXG4gfTtcblxuIGV4cG9ydCBjb25zdCBUcmFuc2l0aW9uRHVyYXRpb25zOiBhbnkgPSB7XG4gICBNT0RBTDogMzAwLFxuICAgQkFDS0RST1A6IDE1MFxuIH07XG5cbiBleHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TID0ge1xuICAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXG4gICBFU0M6ICdlc2MnXG4gfTtcbiJdfQ==