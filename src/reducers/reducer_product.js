import { FETCH_DATA, FILTER_DATA, SEARCH_DATA } from '../actions/index';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_DATA:
			
			return Object.assign({}, state, action.payload)
			// return [...state, action.paylo]

		case FILTER_DATA:
			
			return Object.assign({}, state, action.payload)

		case SEARCH_DATA:
			
			return Object.assign({}, state, action.payload)
	}
	return state;
}

export function reducer(state = {}, action){
	switch(action.type){
		case FETCH_DATA:
			
			return Object.assign({}, state, action.payload)
	}
	return state;
}

export function filterApplied(state = {}, action){
	switch(action.type){
		case FETCH_DATA:
			
			return Object.assign({}, state, action.payload)

		case FILTER_DATA:
			
			return Object.assign({}, state, action.payload)
			// return [...state, action.paylo]
	}
	return state;
}