//function bisa disimpan di variable
function sayHello(name){
    console.info(`Hello ${name}`);
}

let say = sayHello;
//panggil
sayHello("Mufti");
say("Sulthon");

//pakai parameter
function giveMeName(callback){
    callback("Mufti"); //jadi seakan akan manggil sayHello("Mufti");
}
giveMeName(sayHello);
giveMeName(say); //giveMeName(sayHello);