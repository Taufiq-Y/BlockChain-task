const express = require("express");
const router = express.Router();
const {getPrivateData} = require('../controllers/private');
const {protect} = require("../middleware/authen")

router.route("/").get(getPrivateData);

module.exports = router;