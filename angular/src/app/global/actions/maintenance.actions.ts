import { createAction, props } from '@ngrx/store';

export const getMaintenanceStatus = createAction('[Maintenance] getMaintenanceStatus');
export const toggleMaintenance = createAction('[Maintenance] toggleMaintenanceMode');
export const toggleMaintenanceSuccesfully = createAction('[Maintenance] toggleMaintenanceModeSuccesfully', props<{ payload:  boolean; }>());
