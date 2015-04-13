var anyToJSON = require("./anyToJSON");

anyToJSON.csv({path: "100.csv"}, function(){
    console.log(anyToJSON.data  )
})   