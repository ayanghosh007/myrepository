document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', handleKeyPress);
});



function appendToResult(value) {
    document.getElementById('result').value += value;
}


function clearOnNewNumber() {
    const resultField = document.getElementById('result');
    const currentValue = resultField.value;

    // Check if current value is 'Error' or a number (including decimals)
    if (currentValue === 'Error' || !isNaN(parseFloat(currentValue))) {
        resultField.value = '';
    }
}




function clearResult() {
    document.getElementById('result').value = '';


    
}




function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}



function backspace() {
    let resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}



function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendToResult(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToResult(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape' || key === 'Delete') {
        clearResult();
    }
}



/*function toggleScientific() {
    const scientificButtons = document.querySelector('.scientific-buttons');
    scientificButtons.classList.toggle('hidden');
}
*/