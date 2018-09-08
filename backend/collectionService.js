var MongoConnection = require('./mongoConnection');

function CollectionService() {};

CollectionService.save = function (collection, document, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        if (document._id !== null && document._id !== "") {
            //update
            if(document._id.length>10){
                document._id = MongoConnection.getObjectID(document._id);
            };
            db.collection(collection).updateOne({ "_id": document._id }, document, function (err, result) {
                callback(err, result);
                db.close();
            });
        } else {
            //create
            db.collection('registroAtual').find({"tabela":collection}).toArray(function(err, registroAtual){
                if(registroAtual[0].id){
                    document._id = registroAtual[0].id + 1;
                } else {
                    document._id = 1;
                };
                db.collection(collection).insertOne(document, function (err, result) {
                    if(err){
                        console.log(err);
                    } else {
                        registroAtual[0].id += 1;
                        db.collection('registroAtual').updateOne({"tabela":collection}, registroAtual[0], function (err, result) {
                            callback(err, result);
                            db.close();
                        });
                    };
                });
            });
        };
    });
};

CollectionService.list = function (collection, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection(collection).find({}).toArray(function (err, result) {
            callback(err, result);
            db.close();
        });
    });
};

CollectionService.delete = function (collection, document, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection(collection).deleteOne({ _id: document._id }, function (err, result) {
            callback(err, result);
            db.close();
        });
    });
};

CollectionService.find = function (collection, search, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection(collection).find(search).toArray(function (err, result) {
            callback(err, result);
            db.close();
        });
    });
};

CollectionService.findById = function (collection, id, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection(collection).find({ _id: id }).toArray(function (err, result) {
            callback(err, result);
            db.close();
        });
    });
};

module.exports = CollectionService;