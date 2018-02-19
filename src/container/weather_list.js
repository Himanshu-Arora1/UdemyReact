import React,{Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData){

		console.log('Render Weather');

		console.log('name',citydata.city.name);

		return(
					<tr>
						<td>
							{cityData.city.name}
						</td>
					</tr>
			)
	} 

	render(){
	console.log('render ');
		return(
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>City</th>
							<th>Temparature</th>
							<th>Pressure</th>
							<th>Humidity</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}
}

function mapStateToProps(state){

		return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);