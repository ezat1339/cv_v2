function showsidebar() {
    var side = document.querySelector('.sidebar');
    side.style.display='flex';
   }
   function hidesidebar() {
    var side = document.querySelector('.sidebar');
    side.style.display = 'none';
   }
   
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
