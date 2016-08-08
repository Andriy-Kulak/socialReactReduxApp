import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth.action';
import SearchBar from '../components/searchBar';
import FacebookList from '../components/facebookList';


class SocialDashboard extends Component {
	// componentWillMount() {
	// 	this.props.fetchMessage();
	// }

	render() {
		return(
			<div>
				<h3>Social Dashboard Page</h3>
				<SearchBar />
				<FacebookList />
			</div>
		)
	}
}

export default connect(null, actions)(SocialDashboard);