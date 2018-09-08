var mongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

function MongoConnection(){}

MongoConnection.prototype.url = function(){
     return "mongodb://Allan:@psa2018@psa-shard-00-00-4thek.mongodb.net:27017,psa-shard-00-01-4thek.mongodb.net:27017,psa-shard-00-02-4thek.mongodb.net:27017/test?ssl=true&replicaSet=PSA-shard-0&authSource=admin&retryWrites=true";
};

MongoConnection.prototype.open = function(callback){
    mongoClient.connect(this.url(),function(err, db){
        callback(err, db);
    });
};

MongoConnection.getObjectID = function(id){
    return new ObjectID(id);
};

module.exports = MongoConnection;