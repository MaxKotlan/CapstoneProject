import { TextPost } from '../models/TextPost';
import { createReducer, on } from '@ngrx/store';
import { getTextSuccesfully, addTextSuccesfully, updateTextSuccesfully, deleteTextSuccesfully } from '../actions/text.actions';

interface State{
    allText: Array<TextPost>
}
  
export const initialState : State = {
    allText: new Array<TextPost>(),
};

const _textReducer = createReducer(
initialState,
    on(getTextSuccesfully, (state,action) => {return {...state, allText: action.payload }}),
    on(addTextSuccesfully, (state,action) => addText(state, action)),
    on(updateTextSuccesfully, (state,action) => updateText(state, action)),
    on(deleteTextSuccesfully, (state,action) => deleteText(state, action)),
);

function addText(state, action){
    return {...state, allText: [...state.allText, action.payload] };
}
  
function updateText(state, action){
    //rn just returns existing because it doesnt matter as much for update{...state, allWorks: state.allWorks.find((w : Work) => w.id != action.payload.id) }
    return state;
}
  
function deleteText(state, action){
    return {...state, allText: state.allText.filter((w : TextPost) => w.id != action.payload.id) };
}
  
export function TextReducer(state, action) {
    return _textReducer(state, action);
}