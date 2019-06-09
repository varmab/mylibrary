var express=require("express");
var app=express();

var books=[
    {
        id:1,
        title:'Node Fundamentals',
        published:14657774,
        instock:false
    },
    {
        id:2,
        title:'HTML Fundamentals',
        published:14657774,
        instock:false
    },
    {
        id:3,
        title:'JS Fundamentals',
        published:14657774,
        instock:true
    }
];

app.get("/",(req,res)=>{
    console.log("api server")
})

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

app.get("/api/books",(req,res)=>{
    res.send(books);
})

app.listen(5000,()=>{
    console.log("Server started")
})
