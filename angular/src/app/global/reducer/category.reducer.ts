import { createReducer, on } from '@ngrx/store';
import { Category } from '../models/Category';
import { getCategoriesSuccesfully } from '../actions/category.actions';

interface State{
    categories: Array<Category>
  }
  
  export const initialState : State = {
    categories: new Array<Category>()
  };
   
  const _categoryReducer = createReducer(
    initialState,
    on(getCategoriesSuccesfully, (state,action) => {return {...state, categories: action.payload }})
  );
  
  export function CategoryReducer(state, action) {
    return _categoryReducer(state, action);
  }