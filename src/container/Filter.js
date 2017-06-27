import  React from 'react';
import { connect } from 'react-redux';


class Filter extends React.Component{
	
	render(){
		
			return(
					<div className="sidenav">
					 	<div className="header">
					 		Filters
					 	</div>
					 	<div  className='brand'>
					 		<div>Brand</div>
						 	<div className="filterType">
						 		<div className="eachone">
						 			<div>EACHoNE</div>
						 		</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>

						 	</div>
						</div>
						<div  className="Category">
					 		<div>Category</div>
						 	<div className="filterType">
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>
						 		<div className="eachone">EACHoNE</div>

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