const submitNumber = document.querySelector('#submit');
const showHex = document.querySelector('#hex');
const showOctal = document.querySelector('#octal');
const showBinary = document.querySelector('#binary');

// console.log(inputNumber);

function outputNumber(e) {
    // preventDefault
    e.preventDefault();

    // taking input 
    const inputNumber = document.getElementById('decimal').value;
    console.log(inputNumber);

    const bgRed = document.querySelector('input');

    // checking number
    if (inputNumber < 0) {
        bgRed.classList.remove('bg-green-300');
        bgRed.classList.add('bg-red-400');
        showBinary.placeholder = `Please enter a positive number.`;
        showOctal.placeholder = `Please enter a positive number.`;
        showHex.placeholder = `Please enter a positive number.`;
    } else if (inputNumber === '') {
        bgRed.classList.remove('bg-green-300');
        bgRed.classList.add('bg-red-400');
        showBinary.placeholder = `Please enter a valid number.`;
        showOctal.placeholder = `Please enter a valid number.`;
        showHex.placeholder = `Please enter a valid number.`;

    } else {
        bgRed.classList.remove('bg-red-400');
        bgRed.classList.add('bg-green-300');
        // converting number  
        const binaryNum = Number(inputNumber).toString(2);
        const octalNum = Number(inputNumber).toString(8);
        const hexNum = Number(inputNumber).toString(16);
        // showing number 
        showBinary.placeholder = binaryNum + `   --inBinary`;
        showOctal.placeholder = octalNum + `   --inOctal`;
        showHex.placeholder = hexNum.toUpperCase() + `   --inHex`;

    }
}


submitNumber.addEventListener('click', outputNumber);