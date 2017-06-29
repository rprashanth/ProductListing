import { combineReducers } from 'redux';
import initialData from './reducer_product';
import { reducer } from './reducer_product';
import { filterApplied } from './reducer_product';


const rootReducer = combineReducers({
  initialData: initialData,
  mainData: reducer,
  filteredData: filterApplied
});

export default rootReducer;
