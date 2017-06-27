import  React from 'react';
import { connect } from 'react-redux';


class Filter extends React.Component{
	renderCategory(data){
		return(
			<div className="eachone">
				<div>{data['name']}</div>
			</div>
		)
	}
	renderBrand(data){
		return(
			<div className="eachone">
				<div>{data['name']}</div>
			</div>
		)
	}
	render(){
			console.log(this.props.data[1])
			return(
					<div className="sidenav">
					 	<div className="header">
					 		Filters
					 	</div>
					 	<div  className='brand'>
					 		<div>Brand</div>
						 	<div className="filterType">
						 		{ this.props.data[2]?this.props.data[2].map(this.renderCategory): null}
						 	</div>
						</div>
						<div  className="Category">
					 		<div>Category</div>
						 	<div className="filterType">
						 		{ this.props.data[1]?this.props.data[1].map(this.renderBrand): null}
						 	</div>
						</div>
					</div>
				);
		
	}
}

function mapStateToProps(state){
	return { data: state.initialData } // same as doing weather: weather ES6
}

export default connect(mapStateToProps)(Filter)