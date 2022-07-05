import cardGame from "../cardGame";
import './style.css'

function cardFrontBack () {
    return `
        <article class="card-Front-Back">
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