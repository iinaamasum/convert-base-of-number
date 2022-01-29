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

    // checking number
    if (inputNumber < 0) {
        showBinary.placeholder = `Please enter a positive number.`;
        showOctal.placeholder = `Please enter a positive number.`;
        showHex.placeholder = `Please enter a positive number.`;
    } else if (inputNumber === '') {
        showBinary.placeholder = `Please enter a valid number.`;
        showOctal.placeholder = `Please enter a valid number.`;
        showHex.placeholder = `Please enter a valid number.`;
        
    } else {
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