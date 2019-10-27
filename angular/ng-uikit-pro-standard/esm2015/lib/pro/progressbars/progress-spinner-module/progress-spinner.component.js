/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer2, Directive } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
// TODO(josephperrott): Benchpress tests.
/**
 * A single degree in radians.
 * @type {?}
 */
const DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
const DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
const DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
const startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
const endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
const MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
export class MdProgressSpinnerCssMatStylerDirective {
}
MdProgressSpinnerCssMatStylerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSpinners], mat-progress-spinner'
            },] }
];
MdProgressSpinnerCssMatStylerDirective.propDecorators = {
    true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
};
if (false) {
    /** @type {?} */
    MdProgressSpinnerCssMatStylerDirective.prototype.true;
}
/**
 * <md-progress-spinner> component.
 */
export class MdProgressSpinnerComponent {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?=} platformId
     */
    constructor(_ngZone, _elementRef, _renderer, platformId) {
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
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     * @return {?}
     */
    get _ariaValueMin() {
        return this.mode === 'determinate' ? 0 : null;
    }
    /**
     * @return {?}
     */
    get _ariaValueMax() {
        return this.mode === 'determinate' ? 100 : null;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get interdeterminateInterval() {
        return this._interdeterminateInterval;
    }
    /**
     * \@docs-private
     * @param {?} interval
     * @return {?}
     */
    set interdeterminateInterval(interval) {
        clearInterval(this._interdeterminateInterval);
        this._interdeterminateInterval = interval;
    }
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    ngOnDestroy() {
        this._cleanupIndeterminateAnimation();
    }
    /**
     * The color of the progress-spinner. Can be primary, accent, or warn.
     * @return {?}
     */
    get color() { return this._color; }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._updateColor(value);
    }
    /**
     * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
     * @return {?}
     */
    get value() {
        if (this.mode === 'determinate') {
            return this._value;
        }
        return;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v != null && this.mode === 'determinate') {
            /** @type {?} */
            const newValue = clamp(v);
            this._animateCircle(this.value || 0, newValue);
            this._value = newValue;
        }
    }
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
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
    }
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
    _animateCircle(animateFrom, animateTo, ease = linearEase, duration = DURATION_DETERMINATE, rotation = 0) {
        /** @type {?} */
        const id = ++this._lastAnimationId;
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            const animation = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation);
                }
            });
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation);
        }
    }
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    _startIndeterminateAnimation() {
        /** @type {?} */
        let rotationStartPoint = 0;
        /** @type {?} */
        let start = startIndeterminate;
        /** @type {?} */
        let end = endIndeterminate;
        /** @type {?} */
        const duration = DURATION_INDETERMINATE;
        /** @type {?} */
        const animate = (/**
         * @return {?}
         */
        () => {
            this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            const temp = start;
            start = -end;
            end = -temp;
        });
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                }));
            }
        }
    }
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    _cleanupIndeterminateAnimation() {
        this.interdeterminateInterval = null;
    }
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    _renderArc(currentValue, rotation = 0) {
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        const path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    }
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    _setElementColor(color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, `mat-${color}`);
            }
        }
    }
}
MdProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-Spinners, mat-progress-spinner',
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdProgressSpinnerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdProgressSpinnerComponent.propDecorators = {
    platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
    color: [{ type: Input }],
    value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
    mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
};
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
export class MdSpinnerComponent extends MdProgressSpinnerComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     */
    constructor(elementRef, ngZone, renderer) {
        super(ngZone, elementRef, renderer);
        this.mode = 'indeterminate';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        super.ngOnDestroy();
    }
}
MdSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
            }] }
];
/** @nocollapse */
MdSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
MdSpinnerComponent.propDecorators = {
    true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
};
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
    const angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
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
    const time = currentTime / duration;
    /** @type {?} */
    const timeCubed = Math.pow(time, 3);
    /** @type {?} */
    const timeQuad = Math.pow(time, 4);
    /** @type {?} */
    const timeQuint = Math.pow(time, 5);
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
    const startPoint = rotation || 0;
    /** @type {?} */
    const radius = 50;
    /** @type {?} */
    const pathRadius = 40;
    /** @type {?} */
    const startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    const endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    const start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    const end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    const arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    let largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3ZCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7TUFJOUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHOzs7OztNQUVqQyxzQkFBc0IsR0FBRyxHQUFHOzs7OztNQUU1QixvQkFBb0IsR0FBRyxHQUFHOzs7OztNQUUxQixrQkFBa0IsR0FBRyxDQUFDOzs7OztNQUV0QixnQkFBZ0IsR0FBRyxFQUFFOzs7TUFFckIsU0FBUyxHQUFHLE1BQU0sR0FBRyxHQUFHOzs7OztBQWU5QixNQUFNLE9BQU8sc0NBQXNDOzs7WUFIbEQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQ0FBcUM7YUFDbEQ7OzttQkFFSSxXQUFXLFNBQUMsNEJBQTRCOzs7O0lBQXpDLHNEQUFxRDs7Ozs7QUFhekQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7OztJQTZGbkMsWUFDWSxPQUFlLEVBQ2YsV0FBdUIsRUFDdkIsU0FBb0IsRUFDUCxVQUF5QjtRQUh0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVzs7OztRQTlGeEIscUJB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IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIE9uRGVzdHJveSxcbiAgICBJbnB1dCxcbiAgICBFbGVtZW50UmVmLFxuICAgIE5nWm9uZSxcbiAgICBSZW5kZXJlcjIsIERpcmVjdGl2ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IEJlbmNocHJlc3MgdGVzdHMuXG5cbi8qKiBBIHNpbmdsZSBkZWdyZWUgaW4gcmFkaWFucy4gKi9cbmNvbnN0IERFR1JFRV9JTl9SQURJQU5TID0gTWF0aC5QSSAvIDE4MDtcbi8qKiBEdXJhdGlvbiBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uICovXG5jb25zdCBEVVJBVElPTl9JTkRFVEVSTUlOQVRFID0gNjY3O1xuLyoqIER1cmF0aW9uIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbi4gKi9cbmNvbnN0IERVUkFUSU9OX0RFVEVSTUlOQVRFID0gMjI1O1xuLyoqIFN0YXJ0IGFuaW1hdGlvbiB2YWx1ZSBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24gKi9cbmNvbnN0IHN0YXJ0SW5kZXRlcm1pbmF0ZSA9IDM7XG4vKiogRW5kIGFuaW1hdGlvbiB2YWx1ZSBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24gKi9cbmNvbnN0IGVuZEluZGV0ZXJtaW5hdGUgPSA4MDtcbi8qIE1heGltdW0gYW5nbGUgZm9yIHRoZSBhcmMuIFRoZSBhbmdsZSBjYW4ndCBiZSBleGFjdGx5IDM2MCwgYmVjYXVzZSB0aGUgYXJjIGJlY29tZXMgaGlkZGVuLiAqL1xuY29uc3QgTUFYX0FOR0xFID0gMzU5Ljk5IC8gMTAwO1xuXG5leHBvcnQgdHlwZSBQcm9ncmVzc1NwaW5uZXJNb2RlID0gJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJztcblxuXG50eXBlIEVhc2luZ0ZuID0gKGN1cnJlbnRUaW1lOiBudW1iZXIsIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgICBjaGFuZ2VJblZhbHVlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpID0+IG51bWJlcjtcblxuLyoqXG4qIERpcmVjdGl2ZSB3aG9zZSBwdXJwb3NlIGlzIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZyB0byB0aGlzIHNlbGVjdG9yLlxuKiBAZG9jcy1wcml2YXRlXG4qL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbWRiU3Bpbm5lcnNdLCBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcidcbn0pXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUge1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXByb2dyZXNzLXNwaW5uZXInKSB0cnVlOiBhbnk7XG59XG5cblxuLyoqXG4qIDxtZC1wcm9ncmVzcy1zcGlubmVyPiBjb21wb25lbnQuXG4qL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItU3Bpbm5lcnMsIG1hdC1wcm9ncmVzcy1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcblxuZXhwb3J0IGNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKiogVGhlIGlkIG9mIHRoZSBsYXN0IHJlcXVlc3RlZCBhbmltYXRpb24uICovXG4gICAgcHJpdmF0ZSBfbGFzdEFuaW1hdGlvbklkID0gMDtcblxuICAgIC8qKiBUaGUgaWQgb2YgdGhlIGluZGV0ZXJtaW5hdGUgaW50ZXJ2YWwuICovXG4gICAgcHJpdmF0ZSBfaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsOiBhbnk7XG5cbiAgICAvKiogVGhlIFNWRyA8cGF0aD4gbm9kZSB0aGF0IGlzIHVzZWQgdG8gZHJhdyB0aGUgY2lyY2xlLiAqL1xuICAgIHByaXZhdGUgX3BhdGg6IFNWR1BhdGhFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfbW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb2xvciA9ICdwcmltYXJ5JztcblxuICAgIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICogVmFsdWVzIGZvciBhcmlhIG1heCBhbmQgbWluIGFyZSBvbmx5IGRlZmluZWQgYXMgbnVtYmVycyB3aGVuIGluIGEgZGV0ZXJtaW5hdGUgbW9kZS4gIFdlIGRvIHRoaXNcbiAgICAqIGJlY2F1c2Ugdm9pY2VvdmVyIGRvZXMgbm90IHJlcG9ydCB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGFzIGluZGV0ZXJtaW5hdGUgaWYgdGhlIGFyaWEgbWluXG4gICAgKiBhbmQvb3IgbWF4IHZhbHVlIGFyZSBudW1iZXIgdmFsdWVzLlxuICAgICovXG4gICAgZ2V0IF9hcmlhVmFsdWVNaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyAwIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgX2FyaWFWYWx1ZU1heCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IDEwMCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBnZXQgaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJkZXRlcm1pbmF0ZUludGVydmFsO1xuICAgIH1cbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIHNldCBpbnRlcmRldGVybWluYXRlSW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENsZWFuIHVwIGFueSBhbmltYXRpb25zIHRoYXQgd2VyZSBydW5uaW5nLlxuICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXBJbmRldGVybWluYXRlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqIFRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3Mtc3Bpbm5lci4gQ2FuIGJlIHByaW1hcnksIGFjY2VudCwgb3Igd2Fybi4gKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91cGRhdGVDb2xvcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIFZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUuIEl0IGlzIGJvdW5kIHRvIHRoZSBob3N0IGFzIHRoZSBhdHRyaWJ1dGUgYXJpYS12YWx1ZW5vdy4gKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHY6IG51bWJlciB8IGFueSkge1xuICAgICAgICBpZiAodiAhPSBudWxsICYmIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjbGFtcCh2KTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVDaXJjbGUodGhpcy52YWx1ZSB8fCAwLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBNb2RlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGVcbiAgICAqXG4gICAgKiBJbnB1dCBtdXN0IGJlIG9uZSBvZiB0aGUgdmFsdWVzIGZyb20gUHJvZ3Jlc3NNb2RlLCBkZWZhdWx0cyB0byAnZGV0ZXJtaW5hdGUnLlxuICAgICogbW9kZSBpcyBib3VuZCB0byB0aGUgaG9zdCBhcyB0aGUgYXR0cmlidXRlIGhvc3QuXG4gICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIubW9kZScpXG4gICAgQElucHV0KClcbiAgICBnZXQgbW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gICAgfVxuICAgIHNldCBtb2RlKG1vZGU6IFByb2dyZXNzU3Bpbm5lck1vZGUpIHtcbiAgICAgICAgaWYgKG1vZGUgIT09IHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAnaW5kZXRlcm1pbmF0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKDAsIHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkPzogc3RyaW5nIHwgYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIEFuaW1hdGVzIHRoZSBjaXJjbGUgZnJvbSBvbmUgcGVyY2VudGFnZSB2YWx1ZSB0byBhbm90aGVyLlxuICAgICpcbiAgICAqIEBwYXJhbSBhbmltYXRlRnJvbSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2lyY2xlIGZpbGxlZCBzdGFydGluZyB0aGUgYW5pbWF0aW9uLlxuICAgICogQHBhcmFtIGFuaW1hdGVUbyBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2lyY2xlIGZpbGxlZCBlbmRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICAqIEBwYXJhbSBlYXNlIFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWFuYWdlIHRoZSBwYWNlIG9mIGNoYW5nZSBpbiB0aGUgYW5pbWF0aW9uLlxuICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBsZW5ndGggb2YgdGltZSB0byBzaG93IHRoZSBhbmltYXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICAqIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgYW5nbGUgb2YgdGhlIGNpcmNsZSBmaWxsLCB3aXRoIDDCsCByZXByZXNlbnRlZCBhdCB0aGUgdG9wIGNlbnRlclxuICAgICogICAgb2YgdGhlIGNpcmNsZS5cbiAgICAqL1xuICAgIHByaXZhdGUgX2FuaW1hdGVDaXJjbGUoYW5pbWF0ZUZyb206IG51bWJlciwgYW5pbWF0ZVRvOiBudW1iZXIsIGVhc2U6IEVhc2luZ0ZuID0gbGluZWFyRWFzZSxcbiAgICAgICAgZHVyYXRpb24gPSBEVVJBVElPTl9ERVRFUk1JTkFURSwgcm90YXRpb24gPSAwKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaWQgPSArK3RoaXMuX2xhc3RBbmltYXRpb25JZDtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgY2hhbmdlSW5WYWx1ZSA9IGFuaW1hdGVUbyAtIGFuaW1hdGVGcm9tO1xuXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gYW5pbWF0ZSBpdCBpZiB0aGUgdmFsdWVzIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAoYW5pbWF0ZVRvID09PSBhbmltYXRlRnJvbSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjKGFuaW1hdGVUbywgcm90YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSwgZHVyYXRpb24pKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckFyYyhcbiAgICAgICAgICAgICAgICAgICAgZWFzZShlbGFwc2VkVGltZSwgYW5pbWF0ZUZyb20sIGNoYW5nZUluVmFsdWUsIGR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb25cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBvdmVybGFwcGluZyBhbmltYXRpb25zIGJ5IGNoZWNraW5nIGlmIGEgbmV3IGFuaW1hdGlvbiBoYXMgYmVlbiBjYWxsZWQgZm9yIGFuZFxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhbmltYXRpb24gaGFzIGxhc3RlZCBsb25nZXIgdGhhbiB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uLlxuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gdGhpcy5fbGFzdEFuaW1hdGlvbklkICYmIGVsYXBzZWRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gUnVuIHRoZSBhbmltYXRpb24gb3V0c2lkZSBvZiBBbmd1bGFyJ3Mgem9uZSwgaW4gb3JkZXIgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIGhpdHRpbmcgWm9uZUpTIGFuZCBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGVhY2ggZnJhbWUuXG4gICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBTdGFydHMgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uIGludGVydmFsLCBpZiBpdCBpcyBub3QgYWxyZWFkeSBydW5uaW5nLlxuICAgICovXG4gICAgcHJpdmF0ZSBfc3RhcnRJbmRldGVybWluYXRlQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICBsZXQgcm90YXRpb25TdGFydFBvaW50ID0gMDtcbiAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRJbmRldGVybWluYXRlO1xuICAgICAgICBsZXQgZW5kID0gZW5kSW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBEVVJBVElPTl9JTkRFVEVSTUlOQVRFO1xuICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZShzdGFydCwgZW5kLCBtYXRlcmlhbEVhc2UsIGR1cmF0aW9uLCByb3RhdGlvblN0YXJ0UG9pbnQpO1xuICAgICAgICAgICAgLy8gUHJldmVudCByb3RhdGlvbiBmcm9tIHJlYWNoaW5nIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLlxuICAgICAgICAgICAgcm90YXRpb25TdGFydFBvaW50ID0gKHJvdGF0aW9uU3RhcnRQb2ludCArIGVuZCkgJSAxMDA7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc3RhcnQ7XG4gICAgICAgICAgICBzdGFydCA9IC1lbmQ7XG4gICAgICAgICAgICBlbmQgPSAtdGVtcDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IHNldEludGVydmFsKGFuaW1hdGUsIGR1cmF0aW9uICsgNTAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogUmVtb3ZlcyBpbnRlcnZhbCwgZW5kaW5nIHRoZSBhbmltYXRpb24uXG4gICAgKi9cbiAgICBwcml2YXRlIF9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVuZGVycyB0aGUgYXJjIG9udG8gdGhlIFNWRyBlbGVtZW50LiBQcm94aWVzIGBnZXRBcmNgIHdoaWxlIHNldHRpbmcgdGhlIHByb3BlclxuICAgICogRE9NIGF0dHJpYnV0ZSBvbiB0aGUgYDxwYXRoPmAuXG4gICAgKi9cbiAgICBwcml2YXRlIF9yZW5kZXJBcmMoY3VycmVudFZhbHVlOiBudW1iZXIsIHJvdGF0aW9uID0gMCk6IHZvaWQge1xuICAgICAgICAvLyBDYWNoZXMgdGhlIHBhdGggcmVmZXJlbmNlIHNvIGl0IGRvZXNuJ3QgaGF2ZSB0byBiZSBsb29rZWQgdXAgZXZlcnkgdGltZS5cbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuX3BhdGggPSB0aGlzLl9wYXRoIHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIHBhdGggd2FzIGZvdW5kLiBUaGlzIG1heSBub3QgYmUgdGhlIGNhc2UgaWYgdGhlXG4gICAgICAgIC8vIGFuaW1hdGlvbiBmdW5jdGlvbiBmaXJlcyB0b28gZWFybHkuXG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGdldFN2Z0FyYyhjdXJyZW50VmFsdWUsIHJvdGF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFVwZGF0ZXMgdGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcy1zcGlubmVyIGJ5IGFkZGluZyB0aGUgbmV3IHBhbGV0dGUgY2xhc3MgdG8gdGhlIGVsZW1lbnRcbiAgICAqIGFuZCByZW1vdmluZyB0aGUgb2xkIG9uZS5cbiAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvbG9yKG5ld0NvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKHRoaXMuX2NvbG9yLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnRDb2xvcihuZXdDb2xvciwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxuXG4gICAgLyoqIFNldHMgdGhlIGdpdmVuIHBhbGV0dGUgY2xhc3Mgb24gdGhlIGNvbXBvbmVudCBlbGVtZW50LiAqL1xuICAgIHByaXZhdGUgX3NldEVsZW1lbnRDb2xvcihjb2xvcjogc3RyaW5nLCBpc0FkZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoY29sb3IgIT0gbnVsbCAmJiBjb2xvciAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXQtJHtjb2xvcn1gLCBpc0FkZCk7XG4gICAgICAgICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBtYXQtJHtjb2xvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIDxtZC1zcGlubmVyPiBjb21wb25lbnQuXG4gKlxuICogVGhpcyBpcyBhIGNvbXBvbmVudCBkZWZpbml0aW9uIHRvIGJlIHVzZWQgYXMgYSBjb252ZW5pZW5jZSByZWZlcmVuY2UgdG8gY3JlYXRlIGFuXG4gKiBpbmRldGVybWluYXRlIDxtZC1wcm9ncmVzcy1zcGlubmVyPiBpbnN0YW5jZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItc3Bpbm5lcnMsIG1hdC1zcGlubmVyLCBtZGItcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIE1kU3Bpbm5lckNvbXBvbmVudCBleHRlbmRzIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXNwaW5uZXInKSB0cnVlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihuZ1pvbmUsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyBUaGUgYG5nT25EZXN0cm95YCBmcm9tIGBNZFByb2dyZXNzU3Bpbm5lcmAgc2hvdWxkIGJlIGNhbGxlZCBleHBsaWNpdGx5LCBiZWNhdXNlXG4gICAgICAgIC8vIGluIGNlcnRhaW4gY2FzZXMgQW5ndWxhciB3b24ndCBjYWxsIGl0IChlLmcuIHdoZW4gdXNpbmcgQW9UIGFuZCBpbiB1bml0IHRlc3RzKS5cbiAgICAgICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuLyoqXG4qIE1vZHVsZSBmdW5jdGlvbnMuXG4qL1xuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2KSk7XG59XG5cblxuLyoqXG4qIENvbnZlcnRzIFBvbGFyIGNvb3JkaW5hdGVzIHRvIENhcnRlc2lhbi5cbiovXG5mdW5jdGlvbiBwb2xhclRvQ2FydGVzaWFuKHJhZGl1czogbnVtYmVyLCBwYXRoUmFkaXVzOiBudW1iZXIsIGFuZ2xlSW5EZWdyZWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCBhbmdsZUluUmFkaWFucyA9IChhbmdsZUluRGVncmVlcyAtIDkwKSAqIERFR1JFRV9JTl9SQURJQU5TO1xuXG4gICAgcmV0dXJuIChyYWRpdXMgKyAocGF0aFJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSkpICtcbiAgICAgICAgJywnICsgKHJhZGl1cyArIChwYXRoUmFkaXVzICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKSk7XG59XG5cblxuLyoqXG4qIEVhc2luZyBmdW5jdGlvbiBmb3IgbGluZWFyIGFuaW1hdGlvbi5cbiovXG5mdW5jdGlvbiBsaW5lYXJFYXNlKGN1cnJlbnRUaW1lOiBudW1iZXIsIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgICBjaGFuZ2VJblZhbHVlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqIGN1cnJlbnRUaW1lIC8gZHVyYXRpb24gKyBzdGFydFZhbHVlO1xufVxuXG5cbi8qKlxuICogRWFzaW5nIGZ1bmN0aW9uIHRvIG1hdGNoIG1hdGVyaWFsIGRlc2lnbiBpbmRldGVybWluYXRlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0ZXJpYWxFYXNlKGN1cnJlbnRUaW1lOiBudW1iZXIsIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgICBjaGFuZ2VJblZhbHVlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCB0aW1lID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lQ3ViZWQgPSBNYXRoLnBvdyh0aW1lLCAzKTtcbiAgICBjb25zdCB0aW1lUXVhZCA9IE1hdGgucG93KHRpbWUsIDQpO1xuICAgIGNvbnN0IHRpbWVRdWludCA9IE1hdGgucG93KHRpbWUsIDUpO1xuICAgIHJldHVybiBzdGFydFZhbHVlICsgY2hhbmdlSW5WYWx1ZSAqICgoNiAqIHRpbWVRdWludCkgKyAoLTE1ICogdGltZVF1YWQpICsgKDEwICogdGltZUN1YmVkKSk7XG59XG5cblxuLyoqXG4qIERldGVybWluZXMgdGhlIHBhdGggdmFsdWUgdG8gZGVmaW5lIHRoZSBhcmMuICBDb252ZXJ0aW5nIHBlcmNlbnRhZ2UgdmFsdWVzIHRvIHRvIHBvbGFyXG4qIGNvb3JkaW5hdGVzIG9uIHRoZSBjaXJjbGUsIGFuZCB0aGVuIHRvIGNhcnRlc2lhbiBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQuXG4qXG4qIEBwYXJhbSBjdXJyZW50VmFsdWUgVGhlIGN1cnJlbnQgcGVyY2VudGFnZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlLCB0aGUgcGVyY2VudGFnZSBvZiB0aGVcbiogICAgY2lyY2xlIHRvIGZpbGwuXG4qIEBwYXJhbSByb3RhdGlvbiBUaGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGNpcmNsZSB3aXRoIDAgYmVpbmcgdGhlIDAgZGVncmVlIHBvaW50LlxuKiBAcmV0dXJuIEEgc3RyaW5nIGZvciBhbiBTVkcgcGF0aCByZXByZXNlbnRpbmcgYSBjaXJjbGUgZmlsbGVkIGZyb20gdGhlIHN0YXJ0aW5nIHBvaW50IHRvIHRoZVxuKiAgICBwZXJjZW50YWdlIHZhbHVlIHByb3ZpZGVkLlxuKi9cbmZ1bmN0aW9uIGdldFN2Z0FyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSByb3RhdGlvbiB8fCAwO1xuICAgIGNvbnN0IHJhZGl1cyA9IDUwO1xuICAgIGNvbnN0IHBhdGhSYWRpdXMgPSA0MDtcblxuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBzdGFydFBvaW50ICogTUFYX0FOR0xFO1xuICAgIGNvbnN0IGVuZEFuZ2xlID0gY3VycmVudFZhbHVlICogTUFYX0FOR0xFO1xuICAgIGNvbnN0IHN0YXJ0ID0gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXMsIHBhdGhSYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICAgIGNvbnN0IGVuZCA9IHBvbGFyVG9DYXJ0ZXNpYW4ocmFkaXVzLCBwYXRoUmFkaXVzLCBlbmRBbmdsZSArIHN0YXJ0QW5nbGUpO1xuICAgIGNvbnN0IGFyY1N3ZWVwID0gZW5kQW5nbGUgPCAwID8gMCA6IDE7XG4gICAgbGV0IGxhcmdlQXJjRmxhZzogbnVtYmVyO1xuXG4gICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSA+PSAtMTgwID8gMCA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFyZ2VBcmNGbGFnID0gZW5kQW5nbGUgPD0gMTgwID8gMCA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBNJHtzdGFydH1BJHtwYXRoUmFkaXVzfSwke3BhdGhSYWRpdXN9IDAgJHtsYXJnZUFyY0ZsYWd9LCR7YXJjU3dlZXB9ICR7ZW5kfWA7XG59XG4iXX0=