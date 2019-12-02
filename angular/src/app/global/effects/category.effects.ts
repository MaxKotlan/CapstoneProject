import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { getCategories, getCategoriesSuccesfully, updateCategory, updateCategorySuccesfully, addCategory, addCategorySuccesfully, deleteCategory, deleteCategorySuccesfully } from '../actions/category.actions';
import { Category } from '../models/Category';
import { ToastService } from 'ng-uikit-pro-standard';
import { of } from 'rxjs';
import { toastSuccessNotification, toastErrorNotification } from '../actions/toast.actions';
import { deleteWorksSuccesfully, removeCategoryFromWorks } from '../actions/works.actions';

@Injectable()
export class CategoryEffects {

  getWork = 
  createEffect(() => this.actions.pipe(
    ofType(getCategories),
    mergeMap(() => this.dataService.getCategory()
      .pipe(map(
        (res : Array<Category>) => getCategoriesSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

  addCategory = 
    createEffect(() => this.actions.pipe(
    ofType(addCategory),
    map((action : any) => action.payload),
    switchMap(payload => this.dataService.addCategory(payload)),
    switchMap((res : Category) => [
      addCategorySuccesfully({payload: res}),
      toastSuccessNotification({header: "You have added " + res.title, body: "Success"})
    ]),
    catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
    ));


  updateCategory = 
    createEffect(() => this.actions.pipe(
    ofType(updateCategory),
    map((action : any) => action.payload),
    switchMap(payload => this.dataService.updateCategory(payload)),
    switchMap((res : Category) => [
      updateCategorySuccesfully({payload: res}),
      toastSuccessNotification({header: "You have updated " + res.title, body: "Success"})
    ]),
    catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
    ));


  deleteCategory = 
    createEffect(() => this.actions.pipe(
    ofType(deleteCategory),
    map((action : any) => action.payload),
    switchMap(payload => this.dataService.deleteCategory(payload)),
    switchMap((res : Category) => [
      deleteCategorySuccesfully({payload: res}),
      removeCategoryFromWorks({payload: res}),
      toastSuccessNotification({header: "You have deleted " + res.title, body: "Success"})
    ]),
    catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
    ));

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}
    