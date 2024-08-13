const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class AuthService {
  async signup(username, email ,password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return userRepository.createUser(username,email , hashedPassword);
  }

  async login(email, password) {
    const user = await userRepository.findUserByUsername(email);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
}

module.exports = new AuthService();