let express = require('express');

let router = express.Router();

const controller = require('../controllers/user');

// Create users
// POST /users - body {"username", "fullName", "email", "password"}
router.post('/users', controller.createUser);

// Update user
// PUT /users/:id -body {"fullname", "email"}
// PUT /users/password/:id -body {"password"}


// Show users
// GET /users (don't return passwords)
router.get('/users', controller.listUsers);


// Delete user
// DELETE /users/:id


module.exports = router;