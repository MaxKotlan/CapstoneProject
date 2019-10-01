/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ToastService {
    /**
     * @param {?} toastConfig
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     */
    constructor(toastConfig, overlay, _injector, sanitizer) {
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
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    show(message, title, override, type = '') {
        /** @type {?} */
        const config = override ? this.applyConfig(override) : this.applyConfig({});
        /** @type {?} */
        const toastType = type.includes('md-toast') ? type : `md-toast-${type}`;
        return this._buildNotification(toastType, message, title, config);
    }
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    success(message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    error(message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    info(message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    warning(message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    clear(toastId) {
        // Call every toastRef manualClose function
        /** @type {?} */
        let toast;
        for (toast of this.toasts) {
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
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    remove(toastId) {
        // const found = this._findToast(toastId);
        /** @type {?} */
        const found = this._findToast(toastId);
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
            const p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    }
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    isDuplicate(message) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    }
    /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    applyConfig(override = {}) {
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
        const current = Object.assign({}, this.toastConfig);
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
    }
    /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    _findToast(toastId) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    }
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
    _buildNotification(toastType, message, title, config) {
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        /** @type {?} */
        let keepInactive = false;
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
        const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        /** @type {?} */
        let sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        /** @type {?} */
        const toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        /** @type {?} */
        const ins = {
            toastId: this.index,
            message,
            toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        /** @type {?} */
        const toastInjector = new ToastInjector(toastPackage, this._injector);
        /** @type {?} */
        const component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ins.toastRef.activate();
                this.currentlyActive = this.currentlyActive + 1;
            }));
        }
        this.toasts.push(ins);
        return ins;
    }
}
ToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
    { type: Overlay },
    { type: Injector },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFnQixNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFrQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXZDLGlDQVNDOzs7SUFSQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQTJCOztJQUMzQiwrQkFBeUI7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsK0JBQTJCOztJQUMzQiw0QkFBd0I7O0lBQ3hCLCtCQUEyQjs7QUFJN0IsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7SUFPdkIsWUFFK0IsV0FBK0IsRUFDcEQsT0FBZ0IsRUFDaEIsU0FBbUIsRUFDbkIsU0FBdUI7UUFIRixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFY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QUFDLFdBQVcsQ0FBRTtRQUNyRCxPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMs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QUU7WUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDaEMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUU7U0FDbEM7O2NBQ0ssYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOztjQUMvRCxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7UUFDM0UsR0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBM1BGLFVBQVU7Ozs7NENBVU4sTUFBTSxTQUFDLFlBQVk7WUEvQmYsT0FBTztZQUhLLFFBQVE7WUFVcEIsWUFBWTs7OztJQWdCbkIsNkJBQVU7O0lBQ1YsNENBQTBCOztJQUMxQix1Q0FBb0I7O0lBQ3BCLDhCQUEyQjs7SUFDM0Isd0NBQTBDOztJQUl4QyxtQ0FBNEQ7Ozs7O0lBQzVELCtCQUF3Qjs7Ozs7SUFDeEIsaUNBQTJCOzs7OztJQUMzQixpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UsIHRzQ29uZmlnIH0gZnJvbSAnLi90b2FzdC5jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RJbmplY3RvciB9IGZyb20gJy4vdG9hc3QuaW5qZWN0b3InO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LnRva2VuJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtcmVmJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVUb2FzdCB7XG4gIHRvYXN0SWQ/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHBvcnRhbD86IENvbXBvbmVudFJlZjxhbnk+O1xuICB0b2FzdFJlZj86IFRvYXN0UmVmPGFueT47XG4gIG9uU2hvd24/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uSGlkZGVuPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvblRhcD86IE9ic2VydmFibGU8YW55PjtcbiAgb25BY3Rpb24/OiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICBpbmRleCA9IDA7XG4gIHByZXZpb3VzVG9hc3RNZXNzYWdlID0gJyc7XG4gIGN1cnJlbnRseUFjdGl2ZSA9IDA7XG4gIHRvYXN0czogQWN0aXZlVG9hc3RbXSA9IFtdO1xuICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBASW5qZWN0KFRPQVNUX0NPTkZJRykgcHVibGljIHRvYXN0Q29uZmlnOiBHbG9iYWxDb25maWcsXG4gICAgQEluamVjdChUT0FTVF9DT05GSUcpIHB1YmxpYyB0b2FzdENvbmZpZzogR2xvYmFsQ29uZmlnIHwgYW55LFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHtcbiAgICB0c0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXNlPFQ+KHNvdXJjZTogVCwgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gICAgICByZXR1cm4gdG9hc3RDb25maWcgJiYgc291cmNlICE9PSB1bmRlZmluZWQgPyBzb3VyY2UgOiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy50b2FzdENvbmZpZyA9IHRoaXMuYXBwbHlDb25maWcodG9hc3RDb25maWcpO1xuICAgIC8vIEdsb2JhbFxuICAgIHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkID0gdXNlKHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkLCAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wID0gdXNlKHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3AsIHRydWUpO1xuICAgIHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wcmV2ZW50RHVwbGljYXRlcywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcub3BhY2l0eSA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm9wYWNpdHksIDAuNSk7XG4gICAgaWYgKCF0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzKSB7XG4gICAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzID0ge307XG4gICAgfVxuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3IgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICdtZC10b2FzdC1lcnJvcic7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvIHx8ICdtZC10b2FzdC1pbmZvJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgPVxuICAgICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzIHx8ICdtZC10b2FzdC1zdWNjZXNzJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmcgPVxuICAgICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nIHx8ICdtZC10b2FzdC13YXJuaW5nJztcblxuICAgIC8vIEluZGl2aWR1YWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aW1lT3V0LCA1MDAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuY2xvc2VCdXR0b24sIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCwgMTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnByb2dyZXNzQmFyLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5lbmFibGVIdG1sID0gdXNlKHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MsICdtZC10b2FzdCcpO1xuICAgIHRoaXMudG9hc3RDb25maWcucG9zaXRpb25DbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MsICdtZC10b2FzdC10b3AtcmlnaHQnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpdGxlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzLCAnbWQtdG9hc3QtdGl0bGUnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcywgJ21kLXRvYXN0LW1lc3NhZ2UnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcywgdHJ1ZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q29tcG9uZW50LCBUb2FzdENvbXBvbmVudCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljayA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm9uQWN0aXZhdGVUaWNrLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24gPSB1c2UodGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24sICcnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbkNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uQ2xhc3MsICcnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm9wYWNpdHkgPSB1c2UodGhpcy50b2FzdENvbmZpZy5vcGFjaXR5LCAwLjUpO1xuICB9XG5cbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAvLyBzaG93KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZywgdHlwZSA9ICcnKSB7XG4gIHNob3cobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnIHwgYW55LCB0eXBlID0gJycpIHtcbiAgICBjb25zdCBjb25maWcgPSBvdmVycmlkZSA/IHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpIDogdGhpcy5hcHBseUNvbmZpZyh7fSk7XG4gICAgY29uc3QgdG9hc3RUeXBlID0gdHlwZS5pbmNsdWRlcygnbWQtdG9hc3QnKSA/IHR5cGUgOiBgbWQtdG9hc3QtJHt0eXBlfWA7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHRvYXN0VHlwZSwgbWVzc2FnZSwgdGl0bGUsIGNvbmZpZyk7XG4gIH1cblxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIC8vIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKiBzaG93IGVycm9yIHRvYXN0ICovXG4gIC8vIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3I7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyBpbmZvIHRvYXN0ICovXG4gIC8vIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKiBzaG93IHdhcm5pbmcgdG9hc3QgKi9cbiAgLy8gd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmc7XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3IgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpIHtcbiAgICAvLyBDYWxsIGV2ZXJ5IHRvYXN0UmVmIG1hbnVhbENsb3NlIGZ1bmN0aW9uXG4gICAgbGV0IHRvYXN0OiBhbnk7XG4gICAgZm9yICh0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xuICAgICAgaWYgKHRvYXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9hc3QudG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICAvLyBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBjb25zdCBmb3VuZDogYW55ID0gdGhpcy5fZmluZFRvYXN0KHRvYXN0SWQpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm91bmQuYWN0aXZlVG9hc3QudG9hc3RSZWYuY2xvc2UoKTtcbiAgICB0aGlzLnRvYXN0cy5zcGxpY2UoZm91bmQuaW5kZXgsIDEpO1xuICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgLSAxO1xuICAgIGlmICghdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgfHwgIXRoaXMudG9hc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50bHlBY3RpdmUgPD0gK3RoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXSkge1xuICAgICAgLy8gY29uc3QgcCA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGNvbnN0IHA6IGFueSA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGlmICghcC5pc0luYWN0aXZlKCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICAgIHAuYWN0aXZhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0b2FzdCBtZXNzYWdlIGlzIGFscmVhZHkgc2hvd25cbiAgICovXG4gIGlzRHVwbGljYXRlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS5tZXNzYWdlID09PSBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogY3JlYXRlIGEgY2xvbmUgb2YgZ2xvYmFsIGNvbmZpZyBhbmQgYXBwbHkgaW5kaXZpZHVhbCBzZXR0aW5ncyAqL1xuICBwcml2YXRlIGFwcGx5Q29uZmlnKG92ZXJyaWRlOiBJbmRpdmlkdWFsQ29uZmlnID0ge30pOiBHbG9iYWxDb25maWcge1xuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIG92ZXJyaWRlICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnQ6IEdsb2JhbENvbmZpZyA9IHsgLi4udGhpcy50b2FzdENvbmZpZyB9O1xuICAgIGN1cnJlbnQuY2xvc2VCdXR0b24gPSB1c2Uob3ZlcnJpZGUuY2xvc2VCdXR0b24sIGN1cnJlbnQuY2xvc2VCdXR0b24pO1xuICAgIGN1cnJlbnQuZXh0ZW5kZWRUaW1lT3V0ID0gdXNlKG92ZXJyaWRlLmV4dGVuZGVkVGltZU91dCwgY3VycmVudC5leHRlbmRlZFRpbWVPdXQpO1xuICAgIGN1cnJlbnQucHJvZ3Jlc3NCYXIgPSB1c2Uob3ZlcnJpZGUucHJvZ3Jlc3NCYXIsIGN1cnJlbnQucHJvZ3Jlc3NCYXIpO1xuICAgIGN1cnJlbnQudGltZU91dCA9IHVzZShvdmVycmlkZS50aW1lT3V0LCBjdXJyZW50LnRpbWVPdXQpO1xuICAgIGN1cnJlbnQuZW5hYmxlSHRtbCA9IHVzZShvdmVycmlkZS5lbmFibGVIdG1sLCBjdXJyZW50LmVuYWJsZUh0bWwpO1xuICAgIGN1cnJlbnQudG9hc3RDbGFzcyA9IHVzZShvdmVycmlkZS50b2FzdENsYXNzLCBjdXJyZW50LnRvYXN0Q2xhc3MpO1xuICAgIGN1cnJlbnQucG9zaXRpb25DbGFzcyA9IHVzZShvdmVycmlkZS5wb3NpdGlvbkNsYXNzLCBjdXJyZW50LnBvc2l0aW9uQ2xhc3MpO1xuICAgIGN1cnJlbnQudGl0bGVDbGFzcyA9IHVzZShvdmVycmlkZS50aXRsZUNsYXNzLCBjdXJyZW50LnRpdGxlQ2xhc3MpO1xuICAgIGN1cnJlbnQubWVzc2FnZUNsYXNzID0gdXNlKG92ZXJyaWRlLm1lc3NhZ2VDbGFzcywgY3VycmVudC5tZXNzYWdlQ2xhc3MpO1xuICAgIGN1cnJlbnQudGFwVG9EaXNtaXNzID0gdXNlKG92ZXJyaWRlLnRhcFRvRGlzbWlzcywgY3VycmVudC50YXBUb0Rpc21pc3MpO1xuICAgIGN1cnJlbnQudG9hc3RDb21wb25lbnQgPSB1c2Uob3ZlcnJpZGUudG9hc3RDb21wb25lbnQsIGN1cnJlbnQudG9hc3RDb21wb25lbnQpO1xuICAgIGN1cnJlbnQub25BY3RpdmF0ZVRpY2sgPSB1c2Uob3ZlcnJpZGUub25BY3RpdmF0ZVRpY2ssIGN1cnJlbnQub25BY3RpdmF0ZVRpY2spO1xuICAgIGN1cnJlbnQuYWN0aW9uQnV0dG9uID0gdXNlKG92ZXJyaWRlLmFjdGlvbkJ1dHRvbiwgY3VycmVudC5hY3Rpb25CdXR0b24pO1xuICAgIGN1cnJlbnQuYWN0aW9uQnV0dG9uQ2xhc3MgPSB1c2Uob3ZlcnJpZGUuYWN0aW9uQnV0dG9uQ2xhc3MsIGN1cnJlbnQuYWN0aW9uQnV0dG9uQ2xhc3MpO1xuICAgIGN1cnJlbnQub3BhY2l0eSA9IHVzZShvdmVycmlkZS5vcGFjaXR5LCBjdXJyZW50Lm9wYWNpdHkpO1xuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdG9hc3Qgb2JqZWN0IGJ5IGlkXG4gICAqL1xuICBwcml2YXRlIF9maW5kVG9hc3QodG9hc3RJZDogbnVtYmVyKTogeyBpbmRleDogbnVtYmVyOyBhY3RpdmVUb2FzdDogQWN0aXZlVG9hc3QgfSB8IG51bGwge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgIHJldHVybiB7IGluZGV4OiBpLCBhY3RpdmVUb2FzdDogdGhpcy50b2FzdHNbaV0gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgYXR0YWNoZXMgdG9hc3QgZGF0YSB0byBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsIGlmIHRvYXN0IGlzIGR1cGxpY2F0ZSBhbmQgcHJldmVudER1cGxpY2F0ZXMgPT0gVHJ1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfYnVpbGROb3RpZmljYXRpb24oXG4gICAgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29uZmlnOiBHbG9iYWxDb25maWdcbiAgKTogQWN0aXZlVG9hc3QgfCBudWxsIHwgYW55IHtcbiAgICAvLyBtYXggb3BlbmVkIGFuZCBhdXRvIGRpc21pc3MgPSB0cnVlXG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5pc0R1cGxpY2F0ZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNUb2FzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgJiYgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQpIHtcbiAgICAgIGtlZXBJbmFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcykge1xuICAgICAgICB0aGlzLmNsZWFyKHRoaXMudG9hc3RzW3RoaXMudG9hc3RzLmxlbmd0aCAtIHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkXS50b2FzdElkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGtlZXBJbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcucG9zaXRpb25DbGFzcywgdGhpcy5vdmVybGF5Q29udGFpbmVyKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCArIDE7XG4gICAgLy8gbGV0IHNhbml0aXplZE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBzYW5pdGl6ZWRNZXNzYWdlOiBhbnkgPSBtZXNzYWdlO1xuICAgIGlmIChtZXNzYWdlICYmIGNvbmZpZy5lbmFibGVIdG1sKSB7XG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCB0b2FzdFJlZiA9IG5ldyBUb2FzdFJlZihvdmVybGF5UmVmKTtcbiAgICBjb25zdCB0b2FzdFBhY2thZ2UgPSBuZXcgVG9hc3RQYWNrYWdlKFxuICAgICAgdGhpcy5pbmRleCxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRvYXN0VHlwZSxcbiAgICAgIHRvYXN0UmVmXG4gICAgKTtcbiAgICAvLyBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0ID0ge1xuICAgIGNvbnN0IGluczogQWN0aXZlVG9hc3QgfCBhbnkgPSB7XG4gICAgICB0b2FzdElkOiB0aGlzLmluZGV4LFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRvYXN0UmVmLFxuICAgICAgb25TaG93bjogdG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLFxuICAgICAgb25IaWRkZW46IHRvYXN0UmVmLmFmdGVyQ2xvc2VkKCksXG4gICAgICBvblRhcDogdG9hc3RQYWNrYWdlLm9uVGFwKCksXG4gICAgICBvbkFjdGlvbjogdG9hc3RQYWNrYWdlLm9uQWN0aW9uKCksXG4gICAgfTtcbiAgICBjb25zdCB0b2FzdEluamVjdG9yID0gbmV3IFRvYXN0SW5qZWN0b3IodG9hc3RQYWNrYWdlLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudFBvcnRhbChjb25maWcudG9hc3RDb21wb25lbnQsIHRvYXN0SW5qZWN0b3IpO1xuICAgIGlucy5wb3J0YWwgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQsIHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3ApO1xuICAgIGlmICgha2VlcEluYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zLnRvYXN0UmVmLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG9hc3RzLnB1c2goaW5zKTtcbiAgICByZXR1cm4gaW5zO1xuICB9XG59XG4iXX0=