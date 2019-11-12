import { createAction, props } from '@ngrx/store';
import { Work } from '../models/Work';

export  const getWorks = createAction('[Work] getWorks');
export  const getWorksSuccesfully = createAction('[Work] getWorksSuccesfully', props<{ payload:  Array<Work>; }>());

export  const addWorks = createAction('[Work] addWorks', props<{ payload:  Work; }>());
export  const addWorksSuccesfully = createAction('[Work] addWorksSuccesfully', props<{ payload:  Work; }>());

export  const updateWorks = createAction('[Work] updateWorks', props<{ payload:  Work; }>());
export  const updateWorksSuccesfully = createAction('[Work] updateWorksSuccesfully', props<{ payload:  Work; }>());

export  const deleteWorks = createAction('[Work] deleteWorks', props<{ payload:  Work; }>());
export  const deleteWorksSuccesfully = createAction('[Work] deleteWorksSuccesfully', props<{ payload:  Work; }>());

export  const filterWorks = createAction('[Work] filterWorks', props<{ payload:  string; }>());