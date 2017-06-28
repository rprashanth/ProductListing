import Axios from 'axios';
import _ from 'lodash';

const Root_URL = 'http://test.supplybasics.com/alpine/products/test-list'

export const FETCH_DATA = "FETCH_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const SEARCH_DATA = "SEARCH_DATA";


export function fetchdata(){
	let payloadData = {};
	const request = Axios.get(Root_URL)
	let brand = [];
	let category = [];
	return (dispatch, getState) =>  {
		
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

		dispatch({type: FETCH_DATA, payload: payloadData, filterData: payloadData})
		
	})

	}
}

export function filterData(dataGot, categoryList, brandList){
	let payloadData = {};
	let newData = [];
	let newDataFinal = [];
	
	return (dispatch, getState) => {
		let initialData = getState()['mainData']
		if(categoryList.length == 0 && brandList.length == 0){
			newDataFinal = initialData['data']
		}
		else if(categoryList.length == 0){
			// newData = initialData['data'];
			newData = [];

		}
		else if(brandList.length == 0){
			// newDataFinal = newData;
			newDataFinal = [];

		}

		for(let data of initialData['data']){
			for(let i in categoryList){
				if(categoryList[i] == data['Category']['name']){
					newData.push(data)
				}
			}

		}

		for(let data of initialData['data']){
			for(let i in brandList){
				if(brandList[i] == data['Brand']['name']){
					newDataFinal.push(data)
				}
			}
		}
		

		// for(let data of newData){
		// 	for(let i in brandList){
		// 		if(brandList[i] == data['Brand']['name']){
		// 			newDataFinal.push(data)
		// 		}
		// 	}
		// }
	
		// payloadData['data'] = newDataFinal;
		payloadData['data'] = _.uniq(newDataFinal.concat(newData));
		payloadData['category'] =initialData['category']; 
		payloadData['brand'] = initialData['brand'];

		dispatch({type: FILTER_DATA, payload: payloadData})

	}

}

export function search(element){
	let payloadData = {};
	let newData = [];
	return (dispatch, getState) =>{
		for(let state of getState().filteredData['data']){
			if(state['name'].toLowerCase().indexOf(element.toLowerCase()) >-1){
					newData.push(state)
				}
		}
		payloadData['data'] = newData;
		payloadData['category'] =getState().initialData['category']; 
		payloadData['brand'] = getState().initialData['brand'];
		dispatch({type: SEARCH_DATA, payload: payloadData})

	}

} 