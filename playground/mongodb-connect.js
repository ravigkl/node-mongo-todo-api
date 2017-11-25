//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db)=>{
  if(err){
    return console.log('Unable to connect');
  }
  console.log('Successfully connected');
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   },(err, result) =>{
//     if(err){
//       return console.log('Unable to insert in Todos');
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   }
// )
db.collection('Users').insertOne({
  name: 'Chris',
  age: '32',
  location:'Florida'
}, (err, result)=>{
  if(err){
    return console.log('Unable to insert into Users');
  }
  console.log(JSON.stringify(result.ops, undefined, 2));

  db.close();
});

});
