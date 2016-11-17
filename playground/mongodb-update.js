//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('582cb87d0eea329d9645ec79')
  // }, {
  //   $set : {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('582c22e6bd65be0f42092bee')
  }, {
    $set: {
      name: 'Scott'
    },
    $inc: {
      age: 1
    } 
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })



  // db.close();
});
