import { FETCH_DATA, FILTER_DATA, SEARCH_DATA } from '../actions/index';

//initially fetched data will be stored in three states 
// for searching and filtering and rendering accordingly without conflicts.

//filter applied is dtored in two states for filtering and searching accordingly.

export default function (state = {}, action){
	switch(action.type){
		case FETCH_DATA:
			return Object.assign({}, state, action.payload)

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
	}
	return state;
}