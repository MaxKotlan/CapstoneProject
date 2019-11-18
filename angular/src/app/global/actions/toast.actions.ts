import { createAction, props } from '@ngrx/store';

export  const toastSuccessNotification = createAction('[Toast] toastSuccessNotification', props<{ header: string, body: string }>());
export  const toastErrorNotification = createAction('[Toast] toastErrorNotification', props<{ header: string, body: string }>());
