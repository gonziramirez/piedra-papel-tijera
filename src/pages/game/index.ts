import { goTo } from "../../router";

export function initGame(): HTMLElement {
  const playerMove = localStorage.getItem("playerMove");
  const computerMove = localStorage.getItem("computerMove");

  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `
    .game-result-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-image: url('./images/fondo.png');
      background-size: cover;
    }
    .hand {
      width: 200px;
      height: 200px;
      position: absolute;
    }
    .hand.computer {
      top: 0;
      transform: rotate(180deg) translateX(15%);
    }
    .hand.player {
      bottom: 0;
      left: 50%;
      transform: translateX(-20%) translateY(20px);
    }
  `;
  div.className = "game-result-container";
  div.innerHTML = `
    <hands-el class="hand computer" hand="${computerMove}" type="hand-img"></hands-el>
    <hands-el class="hand player" hand="${playerMove}" type="hand-img"></hands-el>
  `;
  div.appendChild(style);

  setTimeout(() => {
    goTo("/results");
  }, 3000);

  return div;
}
