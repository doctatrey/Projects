document.addEventListener('DOMContentLoaded',function(){
    const display = document.getElementById('calcResult');
    let currentInput = '';
    let operation = '';
    let firstOperand = '';

    function setOperation(op)
    {
        operation = op;
        firstOperand = currentInput;
        currentInput = '';
    }

    function updateDisplay() 
    {
        display.value = currentInput;
    } 

    document.getElementById('1').onclick=function()
    {
        currentInput += "1"; 
        updateDisplay();
    }

    document.getElementById('2').onclick=function()
    {
        currentInput += "2"; 
        updateDisplay();
    }

    document.getElementById('3').onclick=function()
    {
        currentInput += "3"; 
        updateDisplay();
    }

    document.getElementById('4').onclick=function()
    {
        currentInput += "4"; 
        updateDisplay();
    }

    document.getElementById('5').onclick=function()
    {
        currentInput += "5"; 
        updateDisplay();
    }

    document.getElementById('6').onclick=function()
    {
        currentInput += "6"; 
        updateDisplay();
    }

    document.getElementById('7').onclick=function()
    {
        currentInput += "7"; 
        updateDisplay();
    }

    document.getElementById('8').onclick=function()
    {
        currentInput += "8";
        updateDisplay(); 
    }

    document.getElementById('9').onclick=function()
    {
        currentInput += "9"; 
        updateDisplay();
    }

    document.getElementById('0').onclick=function()
    {
        currentInput += "0";
        updateDisplay();
    }

    document.getElementById('addition').onclick = function()
    {
        setOperation("+");
        updateDisplay();
    }

    document.getElementById('subtraction').onclick = function()
    {
        setOperation("-");
        updateDisplay();
    }

    document.getElementById('multiplication').onclick = function()
    {
        setOperation("*")
        updateDisplay();
    }

    document.getElementById('division').onclick = function()
    {
        setOperation("/")
        updateDisplay();
    }

    document.getElementById('equals').onclick = function()
    {
        if (operation && firstOperand != '')
        {
            currentInput = evaluate(firstOperand, operation, currentInput);
            operation = '';
            firstOperand = '';
            updateDisplay();
        }
        else
        {
            currentInput = 'Please Enter an Input';
            updateDisplay();
        }
    }

    function evaluate(firstOperand, operation, secondOperand)
    {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        switch (operation)
        {
            case "+": return firstOperand + secondOperand;
            case "-": return firstOperand - secondOperand;
            case "*": return firstOperand * secondOperand;
            case "/": return secondOperand === 0 ? "Error" : firstOperand / secondOperand;
            default: return 0;
         }
    }

    document.getElementById('clear').onclick = function()
    {
        currentInput = "";
        updateDisplay();
    }
})
