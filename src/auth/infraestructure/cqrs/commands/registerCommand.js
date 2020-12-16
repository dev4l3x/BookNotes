
module.exports = class RegisterCommand {
  constructor(username, password, email, name, lastname) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
  }
};
