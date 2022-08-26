// @ts-check
import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { birds } from "./assets/birds.js";
class SunrunBird extends LitElement {
  static styles = css`
    .container {
      container-type: inline-size;
      container-name: sunrun-bird;
    }

		/* Base Styles */
    .card {
			background-color: var(--content-bg-color);
			color: var(--content-font-color);
      margin: 1rem;
      padding: 1cqi 3cqi;
			border-radius: 1rem 1rem 0 0;
      border: 1px solid black;
			box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .common-name {
			font-family: sans-serif;
      font-size: max(1rem, 5cqi);
      text-transform: capitalize;
      text-align: center;
    }
    .latin-name {
      text-align: center;
      text-transform: capitalize;
      font-style: italic;
      font-size: max(1rem, 3cqi);
    }
    .male-image,
    .group-image,
    .range-image {
      width: 100%;
    }
		.info {
      text-transform: capitalize;
		}
		.description {
			font-family: sans-serif;
			margin-top: 0;
		}

		/* Layout */
		.card {
			display: grid;
		}
    .common-name {
      grid-area: name;
    }
    .latin-name {
      grid-area: latin;
    }
    .male-image {
      grid-area: male;
    }
    .group-image {
      grid-area: group;
    }
    .range-image {
      grid-area: range;
    }
    .info {
      grid-area: info;
    }
    .description {
      grid-area: desc;
    }

    .card {
      grid-template-columns: 3fr 3fr 2fr;
      grid-template-areas:
        "name name name"
        "latin latin latin"
        "male male group"
        "male male range"
        "info desc desc";
      grid-column-gap: 1cqi;
      grid-row-gap: 1cqi;
    }

    @container sunrun-bird (inline-size <= 600px) {
      .description,
      .latin-name,
      .range-image {
        display: none;
      }
      .card {
        grid-template-columns: 1fr 2fr;
        grid-template-areas:
          "name name"
          "male male"
          "group info";
      }
    }

    @container sunrun-bird (inline-size <= 300px) {
      .description,
      .group-image,
      .info,
      .latin-name,
      .range-image {
        display: none;
      }
      .card {
        grid-template-columns: 1fr;
        grid-template-areas:
          "name"
          "male";
      }
    }
  `;
  static properties = {
    name: { type: String },
  };
  constructor() {
    super();
    this.name = "american redstart";
  }
  render() {
    const data = birds[this.name];
    if (!data) {
      return html`<article>BIRD NOT FOUND: ${this.name}</article>`;
    }
    return html`
      <article class="container">
        <div class="card">
          <div class="common-name">${data.name.common}</div>
          <div class="latin-name">${data.name.latin}</div>
          <img
            class="male-image"
            src="./assets/species/${data.name.common}/male.jpg"
          />
          <img
            class="group-image"
            alt="${data.taxonomy.group}"
            title="${data.taxonomy.group}"
            src="./assets/group/${data.taxonomy.group}/image.webp"
          />
          <img
            class="range-image"
            alt="Map of species range map"
            src="./assets/species/${data.name.common}/range.jpg"
          />
          <div class="info">
            <div class="habitat"><strong>Habitat:</strong> ${data.traits.habitat}</div>
            <div class="food"><strong>Food:</strong> ${data.traits.food}</div>
            <div class="nesting"><strong>Nesting:</strong> ${data.traits.nesting}</div>
            <div class="behavior"><strong>Behavior:</strong> ${data.traits.behavior}</div>
            <div class="conservation"><strong>Conservation:</strong> ${data.conservation}</div>
          </div>
          <p class="description">${data.description}</p>
        </div>
      </article>
    `;
  }
}
customElements.define("sunrun-bird", SunrunBird);
