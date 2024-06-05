const btn = document.getElementById('btn');
const factArea = document.getElementById('fact');

btn.addEventListener('click',getFact);

async function getFact() {
    const request = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'

    fetch(request).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    }).then((data) => {
        factArea.innerHTML = data.text;
    }).catch((error) =>{
        console.error(error);
    })
}  