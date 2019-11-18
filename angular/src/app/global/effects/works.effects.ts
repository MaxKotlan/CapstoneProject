import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getWorks, getWorksSuccesfully, addWorks, addWorksSuccesfully, updateWorks, deleteWorks, updateWorksSuccesfully, deleteWorksSuccesfully } from '../actions/works.actions';
import { ToastService } from 'ng-uikit-pro-standard';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Work } from '../models/Work';
import { HttpErrorResponse } from '@angular/common/http';
import { toastSuccessNotification, toastErrorNotification } from '../actions/toast.actions';
import { of } from 'rxjs';

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
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.addWork(payload)),
  switchMap((res : Work) => [
    addWorksSuccesfully({payload: res}),
    toastSuccessNotification({header: "You have added " + res.title, body: "Success"})
  ]),
  catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
  ));

updateWork = 
  createEffect(() => this.actions.pipe(
  ofType(updateWorks),
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.updateWork(payload)),
  switchMap((res : Work) => [
    updateWorksSuccesfully({payload: res}),
    toastSuccessNotification({header: "You have updated " + res.title, body: "Success"})
  ]),
  catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
  ));

deleteWork = 
  createEffect(() => this.actions.pipe(
  ofType(deleteWorks),
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.deleteWork(payload)),
  switchMap((res : Work) => [
    deleteWorksSuccesfully({payload: res}),
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

