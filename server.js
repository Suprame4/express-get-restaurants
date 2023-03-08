const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

const restaurantRouter = require('./routes/Restaurant_route')

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Express Routes
app.use('/restaurants', restaurantRouter)

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})