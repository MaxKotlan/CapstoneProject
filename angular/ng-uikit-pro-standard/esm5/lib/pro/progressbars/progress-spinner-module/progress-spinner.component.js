/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer2, Directive } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
// TODO(josephperrott): Benchpress tests.
/**
 * A single degree in radians.
 * @type {?}
 */
var DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
var startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
var MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MdProgressSpinnerCssMatStylerDirective = /** @class */ (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    MdProgressSpinnerCssMatStylerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSpinners], mat-progress-spinner'
                },] }
    ];
    MdProgressSpinnerCssMatStylerDirective.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
    };
    return MdProgressSpinnerCssMatStylerDirective;
}());
export { MdProgressSpinnerCssMatStylerDirective };
if (false) {
    /** @type {?} */
    MdProgressSpinnerCssMatStylerDirective.prototype.true;
}
/**
 * <md-progress-spinner> component.
 */
var MdProgressSpinnerComponent = /** @class */ (function () {
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * The id of the last requested animation.
         */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        /**
        * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
        * because voiceover does not report the progress indicator as indeterminate if the aria min
        * and/or max value are number values.
        */
        get: /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._interdeterminateInterval;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} interval
         * @return {?}
         */
        function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Clean up any animations that were running.
    */
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype.ngOnDestroy = /**
     * Clean up any animations that were running.
     * @return {?}
     */
    function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        /** The color of the progress-spinner. Can be primary, accent, or warn. */
        get: /**
         * The color of the progress-spinner. Can be primary, accent, or warn.
         * @return {?}
         */
        function () { return this._color; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
        get: /**
         * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
            return;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v != null && this.mode === 'determinate') {
                /** @type {?} */
                var newValue = clamp(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        /**
        * Mode of the progress circle
        *
        * Input must be one of the values from ProgressMode, defaults to 'determinate'.
        * mode is bound to the host as the attribute host.
        */
        get: /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode !== this._mode) {
                if (mode === 'indeterminate') {
                    this._startIndeterminateAnimation();
                }
                else {
                    this._cleanupIndeterminateAnimation();
                    this._animateCircle(0, this._value);
                }
                this._mode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Animates the circle from one percentage value to another.
    *
    * @param animateFrom The percentage of the circle filled starting the animation.
    * @param animateTo The percentage of the circle filled ending the animation.
    * @param ease The easing function to manage the pace of change in the animation.
    * @param duration The length of time to show the animation, in milliseconds.
    * @param rotation The starting angle of the circle fill, with 0° represented at the top center
    *    of the circle.
    */
    /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._animateCircle = /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        /** @type {?} */
        var id = ++this._lastAnimationId;
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            var animation_1 = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            });
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
    * Starts the indeterminate animation interval, if it is not already running.
    */
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rotationStartPoint = 0;
        /** @type {?} */
        var start = startIndeterminate;
        /** @type {?} */
        var end = endIndeterminate;
        /** @type {?} */
        var duration = DURATION_INDETERMINATE;
        /** @type {?} */
        var animate = (/**
         * @return {?}
         */
        function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            var temp = start;
            start = -end;
            end = -temp;
        });
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                }));
            }
        }
    };
    /**
    * Removes interval, ending the animation.
    */
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    function () {
        this.interdeterminateInterval = null;
    };
    /**
    * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
    * DOM attribute on the `<path>`.
    */
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._renderArc = /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        var path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    /**
    * Updates the color of the progress-spinner by adding the new palette class to the element
    * and removing the old one.
    */
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._updateColor = /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    /** Sets the given palette class on the component element. */
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._setElementColor = /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    function (color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, "mat-" + color);
            }
        }
    };
    MdProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-Spinners, mat-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdProgressSpinnerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdProgressSpinnerComponent.propDecorators = {
        platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
        color: [{ type: Input }],
        value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
        mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
    };
    return MdProgressSpinnerComponent;
}());
export { MdProgressSpinnerComponent };
if (false) {
    /**
     * The id of the last requested animation.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._lastAnimationId;
    /**
     * The id of the indeterminate interval.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._interdeterminateInterval;
    /**
     * The SVG <path> node that is used to draw the circle.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._path;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._color;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._renderer;
}
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
var MdSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MdSpinnerComponent, _super);
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    /**
     * @return {?}
     */
    MdSpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    MdSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
                }] }
    ];
    /** @nocollapse */
    MdSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    MdSpinnerComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
