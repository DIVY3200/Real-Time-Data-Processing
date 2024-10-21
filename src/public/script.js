document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const scale = document.getElementById('tempScale').value;

    // Save to local storage
    saveToHistory(city);

    const response = await fetch(`/weather/${city}`);
    
    if (response.ok) {
        const weatherData = await response.json();

        // Convert temperature and feels_like to the selected scale
        const convertedTemp = convertTemperature(weatherData.temp, scale);
        const convertedFeelsLike = convertTemperature(weatherData.feels_like, scale);

        // Display the weather data
        document.getElementById('main').textContent = `Main: ${weatherData.main}`;
        document.getElementById('temp').textContent = `Temperature: ${convertedTemp} ${getScaleSymbol(scale)}`;
        document.getElementById('feels_like').textContent = `Feels Like: ${convertedFeelsLike} ${getScaleSymbol(scale)}`;
        document.getElementById('humidity').textContent = `Humidity: ${weatherData.humidity}%`;
        document.getElementById('wind_speed').textContent = `Wind Speed: ${weatherData.wind_speed} m/s`;
        document.getElementById('dt').textContent = `Last Updated: ${new Date(weatherData.dt * 1000).toLocaleString()}`;

        // Check for fixed alert at 35°C, 95°F, or 308K depending on scale
        checkForFixedAlert(weatherData.temp, scale);
    } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
    }
});

// Function to save city to history
function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    
    // Avoid duplicates
    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('weatherSearchHistory', JSON.stringify(history));
        displayHistory();
    }
}

// Function to display search history
function displayHistory() {
    const historyList = document.getElementById('searchHistory');
    historyList.innerHTML = ''; // Clear current list

    const history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        historyList.appendChild(li);
    });
}

// Function to convert temperature
function convertTemperature(tempCelsius, scale) {
    if (scale === 'fahrenheit') {
        return (tempCelsius * 9/5) + 32;  // Celsius to Fahrenheit
    } else if (scale === 'kelvin') {
        return tempCelsius + 273.15;  // Celsius to Kelvin
    }
    return tempCelsius;  // Default is Celsius
}

// Function to get the temperature symbol
function getScaleSymbol(scale) {
    if (scale === 'fahrenheit') {
        return '°F';
    } else if (scale === 'kelvin') {
        return 'K';
    }
    return '°C';
}

// Function to check for a fixed alert at 35°C, 95°F, or 308K
function checkForFixedAlert(tempCelsius, scale) {
    let threshold;
    
    if (scale === 'celsius') {
        threshold = 35;  // Fixed threshold for Celsius
    } else if (scale === 'fahrenheit') {
        threshold = 95;  // Fixed threshold for Fahrenheit
    } else if (scale === 'kelvin') {
        threshold = 308;  // Fixed threshold for Kelvin
    }

    const convertedTemp = convertTemperature(tempCelsius, scale);  // Convert current temperature to selected scale

    if (convertedTemp > threshold) {
        alert(`Alert! The temperature in the selected city is above ${threshold} ${getScaleSymbol(scale)}.`);
    }
}

// Display history on page load
window.onload = displayHistory;
