'use strict';

let username = '';
let password = '';

let userpassRandomizer = function () {
  const words = ['Test', 'User', 'Cy', 'Cypress', 'Dummy'];
  username = words[`${Math.floor(Math.random() * 5)}`];
  password = words[`${Math.floor(Math.random() * 5)}`];

  // The following for statements add random numbers to the username and password variables respectively

  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 9);
    username += num;
  }

  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 51);
    password += num;
  }
};

userpassRandomizer();