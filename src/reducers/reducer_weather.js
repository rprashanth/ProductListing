import { FETCH_DATA } from '../actions/index';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_DATA:
			
			return Object.assign({}, state, action.payload)
			// return [...state, action.paylo]

		case 'FILTER_DATA':
			
			return Object.assign({}, state, action.payload)
	}
	return state;
}