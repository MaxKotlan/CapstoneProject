import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'ng-uikit-pro-standard';
import { of } from 'rxjs';
import { toastSuccessNotification, toastErrorNotification } from '../actions/toast.actions';
import { toggleMaintenance, toggleMaintenanceSuccesfully, getMaintenanceStatus } from '../actions/maintenance.actions';

@Injectable()
export class MaintenenceEffects {

   getWork = 
    createEffect(() => this.actions.pipe(
    ofType(getMaintenanceStatus),
    mergeMap(() => this.dataService.getMaintenanceStatus()
    .pipe(map(
        (res : boolean) => toggleMaintenanceSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

  toggleMaintenence = 
  createEffect(() => this.actions.pipe(
  ofType(toggleMaintenance),
  map((action : any) => action.payload),
  switchMap((payload) => this.dataService.toggleMaintenanceMode()),
  switchMap((res : boolean) => [
    toggleMaintenanceSuccesfully({payload: res}),
    toastSuccessNotification({header: "You have " + (res ? "enabled" : "disabled" ) + " Maintenance Mode", body: "Success"})
  ]),
  catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: "Could not toggle maintenence mode"})))
  ));

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}