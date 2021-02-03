let a1 = prompt("Enter the argument"); 

let a2;

let operator;

let result;

while(a1 === null || a1 == "" || a1.replace(/\d/g, '').length || !isFinite(a1)){
    alert("No data or forbidden symbols");
    a1 = prompt("Enter the number/s 0-9");
}

console.log(a1);


a2 = prompt("Enter 2nd argument"); 


while(a2 === null || a2 == "" || a2.replace(/\d/g, '').length || !isFinite(a2)){
    alert("No data or forbidden symbols");
    a2 = prompt("Enter the number/s 0-9");
}
    
console.log(a2);


operator = prompt("Choose operator +, -, /, *");

if (operator != "+" || operator != "-" || operator != "/" || operator != "*" ){
    alert("Invalid operator");
    operator = prompt("Available operators: +, -, /, *")
}


console.log(operator);

switch(operator){
    case "+" :
        result = +a1 + +a2;
    break;
    case "-" :
        result = a1 - a2;
    break;
    case "/" :
        result = a1 / a2;
    break;
    case "*" :
        result = a1 * a2;
    break;
    default:
        alert("Incorrect operation")
        result=undefined;
        
}
alert(result);