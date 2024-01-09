import express from 'express';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const app = express();
const port = 3000;
 
app.use(express.json());
const blogSchema = new Schema({
    name: String
  });
const Blog = mongoose.model("Blog",blogSchema)


app.get('/', (req, res) => {
  res.send(data)
})
app.get('/:id', (req, res) => {
    const {id}=req.params
    const result =data.find(x=> x.id === +id)
    console.log(id)
    res.send(result)
  })
app.post('/', async (req, res) => {
    const {name}= req.body
    const newBlog =new blogSchema({name})
    await newBlog.save();
    data.push({name:"saleh"})
    res.send("post finished")
})
app.put('/user', (req, res) => {
    res.send(data)
  })
app.delete('/user', (req, res) => {
    res.send(data)
  })

  mongoose.connect("mongodb+srv://mi829361s:1mz01mz0@salehsalayev.qok1tyl.mongodb.net/")
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})