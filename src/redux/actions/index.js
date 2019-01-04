import * as ActionTypes from './types';
import { baseUrl } from '../../shared/baseUrl';

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
  let newComment = {
    dishId,
    rating,
    author,
    comment
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      let error = new Error(`${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }, error => {
      let errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log("Post comments ", error.message);
      alert("Your comment could not be posted.\nError: " + error.message);
    });
};

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(response => {
      if (response.ok) {
        return response;
      }
      let error = new Error(`${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }, error => {
      let errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = err => ({
  type: ActionTypes.DISHES_FAILED,
  payload: err + ""
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(response => {
      if (response.ok) {
        return response;
      }
      let error = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }, error => {
      let errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error)));
};

export const commentsFailed = err => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: err + ""
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const fetchPromos = () => dispatch => {
  return fetch(baseUrl + "promotions")
    .then(response => {
      if (response.ok) {
        return response;
      }
      let error = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }, error => {
      let errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = err => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: err + ""
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

export const fetchLeaders = () => dispatch => {
  return fetch(baseUrl + "leaders")
    .then(response => {
      if (response.ok) {
        return response;
      }
      let error = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }, error => {
      let errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = err => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: err + ""
});

export const addLeaders = leaders => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});