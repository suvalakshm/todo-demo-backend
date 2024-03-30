const db = require("../models");
const Request = db.request;
const Op = db.Sequelize.Op;

exports.createRequest = async (req, res) => {
    console.log(req.body);
        const tutorial = {
          title: req.body.title,
          description: req.body.description,
          published: req.body.published ? req.body.published : false
        };
        Request.create(tutorial)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
      };
  
