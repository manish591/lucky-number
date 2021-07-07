const dateOfBirth = document.querySelector('.dateofbirth');
const luckyNumber = document.querySelector('.luckynumber');
const showButton = document.querySelector('.show');
const output = document.querySelector('.output');

function showLuckyNumber () {
    let string = dateOfBirth.value;
    let arrayDateOfBirth = string.split("");
    let sum = 0;
    arrayDateOfBirth.forEach(item => {
        sum += parseInt(item);
    })

    if (sum % parseInt(luckyNumber.value) === 0) {
        output.innerHTML = 'This is your lucky number!'
    } else {
        output.innerHTML = 'No!'
    }
}

showButton.addEventListener('click', showLuckyNumber);