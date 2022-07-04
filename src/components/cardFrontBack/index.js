import cardGame from "../cardGame";

function cardFrontBack () {
    return `
        <article>
            ${cardGame()}
            ${cardGame()}
        </article>
    `
}

export default cardFrontBack;