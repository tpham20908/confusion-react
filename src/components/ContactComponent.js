import React from 'react';

const Contact = () => (
  <div className="container">
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
          <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
          <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
        </div>
      </div>
    </div>
  </div>
)

export default Contact;