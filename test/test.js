var anyToJSON = require("../anyToJSON.js");
var assert = require("assert");


describe("anyToJSON", function(){
    describe("csv to json", function(){
        it("should convert csv to json", function(done){
            anyToJSON.csv({path: "100.csv"}, function(){
                console.log(anyToJSON.data);
                var output = [{"a":"4","b":"9","c":"2","d":"3"}]
                assert.equal(JSON.stringify(anyToJSON.data), JSON.stringify(output));
                done()
            });
        })
    })
})