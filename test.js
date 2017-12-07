

document.tss.params1.value='0';goFunc('store');
goFunc('erase');
goFunc('destroyTable')


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

db.clientes.find().pretty()
/*{
    "_id" : ObjectId("5a2828c26ad9877fa8c09d56"),
    "firstName" : "Isaac",
    "lastName" : "Asimov"
}
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d57"),
    "firstName" : "Isaac",
    "lastName" : "Asimov"
}
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d58"),
    "firstName" : "Elena",
    "lastName" : "soraya",
    "gender" : "female"
}
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d59"),
    "firstName" : "Joe",
    "lastName" : "McMillan"
}*/

//https://youtu.be/Apbk83XL8L8?t=2368
db.clientes.update(
    {_id:ObjectId("5a282be86ad9877fa8c09d59")},
    {
        $set:{age:45}
    }
)
/*
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d59"),
    "firstName" : "Isaac",
    "lastName" : "Delahaye",
    "gender" : "male",
    // "age" : 45
}
*/

//https://youtu.be/Apbk83XL8L8?t=2446
db.clientes.update(
    {_id:ObjectId("5a282be86ad9877fa8c09d59")},
    {
        $inc: {age:5}
    }
)

/*
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d59"),
    "firstName" : "Isaac",
    "lastName" : "Delahaye",
    "gender" : "male",
    "age" : 50
}
*/

//https://youtu.be/Apbk83XL8L8?t=2642
db.clientes.update(
    {_id:ObjectId("5a282be86ad9877fa8c09d59")},
    {
        $unset:{age:1}
    }
)
/*
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d59"),
    "firstName" : "Isaac",
    "lastName" : "Delahaye",
    "gender" : "male"
}
*/

//https://youtu.be/Apbk83XL8L8?t=2712
db.clientes.update(
    {firstName:"Elena"},
    {
        firstName: "Elena",
        lastName: "Delahaye"
    },
    {
        upsert:true
    }
)

//https://youtu.be/Apbk83XL8L8?t=2815
db.clientes.update(
    {firstName:"Aaron"},
    {
        firstName: "Aaron",
        lastName: "Delahaye"
    },
    {
        upsert:true
    }
)
/*
WriteResult({
    "nMatched" : 0,
    "nUpserted" : 1,
    "nModified" : 0,
    "_id" : ObjectId("5a292b6b20d04ded1a6fb86c")
})
*/

//https://youtu.be/Apbk83XL8L8?t=2947
db.clientes.update(
    {firstName:"Aaron"},
    {
        $rename: {"firstName":"primerNombre"}
    }
)
/*
{
    "_id" : ObjectId("5a292b6b20d04ded1a6fb86c"),
    "lastName" : "Delahaye",
    "primerNombre" : "Aaron"
}
*/

//https://youtu.be/Apbk83XL8L8?t=3005
db.clientes.remove(
    {primerNombre:"Aaron"}
)
/*
WriteResult({ "nRemoved" : 1 })
*/

//https://youtu.be/Apbk83XL8L8?t=3129
db.clientes.remove(
    {firstName:"Isaac"},
    {justOne:true}
)
/*
WriteResult({ "nRemoved" : 1 })

{
    "_id" : ObjectId("5a282be86ad9877fa8c09d57"),
    "firstName" : "Joe",
    "lastName" : "McMillan"
}
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d58"),
    "firstName" : "Elena",
    "lastName" : "Delahaye"
}
{
    "_id" : ObjectId("5a282be86ad9877fa8c09d59"),
    "firstName" : "Isaac",
    "lastName" : "Delahaye",
    "gender" : "male"
}

*/

//https://youtu.be/Apbk83XL8L8?t=3245

db.clientes.find(
    {$or: [{firstName:"Isaac"},{firstName:"Joe"}]}
)
/*
{ "_id" : ObjectId("5a282be86ad9877fa8c09d57"), "firstName" : "Joe", "lastName" : "McMillan" }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d59"), "firstName" : "Isaac", "lastName" : "Delahaye", "gender" : "male" }
*/

db.clientes.insert(
    [
        {name:"Alejandro", age:20},
        {name:"Maria", age:30},
        {name:"Jose", age:81}
    ]
)
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

//https://youtu.be/Apbk83XL8L8?t=3523
db.clientes.find(
    {age:{$gt:30}}
)

db.clientes.find(
    {age:{$gt:10,$lt:50}}
)

//https://youtu.be/Apbk83XL8L8?t=3691
db.clientes.insert({firstName:"Zack",address:{city:"London"}})

db.clientes.find(
    {"address.city":"London"}
)

//https://youtu.be/Apbk83XL8L8?t=3900
db.clientes.find(
    {name:{$regex:"jandro"}}
)
/*
{ "_id" : ObjectId("5a2933442114521168d10680"), "name" : "Alejandro", "age" : 20 }
*/

//https://youtu.be/Apbk83XL8L8?t=3971
db.clientes.find().sort({lastName:1})
/*
{ "_id" : ObjectId("5a2933442114521168d10680"), "name" : "Alejandro", "age" : 20 }
{ "_id" : ObjectId("5a2933442114521168d10681"), "name" : "Maria", "age" : 30 }
{ "_id" : ObjectId("5a2933442114521168d10682"), "name" : "Jose", "age" : 81 }
{ "_id" : ObjectId("5a2936012114521168d10683"), "firstName" : "Zack", "address" : { "city" : "London" } }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d58"), "firstName" : "Elena", "lastName" : "Delahaye" }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d59"), "firstName" : "Isaac", "lastName" : "Delahaye", "gender" : "male" }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d57"), "firstName" : "Joe", "lastName" : "McMillan" }
*/

db.clientes.find().sort({lastName:-1})
/*
{ "_id" : ObjectId("5a282be86ad9877fa8c09d57"), "firstName" : "Joe", "lastName" : "McMillan" }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d58"), "firstName" : "Elena", "lastName" : "Delahaye" }
{ "_id" : ObjectId("5a282be86ad9877fa8c09d59"), "firstName" : "Isaac", "lastName" : "Delahaye", "gender" : "male" }
{ "_id" : ObjectId("5a2933442114521168d10680"), "name" : "Alejandro", "age" : 20 }
{ "_id" : ObjectId("5a2933442114521168d10681"), "name" : "Maria", "age" : 30 }
{ "_id" : ObjectId("5a2933442114521168d10682"), "name" : "Jose", "age" : 81 }
{ "_id" : ObjectId("5a2936012114521168d10683"), "firstName" : "Zack", "address" : { "city" : "London" } }
*/

db.clientes.find({age:{$gt:15}}).count()

//https://youtu.be/Apbk83XL8L8?t=4235
db.clientes.find().forEach(doc => print(doc.name))
/*
[unknown type]
[unknown type]
[unknown type]
Alejandro
Maria
Jose
[unknown type]
*/

