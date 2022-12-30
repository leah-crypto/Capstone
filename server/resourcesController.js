const resourcesArray = require("../db.json");

module.exports = {
    getResources: (req, res) =>{
        res.status(200).send(resourcesArray);
    }
}