export { MdSpinnerComponent };
if (false) {
    /** @type {?} */
    MdSpinnerComponent.prototype.true;
}
/**
* Module functions.
*/
/**
 * Clamps a value to be between 0 and 100.
 * @param {?} v
 * @return {?}
 */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 * @param {?} radius
 * @param {?} pathRadius
 * @param {?} angleInDegrees
 * @return {?}
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    /** @type {?} */
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    /** @type {?} */
    var time = currentTime / duration;
    /** @type {?} */
    var timeCubed = Math.pow(time, 3);
    /** @type {?} */
    var timeQuad = Math.pow(time, 4);
    /** @type {?} */
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param {?} currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param {?} rotation The starting point of the circle with 0 being the 0 degree point.
 * @return {?} A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    /** @type {?} */
    var startPoint = rotation || 0;
    /** @type {?} */
    var radius = 50;
    /** @type {?} */
    var pathRadius = 40;
    /** @type {?} */
    var startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    var endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    var start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    var arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLHVCQUF1QixFQUV2QixLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQUUsU0FBUyxFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBSTlDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRzs7Ozs7SUFFakMsc0JBQXNCLEdBQUcsR0FBRzs7Ozs7SUFFNUIsb0JBQW9CLEdBQUcsR0FBRzs7Ozs7SUFFMUIsa0JBQWtCLEdBQUcsQ0FBQzs7Ozs7SUFFdEIsZ0JBQWdCLEdBQUcsRUFBRTs7O0lBRXJCLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRzs7Ozs7QUFZOUI7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUNBQXFDO2lCQUNsRDs7O3VCQUVJLFdBQVcsU0FBQyw0QkFBNEI7O0lBQzdDLDZDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRlksc0NBQXNDOzs7SUFDL0Msc0RBQXFEOzs7OztBQU96RDtJQW1HSSxvQ0FDWSxPQUFlLEVBQ2YsV0FBdUIsRUFDdkIsU0FBb0IsRUFDUCxVQUF5QjtRQUh0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FB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RCxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEdBQUcsVUFBVSxDQUFDOztRQUNqRSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNqQyxZQUFvQjtJQUV4QixJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7UUFDZCxZQUFZLEdBQUcsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQztTQUFNO1FBQ0gsWUFBWSxHQUFHLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsT0FBTyxNQUFJLEtBQUssU0FBSSxVQUFVLFNBQUksVUFBVSxXQUFNLFlBQVksU0FBSSxRQUFRLFNBQUksR0FBSyxDQUFDO0FBQ3hGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgSW5wdXQsXG4gICAgRWxlbWVudFJlZixcbiAgICBOZ1pvbmUsXG4gICAgUmVuZGVyZXIyLCBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBCZW5jaHByZXNzIHRlc3RzLlxuXG4vKiogQSBzaW5nbGUgZGVncmVlIGluIHJhZGlhbnMuICovXG5jb25zdCBERUdSRUVfSU5fUkFESUFOUyA9IE1hdGguUEkgLyAxODA7XG4vKiogRHVyYXRpb24gb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLiAqL1xuY29uc3QgRFVSQVRJT05fSU5ERVRFUk1JTkFURSA9IDY2Nztcbi8qKiBEdXJhdGlvbiBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uICovXG5jb25zdCBEVVJBVElPTl9ERVRFUk1JTkFURSA9IDIyNTtcbi8qKiBTdGFydCBhbmltYXRpb24gdmFsdWUgb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uICovXG5jb25zdCBzdGFydEluZGV0ZXJtaW5hdGUgPSAzO1xuLyoqIEVuZCBhbmltYXRpb24gdmFsdWUgb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uICovXG5jb25zdCBlbmRJbmRldGVybWluYXRlID0gODA7XG4vKiBNYXhpbXVtIGFuZ2xlIGZvciB0aGUgYXJjLiBUaGUgYW5nbGUgY2FuJ3QgYmUgZXhhY3RseSAzNjAsIGJlY2F1c2UgdGhlIGFyYyBiZWNvbWVzIGhpZGRlbi4gKi9cbmNvbnN0IE1BWF9BTkdMRSA9IDM1OS45OSAvIDEwMDtcblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSc7XG5cblxudHlwZSBFYXNpbmdGbiA9IChjdXJyZW50VGltZTogbnVtYmVyLCBzdGFydFZhbHVlOiBudW1iZXIsXG4gICAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSA9PiBudW1iZXI7XG5cbi8qKlxuKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcgdG8gdGhpcyBzZWxlY3Rvci5cbiogQGRvY3MtcHJpdmF0ZVxuKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21kYlNwaW5uZXJzXSwgbWF0LXByb2dyZXNzLXNwaW5uZXInXG59KVxuZXhwb3J0IGNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyQ3NzTWF0U3R5bGVyRGlyZWN0aXZlIHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1wcm9ncmVzcy1zcGlubmVyJykgdHJ1ZTogYW55O1xufVxuXG5cbi8qKlxuKiA8bWQtcHJvZ3Jlc3Mtc3Bpbm5lcj4gY29tcG9uZW50LlxuKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWRiLVNwaW5uZXJzLCBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgbGFzdCByZXF1ZXN0ZWQgYW5pbWF0aW9uLiAqL1xuICAgIHByaXZhdGUgX2xhc3RBbmltYXRpb25JZCA9IDA7XG5cbiAgICAvKiogVGhlIGlkIG9mIHRoZSBpbmRldGVybWluYXRlIGludGVydmFsLiAqL1xuICAgIHByaXZhdGUgX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbDogYW55O1xuXG4gICAgLyoqIFRoZSBTVkcgPHBhdGg+IG5vZGUgdGhhdCBpcyB1c2VkIHRvIGRyYXcgdGhlIGNpcmNsZS4gKi9cbiAgICBwcml2YXRlIF9wYXRoOiBTVkdQYXRoRWxlbWVudDtcblxuICAgIHByaXZhdGUgX21vZGU6IFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAqIFZhbHVlcyBmb3IgYXJpYSBtYXggYW5kIG1pbiBhcmUgb25seSBkZWZpbmVkIGFzIG51bWJlcnMgd2hlbiBpbiBhIGRldGVybWluYXRlIG1vZGUuICBXZSBkbyB0aGlzXG4gICAgKiBiZWNhdXNlIHZvaWNlb3ZlciBkb2VzIG5vdCByZXBvcnQgdGhlIHByb2dyZXNzIGluZGljYXRvciBhcyBpbmRldGVybWluYXRlIGlmIHRoZSBhcmlhIG1pblxuICAgICogYW5kL29yIG1heCB2YWx1ZSBhcmUgbnVtYmVyIHZhbHVlcy5cbiAgICAqL1xuICAgIGdldCBfYXJpYVZhbHVlTWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IF9hcmlhVmFsdWVNYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyAxMDAgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgZ2V0IGludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbDtcbiAgICB9XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBzZXQgaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKGludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKTtcbiAgICAgICAgdGhpcy5faW50ZXJkZXRlcm1pbmF0ZUludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDbGVhbiB1cCBhbnkgYW5pbWF0aW9ucyB0aGF0IHdlcmUgcnVubmluZy5cbiAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIC8qKiBUaGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIuIENhbiBiZSBwcmltYXJ5LCBhY2NlbnQsIG9yIHdhcm4uICovXG4gICAgQElucHV0KClcbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2NvbG9yOyB9XG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlLiBJdCBpcyBib3VuZCB0byB0aGUgaG9zdCBhcyB0aGUgYXR0cmlidXRlIGFyaWEtdmFsdWVub3cuICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2OiBudW1iZXIgfCBhbnkpIHtcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY2xhbXAodik7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKHRoaXMudmFsdWUgfHwgMCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogTW9kZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlXG4gICAgKlxuICAgICogSW5wdXQgbXVzdCBiZSBvbmUgb2YgdGhlIHZhbHVlcyBmcm9tIFByb2dyZXNzTW9kZSwgZGVmYXVsdHMgdG8gJ2RldGVybWluYXRlJy5cbiAgICAqIG1vZGUgaXMgYm91bmQgdG8gdGhlIGhvc3QgYXMgdGhlIGF0dHJpYnV0ZSBob3N0LlxuICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IG1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBzZXQgbW9kZShtb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlKSB7XG4gICAgICAgIGlmIChtb2RlICE9PSB0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRJbmRldGVybWluYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXBJbmRldGVybWluYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSgwLCB0aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZD86IHN0cmluZyB8IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBBbmltYXRlcyB0aGUgY2lyY2xlIGZyb20gb25lIHBlcmNlbnRhZ2UgdmFsdWUgdG8gYW5vdGhlci5cbiAgICAqXG4gICAgKiBAcGFyYW0gYW5pbWF0ZUZyb20gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNpcmNsZSBmaWxsZWQgc3RhcnRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICAqIEBwYXJhbSBhbmltYXRlVG8gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNpcmNsZSBmaWxsZWQgZW5kaW5nIHRoZSBhbmltYXRpb24uXG4gICAgKiBAcGFyYW0gZWFzZSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1hbmFnZSB0aGUgcGFjZSBvZiBjaGFuZ2UgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgbGVuZ3RoIG9mIHRpbWUgdG8gc2hvdyB0aGUgYW5pbWF0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAgKiBAcGFyYW0gcm90YXRpb24gVGhlIHN0YXJ0aW5nIGFuZ2xlIG9mIHRoZSBjaXJjbGUgZmlsbCwgd2l0aCAwwrAgcmVwcmVzZW50ZWQgYXQgdGhlIHRvcCBjZW50ZXJcbiAgICAqICAgIG9mIHRoZSBjaXJjbGUuXG4gICAgKi9cbiAgICBwcml2YXRlIF9hbmltYXRlQ2lyY2xlKGFuaW1hdGVGcm9tOiBudW1iZXIsIGFuaW1hdGVUbzogbnVtYmVyLCBlYXNlOiBFYXNpbmdGbiA9IGxpbmVhckVhc2UsXG4gICAgICAgIGR1cmF0aW9uID0gRFVSQVRJT05fREVURVJNSU5BVEUsIHJvdGF0aW9uID0gMCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGlkID0gKyt0aGlzLl9sYXN0QW5pbWF0aW9uSWQ7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGNoYW5nZUluVmFsdWUgPSBhbmltYXRlVG8gLSBhbmltYXRlRnJvbTtcblxuICAgICAgICAvLyBObyBuZWVkIHRvIGFuaW1hdGUgaXQgaWYgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKGFuaW1hdGVUbyA9PT0gYW5pbWF0ZUZyb20pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckFyYyhhbmltYXRlVG8sIHJvdGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKERhdGUubm93KCkgLSBzdGFydFRpbWUsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmMoXG4gICAgICAgICAgICAgICAgICAgIGVhc2UoZWxhcHNlZFRpbWUsIGFuaW1hdGVGcm9tLCBjaGFuZ2VJblZhbHVlLCBkdXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgYW5pbWF0aW9ucyBieSBjaGVja2luZyBpZiBhIG5ldyBhbmltYXRpb24gaGFzIGJlZW4gY2FsbGVkIGZvciBhbmRcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGhhcyBsYXN0ZWQgbG9uZ2VyIHRoYW4gdGhlIGFuaW1hdGlvbiBkdXJhdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHRoaXMuX2xhc3RBbmltYXRpb25JZCAmJiBlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0aGUgYW5pbWF0aW9uIG91dHNpZGUgb2YgQW5ndWxhcidzIHpvbmUsIGluIG9yZGVyIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBoaXR0aW5nIFpvbmVKUyBhbmQgY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogU3RhcnRzIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiBpbnRlcnZhbCwgaWYgaXQgaXMgbm90IGFscmVhZHkgcnVubmluZy5cbiAgICAqL1xuICAgIHByaXZhdGUgX3N0YXJ0SW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IHJvdGF0aW9uU3RhcnRQb2ludCA9IDA7XG4gICAgICAgIGxldCBzdGFydCA9IHN0YXJ0SW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgbGV0IGVuZCA9IGVuZEluZGV0ZXJtaW5hdGU7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gRFVSQVRJT05fSU5ERVRFUk1JTkFURTtcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVDaXJjbGUoc3RhcnQsIGVuZCwgbWF0ZXJpYWxFYXNlLCBkdXJhdGlvbiwgcm90YXRpb25TdGFydFBvaW50KTtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgcm90YXRpb24gZnJvbSByZWFjaGluZyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUi5cbiAgICAgICAgICAgIHJvdGF0aW9uU3RhcnRQb2ludCA9IChyb3RhdGlvblN0YXJ0UG9pbnQgKyBlbmQpICUgMTAwO1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHN0YXJ0O1xuICAgICAgICAgICAgc3RhcnQgPSAtZW5kO1xuICAgICAgICAgICAgZW5kID0gLXRlbXA7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhbmltYXRlLCBkdXJhdGlvbiArIDUwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgaW50ZXJ2YWwsIGVuZGluZyB0aGUgYW5pbWF0aW9uLlxuICAgICovXG4gICAgcHJpdmF0ZSBfY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbmRlcnMgdGhlIGFyYyBvbnRvIHRoZSBTVkcgZWxlbWVudC4gUHJveGllcyBgZ2V0QXJjYCB3aGlsZSBzZXR0aW5nIHRoZSBwcm9wZXJcbiAgICAqIERPTSBhdHRyaWJ1dGUgb24gdGhlIGA8cGF0aD5gLlxuICAgICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyQXJjKGN1cnJlbnRWYWx1ZTogbnVtYmVyLCByb3RhdGlvbiA9IDApOiB2b2lkIHtcbiAgICAgICAgLy8gQ2FjaGVzIHRoZSBwYXRoIHJlZmVyZW5jZSBzbyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUgbG9va2VkIHVwIGV2ZXJ5IHRpbWUuXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLl9wYXRoID0gdGhpcy5fcGF0aCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBwYXRoIHdhcyBmb3VuZC4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlIGlmIHRoZVxuICAgICAgICAvLyBhbmltYXRpb24gZnVuY3Rpb24gZmlyZXMgdG9vIGVhcmx5LlxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBnZXRTdmdBcmMoY3VycmVudFZhbHVlLCByb3RhdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBVcGRhdGVzIHRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3Mtc3Bpbm5lciBieSBhZGRpbmcgdGhlIG5ldyBwYWxldHRlIGNsYXNzIHRvIHRoZSBlbGVtZW50XG4gICAgKiBhbmQgcmVtb3ZpbmcgdGhlIG9sZCBvbmUuXG4gICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb2xvcihuZXdDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnRDb2xvcih0aGlzLl9jb2xvciwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXRFbGVtZW50Q29sb3IobmV3Q29sb3IsIHRydWUpO1xuICAgICAgICB0aGlzLl9jb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cblxuICAgIC8qKiBTZXRzIHRoZSBnaXZlbiBwYWxldHRlIGNsYXNzIG9uIHRoZSBjb21wb25lbnQgZWxlbWVudC4gKi9cbiAgICBwcml2YXRlIF9zZXRFbGVtZW50Q29sb3IoY29sb3I6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGNvbG9yICE9IG51bGwgJiYgY29sb3IgIT09ICcnKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbWF0LSR7Y29sb3J9YCwgaXNBZGQpO1xuICAgICAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbWF0LSR7Y29sb3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiA8bWQtc3Bpbm5lcj4gY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSA8bWQtcHJvZ3Jlc3Mtc3Bpbm5lcj4gaW5zdGFuY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWRiLXNwaW5uZXJzLCBtYXQtc3Bpbm5lciwgbWRiLXByb2dyZXNzLXNwaW5uZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZFNwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zcGlubmVyJykgdHJ1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIobmdab25lLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gICAgICAgIHRoaXMubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gVGhlIGBuZ09uRGVzdHJveWAgZnJvbSBgTWRQcm9ncmVzc1NwaW5uZXJgIHNob3VsZCBiZSBjYWxsZWQgZXhwbGljaXRseSwgYmVjYXVzZVxuICAgICAgICAvLyBpbiBjZXJ0YWluIGNhc2VzIEFuZ3VsYXIgd29uJ3QgY2FsbCBpdCAoZS5nLiB3aGVuIHVzaW5nIEFvVCBhbmQgaW4gdW5pdCB0ZXN0cykuXG4gICAgICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgfVxufVxuXG5cbi8qKlxuKiBNb2R1bGUgZnVuY3Rpb25zLlxuKi9cblxuLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gMCBhbmQgMTAwLiAqL1xuZnVuY3Rpb24gY2xhbXAodjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdikpO1xufVxuXG5cbi8qKlxuKiBDb252ZXJ0cyBQb2xhciBjb29yZGluYXRlcyB0byBDYXJ0ZXNpYW4uXG4qL1xuZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXM6IG51bWJlciwgcGF0aFJhZGl1czogbnVtYmVyLCBhbmdsZUluRGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgYW5nbGVJblJhZGlhbnMgPSAoYW5nbGVJbkRlZ3JlZXMgLSA5MCkgKiBERUdSRUVfSU5fUkFESUFOUztcblxuICAgIHJldHVybiAocmFkaXVzICsgKHBhdGhSYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykpKSArXG4gICAgICAgICcsJyArIChyYWRpdXMgKyAocGF0aFJhZGl1cyAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKSkpO1xufVxuXG5cbi8qKlxuKiBFYXNpbmcgZnVuY3Rpb24gZm9yIGxpbmVhciBhbmltYXRpb24uXG4qL1xuZnVuY3Rpb24gbGluZWFyRWFzZShjdXJyZW50VGltZTogbnVtYmVyLCBzdGFydFZhbHVlOiBudW1iZXIsXG4gICAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBjdXJyZW50VGltZSAvIGR1cmF0aW9uICsgc3RhcnRWYWx1ZTtcbn1cblxuXG4vKipcbiAqIEVhc2luZyBmdW5jdGlvbiB0byBtYXRjaCBtYXRlcmlhbCBkZXNpZ24gaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGVyaWFsRWFzZShjdXJyZW50VGltZTogbnVtYmVyLCBzdGFydFZhbHVlOiBudW1iZXIsXG4gICAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG4gICAgY29uc3QgdGltZUN1YmVkID0gTWF0aC5wb3codGltZSwgMyk7XG4gICAgY29uc3QgdGltZVF1YWQgPSBNYXRoLnBvdyh0aW1lLCA0KTtcbiAgICBjb25zdCB0aW1lUXVpbnQgPSBNYXRoLnBvdyh0aW1lLCA1KTtcbiAgICByZXR1cm4gc3RhcnRWYWx1ZSArIGNoYW5nZUluVmFsdWUgKiAoKDYgKiB0aW1lUXVpbnQpICsgKC0xNSAqIHRpbWVRdWFkKSArICgxMCAqIHRpbWVDdWJlZCkpO1xufVxuXG5cbi8qKlxuKiBEZXRlcm1pbmVzIHRoZSBwYXRoIHZhbHVlIHRvIGRlZmluZSB0aGUgYXJjLiAgQ29udmVydGluZyBwZXJjZW50YWdlIHZhbHVlcyB0byB0byBwb2xhclxuKiBjb29yZGluYXRlcyBvbiB0aGUgY2lyY2xlLCBhbmQgdGhlbiB0byBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXMgaW4gdGhlIHZpZXdwb3J0LlxuKlxuKiBAcGFyYW0gY3VycmVudFZhbHVlIFRoZSBjdXJyZW50IHBlcmNlbnRhZ2UgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZSwgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlXG4qICAgIGNpcmNsZSB0byBmaWxsLlxuKiBAcGFyYW0gcm90YXRpb24gVGhlIHN0YXJ0aW5nIHBvaW50IG9mIHRoZSBjaXJjbGUgd2l0aCAwIGJlaW5nIHRoZSAwIGRlZ3JlZSBwb2ludC5cbiogQHJldHVybiBBIHN0cmluZyBmb3IgYW4gU1ZHIHBhdGggcmVwcmVzZW50aW5nIGEgY2lyY2xlIGZpbGxlZCBmcm9tIHRoZSBzdGFydGluZyBwb2ludCB0byB0aGVcbiogICAgcGVyY2VudGFnZSB2YWx1ZSBwcm92aWRlZC5cbiovXG5mdW5jdGlvbiBnZXRTdmdBcmMoY3VycmVudFZhbHVlOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydFBvaW50ID0gcm90YXRpb24gfHwgMDtcbiAgICBjb25zdCByYWRpdXMgPSA1MDtcbiAgICBjb25zdCBwYXRoUmFkaXVzID0gNDA7XG5cbiAgICBjb25zdCBzdGFydEFuZ2xlID0gc3RhcnRQb2ludCAqIE1BWF9BTkdMRTtcbiAgICBjb25zdCBlbmRBbmdsZSA9IGN1cnJlbnRWYWx1ZSAqIE1BWF9BTkdMRTtcbiAgICBjb25zdCBzdGFydCA9IHBvbGFyVG9DYXJ0ZXNpYW4ocmFkaXVzLCBwYXRoUmFkaXVzLCBzdGFydEFuZ2xlKTtcbiAgICBjb25zdCBlbmQgPSBwb2xhclRvQ2FydGVzaWFuKHJhZGl1cywgcGF0aFJhZGl1cywgZW5kQW5nbGUgKyBzdGFydEFuZ2xlKTtcbiAgICBjb25zdCBhcmNTd2VlcCA9IGVuZEFuZ2xlIDwgMCA/IDAgOiAxO1xuICAgIGxldCBsYXJnZUFyY0ZsYWc6IG51bWJlcjtcblxuICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgbGFyZ2VBcmNGbGFnID0gZW5kQW5nbGUgPj0gLTE4MCA/IDAgOiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxhcmdlQXJjRmxhZyA9IGVuZEFuZ2xlIDw9IDE4MCA/IDAgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBgTSR7c3RhcnR9QSR7cGF0aFJhZGl1c30sJHtwYXRoUmFkaXVzfSAwICR7bGFyZ2VBcmNGbGFnfSwke2FyY1N3ZWVwfSAke2VuZH1gO1xufVxuIl19