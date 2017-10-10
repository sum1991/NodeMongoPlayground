let mongoClient = require('mongodb').MongoClient
let format=require('util').format;
mongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
if(err)
{
    throw err;
}
else{
    console.log("connected")
}
db.close();
})