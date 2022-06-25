import cardGame from "../components/cardGame";

function boardGame(amount){
    const $cardGame =  cardGame().repeat(amount)  
}

export default boardGame;