import "./src/components/styles/settings/coolors.css"
import "./src/components/styles/generic/reset.css"
import "./src/components/styles/elements/base.css"

import boardGame from "./src/objects/boardGame"
import playerGame from "./src/components/playerGame"


const $root = document.querySelector('#root')

$root.insertAdjacentHTML('beforeend',` 
    ${playerGame('Player 1')}
    ${playerGame('Player 2')}
    ${boardGame(6)}
`)