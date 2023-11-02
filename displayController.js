const today = (function(){
    const content = document.getElementById('weather-today');

    const loadData = function(locationName , data){
        const temp = data.temp_c;
        const conditionIcon = data.condition.icon;
        locationName.trim();

        const location = document.createElement('h1');
        location.innerHTML = locationName;
        content.appendChild(location);

        const condition = document.createElement('img');
        condition.src = conditionIcon;
        content.appendChild(condition);

        const temperature = document.createElement('h1');
        temperature.classList.add('temp');
        temperature.innerHTML = temp + "°C";
        content.appendChild(temperature);
    }

    return {loadData};
})();

const search = (function(){
    const searchResult = document.getElementById('search-result');
    const button = document.getElementById('search-btn');
    const input = document.getElementById('search-input');

    const loadResult = function (data){
        clearResult();
        if(data.length <= 0)
        return;

        data.forEach(result => {
            const newLocationButton = document.createElement('button');
            newLocationButton.innerHTML = result.name + ', ' + result.country;
            searchResult.appendChild(newLocationButton);
        });
    }

    const clearResult = () => searchResult.innerHTML = '';

    return {button, input, loadResult, clearResult};
})();

export default {today, search};