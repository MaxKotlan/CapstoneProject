/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
EasingLogic = /** @class */ (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
/**
 * @abstract
 */
export { EasingLogic };
if (false) {
    /**
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @abstract
     * @param {?} t current time
     * @param {?} b beginning value
     * @param {?} c change In value
     * @param {?} d duration
     * @return {?}
     */
    EasingLogic.prototype.ease = function (t, b, c, d) { };
}
// @dynamic
var PageScrollConfig = /** @class */ (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: 
        // Getter and setter to avoid auto completion to suggest calling the method
        /**
         * @return {?}
         */
        function () {
            return PageScrollConfig._easingLogic;
        },
        set: /**
         * @param {?} easingLogic
         * @return {?}
         */
        function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     */
    PageScrollConfig._interval = 10;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     */
    PageScrollConfig._minScrollDistance = 2;
    /**
     * Name of the default namespace.
     */
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     */
    PageScrollConfig.defaultIsVerticalScrolling = true;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     */
    PageScrollConfig._logLevel = 2;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: (/**
         * @param {?} t
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @return {?}
         */
        function (t, b, c, d) {
            // Linear easing
            return c * t / d + b;
        })
    };
    return PageScrollConfig;
}());
export { PageScrollConfig };
if (false) {
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {?}
     */
    PageScrollConfig._interval;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     * @type {?}
     */
    PageScrollConfig._minScrollDistance;
    /**
     * Name of the default namespace.
     * @type {?}
     */
    PageScrollConfig._defaultNamespace;
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     * @type {?}
     */
    PageScrollConfig.defaultIsVerticalScrolling;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     * @type {?}
     */
    PageScrollConfig._logLevel;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {?}
     */
    PageScrollConfig.defaultDuration;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {?}
     */
    PageScrollConfig.defaultScrollOffset;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     * @type {?}
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {?}
     */
    PageScrollConfig._interruptEvents;
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {?}
     */
    PageScrollConfig._interruptKeys;
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {?}
     */
    PageScrollConfig.defaultInterruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollConfig._easingLogic;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBQUE7SUFVQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7Ozs7Ozs7Ozs7Ozs7OztJQURDLHVEQUF5RTs7O0FBUTNFO0lBQUE7SUEwRkEsQ0FBQztJQVJDLHNCQUFrQixzQ0FBa0I7UUFEcEMsMkVBQTJFOzs7Ozs7UUFDM0U7WUFDRSxPQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDOzs7OztRQUVELFVBQXFDLFdBQXdCO1lBQzNELGdCQUFnQixDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDOUMsQ0FBQzs7O09BSkE7Ozs7O0lBOUVhLDBCQUFTLEdBQUcsRUFBRSxDQUFDOzs7Ozs7OztJQVNmLG1DQUFrQixHQUFHLENBQUMsQ0FBQzs7OztJQUt2QixrQ0FBaUIsR0FBRyxTQUFTLENBQUM7Ozs7O0lBTTlCLDJDQUEwQixHQUFHLElBQUksQ0FBQzs7Ozs7OztJQVFsQywwQkFBUyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFNZCxnQ0FBZSxHQUFHLElBQUksQ0FBQzs7Ozs7SUFNdkIsb0NBQW1CLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztJQVN4Qix1REFBc0MsR0FBRyxLQUFLLENBQUM7Ozs7SUFLL0MsaUNBQWdCLEdBQWEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7Ozs7O0lBTTFHLCtCQUFjLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7OztJQU1wRCxxQ0FBb0IsR0FBRyxJQUFJLENBQUM7SUFFM0IsNkJBQVksR0FBZ0I7UUFDekMsSUFBSTs7Ozs7OztRQUFFLFVBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztZQUMvQyxnQkFBZ0I7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFBO0tBQ0YsQ0FBQztJQVdKLHVCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0ExRlksZ0JBQWdCOzs7Ozs7O0lBTTNCLDJCQUE2Qjs7Ozs7Ozs7O0lBUzdCLG9DQUFxQzs7Ozs7SUFLckMsbUNBQTRDOzs7Ozs7SUFNNUMsNENBQWdEOzs7Ozs7OztJQVFoRCwyQkFBNEI7Ozs7OztJQU01QixpQ0FBcUM7Ozs7OztJQU1yQyxxQ0FBc0M7Ozs7Ozs7OztJQVN0Qyx3REFBNkQ7Ozs7O0lBSzdELGtDQUF3SDs7Ozs7O0lBTXhILGdDQUFrRTs7Ozs7O0lBTWxFLHNDQUEwQzs7Ozs7SUFFMUMsOEJBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRWFzaW5nTG9naWMge1xuICAvKipcbiAgKiBFeGFtcGxlcyBtYXkgYmUgZm91bmQgYXQgaHR0cHM6Ly9naXRodWIuY29tL2dkc21pdGgvanF1ZXJ5LmVhc2luZy9ibG9iL21hc3Rlci9qcXVlcnkuZWFzaW5nLmpzXG4gICogb3IgaHR0cDovL2dpem1hLmNvbS9lYXNpbmcvXG4gICogQHBhcmFtIHQgY3VycmVudCB0aW1lXG4gICogQHBhcmFtIGIgYmVnaW5uaW5nIHZhbHVlXG4gICogQHBhcmFtIGMgY2hhbmdlIEluIHZhbHVlXG4gICogQHBhcmFtIGQgZHVyYXRpb25cbiAgKi9cbiAgcHVibGljIGFic3RyYWN0IGVhc2UodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgUGFnZVNjcm9sbFRhcmdldCA9IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBhZ2VTY3JvbGxpbmdWaWV3cyA9IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQgfCBIVE1MQm9keUVsZW1lbnQgfCBOb2RlO1xuLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsQ29uZmlnIHtcblxuICAvKipcbiAgKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IHRpbGwgdXBkYXRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiBhZ2Fpbi5cbiAgKiBTbWFsbCBhbW91bnRzIG1heSBwcm9kdWNlIHNtb290aGVyIGFuaW1hdGlvbnMgYnV0IHJlcXVpcmUgbW9yZSBwcm9jZXNzaW5nIHBvd2VyLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9pbnRlcnZhbCA9IDEwO1xuXG4gIC8qKlxuICAqIFRoZSBhbW91bnQgb2YgcGl4ZWxzIHRoYXQgbmVlZCB0byBiZSBiZXR3ZWVuIHRoZSBjdXJyZW50IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHBvc2l0aW9uXG4gICogYW5kIHRoZSB0YXJnZXQgcG9zaXRpb24gdGhlIGNhdXNlIGEgc2Nyb2xsIGFuaW1hdGlvbi4gSW4gY2FzZSBkaXN0YW5jZSBpcyBiZWxvd1xuICAqIHRoaXMgdGhyZXNob2xkLCBhbiBpbW1lZGlhdGUganVtcCB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgKiBEdWUgdG8gZHBpIG9yIHJvdW5kaW5nIGlycmVndWxhcml0aWVzIGluIGJyb3dzZXJzIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgZm9yIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlc1xuICAqIGFyZSBwb3NzaWJsZSwgbWFraW5nIGEgPT09IGNvbXBhcmlzb24gb2YgY3VycmVudCBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBhbmQgdGFyZ2V0IHNjcm9sbFBvc2l0aW9uIGVycm9yLXByb25lLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9taW5TY3JvbGxEaXN0YW5jZSA9IDI7XG5cbiAgLyoqXG4gICogTmFtZSBvZiB0aGUgZGVmYXVsdCBuYW1lc3BhY2UuXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX2RlZmF1bHROYW1lc3BhY2UgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICogV2hldGhlciBieSBkZWZhdWx0IHRoZSBzY3JvbGxpbmcgc2hvdWxkIGhhcHBlbiBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKGJ5IG1hbmlwdWxhdGluZyB0aGUgc2Nyb2xsVG9wIHByb3BlcnR5KVxuICAqICg9IHRydWU7IGRlZmF1bHQpIG9yIGluIGhvcml6b250YWwgZGlyZWN0aW9uIChieSBtYW5pcHVsYXRpbmcgdGhlIHNjcm9sbExlZnQgcHJvcGVydHkpICg9IGZhbHNlXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdElzVmVydGljYWxTY3JvbGxpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAqIEhvdyBtYW55IGNvbnNvbGUgbG9ncyBzaG91bGQgYmUgZW1pdHRlZC5cbiAgKiAwOiBOb25lXG4gICogMjogSWYgYW5pbWF0aW9uIGNvdWxkIG5vdCBiZSBzdGFydGVkIGR1ZSB0byBtaXNzaW5nIHRhcmdldCwgXCJhbHJlYWR5IGF0IGRlc3RpbmF0aW9uXCIgb3Igc2ltaWxhciByZWFzb25zXG4gICogNTogQWxsIHNjcm9sbCBwb3NpdGlvbiB2YWx1ZXMgdGhhdCBnZXQgc2V0XG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX2xvZ0xldmVsID0gMjtcblxuICAvKipcbiAgKiBUaGUgZHVyYXRpb24gaG93IGxvbmcgYSBzY3JvbGxUbyBhbmltYXRpb24gc2hvdWxkIGxhc3QgYnkgZGVmYXVsdC5cbiAgKiBNYXkgYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgcGFnZS1zY3JvbGwtZHVyYXRpb24gYXR0cmlidXRlIG9uIGEgc2luZ2xlIG5nMlBhZ2VTY3JvbGwgaW5zdGFuY2UuXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdER1cmF0aW9uID0gMTI1MDtcblxuICAvKipcbiAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGFib3ZlIHNjcm9sbCB0YXJnZXQgd2hlcmUgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RvcC4gU2V0dGluZyBhIHBvc2l0aXZlIG51bWJlciByZXN1bHRzIGluXG4gICogdGhlIHNjcm9sbCB0YXJnZXQgYmVpbmcgbW9yZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4sIG5lZ2F0aXZlIG51bWJlcnMgd2lsbCBwcm9kdWNlIHNjcm9sbGluZyBcInRvbyBmYXJcIlxuICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRTY3JvbGxPZmZzZXQgPSAwO1xuXG4gIC8qKlxuICAqIFdoZXRoZXIgYnkgZGVmYXVsdCBmb3IgaW5saW5lIHNjcm9sbCBhbmltYXRpb25zIHRoZSBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gc2hvdWxkIHRha2UgcGxhY2UgKHRydWUpIG9yXG4gICogbm90IChmYWxzZSkuIERlZmF1bHQgaXMgZmFsc2UuXG4gICogVGhlIGFkdmFuY2VkIG9mZnNldCBjYWxjdWxhdGlvbiB3aWxsIHRyYXZlcnNlIHRoZSBET00gdHJlZSB1cHdhcmRzLCBzdGFydGluZyBhdCB0aGUgc2Nyb2xsVGFyZ2V0LCB1bnRpbCBpdCBmaW5kc1xuICAqIHRoZSBzY3JvbGxpbmdWaWV3IGNvbnRhaW5lciBlbGVtZW50LiBBbG9uZyB0aGUgd2F5IHRoZSBvZmZzZXQgcG9zaXRpb25zIG9mIHRoZSByZWxhdGl2ZSBwb3NpdGlvbmVkXG4gICogKHBvc2l0aW9uOiByZWxhdGl2ZSkgZWxlbWVudHMgd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgZm9yIGNhbGN1bGF0aW5nIHRoZSB0YXJnZXQgZWxlbWVudHMgcG9zaXRpb24uXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gPSBmYWxzZTtcblxuICAvKipcbiAgKiBUaGUgZXZlbnRzIHRoYXQgYXJlIGxpc3RlbmVkIHRvIG9uIHRoZSBib2R5IHRvIGRlY2lkZSB3aGV0aGVyIGEgc2Nyb2xsIGFuaW1hdGlvbiBoYXMgYmVlbiBpbnRlcmZlcmVkL2ludGVycnVwdGVkIGJ5IHRoZSB1c2VyXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX2ludGVycnVwdEV2ZW50czogc3RyaW5nW10gPSBbJ21vdXNlZG93bicsICd3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICdtb3VzZXdoZWVsJywgJ2tleXVwJywgJ3RvdWNobW92ZSddO1xuXG4gIC8qKlxuICAqIFRoZSBrZXlzIHRoYXQgYXJlIGNvbnNpZGVyZWQgdG8gaW50ZXJydXB0IGEgc2Nyb2xsIGFuaW1hdGlvbiAobWFpbmx5IHRoZSBhcnJvdyBrZXlzKS4gQWxsIG90aGVyIGtleSBwcmVzc2VzIHdpbGwgbm90IHN0b3AgdGhlXG4gICogc2Nyb2xsIGFuaW1hdGlvbi5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfaW50ZXJydXB0S2V5czogbnVtYmVyW10gPSBbMzMsIDM0LCAzNSwgMzYsIDM4LCA0MF07XG5cbiAgLyoqXG4gICogV2hldGhlciBhIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGJlIGludGVycnVwdGlibGUgYnkgdXNlciBpbnRlcmFjdGlvbiAodHJ1ZSkgb3Igbm90IChmYWxzZSkuIElmIHRoZSB1c2VyIHBlcmZvcm1zIGFuXG4gICogaW50ZXJydXB0aW5nIGV2ZW50IHdoaWxlIGEgc2Nyb2xsIGFuaW1hdGlvbiB0YWtlcyBwbGFjZSwgdGhlIHNjcm9sbCBhbmltYXRpb24gc3RvcHMuXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEludGVycnVwdGlibGUgPSB0cnVlO1xuXG4gIHByaXZhdGUgc3RhdGljIF9lYXNpbmdMb2dpYzogRWFzaW5nTG9naWMgPSB7XG4gICAgZWFzZTogKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAvLyBMaW5lYXIgZWFzaW5nXG4gICAgICByZXR1cm4gYyAqIHQgLyBkICsgYjtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0dGVyIGFuZCBzZXR0ZXIgdG8gYXZvaWQgYXV0byBjb21wbGV0aW9uIHRvIHN1Z2dlc3QgY2FsbGluZyB0aGUgbWV0aG9kXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlZmF1bHRFYXNpbmdMb2dpYygpOiBFYXNpbmdMb2dpYyB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxDb25maWcuX2Vhc2luZ0xvZ2ljO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXQgZGVmYXVsdEVhc2luZ0xvZ2ljKGVhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYykge1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2Vhc2luZ0xvZ2ljID0gZWFzaW5nTG9naWM7XG4gIH1cblxufVxuIl19