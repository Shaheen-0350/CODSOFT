let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    firstNumber = currentInput;
    operator = op;
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentInput === '' || firstNumber === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    currentInput = '';
    firstNumber = '';
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstNumber = '';
    document.getElementById('display').value = '';
}
