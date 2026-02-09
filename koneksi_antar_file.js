const http = require('http')

let owner = 'kim jong un'
// 1.panggil dulu filenya
let profil = require('./data_karyawan/profil')
// 2. pastikan file di panggil sudah di export contoh profil.js

http.createServer((req, res) => {
  res.writeHead(200,{'Content-type': 'text/html'})
  if (req.url == '/'){
    res.write('Halaman Utama '+profil.nama+', tinggal di '+profil.tempatTinggal+'<br>')
    res.write(profil.certakProfil('Progamer'))
  }
  else if(req.url == '/about'){
    res.write('Tentang Kami')
  }
  else{
      res.write('<h1>not found</h1>')
  }
  res.end()
}).listen(3000,() =>{
  console.log('http://localhost:3000')
})
