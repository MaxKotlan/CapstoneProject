import { createAction, props } from '@ngrx/store';
import { Category } from '../models/Category';


export  const getCategories = createAction('[Work] getCategories');
export  const getCategoriesSuccesfully = createAction('[Work] getCategoriesSuccesfully', props<{ payload:  Array<Category>; }>());
