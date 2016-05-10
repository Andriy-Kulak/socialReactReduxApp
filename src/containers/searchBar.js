import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFacebookPage } from  '../actions/index';

class SearchBar extends Component {
	constructor(props) {

		//to initalize state
		super(props);
		this.state = { term: ''};

		//addresses "this" scoping issue in onInputChange
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		// we are using onFormSubmit to prevent a default action by form element to send a POST request and refresh the page
		// since we are doing a Single Page App, we don't want the page to refresh
		event.preventDefault();

		this.props.fetchFacebookPage(this.state.term);
		this.setState({ term: ''}); // will clear value after user triggers the function
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					className="form-control"
					placeholder="get facebook data"
					value={this.state.term}
					onChange={this.onInputChange}
				/>		
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchFacebookPage}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
