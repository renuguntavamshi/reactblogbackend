const express=require('express');
const app=express();
const port =3015;
const cors=require('cors');
const fs=require('fs');
app.use(express.json());
const getdata=JSON.parse(fs.readFileSync('data.json'));
const blogdata=JSON.parse(fs.readFileSync('blogdata.json'));
const {home,hollywood,bollywood,technology,food,fitness}=blogdata;
console.log(getdata)
// app.use(cors());
app.use(cors({
    origin:'*'
}))

const middleware1=(req,res,next)=>{
    console.log(req.url);
    console.log("This is middleware1 service");
next();
}
app.get("/data",(req,res)=>{
    res.send("We are able to fetch data")
})
app.get("/data2",(req,res)=>{
    res.send(getdata)
})
app.get("/data3",(req,res)=>{
    res.send([{"obj":1},{"obj":2},{"obj":3},{"obj":4}])
})
app.get("/home",(req,res)=>{
    res.send(home)
})
app.get("/hollywood",(req,res)=>{
    res.send(hollywood)
})
app.get("/bollywood",(req,res)=>{
    res.send(bollywood)
})
app.get("/technology",(req,res)=>{
    res.send(technology)
})
app.get("/food",(req,res)=>{
    res.send(food)
})
app.get("/fitness",(req,res)=>{
    res.send(fitness)
})
app.listen(port,()=>{
    console.log(`app is listening on${port} `)
})