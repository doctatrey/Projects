var originalString = document.getElementById('string');
var newString = document.getElementById('result');
const reverseButton = document.getElementById('reverseButton');

reverseButton.addEventListener('click', () => {
    newString.innerHTML = originalString.value.split('').reverse().join('');
});
