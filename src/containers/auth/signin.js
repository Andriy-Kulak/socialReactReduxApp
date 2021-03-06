import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth.action';

class Signin extends Component {

	// used to take supplied inputs and check auth
	handleFormSubmit({email, password}) {
<<<<<<< HEAD
		console.log(email, password);
=======
>>>>>>> 2c9f6715772a7252d4b7889b50e09b460bd40a61

		//Need something to log user in
		this.props.signinUser({email, password});
	}

	renderAlert(){
		if(this.props.errorMessage) {
			console.log("TEST123")
			return (
			<div className="alert alert-danger">
				<strong>Oops!</strong> {this.props.errorMessage}
			</div>
			);
		}
	}

	render() {
		//handleSubmit is a built in redux-form helper to bind ui to values
		const { handleSubmit, fields: {email, password}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
        		<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} type="password" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {errorMessage: state.auth.error};
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);


//fields: ['email', 'password', 'firstName', 'lastName', 'company', 'fbHandler']