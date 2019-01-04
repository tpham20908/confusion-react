import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderDish = ({ dish }) => {
  if (!dish) {
    return (<div />);
  }
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

const RenderComment = ({ comments, dishId, commentsErrMess }) => {
  if (!comments) {
    return <div />
  }

  if (commentsErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{commentsErrMess}</h4>
        </div>
      </div>
    )
  }
  
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments:</h4>
      <ul className="list-unstyled">
        {
          comments.map(comment => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
          ))
        }
      </ul>
      <CommentForm dishId={dishId} />
    </div>
  )
};



const DishDetail = ({ dish, isLoading, errMess, comments, commentsErrMess }) => {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  } else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComment comments={comments} dishId={dish.id} commentsErrMess={commentsErrMess} />
      </div >
    </div>
  )
}

export default DishDetail;