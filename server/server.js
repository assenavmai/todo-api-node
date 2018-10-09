var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json()); // sending json to express app

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/{id}
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate id - using isValid
    // if not valid - 404 and stop execution. send back empty body
    if(!ObjectID.isValid(id))
    {
      res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
      if(!todo) {
        res.status(404).send();
      }
      res.send({todo});
    }).catch((e) => res.status(400).send());

  // findById
    //success
      // if todo - send it back
      // if no todo - send back 404 w/ empty body
    //error
      // send 400 - send empty body
});
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };
