
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("591ca3578af9ec3df6e7b3ac")
  // }, {
  //   $set: {
  //     completed: true,
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("591ca3578af9ec3df6e7b3ac")
  // }, {
  //   $set: {
  //     name: "Andrew"
  //   },
  //   $inc: {
  //     age: 1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  //db.close();
});
