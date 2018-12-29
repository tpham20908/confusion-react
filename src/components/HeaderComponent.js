import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {
    isNavOpen: false
  }

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" width="40" height="30" alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg"></i> Home
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg"></i> About Us
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <i className="fa fa-list fa-lg"></i> Menu
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg"></i> Contact Us
                </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the World's best cuisine, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary sense!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    )
  }
}

export default Header;