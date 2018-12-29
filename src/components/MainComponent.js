import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null
  }

  onDishSelect = dishId => this.setState({ selectedDish: dishId });

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)} />
        <DishDetail
          dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;