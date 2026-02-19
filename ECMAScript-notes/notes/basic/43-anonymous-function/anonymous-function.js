//anonymous function bisa dalam sebuah variable / bisa juga kita buat waktu mengisi parameter

let say = function(name){ //menyimpan function tanpa namanya dalam sebauh variable 
    console.info(`Hello ${name}`);
}
say("Mufti");

//anonymous function di parameter
function giveMeName(callback){
    callback("Mufti");
}
giveMeName(say);


giveMeName(function(name){
    document.writeln(`<p>Hi! ${name}</p>`);
})