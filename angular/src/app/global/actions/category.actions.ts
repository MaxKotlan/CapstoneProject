import { createAction, props } from '@ngrx/store';
import { Category } from '../models/Category';


export  const getCategories = createAction('[Category] getCategories');
export  const getCategoriesSuccesfully = createAction('[Category] getCategoriesSuccesfully', props<{ payload:  Array<Category>; }>());

export  const categoryUpdated = createAction('[Category] categoryUpdated', props<{ payload:  Category; }>());
