import express from 'express';
import schema from './data/schema'
import GraphQLHTTP from 'express-graphql'
const MongoClient = require('mongodb').MongoClient;

let app = express();

app.use(express.static('public'));

const uri = "mongodb+srv://rgrjs:100100%24%24@cluster0-tmysf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;
client.connect(err => {
  if (err) throw err;
  db = client.db("Rgrjs_db");
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }))
  /*   db.collection("links").find({}).toArray((err, links) => {
      if (err) throw err;
      console.log(links)
    }) */
  app.listen(3000, () => console.log('Listenning'));
  //client.close();
});

app.get("/data/links", (req, res) => {
  db.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;
    res.json(links)
  })

})

