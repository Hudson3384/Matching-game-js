import cardFrontBack from '../../components/cardFrontBack';
import './style.css';

function boardGame(amountCards){
    const $htmlContent =  cardFrontBack().repeat(amountCards) 
    return `
    <section class ="board-game">
        ${$htmlContent}
    </section>   
    `
}

export default boardGame;