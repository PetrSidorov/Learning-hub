class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log("login");
  }
}

const user1 = new User("johndoe");
const user2 = new User("janedoe");
