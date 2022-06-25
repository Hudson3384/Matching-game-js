import "./src/components/styles/settings/coolors.css"
import "./src/components/styles/generic/reset.css"
import "./src/components/styles/elements/base.css"

import cardGame from "./src/components/cardGame"
import boardGame from "./src/objects/boardGame"


const $root = document.querySelector('#root')
const $boardGame =  boardGame(3)
$root.insertAdjacentHTML('beforeend',$boardGame)