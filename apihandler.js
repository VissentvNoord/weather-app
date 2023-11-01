const api = (function () {
    const key = 'afce7e700a164de591d162249230111';
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}`;

    const getTemperature = async function (location) {
        const apiCall = url + `&q=${location}`;
        try {
            const response = await fetch(apiCall, { mode: "cors" });
            const data = await response.json();
            const temp = data.current.temp_c;

            console.log(data);
            return temp; // Return the data obtained from the API
        } catch (error) {
            return 'Error!: ' + error; // Return an error message in case of failure
        }
    }

    return { getTemperature };
})();

export default api;
