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
var /**
 * Represents a scrolling action
 */
PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     */
    function PageScrollInstance(namespace, document) {
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
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollInstance.simpleInstance = /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
        });
    };
    //   public static newInstance(options: PageScrollOptions) {
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollInstance.newInstance = 
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        /** @type {?} */
        var pageScrollInstance = new PageScrollInstance(options.namespace, document);
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
    };
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param namespace Optional namespace to group scroll animations logically
     *
     **/
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
    PageScrollInstance.simpleDirectionInstance = /**
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
    function (document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     */
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
    PageScrollInstance.simpleInlineInstance = /**
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
    function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace: namespace,
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @deprecated Use {@link newInstance(options: PageScrollOptions)}
     */
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
    PageScrollInstance.simpleInlineDirectionInstance = /**
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
    function (document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     */
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
    PageScrollInstance.advancedInstance = /**
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
    function (document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: scrollingViews,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
            pageScrollOffset: pageScrollOffset,
            pageScrollInterruptible: pageScrollInterruptible,
            pageScrollEasingLogic: pageScrollEasingLogic,
            pageScrollDuration: pageScrollDuration,
            pageScrollFinishListener: pageScrollFinishListener,
        });
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    function () {
        // let scrollTargetElement: HTMLElement;
        /** @type {?} */
        var scrollTargetElement;
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
            var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                var accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                var theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                var parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                var parent_1 = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent_1)) {
                    if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent_1.offsetTop;
                        accumulatedParentsPos.left += parent_1.offsetLeft;
                    }
                    // Next iteration
                    parent_1 = parent_1.parentElement;
                    parentFound = parent_1 === this.scrollingViews[0];
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
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     */
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    function (position) {
        var _this = this;
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        function (oneAlreadyWorked, scrollingView) {
            /** @type {?} */
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                var isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!_this.verticalScrolling) {
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
                    scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     */
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            interruptReporter.report(event, _this);
        });
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.document.body.addEventListener(event, _this._interruptListener);
        }));
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    function () {
        var _this = this;
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.document.body.removeEventListener(event, _this._interruptListener);
        }));
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: /**
         * @return {?}
         */
        function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._targetScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._distanceToScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._executionDuration;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: /**
         * @return {?}
         */
        function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._endTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._timer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());
/**
 * Represents a scrolling action
 */
