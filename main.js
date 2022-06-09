import "./src/components/styles/settings/coolors.css"
import "./src/components/styles/generic/reset.css"
import "./src/components/styles/elements/base.css"

import cardGame from "./src/components/cardGame"


const $root = document.querySelector('#root')
const $cardGame =  cardGame()
$root.insertAdjacentHTML('beforeend',$cardGame)