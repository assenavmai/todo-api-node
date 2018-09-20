//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//es6 destructuring example
// var user = {name: 'vanessa', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   // ops stores all of the docs inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Vanessa',
  //   age: 22,
  //   location: 'Brampton'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  client.close();
});
