/**
 * ALERT, PROMPT, AND COMFIRM
 * 
 * alert => ngasih peringatan berupa popup text di browser.
 * prompt => untuk minta input string dari user browser dalam bentuk popup input text.
 * comfirm => meminta input boolean dari user browser dalam bentuk popup input pilihan
 */

//alert
alert("Welcome to the page!");

//prompt
let inputName = prompt("Who are you?");
alert(`Hello ${inputName}`);

//confirm
const enter = confirm("Are you sure?");
if(enter){
    const name = prompt("Who are you?");
    alert(`you're ${name}`);
}else{
    alert("Bye bye!");
}