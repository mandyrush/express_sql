let db = require('../db/db');

let listUsers = (req, res) => {
    console.log('listUsers /users');
    res.json('Testing List Users');
}

let createUser = (req, res) => {
    console.log('createUsers /users');

    /**
     * 
     * username
     * email
     * fullname
     * password
     * 
     */

    let username = req.body.username;
    let email = req.body.email;
    let fullname = req.body.fullname;
    let password = req.body.password;

    let sql = "INSERT INTO amanda_users(username, email, fullname, password) values (?, ?, ?, ?)";

    let params = [];
    params.push(username);
    params.push(email);
    params.push(fullname);
    params.push(password);

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Insert user failed', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    })
}

module.exports = {
    listUsers,
    createUser
}