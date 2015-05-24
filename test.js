var anyToJSON = require("./anyToJSON.js");

anyToJSON.csv({path: "100.csv"}, function(){
    console.log(anyToJSON.data  )
})   