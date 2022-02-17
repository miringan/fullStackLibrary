const sequelize = require("../config/connections");
const seedBook = require("./bookData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  await seedUser();

  process.exit(0);
};

seedAll();
