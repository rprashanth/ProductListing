import Axios from 'axios';
import _ from 'lodash';

const Root_URL = 'http://test.supplybasics.com/alpine/products/test-list'

export const FETCH_DATA = "FETCH_DATA";
var brand = [];
var category = [];
var payloadData = {}
export function fetchdata(){
	const request = Axios.get('http://test.supplybasics.com/alpine/products/test-list')
		
	return (dispatch) =>  {
		request.then(function(response){
		for(let data of response['data']['data']){
			let newObject = {};
			newObject['name'] = data['Brand']['name']
			newObject['applied'] = false
			brand.push(newObject)
			newObject = {};
			newObject['name'] = data['Category']['name'];
			newObject['applied'] = false
			category.push(newObject)
		}
		payloadData['data'] = response['data']['data'];
		payloadData['category'] = _.uniq(category, 'name'); 
		payloadData['brand'] = _.uniq(brand, 'name');
		
		console.log(payloadData['category'])
		dispatch({type: FETCH_DATA, payload: payloadData,})
		
	})

	}
}