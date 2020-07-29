// Soal 1

const luas = (a) => console.log(`\nLuas lingkaran ini adalah ${Math.PI*a*a}\n`)
luas (5)

let keliling = (b) => console.log(`Keliling lingkaran ini adalah ${2*Math.PI*b}\n`);
keliling (8)

class Lingkaran {
  constructor(luas, keliling) {
    this.luas = luas;
    this.keliling = keliling;
  }

  luass(){
    console.log(`Versi Class:`)
    console.log(`Luas lingkaran ini adalah ${Math.PI*this.luas}\n`)
  }
  kelilings(){
    console.log(`Keliling lingkaran ini adalah ${2*Math.PI*this.keliling}\n`)
  }
}

const hasil = new Lingkaran(5, 10);
hasil.luass();
hasil.kelilings();
// Soal 2

let kalimat = (word1, word2, word3, word4, word5) => {
return `${word1} ${word2} ${word3} ${word4} ${word5}\n`
}
console.log(kalimat('saya', 'adalah', 'seorang', 'web', 'developer'));

// Soal 3
class Book {
  constructor(name, totalPage, price) {
    this.name = name
    this.totalPage = totalPage
    this.price = price
  }
  books(){
    console.log(`Book: ${this.name}`)
    console.log(`Total page: ${this.totalPage}`)
    console.log(`Price: ${this.price}\n`)
  }
}

class Komik extends Book {
  constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this.isColorful = true;
  }
  books(){
    console.log(`Book: ${this.name}`)
    console.log(`Total Page: ${this.totalPage}`)
    console.log(`Price: ${this.price}\n`)
  }
}

let buku = new Book("Fisika", 200, 20000)
buku.books();

let komik = new Komik("Detektif Konan", 50, 10000)
komik.books();
