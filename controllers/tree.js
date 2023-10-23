const { Member } = require("../db/models");

const getTree = async (req, res) => {
  const allMembers = await Member.findAll();

  res.render("tree/index.ejs", { allMembers });
};

const getTable = async (req, res) => {
  const allMembers = await Member.findAll();

  res.render("tree/table.ejs", { allMembers });
};

module.exports = { getTree, getTable };
