//default nya, function tidak menghasilkan value apapun, tapi kita bisa buat function mengambalikan value

//function dengan parameter dan return value
function sayHello(firstName, middleName, lastName){

     //dari pada pake: document.writeln(`<p>Hello ${firstName} ${middleName} ${lastName}</p>`);
     //lebih baik kita tampung dulu di variable trus kita return
    const say = `Hello ${firstName} ${middleName} ${lastName}`;
    return say;
}

//panggil function dan menangkap return value nya
const result = sayHello("Muhammad", "Sulthon", "Mufti");
document.writeln(`<p>${result}</p>`);

//function return value lebih dari satu
function getFinalScore(value){
    if (value > 90) {
        return "A";
    }else if (value > 80) {
        return "B";
    }else if (value > 70) {
        return "C";
    }else if (value > 80) {
        return "D";
    }else{
        return "E";
    }
}
const finalValue = getFinalScore(90);
document.writeln(`<p>${finalValue}</p>`);

//Kita juga bisa menghentikan eksekusi dengan return
function isContains(array, searchValue){
    for (const element of array) {
        console.info(`iterasi element ${element}`);
        if(element === searchValue){
            return true;
        }
    }
    return false;
}
console.info(isContains([1,2,3,4,5,6,7,8,9,10],[5]));