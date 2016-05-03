'use strict';

const user1 = require('./user1.js');
const signUpSuccesss = require('../templates/displaySignUpSuccess.handlebars');
const signUpFailure = require('../templates/displaySignUpFailure.handlebars');
const signInSuccesssTemp = require('../templates/displaySignInSuccess.handlebars');
const signInFailureTemp = require('../templates/displaySignInFailure.handlebars');
const defaultTemp = require('../templates/displayDefaultContent.handlebars');
const createFoodSuccessTemp = require('../templates/addFoodToDatabaseSuccess.handlebars');
const currentMeal = require('./current-meal.js');
const displayFoods = require('../templates/displayFoods.handlebars');
const displayFoodsAgain = require('../templates/displayFoodsAgain.handlebars');
const authApi = require('./api.js');
const changePwSuccessTemp = require('../templates/displayPwChangeSuccess.handlebars');
const changePwFailureTemp = require('../templates/displayPwChangeFailure.handlebars');
const deleteMealSuccessTemp = require('../templates/displayDeleteFoodSuccess.handlebars');

const success = (data) => {
  console.log('YOU DID IT!!!!', data);
  $('#sign-up-div').html(signUpSuccesss());
};

const failure = (data) => {
  console.error(data);
  $('#sign-up-div').append(signUpFailure());
};

const signInSuccess = (data) => {
  user1.user = data.user;
  console.log(user1);
  $('#sign-in-div').html(signInSuccesssTemp());
  $('#btn-sign-out').removeClass('hidden');
  $('#btn-change-pw').removeClass('hidden');
  $('#btn-sign-up').addClass('hidden');
  $('#btn-sign-in').addClass('hidden');
};

const signInFailure  = (data) => {
  console.log(data);
  $('#sign-in-div').append(signInFailureTemp());
};

const signOutSuccess = () => {
  console.log(user1.user);
  user1.user = null;
  console.log('Signed Out!');
  $('#btn-sign-out').addClass('hidden');
  $('#btn-sign-in').removeClass('hidden');
  $('#sign-up-div').html(defaultTemp());
  $('#sign-up-div').removeClass('hidden');
  $('#sign-in-div').addClass('hidden');
  $('#btn-change-pw').addClass('hidden');
  $('#btn-sign-up').removeClass('hidden');
};

const signOutFailure = () => {
};

const createFoodSuccess = (data) => {
  console.log(data);
  $('#add-new-food-to-database-div').html(createFoodSuccessTemp());
};

const changePw1Success = (data) => {
  console.log('success');
  console.log(user1.user);
  console.log(data);
  $('#change-password-div').html(changePwSuccessTemp());
};

const changePw1Failure = (data) => {
  console.log(data);
  $('#change-password-div').html(changePwFailureTemp());
};

const getAllMealsSuccess = (data) => {
  console.log(data);
};

const getAllMealsFailure = (data) => {
  console.log(data);
};

const getMealByIdSuccess = (data) => {
  currentMeal.meal = data.meal;
  console.log(data);
  $('#foods-in-meal-table > caption').html('Meal name: ' +
    currentMeal.meal.meal_type + ' with ID: ' + currentMeal.meal.id +
    ' created on: ' + currentMeal.meal.created_at
  );
  //`Meal name: ${currentMeal.meal.meal_type} with ID ${currentMeal.meal.id}`
  data.meal.meal_items.forEach(function (value) {
    authApi.getFoodById(getFoodByIdSuccess, getFoodByIdFailure, value.id)
  });
  $('#delete-meal-form').removeClass('hidden');
  $('#update-meal-name-form').removeClass('hidden');
  console.log(currentMeal.meal);
  console.log(data.meal);
};

const getMealByIdFailure = (data) => {
  console.log(data);
};

const getFoodByIdSuccess = (food) => {
  $('#foods-in-meal-table').removeClass('hidden');
  $('#foods-in-meal-table > tbody').append(displayFoods({ food }));
  console.log(food);
};

const getFoodByIdFailure = (data) => {
  console.log(data);
};

const createMealSuccess = (data) => {
  $('#add-food-to-meal-div').removeClass('hidden');
  $('#create-new-meal-div').addClass('hidden');
  currentMeal.meal = data.meal;
  $('#foods-for-create-meal-table > caption').html(
    'Meal name: ' + currentMeal.meal.meal_type + ' with ID: ' +
    currentMeal.meal.id + ' created on: ' + currentMeal.meal.created_at
  );
  console.log(currentMeal.meal);
};

const addFoodToMealFailure = (data) => {
  console.log(data);
};

const addFoodToMealSuccess = (food) => {
  console.log(food);
  $('#foods-for-create-meal-table').removeClass('hidden');
  $('#foods-for-create-meal-table > tbody').append(displayFoodsAgain( {food} ));
};

const createMealFailure = (data) => {
};

const deleteMealSuccess = (data) => {
  console.log(data);
  console.log("success");
  $('#get-previous-meals-div').append(deleteMealSuccessTemp());
  $('#delete-meal-form').addClass('hidden');
};

const deleteMealFailure = (data) => {
  console.log(data);
  console.log("failure");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createFoodSuccess,
  changePw1Failure,
  changePw1Success,
  getAllMealsFailure,
  getAllMealsSuccess,
  getMealByIdSuccess,
  getMealByIdFailure,
  getFoodByIdSuccess,
  getFoodByIdFailure,
  createMealSuccess,
  createMealFailure,
  addFoodToMealSuccess,
  addFoodToMealFailure,
  deleteMealSuccess,
  deleteMealFailure,
};
