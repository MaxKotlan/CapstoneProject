/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function ComponentType() { }
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    // setAttachedHost(host: BasePortalHost) {
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    // setAttachedHost(host: BasePortalHost) {
    ComponentPortal.prototype.setAttachedHost = /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    // setAttachedHost(host: BasePortalHost) {
    function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
export { ComponentPortal };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentPortal.prototype._attachedHost;
    /**
     * The type of the component that will be instantiated for attachment.
     * @type {?}
     */
    ComponentPortal.prototype.component;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalHost.
     * The origin necessary when the host is outside of the Angular application context.
     * @type {?}
     */
    ComponentPortal.prototype.viewContainerRef;
    /**
     * Injector used for the instantiation of the component.
     * @type {?}
     */
    ComponentPortal.prototype.injector;
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var /**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            // this._disposeFn = null;
            this._disposeFn = this.setToNullValue;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
export { BasePortalHost };
if (false) {
    /** @type {?} */
    BasePortalHost.prototype.setToNullValue;
    /**
     * The portal currently attached to the host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._attachedPortal;
    /**
     * A function that will permanently dispose this host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._disposeFn;
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvcG9ydGFsL3BvcnRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLG1DQUVDOzs7OztBQUtEOzs7OztJQWdCRSx5QkFBWSxTQUEyQixFQUFFLFFBQWtCO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBb0M7Ozs7Ozs7SUFDcEMsZ0NBQU07Ozs7OztJQUFOLFVBQU8sSUFBb0IsRUFBRSxXQUFvQjtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx1Q0FBdUM7Ozs7O0lBQ3ZDLGdDQUFNOzs7O0lBQU47O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxzQkFBSSx1Q0FBVTtRQURkLGlEQUFpRDs7Ozs7UUFDakQ7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQ7OztPQUdHO0lBQ0gsMENBQTBDOzs7Ozs7OztJQUMxQyx5Q0FBZTs7Ozs7OztJQUFmLFVBQWdCLElBQW9CO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7Ozs7Ozs7Ozs7O0lBN0NDLHdDQUE0Qzs7Ozs7SUFFNUMsb0NBQTRCOzs7Ozs7O0lBTzVCLDJDQUFtQzs7Ozs7SUFHbkMsbUNBQW1COzs7Ozs7O0FBdUNyQjs7Ozs7O0lBQUE7UUFDUyxtQkFBYyxHQUFRLElBQUksQ0FBQztJQW1DcEMsQ0FBQzs7Ozs7O0lBMUJDLCtCQUFNOzs7OztJQUFOLFVBQU8sTUFBNEIsRUFBRSxXQUFvQjtRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQU9ELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxFQUFjO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7OztJQW5DQyx3Q0FBa0M7Ozs7OztJQUdsQyx5Q0FBb0Q7Ozs7OztJQUlwRCxvQ0FBcUM7Ozs7Ozs7O0lBT3JDLG9GQUdtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRUeXBlPFQ+IHtcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IFQ7XG59XG5cbi8qKlxuICogQSBgQ29tcG9uZW50UG9ydGFsYCBpcyBhIHBvcnRhbCB0aGF0IGluc3RhbnRpYXRlcyBzb21lIENvbXBvbmVudCB1cG9uIGF0dGFjaG1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWw8VD4ge1xuICAvLyBwcml2YXRlIF9hdHRhY2hlZEhvc3Q6IEJhc2VQb3J0YWxIb3N0O1xuICBwcml2YXRlIF9hdHRhY2hlZEhvc3Q6IEJhc2VQb3J0YWxIb3N0IHwgYW55O1xuICAvKiogVGhlIHR5cGUgb2YgdGhlIGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGZvciBhdHRhY2htZW50LiAqL1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD47XG5cbiAgLyoqXG4gICAqIFtPcHRpb25hbF0gV2hlcmUgdGhlIGF0dGFjaGVkIGNvbXBvbmVudCBzaG91bGQgbGl2ZSBpbiBBbmd1bGFyJ3MgKmxvZ2ljYWwqIGNvbXBvbmVudCB0cmVlLlxuICAgKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIHdoZXJlIHRoZSBjb21wb25lbnQgKnJlbmRlcnMqLCB3aGljaCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBQb3J0YWxIb3N0LlxuICAgKiBUaGUgb3JpZ2luIG5lY2Vzc2FyeSB3aGVuIHRoZSBob3N0IGlzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gY29udGV4dC5cbiAgICovXG4gIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIEluamVjdG9yIHVzZWQgZm9yIHRoZSBpbnN0YW50aWF0aW9uIG9mIHRoZSBjb21wb25lbnQuICovXG4gIGluamVjdG9yOiBJbmplY3RvcjtcblxuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIC8qKiBBdHRhY2ggdGhpcyBwb3J0YWwgdG8gYSBob3N0LiAqL1xuICBhdHRhY2goaG9zdDogQmFzZVBvcnRhbEhvc3QsIG5ld2VzdE9uVG9wOiBib29sZWFuKTogYW55IHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICAgIHJldHVybiBob3N0LmF0dGFjaCh0aGlzLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKiogRGV0YWNoIHRoaXMgcG9ydGFsIGZyb20gaXRzIGhvc3QgKi9cbiAgZGV0YWNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgdGhpcy5fYXR0YWNoZWRIb3N0ID0gbnVsbDtcbiAgICByZXR1cm4gaG9zdC5kZXRhY2goKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIGEgaG9zdC4gKi9cbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkSG9zdCAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFBvcnRhbEhvc3QgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cbiAgICovXG4gIC8vIHNldEF0dGFjaGVkSG9zdChob3N0OiBCYXNlUG9ydGFsSG9zdCkge1xuICBzZXRBdHRhY2hlZEhvc3QoaG9zdDogQmFzZVBvcnRhbEhvc3QpOiBhbnkge1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJ0aWFsIGltcGxlbWVudGF0aW9uIG9mIFBvcnRhbEhvc3QgdGhhdCBvbmx5IGRlYWxzIHdpdGggYXR0YWNoaW5nIGFcbiAqIENvbXBvbmVudFBvcnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBvcnRhbEhvc3Qge1xuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIC8qKiBUaGUgcG9ydGFsIGN1cnJlbnRseSBhdHRhY2hlZCB0byB0aGUgaG9zdC4gKi9cbiAgLy8gcHJpdmF0ZSBfYXR0YWNoZWRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuICBwcml2YXRlIF9hdHRhY2hlZFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4gfCBhbnk7XG5cbiAgLyoqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHBlcm1hbmVudGx5IGRpc3Bvc2UgdGhpcyBob3N0LiAqL1xuICAvLyBwcml2YXRlIF9kaXNwb3NlRm46ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Rpc3Bvc2VGbjogKCkgPT4gdm9pZCB8IGFueTtcblxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4oXG4gICAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4sXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW5cbiAgKTogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdChudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2VGbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlRm4oKTtcbiAgICAgIC8vIHRoaXMuX2Rpc3Bvc2VGbiA9IG51bGw7XG4gICAgICB0aGlzLl9kaXNwb3NlRm4gPSB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iXX0=