import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getWorks, getWorksSuccesfully, addWorks, addWorksSuccesfully, updateWorks, deleteWorks, updateWorksSuccesfully, deleteWorksSuccesfully } from '../actions/works.actions';
import { ToastService } from 'ng-uikit-pro-standard';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
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
      .pipe(
        switchMap((res : Work) => [
          addWorksSuccesfully({payload: res}),
          this.toast.success("Succesfully Added Work", "Success")
        ]),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    ))));

updateWork = 
  createEffect(() => this.actions.pipe(
    ofType(updateWorks),
    mergeMap((action) => this.dataService.updateWork(action.payload).pipe(
        switchMap((res : Work) => [
          updateWorksSuccesfully({payload: res}),
          this.toast.success("Succesfully Updated Work", "Success")
        ]),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    ))));

deleteWork = 
  createEffect(() => this.actions.pipe(
    ofType(deleteWorks),
    mergeMap((action) => this.dataService.deleteWork(action.payload).pipe(
        switchMap((res : Work) => [
            deleteWorksSuccesfully({payload: res}),
            this.toast.success("Succesfully Deleted Work", "Success")
        ]),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    ))));
  

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}

