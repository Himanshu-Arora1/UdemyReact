import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

	constructor(props){

		super(props);

		this.state = {term:''}
		

		this.onInputChange=this.onInputChange.bind(this);
		this.onFormSubmit=this.onFormSubmit.bind(this);

		console.log('search constructor');
	}



	onInputChange(event){
	
		this.setState({term:event.target.value})
	}

	onFormSubmit(event){
		console.log('SearchBar Onsubit');
		event.preventDefault();
		
		this.props.fetchWeather(this.state.term);
		
		this.setState({term:''});
		
	}

	render(){
				console.log('sear render');		
		return(

				<form onSubmit=	{this.onFormSubmit} className="input-group">
					<input 
					 className='form-control'
					 placeholder='Enter the city name for weather forecaste'
					 value={this.state.term}
					 onChange={this.onInputChange}
					 />
					<span className="input-group-btn"> 
						<button typ="submit" className="btn btn-secondary"> submit </button>
					</span>
				</form>
			)
	}
}

function mapDispatchToProps(dispatch){

	console.log('dispatch');
	return bindActionCreators({fetchWeather},dispatch);

}

export default connect(null,mapDispatchToProps)(SearchBar);