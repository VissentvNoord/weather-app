const api = (function () {
    const key = 'afce7e700a164de591d162249230111';
    const getCurrentURL = `http://api.weatherapi.com/v1/current.json?key=${key}`;
    const searchURL = `http://api.weatherapi.com/v1/search.json?key=${key}`;

    const getData = async function (location) {
        const apiCall = getCurrentURL + `&q=${location}`;
        try {
            const response = await fetch(apiCall, { mode: "cors" });
            const data = await response.json();
            const current = data.current;

            return current; // Return the data obtained from the API
        } catch (error) {
            return 'Error!: ' + error; // Return an error message in case of failure
        }
    }

    const getTemperature = async function (location) {
        const apiCall = getCurrentURL + `&q=${location}`;
        try {
            const response = await fetch(apiCall, { mode: "cors" });
            const data = await response.json();
            const temp = data.current.temp_c;

            return temp; // Return the data obtained from the API
        } catch (error) {
            return 'Error!: ' + error; // Return an error message in case of failure
        }
    }

    const search = async function (key){
        const apiCall = searchURL + `&q=${key}`;
        try {
            const response = await fetch(apiCall, { mode: "cors" });
            const data = await response.json();
            return data; // Return the data obtained from the API
        } catch (error) {
            return 'Error!: ' + error; // Return an error message in case of failure
        }
    }

    return { getData, search, getTemperature };
})();

export default api;
