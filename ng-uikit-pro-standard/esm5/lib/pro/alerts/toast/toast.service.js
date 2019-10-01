/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, Inject, SecurityContext } from '@angular/core';
import { Overlay } from '../overlay/overlay';
import { ComponentPortal } from '../portal/portal';
import { ToastPackage, tsConfig } from './toast.config';
import { ToastInjector } from './toast.injector';
import { TOAST_CONFIG } from './toast.token';
import { ToastComponent } from './toast.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastRef } from './toast-ref';
/**
 * @record
 */
export function ActiveToast() { }
if (false) {
    /** @type {?|undefined} */
    ActiveToast.prototype.toastId;
    /** @type {?|undefined} */
    ActiveToast.prototype.message;
    /** @type {?|undefined} */
    ActiveToast.prototype.portal;
    /** @type {?|undefined} */
    ActiveToast.prototype.toastRef;
    /** @type {?|undefined} */
    ActiveToast.prototype.onShown;
    /** @type {?|undefined} */
    ActiveToast.prototype.onHidden;
    /** @type {?|undefined} */
    ActiveToast.prototype.onTap;
    /** @type {?|undefined} */
    ActiveToast.prototype.onAction;
}
var ToastService = /** @class */ (function () {
    function ToastService(toastConfig, overlay, _injector, sanitizer) {
        this.toastConfig = toastConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        tsConfig.serviceInstance = this;
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return toastConfig && source !== undefined ? source : defaultValue;
        }
        this.toastConfig = this.applyConfig(toastConfig);
        // Global
        this.toastConfig.maxOpened = use(this.toastConfig.maxOpened, 0);
        this.toastConfig.autoDismiss = use(this.toastConfig.autoDismiss, false);
        this.toastConfig.newestOnTop = use(this.toastConfig.newestOnTop, true);
        this.toastConfig.preventDuplicates = use(this.toastConfig.preventDuplicates, false);
        this.toastConfig.opacity = use(this.toastConfig.opacity, 0.5);
        if (!this.toastConfig.iconClasses) {
            this.toastConfig.iconClasses = {};
        }
        this.toastConfig.iconClasses.error = this.toastConfig.iconClasses.error || 'md-toast-error';
        this.toastConfig.iconClasses.info = this.toastConfig.iconClasses.info || 'md-toast-info';
        this.toastConfig.iconClasses.success =
            this.toastConfig.iconClasses.success || 'md-toast-success';
        this.toastConfig.iconClasses.warning =
            this.toastConfig.iconClasses.warning || 'md-toast-warning';
        // Individual
        this.toastConfig.timeOut = use(this.toastConfig.timeOut, 5000);
        this.toastConfig.closeButton = use(this.toastConfig.closeButton, false);
        this.toastConfig.extendedTimeOut = use(this.toastConfig.extendedTimeOut, 1000);
        this.toastConfig.progressBar = use(this.toastConfig.progressBar, false);
        this.toastConfig.enableHtml = use(this.toastConfig.enableHtml, false);
        this.toastConfig.toastClass = use(this.toastConfig.toastClass, 'md-toast');
        this.toastConfig.positionClass = use(this.toastConfig.positionClass, 'md-toast-top-right');
        this.toastConfig.titleClass = use(this.toastConfig.titleClass, 'md-toast-title');
        this.toastConfig.messageClass = use(this.toastConfig.messageClass, 'md-toast-message');
        this.toastConfig.tapToDismiss = use(this.toastConfig.tapToDismiss, true);
        this.toastConfig.toastComponent = use(this.toastConfig.toastComponent, ToastComponent);
        this.toastConfig.onActivateTick = use(this.toastConfig.onActivateTick, false);
        this.toastConfig.actionButton = use(this.toastConfig.actionButton, '');
        this.toastConfig.actionButtonClass = use(this.toastConfig.actionButtonClass, '');
        this.toastConfig.opacity = use(this.toastConfig.opacity, 0.5);
    }
    /** show successful toast */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    ToastService.prototype.show = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        /** @type {?} */
        var config = override ? this.applyConfig(override) : this.applyConfig({});
        /** @type {?} */
        var toastType = type.includes('md-toast') ? type : "md-toast-" + type;
        return this._buildNotification(toastType, message, title, config);
    };
    /** show successful toast */
    // success(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.success = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    // error(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.error = /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    // info(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.info = /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.warning = /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastService.prototype.clear = /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    function (toastId) {
        var e_1, _a;
        // Call every toastRef manualClose function
        /** @type {?} */
        var toast;
        try {
            for (var _b = tslib_1.__values(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                toast = _c.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype.remove = /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        // const found = this._findToast(toastId);
        /** @type {?} */
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastConfig.maxOpened && this.toasts[this.currentlyActive]) {
            // const p = this.toasts[this.currentlyActive].toastRef;
            /** @type {?} */
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.isDuplicate = /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /** create a clone of global config and apply individual settings */
    /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.applyConfig = /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    function (override) {
        if (override === void 0) { override = {}; }
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        /** @type {?} */
        var current = tslib_1.__assign({}, this.toastConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        current.actionButton = use(override.actionButton, current.actionButton);
        current.actionButtonClass = use(override.actionButtonClass, current.actionButtonClass);
        current.opacity = use(override.opacity, current.opacity);
        return current;
    };
    /**
     * Find toast object by id
     */
    /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype._findToast = /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     */
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastService.prototype._buildNotification = /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    function (toastType, message, title, config) {
        var _this = this;
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        /** @type {?} */
        var keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - this.toastConfig.maxOpened].toastId);
            }
        }
        if (keepInactive) {
            return;
        }
        /** @type {?} */
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        /** @type {?} */
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        /** @type {?} */
        var toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        /** @type {?} */
        var ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        /** @type {?} */
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        /** @type {?} */
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            }));
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
        { type: Overlay },
        { type: Injector },
        { type: DomSanitizer }
    ]; };
    return ToastService;
}());
export { ToastService };
if (false) {
    /** @type {?} */
    ToastService.prototype.index;
    /** @type {?} */
    ToastService.prototype.previousToastMessage;
    /** @type {?} */
    ToastService.prototype.currentlyActive;
    /** @type {?} */
    ToastService.prototype.toasts;
    /** @type {?} */
    ToastService.prototype.overlayContainer;
    /** @type {?} */
    ToastService.prototype.toastConfig;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBa0MsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUV2QyxpQ0FTQzs7O0lBUkMsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDZCQUEyQjs7SUFDM0IsK0JBQXlCOztJQUN6Qiw4QkFBMEI7O0lBQzFCLCtCQUEyQjs7SUFDM0IsNEJBQXdCOztJQUN4QiwrQkFBMkI7O0FBRzdCO0lBUUUsc0JBRStCLFdBQStCLEVBQ3BELE9BQWdCLEVBQ2hCLFNBQW1CLEVBQ25CLFNBQXVCO1FBSEYsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQ3BELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBWGpDLFVBQUssR0FBRyxDQUFDLENB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QUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBM1BGLFVBQVU7Ozs7Z0RBVU4sTUFBTSxTQUFDLFlBQVk7Z0JBL0JmLE9BQU87Z0JBSEssUUFBUTtnQkFVcEIsWUFBWTs7SUEwUXJCLG1CQUFDO0NBQUEsQUE1UEQsSUE0UEM7U0EzUFksWUFBWTs7O0lBQ3ZCLDZCQUFVOztJQUNWLDRDQUEwQjs7SUFDMUIsdUNBQW9COztJQUNwQiw4QkFBMkI7O0lBQzNCLHdDQUEwQzs7SUFJeEMsbUNBQTREOzs7OztJQUM1RCwrQkFBd0I7Ozs7O0lBQ3hCLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZywgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlLCB0c0NvbmZpZyB9IGZyb20gJy4vdG9hc3QuY29uZmlnJztcbmltcG9ydCB7IFRvYXN0SW5qZWN0b3IgfSBmcm9tICcuL3RvYXN0LmluamVjdG9yJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVE9BU1RfQ09ORklHIH0gZnJvbSAnLi90b2FzdC50b2tlbic7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LXJlZic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Qge1xuICB0b2FzdElkPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBwb3J0YWw/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgdG9hc3RSZWY/OiBUb2FzdFJlZjxhbnk+O1xuICBvblNob3duPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkhpZGRlbj86IE9ic2VydmFibGU8YW55PjtcbiAgb25UYXA/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQWN0aW9uPzogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgaW5kZXggPSAwO1xuICBwcmV2aW91c1RvYXN0TWVzc2FnZSA9ICcnO1xuICBjdXJyZW50bHlBY3RpdmUgPSAwO1xuICB0b2FzdHM6IEFjdGl2ZVRvYXN0W10gPSBbXTtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gQEluamVjdChUT0FTVF9DT05GSUcpIHB1YmxpYyB0b2FzdENvbmZpZzogR2xvYmFsQ29uZmlnLFxuICAgIEBJbmplY3QoVE9BU1RfQ09ORklHKSBwdWJsaWMgdG9hc3RDb25maWc6IEdsb2JhbENvbmZpZyB8IGFueSxcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgdHNDb25maWcuc2VydmljZUluc3RhbmNlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIHRvYXN0Q29uZmlnICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RDb25maWcgPSB0aGlzLmFwcGx5Q29uZmlnKHRvYXN0Q29uZmlnKTtcbiAgICAvLyBHbG9iYWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCwgMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wLCB0cnVlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdXNlKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm9wYWNpdHkgPSB1c2UodGhpcy50b2FzdENvbmZpZy5vcGFjaXR5LCAwLjUpO1xuICAgIGlmICghdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcykge1xuICAgICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3NlcyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciB8fCAnbWQtdG9hc3QtZXJyb3InO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbyB8fCAnbWQtdG9hc3QtaW5mbyc7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzID1cbiAgICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyB8fCAnbWQtdG9hc3Qtc3VjY2Vzcyc7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nID1cbiAgICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyB8fCAnbWQtdG9hc3Qtd2FybmluZyc7XG5cbiAgICAvLyBJbmRpdmlkdWFsXG4gICAgdGhpcy50b2FzdENvbmZpZy50aW1lT3V0ID0gdXNlKHRoaXMudG9hc3RDb25maWcudGltZU91dCwgNTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5jbG9zZUJ1dHRvbiA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQsIDEwMDApO1xuICAgIHRoaXMudG9hc3RDb25maWcucHJvZ3Jlc3NCYXIgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmVuYWJsZUh0bWwsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENsYXNzLCAnbWQtdG9hc3QnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbkNsYXNzLCAnbWQtdG9hc3QtdG9wLXJpZ2h0Jyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcudGl0bGVDbGFzcywgJ21kLXRvYXN0LXRpdGxlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MsICdtZC10b2FzdC1tZXNzYWdlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MsIHRydWUpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDb21wb25lbnQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCwgVG9hc3RDb21wb25lbnQpO1xuICAgIHRoaXMudG9hc3RDb25maWcub25BY3RpdmF0ZVRpY2sgPSB1c2UodGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljaywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uLCAnJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b25DbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbkNsYXNzLCAnJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5vcGFjaXR5ID0gdXNlKHRoaXMudG9hc3RDb25maWcub3BhY2l0eSwgMC41KTtcbiAgfVxuXG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgLy8gc2hvdyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcsIHR5cGUgPSAnJykge1xuICBzaG93KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZyB8IGFueSwgdHlwZSA9ICcnKSB7XG4gICAgY29uc3QgY29uZmlnID0gb3ZlcnJpZGUgPyB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSA6IHRoaXMuYXBwbHlDb25maWcoe30pO1xuICAgIGNvbnN0IHRvYXN0VHlwZSA9IHR5cGUuaW5jbHVkZXMoJ21kLXRvYXN0JykgPyB0eXBlIDogYG1kLXRvYXN0LSR7dHlwZX1gO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0b2FzdFR5cGUsIG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpO1xuICB9XG5cbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAvLyBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3M7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICAvLyBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvcjtcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG5cbiAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICAvLyBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm87XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIC8vIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG9yIGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICBjbGVhcih0b2FzdElkPzogbnVtYmVyKSB7XG4gICAgLy8gQ2FsbCBldmVyeSB0b2FzdFJlZiBtYW51YWxDbG9zZSBmdW5jdGlvblxuICAgIGxldCB0b2FzdDogYW55O1xuICAgIGZvciAodG9hc3Qgb2YgdGhpcy50b2FzdHMpIHtcbiAgICAgIGlmICh0b2FzdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRvYXN0LnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICByZW1vdmUodG9hc3RJZDogbnVtYmVyKSB7XG4gICAgLy8gY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgY29uc3QgZm91bmQ6IGFueSA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkIHx8ICF0aGlzLnRvYXN0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudGx5QWN0aXZlIDw9ICt0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCAmJiB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0pIHtcbiAgICAgIC8vIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBjb25zdCBwOiBhbnkgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogSW5kaXZpZHVhbENvbmZpZyA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICBmdW5jdGlvbiB1c2U8VD4oc291cmNlOiBULCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgIHJldHVybiBvdmVycmlkZSAmJiBzb3VyY2UgIT09IHVuZGVmaW5lZCA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50OiBHbG9iYWxDb25maWcgPSB7IC4uLnRoaXMudG9hc3RDb25maWcgfTtcbiAgICBjdXJyZW50LmNsb3NlQnV0dG9uID0gdXNlKG92ZXJyaWRlLmNsb3NlQnV0dG9uLCBjdXJyZW50LmNsb3NlQnV0dG9uKTtcbiAgICBjdXJyZW50LmV4dGVuZGVkVGltZU91dCA9IHVzZShvdmVycmlkZS5leHRlbmRlZFRpbWVPdXQsIGN1cnJlbnQuZXh0ZW5kZWRUaW1lT3V0KTtcbiAgICBjdXJyZW50LnByb2dyZXNzQmFyID0gdXNlKG92ZXJyaWRlLnByb2dyZXNzQmFyLCBjdXJyZW50LnByb2dyZXNzQmFyKTtcbiAgICBjdXJyZW50LnRpbWVPdXQgPSB1c2Uob3ZlcnJpZGUudGltZU91dCwgY3VycmVudC50aW1lT3V0KTtcbiAgICBjdXJyZW50LmVuYWJsZUh0bWwgPSB1c2Uob3ZlcnJpZGUuZW5hYmxlSHRtbCwgY3VycmVudC5lbmFibGVIdG1sKTtcbiAgICBjdXJyZW50LnRvYXN0Q2xhc3MgPSB1c2Uob3ZlcnJpZGUudG9hc3RDbGFzcywgY3VycmVudC50b2FzdENsYXNzKTtcbiAgICBjdXJyZW50LnBvc2l0aW9uQ2xhc3MgPSB1c2Uob3ZlcnJpZGUucG9zaXRpb25DbGFzcywgY3VycmVudC5wb3NpdGlvbkNsYXNzKTtcbiAgICBjdXJyZW50LnRpdGxlQ2xhc3MgPSB1c2Uob3ZlcnJpZGUudGl0bGVDbGFzcywgY3VycmVudC50aXRsZUNsYXNzKTtcbiAgICBjdXJyZW50Lm1lc3NhZ2VDbGFzcyA9IHVzZShvdmVycmlkZS5tZXNzYWdlQ2xhc3MsIGN1cnJlbnQubWVzc2FnZUNsYXNzKTtcbiAgICBjdXJyZW50LnRhcFRvRGlzbWlzcyA9IHVzZShvdmVycmlkZS50YXBUb0Rpc21pc3MsIGN1cnJlbnQudGFwVG9EaXNtaXNzKTtcbiAgICBjdXJyZW50LnRvYXN0Q29tcG9uZW50ID0gdXNlKG92ZXJyaWRlLnRvYXN0Q29tcG9uZW50LCBjdXJyZW50LnRvYXN0Q29tcG9uZW50KTtcbiAgICBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrID0gdXNlKG92ZXJyaWRlLm9uQWN0aXZhdGVUaWNrLCBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrKTtcbiAgICBjdXJyZW50LmFjdGlvbkJ1dHRvbiA9IHVzZShvdmVycmlkZS5hY3Rpb25CdXR0b24sIGN1cnJlbnQuYWN0aW9uQnV0dG9uKTtcbiAgICBjdXJyZW50LmFjdGlvbkJ1dHRvbkNsYXNzID0gdXNlKG92ZXJyaWRlLmFjdGlvbkJ1dHRvbkNsYXNzLCBjdXJyZW50LmFjdGlvbkJ1dHRvbkNsYXNzKTtcbiAgICBjdXJyZW50Lm9wYWNpdHkgPSB1c2Uob3ZlcnJpZGUub3BhY2l0eSwgY3VycmVudC5vcGFjaXR5KTtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KHRvYXN0SWQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlcjsgYWN0aXZlVG9hc3Q6IEFjdGl2ZVRvYXN0IH0gfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0udG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICByZXR1cm4geyBpbmRleDogaSwgYWN0aXZlVG9hc3Q6IHRoaXMudG9hc3RzW2ldIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGF0dGFjaGVzIHRvYXN0IGRhdGEgdG8gY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCBpZiB0b2FzdCBpcyBkdXBsaWNhdGUgYW5kIHByZXZlbnREdXBsaWNhdGVzID09IFRydWVcbiAgICovXG4gIHByaXZhdGUgX2J1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXG4gICk6IEFjdGl2ZVRvYXN0IHwgbnVsbCB8IGFueSB7XG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxuICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzVG9hc3RNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQga2VlcEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MpIHtcbiAgICAgICAgdGhpcy5jbGVhcih0aGlzLnRvYXN0c1t0aGlzLnRvYXN0cy5sZW5ndGggLSB0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZF0udG9hc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrZWVwSW5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnLnBvc2l0aW9uQ2xhc3MsIHRoaXMub3ZlcmxheUNvbnRhaW5lcik7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIC8vIGxldCBzYW5pdGl6ZWRNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogYW55ID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZlxuICAgICk7XG4gICAgLy8gY29uc3QgaW5zOiBBY3RpdmVUb2FzdCA9IHtcbiAgICBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0IHwgYW55ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgIH07XG4gICAgY29uc3QgdG9hc3RJbmplY3RvciA9IG5ldyBUb2FzdEluamVjdG9yKHRvYXN0UGFja2FnZSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29uZmlnLnRvYXN0Q29tcG9uZW50LCB0b2FzdEluamVjdG9yKTtcbiAgICBpbnMucG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wKTtcbiAgICBpZiAoIWtlZXBJbmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucy50b2FzdFJlZi5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0cy5wdXNoKGlucyk7XG4gICAgcmV0dXJuIGlucztcbiAgfVxufVxuIl19