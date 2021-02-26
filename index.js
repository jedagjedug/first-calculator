class Calculator {
  constructor(mainScreen, historyScreen) {
    this.mainScreen = mainScreen;
    this.historyScreen = historyScreen;
  }

  updateDisplay(num) {
    if (this.mainScreen.innerText === '0') {
      this.mainScreen.innerText = num;
    } else {
    this.mainScreen.innerText += num;
    }
  }

  clear() {
    this.mainScreen.innerText = '0';
    this.historyScreen.innerText = '';
  }

  delete() {
    this.mainScreen.innerText = this.mainScreen.innerText.slice(0, -1);
  }

  chooseOperation(operation) {
    if (operation === '+' || operation === '-') {
      this.updateDisplay(operation);
    } else if (operation === '×') {
      this.updateDisplay('*');
    } else {
      this.updateDisplay('/')
    }
  }

  compute() {
    const result = eval(this.mainScreen.innerText).toString();
    this.mainScreen.innerText = result
  }

  format(str) {
    
  }
}

const mainScreen = document.querySelector('h1');
const historyScreen = document.querySelector('small');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const resetButton = document.querySelector('[data-reset]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');

const calculator = new Calculator(mainScreen, historyScreen);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.updateDisplay(button.innerText);
  })
})

resetButton.addEventListener('click', () => calculator.clear());

deleteButton.addEventListener('click', () => calculator.delete());

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
  })
})

equalButton.addEventListener('click', () => calculator.compute());