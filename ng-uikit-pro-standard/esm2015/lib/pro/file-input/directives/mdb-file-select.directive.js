/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Input, Output, PLATFORM_ID, Inject, ViewEncapsulation, Component, } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
// tslint:disable-next-line:component-class-suffix
export class MDBFileSelectDirective {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = (/**
         * @return {?}
         */
        () => {
            this.upload.handleFiles(this.el.files);
            this.el.value = '';
        });
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        /** @type {?} */
        const concurrency = (this.options && this.options.concurrency) || Number.POSITIVE_INFINITY;
        /** @type {?} */
        const allowedContentTypes = (this.options && this.options.allowedContentTypes) || ['*'];
        /** @type {?} */
        const maxUploads = (this.options && this.options.maxUploads) || Number.POSITIVE_INFINITY;
        this.upload = new MDBUploaderService(concurrency, allowedContentTypes, maxUploads);
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        if (this.el) {
            this.el.removeEventListener('change', this.fileListener, false);
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
    }
}
MDBFileSelectDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbFileSelect]',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".file-field{position:relative;display:flex;flex-direction:row}.file-field .file-path-wrapper{padding-left:10px;height:2.5rem;overflow:visible;display:flex;flex-grow:1}.file-field input[type=file]::-webkit-file-upload-button{display:none}.file-field .file-path-wrapper:after{content:'';clear:both}.file-field input.file-path{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;outline:0;height:2.1rem;width:100%;font-size:1rem;box-shadow:none;box-sizing:content-box;transition:.3s}.file-field .btn{position:relative;display:flex;float:none}.file-field .btn:hover{cursor:pointer}.file-field .btn input[type=file]{height:100%}.file-field .btn input[type=file] :hover,.file-field span{cursor:pointer}.file-field input[type=file]{opacity:0;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:1px;cursor:pointer;opacity:0}.file-field input[type=file]::-ms-value{display:none}.file-field input[type=file]::-ms-browse{width:100%}.btn-file{padding-top:1px}"]
            }] }
];
/** @nocollapse */
MDBFileSelectDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
MDBFileSelectDirective.propDecorators = {
    uploadInput: [{ type: Input }],
    options: [{ type: Input }],
    uploadOutput: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadInput;
    /** @type {?} */
    MDBFileSelectDirective.prototype.options;
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadOutput;
    /** @type {?} */
    MDBFileSelectDirective.prototype.upload;
    /** @type {?} */
    MDBFileSelectDirective.prototype.isServer;
    /** @type {?} */
    MDBFileSelectDirective.prototype.el;
    /** @type {?} */
    MDBFileSelectDirective.prototype.fileListener;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.platform_id;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZmlsZS1pbnB1dC9kaXJlY3RpdmVzL21kYi1maWxlLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sV0FBVyxFQUNYLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsTUFBTSwrQkFBK0IsQ0FBQztBQVVqRixrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFVakMsWUFBeUMsV0FBZ0IsRUFBVSxVQUFzQjtRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFKekYsYUFBUSxHQUFZLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQTRDdkQsaUJBQVk7OztRQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUM7UUExQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7O2NBRUssV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUI7O2NBQ3BGLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O2NBQ2pGLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxNQUFNLENBQUMsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OzRDQVljLE1BQU0sU0FBQyxXQUFXO1lBakMvQixVQUFVOzs7MEJBd0JULEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxNQUFNOzs7O0lBRlAsNkNBQXdDOztJQUN4Qyx5Q0FBa0M7O0lBQ2xDLDhDQUFtRDs7SUFFbkQsd0NBQTJCOztJQUMzQiwwQ0FBdUQ7O0lBRXZELG9DQUEyQjs7SUEwQzNCLDhDQUdFOzs7OztJQTNDVSw2Q0FBNkM7Ozs7O0lBQUUsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1EQlVwbG9hZGVyU2VydmljZSwgVXBsb2FkT3V0cHV0IH0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgVXBsb2FkZXJPcHRpb25zIH0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJGaWxlU2VsZWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuLy4uL2ZpbGUtaW5wdXQtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE1EQkZpbGVTZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuICBAT3V0cHV0KCkgdXBsb2FkT3V0cHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcblxuICB1cGxvYWQ6IE1EQlVwbG9hZGVyU2VydmljZTtcbiAgaXNTZXJ2ZXI6IGJvb2xlYW4gPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1faWQpO1xuICAvLyBlbDogSFRNTElucHV0RWxlbWVudDtcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBhbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybV9pZDogYW55LCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnVwbG9hZE91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25jdXJyZW5jeSA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmNvbmN1cnJlbmN5KSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgY29uc3QgYWxsb3dlZENvbnRlbnRUeXBlcyA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsbG93ZWRDb250ZW50VHlwZXMpIHx8IFsnKiddO1xuICAgIGNvbnN0IG1heFVwbG9hZHMgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5tYXhVcGxvYWRzKSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdGhpcy51cGxvYWQgPSBuZXcgTURCVXBsb2FkZXJTZXJ2aWNlKGNvbmN1cnJlbmN5LCBhbGxvd2VkQ29udGVudFR5cGVzLCBtYXhVcGxvYWRzKTtcblxuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuZmlsZUxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICB0aGlzLnVwbG9hZC5zZXJ2aWNlRXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IFVwbG9hZE91dHB1dCkgPT4ge1xuICAgICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdGhpcy51cGxvYWQuaW5pdElucHV0RXZlbnRzKHRoaXMudXBsb2FkSW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5maWxlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCkge1xuICAgICAgdGhpcy51cGxvYWRJbnB1dC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB0aGlzLnVwbG9hZC5oYW5kbGVGaWxlcyh0aGlzLmVsLmZpbGVzKTtcbiAgICB0aGlzLmVsLnZhbHVlID0gJyc7XG4gIH07XG59XG4iXX0=