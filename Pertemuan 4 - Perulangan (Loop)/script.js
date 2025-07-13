console.log('================Perintah For Loop==============');
for (let i = 1; i <= 5; i++) {
  console.log('Angka ke-' + i);
}

console.log('================Perintah While Loop==============');
let a = 1;
while (a <= 5) {
  console.log('Loop ke-' + a);
  a++;
}

console.log('================Perintah Do....While Loop==============');
let j = 0;

do {
  console.log('Nilai j adalah: ' + j);
  j++;
} while (j < 5);

console.log('================Perintah Break==============');
for (let b = 1; b <= 10; b++) {
  if (b === 5) break;
  console.log(b);
}
// Hanya akan mencetak 1–4

console.log('================Perintah Continue==============');
for (let c = 1; c <= 5; c++) {
  if (c === 3) continue;
  console.log(c);
}
// Akan mencetak 1, 2, 4, 5

console.log('================Tampilkan angka 1 sampai 10==============');
for (let d = 1; d <= 10; d++) {
  console.log(d);
}

console.log('================Tampilkan angka genap 1 - 20==============');
for (let f = 1; f <= 20; f++) {
  if (f % 2 === 0) {
    console.log(f + ' adalah genap');
  }
}

console.log('================Tampilkan angka ganjil 1 - 20==============');
for (let g = 1; g <= 20; g++) {
  if (g % 2 !== 0) {
    console.log(g + ' adalah ganjil');
  }
}

console.log('================Hitung total belanja dari array==============');

let keranjang = [10000, 25000, 15000, 5000]; // daftar harga
let total = 0;

for (let h = 0; h < keranjang.length; h++) {
  total += keranjang[h]; // tambahkan ke total
}

console.log('Total belanja: Rp ' + total);
