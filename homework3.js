let a1 = prompt("Enter the first number/s 0-9"),

function isNumber(value) {
  return !isNaN(parseFloat (value) ) && isFinite(value);
}

if (a1 === null) {
    alert("You cancelled");
} 
else if (!isNumber (a1) ) {
    alert("Only numbers allowed!");    
} else {

    let a2 = prompt("Enter more number/s 0-9");
    
    if (a2 === null) {
       alert("You cancelled");
    } 
    else if (!isNumber (a2) ) {
        alert("Only numbers allowed!");
    } else {

        let operator = prompt("Choose operator +, -, /, *"); 
        let result;
        
        switch (operator) {
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
            alert("Incorrect operation");
        }
        alert(result);
    }
  }
