const bcrypt = require('bcrypt');
const db = require('../db/connection');

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await db.any("SELECT * FROM users"); // Promises
        res.json(users);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Get a user by id