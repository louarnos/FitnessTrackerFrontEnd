'use strict';

const signInTemp = require('./templates/displaySignIn.handlebars');
const signUpTemp = require('./templates/displaySignUp.handlebars');
const addNewFoodTemp = require('./templates/displayCreateNewFood.handlebars');
const authApi = require('./auth/api.js');
const authUi = require('./auth/ui.js');
const currentMeal = require('./auth/current-meal.js');
const user1 = require('./auth/user1.js');

const addHandlers = () => {
  // Generates Templates for Main Content Div when Nav Buttons Are Pressed
  $('#btn-sign-in').on('click', function (event) {
    event.preventDefault();
    $('#add-new-food-to-database-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#sign-up-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#sign-in-div').removeClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#sign-in-div').html(signInTemp());
  });
  $('#btn-sign-up').on('click', function (event) {
    event.preventDefault();
    $('#add-new-food-to-database-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#sign-in-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#sign-up-div').removeClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#sign-up-div').html(signUpTemp());
  });
  $('#btn-sign-out').on('click', function (event) {
    event.preventDefault();
    $('#add-food-to-meal-div').addClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#sign-in-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#add-new-food-to-database-div').addClass('hidden');
    authApi.signOut(authUi.signOutSuccess, authUi.signOutFailure);
  });
  $('#btn-add-new-food-to-database').on('click', function (event) {
    event.preventDefault();
    $('#sign-in-div').addClass('hidden');
    $('#sign-up-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#add-new-food-to-database-div').removeClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#add-new-food-to-database-div').html(addNewFoodTemp());
  });
  $('#btn-get-previous-meals').on('click', function (event) {
    event.preventDefault();
    $('#sign-in-div').addClass('hidden');
    $('#sign-up-div').addClass('hidden');
    $('#add-new-food-to-database-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#get-previous-meals-div').removeClass('hidden');
  });
  $('#btn-create-new-meal').on('click', function (event) {
    event.preventDefault();
    $('#sign-in-div').addClass('hidden');
    $('#sign-up-div').addClass('hidden');
    $('#add-new-food-to-database-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#change-password-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#foods-for-create-meal-table > tbody').html('');
    $('#create-new-meal-div').removeClass('hidden');
  });
  $('#btn-change-pw').on('click', function (event) {
    event.preventDefault();
    $('#sign-in-div').addClass('hidden');
    $('#sign-up-div').addClass('hidden');
    $('#add-new-food-to-database-div').addClass('hidden');
    $('#get-previous-meals-div').addClass('hidden');
    $('#create-new-meal-div').addClass('hidden');
    $('#add-food-to-meal-div').addClass('hidden');
    $('#change-password-div').removeClass('hidden');
  });

  // Generates Content/makes ajax calls when content divs are pressed
  $('#sign-up-div').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields($(this).children('#sign-up-form')[0]);
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in-div').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields($(this).children('#sign-in-form')[0]);
    authApi.signIn(authUi.signInSuccess, authUi.signInFailure, data);
  });
  $('#change-password-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePw(authUi.changePw1Success, authUi.changePw1failure, data);
  });
  $('#add-new-food-to-database-div').on('submit', function (event) {
    event.preventDefault();
    let create = new Object();
    create.food = getFormFields($(this).children('#add-new-food-to-database-form')[0]);
    let data = create;
    console.log(data);
    authApi.createFood(authUi.createFoodSuccess, authUi.signInFailure, data);
  });
  $('#get-previous-meals-by-id-form').on('submit', function (event) {
    event.preventDefault();
    $('#foods-in-meal-table > tbody').html('');
    let data = getFormFields(this);
    console.log(data);
    if(user1.user){
      authApi.getMealById(authUi.getMealByIdSuccess, authUi.getMealByIdFailure, data);
    }else {
      $('#get-meal-by-id-failure-alert').removeClass('hidden');
      setTimeout(function () {
          $('#get-meal-by-id-failure-alert').addClass('hidden');
        }, 2000);
    }
  });

  $('#get-all-previous-meals-form').on('submit', function (event) {
    event.preventDefault();
    authApi.getAllMeals(authUi.getAllMealsSuccess, authUi.getAllMealsFailure);
  });
  $('#create-new-meal-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    if(user1.user){
      authApi.createMeal(authUi.createMealSuccess, authUi.createMealFailure, data);
    }else {
      $('#create-new-meal-failure-alert').removeClass('hidden');
      setTimeout(function () {
          $('#create-new-meal-failure-alert').addClass('hidden');
        }, 2000);
    }
  });
  $('#add-food-to-meal-form').on('submit', function (event) {
    event.preventDefault();
    let data = $(this).serializeArray();
    $('#foods-for-create-meal-table > tbody').html('');
    console.log(data);
    debugger;
    data.forEach(function (foodID) {
      if (foodID.value) {
        authApi.addFoodToMeal(authUi.addFoodToMealSuccess,
                              authUi.addFoodToMealFailure,
                              currentMeal.meal.id, foodID.value);
      }
    });
  });
  $('#delete-meal-form').on('submit', function (event) {
    event.preventDefault();
    authApi.deleteMeal(authUi.deleteMealSuccess,
                       authUi.deleteMealFailure,
                       currentMeal.meal.id);
  });
  $('#update-meal-name-form').on('submit', function (event) {
    event.preventDefault();
    let data = $(this).serializeArray();
    console.log(data[0].value);
    authApi.changeMealName(authUi.updateMealSuccess,
                       authUi.failure,
                       currentMeal.meal.id, data[0].value);
  });

  // $('h3').css('visibility', 'visible');
  //   setTimeout(function () {
  //     $('h3').css('visibility', 'hidden');
  //   }, 1000);
};

module.exports = {
  addHandlers,
};
