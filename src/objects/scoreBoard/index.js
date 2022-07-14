import playerGame from "../../components/playerGame";
import scorePlayer from "../../components/scorePlayer";
import VSplayer from "../../components/VSplayer";
import "./style.css"

function scoreBoard () {
    return `<header class="score-board">
                ${playerGame('Player 1')}
                ${scorePlayer()}
                ${VSplayer()}
                ${scorePlayer()}
                ${playerGame('Player 2')}
            </header>
        
    `
   
}

export default scoreBoard;