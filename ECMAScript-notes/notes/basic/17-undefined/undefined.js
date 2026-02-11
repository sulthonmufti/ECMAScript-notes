//undefined => merepresentasikan data yang belum di definisikan.
let person; //undefined
if (person === undefined) {
    alert("UNDEFINED");
}else{
    alert("DEFINED");
}

let array;
array = ["test"]; //defined
if (array[0] === undefined) {
    alert("UNDEFINED");

    console.info("ARRAY UNDEFINED");
}else{
    alert("DEFINED");
    document.writeln(array);

    console.info("ARRAY DEFINED");
    console.table(array)
}