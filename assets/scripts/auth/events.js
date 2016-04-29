'use strict';

const authApi = require('./api.js');
const authUi = require('./ui.js');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in-p1').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccessP1, authUi.failure, data);
    $('.sign-in-p1').css('display', 'none');
    $('.sign-out-p1, .change-pw-1').css('display', 'block');
  });
  $('#sign-in-p2').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccessP2, authUi.failure, data);
    $('.sign-in-p2').css('display', 'none');
    $('.sign-out-p2, .change-pw-2').css('display', 'block');
  });
  $('#sign-out-p1').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signOutP1(authUi.signOutSuccessP1, authUi.failure, data);
    $('.sign-in-p1').css('display', 'block');
    $('.sign-out-p1, .change-pw-1').css('display', 'none');
  });
  $('#sign-out-p2').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signOutP2(authUi.signOutSuccessP2, authUi.failure, data);
    $('.sign-in-p2').css('display', 'block');
    $('.sign-out-p2, .change-pw-2').css('display', 'none');
  });
  $('#change-pw-1').on('submit', function (event) {
    let data = getFormFields(this);
    console.log(data.password.old, data.password.new);
    event.preventDefault();
    authApi.changePw1(authUi.changePw1Success, authUi.changePw1Failure, data);
  });
  $('#change-pw-2').on('submit', function (event) {
    let data = getFormFields(this);
    console.log(data.password.old, data.password.new);
    event.preventDefault();
    authApi.changePw2(authUi.changePw2Success, authUi.changePw2Failure, data);
  });
  $('#get-user-games').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.getStuff(authUi.getStuffSuccess, authUi.getStuffFailure, data);
  });
};

module.exports = {
  addHandlers,
};
