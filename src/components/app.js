import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/product-list';
import Filter from  '../container/Filter';

export default class App extends Component {
  render() {
    return (
    	<div className="container fixed-height" style={{position:'relative', top:10}}>
    	 <div className="row" >
		    <div className="col-sm-3" >
          <Filter />
        </div>
		    <div className="col-sm-9" >
          <div className="row" >
		    	<SearchBar />
          </div>
          <div className="row" >
      		<WeatherList />
          </div>
		    </div>
		  </div>
      		
    	</div>
    );
  }
 
  
}
