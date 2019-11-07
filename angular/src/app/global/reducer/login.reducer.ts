import { createReducer, on } from '@ngrx/store';
import { isLoggedInSuccesfully, isLoggedOutSuccesfully } from '../actions/login.actions';
 
export const initialState : boolean = false;
 
const _isLoggedInReducer = createReducer(initialState,
  on(isLoggedInSuccesfully, state => true),
  on(isLoggedOutSuccesfully, state => false)
);
 
export function isLoggedInReducer(state, action) {
  return _isLoggedInReducer(state, action);
}