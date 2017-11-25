//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db)=>{
  if(err){
    return console.log('Unable to connect');
  }

db.collection('Todos').find({
  _id: new ObjectID('5a1931ba92eda47330bd9085')
}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('Unable to fetch Todos', err);
})

db.collection('Todos').find().count().then((count)=>{
  console.log(`Todos count: ${count}`);
}, (err)=>{
  console.log('Unable to fetch Todos', err);
})

db.collection('Users').find({name: 'Ravi'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('Unable to find name', err);
});

 db.close();
});
