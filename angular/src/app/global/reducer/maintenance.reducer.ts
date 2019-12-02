import { createReducer, on } from '@ngrx/store';
import { toggleMaintenanceSuccesfully } from '../actions/maintenance.actions';

interface State{
    maintenanceModeEnabled: boolean
}
  
export const initialState : State = {
    maintenanceModeEnabled: false
};
   
const _maintenanceReducer = createReducer(
    initialState,
    on(toggleMaintenanceSuccesfully, (state,action) => {return {...state, maintenanceModeEnabled: action.payload }})
);

export function MaintenanceReducer(state, action) {
    return _maintenanceReducer(state, action);
}