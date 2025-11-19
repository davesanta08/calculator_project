const zero = document.querySelector("#zeroBtn")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const equalTo = document.querySelector("#equals")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const clearAll = document.querySelector("#clearAll")
const deleteBtn= document.querySelector("#delete")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const equationDisplay = document.querySelector("#equationDisplay")
const solutionDisplay = document.querySelector("#solutionDisplay")
const percent = document.querySelector("#percent")
const exponent = document.querySelector("#power")
const dot = document.querySelector("#decimal")

let nullArray = [];
function addToScreen(value) {
    nullArray.push(value)
    equationDisplay.innerHTML = nullArray.join("")
}

function calculateResult() {
    const arrayConvertedToString = nullArray.join("")
    const result = eval(arrayConvertedToString);
    solutionDisplay.innerHTML = result;
}

function clearScreen() {
    nullArray = []
    equationDisplay.innerHTML = 0;
    solutionDisplay.innerHTML = 0;

}

function deleteValue() {
    nullArray.pop()
    equationDisplay.innerHTML = 0;
    equationDisplay.innerHTML = nullArray.join("")
}

document.addEventListener("DOMContentLoaded", function () {
    zero.addEventListener("click", () => addToScreen("0"))
    one.addEventListener("click", () => addToScreen("1"))
    two.addEventListener("click", () => addToScreen("2"))
    three.addEventListener("click", () => addToScreen("3"))
    four.addEventListener("click", () => addToScreen("4"))
    five.addEventListener("click", () => addToScreen("5"))
    six.addEventListener("click", () => addToScreen("6"))
    seven.addEventListener("click", () => addToScreen("7"))
    eight.addEventListener("click", () => addToScreen("8"))
    nine.addEventListener("click", () => addToScreen("9"))
    plus.addEventListener("click", () => addToScreen("+"))
    minus.addEventListener("click", () => addToScreen("-"))
    divide.addEventListener("click", () => addToScreen("÷"))
    multiply.addEventListener("click", () => addToScreen("*"))
    percent.addEventListener("click", () => addToScreen("%"))
    exponent.addEventListener("click", () => addToScreen("**"))
    dot.addEventListener("click", () => addToScreen("."))
    clearAll.addEventListener("click", () => clearScreen(""))
    deleteBtn.addEventListener("click", () => deleteValue(""))
    equalTo.addEventListener("click", () => calculateResult(""))
})