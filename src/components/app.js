import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather-list';
import Filter from  '../container/Filter';

export default class App extends Component {
  render() {
    return (
    	<div className="container-fluid" style={{marginTop:20, }}>
    	 <div className="row" >
		    <div className="col-sm-4" ><Filter /></div>
		    <div className="col-sm-8" >
		    	<SearchBar />
      			<WeatherList />
		    </div>
		  </div>
      		
    	</div>
    );
  }
 
  
}
