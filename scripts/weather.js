document.addEventListener('DOMContentLoaded', () => {
    const temperatureElement = document.getElementById('temperature');
    const locationElement = document.getElementById('location');
    const weatherIconElement = document.getElementById('weather-icon');

    // Function to fetch weather data from OpenWeather API
    async function fetchWeather(lat, lon) {
        const apiKey = 'd0a10211ea3d36b0a6423a104782130e';
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            const temperature = Math.round(data.main.temp);
            const location = data.name;
            const condition = data.weather[0].main.toLowerCase();

            // Update the elements with fetched data
            temperatureElement.textContent = `${temperature} degrees`;
            locationElement.textContent = location;

            // Update icon based on condition
            switch (condition) {
                case "clouds":
                    weatherIconElement.src = "/Assets/Clouds_icon.png";
                    break;
                case "rain":
                    weatherIconElement.src = "/Assets/Rain_icon.png";
                    break;
                case "clear":
                    weatherIconElement.src = "/Assets/Sun_icon.png";
                    break;
                default:
                    weatherIconElement.src = "/Assets/Clouds_icon.png"; // Default icon for other conditions
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    // Example coordinates for London (replace with dynamic coordinates if needed)
    const lat = 51.5074;
    const lon = -0.1278;
    fetchWeather(lat, lon);
});
