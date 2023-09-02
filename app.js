const express = require("express");
const server = express();
server.use(express.static("public"));

server.get(
  "/about",
  (
    request,
    response,
    next //request first, then response
  ) => response.sendFile(__dirname + "/views/about.html")
);
server.get(
  "/works",
  (
    request,
    response,
    next //get(/...) is the "router" name!
  ) => response.sendFile(__dirname + "/views/works.html")
);
server.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);

server.listen(3000, () =>
  console.log("My first webpage listening on port 3000!")
);
