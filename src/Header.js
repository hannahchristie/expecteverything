import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
} from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render () {
    return (
      <div>
        <Navbar color="red lighten-1" dark className="fixed-top" expand="md">
          <NavbarBrand>
            <NavLink to="/" className="white-text">
                <FontAwesomeIcon icon={faHome}/>
            </NavLink>
          </NavbarBrand>

          <NavbarNav right>
            <NavItem>
              <NavLink to="/listen">Listen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/fight">Fight</NavLink>
            </NavItem>
          </NavbarNav>
        </Navbar>

        < MDBContainer fluid className='cyan darken-1'>
          <div className="header">
            <MDBRow>
              <MDBCol>
                <h1 className="h1-responsive white-text">#EXPECTEVERYTHING</h1>
                <h3 className="white-text" style={{fontVariant: 'small-caps'}}>Celebrating Difference</h3>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </div>);
  }
}

export default Header;