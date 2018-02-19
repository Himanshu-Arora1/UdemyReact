import axios from 'axios';

const API_KEY='46cf9372022459a4e0244366663836e8';
// consr ROOT_URL=`http://samples.openweathermap.org/data/2.5/forecast?&appid=` + API_KEY; or
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`; // ES6 Code


export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	

const url = `${ROOT_URL}&q=${city},IN`;


const request = axios.get(url);
console.log('request is ', request);

return{
	type: FETCH_WEATHER,
	payload:request
	}
}