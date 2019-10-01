/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ContentChildren, QueryList, Input, ElementRef, ViewChild, ViewChildren, Renderer2, PLATFORM_ID, Inject, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { MdbStepComponent } from './step.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { from, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
var StepChangeEvent = /** @class */ (function () {
    function StepChangeEvent() {
    }
    return StepChangeEvent;
}());
export { StepChangeEvent };
if (false) {
    /** @type {?} */
    StepChangeEvent.prototype.activeStep;
    /** @type {?} */
    StepChangeEvent.prototype.activeStepIndex;
    /** @type {?} */
    StepChangeEvent.prototype.previousStep;
    /** @type {?} */
    StepChangeEvent.prototype.previousStepIndex;
}
var MdbStepperComponent = /** @class */ (function () {
    function MdbStepperComponent(ripple, _renderer, _cdRef, platformId) {
        this.ripple = ripple;
        this._renderer = _renderer;
        this._cdRef = _cdRef;
        this.linear = false;
        this.disableWaves = false;
        this._vertical = false;
        this.stepChange = new EventEmitter();
        this._destroy = new Subject();
        this.horizontal = true;
        this.stepTextContent = '';
        this.stepChangeSubject = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdbStepperComponent.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._vertical = value;
                this.horizontal = false;
                this._renderer.removeStyle(this.container.nativeElement, 'height');
            }
            else {
                this._vertical = value;
                this.horizontal = true;
                if (this.container.nativeElement.children[this.activeStepIndex]) {
                    /** @type {?} */
                    var stepElContent = this.container.nativeElement.children[this._activeStepIndex]
                        .lastElementChild;
                    this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepperComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeStepIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeStepIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.getStepChange$ = /**
     * @return {?}
     */
    function () {
        return this.stepChangeSubject;
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    MdbStepperComponent.prototype.onClick = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        if (!this.disableWaves) {
            /** @type {?} */
            var clickedEl = this.stepTitles.toArray()[index];
            this.ripple.el = clickedEl;
            this.ripple.click(event);
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._isStepValid = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step.stepForm) {
            return true;
        }
        if (step.stepForm && step.stepForm.valid) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.getAnimationState = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var nextElPosition = index - this.activeStepIndex;
        if (nextElPosition < 0) {
            return 'previous';
        }
        else if (nextElPosition > 0) {
            return 'next';
        }
        return 'current';
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._getStepByIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.steps.toArray()[index];
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex < this.steps.length - 1) {
            this.setNewActiveStep(this.activeStepIndex + 1);
            this._cdRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex > 0) {
            this.setNewActiveStep(this.activeStepIndex - 1);
            this._cdRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        if (this.linear) {
            this._markCurrentAsDone();
            this._cdRef.markForCheck();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.setNewActiveStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var currentStep = this._activeStep;
        /** @type {?} */
        var currentStepIndex = this._activeStepIndex;
        /** @type {?} */
        var newStep = this._getStepByIndex(index);
        /** @type {?} */
        var newStepIndex = this.steps
            .toArray()
            .findIndex((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step === newStep; }));
        if (this.linear && !this._isNewStepLinear(index)) {
            return;
        }
        if (newStepIndex < this._activeStepIndex && !newStep.editable) {
            return;
        }
        this._removeStepValidationClasses(newStep);
        if (this.linear && index > this.activeStepIndex) {
            if (this._isStepValid(this._activeStep)) {
                this._markCurrentAsDone();
                this._removeCurrentActiveStep();
                this._setActiveStep(index);
            }
            else {
                this._markCurrentAsWrong();
                this._markStepControlsAsDirty(this._activeStep);
            }
        }
        else {
            if (index < this.activeStepIndex) {
                this._removeStepValidationClasses(this._activeStep);
            }
            this._removeCurrentActiveStep();
            this._setActiveStep(index);
        }
        this.stepChange.emit({
            activeStep: newStep,
            activeStepIndex: newStepIndex,
            previousStep: currentStep,
            previousStepIndex: currentStepIndex,
        });
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsDone = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isDone = true;
        this._activeStep.isWrong = false;
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsWrong = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isWrong = true;
        this._activeStep.isDone = false;
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._markStepControlsAsDirty = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var controls = step.stepForm.controls;
        if (step.stepForm.controls) {
            /** @type {?} */
            var keys = Object.keys(controls);
            for (var i = 0; i < keys.length; i++) {
                /** @type {?} */
                var control = controls[keys[i]];
                if (control instanceof FormControl) {
                    control.markAsTouched();
                }
            }
        }
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._removeStepValidationClasses = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        step.isDone = false;
        step.isWrong = false;
    };
    /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    MdbStepperComponent.prototype._isNewStepLinear = /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    function (newStepIndex) {
        return this.activeStepIndex - newStepIndex === 1 || this.activeStepIndex - newStepIndex === -1;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._setActiveStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.steps.toArray()[index].isActive = true;
        this._updateHorizontalStepperHeight(index);
        this.activeStepIndex = index;
        this._activeStep = this._getStepByIndex(this.activeStepIndex);
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._removeCurrentActiveStep = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentActiveStep = this.steps.find((/**
         * @param {?} activeStep
         * @return {?}
         */
        function (activeStep) { return activeStep.isActive; }));
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.resetAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.reset();
            _this._setActiveStep(0);
            _this._cdRef.markForCheck();
        }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    MdbStepperComponent.prototype._updateHorizontalStepperHeight = /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    function (index, height) {
        var _this = this;
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var stepHeight = height
                    ? height + 50
                    : _this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                _this._renderer.setStyle(_this.container.nativeElement, 'height', stepHeight + 'px');
            }), 0);
        }
        else {
            this._renderer.removeStyle(this.container.nativeElement, 'height');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._initStepperVariation = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            if (this.vertical) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.horizontal = false;
                    _this._renderer.removeStyle(_this.container.nativeElement, 'height');
                }), 0);
            }
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initStepperVariation();
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setActiveStep(0);
        this.stepChange$ = from(this.steps.toArray());
        this.getStepChange$()
            .pipe(distinctUntilChanged(), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.container.nativeElement.children[_this.activeStepIndex]) {
                /** @type {?} */
                var stepElContent = _this.container.nativeElement.children[_this._activeStepIndex]
                    .lastElementChild;
                _this._updateHorizontalStepperHeight(_this.activeStepIndex, stepElContent.clientHeight);
            }
        }));
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.stepContents) {
            /** @type {?} */
            var activeStep = this.stepContents
                .filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el && index === _this.activeStepIndex; }))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.nativeElement; }))[0];
            if (activeStep.innerHTMl !== this.stepTextContent) {
                this.stepChangeSubject.next(activeStep.innerHTML);
            }
            this.stepTextContent = activeStep.innerHTML;
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    MdbStepperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-stepper',
                    exportAs: 'mdbStepper',
                    template: "<div class=\"card-body\">\n  <ul #container class=\"stepper\" [ngClass]=\"{ horizontal: !vertical && horizontal }\">\n    <li\n      [ngClass]=\"{ active: step.isActive, done: step.isDone, wrong: step.isWrong }\"\n      class=\"step\"\n      *ngFor=\"let step of steps; let i = index\"\n    >\n      <div\n        #stepTitle\n        class=\"step-title waves-effect waves-dark\"\n        (click)=\"setNewActiveStep(i); onClick(i, $event)\"\n      >\n        <span>{{ step.name }}</span>\n        <span class=\"step-label\">{{ step.label }}</span>\n      </div>\n      <div\n        #stepContent\n        class=\"step-new-content\"\n        [ngClass]=\"{ 'd-block': step.isActive }\"\n        [@stepContentTransition]=\"!vertical && getAnimationState(i)\"\n      >\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        trigger('stepContentTransition', [
                            state('previous', style({ transform: 'translateX(-100%)', display: 'none' })),
                            state('next', style({ transform: 'translateX(100%)', display: 'none' })),
                            state('current', style({ transform: 'none', display: 'block' })),
                            transition('* => *', animate('600ms ease')),
                        ]),
                    ],
                    providers: [WavesDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color,.stepper li.active a .circle,.stepper li.completed a .circle{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color,.stepper li.warning a .circle{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.stepper li a{padding:1.5rem;font-size:1em;text-align:center}.stepper li a .circle{display:inline-block;color:#fff;border-radius:50%;background:rgba(0,0,0,.38);width:1.75rem;height:1.75rem;text-align:center;line-height:1.75rem;margin-right:.5rem}.stepper li a .label{display:inline-block;color:rgba(0,0,0,.38)}.stepper li.active a .label,.stepper li.completed a .label{font-weight:600;color:rgba(0,0,0,.87)}.stepper-horizontal{position:relative;display:flex;justify-content:space-between}.stepper-horizontal li{transition:.5s;display:flex;align-items:center;flex:1;position:relative}.stepper-horizontal li a .label{margin-top:.63rem}.stepper-horizontal li:not(:first-child):before,.stepper-horizontal li:not(:last-child):after{content:'';position:relative;flex:1;margin:.5rem 0 0;height:1px;background-color:rgba(0,0,0,.1)}@media (max-width:47.9375rem){.stepper-horizontal{flex-direction:column}.stepper-horizontal li{align-items:flex-start;flex-direction:column}.stepper-horizontal li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-horizontal li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.75rem}}.stepper-vertical{position:relative;display:flex;flex-direction:column;justify-content:space-between}.stepper-vertical li{display:flex;align-items:flex-start;flex:1;flex-direction:column;position:relative}.stepper-vertical li a{align-self:flex-start;display:flex;position:relative}.stepper-vertical li a .circle{order:1}.stepper-vertical li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-vertical li.completed a .label{font-weight:500}.stepper-vertical li .step-content{display:block;margin-top:0;margin-left:3.13rem;padding:.94rem}.stepper-vertical li .step-content p{font-size:.88rem}.stepper-vertical li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.44rem;background-color:rgba(0,0,0,.1)}label.invalid{font-size:.8rem;font-weight:500;color:red!important;top:50px!important}label.invalid.active{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}ul.stepper .wait-feedback{left:0;right:0;top:0;z-index:2;position:absolute;width:100%;height:100%;text-align:center;display:flex;justify-content:center;align-items:center}ul.stepper .step{position:relative;list-style:none}ul.stepper .step.feedbacking .step-new-content>:not(.wait-feedback){opacity:.1}ul.stepper .step:not(:last-of-type).active{margin-bottom:2.25rem}ul.stepper .step:before{position:absolute;top:.75rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper .step.active:before{background-color:#4285f4}ul.stepper .step.done:before{content:'\\f00c';background-color:#00c851}ul.stepper .step.wrong:before{content:'\\f071';background-color:#ff3547}ul.stepper>li:not(:last-of-type){margin-bottom:.625rem;transition:margin-bottom .4s}ul.stepper .step-title{margin:0 -1.3rem;cursor:pointer;padding:.9688rem 2.75rem 1.5rem 4rem;display:block;position:relative}ul.stepper .step-title:after{content:attr(data-step-label);display:block;position:absolute;font-size:.8rem;color:#424242;font-weight:400}ul.stepper .step-title:hover{background-color:rgba(0,0,0,.06)}ul.stepper .step-label{font-size:.8rem;color:#424242;font-weight:400;position:absolute;top:40px;left:65px}ul.stepper .step-new-content{position:relative;display:none;width:inherit;margin-left:41px;margin-right:24px}ul.stepper>.step:not(:last-of-type):after{content:'';position:absolute;top:3.125rem;left:.8438rem;width:.0625rem;height:40%;height:calc(100% - 38px);background-color:rgba(0,0,0,.1);transition:.4s}ul.stepper>.step.active:not(:last-child):after{height:93%;height:calc(100% - 12px)}ul.stepper>.step[data-last=true]{margin-bottom:0}ul.stepper>.step[data-last=true]:after{height:0;width:0}ul.stepper .step-actions{display:-webkit-box;-webkit-box-pack:start}ul.stepper .step-actions .btn-flat:not(:last-child),ul.stepper .step-actions .btn-large:not(:last-child),ul.stepper .step-actions .btn:not(:last-child){margin-right:.3125rem}ul.stepper .step-new-content .row{margin-bottom:.4375rem}ul.stepper .validate{margin-bottom:0}ul.stepper.horizontal{position:relative;display:flex;justify-content:space-between;min-height:20rem;margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem;overflow:hidden}ul.stepper.horizontal:before{content:'';background-color:transparent;width:100%;min-height:5.25rem;position:absolute;left:-3px;border-top-left-radius:2px}ul.stepper.horizontal:first-child{margin-top:-2.7rem}ul.stepper.horizontal .step{position:static;margin:0;width:100%;display:flex;align-items:center;height:5.25rem!important}ul.stepper.horizontal .step:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal>.step:last-of-type,ul.stepper.horizontal>.step[data-last=true]{width:auto!important}ul.stepper.horizontal>.step.active:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}ul.stepper.horizontal .step.done .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f00c';font-size:1rem;background:#00c851}ul.stepper.horizontal .step.wrong .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f071';font-size:1.1rem;background-color:#ff3547}ul.stepper.horizontal .step-title{position:relative;line-height:5.25rem;height:5.25rem;margin:0;padding:0 1.5625rem 0 4.0625rem;display:inline-block;max-width:13.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0}ul.stepper.horizontal .step-label{position:absolute;top:20px;left:65px}ul.stepper.horizontal .step:before{content:none}ul.stepper.horizontal .step .step-title:before{position:absolute;top:1.7813rem;left:1.1875rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper.horizontal .step-title:after{top:.9375rem}ul.stepper.horizontal .step-new-content{position:absolute;height:calc(100% - 84px);top:6rem;left:0;width:100%;overflow-y:auto;overflow-x:hidden;margin:0;padding:1.25rem 1.25rem 4.75rem}ul.stepper.horizontal .step-actions{position:absolute;bottom:0;left:0;width:100%;padding:20px;flex-direction:row-reverse}ul.stepper.horizontal .step-actions .btn-flat:not(:last-child),ul.stepper.horizontal .step-actions .btn-large:not(:last-child),ul.stepper.horizontal .step-actions .btn:not(:last-child){margin-left:.3125rem;margin-right:0}ul.stepper.horizontal .step-actions,ul.stepper.horizontal .step-new-content{padding-left:2.5rem;padding-right:2.5rem}ul.stepper .md-form label{left:0}ul.stepper .step.done:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem}ul.stepper .step.wrong:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem}ul.stepper .step.active .step-title{font-weight:500}ul.stepper .step-new-content{overflow:hidden!important;height:auto!important}.card-body ul.stepper.horizontal li a{padding:.84rem 2.14rem}.card-body ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}.card-body ul.stepper.horizontal .step.done .step-title:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem;background:#00c851}.card-body ul.stepper.horizontal .step.wrong .step-title:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem;background-color:#ff3547}.card-body ul.stepper.horizontal .step:before{content:none}@media (max-width:420px){ul.stepper.horizontal .step-title{padding-left:10px!important;padding-right:10px!important;line-height:9.25rem!important}}"]
                }] }
    ];
    /** @nocollapse */
    MdbStepperComponent.ctorParameters = function () { return [
        { type: WavesDirective },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStepperComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [MdbStepComponent,] }],
        stepTitles: [{ type: ViewChildren, args: ['stepTitle',] }],
        stepContents: [{ type: ViewChildren, args: ['stepContent',] }],
        container: [{ type: ViewChild, args: ['container', { static: true },] }],
        linear: [{ type: Input }],
        disableWaves: [{ type: Input }],
        vertical: [{ type: Input }],
        stepChange: [{ type: Output }]
    };
    return MdbStepperComponent;
}());
export { MdbStepperComponent };
if (false) {
    /** @type {?} */
    MdbStepperComponent.prototype.steps;
    /** @type {?} */
    MdbStepperComponent.prototype.stepTitles;
    /** @type {?} */
    MdbStepperComponent.prototype.stepContents;
    /** @type {?} */
    MdbStepperComponent.prototype.container;
    /** @type {?} */
    MdbStepperComponent.prototype.linear;
    /** @type {?} */
    MdbStepperComponent.prototype.disableWaves;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._vertical;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._destroy;
    /** @type {?} */
    MdbStepperComponent.prototype.isBrowser;
    /** @type {?} */
    MdbStepperComponent.prototype.horizontal;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStepIndex;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStep;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype.stepTextContent;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChangeSubject;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange$;
    /** @type {?} */
    MdbStepperComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUVaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUVOLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQUE7SUFLQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHFDQUE2Qjs7SUFDN0IsMENBQXdCOztJQUN4Qix1Q0FBK0I7O0lBQy9CLDRDQUEwQjs7QUFHNUI7SUFpREUsNkJBQ1MsTUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsTUFBeUIsRUFDWixVQUFrQjtRQUhoQyxXQUFNLEdB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SSxFQUFFO3lCQUV2QyxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFxQkwsTUFBTTs7SUE0UFQsMEJBQUM7Q0FBQSxBQTNTRCxJQTJTQztTQTFSWSxtQkFBbUI7OztJQUU5QixvQ0FBc0U7O0lBQ3RFLHlDQUE2RDs7SUFDN0QsMkNBQWlFOztJQUNqRSx3Q0FBZ0U7O0lBRWhFLHFDQUF3Qjs7SUFDeEIsMkNBQThCOzs7OztJQW9COUIsd0NBQTBCOztJQUUxQix5Q0FBMEY7Ozs7O0lBVzFGLHVDQUFnRDs7SUFFaEQsd0NBQW1COztJQUNuQix5Q0FBa0I7Ozs7O0lBVWxCLCtDQUFpQzs7Ozs7SUFDakMsMENBQXNDOzs7OztJQUN0Qyw4Q0FBNkI7O0lBRTdCLGdEQUFnRDs7SUFDaEQsMENBQTZCOztJQTFCM0IscUNBQTZCOzs7OztJQUM3Qix3Q0FBNEI7Ozs7O0lBQzVCLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBXYXZlc0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBTdGVwQ2hhbmdlRXZlbnQge1xuICBhY3RpdmVTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgcHJldmlvdXNTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuICBwcmV2aW91c1N0ZXBJbmRleDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcHBlcicsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXItbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0ZXBDb250ZW50VHJhbnNpdGlvbicsIFtcbiAgICAgIHN0YXRlKCdwcmV2aW91cycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2N1cnJlbnQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnLCBkaXNwbGF5OiAnYmxvY2snIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzYwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0ZXBwZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiU3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxNZGJTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbignc3RlcFRpdGxlJykgc3RlcFRpdGxlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwQ29udGVudCcpIHN0ZXBDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbGluZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuYWN0aXZlU3RlcEluZGV4XSkge1xuICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdXG4gICAgICAgICAgLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4LCBzdGVwRWxDb250ZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJpcHBsZTogV2F2ZXNEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gIGhvcml6b250YWwgPSB0cnVlO1xuXG4gIGdldCBhY3RpdmVTdGVwSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleDtcbiAgfVxuXG4gIHNldCBhY3RpdmVTdGVwSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIHByaXZhdGUgc3RlcFRleHRDb250ZW50ID0gJyc7XG5cbiAgc3RlcENoYW5nZVN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHN0ZXBDaGFuZ2UkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgZ2V0U3RlcENoYW5nZSQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwQ2hhbmdlU3ViamVjdDtcbiAgfVxuXG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlV2F2ZXMpIHtcbiAgICAgIGNvbnN0IGNsaWNrZWRFbCA9IHRoaXMuc3RlcFRpdGxlcy50b0FycmF5KClbaW5kZXhdO1xuICAgICAgdGhpcy5yaXBwbGUuZWwgPSBjbGlja2VkRWw7XG4gICAgICB0aGlzLnJpcHBsZS5jbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHByaXZhdGUgX2lzU3RlcFZhbGlkKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXN0ZXAuc3RlcEZvcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwLnN0ZXBGb3JtICYmIHN0ZXAuc3RlcEZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvblN0YXRlKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5leHRFbFBvc2l0aW9uID0gaW5kZXggLSB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgICBpZiAobmV4dEVsUG9zaXRpb24gPCAwKSB7XG4gICAgICByZXR1cm4gJ3ByZXZpb3VzJztcbiAgICB9IGVsc2UgaWYgKG5leHRFbFBvc2l0aW9uID4gMCkge1xuICAgICAgcmV0dXJuICduZXh0JztcbiAgICB9XG4gICAgcmV0dXJuICdjdXJyZW50JztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNZGJTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0TmV3QWN0aXZlU3RlcCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCArIDEpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlU3RlcEluZGV4ID4gMCkge1xuICAgICAgdGhpcy5zZXROZXdBY3RpdmVTdGVwKHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gMSk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubGluZWFyKSB7XG4gICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmV3QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB0aGlzLl9hY3RpdmVTdGVwO1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLl9hY3RpdmVTdGVwSW5kZXg7XG4gICAgY29uc3QgbmV3U3RlcCA9IHRoaXMuX2dldFN0ZXBCeUluZGV4KGluZGV4KTtcbiAgICBjb25zdCBuZXdTdGVwSW5kZXggPSB0aGlzLnN0ZXBzXG4gICAgICAudG9BcnJheSgpXG4gICAgICAuZmluZEluZGV4KChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiBzdGVwID09PSBuZXdTdGVwKTtcblxuICAgIGlmICh0aGlzLmxpbmVhciAmJiAhdGhpcy5faXNOZXdTdGVwTGluZWFyKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdTdGVwSW5kZXggPCB0aGlzLl9hY3RpdmVTdGVwSW5kZXggJiYgIW5ld1N0ZXAuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMobmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuX2lzU3RlcFZhbGlkKHRoaXMuX2FjdGl2ZVN0ZXApKSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc1dyb25nKCk7XG4gICAgICAgIHRoaXMuX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXModGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdCh7XG4gICAgICBhY3RpdmVTdGVwOiBuZXdTdGVwLFxuICAgICAgYWN0aXZlU3RlcEluZGV4OiBuZXdTdGVwSW5kZXgsXG4gICAgICBwcmV2aW91c1N0ZXA6IGN1cnJlbnRTdGVwLFxuICAgICAgcHJldmlvdXNTdGVwSW5kZXg6IGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrQ3VycmVudEFzRG9uZSgpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzRG9uZSA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrQ3VycmVudEFzV3JvbmcoKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc1dyb25nID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzRG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya1N0ZXBDb250cm9sc0FzRGlydHkoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gc3RlcC5zdGVwRm9ybS5jb250cm9scztcbiAgICBpZiAoc3RlcC5zdGVwRm9ybS5jb250cm9scykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRyb2xzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb250cm9sID0gY29udHJvbHNba2V5c1tpXV07XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlU3RlcFZhbGlkYXRpb25DbGFzc2VzKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBzdGVwLmlzRG9uZSA9IGZhbHNlO1xuICAgIHN0ZXAuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNOZXdTdGVwTGluZWFyKG5ld1N0ZXBJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gbmV3U3RlcEluZGV4ID09PSAxIHx8IHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gbmV3U3RlcEluZGV4ID09PSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEFjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXgpO1xuICAgIHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fYWN0aXZlU3RlcCA9IHRoaXMuX2dldFN0ZXBCeUluZGV4KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCkge1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVTdGVwID0gdGhpcy5zdGVwcy5maW5kKGFjdGl2ZVN0ZXAgPT4gYWN0aXZlU3RlcC5pc0FjdGl2ZSk7XG4gICAgaWYgKGN1cnJlbnRBY3RpdmVTdGVwKSB7XG4gICAgICBjdXJyZW50QWN0aXZlU3RlcC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWxsKCkge1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcDogTWRiU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgc3RlcC5yZXNldCgpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCAmJiAhdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBIZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgICA/IGhlaWdodCArIDUwXG4gICAgICAgICAgOiB0aGlzLnN0ZXBDb250ZW50cy50b0FycmF5KClbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgNTA7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzdGVwSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRTdGVwcGVyVmFyaWF0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faW5pdFN0ZXBwZXJWYXJpYXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgIHRoaXMuc3RlcENoYW5nZSQgPSBmcm9tKHRoaXMuc3RlcHMudG9BcnJheSgpKTtcbiAgICB0aGlzLmdldFN0ZXBDaGFuZ2UkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLmFjdGl2ZVN0ZXBJbmRleF0pIHtcbiAgICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdXG4gICAgICAgICAgICAubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCwgc3RlcEVsQ29udGVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5zdGVwQ29udGVudHMpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBDb250ZW50c1xuICAgICAgICAuZmlsdGVyKChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5hY3RpdmVTdGVwSW5kZXgpXG4gICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLm5hdGl2ZUVsZW1lbnQpWzBdO1xuICAgICAgaWYgKGFjdGl2ZVN0ZXAuaW5uZXJIVE1sICE9PSB0aGlzLnN0ZXBUZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLnN0ZXBDaGFuZ2VTdWJqZWN0Lm5leHQoYWN0aXZlU3RlcC5pbm5lckhUTUwpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGVwVGV4dENvbnRlbnQgPSBhY3RpdmVTdGVwLmlubmVySFRNTDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==