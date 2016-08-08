import { FETCH_FB_DATA } from '../actions/social.action';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FB_DATA:

			console.log('Reducer TEST', action);

			return [ action.payload, ...state];// we are creating a new state array with this line.
			// another alternative-> return [ action.payload, ...state];
			//DONT EVER MANIPULATE THE STATE in your code, instead create a new object
			//the code to your right is bad practice: state.push(action.payload.data)
	}
	//console.log('state in social Reducer', state);
	return state;
}
