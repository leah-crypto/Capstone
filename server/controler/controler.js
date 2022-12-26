//require("dotenv").config();
// const sequlize = require("sequelize");
const quizArray = require("../db.json");
// require("dotenv").config();

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
    // seed: (req, res) => {
    //     sequelize
    //     .query(

    //     )
    // },
    getQuestions: (req, res) => {
    
        res.status(200).send(quizArray);
      }
}