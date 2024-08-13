const authService = require('../services/authService');

class AuthController {
  async signup(req, res) {
    try {
      const { username,email, password } = req.body;
      await authService.signup(username,email, password);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();