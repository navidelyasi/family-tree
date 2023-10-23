const express = require("express");
const router = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../db/db-functions");
const { getTree, getTable } = require("../controllers/tree");

router.route("/").get(checkAuthenticated, getTree);
router.route("/table").get(checkAuthenticated, getTable);

module.exports = router;
