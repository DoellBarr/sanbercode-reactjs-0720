var readBooksPromise = require('./promise.js');

var book = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000},
  {name: 'Komik', timeSpent: 1000}
]

function readBooks() {
	readBooksPromise(10000, book[0])
	.then (function(sisaWaktu){
		if (sisaWaktu !== 0) {
			readBooksPromise(sisaWaktu, book[1])
			.then (function (sisaWaktu) {
				if (sisaWaktu !== 0) {
					readBooksPromise(sisaWaktu, book[2])
					.then (function (sisaWaktu) {
						if (sisaWaktu !== 0) {
							readBooksPromise(sisaWaktu, book[3])
						}
					})
				}
			})
		}
	})
	.catch (function(sisaWaktu){
		console.log(sisaWaktu)
	})
}
readBooks();