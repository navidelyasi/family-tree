const express = require("express");
const router = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../db/db-functions");
const { getTree } = require("../controllers/tree");

router.route("/").get(checkAuthenticated, getTree);

module.exports = router;
