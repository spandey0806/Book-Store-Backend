const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

// Function to handle signup
async function signup(username, email, password) {
    console.log(username, email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    return userRepository.createUser(username, email, hashedPassword);
}

// Function to handle login
async function login(email, password) {
  console.log("Attempting login for email:", email);

  // Step 1: Find the user by email
  const user = await userRepository.findUserByUsername(email);
  if (!user) {
      console.log("User not found for email:", email);
      throw new Error('User not found');
  }

  // Step 2: Compare the provided password with the stored hash
  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log("Password validity:", isPasswordValid);

  // Step 3: Handle the result of the password comparison
  if (!isPasswordValid) {
      console.log("Password invalid for email:", email);
      throw new Error('Invalid password');
  }

  // Step 4: Generate a JWT token if the password is valid
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log("Login successful for email:", email, "Generating token...");

  // Return the token
  return token;
}

module.exports = { signup, login };