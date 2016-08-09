import React, { Component } from 'react';
import { connect } from 'react-redux';

class FacebookList extends Component {
	renderFacebook(fbData){
		
		const name = fbData.name;
		const posts = fbData.posts;
		const id = fbData.id;
		const image = fbData.picture.data.url;
		const fanCount = fbData.fan_count;

		return (
			<tr key={name}>
				<td>{id}</td>
				<td>{name}</td>
				<td><img src={image} /></td>
				<td>{fanCount}</td>
			</tr>
			);
	}

	render() {	
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
					{this.props.social.map(this.renderFacebook)}
				</tbody>
			</table>
<<<<<<< HEAD
			);
=======
		);
>>>>>>> 2c9f6715772a7252d4b7889b50e09b460bd40a61
	}
}

function mapStateToProps({ social }) {
	return { social }; // same as { social : social } 
}

export default connect(mapStateToProps)(FacebookList);