import React,{Component} from 'react';
import {connect} from 'react-redux';
import Charts from '../components/charts';


class WeatherList extends Component {

	renderWeather(CityData){

		const name = CityData.city.name;
		const id = 	 CityData.city.id;
		const temps = CityData.list.map(weather => weather.main.temp) ; // array of temps
		const Pressures = CityData.list.map(weather => weather.main.pressure) ; // array of Pressure
		const Humidities = CityData.list.map(weather => weather.main.humidity) ; // array of Humidity
		const {lon,lat} = CityData.city.coord;
		console.log(temps);

			return(
					<tr key={id}>
						<td>
							{name}
						</td>
						<td>
							<Charts data={temps} color='red' Units='K'/>
						</td>
						<td>
							<Charts data={Pressures} color='Green' Units='HPA'/>
						</td>
						<td>
							<Charts data={Humidities} color='orange' Units='%' />
						</td>
					</tr>
				)
				}  

		render(){
					console.log('render of weather list');
						return(
							<table className='table table-hover'>
								<thead>
									<tr>
										<th>City</th>
										<th>Temparature(K)</th>
										<th>Pressure(HPA)</th>
										<th>Humidity(%)</th>
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
		console.log('map state');
		return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);