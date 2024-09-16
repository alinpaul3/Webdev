function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteLast() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        
        // Replace exponentiation '**' with 'Math.pow()'
        expression = expression.replace(/(\d+)\*\*(\d+)/g, 'Math.pow($1, $2)');
        
        // Use Function constructor to evaluate the expression
        var result = new Function('return ' + expression)();

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
