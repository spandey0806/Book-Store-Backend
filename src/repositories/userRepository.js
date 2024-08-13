const { User } = require('../models');

class UserRepository {
  async createUser(username, email,password) {
    return User.create({ username, email, password });
  }

  async findUserByUsername(email) {
    return User.findOne({ where: { email } });
  }
}

module.exports = new UserRepository();