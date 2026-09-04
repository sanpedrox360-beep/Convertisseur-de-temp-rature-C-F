const inputTemp = document.getElementById('inputTemp');
const format = document.getElementById('convFormat');
const affResultat = document.getElementById('resultat');
function CelsiusToFahrenheit(temp) {
    let convTemp = (temp * 9/5) + 32;
    return convTemp;
}

function FahrenheitToCelsius(temp) {
    let convTemp = (temp - 32) * 5/9;
    return convTemp;
}
function calculer(temp){
    let resultat;

    if (format.value === "CelsiusToFahrenheit") {
        resultat = CelsiusToFahrenheit(temp);
        return `${temp} °C = ${resultat} °F`
    } 
    else {
        resultat = FahrenheitToCelsius(temp);
        return `${temp} °F = ${resultat} °C`
    }
}
function afficher(){
    if (inputTemp.value === ""){
        inputTemp.value = 0;
    }
    affResultat.value = calculer(inputTemp.value);
}
inputTemp.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        afficher(); 
    }
});