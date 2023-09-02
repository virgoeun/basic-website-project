const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.static("public"));
const hbs = require('hbs'); //only when partial is required

server.set('view engine', 'hbs')
server.set('views', __dirname+'/views')
server.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials');



server.get(
  "/about",
  (
    request,
    response,
    next //request first, then response
  ) => response.render("about")
);
server.get(
  "/works",
  (
    request,
    response,
    next //get(/...) is the "router" name!
  ) => response.render("works")
);
server.get("/home", (request, response, next) =>
  response.render("home-page")
);

server.listen(3000, () =>
  console.log("My first webpage listening on port 3000!")
);
