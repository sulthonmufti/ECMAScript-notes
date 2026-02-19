//nested function = function dalam function

function outer(){
    function inner(){
        console.info("Inner");
    }
    inner();
    inner();
}
outer();
// inner(); //ERROR