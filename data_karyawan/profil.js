let nama = 'Si A'
let alamat = 'Jaksel'
function biodata(profesi) {
  return `Nama : ${nama},\n Alamat : ${alamat},\n Pekerjaan : ${profesi}`
}
module.exports = {
  nama,
  tempatTinggal: alamat,
  certakProfil: biodata
}