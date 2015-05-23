# anyToJSON

#### Loading CSV file to JSON

```
var anyToJSON = require("anyToJSON");

anyToJSON.csv({path: "100.csv"}, function(){
    console.log(anyToJSON.data  )
})
```

#### Support
* CSV flat file
* JSON flat file
* CSV REST API
* JSON REST API


#### Plans
* Support for XML
* ~~Support for Databases(RDBMS and NoSQL)~~(Added ODBC Suport)
* Documentation
* Support for Streaming data
* Tests