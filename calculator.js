
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

const math = {
    'divide': function(){
        let result = firstNumber()/secondNumber();
        displayResult(result.toFixed(2));
    },
    'multiply': function () {
        let result = firstNumber()*secondNumber();
        displayResult(result);
    },
    'add': function(){
        let result = firstNumber()+secondNumber();
        displayResult(result);
    },
    'subtract': function(){
        let result = firstNumber()-secondNumber();;
        displayResult(result);
    }
}


const findOperator = function() {
    let operator = document.getElementById("prob1").value
    if (operator === "add"){
        math.add();
    } else if (operator === "subtract"){
        math.subtract();
    } else if (operator === "multiply"){
        math.multiply();
    } else if (operator === "divide"){
        math.divide();
    };
}