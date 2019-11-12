import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getWorks, getWorksSuccesfully, addWorks, addWorksSuccesfully, updateWorks, deleteWorks, updateWorksSuccesfully, deleteWorksSuccesfully } from '../actions/works.actions';
import { ToastService } from 'ng-uikit-pro-standard';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Work } from '../models/Work';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WorksEffects {

getWork = 
  createEffect(() => this.actions.pipe(
    ofType(getWorks),
    mergeMap(() => this.dataService.getWork()
      .pipe(map(
        (res : Array<Work>) => getWorksSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

addWork = 
  createEffect(() => this.actions.pipe(
    ofType(addWorks),
    mergeMap((action) => this.dataService.addWork(action.payload)
      .pipe(map(
        (res : Work) => addWorksSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

updateWork = 
  createEffect(() => this.actions.pipe(
    ofType(updateWorks),
    mergeMap((action) => this.dataService.updateWork(action.payload)
      .pipe(map(
        (res : Work) => updateWorksSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

deleteWork = 
  createEffect(() => this.actions.pipe(
    ofType(deleteWorks),
    mergeMap((action) => this.dataService.deleteWork(action.payload)
      .pipe(map(
        (res : Work) => deleteWorksSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));
  

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}

