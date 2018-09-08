var CollectionService = require("./collectionService");

function CollectionDomain() { }

CollectionDomain.prototype.save = function (collection, callback) {
    var document = this;    
    CollectionService.save(collection, document.data, callback);
};

CollectionDomain.prototype.delete = function (collection, callback) {
    var document = this;
    CollectionService.delete(collection, { "_id": document._id }, callback);
};

CollectionDomain.list = function (collection, callback) {
    CollectionService.list(collection, callback);
};

CollectionDomain.find = function (collection, search, callback) {
    CollectionService.find(collection, search, callback);
};

CollectionDomain.findById = function (collection, id, callback) {
    CollectionService.findById(collection, id, callback);
};

module.exports = CollectionDomain;