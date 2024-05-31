import { goTo } from "../../router";

export function initTemporizador(): HTMLElement {
  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `
    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Centra todo verticalmente */
      height: 100vh;
      background-image: url('./images/fondo.png');
      background-size: cover;
    }
    .circle-container {
      width: 243px;
      height: 243px;
      border: 20px solid black;
      border-radius: 50%;
      color: black;
      font-size: 100px;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 35vh; /* Ajusta este valor para centrar más el círculo */
    }
    .hands-temporizador {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto; /* Coloca las manos al fondo de la pantalla */
      margin-bottom: -35px; /* Ajusta este valor para esconder más las manos abajo */
    }
    .hand {
      cursor: pointer;
      width: 200px;
      height: 200px;
      transition: transform 0.3s, opacity 0.3s;
    }
    .hand-selected {
      transform: translateY(-50px);
    }
    .hand-not-selected {
      opacity: 0.5;
    }
    @media (max-width: 460px) {
      .hand {
        width: 150px;
        height: 150px;
      }
      .hands-temporizador {
        margin-bottom: 0; /* Ajusta este valor para centrar las manos en pantallas pequeñas */
      }
    }
  `;
  div.className = "game-container";
  div.innerHTML = `
    <div class="circle-container">
      <div class="circle">3</div>
    </div>
    <div class="hands-temporizador">
      <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
      <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
      <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
    </div>
  `;
  div.appendChild(style);

  const circle = div.querySelector(".circle") as HTMLElement;
  let count = 3;
  let playerMoveSelected = false;
  circle.innerText = count.toString();

  const interval = setInterval(() => {
    if (count > 0) {
      count--;
      circle.innerText = count.toString();
    } else {
      clearInterval(interval);
      if (!playerMoveSelected) {
        const randomPlayerMove = jugada[Math.floor(Math.random() * jugada.length)];
        localStorage.setItem("playerMove", randomPlayerMove);
      }
      const jugadaComputadora = jugada[Math.floor(Math.random() * jugada.length)];
      localStorage.setItem("computerMove", jugadaComputadora);
      goTo("/game"); // Redirige solo después de que el temporizador ha terminado
    }
  }, 1000);

  const handsEls = div.querySelectorAll(".hand");

  handsEls.forEach(hand => {
    hand.addEventListener("click", (event) => {
      const selectedHand = event.currentTarget as HTMLElement;
      const seleccionarJugada = selectedHand.getAttribute("hand");

      if (seleccionarJugada) {
        playerMoveSelected = true;
        localStorage.setItem("playerMove", seleccionarJugada);
        const jugadaComputadora = jugada[Math.floor(Math.random() * jugada.length)];
        localStorage.setItem("computerMove", jugadaComputadora);

        handsEls.forEach(hand => {
          hand.classList.toggle("hand-not-selected", hand !== selectedHand);
          hand.classList.toggle("hand-selected", hand === selectedHand);
        });
      }
    });
  });

  return div;
}

const jugada = ["piedra", "papel", "tijera"];
