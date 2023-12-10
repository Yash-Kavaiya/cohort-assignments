class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove continuous spaces
    const isValid = /^[\d\s()+\-*\/.]*$/.test(sanitizedExpression); // Validate expression

    if (!isValid) {
      throw new Error('Invalid expression');
    }

    try {
      this.result = eval(sanitizedExpression); // Evaluate the expression using eval (Note: eval is used here for simplicity)
    } catch (error) {
      throw new Error('Error in evaluating expression');
    }
  }
}

// Test cases
const calculator = new Calculator();
calculator.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calculator.getResult()); // Expected output: 21

module.exports = Calculator;