export { PageScrollInstance };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFFTCxnQkFBZ0IsR0FHakIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUscUJBQXFCLElBQUksSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTS9FLHVDQWdFQzs7Ozs7O0lBNURDLHFDQUFtQjs7Ozs7O0lBTW5CLHlDQUErQjs7Ozs7O0lBTS9CLDJDQUFzQzs7Ozs7SUFLdEMsc0NBQW1COzs7Ozs7SUFNbkIsOENBQTRCOzs7OztJQUs1Qiw0REFBMEM7Ozs7O0lBSzFDLDZDQUEwQjs7Ozs7SUFLMUIsb0RBQWtDOzs7OztJQUtsQyxrREFBb0M7Ozs7O0lBS3BDLCtDQUE0Qjs7Ozs7O0lBTTVCLDRDQUF5Qjs7Ozs7SUFLekIscURBQWlEOzs7OztBQU9uRDs7OztJQW1RRTs7Ozs7T0FLRztJQUNILDRCQUFZLFNBQWlCLEVBQUUsUUFBa0I7Ozs7O1FBblF6QyxlQUFVLEdBQVcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7O1FBVXhELHVCQUFrQixHQUFHLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDOztRQUVqRSxZQUFPLEdBQVcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7O1FBRXZELGNBQVMsR0FBVyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7O1FBSXJELGlCQUFZLEdBQWdCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDOztRQUVoRSxtQkFBYyxHQUFZLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDOztRQUtoRSxxQ0FBZ0MsR0FDdEMsZ0JBQWdCLENBQUMsc0NBQXND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Q0FBeUI7Ozs7O0lBRXpCLGdEQUFtQzs7Ozs7SUFFbkMseURBQTRDOzs7OztJQUk1QyxvQ0FBMkI7Ozs7Ozs7Ozs7QUE2ZDdCLHVDQUVDOzs7SUFEQyxtQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2ViYXN0aWFuZnVzcyBvbiAyOS4wOC4xNi5cbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRWFzaW5nTG9naWMsXG4gIFBhZ2VTY3JvbGxDb25maWcsXG4gIFBhZ2VTY3JvbGxUYXJnZXQsXG4gIFBhZ2VTY3JvbGxpbmdWaWV3cyxcbn0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuY29uZmlnJztcbmltcG9ydCB7IFBhZ2VTY3JvbGxVdGlsU2VydmljZSBhcyBVdGlsIH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwtdXRpbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBBbiBJbnRlcmZhY2Ugc3BlY2lmeWluZyB0aGUgcG9zc2libGUgb3B0aW9ucyB0byBiZSBwYXNzZWQgaW50byB0aGUgbmV3SW5zdGFuY2UoKSBmYWN0b3J5IG1ldGhvZFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVNjcm9sbE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IG9iamVjdCBvZiB0aGUgY3VycmVudCBhcHBcbiAgICovXG4gIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKipcbiAgICogQSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBET00gZWxlbWVudCB0byBzY3JvbGwgdG8uIEVpdGhlciBhIHN0cmluZyByZWZlcnJpbmcgdG8gYW5cbiAgICogb2JqZWN0IGlkIChgI3RhcmdldGApIG9yIGEgSFRNTEVsZW1lbnQgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQncyBET00gdHJlZS5cbiAgICovXG4gIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgSFRNTEVsZW1lbnRzIG9yIHRoZSBib2R5IG9iamVjdCB0aGF0IHNob3VsZCBiZSBtYW5pcHVsYXRlZCB3aGlsZSBwZXJmb3JtaW5nXG4gICAqIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKi9cbiAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXTtcblxuICAvKipcbiAgICogTmFtZXNwYWNlIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXG4gICAqL1xuICBuYW1lc3BhY2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhhdCBzY3JvbGwgYW5pbWF0aW9uIHNjcm9sbHMgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlKSBvclxuICAgKiBob3Jpem9udGFsIChmYWxzZSwgZGVmYXVsdCB2YWx1ZSlcbiAgICovXG4gIHZlcnRpY2FsU2Nyb2xsaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYW4gYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIGZvciBpbmxpbmUgc2Nyb2xsaW5ncyBzaG91bGQgYmUgYXBwbGllZFxuICAgKi9cbiAgYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9mZnNldCBvZiB0YXJnZXQgZWxlbWVudHMgbG9jYXRpb24gYW5kIHNjcm9sbCBsb2NhdGlvblxuICAgKi9cbiAgcGFnZVNjcm9sbE9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZVxuICAgKi9cbiAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZWFzaW5nIGxvZ2ljIHRvIGJlIHVzZWRcbiAgICovXG4gIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYz86IEVhc2luZ0xvZ2ljO1xuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3RcbiAgICovXG4gIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBzcGVlZCB0byBiZSB1c2VkIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbi4gT25seSB0YWtlblxuICAgKiBpbnRvIGFjY291bnQgb2Ygbm8gcGFnZVNjcm9sbER1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYWdlU2Nyb2xsU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0b3BzXG4gICAqL1xuICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNjcm9sbGluZyBhY3Rpb25cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgLyoqXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBzZXQgZHVyaW5nIGluc3RhbmNlIGNvbnN0cnVjdGlvbiBhbmQgZGVmYXVsdCB0byB0aGVpciBkZWZhdWx0cyBmcm9tIFBhZ2VTY3JvbGxDb25maWdcbiAgICovXG5cbiAgLyogQSBuYW1lc3BhY2UgdG8gXCJncm91cFwiIHNjcm9sbCBhbmltYXRpb25zIHRvZ2V0aGVyIGFuZCBzdG9wcGluZyBzb21lIGRvZXMgbm90IHN0b3Agb3RoZXJzICovXG4gIHByaXZhdGUgX25hbWVzcGFjZTogc3RyaW5nID0gUGFnZVNjcm9sbENvbmZpZy5fZGVmYXVsdE5hbWVzcGFjZTtcbiAgLyogVGhlIGRvY3VtZW50IGFsbCB0aGUgc2Nyb2xsaW5nIHRha2VzIHBsYWNlIGFuZCBzY3JvbGwgdGFyZ2V0cyBhcmUgbG9jYXRlZCBpbiAqL1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgLyogVGhlIERPTSBlbGVtZW50cyBvciBzaW1pbGFyIG5vZGVzIHdob3NlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHByb3BlcnR5IHdpbGwgYmUgbWFuaXB1bGF0ZWQgZHVyaW5nIHNjcm9sbGluZyAqL1xuICBwcml2YXRlIF9zY3JvbGxpbmdWaWV3czogUGFnZVNjcm9sbGluZ1ZpZXdzW107XG4gIHByaXZhdGUgX2lzSW5saW5lU2Nyb2xsaW5nOiBib29sZWFuO1xuICAvKiBUaGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgaW50byB0aGUgdmlld3BvcnQgKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0O1xuXG4gIC8qIFdoZXRoZXIgd2Ugc2Nyb2xsIHZlcnRpY2FsbHkgKHRydWUpIG9yIGhvcml6b250YWxseSAoZmFsc2UpICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsaW5nID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SXNWZXJ0aWNhbFNjcm9sbGluZztcbiAgLyogT2Zmc2V0IGluIHB4IHRoYXQgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RvcCBhYm92ZSB0aGF0IHRhcmdldCBlbGVtZW50ICovXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0U2Nyb2xsT2Zmc2V0O1xuICAvKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3QgKi9cbiAgcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlciA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdER1cmF0aW9uO1xuICAvKiBTcGVlZCBpbiBcInBpeGVscy9zZWNvbmRcIiB0byBiZSB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwcml2YXRlIF9zcGVlZDogbnVtYmVyO1xuICAvKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWFuaXB1bGF0ZSB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgb3ZlciB0aW1lICovXG4gIHByaXZhdGUgX2Vhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYyA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEVhc2luZ0xvZ2ljO1xuICAvKiBCb29sZWFuIHdoZXRoZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHN0b3Agb24gdXNlciBpbnRlcnJ1cHRpb24gb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdGlibGU6IGJvb2xlYW4gPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlO1xuICAvKiBUaGUgbGlzdGVuZXIgdGhhdCB0aGlzIHNjcm9sbCBpbnN0YW5jZSBhdHRhY2hlcyB0byB0aGUgYm9keSB0byBsaXN0ZW4gZm9yIGludGVycnVwdCBldmVudHNcbiAgICAgV2UncmUga2VlcGluZyBhIHJlZmVyZW5jZSB0byBpdCBzbyB3ZSBjYW4gcHJvcGVybHkgcmVtb3ZlIGl0IHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcyAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcbiAgLyogV2hldGhlciB0aGUgYWR2YW5kZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIGZvciBpbmxpbmUgc2Nyb2xsaW5nIHNob3VsZCBiZSB1c2VkICovXG4gIHByaXZhdGUgX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb246IGJvb2xlYW4gPVxuICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb247XG4gIC8qIEV2ZW50IGVtaXR0ZXIgdG8gbm90aWZ5IHRoZSB3b3JsZCBhYm91dCB0aGUgc2Nyb2xsaW5nICovXG4gIHByaXZhdGUgX3BhZ2VTY3JvbGxGaW5pc2g6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIHNldC9tYW5pcHVsYXRlZCBpZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdGFydHNcbiAgICovXG4gIC8qIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzICovXG4gIHByaXZhdGUgX3N0YXJ0U2Nyb2xsUG9zaXRpb24gPSAwO1xuICAvKiBUaGUgdGFyZ2V0IHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiBmb3IgdGhlIGFuaW1hdGlvbiAoYWthIFwidGhlIGZpbmFsIGRlc3RpbmF0aW9uXCIpICovXG4gIHByaXZhdGUgX3RhcmdldFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gIC8qIERpZmZlcmVuY2UgYmV0d2VlbiBzdGFydFNjcm9sbFBvc2l0aW9uIGFuZCB0YXJnZXRTY3JvbGxQb3NpdGlvbi4gUHJlLWNhbGN1bGF0ZWQgdG8gbWluaW1pemUgY29tcHV0YXRpb25zIGR1cmluZyBhbmltYXRpb24gKi9cbiAgcHJpdmF0ZSBfZGlzdGFuY2VUb1Njcm9sbDogbnVtYmVyO1xuICAvKiBUaGUgdGltZXN0YW1wIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMvZ290IHN0YXJ0ZWQgKi9cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXI7XG4gIC8qIFRoZSBlc3RpbWF0ZSBlbmQgdGltZSBvZiB0aGUgYW5pbWF0aW9uLCBjYWxjdWxhdGVkIGJ5IHN0YXJ0VGltZSArIGR1cmF0aW9uICovXG4gIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGR1cmF0aW9uIGEgc3RhcnRlZCBhbmltYXRpb24gdGFrZXMuIFRoaXMgbWF5IG1hdGNoIHRoZSBfZHVyYXRpb24gb3IgYmUgYWRqdXN0ZWQgZHVlIHRvIHRoZSBfc3BlZWQgb3B0aW9uICovXG4gIHByaXZhdGUgX2V4ZWN1dGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gIC8qIFdoZXRoZXIgYW4gaW50ZXJydXB0IGxpc3RlbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIG5vdCAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qIFJlZmVyZW5jZXMgdG8gdGhlIHRpbWVyIGluc3RhbmNlIHRoYXQgaXMgdXNlZCB0byBwZXJmb3JtIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHRvIGJlXG4gICAgIGFibGUgdG8gY2xlYXIgaXQgb24gYW5pbWF0aW9uIGVuZCovXG4gIHByaXZhdGUgX3RpbWVyOiBhbnkgPSBudWxsO1xuXG4gIC8qXG4gICAqIEZhY3RvcnkgbWV0aG9kcyBmb3IgaW5zdGFuY2UgY3JlYXRpb25cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmdcbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgbmFtZXNwYWNlLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gICBwdWJsaWMgc3RhdGljIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zKSB7XG4gIHB1YmxpYyBzdGF0aWMgbmV3SW5zdGFuY2Uob3B0aW9uczogUGFnZVNjcm9sbE9wdGlvbnMgfCBhbnkpIHtcbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLm5hbWVzcGFjZSkgfHwgb3B0aW9ucy5uYW1lc3BhY2UubGVuZ3RoIDw9IDApIHtcbiAgICAgIG9wdGlvbnMubmFtZXNwYWNlID0gUGFnZVNjcm9sbENvbmZpZy5fZGVmYXVsdE5hbWVzcGFjZTtcbiAgICB9XG4gICAgLy8gY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgPSBuZXcgUGFnZVNjcm9sbEluc3RhbmNlKG9wdGlvbnMubmFtZXNwYWNlLCBkb2N1bWVudCk7XG4gICAgY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnkgPSBuZXcgUGFnZVNjcm9sbEluc3RhbmNlKFxuICAgICAgb3B0aW9ucy5uYW1lc3BhY2UsXG4gICAgICBkb2N1bWVudFxuICAgICk7XG5cbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnNjcm9sbGluZ1ZpZXdzKSB8fCBvcHRpb25zLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9pc0lubGluZVNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxpbmdWaWV3cyA9IFtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBkb2N1bWVudC5ib2R5LFxuICAgICAgICBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUsXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2lzSW5saW5lU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsaW5nVmlld3MgPSBvcHRpb25zLnNjcm9sbGluZ1ZpZXdzO1xuICAgIH1cblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsVGFyZ2V0ID0gb3B0aW9ucy5zY3JvbGxUYXJnZXQ7XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy52ZXJ0aWNhbFNjcm9sbGluZykpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fdmVydGljYWxTY3JvbGxpbmcgPSBvcHRpb25zLnZlcnRpY2FsU2Nyb2xsaW5nO1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxPZmZzZXQpKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX29mZnNldCA9IG9wdGlvbnMucGFnZVNjcm9sbE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRWFzaW5nTG9naWMpKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2Vhc2luZ0xvZ2ljID0gb3B0aW9ucy5wYWdlU2Nyb2xsRWFzaW5nTG9naWM7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxEdXJhdGlvbikgJiZcbiAgICAgICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbFNwZWVkKVxuICAgICkge1xuICAgICAgLy8gTm8gZHVyYXRpb24gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLCBvbmx5IGluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIHNwZWVkIG9wdGlvbiB3aGVuIHByZXNlbnRcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc3BlZWQgPSBvcHRpb25zLnBhZ2VTY3JvbGxTcGVlZDtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxEdXJhdGlvbikpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZHVyYXRpb24gPSBvcHRpb25zLnBhZ2VTY3JvbGxEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIpKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3BhZ2VTY3JvbGxGaW5pc2ggPSBvcHRpb25zLnBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2ludGVycnVwdGlibGUgPVxuICAgICAgb3B0aW9ucy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSB8fFxuICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSkgJiZcbiAgICAgICAgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SW50ZXJydXB0aWJsZSk7XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gPVxuICAgICAgb3B0aW9ucy5hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uIHx8XG4gICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLmFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24pICYmXG4gICAgICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24pO1xuXG4gICAgcmV0dXJuIHBhZ2VTY3JvbGxJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQYWdlU2Nyb2xsSW5zdGFuY2UgcmVwcmVzZW50aW5nIGEgc2Nyb2xsIGFuaW1hdGlvbiBvbiB0aGUgZG9jdW1lbnRzIGJvZHkuXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKiovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlRGlyZWN0aW9uSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICB2ZXJ0aWNhbFNjcm9sbGluZzogYm9vbGVhbixcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmdcbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgdmVydGljYWxTY3JvbGxpbmcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUGFnZVNjcm9sbEluc3RhbmNlIHJlcHJlc2VudGluZyBhIHNjcm9sbCBhbmltYXRpb24gdG8gdGhlIHRhcmdldCBlbGVtZW50IHdoZXJlIHRoZSBzY3JvbGxpbmdWaWV3XG4gICAqIGVsZW1lbnRzIGdldCBzY3JvbGxlZCAobGlrZSBhIGRpdiBjb250YWluZXIgd2l0aCBmaXhlZCBoZWlnaHQsIHJlc3VsdGluZyBpbiBzY3JvbGxiYXJzIGluIGl0KS5cbiAgICpcbiAgICogTWFrZSBzdXJlIHRoYXQgdGhlIHNjcm9sbFRhcmdldCBpcyBsb2NhdGVkIGluc2lkZSB0aGUgc2Nyb2xsaW5nVmlldyBpbiB0aGUgRE9NIGhpZXJhcmNoeSwgb3RoZXJ3aXNlIHRoZVxuICAgKiBzY3JvbGxpbmdWaWV3IHdpbGwgYmUgc2Nyb2xsZWQgdG8gYW4gYXBwYXJlbnRseSBhcmJpdHJhcnkgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBzY3JvbGxpbmdWaWV3IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbmxpbmVJbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIHNjcm9sbGluZ1ZpZXc6IFBhZ2VTY3JvbGxpbmdWaWV3cyxcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmdcbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgc2Nyb2xsaW5nVmlld3M6IFtzY3JvbGxpbmdWaWV3XSxcbiAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgbmFtZXNwYWNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBzY3JvbGxpbmdWaWV3IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkXG4gICAqIEBwYXJhbSB2ZXJ0aWNhbFNjcm9sbGluZyB3aGV0aGVyIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHBlcmZvcm1lZCBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUsIGRlZmF1bHQpIG9yIGhvcml6b250YWwgKGZhbHNlKVxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBuZXdJbnN0YW5jZShvcHRpb25zOiBQYWdlU2Nyb2xsT3B0aW9ucyl9XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZUlubGluZURpcmVjdGlvbkluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsaW5nVmlldzogUGFnZVNjcm9sbGluZ1ZpZXdzLFxuICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiBib29sZWFuLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBzY3JvbGxpbmdWaWV3czogW3Njcm9sbGluZ1ZpZXddLFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgdmVydGljYWxTY3JvbGxpbmcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXdzIFRoZSBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZC4gTnVsbCB0byB1c2UgdGhlIGRlZmF1bHQgZWxlbWVudHMgb2YgZG9jdW1lbnQgYW5kIGJvZHkuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKiBAcGFyYW0gdmVydGljYWxTY3JvbGxpbmcgd2hldGhlciB0aGUgc2Nyb2xsaW5nIHNob3VsZCBiZSBwZXJmb3JtZWQgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlLCBkZWZhdWx0KSBvciBob3Jpem9udGFsIChmYWxzZSlcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxPZmZzZXQgVGhlIG9mZnNldCB0byBiZSBhdHRhY2hlZCB0byB0aGUgdG9wIG9mIHRoZSB0YXJnZXQgZWxlbWVudCBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbC91bmRlZmluZWQgdG8gdXNlIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlIFdoZXRoZXIgdGhpcyBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBiZSBpbnRlcnJ1cHRpYmxlLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bGwvdW5kZWZpbmVkIGZvciBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsRWFzaW5nTG9naWMgRWFzaW5nIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIG1hbmlwdWxhdGluZyB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyIHRpbWUuIE51bGwvdW5kZWZpbmVkIGZvciBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsRHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0aGUgYW5pbWF0aW9uIHNob3VsZCBsYXN0LlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWxsL3VuZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyIExpc3RlbmVyIHRvIGJlIGNhbGxlZCB0byBub3RpZnkgb3RoZXIgcGFydHMgb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgdGhlIHNjcm9sbCBhbmltYXRpb24gaGFzIGZpbmlzaGVcbiAgICpcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYWR2YW5jZWRJbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIHNjcm9sbGluZ1ZpZXdzPzogUGFnZVNjcm9sbGluZ1ZpZXdzW10sXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nLFxuICAgIHZlcnRpY2FsU2Nyb2xsaW5nPzogYm9vbGVhbixcbiAgICBwYWdlU2Nyb2xsT2Zmc2V0PzogbnVtYmVyLFxuICAgIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlPzogYm9vbGVhbixcbiAgICBwYWdlU2Nyb2xsRWFzaW5nTG9naWM/OiBFYXNpbmdMb2dpYyxcbiAgICBwYWdlU2Nyb2xsRHVyYXRpb24/OiBudW1iZXIsXG4gICAgcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyPzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG4gICk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgIHNjcm9sbGluZ1ZpZXdzLFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgdmVydGljYWxTY3JvbGxpbmcsXG4gICAgICBwYWdlU2Nyb2xsT2Zmc2V0LFxuICAgICAgcGFnZVNjcm9sbEludGVycnVwdGlibGUsXG4gICAgICBwYWdlU2Nyb2xsRWFzaW5nTG9naWMsXG4gICAgICBwYWdlU2Nyb2xsRHVyYXRpb24sXG4gICAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBjb25zdHJ1Y3RvciwgcmVxdWlyZXMgdGhlIHByb3BlcnRpZXMgYXNzdW1lZCB0byBiZSB0aGUgYmFyZSBtaW5pbXVtLlxuICAgKiBVc2UgdGhlIGZhY3RvcnkgbWV0aG9kcyB0byBjcmVhdGUgaW5zdGFuY2VzOlxuICAgKiAgICAgIHtAbGluayBQYWdlU2Nyb2xsSW5zdGFuY2Ujc2ltcGxlSW5zdGFuY2V9XG4gICAqICAgICAge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZSNuZXdJbnN0YW5jZX1cbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWVzcGFjZTogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgcHVibGljIGdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldzogYW55KTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMudmVydGljYWxTY3JvbGxpbmcpIHtcbiAgICAgIHJldHVybiBzY3JvbGxpbmdWaWV3LnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIHJldHVybiBzY3JvbGxpbmdWaWV3LnNjcm9sbFRvcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHRoZSBleGFjdCBsb2NhdGlvbiBvZiB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnQuXG4gICAqXG4gICAqIEV4dHJhY3QgdGhlIHNjcm9sbFRhcmdldCBIVE1MRWxlbWVudCBmcm9tIHRoZSBnaXZlbiBQYWdlU2Nyb2xsVGFyZ2V0IG9iamVjdC4gVGhlIGxhdHRlciBvbmUgbWF5IGJlXG4gICAqIGEgc3RyaW5nIGxpa2UgXCIjaGVhZGluZzJcIiwgdGhlbiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50IGZvciB0aGF0IGlkLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGV4dHJhY3RTY3JvbGxUYXJnZXRQb3NpdGlvbigpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgLy8gbGV0IHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGxldCBzY3JvbGxUYXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IGFueTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3Njcm9sbFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjcm9sbFRhcmdldEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCg8c3RyaW5nPnRoaXMuX3Njcm9sbFRhcmdldCkuc3Vic3RyKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9zY3JvbGxUYXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRhcmdldEVsZW1lbnQgPT09IG51bGwgfHwgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTY3JvbGwgdGFyZ2V0IG5vdCBmb3VuZFxuICAgICAgcmV0dXJuIHsgdG9wOiBOYU4sIGxlZnQ6IE5hTiB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0lubGluZVNjcm9sbGluZykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB7IHRvcDogc2Nyb2xsVGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AsIGxlZnQ6IHNjcm9sbFRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdCB9O1xuICAgICAgaWYgKHRoaXMuX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gJiYgdGhpcy5zY3JvbGxpbmdWaWV3cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0ZWRQYXJlbnRzUG9zID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgLy8gbm90IG5hbWVkIHdpbmRvdyB0byBtYWtlIHN1cmUgd2UncmUgbm90IGdldHRpbmcgdGhlIGdsb2JhbCB3aW5kb3cgdmFyaWFibGUgYnkgYWNjaWRlbnRcbiAgICAgICAgY29uc3QgdGhlV2luZG93ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICBsZXQgcGFyZW50Rm91bmQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTdGFydCBwYXJlbnQgaXMgdGhlIGltbWVkaWF0ZSBwYXJlbnRcbiAgICAgICAgLy8gbGV0IHBhcmVudCA9IHNjcm9sbFRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHBhcmVudDogYW55ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdXB3YXJkcyBhbGwgcGFyZW50c1xuICAgICAgICB3aGlsZSAoIXBhcmVudEZvdW5kICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhcmVudCkpIHtcbiAgICAgICAgICBpZiAodGhlV2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRlZFBhcmVudHNQb3MudG9wICs9IHBhcmVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdCArPSBwYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTmV4dCBpdGVyYXRpb25cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBwYXJlbnRGb3VuZCA9IHBhcmVudCA9PT0gdGhpcy5zY3JvbGxpbmdWaWV3c1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Rm91bmQpIHtcbiAgICAgICAgICAvLyBPbmx5IHVzZSB0aGUgcmVzdWx0cyBpZiB3ZSBmb3VuZCB0aGUgcGFyZW50LCBvdGhlcndpc2Ugd2UgYWNjdW11bGF0ZWQgdG9vIG11Y2ggYW55d2F5XG4gICAgICAgICAgcG9zaXRpb24udG9wICs9IGFjY3VtdWxhdGVkUGFyZW50c1Bvcy50b3A7XG4gICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5fbG9nTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZmluZCBuZXN0ZWQgc2Nyb2xsaW5nIHRhcmdldHMgcGFyZW50IScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmV4dHJhY3RFbGVtZW50UG9zaXRpb24odGhpcy5kb2N1bWVudCwgc2Nyb2xsVGFyZ2V0RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKiBUaGlzIGF1dG9tYXRpY2FsbHkgdGFrZXMgdGhlIG9mZnNldCBsb2NhdGlvbiBvZiB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lci9zY3JvbGxpbmcgdmlld1xuICAgKiBpbnRvIGFjY291bnQgKGZvciBuZXN0ZWQvaW5saW5lIHNjcm9sbGluZykuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0Q3VycmVudE9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJzY3JvbGxUb3BcIiBvciBcInNjcm9sbExlZnRcIiBwcm9wZXJ0eSBmb3IgYWxsIHNjcm9sbGluZ1ZpZXdzIHRvIHRoZSBwcm92aWRlZCB2YWx1ZVxuICAgKiBAcmV0dXJuIHRydWUgaWYgYXQgbGVhc3QgZm9yIG9uZSBTY3JvbGxUb3BTb3VyY2UgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIGNvdWxkIGJlIHNldCBhbmQgaXQga2VwdCB0aGUgbmV3IHZhbHVlLlxuICAgKiAgICAgICAgICBmYWxzZSBpZiBpdCBmYWlsZWQgZm9yIGFsbCBTY3JvbGxpbmdWaWV3cywgbWVhbmluZyB0aGF0IHdlIHNob3VsZCBzdG9wIHRoZSBhbmltYXRpb25cbiAgICogICAgICAgICAgKHByb2JhYmx5IGJlY2F1c2Ugd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsaW5nIHJlZ2lvbilcbiAgICovXG4gIHB1YmxpYyBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2xvZ0xldmVsID49IDUpIHtcbiAgICAgIGNvbnNvbGUud2FybignU2Nyb2xsIFBvc2l0aW9uOiAnICsgcG9zaXRpb24pO1xuICAgIH1cbiAgICAvLyBTZXQgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB0byBhbGwgc2Nyb2xsaW5nVmlld3MgZWxlbWVudHNcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxpbmdWaWV3cy5yZWR1Y2UoKG9uZUFscmVhZHlXb3JrZWQ6IGFueSwgc2Nyb2xsaW5nVmlldzogYW55KSA9PiB7XG4gICAgICBjb25zdCBzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUgPSB0aGlzLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldyk7XG4gICAgICBpZiAoc2Nyb2xsaW5nVmlldyAmJiAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlIC0gcG9zaXRpb24pO1xuXG4gICAgICAgIC8vIFRoZSBtb3ZlbWVudCB3ZSBuZWVkIHRvIHBlcmZvcm0gaXMgbGVzcyB0aGFuIDJweFxuICAgICAgICAvLyBUaGlzIHdlIGNvbnNpZGVyIGEgc21hbGwgbW92ZW1lbnQgd2hpY2ggc29tZSBicm93c2VyIG1heSBub3QgcGVyZm9ybSB3aGVuXG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwcm9wZXJ0eVxuICAgICAgICAvLyBUaHVzIGluIHRoaXMgY2FzZXMgd2UgZG8gbm90IHN0b3AgdGhlIHNjcm9sbCBhbmltYXRpb24sIGFsdGhvdWdoIHNldHRpbmcgdGhlXG4gICAgICAgIC8vIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIFwiZmFpbHNcIlxuICAgICAgICBjb25zdCBpc1NtYWxsTW92ZW1lbnQgPSBzY3JvbGxEaXN0YW5jZSA8IFBhZ2VTY3JvbGxDb25maWcuX21pblNjcm9sbERpc3RhbmNlO1xuXG4gICAgICAgIGlmICghdGhpcy52ZXJ0aWNhbFNjcm9sbGluZykge1xuICAgICAgICAgIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBvZiBzZXR0aW5nIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgd29ya2VkXG4gICAgICAgIC8vIFdlIGNvbnNpZGVyIHRoYXQgaXQgd29ya2VkIGlmIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgaXMgY2xvc2VyIHRvIHRoZVxuICAgICAgICAvLyBkZXNpcmVkIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHRoYW4gYmVmb3JlIChpdCBtaWdodCBub3QgYmUgZXhhY3RseSB0aGUgdmFsdWUgd2VcbiAgICAgICAgLy8gc2V0IGR1ZSB0byBkcGkgb3Igcm91bmRpbmcgaXJyZWd1bGFyaXRpZXMpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1NtYWxsTW92ZW1lbnQgfHxcbiAgICAgICAgICBzY3JvbGxEaXN0YW5jZSA+IE1hdGguYWJzKHRoaXMuZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3KSAtIHBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9uZUFscmVhZHlXb3JrZWQ7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZmlyaW5nIGEgYW5pbWF0aW9uIGZpbmlzaCBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgV2hldGhlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVkIGF0IHRoZSB0YXJnZXQgKHRydWUpIG9yIGdvdCBpbnRlcnJ1cHRlZCAoZmFsc2UpXG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhZ2VTY3JvbGxGaW5pc2gpIHtcbiAgICAgIHRoaXMuX3BhZ2VTY3JvbGxGaW5pc2guZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgaW50ZXJydXB0IGxpc3RlbmVycyB0byB0aGUgUGFnZVNjcm9sbEluc3RhbmNlIGJvZHkuIFRoZSBnaXZlbiBpbnRlcnJ1cHRSZXBvcnRlclxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiBhbnkgb2YgdGhlIGF0dGFjaGVkIGV2ZW50cyBpcyBmaXJlZC5cbiAgICpcbiAgICogUG9zc2libHkgYXR0YWNoZWQgaW50ZXJydXB0TGlzdGVuZXJzIGFyZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSB0aGUgYm9keSBiZWZvcmUgdGhlIG5ldyBvbmUgd2lsbCBiZSBhdHRhY2hlZC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBhdHRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoaW50ZXJydXB0UmVwb3J0ZXI6IEludGVycnVwdFJlcG9ydGVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKSB7XG4gICAgICAvLyBEZXRhY2ggcG9zc2libHkgZXhpc3RpbmcgbGlzdGVuZXJzIGZpcnN0XG4gICAgICB0aGlzLmRldGFjaEludGVycnVwdExpc3RlbmVycygpO1xuICAgIH1cbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lciA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgaW50ZXJydXB0UmVwb3J0ZXIucmVwb3J0KGV2ZW50LCB0aGlzKTtcbiAgICB9O1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2ludGVycnVwdExpc3RlbmVyKVxuICAgICk7XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYm9keSBhbmQgc3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cyB0aGF0IG1pZ2h0IGJlIHRyZWF0ZWQgYXMgXCJhbmltYXRpb25cbiAgICogaW50ZXJydXB0XCIgZXZlbnRzLlxuICAgKi9cbiAgcHVibGljIGRldGFjaEludGVycnVwdExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT5cbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcilcbiAgICApO1xuICAgIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICBnZXQgc2Nyb2xsVGFyZ2V0KCk6IFBhZ2VTY3JvbGxUYXJnZXQge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxUYXJnZXQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxTY3JvbGxpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsaW5nO1xuICB9XG5cbiAgcHVibGljIGdldCBzY3JvbGxpbmdWaWV3cygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGluZ1ZpZXdzO1xuICB9XG5cbiAgcHVibGljIHNldCBzdGFydFNjcm9sbFBvc2l0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXJ0U2Nyb2xsUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRTY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGFyZ2V0U2Nyb2xsUG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFNjcm9sbFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhcmdldFNjcm9sbFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCBkaXN0YW5jZVRvU2Nyb2xsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kaXN0YW5jZVRvU2Nyb2xsID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc3RhbmNlVG9TY3JvbGwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzdGFuY2VUb1Njcm9sbDtcbiAgfVxuXG4gIGdldCBleGVjdXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25EdXJhdGlvbjtcbiAgfVxuXG4gIHNldCBleGVjdXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uRHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgcHVibGljIGdldCBlYXNpbmdMb2dpYygpOiBFYXNpbmdMb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vhc2luZ0xvZ2ljO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcnJ1cHRpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnJ1cHRpYmxlO1xuICB9XG5cbiAgcHVibGljIHNldCBzdGFydFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBlbmRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVuZFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RpbWVyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRpbWVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVyO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBJbnRlcmZhY2UgYSBsaXN0ZW5lciBzaG91bGQgaW1wbGVtZW50IHRvIGJlIG5vdGlmaWVkIGFib3V0IHBvc3NpYmxlIGludGVycnVwdCBldmVudHNcbiAqIHRoYXQgaGFwcGVuZWQgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb24gd2hpbGUgYSBzY3JvbGwgYW5pbWF0aW9uIHRha2VzIHBsYWNlLlxuICpcbiAqIFRoZSBQYWdlU2Nyb2xsU2VydmljZSBwcm92aWRlcyBhbiBpbXBsZW1lbnRhdGlvbiB0byBhIFBhZ2VTY3JvbGxJbnN0YW5jZSB0byBiZSBub3RpZmllZFxuICogYWJvdXQgc2Nyb2xsIGFuaW1hdGlvbiBpbnRlcnJ1cHRzIGFuZCBzdG9wIHJlbGF0ZWQgYW5pbWF0aW9ucy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVycnVwdFJlcG9ydGVyIHtcbiAgcmVwb3J0OiAoZXZlbnQ6IEV2ZW50LCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSkgPT4gYW55O1xufVxuIl19