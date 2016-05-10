import React, { Component } from 'react';
import { connect } from 'react-redux';

class FacebookList extends Component {
	renderFacebook(fbData){
		console.log('in FBlist', fbData);
		console.log('in FBlist name', fbData.name);

		/*return (
			<tr>
				<td>{fbData.posts}</td>
				<td>{fbData.name}</td>
				<td>{fbData.id}</td>
				<td>{fbData.picture}</td>
			</tr>
			);*/
	}


	render() {
		console.log('Render', this.props.social);
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Picture</th>
						<th>Fan Count</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
			);
	}
}
// {this.props.social.map(this.renderFacebook)}

// id,name,picture,fan_count,posts

function mapStateToProps({ social }) {
	return { social }; // same as { social : social } 
}

/* function above is the same as this
function mapStateToProps(state) {
	return { social: state.social }
}
*/

export default connect(mapStateToProps)(FacebookList);