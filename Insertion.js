var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("ISIL");
    let user = { id: 1, name: "chaymae", password: "CA1234" };
    dbo.collection("user").insertOne(user, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

}); 