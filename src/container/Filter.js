import  React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterData } from '../actions/index';

var that;
var categoryArray = [];
var brandArray = [];

class Filter extends React.Component{
	constructor(){
		super();
		this.onSelect = this.onSelect.bind(this)
	}
	renderBrand(data,index){
		return(
			<div className="eachone" onClick={()=>{that.onSelect(data, 'category')}}>
				<div className="row">
					<div style={{float:'left', marginLeft:12}}>{data['name']}</div>
					{
						data.applied?<div className="selected"></div>:null
					}
				</div>

			</div>
		)
	}
	renderCategory(data, index){
		return(
			<div className="eachone" onClick={()=>that.onSelect(data, 'brand')}>
				<div className="row">
					<div style={{float:'left', marginLeft:12}}>{data['name']}</div>
					{
						data.applied?<div className="selected"></div>:null
					}
				</div>

			</div>
		)
	}
	onSelect(data, type){
		if(data['applied']){
			data['applied'] = false
		}
		else{
			data['applied'] = true
		}
		if(type=='brand'){
			var i = categoryArray.indexOf(data['name']);
			if(i != -1) {
				categoryArray.splice(i, 1);
			}
			else{
				categoryArray.push(data.name)
			}
		}
		else{
			var j = brandArray.indexOf(data['name'])
			if(j != -1) {
				brandArray.splice(j, 1);
			}
			else{
				brandArray.push(data.name)
			}
		}
		
		this.props.filterData(data, categoryArray, brandArray)
	}
	render(){
		that = this
			console.log(this.props.data.brand)
			return(
					<div className="sidenav">
					 	<div className="header">
					 		Filters
					 	</div>
					 	<div  className='brand'>
					 		<div>Brand</div>
						 	<div className="filterType">
						 		{ this.props.data.brand?this.props.data.brand.map(this.renderBrand): null}
						 	</div>
						</div>
						<div  className="Category">
					 		<div>Category</div>
						 	<div className="filterType">
						 		{ this.props.data.category?this.props.data.category.map(this.renderCategory): null}
						 	</div>
						</div>
					</div>
				);
		
	}
}

function mapStateToProps(state){
	return { data: state.initialData } // same as doing weather: weather ES6
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ filterData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)