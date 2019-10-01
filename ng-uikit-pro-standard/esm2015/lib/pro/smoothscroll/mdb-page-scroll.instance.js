/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 29.08.16.
 */
import { EventEmitter } from '@angular/core';
import { PageScrollConfig, } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */
export function PageScrollOptions() { }
if (false) {
    /**
     * The document object of the current app
     * @type {?}
     */
    PageScrollOptions.prototype.document;
    /**
     * A specification of the DOM element to scroll to. Either a string referring to an
     * object id (`#target`) or a HTMLElement that is attached to the document's DOM tree.
     * @type {?}
     */
    PageScrollOptions.prototype.scrollTarget;
    /**
     * Array of HTMLElements or the body object that should be manipulated while performing
     * the scroll animation.
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.scrollingViews;
    /**
     * Namespace of the scroll animation
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.namespace;
    /**
     * Whether that scroll animation scrolls in vertical direction (true) or
     * horizontal (false, default value)
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.verticalScrolling;
    /**
     * Whether the an advanced offset calculation for inline scrollings should be applied
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.advancedInlineOffsetCalculation;
    /**
     * Offset of target elements location and scroll location
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollOffset;
    /**
     * Whether the scroll animation should be interruptible
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollInterruptible;
    /**
     * The easing logic to be used
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollEasingLogic;
    /**
     * Duration in milliseconds the scroll animation should last
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollDuration;
    /**
     * Maximum speed to be used for the scroll animation. Only taken
     * into account of no pageScrollDuration is provided
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollSpeed;
    /**
     * A listener to be called whenever the scroll animation stops
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollFinishListener;
}
/**
 * Represents a scrolling action
 */
export class PageScrollInstance {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {\@link PageScrollInstance#simpleInstance}
     *      {\@link PageScrollInstance#newInstance}
     * @param {?} namespace
     * @param {?} document
     */
    constructor(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
             able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    static simpleInstance(document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
        });
    }
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    static newInstance(options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        /** @type {?} */
        const pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (Util.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [
                document.documentElement,
                document.body,
                document.body.parentNode,
            ];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!Util.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (Util.isUndefinedOrNull(options.pageScrollDuration) &&
            !Util.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!Util.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible =
            options.pageScrollInterruptible ||
                (Util.isUndefinedOrNull(options.pageScrollInterruptible) &&
                    PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation =
            options.advancedInlineOffsetCalculation ||
                (Util.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                    PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    }
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    static simpleDirectionInstance(document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
            verticalScrolling,
        });
    }
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineInstance(document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace,
        });
    }
    /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineDirectionInstance(document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            namespace,
            verticalScrolling,
        });
    }
    /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    static advancedInstance(document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews,
            namespace,
            verticalScrolling,
            pageScrollOffset,
            pageScrollInterruptible,
            pageScrollEasingLogic,
            pageScrollDuration,
            pageScrollFinishListener,
        });
    }
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    getScrollPropertyValue(scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    extractScrollTargetPosition() {
        // let scrollTargetElement: HTMLElement;
        /** @type {?} */
        let scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(((/** @type {?} */ (this._scrollTarget))).substr(1));
        }
        else {
            scrollTargetElement = (/** @type {?} */ (this._scrollTarget));
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            /** @type {?} */
            const position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                const accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                const theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                let parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                let parent = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent)) {
                    if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent.offsetTop;
                        accumulatedParentsPos.left += parent.offsetLeft;
                    }
                    // Next iteration
                    parent = parent.parentElement;
                    parentFound = parent === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return Util.extractElementPosition(this.document, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    getCurrentOffset() {
        return this._offset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position) {
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        (oneAlreadyWorked, scrollingView) => {
            /** @type {?} */
            const startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                const scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                const isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement ||
                    scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    }
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    fireEvent(value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    attachInterruptListeners(interruptReporter) {
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            interruptReporter.report(event, this);
        });
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.addEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    detachInterruptListeners() {
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.removeEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = false;
    }
    /**
     * @return {?}
     */
    get namespace() {
        return this._namespace;
    }
    /**
     * @return {?}
     */
    get scrollTarget() {
        return this._scrollTarget;
    }
    /**
     * @return {?}
     */
    get verticalScrolling() {
        return this._verticalScrolling;
    }
    /**
     * @return {?}
     */
    get scrollingViews() {
        return this._scrollingViews;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startScrollPosition(value) {
        this._startScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get startScrollPosition() {
        return this._startScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set targetScrollPosition(value) {
        this._targetScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get targetScrollPosition() {
        return this._targetScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set distanceToScroll(value) {
        this._distanceToScroll = value;
    }
    /**
     * @return {?}
     */
    get distanceToScroll() {
        return this._distanceToScroll;
    }
    /**
     * @return {?}
     */
    get executionDuration() {
        return this._executionDuration;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set executionDuration(value) {
        this._executionDuration = value;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this._duration;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @return {?}
     */
    get easingLogic() {
        return this._easingLogic;
    }
    /**
     * @return {?}
     */
    get interruptible() {
        return this._interruptible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @return {?}
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @return {?}
     */
    get endTime() {
        return this._endTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timer(value) {
        this._timer = value;
    }
    /**
     * @return {?}
     */
    get timer() {
        return this._timer;
    }
    /**
     * @return {?}
     */
    get interruptListenersAttached() {
        return this._interruptListenersAttached;
    }
}
if (false) {
    /**
     * These properties will be set during instance construction and default to their defaults from PageScrollConfig
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._namespace;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollingViews;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._isInlineScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollTarget;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._verticalScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._offset;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._duration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._speed;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._easingLogic;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListener;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._advancedInlineOffsetCalculation;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._pageScrollFinish;
    /**
     * These properties will be set/manipulated if the scroll animation starts
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._targetScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._distanceToScroll;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._endTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._executionDuration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListenersAttached;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._timer;
}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */
export function InterruptReporter() { }
if (false) {
    /** @type {?} */
    InterruptReporter.prototype.report;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFFTCxnQkFBZ0IsR0FHakIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUscUJBQXFCLElBQUksSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTS9FLHVDQWdFQzs7Ozs7O0lBNURDLHFDQUFtQjs7Ozs7O0lBTW5CLHlDQUErQjs7Ozs7O0lBTS9CLDJDQUFzQzs7Ozs7SUFLdEMsc0NBQW1COzs7Ozs7SUFNbkIsOENBQTRCOzs7OztJQUs1Qiw0REFBMEM7Ozs7O0lBSzFDLDZDQUEwQjs7Ozs7SUFLMUIsb0RBQWtDOzs7OztJQUtsQyxrREFBb0M7Ozs7O0lBS3BDLCtDQUE0Qjs7Ozs7O0lBTTVCLDRDQUF5Qjs7Ozs7SUFLekIscURBQWlEOzs7OztBQU9uRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7SUF5UTdCLFlBQVksU0FBaUIsRUFBRSxRQUFrQjs7Ozs7UUFuUXpDLGVBQVUsR0FBVyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFVeEQsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7O1FBRWpFLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFdkQsY0FBUyxHQUFXLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7UUFJckQsaUJBQVksR0FBZ0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7O1FBRWhFLG1CQUFjLEdBQVksZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7O1FBS2hFLHFDQUFnQyxHQUN0QyxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQzs7UUFFbEQsc0JBQWlCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7Ozs7O1FBTXZFLHlCQUFvQixHQUFHLENBQUMsQ0FBQzs7UUFZekIsZ0NBQTJCLEdBQUcsS0FBSyxDQUFDOzs7UUFJcEMsV0FBTSxHQUFRLElBQUksQ0FBQztRQWtOekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7OztJQS9NTSxNQUFNLENBQUMsY0FBYyxDQUMxQixRQUFrQixFQUNsQixZQUE4QixFQUM5QixTQUFrQjtRQUVsQixPQUFPLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztZQUNwQyxRQUFRO1lBQ1IsWUFBWTtZQUNaLFNBQVM7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHTSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQWdDO1FBQ3hELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztTQUN4RDs7O2NBRUssa0JBQWtCLEdBQTZCLElBQUksa0JBQWtCLENBQ3pFLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLFFBQVEsQ0FDVDtRQUVELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekYsa0JBQWtCLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQzlDLGtCQUFrQixDQUFDLGVBQWUsR0FBRztnQkFDbkMsUUFBUSxDQUFDLGVBQWU7Z0JBQ3hCLFFBQVEsQ0FBQyxJQUFJO2dCQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVTthQUN6QixDQUFDO1NBQ0g7YUFBTTtZQUNMLGtCQUFrQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUM3QyxrQkFBa0IsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztTQUM3RDtRQUVELGtCQUFrQixDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDdEQsa0JBQWtCLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1NBQ25FO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNyRCxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMxRCxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1NBQ2pFO1FBRUQsSUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ2xELENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDaEQ7WUFDQSwrRkFBK0Y7WUFDL0Ysa0JBQWtCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDcEQsa0JBQWtCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMxQzthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDOUQsa0JBQWtCLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDN0Qsa0JBQWtCLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1NBQ3pFO1FBRUQsa0JBQWtCLENBQUMsY0FBYztZQUMvQixPQUFPLENBQUMsdUJBQXVCO2dCQUMvQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7b0JBQ3RELGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFM0Msa0JBQWtCLENBQUMsZ0NBQWdDO1lBQ2pELE9BQU8sQ0FBQywrQkFBK0I7Z0JBQ3ZDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztvQkFDOUQsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUU3RCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7Ozs7OztJQVVNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FDbkMsUUFBa0IsRUFDbEIsWUFBOEIsRUFDOUIsaUJBQTBCLEVBQzFCLFNBQWtCO1FBRWxCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ3BDLFFBQVE7WUFDUixZQUFZO1lBQ1osU0FBUztZQUNULGlCQUFpQjtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFlTSxNQUFNLENBQUMsb0JBQW9CLENBQ2hDLFFBQWtCLEVBQ2xCLFlBQThCLEVBQzlCLGFBQWlDLEVBQ2pDLFNBQWtCO1FBRWxCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ3BDLFFBQVE7WUFDUixZQUFZO1lBQ1osY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQy9CLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsU0FBUztTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7OztJQVlNLE1BQU0sQ0FBQyw2QkFBNkIsQ0FDekMsUUFBa0IsRUFDbEIsWUFBOEIsRUFDOUIsYUFBaUMsRUFDakMsaUJBQTBCLEVBQzFCLFNBQWtCO1FBRWxCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ3BDLFFBQVE7WUFDUixZQUFZO1lBQ1osY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQy9CLFNBQVM7WUFDVCxpQkFBaUI7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDNUIsUUFBa0IsRUFDbEIsWUFBOEIsRUFDOUIsY0FBcUMsRUFDckMsU0FBa0IsRUFDbEIsaUJBQTJCLEVBQzNCLGdCQUF5QixFQUN6Qix1QkFBaUMsRUFDakMscUJBQW1DLEVBQ25DLGtCQUEyQixFQUMzQix3QkFBZ0Q7UUFFaEQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7WUFDcEMsUUFBUTtZQUNSLFlBQVk7WUFDWixjQUFjO1lBQ2QsU0FBUztZQUNULGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsd0JBQXdCO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBYU0sc0JBQXNCLENBQUMsYUFBa0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUM7U0FDakM7UUFDRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7O0lBU00sMkJBQTJCOzs7WUFFNUIsbUJBQXNDO1FBQzFDLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUMxQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLG1CQUFRLElBQUksQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGO2FBQU07WUFDTCxtQkFBbUIsR0FBRyxtQkFBYSxJQUFJLENBQUMsYUFBYSxFQUFBLENBQUM7U0FDdkQ7UUFFRCxJQUFJLG1CQUFtQixLQUFLLElBQUksSUFBSSxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFDckUsMEJBQTBCO1lBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztrQkFDckIsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsVUFBVSxFQUFFO1lBQzdGLElBQUksSUFBSSxDQUFDLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7c0JBQ3ZFLHFCQUFxQixHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOzs7c0JBRTNDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsV0FBVzs7b0JBQzNELFdBQVcsR0FBRyxLQUFLOzs7O29CQUluQixNQUFNLEdBQVEsbUJBQW1CLENBQUMsYUFBYTtnQkFFbkQsOEJBQThCO2dCQUM5QixPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN0RCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxVQUFVLEVBQUU7d0JBQ2xGLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO3dCQUM5QyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQztxQkFDakQ7b0JBQ0QsaUJBQWlCO29CQUNqQixNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDOUIsV0FBVyxHQUFHLE1BQU0sS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxJQUFJLFdBQVcsRUFBRTtvQkFDZix3RkFBd0Y7b0JBQ3hGLFFBQVEsQ0FBQyxHQUFHLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDO29CQUMxQyxRQUFRLENBQUMsSUFBSSxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO3dCQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7cUJBQ2pFO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQVFNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7SUFRTSxpQkFBaUIsQ0FBQyxRQUFnQjtRQUN2QyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUM5QztRQUNELGtFQUFrRTtRQUNsRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLGdCQUFxQixFQUFFLGFBQWtCLEVBQUUsRUFBRTs7a0JBQ3hFLHdCQUF3QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7WUFDM0UsSUFBSSxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsRUFBRTs7c0JBQ2hFLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQzs7Ozs7OztzQkFPOUQsZUFBZSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0I7Z0JBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzNCLGFBQWEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDTCxhQUFhLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztpQkFDcEM7Z0JBRUQsbUVBQW1FO2dCQUNuRSxvRkFBb0Y7Z0JBQ3BGLGlGQUFpRjtnQkFDakYsNkNBQTZDO2dCQUM3QyxJQUNFLGVBQWU7b0JBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUNoRjtvQkFDQSxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1lBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztRQUMxQixDQUFDLEdBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFNTSxTQUFTLENBQUMsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztJQVNNLHdCQUF3QixDQUFDLGlCQUFvQztRQUNsRSxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsa0JBQWtCOzs7O1FBQUcsQ0FBQyxLQUFZLEVBQU8sRUFBRTtZQUM5QyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQSxDQUFDO1FBQ0YsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUNwRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFNTSx3QkFBd0I7UUFDN0IsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUN2RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELElBQVcsbUJBQW1CLENBQUMsS0FBYTtRQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFXLEtBQUssQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7Q0FDRjs7Ozs7OztJQXJnQkMsd0NBQWdFOzs7OztJQUVoRSxzQ0FBMkI7Ozs7O0lBRTNCLDZDQUE4Qzs7Ozs7SUFDOUMsZ0RBQW9DOzs7OztJQUVwQywyQ0FBd0M7Ozs7O0lBR3hDLGdEQUF5RTs7Ozs7SUFFekUscUNBQStEOzs7OztJQUUvRCx1Q0FBNkQ7Ozs7O0lBRTdELG9DQUF1Qjs7Ozs7SUFFdkIsMENBQXdFOzs7OztJQUV4RSw0Q0FBd0U7Ozs7O0lBR3hFLGdEQUErRDs7Ozs7SUFFL0QsOERBQzBEOzs7OztJQUUxRCwrQ0FBK0U7Ozs7OztJQU0vRSxrREFBaUM7Ozs7O0lBRWpDLG1EQUFzQzs7Ozs7SUFFdEMsK0NBQWtDOzs7OztJQUVsQyx3Q0FBMkI7Ozs7O0lBRTNCLHNDQUF5Qjs7Ozs7SUFFekIsZ0RBQW1DOzs7OztJQUVuQyx5REFBNEM7Ozs7O0lBSTVDLG9DQUEyQjs7Ozs7Ozs7OztBQTZkN0IsdUNBRUM7OztJQURDLG1DQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDI5LjA4LjE2LlxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBFYXNpbmdMb2dpYyxcbiAgUGFnZVNjcm9sbENvbmZpZyxcbiAgUGFnZVNjcm9sbFRhcmdldCxcbiAgUGFnZVNjcm9sbGluZ1ZpZXdzLFxufSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuaW1wb3J0IHsgUGFnZVNjcm9sbFV0aWxTZXJ2aWNlIGFzIFV0aWwgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFuIEludGVyZmFjZSBzcGVjaWZ5aW5nIHRoZSBwb3NzaWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBuZXdJbnN0YW5jZSgpIGZhY3RvcnkgbWV0aG9kXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlU2Nyb2xsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZG9jdW1lbnQgb2JqZWN0IG9mIHRoZSBjdXJyZW50IGFwcFxuICAgKi9cbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljYXRpb24gb2YgdGhlIERPTSBlbGVtZW50IHRvIHNjcm9sbCB0by4gRWl0aGVyIGEgc3RyaW5nIHJlZmVycmluZyB0byBhblxuICAgKiBvYmplY3QgaWQgKGAjdGFyZ2V0YCkgb3IgYSBIVE1MRWxlbWVudCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTSB0cmVlLlxuICAgKi9cbiAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0O1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBIVE1MRWxlbWVudHMgb3IgdGhlIGJvZHkgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIG1hbmlwdWxhdGVkIHdoaWxlIHBlcmZvcm1pbmdcbiAgICogdGhlIHNjcm9sbCBhbmltYXRpb24uXG4gICAqL1xuICBzY3JvbGxpbmdWaWV3cz86IFBhZ2VTY3JvbGxpbmdWaWV3c1tdO1xuXG4gIC8qKlxuICAgKiBOYW1lc3BhY2Ugb2YgdGhlIHNjcm9sbCBhbmltYXRpb25cbiAgICovXG4gIG5hbWVzcGFjZT86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGF0IHNjcm9sbCBhbmltYXRpb24gc2Nyb2xscyBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUpIG9yXG4gICAqIGhvcml6b250YWwgKGZhbHNlLCBkZWZhdWx0IHZhbHVlKVxuICAgKi9cbiAgdmVydGljYWxTY3JvbGxpbmc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhbiBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gZm9yIGlubGluZSBzY3JvbGxpbmdzIHNob3VsZCBiZSBhcHBsaWVkXG4gICAqL1xuICBhZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT2Zmc2V0IG9mIHRhcmdldCBlbGVtZW50cyBsb2NhdGlvbiBhbmQgc2Nyb2xsIGxvY2F0aW9uXG4gICAqL1xuICBwYWdlU2Nyb2xsT2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBiZSBpbnRlcnJ1cHRpYmxlXG4gICAqL1xuICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBlYXNpbmcgbG9naWMgdG8gYmUgdXNlZFxuICAgKi9cbiAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljPzogRWFzaW5nTG9naWM7XG5cbiAgLyoqXG4gICAqIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgbGFzdFxuICAgKi9cbiAgcGFnZVNjcm9sbER1cmF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIHNwZWVkIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgYW5pbWF0aW9uLiBPbmx5IHRha2VuXG4gICAqIGludG8gYWNjb3VudCBvZiBubyBwYWdlU2Nyb2xsRHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhZ2VTY3JvbGxTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogQSBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc3RvcHNcbiAgICovXG4gIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcj86IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2Nyb2xsaW5nIGFjdGlvblxuICovXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAvKipcbiAgICogVGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIHNldCBkdXJpbmcgaW5zdGFuY2UgY29uc3RydWN0aW9uIGFuZCBkZWZhdWx0IHRvIHRoZWlyIGRlZmF1bHRzIGZyb20gUGFnZVNjcm9sbENvbmZpZ1xuICAgKi9cblxuICAvKiBBIG5hbWVzcGFjZSB0byBcImdyb3VwXCIgc2Nyb2xsIGFuaW1hdGlvbnMgdG9nZXRoZXIgYW5kIHN0b3BwaW5nIHNvbWUgZG9lcyBub3Qgc3RvcCBvdGhlcnMgKi9cbiAgcHJpdmF0ZSBfbmFtZXNwYWNlOiBzdHJpbmcgPSBQYWdlU2Nyb2xsQ29uZmlnLl9kZWZhdWx0TmFtZXNwYWNlO1xuICAvKiBUaGUgZG9jdW1lbnQgYWxsIHRoZSBzY3JvbGxpbmcgdGFrZXMgcGxhY2UgYW5kIHNjcm9sbCB0YXJnZXRzIGFyZSBsb2NhdGVkIGluICovXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICAvKiBUaGUgRE9NIGVsZW1lbnRzIG9yIHNpbWlsYXIgbm9kZXMgd2hvc2Ugc2Nyb2xsVG9wL3Njcm9sbExlZnQgcHJvcGVydHkgd2lsbCBiZSBtYW5pcHVsYXRlZCBkdXJpbmcgc2Nyb2xsaW5nICovXG4gIHByaXZhdGUgX3Njcm9sbGluZ1ZpZXdzOiBQYWdlU2Nyb2xsaW5nVmlld3NbXTtcbiAgcHJpdmF0ZSBfaXNJbmxpbmVTY3JvbGxpbmc6IGJvb2xlYW47XG4gIC8qIFRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCBpbnRvIHRoZSB2aWV3cG9ydCAqL1xuICBwcml2YXRlIF9zY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQ7XG5cbiAgLyogV2hldGhlciB3ZSBzY3JvbGwgdmVydGljYWxseSAodHJ1ZSkgb3IgaG9yaXpvbnRhbGx5IChmYWxzZSkgKi9cbiAgcHJpdmF0ZSBfdmVydGljYWxTY3JvbGxpbmcgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJc1ZlcnRpY2FsU2Nyb2xsaW5nO1xuICAvKiBPZmZzZXQgaW4gcHggdGhhdCB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdG9wIGFib3ZlIHRoYXQgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXIgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRTY3JvbGxPZmZzZXQ7XG4gIC8qIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgbGFzdCAqL1xuICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0RHVyYXRpb247XG4gIC8qIFNwZWVkIGluIFwicGl4ZWxzL3NlY29uZFwiIHRvIGJlIHVzZWQgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIHRhcmdldCBlbGVtZW50ICovXG4gIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG4gIC8qIEVhc2luZyBmdW5jdGlvbiB0byBtYW5pcHVsYXRlIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBvdmVyIHRpbWUgKi9cbiAgcHJpdmF0ZSBfZWFzaW5nTG9naWM6IEVhc2luZ0xvZ2ljID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0RWFzaW5nTG9naWM7XG4gIC8qIEJvb2xlYW4gd2hldGhlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgc3RvcCBvbiB1c2VyIGludGVycnVwdGlvbiBvciBub3QgKi9cbiAgcHJpdmF0ZSBfaW50ZXJydXB0aWJsZTogYm9vbGVhbiA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEludGVycnVwdGlibGU7XG4gIC8qIFRoZSBsaXN0ZW5lciB0aGF0IHRoaXMgc2Nyb2xsIGluc3RhbmNlIGF0dGFjaGVzIHRvIHRoZSBib2R5IHRvIGxpc3RlbiBmb3IgaW50ZXJydXB0IGV2ZW50c1xuICAgICBXZSdyZSBrZWVwaW5nIGEgcmVmZXJlbmNlIHRvIGl0IHNvIHdlIGNhbiBwcm9wZXJseSByZW1vdmUgaXQgd2hlbiB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0O1xuICAvKiBXaGV0aGVyIHRoZSBhZHZhbmRlZCBvZmZzZXQgY2FsY3VsYXRpb24gZm9yIGlubGluZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHVzZWQgKi9cbiAgcHJpdmF0ZSBfYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjogYm9vbGVhbiA9XG4gICAgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjtcbiAgLyogRXZlbnQgZW1pdHRlciB0byBub3RpZnkgdGhlIHdvcmxkIGFib3V0IHRoZSBzY3JvbGxpbmcgKi9cbiAgcHJpdmF0ZSBfcGFnZVNjcm9sbEZpbmlzaDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgc2V0L21hbmlwdWxhdGVkIGlmIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0YXJ0c1xuICAgKi9cbiAgLyogVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMgKi9cbiAgcHJpdmF0ZSBfc3RhcnRTY3JvbGxQb3NpdGlvbiA9IDA7XG4gIC8qIFRoZSB0YXJnZXQgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIGZvciB0aGUgYW5pbWF0aW9uIChha2EgXCJ0aGUgZmluYWwgZGVzdGluYXRpb25cIikgKi9cbiAgcHJpdmF0ZSBfdGFyZ2V0U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbiAgLyogRGlmZmVyZW5jZSBiZXR3ZWVuIHN0YXJ0U2Nyb2xsUG9zaXRpb24gYW5kIHRhcmdldFNjcm9sbFBvc2l0aW9uLiBQcmUtY2FsY3VsYXRlZCB0byBtaW5pbWl6ZSBjb21wdXRhdGlvbnMgZHVyaW5nIGFuaW1hdGlvbiAqL1xuICBwcml2YXRlIF9kaXN0YW5jZVRvU2Nyb2xsOiBudW1iZXI7XG4gIC8qIFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgYW5pbWF0aW9uIHN0YXJ0cy9nb3Qgc3RhcnRlZCAqL1xuICBwcml2YXRlIF9zdGFydFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGVzdGltYXRlIGVuZCB0aW1lIG9mIHRoZSBhbmltYXRpb24sIGNhbGN1bGF0ZWQgYnkgc3RhcnRUaW1lICsgZHVyYXRpb24gKi9cbiAgcHJpdmF0ZSBfZW5kVGltZTogbnVtYmVyO1xuICAvKiBUaGUgZHVyYXRpb24gYSBzdGFydGVkIGFuaW1hdGlvbiB0YWtlcy4gVGhpcyBtYXkgbWF0Y2ggdGhlIF9kdXJhdGlvbiBvciBiZSBhZGp1c3RlZCBkdWUgdG8gdGhlIF9zcGVlZCBvcHRpb24gKi9cbiAgcHJpdmF0ZSBfZXhlY3V0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgLyogV2hldGhlciBhbiBpbnRlcnJ1cHQgbGlzdGVuZXIgaXMgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgLyogUmVmZXJlbmNlcyB0byB0aGUgdGltZXIgaW5zdGFuY2UgdGhhdCBpcyB1c2VkIHRvIHBlcmZvcm0gdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gYmVcbiAgICAgYWJsZSB0byBjbGVhciBpdCBvbiBhbmltYXRpb24gZW5kKi9cbiAgcHJpdmF0ZSBfdGltZXI6IGFueSA9IG51bGw7XG5cbiAgLypcbiAgICogRmFjdG9yeSBtZXRob2RzIGZvciBpbnN0YW5jZSBjcmVhdGlvblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgfSk7XG4gIH1cblxuICAvLyAgIHB1YmxpYyBzdGF0aWMgbmV3SW5zdGFuY2Uob3B0aW9uczogUGFnZVNjcm9sbE9wdGlvbnMpIHtcbiAgcHVibGljIHN0YXRpYyBuZXdJbnN0YW5jZShvcHRpb25zOiBQYWdlU2Nyb2xsT3B0aW9ucyB8IGFueSkge1xuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMubmFtZXNwYWNlKSB8fCBvcHRpb25zLm5hbWVzcGFjZS5sZW5ndGggPD0gMCkge1xuICAgICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBQYWdlU2Nyb2xsQ29uZmlnLl9kZWZhdWx0TmFtZXNwYWNlO1xuICAgIH1cbiAgICAvLyBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSA9IG5ldyBQYWdlU2Nyb2xsSW5zdGFuY2Uob3B0aW9ucy5uYW1lc3BhY2UsIGRvY3VtZW50KTtcbiAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSB8IGFueSA9IG5ldyBQYWdlU2Nyb2xsSW5zdGFuY2UoXG4gICAgICBvcHRpb25zLm5hbWVzcGFjZSxcbiAgICAgIGRvY3VtZW50XG4gICAgKTtcblxuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MpIHx8IG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2lzSW5saW5lU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbGluZ1ZpZXdzID0gW1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgICAgIGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faXNJbmxpbmVTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxpbmdWaWV3cyA9IG9wdGlvbnMuc2Nyb2xsaW5nVmlld3M7XG4gICAgfVxuXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxUYXJnZXQgPSBvcHRpb25zLnNjcm9sbFRhcmdldDtcblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnZlcnRpY2FsU2Nyb2xsaW5nKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl92ZXJ0aWNhbFNjcm9sbGluZyA9IG9wdGlvbnMudmVydGljYWxTY3JvbGxpbmc7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbE9mZnNldCkpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fb2Zmc2V0ID0gb3B0aW9ucy5wYWdlU2Nyb2xsT2Zmc2V0O1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxFYXNpbmdMb2dpYykpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZWFzaW5nTG9naWMgPSBvcHRpb25zLnBhZ2VTY3JvbGxFYXNpbmdMb2dpYztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uKSAmJlxuICAgICAgIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsU3BlZWQpXG4gICAgKSB7XG4gICAgICAvLyBObyBkdXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIG9ubHkgaW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgc3BlZWQgb3B0aW9uIHdoZW4gcHJlc2VudFxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zcGVlZCA9IG9wdGlvbnMucGFnZVNjcm9sbFNwZWVkO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9kdXJhdGlvbiA9IG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uO1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcikpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fcGFnZVNjcm9sbEZpbmlzaCA9IG9wdGlvbnMucGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyO1xuICAgIH1cblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faW50ZXJydXB0aWJsZSA9XG4gICAgICBvcHRpb25zLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlIHx8XG4gICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlKSAmJlxuICAgICAgICBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlKTtcblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiA9XG4gICAgICBvcHRpb25zLmFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gfHxcbiAgICAgIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMuYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbikgJiZcbiAgICAgICAgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbik7XG5cbiAgICByZXR1cm4gcGFnZVNjcm9sbEluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBhZ2VTY3JvbGxJbnN0YW5jZSByZXByZXNlbnRpbmcgYSBzY3JvbGwgYW5pbWF0aW9uIG9uIHRoZSBkb2N1bWVudHMgYm9keS5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVEaXJlY3Rpb25JbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiBib29sZWFuLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQYWdlU2Nyb2xsSW5zdGFuY2UgcmVwcmVzZW50aW5nIGEgc2Nyb2xsIGFuaW1hdGlvbiB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgd2hlcmUgdGhlIHNjcm9sbGluZ1ZpZXdcbiAgICogZWxlbWVudHMgZ2V0IHNjcm9sbGVkIChsaWtlIGEgZGl2IGNvbnRhaW5lciB3aXRoIGZpeGVkIGhlaWdodCwgcmVzdWx0aW5nIGluIHNjcm9sbGJhcnMgaW4gaXQpLlxuICAgKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB0aGUgc2Nyb2xsVGFyZ2V0IGlzIGxvY2F0ZWQgaW5zaWRlIHRoZSBzY3JvbGxpbmdWaWV3IGluIHRoZSBET00gaGllcmFyY2h5LCBvdGhlcndpc2UgdGhlXG4gICAqIHNjcm9sbGluZ1ZpZXcgd2lsbCBiZSBzY3JvbGxlZCB0byBhbiBhcHBhcmVudGx5IGFyYml0cmFyeSBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZUlubGluZUluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsaW5nVmlldzogUGFnZVNjcm9sbGluZ1ZpZXdzLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBzY3JvbGxpbmdWaWV3czogW3Njcm9sbGluZ1ZpZXddLFxuICAgICAgdmVydGljYWxTY3JvbGxpbmc6IHRydWUsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIHZlcnRpY2FsU2Nyb2xsaW5nIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYmUgcGVyZm9ybWVkIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSwgZGVmYXVsdCkgb3IgaG9yaXpvbnRhbCAoZmFsc2UpXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zKX1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5saW5lRGlyZWN0aW9uSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBzY3JvbGxpbmdWaWV3OiBQYWdlU2Nyb2xsaW5nVmlld3MsXG4gICAgdmVydGljYWxTY3JvbGxpbmc6IGJvb2xlYW4sXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nXG4gICk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgIHNjcm9sbGluZ1ZpZXdzOiBbc2Nyb2xsaW5nVmlld10sXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlld3MgVGhlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkLiBOdWxsIHRvIHVzZSB0aGUgZGVmYXVsdCBlbGVtZW50cyBvZiBkb2N1bWVudCBhbmQgYm9keS5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqIEBwYXJhbSB2ZXJ0aWNhbFNjcm9sbGluZyB3aGV0aGVyIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHBlcmZvcm1lZCBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUsIGRlZmF1bHQpIG9yIGhvcml6b250YWwgKGZhbHNlKVxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbE9mZnNldCBUaGUgb2Zmc2V0IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB0b3Agb2YgdGhlIHRhcmdldCBlbGVtZW50IG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsL3VuZGVmaW5lZCB0byB1c2UgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEludGVycnVwdGlibGUgV2hldGhlciB0aGlzIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGJlIGludGVycnVwdGlibGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyBFYXNpbmcgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXIgdGltZS4gTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxEdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoZSBhbmltYXRpb24gc2hvdWxkIGxhc3QuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bGwvdW5kZWZpbmVkIGZvciBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIgTGlzdGVuZXIgdG8gYmUgY2FsbGVkIHRvIG5vdGlmeSBvdGhlciBwYXJ0cyBvZiB0aGUgYXBwbGljYXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBoYXMgZmluaXNoZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhZHZhbmNlZEluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXSxcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmcsXG4gICAgdmVydGljYWxTY3JvbGxpbmc/OiBib29sZWFuLFxuICAgIHBhZ2VTY3JvbGxPZmZzZXQ/OiBudW1iZXIsXG4gICAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuLFxuICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYz86IEVhc2luZ0xvZ2ljLFxuICAgIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcixcbiAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj5cbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgc2Nyb2xsaW5nVmlld3MsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICAgIHBhZ2VTY3JvbGxPZmZzZXQsXG4gICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSxcbiAgICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyxcbiAgICAgIHBhZ2VTY3JvbGxEdXJhdGlvbixcbiAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yLCByZXF1aXJlcyB0aGUgcHJvcGVydGllcyBhc3N1bWVkIHRvIGJlIHRoZSBiYXJlIG1pbmltdW0uXG4gICAqIFVzZSB0aGUgZmFjdG9yeSBtZXRob2RzIHRvIGNyZWF0ZSBpbnN0YW5jZXM6XG4gICAqICAgICAge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZSNzaW1wbGVJbnN0YW5jZX1cbiAgICogICAgICB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlI25ld0luc3RhbmNlfVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZXNwYWNlOiBzdHJpbmcsIGRvY3VtZW50OiBEb2N1bWVudCkge1xuICAgIHRoaXMuX25hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3OiBhbnkpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy52ZXJ0aWNhbFNjcm9sbGluZykge1xuICAgICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudC5cbiAgICpcbiAgICogRXh0cmFjdCB0aGUgc2Nyb2xsVGFyZ2V0IEhUTUxFbGVtZW50IGZyb20gdGhlIGdpdmVuIFBhZ2VTY3JvbGxUYXJnZXQgb2JqZWN0LiBUaGUgbGF0dGVyIG9uZSBtYXkgYmVcbiAgICogYSBzdHJpbmcgbGlrZSBcIiNoZWFkaW5nMlwiLCB0aGVuIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgRE9NIGVsZW1lbnQgZm9yIHRoYXQgaWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZXh0cmFjdFNjcm9sbFRhcmdldFBvc2l0aW9uKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICAvLyBsZXQgc2Nyb2xsVGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgbGV0IHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgYW55O1xuICAgIGlmICh0eXBlb2YgdGhpcy5fc2Nyb2xsVGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKDxzdHJpbmc+dGhpcy5fc2Nyb2xsVGFyZ2V0KS5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUYXJnZXRFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX3Njcm9sbFRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVGFyZ2V0RWxlbWVudCA9PT0gbnVsbCB8fCBzY3JvbGxUYXJnZXRFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNjcm9sbCB0YXJnZXQgbm90IGZvdW5kXG4gICAgICByZXR1cm4geyB0b3A6IE5hTiwgbGVmdDogTmFOIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzSW5saW5lU2Nyb2xsaW5nKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHsgdG9wOiBzY3JvbGxUYXJnZXRFbGVtZW50Lm9mZnNldFRvcCwgbGVmdDogc2Nyb2xsVGFyZ2V0RWxlbWVudC5vZmZzZXRMZWZ0IH07XG4gICAgICBpZiAodGhpcy5fYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiAmJiB0aGlzLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBhY2N1bXVsYXRlZFBhcmVudHNQb3MgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgICAgICAvLyBub3QgbmFtZWQgd2luZG93IHRvIG1ha2Ugc3VyZSB3ZSdyZSBub3QgZ2V0dGluZyB0aGUgZ2xvYmFsIHdpbmRvdyB2YXJpYWJsZSBieSBhY2NpZGVudFxuICAgICAgICBjb25zdCB0aGVXaW5kb3cgPSBzY3JvbGxUYXJnZXRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIGxldCBwYXJlbnRGb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBhcmVudCBpcyB0aGUgaW1tZWRpYXRlIHBhcmVudFxuICAgICAgICAvLyBsZXQgcGFyZW50ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgcGFyZW50OiBhbnkgPSBzY3JvbGxUYXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1cHdhcmRzIGFsbCBwYXJlbnRzXG4gICAgICAgIHdoaWxlICghcGFyZW50Rm91bmQgJiYgIVV0aWwuaXNVbmRlZmluZWRPck51bGwocGFyZW50KSkge1xuICAgICAgICAgIGlmICh0aGVXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUGFyZW50c1Bvcy50b3AgKz0gcGFyZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUGFyZW50c1Bvcy5sZWZ0ICs9IHBhcmVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOZXh0IGl0ZXJhdGlvblxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIHBhcmVudEZvdW5kID0gcGFyZW50ID09PSB0aGlzLnNjcm9sbGluZ1ZpZXdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRGb3VuZCkge1xuICAgICAgICAgIC8vIE9ubHkgdXNlIHRoZSByZXN1bHRzIGlmIHdlIGZvdW5kIHRoZSBwYXJlbnQsIG90aGVyd2lzZSB3ZSBhY2N1bXVsYXRlZCB0b28gbXVjaCBhbnl3YXlcbiAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gYWNjdW11bGF0ZWRQYXJlbnRzUG9zLnRvcDtcbiAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IGFjY3VtdWxhdGVkUGFyZW50c1Bvcy5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChQYWdlU2Nyb2xsQ29uZmlnLl9sb2dMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBmaW5kIG5lc3RlZCBzY3JvbGxpbmcgdGFyZ2V0cyBwYXJlbnQhJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZXh0cmFjdEVsZW1lbnRQb3NpdGlvbih0aGlzLmRvY3VtZW50LCBzY3JvbGxUYXJnZXRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvcCBvZmZzZXQgb2YgdGhlIHNjcm9sbCBhbmltYXRpb24uXG4gICAqIFRoaXMgYXV0b21hdGljYWxseSB0YWtlcyB0aGUgb2Zmc2V0IGxvY2F0aW9uIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyL3Njcm9sbGluZyB2aWV3XG4gICAqIGludG8gYWNjb3VudCAoZm9yIG5lc3RlZC9pbmxpbmUgc2Nyb2xsaW5nKS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJyZW50T2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcInNjcm9sbFRvcFwiIG9yIFwic2Nyb2xsTGVmdFwiIHByb3BlcnR5IGZvciBhbGwgc2Nyb2xsaW5nVmlld3MgdG8gdGhlIHByb3ZpZGVkIHZhbHVlXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBmb3Igb25lIFNjcm9sbFRvcFNvdXJjZSB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgY291bGQgYmUgc2V0IGFuZCBpdCBrZXB0IHRoZSBuZXcgdmFsdWUuXG4gICAqICAgICAgICAgIGZhbHNlIGlmIGl0IGZhaWxlZCBmb3IgYWxsIFNjcm9sbGluZ1ZpZXdzLCBtZWFuaW5nIHRoYXQgd2Ugc2hvdWxkIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgKiAgICAgICAgICAocHJvYmFibHkgYmVjYXVzZSB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBzY3JvbGxpbmcgcmVnaW9uKVxuICAgKi9cbiAgcHVibGljIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5fbG9nTGV2ZWwgPj0gNSkge1xuICAgICAgY29uc29sZS53YXJuKCdTY3JvbGwgUG9zaXRpb246ICcgKyBwb3NpdGlvbik7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHRvIGFsbCBzY3JvbGxpbmdWaWV3cyBlbGVtZW50c1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGluZ1ZpZXdzLnJlZHVjZSgob25lQWxyZWFkeVdvcmtlZDogYW55LCBzY3JvbGxpbmdWaWV3OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0U2Nyb2xsUHJvcGVydHlWYWx1ZSA9IHRoaXMuZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3KTtcbiAgICAgIGlmIChzY3JvbGxpbmdWaWV3ICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHN0YXJ0U2Nyb2xsUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLmFicyhzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUgLSBwb3NpdGlvbik7XG5cbiAgICAgICAgLy8gVGhlIG1vdmVtZW50IHdlIG5lZWQgdG8gcGVyZm9ybSBpcyBsZXNzIHRoYW4gMnB4XG4gICAgICAgIC8vIFRoaXMgd2UgY29uc2lkZXIgYSBzbWFsbCBtb3ZlbWVudCB3aGljaCBzb21lIGJyb3dzZXIgbWF5IG5vdCBwZXJmb3JtIHdoZW5cbiAgICAgICAgLy8gY2hhbmdpbmcgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHByb3BlcnR5XG4gICAgICAgIC8vIFRodXMgaW4gdGhpcyBjYXNlcyB3ZSBkbyBub3Qgc3RvcCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiwgYWx0aG91Z2ggc2V0dGluZyB0aGVcbiAgICAgICAgLy8gc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgXCJmYWlsc1wiXG4gICAgICAgIGNvbnN0IGlzU21hbGxNb3ZlbWVudCA9IHNjcm9sbERpc3RhbmNlIDwgUGFnZVNjcm9sbENvbmZpZy5fbWluU2Nyb2xsRGlzdGFuY2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgc2Nyb2xsaW5nVmlldy5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsaW5nVmlldy5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0cnVlIG9mIHNldHRpbmcgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSB3b3JrZWRcbiAgICAgICAgLy8gV2UgY29uc2lkZXIgdGhhdCBpdCB3b3JrZWQgaWYgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBpcyBjbG9zZXIgdG8gdGhlXG4gICAgICAgIC8vIGRlc2lyZWQgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdGhhbiBiZWZvcmUgKGl0IG1pZ2h0IG5vdCBiZSBleGFjdGx5IHRoZSB2YWx1ZSB3ZVxuICAgICAgICAvLyBzZXQgZHVlIHRvIGRwaSBvciByb3VuZGluZyBpcnJlZ3VsYXJpdGllcylcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU21hbGxNb3ZlbWVudCB8fFxuICAgICAgICAgIHNjcm9sbERpc3RhbmNlID4gTWF0aC5hYnModGhpcy5nZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXcpIC0gcG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb25lQWxyZWFkeVdvcmtlZDtcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBmaXJpbmcgYSBhbmltYXRpb24gZmluaXNoIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSBXaGV0aGVyIHRoZSBhbmltYXRpb24gZmluaXNoZWQgYXQgdGhlIHRhcmdldCAodHJ1ZSkgb3IgZ290IGludGVycnVwdGVkIChmYWxzZSlcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcGFnZVNjcm9sbEZpbmlzaCkge1xuICAgICAgdGhpcy5fcGFnZVNjcm9sbEZpbmlzaC5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBpbnRlcnJ1cHQgbGlzdGVuZXJzIHRvIHRoZSBQYWdlU2Nyb2xsSW5zdGFuY2UgYm9keS4gVGhlIGdpdmVuIGludGVycnVwdFJlcG9ydGVyXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIGFueSBvZiB0aGUgYXR0YWNoZWQgZXZlbnRzIGlzIGZpcmVkLlxuICAgKlxuICAgKiBQb3NzaWJseSBhdHRhY2hlZCBpbnRlcnJ1cHRMaXN0ZW5lcnMgYXJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHRoZSBib2R5IGJlZm9yZSB0aGUgbmV3IG9uZSB3aWxsIGJlIGF0dGFjaGVkLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGF0dGFjaEludGVycnVwdExpc3RlbmVycyhpbnRlcnJ1cHRSZXBvcnRlcjogSW50ZXJydXB0UmVwb3J0ZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQpIHtcbiAgICAgIC8vIERldGFjaCBwb3NzaWJseSBleGlzdGluZyBsaXN0ZW5lcnMgZmlyc3RcbiAgICAgIHRoaXMuZGV0YWNoSW50ZXJydXB0TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHRoaXMuX2ludGVycnVwdExpc3RlbmVyID0gKGV2ZW50OiBFdmVudCk6IGFueSA9PiB7XG4gICAgICBpbnRlcnJ1cHRSZXBvcnRlci5yZXBvcnQoZXZlbnQsIHRoaXMpO1xuICAgIH07XG4gICAgUGFnZVNjcm9sbENvbmZpZy5faW50ZXJydXB0RXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5faW50ZXJydXB0TGlzdGVuZXIpXG4gICAgKTtcbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBib2R5IGFuZCBzdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzIHRoYXQgbWlnaHQgYmUgdHJlYXRlZCBhcyBcImFuaW1hdGlvblxuICAgKiBpbnRlcnJ1cHRcIiBldmVudHMuXG4gICAqL1xuICBwdWJsaWMgZGV0YWNoSW50ZXJydXB0TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2ludGVycnVwdExpc3RlbmVyKVxuICAgICk7XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKTogUGFnZVNjcm9sbFRhcmdldCB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbFRhcmdldDtcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbFNjcm9sbGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWxTY3JvbGxpbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjcm9sbGluZ1ZpZXdzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsaW5nVmlld3M7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0YXJ0U2Nyb2xsUG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhcnRTY3JvbGxQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCB0YXJnZXRTY3JvbGxQb3NpdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFyZ2V0U2Nyb2xsUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U2Nyb2xsUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0U2Nyb2xsUG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3RhbmNlVG9TY3JvbGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Rpc3RhbmNlVG9TY3JvbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzdGFuY2VUb1Njcm9sbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kaXN0YW5jZVRvU2Nyb2xsO1xuICB9XG5cbiAgZ2V0IGV4ZWN1dGlvbkR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbkR1cmF0aW9uO1xuICB9XG5cbiAgc2V0IGV4ZWN1dGlvbkR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9leGVjdXRpb25EdXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3BlZWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVhc2luZ0xvZ2ljKCk6IEVhc2luZ0xvZ2ljIHtcbiAgICByZXR1cm4gdGhpcy5fZWFzaW5nTG9naWM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVycnVwdGlibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVycnVwdGlibGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0YXJ0VGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXJ0VGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IGVuZFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VuZFRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5kVGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbmRUaW1lO1xuICB9XG5cbiAgcHVibGljIHNldCB0aW1lcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGltZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGltZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEludGVyZmFjZSBhIGxpc3RlbmVyIHNob3VsZCBpbXBsZW1lbnQgdG8gYmUgbm90aWZpZWQgYWJvdXQgcG9zc2libGUgaW50ZXJydXB0IGV2ZW50c1xuICogdGhhdCBoYXBwZW5lZCBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbiB3aGlsZSBhIHNjcm9sbCBhbmltYXRpb24gdGFrZXMgcGxhY2UuXG4gKlxuICogVGhlIFBhZ2VTY3JvbGxTZXJ2aWNlIHByb3ZpZGVzIGFuIGltcGxlbWVudGF0aW9uIHRvIGEgUGFnZVNjcm9sbEluc3RhbmNlIHRvIGJlIG5vdGlmaWVkXG4gKiBhYm91dCBzY3JvbGwgYW5pbWF0aW9uIGludGVycnVwdHMgYW5kIHN0b3AgcmVsYXRlZCBhbmltYXRpb25zLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJydXB0UmVwb3J0ZXIge1xuICByZXBvcnQ6IChldmVudDogRXZlbnQsIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKSA9PiBhbnk7XG59XG4iXX0=