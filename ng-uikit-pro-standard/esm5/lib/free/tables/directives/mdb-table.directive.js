/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    MdbTableDirective.prototype.addRow = /**
     * @param {?} newRow
     * @return {?}
     */
    function (newRow) {
        this.getDataSource().push(newRow);
    };
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    MdbTableDirective.prototype.addRowAfter = /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbTableDirective.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getDataSource().splice(index, 1);
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.rowRemoved = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowRemoved = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(true);
        }));
        return rowRemoved;
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.removeLastRow = /**
     * @return {?}
     */
    function () {
        this.getDataSource().pop();
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.getDataSource = /**
     * @return {?}
     */
    function () {
        return this._dataSource;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTableDirective.prototype.setDataSource = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.dataSourceChange = /**
     * @return {?}
     */
    function () {
        return this._dataSourceChanged;
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableDirective.prototype.filterLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return (/** @type {?} */ (JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey)));
                }
            }));
        }));
    };
    /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    MdbTableDirective.prototype.filterLocalDataByFields = /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    function (searchKey, keys) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (keys.includes(key)) {
                    if (obj[key].toLowerCase().includes(searchKey)) {
                        return obj[key];
                    }
                }
            }));
        }));
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableDirective.prototype.searchLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    MdbTableDirective.prototype.searchLocalDataByFields = /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableDirective.prototype.searchDataObservable = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        var _this = this;
        /** @type {?} */
        var observable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        }));
        return observable;
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
    };
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            /** @type {?} */
            var tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.renderer.addClass(child, 'sticky-top');
                if (_this.stickyHeaderBgColor) {
                    _this.renderer.setStyle(child, 'background-color', _this.stickyHeaderBgColor);
                }
                else {
                    _this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (_this.stickyHeaderTextColor) {
                    _this.renderer.setStyle(child, 'color', _this.stickyHeaderTextColor);
                }
                else {
                    _this.renderer.setStyle(child, 'color', '#000000');
                }
            }));
        }
    };
    MdbTableDirective.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbTable]',
                    exportAs: 'mdbTable',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table.table thead th{border-top:none}table.table td,table.table th{padding-top:1.1rem;padding-bottom:1rem}table.table a{margin:0;color:#212529}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
                }] }
    ];
    /** @nocollapse */
    MdbTableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableDirective.propDecorators = {
        striped: [{ type: Input }, { type: HostBinding, args: ['class.table-striped',] }],
        bordered: [{ type: Input }, { type: HostBinding, args: ['class.table-bordered',] }],
        borderless: [{ type: Input }, { type: HostBinding, args: ['class.table-borderless',] }],
        hover: [{ type: Input }, { type: HostBinding, args: ['class.table-hover',] }],
        small: [{ type: Input }, { type: HostBinding, args: ['class.table-sm',] }],
        responsive: [{ type: Input }, { type: HostBinding, args: ['class.table-responsive',] }],
        stickyHeader: [{ type: Input }],
        stickyHeaderBgColor: [{ type: Input }],
        stickyHeaderTextColor: [{ type: Input }]
    };
    return MdbTableDirective;
}());
export { MdbTableDirective };
if (false) {
    /** @type {?} */
    MdbTableDirective.prototype.striped;
    /** @type {?} */
    MdbTableDirective.prototype.bordered;
    /** @type {?} */
    MdbTableDirective.prototype.borderless;
    /** @type {?} */
    MdbTableDirective.prototype.hover;
    /** @type {?} */
    MdbTableDirective.prototype.small;
    /** @type {?} */
    MdbTableDirective.prototype.responsive;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeader;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderBgColor;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderTextColor;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype._dataSourceChanged;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQztJQXNDRSwyQkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnRELGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFJNUIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFISSxDQUFDOzs7OztJQUtuRSxrQ0FBTTs7OztJQUFOLFVBQU8sTUFBVztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHVDQUFXOzs7OztJQUFYLFVBQVksS0FBYSxFQUFFLEdBQVE7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7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ZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVdJyxcbiAgZXhwb3J0QXM6ICdtZGJUYWJsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuLy4uL3RhYmxlcy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTWRiVGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXN0cmlwZWQnKVxuICBzdHJpcGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVyZWQnKVxuICBib3JkZXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLWJvcmRlcmxlc3MnKVxuICBib3JkZXJsZXNzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtaG92ZXInKVxuICBob3ZlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXNtJylcbiAgc21hbGw6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1yZXNwb25zaXZlJylcbiAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBzdGlja3lIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RpY2t5SGVhZGVyQmdDb2xvciA9ICcnO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJUZXh0Q29sb3IgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogYW55ID0gW107XG4gIHByaXZhdGUgX2RhdGFTb3VyY2VDaGFuZ2VkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgYWRkUm93KG5ld1JvdzogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucHVzaChuZXdSb3cpO1xuICB9XG5cbiAgYWRkUm93QWZ0ZXIoaW5kZXg6IG51bWJlciwgcm93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5zcGxpY2UoaW5kZXgsIDAsIHJvdyk7XG4gIH1cblxuICByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByb3dSZW1vdmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJvd1JlbW92ZWQgPSBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93UmVtb3ZlZDtcbiAgfVxuXG4gIHJlbW92ZUxhc3RSb3coKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucG9wKCk7XG4gIH1cblxuICBnZXREYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgc2V0RGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YTtcbiAgICB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZC5uZXh0KHRoaXMuZ2V0RGF0YVNvdXJjZSgpKTtcbiAgfVxuXG4gIGRhdGFTb3VyY2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUNoYW5nZWQ7XG4gIH1cblxuICBmaWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKG9iajogQXJyYXk8YW55PikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgLy8gRml4KHRhYmxlU2VhcmNoKTogdGFibGUgc2VhcmNoIHdpbGwgbm93IGFibGUgdG8gZmlsdGVyIHRocm91Z2ggbmVzdGVkIGRhdGFcblxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaEtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckxvY2FsRGF0YUJ5RmllbGRzKHNlYXJjaEtleTogYW55LCBrZXlzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKG9iajogQXJyYXk8YW55PikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGlmIChvYmpba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBhbnkpIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5OiBhbnksIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCFzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoS2V5ICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCksIGtleXMpO1xuICAgIH1cbiAgICBpZiAoIWtleXMgfHwga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoRGF0YU9ic2VydmFibGUoc2VhcmNoS2V5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnNlYXJjaExvY2FsRGF0YUJ5KHNlYXJjaEtleSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0YWJsZScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEZpeChzdGlja3lIZWFkZXIpOiByZXNvbHZlZCBwcm9ibGVtIHdpdGggbm90IHdvcmtpbmcgc3RpY2t5SGVhZGVyPVwidHJ1ZVwiIG9uIENocm9tZVxuICAgIGlmICh0aGlzLnN0aWNreUhlYWRlcikge1xuICAgICAgY29uc3QgdGFibGVIZWFkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyk7XG5cbiAgICAgIEFycmF5LmZyb20odGFibGVIZWFkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY2hpbGQsICdzdGlja3ktdG9wJyk7XG4gICAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuc3RpY2t5SGVhZGVyQmdDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2JhY2tncm91bmQtY29sb3InLCAnI2YyZjJmMicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlclRleHRDb2xvcikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdjb2xvcicsIHRoaXMuc3RpY2t5SGVhZGVyVGV4dENvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnY29sb3InLCAnIzAwMDAwMCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==