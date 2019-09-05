const reg = /[+|*|\-|/]$/;
const regToken = /(\d+\.\d+|\d+\.|\d+|\+|\-|\*|\/)$/;

var currentFormula = '';
var isLastButtonPressedEqualSign = false;

var currentValue = '';
const displayFormula = document.querySelector('#current-formula');
const displayValue = document.querySelector('#current-value');


/* CRUD */

/* CREATE */
const inputValue = (param) => {
    if (currentFormula === '0') {
        currentFormula = '';
    }
    currentFormula = currentFormula + param; 
    renderView(param);
}

const inputOperand = (param) => {
    if (!currentFormula.match(reg)) { 
        currentFormula = currentFormula + param; 
        renderView(param);
    } else {
        currentFormula = currentFormula.slice(0, -1) + param;
        renderView(param);
    }
}

const inputDecimal = (param) => {
    if (currentFormula.match(reg)) {
        currentFormula = currentFormula + '0';
    }
    if (currentFormula.substr(-1) !== '.' && !currentValue.includes('.'))
        currentFormula = currentFormula + '.';
    renderView();
}

/*     DELETE  */
const clearAll = (param) => {
    currentFormula = '0';
    renderView();
}
const clearEntry = (param) => {
    if (currentFormula === currentValue) {
        currentFormula = '0';
    } else {
        currentFormula = currentFormula.slice(0, -currentValue.length);
    }
    renderView();
}

/*    UPDATE   */
const doComputation = () => {
    isLastButtonPressedEqualSign = true;
    renderView();
}

const changeSign = (param) => {
    if(currentFormula[0] !== '-'){
        currentFormula = '-' + currentFormula;
    } else {
        currentFormula = currentFormula.substring(1);
    }
    renderView();
}

/* RENDER VIEW */
const renderView = () => {
    if (isLastButtonPressedEqualSign) {
        currentValue = eval(currentFormula) + '';
        isLastButtonPressedEqualSign = false;
        displayFormula.innerHTML = currentFormula;
        displayValue.innerHTML = currentValue + '';

        currentFormula = currentValue;
    } else {
        currentValue = regToken.exec(currentFormula)[0];
        displayFormula.innerHTML = currentFormula;
        displayValue.innerHTML = currentValue;
    }
}
