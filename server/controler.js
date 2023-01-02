//require("dotenv").config();
// const sequlize = require("sequelize");
const quizArray = require("../db.json");


// const { CONNECTION_URI } = process.env;
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(CONNECTION_URI, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// });


// let newQuizArray = [];

module.exports = {
  
    getQuestions: (req, res) => {
      console.log(quizArray);
        res.status(200).send(quizArray);
      },

          
}