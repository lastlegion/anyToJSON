var anyToJSON = require("../anyToJSON.js");
var assert = require("assert");
var server = require('../test/restServer.js');


describe("anyToJSON", function(){
    describe("csv file to json", function(){
        it("should convert csv to json", function(done){
            anyToJSON.csv({path: "test/100.csv"}, function(data){
                var output = [{"a":"4","b":"9","c":"2","d":"3"}];
                var anyToJSONdata = data;
                assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                done()
            });
        });
        it("should not break when there are commas in strings", function(done){
            anyToJSON.csv({path: "test/test.csv"}, function(data){
                var output = [{"Id":"1","UserName":"Sam, Smith"},
                                {"Id":"2","UserName":"Fred Frankly"},
                                {"Id":"1","UserName":"Zachary Zupers"}];
                anyToJSONdata = data;
                assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                done();
            })
        })
    });
    describe("loading json from a file", function(){
        it("should load json from a file", function(done){

            anyToJSON.json({path: "test/test.json"}, function(data){
                var output = [{"a":"4","b":"9","c":"2","d":"3"}];
                anyToJSONdata = data;
                assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                done()
            });  
        })
    });
    describe("loading json from rest", function(){
        it("should load json from rest", function(done){
            server.startServer(function(){
                anyToJSON.restJSON({
                    hostname: "localhost",
                    port: 3000,
                    path: "/json"},function(data){
                        var output = [{"a":"4","b":"9","c":"2","d":"3"}];
                        var anyToJSONdata = data;
                        assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                        done();
                })
            });
        })
    });
    describe("loading csv from rest", function(){
        it("should load csv from rest", function(done){
            server.startServer(function(){
                anyToJSON.restCSV({
                    hostname:"localhost",
                    port: 3000,
                    path: "/csv"}, function(data){
                        anyToJSONdata = data;
                        var output = [{"a":"4","b":"9","c":"2","d":"3"}]
                        assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                        done();
                
                })
            })
        })
    });
    describe("loading odbc", function(){
        it("should try to connect", function(done){
            anyToJSON.odbc({cn: "dsn=mysql;server=localhost;user=root;database=test;port=3306;password=123456;command timeout=30000;", table: "titanicClean"}, function(){
                done();
            })
        })
    })
});