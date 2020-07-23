// Soal 1
// loop pertama
console.log("LOOPING PERTAMA")
var angka = 2;
while (angka <= 20) {
  console.log(angka + ' - I love coding' );
  angka+=2;
}

// loop kedua
console.log("LOOPING KEDUA")
var angka = 20;
while (angka > 0) {
  console.log(angka + ' - I will become a frontend developer')
  angka-=2;
}
console.log("\n");


// Soal 2
/* angka ganjil tampilkan santai
angka genap tampilkan berkualitas
angka kelipatan 3 dan ganjil tampilkan i love coding */

var a = "Santai"
var b = "Berkualitas"
var c = "I Love Coding"
for (var i = 1; i <= 20; i++) {
  if (i %3 == 0 && i %2 ==1) {
    console.log(i + '. ' + c)
  }  else if (i %2 == 0) {
    console.log(i + '. ' + b)
  } else if (i %1 == 0) {
    console.log(i + '. ' + a)
  }
}

console.log("\n");

// Soal 3
/* membuat segitiga dengan tanda pagar (#)
dimensi tinggi 7, alas 7, boleh menggunakan syntax apapun*/

var l = '';
for (var i = 1; i <=7 ; i++) {
  for (var j = 1; j<=i; j++) {
    l += '*';
  }
  l+= '\n';
}
console.log(l);

// Soal 4
/* merubah isi variable menjadi array */

var kalimat = "saya sangat senang belajar javascript"
var modif = kalimat.split(" ")

console.log(modif);
console.log("\n");

// Soal 5
// buatlah variabel, lalu urutkan dan tampilkan dalam format baris

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"]
var urut = daftarBuah.sort();
for (i in urut){
  console.log(urut[i]);
}
