const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "FcUT1RBR#0bWBZ3yZiqa_HUSED5zEtDheaCvppS7gDueSq3z-bYw",
  MONGODB: process.env.MONGODB || "mongodb://mongo:ghJxriODeIiINStnjRkEaYCvSYMXPksX@trolley.proxy.rlwy.net:34602",
  OWNER_NUM: process.env.OWNER_NUM || "94788345811",
};
