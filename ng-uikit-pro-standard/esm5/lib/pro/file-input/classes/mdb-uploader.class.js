/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
/**
 * @record
 */
export function UploaderOptions() { }
if (false) {
    /** @type {?} */
    UploaderOptions.prototype.concurrency;
    /** @type {?|undefined} */
    UploaderOptions.prototype.allowedContentTypes;
    /** @type {?|undefined} */
    UploaderOptions.prototype.maxUploads;
}
/**
 * @record
 */
export function BlobFile() { }
if (false) {
    /** @type {?} */
    BlobFile.prototype.name;
}
/** @enum {number} */
var UploadStatus = {
    Queue: 0,
    Uploading: 1,
    Done: 2,
    Cancelled: 3,
};
export { UploadStatus };
UploadStatus[UploadStatus.Queue] = 'Queue';
UploadStatus[UploadStatus.Uploading] = 'Uploading';
UploadStatus[UploadStatus.Done] = 'Done';
UploadStatus[UploadStatus.Cancelled] = 'Cancelled';
/**
 * @record
 */
export function UploadProgress() { }
if (false) {
    /** @type {?} */
    UploadProgress.prototype.status;
    /** @type {?|undefined} */
    UploadProgress.prototype.data;
}
/**
 * @record
 */
export function UploadFile() { }
if (false) {
    /** @type {?} */
    UploadFile.prototype.id;
    /** @type {?} */
    UploadFile.prototype.fileIndex;
    /** @type {?} */
    UploadFile.prototype.lastModifiedDate;
    /** @type {?} */
    UploadFile.prototype.name;
    /** @type {?} */
    UploadFile.prototype.size;
    /** @type {?} */
    UploadFile.prototype.type;
    /** @type {?} */
    UploadFile.prototype.form;
    /** @type {?} */
    UploadFile.prototype.progress;
    /** @type {?|undefined} */
    UploadFile.prototype.response;
    /** @type {?|undefined} */
    UploadFile.prototype.responseStatus;
    /** @type {?|undefined} */
    UploadFile.prototype.sub;
    /** @type {?|undefined} */
    UploadFile.prototype.nativeFile;
    /** @type {?|undefined} */
    UploadFile.prototype.responseHeaders;
}
/**
 * @record
 */
export function UploadOutput() { }
if (false) {
    /** @type {?} */
    UploadOutput.prototype.type;
    /** @type {?|undefined} */
    UploadOutput.prototype.file;
    /** @type {?|undefined} */
    UploadOutput.prototype.nativeFile;
}
/**
 * @record
 */
export function UploadInput() { }
if (false) {
    /** @type {?} */
    UploadInput.prototype.type;
    /** @type {?|undefined} */
    UploadInput.prototype.url;
    /** @type {?|undefined} */
    UploadInput.prototype.method;
    /** @type {?|undefined} */
    UploadInput.prototype.id;
    /** @type {?|undefined} */
    UploadInput.prototype.fieldName;
    /** @type {?|undefined} */
    UploadInput.prototype.fileIndex;
    /** @type {?|undefined} */
    UploadInput.prototype.file;
    /** @type {?|undefined} */
    UploadInput.prototype.data;
    /** @type {?|undefined} */
    UploadInput.prototype.headers;
    /** @type {?|undefined} */
    UploadInput.prototype.withCredentials;
}
/**
 * @param {?} bytes
 * @return {?}
 */
