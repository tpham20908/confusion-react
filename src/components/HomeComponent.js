import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RenderCard = ({ item }) => (
  <Card>
    <CardImg src={item.image} alt={item.name} />
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      <CardSubtitle>{item.designation || null}</CardSubtitle>
      <CardText>{item.description}</CardText>
    </CardBody>
  </Card>
)

const Home = ({ dish, promotion, leader }) => (
  <div className="container">
    <div className="row align-items-start">
      <div className="col-12 col-md m-1">
        <RenderCard item={dish} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={promotion} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={leader} />
      </div>
    </div>
  </div>
)

export default Home;