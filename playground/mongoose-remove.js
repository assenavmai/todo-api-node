const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then(() => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bbc08a72c7879ea33b24fb5'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5bbc08a72c7879ea33b24fb5').then((todo) => {
  console.log(todo);
});
