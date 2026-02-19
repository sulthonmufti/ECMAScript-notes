//scope => area akses sebuah data
//dibagi 2: (1) local scope (di dalam function), (2) global scope

//GLOBAL SCOPE
let counter = 0;

function hitMe(){
    //local scope function hitMe
    counter++;
}
hitMe();
hitMe(); // counter = 2


//LOCAL SCOPE
function first(){
    //local scope first
    let firstVariable = "First";
}
function second(){
    //local scope second
    let secondVariable = "Second";
}
first();
second();
console.info(firstVariable); //ERROR: soalnya firstVariable ada di dalem scope funtion first
console.info(secondVariable); //ERROR


//NESTED FUNCTION SCOPE
function firstNested(){
    let firstVariableNested = "First Nested";

    function secondNested(){
        console.info(firstVariableNested); //can access local scope first function
    }
    secondNested();
}
firstNested();