const dateOfBirth = document.querySelector('.dateofbirth');
const luckyNumber = document.querySelector('.luckynumber');
const showButton = document.querySelector('.show');
const output = document.querySelector('.output');
const hidePrivacyNotice = document.querySelector('.cut');
const privacySection = document.querySelector('.privacy');

function showLuckyNumber () {
    let string = dateOfBirth.value;
    let arrayDateOfBirth = string.split("-");
    let sum = 0;
    arrayDateOfBirth.forEach(item => {
        sum += parseInt(item);
    })
    console.log(sum);

    if(luckyNumber.value === '' || dateOfBirth.value === '') {
        return output.innerHTML = 'Please fill these input first.'
    } else if (luckyNumber.value === 0) {
        return output.innerHTML = 'Please Don\'t enter 0 as a lucky number!'
    }

    if (sum % parseInt(luckyNumber.value) === 0) {
        output.innerHTML = 'This is your lucky number!'
    } else {
        output.innerHTML = 'No! This is not your lucky number.'
    }

    dateOfBirth.value = '';
    luckyNumber.value = '';
}

showButton.addEventListener('click', showLuckyNumber);

hidePrivacyNotice.addEventListener('click', () => {
    privacySection.style.display = 'none';
})