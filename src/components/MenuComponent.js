import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class Menu extends Component {
  state = {
    selectedDish: null
  }

  renderSelectedDish = dish => {
    if (dish) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return (
        <div>No dish selected</div>
      )
    }
  }

  handleSelectedDish = dish => this.setState({ selectedDish: dish });

  render() {
    const menu = this.props.dishes.map(dish => (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => this.handleSelectedDish(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderSelectedDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;