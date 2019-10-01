/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Configuration for an individual toast.
 * @record
 */
export function IndividualConfig() { }
if (false) {
    /**
     * toast time to live in milliseconds
     * default: 5000
     * @type {?|undefined}
     */
    IndividualConfig.prototype.timeOut;
    /**
     * toast show close button
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.closeButton;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.extendedTimeOut;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.progressBar;
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.enableHtml;
    /**
     * css class on toast component
     * default: toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastClass;
    /**
     * css class on toast container
     * default: toast-top-right
     * @type {?|undefined}
     */
    IndividualConfig.prototype.positionClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.titleClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.messageClass;
    /**
     * clicking on toast dismisses it
     * default: true
     * @type {?|undefined}
     */
    IndividualConfig.prototype.tapToDismiss;
    /**
     * Angular toast component to be shown
     * default: Toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastComponent;
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.onActivateTick;
    /**
     * actionButton - Field will create action button in toast, and assing parameter's value as button text
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButton;
    /**
     * - Adds class to the toast action button
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButtonClass;
    /** @type {?|undefined} */
    IndividualConfig.prototype.opacity;
}
/**
 * @record
 */
export function ToastIconClasses() { }
if (false) {
    /** @type {?|undefined} */
    ToastIconClasses.prototype.error;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.info;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.success;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.warning;
}
// WARNING: interface has both a type and a value, skipping emit
/**
 * Remove warning message from angular-cli
 */
export class GlobalConfig {
}
/**
 * Everything a toast needs to launch
 */
