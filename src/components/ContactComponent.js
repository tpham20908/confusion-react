import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handerBlur = this.handerBlur.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.checked || e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Current state: " + JSON.stringify(this.state));
  }

  handerBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    })
  };

  validate = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: ""
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    if (this.state.touched.telnum && !/^\d{3}-\d{3}-\d{4}$/.test(telnum))
      errors.telnum = "Tel. number should contain only numbers and be in the form of 555-555-5555";

    if (this.state.touched.email && email.split("").filter(c => c === "@").length !== 1)
      errors.email = "Email should contain onnly one @ character";

    return errors;
  }

  render() {
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              6736 29E Avenue<br />
              Montreal, Quebec<br />
              H1T 3H6<br />
              <i className="fa fa-phone"></i>: +1 (514) 222-3456<br />
              <i className="fa fa-fax"></i>: +1 (514) 333-4567<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>First Name*</Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onBlur={this.handerBlur("firstname")}
                    value={this.state.firstname}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>Last Name*</Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handerBlur("lastname")}
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>Contact Tel.*</Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Ex: 555-555-5555"
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={this.handerBlur("telnum")}
                    value={this.state.telnum}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>Email*</Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handerBlur("email")}
                    value={this.state.email}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange} />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    value={this.state.message}
                    onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;