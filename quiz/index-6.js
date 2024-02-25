function createUserManager() {
  let user = null;

  return function (name) {
    "use strict";
    user = { name, createdAt: Date.now() };
    return user;
  };
}

const createUser = createUserManager();
console.log(createUser("John Doe") === createUser("John Doe"));
