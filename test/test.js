var anyToJSON = require("../anyToJSON.js");
var assert = require("assert");


describe("anyToJSON", function(){
    describe("csv to json", function(){
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


});