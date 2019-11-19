import { createReducer, on } from '@ngrx/store';
import { Category } from '../models/Category';
import { getCategoriesSuccesfully, categoryChanged, addCategorySuccesfully, deleteCategorySuccesfully } from '../actions/category.actions';

interface State{
    categories: Array<Category>
  }
  
  export const initialState : State = {
    categories: new Array<Category>()
  };
   
  const _categoryReducer = createReducer(
    initialState,
    on(getCategoriesSuccesfully, (state,action) => {return {...state, categories: action.payload }}),
    on(addCategorySuccesfully, (state, action) => {return {...state, categories: [...state.categories, action.payload]}}),
    on(deleteCategorySuccesfully, (state, action) => {return {...state, categories: state.categories.filter((c : Category) => c.id != action.payload.id) }}),
    on(categoryChanged, (state, action) => updateCategory(state, action))
  );
  
  function updateCategory(state, action){
    let index = state.categories.findIndex(x => x.id == action.payload.id)
    return { ...state, categories: [...state.categories.splice(0, index), action.payload, ...state.categories.splice(index + 1)]};      
  }

  export function CategoryReducer(state, action) {
    return _categoryReducer(state, action);
  }