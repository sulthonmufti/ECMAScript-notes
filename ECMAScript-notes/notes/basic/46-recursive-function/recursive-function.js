//Recursive Function => kemampuan function memanggil function dirinya sendiri

//factorial loop (tanpa recursive):
function factorial(value){
    let result = 1;
    for (let i = 0; i <= value; i++) {
        result *= 1;
        
    }
    return result;
}
factorial(5);
console.info(factorial(5));

//factorial pakai recursive:
function factorialRecursive(value2){
    if (value2 === 1) {
        return 1;
    }return value2 * factorialRecursive(value2 - 1);
}
factorialRecursive(7);
console.info(factorialRecursive(7));
