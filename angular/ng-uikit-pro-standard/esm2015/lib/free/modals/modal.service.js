/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2, } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalRef, ClassName, modalConfigDefaults, ModalOptions, TransitionDurations, } from './modal.options';
export class MDBModalService {
    // public constructor(private clf: ComponentLoaderFactory) {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     */
    constructor(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(level);
            this.removeLoaders(level);
        }), this.config.animated ? TransitionDurations.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        const mdbModalRef = new MDBModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({
            content,
            isAnimated: this.config.animated,
            data: this.config.data,
            mdbModalService: this,
        });
        modalContainerRef.instance.focusModalElement();
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = (/**
         * @return {?}
         */
        () => {
            modalContainerRef.instance.hide();
        });
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        /** @type {?} */
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @protected
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        /** @type {?} */
        const loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        (loader, i) => {
            loader.instance.level = i + 1;
        }));
    }
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @return {?}
         */
        () => {
            to.emit(this.lastDismissReason);
        }));
    }
}
MDBModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MDBModalService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ComponentLoaderFactory }
];
if (false) {
    /** @type {?} */
    MDBModalService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.el;
    /** @type {?} */
    MDBModalService.prototype.open;
    /** @type {?} */
    MDBModalService.prototype.opened;
    /** @type {?} */
    MDBModalService.prototype.close;
    /** @type {?} */
    MDBModalService.prototype.closed;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.clf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsR0FHakIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBMEIxQixZQUFtQixlQUFpQyxFQUFVLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCOztRQXhCbEYsV0FBTSxHQUFpQixtQkFBbUIsQ0FBQztRQUszQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtyQixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFFaEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLFlBQU8sR0FBK0MsRUFBRSxDQUFDO1FBRy9ELDRGQUE0RjtRQUM1RixJQUFJLENBQUMs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QUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBdUIsRUFBRSxFQUFxQjtRQUM5RCxJQUFJLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExTEYsVUFBVTs7OztZQWpCVCxnQkFBZ0I7WUFNVCxzQkFBc0I7Ozs7SUFjN0IsaUNBQWtEOzs7OztJQUNsRCxtQ0FBNEI7Ozs7O0lBQzVCLDhCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVCOztJQUV2QiwrQkFBb0Q7O0lBQ3BELGlDQUFzRDs7SUFDdEQsZ0NBQXFEOztJQUNyRCxpQ0FBc0Q7Ozs7O0lBRXRELDRDQUFvQzs7Ozs7SUFDcEMsOENBQWtDOzs7OztJQUVsQyx5Q0FBNkI7Ozs7O0lBRzdCLHNDQUFrRTs7Ozs7SUFDbEUsMENBQWlFOzs7OztJQUNqRSxzQ0FBd0I7Ozs7O0lBRXhCLDRDQUFvQzs7Ozs7SUFFcEMsa0NBQWlFOzs7OztJQUVYLDhCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbEJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxDb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE1EQk1vZGFsUmVmLFxuICBDbGFzc05hbWUsXG4gIG1vZGFsQ29uZmlnRGVmYXVsdHMsXG4gIE1vZGFsT3B0aW9ucyxcbiAgVHJhbnNpdGlvbkR1cmF0aW9ucyxcbn0gZnJvbSAnLi9tb2RhbC5vcHRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQk1vZGFsU2VydmljZSB7XG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXG4gIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyA9IG1vZGFsQ29uZmlnRGVmYXVsdHM7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcblxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xuXG4gIC8vIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PiB8IGFueTtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BMb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XG4gIC8vIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb24gPSAnJztcbiAgcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbjogYW55ID0gJyc7XG5cbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgLy8gICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihudWxsLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcbiAgICAgIHRoaXMuZWwsXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKiogU2hvd3MgYSBtb2RhbCAqL1xuICBzaG93KGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksIGNvbmZpZz86IGFueSk6IE1EQk1vZGFsUmVmIHtcbiAgICB0aGlzLm1vZGFsc0NvdW50Kys7XG4gICAgdGhpcy5fY3JlYXRlTG9hZGVycygpO1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2hvd01vZGFsKGNvbnRlbnQpO1xuICB9XG5cbiAgaGlkZShsZXZlbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxID8gdGhpcy5tb2RhbHNDb3VudCAtIDEgOiAwO1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RhbChsZXZlbCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTG9hZGVycyhsZXZlbCk7XG4gICAgICB9LFxuICAgICAgdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLkJBQ0tEUk9QIDogMFxuICAgICk7XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQmFja2Ryb3BFbmFibGVkID0gdGhpcy5jb25maWcuYmFja2Ryb3AgfHwgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnO1xuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9ICF0aGlzLmJhY2tkcm9wUmVmIHx8ICF0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd247XG5cbiAgICBpZiAodGhpcy5tb2RhbHNDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuXG4gICAgICBpZiAoaXNCYWNrZHJvcEVuYWJsZWQgJiYgaXNCYWNrZHJvcEluRE9NKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyXG4gICAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxuICAgICAgICAgIC50bygnYm9keScpXG4gICAgICAgICAgLnNob3coeyBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCB9KTtcbiAgICAgICAgdGhpcy5iYWNrZHJvcFJlZiA9IHRoaXMuX2JhY2tkcm9wTG9hZGVyLl9jb21wb25lbnRSZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hpZGVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRyYW5zaXRpb25EdXJhdGlvbnMuQkFDS0RST1AgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVCYWNrZHJvcCgpLCBkdXJhdGlvbik7XG4gIH1cblxuICBfc2hvd01vZGFsKGNvbnRlbnQ6IGFueSk6IE1EQk1vZGFsUmVmIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1t0aGlzLmxvYWRlcnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbWRiTW9kYWxSZWYgPSBuZXcgTURCTW9kYWxSZWYoKTtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lclJlZiA9IG1vZGFsTG9hZGVyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IE1vZGFsT3B0aW9ucywgdXNlVmFsdWU6IHRoaXMuY29uZmlnIH0pXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IE1EQk1vZGFsUmVmLCB1c2VWYWx1ZTogbWRiTW9kYWxSZWYgfSlcbiAgICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8oJ2JvZHknKVxuICAgICAgLnNob3coe1xuICAgICAgICBjb250ZW50LFxuICAgICAgICBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCxcbiAgICAgICAgZGF0YTogdGhpcy5jb25maWcuZGF0YSxcbiAgICAgICAgbWRiTW9kYWxTZXJ2aWNlOiB0aGlzLFxuICAgICAgfSk7XG4gICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuZm9jdXNNb2RhbEVsZW1lbnQoKTtcbiAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5sZXZlbCA9IHRoaXMuZ2V0TW9kYWxzQ291bnQoKTtcbiAgICBtZGJNb2RhbFJlZi5oaWRlID0gKCkgPT4ge1xuICAgICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgIH07XG4gICAgbWRiTW9kYWxSZWYuY29udGVudCA9IG1vZGFsTG9hZGVyLmdldElubmVyQ29tcG9uZW50KCkgfHwgbnVsbDtcbiAgICByZXR1cm4gbWRiTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tsZXZlbCAtIDFdO1xuICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlci5oaWRlKCk7XG4gICAgdGhpcy5iYWNrZHJvcFJlZiA9IG51bGw7XG4gIH1cblxuICAvKiogQUZURVIgUFIgTUVSR0UgTU9EQUwuQ09NUE9ORU5UIFdJTEwgQkUgVVNJTkcgVEhJUyBDT0RFKi9cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcbiAgICAgIDEwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgKyAncHgnO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVMb2FkZXJzKCk6IHZvaWQge1xuICAgIC8vIGNvbnN0IGxvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4obnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50Pih0aGlzLmVsLCB0aGlzLnZjciwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vcGVuKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25TaG93biwgdGhpcy5vcGVuZWQpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMuY2xvc2UpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkhpZGRlbiwgdGhpcy5jbG9zZWQpO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaCgobG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGxvYWRlci5pbnN0YW5jZS5sZXZlbCA9IGkgKyAxO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3B5RXZlbnQoZnJvbTogRXZlbnRFbWl0dGVyPGFueT4sIHRvOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIGZyb20uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRvLmVtaXQodGhpcy5sYXN0RGlzbWlzc1JlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==