'use strict';

const app = require('./app-data.js');
const user1 = require('./user1.js');
const user2 = require('./user2.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-up',
    data,
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  })
  .done(success)
  .fail(failure);
};

const signOutP1 = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: 'http://tic-tac-toe.wdibos.com/'+ 'sign-out/' + user1.user.id,
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const signOutP2 = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: 'http://tic-tac-toe.wdibos.com/' + 'sign-out/' + user2.user.id,
    headers: {
      Authorization: 'Token token=' + user2.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changePw2 = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: 'http://tic-tac-toe.wdibos.com/' + 'change-password/' + user2.user.id,
    data: {
      "passwords": {
        "old": data.password.old,
        "new": data.password.new
      },
    },
    headers: {
      Authorization: 'Token token=' + user2.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changePw1 = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: 'http://tic-tac-toe.wdibos.com/' + 'change-password/' + user1.user.id,
    data: {
      "passwords": {
        "old": data.password.old,
        "new": data.password.new
      },
    },
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getStuff = (success, failure, data) => {
  $.ajax({
    method: 'GET',
    url: 'http://tic-tac-toe.wdibos.com/' + 'games/',
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
  signOutP1,
  signOutP2,
  changePw1,
  changePw2,
  getStuff,
};
