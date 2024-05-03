function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let result;

    switch (operation) {
        case 'Addition':
            result = num1 + num2 + (num3 ? num3 : 0);
            break;
        case 'multiplication':
            result = num1 * num2 * (num3 ? num3 : 1);
            break;
        // Add cases for other operations as needed
    }

    document.getElementById('result').innerText = `Le résultat est : ${result}`;
}