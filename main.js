import "./src/components/styles/settings/coolors.css"
import "./src/components/styles/generic/reset.css"
import "./src/components/styles/elements/base.css"

import boardGame from "./src/objects/boardGame"
import scoreBoard from "./src/objects/scoreBoard"


const $root = document.querySelector('#root')

$root.insertAdjacentHTML('beforeend',` 
    ${scoreBoard()}
    ${boardGame(6)}
`)