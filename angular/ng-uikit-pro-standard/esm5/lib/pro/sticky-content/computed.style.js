/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * returns coumputed style of given element
 * @param {?} element
 * @param {?} styleProp
 * @return {?}
 */
// export function computedStyle(element: string | HTMLElement, styleProp: string): string {
export function computedStyle(element, styleProp) {
    /** @type {?} */
    var el;
    el = (typeof element === 'string') ? ((/** @type {?} */ (document.querySelector((/** @type {?} */ (element)))))) : element;
    /** @type {?} */
    var value;
    /** @type {?} */
    var defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) {
            return letter.toUpperCase();
        }));
        value = el['currentStyle'][styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return ((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var oldLeft = el.style.left;
                /** @type {?} */
                var oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = val || 0;
                val = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return val;
            }))(value);
        }
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZWQuc3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0aWNreS1jb250ZW50L2NvbXB1dGVkLnN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0UsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUE2QixFQUFFLFNBQWlCOztRQUMxRSxFQUFPO0lBQ1gsRUFBRSxHQUFJLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQWEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxPQUFPLEVBQUEsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOztRQUVuRyxLQUFVOztRQUNSLFdBQVcsR0FBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsV0FBVztJQUVuRSxvQkFBb0I7SUFDcEIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBQy9DLHlDQUF5QztRQUN6Qyx3Q0FBd0M7UUFDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9ELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzRTtTQUFNLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSztRQUNwQyxzQ0FBc0M7UUFDdEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFFLFVBQVUsTUFBTTtZQUN2RCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsc0NBQXNDO1FBQ3RDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLE9BQU87Ozs7WUFBQyxVQUFTLEdBQVE7O29CQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJOztvQkFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2xFLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDekIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUNwQyxPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogcmV0dXJucyBjb3VtcHV0ZWQgc3R5bGUgb2YgZ2l2ZW4gZWxlbWVudFxuXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZFN0eWxlKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBzdHlsZVByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gIGV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZFN0eWxlKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBzdHlsZVByb3A6IHN0cmluZyk6IHN0cmluZyB8IGFueSB7XG4gIGxldCBlbDogYW55O1xuICBlbCA9ICAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSA/ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8c3RyaW5nPmVsZW1lbnQpKSA6IGVsZW1lbnQ7XG5cbiAgbGV0IHZhbHVlOiBhbnk7XG4gIGNvbnN0IGRlZmF1bHRWaWV3OiBhbnkgPSAoZWwub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkuZGVmYXVsdFZpZXc7XG5cbiAgLy8gVzNDIHN0YW5kYXJkIHdheTpcbiAgaWYgKGRlZmF1bHRWaWV3ICYmIGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAvLyBzYW5pdGl6ZSBwcm9wZXJ0eSBuYW1lIHRvIGNzcyBub3RhdGlvblxuICAgIC8vIChoeXBlbiBzZXBhcmF0ZWQgd29yZHMgZWcuIGZvbnQtU2l6ZSlcbiAgICBzdHlsZVByb3AgPSBzdHlsZVByb3AucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3ApO1xuICB9IGVsc2UgaWYgKGVsWydjdXJyZW50U3R5bGUnXSkgeyAvLyBJRVxuICAgIC8vIHNhbml0aXplIHByb3BlcnR5IG5hbWUgdG8gY2FtZWxDYXNlXG4gICAgc3R5bGVQcm9wID0gc3R5bGVQcm9wLnJlcGxhY2UoL1xcLShcXHcpL2csIGZ1bmN0aW9uKCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgICB2YWx1ZSA9IGVsWydjdXJyZW50U3R5bGUnXVtzdHlsZVByb3BdO1xuICAgIC8vIGNvbnZlcnQgb3RoZXIgdW5pdHMgdG8gcGl4ZWxzIG9uIElFXG4gICAgaWYgKC9eXFxkKyhlbXxwdHwlfGV4KT8kL2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24odmFsOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb2xkTGVmdCA9IGVsLnN0eWxlLmxlZnQsIG9sZFJzTGVmdCA9IGVsWydydW50aW1lU3R5bGUnXS5sZWZ0O1xuICAgICAgICBlbFsncnVudGltZVN0eWxlJ10ubGVmdCA9IGVsWydjdXJyZW50U3R5bGUnXS5sZWZ0O1xuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gdmFsIHx8IDA7XG4gICAgICAgIHZhbCA9IGVsLnN0eWxlWydwaXhlbExlZnQnXSArICdweCc7XG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBvbGRMZWZ0O1xuICAgICAgICBlbFsncnVudGltZVN0eWxlJ10ubGVmdCA9IG9sZFJzTGVmdDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0pKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=