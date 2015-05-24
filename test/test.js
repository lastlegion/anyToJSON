var anyToJSON = require("../anyToJSON.js");
var assert = require("assert");
var server = require('../test/restServer.js');


describe("anyToJSON", function(){
    describe("csv file to json", function(){
        it("should convert csv to json", function(done){
            anyToJSON.csv({path: "test/100.csv"}, function(){
                var output = [{"a":"4","b":"9","c":"2","d":"3"}]
                assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
                done()
            });
        });
        it("should not break when there are commas in strings", function(done){
            anyToJSON.csv({path: "test/test.csv"}, function(){
                var output = [{"Id":"1","UserName":"Sam, Smith"},
                                {"Id":"2","UserName":"Fred Frankly"},
                                {"Id":"1","UserName":"Zachary Zupers"}];
                assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
                done();
            })
        })
    });
    describe("loading json from a file", function(){
        it("should load json from a file", function(done){

            anyToJSON.json({path: "test/test.json"}, function(){
                var output = [{"a":"4","b":"9","c":"2","d":"3"}];
                assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
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
                    path: "/json"},function(){
                        var output = [{"a":"4","b":"9","c":"2","d":"3"}];

                        assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
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
                    path: "/csv"}, function(){
                        var output = [{"a":"4","b":"9","c":"2","d":"3"}]
                        assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
                        done();
                
                })
            })
        })
    });

});