'use strict';

export const userRandomizer = function () {
  const words = ['Test', 'User', 'Cy', 'Cypress', 'Dummy'];

  // Adding a randomly selected word from the words array with Math.floor to username and password variables respectively in each function
  let username = words[`${Math.floor(Math.random() * 5)}`];

  // The following for statements add random numbers to the username and password variables respectively for each function
  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 9);
    username += num;
  }
  return username;
};

export const passRandomizer = function () {
  const words = ['Test', 'User', 'Cy', 'Cypress', 'Dummy'];
  let password = words[`${Math.floor(Math.random() * 5)}`];

  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 51);
    password += num;
  }
  return password;
};
