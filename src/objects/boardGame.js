import cardGame from "../components/cardGame";
import './style.css';

function boardGame(amount){
    const $htmlContent =  cardGame().repeat(amount) 
    return `
    <section class ="board-game">
        ${$htmlContent}
    </section>
       
    ` 
}

export default boardGame;