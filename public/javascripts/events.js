console.log('events.js is here');

let testBTN = document.getElementById('test-btn');
console.log('testBTN', testBTN);
testBTN.addEventListener('click', () => {
    console.log('clicked the button');
})