const http = require('http')
const fs = require ('fs')

http.createServer((req, res) => {
  res.writeHead(200,{'Content-type': 'text/html'})
  if (req.url == '/'){
    fs.createReadStream('./view/halaman_utama.html').pipe(res)
  }
  else if(req.url == '/about'){
    fs.createReadStream('./view/about.html').pipe(res)
  }
  else{
      res.write('<h1>not found</h1>')
  }
}).listen(3000,() =>{
  console.log('http://localhost:3000')
})