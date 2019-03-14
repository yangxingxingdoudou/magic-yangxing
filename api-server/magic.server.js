const path = require("path")
const express = require("express")
const app = express()
app.use(express.static(path.resolve(__dirname,"../")))
const taskData = require("./data/magicTaskData")


var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
  next();
};
app.use(allowCrossDomain);

//task返回的json
app.use("/api/task",(req,res)=>{
  res.json(taskData)
})


//car返回的json
app.use("/api/car",(req,res)=>{
  res.json(carData)
})



app.listen(1000,()=>{
  console.log("server is ready on port 1000")
})
