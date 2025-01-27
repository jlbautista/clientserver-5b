const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/user');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});