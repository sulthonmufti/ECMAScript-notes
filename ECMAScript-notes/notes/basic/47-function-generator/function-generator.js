//function generator => function untuk membuat data generator.
//generator => data yang bisa diiterasi seperti array
//cara buat => pakai * (bintang) setelah kata function, untuk mengambalikan data ditiap iterasinya, bisa pakai "yield" diikuti datanya

//function generator sederhana
function* createName(){
    yield "Muhammad";
    yield "Sulthon";
    yield "Mufti";
}
console.info(createName()); //output: generator

const names = createName();
for(const name of names){
    console.info(name);
}


//function generator kompleks
function* buatGanjil(value){
    for (let i = 0; i <value; i++) {
        if (i % 2 === 1) {
            yield i; //akan mengenerate angka-angka ganjil dari 1 - 100
        }
    }
}
const angkaGanjil = buatGanjil(100);
for (const angka of angkaGanjil) {
    for (let angka = 0; angka < array.length; angka++) {
        console.info(angka);
    }
}

//LAZY EVALUATION
//generator ini sifatnya lazy => kalo data belum kita ambil dari generator, maka yield selanjutnya gaakan dieksekusi
const angkaGanjil2 = buatGanjil(100);
console.info(number.next().value);
console.info(number.next().value);
console.info(number.next().value); //cuman bakal mengeksekusi 3 data generator