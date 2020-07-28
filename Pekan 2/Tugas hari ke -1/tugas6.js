// Soal 1
var daftarPeserta = {
  Name: "Asep",
  Gender: "Laki-laki",
  Hobbies: "Baca buku",
  Born: 1992
}
console.log('Nama : ' + daftarPeserta.Name);
console.log("\n");

// Soal 2
var buah = [{
    nama: "Strawberry",
    warna: "merah",
    adaBijinya: "tidak",
    harga: 9000
  },
  {
    nama: 'Jeruk',
    warna: 'merah',
    adaBijinya: 'tidak',
    harga: 9000
  },
  {
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya: 'ada',
    harga: 10000
  },
  {
    nama: 'Pisang',
    warna: 'Kuning',
    adaBijinya: 'tidak',
    harga: 5000
  }
]

var namaBuah = buah.forEach(function(item) {
  console.log("Nama buah ini adalah : " + item.nama)
})
console.log("\n");

// Soal 3
function isiFilm(tambahFilm) {
  dataFilm.push(tambahFilm)
}

var dataFilm = []

var tambahFilm = {
  nama: "2012",
  durasi: "2 hours",
  genre: "drama",
  tahun: "2012"
}

isiFilm(tambahFilm)

console.log(dataFilm)
console.log("\n")

// Soal 4
// Release 0
class Animal {
  constructor(name) {
    this.legs = 4;
    this.cool_Blooded = false;
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value
  }
}
var sheep = new Animal("Shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cool_Blooded);
console.log("\n")

// Release 1
class Ape extends Animal {
  constructor(name, yell) {
    super(name);
    this.legs = 2;
  }
  yell() {
    return console.log("Auwooooo");
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong)


class Frog extends Animal {
  constructor(name, legs, cool_Blooded) {
    super(name, legs, cool_Blooded);
  }
  jump() {
    return console.log("hop hop");
  }
}

var kodok = new Frog("Buduk")
kodok.jump()
console.log(kodok)


// Soal 5
class Clock {
  constructor({
    template
  }) {
    var timer;
  function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }
    this.stop = function(){
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

var clock = new Clock({
  template: 'h:m:s'
})
clock.start();
