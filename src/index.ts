import { initRouter } from "./router";
import { initWelcome } from "./pages/welcome";
import "./components/hands-el"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector(".root");
    if (root) {
        // Inicializa el router
        initRouter();

        // Inicializa el componente de bienvenida
        const welcomeComponent = initWelcome();
        root.appendChild(welcomeComponent);
    }
});
