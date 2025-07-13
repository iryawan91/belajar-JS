function sapa() {
  console.log('Halo, dunia!');
}
sapa();

console.log('==============================================');

function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

let hasil = luasPersegiPanjang(5, 3);
console.log('Luas: ' + hasil); // Luas: 15

function periksa() {
  console.log('==============================================');
  console.log('Kamu sedang mengetik...');
}

function hitung() {
  console.log('==============================================');
  console.log('Tombol diklik!');
}

function hoverMasuk() {
  console.log('==============================================');
  console.log('Mouse masuk');
}
function hoverKeluar() {
  console.log('==============================================');
  console.log('Mouse keluar');
}

document.getElementById('output').innerText = 'Halo dunia!';
