import  React from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

class ProductList extends React.Component{
	constructor(){
		super();
		this.state = {
			paginationValue :10 ,
			pageLength: 6,
			dataArray:[],
			initialShowingPageList: [1,2,3,4,5,6]
		}
	}

	shouldComponentUpdate(nextprops){
		let array = [];
		if(nextprops.data.data){
			this.state.dataArray = nextprops.data.data.slice(0,10);

			let length = Math.ceil(nextprops.data.data.length/10);
			if(length<6){
				for(let i=1;i<=length;i++){
					array.push(i)
				}
				this.state.initialShowingPageList = array
			}
			else{
				this.state.initialShowingPageList =  [1,2,3,4,5,6]
			}
			
			return true;
		}
		return false;
	}

	componentWillReceiveProps(){
		// console.log(90)
	}

	renderList(cityData, index){

		return(
		    <div key={index} 
		    	className="list-group-item" 
		    	style={{marginTop:10, fontSize:15, }}> 
		    	<div className="row">
		    		<div className="col-sm-8" >
		    			<div style={{color:'black', fontWeight:600}}>{cityData['name']} </div>
		    		</div>
		    		<div className="col-sm-4"style={{fontSize:12}}>
		    			<div className="row"> 
		    				<div className="type">{cityData['Brand']['name']}</div>
		    			</div>
		    			<div className="row" style={{marginTop:4}}> 
		    				<div className="type">{cityData['Category']['name']}</div>
		    			</div>
		    		</div>
		    	</div>

		    </div>
		    
			)
	}
	nextPage(index){
		// alert(index)
		let start = (index-1)*10
		let arrayNew = this.props.data.data.slice(start, start+10)
		this.setState({dataArray: arrayNew})
	}
	renderPage(index){
		return(
		
				<div key={index} className="col-sm-2" onClick={()=>this.nextPage(index)} >
					 <button type="button " className="btn btn-default">{index}</button>
				</div>
				
		)
	}
	moveLeftorRight(action){
		let length = this.props.data.data.length;
		if(action === 'right'){
			let array = [];
			let last = this.state.initialShowingPageList[this.state.initialShowingPageList.length-1];
			if(last*10 <= length){
				for (let i=last+1; i<last+7; i++){
					if(i*10 <= length || (i*10)-length <= 9)
						array.push(i)
				}
				this.setState({initialShowingPageList: array})
			}
			
			
		}
		else{
			let array = [];
			let last = this.state.initialShowingPageList[0];
			if(last>1){
				for (let i=last-6; i< last; i++){
					array.push(i)
				}
				this.setState({initialShowingPageList: array})
			}
			
		}
	}
	render(){

			return(
					<div >
					 	<div className="list-group" id="list">
							{this.state.dataArray.map(this.renderList)}
	  					</div>
	  					<div className="container" style={{position: 'relative', top:24}}>
							<div className="row">
								<div className="col-sm-2" onClick={()=>this.moveLeftorRight('left')} >
					 				<button type="button" className="btn btn-primary" style={{backgroundColor:'white', color:'black'}}>Left</button>
								</div>
								<div className="col-sm-8" >
					 				{this.state.initialShowingPageList.map(this.renderPage.bind(this))}
								</div>
	  							<div className="col-sm-2" onClick={()=>this.moveLeftorRight('right')} >
					 				<button type="button" className="btn btn-primary" style={{backgroundColor:'white', color:'black'}}>Right</button>
								</div>
	  							
	  						</div>
						</div>
					</div>
				);
		
	}
}

function mapStateToProps(state){
	return { data: state.initialData } // same as doing weather: weather ES6
}

export default connect(mapStateToProps)(ProductList)