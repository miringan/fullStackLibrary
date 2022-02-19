const { User } = require("../models");

const userdata = [
  {
    user_name: "Din Djarin",
    password: "OberynMartell",
  },
  {
    user_name: "Ahsoka",
    password: "AnakinSux",
  },
  {
    user_name: "Luke Skywalker",
    password: "TheBestSkywalker",
  },
  {
    user_name: "Boba Fett",
    password: "Slave1",
  },
  {
    user_name: "Grogu",
    password: "YodaWho",
  },
  {
    user_name: "Fennec Shand",
    password: "CantTellImPartRobot",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
