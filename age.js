var http = require('http')
var port = process.env.PORT || 3000;
var url = require('url')


http.createServer((req, res)=>{
    var queryObject = url.parse(req.url, true).query;
    var dobYear = queryObject.year
    var dobMonth = queryObject.month
    var dobDay = queryObject.date
    var name = queryObject.name

    var date = new Date();
    var newDate = date.getDate()
    var newMonth = 1 + date.getMonth()
    var newYear = date.getFullYear()
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(dobDay > newDate){
        newDate = newDate + month[newMonth - 1];
        newMonth = newMonth - 1;
      }

      if(dobMonth > newMonth){
        newMonth = newMonth + 12;
        newYear = newYear - 1;
      }

      var totalYear = newYear - dobYear;

            // totalYear = newYear - dobYear

            res.write(`<h1> Hi ${name} </h1>
                <p>Your age year is <b> ${totalYear} </b></p>`)
            res.end()
    
}).listen(port, ()=>{
    console.log(`Server is listaning on ${port}...` )
})
