// Membuat array
let namaSiswa = ['Ayu', 'Budi', 'Citra', 'Dani'];

// Menampilkan semua nama siswa
console.log('Daftar Siswa:');
for (let i = 0; i < namaSiswa.length; i++) {
  console.log(i + 1 + '. ' + namaSiswa[i]);
}

let siswa = [
  { nama: 'Ayu', umur: 16, kelas: '10A' },
  { nama: 'Budi', umur: 17, kelas: '11B' },
  { nama: 'Citra', umur: 15, kelas: '10C' },
];

// Menampilkan biodata semua siswa
siswa.forEach(function (data, index) {
  console.log(`Siswa ${index + 1}:`);
  console.log('Nama  :', data.nama);
  console.log('Umur  :', data.umur);
  console.log('Kelas :', data.kelas);
  console.log('----------------------');
});
