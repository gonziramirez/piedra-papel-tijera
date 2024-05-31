// welcome.ts
import { goTo } from "../../router";

export function initInstructions(): HTMLElement {
    const div = document.createElement("div");
    const style = document.createElement("style")
    style.innerHTML = `
      .instructions{
        font-weight: 600;
        font-size: 40px;
        text-align: center;
        width: 317px;
        height: 240px;
      }
      .button-play {
        font-weight: 400;
        font-size: 45px;
        font-family: Odibee Sans;
        color: #d8fcfc;
        border: 10px solid #001997;
        border-radius: 10px;
        background-color: #006cfc;
        font-family: Odibee Sans;
        text-align: center;
        padding: 10px 80px;
        cursor: pointer;
        margin: 50px 0;
      }
      
      .button-play:hover {
        transition: 0.5s;
        color: white;
        background-color: #009048;
        border: 10px solid #004221;
      }
      .title-instructions{
        font-size: 60px;
        color: #009048;
      }
      
    `
    div.className = "welcome";
    
    div.innerHTML = `
      <h1 class="title-instructions">Instrucciónes</h1>
      <h2 class="instructions">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <button class="button-play">¡Jugar!</button>
      <div class="hands">
        <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
        <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
        <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
      </div>
    `;
    const buttonPlayEl = div.querySelector(".button-play");
    buttonPlayEl?.addEventListener("click", () => {
        goTo("/temporizador");
    });



      div.appendChild(style)

    return div;
}
