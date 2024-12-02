document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit-select');
    const convertBtn = document.getElementById('convert-btn');
    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', convertTemperature);

    function convertTemperature() {
        // Reset previous messages and results
        errorMessage.textContent = '';
        result.textContent = '';

        // Get input values
        const temperature = parseFloat(temperatureInput.value);
        const inputUnit = unitSelect.value;

        // Validate input
        if (isNaN(temperature)) {
            errorMessage.textContent = 'Please enter a valid number';
            return;
        }

        // Perform conversion
        let convertedTemp, convertedUnit, originalUnit;
        if (inputUnit === 'celsius') {
            // Celsius to Fahrenheit
            convertedTemp = (temperature * 9/5) + 32;
            convertedUnit = '°F';
            originalUnit = '°C';
        } else {
            // Fahrenheit to Celsius
            convertedTemp = (temperature - 32) * 5/9;
            convertedUnit = '°C';
            originalUnit = '°F';
        }

        // Display result
        result.innerHTML = `
            ${temperature}${originalUnit} = 
            <span style="color: blue;">${convertedTemp.toFixed(1)}${convertedUnit}</span>
        `;
    }
});