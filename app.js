if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const auths = require("./routes/auth");
const tree = require("./routes/tree");
const sequelizeDB = require("./db/db-init");
const { User, Member } = require("./db/models");
const initPassport = require("./passport-config");

// __________________________________________________________________
// ______________    GENERAL       init    __________________________
// __________________________________________________________________
initPassport(
  passport,
  async (email2) => await User.findOne({ where: { email: email2 } }),
  async (id) => await User.findByPk(id)
);

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// __________________________________________________________________
// ______________________________routes______________________________
// __________________________________________________________________
app.use("/", auths);
app.use("/tree", tree);

// __________________________________________________________________
// ______________________________listen______________________________
// __________________________________________________________________
const port = 3000;
const start = async () => {
  try {
    await sequelizeDB.authenticate();
    console.log("Connection has been established successfully.");
    // await Member.sync({ force: true });
    // console.log("The table for the User model was just (re)created!");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
    console.error("Unable to connect to the database:", error);
  }
};

start();
