'use strict';

let username = '';
let password = '';

let userpassRandomizer = function () {
  const words = ['Test', 'User', 'Cy', 'Cypress', 'Dummy'];
  username = words[`${Math.floor(Math.random() * 5)}`];
  password = words[`${Math.floor(Math.random() * 5)}`];
  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 9);
    username += num;
  }

  for (let x = 0; x < 4; x++) {
    let num = Math.floor(Math.random() * 51);
    password += num;
  }

  return username, password;
};

userpassRandomizer();

console.log(username);
console.log(password);
