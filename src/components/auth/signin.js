import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

	// used to take supplied inputs and check auth
	handleFormSubmit({email, password}) {
		console.log(email, password);
	}

	render() {

		//handleSubmit is a built in redux-form helper to bind ui to values
		const { handleSubmit, fields: {email, password}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />

					<label>Password:</label>
					<input {...password} className="form-control" />
				</fieldset>

				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);


//fields: ['email', 'password', 'firstName', 'lastName', 'company', 'fbHandler']