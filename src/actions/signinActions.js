import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './typesAuth';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
	return function(dispatch) {

		//Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				// If request is good...
				console.log("PASS");

				// - Update state to indicate user is authenticated
				dispatch({type: AUTH_USER})
				// - Save the JWT token

				// - redirect to the route '/feature'
				browserHistory.push('/feature');

			})
			.catch(() => {
				console.log('FAIL');
			})
	}


	//if request is bad...

	// - Show an error to the user
	

}

// importan rule: action creator alwasys returns an object (which is what we call an action) except when you use
// redux thunk - you can return another function