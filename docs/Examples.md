# TOC
   - [anyToJSON](#anytojson)
     - [csv file to json](#csv-file-to-json)
     - [loading json from a file](#loading-json-from-a-file)
     - [loading json from rest](#loading-json-from-rest)
     - [loading csv from rest](#loading-csv-from-rest)
 
# anyToJSON

## csv file to json
should convert csv to json.

```js
anyToJSON.csv({path: "test/100.csv"}, function(data){
    var output = [{"a":"4","b":"9","c":"2","d":"3"}];
    var anyToJSONdata = data;
    assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
    done()
});
```

should not break when there are commas in strings.

```js
anyToJSON.csv({path: "test/test.csv"}, function(data){
    var output = [{"Id":"1","UserName":"Sam, Smith"},
                    {"Id":"2","UserName":"Fred Frankly"},
                    {"Id":"1","UserName":"Zachary Zupers"}];
    anyToJSONdata = data;
    assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
    done();
})
```

## loading json from a file
should load json from a file.

```js
anyToJSON.json({path: "test/test.json"}, function(data){
                var output = [{"a":"4","b":"9","c":"2","d":"3"}];
                anyToJSONdata = data;
                assert.equal(JSON.stringify(anyToJSONdata), JSON.stringify(output));
                done()
            });
```

## loading json from rest
should load json from rest.

```js
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
```

## loading csv from rest
should load csv from rest.

```js
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
```

