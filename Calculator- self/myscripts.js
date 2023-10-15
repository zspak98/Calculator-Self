const numberBtn = document.querySelectorAll(".num")
const operationBtn = document.querySelectorAll("[data-operation]")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector("[data-clear]")
const numDisplay = document.querySelector(".result")
const previousOperandText = document.querySelector(".previous-operand")
const currentOperandText = document.querySelector(".previous-operand")


class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear() //add onto calc constructor so that when calc is created, it is cleared by default.
    }

    clear() {
        this.previousOperand= "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    appendNumber(number) {
        ///making each number attach to each other as its being entered on screen
        if (number === "." && this.currentOperand.includes(".")) return;

        this.currentOperand = this.currentOperand.toString() + number.toString()
        
    }

    chooseOperation(operation) {
     if (this.currentOperand === "") return;
     if (this.previousOperand !== "") {
        this.compute();
     }
   
     this.operation = operation;
     this.previousOperand = this.currentOperand 
     this.currentOperand = ""
    this,currentOperand = number;

    }

    compute() {
        let computation; // define variable here
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        switch (this.operation) {
            case "+" : 
            computation = prev + curr
            break;
            case "-" : 
            computation = prev - curr 
            break;
            case "x": 
            computation = prev * curr 
            break;
            case "/": 
            computation = prev / curr 
            break;
        default: 
        return; //unless prev/curr are defined, dont do anything when submitting equal sign 

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ""
        }

    }

   getDisplayNumber(number) {
        // getting integer to display
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = parseFloat(stringNumber.split(".")[1])

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
          } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
          }

        if (decimalDigits !== null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }


    }

    updateDisplay() {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)

        if (this.operation != null) {
        this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation} `
        } else {
            this.previousOperandText = ""
        }

    }

}



const calculator = new Calculator(previousOperandText, currentOperandText)

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
     calculator.appendNumber(button.textContent)
     calculator.updateDisplay()
     
    })
})

operationBtn.forEach(button => {
    button.addEventListener("click",()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener("click", ()=> {
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener("click", ()=> {
   calculator.clear()
})




