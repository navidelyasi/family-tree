const FamilyTree = require("./FamilyTree");
const { Member } = require("../db/models");

const getTree = async (req, res) => {
  // var chart = new FamilyTree(document.getElementById("tree"), {
  //   mouseScrool: FamilyTree.none,
  //   siblingSeparation: 120,
  //   template: "john",
  //   nodeBinding: {
  //     field_0: "name",
  //     field_1: "title",
  //     img_0: "img",
  //   },
  // });
  // chart.load(familyTreeData);

  const allM = await Member.findAll();
  console.log("all members are", allM);

  res.render("tree/index.ejs");
};

module.exports = { getTree };
