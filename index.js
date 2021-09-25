const express = require('express');
const env = require('dotenv').config();
const app = express();

// Add support to parse json in the body
app.use(express.json());

let exampleRoute = require('./routes/route-example');
app.use(exampleRoute);

let usersRoutes = require('./routes/users');
app.use(usersRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})