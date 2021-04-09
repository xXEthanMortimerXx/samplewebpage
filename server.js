// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Kanye West is my inspiration for this project"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/");
});
app.get("/aboutme", (request, response) => {
  response.sendFile(__dirname + "/views/aboutme.html");
});
app.get("/unitwork", (request, response) => {
  response.sendFile(__dirname + "/views/unitwork.html");
});
app.get("/projects", (request, response) => {
  response.sendFile(__dirname + "/views/projects.html");
});
app.get("/actuallyaboutme", (request, response) => {
  response.sendFile(__dirname + "/views/actuallyaboutme.html");
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
