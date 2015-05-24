var restify = require("restify");
var fs = require("fs");
var http = require("http");

var server = restify.createServer();
server.get("/csv", respondCSV);
server.get("/json", respondJSON);

function respondCSV(req, res, next) {
    fs.readFile("test.csv", function(err, data){
        res.end(data);
    })
}
function respondJSON(req, res, next){
    fs.readFile("test.json", function(err, data){
        res.end(data);
    })
}

var startServer = function(callback){
    server.listen(3000, function(){
        callback();
    });   
};

startServer(function(){});
exports.startServer = startServer;      