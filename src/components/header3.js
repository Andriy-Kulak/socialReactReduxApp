import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Nav,
  NavItem,
  Navbar,
  MenuItem,
} from 'react-bootstrap';

class Header3 extends Component {
  renderAuthLinks() {
      if (this.props.authenticated) {
        return (
          <LinkContainer to="/signout">
            <NavItem key={5}>Signout</NavItem>
          </LinkContainer>
        )
      } else {
        return [ 
        <LinkContainer to="/signin">
            <NavItem key={6}>Sign In</NavItem>
        </LinkContainer>,
        <LinkContainer to="/signup">
            <NavItem key={7}>Sign Up</NavItem>
        </LinkContainer>
        ];
      }
  }

  render() {
    return (
      <div >
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div />
                <span>Redux Social App</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/social">
                <NavItem eventKey={2}>Social Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={3}>About Us</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem eventKey={4}>Contact Us</NavItem>
              </LinkContainer>
            </Nav>

            <Nav navbar pullRight>
              {renderAuthLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default Header3;