export class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        this._onTap.complete();
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
        this._onAction.complete();
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onTap;
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onAction;
    /** @type {?} */
    ToastPackage.prototype.toastId;
    /** @type {?} */
    ToastPackage.prototype.config;
    /** @type {?} */
    ToastPackage.prototype.message;
    /** @type {?} */
    ToastPackage.prototype.title;
    /** @type {?} */
    ToastPackage.prototype.toastType;
    /** @type {?} */
    ToastPackage.prototype.toastRef;
}
/** @type {?} */
export const tsConfig = {
    serviceInstance: new Object(),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7OztBQVEzQyxzQ0F5RUM7Ozs7Ozs7SUFuRUMsbUNBQXVCOzs7Ozs7SUFLdkIsdUNBQXNCOzs7Ozs7SUFPdEIsMkNBQStCOzs7Ozs7SUFLL0IsdUNBQXNCOzs7Ozs7SUFLdEIsc0NBQXFCOzs7Ozs7SUFLckIsc0NBQW9COzs7Ozs7SUFLcEIseUNBQTZCOzs7Ozs7SUFLN0Isc0NBQW9COzs7Ozs7SUFLcEIsd0NBQXNCOzs7Ozs7SUFLdEIsd0NBQXVCOzs7Ozs7SUFLdkIsMENBQTBDOzs7Ozs7SUFLMUMsMENBQXlCOzs7OztJQUl6Qix3Q0FBc0I7Ozs7O0lBSXRCLDZDQUEyQjs7SUFDM0IsbUNBQWlCOzs7OztBQUduQixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixtQ0FBaUI7Ozs7OztBQW1DbkIsTUFBTSxPQUFPLFlBQVk7Q0FBRzs7OztBQUk1QixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBSXZCLFlBQ1MsT0FBZSxFQUNmLE1BQXdCLEVBQ3hCLE9BQTBCLEVBQzFCLEtBQWEsRUFDYixTQUFpQixFQUNqQixRQUF1QjtRQUx2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQVR4QixXQUFNLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDckMsY0FBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUzdDLENBQUM7Ozs7O0lBR0osVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsTUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjs7Ozs7O0lBL0JDLDhCQUE2Qzs7Ozs7SUFDN0MsaUNBQWdEOztJQUc5QywrQkFBc0I7O0lBQ3RCLDhCQUErQjs7SUFDL0IsK0JBQWlDOztJQUNqQyw2QkFBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsZ0NBQThCOzs7QUF3QmxDLE1BQU0sT0FBTyxRQUFRLEdBQUc7SUFDdEIsZUFBZSxFQUFFLElBQUksTUFBTSxFQUFFO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8taW5mZXJyYWJsZS10eXBlcyAqL1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtcmVmJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogdG9hc3QgdGltZSB0byBsaXZlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBkZWZhdWx0OiA1MDAwXG4gICAqL1xuICAvLyB0aW1lT3V0PzogbnVtYmVyO1xuICB0aW1lT3V0PzogbnVtYmVyIHwgYW55O1xuICAvKipcbiAgICogdG9hc3Qgc2hvdyBjbG9zZSBidXR0b25cbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgLyoqIHRpbWUgdG8gY2xvc2UgYWZ0ZXIgYSB1c2VyIGhvdmVycyBvdmVyIHRvYXN0ICovXG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgLy8gZXh0ZW5kZWRUaW1lT3V0PzogbnVtYmVyO1xuICBleHRlbmRlZFRpbWVPdXQ/OiBudW1iZXIgfCBhbnk7XG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJvZ3Jlc3NCYXI/OiBib29sZWFuO1xuICAvKipcbiAgICogcmVuZGVyIGh0bWwgaW4gdG9hc3QgbWVzc2FnZSAocG9zc2libHkgdW5zYWZlKVxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZW5hYmxlSHRtbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29tcG9uZW50XG4gICAqIGRlZmF1bHQ6IHRvYXN0XG4gICAqL1xuICB0b2FzdENsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxuICAgKiBkZWZhdWx0OiB0b2FzdC10b3AtcmlnaHRcbiAgICovXG4gIHBvc2l0aW9uQ2xhc3M/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG8gdG9hc3QgdGl0bGVcbiAgICogZGVmYXVsdDogdG9hc3QtdGl0bGVcbiAgICovXG4gIHRpdGxlQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG8gdG9hc3QgdGl0bGVcbiAgICogZGVmYXVsdDogdG9hc3QtdGl0bGVcbiAgICovXG4gIG1lc3NhZ2VDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNsaWNraW5nIG9uIHRvYXN0IGRpc21pc3NlcyBpdFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICB0YXBUb0Rpc21pc3M/OiBib29sZWFuO1xuICAvKipcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cbiAgICogZGVmYXVsdDogVG9hc3RcbiAgICovXG4gIHRvYXN0Q29tcG9uZW50PzogQ29tcG9uZW50VHlwZTxhbnk+IHwgYW55O1xuICAvKipcbiAgICogSGVscHMgc2hvdyB0b2FzdCBmcm9tIGEgd2Vic29ja2V0IG9yIGZyb20gZXZlbnQgb3V0c2lkZSBBbmd1bGFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBvbkFjdGl2YXRlVGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBhY3Rpb25CdXR0b24gLSBGaWVsZCB3aWxsIGNyZWF0ZSBhY3Rpb24gYnV0dG9uIGluIHRvYXN0LCBhbmQgYXNzaW5nIHBhcmFtZXRlcidzIHZhbHVlIGFzIGJ1dHRvbiB0ZXh0XG4gICAqL1xuICBhY3Rpb25CdXR0b24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAtIEFkZHMgY2xhc3MgdG8gdGhlIHRvYXN0IGFjdGlvbiBidXR0b25cbiAgICovXG4gIGFjdGlvbkJ1dHRvbkNsYXNzPzogc3RyaW5nO1xuICBvcGFjaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0SWNvbkNsYXNzZXMge1xuICBlcnJvcj86IHN0cmluZztcbiAgaW5mbz86IHN0cmluZztcbiAgc3VjY2Vzcz86IHN0cmluZztcbiAgd2FybmluZz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBHbG9iYWwgVG9hc3QgY29uZmlndXJhdGlvblxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcbiAgICogWmVybyBpcyB1bmxpbWl0ZWRcbiAgICogZGVmYXVsdDogMFxuICAgKi9cbiAgbWF4T3BlbmVkPzogbnVtYmVyO1xuICAvKipcbiAgICogZGlzbWlzcyBjdXJyZW50IHRvYXN0IHdoZW4gbWF4IGlzIHJlYWNoZWRcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGF1dG9EaXNtaXNzPzogYm9vbGVhbjtcbiAgaWNvbkNsYXNzZXM/OiBUb2FzdEljb25DbGFzc2VzO1xuICAvKipcbiAgICogTmV3IHRvYXN0IHBsYWNlbWVudFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICBuZXdlc3RPblRvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByZXZlbnREdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbn1cbi8qKlxuICogUmVtb3ZlIHdhcm5pbmcgbWVzc2FnZSBmcm9tIGFuZ3VsYXItY2xpXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iYWxDb25maWcge31cbi8qKlxuICogRXZlcnl0aGluZyBhIHRvYXN0IG5lZWRzIHRvIGxhdW5jaFxuICovXG5leHBvcnQgY2xhc3MgVG9hc3RQYWNrYWdlIHtcbiAgcHJpdmF0ZSBfb25UYXA6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX29uQWN0aW9uOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0b2FzdElkOiBudW1iZXIsXG4gICAgcHVibGljIGNvbmZpZzogSW5kaXZpZHVhbENvbmZpZyxcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nIHwgU2FmZUh0bWwsXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PlxuICApIHt9XG5cbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXG4gIHRyaWdnZXJUYXAoKSB7XG4gICAgdGhpcy5fb25UYXAubmV4dCgpO1xuICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvblRhcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vblRhcC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBhdmFpbGFibGUgZm9yIHVzZSBpbiBjdXN0b20gdG9hc3QgKi9cbiAgdHJpZ2dlckFjdGlvbihhY3Rpb24/OiBhbnkpIHtcbiAgICB0aGlzLl9vbkFjdGlvbi5uZXh0KGFjdGlvbik7XG4gICAgdGhpcy5fb25BY3Rpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uQWN0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29uQWN0aW9uLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0c0NvbmZpZyA9IHtcbiAgc2VydmljZUluc3RhbmNlOiBuZXcgT2JqZWN0KCksXG59O1xuIl19