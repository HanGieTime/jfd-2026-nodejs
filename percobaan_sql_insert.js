const mysql = require('mysql2')

const database = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jfd_jan2026'
})
database.connect()

try{
  let sql =
  `INSERT INTO karyawan
  VALUES (null,'Si W','2005-5-5','L','plumpang',1,3)`
  ;
  database.query(sql, function (error, hasil) {
    if (error){
      throw error.message()
    }
    console.log(hasil)
    if (hasil.affectedRows > 0) {
      console.log('berhasil input data baru');
    }
  })
  database.end()
}catch (error){
  console.log(error)
}