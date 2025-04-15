const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Read the template index.html
const indexPath = path.join(__dirname, "..", "src", "index.html");
let indexContent = fs.readFileSync(indexPath, "utf8");

// Replace the environment variables
indexContent = indexContent.replace(
  /%GOOGLE_MAPS_API_KEY%/g,
  process.env.GOOGLE_MAPS_API_KEY || ""
);

// Write the processed index.html
fs.writeFileSync(indexPath, indexContent, "utf8");
