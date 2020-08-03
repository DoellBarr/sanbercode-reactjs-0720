import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <h1> FORM PEMBELIAN BUAH</h1>
      </header>
      <form>
			<table>
				<tr>
					<th><label for="nama">Nama</label></th>
					<td><input type="text" id="nama"/></td>
				</tr>
        <tr>
          <th><label for = "buah">Daftar Buah</label></th>
          <td><input type = "checkbox" id= "buah" value = "0"/>Semangka</td><br />
          <td><input type = "checkbox" id= "buah" value = "1"/>Jeruk</td><br />
          <td><input type = "checkbox" id= "buah" value = "2"/>Nanas</td><br />
          <td><input type = "checkbox" id= "buah" value = "3"/>Salak</td><br />
          <td><input type = "checkbox" id= "buah" value = "4"/>Anggur</td><br />
        </tr>
      <tr>
        <td><input type="submit" value="kirim"/></td>
      </tr>
      </table>
    </form>
    </body>
  );
}

export default App;
