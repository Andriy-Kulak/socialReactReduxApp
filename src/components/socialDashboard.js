import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth.action'


class SocialDashboard extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return(
			<h3>Social Dashboard Page</h3>
		)
	}

}

export default connect(null, actions)(SocialDashboard);