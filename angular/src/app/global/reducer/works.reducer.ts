import { createReducer, on } from '@ngrx/store';
import { Work } from '../models/Work';
import { getWorksSuccesfully, filterWorks, addWorksSuccesfully, deleteWorksSuccesfully, deleteWorks, updateWorksSuccesfully } from '../actions/works.actions';

interface State{
  allWorks: Array<Work>,
  filteredWorks: Array<Work>,
  searchText : string
}

export const initialState : State = {
  allWorks: new Array<Work>(),
  filteredWorks: new Array<Work>(),
  searchText: ""
};
 
const _worksReducer = createReducer(
  initialState,
  on(getWorksSuccesfully, (state,action) => {return {...state, filteredWorks: action.payload, allWorks: action.payload }}),
  on(addWorksSuccesfully, (state,action) => addWork(state, action)),
  on(deleteWorksSuccesfully, (state,action) => deleteWork(state, action)),
  on(updateWorksSuccesfully, (state,action) => updateWork(state, action)),
  on(filterWorks, (state, action) => generateFilterState(state, action.payload)),
);

function addWork(state, action){
  let justAdded =  {...state, allWorks: state.allWorks.push(action.payload) }
  let addedAndFiltered = generateFilterState(justAdded, state.searchText);
  return addedAndFiltered;
}

function updateWork(state, action){
  let justUpdated = state; //rn just returns existing because it doesnt matter as much for update{...state, allWorks: state.allWorks.find((w : Work) => w.id != action.payload.id) }
  let updatedAndFiltered = generateFilterState(justUpdated, state.searchText);
  return updatedAndFiltered;
}

function deleteWork(state, action){
  let justDeleted =  {...state, allWorks: state.allWorks.filter((w : Work) => w.id != action.payload.id) }
  let deletedAndFiltered = generateFilterState(justDeleted, state.searchText);
  return deletedAndFiltered;
}

function generateFilterState(state, newSearchString){
  let fields : Array<string> = Object.keys(new Work()).filter((key => key != 'id' && key != 'category'));
  state.searchText = newSearchString;
  let worksFiltered = state.allWorks.filter((work : Work) => 
    fields.some((key : string) => 
      work[key].toUpperCase().includes(state.searchText.toUpperCase())
    ));
  return { ...state, filteredWorks: worksFiltered};
}
 
export function WorksReducer(state, action) {
  return _worksReducer(state, action);
}