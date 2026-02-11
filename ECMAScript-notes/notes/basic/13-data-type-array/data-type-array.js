//array => type data berisikan kumpulan data.
//araay di JS sifatnya dinamis, jadi bisa bertambah dengan sendirinya say kita masukkan data ke dalam array
let arrayKosong =[];

let arrayNama = ["Muhammad", "Sulthon", "Mufti"];
document.writeln(arrayNama);

//menambah data array
const names = [];
names.push("Learning");
names.push("JavaScript", "Language");

console.table(names);

/**
 * OPERASI DI ARRAY
 * 
 * Operasi                  Keretangan
 * array.push(value)        Menambah data ke array
 * array.length             Untuk mendapatkan panjang array
 * array[index]             Mendapat data di posisi index
 * array[index] = value     Mengubah data di posisi index
 * delete array[index]      Menghapus data di posisi index, namun index tidak bergeser
 */
let data = [];
data = [123, 234];
console.table(data);

data[0] = 222;
console.table(data);

data.push(999);
console.table(data);

//menambahkan array di dalam array
data.push(["Muhammad", "Sulthon", "Mufti"]);
console.table(data);