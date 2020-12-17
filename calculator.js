

function value1() {
    let input1 = document.getElementById('txt1').value
    let input2 = parseInt(input1);
    return input2
}
function value2() {
    let input1 = parseInt(document.getElementById('txt2').value)
    return input1
}

function DOM(x){
    let DOM = document.getElementById('p1')
    DOM.innerHTML = 'The result is ' + x + '.';
}

let multiply = function () {
    let result = value1()*value2();
    DOM(result)

};
let divide = function(){
    let math = value1()/value2();
    let result = math.toFixed(10)
    DOM(result)
}
let add = function(){
    let result = value1()+value2();
    DOM(result)

}
let subtract = function(){
    let result = value1()-value2();
    DOM(result)
}

function findOperator() {
    let operater = document.getElementById("prob1").value
    if (operater === "add"){
        add()
    } else if (operater === "subtract"){
        subtract()
    } else if (operater === "multiply"){
        multiply()
    } else if (operater === "divide"){
        divide()
    }
}