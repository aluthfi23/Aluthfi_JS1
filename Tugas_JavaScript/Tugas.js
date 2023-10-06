// if, else, nested if
let nilai = 70;
if (nilai >= 70) {
    console.log("Nilai diatas KKM");
} else {
    console.log("Nilai dibawah KKM");
}


let seorang = true;
let umur = 20;
if (seorang) {
    if (umur >= 18) {
        console.log("Sudah remaja");
    } else {
        console.log("Masih anak-anak");
    }
} else {
    console.log("Tidak berumur");
}


// switch case
let hari = new Date().getDay();
let namaHari;

switch (hari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Tidak berhari";
}
console.log(`Hari ini adalah hari ${namaHari}`);


// for statement
for (let i = 1; i <= 3; i++) {
  console.log("Ujian Kelulusan hari ke " + i);
}


// while, do while
let i = 1;
while (i <= 30) {
  console.log("Puasa ke " + i);
  i++;
}

let j = 1;
do {
  console.log("Tarawih ke " + j);
  j++;
} while (j <= 30);


// function
function add(a, b) {
  return a + b;
}
let hitung = add(23, 6);
console.log(hitung);


function perkenalan(nama) {
  console.log("Hola, Saya " + nama + " yang tampan");
}
perkenalan("Aluthfi");
