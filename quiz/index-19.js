class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log("login");
  }
}

const user = new User("johndoe");

console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(Object.getPrototypeOf(user) === Object.getPrototypeOf(User)); // false
console.log(user.prototype === User.prototype); // false
console.log(Object.getPrototypeOf(user) === User.constructor); // false
