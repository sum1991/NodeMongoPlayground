let mongoClient = require('mongodb').MongoClient
let format=require('util').format;
mongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
if(err)
{
    throw err;
}
else{
    var collection = db.collection('test_insert');
    collection.insert({a:2},function(err,docs){
        collection.count(function(err,count){
            console.log(format("count=%s",count))
        })
    });
    collection.find().toArray(function(err,results){
        console.dir(results);
        db.close();
    });
}

})