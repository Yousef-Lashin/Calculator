let currentInput='';
let currentOperation='';
let previousInput='';

function appendNumber(number){
    currentInput+=number;
    updateDisplay();
}

function setOperation(operation){
    if(currentInput === '') return
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function calculate(){
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if(isNaN(prev) || isNaN(current)) return;

    switch(currentOperation){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0) {
                currentInput = 'Error: Division by zero';
                updateDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('screen').value = currentInput;
}