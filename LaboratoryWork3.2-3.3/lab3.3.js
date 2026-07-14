document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.getElementById('calc_form');
    const resultSpan = document.getElementById('result');
    resultSpan.innerHTML = '<i>Press "Calculate" to get the result</i>';

    calcForm.addEventListener('submit', (event) => {
        event.preventDefault();

        resultSpan.innerHTML = '<i>Not calculated yet...</i>';
        
        const num1 = parseFloat(document.getElementById('num1').value);
        const operation = document.getElementById('operation').value;
        const num2 = parseFloat(document.getElementById('num2').value);
        
        let result;
        
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '**':
                result = num1 ** num2;
                break;                
            default:
                result = '<i>Not supported operation</i>';
        }
        
        resultSpan.innerHTML = result;
    });
});
