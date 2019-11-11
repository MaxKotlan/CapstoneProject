import { createReducer, on } from '@ngrx/store';
import { Work } from '../models/Work';
import { setWorks } from '../actions/works.actions';
 
export const initialState : Array<Work> = new Array<Work>();
 
const _worksReducer = createReducer(
  initialState,
  on(setWorks, (state, action) =>
      state = action.payload
  )
);
 
export function WorksReducer(state, action) {
  return _worksReducer(state, action);
}