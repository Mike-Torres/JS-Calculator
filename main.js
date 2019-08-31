//--------------------------------------input to display---------------------------------------------------

inputValue = (num) => {
    var numberValue = document.getElementById('display');
    switch (num) {
        case 0:
            numberValue.value += "0";
            break;
        case 1:
            numberValue.value += "1";
            break;
        case 2:
            numberValue.value += "2";
            break;
        case 3:
            numberValue.value += "3";
            break;
        case 4:
            numberValue.value += "4";
            break;
        case 5:
            numberValue.value += "5";
            break;
        case 6:
            numberValue.value += "6";
            break;
        case 7:
            numberValue.value += "7";
            break;
        case 8:
            numberValue.value += "8";
            break;
        case 9:
            numberValue.value += "9";
            break;
    }
}

//--------------------------------------Operations---------------------------------------------------
inputOperand = (operand) => {
    var operation = document.getElementById('display');
    switch (operand) {
        case '+':
            operation.value += "+";
            break;
        case '-':
            operation.value += "-";
            break;
        case 'x':
            operation.value += "x";
            break;
        case '/':
            operation.value += "/";
            break;
        case '+/-':
            operation.value += "-" + operation.value;
            break;
    }
}
//--------------------------------------Non-Operands---------------------------------------------------
backSpace = () => {
    var backSpace = document.getElementById('display');
    var removeLast = backSpace.value;
    if (removeLast > 0) {
        removeLast = removeLast.substring(0, removeLast.length - 1);
        backSpace.value = removeLast;
    }
}
backSpace();

clear = () => {
    document.getElementById("clear").addEventListener("click", () => {
        document.getElementById('display').value = '';
    }, false);
}
clear();


var computationValue = document.getElementById("display").addEventListener("click", () => {
    result = Math.floor(eval(computationValue.value))
    console.log(computation)
    document.getElementById('display').value = '=' + result;
    console.log(computation)
}, false);