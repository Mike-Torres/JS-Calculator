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
        case "x":
            operation.value += "*";
            break;
        case '/':
            operation.value += "/";
            break;
        case '+/-':
            operation.value += "-" + operation.value;
            break;
        case '.':
            operation.value += ".";
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

computation = () => {
    var computationValue = document.getElementById("display")
    result = eval(computationValue.value)
    document.getElementById('display').value = result.toFixed(2);
}

clearPreviousResult = () => {
    var display = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}

insertDecimal = () => {
    var display = document.getElementById('display');
    clearPreviousResult();
    if (display.value.indexOf('.') === -1) display.value += '.';
}

// decimal = () => {
//     if (decimalValue.length === 0) {
//         decimalValue = "0.";
//     } else {
//         if (decimalValue.indexOf(".") == -1) {
//             decimalValue = decimalValue + ".";
//         };
//     };
//     document.calculator.display.value = decimalValue;
// }