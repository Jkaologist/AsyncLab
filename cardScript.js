$cardArea = $('#card-area');
$cardButton = $('#card-button');
const BASE_URL = 'https://deckofcardsapi.com/api';
let DECK_ID;


async function createDeck() {
    const resp = await axios.get(`${BASE_URL}/deck/new/shuffle/?deck_count=1`);
    DECK_ID = resp.data.deck_id;
}

async function pullCard(deckId) {
    const resp = await axios.get(`${BASE_URL}/deck/${deckId}/draw/?count=1`);
    return resp.data;
}

async function handleClick(e) {
    // disable button
    const resp = await pullCard(DECK_ID);
    console.log(resp);
    resp.success ? appendCard(resp.cards[0].image) : $cardButton.remove();
    //re enable
}

function appendCard(imgURL) {
    let $image = $(`<img src=${imgURL}>`);
    $cardArea.append($image);
}


createDeck();
$cardButton.on("click", handleClick);
