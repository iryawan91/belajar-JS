console.log('===Struktur IF==');
let usia = 18;
if (usia >= 18) {
  console.log('Kamu sudah dewasa.');
}

console.log('===Struktur ELSE==');
let umur = 12;

if (umur >= 13) {
  console.log('Boleh naik wahana ekstrem.');
} else {
  console.log('Maaf, belum cukup umur.');
}

console.log('===Struktur ELSE IF==');
let nilai = 75;

if (nilai >= 90) {
  console.log('Nilai A');
} else if (nilai >= 75) {
  console.log('Nilai B');
} else {
  console.log('Nilai C');
}

console.log('===Struktur SWITCH==');
let menu = 'sate';

switch (menu) {
  case 'sate':
    console.log('Harga: 20.000');
    break;
  case 'bakso':
    console.log('Harga: 15.000');
    break;
  case 'nasi goreng':
    console.log('Harga: 18.000');
    break;
  default:
    console.log('Menu tidak tersedia');
}

console.log('===Logika AND==');
let year = 20;
let punyaSIM = true;

if (year >= 17 && punyaSIM) {
  console.log('Kamu boleh mengemudi.');
}

console.log('===Logika OR===');
let hujan = false;
let bawaPayung = true;

if (hujan || bawaPayung) {
  console.log('Kamu aman dari kehujanan.');
} else {
  console.log('Kamu bisa kehujanan!');
}

console.log('===Logika NOT===');
let sudahLogin = false;

if (!sudahLogin) {
  console.log('Silakan login terlebih dahulu.');
} else {
  console.log('Selamat datang!');
}
