/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class EasingLogic {
}
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
export class PageScrollConfig {
    // Getter and setter to avoid auto completion to suggest calling the method
    /**
     * @return {?}
     */
    static get defaultEasingLogic() {
        return PageScrollConfig._easingLogic;
    }
    /**
     * @param {?} easingLogic
     * @return {?}
     */
    static set defaultEasingLogic(easingLogic) {
        PageScrollConfig._easingLogic = easingLogic;
    }
}
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
    (t, b, c, d) => {
        // Linear easing
        return c * t / d + b;
    })
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBZ0IsV0FBVztDQVVoQzs7Ozs7Ozs7Ozs7O0lBREMsdURBQXlFOzs7QUFRM0UsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFrRnBCLE1BQU0sS0FBSyxrQkFBa0I7UUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxNQUFNLEtBQUssa0JBQWtCLENBQUMsV0FBd0I7UUFDM0QsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7QUFsRmEsMEJBQVMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O0FBU2YsbUNBQWtCLEdBQUcsQ0FBQyxDQUFDOzs7O0FBS3ZCLGtDQUFpQixHQUFHLFNBQVMsQ0FBQzs7Ozs7QUFNOUIsMkNBQTBCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O0FBUWxDLDBCQUFTLEdBQUcsQ0FBQyxDQUFDOzs7OztBQU1kLGdDQUFlLEdBQUcsSUFBSSxDQUFDOzs7OztBQU12QixvQ0FBbUIsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBU3hCLHVEQUFzQyxHQUFHLEtBQUssQ0FBQzs7OztBQUsvQyxpQ0FBZ0IsR0FBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzs7Ozs7QUFNMUcsK0JBQWMsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7O0FBTXBELHFDQUFvQixHQUFHLElBQUksQ0FBQztBQUUzQiw2QkFBWSxHQUFnQjtJQUN6QyxJQUFJOzs7Ozs7O0lBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQVUsRUFBRTtRQUMzRCxnQkFBZ0I7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFBO0NBQ0YsQ0FBQzs7Ozs7OztJQXpFRiwyQkFBNkI7Ozs7Ozs7OztJQVM3QixvQ0FBcUM7Ozs7O0lBS3JDLG1DQUE0Qzs7Ozs7O0lBTTVDLDRDQUFnRDs7Ozs7Ozs7SUFRaEQsMkJBQTRCOzs7Ozs7SUFNNUIsaUNBQXFDOzs7Ozs7SUFNckMscUNBQXNDOzs7Ozs7Ozs7SUFTdEMsd0RBQTZEOzs7OztJQUs3RCxrQ0FBd0g7Ozs7OztJQU14SCxnQ0FBa0U7Ozs7OztJQU1sRSxzQ0FBMEM7Ozs7O0lBRTFDLDhCQUtFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVhc2luZ0xvZ2ljIHtcbiAgLyoqXG4gICogRXhhbXBsZXMgbWF5IGJlIGZvdW5kIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9nZHNtaXRoL2pxdWVyeS5lYXNpbmcvYmxvYi9tYXN0ZXIvanF1ZXJ5LmVhc2luZy5qc1xuICAqIG9yIGh0dHA6Ly9naXptYS5jb20vZWFzaW5nL1xuICAqIEBwYXJhbSB0IGN1cnJlbnQgdGltZVxuICAqIEBwYXJhbSBiIGJlZ2lubmluZyB2YWx1ZVxuICAqIEBwYXJhbSBjIGNoYW5nZSBJbiB2YWx1ZVxuICAqIEBwYXJhbSBkIGR1cmF0aW9uXG4gICovXG4gIHB1YmxpYyBhYnN0cmFjdCBlYXNlKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBhZ2VTY3JvbGxUYXJnZXQgPSBIVE1MRWxlbWVudCB8IHN0cmluZztcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBQYWdlU2Nyb2xsaW5nVmlld3MgPSBIVE1MRWxlbWVudCB8IERvY3VtZW50IHwgSFRNTEJvZHlFbGVtZW50IHwgTm9kZTtcbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbENvbmZpZyB7XG5cbiAgLyoqXG4gICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCB0aWxsIHVwZGF0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gYWdhaW4uXG4gICogU21hbGwgYW1vdW50cyBtYXkgcHJvZHVjZSBzbW9vdGhlciBhbmltYXRpb25zIGJ1dCByZXF1aXJlIG1vcmUgcHJvY2Vzc2luZyBwb3dlci5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfaW50ZXJ2YWwgPSAxMDtcblxuICAvKipcbiAgKiBUaGUgYW1vdW50IG9mIHBpeGVscyB0aGF0IG5lZWQgdG8gYmUgYmV0d2VlbiB0aGUgY3VycmVudCBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwb3NpdGlvblxuICAqIGFuZCB0aGUgdGFyZ2V0IHBvc2l0aW9uIHRoZSBjYXVzZSBhIHNjcm9sbCBhbmltYXRpb24uIEluIGNhc2UgZGlzdGFuY2UgaXMgYmVsb3dcbiAgKiB0aGlzIHRocmVzaG9sZCwgYW4gaW1tZWRpYXRlIGp1bXAgd2lsbCBiZSBwZXJmb3JtZWQuXG4gICogRHVlIHRvIGRwaSBvciByb3VuZGluZyBpcnJlZ3VsYXJpdGllcyBpbiBicm93c2VycyBmbG9hdGluZyBwb2ludCBudW1iZXJzIGZvciBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZXNcbiAgKiBhcmUgcG9zc2libGUsIG1ha2luZyBhID09PSBjb21wYXJpc29uIG9mIGN1cnJlbnQgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgYW5kIHRhcmdldCBzY3JvbGxQb3NpdGlvbiBlcnJvci1wcm9uZS5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfbWluU2Nyb2xsRGlzdGFuY2UgPSAyO1xuXG4gIC8qKlxuICAqIE5hbWUgb2YgdGhlIGRlZmF1bHQgbmFtZXNwYWNlLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9kZWZhdWx0TmFtZXNwYWNlID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAqIFdoZXRoZXIgYnkgZGVmYXVsdCB0aGUgc2Nyb2xsaW5nIHNob3VsZCBoYXBwZW4gaW4gdmVydGljYWwgZGlyZWN0aW9uIChieSBtYW5pcHVsYXRpbmcgdGhlIHNjcm9sbFRvcCBwcm9wZXJ0eSlcbiAgKiAoPSB0cnVlOyBkZWZhdWx0KSBvciBpbiBob3Jpem9udGFsIGRpcmVjdGlvbiAoYnkgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGxMZWZ0IHByb3BlcnR5KSAoPSBmYWxzZVxuICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRJc1ZlcnRpY2FsU2Nyb2xsaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgKiBIb3cgbWFueSBjb25zb2xlIGxvZ3Mgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gICogMDogTm9uZVxuICAqIDI6IElmIGFuaW1hdGlvbiBjb3VsZCBub3QgYmUgc3RhcnRlZCBkdWUgdG8gbWlzc2luZyB0YXJnZXQsIFwiYWxyZWFkeSBhdCBkZXN0aW5hdGlvblwiIG9yIHNpbWlsYXIgcmVhc29uc1xuICAqIDU6IEFsbCBzY3JvbGwgcG9zaXRpb24gdmFsdWVzIHRoYXQgZ2V0IHNldFxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9sb2dMZXZlbCA9IDI7XG5cbiAgLyoqXG4gICogVGhlIGR1cmF0aW9uIGhvdyBsb25nIGEgc2Nyb2xsVG8gYW5pbWF0aW9uIHNob3VsZCBsYXN0IGJ5IGRlZmF1bHQuXG4gICogTWF5IGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIHBhZ2Utc2Nyb2xsLWR1cmF0aW9uIGF0dHJpYnV0ZSBvbiBhIHNpbmdsZSBuZzJQYWdlU2Nyb2xsIGluc3RhbmNlLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHREdXJhdGlvbiA9IDEyNTA7XG5cbiAgLyoqXG4gICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBhYm92ZSBzY3JvbGwgdGFyZ2V0IHdoZXJlIHRoZSBhbmltYXRpb24gc2hvdWxkIHN0b3AuIFNldHRpbmcgYSBwb3NpdGl2ZSBudW1iZXIgcmVzdWx0cyBpblxuICAqIHRoZSBzY3JvbGwgdGFyZ2V0IGJlaW5nIG1vcmUgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLCBuZWdhdGl2ZSBudW1iZXJzIHdpbGwgcHJvZHVjZSBzY3JvbGxpbmcgXCJ0b28gZmFyXCJcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0U2Nyb2xsT2Zmc2V0ID0gMDtcblxuICAvKipcbiAgKiBXaGV0aGVyIGJ5IGRlZmF1bHQgZm9yIGlubGluZSBzY3JvbGwgYW5pbWF0aW9ucyB0aGUgYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIHNob3VsZCB0YWtlIHBsYWNlICh0cnVlKSBvclxuICAqIG5vdCAoZmFsc2UpLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAqIFRoZSBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gd2lsbCB0cmF2ZXJzZSB0aGUgRE9NIHRyZWUgdXB3YXJkcywgc3RhcnRpbmcgYXQgdGhlIHNjcm9sbFRhcmdldCwgdW50aWwgaXQgZmluZHNcbiAgKiB0aGUgc2Nyb2xsaW5nVmlldyBjb250YWluZXIgZWxlbWVudC4gQWxvbmcgdGhlIHdheSB0aGUgb2Zmc2V0IHBvc2l0aW9ucyBvZiB0aGUgcmVsYXRpdmUgcG9zaXRpb25lZFxuICAqIChwb3NpdGlvbjogcmVsYXRpdmUpIGVsZW1lbnRzIHdpbGwgYmUgdGFrZW4gaW50byBhY2NvdW50IGZvciBjYWxjdWxhdGluZyB0aGUgdGFyZ2V0IGVsZW1lbnRzIHBvc2l0aW9uLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uID0gZmFsc2U7XG5cbiAgLyoqXG4gICogVGhlIGV2ZW50cyB0aGF0IGFyZSBsaXN0ZW5lZCB0byBvbiB0aGUgYm9keSB0byBkZWNpZGUgd2hldGhlciBhIHNjcm9sbCBhbmltYXRpb24gaGFzIGJlZW4gaW50ZXJmZXJlZC9pbnRlcnJ1cHRlZCBieSB0aGUgdXNlclxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9pbnRlcnJ1cHRFdmVudHM6IHN0cmluZ1tdID0gWydtb3VzZWRvd24nLCAnd2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnbW91c2V3aGVlbCcsICdrZXl1cCcsICd0b3VjaG1vdmUnXTtcblxuICAvKipcbiAgKiBUaGUga2V5cyB0aGF0IGFyZSBjb25zaWRlcmVkIHRvIGludGVycnVwdCBhIHNjcm9sbCBhbmltYXRpb24gKG1haW5seSB0aGUgYXJyb3cga2V5cykuIEFsbCBvdGhlciBrZXkgcHJlc3NlcyB3aWxsIG5vdCBzdG9wIHRoZVxuICAqIHNjcm9sbCBhbmltYXRpb24uXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX2ludGVycnVwdEtleXM6IG51bWJlcltdID0gWzMzLCAzNCwgMzUsIDM2LCAzOCwgNDBdO1xuXG4gIC8qKlxuICAqIFdoZXRoZXIgYSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBiZSBpbnRlcnJ1cHRpYmxlIGJ5IHVzZXIgaW50ZXJhY3Rpb24gKHRydWUpIG9yIG5vdCAoZmFsc2UpLiBJZiB0aGUgdXNlciBwZXJmb3JtcyBhblxuICAqIGludGVycnVwdGluZyBldmVudCB3aGlsZSBhIHNjcm9sbCBhbmltYXRpb24gdGFrZXMgcGxhY2UsIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0b3BzLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRJbnRlcnJ1cHRpYmxlID0gdHJ1ZTtcblxuICBwcml2YXRlIHN0YXRpYyBfZWFzaW5nTG9naWM6IEVhc2luZ0xvZ2ljID0ge1xuICAgIGVhc2U6ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgLy8gTGluZWFyIGVhc2luZ1xuICAgICAgcmV0dXJuIGMgKiB0IC8gZCArIGI7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldHRlciBhbmQgc2V0dGVyIHRvIGF2b2lkIGF1dG8gY29tcGxldGlvbiB0byBzdWdnZXN0IGNhbGxpbmcgdGhlIG1ldGhvZFxuICBwdWJsaWMgc3RhdGljIGdldCBkZWZhdWx0RWFzaW5nTG9naWMoKTogRWFzaW5nTG9naWMge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsQ29uZmlnLl9lYXNpbmdMb2dpYztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0IGRlZmF1bHRFYXNpbmdMb2dpYyhlYXNpbmdMb2dpYzogRWFzaW5nTG9naWMpIHtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9lYXNpbmdMb2dpYyA9IGVhc2luZ0xvZ2ljO1xuICB9XG5cbn1cbiJdfQ==