//test.js
/*
son comandos de mongo
*/
//https://youtu.be/Apbk83XL8L8?t=910
db.createUser({
    user:"ioedu",
    pwd:"123",
    roles:["readWrite","dbAdmin"]
})
//Successfully added user: { "user" : "ioedu", "roles" : [ "readWrite", "dbAdmin" ] }

//https://youtu.be/Apbk83XL8L8?t=1003
db.clientes.insert({
    firstName:"Isaac",
    lastName:"Asimov"
})
//WriteResult({ "nInserted" : 1 }

db.clientes.find()
//{ "_id" : ObjectId("5a2828c26ad9877fa8c09d56"), "firstName" : "Isaac", "lastName" : "Asimov" }

//https://youtu.be/Apbk83XL8L8?t=1322
db.clientes.insert([
    {firstName:"Isaac",lastName:"Asimov"},
    {firstName:"Elena",lastName:"Soraya"},
    {firstName:"Joe",lastName:"McMillan"}
])

/*
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
*/

//https://youtu.be/Apbk83XL8L8?t=1707
db.clientes.update(
    {lasName:"soraya"},
    {firstName:"Elena",lastName:"soraya",gender:"female"}
)
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })