const mongoClient = require("mongodb").MongoClient;

const dbUrl = "mongodb://localhost:27017/moviesdb";

var client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err, dbInstance) =>{
    if(err){
        console.log("Error in connection ::", err);
    }
    else{
        var db = dbInstance.db("moviesdb");
    }
});