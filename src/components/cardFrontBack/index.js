import cardGame from '../cardGame'
import './style.css';

function cardFrontBack () {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target
        const $cardFrontBack = $origin.closest('.card-Front-Back')
        $cardFrontBack.classList.toggle('-active')}
    return `
        <article class="card-Front-Back" onclick="cardFrontBack.handleClick(event)">
            <div class = "card -front">
                ${cardGame()}
            </div>
            <div class = "card -back">
                 ${cardGame('javascript', 'logo do javascript')}
            </div> 
        </article>
    `
}

export default cardFrontBack;