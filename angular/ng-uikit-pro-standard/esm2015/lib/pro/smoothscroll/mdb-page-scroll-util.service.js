/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 02.09.16.
 */
export class PageScrollUtilService {
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    static isUndefinedOrNull(variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    }
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    static extractElementPosition(document, scrollTargetElement) {
        /** @type {?} */
        const body = document.body;
        /** @type {?} */
        const docEl = document.documentElement;
        // const windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
        /** @type {?} */
        const windowPageYOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageYOffset)) || undefined;
        // const windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;
        /** @type {?} */
        const windowPageXOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageXOffset)) || undefined;
        /** @type {?} */
        const scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        const scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        const clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        const box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        const top = box.top + scrollTop - clientTop;
        /** @type {?} */
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFPekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQWE7UUFDM0MsT0FBTyxDQUFDLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsUUFBa0IsRUFBRSxtQkFBZ0M7O2NBRWpGLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTs7Y0FDcEIsS0FBSyxHQUFRLFFBQVEsQ0FBQyxlQUFlOzs7Y0FHckMsaUJBQWlCLEdBQWlCLFFBQVEsQ0FBQyxXQUFXLElBQUksbUJBQUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQU8sSUFBSSxTQUFTOzs7Y0FFOUcsaUJBQWlCLEdBQWlCLFFBQVEsQ0FBQyxXQUFXLElBQUksbUJBQUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQU8sSUFBSSxTQUFTOztjQUU5RyxTQUFTLEdBQUcsaUJBQWlCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUzs7Y0FDbEUsVUFBVSxHQUFHLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O2NBRXJFLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDbEQsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1FBRzNELElBQUkscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNoRSw4RkFBOEY7WUFDOUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1NBQzdDOztjQUNLLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTs7Y0FFakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVM7O2NBQ3JDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVO1FBRS9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDAyLjA5LjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsVXRpbFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBVdGlsIG1ldGhvZCB0byBjaGVjayB3aGV0aGVyIGEgZ2l2ZW4gdmFyaWFibGUgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsXG4gICAqIEBwYXJhbSB2YXJpYWJsZVxudHJ1ZSB0aGUgdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNVbmRlZmluZWRPck51bGwodmFyaWFibGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodHlwZW9mIHZhcmlhYmxlID09PSAndW5kZWZpbmVkJykgfHwgdmFyaWFibGUgPT09IHVuZGVmaW5lZCB8fCB2YXJpYWJsZSA9PT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEVsZW1lbnRQb3NpdGlvbihkb2N1bWVudDogRG9jdW1lbnQsIHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIC8vIGNvbnN0IHdpbmRvd1BhZ2VZT2Zmc2V0OiBudW1iZXIgPSBkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCB8fCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgd2luZG93UGFnZVlPZmZzZXQ6IG51bWJlciB8IGFueSA9IGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0IGFzIGFueSB8fCB1bmRlZmluZWQ7XG4gICAgLy8gY29uc3Qgd2luZG93UGFnZVhPZmZzZXQ6IG51bWJlciA9IGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IHx8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB3aW5kb3dQYWdlWE9mZnNldDogbnVtYmVyIHwgYW55ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgYXMgYW55IHx8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvd1BhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93UGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuXG4gICAgaWYgKFBhZ2VTY3JvbGxVdGlsU2VydmljZS5pc1VuZGVmaW5lZE9yTnVsbChzY3JvbGxUYXJnZXRFbGVtZW50KSkge1xuICAgICAgLy8gTm8gZWxlbWVudCBmb3VuZCwgc28gcmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIG5vdCBjYXVzZSBhbnkgY2hhbmdlIGluIHNjcm9sbCBwb3NpdGlvblxuICAgICAgcmV0dXJuIHsgdG9wOiBzY3JvbGxUb3AsIGxlZnQ6IHNjcm9sbExlZnQgfTtcbiAgICB9XG4gICAgY29uc3QgYm94ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRvcCA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgY29uc3QgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XG5cbiAgICByZXR1cm4geyB0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KSB9O1xuICB9XG59XG4iXX0=