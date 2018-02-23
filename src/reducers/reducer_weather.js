import {FETCH_WEATHER} from '../actions/index'

export default function(state=[],action){
	
console.log('action received',action);

	switch(action.type){
		case FETCH_WEATHER :
		return state.concat([action.payload.data]);   // making an array of citydata, if we would have use push thn it will return count
//		or	return [action.payload.data,...state];   es6 syntax
	}

	return state;
}