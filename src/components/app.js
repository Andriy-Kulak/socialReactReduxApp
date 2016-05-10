import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';
import FacebookList from '../containers/facebookList';


export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<FacebookList />
      </div>
    );
  }
}
