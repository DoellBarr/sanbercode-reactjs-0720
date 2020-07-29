var readBooks = require('./callback.js')

var books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000}
]

readBooks(10000, books[0], function (sisaWaktu) {
  if (sisaWaktu !== 0){
    readBooks(sisaWaktu, books[1], function (sisaWaktu) {
      readBooks(sisaWaktu, books[2], function (sisaWaktu) {
      });
    })
  }
})