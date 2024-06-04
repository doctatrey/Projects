const btn = document.getElementById("btn");

var charName = document.getElementById("name");
var mass = document.getElementById("mass");
var height = document.getElementById("height");
var gender = document.getElementById("gender");
var homeworld = document.getElementById("homeworld");
var filmsList = document.getElementById("films");


btn.addEventListener("click", getChar);


async function getChar() {
    var randomNum = Math.floor(Math.random() * (83) + 1);
    const request = `https://swapi.dev/api/people/${randomNum}/`;

    fetch(request).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status ${response.status}`);
        }
        return response.json();
    }).then((data) => {
        console.log(data);

        var heightVal = data.height;
        heightVal = getHeight(heightVal);

        var massVal = data.mass;
        massVal *= 2.2046;

        charName.innerHTML = `Name: ${data.name}`;
        height.innerHTML = `Height: ${heightVal}`;
        mass.innerHTML = `Mass: ${massVal.toFixed(1)} lb`;
        gender.innerHTML = `Gender: ${data.gender}`;

        return fetch(data.homeworld)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status ${response.status}`);
        }
        return response.json();
    }).then((homeworldData) => {
        console.log(homeworldData);

        homeworld.innerHTML = `Homeworld: ${homeworldData.name}`;
    }).catch((error) => {
        console.log(`Error: ${error}`);
    });
}

 function getHeight(n) {
    var realFeet = ((n*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "&prime;" + inches + '&Prime;';
}
