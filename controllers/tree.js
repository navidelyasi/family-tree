const { Member } = require("../db/models");

const getTree = async (req, res) => {
  const allMembers = await Member.findAll();

  res.render("tree/index.ejs", { allMembers });
};

const getTreeEasy = async (req, res) => {
  const allMembers = await Member.findAll({
    attributes: ["id", "fid", "mid", "pids", "name", "gender"],
  });

  res.send(allMembers);
};

const getTable = async (req, res) => {
  // let newMember = {
  //   id: 30,
  //   pids: [29],
  //   name: "بلغیس",
  //   img: "images/woman.jpeg",
  //   gender: "female",
  // };
  // try {
  //   const result = await Member.create(newMember);
  //   res.send("Done");
  // } catch (e) {
  //   res.status(400).send(e.message);
  // }

  const allMembers = await Member.findAll();

  res.render("tree/table.ejs", { allMembers });
};

module.exports = { getTree, getTable, getTreeEasy };

/* 
extra data:
[

  {
    id: 19,
    fid: 11,
    mid: 8,
    name: "علی",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 20,
    pid: [17],
    name: "امیر",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 21,
    pids: [10],
    name: "سهیلا",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 22,
    pids: [9],
    name: "داریوش",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 23,
    fid: 22,
    mid: 9,
    name: "آرین",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 24,
    fid: 22,
    mid: 9,
    name: "نازلی",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 25,
    fid: 10,
    mid: 21,
    name: "دیبا",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 26,
    fid: 10,
    mid: 21,
    name: "داوین",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 27,
    fid: 20,
    mid: 17,
    name: "دنا",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 28,
    fid: 20,
    mid: 17,
    name: "بهار",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 29,
    fid: 1,
    mid: 2,
    name: "هادی",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 30,
    pids: [29],
    name: "بلغیس",
    img: "images/woman.jpeg",
    gender: "female",
  },
]


،،،،،،،،،،،

chart.load([
  { id: 1, pids: [2], name: "رضا", img: "images/man.jpeg", gender: "male" },
  {
    id: 2,
    pids: [1],
    name: "سارا",
    title: "",
    img: "images/woman.jpeg",
    gender: "female",
  },

  {
    id: 3,
    pids: [4],
    mid: 2,
    fid: 1,
    name: "مریم",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 4,
    pids: [3],
    name: "خسرو",
    title: "",
    img: "images/man.jpeg",
    gender: "male",
  },

  {
    id: 5,
    mid: 2,
    fid: 1,
    name: "امیر",
    img: "images/man.jpeg",
    gender: "male",
  },

  {
    id: 6,
    mid: 3,
    fid: 4,
    pids: [7, 8],
    name: "احسان",
    title: "",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 7,
    pids: [6],
    name: "نرگس",
    title: "",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 8,
    pids: [6],
    name: "نازنین",
    title: "",
    img: "images/woman.jpeg",
    gender: "female",
  },

  {
    id: 9,
    mid: 3,
    fid: 4,
    name: "درنا",
    title: "",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 10,
    mid: 3,
    fid: 4,
    name: "نوید",
    title: "",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 11,
    mid: 3,
    fid: 4,
    name: "مهرزاد",
    title: "",
    img: "images/man.jpeg",
    gender: "male",
  },

  {
    id: 12,
    fid: 6,
    mid: 7,
    pids: [14],
    name: "فرید",
    title: "",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 13,
    fid: 6,
    mid: 7,
    pids: [15],
    name: "کامران",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 14,
    pids: [12],
    name: "مینا",
    title: "",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 15,
    pids: [13],
    name: "سیمین",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 16,
    fid: 12,
    mid: 14,
    name: "امیر",
    img: "images/man.jpeg",
    gender: "male",
  },
  {
    id: 17,
    fid: 12,
    mid: 14,
    name: "نیکا",
    img: "images/woman.jpeg",
    gender: "female",
  },
  {
    id: 18,
    fid: 12,
    mid: 14,
    name: "امین",
    img: "images/man.jpeg",
    gender: "male",
  },
]);
*/
