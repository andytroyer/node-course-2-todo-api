const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//WAYS TO DELETE INCLUDE:

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findONeAndRemove()
//Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('591f0a678af9ec3df6e8813c').then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('591f0a678af9ec3df6e8813c').then((todo) => {
//   console.log(todo);
// })
