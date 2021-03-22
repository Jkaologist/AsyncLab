$displayArea = $("#display-area");
const BASE_URL = "http://numbersapi.com";
const favoriteNum = 6;

// 1. get one number's facts
async function getOneFact() {
    const resp = await axios.get(`${BASE_URL}/5?json`);
    $displayArea.append($(`<div>${resp.data.text}</div>`));
};

getOneFact();

// 2. get multiple numbers' facts
async function getMultipleFacts() {
    let numbers = "1,3,4,5";
    const resp = await axios.get(`${BASE_URL}/${numbers}`);
    for (let key in resp.data) {
        $displayArea.append($(`<div>${resp.data[key]}</div>`));
    }
};

getMultipleFacts();

// 3. get 4 facts on favorite number
function getFavoriteFact(number) {
    const resp = axios.get(`${BASE_URL}/${number}?json`);
    return resp;
};

async function FactsTimesFour(number) {
    const resp = await Promise.all(
        [
            getFavoriteFact(number), 
            getFavoriteFact(number), 
            getFavoriteFact(number), 
            getFavoriteFact(number)
        ]);
    for (let response of resp) {
        $displayArea.append($(`<div>${response.data.text}</div>`));
    }
}

FactsTimesFour(favoriteNum);