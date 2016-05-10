export default function(state = null, action) {
	console.log('Action received', action);

	return state;
}


/*
import { FETCH_FB_DATA } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FB_DATA:

			console.log('Reducer TEST', action);

			return state.concat([action.payload.data]); // we are creating a new state array with this line.
			// another alternative-> return [ action.payload.data, ...state];
			//DONT EVER MANIPULATE THE STATE in your code, instead create a new object
			//the code to your right is bad practice: state.push(action.payload.data)
	}
	//console.log('state in social Reducer', state);
	return state;
}
*/