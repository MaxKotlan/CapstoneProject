import { createAction, props } from '@ngrx/store';
import { Work } from '../models/Work';

export  const setWorks = createAction('[Work] setWorks', props<{ payload:  Array<Work>; }>());
