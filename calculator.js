
const firstNumber = function() {
    return parseInt(document.getElementById('num1').value);
};
const secondNumber = function() {
    return parseInt(document.getElementById('num2').value);
};

const displayResult = function(x){
    let output = document.getElementById('p1');
    output.innerHTML = 'The result is ' + x + '.';
};

const multiply = function () {
    let result = firstNumber()*secondNumber();
    displayResult(result);

};
const divide = function(){
    let math = firstNumber()/secondNumber();
    let result = math.toFixed(2);
    displayResult(result);
};
const add = function(){
    let result = firstNumber()+secondNumber();
    displayResult(result);
};
const subtract = function(){
    let result = firstNumber()-secondNumber();;
    displayResult(result);
};

const findOperator = function() {
    let operator = document.getElementById("prob1").value
    if (operator === "add"){
        add();
    } else if (operator === "subtract"){
        subtract();
    } else if (operator === "multiply"){
        multiply();
    } else if (operator === "divide"){
        divide();
    };
}