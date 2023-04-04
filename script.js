const numbers = document.querySelectorAll(".number"); // set numbers to access all number selector in html
const calculatorScreen = document.querySelector('.calculator-screen'); // set "calculatorScreen" to access 'calculator-screen'
const operators = document.querySelectorAll('.operator'); // set operators to access all operator selector
const equalSign = document.querySelector('.equal-sign'); // set 'equalSign' to access 'equal-sign' selector
const clearBtn = document.querySelector('.all-clear'); // set 'clearBtn' to access 'all-clear' selector
const decimal = document.querySelector('.decimal');
let prevNumber = ''; // to store values
let calculationOperator =''; // to store values
let currentNumber = '0'; // set first to the variable

const updateScreen = (number) => { // the number parameter stored value of the 'currentNumber' 
    calculatorScreen.value = number; // set the 'calculator-screen' with the 'number' parameter value
}

const inputNumber = (number) => { // arrow function with 'number' parameter, the parameter for storing argument form 'numbervalue.target.value'
    if (currentNumber === '0') { // if value of currentNumber is '0'. set argument to currentNumber 
        currentNumber = number; // set argument to currentNumber
    } else { // if value of currentNumber isn't 'o' add new number to currentNumber
        currentNumber += number; // to store every numbers are pressed on the 'currentNumber'
    }
}

const inputOperator = (operator) => { // arrow funtion with operator parameter
    if (calculationOperator === '') {
        prevNumber = currentNumber; // set variable
    }
    calculationOperator = operator; // set variable
    currentNumber = '0'; // set variable
}

const clearAll = () => {
    prevNumber ='';
    calculationOperator ='';
    currentNumber ='';
}

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}

numbers.forEach((number) => { //access each element of numbers and number parameter as var of the elements
    number.addEventListener("click", (numbervalue) => { // run the function when one of the number buttons are pressed
        inputNumber(numbervalue.target.value); // get the 'value attribute' of the element of the 'numbervalue' parameter
        updateScreen(currentNumber); // run the function and send the argument
    });
});

operators.forEach((operator) => { //access each element of the operator buttons. and 'operator' parameter as var to the elements
    operator.addEventListener('click', (operatorvalue) => { // add 'addEventListener' method and callback to the parameter 
        inputOperator(operatorvalue.target.value); // run the function and send the argument
    })
});

equalSign.addEventListener('click', () => {
    calculate(); // run the function to proses the numbers based its request
    updateScreen(currentNumber); // after calculate the number. update number in the screen
});

const calculate = () => { // calculate the number
    let result = '';
    switch (calculationOperator) {
        case '+': 
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator ='';
};

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);  
})