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

    const bgColour = document.querySelectorAll('input');

    // checking number
    if (inputNumber < 0) {
        // bg color changing 
        for (let i = 1; i < 4; i++) {
            bgColour[i].classList.remove('bg-green-300');
            bgColour[i].classList.add('bg-red-400');
        }
        showBinary.placeholder = `Please enter a positive number.`;
        showOctal.placeholder = `Please enter a positive number.`;
        showHex.placeholder = `Please enter a positive number.`;
    } else if (inputNumber === '') {
        // bg color changing 
        for (let i = 1; i < 4; i++) {
            bgColour[i].classList.remove('bg-green-300');
            bgColour[i].classList.add('bg-red-400');
        }
        showBinary.placeholder = `Please enter a valid number.`;
        showOctal.placeholder = `Please enter a valid number.`;
        showHex.placeholder = `Please enter a valid number.`;

    } else {
        // bg color changing 
        for (let i = 1; i < 4; i++) {
            bgColour[i].classList.remove('bg-red-400');
            bgColour[i].classList.add('bg-green-300');
        }
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