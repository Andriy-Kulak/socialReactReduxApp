import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.action';

class Signout extends Component {
	//as soon as 
	componentWillMount(){
		this.props.signoutUser();
	}

	render() {
		return <div> Have a wonderful day! :-)</div>
	}
}

export default connect(null, actions)(Signout);