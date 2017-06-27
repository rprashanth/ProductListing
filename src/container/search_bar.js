import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchdata } from '../actions/index';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state={
			term: ''
		};
	}
	componentWillMount(){
		this.props.fetchdata();
	}
	render(){
		return(
			<form onSubmit={(event)=>this.onFormSubmit(event)}className="input-group">
				<input 
					placeholder="Enter the Product name" 
					className="form-control"
					value={this.state.term}
					onChange={(event)=>this.onInputChange(event)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
			);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term)
		this.setState({term: ''})
	}
	
	onInputChange(event){
		this.setState({term: event.target.value});

	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchdata }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)