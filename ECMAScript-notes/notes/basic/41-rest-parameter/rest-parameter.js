//rest parameter => dimana kita bisa ngirim data sebanyak-banyaknya pada 1 parameter, dan secara otomatis akan dikonversi jadi array.
//syatat: (1) rest parameter cuman bisa 1 di function, (2) rest parameter ccuman boleh di posisi terakhir, kecuali memang cuma ada 1 parameter.
//note: di bahasa pemrograman lain juga disebut variable argument

function sum(name, ...data){
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

//sum(name, data)
sum('Orange', 2, 3, 4, 6, 7, 8);
sum('Apple', 5, 5, 6, 5);
sum('Banana', 9, 5, 2, 3, 4);

//SPREAD SYNTAX
//kalo kita sebelumnya punya data array, kita juga bisa mengirim data array ke rest parameter
//carannya pakai ... (titik tiga) diikuti array nya saat memanggil function

const array = [1, 2, 3, 4, 5];
sum('Strawberry', ...array);
//contoh lain
sum('Strawberry', ...[2, 2, 5, 7, 5]);