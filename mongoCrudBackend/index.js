const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = 5000;
app.use(cors());
app.use(express.json());
//
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@atlascluster.ce5lyzr.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
    //
    const database = client.db("crudPractice");
    const collectionName = database.collection("products");
    //
    app.get("/", (req, res) => {
      res.send("this is defult route server data");
    });
    //
    app.post("/products", async (req, res) => {
      const data = req.body;
      const result = await collectionName.insertOne(data);
      res.send(result);
    });
    //
    app.get("/products/", async (req, res) => {
      const cursor = collectionName.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    //
    app.get("/products/:id", async (req, res) => {
      const paramsId = req.params;
      const query = { _id: new ObjectId(paramsId) };
      const singleProduct = await collectionName.findOne(query);
      res.send(singleProduct);
    });
    //
    app.delete("/products/:id", async (req, res) => {
      const paramsId = req.params;
      const query = { _id: new ObjectId(paramsId) };
      const singleProductDelete = await collectionName.deleteOne(query);
      res.send(singleProductDelete);
    });
    //
    app.put("/products/:id", async (req, res) => {
      const paramsId = req.params;
      const updateData = req.body;
      const filter = { _id: new ObjectId(paramsId) };
      const options = { upsert: true };
      const updateDoc = { $set: updateData };
      const result = await collectionName.updateOne(filter, updateDoc, options);
      res.send(result);
    });
    //
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
