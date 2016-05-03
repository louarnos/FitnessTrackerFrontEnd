'use strict';

const app = require('./app-data.js');
const user1 = require('./user1.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-up/',
    data,
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + user1.user.id,
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changePw = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + 'change-password/' + user1.user.id,
    data: {
      passwords: {
        old: data.password.old,
        new: data.password.new,
      },
    },
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createFood = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'foods/',
    data,
  })
  .done(success)
  .fail(failure);
};

const getAllMeals = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + 'meals/',
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getMealById = (success, failure, data) => {
  $.ajax({
    method:'GET',
    url: app.api + 'meals/' + data.id,
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createMeal = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'meals/',
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
    data: {
      meal: {
        meal_type: data.meal_type,
      },
    },
  })
  .done(success)
  .fail(failure);
};

const getFoodById = (success, failure, id) => {
  $.ajax({
    method:'GET',
    url: app.api + 'foods/' + id,
  })
  .done(success)
  .fail(failure);
};

const addFoodToMeal = (success, failure, meal_id, food_id) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'meal_items/',
    data: {
      meal_item: {
        food_for_meal_id: food_id,
        user_meal_id: meal_id,
      },
    },
  })
  .done(success)
  .fail(failure);
};

const deleteMeal = (success, failure, meal_id) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + 'meals/' + meal_id,
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changeMealName = (success, failure, meal_id, new_name) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + 'meals/' + meal_id,
    data: {
      meal: {
        meal_type: new_name
      },
    },
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePw,
  createFood,
  getAllMeals,
  getMealById,
  getFoodById,
  createMeal,
  addFoodToMeal,
  deleteMeal,
  changeMealName,
};
