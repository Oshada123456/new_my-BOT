const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "FcUT1RBR#0bWBZ3yZiqa_HUSED5zEtDheaCvppS7gDueSq3z-bYw",
  MONGODB: process.env.MONGODB || "mongodb://mongo:aTYHnZOGMGtbjbWMYfliTKUMzhkNiVVZ@switchback.proxy.rlwy.net:16068",
  OWNER_NUM: process.env.OWNER_NUM || "94788345811",
};
