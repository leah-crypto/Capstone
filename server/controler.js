//require("dotenv").config();
// const sequlize = require("sequelize");
const quizArray = require("../db.json");
const drsArray = require("../dbDoctors.json");
const resourcesArray = require("../dbResources.json");

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

      getDoctorCards: (req, res) => {
        console.log(drsArray);
        res.status(200).send(drsArray);
      },

      postDoctors: (req, res) => {
        const post = req.body;
        res.status(200).send(post)
      },

      getResources: (req, res) => {
        console.log(resourcesArray);
        res.status(200).send(drsArray);
      }
          
}