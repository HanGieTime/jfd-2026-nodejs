
const http  = require('http')
const URL   = require('url')
const qs    = require('querystring')
const mysql = require('mysql2')
const port  = 3000

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jfd_jan2026'
})

database.connect()


let server = http.createServer( function(request, respon) {

    try {
        // console.log(request.url)
        // console.log( URL.parse(request.url).query )
        // console.log( qs.parse(URL.parse(request.url).query).id )
        let queryStringID = qs.parse(URL.parse(request.url).query).id

        let sql = 
            `SELECT karyawan.*, agama.agama, jabatan.nama as jabatan
            FROM karyawan LEFT JOIN agama
            ON agama.id = karyawan.agama_id
            LEFT JOIN jabatan
            ON jabatan.id = karyawan.jabatan_id
            WHERE karyawan.id = ?
            `
        ;

        database.query(sql, [queryStringID], function(error, hasil) {
            let fullData = ''
            for (const i in hasil) {
                fullData += 
                `nama: ${hasil[i].nama} <br>
                alamat: ${hasil[i].alamat} <br>
                tanggal lahir: ${hasil[i].tanggal_lahir} <br>
                gender: ${hasil[i].jenis_kelamin} <br>
                agama: ${hasil[i].agama} <br><br>
                `
            }

            respon.writeHead(200, {'Content-Type' : 'text/html'})
            respon.write(
                `ini adalah id yang didapat dari url query string <hr>
                ${fullData}`
            )
            respon.end()

        })
        
    }
    catch (error) {
        console.log(error);
    }
})


server.listen(port, ()=>{
    console.log(`server sudah on, buka http://localhost:${port}`)
})
