import { createReducer, on } from '@ngrx/store';
import { Work } from '../models/Work';
import { getWorksSuccesfully, filterWorks } from '../actions/works.actions';

interface State{
  allWorks: Array<Work>,
  filteredWorks: Array<Work>
}

export const initialState : State = {
  allWorks: new Array<Work>(),
  filteredWorks: new Array<Work>()
};
 
const _worksReducer = createReducer(
  initialState,
  on(getWorksSuccesfully, (state,action) => {return { filteredWorks: action.payload, allWorks: action.payload }}),
  on(filterWorks, (state, action) => generateFilterState(state, action)),
);

function generateFilterState(state, action){
  let fields : Array<string> = Object.keys(new Work()).filter((key => key != 'id' && key != 'category'));
  let worksFiltered = state.allWorks.filter((work : Work) => 
    fields.some((key : string) => 
      work[key].toUpperCase().includes(action.payload.toUpperCase())
    ));
  return { ...state, filteredWorks: worksFiltered};
}
 
export function WorksReducer(state, action) {
  return _worksReducer(state, action);
}