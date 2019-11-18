import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ToastService } from 'ng-uikit-pro-standard';
import { DataService } from '../services/data.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Work } from '../models/Work';
import { HttpErrorResponse } from '@angular/common/http';
import { getTextSuccesfully, getText, addText, addTextSuccesfully, updateText, updateTextSuccesfully, deleteText, deleteTextSuccesfully } from '../actions/text.actions';
import { TextPost } from '../models/TextPost';

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
    mergeMap((action) => this.dataService.addText(action.payload)
      .pipe(map(
        (res : TextPost) => addTextSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

updateText = 
  createEffect(() => this.actions.pipe(
    ofType(updateText),
    mergeMap((action) => this.dataService.updateText(action.payload)
      .pipe(map(
        (res : TextPost) => updateTextSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

deleteText = 
  createEffect(() => this.actions.pipe(
    ofType(deleteText),
    mergeMap((action) => this.dataService.deleteText(action.payload)
      .pipe(map(
        (res : Work) => deleteTextSuccesfully({payload: res}),
        catchError((err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error"))
    )))));

  constructor(
    private dataService : DataService,
    private actions: Actions,
    private toast: ToastService  
  ) { }
}

