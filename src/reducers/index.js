import { combineReducers } from 'redux';
import initialData from './reducer_weather';
const rootReducer = combineReducers({
  initialData: initialData
});

export default rootReducer;
