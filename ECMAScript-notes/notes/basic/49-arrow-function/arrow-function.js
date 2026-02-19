//Arrow Function: alternatif membuat function yg lebih sederhana, tapi banyak limitasi.
//cara membuat pakai tanda =>
//kekurangan arrow function: (1) gabisa pake argument object, (2) gabisa pake function generator, (3) gabisa akses this (materi: function object), (3) gabisa akses super (materi: JS OOP)

const sayHello = (name) => {
    const say = `Hello ${name}`;
    console.info(say);
}
sayHello("Mufti");

//arrow function tanpa block{}
const hello = (firstName) => console.info(`Hello ${firstName}`);

//arrow function return value
//kalo pake block kita harus pake return,
const sum = (first, second) => {
    return first + second;
}
// kalau tanpa block ga perlu return
const sum2 = (firstNumber, secondNumber) => firstNumber + secondNumber;

//arrow function tanpa kurung parameter
const greeting = nama => console.info(`Hello ${nama}`);

//arrow function sebagai parameter
function giveMeName(callback){
    callback("Mufti");
}
giveMeName(name => console.info(`Hello ${name}`));