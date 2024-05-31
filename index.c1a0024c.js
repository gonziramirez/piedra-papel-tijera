var e=globalThis,t={},a={},o=e.parcelRequire5feb;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire5feb=o);var n=o.register;function r(){let e=document.createElement("div");e.className="welcome",e.innerHTML=`
      <h1 class="welcome-title">Piedra</h1>
      <h1 class="welcome-title">Papel <strong class="welcome-title-letter">\xf3</strong></h1>
      <h1 class="welcome-title">Tijera</h1>
      <button id="goToInstructionsBtn" class="start-button">Empezar</button>
      <div class="hands">
        <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
        <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
        <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
      </div>
    `;let t=e.querySelector("#goToInstructionsBtn");return t?.addEventListener("click",()=>{c("/instructions")}),e}n("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,o=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)o.set(t[a],{baseUrl:e,path:t[a+1]})}}),n("b7CwH",function(e,t){e.exports=new URL("tijera.6a2fdda1.svg",import.meta.url).toString()}),n("6O4FV",function(e,t){e.exports=new URL("piedra.c88f7ccf.svg",import.meta.url).toString()}),n("gYWi2",function(e,t){e.exports=new URL("papel.5f79bbf0.svg",import.meta.url).toString()}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.c1a0024c.js","cK2FM","tijera.6a2fdda1.svg","lyYKJ","piedra.c88f7ccf.svg","jYzGd","papel.5f79bbf0.svg"]'));const l=["piedra","papel","tijera"],i=[{path:"/welcome",component:r},{path:"/instructions",component:function(){let e=document.createElement("div"),t=document.createElement("style");t.innerHTML=`
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
      
    `,e.className="welcome",e.innerHTML=`
      <h1 class="title-instructions">Instrucci\xf3nes</h1>
      <h2 class="instructions">Presion\xe1 jugar
      y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <button class="button-play">\xa1Jugar!</button>
      <div class="hands">
        <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
        <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
        <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
      </div>
    `;let a=e.querySelector(".button-play");return a?.addEventListener("click",()=>{c("/temporizador")}),e.appendChild(t),e}},{path:"/temporizador",component:function(){let e=document.createElement("div"),t=document.createElement("style");t.innerHTML=`
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
      margin-top: 35vh; /* Ajusta este valor para centrar m\xe1s el c\xedrculo */
    }
    .hands-temporizador {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto; /* Coloca las manos al fondo de la pantalla */
      margin-bottom: -35px; /* Ajusta este valor para esconder m\xe1s las manos abajo */
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
        margin-bottom: 0; /* Ajusta este valor para centrar las manos en pantallas peque\xf1as */
      }
    }
  `,e.className="game-container",e.innerHTML=`
    <div class="circle-container">
      <div class="circle">3</div>
    </div>
    <div class="hands-temporizador">
      <hands-el class="hand" hand="piedra" type="hand-img"></hands-el>
      <hands-el class="hand" hand="papel" type="hand-img"></hands-el>
      <hands-el class="hand" hand="tijera" type="hand-img"></hands-el>
    </div>
  `,e.appendChild(t);let a=e.querySelector(".circle"),o=3,n=!1;a.innerText=o.toString();let r=setInterval(()=>{if(o>0)o--,a.innerText=o.toString();else{if(clearInterval(r),!n){let e=l[Math.floor(Math.random()*l.length)];localStorage.setItem("playerMove",e)}let e=l[Math.floor(Math.random()*l.length)];localStorage.setItem("computerMove",e),c("/game")}},1e3),i=e.querySelectorAll(".hand");return i.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget,a=t.getAttribute("hand");if(a){n=!0,localStorage.setItem("playerMove",a);let e=l[Math.floor(Math.random()*l.length)];localStorage.setItem("computerMove",e),i.forEach(e=>{e.classList.toggle("hand-not-selected",e!==t),e.classList.toggle("hand-selected",e===t)})}})}),e}},{path:"/game",component:function(){let e=localStorage.getItem("playerMove"),t=localStorage.getItem("computerMove"),a=document.createElement("div"),o=document.createElement("style");return o.innerHTML=`
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
  `,a.className="game-result-container",a.innerHTML=`
    <hands-el class="hand computer" hand="${t}" type="hand-img"></hands-el>
    <hands-el class="hand player" hand="${e}" type="hand-img"></hands-el>
  `,a.appendChild(o),setTimeout(()=>{c("/results")},3e3),a}},{path:"/results",component:function(){let e=document.createElement("div"),t=document.createElement("style");t.innerHTML=`
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
  `,e.className="results-container";let a=localStorage.getItem("playerMove"),o=localStorage.getItem("computerMove"),n="",r=parseInt(localStorage.getItem("playerScore")||"0"),l=parseInt(localStorage.getItem("computerScore")||"0");localStorage.getItem("scoreUpdated")?n="piedra"===a&&"tijera"===o||"papel"===a&&"piedra"===o||"tijera"===a&&"papel"===o?"¡Ganaste!":a===o?"¡Empate!":"¡Perdiste!":("piedra"===a&&"tijera"===o||"papel"===a&&"piedra"===o||"tijera"===a&&"papel"===o?(n="¡Ganaste!",r++):a===o?n="¡Empate!":(n="¡Perdiste!",l++),localStorage.setItem("playerScore",r.toString()),localStorage.setItem("computerScore",l.toString()),localStorage.setItem("scoreUpdated","true"),console.log("Puntaje del jugador actualizado en localStorage:",r),console.log("Puntaje de la computadora actualizado en localStorage:",l));let i="";"¡Ganaste!"===n?i="ganaste":"¡Empate!"===n?i="empate":"¡Perdiste!"===n&&(i="perdiste"),e.innerHTML=`
    <div class="result-score-container ${i}">
      <div class="result-text">${n}</div>
      <div class="score-text">Vos: ${r}</div>
      <div class="score-text">Computadora: ${l}</div>
    </div>
    <button class="button-play">\xa1Jugar de nuevo!</button>
  `,e.appendChild(t);let s=e.querySelector(".button-play");return s?.addEventListener("click",()=>{(r>=3||l>=3)&&(localStorage.setItem("playerScore","0"),localStorage.setItem("computerScore","0"),console.log("Los puntajes se han reiniciado")),localStorage.removeItem("playerMove"),localStorage.removeItem("computerMove"),localStorage.removeItem("scoreUpdated"),console.log("Puntaje del jugador antes de reiniciar:",localStorage.getItem("playerScore")),console.log("Puntaje de la computadora antes de reiniciar:",localStorage.getItem("computerScore")),c("/temporizador")}),e}}];function s(e){for(let t of i)if(t.path===e){let e=t.component(),a=document.querySelector(".root");if(a){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(e)}break}}function c(e){history.pushState(null,"",e),s(e)}const d={tijera:o("b7CwH"),piedra:o("6O4FV"),papel:o("gYWi2")};class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.innerHTML=`
            .hand-img{
                width: 125px;
                height: 225px;
            }
        }   `,this.render(),this.shadow.appendChild(e)}render(){let e=this.getAttribute("type"),t=this.getAttribute("hand");this.shadow.innerHTML=`
          <img class="${e}" src="${d[t]}">
          `}}customElements.define("hands-el",p),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".root");if(e){window.addEventListener("popstate",()=>{s(window.location.pathname)}),s(window.location.pathname);let t=r();e.appendChild(t)}});
//# sourceMappingURL=index.c1a0024c.js.map
