import axios from 'axios';

const API_ID = '845760728902038';
const APP_SECRET = 'd9670e2932ab22522abeaf94b73f65f7';

export const FETCH_FB_DATA = 'FETCH_FB_DATA';

export function fetchFacebookPage(pageId){

	const url = `https://graph.facebook.com/v2.6/${pageId}?fields=id,name,picture,fan_count,posts&access_token=${API_ID}|${APP_SECRET}`;
	const request = axios.get(url); // this ajax returns a promise

	return (dispatch) => {
		request.then(({data}) => {
			dispatch({ type: FETCH_FB_DATA, payload: data})
		})
	};
	//payload is an optional paraamter that goes into action that can provide some additional info
}

//https://graph.facebook.com/v2.6/ATT?fields=id,name,picture,fan_count,posts&access_token=845760728902038|d9670e2932ab22522abeaf94b73f65f7`
