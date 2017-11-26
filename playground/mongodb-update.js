//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db)=>{
  if(err){
    return console.log('Unable to connect');
  }
  //findOneAndUpdate
//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5a1931ba92eda47330bd9085')
//   },
// {
//   $set : {
//     completed: true
//   }
// },
// {
//   returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a1934932acd4d74a062542b')
},
{
  $set: {
    name: 'Rahi'
  }
},
  {
    $inc: {
      age: 1
    }
  },
  {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

 db.close();
});
