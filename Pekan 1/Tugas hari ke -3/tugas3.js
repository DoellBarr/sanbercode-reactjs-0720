/* soal 1
buatlah variable seperti dibawah ini
lalu gabungkan agar menghasilkan output
saya senang belajar javascript
*/
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript"

var upper = kataKeempat.toUpperCase();

console.log(kataPertama, kataKedua, kataKetiga, upper);

/* Soal 2
buatlah variable seperti dibawah ini
lalu ubah menjadi integer dan jumlahkan semua variable
dan tampilkan dalam output
*/
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var angkaPertama = parseInt(kataPertama);
var angkaKedua = parseInt(kataKedua);
var angkaKetiga = parseInt(kataKetiga);
var angkaKeempat = parseInt(kataKeempat);

console.log(angkaPertama + angkaKedua + angkaKetiga + angkaKeempat);

/* Soal 3
buatlah variable seperti dibawh ini lalu selesaikan
variable yang belum diisi dan hasilkan output seperti berikut
Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu
Kata Keempat: keren
Kata Kelima: sekali
*/

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substr(0, 3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25, 6);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

/* Soal 4
Pilih angka 0-100, lalu isi variable nilai dengan angka tersebut
lalu buat lah pengkondisian menggunakan if-elseif statement
dengan kondisi
nilai >= 80 indesknya A
nilai >= 70 dan nilai <80 indesknya B
nilai >= 60 dan nilai <70 indesknya C
nilai >= 50 dan nilai <60 indesknya D
nilai <50 indesknya E
*/

var nilai = 70;
if (nilai >= 80) {
  console.log("indesknya A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("indesknya B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("indesknya C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("indesknya D");
} else if (nilai < 50) {
  console.log("indesknya E");
}


/* Soal 5
Buatlah variable seperti dibawah ini,
ganti tanggal, bulan dan tahun sesuai
tanggal lahir anda dan buatlah switch case
pada bulan, lalu muncul kan string nya dengan
output (day, month, years)
*/

var tanggal = 24;
var bulan = 2;
var tahun = 2003;

switch (bulan) {
  case 1:
    var bulan = "Januari";
    break;
  case 2:
    var bulan = "Februari";
    break;
  case 3:
    var bulan = "Maret";
    break;
  case 4:
    var bulan = "April";
    break;
  case 5:
    var bulan = "Mei";
    break;
  case 6:
    var bulan = "Juni";
    break;
  case 7:
    var bulan = "Juli";
    break;
  case 8:
    var bulan = "Agustus";
    break;
  case 9:
    var bulan = "September";
    break;
  case 10:
    var bulan = "Oktober";
    break;
  case 11:
    var bulan = "November";
    break;
  case 12:
    var bulan = "Desember";
    break;
  default:
    var bulan = "Bukan nama bulan";
    break;
}

console.log(tanggal, bulan, tahun);
