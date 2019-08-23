let operation1 = null;
let operation2 = null;
let numArrayStore = [];

// values will change in function when turned true.
let add = false;
let subtract = false
let multiply = false;
let divide = false; 

display = () => {
    document.getElementById('display').value += value;
}
display = (value) => {
    document.getElementById("display").value += value;
}

document.getElementById("clear").addEventListener("click", function () {
    location.reload();
  }, false);



