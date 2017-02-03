var express = require("express")
    morgan = require("morgan"),
    path = require("path"),
    app = express(),
    port = 8080;

app.use(morgan('combined'));

// REFACTOR,create and add to a module or find a npm module 

    //month mapping
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    //return a date object based on param
    function getDate(param){
        var date;

        //if param is a number, it is a unitimestamp, else it is a natural date
        if(isNaN(param)){
            date = new Date(param);
        }else{
            //param * 1000 = seconds to miliseconds
            date = new Date(param * 1000);
        }

        //check if date is valid
        if(isNaN(date.getTime())){
            return null;
        }

        return date;
    }

    function getNatural(param){
        var date = getDate(param);
        if(date !== null){
            return month[date.getMonth()] + " " + date.getDate() + ", " +date.getFullYear();
        }
    };

    function getUnix(param){
        var date = getDate(param);
        if(date !== null){
            //miliseconds to seconds
            return date.getTime() / 1000;
        }
    };
//END REFACTOR


//home page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//api
app.get("/:date", function(req, res){
    var output ={ "unix": getUnix(req.params.date), "natural": getNatural(req.params.date) }; 
    res.send(output);
});

//404
app.get("*", function(req, res){
    res.status(404).send("Opsss... not found!")
});

app.listen(port, function(){
    console.log("Server is listening on port: "+ port);
});