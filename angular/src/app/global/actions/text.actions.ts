import { createAction, props } from '@ngrx/store';
import { TextPost } from '../models/TextPost';

export  const getText = createAction('[Text] getText');
export  const getTextSuccesfully = createAction('[Text] getTextSuccesfully', props<{ payload:  Array<TextPost>; }>());

export  const addText = createAction('[Text] addText', props<{ payload:  TextPost; }>());
export  const addTextSuccesfully = createAction('[Text] addTextSuccesfully', props<{ payload:  TextPost; }>());

export  const updateText = createAction('[Text] updateText', props<{ payload:  TextPost; }>());
export  const updateTextSuccesfully = createAction('[Text] updateTextSuccesfully', props<{ payload:  TextPost; }>());

export  const deleteText = createAction('[Text] deleteText', props<{ payload:  TextPost; }>());
export  const deleteTextSuccesfully = createAction('[Text] deleteTextSuccesfully', props<{ payload:  TextPost; }>());
