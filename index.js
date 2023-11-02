import api from "./apihandler.js";
import displayController from "./displayController.js";

const trySearch = async function (keyword){
    let data = await api.search(keyword);

    //Display data
    console.log(data);

    displayController.search.loadResult(data);
}

const getCurrentData = async function (location){
    let data = await api.getData(location);
    displayController.today.loadData(location, data); 
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