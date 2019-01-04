import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { postComment } from '../redux/actions';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }
  }

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  handleSubmit = values => {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    const required = val => val && val.length;
    const maxLength = len => val => !val || val.length <= len;
    const minLength = len => val => val && val.length >= len;

    return (
      <div>
        <Button color="default" onClick={this.toggleModal}>
          <i className="fa fa-pencil"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm className="container" onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  defaultValue="1"
                  className="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }} />
                  <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required field",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                  }} />
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  className="form-control"
                  rows={6} />
              </Row>
              <Button type="submit" color="primary">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})

export default connect(null, mapDispatchToProps)(CommentForm);