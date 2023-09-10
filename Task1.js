function convertTemperature() {
    const celsiusInput = document.getElementById("celsius").value;
    const celsius = parseFloat(celsiusInput);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}
