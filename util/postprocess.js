//
// This fils is called (implicitly via npm) from `deploy.sh` and does one last pass over the
// generated `index.html`.
//
// TODO: Add something useful or remove this file

const fs = require("fs");

let content = fs.readFileSync("index.html").toString("utf8");

fs.writeFileSync("index.html", content)




