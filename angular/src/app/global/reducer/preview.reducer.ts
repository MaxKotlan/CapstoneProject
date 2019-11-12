import { createReducer, on } from '@ngrx/store';
import { togglePreviewMode } from '../actions/preview.actions';
 
export const initialState : boolean = false;
 
const _previewMode = createReducer(initialState,
  on(togglePreviewMode, state => !state),
);
 
export function previewMode(state, action) {
  return _previewMode(state, action);
}