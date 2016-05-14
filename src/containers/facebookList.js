import React, { Component } from 'react';
import { connect } from 'react-redux';

class FacebookList extends Component {
	renderFacebook(fbData){
		console.log('in FBlist', fbData);
		console.log('in FBlist name', fbData.name);
		const name = fbData.name;

		console.log('TEST constant nae', name);

		const posts = fbData.posts;

		console.log('TEST constant posts', posts);
		const id = fbData.id;
		const fanCount = fbData.fan_count;

		return (
			<tr key={name}>
				
				<td>{name}</td>
				<td>{id}</td>
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
// 

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