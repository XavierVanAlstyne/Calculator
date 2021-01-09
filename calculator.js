const firstNumber = function() {
    return parseInt(document.getElementById('num1').value);
};
const secondNumber = function() {
    return parseInt(document.getElementById('num2').value);
};

const notNumber = function (a,b) {
    return isNaN(a || b)
}

const checkIfNumber = function() {
    if (notNumber(firstNumber(),secondNumber())){
        let error = document.getElementById('output')
        error.innerHTML = "Must input a number!"
    } else {
        findOperator();
    }
}


const findOperator = function() {
    let operator = document.getElementById("problem1").value
    if (operator === "add"){
        math.add();
    } else if (operator === "subtract"){
        math.subtract();
    } else if (operator === "multiply"){
        math.multiply();
    } else if (operator === "divide"){
        math.divide();
    } else if (operator === 'exponent'){
        math.exponential();
    }
}


const math = {
    divide: function() {
        let result = firstNumber()/secondNumber();
        displayResult(result.toFixed(2));
    },
    multiply: function() {
        let result = firstNumber()*secondNumber();
        displayResult(result);
    },
    add: function() {
        let result = firstNumber()+secondNumber();
        displayResult(result);
    },
    subtract: function() {
        let result = firstNumber()-secondNumber();;
        displayResult(result);
    },
    exponential: function() {
        let result = Math.pow(firstNumber(), secondNumber()) 
        displayResult(result)
    }
}


const displayResult = function(x){
    let output = document.getElementById('output');
    output.innerHTML = 'The result is ' + x + '.';
};