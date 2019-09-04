var reg = /[+|x|\-|/]$/;

// Source of truth
// This is the state in Angular, React, Vue, etc
var currentFormula = '';
var currentValue = '';

// Dependent on source-of-truth
// Angular, React, Vue's built in way of rendering HTML
var displayFormula = document.querySelector('#current-formula');
var displayValue = document.querySelector('#current-value');


/* CRUD */

/* CREATE */
const inputValue = (param) => {
    currentFormula = currentFormula + param; // business-logic
    displayFormula.innerHTML = currentFormula; // side-effect
    console.log("param", param);
    console.log("currentFormula", currentFormula);
}

const inputOperand = (param) => {
    // if(currentFormula.substr(-1) !== "+"  && currentFormula.substr(-1) !== "-" && currentFormula.substr(-1) !== "x" && currentFormula.substr(-1) !== "/")
    if(!currentFormula.match(reg)){
        currentFormula = currentFormula + param; // business-logic
        displayFormula.innerHTML = currentFormula; // side-effect
    }
    console.log("param", param);
    console.log("currentFormula", currentFormula);
}

const inputDecimal = (param) => {
    console.log(param)
}

/*     DELETE  */
const clearEntry = (param) => {
    console.log(param)
}

const clearAll = (param) => {
    console.log(param)
}

/*    UPDATE   */ 
const doComputation = (param) => {
    console.log(param)
}

const changeSign = (param) => {
    console.log(param)
}





// //--------------------------------------input to display---------------------------------------------------
// inputValue = (num) => {
//     var numberValue = document.getElementById('display');
//     switch (num) {
//         case 0:
//             numberValue.value += "0";
//             break;
//         case 1:
//             numberValue.value += "1";
//             break;
//         case 2:
//             numberValue.value += "2";
//             break;
//         case 3:
//             numberValue.value += "3";
//             break;
//         case 4:
//             numberValue.value += "4";
//             break;
//         case 5:
//             numberValue.value += "5";
//             break;
//         case 6:
//             numberValue.value += "6";
//             break;
//         case 7:
//             numberValue.value += "7";
//             break;
//         case 8:
//             numberValue.value += "8";
//             break;
//         case 9:
//             numberValue.value += "9";
//             break;
//     }
// }

// //--------------------------------------Operations---------------------------------------------------
// inputOperand = (operand) => {
//     var operandisPressed = false;
//     var operation = document.getElementById('display');
//     switch (operand) {
//         case '+':
//             operation.value += "+";
//             break;
//         case '-':
//             operation.value += "-";
//             break;
//         case "x":
//             operation.value += "*";
//             break;
//         case '/':
//             operation.value += "/";
//             break;
//         case '+/-':
//             operation.value += "-" + operation.value;
//             break;
//         case '.':
//             if (operandisPressed) {
//                 operandisPressed === true
//                 operation.value += ".";
//             }
//             return operation.value += "."
//     }
// }
// //--------------------------------------Non-Operands---------------------------------------------------
// backSpace = () => {
//     var backSpace = document.getElementById('display');
//     var removeLast = backSpace.value;
//     if (removeLast > 0) {
//         removeLast = removeLast.substring(0, removeLast.length - 1);
//         backSpace.value = removeLast;
//     }
// }
// backSpace();

// clear = () => {
//     document.getElementById("clear").addEventListener("click", () => {
//         document.getElementById('display').value = '';
//     }, false);
// }
// clear();

// computation = () => {
//     var computationValue = document.getElementById("display")
//     result = eval(computationValue.value)
//     document.getElementById('display').value = result.toFixed(2);
// }



// function addDecimal () {
//     var currentNumber = document.getElementById('display');
//     if

// }

// handleDecimal = () => {
//     let decimalPoint = false;
//     console.log(decimalPoint);
//     if (decimalPoint === null) {
//         document.getElementById('decimal').value = '.';
//         console.log(decimalPoint)
//     } else {
//         decimalPoint === true;
//         console.log(decimalPoint);
//         document.getElementById('decimal').value = '';
//         console.log(decimalPoint);
//     }
// }
