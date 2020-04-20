const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

// To backup a database
cron.schedule("59 23 * * *", function() {
    console.log("---------------------");
    console.log("Running Cron Job");
    var d = new Date().toISOString().slice(0,10);
     // destination.txt will be created or overwritten by default.
    fs.copyFile('../inviteWeddingV2/data/invites.db', 'backup/invites'+d+'.db', (err) => {
      if (err)  {
          console.log("error copying invites.db")
          throw err;
      }
      console.log('backup of invites.db created');
    });
  });
  app.listen("3128");