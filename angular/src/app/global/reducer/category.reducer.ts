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
    on(getCategoriesSuccesfully, (state,action) => getCategory(state, action)),
    on(addCategorySuccesfully, (state, action) => addCategory(state, action)),
    on(deleteCategorySuccesfully, (state, action) => {return {...state, categories: state.categories.filter((c : Category) => c.id != action.payload.id) }}),
    on(categoryChanged, (state, action) => updateCategory(state, action))
  );

  function getCategory(state, action){
    let finalState = {...state, categories: action.payload };
    return sortCategoriesAlphabetically(finalState);
  }

  function  addCategory(state, action){
    let finalState = {...state, categories: [...state.categories, action.payload]};
    return sortCategoriesAlphabetically(finalState);
  }

  function updateCategory(state, action){
    let index = state.categories.findIndex(x => x.id == action.payload.id)
    let finalState = { ...state, categories: [...state.categories.splice(0, index), action.payload, ...state.categories.splice(index + 1)]};
    return sortCategoriesAlphabetically(finalState);     
  }

  function sortCategoriesAlphabetically(state){
    return {...state, categories: state.categories.sort((a,b) => (a.title > b.title) ? 1 : -1)}
  }

  export function CategoryReducer(state, action) {
    return _categoryReducer(state, action);
  }