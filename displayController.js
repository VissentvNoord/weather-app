const today = (function(){
    const content = document.getElementById('weather-today');
    let currentConditionImg;

    const loadData = function(locationName, data){
        content.innerHTML = '';

        //Name and temperature
        const temp = data.temp_c;
        const conditionIcon = data.condition.icon;
        locationName.trim();

        const location = document.createElement('h1');
        location.innerHTML = locationName;
        content.appendChild(location);

        //Conditions 
        const conditionBox = document.createElement('div');
        conditionBox.classList.add('conditions');
        content.appendChild(conditionBox);

        const condition = document.createElement('img');
        currentConditionImg = condition;
        conditionBox.appendChild(condition);

        const temperature = document.createElement('h1');
        temperature.classList.add('temp');
        temperature.innerHTML = temp + "°C";
        conditionBox.appendChild(temperature);

        const stats = document.createElement('div');
        stats.classList.add('stats');
        content.appendChild(stats);

        //Humidity
        const hTitle = "Humidity";
        const hVal = data.humidity + "%";
        createStatistic(stats, hTitle, hVal);

        //Pressure
        const pTitle = "Pressure";
        const pVal = data.pressure_mb + "mb";
        createStatistic(stats, pTitle, pVal);

        //Wind
        const windData = {
            title: "Wind",
            dir: data.wind_dir,
            speed: data.wind_kph,
            degree: data.wind_degree,
        }
        createWindStatistic(stats, windData);
    }

    const setConditionGIF = function(source){
        currentConditionImg.src= source;
    }

    const createStatistic = function(parent, title, value){
        //Creating div
        const statBox = document.createElement('div');
        statBox.classList.add('statistic');

        //Creating elements of statistic
        const statTitle = document.createElement('h3');
        const statValue = document.createElement('h2');
        const statIcon = document.createElement('img');

        //Adding classes
        statTitle.classList.add('stat-title');
        statValue.classList.add('stat-value');

        //Assigning stats to div
        statBox.append(statIcon, statTitle, statValue);

        //Assigning values
        statTitle.innerHTML = title;
        statValue.innerHTML = value;

        //Adding full statistic div to parent
        parent.appendChild(statBox);
        return statBox;
    }

    const createWindStatistic = function(parent, data){
        const windStat = createStatistic(parent, data.title, data.speed + 'km/h'); 
        windStat.classList.add('stat-wind');

        const direction = document.createElement('h2');

        direction.classList.add('stat-value');
        direction.classList.add('wind-dir');

        direction.innerHTML = data.dir;

        windStat.append(direction);
    }

    return {loadData, setConditionGIF};
})();

const search = (function(){
    const searchResult = document.getElementById('search-result');
    const button = document.getElementById('search-btn');
    const input = document.getElementById('search-input');

    const loadResult = function (data, buttonEvent){
        clearResult();
        if(data.length <= 0)
        return;

        data.forEach(result => {
            const newLocationButton = document.createElement('button');
            newLocationButton.addEventListener('click', function () {buttonEvent(result.name)});
            newLocationButton.innerHTML = result.name + ', ' + result.country;
            searchResult.appendChild(newLocationButton);
        });
    }

    const clearResult = () => searchResult.innerHTML = '';

    return {button, input, loadResult, clearResult};
})();

export default {today, search};