/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdbAutoCompleterComponent } from './components/mdb-auto-completer.component';
import { MdbOptionComponent } from './components/mdb-option.component';
import { MdbAutoCompleterDirective } from './directives/mdb-auto-completer.directive';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdbAutoCompleterOptionDirective } from './directives/mdb-auto-completer-option.directive';
var AutoCompleterModule = /** @class */ (function () {
    function AutoCompleterModule() {
    }
    AutoCompleterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, FormsModule],
                    declarations: [MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, MdbAutoCompleterOptionDirective],
                    exports: [MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, MdbAutoCompleterOptionDirective],
                },] }
    ];
    return AutoCompleterModule;
}());
export { AutoCompleterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvLWNvbXBsZXRlci9hdXRvLWNvbXBsZXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNqRztJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7b0JBQ3RELFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLCtCQUErQixDQUFDO29CQUN6SCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQztpQkFDckg7O0lBRUQsMEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge01kYk9wdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21kYi1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7TWRiQXV0b0NvbXBsZXRlckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi1hdXRvLWNvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWRiQXV0b0NvbXBsZXRlck9wdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi1hdXRvLWNvbXBsZXRlci1vcHRpb24uZGlyZWN0aXZlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCwgTWRiT3B0aW9uQ29tcG9uZW50LCBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlLCBNZGJBdXRvQ29tcGxldGVyT3B0aW9uRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQsIE1kYk9wdGlvbkNvbXBvbmVudCwgTWRiQXV0b0NvbXBsZXRlckRpcmVjdGl2ZSwgTWRiQXV0b0NvbXBsZXRlck9wdGlvbkRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZXJNb2R1bGUge1xufVxuIl19