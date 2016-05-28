import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; //middleware
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/authTypes.action';

//components
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import SocialDashboard from './components/socialDashboard';
import Home from './components/home'
import RequireAuth from './components/auth/requireAuth'; //use for any page that requires auth

//index reducer
import reducers from './reducers/index.reducer';



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

// If we have a token, consider the user to be logged in
if (token) {
	//we need to update application status
	store.dispatch({ type: AUTH_USER });
}

// Routes
ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Home} />
    		<Route path="signin" component={Signin} />
    		<Route path="signout" component={Signout} />
    		<Route path="signup" component={Signup} />
    		<Route path="social" component={RequireAuth(SocialDashboard)} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

//Notes

// Provider communicates with connected components i.e App