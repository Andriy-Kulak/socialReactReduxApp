import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; //middleware
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/authTypes.action';

//containers
import App from './containers/app';
import Signin from './containers/auth/signin';
import Signup from './containers/auth/signup';
import Signout from './containers/auth/signout';
import SocialDashboard from './containers/socialDashboard';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import RequireAuth from './containers/auth/requireAuth'; //use for any page that requires auth

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

//If you want specific pages to require auth, add 'RequireAuth'
//<Route path="social" component={RequireAuth(SocialDashboard)} />

// Routes
ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Home} />
    		<Route path="about" component={About} />
    		<Route path="contact" component={Contact} />
    		<Route path="signin" component={Signin} />
    		<Route path="signout" component={Signout} />
    		<Route path="signup" component={Signup} />
    		<Route path="social" component={SocialDashboard} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

//Notes

// Provider communicates with connected components i.e App