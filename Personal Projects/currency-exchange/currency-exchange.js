var convertBtn = document.getElementById('convertBtn');
var result = document.getElementById('result');

convertBtn.addEventListener('click', convert)

async function convert() {
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;

    if (toCurrency == fromCurrency) {
        result.innerHTML = 'Please Select Diferent Currency'
    }

    if (amount == '') {
        result.innerHTML = 'Please Select An Amount';
    }

    if (amount == '' && fromCurrency == toCurrency) {
        result.innerHTML = 'Please Select Diferent Currency & Amount';
    }

    const request = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`

    fetch(request).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    }).then((data) => {
        console.log(data)

        var convertedAmount = data.rates[toCurrency];

        result.innerHTML = `${amount} ${fromCurrency} is Equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }).catch((error) => {
        console.error(`Error: ${error}`);
    })
}
