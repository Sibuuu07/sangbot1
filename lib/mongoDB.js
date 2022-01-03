
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Sibuna23:Sibuna@123@cluster0.88dxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
