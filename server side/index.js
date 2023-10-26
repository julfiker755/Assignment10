const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

// middleware area
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))


// Mongobduser1 //Kl74udw05IqbZfKT
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.3ksqccu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});
async function run() {
  try {
    const brand =client.db("Electronics").collection("brand");
    const allbrand =client.db("Electronics").collection("allbrand");
    const addcart=client.db("Electronics").collection("addcart");
 
    //  brand get data
   app.get('/brand',async(req,res)=>{
    const query={}
    const result=await brand.find(query).toArray()
    res.send(result)
   })
    // all brand get data
    app.get('/allbrand',async(req,res)=>{
      const query={}
      const result=await allbrand.find(query).toArray()
      res.send(result)
    })

   // brand post data
  app.post('/allbrand',async(req,res)=>{
    const data=req.body
    console.log(data)
    const result = await allbrand.insertOne(data);
    res.send(result)
   })
  //! mycart Eletronic get
  app.get('/addcart',async(req,res)=>{
    const query={}
    const result=await addcart.find(query).toArray()
    res.send(result)
  })
  //! mycart Eletronic post
  app.post('/addcart',async(req,res)=>{
    const data=req.body
    const query={_id:data._id}
    const existingcart=await addcart.findOne(query)
    if(existingcart){
      res.send({message:'Already added,🤢sorry🤢'})
    }else{
      const result = await addcart.insertOne(data);
      if(result.insertedId !== undefined){
        res.send({
          success:true,
          message:'Product added Successfully'
        })
      }else{
        res.send({
          success:false,
          message:'Product not Successfully'
        })
      }
    }
   })
    //! mycart Eletronic delete
   app.delete("/addcartt/:id", async (req, res) => {
    const id = req.params.id
    const query = {_id:id}
    const result = await addcart.deleteOne(query)
    res.send(result)
  })
 
  //  brand update data
   app.put('/allbrand/:id',async(req,res)=>{
    const id=req.params.id;
    const updateuser=req.body
    console.log(updateuser)
    const filter={_id:new ObjectId(id)}
    const options={upsert:true}
    const updatedoc={
     $set:{
       name:updateuser.name,
       brand:updateuser.brand,
       image:updateuser.image,
       type:updateuser.type,
       price:updateuser.price,
       description:updateuser.description,
       rating:updateuser.rating,
     }
    }
    const result=await allbrand.updateOne(filter,updatedoc,options)
    res.send(result)
   })
    // brand single data
   app.get('/allbrand/:id',async(req,res)=>{
   const id=req.params.id
   const query={_id:new ObjectId(id)}
   const result = await allbrand.findOne(query)
   res.send(result)
 })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// how to get data
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server start ${port}`)
})