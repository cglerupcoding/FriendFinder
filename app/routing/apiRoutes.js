var match = require("../data/match.js");

module.exports = function(app) {

  app.get("/api/match", function(req, res) {
    res.json(match);
  });

  app.post("/api/match", function(req, res) {
    console.log(req.body.scores);

 
    var user = req.body;

 
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

   
    var partnerInCrimeIndex = 0;
    var minDifference = 40;


    for(var i = 0; i < match.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < match[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - match[i].scores[j]);
        totalDifference += difference;
      }

     
      if(totalDifference < minDifference) {
        partnerInCrimeIndex = i;
        minDifference = totalDifference;
      }
    }

    
    match.push(user);

    
    res.json(match[partnerInCrimeIndex]);
  });
};