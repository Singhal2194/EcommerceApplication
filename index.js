// importing modules
const express=require('express'),
      mongoose=require('mongoose'),
      bodyparser=require('body-parser'),
      cors=require('cors'),
      path=require('path'),
      app=express(),
      connection=require('./utils/connection'),
      customerRouter=require('./route/customerRouter'),
      orderRouter=require('./route/orderRouter'),
      productRouter=require('./route/productRouter');


connection.connectToDb(function (error) {
    if (error) {
        console.log({msg: "Error connecting to db", status: "CONNECTION_ERROR"});
    }});

/* 
    Add to avoid cross origin access.
    Access-Control-Allow-Origin is set to '*' so that server REST APIs are accessible for all the domains.
    By setting domain name to some value, the API access can be restricted to only the mentioned domain. 
    Eg, Access-Control-Allow-Origin: 'mywebsite.com'
*/
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});

app.use(cors());
// Set the port no
app.set("port", process.env.PORT || 3000);
// Body-parser (To parse the request body)
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/customers',customerRouter);
app.use('/orders',orderRouter);
app.use('/products',productRouter);
app.use((req,res,next)=>
{
    const error=new Error("Not Found");
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message}
        });
});

// Start the service
app.listen(app.get("port"),()=>{
    console.log("server started at port "+app.get("port")+ "@ " + new Date());
});
