let expression = ""

function appendNumber(number) {
    console.log(number)
    if (operator == null && number!== "=") 
        {alert("Number is missing"); } 
    else if (number != "=") {
        expression = expression + number;
        document.getElementById("num1").textContent = expression; 
    } else { 
        if (number =="=") {
       document.getElementById("result").textContent = eval(expression);
       clearInput()  
        }
    }
}

function calculate() {
    document.getElementById("result").textContent = eval(expression);
    clearInput();
}

function clearInput() {
    expression = "";
    operator = null;
    document.getElementById("num1").textContent = "";
}     












