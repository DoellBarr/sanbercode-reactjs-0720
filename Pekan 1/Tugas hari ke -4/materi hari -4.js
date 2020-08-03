//while loop1

var flag = 1;
while (flag < 10) {
  console.log('Iterasi ke-' + flag);
  flag++;
}

//while loop2
var deret = 5;
var jumlah = 0;
while (deret > 0) {
  jumlah += deret;
  deret--;
  console.log('Jumlah saat ini: ' + jumlah);
}

//for loop 1

for (var i = 0; i < 10; i++) {
  console.log('iterasi ke-' + i);
}

// for loop 2
var jumlah = 0;
for (var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah)

// for loop 3
for (var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan increment counter 2: ' + deret);
}

console.log('-----------------------------------------');

for (var deret = 15; deret >= 0; deret -= 3) {
  console.log('iterasi dengan decrement counter -3: ' + deret)
}

// infinite looping
var flag = 1;
while (flag < 10) {
  console.log('Iterasi ke- ' + flag);
  flag++;
}

//materi array
// push
// bisa lebih dari 1 nilai
// nambahin nilai di belakang
var numbers = [0, 1, 2]
numbers.push("#");
console.log(numbers)

// pop
// hapus nilai paling belakang
var numbers = [0, 1, 2,3,4,5];
numbers.pop();
console.log(numbers)

//unshift
// tambah nilai di depan
var numbers = [0,1,2,3]
numbers.unshift(-1)
console.log(numbers)

//shift
// hapus nilai paling belkakng
var numbers = [0,1,2,3]
numbers.shift()
console.log(numbers)

//sort
// ngurutin kata dari atas kebawah
  var animals = ["Kera","gajah","musang"]
  animals.sort()
  console.log(animals)

//slice
// ngambil irisan dari array (index pertama, index terakhir)
// atau kalo gada index terakhir, bakal ngambil nilai sesuai dengan indeks yang diberikan
var angka = [0,1,2,3]
var irisan1 = angka.slice(1,3)
console.log(irisan1)
var irisan2 = angka.slice(0,3)
console.log(irisan2)

//splice
// nambah/hapus nilai di array
/* format array.splice([indexMulai], [nilai yg dihapus],
[Nilai yg ditambah1], [Nilai yg ditambah 2], ... )*/

var fruits = ["banana", "orange", "grape"]
fruits.splice(0,0, "watermelon")
console.log(fruits)

//.split() dan .join()
// split buat pecahin string jadi array
// join ngubah array jadi string

var biodata ="name:john, doe"
var name = biodata.split(":")
console.log(name)

//join
var title = ["my", "first", "experience", "as", "programmer"]
var slug = title.join("-")
console.log(slug)
