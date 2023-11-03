import api from "./apihandler.js";
import displayController from "./displayController.js";

function buttonSearch(name){
    displayController.search.clearResult();
    getCurrentData(name);
}

const trySearch = async function (keyword){
    let data = await api.search(keyword);

    //Display data
    console.log(data);

    displayController.search.loadResult(data, buttonSearch);
}

const getCurrentData = async function (location){
    let data = await api.getData(location);
    displayController.today.loadData(location, data); 
    setConditionGif(data.condition.text);
    console.log(data);
}

getCurrentData('Joure');

const input = displayController.search.input;
input.addEventListener("keypress", function (evt){
    const searchVal = this.value;
    if(searchVal === '')
        return;

    trySearch(this.value);
});

async function setConditionGif(keyword){
    keyword = "weather-" + keyword;
    const url = 'https://api.giphy.com/v1/gifs/translate?api_key=4OyEIhRKI8sUnp4mS3Qk51iXgaedO7nc&s=' + keyword;
    const response = fetch(url, {mode: "cors"});
    (await response).json().then(function(response){
        console.log(keyword);
        displayController.today.setConditionGIF(response.data.images.original.url);
    })
}