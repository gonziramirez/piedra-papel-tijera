import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initTemporizador } from "./pages/temporizador";
import { initGame } from "./pages/game";
import { initResults } from "./pages/results";

const routes = [
    {
      path: "/welcome",
      component: initWelcome,
    },
    {
      path: "/instructions",
      component: initInstructions,
    },
    {
        path: "/temporizador",
        component: initTemporizador,
      },
      {
        path: "/game",
        component: initGame,
      },
      {
        path: "/results",
        component: initResults,
      },
    // Agrega más rutas según sea necesario
];

function handleRoute(path: string) {
    for (const route of routes) {
        if (route.path === path) {
            const el = route.component();
            const root = document.querySelector(".root");
            if (root) {
                while (root.firstChild) {
                    root.removeChild(root.firstChild);
                }
                root.appendChild(el);
            }
            break; // Rompe el bucle una vez que encuentra la ruta
        }
    }
}

export function goTo(path: string) {
    // Actualiza la URL sin recargar la página
    history.pushState(null, "", path);
    // Llama a la función para manejar la ruta actual
    handleRoute(path);
}

export function initRouter() {
    window.addEventListener("popstate", () => {
        handleRoute(window.location.pathname);
    });

    handleRoute(window.location.pathname);
}
