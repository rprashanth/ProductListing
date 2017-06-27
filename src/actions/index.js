import Axios from 'axios';
import _ from 'lodash';

const Root_URL = 'http://test.supplybasics.com/alpine/products/test-list'

export const FETCH_DATA = "FETCH_DATA";
var brand = [];
var category = [];
var payloadData = {}
var golbalData;
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
		category = []
		brand = []
		golbalData = payloadData
		console.log(payloadData['category'])
		dispatch({type: FETCH_DATA, payload: payloadData,})
		
	})

	}
}

export function filterData(dataGot, categoryList, brandList){
	payloadData = {}
	var newData = [];
	var newDataFinal = []
	

	for(var data of golbalData['data']){
		for(var i in categoryList){
			if(categoryList[i] == data['Category']['name']){
				newData.push(data)
			}
		}

	}

	for(var data of newData){
		for(var i in brandList){
			if(brandList[i] == data['Brand']['name']){
				console.log(data['Brand']['name'])
				newDataFinal.push(data)
			}
		}
	}
	if(categoryList.length == 0 && brandList.length == 0){
		newDataFinal = golbalData
	}
	else if{
		
	}
	if(brandList.length == 0){
		newDataFinal = newData
	}
	console.log(newDataFinal)
	payloadData['data'] = newDataFinal;
	payloadData['category'] =golbalData['category']; 
	payloadData['brand'] = golbalData['brand'];
	

	
	return{
		type:'FILTER_DATA',
		payload: payloadData
	}
}