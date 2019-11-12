import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getWorks, getWorksSuccesfully } from '../actions/works.actions';
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
    ofType(getWorks),
    mergeMap(() => this.dataService.getWork()
      .pipe(map(
        (res : Array<Work>) => getWorksSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}

