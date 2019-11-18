import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ToastService } from 'ng-uikit-pro-standard';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Work } from '../models/Work';
import { HttpErrorResponse } from '@angular/common/http';
import { getTextSuccesfully, getText, addText, addTextSuccesfully, updateText, updateTextSuccesfully, deleteText, deleteTextSuccesfully } from '../actions/text.actions';
import { TextPost } from '../models/TextPost';
import { toastSuccessNotification, toastErrorNotification } from '../actions/toast.actions';
import { of } from 'rxjs';

@Injectable()
export class TextEffects {

getText = 
  createEffect(() => this.actions.pipe(
    ofType(getText),
    mergeMap(() => this.dataService.getText()
      .pipe(map(
        (res : Array<TextPost>) => getTextSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

addText =
  createEffect(() => this.actions.pipe(
  ofType(addText),
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.addText(payload)),
  switchMap((res : TextPost) => [
    addTextSuccesfully({payload: res}),
    toastSuccessNotification({header: "You have added " + res.title, body: "Success"})
  ]),
  catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
  ));


updateText =
  createEffect(() => this.actions.pipe(
  ofType(updateText),
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.updateText(payload)),
  switchMap((res : TextPost) => [
    updateTextSuccesfully({payload: res}),
    toastSuccessNotification({header: "You have updated " + res.title, body: "Success"})
  ]),
  catchError((err : HttpErrorResponse) => of(toastErrorNotification({header: "Error", body: err.statusText})))
  ));

deleteText =
  createEffect(() => this.actions.pipe(
  ofType(deleteText),
  map((action : any) => action.payload),
  switchMap(payload => this.dataService.deleteText(payload)),
  switchMap((res : TextPost) => [
    deleteTextSuccesfully({payload: res}),
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

