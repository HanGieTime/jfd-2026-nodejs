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
  let sql =
  `SELECT karyawan.*, agama.agama, jabatan.nama as jabatan
  FROM karyawan LEFT JOIN agama
  ON agama.id = karyawan.agama_id
  LEFT JOIN jabatan
  ON jabatan.id = karyawan.jabatan_id`;
  database.query(sql, function (error, hasil) {
    if (error){
      throw error.message()
    }
    let semuaNama = ''
    for (const i in hasil) {
      semuaNama += hasil[i].nama + '\n'
    }
    console.log(hasil)
    // console.log(semuaNama)
  })
  database.end()
}catch (error){
console.log(error)
}