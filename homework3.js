let a1 = prompt("Enter the first number/s 0-9"),
a2,
operator,
result;

function isNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value)
}
// Прописал без лишних выводов как ты просил, только если введены два числа будет результат операции
if(a1 === null || !a1){
    alert("No data");
} 
//Тут прервется выполнение если нет ввода
    else if(!isNumber(a1)){
        alert("forbidden symbols")
    }
    //Тут прервет выволнение если в первый промт введено не число
    else {
        a2 =prompt("Enter more number/s 0-9")
            if(a2 === null || !a2){
                alert("No data")
            } 
            //Тут прервется выполнение если нет ввода
            else if(!isNumber(a2)){
                alert("forbidden symbols")
            }
            //Тут прервет выволнение если во второй промт введено не число
            else{
                operator = prompt("Choose operator +, -, /, *");
                
                switch(operator){
                    case "+" :
                        result = +a1 + +a2;
                        alert(result);
                    break;
                    case "-" :
                        result = a1 - a2;
                        alert(result);
                    break;
                    case "/" :
                        result = a1 / a2;
                        alert(result);
                    break;
                    case "*" :
                        result = a1 * a2;
                        alert(result);
                    break;
                    default:
                        alert("Incorrect operation")
                }
            }
    }