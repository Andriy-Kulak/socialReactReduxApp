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
			);
	}
}
// <!---->

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