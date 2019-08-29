var oneButton = document.getElementById('one');
var twoButton = document.getElementById('two');
var threeButton = document.getElementById('three');
var fourButton = document.getElementById('four');
var fiveButton = document.getElementById('five');
var sixButton = document.getElementById('six');
var sevenButton = document.getElementById('seven');
var eightButton = document.getElementById('eight');
var nineButton = document.getElementById('nine');
var zeroButton = document.getElementById('zero');

var decimalButton = document.getElementById('decimal');
var clearButton = document.getElementById('clear');
var plusMinusButton = document.getElementById('plusMinus');
var percentButton = document.getElementById('percent');

var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');
var equalButton = document.getElementById('equal');
var displayValElement = document.getElementById('display');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var allButtons = document.getElementsByClassName('btn-num');
var allOperations = document.getElementsByClassName('btn-ops');

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', updateDisplayVal, false);
}
// for (var i = 0; i <= allOperations.length; i++) {
//     allOperations[i].addEventListener(click, completeOperation, false)
// }