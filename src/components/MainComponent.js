import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () =>
      <Home
        // this.props.dishes is an object of 3 fields: isLoading, errMess, dishes
        dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        // this.props.promotions is an object of 3 fields: isLoading, errMess, promotions
        promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
        // this.props.leaders is an object of 3 fields: isLoading, errMess, leaders
        leader={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMess} />

    const DishWithId = ({ match }) =>
      <DishDetail
        dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
        commentsErrMess={this.props.comments.errMess} />

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          {/* <Route exact path="/contactus" component={Contact} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  { ...state }
);

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset("feedback")) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos())},
  fetchLeaders: () => { dispatch(fetchLeaders()) }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));