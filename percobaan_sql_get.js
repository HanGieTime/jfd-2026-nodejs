// require punya 3 fungsi
// 1. memanggil modul/fitur bawaan node.js
// 2. memanggil modul/fitur dari npmjs
// 3. memanggil file lain

// peanggil modul mysql2 dari node_modules
const mysql = require('mysql2')

// cara menghubungkan dengan database
const database = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jfd_jan2026'
})
database.connect()

try{
  database.query('SELECT * FROM karyawan', function (error, hasil) {
    if (error){
      throw error.message()
    }
    let semuaNama = ''
    for (const i in hasil) {
      semuaNama += hasil[i].nama + '\n'
    }
    console.log(semuaNama)
  })
  database.end()
}catch (error){
console.log(error)
}