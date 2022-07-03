import playerGame from "../../components/playerGame"

function scoreBoard () {
    return `
        ${playerGame('Player 1')}
        ${playerGame('Player 2')}
    `
   
}

export default scoreBoard