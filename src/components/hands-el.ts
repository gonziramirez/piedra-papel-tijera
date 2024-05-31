const hands = {
  tijera: require("url:../images/tijera.svg"),
  piedra: require("url:../images/piedra.svg"),
  papel: require("url:../images/papel.svg"),
};

class HandComponent extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    const style = document.createElement("style");
    style.innerHTML = /*css*/ `
            .hand-img{
                width: 125px;
                height: 225px;
            }
        }   `;
    this.render();
    this.shadow.appendChild(style);
  }
  render() {
    const typeAttr = this.getAttribute("type");
    const handAttr: any = this.getAttribute("hand");
    this.shadow.innerHTML = `
          <img class="${typeAttr}" src="${hands[handAttr]}">
          `;
  }
}

customElements.define("hands-el", HandComponent);
