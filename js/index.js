// Get result of action.
function getResult(action_name){

    this.action_name = action_name; // Get action name.

    let a = parseInt(document.getElementById("A").value); // Get values from tags of inputs.
    let b = parseInt(document.getElementById("B").value);

    let result = 0; // Set standart value for 'result'.

    switch (this.action_name){ // Choosing action for A and B.
        case '+': {
            result = a + b;
            break;
        }
        case '-': {
            result = a - b;
            break;
        }
        case '*': {
            result = a * b;
            break;
        }
        case '/': {
            result = a / b;
            break;
        }
    }

    alert(`Результат: ${result}`); // Output of result.
}

// Clear inputs.
function clearInputs(){

    document.getElementById("A").value = null;
    document.getElementById("B").value = null;
}
