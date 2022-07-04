import playerGame from "../../components/playerGame";
import "./style.css"

function scoreBoard () {
    return `<header class="score-board">
                ${playerGame('Player 1')}
                ${playerGame('Player 2')}
            </header>
        
    `
   
}

export default scoreBoard;