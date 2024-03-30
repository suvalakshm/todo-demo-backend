const router = require("express").Router();
const requestcontroller = require("../controller/request.controller.js");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

//----------------------requestcontroller------------------------
router.post("/createReq", requestcontroller.createRequest);


module.exports = router;
