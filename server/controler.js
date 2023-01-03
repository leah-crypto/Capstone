
const quizArray = require("../db.json");
const drsArray = require("../dbDoctors.json");
const resourcesArray = require("../dbResources.json");


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
        drsArray.push(req.body)
        res.status(200).send(drsArray)
      },

      getResources: (req, res) => {
        console.log(resourcesArray);
        res.status(200).send(resourcesArray);
      }
          
}