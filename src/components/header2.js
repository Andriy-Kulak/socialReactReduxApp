import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Nav,
  NavItem,
  Navbar,
  MenuItem,
} from 'react-bootstrap';

class Header extends Component {

  //Sign-in/out toggle in navbar
  renderAuthLinks() {
    if (this.props.authenticated) {
      return <LinkContainer to="/signout">
            <NavItem className="nav-link" EventKey={1}>Sign Out</NavItem>
          </LinkContainer>
    } else {
      return [ 
          <LinkContainer to="/signin">
            <NavItem className="nav-link" EventKey={1}>Sign In</NavItem>
          </LinkContainer>,
          <LinkContainer to="/signup">
            <NavItem className="nav-link" EventKey={2}>Sign Up</NavItem>
          </LinkContainer>          
      ];
    }
  }

  render() {
    const {authenticated} = this.props;
    return (
      <div className="pos-absolute">

      <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                  <IndexLink to="/">
                    <div />
                    <span>Redux Social App</span>
                  </IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav navbar>
            <LinkContainer to="/social">
              <NavItem className="nav-link" EventKey={3}>Social</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem className="nav-link" EventKey={5}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem className="nav-link" EventKey={6}>Contact</NavItem>
            </LinkContainer>
            {authenticated &&<LinkContainer to="/signout">
              <NavItem className="nav-link" EventKey={1}>Sign Out</NavItem>
            </LinkContainer>}
            {!authenticated &&<LinkContainer to="/signin">
              <NavItem className="nav-link" EventKey={2}>Sign In</NavItem>
            </LinkContainer>}
            {!authenticated &&<LinkContainer to="/signup">
              <NavItem className="nav-link" EventKey={3}>Sign Up</NavItem>
            </LinkContainer>}  
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
