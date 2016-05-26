import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth.action';

class Signup extends Component {
	render() {
		const { handleSubmit, fields: {firstName, lastName, companyName,
			fbHandle, email, password, passwordConfirm}} = this.props;

		return (
			<form>
				<fieldset className="form-group">
						<label>First Name:</label>
						<input {...firstName} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Last Name:</label>
						<input {...lastName} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Company Name:</label>
						<input {...companyName} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Facebook Handle:</label>
						<input {...fbHandle} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Email:</label>
						<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Password:</label>
						<input {...password} className="form-control" type="password"/>
				</fieldset>
				<fieldset className="form-group">
						<label>Confirm Password:</label>
						<input {...passwordConfirm} className="form-control" />
				</fieldset>

				<button action="submit" className="btn btn-primary">Signup!</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	fields: [
		'firstName',
		'lastName',
		'companyName',
		'fbHandle',
		'email',
		'password',
		'passwordConfirm'
		]
})(Signup);