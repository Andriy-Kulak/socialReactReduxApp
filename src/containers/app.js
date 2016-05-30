import React, { Component } from 'react';
import Header from '../components/header';
import Header2 from '../components/header2';
import Header3 from '../components/header3';

export default class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <Header2 />
        <div className="appContent">
      	 {this.props.children}
        </div>
      </div>
    );
  }
}
