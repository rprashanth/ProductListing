import  React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Maps from '../components/maps'


class WeatherList extends React.Component{
	renderWeather(cityData, index){
		if(index > 158)
			return null;

		return(
		    <li key={index} className="list-group-item" style={{marginTop:10}}> {cityData['name']} {cityData['Brand']['name']} {cityData['Category']['name']}</li>
		    
			)
	}
	render(){
		console.log(this.props.data)
		if(this.props.data.data)
			return(
					<div>
					 	<ul className="list-group" >
							{this.props.data.data.map(this.renderWeather)}
	  					</ul>
					</div>
				);
		else
			return null
	}
}

function mapStateToProps(state){
	return { data: state.initialData } // same as doing weather: weather ES6
}

export default connect(mapStateToProps)(WeatherList)