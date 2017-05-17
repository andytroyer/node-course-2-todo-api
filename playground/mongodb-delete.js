
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //delete One
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name: 'Jan'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("591c6796a977f234b4e370e9")
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  //db.close();
});
