import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const RenderDish = ({ dish }) => (
  <Card>
    <CardImg width="100%" src={dish.image} alt={dish.name} />
    <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </CardBody>
  </Card>
)

const RenderComment = ({ comments }) => comments.map(comment => (
  <li key={comment.id}>
    <p>{comment.comment}</p>
    <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(Date.parse(comment.date)))}</p>
  </li>
));

const DishDetail = ({ dish }) => {
  if (!dish) {
    return (<div />);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments:</h4>
          <ul className="list-unstyled">
            <RenderComment comments={dish.comments} />
          </ul>
        </div>
      </div >
    </div>
  )
}

export default DishDetail;