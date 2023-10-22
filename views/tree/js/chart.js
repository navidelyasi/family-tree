//JavaScript
var chart = new FamilyTree(document.getElementById("tree"), {
  mouseScrool: FamilyTree.none,
  siblingSeparation: 120,
  template: "john",
  nodeBinding: {
    field_0: "name",
    field_1: "title",
    img_0: "img",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var treeElement = document.getElementById("tree");
  var allMembersData = JSON.parse(treeElement.getAttribute("m"));

  console.log(allMembersData);
  chart.load(allMembersData);
});
