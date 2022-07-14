import "./style.css";

function cardGame (icon = "alura-pixel",alt ="logo da Alura Cursos") {
    return `
    <article class="card-game">
        <img src="images/${icon}.png" alt=${alt}>
    </article>
    `;
}

export default cardGame;