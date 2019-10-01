/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, HostListener, PLATFORM_ID, Inject, } from '@angular/core';
export class MdbInputDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     * @param {?} platformId
     */
    constructor(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = _elRef;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onblur() {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    oniput() {
        this.validationFunction();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    /**
     * @return {?}
     */
    oncut() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onpaste() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ondrop() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateErrorMsg(value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSuccessMsg(value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) {
            console.log(error);
        }
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            /** @type {?} */
            const textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = textWrong ? textWrong : 'wrong';
            if (!textWrong && this.errorMessage !== undefined) {
                this.wrongTextContainer.innerHTML = this.errorMessage;
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            /** @type {?} */
            const textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = textSuccess ? textSuccess : 'success';
            if (!textSuccess && this.successMessage !== undefined) {
                this.rightTextContainer.innerHTML = this.successMessage;
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            /** @type {?} */
            const newErrorMsg = changes.errorMessage.currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            /** @type {?} */
            const newSuccessMsg = changes.successMessage.currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if ((this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched')) ||
            this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    }
    /**
     * @return {?}
     */
    validationFunction() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
            if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this._renderer.removeClass(this.elLabel, 'active');
        } */
    }
    /**
     * @return {?}
     */
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    }
    /**
     * @return {?}
     */
    delayedResize() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.resize();
        }), 0);
    }
    /**
     * @return {?}
     */
    initComponent() {
        /** @type {?} */
        let inputId;
        /** @type {?} */
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkValue() {
        /** @type {?} */
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                // tslint:disable-next-line:max-line-length
                /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                    this._renderer.addClass(this.elLabel, 'active');
                } */
            }
        }
    }
}
MdbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputDirective]',
            },] }
];
/** @nocollapse */
MdbInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInputDirective.propDecorators = {
    mdbInputDirective: [{ type: Input }],
    customRegex: [{ type: Input }],
    mdbValidate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }],
    focusCheckbox: [{ type: Input }],
    focusRadio: [{ type: Input }],
    errorMessage: [{ type: Input }],
    successMessage: [{ type: Input }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    oniput: [{ type: HostListener, args: ['input',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};
if (false) {
    /** @type {?} */
    MdbInputDirective.prototype.wrongTextContainer;
    /** @type {?} */
    MdbInputDirective.prototype.rightTextContainer;
    /** @type {?} */
    MdbInputDirective.prototype.el;
    /** @type {?} */
    MdbInputDirective.prototype.elLabel;
    /** @type {?} */
    MdbInputDirective.prototype.elIcon;
    /** @type {?} */
    MdbInputDirective.prototype.element;
    /** @type {?} */
    MdbInputDirective.prototype.mdbInputDirective;
    /** @type {?} */
    MdbInputDirective.prototype.customRegex;
    /** @type {?} */
    MdbInputDirective.prototype.mdbValidate;
    /** @type {?} */
    MdbInputDirective.prototype.validateSuccess;
    /** @type {?} */
    MdbInputDirective.prototype.validateError;
    /** @type {?} */
    MdbInputDirective.prototype.focusCheckbox;
    /** @type {?} */
    MdbInputDirective.prototype.focusRadio;
    /** @type {?} */
    MdbInputDirective.prototype.errorMessage;
    /** @type {?} */
    MdbInputDirective.prototype.successMessage;
    /** @type {?} */
    MdbInputDirective.prototype.isBrowser;
    /** @type {?} */
    MdbInputDirective.prototype.isClicked;
    /**
     * @type {?}
     * @private
     */
    MdbInputDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    MdbInputDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2lucHV0cy9tZGItaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUVMLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxHQU1QLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXFCNUIsWUFDVSxNQUFrQixFQUNsQixTQUFvQixFQUNQLFVBQWtCO1FBRi9CLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQW5CdkIsT0FBRSxHQUFxQixJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFxQixJQUFJLENBQUM7UUFDakMsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDcEMsWUFBTyxHQUFRLElBQUksQ0FBQztRQUdYLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJM0IsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVzQixPQUFPO1FBQzVCLElBQUk7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FB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O0lBQzFCLHdDQUE0Qjs7SUFDNUIsNENBQWdDOztJQUNoQywwQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFDOUIsdUNBQTJCOztJQUMzQix5Q0FBOEI7O0lBQzlCLDJDQUFnQzs7SUFFaEMsc0NBQXVCOztJQUN2QixzQ0FBa0I7Ozs7O0lBR2hCLG1DQUEwQjs7Ozs7SUFDMUIsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIE9uSW5pdCxcbiAgRG9DaGVjayxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYklucHV0RGlyZWN0aXZlXScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkNoYW5nZXMge1xuICBwdWJsaWMgd3JvbmdUZXh0Q29udGFpbmVyOiBhbnk7XG4gIHB1YmxpYyByaWdodFRleHRDb250YWluZXI6IGFueTtcbiAgcHVibGljIGVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcbiAgcHVibGljIGVsTGFiZWw6IEVsZW1lbnRSZWYgfCBhbnkgPSBudWxsO1xuICBwdWJsaWMgZWxJY29uOiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgZWxlbWVudDogYW55ID0gbnVsbDtcbiAgQElucHV0KCkgbWRiSW5wdXREaXJlY3RpdmU6IE1kYklucHV0RGlyZWN0aXZlO1xuICBASW5wdXQoKSBjdXN0b21SZWdleDogYW55O1xuICBASW5wdXQoKSBtZGJWYWxpZGF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbGlkYXRlU3VjY2VzcyA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbGlkYXRlRXJyb3IgPSB0cnVlO1xuICBASW5wdXQoKSBmb2N1c0NoZWNrYm94ID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9jdXNSYWRpbyA9IHRydWU7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIGlzQ2xpY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuZWwgPSBfZWxSZWY7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25mb2N1cygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25ibHVyKCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkZ1bmN0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpIG9uY2hhbmdlKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNoZWNrVmFsdWUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25pcHV0KCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkZ1bmN0aW9uKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25rZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlICsgMC4xO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgLSAwLjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY3V0Jykgb25jdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnKSBvbnBhc3RlKCkge1xuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnKSBvbmRyb3AoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgdXBkYXRlRXJyb3JNc2codmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLndyb25nVGV4dENvbnRhaW5lcikge1xuICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3VjY2Vzc01zZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aXRhbGlzZSBhIG5ldyA8c3Bhbj4gd3JvbmcvcmlnaHQgZWxlbWVudHMgYW5kIHJlbmRlciBpdCBiZWxvdyB0aGUgaG9zdCBjb21wb25lbnQuXG4gICAgaWYgKHRoaXMubWRiVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy53cm9uZ1RleHRDb250YWluZXIsICdpbnB1dFZhbCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy53cm9uZ1RleHRDb250YWluZXIsICd0ZXh0LWRhbmdlcicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCB0aGlzLndyb25nVGV4dENvbnRhaW5lcik7XG4gICAgICBjb25zdCB0ZXh0V3JvbmcgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lcnJvcicpO1xuICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dFdyb25nID8gdGV4dFdyb25nIDogJ3dyb25nJztcbiAgICAgIGlmICghdGV4dFdyb25nICYmIHRoaXMuZXJyb3JNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5lcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyb25nVGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cbiAgICAgIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5yaWdodFRleHRDb250YWluZXIsICdpbnB1dFZhbCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5yaWdodFRleHRDb250YWluZXIsICd0ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy5yaWdodFRleHRDb250YWluZXIpO1xuICAgICAgY29uc3QgdGV4dFN1Y2Nlc3MgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdWNjZXNzJyk7XG4gICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXh0U3VjY2VzcyA/IHRleHRTdWNjZXNzIDogJ3N1Y2Nlc3MnO1xuICAgICAgaWYgKCF0ZXh0U3VjY2VzcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5yaWdodFRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5zdWNjZXNzTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Vycm9yTWVzc2FnZScpKSB7XG4gICAgICBjb25zdCBuZXdFcnJvck1zZyA9IGNoYW5nZXMuZXJyb3JNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlRXJyb3JNc2cobmV3RXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzdWNjZXNzTWVzc2FnZScpKSB7XG4gICAgICBjb25zdCBuZXdTdWNjZXNzTXNnID0gY2hhbmdlcy5zdWNjZXNzTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVN1Y2Nlc3NNc2cobmV3U3VjY2Vzc01zZyk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMubWRiVmFsaWRhdGUgJiZcbiAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWxpZCcpICYmXG4gICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctZGlydHknKSAmJlxuICAgICAgIXRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyLXN1Y2Nlc3MnKVxuICAgICkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItc3VjY2VzcycpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cm9uZ1RleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lcixcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLndyb25nVGV4dENvbnRhaW5lcixcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5tZGJWYWxpZGF0ZSAmJlxuICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxuICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWRpcnR5JykgJiZcbiAgICAgICF0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1kYW5nZXInKVxuICAgICkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItZGFuZ2VyJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyb25nVGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSAmJlxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctcHJpc3RpbmUnKSAmJlxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctdW50b3VjaGVkJykpIHx8XG4gICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmRpc2FibGVkXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItc3VjY2VzcycpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLXN1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1kYW5nZXInKSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1kYW5nZXInKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cm9uZ1RleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMudmFsaWRhdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1zdWNjZXNzJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaWYgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWxpZCcpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLWRhbmdlcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy52YWxpZGF0ZUVycm9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1kYW5nZXInKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICBpZiAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1zdWNjZXNzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGlvbkZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pbnZhbGlkJykpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItc3VjY2VzcycpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1kYW5nZXInKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLXRvdWNoZWQnKSAmJlxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctaW52YWxpZCcpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMubWRiVmFsaWRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1kYW5nZXInKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cm9uZ1RleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy10b3VjaGVkJykgJiZcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLXZhbGlkJylcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5tZGJWYWxpZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLXN1Y2Nlc3MnKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZC10ZXh0YXJlYS1hdXRvJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlO1xuICAgIGlmICh0aGlzLmZvY3VzQ2hlY2tib3ggJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25Gb2N1c1NlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c1JhZGlvICYmIHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uRm9jdXNTZWxlY3QnKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5jaGVja1ZhbHVlKCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIC8qIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ01EQi1DT01QTEVURVInICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25nLXJlZmxlY3QtbW9kZWwnKSA9PSBudWxsICYmICF0aGlzLmlzQ2xpY2tlZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICB9ICovXG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21kLXRleHRhcmVhLWF1dG8nKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkZWxheWVkUmVzaXplKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0Q29tcG9uZW50KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dElkO1xuICAgIGxldCBpbnB1dFA7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpbnB1dElkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgICB0cnkge1xuICAgICAgICBpbnB1dFAgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgICAgdGhpcy5lbExhYmVsID1cbiAgICAgICAgaW5wdXRQLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIicgKyBpbnB1dElkICsgJ1wiXScpIHx8IGlucHV0UC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgaWYgKHRoaXMuZWxMYWJlbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbEljb24gPSBpbnB1dFAucXVlcnlTZWxlY3RvcignaScpIHx8IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5lbEljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbEljb24sICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsdWUoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMuZWxMYWJlbCAhPSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmVsSWNvbikge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxJY29uLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAodmFsdWUgPT09ICcnICYmIHRoaXMuaXNDbGlja2VkKSB8fFxuICAgICAgICAodmFsdWUgPT09ICcnICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlcikgfHxcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5wbGFjZWhvbGRlcilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZy1yZWZsZWN0LW1vZGVsJykgIT0gbnVsbCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIC8qIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ01EQi1DT01QTEVURVInICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25nLXJlZmxlY3QtbW9kZWwnKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgICB9ICovXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=