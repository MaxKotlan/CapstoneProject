import { createAction, props } from '@ngrx/store';
import { Category } from '../models/Category';


export  const getCategories = createAction('[Category] getCategories');
export  const getCategoriesSuccesfully = createAction('[Category] getCategoriesSuccesfully', props<{ payload:  Array<Category>; }>());

export  const addCategory = createAction('[Category] addCategory', props<{ payload:  Category; }>());
export  const addCategorySuccesfully = createAction('[Category] addCategorySuccesfully', props<{ payload:  Category; }>());


export  const updateCategory = createAction('[Category] updateCategory', props<{ payload:  Category; }>());
export  const updateCategorySuccesfully = createAction('[Category] updateCategorySuccesfully', props<{ payload:  Category; }>());

export  const categoryChanged = createAction('[Category] categoryChanged', props<{ payload:  Category; }>());
