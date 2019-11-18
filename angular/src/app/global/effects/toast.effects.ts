import { ToastService } from 'ng-uikit-pro-standard';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { toastSuccessNotification, toastErrorNotification } from '../actions/toast.actions';
import { Injectable } from '@angular/core';


@Injectable()
export class ToastEffects {

    success = createEffect(() => this.actions.pipe(
        ofType(toastSuccessNotification),
        tap((action) => this.toast.success(action.header, action.body))
    ),{ dispatch: false });

    error = createEffect(() => this.actions.pipe(
        ofType(toastErrorNotification),
        tap((action) => this.toast.error(action.header, action.body))
    ),{ dispatch: false });

    constructor(
        private actions: Actions,
        private toast: ToastService  
    ) { }
}