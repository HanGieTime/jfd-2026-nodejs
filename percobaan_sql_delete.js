const mysql = require('mysql2')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jfd_jan2026'
})

database.connect()

try{
    let sql = 
   `DELETE FROM karyawan WHERE id = 6`
    ;
    database.query(sql, function(error, hasil) {
        if (error) {
            throw error.message()
        }
        console.log(hasil);
        if (hasil.affectedRows > 0) {
            console.log('berhasil hapus karyawan');
        }
    })
    database.end()
} catch (error) {
    console.log(error);
}