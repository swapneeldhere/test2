var http=require('http');
var url=require('url');
var fs=require('fs');
var string =require('querystring');
module=require(./calculator)

processdata=function(req,res);
{
d=url.parse(req.url)
switch(d.pathname)
{
case "/":
res.writeHead(200,{'Content-Type':'text/html');
fs.readFile("form.html",function(error,data)
{if(error)
{
res.end("error");
}
else
{
res.end("data");
}
});
break;


case "/operation" :

data=query.parse(d.query);
res.writeHead(200,{'content-Type':'text/html');

switch(data.p)
{
  case 'Addition':
  res.end("Addition : " + molule.addition(data.num1,data.num2));
  break;
  
  case 'Substraction':
  res.end("Substraction : " + molule.substraction(data.num1,data.num2));
  break;
  
  case 'multiplication':
  res.end("multiplication : " + molule.multiplication(data.num1,data.num2));
  break;
}


}

}
http.createServer(processdata).listen(2000);
console.log("Server is Running at 2000");

