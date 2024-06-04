var increaseBtn = document.getElementById('increase');
var decreaseBtn = document.getElementById('decrease');
var resetBtn = document.getElementById('reset');
var counter = document.getElementById('counter');
var count = 0;

increaseBtn.addEventListener('click', function() {
    count++;
    counter.innerHTML = count;
})

decreaseBtn.addEventListener('click', function () {
    count--;
    counter.innerHTML = count;
})

resetBtn.addEventListener('click', function() {
    count = 0;
    counter.innerHTML = count;
})
