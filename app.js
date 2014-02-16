var express = require("express"),
    app     = express(),
    config  = {
	accountKey: "your-account-key",
	serverPort: 2500
    },
    cx      = require("concurix-monitor")({
       accountKey: config.accountKey
    });

// Start the Concurix client
cx.start();

// Sample catchall route for testing purposes
// Just returns a JSON "ok" response
app.get("/*", function (req, res) {
	res.send(JSON.stringify({
		"status": "ok"
	}));
});

// Start the Express.js server and listen on the port defined in the config object
app.listen(config.serverPort);
