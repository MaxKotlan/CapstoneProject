/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 02.09.16.
 */
var PageScrollUtilService = /** @class */ (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
  true the variable is undefined or null
     */
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    PageScrollUtilService.isUndefinedOrNull = /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollUtilService.extractElementPosition = /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (document, scrollTargetElement) {
        /** @type {?} */
        var body = document.body;
        /** @type {?} */
        var docEl = document.documentElement;
        // const windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
        /** @type {?} */
        var windowPageYOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageYOffset)) || undefined;
        // const windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;
        /** @type {?} */
        var windowPageXOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageXOffset)) || undefined;
        /** @type {?} */
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        var clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        var box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        var top = box.top + scrollTop - clientTop;
        /** @type {?} */
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());
export { PageScrollUtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBO0lBQUE7SUF1Q0EsQ0FBQztJQXJDQzs7OztPQUlHOzs7Ozs7O0lBQ1csdUNBQWlCOzs7Ozs7SUFBL0IsVUFBZ0MsUUFBYTtRQUMzQyxPQUFPLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVhLDRDQUFzQjs7Ozs7SUFBcEMsVUFBcUMsUUFBa0IsRUFBRSxtQkFBZ0M7O1lBRWpGLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTs7WUFDcEIsS0FBSyxHQUFRLFFBQVEsQ0FBQyxlQUFlOzs7WUFHckMsaUJBQWlCLEdBQWlCLFFBQVEsQ0FBQyxXQUFXLElBQUksbUJBQUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQU8sSUFBSSxTQUFTOzs7WUFFOUcsaUJBQWlCLEdBQWlCLFFBQVEsQ0FBQyxXQUFXLElBQUksbUJBQUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQU8sSUFBSSxTQUFTOztZQUU5RyxTQUFTLEdBQUcsaUJBQWlCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUzs7WUFDbEUsVUFBVSxHQUFHLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O1lBRXJFLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7WUFDbEQsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1FBRzNELElBQUkscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNoRSw4RkFBOEY7WUFDOUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1NBQzdDOztZQUNLLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTs7WUFFakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVM7O1lBQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVO1FBRS9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2ViYXN0aWFuZnVzcyBvbiAwMi4wOS4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbFV0aWxTZXJ2aWNlIHtcblxuICAvKipcbiAgICogVXRpbCBtZXRob2QgdG8gY2hlY2sgd2hldGhlciBhIGdpdmVuIHZhcmlhYmxlIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbFxuICAgKiBAcGFyYW0gdmFyaWFibGVcbnRydWUgdGhlIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzVW5kZWZpbmVkT3JOdWxsKHZhcmlhYmxlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YXJpYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IHZhcmlhYmxlID09PSB1bmRlZmluZWQgfHwgdmFyaWFibGUgPT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RFbGVtZW50UG9zaXRpb24oZG9jdW1lbnQ6IERvY3VtZW50LCBzY3JvbGxUYXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGRvY0VsOiBhbnkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAvLyBjb25zdCB3aW5kb3dQYWdlWU9mZnNldDogbnVtYmVyID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQgfHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHdpbmRvd1BhZ2VZT2Zmc2V0OiBudW1iZXIgfCBhbnkgPSBkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCBhcyBhbnkgfHwgdW5kZWZpbmVkO1xuICAgIC8vIGNvbnN0IHdpbmRvd1BhZ2VYT2Zmc2V0OiBudW1iZXIgPSBkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCB8fCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgd2luZG93UGFnZVhPZmZzZXQ6IG51bWJlciB8IGFueSA9IGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IGFzIGFueSB8fCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3dQYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvd1BhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cblxuICAgIGlmIChQYWdlU2Nyb2xsVXRpbFNlcnZpY2UuaXNVbmRlZmluZWRPck51bGwoc2Nyb2xsVGFyZ2V0RWxlbWVudCkpIHtcbiAgICAgIC8vIE5vIGVsZW1lbnQgZm91bmQsIHNvIHJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiB0byBub3QgY2F1c2UgYW55IGNoYW5nZSBpbiBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHJldHVybiB7IHRvcDogc2Nyb2xsVG9wLCBsZWZ0OiBzY3JvbGxMZWZ0IH07XG4gICAgfVxuICAgIGNvbnN0IGJveCA9IHNjcm9sbFRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0b3AgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgIGNvbnN0IGxlZnQgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgcmV0dXJuIHsgdG9wOiBNYXRoLnJvdW5kKHRvcCksIGxlZnQ6IE1hdGgucm91bmQobGVmdCkgfTtcbiAgfVxufVxuIl19