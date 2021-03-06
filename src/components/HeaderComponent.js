import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, NavItem,
  Form, FormGroup, Label, Input, Collapse, Jumbotron,
  Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {
    isNavOpen: false,
    isModalOpen: false
  }

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    alert(
      "Username: " + this.username.value +
      "\nPassword: " + this.password.value +
      "\nRemember: " + this.remember.checked);
  }

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
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Button outline onClick={this.toggleModal} color="default">
                    <i className="fa fa-sign-in fa-lg"></i> Login
                  </Button>
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
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  innerRef={input => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={input => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => this.remember = input} /> Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary" className="mt-3">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header;