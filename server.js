// ***** DEPENDENCIES *****
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// ***** SET UP EXPRESS APP *****
var app = express();
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// ---- Sets up the Express app to handle data parsing ----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ***** ROUTES *****
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// ***** START THE SERVER *****
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});