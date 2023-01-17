const http=require("http");
const fs = require("fs");
var requests= require ("requests")
const homeFile=fs.readFileSync("index.html","utf-8");

const replaceVal=(tempVal,orgval)=>{
    console.log(orgval);
    
    let temprature=tempVal.replace("{%tempval%}",orgval.main.temp);
    
    temprature=temprature.replace("{%location%}",orgval.name);
    temprature=temprature.replace('{%country%}',orgval.sys.country);
    temprature=temprature.replace("{%min_temp%}",orgval.main.temp_min);
    temprature=temprature.replace("{%max_temp%} ",orgval.main.temp_max);
    // console.log(temprature);
    return temprature;
};
const server = http.createServer((req,res) => {
    if(req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=jabalpur&appid=8cafa8c363922238df06e8659bca1e2f")
        .on("data",(chunk)=>{
            const objdata=JSON.parse(chunk);
            const arrdata=[objdata];
            // console.log(arrdata);
            const realTimeData=arrdata.map((val)=>
                replaceVal(homeFile,val)).join("");
            
           
            // console.log(realTimeData);
             res.write(realTimeData);
        })
       

        .on("end",(err)=>{
            if(err) return console.log("connection close due to errors",err);
            res.end();
            
        });
    }
});
server.listen(8000,"127.0.0.1");