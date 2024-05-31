// welcome.ts
import { goTo } from "../../router";

export function initWelcome(): HTMLElement {
    const div = document.createElement("div");
    div.className = "welcome";
    div.innerHTML = `
      <h1 class="welcome-title">Piedra</h1>
      <h1 class="welcome-title">Papel <strong class="welcome-title-letter">ó</strong></h1>
      <h1 class="welcome-title">Tijera</h1>
      <button id="goToInstructionsBtn" class="start-button">Empezar</button>
      <div class="hands">
        <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
        <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
        <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
      </div>
    `;

    const goToInstructionsBtn = div.querySelector("#goToInstructionsBtn");
    goToInstructionsBtn?.addEventListener("click", () => {
        goTo("/instructions");
    });

    return div;
}
