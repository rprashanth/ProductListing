import Axios from 'axios';

const Root_URL = 'http://test.supplybasics.com/alpine/products/test-list'

export const FETCH_DATA = "FETCH_DATA";

export function fetchdata(){
	const request = Axios.get('http://test.supplybasics.com/alpine/products/test-list')
	return {
		type: FETCH_DATA,
		payload: request,
	}
}