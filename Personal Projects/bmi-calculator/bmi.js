const weight = document.getElementById('weight');
const height = document.getElementById('height');
var bmiResult = document.getElementById('bmi');
var bmiStatus = document.getElementById('status');

function calculate() {
    var weightBMI = weight.value;
    var heightBMI = Math.pow(height.value,2);

    var BMI = 703*(weightBMI/heightBMI);
    bmiResult.innerHTML = "BMI Value: " + BMI.toFixed(2);

    if (BMI < 18.5) {
        bmiStatus.innerHTML = "BMI Status: Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        bmiStatus.innerHTML = "BMI Status: Normal";
    } else if (BMI >= 25 && BMI <= 30) {
        bmiStatus.innerHTML = "BMI Status: Overweight";
    } else {
        bmiStatus.innerHTML = "BMI Status: Obese";
    }
}
