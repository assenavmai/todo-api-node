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

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ba3549399b7e72d9dc8cbec')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5ba032e303f9180c48d49bf4')
    }, {
      $set: {name: 'Vanessa' },
      $inc: { age: 1 }
    }, { returnOriginal: false}).then((result) => {
      console.log(result);
    });
//  client.close();
});
