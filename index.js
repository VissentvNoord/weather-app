import api from "./apihandler.js";

// Example usage:
(async () => {
    const temperatureData = await api.getTemperature('Joure');
    console.log(temperatureData); // Log the temperature data
})();
