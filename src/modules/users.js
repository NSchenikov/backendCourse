const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const filePath = path.join(__dirname, "../date/users.json");
  return fs.readFileSync(filePath);
};

module.exports = getUsers;
