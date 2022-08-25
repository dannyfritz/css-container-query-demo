// @ts-check
import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { birds } from "./assets/birds.js";
class SunrunBird extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;
  static properties = {
    name: { type: String },
  };
  constructor() {
    super();
    this.name = "wood duck";
  }
  render() {
    const data = birds[this.name];
		if (!data) {
			return html`<article>BIRD NOT FOUND: ${this.name}</article>`;
		}
    return html`<article>
			<img src="./assets/group/${data.taxonomy.group}/image.webp" />
			<img src="./assets/species/${data.name.common}/male.jpg" />
			<img src="./assets/species/${data.name.common}/range.jpg" />
      <div class="common-name">${data.name.common}</div>
      <div class="group">${data.taxonomy.group}</div>
      <div class="latin-name">${data.name.latin}</div>
      <div class="taxonomy-order">${data.taxonomy.order.latin}</div>
      <div class="taxonomy-family">${data.taxonomy.family.latin}</div>
      <div class="habitat">${data.traits.habitat}</div>
      <div class="food">${data.traits.food}</div>
      <div class="nesting">${data.traits.nesting}</div>
      <div class="behavior">${data.traits.behavior}</div>
      <div class="conservation">${data.conservation}</div>
    </article>`;
  }
}
customElements.define("sunrun-bird", SunrunBird);
