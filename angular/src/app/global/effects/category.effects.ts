import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { getCategories, getCategoriesSuccesfully } from '../actions/category.actions';
import { Category } from '../models/Category';
import { ToastService } from 'ng-uikit-pro-standard';

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

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}
    