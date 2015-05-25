var fs = require('fs');
var db = require("odbc")()
var csvLib = require("csv");
var http = require("http")


//
//## odbc(path, callback)
// - **options**: specifies the file path
// - **callback**: the callback function

function odbc(options, callback){
  var cn = options.cn;
  var table = options.table;
  db.open(cn, function (err) {
      if (err) {
          return console.log(err);
      }

      db.query("select * from "+table, function(err, rows, moreResults){
          var data = rows;
          callback(data);
      })
   });

}

//
//## json(path, callback)
// - **options**: specifies the file path
// - **callback**: the callback function

function json(options, callback){
      //console.log("json")
      var path = options.path;
      //Read the file using filepath
      fs.readFile(path, 'utf8', function(err, d){
        if(err){
          console.log("Error: "+ err);
          return;
        }
        data = JSON.parse(d);
        
        //Send data back to app.js
        callback(data);
      });
}

//
//## csv(path, callback)
// - **options**: specifies the file path
// - **callback**: the callback function
function csv(options, callback){
      var path = options.path;
      fs.readFile(path, 'utf8', function(err,data){
        csvLib.parse(data, {ltrim: true, columns: true}, function(err, data){
          callback(data);
        })

      });
}

//## restJson(options, callback)
// - **options**: HTTP header options
// - **callback**: the callback function
function restJSON(options, callback){
    var options = options;
    //Make the HTTP GET request
    http.get(options, function(response){
        response.setEncoding("utf8")
        response.on('data',function(chunk){
            if(chunk){
                data += chunk;
            }
            console.log(chunk)
        });

        response.on('end', function(){
            callback(data);
        })
    });
}

//## restCsv(options, callback)
// - **options**: HTTP header options
// - **callback**: the callback function
function restCSV(options, callback){
      http.get(options, function(response){
        response.on('data', function(chunk){
          chunk = chunk.toString();
          if(chunk){
            data+=chunk;
          }
        });
        response.on('end', function(){
          
          callback(data);          
        })

      })
}

exports.json = json;
exports.csv = csv;
exports.restJSON = restJSON;
exports.restCSV = restCSV;
exports.odbc = odbc;