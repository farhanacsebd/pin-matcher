/* function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
} */
function generatePin() {
    const pin = Math.round(Math.random() * 100000);
    const display = document.getElementById('display-pin');
    display.value = pin;
    const pinString = pin + '';
    if (pinString.length == 5) {

        return pin;

    }
    else {
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const display2 = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            display2.value = '';
        }
    }
    else {
        display2.value = display2.value + number;
    }
})

function verifyPin() {
    const display = document.getElementById('display-pin');
    const display2 = document.getElementById('typed-numbers');
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if (display.value == display2.value) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block';
        success.style.display = 'none';
    }
}