//Closure => kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope.

function createAdder(value){
    const owner = "Mufti";

    function add(param){
        console.info(owner);
        return value + param;
    }
    return add; //function add kita return kan sebagai value createAdder
}
const addTwo = createAdder(2);
const addTen = createAdder(10);