//null => data kosong/null
let firstName = null;

if(firstName === undefined){
    alert("This variable is undefined");
}else if(firstName == null){
    alert("this variable is null");
}else{
    alert(`Hello ${firstName}!`);
}