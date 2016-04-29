'use strict';

const user1 = require('./user1.js');
const user2 = require('./user2.js');

const success = (data) => {
  console.log('YOU DID IT!!!!', data);
};

const signInSuccessP1 = (data) => {
  user1.user = data.user;
  console.log(user1);
};

const signInSuccessP2 = (data) => {
  user2.user = data.user;
  console.log(data);
};

const failure = (data) => {
  console.error(data);
};

const signOutSuccessP1 = () => {
  console.log(user1.user);
  user1.user = null;
  console.log('Signed Out!');
};

const signOutSuccessP2 = () => {
  user2.user = null;
  console.log('Signed Out!');
};

const changePw2Success = (data) => {
  console.log(user2.user);
};

const changePw1Success = (data) => {
  console.log(user1.user);
};

const changePw1Failure = (data) => {
  console.log(data);
};

const changePw2Failure = (data) => {
  console.log(data);
};

const getStuffSuccess = (data) => {
  $('.list-of-games').text(data.games.length);
  console.log(data);
};

const getStuffFailure = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccessP1,
  signOutSuccessP1,
  signInSuccessP2,
  signOutSuccessP2,
  changePw2Failure,
  changePw1Failure,
  changePw1Success,
  changePw2Success,
  getStuffFailure,
  getStuffSuccess,
};
