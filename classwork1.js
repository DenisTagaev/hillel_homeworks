let size = +prompt("Choose your coffee size");

switch(size){
    case 0:
        alert("You've choosen small size");
    break;
    case 1:
        alert("You've choosen middle size");
    break;
    case 2: 
        alert("You've choosen big coffee")

    default: {
        if (size == null){
            alert("You cancelled prog");
        }else {
            alert("No coffe for today")
        }
    }
}

