import "./index.css";

import { Product } from "../../components/ProductCard";
import { products } from "../../utils/produtcsData";

export const Home = () => {
  const produtctsCategory0 = products.filter(
    (element) => element.category === 0
  );
  const produtctsCategory1 = products.filter(
    (element) => element.category === 1
  );
  const produtctsCategory2 = products.filter(
    (element) => element.category === 2
  );

  function scrollProductsCards() {
    let buttonsControl = document.querySelectorAll("[data-control-scroll]");

    for (let index = 0; index < buttonsControl.length; index++) {
      buttonsControl[index].addEventListener("click", function () {
        let scrolArea = buttonsControl[index].getAttribute(
          "data-control-scroll"
        );

        let direction = buttonsControl[index].getAttribute("data-direction");

        let scrollQuatity;
        if (direction == "positive") {
          scrollQuatity = 500;
        } else if (direction == "negative") {
          scrollQuatity = -500;
        }

        document
          .querySelector(`[data-scroll="${scrolArea}"]`)
          .scrollBy(scrollQuatity, 0);
      });
    }
  }

  setTimeout(() => {
    scrollProductsCards();
  }, 0);

  return `
  <main>
    <section class="products-section" id="estofados">
        <div class="container">
          <div class="products-section-header">
            <h2 class="font-2-bold">Estofados</h2>
            <div class="products-section-header-buttons-control-scroll" >
              <button
                class="bt"
                data-control-scroll="0"
                data-direction="negative"
                aria-label="Ver mais produtos à esquerda"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
                class="bt"
                data-control-scroll="0"
                data-direction="positive"
                aria-label="Ver mais produtos à direita"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div class="products-area" data-scroll="0" data-products-filter='0'>
            ${produtctsCategory0.map((element) => Product(element)).join("")}
          </div>
        </div>
      </section>
      <section class="products-section" id="estantes">
        <div class="container">
          <div class="products-section-header">
            <h2 class="font-2-bold">Estantes</h2>
            <div class="products-section-header-buttons-control-scroll" >
              <button
                class="bt"
                data-control-scroll="1"
                data-direction="negative"
                aria-label="Ver mais produtos à esquerda"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
                class="bt"
                data-control-scroll="1"
                data-direction="positive"
                aria-label="Ver mais produtos à direita"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div class="products-area" data-scroll="1" data-products-filter='0'>
            ${produtctsCategory1.map((element) => Product(element)).join("")}
          </div>
        </div>
      </section>
      <section class="products-section" id="decoracoes">
        <div class="container">
          <div class="products-section-header">
            <h2 class="font-2-bold">Decorações</h2>
            <div class="products-section-header-buttons-control-scroll" >
              <button
                class="bt"
                data-control-scroll="2"
                data-direction="negative"
                aria-label="Ver mais produtos à esquerda"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
                class="bt"
                data-control-scroll="2"
                data-direction="positive"
                aria-label="Ver mais produtos à direita"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div class="products-area" data-scroll="2" data-products-filter='0'>
            ${produtctsCategory2.map((element) => Product(element)).join("")}
          </div>
        </div>
      </section>
    </main>  
  `;
};
