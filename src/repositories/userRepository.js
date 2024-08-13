const { User } = require('../models');

class UserRepository {
  async createUser(username, password) {
    return User.create({ username, password });
  }

  async findUserByUsername(username) {
    return User.findOne({ where: { username } });
  }
}

module.exports = new UserRepository();