export function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    /** @type {?} */
    var k = 1024;
    /** @type {?} */
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = /** @class */ (function () {
    function MDBUploaderService(concurrency, contentTypes, maxUploads) {
        var _this = this;
        if (concurrency === void 0) { concurrency = Number.POSITIVE_INFINITY; }
        if (contentTypes === void 0) { contentTypes = ['*']; }
        if (maxUploads === void 0) { maxUploads = Number.POSITIVE_INFINITY; }
        this.queue = [];
        this.serviceEvents = new EventEmitter();
        this.uploadScheduler = new Subject();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.uploadScheduler
            .pipe(mergeMap((/**
         * @param {?} upload
         * @return {?}
         */
        function (upload) { return _this.startUpload(upload); }), concurrency))
            .subscribe((/**
         * @param {?} uploadOutput
         * @return {?}
         */
        function (uploadOutput) { return _this.serviceEvents.emit(uploadOutput); }));
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    MDBUploaderService.prototype.handleFiles = /**
     * @param {?} incomingFiles
     * @return {?}
     */
    function (incomingFiles) {
        var _this = this;
        var _a;
        /** @type {?} */
        var allowedIncomingFiles = [].reduce.call(incomingFiles, (/**
         * @param {?} acc
         * @param {?} checkFile
         * @param {?} i
         * @return {?}
         */
        function (acc, checkFile, i) {
            /** @type {?} */
            var futureQueueLength = acc.length + _this.queue.length + 1;
            if (_this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= _this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                var rejectedFile = _this.makeUploadFile(checkFile, i);
                _this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }), []);
        (_a = this.queue).push.apply(_a, tslib_1.__spread([].map.call(allowedIncomingFiles, (/**
         * @param {?} file
         * @param {?} i
         * @return {?}
         */
        function (file, i) {
            /** @type {?} */
            var uploadFile = _this.makeUploadFile(file, i);
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        }))));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    MDBUploaderService.prototype.initInputEvents = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        return input.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    var uploadFileIndex = _this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file === event.file; }));
                    if (uploadFileIndex !== -1 && event.file) {
                        _this.uploadScheduler.next({ file: _this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    var files = _this.queue.filter((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file.progress.status === UploadStatus.Queue; }));
                    files.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return _this.uploadScheduler.next({ file: file, event: event }); }));
                    break;
                case 'cancel':
                    /** @type {?} */
                    var id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    /** @type {?} */
                    var index = _this.subs.findIndex((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    function (sub) { return sub.id === id_1; }));
                    if (index !== -1 && _this.subs[index].sub) {
                        _this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        var fileIndex = _this.queue.findIndex((/**
                         * @param {?} file
                         * @return {?}
                         */
                        function (file) { return file.id === id_1; }));
                        if (fileIndex !== -1) {
                            _this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: _this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    _this.subs.forEach((/**
                     * @param {?} sub
                     * @return {?}
                     */
                    function (sub) {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        var file = _this.queue.find((/**
                         * @param {?} uploadFile
                         * @return {?}
                         */
                        function (uploadFile) { return uploadFile.id === sub.id; }));
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    }));
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    var i = _this.queue.findIndex((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return file.id === event.id; }));
                    if (i !== -1) {
                        /** @type {?} */
                        var file = _this.queue[i];
                        _this.queue.splice(i, 1);
                        _this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (_this.queue.length) {
                        _this.queue = [];
                        _this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        }));
    };
    /**
     * @param {?} upload
     * @return {?}
     */
    MDBUploaderService.prototype.startUpload = /**
     * @param {?} upload
     * @return {?}
     */
    function (upload) {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var sub = _this.uploadFile(upload.file, upload.event)
                .subscribe((/**
             * @param {?} output
             * @return {?}
             */
            function (output) {
                observer.next(output);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                observer.error(err);
                observer.complete();
            }), (/**
             * @return {?}
             */
            function () {
                observer.complete();
            }));
            _this.subs.push({ id: upload.file.id, sub: sub });
        }));
    };
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    MDBUploaderService.prototype.uploadFile = /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    function (file, event) {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var url = event.url || '';
            /** @type {?} */
            var method = event.method || 'POST';
            /** @type {?} */
            var data = event.data || {};
            /** @type {?} */
            var headers = event.headers || {};
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var time = new Date().getTime();
            /** @type {?} */
            var progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            var speed = 0;
            /** @type {?} */
            var eta = null;
            xhr.upload.addEventListener('progress', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e.lengthComputable) {
                    /** @type {?} */
                    var percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    var diff = new Date().getTime() - time;
                    speed = Math.round(e.loaded / diff * 1000);
                    progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s",
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta)
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }), false);
            xhr.upload.addEventListener('error', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                observer.error(e);
                observer.complete();
            }));
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    var speedAverage = Math.round(file.size / (new Date().getTime() - progressStartTime) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: humanizeBytes(speedAverage) + "/s",
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta || 0)
                        }
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = _this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            });
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                var uploadFile_1 = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                var uploadIndex = _this.queue.findIndex((/**
                 * @param {?} outFile
                 * @return {?}
                 */
                function (outFile) { return outFile.nativeFile === uploadFile_1; }));
                if (_this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return file.form.append(key, data[key]); }));
                Object.keys(headers).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return xhr.setRequestHeader(key, headers[key]); }));
                file.form.append(event.fieldName || 'file', uploadFile_1, uploadFile_1.name);
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return (/**
             * @return {?}
             */
            function () {
                xhr.abort();
            });
        }));
    };
    /**
     * @param {?} sec
     * @return {?}
     */
    MDBUploaderService.prototype.secondsToHuman = /**
     * @param {?} sec
     * @return {?}
     */
    function (sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.generateId = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(7);
    };
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    MDBUploaderService.prototype.setContentTypes = /**
     * @param {?} contentTypes
     * @return {?}
     */
    function (contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return type === '*'; })) !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.allContentTypesAllowed = /**
     * @return {?}
     */
    function () {
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        function (type) { return type === '*'; })) !== undefined;
    };
    /**
     * @param {?} mimetype
     * @return {?}
     */
    MDBUploaderService.prototype.isContentTypeAllowed = /**
     * @param {?} mimetype
     * @return {?}
     */
    function (mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find((/**
         * @param {?} type
         * @return {?}
         */
        function (type) { return type === mimetype; })) !== undefined;
    };
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    MDBUploaderService.prototype.makeUploadFile = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
        return {
            fileIndex: index,
            id: this.generateId(),
            name: file.name,
            size: file.size,
            type: file.type,
            form: new FormData(),
            progress: {
                status: UploadStatus.Queue,
                data: {
                    percentage: 0,
                    speed: 0,
                    speedHuman: humanizeBytes(0) + "/s",
                    startTime: null,
                    endTime: null,
                    eta: null,
                    etaHuman: null
                }
            },
            lastModifiedDate: file.lastModified,
            sub: undefined,
            nativeFile: file
        };
    };
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    MDBUploaderService.prototype.parseResponseHeaders = /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    function (httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders.split('\n')
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.split(/: */, 2); }))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x[0]; }))
            .reduce((/**
         * @param {?} ac
         * @param {?} x
         * @return {?}
         */
        function (ac, x) {
            ac[x[0]] = x[1];
            return ac;
        }), {});
    };
    return MDBUploaderService;
}());
export { MDBUploaderService };
if (false) {
    /** @type {?} */
    MDBUploaderService.prototype.queue;
    /** @type {?} */
    MDBUploaderService.prototype.serviceEvents;
    /** @type {?} */
    MDBUploaderService.prototype.uploadScheduler;
    /** @type {?} */
    MDBUploaderService.prototype.subs;
    /** @type {?} */
    MDBUploaderService.prototype.contentTypes;
    /** @type {?} */
    MDBUploaderService.prototype.maxUploads;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXVwbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9maWxlLWlucHV0L2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzFDLHFDQUlDOzs7SUFIQyxzQ0FBb0I7O0lBQ3BCLDhDQUErQjs7SUFDL0IscUNBQW9COzs7OztBQUd0Qiw4QkFFQzs7O0lBREMsd0JBQWE7Ozs7SUFJYixRQUFLO0lBQ0wsWUFBUztJQUNULE9BQUk7SUFDSixZQUFTOzs7Ozs7Ozs7O0FBR1gsb0NBV0M7OztJQVZDLGdDQUFxQjs7SUFDckIsOEJBUUU7Ozs7O0FBR0osZ0NBY0M7OztJQWJDLHdCQUFXOztJQUNYLCtCQUFrQjs7SUFDbEIsc0NBQXlCOztJQUN6QiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBZTs7SUFDZiw4QkFBeUI7O0lBQ3pCLDhCQUFlOztJQUNmLG9DQUF3Qjs7SUFDeEIseUJBQXlCOztJQUN6QixnQ0FBa0I7O0lBQ2xCLHFDQUE0Qzs7Ozs7QUFHOUMsa0NBS0M7OztJQUpDLDRCQUNpRTs7SUFDakUsNEJBQWtCOztJQUNsQixrQ0FBa0I7Ozs7O0FBR3BCLGlDQVdDOzs7SUFWQywyQkFBbUY7O0lBQ25GLDBCQUFhOztJQUNiLDZCQUFnQjs7SUFDaEIseUJBQVk7O0lBQ1osZ0NBQW1COztJQUNuQixnQ0FBbUI7O0lBQ25CLDJCQUFrQjs7SUFDbEIsMkJBQXdDOztJQUN4Qyw4QkFBb0M7O0lBQ3BDLHNDQUEwQjs7Ozs7O0FBRzVCLE1BQU0s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QUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksRUFBQzthQUN4QixNQUFNOzs7OztRQUFDLFVBQUMsRUFBTyxFQUFFLENBQU07WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE3U0QsSUE2U0M7Ozs7SUE1U0MsbUNBQW9COztJQUNwQiwyQ0FBMEM7O0lBQzFDLDZDQUFtRTs7SUFDbkUsa0NBQTBDOztJQUMxQywwQ0FBdUI7O0lBQ3ZCLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkZXJPcHRpb25zIHtcbiAgY29uY3VycmVuY3k6IG51bWJlcjtcbiAgYWxsb3dlZENvbnRlbnRUeXBlcz86IHN0cmluZ1tdO1xuICBtYXhVcGxvYWRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2JGaWxlIGV4dGVuZHMgQmxvYiB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVXBsb2FkU3RhdHVzIHtcbiAgUXVldWUsXG4gIFVwbG9hZGluZyxcbiAgRG9uZSxcbiAgQ2FuY2VsbGVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkUHJvZ3Jlc3Mge1xuICBzdGF0dXM6IFVwbG9hZFN0YXR1cztcbiAgZGF0YT86IHtcbiAgICBwZXJjZW50YWdlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBzcGVlZEh1bWFuOiBzdHJpbmc7XG4gICAgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsO1xuICAgIGVuZFRpbWU6IG51bWJlciB8IG51bGw7XG4gICAgZXRhOiBudW1iZXIgfCBudWxsO1xuICAgIGV0YUh1bWFuOiBzdHJpbmcgfCBudWxsO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEZpbGUge1xuICBpZDogc3RyaW5nO1xuICBmaWxlSW5kZXg6IG51bWJlcjtcbiAgbGFzdE1vZGlmaWVkRGF0ZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBmb3JtOiBGb3JtRGF0YTtcbiAgcHJvZ3Jlc3M6IFVwbG9hZFByb2dyZXNzO1xuICByZXNwb25zZT86IGFueTtcbiAgcmVzcG9uc2VTdGF0dXM/OiBudW1iZXI7XG4gIHN1Yj86IFN1YnNjcmlwdGlvbiB8IGFueTtcbiAgbmF0aXZlRmlsZT86IEZpbGU7XG4gIHJlc3BvbnNlSGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkT3V0cHV0IHtcbiAgdHlwZTogJ2FkZGVkVG9RdWV1ZScgfCAnYWxsQWRkZWRUb1F1ZXVlJyB8ICd1cGxvYWRpbmcnIHwgJ2RvbmUnIHwgJ3N0YXJ0JyB8ICdjYW5jZWxsZWQnIHwgJ2RyYWdPdmVyJ1xuICAgICAgfCAnZHJhZ091dCcgfCAnZHJvcCcgfCAncmVtb3ZlZCcgfCAncmVtb3ZlZEFsbCcgfCAncmVqZWN0ZWQnO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgbmF0aXZlRmlsZT86IEZpbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkSW5wdXQge1xuICB0eXBlOiAndXBsb2FkQWxsJyB8ICd1cGxvYWRGaWxlJyB8ICdjYW5jZWwnIHwgJ2NhbmNlbEFsbCcgfCAncmVtb3ZlJyB8ICdyZW1vdmVBbGwnO1xuICB1cmw/OiBzdHJpbmc7XG4gIG1ldGhvZD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGZpZWxkTmFtZT86IHN0cmluZztcbiAgZmlsZUluZGV4PzogbnVtYmVyO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9O1xuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplQnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiAnMCBCeXRlJztcbiAgfVxuXG4gIGNvbnN0IGsgPSAxMDI0O1xuICBjb25zdCBzaXplczogc3RyaW5nW10gPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJ107XG4gIGNvbnN0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDIpKSArICcgJyArIHNpemVzW2ldO1xufVxuXG5leHBvcnQgY2xhc3MgTURCVXBsb2FkZXJTZXJ2aWNlIHtcbiAgcXVldWU6IFVwbG9hZEZpbGVbXTtcbiAgc2VydmljZUV2ZW50czogRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD47XG4gIHVwbG9hZFNjaGVkdWxlcjogU3ViamVjdDx7IGZpbGU6IFVwbG9hZEZpbGUsIGV2ZW50OiBVcGxvYWRJbnB1dCB9PjtcbiAgc3ViczogeyBpZDogc3RyaW5nLCBzdWI6IFN1YnNjcmlwdGlvbiB9W107XG4gIGNvbnRlbnRUeXBlczogc3RyaW5nW107XG4gIG1heFVwbG9hZHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25jdXJyZW5jeTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGNvbnRlbnRUeXBlczogc3RyaW5nW10gPSBbJyonXSxcbiAgICBtYXhVcGxvYWRzOiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5zZXJ2aWNlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gICAgdGhpcy51cGxvYWRTY2hlZHVsZXIgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIHRoaXMuY29udGVudFR5cGVzID0gY29udGVudFR5cGVzO1xuICAgIHRoaXMubWF4VXBsb2FkcyA9IG1heFVwbG9hZHM7XG5cbiAgICB0aGlzLnVwbG9hZFNjaGVkdWxlclxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKHVwbG9hZCA9PiB0aGlzLnN0YXJ0VXBsb2FkKHVwbG9hZCksIGNvbmN1cnJlbmN5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh1cGxvYWRPdXRwdXQgPT4gdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQodXBsb2FkT3V0cHV0KSk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhpbmNvbWluZ0ZpbGVzOiBGaWxlTGlzdCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbG93ZWRJbmNvbWluZ0ZpbGVzOiBGaWxlW10gPSBbXS5yZWR1Y2UuY2FsbChpbmNvbWluZ0ZpbGVzLCAoYWNjOiBGaWxlW10sIGNoZWNrRmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBmdXR1cmVRdWV1ZUxlbmd0aCA9IGFjYy5sZW5ndGggKyB0aGlzLnF1ZXVlLmxlbmd0aCArIDE7XG4gICAgICBpZiAodGhpcy5pc0NvbnRlbnRUeXBlQWxsb3dlZChjaGVja0ZpbGUudHlwZSkgJiYgZnV0dXJlUXVldWVMZW5ndGggPD0gdGhpcy5tYXhVcGxvYWRzKSB7XG4gICAgICAgIGFjYyA9IGFjYy5jb25jYXQoY2hlY2tGaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlamVjdGVkRmlsZTogVXBsb2FkRmlsZSA9IHRoaXMubWFrZVVwbG9hZEZpbGUoY2hlY2tGaWxlLCBpKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAncmVqZWN0ZWQnLCBmaWxlOiByZWplY3RlZEZpbGUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgdGhpcy5xdWV1ZS5wdXNoKC4uLltdLm1hcC5jYWxsKGFsbG93ZWRJbmNvbWluZ0ZpbGVzLCAoZmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB1cGxvYWRGaWxlOiBVcGxvYWRGaWxlID0gdGhpcy5tYWtlVXBsb2FkRmlsZShmaWxlLCBpKTtcbiAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ2FkZGVkVG9RdWV1ZScsIGZpbGU6IHVwbG9hZEZpbGUgfSk7XG4gICAgICByZXR1cm4gdXBsb2FkRmlsZTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdhbGxBZGRlZFRvUXVldWUnIH0pO1xuICB9XG5cbiAgaW5pdElucHV0RXZlbnRzKGlucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gaW5wdXQuc3Vic2NyaWJlKChldmVudDogVXBsb2FkSW5wdXQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICd1cGxvYWRGaWxlJzpcbiAgICAgICAgICBjb25zdCB1cGxvYWRGaWxlSW5kZXggPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChmaWxlID0+IGZpbGUgPT09IGV2ZW50LmZpbGUpO1xuICAgICAgICAgIGlmICh1cGxvYWRGaWxlSW5kZXggIT09IC0xICYmIGV2ZW50LmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU2NoZWR1bGVyLm5leHQoeyBmaWxlOiB0aGlzLnF1ZXVlW3VwbG9hZEZpbGVJbmRleF0sIGV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwbG9hZEFsbCc6XG4gICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLnF1ZXVlLmZpbHRlcihmaWxlID0+IGZpbGUucHJvZ3Jlc3Muc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuUXVldWUpO1xuICAgICAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB0aGlzLnVwbG9hZFNjaGVkdWxlci5uZXh0KHsgZmlsZTogZmlsZSwgZXZlbnQ6IGV2ZW50IH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LmlkIHx8IG51bGw7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdWJzLmZpbmRJbmRleChzdWIgPT4gc3ViLmlkID09PSBpZCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSAmJiB0aGlzLnN1YnNbaW5kZXhdLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWJzW2luZGV4XS5zdWIudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZUluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgoZmlsZSA9PiBmaWxlLmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoZmlsZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXVlW2ZpbGVJbmRleF0ucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogdGhpcy5xdWV1ZVtmaWxlSW5kZXhdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsQWxsJzpcbiAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5zdWIpIHtcbiAgICAgICAgICAgICAgc3ViLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5xdWV1ZS5maW5kKHVwbG9hZEZpbGUgPT4gdXBsb2FkRmlsZS5pZCA9PT0gc3ViLmlkKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGZpbGUucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBpZiAoIWV2ZW50LmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaSA9IHRoaXMucXVldWUuZmluZEluZGV4KGZpbGUgPT4gZmlsZS5pZCA9PT0gZXZlbnQuaWQpO1xuICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMucXVldWVbaV07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWQnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlQWxsJzpcbiAgICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWRBbGwnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKHVwbG9hZDogeyBmaWxlOiBVcGxvYWRGaWxlLCBldmVudDogVXBsb2FkSW5wdXQgfSk6IE9ic2VydmFibGU8VXBsb2FkT3V0cHV0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMudXBsb2FkRmlsZSh1cGxvYWQuZmlsZSwgdXBsb2FkLmV2ZW50KVxuICAgICAgICAuc3Vic2NyaWJlKG91dHB1dCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChvdXRwdXQpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnMucHVzaCh7IGlkOiB1cGxvYWQuZmlsZS5pZCwgc3ViOiBzdWIgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRGaWxlKGZpbGU6IFVwbG9hZEZpbGUsIGV2ZW50OiBVcGxvYWRJbnB1dCk6IE9ic2VydmFibGU8VXBsb2FkT3V0cHV0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50LnVybCB8fCAnJztcbiAgICAgIGNvbnN0IG1ldGhvZCA9IGV2ZW50Lm1ldGhvZCB8fCAnUE9TVCc7XG4gICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSB8fCB7fTtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBldmVudC5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGNvbnN0IHRpbWU6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IHByb2dyZXNzU3RhcnRUaW1lOiBudW1iZXIgPSAoZmlsZS5wcm9ncmVzcy5kYXRhICYmIGZpbGUucHJvZ3Jlc3MuZGF0YS5zdGFydFRpbWUpIHx8IHRpbWU7XG4gICAgICBsZXQgc3BlZWQgPSAwO1xuICAgICAgbGV0IGV0YTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZTogUHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGUubG9hZGVkICogMTAwKSAvIGUudG90YWwpO1xuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWU7XG4gICAgICAgICAgc3BlZWQgPSBNYXRoLnJvdW5kKGUubG9hZGVkIC8gZGlmZiAqIDEwMDApO1xuICAgICAgICAgIHByb2dyZXNzU3RhcnRUaW1lID0gKGZpbGUucHJvZ3Jlc3MuZGF0YSAmJiBmaWxlLnByb2dyZXNzLmRhdGEuc3RhcnRUaW1lKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICBldGEgPSBNYXRoLmNlaWwoKGUudG90YWwgLSBlLmxvYWRlZCkgLyBzcGVlZCk7XG5cbiAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxuICAgICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICAgIHNwZWVkSHVtYW46IGAke2h1bWFuaXplQnl0ZXMoc3BlZWQpfS9zYCxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBwcm9ncmVzc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgICAgICAgICAgZXRhOiBldGEsXG4gICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHR5cGU6ICd1cGxvYWRpbmcnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgY29uc3Qgc3BlZWRBdmVyYWdlID0gTWF0aC5yb3VuZChmaWxlLnNpemUgLyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwcm9ncmVzc1N0YXJ0VGltZSkgKiAxMDAwKTtcbiAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuRG9uZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgICAgICAgICAgICBzcGVlZDogc3BlZWRBdmVyYWdlLFxuICAgICAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKHNwZWVkQXZlcmFnZSl9L3NgLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IHByb2dyZXNzU3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgZXRhOiBldGEsXG4gICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSB8fCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlLnJlc3BvbnNlU3RhdHVzID0geGhyLnN0YXR1cztcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlLnJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZpbGUucmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsZS5yZXNwb25zZUhlYWRlcnMgPSB0aGlzLnBhcnNlUmVzcG9uc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG5cbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogJ2RvbmUnLCBmaWxlOiBmaWxlIH0pO1xuXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGV2ZW50LndpdGhDcmVkZW50aWFscyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9IDxCbG9iRmlsZT5maWxlLm5hdGl2ZUZpbGU7XG4gICAgICAgIGNvbnN0IHVwbG9hZEluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgob3V0RmlsZSA9PiBvdXRGaWxlLm5hdGl2ZUZpbGUgPT09IHVwbG9hZEZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlW3VwbG9hZEluZGV4XS5wcm9ncmVzcy5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5DYW5jZWxsZWQpIHtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gZmlsZS5mb3JtLmFwcGVuZChrZXksIGRhdGFba2V5XSkpO1xuICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGtleSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSkpO1xuXG4gICAgICAgIGZpbGUuZm9ybS5hcHBlbmQoZXZlbnQuZmllbGROYW1lIHx8ICdmaWxlJywgdXBsb2FkRmlsZSwgdXBsb2FkRmlsZS5uYW1lKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdzdGFydCcsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgIHhoci5zZW5kKGZpbGUuZm9ybSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlY29uZHNUb0h1bWFuKHNlYzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUoc2VjICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG4gIH1cblxuICBzZXRDb250ZW50VHlwZXMoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29udGVudFR5cGVzICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZW50VHlwZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IFsnKiddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZXMgPSBjb250ZW50VHlwZXM7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29udGVudFR5cGVzID0gWycqJ107XG4gIH1cblxuICBhbGxDb250ZW50VHlwZXNBbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzQ29udGVudFR5cGVBbGxvd2VkKG1pbWV0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hbGxDb250ZW50VHlwZXNBbGxvd2VkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSBtaW1ldHlwZSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1ha2VVcGxvYWRGaWxlKGZpbGU6IEZpbGUsIGluZGV4OiBudW1iZXIpOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZUluZGV4OiBpbmRleCxcbiAgICAgIGlkOiB0aGlzLmdlbmVyYXRlSWQoKSxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGZvcm06IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuUXVldWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgIHNwZWVkSHVtYW46IGAke2h1bWFuaXplQnl0ZXMoMCl9L3NgLFxuICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICBlbmRUaW1lOiBudWxsLFxuICAgICAgICAgIGV0YTogbnVsbCxcbiAgICAgICAgICBldGFIdW1hbjogbnVsbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICBzdWI6IHVuZGVmaW5lZCxcbiAgICAgIG5hdGl2ZUZpbGU6IGZpbGVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVJlc3BvbnNlSGVhZGVycyhodHRwSGVhZGVyczogYW55KSB7XG4gICAgaWYgKCFodHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaHR0cEhlYWRlcnMuc3BsaXQoJ1xcbicpXG4gICAgICAubWFwKCh4OiBhbnkpID0+IHguc3BsaXQoLzogKi8sIDIpKVxuICAgICAgLmZpbHRlcigoeDogYW55KSA9PiB4WzBdKVxuICAgICAgLnJlZHVjZSgoYWM6IGFueSwgeDogYW55KSA9PiB7XG4gICAgICAgIGFjW3hbMF1dID0geFsxXTtcbiAgICAgICAgcmV0dXJuIGFjO1xuICAgICAgfSwge30pO1xuICB9XG59XG4iXX0=