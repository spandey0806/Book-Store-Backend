const { User } = require('../models');

// Function to create a user
async function createUser(username, email, password) {
    console.log("Creating user", { username, email, password });
    return User.create({ username, email, password });
}

// Function to find a user by email
async function findUserByUsername(email) {
    console.log("Finding user by email", email);
    return User.findOne({ where: { email } });
}

module.exports = { createUser, findUserByUsername };