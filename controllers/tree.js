const FamilyTree = require("./FamilyTree");
const { Member } = require("../db/models");

const getTree = async (req, res) => {
  const allMembers = await Member.findAll();

  res.render("tree/index.ejs", { allMembers });
};

module.exports = { getTree };
