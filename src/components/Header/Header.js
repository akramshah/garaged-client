import React, { Fragment } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Header.scss'

const authenticatedOptions = (
  <Fragment >
    <Nav.Link href="#garage" style={{ color: '#f2eddc' }}>Garage</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment >
    <Nav.Link href="#home" style={{ color: '#f2eddc' }}>Home</Nav.Link>
    <Nav.Link href="#sign-up" style={{ color: '#f2eddc' }}>Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" style={{ color: '#f2eddc' }}>Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navigation" style={{ backgroundColor: '#bf213e' }} expand="md">
    <Navbar.Brand style={{ color: '#f2eddc', fontFamily: 'Kaufmann', fontSize: '30px' }}>
      Garaged
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" >
        { user &&
    <NavDropdown style={{ color: '#f2eddc' }} title={user.email} id="basic-nav-dropdown">
      <NavDropdown.Item href="#car/create">Add Car</NavDropdown.Item>
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
