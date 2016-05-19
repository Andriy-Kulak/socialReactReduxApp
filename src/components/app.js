import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';
import FacebookList from '../containers/facebookList';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	{this.props.children}
      	<SearchBar />
      	<FacebookList />
      </div>
    );
  }
}
