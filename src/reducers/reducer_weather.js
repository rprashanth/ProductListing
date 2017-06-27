import { FETCH_DATA } from '../actions/index';

export default function (state = [], action){
	switch(action.type){
		case FETCH_DATA:
			console.log(action.payload)

			return [...state, action.payload.data, action.payload.brand, action.payload.category];
			// return [...state, action.paylo]
	}
	return state;
}