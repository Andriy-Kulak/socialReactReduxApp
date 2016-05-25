import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER,
		AUTH_ERROR
 		} from './typesAuth';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
	return function(dispatch) {

		//Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				// If request is good...
				console.log("PASS");

				// - Update state to indicate user is authenticated: flag will turn to "true"
				dispatch({type: AUTH_USER})
				// - Save the JWT token in local storage
				localStorage.setItem('token', response.data.token);

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

export function authError(error){
		return {
			type: AUTH_ERROR,
			payload: error
		};
}

// importan rule: action creator alwasys returns an object (which is what we call an action) except when you use
// redux thunk - you can return another function