import { goTo } from "../../router";

export function initResults(): HTMLElement {
  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `
    .results-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-image: url('./images/fondo.png');
      background-size: cover;
    }
    .result-text {
      font-size: 40px;
      margin: 20px 0;
    }
    .score-text {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .result-score-container {
      border: 10px solid black;
      padding: 20px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .result-score-container.ganaste {
      background-color: #009048;
      color: white;
    }
    .result-score-container.empate {
      background-color: lightgray;
      color: black;
    }
    .result-score-container.perdiste {
      background-color: #FF4B25;
      color: white;
    }
    .button-play {
      font-weight: 400;
      font-size: 45px;
      font-family: Odibee Sans;
      color: #d8fcfc;
      border: 10px solid #001997;
      border-radius: 10px;
      background-color: #006cfc;
      text-align: center;
      padding: 10px 80px;
      cursor: pointer;
      margin-top: 50px;
    }
    .button-play:hover {
      transition: 0.5s;
      color: white;
      background-color: #009048;
      border: 10px solid #004221;
    }
  `;
  div.className = "results-container";

  const playerMove = localStorage.getItem("playerMove");
  const computerMove = localStorage.getItem("computerMove");

  let resultText = "";
  let playerScore = parseInt(localStorage.getItem("playerScore") || "0");
  let computerScore = parseInt(localStorage.getItem("computerScore") || "0");

  // Verificar si los puntajes ya fueron actualizados
  if (!localStorage.getItem("scoreUpdated")) {
    if (
      (playerMove === "piedra" && computerMove === "tijera") ||
      (playerMove === "papel" && computerMove === "piedra") ||
      (playerMove === "tijera" && computerMove === "papel")
    ) {
      resultText = "¡Ganaste!";
      playerScore++;
    } else if (playerMove === computerMove) {
      resultText = "¡Empate!";
    } else {
      resultText = "¡Perdiste!";
      computerScore++;
    }

    // Actualizar puntajes en el almacenamiento local
    localStorage.setItem("playerScore", playerScore.toString());
    localStorage.setItem("computerScore", computerScore.toString());
    localStorage.setItem("scoreUpdated", "true");

    console.log("Puntaje del jugador actualizado en localStorage:", playerScore);
    console.log("Puntaje de la computadora actualizado en localStorage:", computerScore);
  } else {
    // Leer el texto del resultado anterior si ya se actualizaron los puntajes
    if (
      (playerMove === "piedra" && computerMove === "tijera") ||
      (playerMove === "papel" && computerMove === "piedra") ||
      (playerMove === "tijera" && computerMove === "papel")
    ) {
      resultText = "¡Ganaste!";
    } else if (playerMove === computerMove) {
      resultText = "¡Empate!";
    } else {
      resultText = "¡Perdiste!";
    }
  }

  // Determinar la clase del contenedor basado en el resultado
  let resultClass = "";
  if (resultText === "¡Ganaste!") {
    resultClass = "ganaste";
  } else if (resultText === "¡Empate!") {
    resultClass = "empate";
  } else if (resultText === "¡Perdiste!") {
    resultClass = "perdiste";
  }

  div.innerHTML = `
    <div class="result-score-container ${resultClass}">
      <div class="result-text">${resultText}</div>
      <div class="score-text">Vos: ${playerScore}</div>
      <div class="score-text">Computadora: ${computerScore}</div>
    </div>
    <button class="button-play">¡Jugar de nuevo!</button>
  `;
  div.appendChild(style);

  const buttonPlayEl = div.querySelector(".button-play");
  buttonPlayEl?.addEventListener("click", () => {
    if (playerScore >= 3 || computerScore >= 3) {
      // Resetear los puntajes si alguno ha alcanzado 3 o más
      localStorage.setItem("playerScore", "0");
      localStorage.setItem("computerScore", "0");
      console.log("Los puntajes se han reiniciado");
    }
    localStorage.removeItem("playerMove");
    localStorage.removeItem("computerMove");
    localStorage.removeItem("scoreUpdated");
    console.log("Puntaje del jugador antes de reiniciar:", localStorage.getItem("playerScore"));
    console.log("Puntaje de la computadora antes de reiniciar:", localStorage.getItem("computerScore"));
    goTo("/temporizador");
  });

  return div;
}
