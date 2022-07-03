var http = require('http');
var port = process.env.PORT || 3001;
var url = require('url');

http.createServer((req, res)=>{
    var queryObject = url.parse(req.url, true).query;
    var volume;
    var radius = queryObject.radius
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(2);
    
    console.log(radius)

    res.write(`volume of sphere is ${volume}`)
    res.end()
}).listen(port, ()=>{
    console.log(`Server is listaning in port ${port}...`)
})