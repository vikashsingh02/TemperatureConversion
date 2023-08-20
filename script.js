document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    });
});
