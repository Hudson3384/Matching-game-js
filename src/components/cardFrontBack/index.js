import cardGame from "../cardGame";

function cardFrontBack () {
    return `
        <article>
            ${cardGame()}
            ${cardGame('javascript', 'logo do javascript')}
        </article>
    `
}

export default cardFrontBack;