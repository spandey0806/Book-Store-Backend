const authService = require('../services/authService');

// Function to handle signup
async function signupHandler(req, res) {
    console.log("Signup Request:", req.body);
    
    // Basic validation
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { username, email, password } = req.body;
        await authService.signup(username, email, password);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Function to handle login
async function loginHandler(req, res) {
    console.log("Login Request:", req.body);

    // Basic validation
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.json({ message:"Logged in successfully" });
    } catch (error) {
        console.error(error);
        let statusCode = 401;
        if (error.message === 'Invalid credentials') {
            statusCode = 403; // Forbidden
        }
        res.status(statusCode).json({ error: error.message });
    }
}

module.exports = { signupHandler, loginHandler };