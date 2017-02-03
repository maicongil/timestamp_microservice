var express = require("express")
    morgan = require("morgan"),
    app = express()
    port = 8080;

    app.use(morgan('combined'));

    app.listen(port, function(){
        console.log("Server is listening on port: "+ port);
    });